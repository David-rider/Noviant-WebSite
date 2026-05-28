import GenericMSPView from "../GenericMSPView";
import { setRequestLocale } from "next-intl/server";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
    const { locale } = await params;
    return {
        title: locale.startsWith('zh')
            ? (locale === 'zh-TW' ? 'Noviant適合您嗎？紐約IT服務自我評估' : 'Noviant适合您吗？纽约IT服务自我评估')
            : 'Is Noviant the Right MSP for You? New York IT Services',
        description: locale.startsWith('zh')
            ? (locale === 'zh-TW' ? '了解Noviant的IT託管服務是否適合您的紐約企業，了解我們的理想客戶群與服務方式。' : '了解Noviant的IT托管服务是否适合您的纽约企业，了解我们的理想客户群与服务方式。')
            : 'Find out if Noviant\'s managed IT services are the right fit for your New York business. Learn about our ideal clients and service approach.',
        openGraph: {
            title: locale.startsWith('zh')
                ? (locale === 'zh-TW' ? 'Noviant適合您嗎？紐約IT服務自我評估' : 'Noviant适合您吗？纽约IT服务自我评估')
                : 'Is Noviant the Right MSP for You? New York IT Services',
            description: locale.startsWith('zh')
                ? (locale === 'zh-TW' ? '了解Noviant的IT託管服務是否適合您的紐約企業，了解我們的理想客戶群與服務方式。' : '了解Noviant的IT托管服务是否适合您的纽约企业，了解我们的理想客户群与服务方式。')
                : 'Find out if Noviant\'s managed IT services are the right fit for your New York business. Learn about our ideal clients and service approach.',
            url: 'https://www.noviant.com/en/msp/is-this-you',
            siteName: 'Noviant',
            locale: locale,
            type: 'website',
        },
    };
}

export default async function Page({ params }: { params: Promise<{ locale: string }> }) {
    const { locale } = await params;
    setRequestLocale(locale);
    return <GenericMSPView pageKey="is_this_you" imageSrc="/images/unsplash/photo-1552664730-d307ca884978.jpg" />;
}
