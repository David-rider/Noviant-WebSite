import DataAnalyticsPage from "./DataAnalyticsView";
import { setRequestLocale } from "next-intl/server";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
    const { locale } = await params;
    return {
        title: locale.startsWith('zh')
            ? (locale === 'zh-TW' ? '數據分析與商業智能解決方案 紐約 - Noviant' : '数据分析与商业智能解决方案 纽约 - Noviant')
            : 'Data Analytics & Business Intelligence Solutions NYC - Noviant',
        description: locale.startsWith('zh')
            ? (locale === 'zh-TW' ? 'Noviant為紐約企業提供數據分析與商業智能解決方案，將業務數據轉化為可執行的決策依據。' : 'Noviant为纽约企业提供数据分析与商业智能解决方案，将业务数据转化为可执行的决策依据。')
            : 'Transform your business data into actionable insights with Noviant\'s data analytics and business intelligence solutions in New York.',
        openGraph: {
            title: locale.startsWith('zh')
                ? (locale === 'zh-TW' ? '數據分析與商業智能解決方案 紐約 - Noviant' : '数据分析与商业智能解决方案 纽约 - Noviant')
                : 'Data Analytics & Business Intelligence Solutions NYC - Noviant',
            description: locale.startsWith('zh')
                ? (locale === 'zh-TW' ? 'Noviant為紐約企業提供數據分析與商業智能解決方案，將業務數據轉化為可執行的決策依據。' : 'Noviant为纽约企业提供数据分析与商业智能解决方案，将业务数据转化为可执行的决策依据。')
                : 'Transform your business data into actionable insights with Noviant\'s data analytics and business intelligence solutions in New York.',
            url: `https://www.noviant.com/${locale}/data-analytics`,
            siteName: 'Noviant',
            locale: locale,
            type: 'website',
        },
    };
}

export default async function Page({ params }: { params: Promise<{ locale: string }> }) {
    const { locale } = await params;
    setRequestLocale(locale);
    return <DataAnalyticsPage />;
}
