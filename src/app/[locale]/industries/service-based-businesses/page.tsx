import ServiceBasedBusinessesPage from "./ServiceBasedBusinessesView";
import { setRequestLocale } from "next-intl/server";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
    const { locale } = await params;
    return {
        title: locale.startsWith('zh')
            ? (locale === 'zh-TW' ? '服務型企業IT解決方案 紐約 - Noviant' : '服务型企业IT解决方案 纽约 - Noviant')
            : 'IT Solutions for Service Businesses New York - Noviant',
        description: locale.startsWith('zh')
            ? (locale === 'zh-TW' ? 'Noviant為紐約律師事務所、會計師事務所與諮詢公司等服務型企業提供安全可靠的IT託管服務。' : 'Noviant为纽约律师事务所、会计师事务所与咨询公司等服务型企业提供安全可靠的IT托管服务。')
            : 'Managed IT services for professional service firms in New York. Law firms, accounting firms, consulting agencies — secure, reliable IT infrastructure.',
        openGraph: {
            title: locale.startsWith('zh')
                ? (locale === 'zh-TW' ? '服務型企業IT解決方案 紐約 - Noviant' : '服务型企业IT解决方案 纽约 - Noviant')
                : 'IT Solutions for Service Businesses New York - Noviant',
            description: locale.startsWith('zh')
                ? (locale === 'zh-TW' ? 'Noviant為紐約律師事務所、會計師事務所與諮詢公司等服務型企業提供安全可靠的IT託管服務。' : 'Noviant为纽约律师事务所、会计师事务所与咨询公司等服务型企业提供安全可靠的IT托管服务。')
                : 'Managed IT services for professional service firms in New York. Law firms, accounting firms, consulting agencies — secure, reliable IT infrastructure.',
            url: `https://www.noviant.com/${locale}/industries/service-based-businesses`,
            siteName: 'Noviant',
            locale: locale,
            type: 'website',
        },
    };
}

export default async function Page({ params }: { params: Promise<{ locale: string }> }) {
    const { locale } = await params;
    setRequestLocale(locale);
    return <ServiceBasedBusinessesPage />;
}
