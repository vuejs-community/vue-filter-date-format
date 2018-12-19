workflow "Publish to NPM" {
  on = "push"
  resolves = ["Publish"]
}

action "Master" {
  args = "branch master"
  uses = "actions/bin/filter@master"
}

action "Tag" {
  needs = "Master"
  uses = "actions/bin/filter@master"
  args = "tag"
}

action "Build" {
  args = "install"
  needs = "Tag"
  uses = "actions/npm@master"
}

action "Publish" {
  args = "publish --access public"
  needs = "Build"
  uses = "actions/npm@master"
  secrets = ["NPM_AUTH_TOKEN"]
}
