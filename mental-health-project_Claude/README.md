# 精神科訪問看護 学びのテーマ

精神科訪問看護の専門家が一般の方々に向けて、メンタルヘルスに関する様々なテーマをお話しするサイトです。

## 🚀 デプロイ方法

### Vercelへのデプロイ

1. このリポジトリをGitHubにpush
2. [Vercel](https://vercel.com)にログイン
3. 「Import Project」をクリック
4. GitHubリポジトリを選択
5. 自動的にデプロイされます

### 環境変数の設定

Vercelのダッシュボードで以下の環境変数を設定してください:

```
VITE_APP_TITLE=精神科訪問看護 学びのテーマ
VITE_APP_LOGO=https://placehold.co/128x128/4F46E5/FFFFFF?text=MH
```

## 🛠️ ローカル開発

```bash
# 依存関係のインストール
npm install

# 開発サーバーの起動
npm run dev

# ビルド
npm run build
```

## 📝 コンテンツ更新

### テーマの追加・編集

`client/src/data/themes.json` を編集してください。

### デザインのカスタマイズ

`client/src/index.css` でカラーテーマを変更できます。

## 📂 プロジェクト構造

```
mental-health-project/
├── client/
│   ├── src/
│   │   ├── components/     # UIコンポーネント
│   │   ├── pages/          # ページコンポーネント
│   │   ├── data/           # データファイル (themes.json)
│   │   ├── hooks/          # カスタムフック
│   │   ├── lib/            # ユーティリティ
│   │   └── contexts/       # Reactコンテキスト
│   └── index.html
├── shared/                 # 共有ファイル
├── server/                 # サーバーファイル
├── package.json
├── vite.config.ts
└── tsconfig.json
```

## 🎨 技術スタック

- React 18
- TypeScript
- Vite
- Tailwind CSS v4
- Wouter (ルーティング)
- shadcn/ui

## 📄 ライセンス

MIT
