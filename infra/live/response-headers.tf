# Mirrors the security headers currently set in nginx/nginx.conf.
resource "aws_cloudfront_response_headers_policy" "security_headers" {
  name = "rafer-dev-security-headers"

  security_headers_config {
    content_type_options {
      override = true
    }

    frame_options {
      frame_option = "SAMEORIGIN"
      override     = true
    }

    referrer_policy {
      referrer_policy = "strict-origin"
      override        = true
    }

    strict_transport_security {
      access_control_max_age_sec = 31536000
      include_subdomains         = true
      preload                    = true
      override                   = true
    }

    xss_protection {
      protection = true
      mode_block = true
      override   = true
    }

    content_security_policy {
      content_security_policy = "worker-src blob:; script-src 'self' 'unsafe-inline' 'unsafe-eval' *.googletagmanager.com *.datadoghq-browser-agent.com; frame-src 'self' *.youtube.com; object-src 'none'; base-uri 'self'; form-action 'none'; frame-ancestors 'self'; img-src 'self' data:; font-src 'self'; manifest-src 'self';"
      override                = true
    }
  }

  custom_headers_config {
    items {
      header   = "Permissions-Policy"
      value    = "geolocation=(self),midi=(),sync-xhr=(),microphone=(),camera=(),magnetometer=(),gyroscope=(),fullscreen=(),payment=()"
      override = true
    }

    items {
      header   = "Timing-Allow-Origin"
      value    = "*"
      override = true
    }
  }
}
