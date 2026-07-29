module "landing" {
  source = "./modules/static-site"

  name                              = "landing"
  bucket_name                       = "rafer-dev-landing-page"
  primary_domain                    = var.domain_name
  extra_aliases                     = ["www.${var.domain_name}"]
  redirect_extra_aliases_to_primary = true
  acm_certificate_arn               = aws_acm_certificate_validation.this.certificate_arn
  hosted_zone_id                    = data.aws_route53_zone.this.zone_id
  response_headers_policy_id        = aws_cloudfront_response_headers_policy.security_headers.id

  tags = {
    Site = "landing"
  }
}

module "storybook" {
  source = "./modules/static-site"

  name                              = "storybook"
  bucket_name                       = "rafer-dev-storybook"
  primary_domain                    = var.storybook_subdomain
  extra_aliases                     = ["www.${var.storybook_subdomain}"]
  redirect_extra_aliases_to_primary = false
  acm_certificate_arn               = aws_acm_certificate_validation.this.certificate_arn
  hosted_zone_id                    = data.aws_route53_zone.this.zone_id
  response_headers_policy_id        = aws_cloudfront_response_headers_policy.security_headers.id

  tags = {
    Site = "storybook"
  }
}
