"use client";

import PageHero from "@/components/PageHero";
import { useTranslations } from "next-intl";
import { CheckCircle2, ArrowRight, Building2, Globe } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "@/i18n/routing";

interface Props {
    bgGradient?: string;
    imageSrc?: string;
}

export default function OurClientsView({
    bgGradient = "from-blue-900/40 via-slate-900 to-slate-900",
    imageSrc = "/images/unsplash/photo-1556761175-4b46a572b786.jpg"
}: Props) {
    const t = useTranslations("MSP_Pages.our_clients");
    const tNav = useTranslations("Navigation");

    // Features handling
    const featureIndices = [0, 1, 2, 3];
    const hasFeatures = t.has("features.0");

    // Customers list handling
    // next-intl doesn't easily iterate over objects in a generic way without raw, 
    // but we can use a known count or just assume the structure.
    // For simplicity, we'll try to get the raw array if available or just hardcode the count if needed.
    // However, the best way in next-intl for lists is often to use the range approach.
    const customerIndices = Array.from({ length: 24 }, (_, i) => i);

    return (
        <div className="min-h-screen bg-[#f8fafc]">
            <PageHero
                title={t("title")}
                subtitle={t("subtitle")}
                bgGradient={bgGradient}
            />

            {/* Main Content Section */}
            {/* Main Content Section - Now only Title and Features at top */}
            <div className="container mx-auto px-4 pt-24">
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="max-w-4xl"
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6 leading-tight">
                        {t("title")}
                    </h2>
                    <p className="text-lg text-slate-600 leading-relaxed mb-8 italic border-l-4 border-blue-600 pl-6">
                        "{t("desc")}"
                    </p>

                    {hasFeatures && (
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
                            {featureIndices.map((i) => {
                                if (!t.has(`features.${i}`)) return null;
                                return (
                                    <div key={i} className="flex gap-3 items-start p-4 bg-white rounded-2xl shadow-sm border border-slate-100">
                                        <div className="mt-1">
                                            <CheckCircle2 className="w-5 h-5 text-blue-600" />
                                        </div>
                                        <p className="text-slate-700 font-medium">
                                            {t(`features.${i}`)}
                                        </p>
                                    </div>
                                );
                            })}
                        </div>
                    )}
                </motion.div>
            </div>

            {/* Representative Customers Section - Moved Up */}
            <div className="container mx-auto px-4 pt-32 pb-24">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                >
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                            {t("representative_title")}
                        </h2>
                        <div className="w-20 h-1.5 bg-blue-600 mx-auto rounded-full" />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {customerIndices.map((i) => {
                            if (!t.has(`customers.${i}.name`)) return null;
                            return (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, y: 10 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.4, delay: i * 0.05 }}
                                    viewport={{ once: true }}
                                    className="group p-6 bg-white rounded-2xl border border-slate-100 hover:border-blue-200 hover:shadow-xl hover:shadow-blue-900/5 transition-all duration-300"
                                >
                                    <div className="flex items-center gap-4 mb-3">
                                        <div className="w-10 h-10 bg-slate-50 rounded-xl flex items-center justify-center text-slate-400 group-hover:bg-blue-50 group-hover:text-blue-600 transition-colors">
                                            <Building2 className="w-5 h-5" />
                                        </div>
                                        <h3 className="font-bold text-slate-900 group-hover:text-blue-700 transition-colors">
                                            {t(`customers.${i}.name`)}
                                        </h3>
                                    </div>
                                    <div className="flex items-center gap-2 text-sm text-slate-500 pl-14">
                                        <Globe className="w-4 h-4 opacity-50" />
                                        <span>{t(`customers.${i}.industry`)}</span>
                                    </div>
                                </motion.div>
                            );
                        })}
                    </div>
                </motion.div>
            </div>

            {/* Bottom Section - Image and Contact Us moved here */}
            <div className="container mx-auto px-4 pb-32">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center bg-white p-8 lg:p-16 rounded-[3rem] shadow-xl shadow-slate-200/50 border border-slate-100">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className="relative"
                    >
                        <div className="aspect-[4/3] rounded-[2rem] overflow-hidden shadow-2xl">
                            <img
                                src={imageSrc}
                                alt={t("title")}
                                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                            />
                            <div className="absolute inset-0 bg-gradient-to-tr from-blue-900/40 to-transparent mix-blend-multiply" />
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className="space-y-8"
                    >
                        <h3 className="text-3xl font-bold text-slate-900">
                            {t("cta_title")}
                        </h3>
                        <p className="text-lg text-slate-600">
                            {t("cta_desc")}
                        </p>
                        <div className="flex items-center gap-4 pt-4">
                            <Link
                                href="/contact"
                                className="px-10 py-5 bg-blue-600 text-white rounded-2xl font-bold hover:bg-blue-700 transition-all hover:shadow-2xl hover:shadow-blue-600/30 inline-flex items-center gap-3 group"
                            >
                                {tNav("contact")} 
                                <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    );
}
