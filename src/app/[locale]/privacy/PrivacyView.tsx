"use client";

import PageHero from "@/components/PageHero";
import { useTranslations } from "next-intl";
import { ShieldCheck, MapPin, Phone, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "@/i18n/routing";

interface Section {
    heading: string;
    body: string;
    items?: string[];
}

export default function PrivacyView() {
    const t = useTranslations("Privacy_Page");
    const sections = t.raw("sections") as Section[];

    return (
        <div className="min-h-screen bg-white dark:bg-black relative overflow-hidden">
            <div className="absolute inset-0 cyber-grid opacity-20 pointer-events-none" />

            <PageHero
                title={t("hero_title")}
                subtitle={t("last_updated")}
                bgGradient="from-blue-900/40 via-black to-blue-900/40"
            />

            <div className="container mx-auto px-4 py-14 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="max-w-4xl mx-auto"
                >
                    <div className="bg-zinc-50 dark:bg-zinc-900/50 p-6 md:p-10 rounded-[2.5rem] border border-zinc-200 dark:border-zinc-800 cyber-corner shadow-2xl">
                        <div className="flex items-center gap-4 mb-6">
                            <div className="p-4 bg-blue-100 dark:bg-blue-900/30 rounded-2xl text-blue-600 dark:text-blue-400">
                                <ShieldCheck className="w-8 h-8" />
                            </div>
                            <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 dark:text-white">
                                {t("title")}
                            </h2>
                        </div>

                        <p className="text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed mb-10">
                            {t("intro")}
                        </p>

                        <div className="space-y-8">
                            {sections.map((section, i) => (
                                <div key={i}>
                                    <h3 className="text-xl font-bold text-zinc-900 dark:text-white mb-3">
                                        {section.heading}
                                    </h3>
                                    <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">
                                        {section.body}
                                    </p>
                                    {section.items && (
                                        <ul className="mt-3 space-y-2 pl-1">
                                            {section.items.map((item, j) => (
                                                <li key={j} className="flex gap-3 text-zinc-600 dark:text-zinc-400">
                                                    <span className="mt-2 w-1.5 h-1.5 rounded-full bg-blue-500 flex-shrink-0" />
                                                    <span className="leading-relaxed">{item}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    )}
                                </div>
                            ))}
                        </div>

                        {/* Contact block */}
                        <div className="mt-10 pt-8 border-t border-zinc-200 dark:border-zinc-800 space-y-4">
                            <p className="text-lg font-bold text-zinc-900 dark:text-white">
                                {t("contact_company")}
                            </p>
                            <div className="flex items-start gap-3 text-zinc-600 dark:text-zinc-400">
                                <MapPin className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                                <span>{t("contact_address")}</span>
                            </div>
                            <div className="flex items-center gap-3 text-zinc-600 dark:text-zinc-400">
                                <Phone className="w-5 h-5 text-blue-600 flex-shrink-0" />
                                <a href={`tel:${t("contact_phone")}`} className="hover:text-blue-600 transition-colors">
                                    {t("contact_phone")}
                                </a>
                            </div>
                            <Link
                                href="/contact"
                                className="inline-flex items-center gap-2 text-blue-600 font-semibold hover:gap-3 transition-all pt-2"
                            >
                                {t("contact_link_label")}
                                <ArrowRight className="w-4 h-4" />
                            </Link>
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
    );
}
