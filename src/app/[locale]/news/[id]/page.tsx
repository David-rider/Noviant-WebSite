import { getAllArticleIds, getArticleMetadataById } from "@/data/news_manifest";
import ArticleView from "./ArticleView";
import { notFound } from "next/navigation";
import { getTranslations } from "next-intl/server";

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
    const article = getArticleMetadataById(id);
    if (!article) return { title: "Not Found | Noviant" };
    
    const t = await getTranslations({ locale, namespace: "NewsData" });
    const title = t(`articles.${id}.title`);
    const excerpt = t(`articles.${id}.excerpt`);
    
    return {
        title: `${title} | Noviant`,
        description: excerpt,
        openGraph: {
            title: `${title} | Noviant`,
            description: excerpt,
            url: `https://www.noviant.com/${locale}/news/${id}`,
            siteName: 'Noviant',
            images: article.image
                ? [{ url: `https://www.noviant.com${article.image}`, width: 1200, height: 628, alt: title }]
                : [{ url: 'https://www.noviant.com/images/ai-solutions/liquidedge-ai-pod.jpg', width: 1200, height: 628, alt: 'Noviant News' }],
            locale: locale,
            type: 'article',
        },
    };
}

export default async function ArticlePage({
    params,
}: {
    params: Promise<{ locale: string; id: string }>;
}) {
    const { id } = await params;
    const article = getArticleMetadataById(id);
    if (!article) notFound();
    return <ArticleView article={article} />;
}
