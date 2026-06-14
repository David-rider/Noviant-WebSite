import PrivacyView from "./PrivacyView";
import { getTranslations, setRequestLocale } from "next-intl/server";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
    const { locale } = await params;
    const t = await getTranslations({ locale, namespace: "Privacy_Page" });
    return {
        title: `${t("title")} | Noviant`,
        description: t("intro").slice(0, 160),
        openGraph: {
            title: locale.startsWith('zh')
                ? (locale === 'zh-TW'
                    ? '隱私政策 | Noviant 資料保護'
                    : '隐私政策 | Noviant 数据保护')
                : 'Privacy Policy | Noviant Data Protection',
            description: t("intro").slice(0, 160),
            url: `https://www.noviant.com/${locale}/privacy`,
            siteName: 'Noviant',
            locale: locale,
            type: 'website',
        },
    };
}

export default async function PrivacyPage({ params }: { params: Promise<{ locale: string }> }) {
    const { locale } = await params;
    setRequestLocale(locale);
    return <PrivacyView />;
}
