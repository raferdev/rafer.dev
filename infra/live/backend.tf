terraform {
  required_version = ">= 1.6"

  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "~> 5.0"
    }
    tls = {
      source  = "hashicorp/tls"
      version = "~> 4.0"
    }
  }

  # Created by infra/bootstrap. Run `terraform init` here only after
  # `terraform apply` has succeeded in infra/bootstrap.
  backend "s3" {
    bucket         = "rafer-dev-tfstate"
    key            = "live/terraform.tfstate"
    region         = "us-east-1"
    dynamodb_table = "rafer-dev-tfstate-lock"
    encrypt        = true
  }
}
