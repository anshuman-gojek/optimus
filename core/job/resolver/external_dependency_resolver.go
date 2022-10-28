package resolver

import (
	"fmt"

	"golang.org/x/net/context"

	"github.com/odpf/optimus/config"
	"github.com/odpf/optimus/core/job/dto"
	"github.com/odpf/optimus/ext/resourcemanager"
)

type ExternalDependencyResolver interface {
	FetchExternalDependencies(ctx context.Context, unresolvedDependencies []*dto.UnresolvedDependency) ([]*dto.Dependency, []*dto.UnresolvedDependency, error)
}

type externalDependencyResolver struct {
	optimusResourceManagers []resourcemanager.ResourceManager
}

// NewExternalDependencyResolver creates a new instance of externalDependencyResolver
func NewExternalDependencyResolver(resourceManagerConfigs []config.ResourceManager) (ExternalDependencyResolver, error) {
	var optimusResourceManagers []resourcemanager.ResourceManager
	for _, conf := range resourceManagerConfigs {
		switch conf.Type {
		case "optimus":
			getter, err := resourcemanager.NewOptimusResourceManager(conf)
			if err != nil {
				return nil, err
			}
			optimusResourceManagers = append(optimusResourceManagers, getter)
		default:
			return nil, fmt.Errorf("resource manager [%s] is not recognized", conf.Type)
		}
	}
	return &externalDependencyResolver{
		optimusResourceManagers: optimusResourceManagers,
	}, nil
}

func (e *externalDependencyResolver) FetchExternalDependencies(ctx context.Context, unresolvedDependencies []*dto.UnresolvedDependency) ([]*dto.Dependency, []*dto.UnresolvedDependency, error) {
	var unknownDependencies []*dto.UnresolvedDependency
	var externalDependencies []*dto.Dependency
	for _, toBeResolvedDependency := range unresolvedDependencies {
		optimusDependencies := e.fetchOptimusDependencies(ctx, toBeResolvedDependency)
		externalDependencies = append(externalDependencies, optimusDependencies...)
		unknownDependencies = append(unknownDependencies, toBeResolvedDependency)
	}
	return externalDependencies, unknownDependencies, nil
}

func (e *externalDependencyResolver) fetchOptimusDependencies(ctx context.Context, unresolvedDependency *dto.UnresolvedDependency) []*dto.Dependency {
	var dependencies []*dto.Dependency
	for _, manager := range e.optimusResourceManagers {
		deps, err := manager.GetOptimusDependencies(ctx, unresolvedDependency)
		if err != nil {
			continue
		}
		dependencies = append(dependencies, deps...)
	}
	return dependencies
}
