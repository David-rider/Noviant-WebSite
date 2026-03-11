import GenericMSPView from "../GenericMSPView";
import { setRequestLocale } from "next-intl/server";

export default async function Page({ params }: { params: Promise<{ locale: string }> }) {
    const { locale } = await params;
    setRequestLocale(locale);
    return <GenericMSPView pageKey="referral_program" imageSrc="/images/unsplash/photo-1454165804606-c3d57bc86b40.jpg" />;
}
