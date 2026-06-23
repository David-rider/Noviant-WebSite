const fs = require("fs");
const path = require("path");
const {
    Document, Packer, Paragraph, TextRun, Table, TableRow, TableCell,
    AlignmentType, LevelFormat, HeadingLevel, BorderStyle, WidthType,
    ShadingType, PageNumber, PageBreak, Header, Footer, TableOfContents,
    VerticalAlign,
} = require("docx");

const DOC_VERSION = "v1.0";
const DOC_DATE = "2026年6月14日";

// ---------- helpers ----------
const FONT = "Microsoft YaHei";
const BLUE = "1E4F8A";
const LIGHTBLUE = "D5E8F0";
const GREY = "F2F4F7";

const border = { style: BorderStyle.SINGLE, size: 1, color: "CCCCCC" };
const borders = { top: border, bottom: border, left: border, right: border,
    insideHorizontal: border, insideVertical: border };

function h1(text) {
    return new Paragraph({ heading: HeadingLevel.HEADING_1, children: [new TextRun(text)] });
}
function h2(text) {
    return new Paragraph({ heading: HeadingLevel.HEADING_2, children: [new TextRun(text)] });
}
function p(text, opts = {}) {
    return new Paragraph({
        spacing: { after: 120, line: 276 },
        children: [new TextRun({ text, ...opts })],
    });
}
function bullet(text, level = 0) {
    return new Paragraph({
        numbering: { reference: "bullets", level },
        spacing: { after: 60, line: 264 },
        children: typeof text === "string" ? [new TextRun(text)] : text,
    });
}
function labelLine(label, value) {
    return new Paragraph({
        spacing: { after: 60, line: 264 },
        numbering: { reference: "bullets", level: 0 },
        children: [
            new TextRun({ text: label + "：", bold: true, color: BLUE }),
            new TextRun({ text: value }),
        ],
    });
}

// problem / solution block
function lesson(title, problem, solution) {
    const out = [
        new Paragraph({
            spacing: { before: 120, after: 60 },
            children: [new TextRun({ text: title, bold: true, size: 24 })],
        }),
    ];
    if (problem) {
        out.push(new Paragraph({
            spacing: { after: 60, line: 264 },
            children: [
                new TextRun({ text: "问题：", bold: true, color: "B23B3B" }),
                new TextRun({ text: problem }),
            ],
        }));
    }
    if (solution) {
        out.push(new Paragraph({
            spacing: { after: 120, line: 264 },
            children: [
                new TextRun({ text: "经验 / 做法：", bold: true, color: "2E7D46" }),
                new TextRun({ text: solution }),
            ],
        }));
    }
    return out;
}

// ---------- version history table ----------
function versionCell(text, { head = false, w } = {}) {
    return new TableCell({
        borders,
        width: { size: w, type: WidthType.DXA },
        shading: { fill: head ? BLUE : "FFFFFF", type: ShadingType.CLEAR },
        margins: { top: 80, bottom: 80, left: 120, right: 120 },
        verticalAlign: VerticalAlign.CENTER,
        children: (Array.isArray(text) ? text : [text]).map((t) =>
            new Paragraph({
                spacing: { after: 40, line: 252 },
                children: [new TextRun({ text: t, bold: head, color: head ? "FFFFFF" : "000000", size: head ? 22 : 20 })],
            })
        ),
    });
}

const COLW = [1500, 1800, 6060]; // sum 9360
const versionRows = [
    new TableRow({
        tableHeader: true,
        children: [
            versionCell("版本号", { head: true, w: COLW[0] }),
            versionCell("发布日期", { head: true, w: COLW[1] }),
            versionCell("主要功能与调整变化", { head: true, w: COLW[2] }),
        ],
    }),
    new TableRow({
        children: [
            versionCell("v1.0", { w: COLW[0] }),
            versionCell("2026-06-14", { w: COLW[1] }),
            versionCell([
                "首次整理。汇总 Noviant 官网开发与运维全过程经验，涵盖：",
                "• 表单服务集成（Web3Forms → Formspree 迁移、hCaptcha 前端验证）",
                "• Next.js 16 / React 19 静态导出水合（hydration）陷阱",
                "• 静态资源与合同 PDF 托管方式",
                "• SEO / GEO 优化（元数据、OG、动态 locale、FAQ 结构化数据）",
                "• 多语言（next-intl）键值一致性管理",
                "• 安全与合规（依赖升级、CSP、安全响应头、隐私政策）",
                "• 图片性能优化（sharp 压缩）",
                "• PC / 平板 / 移动多终端响应式验证",
                "• 标准部署流程与维护检查清单",
            ], { w: COLW[2] }),
        ],
    }),
];

const versionTable = new Table({
    width: { size: 9360, type: WidthType.DXA },
    columnWidths: COLW,
    rows: versionRows,
});

// ---------- document ----------
const doc = new Document({
    creator: "Noviant Project Team",
    title: "Noviant 网站项目 — 开发与运维经验文档",
    styles: {
        default: { document: { run: { font: FONT, size: 21 } } },
        paragraphStyles: [
            { id: "Heading1", name: "Heading 1", basedOn: "Normal", next: "Normal", quickFormat: true,
                run: { size: 30, bold: true, font: FONT, color: BLUE },
                paragraph: { spacing: { before: 280, after: 160 }, outlineLevel: 0,
                    border: { bottom: { style: BorderStyle.SINGLE, size: 6, color: BLUE, space: 4 } } } },
            { id: "Heading2", name: "Heading 2", basedOn: "Normal", next: "Normal", quickFormat: true,
                run: { size: 25, bold: true, font: FONT, color: "333333" },
                paragraph: { spacing: { before: 200, after: 120 }, outlineLevel: 1 } },
        ],
    },
    numbering: {
        config: [
            { reference: "bullets",
                levels: [
                    { level: 0, format: LevelFormat.BULLET, text: "•", alignment: AlignmentType.LEFT,
                        style: { paragraph: { indent: { left: 540, hanging: 280 } } } },
                    { level: 1, format: LevelFormat.BULLET, text: "–", alignment: AlignmentType.LEFT,
                        style: { paragraph: { indent: { left: 1020, hanging: 280 } } } },
                ] },
        ],
    },
    sections: [
        // ===== COVER =====
        {
            properties: { page: { size: { width: 12240, height: 15840 }, margin: { top: 1440, right: 1440, bottom: 1440, left: 1440 } } },
            children: [
                new Paragraph({ spacing: { before: 2600 } }),
                new Paragraph({ alignment: AlignmentType.CENTER, spacing: { after: 200 },
                    children: [new TextRun({ text: "Noviant 网站项目", bold: true, size: 56, color: BLUE, font: FONT })] }),
                new Paragraph({ alignment: AlignmentType.CENTER, spacing: { after: 600 },
                    children: [new TextRun({ text: "开发与运维经验文档", bold: true, size: 40, color: "333333", font: FONT })] }),
                new Paragraph({ alignment: AlignmentType.CENTER, spacing: { after: 120 },
                    children: [new TextRun({ text: "Development & Operations — Lessons Learned", italics: true, size: 24, color: "777777", font: FONT })] }),
                new Paragraph({ spacing: { before: 1400 } }),
                new Paragraph({ alignment: AlignmentType.CENTER, spacing: { after: 100 },
                    children: [new TextRun({ text: "文档版本：" + DOC_VERSION, bold: true, size: 28, font: FONT })] }),
                new Paragraph({ alignment: AlignmentType.CENTER, spacing: { after: 100 },
                    children: [new TextRun({ text: "编制日期：" + DOC_DATE, size: 24, color: "555555", font: FONT })] }),
                new Paragraph({ alignment: AlignmentType.CENTER, spacing: { after: 100 },
                    children: [new TextRun({ text: "适用项目：www.noviant.com（Next.js 静态导出 + WP Engine 托管）", size: 22, color: "555555", font: FONT })] }),
            ],
        },
        // ===== VERSION HISTORY + TOC =====
        {
            properties: { page: { size: { width: 12240, height: 15840 }, margin: { top: 1440, right: 1440, bottom: 1440, left: 1440 } } },
            footers: { default: new Footer({ children: [new Paragraph({ alignment: AlignmentType.CENTER,
                children: [new TextRun({ text: "第 ", size: 18, color: "999999" }),
                    new TextRun({ children: [PageNumber.CURRENT], size: 18, color: "999999" }),
                    new TextRun({ text: " 页 · Noviant 经验文档 " + DOC_VERSION, size: 18, color: "999999" })] })] }) },
            children: [
                h1("版本说明 (Version History)"),
                p("本文档为持续维护的活文档。每次新增或修订经验内容时，请提升版本号并在下表追加一行，记录该版本对应的功能与调整变化。", { color: "555555" }),
                new Paragraph({ spacing: { after: 120 } }),
                versionTable,
                new Paragraph({ spacing: { before: 200 },
                    children: [new TextRun({ text: "版本号规则：主版本.次版本（如 v1.0、v1.1、v2.0）。重大结构调整提升主版本；新增/修订单项经验提升次版本。", italics: true, size: 18, color: "888888" })] }),
                new Paragraph({ children: [new PageBreak()] }),
                h1("目录 (Contents)"),
                new TableOfContents("目录", { hyperlink: true, headingStyleRange: "1-2" }),
            ],
        },
        // ===== BODY =====
        {
            properties: { page: { size: { width: 12240, height: 15840 }, margin: { top: 1440, right: 1440, bottom: 1440, left: 1440 } } },
            footers: { default: new Footer({ children: [new Paragraph({ alignment: AlignmentType.CENTER,
                children: [new TextRun({ text: "第 ", size: 18, color: "999999" }),
                    new TextRun({ children: [PageNumber.CURRENT], size: 18, color: "999999" }),
                    new TextRun({ text: " 页 · Noviant 经验文档 " + DOC_VERSION, size: 18, color: "999999" })] })] }) },
            children: [
                // 1
                h1("1. 项目技术栈概览"),
                labelLine("框架", "Next.js 16（App Router）+ React 19，output: 'export' 静态导出"),
                labelLine("多语言", "next-intl v4，三语言 en / zh-CN / zh-TW，localePrefix: 'always'"),
                labelLine("样式", "Tailwind CSS + framer-motion 动画 + lucide-react 图标"),
                labelLine("托管", "WP Engine（Nginx 提供静态文件），非传统 WordPress 动态站"),
                labelLine("表单", "Formspree（邮件投递）+ hCaptcha（前端防垃圾）"),
                labelLine("无服务端", "无数据库、无登录、无 API，攻击面极小"),
                p("核心特征：这是一个纯静态站点。所有页面在构建时预渲染为 HTML，没有任何运行时服务端逻辑。这一点决定了后续大量经验的方向。", { color: "555555" }),

                // 2
                h1("2. 表单服务集成经验"),
                ...lesson("2.1 hCaptcha 共享密钥被限流",
                    "使用第三方表单服务自带的共享 hCaptcha sitekey 时，会因多站点共用而触发 “Rate limited” 限流错误。",
                    "注册自己的 hCaptcha 账号，使用独立 sitekey。注意免费表单服务可能无法存储自定义 secret key，导致服务端校验始终失败。"),
                ...lesson("2.2 从 Web3Forms 迁移到 Formspree",
                    "Web3Forms 免费版邮件投递不稳定，后台显示已发送但收件方（含 Gmail）始终收不到邮件。",
                    "改用 Formspree。首次提交会向收件邮箱发送激活邮件（常进垃圾箱，需点击激活）。激活后投递稳定。"),
                ...lesson("2.3 hCaptcha token 不要发给表单服务",
                    "即使在表单后台把验证设为 None，只要 payload 里带 h-captcha-response 字段仍会触发服务端校验并报 “Could not validate hCaptcha”。",
                    "前端用 hCaptcha 做人机校验（控制提交按钮可用），但提交时不要把 token 放进发往表单服务的 body。hCaptcha 作为纯前端防刷手段。"),
                ...lesson("2.4 表单输入校验",
                    null,
                    "所有字段加 required / maxLength / type=email；message 限长 2000。降低滥用与异常输入风险。"),

                // 3
                h1("3. Next.js 16 / React 19 静态导出陷阱"),
                ...lesson("3.1 JSON-LD 不能放在客户端组件（最关键）",
                    "把 <script type=\"application/ld+json\" dangerouslySetInnerHTML> 放在 \"use client\" 组件里，生产环境会报 “Application error: a client-side exception has occurred”，页面白屏崩溃（React 19 水合错误）。",
                    "所有 JSON-LD 结构化数据必须放在服务端组件（page.tsx 或 layout.tsx），绝不能放在带 \"use client\" 的 View 组件里。这是本项目踩过的最严重生产事故。"),
                ...lesson("3.2 根路径跳转兼容性",
                    "静态导出 + localePrefix: 'always' 时，根路径 / 不会自动跳转到 /en/。",
                    "在根 page 提供 meta refresh + JS location.replace 双重跳转兜底，确保各类 CDN / 静态主机都能正确重定向。"),
                ...lesson("3.3 next.config 必要配置",
                    null,
                    "output: 'export'、trailingSlash: true（生成 page/index.html，Nginx 友好）、images.unoptimized: true（静态导出必需）。"),

                // 4
                h1("4. 静态资源与文件托管"),
                ...lesson("4.1 合同 PDF 404",
                    "Terms 页链接指向 WordPress 上传路径 wp-content/uploads/...，静态站替换 WordPress 后该路径失效，PDF 报 404。",
                    "把 PDF 等文档放进 public/documents/ 目录并提交到 Git。public/ 下所有内容都会被打包进每次部署，永不丢失，访问路径为 /documents/文件名。"),
                ...lesson("4.2 静态资源管理原则",
                    null,
                    "图片、PDF、字体等全部纳入 public/ 并进 Git 版本控制。不要依赖外部/WordPress 路径，避免迁移后断链。"),

                // 5
                h1("5. SEO / GEO 优化"),
                bullet("每个 page.tsx 都要有 generateMetadata，提供三语言 title / description。"),
                bullet("所有页面补全 openGraph（title / description / url / image / locale）。"),
                bullet("OG 的 url 字段使用动态 ${locale}，不要硬编码 /en/，否则中文页 OG 链接错误。"),
                bullet("关键页面加 FAQPage / Product / ItemList 等 Schema.org 结构化数据（利于 SEO 与 AI 检索 GEO）。"),
                bullet("sitemap.ts 覆盖全部静态路由 + 动态新闻页，三语言 hreflang alternates 对称。"),
                bullet("robots.txt 指向 sitemap.xml。"),
                ...lesson("经验提醒", null,
                    "新增页面时，务必同步：generateMetadata、openGraph、sitemap 路由三处，缺一会拉低 SEO 评分。"),

                // 6
                h1("6. 多语言 (i18n) 管理"),
                ...lesson("6.1 翻译键一致性",
                    "三个语言 JSON（en / zh-CN / zh-TW）键不一致会导致某语言页面运行时崩溃或显示键名。",
                    "每次改完翻译，用脚本递归比对三个文件的键集合，确保 “缺失 / 多余” 均为 0。新闻文章也要逐篇核对三语言齐全。"),
                ...lesson("6.2 语言要求",
                    null,
                    "本项目只用中文（简/繁）和英文，严禁出现日文等其它语言。"),
                ...lesson("6.3 语言切换器",
                    null,
                    "使用原生 <select> 实现，在 PC / 平板 / 移动触屏上体验最佳，无需自定义下拉。"),
                ...lesson("6.4 富文本带链接的翻译",
                    null,
                    "需要在译文中嵌入链接（如 “同意我们的<link>隐私政策</link>”）时，用 next-intl 的 t.rich + <link> 占位，避免按句子拆分破坏不同语言语序。"),

                // 7
                h1("7. 安全与合规"),
                ...lesson("7.1 依赖漏洞",
                    "npm audit 报出 Next.js 及构建工具链多个中高危漏洞。",
                    "定期 npm audit + npm audit fix；框架按需小版本升级（如 16.1.6 → 16.2.9）。静态站大部分服务端漏洞不可利用，但仍应升级做纵深防御。升级后必须构建验证。"),
                ...lesson("7.2 安全响应头",
                    "静态导出无法在代码里设置 HTTP 响应头（HSTS、X-Frame-Options 等）。",
                    "在 WP Engine 后台（Nginx 规则 / CDN 层）配置安全响应头；CSP 可同时用 layout 的 meta 标签兜底。配置清单维护在 wpengine-security-headers.txt。"),
                ...lesson("7.3 隐私政策（合规刚需）",
                    "网站通过联系表单收集个人信息（姓名/邮箱/电话/公司）并使用第三方处理方（Formspree / hCaptcha），却没有隐私政策——违反 GDPR / CCPA，且对一家做网络安全的公司是信誉硬伤。",
                    "新增三语言 /privacy 页面（11 个章节，覆盖数据收集、第三方、Cookie、保留、用户权利、跨境传输、联系方式）；Footer 加链接；联系表单加隐私告知。建议最终经法务过目。"),
                ...lesson("7.4 Cookie 同意",
                    null,
                    "本站无任何分析/广告追踪，仅 hCaptcha 必要 Cookie，因此无需 Cookie 同意横幅，合规天然简化。若未来接入 Google Analytics 等，则需重新评估并加同意横幅。"),
                ...lesson("7.5 外链安全",
                    null,
                    "所有 target=\"_blank\" 必须带 rel=\"noopener noreferrer\"，防止 tabnabbing。"),

                // 8
                h1("8. 性能优化"),
                ...lesson("8.1 图片体积",
                    "多张 PNG/JPG 超过 1MB，拖慢移动端加载，图片总量达 16.7MB。",
                    "用 sharp 批量压缩：PNG 转 palette + 限宽 1600px，JPG 用 mozjpeg q78。总量降到 10.25MB（-39%），单图最大从 1MB+ 降到约 340KB。压缩后重新构建验证。"),
                ...lesson("8.2 构建产物体量",
                    null,
                    "关注 out/ 总 JS 与图片体积；图片是静态站的主要负重，优先优化。"),

                // 9
                h1("9. 响应式与多终端适配"),
                bullet("导航断点 lg(1024px)：以上显示完整横向菜单 + 悬停下拉；以下显示汉堡菜单 + 右侧滑入抽屉 + 手风琴分组。"),
                bullet("平板竖屏(768px)归入移动菜单，属主流且合理的做法。"),
                bullet("移动抽屉底部固定语言切换器，便于触达。"),
                bullet("表单字段在移动端全宽堆叠，触屏友好。"),
                ...lesson("9.1 多终端实测",
                    null,
                    "部署前用本地静态服务器 + 浏览器预览，在 1280 / 768 / 375 三种视口逐一截图验证：打开、浏览、语言切换、表单、菜单交互。"),
                ...lesson("9.2 hCaptcha localhost 警告",
                    "本地测试时 hCaptcha 显示 “Warning: localhost detected”。",
                    "这是正常现象——hCaptcha 只在注册的真实域名加载真实验证，部署到 noviant.com 后正常，无需修改。"),

                // 10
                h1("10. 标准部署流程"),
                new Paragraph({ numbering: { reference: "bullets", level: 0 }, children: [new TextRun({ text: "改完代码后，本地执行：", bold: true })] }),
                bullet("npm run build —— 构建验证（编译 + 138/141 页生成 + 资源打包）", 1),
                bullet("确认输出：✓ Compiled successfully 且 ✓ Generating static pages 全部通过、无 error", 1),
                bullet("三语言翻译键比对脚本 —— 确保键一致", 1),
                bullet("（涉及视觉/布局时）本地预览三终端截图验证", 1),
                new Paragraph({ numbering: { reference: "bullets", level: 0 }, children: [new TextRun({ text: "验证通过后：", bold: true })] }),
                bullet("git commit + push 到 GitHub（main 分支）", 1),
                bullet("压缩 out/* 为 Noviant_Deploy_日期_版本.zip", 1),
                bullet("上传到 WP Engine 部署", 1),
                ...lesson("部署提醒", null,
                    "WP Engine 是静态文件托管，无需 .htaccess / web.config；务必上传最新 zip，曾因误传旧包导致线上仍是旧表单代码。"),

                // 11
                h1("11. 维护检查清单"),
                p("建议每 1–2 个月执行一次（约 5 分钟）：", { bold: true }),
                bullet("npm audit —— 查看新漏洞"),
                bullet("npm audit fix —— 自动修复安全问题"),
                bullet("npm run build —— 构建验证，确认修复未破坏网站"),
                bullet("三步通过后重新打包部署；任一步报错则先排查根因"),
                new Paragraph({ spacing: { before: 200 },
                    children: [new TextRun({ text: "—— 文档持续维护中，新增经验请更新版本说明表 ——", italics: true, color: "888888", size: 18 })],
                    alignment: AlignmentType.CENTER }),
            ],
        },
    ],
});

const outDir = path.join(__dirname, "..", "..", "local-docs", "project-experience");
const outPath = path.join(outDir, `Noviant网站项目-经验文档-${DOC_VERSION}.docx`);
Packer.toBuffer(doc).then((buf) => {
    fs.mkdirSync(outDir, { recursive: true });
    fs.writeFileSync(outPath, buf);
    console.log("Created:", outPath, (buf.length / 1024).toFixed(0) + "KB");
});
