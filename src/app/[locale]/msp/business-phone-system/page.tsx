import GenericMSPView from "../GenericMSPView";
import { setRequestLocale } from "next-intl/server";

export default async function Page({ params }: { params: Promise<{ locale: string }> }) {
    const { locale } = await params;
    setRequestLocale(locale);
    return <GenericMSPView pageKey="business_phone" imageSrc="/images/unsplash/photo-1596526131083-e8c633c948d2.jpg" />;
}
