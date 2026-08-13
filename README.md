# YAWATOSHO GAMES

**Library games & playful experiments**

GitHub Pagesでそのまま公開できる、YAWATOSHO GAMESのゲームポートフォリオです。

## 公開方法

1. GitHubで `games` というPublicリポジトリを作成
2. このフォルダ内のファイルをリポジトリ直下に置く
3. GitHubの `Settings` → `Pages`
4. `Deploy from a branch` を選択
5. Branchを `main`、フォルダを `/(root)` に設定

想定URL：

`https://yawatosho.github.io/games/`

## ファイル

- `index.html` : ページ本体
- `styles.css` : デザイン
- `script.js` : ゲーム一覧・フィルター・GA4イベント
- `assets/ogp.png` : SNS共有用画像
- `RETURN_LINK_SNIPPET.html` : 各ゲームからYAWATOSHO GAMESへ戻るリンクのサンプル

## ゲームを追加する

`script.js` 冒頭の `games` 配列に1件追加してください。

```js
{
  id: "new-game",
  title: "GAME TITLE",
  shortTitle: "GAME TITLE",
  description: "ゲームの短い説明。",
  url: "https://yawatosho.github.io/new-game/",
  image: "https://yawatosho.github.io/new-game/ogp.png",
  category: "NDC / Quiz",
  filter: "ndc",
  year: "2026",
  featured: false,
  archive: false
}
```

`featured: true` を付けたゲームのうち、先頭3件が「New releases」に表示されます。

### filterの値

- `management`
- `ndc`
- `shelving`
- `reference`
- `other`

## Google Analytics

既存ゲームで利用している測定ID `G-J6NS8CCNWN` を設定済みです。

ゲームへのリンクを押すと、以下のカスタムイベントを送信します。

- イベント名: `game_open`
- `game_id`
- `game_title`
- `game_source` (`featured`, `collection`, `surprise_me`)
- `link_url`

GA4の「探索」で `game_open` を見ると、YAWATOSHO GAMESから各作品へどれくらい移動したかを確認できます。

## URLを変更する場合

`games` 以外のリポジトリ名で公開するときは、`index.html` 内の以下を変更してください。

- `og:url`
- `og:image`
- `twitter:image`

また、`RETURN_LINK_SNIPPET.html` のURLも変更してください。
