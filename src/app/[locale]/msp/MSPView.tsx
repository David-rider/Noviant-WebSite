"use client";

import PageHero from "@/components/PageHero";
import { useTranslations } from "next-intl";
import { ShieldCheck, Cloud, Headphones, Network, Database, UserCog } from "lucide-react";
import { motion } from "framer-motion";

export default function MSPPage() {
    const t = useTranslations("MSP_Page");

    const features = [
        { id: "security", icon: ShieldCheck },
        { id: "cloud", icon: Cloud },
        { id: "network", icon: Network },
        { id: "backup", icon: Database },
        { id: "consulting", icon: UserCog },
        { id: "support", icon: Headphones },
    ];

    return (
        <div className="min-h-screen bg-[#f8fafc]">
            <PageHero
                title={t("title")}
                subtitle={t("subtitle")}
                bgGradient="from-green-900/40 via-slate-900 to-slate-900"
            />

            <div className="container mx-auto px-4 py-24">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {features.map((feature, index) => (
                        <motion.div
                            key={feature.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="bg-white border border-zinc-200 p-8 rounded-3xl hover:border-blue-500/50 transition-colors group shadow-sm"
                        >
                            <div className="w-12 h-12 bg-blue-500/10 rounded-2xl flex items-center justify-center mb-6 text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-all">
                                <feature.icon className="w-6 h-6" />
                            </div>
                            <h3 className="text-xl font-bold mb-3 text-zinc-900">
                                {t(`features.${feature.id}.title`)}
                            </h3>
                            <p className="text-zinc-600">
                                {t(`features.${feature.id}.desc`)}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
}
