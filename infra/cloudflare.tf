// TODO: DNS config (learn.ioxua.com)

resource "cloudflare_workers_kv_namespace" "session_tokens" {
  account_id = local.cloudflare_account_id
  title      = "KV_LEARN_SESSION_TOKENS"
}

resource "cloudflare_pages_project" "ioxua_learn" {
  account_id        = local.cloudflare_account_id
  name              = "ioxua-learn"
  production_branch = "prod"
}

output "cf_kv_session_tokens_id" {
  value = cloudflare_pages_project.ioxua_learn.id
}
