package bigquery_test

import (
	"context"
	"errors"
	"testing"

	bq "cloud.google.com/go/bigquery"
	"github.com/stretchr/testify/assert"
	"github.com/stretchr/testify/mock"
	"google.golang.org/api/googleapi"

	"github.com/odpf/optimus/core/resource"
	"github.com/odpf/optimus/core/tenant"
	"github.com/odpf/optimus/ext/store/bigquery"
)

func TestViewHandle(t *testing.T) {
	ctx := context.Background()
	bqStore := resource.BigQuery
	tnnt, _ := tenant.NewTenant("proj", "ns")
	metadata := resource.Metadata{
		Version:     1,
		Description: "resource description",
		Labels:      map[string]string{"owner": "optimus"},
	}

	t.Run("Create", func(t *testing.T) {
		t.Run("returns error when cannot convert spec", func(t *testing.T) {
			v := new(mockBigQueryTable)
			vHandle := bigquery.NewViewHandle(v)

			spec := map[string]any{"description": []string{"a", "b"}}
			res, err := resource.NewResource("proj.dataset.view1", resource.KindView, bqStore, tnnt, &metadata, spec)
			assert.Nil(t, err)

			err = vHandle.Create(ctx, res)
			assert.NotNil(t, err)
			assert.EqualError(t, err, "invalid argument for entity resource: not able to decode "+
				"spec for proj.dataset.view1")
		})
		t.Run("returns error when view already present on bigquery", func(t *testing.T) {
			bqErr := &googleapi.Error{Code: 409, Message: "Already Exists project.dataset.view1"}
			v := new(mockBigQueryTable)
			v.On("Create", ctx, mock.Anything).Return(bqErr)
			defer v.AssertExpectations(t)

			vHandle := bigquery.NewViewHandle(v)

			spec := map[string]any{"description": "test create"}
			res, err := resource.NewResource("proj.dataset.view1", resource.KindView, bqStore, tnnt, &metadata, spec)
			assert.Nil(t, err)

			err = vHandle.Create(ctx, res)
			assert.NotNil(t, err)
			assert.EqualError(t, err, "resource already exists for entity resource_view: view already "+
				"exists on bigquery: proj.dataset.view1")
		})
		t.Run("returns error when bigquery returns error", func(t *testing.T) {
			v := new(mockBigQueryTable)
			v.On("Create", ctx, mock.Anything).Return(errors.New("some error"))
			defer v.AssertExpectations(t)

			vHandle := bigquery.NewViewHandle(v)

			spec := map[string]any{"description": "test create"}
			res, err := resource.NewResource("proj.dataset.view1", resource.KindView, bqStore, tnnt, &metadata, spec)
			assert.Nil(t, err)

			err = vHandle.Create(ctx, res)
			assert.NotNil(t, err)
			assert.EqualError(t, err, "internal error for entity resource_view: failed to create "+
				"resource proj.dataset.view1")
		})
		t.Run("successfully creates the resource", func(t *testing.T) {
			v := new(mockBigQueryTable)
			v.On("Create", ctx, mock.Anything).Return(nil)
			defer v.AssertExpectations(t)

			vHandle := bigquery.NewViewHandle(v)

			spec := map[string]any{"description": "test create"}
			res, err := resource.NewResource("proj.dataset.view1", resource.KindView, bqStore, tnnt, &metadata, spec)
			assert.Nil(t, err)

			err = vHandle.Create(ctx, res)
			assert.Nil(t, err)
		})
	})
	t.Run("Update", func(t *testing.T) {
		t.Run("returns error when cannot convert spec", func(t *testing.T) {
			v := new(mockBigQueryTable)
			vHandle := bigquery.NewViewHandle(v)

			spec := map[string]any{"description": []string{"a", "b"}}
			res, err := resource.NewResource("proj.dataset.view1", resource.KindView, bqStore, tnnt, &metadata, spec)
			assert.Nil(t, err)

			err = vHandle.Update(ctx, res)
			assert.NotNil(t, err)
			assert.EqualError(t, err, "invalid argument for entity resource: not able to decode spec "+
				"for proj.dataset.view1")
		})
		t.Run("returns error when view not present on bigquery", func(t *testing.T) {
			bqErr := &googleapi.Error{Code: 404}
			v := new(mockBigQueryTable)
			v.On("Update", ctx, mock.Anything, "").Return(nil, bqErr)
			defer v.AssertExpectations(t)

			vHandle := bigquery.NewViewHandle(v)

			spec := map[string]any{"description": "test update"}
			res, err := resource.NewResource("proj.dataset.view1", resource.KindView, bqStore, tnnt, &metadata, spec)
			assert.Nil(t, err)

			err = vHandle.Update(ctx, res)
			assert.NotNil(t, err)
			assert.EqualError(t, err, "not found for entity resource_view: failed to update dataset in "+
				"bigquery for proj.dataset.view1")
		})
		t.Run("returns error when bigquery returns error", func(t *testing.T) {
			v := new(mockBigQueryTable)
			v.On("Update", ctx, mock.Anything, "").Return(nil, errors.New("some error"))
			defer v.AssertExpectations(t)

			vHandle := bigquery.NewViewHandle(v)

			spec := map[string]any{"description": "test update"}
			res, err := resource.NewResource("proj.dataset.view1", resource.KindView, bqStore, tnnt, &metadata, spec)
			assert.Nil(t, err)

			err = vHandle.Update(ctx, res)
			assert.NotNil(t, err)
			assert.EqualError(t, err, "internal error for entity resource_view: failed to update resource on "+
				"bigquery for proj.dataset.view1")
		})
		t.Run("successfully updates the resource", func(t *testing.T) {
			meta := &bq.TableMetadata{
				Description: "test update",
			}
			v := new(mockBigQueryTable)
			v.On("Update", ctx, mock.Anything, "").Return(meta, nil)
			defer v.AssertExpectations(t)

			vHandle := bigquery.NewViewHandle(v)

			spec := map[string]any{"description": "test update"}
			res, err := resource.NewResource("proj.dataset.view1", resource.KindView, bqStore, tnnt, &metadata, spec)
			assert.Nil(t, err)

			err = vHandle.Update(ctx, res)
			assert.Nil(t, err)
		})
	})
}
