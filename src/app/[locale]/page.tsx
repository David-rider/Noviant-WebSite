import Hero from "@/components/Hero";
import ServicesSection from "@/components/ServicesSection";
import IndustrySlider from "@/components/IndustrySlider";
import { getTranslations, setRequestLocale } from "next-intl/server";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
    const { locale } = await params;
    return {
        title: locale.startsWith('zh')
            ? (locale === 'zh-TW' ? 'Noviant | 紐約企業ICT與MSP託管服務 | AI與數位孿生解決方案' : 'Noviant | 纽约企业ICT与MSP托管服务 | AI与数字孪生解决方案')
            : 'Noviant | Enterprise ICT & MSP Solutions in New York | AI & Digital Twin',
        description: locale.startsWith('zh')
            ? (locale === 'zh-TW' ? '紐約頂級IT託管服務商(MSP)與企業ICT顧問公司。專注於數位轉型、AI人工智慧整合與數位孿生解決方案。' : '纽约顶级IT托管服务商(MSP)与企业ICT顾问公司。专注于数字化转型、AI人工智能集成与数字孪生解决方案。')
            : 'Top-tier IT Managed Service Provider (MSP) and enterprise ICT consulting in New York. We lead in digital transformation, AI integration, and Digital Twin solutions.',
        openGraph: {
            title: locale.startsWith('zh')
                ? (locale === 'zh-TW' ? 'Noviant | 紐約企業ICT與MSP託管服務 | AI與數位孿生解決方案' : 'Noviant | 纽约企业ICT与MSP托管服务 | AI与数字孪生解决方案')
                : 'Noviant | Enterprise ICT & MSP Solutions in New York | AI & Digital Twin',
            description: locale.startsWith('zh')
                ? (locale === 'zh-TW' ? '紐約頂級IT託管服務商(MSP)與企業ICT顧問公司。專注於數位轉型、AI人工智慧整合與數位孿生解決方案。' : '纽约顶级IT托管服务商(MSP)与企业ICT顾问公司。专注于数字化转型、AI人工智能集成与数字孪生解决方案。')
                : 'Top-tier IT Managed Service Provider (MSP) and enterprise ICT consulting in New York. We lead in digital transformation, AI integration, and Digital Twin solutions.',
            url: 'https://www.noviant.com',
            siteName: 'Noviant',
            locale: locale,
            type: 'website',
        },
    };
}

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
