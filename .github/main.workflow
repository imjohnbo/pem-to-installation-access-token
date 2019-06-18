workflow "Publish on push" {
  on = "push"
  resolves = ["Publish"]
}

action "Publish" {
  uses = "actions/npm@master"
  secrets = [
    "GITHUB_TOKEN",
    "NPM_AUTH_TOKEN",
  ]
  args = "publish --access public"
  env = {
    NPM_REGISTRY_URL = "npm.pkg.github.com"
  }
}
