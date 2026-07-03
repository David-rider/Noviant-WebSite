import { getTranslations } from "next-intl/server";
import NewsView from "./NewsView";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
    const { locale } = await params;
    const t = await getTranslations({ locale, namespace: "News_Page" });
    return {
        title: `${t("title")} | Noviant`,
        description: t("subtitle"),
        openGraph: {
            title: locale.startsWith('zh')
                ? (locale === 'zh-TW'
                    ? '新聞與洞察 | Noviant 資訊中心'
                    : '新闻与洞察 | Noviant 资讯中心')
                : 'News & Insights | Noviant Technology Blog',
            description: t("subtitle"),
            url: `https://www.noviant.com/${locale}/news`,
            siteName: 'Noviant',
            images: [{ url: 'https://www.noviant.com/images/ai-solutions/liquidedge-ai-pod.jpg', width: 1200, height: 628, alt: 'Noviant News' }],
            locale: locale,
            type: 'website',
        },
    };
}

export default async function NewsPage({ params }: { params: Promise<{ locale: string }> }) {
    await params;
    return <NewsView />;
}
