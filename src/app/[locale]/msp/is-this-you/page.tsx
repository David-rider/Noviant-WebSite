import GenericMSPView from "../GenericMSPView";
import { setRequestLocale } from "next-intl/server";

export default async function Page({ params }: { params: Promise<{ locale: string }> }) {
    const { locale } = await params;
    setRequestLocale(locale);
    return <GenericMSPView pageKey="is_this_you" imageSrc="/images/unsplash/photo-1552664730-d307ca884978.jpg" />;
}
