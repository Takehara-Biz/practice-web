#!/bin/bash

set -euo pipefail

echo "生成されたファイルを全削除するスクリプト。"

rm -rf ./client/generated
rm -rf ../volumes/app/server/my-nestjs-app/src/generated
