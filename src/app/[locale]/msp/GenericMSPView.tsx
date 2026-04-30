"use client";

import PageHero from "@/components/PageHero";
import { useTranslations } from "next-intl";
import { CheckCircle2, Phone, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "@/i18n/routing";

interface Props {
    pageKey: string;
    bgGradient?: string;
    imageSrc?: string;
}

export default function GenericMSPView({
    pageKey,
    bgGradient = "from-blue-900/40 via-slate-900 to-slate-900",
    imageSrc = "/images/unsplash/photo-1551434678-e076c223a692.jpg"
}: Props) {
    const t = useTranslations(`MSP_Pages.${pageKey}`);
    const tNav = useTranslations("Navigation");

    // We know most pages have up to 4 features
    const featureIndices = [0, 1, 2, 3];
    const hasFeatures = t.has("features.0");
    const isSupportCenter = pageKey === "support_center";

    return (
        <div className="min-h-screen bg-[#f8fafc]">
            <PageHero
                title={t("title")}
                subtitle={t("subtitle")}
                bgGradient={bgGradient}
            />

            <div className="container mx-auto px-4 py-24">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                    {/* Content Section */}
                    <div className="space-y-8">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6 }}
                            viewport={{ once: true }}
                        >
                            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6 leading-tight">
                                {t("title")}
                            </h2>
                            <p className="text-lg text-slate-600 leading-relaxed mb-8">
                                {t("desc")}
                            </p>

                            {isSupportCenter && t.has("phone") && (
                                <div className="mt-8 p-8 bg-blue-50 border border-blue-100 rounded-3xl flex items-center gap-6">
                                    <div className="w-16 h-16 bg-blue-600 text-white rounded-2xl flex items-center justify-center shadow-lg">
                                        <Phone className="w-8 h-8" />
                                    </div>
                                    <div>
                                        <p className="text-sm font-semibold text-blue-600 uppercase tracking-wider mb-1">
                                            {t("phone_label")}
                                        </p>
                                        <a href={`tel:${t("phone")}`} className="text-3xl font-bold text-slate-900 hover:text-blue-600 transition-colors">
                                            {t("phone")}
                                        </a>
                                    </div>
                                </div>
                            )}

                            {hasFeatures && (
                                <div className="space-y-4 mt-8">
                                    {featureIndices.map((i) => {
                                        if (!t.has(`features.${i}`)) return null;
                                        return (
                                            <div key={i} className="flex gap-4 items-start">
                                                <div className="mt-1">
                                                    <CheckCircle2 className="w-6 h-6 text-blue-600" />
                                                </div>
                                                <p className="text-lg text-slate-700">
                                                    {t(`features.${i}`)}
                                                </p>
                                            </div>
                                        );
                                    })}
                                </div>
                            )}

                            <div className="mt-12 flex items-center gap-4">
                                <Link
                                    href="/contact"
                                    className="px-8 py-4 bg-blue-600 text-white rounded-xl font-semibold hover:bg-blue-700 transition-colors shadow-lg shadow-blue-600/20 inline-flex items-center gap-2"
                                >
                                    {tNav("contact")} <ArrowRight className="w-5 h-5" />
                                </Link>
                            </div>
                        </motion.div>
                    </div>

                    {/* Image Section */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className="relative"
                    >
                        <div className="aspect-[4/3] rounded-[2rem] overflow-hidden shadow-2xl border border-white/20">
                            <img
                                src={imageSrc}
                                alt={t("title")}
                                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                            />
                            <div className="absolute inset-0 bg-gradient-to-tr from-blue-900/40 to-transparent mix-blend-multiply" />
                        </div>

                        {/* Decorative floating elements */}
                        <div className="absolute -top-6 -right-6 w-24 h-24 bg-blue-500/10 rounded-full blur-2xl" />
                        <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-indigo-500/10 rounded-full blur-2xl" />
                    </motion.div>

                </div>
            </div>
        </div>
    );
}
