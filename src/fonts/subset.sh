#!/usr/bin/env bash
# Builds archivo-cs.woff2 from Google's Archivo variable font (OFL, see
# OFL.txt): Czech characters only, weights 400-900, widths 100-125, the
# ranges the page uses. One file instead of Google's latin and latin-ext
# pair (decision 41). Needs fonttools and brotli:
#   pip install fonttools==4.55.3 brotli==1.1.0
# Usage: src/fonts/subset.sh "path/to/Archivo[wdth,wght].ttf"
# The TTF: https://github.com/google/fonts/tree/main/ofl/archivo
set -euo pipefail

src="$1"
out="$(dirname "$0")/archivo-cs.woff2"
tmp="$(mktemp -d)"
trap 'rm -rf "$tmp"' EXIT

# Basic Latin, Latin-1, the Czech and Slovak letters, typographic
# punctuation, the euro sign and the arrows the copy uses.
unicodes="U+0020-007E,U+00A0-00FF,U+010C-010F,U+011A-011B,U+0139-013E,\
U+0147-0148,U+0154-0155,U+0158-0159,U+0160-0161,U+0164-0165,U+016E-016F,\
U+017D-017E,U+2009,U+2013-2014,U+2018-201E,U+2022,U+2026,U+202F,\
U+2039-203A,U+20AC,U+2190-2193,U+2212,U+2264-2265"

fonttools varLib.instancer "$src" wght=400:900 wdth=100:125 \
  -o "$tmp/archivo.ttf" -q
pyftsubset "$tmp/archivo.ttf" --unicodes="$unicodes" \
  --layout-features='kern,liga,calt,ccmp,locl,mark,mkmk,tnum,lnum,case' \
  --flavor=woff2 --output-file="$out"
echo "$out"
