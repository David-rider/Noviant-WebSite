import EducationPage from "./EducationView";
import { setRequestLocale } from "next-intl/server";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
    const { locale } = await params;
    return {
        title: locale.startsWith('zh')
            ? (locale === 'zh-TW' ? '教育機構IT解決方案 紐約 - Noviant' : '教育机构IT解决方案 纽约 - Noviant')
            : 'IT Solutions for Education Sector New York - Noviant',
        description: locale.startsWith('zh')
            ? (locale === 'zh-TW' ? 'Noviant為紐約學校、大學及教育機構提供IT託管服務，涵蓋安全網路、雲端學習平台與FERPA合規。' : 'Noviant为纽约学校、大学及教育机构提供IT托管服务，涵盖安全网络、云端学习平台与FERPA合规。')
            : 'Managed IT services for schools, universities, and educational institutions in New York. Secure networks, cloud learning platforms, and FERPA compliance.',
        openGraph: {
            title: locale.startsWith('zh')
                ? (locale === 'zh-TW' ? '教育機構IT解決方案 紐約 - Noviant' : '教育机构IT解决方案 纽约 - Noviant')
                : 'IT Solutions for Education Sector New York - Noviant',
            description: locale.startsWith('zh')
                ? (locale === 'zh-TW' ? 'Noviant為紐約學校、大學及教育機構提供IT託管服務，涵蓋安全網路、雲端學習平台與FERPA合規。' : 'Noviant为纽约学校、大学及教育机构提供IT托管服务，涵盖安全网络、云端学习平台与FERPA合规。')
                : 'Managed IT services for schools, universities, and educational institutions in New York. Secure networks, cloud learning platforms, and FERPA compliance.',
            url: 'https://www.noviant.com/en/industries/education',
            siteName: 'Noviant',
            locale: locale,
            type: 'website',
        },
    };
}

export default async function Page({ params }: { params: Promise<{ locale: string }> }) {
    const { locale } = await params;
    setRequestLocale(locale);
    return <EducationPage />;
}
