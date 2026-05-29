import AISolutionsPage from "./AISolutionsView";
import { setRequestLocale } from "next-intl/server";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
    const { locale } = await params;
    return {
        title: locale.startsWith('zh')
            ? (locale === 'zh-TW'
                ? '紐約企業AI解決方案 | LiquidEdge液冷集裝箱數據中心 | GPU集群 - Noviant'
                : '纽约企业AI解决方案 | LiquidEdge液冷集装箱数据中心 | GPU集群 - Noviant')
            : 'Enterprise AI Solutions New York | LiquidEdge AI POD | GPU Cluster - Noviant',
        description: locale.startsWith('zh')
            ? (locale === 'zh-TW'
                ? '為紐約企業提供AI基礎設施解決方案，包含LiquidEdge液冷一體化智算集裝箱(LE-44/LE-88/LE-200)、GPU伺服器集群、生成式AI與數位孿生系統。8週交付，PUE≤1.15。'
                : '为纽约企业提供AI基础设施解决方案，包含LiquidEdge液冷一体化智算集装箱(LE-44/LE-88/LE-200)、GPU服务器集群、生成式AI与数字孪生系统。8周交付，PUE≤1.15。')
            : 'Enterprise AI infrastructure solutions in New York — including LiquidEdge AI POD liquid-cooled datacenter containers (LE-44/88/200), GPU server clusters, generative AI, and Digital Twin systems. 8-week deployment, PUE ≤ 1.15.',
        openGraph: {
            title: locale.startsWith('zh')
                ? (locale === 'zh-TW'
                    ? '紐約企業AI解決方案 | LiquidEdge液冷集裝箱數據中心 - Noviant'
                    : '纽约企业AI解决方案 | LiquidEdge液冷集装箱数据中心 - Noviant')
                : 'Enterprise AI Solutions New York | LiquidEdge AI POD - Noviant',
            description: locale.startsWith('zh')
                ? (locale === 'zh-TW'
                    ? '液冷一體化智算集裝箱、GPU集群、生成式AI與數位孿生解決方案。'
                    : '液冷一体化智算集装箱、GPU集群、生成式AI与数字孪生解决方案。')
                : 'Liquid-cooled AI datacenter containers, GPU clusters, generative AI, and Digital Twin solutions.',
            url: 'https://www.noviant.com/en/ai-solutions',
            siteName: 'Noviant',
            images: [{ url: 'https://www.noviant.com/images/ai-solutions/liquidedge-ai-pod.jpg', width: 1200, height: 628, alt: 'LiquidEdge AI POD' }],
            locale: locale,
            type: 'website',
        },
    };
}

export default async function Page({ params }: { params: Promise<{ locale: string }> }) {
    const { locale } = await params;
    setRequestLocale(locale);
    return <AISolutionsPage />;
}
