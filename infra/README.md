# infra

Terraform for hosting rafer.dev (landing page) and storybook.rafer.dev (Storybook) on S3 + CloudFront.

## Layout

- `bootstrap/` — one-time setup. Creates the S3 bucket + DynamoDB table used as the
  `live/` remote state backend. Uses local state itself (chicken-and-egg: it creates
  the backend, so it can't use it).
- `live/` — the actual site infra: two S3 buckets (private, CloudFront-only via OAC),
  one shared ACM certificate (`rafer.dev` + `www.rafer.dev` + `storybook.rafer.dev` +
  `www.storybook.rafer.dev`), two CloudFront distributions, Route53 alias records, a
  shared response-headers policy (security headers), and the IAM role GitHub Actions
  assumes via OIDC to deploy.
- `live/modules/static-site/` — reusable module for "S3 bucket behind CloudFront,
  serving a domain + optional www alias".

## First-time setup

```sh
cd infra/bootstrap
terraform init
terraform apply

cd ../live
terraform init
terraform apply
```

After `apply` in `live/`, set these as **GitHub Actions repository variables**
(Settings → Secrets and variables → Actions → Variables) using the corresponding
Terraform outputs:

- `AWS_DEPLOY_ROLE_ARN` ← `github_actions_deploy_role_arn`
- `LANDING_BUCKET` ← `landing_bucket_name`
- `LANDING_DISTRIBUTION_ID` ← `landing_distribution_id`
- `STORYBOOK_BUCKET` ← `storybook_bucket_name`
- `STORYBOOK_DISTRIBUTION_ID` ← `storybook_distribution_id`
- `AWS_TERRAFORM_CI_ROLE_ARN` ← `terraform_ci_role_arn`

None of these are secret (they're resource identifiers, not credentials) — repo
variables are the right place for them, not secrets.

## CI-driven Terraform (`live/` only)

`.github/workflows/terraform.yml` runs `terraform plan` + `apply` on every push
to `main` that touches `infra/live/**` (or via manual `workflow_dispatch`), using
the `terraform_ci` OIDC role (`infra/live/terraform-ci.tf`) - separate from, and
more privileged than, the app-deploy role.

**This role can modify its own trust policy and permissions** (it manages the
very IAM role it runs as, plus the GitHub OIDC provider). IAM scoping limits it
to touching only its own role, the app-deploy role, and that one OIDC provider -
it can't create unrelated IAM principals - but it can still grant _those two
roles_ more power on a bad `apply`. The only real mitigation is **process, not
IAM**: turn on branch protection on `main` requiring PR review before merge, so
no infra change reaches `terraform apply` unreviewed.

`infra/bootstrap/` is deliberately **not** wired into CI - it's a one-time,
low-frequency, chicken-and-egg config (it creates the state backend `live/`
depends on), so it stays a manual, local `terraform apply` only.

## Notes / things intentionally out of scope

- `raferdev.com` → `rafer.dev` redirect (currently handled by nginx) isn't covered
  here — that's a separate domain registration. Add it later as its own hosted zone
  - a redirect-only CloudFront distribution if needed.
- Cache-Control isn't force-set to `max-age=31536000, immutable` for every response
  (nginx currently does this for all files including HTML). CloudFront's
  `Managed-CachingOptimized` policy is used instead, since blanket immutable caching
  on HTML would make deploys invisible to already-cached visitors. Static asset
  filenames from `next build` are already content-hashed, so this doesn't affect them.
- ACM validation and the CloudFront distributions can take 10-20 minutes on first
  `apply` — this is normal (cert DNS validation propagation + CloudFront's global
  rollout).
