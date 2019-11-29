#!/usr/bin/env bash
set -eo pipefail

find src -type f -name '*.js' -exec rm {} \+ &
rm -rf dist &

wait
