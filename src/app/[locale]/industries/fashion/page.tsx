import FashionPage from "./FashionView";
import { setRequestLocale } from "next-intl/server";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
    const { locale } = await params;
    return {
        title: locale.startsWith('zh')
            ? (locale === 'zh-TW' ? '時尚行業IT解決方案 紐約 - Noviant' : '时尚行业IT解决方案 纽约 - Noviant')
            : 'IT Solutions for Fashion Industry New York - Noviant',
        description: locale.startsWith('zh')
            ? (locale === 'zh-TW' ? 'Noviant為紐約時尚品牌與零售商提供技術解決方案，涵蓋電商基礎設施、供應鏈IT與時尚數位轉型。' : 'Noviant为纽约时尚品牌与零售商提供技术解决方案，涵盖电商基础设施、供应链IT与时尚数字化转型。')
            : 'Technology solutions for fashion brands and retailers in New York. E-commerce infrastructure, supply chain IT, and digital transformation for fashion.',
        openGraph: {
            title: locale.startsWith('zh')
                ? (locale === 'zh-TW' ? '時尚行業IT解決方案 紐約 - Noviant' : '时尚行业IT解决方案 纽约 - Noviant')
                : 'IT Solutions for Fashion Industry New York - Noviant',
            description: locale.startsWith('zh')
                ? (locale === 'zh-TW' ? 'Noviant為紐約時尚品牌與零售商提供技術解決方案，涵蓋電商基礎設施、供應鏈IT與時尚數位轉型。' : 'Noviant为纽约时尚品牌与零售商提供技术解决方案，涵盖电商基础设施、供应链IT与时尚数字化转型。')
                : 'Technology solutions for fashion brands and retailers in New York. E-commerce infrastructure, supply chain IT, and digital transformation for fashion.',
            url: `https://www.noviant.com/${locale}/industries/fashion`,
            siteName: 'Noviant',
            locale: locale,
            type: 'website',
        },
    };
}

export default async function Page({ params }: { params: Promise<{ locale: string }> }) {
    const { locale } = await params;
    setRequestLocale(locale);
    return <FashionPage />;
}
