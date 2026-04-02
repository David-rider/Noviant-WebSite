import { getTranslations } from "next-intl/server";
import NewsView from "./NewsView";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
    const { locale } = await params;
    const t = await getTranslations({ locale, namespace: "News_Page" });
    return {
        title: `${t("title")} | Noviant`,
        description: t("subtitle"),
    };
}

export default function NewsPage() {
    return <NewsView />;
}
