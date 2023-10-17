# マルチエントリポイントをexportするサンプル

- `package.json`に`export`や`files`などのフィールドはなくても機能する
- `libs`にビルド成果物を出力することで`import`時に`@lycolia/library-example-multi/dist/hoge`の様にダサくなるのを回避している
  - 但しこれはeslintrcやtsconfigが変則的になるので微妙
