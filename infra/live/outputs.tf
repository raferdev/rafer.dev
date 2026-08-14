output "landing_bucket_name" {
  value = module.landing.bucket_name
}

output "landing_distribution_id" {
  value = module.landing.distribution_id
}

output "storybook_bucket_name" {
  value = module.storybook.bucket_name
}

output "storybook_distribution_id" {
  value = module.storybook.distribution_id
}

output "github_actions_deploy_role_arn" {
  value = aws_iam_role.github_actions_deploy.arn
}

output "terraform_ci_role_arn" {
  value = aws_iam_role.terraform_ci.arn
}
