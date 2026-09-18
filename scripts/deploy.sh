set -euo pipefail

SITE_ROOT="${SITE_ROOT:-/srv/rafer.dev}"
NGINX_CHANGED="${NGINX_CHANGED:-false}"

log() { printf '\n==> %s\n' "$*"; }

# docker compose reads SITE_ROOT from this file, so the path is defined once.
printf 'SITE_ROOT=%s\n' "$SITE_ROOT" > .env
compose() { sudo docker compose -f docker-compose.yaml "$@"; }

# --- refuse to publish a broken build ---------------------------------------
# Without this, a failed download would rsync --delete the live site away.
[ -s out/index.html ] || {
  echo "out/index.html is missing or empty - refusing to deploy" >&2
  exit 1
}

# --- web root, owned by the runner so rsync needs no sudo -------------------
for dir in out storybook-static; do
  [ -d "$SITE_ROOT/$dir" ] ||
    sudo install -d -m 755 -o "$(id -u)" -g "$(id -g)" "$SITE_ROOT/$dir"
done

# --- publish: only changed files move, vanished files are removed -----------
sync() {
  local src=$1 dest=$2
  if [ ! -d "$src" ]; then
    log "$src was not built this run, leaving $dest untouched"
    return 0
  fi
  log "syncing $src -> $dest"
  # -rlpt rather than -a: the runner user cannot chown, and does not need to.
  rsync -rlpt --delete --human-readable --stats "$src/" "$dest/"
}

sync out "$SITE_ROOT/out"
sync storybook-static "$SITE_ROOT/storybook-static"

# --- nginx: rebuild only when its own config changed ------------------------
if [ "$NGINX_CHANGED" = "true" ]; then
  log "nginx config changed - rebuilding image"
  compose build --pull
fi

# Idempotent: starts nginx if it is down, recreates it only if the image or
# compose config changed, and does nothing at all on a content-only deploy.
log "ensuring nginx is up"
compose up -d

if [ "$NGINX_CHANGED" = "true" ]; then
  log "reclaiming disk from the previous image"
  sudo docker image prune -f
fi

# --- prove it actually serves ------------------------------------------------
log "health check"
for attempt in 1 2 3 4 5; do
  if curl -fsS -m 5 -H 'Host: rafer.dev' http://127.0.0.1/ -o /dev/null; then
    echo "rafer.dev is up (attempt $attempt)"
    exit 0
  fi
  sleep 2
done

echo "nginx did not answer on :80" >&2
compose logs --tail 50
exit 1
