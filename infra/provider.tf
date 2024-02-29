terraform {
  required_version = "~> 1.6.6"
  required_providers {
    cloudflare = {
      source  = "cloudflare/cloudflare"
      version = "~> 4.0"
    }
  }

  cloud {
    organization = "ioxua-inc"
    workspaces {
      name = "ioxua-learn"
    }
  }
}

provider "cloudflare" {
  api_token = var.cloudflare_api_token
}
