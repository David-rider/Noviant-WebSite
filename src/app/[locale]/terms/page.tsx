import TermsView from "./TermsView";
import { getTranslations } from "next-intl/server";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
    const { locale } = await params;
    const t = await getTranslations({ locale, namespace: "Terms_Page" });
    return {
        title: `${t("title")} | Noviant`,
        description: t("description"),
    };
}

export default function TermsPage() {
    return <TermsView />;
}
