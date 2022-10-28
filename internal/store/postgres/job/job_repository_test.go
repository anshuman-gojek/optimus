//go:build !unit_test

package job_test

import (
	"context"
	"testing"

	"github.com/stretchr/testify/assert"
	"gorm.io/gorm"

	"github.com/odpf/optimus/core/job"
	"github.com/odpf/optimus/core/job/dto"
	"github.com/odpf/optimus/core/tenant"
	postgres "github.com/odpf/optimus/internal/store/postgres/job"
	tenantPostgres "github.com/odpf/optimus/internal/store/postgres/tenant"
	"github.com/odpf/optimus/models"
	"github.com/odpf/optimus/tests/setup"
)

func TestPostgresJobRepository(t *testing.T) {
	ctx := context.Background()

	proj, _ := tenant.NewProject("test-proj",
		map[string]string{
			"bucket":                     "gs://some_folder-2",
			tenant.ProjectSchedulerHost:  "host",
			tenant.ProjectStoragePathKey: "gs://location",
		})
	namespace, _ := tenant.NewNamespace("test-ns", proj.Name(),
		map[string]string{
			"bucket": "gs://ns_bucket",
		})
	otherNamespace, _ := tenant.NewNamespace("other-ns", proj.Name(),
		map[string]string{
			"bucket": "gs://ns_bucket",
		})
	sampleTenant, _ := tenant.NewTenant(proj.Name().String(), namespace.Name().String())

	dbSetup := func() *gorm.DB {
		dbConn := setup.TestDB()
		setup.TruncateTables(dbConn)

		projRepo := tenantPostgres.NewProjectRepository(dbConn)
		assert.Nil(t, projRepo.Save(ctx, proj))

		namespaceRepo := tenantPostgres.NewNamespaceRepository(dbConn)
		assert.Nil(t, namespaceRepo.Save(ctx, namespace))
		assert.Nil(t, namespaceRepo.Save(ctx, otherNamespace))

		return dbConn
	}

	jobVersion := 1
	jobOwner := "dev_test"
	jobDescription := "sample job"
	jobRetry := job.NewRetry(5, 0, false)
	jobSchedule := job.NewSchedule("2022-10-01", "", "", false, false, jobRetry)
	jobWindow, _ := models.NewWindow(jobVersion, "d", "24h", "24h")
	jobTaskConfig := job.NewConfig(map[string]string{"sample_task_key": "sample_value"})
	jobTask := job.NewTask("bq2bq", jobTaskConfig)

	t.Run("Save", func(t *testing.T) {
		t.Run("inserts job spec", func(t *testing.T) {
			db := dbSetup()

			jobLabels := map[string]string{
				"environment": "integration",
			}
			jobHookConfig := job.NewConfig(map[string]string{"sample_hook_key": "sample_value"})
			jobHooks := []*job.Hook{job.NewHook("sample_hook", jobHookConfig)}
			jobAlertConfig := job.NewConfig(map[string]string{"sample_alert_key": "sample_value"})
			jobAlerts := []*job.Alert{job.NewAlert(job.SLAMissEvent, []string{"sample-channel"}, jobAlertConfig.Config())}
			jobDependencies := job.NewDependencySpec([]string{"job-upstream-1", "job-upstream-2"}, nil)
			jobAssets := map[string]string{"sample-asset": "value-asset"}
			resourceRequestConfig := job.NewResourceConfig("250m", "128Mi")
			resourceLimitConfig := job.NewResourceConfig("500m", "1024Mi")
			resourceMetadata := job.NewResourceMetadata(resourceRequestConfig, resourceLimitConfig)
			jobMetadata := job.NewMetadata(resourceMetadata, map[string]string{"scheduler_config_key": "value"})

			jobSpecA, err := job.NewJobSpec(sampleTenant, jobVersion, "sample-job-A", jobOwner, jobDescription, jobLabels, jobSchedule,
				jobWindow, jobTask, jobHooks, jobAlerts, jobDependencies, jobAssets, jobMetadata)
			assert.Nil(t, err)
			jobA := job.NewJob(jobSpecA, "dev.resource.sample_a", []string{"resource-3"})

			jobSpecB, err := job.NewJobSpec(sampleTenant, jobVersion, "sample-job-B", jobOwner, jobDescription, jobLabels, jobSchedule,
				jobWindow, jobTask, jobHooks, jobAlerts, nil, jobAssets, jobMetadata)
			assert.Nil(t, err)
			jobB := job.NewJob(jobSpecB, "dev.resource.sample_b", nil)

			jobs := []*job.Job{jobA, jobB}

			jobRepo := postgres.NewJobRepository(db)
			assert.Nil(t, jobRepo.Save(ctx, jobs))
		})
		t.Run("inserts job spec with optional fields empty", func(t *testing.T) {
			db := dbSetup()

			jobSpecA, err := job.NewJobSpec(sampleTenant, jobVersion, "sample-job-A", jobOwner, jobDescription, nil, jobSchedule,
				jobWindow, jobTask, nil, nil, nil, nil, nil)
			assert.Nil(t, err)
			jobA := job.NewJob(jobSpecA, "dev.resource.sample_a", []string{"resource-3"})

			jobs := []*job.Job{jobA}

			jobRepo := postgres.NewJobRepository(db)
			assert.Nil(t, jobRepo.Save(ctx, jobs))
		})
		t.Run("returns error if job already exist", func(t *testing.T) {
			db := dbSetup()

			jobSpecA, err := job.NewJobSpec(sampleTenant, jobVersion, "sample-job-A", jobOwner, jobDescription, nil, jobSchedule,
				jobWindow, jobTask, nil, nil, nil, nil, nil)
			assert.Nil(t, err)
			jobA := job.NewJob(jobSpecA, "dev.resource.sample_a", []string{"resource-3"})

			jobRepo := postgres.NewJobRepository(db)
			err = jobRepo.Save(ctx, []*job.Job{jobA})
			assert.Nil(t, err)

			err = jobRepo.Save(ctx, []*job.Job{jobA})
			assert.NotNil(t, err)
		})
	})

	t.Run("GetJobWithDependencies", func(t *testing.T) {
		t.Run("returns job with inferred dependencies", func(t *testing.T) {
			db := dbSetup()

			tenantDetails, err := tenant.NewTenantDetails(proj, namespace)
			assert.Nil(t, err)

			jobSpecA, err := job.NewJobSpec(sampleTenant, jobVersion, "sample-job-A", jobOwner, jobDescription, nil, jobSchedule,
				jobWindow, jobTask, nil, nil, nil, nil, nil)
			assert.Nil(t, err)
			jobA := job.NewJob(jobSpecA, "dev.resource.sample_a", []string{"dev.resource.sample_b"})

			jobSpecB, err := job.NewJobSpec(sampleTenant, jobVersion, "sample-job-B", jobOwner, jobDescription, nil, jobSchedule,
				jobWindow, jobTask, nil, nil, nil, nil, nil)
			assert.Nil(t, err)
			jobB := job.NewJob(jobSpecB, "dev.resource.sample_b", nil)

			jobRepo := postgres.NewJobRepository(db)
			err = jobRepo.Save(ctx, []*job.Job{jobA, jobB})
			assert.Nil(t, err)

			dependencies, err := jobRepo.GetJobWithDependencies(ctx, proj.Name(), []job.Name{jobSpecA.Name()})
			assert.Equal(t, jobSpecA.Name(), dependencies[0].Name())
			assert.Equal(t, dto.NewDependency(jobSpecB.Name().String(), tenantDetails.ToTenant(), "", jobB.Destination()), dependencies[0].Dependencies()[0])
		})
		t.Run("returns job with static dependencies", func(t *testing.T) {
			db := dbSetup()

			tenantDetails, err := tenant.NewTenantDetails(proj, namespace)
			assert.Nil(t, err)

			jobADependencies := job.NewDependencySpec([]string{"sample-job-B"}, nil)
			jobSpecA, err := job.NewJobSpec(sampleTenant, jobVersion, "sample-job-A", jobOwner, jobDescription, nil, jobSchedule,
				jobWindow, jobTask, nil, nil, jobADependencies, nil, nil)
			jobA := job.NewJob(jobSpecA, "dev.resource.sample_a", nil)

			jobSpecB, err := job.NewJobSpec(sampleTenant, jobVersion, "sample-job-B", jobOwner, jobDescription, nil, jobSchedule,
				jobWindow, jobTask, nil, nil, nil, nil, nil)
			jobB := job.NewJob(jobSpecB, "dev.resource.sample_b", nil)

			jobRepo := postgres.NewJobRepository(db)
			err = jobRepo.Save(ctx, []*job.Job{jobA, jobB})
			assert.Nil(t, err)

			dependencies, err := jobRepo.GetJobWithDependencies(ctx, proj.Name(), []job.Name{jobSpecA.Name()})
			assert.Equal(t, jobSpecA.Name(), dependencies[0].Name())
			assert.Equal(t, dto.NewDependency(jobSpecB.Name().String(), tenantDetails.ToTenant(), "", jobB.Destination()), dependencies[0].Dependencies()[0])
		})
		t.Run("returns job with static and inferred dependencies", func(t *testing.T) {
			db := dbSetup()

			tenantDetails, err := tenant.NewTenantDetails(proj, namespace)
			assert.Nil(t, err)

			jobADependencies := job.NewDependencySpec([]string{"test-proj/sample-job-B"}, nil)
			jobSpecA, err := job.NewJobSpec(sampleTenant, jobVersion, "sample-job-A", jobOwner, jobDescription, nil, jobSchedule,
				jobWindow, jobTask, nil, nil, jobADependencies, nil, nil)
			jobA := job.NewJob(jobSpecA, "dev.resource.sample_a", []string{"dev.resource.sample_c"})

			jobSpecB, err := job.NewJobSpec(sampleTenant, jobVersion, "sample-job-B", jobOwner, jobDescription, nil, jobSchedule,
				jobWindow, jobTask, nil, nil, nil, nil, nil)
			jobB := job.NewJob(jobSpecB, "dev.resource.sample_b", nil)

			jobSpecC, err := job.NewJobSpec(sampleTenant, jobVersion, "sample-job-C", jobOwner, jobDescription, nil, jobSchedule,
				jobWindow, jobTask, nil, nil, nil, nil, nil)
			jobC := job.NewJob(jobSpecC, "dev.resource.sample_c", nil)

			jobRepo := postgres.NewJobRepository(db)
			err = jobRepo.Save(ctx, []*job.Job{jobA, jobB, jobC})
			assert.Nil(t, err)

			expectedDependencies := []*dto.Dependency{
				dto.NewDependency(jobSpecB.Name().String(), tenantDetails.ToTenant(), "", jobB.Destination()),
				dto.NewDependency(jobSpecC.Name().String(), tenantDetails.ToTenant(), "", jobC.Destination()),
			}

			dependencies, err := jobRepo.GetJobWithDependencies(ctx, proj.Name(), []job.Name{jobSpecA.Name()})
			assert.Nil(t, err)
			assert.Equal(t, jobSpecA.Name(), dependencies[0].Name())
			assert.Equal(t, expectedDependencies, dependencies[0].Dependencies())
		})
	})
}
