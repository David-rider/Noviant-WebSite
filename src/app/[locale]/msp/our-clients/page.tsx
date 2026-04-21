import OurClientsView from "./OurClientsView";
import { setRequestLocale } from "next-intl/server";

export default async function Page({ params }: { params: Promise<{ locale: string }> }) {
    const { locale } = await params;
    setRequestLocale(locale);
    return <OurClientsView imageSrc="/images/unsplash/photo-1556761175-4b46a572b786.jpg" />;
}
