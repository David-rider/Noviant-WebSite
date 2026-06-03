import RetailPage from "./RetailView";
import { setRequestLocale } from "next-intl/server";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
    const { locale } = await params;
    return {
        title: locale.startsWith('zh')
            ? (locale === 'zh-TW' ? '零售業IT解決方案 紐約 - Noviant' : '零售业IT解决方案 纽约 - Noviant')
            : 'IT Solutions for Retail Businesses New York - Noviant',
        description: locale.startsWith('zh')
            ? (locale === 'zh-TW' ? 'Noviant為紐約零售企業提供IT託管服務，涵蓋POS系統、庫存管理、電商基礎設施與PCI-DSS合規。' : 'Noviant为纽约零售企业提供IT托管服务，涵盖POS系统、库存管理、电商基础设施与PCI-DSS合规。')
            : 'Managed IT services for retail businesses in New York. POS systems, inventory management, e-commerce infrastructure, and PCI-DSS compliance.',
        openGraph: {
            title: locale.startsWith('zh')
                ? (locale === 'zh-TW' ? '零售業IT解決方案 紐約 - Noviant' : '零售业IT解决方案 纽约 - Noviant')
                : 'IT Solutions for Retail Businesses New York - Noviant',
            description: locale.startsWith('zh')
                ? (locale === 'zh-TW' ? 'Noviant為紐約零售企業提供IT託管服務，涵蓋POS系統、庫存管理、電商基礎設施與PCI-DSS合規。' : 'Noviant为纽约零售企业提供IT托管服务，涵盖POS系统、库存管理、电商基础设施与PCI-DSS合规。')
                : 'Managed IT services for retail businesses in New York. POS systems, inventory management, e-commerce infrastructure, and PCI-DSS compliance.',
            url: `https://www.noviant.com/${locale}/industries/retail`,
            siteName: 'Noviant',
            locale: locale,
            type: 'website',
        },
    };
}

export default async function Page({ params }: { params: Promise<{ locale: string }> }) {
    const { locale } = await params;
    setRequestLocale(locale);
    return <RetailPage />;
}
