# Noviant 网站 News 页面每周更新操作手册
# Weekly News Page Update Guide — Noviant Website

---

> [!IMPORTANT]
> **核心原则 | Core Principle**
> 你只需要编辑 **一个文件**：`src/data/news.ts`
> You only ever need to edit **one file**: `src/data/news.ts`
> 分页（pagination）是 **自动计算** 的，超过 6 篇后页码会自动出现。
> Pagination is **computed automatically** — page 2/3/etc. appear once you exceed 6 articles.

---

## 系统原理速览 | How the System Works

```
src/data/news.ts          ← 你写新闻的唯一地方
      │
      ▼
NewsView.tsx              ← 自动把 newsArticles[] 按 6 篇/页分页
      │
      ▼
/news          (列表页，含分页导航)
/news/[id]     (每篇文章详情页，由 id 字段决定 URL)
```

**分页计算逻辑 (在 NewsView.tsx 第 29-33 行)：**
```ts
const ITEMS_PER_PAGE = 6;
const totalPages = Math.ceil(newsArticles.length / ITEMS_PER_PAGE);
const paginatedArticles = newsArticles.slice(startIndex, startIndex + ITEMS_PER_PAGE);
```
- 目前有 13 篇文章 → 自动显示 3 页（6 + 6 + 1）
- 新增第 7 篇后 → 自动出现第 2 页
- **你不需要动任何其他代码**

---

## 每周更新步骤 | Weekly Update Checklist

### 第 1 步：准备封面图片 | Step 1 — Prepare the Cover Image

```
目标路径：d:\study\projects01\Noviant-WebSite\public\images\news\
```

1. 将图片文件放入上述文件夹
2. 命名规则：全小写，横杠连接，无空格
   - ✅ 正确：`ai-security-summit-2026.jpg`
   - ❌ 错误：`AI Security Summit 2026.jpg`
3. 推荐尺寸：**1200 × 630 px**，格式 `.jpg` 或 `.webp`
4. 引用路径写法：`"/images/news/ai-security-summit-2026.jpg"`

> [!TIP]
> 如果文章暂无专属图，可复用 `/images/unsplash/photo-1551434678-e076c223a692.jpg` 作为占位。
> If you don't have a dedicated image, reuse the fallback at `/images/unsplash/photo-1551434678-e076c223a692.jpg`.

---

### 第 2 步：打开数据文件 | Step 2 — Open the Data File

```
文件路径：d:\study\projects01\Noviant-WebSite\src\data\news.ts
```

---

### 第 3 步：在数组最顶部添加新文章 | Step 3 — Prepend the New Article

**新文章必须插入在第 28 行的 `[` 之后，Welcome 文章之前**，这样它才会显示在第 1 页第 1 位。

```ts
export const newsArticles: NewsArticle[] = [
    // ← ← ← 在这里插入新文章
    {
        id: "welcome-to-noviant-news",   // ← Welcome 文章始终保留在后面
        ...
    },
```

**完整模板 | Full Article Template：**

```ts
{
    id: "your-article-url-slug",          // ← URL 唯一标识，小写+横杠，不可重复
    category: "ai",                        // ← 5选1: "ai" | "security" | "cloud" | "company" | "industry"
    image: "/images/news/your-image.jpg",  // ← 第1步准备的图片路径
    date: {
        en: "April 9, 2026",               // ← 英文日期格式
        zh: "2026年4月9日",                // ← 中文日期格式
    },
    title: {
        en: "Your English Article Title Here",
        zh: "你的中文文章标题写在这里",
    },
    excerpt: {
        en: "A 1-2 sentence summary shown on the news card. Keep it concise and compelling.",
        zh: "显示在新闻卡片上的1-2句摘要。保持简洁有吸引力。",
    },
    body: {
        en: `First paragraph of the article body.

Second paragraph — use blank line (\\n\\n) to separate paragraphs.

• Bullet point one
• Bullet point two
• Bullet point three

Closing paragraph with call to action or summary.`,
        zh: `文章正文第一段。

第二段——用空行（\\n\\n）分隔段落。

• 要点一
• 要点二
• 要点三

结束段落，包含行动号召或摘要。`,
    },
},
```

---

### 第 4 步：分类标签选择 | Step 4 — Choose the Right Category

| category 值 | 颜色 | 适用场景 |
|-------------|------|----------|
| `"ai"` | 紫色 | AI、机器学习、自动化相关 |
| `"security"` | 红色 | 网络安全、合规、ISO认证 |
| `"cloud"` | 蓝色 | 云服务、Azure、AWS、虚拟化 |
| `"company"` | 绿色 | 公司公告、合作伙伴、获奖 |
| `"industry"` | 琥珀色 | 行业分析、市场趋势、观点文章 |

---

### 第 5 步：保存并本地验证 | Step 5 — Save and Verify Locally

```powershell
# 在项目根目录运行
cd d:\study\projects01\Noviant-WebSite
npm run dev
```

然后访问：
- `http://localhost:3000/en/news` → 检查新文章是否出现在第 1 位
- `http://localhost:3000/en/news/your-article-url-slug` → 检查详情页是否正确显示
- `http://localhost:3000/zh/news` → 检查中文版是否正确

---

### 第 6 步：提交到 GitHub | Step 6 — Commit to GitHub

```powershell
cd d:\study\projects01\Noviant-WebSite
git add src/data/news.ts
git add public/images/news/your-image.jpg   # 如有新图片
git commit -m "news: add article 'your-article-url-slug' (2026-04-09)"
git push origin main
```

---

## 页码如何自动增长 | How Pagination Scales Automatically

| 文章总数 | 页数 | 页1内容 | 页2内容 | 页3内容 |
|---------|------|---------|---------|---------|
| 1–6篇   | 1页  | 全部    | —       | —       |
| 7–12篇  | 2页  | 最新6篇 | 旧6篇   | —       |
| 13–18篇 | 3页  | 最新6篇 | 中6篇   | 旧6篇   |
| 19–24篇 | 4页  | 最新6篇 | ...     | ...     |

**关键：数组顺序 = 显示顺序**
- 数组第 0 位 → 第 1 页第 1 张卡片
- 数组第 6 位 → 第 2 页第 1 张卡片
- 所以：**新文章永远插在数组最前面**（Welcome 文章之前），旧文章自动被"推"到第 2、3 页

---

## 特殊规则：Welcome 文章永远保留 | Special Rule: Keep the Welcome Post

```
id: "welcome-to-noviant-news"
```

这篇文章 **不要删除**，它是新闻中心的常设入口说明。  
This article should **never be deleted** — it serves as the permanent introduction to the news hub.

随着你不断添加新文章，它会自然地被推到最后一页，但仍然可以通过直接链接访问：  
`/en/news/welcome-to-noviant-news`

---

## id 字段命名规范 | Article ID Naming Rules

| 规则 | 示例 |
|------|------|
| 全小写 | ✅ `ai-security-summit` |
| 横杠代替空格 | ✅ `noviant-wins-award-2026` |
| 简洁描述标题 | ✅ `cloud-migration-guide-2026` |
| 包含年份（推荐）| ✅ `nyc-tech-week-2026` |
| 不重复（全局唯一）| 每次添加前检查是否已存在相同 id |

---

## 常见错误与解决方法 | Common Mistakes & Fixes

| 错误现象 | 原因 | 解决方法 |
|---------|------|---------|
| 文章不显示在第1页 | 新文章插在了 Welcome 之后 | 把新文章移到数组最前面 |
| 详情页 404 | id 包含空格或大写字母 | 改为全小写横杠格式 |
| 图片显示为默认灰色 | 图片路径错误或文件未放入 /public | 检查路径，确认文件存在 |
| 页码不出现 | 还不到 7 篇文章 | 正常，第 7 篇加入后自动出现 |
| TypeScript 编译错误 | category 填写了不支持的值 | 只能用 5 个预定义值之一 |
| 中文乱码 | 保存编码不对 | 确保文件以 UTF-8 without BOM 保存 |

---

## 每周更新快速清单 | Quick Weekly Checklist

```
[ ] 1. 准备好封面图片，放入 public/images/news/
[ ] 2. 打开 src/data/news.ts
[ ] 3. 在数组最顶部（Welcome 文章之前）插入新 article 对象
[ ] 4. 填写所有字段（id, category, image, date, title, excerpt, body）
[ ] 5. 确认 en 和 zh 两个语言版本都已填写
[ ] 6. npm run dev 本地预览，检查列表页和详情页
[ ] 7. git add + git commit + git push
[ ] 8. （如部署到 WP Engine）触发 GitHub Actions 自动构建
```

---

*最后更新 | Last Updated: 2026-04-09*
