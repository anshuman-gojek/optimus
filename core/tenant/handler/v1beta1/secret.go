package v1beta1

import (
	"context"
	"encoding/base64"

	"github.com/odpf/salt/log"
	"google.golang.org/protobuf/types/known/timestamppb"

	"github.com/odpf/optimus/core/tenant"
	"github.com/odpf/optimus/core/tenant/dto"
	"github.com/odpf/optimus/internal/errors"
	pb "github.com/odpf/optimus/protos/odpf/optimus/core/v1beta1"
)

type SecretService interface {
	Save(ctx context.Context, projName tenant.ProjectName, nsName string, pts *tenant.PlainTextSecret) error
	Update(ctx context.Context, projName tenant.ProjectName, nsName string, pts *tenant.PlainTextSecret) error
	Delete(ctx context.Context, projName tenant.ProjectName, nsName string, secretName tenant.SecretName) error
	GetSecretsInfo(ctx context.Context, projName tenant.ProjectName) ([]*dto.SecretInfo, error)
}

type SecretHandler struct {
	l             log.Logger
	secretService SecretService

	pb.UnimplementedSecretServiceServer
}

func (sv *SecretHandler) RegisterSecret(ctx context.Context, req *pb.RegisterSecretRequest) (*pb.RegisterSecretResponse, error) {
	projName, err := tenant.ProjectNameFrom(req.GetProjectName())
	if err != nil {
		return nil, errors.GRPCErr(err, "failed to register secret "+req.GetSecretName())
	}

	base64Decoded, err := getDecodedSecret(req.GetValue())
	if err != nil {
		return nil, errors.GRPCErr(err, "failed to register secret "+req.GetSecretName())
	}

	secret, err := tenant.NewPlainTextSecret(req.GetSecretName(), base64Decoded)
	if err != nil {
		return nil, errors.GRPCErr(err, "failed to register secret "+req.GetSecretName())
	}

	if err = sv.secretService.Save(ctx, projName, req.GetNamespaceName(), secret); err != nil {
		return nil, errors.GRPCErr(err, "failed to register secret "+req.GetSecretName())
	}

	return &pb.RegisterSecretResponse{}, nil
}

func (sv *SecretHandler) UpdateSecret(ctx context.Context, req *pb.UpdateSecretRequest) (*pb.UpdateSecretResponse, error) {
	projName, err := tenant.ProjectNameFrom(req.GetProjectName())
	if err != nil {
		return nil, errors.GRPCErr(err, "failed to update secret "+req.GetSecretName())
	}

	base64Decoded, err := getDecodedSecret(req.GetValue())
	if err != nil {
		return nil, errors.GRPCErr(err, "failed to update secret "+req.GetSecretName())
	}

	secret, err := tenant.NewPlainTextSecret(req.GetSecretName(), base64Decoded)
	if err != nil {
		return nil, errors.GRPCErr(err, "failed to update secret "+req.GetSecretName())
	}

	if err = sv.secretService.Update(ctx, projName, req.GetNamespaceName(), secret); err != nil {
		return nil, errors.GRPCErr(err, "failed to update secret "+req.GetSecretName())
	}

	return &pb.UpdateSecretResponse{}, nil
}

func (sv *SecretHandler) ListSecrets(ctx context.Context, req *pb.ListSecretsRequest) (*pb.ListSecretsResponse, error) {
	projName, err := tenant.ProjectNameFrom(req.GetProjectName())
	if err != nil {
		return nil, errors.GRPCErr(err, "failed to list secrets")
	}

	secrets, err := sv.secretService.GetSecretsInfo(ctx, projName)
	if err != nil {
		return nil, errors.GRPCErr(err, "failed to list secrets")
	}

	var secretsResponse []*pb.ListSecretsResponse_Secret
	for _, s := range secrets {
		respSecret := pb.ListSecretsResponse_Secret{
			Name:      s.Name,
			Namespace: s.Namespace,
			Digest:    s.Digest,
			UpdatedAt: timestamppb.New(s.UpdatedAt),
		}
		secretsResponse = append(secretsResponse, &respSecret)
	}

	return &pb.ListSecretsResponse{Secrets: secretsResponse}, nil
}

func (sv *SecretHandler) DeleteSecret(ctx context.Context, req *pb.DeleteSecretRequest) (*pb.DeleteSecretResponse, error) {
	secretName, err := tenant.SecretNameFrom(req.GetSecretName())
	if err != nil {
		return nil, errors.GRPCErr(err, "failed to delete secret"+req.GetSecretName())
	}

	projName, err := tenant.ProjectNameFrom(req.GetProjectName())
	if err != nil {
		return nil, errors.GRPCErr(err, "failed to delete secret "+secretName.String())
	}

	if err = sv.secretService.Delete(ctx, projName, req.GetNamespaceName(), secretName); err != nil {
		return nil, errors.GRPCErr(err, "failed to delete secret "+secretName.String())
	}

	return &pb.DeleteSecretResponse{}, nil
}

func getDecodedSecret(encodedString string) (string, error) {
	if encodedString == "" {
		return "", errors.InvalidArgument(tenant.EntitySecret, "empty value for secret")
	}

	base64Decoded, err := base64.StdEncoding.DecodeString(encodedString)
	if err != nil {
		return "", errors.InvalidArgument(tenant.EntitySecret, "failed to decode base64 string")
	}
	return string(base64Decoded), nil
}

func NewSecretsHandler(l log.Logger, secretService SecretService) *SecretHandler {
	return &SecretHandler{
		l:             l,
		secretService: secretService,
	}
}
