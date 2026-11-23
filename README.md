# 月下存档点 · TIDENIGHT

基于 [Astro](https://astro.build/) 和 [Fuwari](https://github.com/saicaca/fuwari) 的中文个人博客，记录独立游戏、个人生活和 AI 技术。Fuwari 基线为 `6d39b0dec41282e7852e23e032998a5789abee28`，上游许可见 `LICENSE`。旧 Jekyll 站仍可在 Git 历史（`3077cbf`）查阅。

## 本地开发

使用 Node.js 24 与项目锁定的 pnpm：

```sh
corepack enable
pnpm install --frozen-lockfile
pnpm dev
```

文章在 `src/content/posts/`，按需使用 `pnpm new-post my-post` 生成草稿。三个分类名称为 `独立游戏`、`个人生活`、`AI 技术`；不想发布的文稿请设 `draft: true`。公开文章的文件名决定其 URL，发布后不要随意改名。

验证生产版（Pagefind 静态搜索仅在构建后可验证）：

```sh
pnpm check
pnpm build
pnpm preview
```

## GitHub Pages

首次上线前，在仓库的 **Settings → Pages → Build and deployment → Source** 选择 **GitHub Actions**。然后合入 `main`，即可由 `.github/workflows/pages.yml` 检查和部署 `dist/`；原站域名仍是 [tidenight.github.io](https://tidenight.github.io/)。

## 配图来源

游戏截图只用于相应导读，权利归各自权利人；未提取、也不分发游戏内部贴图。更换配图时请保留署名，并核实使用条件。

| 站内文件 | 来源 |
| --- | --- |
| `public/media/monomoon-official.webp` | Gentle Giant，[Steam 截图](https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/3285880/03f3c0a759b3ac57a155e436370086e82b411eaa/ss_03f3c0a759b3ac57a155e436370086e82b411eaa.1920x1080.jpg)，[官方媒体资料](https://www.gentlegiantgames.com/presskit) |
| `public/media/animal-well-official.webp` | Billy Basso / Bigmode，[Steam 截图](https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/813230/ss_8773f0939bfd96fe25fbb7395bbae3d725044b12.1920x1080.jpg)，[官方媒体资料](https://www.animalwell.net/press/build/Animal%20Well/index.html) |
| `public/media/moonlit-savepoint.webp` | 使用内置 ImageGen 生成的首页插画，未输入游戏图像。提示词见 `docs/hero-prompt.md`。 |
