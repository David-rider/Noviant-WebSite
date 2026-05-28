import NotForProfitPage from "./NotForProfitView";
import { setRequestLocale } from "next-intl/server";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
    const { locale } = await params;
    return {
        title: locale.startsWith('zh')
            ? (locale === 'zh-TW' ? '非營利組織IT解決方案 紐約 - Noviant' : '非营利组织IT解决方案 纽约 - Noviant')
            : 'IT Solutions for Nonprofits New York - Noviant',
        description: locale.startsWith('zh')
            ? (locale === 'zh-TW' ? 'Noviant為紐約非營利組織提供實惠的IT託管服務，涵蓋安全基礎設施、捐款管理系統與雲端解決方案。' : 'Noviant为纽约非营利组织提供实惠的IT托管服务，涵盖安全基础设施、捐款管理系统与云端解决方案。')
            : 'Affordable IT managed services for nonprofit organizations in New York. Secure infrastructure, donor management systems, and cloud solutions for nonprofits.',
        openGraph: {
            title: locale.startsWith('zh')
                ? (locale === 'zh-TW' ? '非營利組織IT解決方案 紐約 - Noviant' : '非营利组织IT解决方案 纽约 - Noviant')
                : 'IT Solutions for Nonprofits New York - Noviant',
            description: locale.startsWith('zh')
                ? (locale === 'zh-TW' ? 'Noviant為紐約非營利組織提供實惠的IT託管服務，涵蓋安全基礎設施、捐款管理系統與雲端解決方案。' : 'Noviant为纽约非营利组织提供实惠的IT托管服务，涵盖安全基础设施、捐款管理系统与云端解决方案。')
                : 'Affordable IT managed services for nonprofit organizations in New York. Secure infrastructure, donor management systems, and cloud solutions for nonprofits.',
            url: 'https://www.noviant.com/en/industries/not-for-profit',
            siteName: 'Noviant',
            locale: locale,
            type: 'website',
        },
    };
}

export default async function Page({ params }: { params: Promise<{ locale: string }> }) {
    const { locale } = await params;
    setRequestLocale(locale);
    return <NotForProfitPage />;
}
