#!/bin/sh
# Local static server. Needed because the page loads ES modules and partials.
cd "$(dirname "$0")/.." || exit 1
npx serve -l 8000