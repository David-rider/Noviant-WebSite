import GovernmentPage from "./GovernmentView";
import { setRequestLocale } from "next-intl/server";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
    const { locale } = await params;
    return {
        title: locale.startsWith('zh')
            ? (locale === 'zh-TW' ? '政府機構IT解決方案 紐約 - Noviant' : '政府机构IT解决方案 纽约 - Noviant')
            : 'IT Solutions for Government Agencies New York - Noviant',
        description: locale.startsWith('zh')
            ? (locale === 'zh-TW' ? 'Noviant為紐約政府機構提供安全合規的IT託管服務，涵蓋FISMA、NIST合規、安全網路與IT現代化。' : 'Noviant为纽约政府机构提供安全合规的IT托管服务，涵盖FISMA、NIST合规、安全网络与IT现代化。')
            : 'Secure and compliant IT managed services for government agencies in New York. FISMA, NIST compliance, secure networks, and IT modernization.',
        openGraph: {
            title: locale.startsWith('zh')
                ? (locale === 'zh-TW' ? '政府機構IT解決方案 紐約 - Noviant' : '政府机构IT解决方案 纽约 - Noviant')
                : 'IT Solutions for Government Agencies New York - Noviant',
            description: locale.startsWith('zh')
                ? (locale === 'zh-TW' ? 'Noviant為紐約政府機構提供安全合規的IT託管服務，涵蓋FISMA、NIST合規、安全網路與IT現代化。' : 'Noviant为纽约政府机构提供安全合规的IT托管服务，涵盖FISMA、NIST合规、安全网络与IT现代化。')
                : 'Secure and compliant IT managed services for government agencies in New York. FISMA, NIST compliance, secure networks, and IT modernization.',
            url: 'https://www.noviant.com/en/industries/government',
            siteName: 'Noviant',
            locale: locale,
            type: 'website',
        },
    };
}

export default async function Page({ params }: { params: Promise<{ locale: string }> }) {
    const { locale } = await params;
    setRequestLocale(locale);
    return <GovernmentPage />;
}
