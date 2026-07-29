variable "name" {
  description = "Short identifier used for resource naming/tags (e.g. \"landing\", \"storybook\")."
  type        = string
}

variable "bucket_name" {
  description = "Globally-unique S3 bucket name to hold the built static files."
  type        = string
}

variable "primary_domain" {
  description = "Canonical domain served by this distribution, e.g. \"rafer.dev\"."
  type        = string
}

variable "extra_aliases" {
  description = "Additional domain aliases attached to the same distribution, e.g. [\"www.rafer.dev\"]."
  type        = list(string)
  default     = []
}

variable "redirect_extra_aliases_to_primary" {
  description = "If true, requests to any of extra_aliases 301-redirect to https://<primary_domain><uri> via a CloudFront Function, instead of being served directly."
  type        = bool
  default     = false
}

variable "acm_certificate_arn" {
  description = "ARN of the (us-east-1) ACM certificate covering primary_domain and extra_aliases."
  type        = string
}

variable "hosted_zone_id" {
  description = "Route53 hosted zone ID to create alias records in."
  type        = string
}

variable "response_headers_policy_id" {
  description = "ID of the shared CloudFront response headers policy (security headers)."
  type        = string
}

variable "default_root_object" {
  description = "Object served at the distribution root, e.g. index.html."
  type        = string
  default     = "index.html"
}

variable "price_class" {
  description = "CloudFront price class."
  type        = string
  default     = "PriceClass_100"
}

variable "not_found_response_page_path" {
  description = "Path served for 403/404 responses from the origin (Next.js static export's 404 page)."
  type        = string
  default     = "/404.html"
}

variable "tags" {
  description = "Tags applied to taggable resources in this module."
  type        = map(string)
  default     = {}
}
