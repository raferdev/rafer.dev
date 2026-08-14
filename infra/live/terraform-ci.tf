# A second, more privileged GitHub Actions role, used only to run
# `terraform apply` against this config from CI. Kept separate from
# aws_iam_role.github_actions_deploy (github-oidc.tf), which stays locked to
# just S3 sync + CloudFront invalidation for the app-file deploy.
#
# IMPORTANT: this role can modify its own trust policy and inline policy
# (iam:UpdateAssumeRolePolicy / iam:PutRolePolicy scoped to its own ARN below),
# because Terraform manages the very role that runs Terraform. That's an
# inherent self-escalation risk of "apply from CI" for a config that manages
# its own IAM - the practical mitigation is requiring PR review (branch
# protection on main) before anything merges, not IAM scoping alone.

data "aws_caller_identity" "current" {}

resource "aws_iam_role" "terraform_ci" {
  name               = "rafer-dev-terraform-ci"
  assume_role_policy = data.aws_iam_policy_document.github_actions_assume_role.json
}

data "aws_iam_policy_document" "terraform_ci" {
  statement {
    sid    = "TerraformStateBackend"
    effect = "Allow"
    actions = [
      "s3:GetObject",
      "s3:PutObject",
      "s3:ListBucket",
    ]
    resources = [
      "arn:aws:s3:::rafer-dev-tfstate",
      "arn:aws:s3:::rafer-dev-tfstate/*",
    ]
  }

  statement {
    sid    = "TerraformStateLock"
    effect = "Allow"
    actions = [
      "dynamodb:GetItem",
      "dynamodb:PutItem",
      "dynamodb:DeleteItem",
    ]
    resources = [
      "arn:aws:dynamodb:${var.region}:${data.aws_caller_identity.current.account_id}:table/rafer-dev-tfstate-lock",
    ]
  }

  statement {
    sid       = "ManageSiteBuckets"
    effect    = "Allow"
    actions   = ["s3:*"]
    resources = [
      module.landing.bucket_arn,
      "${module.landing.bucket_arn}/*",
      module.storybook.bucket_arn,
      "${module.storybook.bucket_arn}/*",
    ]
  }

  # CloudFront/ACM largely don't support resource-level IAM restriction for
  # create actions (the resource ID doesn't exist yet) - full wildcard is the
  # realistic option here, not a deliberate broadening.
  statement {
    sid       = "ManageCloudFront"
    effect    = "Allow"
    actions   = ["cloudfront:*"]
    resources = ["*"]
  }

  statement {
    sid       = "ManageACM"
    effect    = "Allow"
    actions   = ["acm:*"]
    resources = ["*"]
  }

  statement {
    sid    = "ManageRoute53Records"
    effect = "Allow"
    actions = [
      "route53:ChangeResourceRecordSets",
      "route53:ListResourceRecordSets",
      "route53:GetHostedZone",
    ]
    resources = ["arn:aws:route53:::hostedzone/${data.aws_route53_zone.this.zone_id}"]
  }

  statement {
    sid    = "Route53AccountWideLookups"
    effect = "Allow"
    actions = [
      "route53:GetChange",
      "route53:ListHostedZones",
      "route53:ListHostedZonesByName",
    ]
    resources = ["*"]
  }

  # Scoped to only the two roles this config manages - not iam:* / resource "*".
  statement {
    sid    = "ManageOwnDeployRoles"
    effect = "Allow"
    actions = [
      "iam:CreateRole",
      "iam:GetRole",
      "iam:DeleteRole",
      "iam:UpdateRole",
      "iam:UpdateAssumeRolePolicy",
      "iam:TagRole",
      "iam:UntagRole",
      "iam:PutRolePolicy",
      "iam:GetRolePolicy",
      "iam:DeleteRolePolicy",
      "iam:ListRolePolicies",
      "iam:ListAttachedRolePolicies",
    ]
    resources = [
      aws_iam_role.github_actions_deploy.arn,
      aws_iam_role.terraform_ci.arn,
    ]
  }

  statement {
    sid    = "ManageOIDCProvider"
    effect = "Allow"
    actions = [
      "iam:GetOpenIDConnectProvider",
      "iam:CreateOpenIDConnectProvider",
      "iam:DeleteOpenIDConnectProvider",
      "iam:TagOpenIDConnectProvider",
      "iam:UntagOpenIDConnectProvider",
      "iam:UpdateOpenIDConnectProviderThumbprint",
      "iam:AddClientIDToOpenIDConnectProvider",
      "iam:RemoveClientIDFromOpenIDConnectProvider",
    ]
    resources = [local.github_oidc_provider_arn]
  }

  statement {
    sid       = "OIDCProviderListing"
    effect    = "Allow"
    actions   = ["iam:ListOpenIDConnectProviders"]
    resources = ["*"]
  }
}

resource "aws_iam_role_policy" "terraform_ci" {
  name   = "terraform-apply"
  role   = aws_iam_role.terraform_ci.id
  policy = data.aws_iam_policy_document.terraform_ci.json
}
