#!/usr/bin/env bash

SCRIPT=$(readlink -f "$0")
SCRIPTPATH=$(dirname "${SCRIPT}")
PROJECT_PATH=${SCRIPTPATH}/../..

if [ ! -f "${PROJECT_PATH}/provisioning/clone/.crystallize" ]; then
    echo "It does not seem to be a clean clone. Aborting."
    exit 1
fi

# Note that Crystallize CLI is acting before this script.


echo "Running command ${PROJECT_PATH}"
cd ${PROJECT_PATH} && npm install --no-progress --no-color

#---

echo "Cleanup ${PROJECT_PATH}"

rm -rf ${PROJECT_PATH}/.github
rm -rf ${PROJECT_PATH}/.git
rm -rf ${PROJECT_PATH}/.vscode
rm -rf ${PROJECT_PATH}/provisioning/clone
