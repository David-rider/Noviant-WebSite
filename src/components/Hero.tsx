"use client";

import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function Hero() {
    const t = useTranslations("HomePage");

    return (
        <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden bg-white text-slate-900 pt-20">
            {/* Background Layer: Unified Light Tech */}
            <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-slate-50/50" />
                <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_30%,rgba(37,99,235,0.05),transparent_70%)]" />
            </div>

            <div className="container relative z-10 px-4 text-center">
                <motion.div
                    initial={{ opacity: 0, scale: 0.98 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6 }}
                    className="p-8 md:p-12 max-w-5xl mx-auto"
                >
                    <motion.span
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.3 }}
                        className="inline-block py-1 px-4 rounded-md bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-bold tracking-[0.1em] mb-8"
                    >
                        {t("title")}
                    </motion.span>

                    <h1 className="text-5xl md:text-8xl font-black mb-8 leading-none tracking-tight text-slate-900">
                        {t("hero_title")}
                    </h1>

                    <p className="text-xl md:text-2xl text-slate-500/80 max-w-3xl mx-auto mb-12 leading-relaxed font-semibold">
                        {t("hero_subtitle")}
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                        <Link
                            href="/ai-solutions"
                            className="group px-10 py-5 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl flex items-center gap-3 transition-all active:scale-95 shadow-lg shadow-blue-500/20"
                        >
                            {t("cta_primary")}
                            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </Link>
                        <Link
                            href="/msp"
                            className="px-10 py-5 bg-slate-100 hover:bg-slate-200 text-slate-900 border-2 border-slate-200 hover:border-blue-500/50 rounded-xl font-bold transition-all"
                        >
                            {t("cta_secondary")}
                        </Link>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
