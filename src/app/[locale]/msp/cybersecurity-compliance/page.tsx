import GenericMSPView from "../GenericMSPView";
import { setRequestLocale } from "next-intl/server";

export default async function Page({ params }: { params: Promise<{ locale: string }> }) {
    const { locale } = await params;
    setRequestLocale(locale);
    return <GenericMSPView pageKey="cybersecurity" imageSrc="/images/unsplash/photo-1550751827-4bd374c3f58b.jpg" />;
}
