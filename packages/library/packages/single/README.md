# シングルエントリポイントをexportするサンプル

- `package.json`に`export`フィールドを用意することで`@lycolia/library-example-single`だけで`import`可能にしている
  - これがないと`@lycolia/library-example-single/dist`のような形式になってしまう
