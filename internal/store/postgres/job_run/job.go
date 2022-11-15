package job_run

import (
	"context"
	"encoding/json"
	"time"

	"github.com/google/uuid"
	"github.com/lib/pq"
	"gorm.io/datatypes"
	"gorm.io/gorm"

	"github.com/odpf/optimus/core/job_run"
	"github.com/odpf/optimus/core/tenant"
	"github.com/odpf/optimus/internal/errors"
)

type JobRepository struct {
	db *gorm.DB
}
type Job struct {
	ID          uuid.UUID `gorm:"primary_key;type:uuid;default:uuid_generate_v4()"`
	Name        string    `gorm:"not null" json:"name"`
	Version     int
	Owner       string
	Description string
	Labels      datatypes.JSON

	StartDate time.Time
	EndDate   *time.Time
	Interval  string

	// Behavior
	DependsOnPast bool `json:"depends_on_past"`
	CatchUp       bool `json:"catch_up"`
	Retry         datatypes.JSON
	Alert         datatypes.JSON

	// Upstreams
	StaticUpstreams pq.StringArray `gorm:"type:varchar(220)[]" json:"static_upstreams"`

	// ExternalUpstreams
	HTTPUpstreams datatypes.JSON `json:"http_upstreams"`

	TaskName   string
	TaskConfig datatypes.JSON

	WindowSize       string
	WindowOffset     string
	WindowTruncateTo string

	Assets   datatypes.JSON
	Hooks    datatypes.JSON
	Metadata datatypes.JSON

	Destination string
	Sources     pq.StringArray `gorm:"type:varchar(300)[]"`

	ProjectName   string `json:"project_name"`
	NamespaceName string `json:"namespace_name"`

	CreatedAt time.Time `gorm:"not null" json:"created_at"`
	UpdatedAt time.Time `gorm:"not null" json:"updated_at"`
	DeletedAt gorm.DeletedAt
}

func (j *Job) toJob() (*job_run.Job, error) {
	t, err := tenant.NewTenant(j.ProjectName, j.NamespaceName)
	if err != nil {
		return nil, err
	}

	taskConfig := map[string]string{}
	if err := json.Unmarshal(j.TaskConfig, &taskConfig); err != nil {
		return nil, err
	}

	var hookConfig []*job_run.Hook
	if err := json.Unmarshal(j.Hooks, &hookConfig); err != nil {
		return nil, err
	}

	assets := map[string]string{}
	if err := json.Unmarshal(j.Assets, &assets); err != nil {
		return nil, err
	}

	return &job_run.Job{
		Name:        job_run.JobName(j.Name),
		Tenant:      t,
		Destination: j.Destination,
		Task: &job_run.Task{
			Name:   j.TaskName,
			Config: taskConfig,
		},
		Hooks:  hookConfig,
		Assets: assets,
	}, err
}

func (j *Job) toJobWithDetails() (*job_run.JobWithDetails, error) {
	job, err := j.toJob()
	if err != nil {
		return nil, err
	}

	var labels map[string]string
	if err := json.Unmarshal(j.Labels, &labels); err != nil {
		return nil, err
	}

	var retry job_run.Retry
	if err := json.Unmarshal(j.Retry, &retry); err != nil {
		return nil, err
	}
	var alerts []job_run.Alert
	if err := json.Unmarshal(j.Alert, &alerts); err != nil {
		return nil, err
	}

	return &job_run.JobWithDetails{
		Name: job.Name,
		Job:  job,
		JobMetadata: &job_run.JobMetadata{
			Version:     j.Version,
			Owner:       j.Owner,
			Description: j.Description,
			Labels:      labels,
		},
		Schedule: &job_run.Schedule{
			DependsOnPast: j.DependsOnPast,
			CatchUp:       j.CatchUp,
			StartDate:     j.StartDate,
			EndDate:       j.EndDate,
		},
		Retry:         &retry,
		Alerts:        alerts,
		RuntimeConfig: job_run.RuntimeConfig{}, //todo: fix later
		//Priority: j.Priority, //todo: fix later
		//Upstreams: j.Upstreams, //todo: fix later
	}, err
}

func (j *JobRepository) GetJob(ctx context.Context, projectName tenant.ProjectName, jobName job_run.JobName) (*job_run.Job, error) {
	var spec Job

	getJobByNameAtProject := `SELECT * FROM job WHERE name = ? AND project_name = ?`
	err := j.db.WithContext(ctx).Raw(getJobByNameAtProject, jobName.String(), projectName.String()).
		First(&spec).Error
	if err != nil {
		if errors.Is(err, gorm.ErrRecordNotFound) {
			return nil, errors.NotFound(job_run.EntityJobRun, "unable to find job:"+jobName.String()+" in project:"+projectName.String())
		}
		return nil, err
	}
	return spec.toJob()
}
func (j *JobRepository) GetJobDetails(ctx context.Context, projectName tenant.ProjectName, jobName job_run.JobName) (*job_run.JobWithDetails, error) {
	var spec Job
	getJobByNameAtProject := `SELECT * FROM job WHERE name = ? AND project_name = ?`
	err := j.db.WithContext(ctx).Raw(getJobByNameAtProject, jobName.String(), projectName.String()).
		First(&spec).Error
	if err != nil {
		if errors.Is(err, gorm.ErrRecordNotFound) {
			return nil, errors.NotFound(job_run.EntityJobRun, "unable to find job:"+jobName.String()+" in project:"+projectName.String())
		}
		return nil, err
	}
	return spec.toJobWithDetails()
}
func (j *JobRepository) GetAll(ctx context.Context, projectName tenant.ProjectName) ([]*job_run.JobWithDetails, error) {
	var specs []Job
	getJobByNameAtProject := `SELECT * FROM job WHERE project_name = ?`
	err := j.db.WithContext(ctx).Raw(getJobByNameAtProject, projectName.String()).Find(&specs).Error
	if err != nil {
		if errors.Is(err, gorm.ErrRecordNotFound) {
			return nil, errors.NotFound(job_run.EntityJobRun, "unable to find jobs in project:"+projectName.String())
		}
		return nil, err
	}
	var jobs []*job_run.JobWithDetails
	for _, spec := range specs {
		job, err := spec.toJobWithDetails()
		if err != nil {
			return nil, err
		}
		jobs = append(jobs, job)
	}
}
