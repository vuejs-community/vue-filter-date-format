workflow "Main workflow" {
  on = "push"
  resolves = ["Build", "Publish"]
}

action "Master" {
  args = "branch master"
  uses = "actions/bin/filter@master"
}

action "Install" {
  args = "ci"
  needs = "Master"
  uses = "actions/npm@master"
}

action "Lint" {
  args = "run lint"
  needs = "Install"
  uses = "actions/npm@master"
}

action "Build" {
  args = "run build"
  needs = "Lint"
  uses = "actions/npm@master"
}

action "Tag" {
  needs = "Build"
  uses = "actions/bin/filter@master"
  args = "tag"
}

action "Publish" {
  args = "publish --access public"
  needs = "Tag"
  uses = "actions/npm@master"
  secrets = ["NPM_AUTH_TOKEN"]
}
