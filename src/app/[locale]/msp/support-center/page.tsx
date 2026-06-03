import GenericMSPView from "../GenericMSPView";
import { setRequestLocale } from "next-intl/server";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
    const { locale } = await params;
    return {
        title: locale.startsWith('zh')
            ? (locale === 'zh-TW' ? 'IT支援中心 紐約 | 24/7服務台 - Noviant' : 'IT支持中心 纽约 | 24/7服务台 - Noviant')
            : 'IT Support Center New York | 24/7 Helpdesk - Noviant',
        description: locale.startsWith('zh')
            ? (locale === 'zh-TW' ? 'Noviant紐約IT支援中心，提供24/7服務台、遠端與現場支援、工單系統與快速回應服務。' : 'Noviant纽约IT支持中心，提供24/7服务台、远程与现场支持、工单系统与快速响应服务。')
            : 'Noviant\'s IT support center in New York. 24/7 helpdesk, remote and on-site support, ticketing system, and fast response times for your business.',
        openGraph: {
            title: locale.startsWith('zh')
                ? (locale === 'zh-TW' ? 'IT支援中心 紐約 | 24/7服務台 - Noviant' : 'IT支持中心 纽约 | 24/7服务台 - Noviant')
                : 'IT Support Center New York | 24/7 Helpdesk - Noviant',
            description: locale.startsWith('zh')
                ? (locale === 'zh-TW' ? 'Noviant紐約IT支援中心，提供24/7服務台、遠端與現場支援、工單系統與快速回應服務。' : 'Noviant纽约IT支持中心，提供24/7服务台、远程与现场支持、工单系统与快速响应服务。')
                : 'Noviant\'s IT support center in New York. 24/7 helpdesk, remote and on-site support, ticketing system, and fast response times for your business.',
            url: `https://www.noviant.com/${locale}/msp/support-center`,
            siteName: 'Noviant',
            locale: locale,
            type: 'website',
        },
    };
}

export default async function Page({ params }: { params: Promise<{ locale: string }> }) {
    const { locale } = await params;
    setRequestLocale(locale);
    return <GenericMSPView pageKey="support_center" imageSrc="/images/unsplash/photo-1551434678-e076c223a692.jpg" />;
}
