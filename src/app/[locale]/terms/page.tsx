import TermsView from "./TermsView";
import { getTranslations } from "next-intl/server";
import { setRequestLocale } from "next-intl/server";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
    const { locale } = await params;
    const t = await getTranslations({ locale, namespace: "Terms_Page" });
    return {
        title: `${t("title")} | Noviant`,
        description: t("description"),
        openGraph: {
            title: locale.startsWith('zh')
                ? (locale === 'zh-TW'
                    ? '主服務協議 | Noviant 服務條款'
                    : '主服务协议 | Noviant 服务条款')
                : 'Master Service Agreement | Noviant Terms',
            description: t("description"),
            url: `https://www.noviant.com/${locale}/terms`,
            siteName: 'Noviant',
            locale: locale,
            type: 'website',
        },
    };
}

export default async function TermsPage({ params }: { params: Promise<{ locale: string }> }) {
    const { locale } = await params;
    setRequestLocale(locale);
    return <TermsView />;
}
