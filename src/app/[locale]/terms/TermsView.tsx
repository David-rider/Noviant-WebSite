"use client";

import PageHero from "@/components/PageHero";
import { useTranslations } from "next-intl";
import { FileText, ExternalLink } from "lucide-react";
import { motion } from "framer-motion";

export default function TermsView() {
    const t = useTranslations("Terms_Page");

    return (
        <div className="min-h-screen bg-white dark:bg-black relative overflow-hidden">
            <div className="absolute inset-0 cyber-grid opacity-20 pointer-events-none" />
            
            <PageHero
                title={t("hero_title")}
                subtitle={t("description")}
                bgGradient="from-blue-900/40 via-black to-blue-900/40"
            />

            <div className="container mx-auto px-4 py-24 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="max-w-4xl mx-auto"
                >
                    <div className="bg-zinc-50 dark:bg-zinc-900/50 p-8 md:p-16 rounded-[2.5rem] border border-zinc-200 dark:border-zinc-800 cyber-corner hover:neon-glow-blue transition-all duration-500 shadow-2xl">
                        <div className="flex items-center gap-4 mb-8">
                            <div className="p-4 bg-blue-100 dark:bg-blue-900/30 rounded-2xl text-blue-600 dark:text-blue-400">
                                <FileText className="w-8 h-8" />
                            </div>
                            <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 dark:text-white">
                                {t("title")}
                            </h2>
                        </div>

                        <div className="space-y-8">
                            <p className="text-xl text-zinc-600 dark:text-zinc-400 leading-relaxed">
                                {t("description")}
                            </p>

                            <div className="pt-8 border-t border-zinc-200 dark:border-zinc-800">
                                <a
                                    href={t("pdf_url")}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="group inline-flex items-center gap-4 px-8 py-5 bg-blue-600 hover:bg-blue-500 text-white rounded-2xl font-bold transition-all hover:shadow-2xl hover:shadow-blue-600/30 text-lg"
                                >
                                    <span>{t("action_link")}</span>
                                    <ExternalLink className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                                </a>
                            </div>

                            <p className="text-sm text-zinc-500 dark:text-zinc-500 italic mt-12">
                                * This document is provided for informational purposes. If you have any questions regarding our terms, please contact us.
                            </p>
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
    );
}
