import FinancialServicesPage from "./FinancialServicesView";
import { setRequestLocale } from "next-intl/server";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
    const { locale } = await params;
    return {
        title: locale.startsWith('zh')
            ? (locale === 'zh-TW' ? '金融服務業IT解決方案 紐約 - Noviant' : '金融服务业IT解决方案 纽约 - Noviant')
            : 'IT Solutions for Financial Services New York - Noviant',
        description: locale.startsWith('zh')
            ? (locale === 'zh-TW' ? 'Noviant為紐約金融服務企業提供IT託管服務，涵蓋法規合規、風險管理、安全雲端基礎設施與全天候監控。' : 'Noviant为纽约金融服务企业提供IT托管服务，涵盖法规合规、风险管理、安全云基础设施与全天候监控。')
            : 'IT managed services for financial services firms in New York. Regulatory compliance, risk management, secure cloud infrastructure, and 24/7 monitoring.',
        openGraph: {
            title: locale.startsWith('zh')
                ? (locale === 'zh-TW' ? '金融服務業IT解決方案 紐約 - Noviant' : '金融服务业IT解决方案 纽约 - Noviant')
                : 'IT Solutions for Financial Services New York - Noviant',
            description: locale.startsWith('zh')
                ? (locale === 'zh-TW' ? 'Noviant為紐約金融服務企業提供IT託管服務，涵蓋法規合規、風險管理、安全雲端基礎設施與全天候監控。' : 'Noviant为纽约金融服务企业提供IT托管服务，涵盖法规合规、风险管理、安全云基础设施与全天候监控。')
                : 'IT managed services for financial services firms in New York. Regulatory compliance, risk management, secure cloud infrastructure, and 24/7 monitoring.',
            url: 'https://www.noviant.com/en/industries/financial-services',
            siteName: 'Noviant',
            locale: locale,
            type: 'website',
        },
    };
}

export default async function Page({ params }: { params: Promise<{ locale: string }> }) {
    const { locale } = await params;
    setRequestLocale(locale);
    return <FinancialServicesPage />;
}
