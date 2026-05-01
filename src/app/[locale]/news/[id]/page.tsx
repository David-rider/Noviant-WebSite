import { getAllArticleIds, getArticleById } from "@/data/news";
import ArticleView from "./ArticleView";
import { notFound } from "next/navigation";

// Required for static export: pre-generate all article pages
export async function generateStaticParams() {
    const ids = getAllArticleIds();
    const locales = ["en", "zh-CN", "zh-TW"];
    return locales.flatMap((locale) =>
        ids.map((id) => ({ locale, id }))
    );
}

export async function generateMetadata({
    params,
}: {
    params: Promise<{ locale: string; id: string }>;
}) {
    const { locale, id } = await params;
    const article = getArticleById(id);
    if (!article) return { title: "Not Found | Noviant" };
    const title = article.title[locale as "en" | "zh-CN" | "zh-TW"] ?? article.title.en;
    const excerpt = article.excerpt[locale as "en" | "zh-CN" | "zh-TW"] ?? article.excerpt.en;
    return {
        title: `${title} | Noviant`,
        description: excerpt,
    };
}

export default async function ArticlePage({
    params,
}: {
    params: Promise<{ locale: string; id: string }>;
}) {
    const { locale, id } = await params;
    const article = getArticleById(id);
    if (!article) notFound();
    return <ArticleView article={article} locale={locale} />;
}
