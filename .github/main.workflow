workflow "Main workflow" {
  on = "push"
  resolves = "Publish"
}

action "Install" {
  args = "ci"
  uses = "actions/npm@master"
}

action "Build" {
  args = "run build"
  needs = "Install"
  uses = "actions/npm@master"
}

action "Lint" {
  args = "run lint"
  needs = "Build"
  uses = "actions/npm@master"
}

action "Test" {
  args = "test"
  needs = "Build"
  uses = "actions/npm@master"
}

action "Tag" {
  needs = ["Lint", "Test"]
  uses = "actions/bin/filter@master"
  args = "tag"
}

action "Publish" {
  args = "publish --access public"
  needs = "Tag"
  uses = "actions/npm@master"
  secrets = ["NPM_AUTH_TOKEN"]
}
