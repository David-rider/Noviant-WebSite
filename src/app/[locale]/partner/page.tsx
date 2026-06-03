import PartnersPage from "./PartnerView";
import { setRequestLocale } from "next-intl/server";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
    const { locale } = await params;
    return {
        title: locale.startsWith('zh')
            ? (locale === 'zh-TW' ? '技術合作夥伴與聯盟 - Noviant 紐約' : '技术合作伙伴与联盟 - Noviant 纽约')
            : 'Technology Partners & Alliances - Noviant New York',
        description: locale.startsWith('zh')
            ? (locale === 'zh-TW' ? 'Noviant紐約戰略技術合作夥伴，與頂級供應商合作，為企業提供最優質的IT解決方案。' : 'Noviant纽约战略技术合作伙伴，与顶级供应商合作，为企业提供最优质的IT解决方案。')
            : 'Noviant\'s strategic technology partnerships in New York. We collaborate with leading vendors to deliver best-in-class IT solutions for your enterprise.',
        openGraph: {
            title: locale.startsWith('zh')
                ? (locale === 'zh-TW' ? '技術合作夥伴與聯盟 - Noviant 紐約' : '技术合作伙伴与联盟 - Noviant 纽约')
                : 'Technology Partners & Alliances - Noviant New York',
            description: locale.startsWith('zh')
                ? (locale === 'zh-TW' ? 'Noviant紐約戰略技術合作夥伴，與頂級供應商合作，為企業提供最優質的IT解決方案。' : 'Noviant纽约战略技术合作伙伴，与顶级供应商合作，为企业提供最优质的IT解决方案。')
                : 'Noviant\'s strategic technology partnerships in New York. We collaborate with leading vendors to deliver best-in-class IT solutions for your enterprise.',
            url: `https://www.noviant.com/${locale}/partner`,
            siteName: 'Noviant',
            locale: locale,
            type: 'website',
        },
    };
}

export default async function Page({ params }: { params: Promise<{ locale: string }> }) {
    const { locale } = await params;
    setRequestLocale(locale);
    return <PartnersPage />;
}
