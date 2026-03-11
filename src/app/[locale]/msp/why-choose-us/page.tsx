import GenericMSPView from "../GenericMSPView";
import { setRequestLocale } from "next-intl/server";

export default async function Page({ params }: { params: Promise<{ locale: string }> }) {
    const { locale } = await params;
    setRequestLocale(locale);
    return <GenericMSPView pageKey="why_choose_us" imageSrc="/images/unsplash/photo-1522071820081-009f0129c71c.jpg" />;
}
