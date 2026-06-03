import HealthServicesPage from "./HealthServicesView";
import { setRequestLocale } from "next-intl/server";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
    const { locale } = await params;
    return {
        title: locale.startsWith('zh')
            ? (locale === 'zh-TW' ? '醫療健康行業IT解決方案 紐約 - Noviant' : '医疗健康行业IT解决方案 纽约 - Noviant')
            : 'IT Solutions for Healthcare Providers New York - Noviant',
        description: locale.startsWith('zh')
            ? (locale === 'zh-TW' ? 'Noviant為紐約醫療機構提供符合HIPAA標準的IT託管服務，涵蓋安全電子病歷、遠程醫療基礎設施與全天候支援。' : 'Noviant为纽约医疗机构提供符合HIPAA标准的IT托管服务，涵盖安全电子病历、远程医疗基础设施与全天候支持。')
            : 'HIPAA-compliant IT managed services for healthcare providers and medical practices in New York. Secure EHR, telemedicine infrastructure, and 24/7 support.',
        openGraph: {
            title: locale.startsWith('zh')
                ? (locale === 'zh-TW' ? '醫療健康行業IT解決方案 紐約 - Noviant' : '医疗健康行业IT解决方案 纽约 - Noviant')
                : 'IT Solutions for Healthcare Providers New York - Noviant',
            description: locale.startsWith('zh')
                ? (locale === 'zh-TW' ? 'Noviant為紐約醫療機構提供符合HIPAA標準的IT託管服務，涵蓋安全電子病歷、遠程醫療基礎設施與全天候支援。' : 'Noviant为纽约医疗机构提供符合HIPAA标准的IT托管服务，涵盖安全电子病历、远程医疗基础设施与全天候支持。')
                : 'HIPAA-compliant IT managed services for healthcare providers and medical practices in New York. Secure EHR, telemedicine infrastructure, and 24/7 support.',
            url: `https://www.noviant.com/${locale}/industries/health-services`,
            siteName: 'Noviant',
            locale: locale,
            type: 'website',
        },
    };
}

export default async function Page({ params }: { params: Promise<{ locale: string }> }) {
    const { locale } = await params;
    setRequestLocale(locale);
    return <HealthServicesPage />;
}
