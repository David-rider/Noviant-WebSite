import ContactPage from "./ContactView";
import { setRequestLocale } from "next-intl/server";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
    const { locale } = await params;
    return {
        title: locale.startsWith('zh')
            ? (locale === 'zh-TW' ? '聯絡我們 | 紐約IT諮詢與MSP託管服務 - Noviant' : '联系我们 | 纽约IT咨询与MSP托管服务 - Noviant')
            : 'Contact Noviant | IT Consulting & MSP in New York',
        description: locale.startsWith('zh')
            ? (locale === 'zh-TW' ? '聯繫Noviant紐約IT專家，預約IT託管服務、網路安全、雲端解決方案及AI整合諮詢。' : '联系Noviant纽约IT专家，预约IT托管服务、网络安全、云解决方案及AI集成咨询。')
            : 'Get in touch with Noviant\'s IT experts in New York. Request a consultation for managed IT services, cybersecurity, cloud solutions, and AI integration.',
        openGraph: {
            title: locale.startsWith('zh')
                ? (locale === 'zh-TW' ? '聯絡我們 | 紐約IT諮詢與MSP託管服務 - Noviant' : '联系我们 | 纽约IT咨询与MSP托管服务 - Noviant')
                : 'Contact Noviant | IT Consulting & MSP in New York',
            description: locale.startsWith('zh')
                ? (locale === 'zh-TW' ? '聯繫Noviant紐約IT專家，預約IT託管服務、網路安全、雲端解決方案及AI整合諮詢。' : '联系Noviant纽约IT专家，预约IT托管服务、网络安全、云解决方案及AI集成咨询。')
                : 'Get in touch with Noviant\'s IT experts in New York. Request a consultation for managed IT services, cybersecurity, cloud solutions, and AI integration.',
            url: 'https://www.noviant.com/en/contact',
            siteName: 'Noviant',
            locale: locale,
            type: 'website',
        },
    };
}

export default async function Page({ params }: { params: Promise<{ locale: string }> }) {
    const { locale } = await params;
    setRequestLocale(locale);
    return <ContactPage />;
}
