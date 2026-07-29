provider "aws" {
  region = var.region

  default_tags {
    tags = {
      Project   = "rafer.dev"
      ManagedBy = "terraform"
    }
  }
}
