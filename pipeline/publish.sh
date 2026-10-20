#!/usr/bin/env bash
# Publish the site as a new commit on top of the current main, without losing a concurrent update.
# (Normal parented commits: git stores the JSON changes as small deltas, and GitHub keeps the scheduled
#  data workflow registered. Orphan force-pushes appeared to stop the schedule from ever firing.)
# Usage: publish.sh <site_dir> <message> <what>
#   what = data    (replace only data/)
#          preview (replace only preview/: the not-yet-live preview build)
#          all     (replace everything except data/ and preview/, which are kept from the live repo)
# Builds the new tree on top of the CURRENT remote main and pushes with --force-with-lease; retries if main moved.
set -euo pipefail
cd "$1"; msg="$2"; what="$3"
git config user.name "launch-deck-bot"; git config user.email "launch-deck-bot@users.noreply.github.com"
for try in 1 2 3; do
  git fetch -q --depth 1 origin main
  base=$(git rev-parse FETCH_HEAD)
  export GIT_INDEX_FILE="$(mktemp -u)"
  if [ "$what" = data ] || [ "$what" = preview ]; then
    git read-tree "$base"; git rm -r -q -f --cached --ignore-unmatch "$what"; git add -f "$what"
  else
    git read-tree --empty; git add -A -f .; git rm -r -q -f --cached --ignore-unmatch data preview
    git read-tree --prefix=data/ "$base:data" 2>/dev/null || git add -f data
    git read-tree --prefix=preview/ "$base:preview" 2>/dev/null || true
  fi
  tree=$(git write-tree); rm -f "$GIT_INDEX_FILE"; unset GIT_INDEX_FILE
  if [ "$tree" = "$(git rev-parse "$base^{tree}")" ]; then echo "no changes"; exit 0; fi
  c=$(git commit-tree "$tree" -p "$base" -m "$msg")
  if git push -q --force-with-lease="main:$base" origin "$c:refs/heads/main"; then echo "published: $msg"; exit 0; fi
  echo "main moved, retrying ($try)"; sleep 5
done
echo "publish failed after retries" >&2; exit 1
