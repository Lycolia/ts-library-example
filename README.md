# TypeScriptでNode.jsライブラリを作成し、それを利用するサンプル

[内容の説明はこちら](https://blog.lycolia.info/typescript%e3%81%a7node-js%e3%81%ae%e3%83%ad%e3%83%bc%e3%82%ab%e3%83%ab%e3%83%a9%e3%82%a4%e3%83%96%e3%83%a9%e3%83%aa%e3%82%92%e4%bd%9c%e3%82%8b/)

## memo

rootの`package.json`に`workspaces`を設定すると`package/library`配下の`workspaces`が機能しなくなるので外している。（`No workspaces found`と出る）  
[npmのバグでネストできない](https://github.com/npm/cli/issues/4774)
