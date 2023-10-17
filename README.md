# TypeScriptでNode.jsライブラリを作成し、それを利用するサンプル

## Required

- Node.js 20+

## How to using

- Lunch commands
  - `npm start`
    - run cli
  - `npm run dev`
    - run force debug cli
  - `npm run type-check`
    - run type-check
  - `npm run build`
    - run swc
      - this only development, not production
  - `npm run test`
    - launches test runner by watch mode
  - `npm run coverage`
    - get coverage report

## memo

rootの`package.json`に`workspaces`を設定すると`package/library`配下の`workspaces`が機能しなくなるので外している。（`No workspaces found`と出る）
恐らくネストはできない
