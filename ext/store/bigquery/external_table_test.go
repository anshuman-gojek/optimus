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

func TestExternalTableHandle(t *testing.T) {
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
			et := new(mockBigQueryTable)
			etHandle := bigquery.NewExternalTableHandle(et)

			spec := map[string]any{"description": []string{"a", "b"}}
			res, err := resource.NewResource("proj.dataset.extTable1", resource.KindExternalTable, bqStore, tnnt, &metadata, spec)
			assert.Nil(t, err)

			err = etHandle.Create(ctx, res)
			assert.NotNil(t, err)
			assert.EqualError(t, err, "invalid argument for entity resource: not able to decode spec "+
				"for proj.dataset.extTable1")
		})
		t.Run("returns error when external table already present on bigquery", func(t *testing.T) {
			bqErr := &googleapi.Error{Code: 409, Message: "Already Exists project.dataset.extTable1"}
			et := new(mockBigQueryTable)
			et.On("Create", ctx, mock.Anything).Return(bqErr)
			defer et.AssertExpectations(t)

			etHandle := bigquery.NewExternalTableHandle(et)

			spec := map[string]any{"description": "test create"}
			res, err := resource.NewResource("proj.dataset.extTable1", resource.KindExternalTable, bqStore, tnnt, &metadata, spec)
			assert.Nil(t, err)

			err = etHandle.Create(ctx, res)
			assert.NotNil(t, err)
			assert.EqualError(t, err, "resource already exists for entity resource_external_table: external "+
				"table already exists on bigquery: proj.dataset.extTable1")
		})
		t.Run("returns error when bigquery returns error", func(t *testing.T) {
			et := new(mockBigQueryTable)
			et.On("Create", ctx, mock.Anything).Return(errors.New("some error"))
			defer et.AssertExpectations(t)

			etHandle := bigquery.NewExternalTableHandle(et)

			spec := map[string]any{"description": "test create"}
			res, err := resource.NewResource("proj.dataset.extTable1", resource.KindExternalTable, bqStore, tnnt, &metadata, spec)
			assert.Nil(t, err)

			err = etHandle.Create(ctx, res)
			assert.NotNil(t, err)
			assert.EqualError(t, err, "internal error for entity resource_external_table: failed to create "+
				"external table proj.dataset.extTable1")
		})
		t.Run("successfully creates the resource", func(t *testing.T) {
			et := new(mockBigQueryTable)
			et.On("Create", ctx, mock.Anything).Return(nil)
			defer et.AssertExpectations(t)

			etHandle := bigquery.NewExternalTableHandle(et)

			spec := map[string]any{"description": "test create"}
			res, err := resource.NewResource("proj.dataset.extTable1", resource.KindExternalTable, bqStore, tnnt, &metadata, spec)
			assert.Nil(t, err)

			err = etHandle.Create(ctx, res)
			assert.Nil(t, err)
		})
	})
	t.Run("Update", func(t *testing.T) {
		t.Run("returns error when cannot convert spec", func(t *testing.T) {
			et := new(mockBigQueryTable)
			etHandle := bigquery.NewExternalTableHandle(et)

			spec := map[string]any{"description": []string{"a", "b"}}
			res, err := resource.NewResource("proj.dataset.extTable1", resource.KindExternalTable, bqStore, tnnt, &metadata, spec)
			assert.Nil(t, err)

			err = etHandle.Update(ctx, res)
			assert.NotNil(t, err)
			assert.EqualError(t, err, "invalid argument for entity resource: not able to decode spec "+
				"for proj.dataset.extTable1")
		})
		t.Run("returns error when external table not present on bigquery", func(t *testing.T) {
			bqErr := &googleapi.Error{Code: 404}
			et := new(mockBigQueryTable)
			et.On("Update", ctx, mock.Anything, "").Return(nil, bqErr)
			defer et.AssertExpectations(t)

			etHandle := bigquery.NewExternalTableHandle(et)

			spec := map[string]any{"description": "test update"}
			res, err := resource.NewResource("proj.dataset.extTable1", resource.KindExternalTable, bqStore, tnnt, &metadata, spec)
			assert.Nil(t, err)

			err = etHandle.Update(ctx, res)
			assert.NotNil(t, err)
			assert.EqualError(t, err, "not found for entity resource_external_table: failed to update "+
				"external_table in bigquery for proj.dataset.extTable1")
		})
		t.Run("returns error when bigquery returns error", func(t *testing.T) {
			et := new(mockBigQueryTable)
			et.On("Update", ctx, mock.Anything, "").Return(nil, errors.New("some error"))
			defer et.AssertExpectations(t)

			etHandle := bigquery.NewExternalTableHandle(et)

			spec := map[string]any{"description": "test update"}
			res, err := resource.NewResource("proj.dataset.extTable1", resource.KindExternalTable, bqStore, tnnt, &metadata, spec)
			assert.Nil(t, err)

			err = etHandle.Update(ctx, res)
			assert.NotNil(t, err)
			assert.EqualError(t, err, "internal error for entity resource_external_table: failed to update "+
				"external_table on bigquery for proj.dataset.extTable1")
		})
		t.Run("successfully updates the resource", func(t *testing.T) {
			meta := &bq.TableMetadata{
				Description: "test update",
			}
			et := new(mockBigQueryTable)
			et.On("Update", ctx, mock.Anything, "").Return(meta, nil)
			defer et.AssertExpectations(t)

			etHandle := bigquery.NewExternalTableHandle(et)

			spec := map[string]any{"description": "test update"}
			res, err := resource.NewResource("proj.dataset.extTable1", resource.KindExternalTable, bqStore, tnnt, &metadata, spec)
			assert.Nil(t, err)

			err = etHandle.Update(ctx, res)
			assert.Nil(t, err)
		})
	})
}
