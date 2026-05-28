import DigitalInfrastructurePage from "./DigitalInfrastructureView";
import { setRequestLocale } from "next-intl/server";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
    const { locale } = await params;
    return {
        title: locale.startsWith('zh')
            ? (locale === 'zh-TW' ? '數位基礎設施解決方案 紐約 - Noviant' : '数字基础设施解决方案 纽约 - Noviant')
            : 'Digital Infrastructure Solutions New York - Noviant',
        description: locale.startsWith('zh')
            ? (locale === 'zh-TW' ? 'Noviant為紐約企業提供網路設計、佈線、伺服器管理與結構化綜合布線等數位基礎設施解決方案。' : 'Noviant为纽约企业提供网络设计、布线、服务器管理与结构化综合布线等数字基础设施解决方案。')
            : 'Build a resilient digital infrastructure with Noviant in New York. Network design, cabling, server management, and structured wiring solutions.',
        openGraph: {
            title: locale.startsWith('zh')
                ? (locale === 'zh-TW' ? '數位基礎設施解決方案 紐約 - Noviant' : '数字基础设施解决方案 纽约 - Noviant')
                : 'Digital Infrastructure Solutions New York - Noviant',
            description: locale.startsWith('zh')
                ? (locale === 'zh-TW' ? 'Noviant為紐約企業提供網路設計、佈線、伺服器管理與結構化綜合布線等數位基礎設施解決方案。' : 'Noviant为纽约企业提供网络设计、布线、服务器管理与结构化综合布线等数字基础设施解决方案。')
                : 'Build a resilient digital infrastructure with Noviant in New York. Network design, cabling, server management, and structured wiring solutions.',
            url: 'https://www.noviant.com/en/digital-infrastructure',
            siteName: 'Noviant',
            locale: locale,
            type: 'website',
        },
    };
}

export default async function Page({ params }: { params: Promise<{ locale: string }> }) {
    const { locale } = await params;
    setRequestLocale(locale);
    return <DigitalInfrastructurePage />;
}
