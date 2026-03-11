import GenericMSPView from "../GenericMSPView";
import { setRequestLocale } from "next-intl/server";

export default async function Page({ params }: { params: Promise<{ locale: string }> }) {
    const { locale } = await params;
    setRequestLocale(locale);
    return <GenericMSPView pageKey="managed_it" imageSrc="/images/unsplash/photo-1451187580459-43490279c0fa.jpg" />;
}
