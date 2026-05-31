# 鲜血狂欢 Vercel 部署说明

## 本地运行

```bash
npm install
npm run dev
```

本地构建验证：

```bash
npm run build
npm test
```

## Vercel 项目绑定

首次部署前，在项目根目录执行：

```bash
vercel link
```

该命令会生成 `.vercel/project.json`，其中包含 `orgId` 和 `projectId`。不要提交 `.vercel` 目录。

## GitHub Secrets

在 GitHub 仓库的 `Settings -> Secrets and variables -> Actions` 中配置：

- `VERCEL_TOKEN`
- `VERCEL_ORG_ID`
- `VERCEL_PROJECT_ID`

`VERCEL_ORG_ID` 与 `VERCEL_PROJECT_ID` 可从本地 `.vercel/project.json` 读取。

## Preview 部署

Pull Request 会触发 `.github/workflows/vercel-ci.yml`：

```bash
vercel pull --yes --environment=preview
vercel build
vercel deploy --prebuilt
```

该流程生成 Vercel Preview 部署。

## Production 部署

push 到 `main` 会触发 Production 部署：

```bash
vercel pull --yes --environment=production
vercel build --prod
vercel deploy --prebuilt --prod
```

如需手动触发，可在 GitHub Actions 中运行 `workflow_dispatch`。当触发分支是 `main` 时使用 Production；其他分支使用 Preview。
