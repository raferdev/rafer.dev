variable "region" {
  description = "AWS region for S3 buckets and non-global resources. Must be us-east-1 since that's also where the CloudFront/ACM certificate lives."
  type        = string
  default     = "us-east-1"
}

variable "domain_name" {
  description = "Root domain, must already be a Route53 public hosted zone."
  type        = string
  default     = "rafer.dev"
}

variable "storybook_subdomain" {
  description = "Subdomain the Storybook build is served from."
  type        = string
  default     = "storybook.rafer.dev"
}

variable "github_repository" {
  description = "GitHub \"owner/repo\" allowed to assume the CI deploy role via OIDC."
  type        = string
  default     = "raferdev/rafer.dev"
}

variable "create_github_oidc_provider" {
  description = "Whether to create the GitHub Actions OIDC provider. Set to false if one already exists in this AWS account (there can only be one per account) and pass its ARN via existing_github_oidc_provider_arn instead."
  type        = bool
  default     = true
}

variable "existing_github_oidc_provider_arn" {
  description = "ARN of an existing GitHub OIDC provider, used only when create_github_oidc_provider is false."
  type        = string
  default     = ""
}
