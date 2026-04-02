/**
 * news.ts — Noviant News Articles Data File
 * ==========================================
 * To add or edit a news article, modify this array.
 * Each article supports English (en) and Chinese (zh) content.
 * 
 * Fields:
 *   id       — unique URL slug, e.g. "ai-platform-launch"
 *   category — one of: "ai" | "security" | "cloud" | "company" | "industry"
 *   date     — display date string per locale
 *   image    — path relative to /public, e.g. "/images/news/article1.jpg"
 *   title    — article headline per locale
 *   excerpt  — short summary shown on the listing card per locale
 *   body     — full article content in Markdown-style plain text per locale
 *              Use \n\n for paragraph breaks
 */

export interface NewsArticle {
    id: string;
    category: "ai" | "security" | "cloud" | "company" | "industry";
    image: string;
    date: { en: string; zh: string };
    title: { en: string; zh: string };
    excerpt: { en: string; zh: string };
    body: { en: string; zh: string };
}

export const newsArticles: NewsArticle[] = [
    // ──────────────────────────────────────────────────────────────────────
    // 📌 REPLACE THE CONTENT BELOW WITH YOUR REAL ARTICLES
    // ──────────────────────────────────────────────────────────────────────
    {
        id: "welcome-to-noviant-news",
        category: "company",
        image: "/images/unsplash/photo-1551434678-e076c223a692.jpg",
        date: {
            en: "April 2, 2026",
            zh: "2026年4月2日",
        },
        title: {
            en: "Welcome to Noviant News — Your Source for IT Insights",
            zh: "欢迎来到 Noviant 新闻中心——您的 IT 洞见来源",
        },
        excerpt: {
            en: "This is Noviant's official news center. We will share technology updates, company announcements, and industry insights here. Stay tuned.",
            zh: "这里是 Noviant 的官方新闻中心。我们将在此分享技术动态、公司公告以及行业洞见，敬请关注。",
        },
        body: {
            en: `Welcome to the Noviant News & Insights hub.\n\nWe created this space to keep you informed about the latest developments in enterprise IT, managed services, and AI infrastructure — all from the perspective of a team that works with these technologies every day.\n\nWhat to expect here:\n\n• Company announcements and new service launches\n• Technology deep-dives written by our engineers\n• Industry insights and best practices\n• Case studies from our client work\n\nIf you have questions about any of our services, please visit our Contact page. We look forward to sharing more with you soon.`,
            zh: `欢迎来到 Noviant 新闻与洞见中心。\n\n我们创建这个空间，是为了让您及时了解企业 IT、托管服务和 AI 基础设施领域的最新动态——一切来自每天与这些技术打交道的团队视角。\n\n您可以在这里期待：\n\n• 公司公告与新服务发布\n• 由我们工程师撰写的深度技术文章\n• 行业洞见与最佳实践\n• 来自客户合作的案例研究\n\n如果您对我们的任何服务有疑问，请访问联系页面。我们期待很快与您分享更多内容。`,
        },
    },
    // ──────────────────────────────────────────────────────────────────────
    // Add more articles below following the same format ↓
    // ──────────────────────────────────────────────────────────────────────
];

/** Returns the article with the given id, or undefined */
export function getArticleById(id: string): NewsArticle | undefined {
    return newsArticles.find((a) => a.id === id);
}

/** Returns all article IDs (used for static path generation) */
export function getAllArticleIds(): string[] {
    return newsArticles.map((a) => a.id);
}
