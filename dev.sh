#!/bin/bash
# Serve the vault locally with hot reload.
# Override ports with e.g. PORT=8087 WS_PORT=3007 ./dev.sh
set -e

# Ports are per-vault so several course sites can serve at once. Taken on this
# machine: 8080 open-webui, 8081 mlx_lm.server, 8088/3003 the orifice vault.
PORT="${PORT:-8086}"
WS_PORT="${WS_PORT:-3006}"

VAULT="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"

cd "$VAULT/.quartz"
# See build.sh: `npx quartz` resolves to an unrelated registry package.
node ./quartz/bootstrap-cli.mjs build --serve \
  --port "$PORT" --wsPort "$WS_PORT" \
  -d ../content -o ../public
