#!/bin/bash

set -euo pipefail

echo "yamlからソースコードを生成するスクリプト。petstore.yamlを書き換える度に実行してください。"

# Reference
# https://openapi-generator.tech/docs/installation

echo "クライアント側のコードを生成します。"
docker run --rm \
  -v ${PWD}/../:/local openapitools/openapi-generator-cli generate \
  -i /local/generator/petstore.yaml \
  -g typescript-fetch \
  -o /local/generator/client/generated/

echo "サーバ側のコードを生成します。"
docker run --rm \
  -v ${PWD}/../:/local openapitools/openapi-generator-cli generate \
  -i /local/generator/petstore.yaml \
  -g typescript-nestjs-server \
  -o /local/volumes/app/server/my-nestjs-app/src/generated/
