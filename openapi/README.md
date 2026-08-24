以下のリンク先の「Swagger Petstore - OpenAPI 3.2」をベースに、サーバ側とクライアント側のプログラムを自動生成して、動かしてみる実験。

https://editor.swagger.io/

コード生成は、OpenAPI Generatorを活用する。

https://openapi-generator.tech/docs/generators

利用するgeneratorは以下の通り。

* クライアント側は「typescript-fetch」
* サーバ側は「typescript-nestjs-server」

上記に決めた理由は以下の通り。

* 両方でTypeScriptを採用して、型ファイルを使いまわせるようにしたい。
* なるべくフレームワークやライブラリは使いたくない。

