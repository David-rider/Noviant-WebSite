import Hero from "@/components/Hero";
import ServicesSection from "@/components/ServicesSection";
import IndustrySlider from "@/components/IndustrySlider";
import { getTranslations, setRequestLocale } from "next-intl/server";

export default async function HomePage({ params }: { params: Promise<{ locale: string }> }) {
    const { locale } = await params;
    setRequestLocale(locale);
    const t = await getTranslations("HomePage");

    return (
        <>
            <Hero />
            <ServicesSection />

            {/* Clean Section Divider */}
            <div className="flex items-center justify-center py-8 gap-4">
                <div className="flex-1 h-px bg-slate-200" />
                <div className="w-2 h-2 bg-blue-600/20 rounded-full border border-blue-600/10 z-20" />
                <div className="flex-1 h-px bg-slate-200" />
            </div>

            {/* Industries Section */}
            <section className="py-16 bg-slate-50 relative overflow-hidden">
                <div className="container mx-auto px-4 relative z-10">
                    <div className="text-center mb-10">
                        <h2 className="text-4xl md:text-5xl font-black mb-6 text-slate-900 tracking-tight">
                            {t("industries_title")}
                        </h2>
                        <div className="w-16 h-1 bg-blue-600 mx-auto rounded-full" />
                    </div>

                    <div className="p-2 border border-slate-200 rounded-3xl bg-white shadow-sm">
                        <IndustrySlider />
                    </div>
                </div>
            </section>
        </>
    );
}
