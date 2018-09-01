#!/usr/bin/env bash

# Source any ENV variables in a cross-platform way.

# Copy/paste this skeleton file to .env.sh and replace the <MYSQL_SERVER_STRING>
# with an appropriate value.

# NOTE: `.env.sh` is set to be ignored in `.gitignore`, so any keys stored
#       there will not be commited the repo as a security precaution.
export CLEARDB_DATABASE_URL=mysql://<MYSQL_SERVER_STRING>
export NODE_MODULES_CACHE=false
