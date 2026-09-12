# LuminaryWorks 官网

母品牌官网，部署域名 **[luminaryworks.dev](https://luminaryworks.dev)**。

设计依据：MetaRepo [`spec/website-design.md`](https://github.com/LuminaryWorks/LuminaryWorks/blob/main/spec/website-design.md)（令牌、组件、路由与文案的唯一来源）。

## 技术栈

- **Next.js 16.3.3**（`output: "export"` 静态导出）
- React 19 + TypeScript 5.7.3
- antd 6 + SCSS Modules
- 中文默认挂 `/`，英文挂 `/en/`

## 本地开发

```bash
pnpm install
pnpm dev    # http://localhost:13000
pnpm build  # 输出到 out/
pnpm typecheck
pnpm check
```

## Cloudflare Pages

| 项 | 值 |
|----|-----|
| Pages 项目名 | `luminaryworks-website` |
| 构建产物 | `out/` |
| 生产域名 | https://luminaryworks.dev |
| 文档站 | https://docs.luminaryworks.dev |

`main` 分支 push 后由 [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml) 自动：`pnpm build` → `out/` → production 发布到 `luminaryworks-website`。

### Secrets

在 [组织 Actions secrets](https://github.com/organizations/LuminaryWorks/settings/secrets/actions) 配置：

| Secret | 说明 |
|--------|------|
| `CLOUDFLARE_API_TOKEN` | Account · Cloudflare Pages · Edit |
| `CLOUDFLARE_ACCOUNT_ID` | Cloudflare 账户 ID |

组织 secret 的 Repository access 须包含 `LuminaryWorks/website`。

### 本机发布

```bash
pnpm build
npx wrangler pages deploy out --project-name=luminaryworks-website
```

不要加 `--branch`，否则会变成预览部署。

### 自定义域名

在 Cloudflare Pages 项目绑定 `luminaryworks.dev` 与 `www.luminaryworks.dev`（CNAME 交给 Pages）。文档站走 `docs.luminaryworks.dev`。

## License

[Polyform Noncommercial License 1.0.0](LICENSE) (Polyform-NC). Non-commercial use permitted. Commercial use requires a separate license from LuminaryWorks.
