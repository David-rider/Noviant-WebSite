import GenericMSPView from "../GenericMSPView";
import { setRequestLocale } from "next-intl/server";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
    const { locale } = await params;
    return {
        title: locale.startsWith('zh')
            ? (locale === 'zh-TW' ? '網路安全與合規服務 紐約 - Noviant' : '网络安全与合规服务 纽约 - Noviant')
            : 'Cybersecurity & Compliance Services New York - Noviant',
        description: locale.startsWith('zh')
            ? (locale === 'zh-TW' ? 'Noviant紐約企業網路安全與合規服務，涵蓋HIPAA、SOX、PCI-DSS、NIST框架、威脅偵測與事件回應。' : 'Noviant纽约企业网络安全与合规服务，涵盖HIPAA、SOX、PCI-DSS、NIST框架、威胁检测与事件响应。')
            : 'Enterprise cybersecurity and compliance services in New York. HIPAA, SOX, PCI-DSS, NIST frameworks, threat detection, and incident response.',
        openGraph: {
            title: locale.startsWith('zh')
                ? (locale === 'zh-TW' ? '網路安全與合規服務 紐約 - Noviant' : '网络安全与合规服务 纽约 - Noviant')
                : 'Cybersecurity & Compliance Services New York - Noviant',
            description: locale.startsWith('zh')
                ? (locale === 'zh-TW' ? 'Noviant紐約企業網路安全與合規服務，涵蓋HIPAA、SOX、PCI-DSS、NIST框架、威脅偵測與事件回應。' : 'Noviant纽约企业网络安全与合规服务，涵盖HIPAA、SOX、PCI-DSS、NIST框架、威胁检测与事件响应。')
                : 'Enterprise cybersecurity and compliance services in New York. HIPAA, SOX, PCI-DSS, NIST frameworks, threat detection, and incident response.',
            url: `https://www.noviant.com/${locale}/msp/cybersecurity-compliance`,
            siteName: 'Noviant',
            locale: locale,
            type: 'website',
        },
    };
}

export default async function Page({ params }: { params: Promise<{ locale: string }> }) {
    const { locale } = await params;
    setRequestLocale(locale);
    return <GenericMSPView pageKey="cybersecurity" imageSrc="/images/unsplash/photo-1550751827-4bd374c3f58b.jpg" />;
}
