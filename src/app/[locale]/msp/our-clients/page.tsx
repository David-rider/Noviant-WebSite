import OurClientsView from "./OurClientsView";
import { setRequestLocale } from "next-intl/server";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
    const { locale } = await params;
    return {
        title: locale.startsWith('zh')
            ? (locale === 'zh-TW' ? '客戶見證與成功案例 - Noviant 紐約' : '客户见证与成功案例 - Noviant 纽约')
            : 'Client Testimonials & Success Stories - Noviant New York',
        description: locale.startsWith('zh')
            ? (locale === 'zh-TW' ? '了解Noviant如何協助紐約企業解決IT託管服務、網路安全與雲端解決方案問題，閱讀客戶成功案例。' : '了解Noviant如何帮助纽约企业解决IT托管服务、网络安全与云端解决方案问题，阅读客户成功案例。')
            : 'See how Noviant has helped New York businesses with managed IT services, cybersecurity, and cloud solutions. Read our client success stories.',
        openGraph: {
            title: locale.startsWith('zh')
                ? (locale === 'zh-TW' ? '客戶見證與成功案例 - Noviant 紐約' : '客户见证与成功案例 - Noviant 纽约')
                : 'Client Testimonials & Success Stories - Noviant New York',
            description: locale.startsWith('zh')
                ? (locale === 'zh-TW' ? '了解Noviant如何協助紐約企業解決IT託管服務、網路安全與雲端解決方案問題，閱讀客戶成功案例。' : '了解Noviant如何帮助纽约企业解决IT托管服务、网络安全与云端解决方案问题，阅读客户成功案例。')
                : 'See how Noviant has helped New York businesses with managed IT services, cybersecurity, and cloud solutions. Read our client success stories.',
            url: 'https://www.noviant.com/en/msp/our-clients',
            siteName: 'Noviant',
            locale: locale,
            type: 'website',
        },
    };
}

export default async function Page({ params }: { params: Promise<{ locale: string }> }) {
    const { locale } = await params;
    setRequestLocale(locale);
    return <OurClientsView imageSrc="/images/unsplash/photo-1556761175-4b46a572b786.jpg" />;
}
