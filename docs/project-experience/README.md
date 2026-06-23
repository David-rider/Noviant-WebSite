# 项目经验文档 (Project Experience Documentation)

本目录存放 Noviant 网站项目的**开发与运维经验文档**生成脚本，持续维护、版本化管理。

## 文件说明

| 文件 | 用途 | 是否提交 Git |
|------|------|------|
| `build-doc.js` | 文档的**源文件**（脚本生成 Word，便于版本控制与持续修订） | 是 |
| `README.md` | 本说明 | 是 |
| `../../local-docs/project-experience/Noviant网站项目-经验文档-vX.Y.docx` | 生成的 Word 文档（交付/阅读用） | **否，仅本地保留** |

> `.docx` 输出文件位于仓库根目录的 `local-docs/project-experience/`，该目录已加入 `.gitignore`，不会提交到 GitHub/Vercel。

## 如何更新文档（持续优化）

文档内容由 `build-doc.js` 脚本生成，**不要直接改 .docx**，而是改脚本后重新生成，这样内容可被 Git 追踪、便于对比。

步骤：

1. 编辑 `build-doc.js`：
   - 提升顶部的 `DOC_VERSION`（如 `v1.0` → `v1.1`）与 `DOC_DATE`
   - 在 `versionRows` 数组**追加一行**，写清本版本新增/调整的内容
   - 在正文 sections 中新增或修订对应经验章节
2. 安装依赖并生成（在本目录执行）：
   ```bash
   npm install docx
   node build-doc.js
   ```
3. 生成新的 `Noviant网站项目-经验文档-vX.Y.docx`，输出到 `local-docs/project-experience/`（仅本地，不提交）

## 版本号规则

- 格式：`主版本.次版本`（如 v1.0、v1.1、v2.0）
- **重大结构调整** → 提升主版本（v1.x → v2.0）
- **新增 / 修订单项经验** → 提升次版本（v1.0 → v1.1）
- 每个版本都必须在文档第二页的「版本说明」表格中有对应行

## 当前版本

**v1.0**（2026-06-14）— 首次整理，涵盖表单集成、静态部署、SEO/GEO、多语言、安全合规、性能、响应式、部署流程等全部经验。
