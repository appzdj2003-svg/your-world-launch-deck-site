#!/usr/bin/env bash
# Publish the site as ONE orphan commit on main (no history bloat), without losing a concurrent update.
# Usage: publish.sh <site_dir> <message> <what>   what = data (replace only data/) | all (replace everything but data/)
# Builds the new tree on top of the CURRENT remote main and pushes with --force-with-lease; retries if main moved.
set -euo pipefail
cd "$1"; msg="$2"; what="$3"
git config user.name "launch-deck-bot"; git config user.email "launch-deck-bot@users.noreply.github.com"
for try in 1 2 3; do
  git fetch -q --depth 1 origin main
  base=$(git rev-parse FETCH_HEAD)
  export GIT_INDEX_FILE="$(mktemp -u)"
  if [ "$what" = data ]; then
    git read-tree "$base"; git rm -r -q -f --cached --ignore-unmatch data; git add -f data
  else
    git read-tree --empty; git add -A -f .; git rm -r -q -f --cached --ignore-unmatch data
    git read-tree --prefix=data/ "$base:data" 2>/dev/null || git add -f data
  fi
  tree=$(git write-tree); rm -f "$GIT_INDEX_FILE"; unset GIT_INDEX_FILE
  if [ "$tree" = "$(git rev-parse "$base^{tree}")" ]; then echo "no changes"; exit 0; fi
  c=$(git commit-tree "$tree" -m "$msg")
  if git push -q --force-with-lease="main:$base" origin "$c:refs/heads/main"; then echo "published: $msg"; exit 0; fi
  echo "main moved, retrying ($try)"; sleep 5
done
echo "publish failed after retries" >&2; exit 1
