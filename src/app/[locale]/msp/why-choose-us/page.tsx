import GenericMSPView from "../GenericMSPView";
import { setRequestLocale } from "next-intl/server";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
    const { locale } = await params;
    return {
        title: locale.startsWith('zh')
            ? (locale === 'zh-TW' ? '為什麼選擇Noviant作為您的紐約MSP' : '为什么选择Noviant作为您的纽约MSP')
            : 'Why Choose Noviant as Your MSP in New York',
        description: locale.startsWith('zh')
            ? (locale === 'zh-TW' ? '了解為什麼紐約企業選擇Noviant作為IT託管服務提供商。專業經驗、本地支援與企業級解決方案。' : '了解为什么纽约企业选择Noviant作为IT托管服务提供商。专业经验、本地支持与企业级解决方案。')
            : 'Discover why New York businesses choose Noviant as their IT managed service provider. Proven expertise, local support, and enterprise-grade solutions.',
        openGraph: {
            title: locale.startsWith('zh')
                ? (locale === 'zh-TW' ? '為什麼選擇Noviant作為您的紐約MSP' : '为什么选择Noviant作为您的纽约MSP')
                : 'Why Choose Noviant as Your MSP in New York',
            description: locale.startsWith('zh')
                ? (locale === 'zh-TW' ? '了解為什麼紐約企業選擇Noviant作為IT託管服務提供商。專業經驗、本地支援與企業級解決方案。' : '了解为什么纽约企业选择Noviant作为IT托管服务提供商。专业经验、本地支持与企业级解决方案。')
                : 'Discover why New York businesses choose Noviant as their IT managed service provider. Proven expertise, local support, and enterprise-grade solutions.',
            url: `https://www.noviant.com/${locale}/msp/why-choose-us`,
            siteName: 'Noviant',
            locale: locale,
            type: 'website',
        },
    };
}

export default async function Page({ params }: { params: Promise<{ locale: string }> }) {
    const { locale } = await params;
    setRequestLocale(locale);
    return <GenericMSPView pageKey="why_choose_us" imageSrc="/images/unsplash/photo-1522071820081-009f0129c71c.jpg" />;
}
