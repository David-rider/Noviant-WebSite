import GenericMSPView from "../GenericMSPView";
import { setRequestLocale } from "next-intl/server";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
    const { locale } = await params;
    return {
        title: locale.startsWith('zh')
            ? (locale === 'zh-TW' ? '紐約IT託管服務 | 24/7全天候IT支援 - Noviant' : '纽约IT托管服务 | 24/7全天候IT支持 - Noviant')
            : 'Managed IT Services New York | 24/7 IT Support - Noviant',
        description: locale.startsWith('zh')
            ? (locale === 'zh-TW' ? 'Noviant紐約全面IT託管服務，提供24/7服務台、主動監控、補丁管理與完整IT外包解決方案。' : 'Noviant纽约全面IT托管服务，提供24/7服务台、主动监控、补丁管理与完整IT外包解决方案。')
            : 'Comprehensive managed IT services in New York. 24/7 helpdesk, proactive monitoring, patch management, and full IT outsourcing for your business.',
        openGraph: {
            title: locale.startsWith('zh')
                ? (locale === 'zh-TW' ? '紐約IT託管服務 | 24/7全天候IT支援 - Noviant' : '纽约IT托管服务 | 24/7全天候IT支持 - Noviant')
                : 'Managed IT Services New York | 24/7 IT Support - Noviant',
            description: locale.startsWith('zh')
                ? (locale === 'zh-TW' ? 'Noviant紐約全面IT託管服務，提供24/7服務台、主動監控、補丁管理與完整IT外包解決方案。' : 'Noviant纽约全面IT托管服务，提供24/7服务台、主动监控、补丁管理与完整IT外包解决方案。')
                : 'Comprehensive managed IT services in New York. 24/7 helpdesk, proactive monitoring, patch management, and full IT outsourcing for your business.',
            url: `https://www.noviant.com/${locale}/msp/managed-it-services`,
            siteName: 'Noviant',
            locale: locale,
            type: 'website',
        },
    };
}

export default async function Page({ params }: { params: Promise<{ locale: string }> }) {
    const { locale } = await params;
    setRequestLocale(locale);
    return <GenericMSPView pageKey="managed_it" imageSrc="/images/unsplash/photo-1451187580459-43490279c0fa.jpg" />;
}
