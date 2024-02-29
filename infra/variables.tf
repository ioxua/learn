locals {
  foo = "bar"
  cloudflare_account_id = "13b3380dbaf2d0a7d62357bc8cc65a1b"
}

variable "cloudflare_api_token" {
  type        = string
  sensitive   = true
  description = "Transloadit's auth key. See console"
}
