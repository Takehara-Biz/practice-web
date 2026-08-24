#!/bin/bash

# openapi-generatorで生成したtsコードだけではWebアプリとして実行できない。
# そこで、npx @nestjs/cliで雛形となるWebアプリを作成し、その中で生成したtsコードにアクセスするようにする。
npx @nestjs/cli new my-nestjs-app
