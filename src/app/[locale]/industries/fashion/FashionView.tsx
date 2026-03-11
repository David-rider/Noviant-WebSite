"use client";

import PageHero from "@/components/PageHero";
import { useTranslations } from "next-intl";
import { TrendingUp, Store, CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";

export default function FashionPage() {
    const t = useTranslations("Fashion");

    const sections = [
        {
            id: "analytics",
            icon: TrendingUp,
            color: "text-rose-500",
            imgGradient: "from-rose-500/20 to-pink-500/20",
            imgUrl: "/images/unsplash/photo-1441984904996-e0b6ba687e04.jpg"
        },
        {
            id: "omnichannel",
            icon: Store,
            color: "text-fuchsia-500",
            imgGradient: "from-fuchsia-500/20 to-purple-500/20",
            imgUrl: "/images/unsplash/photo-1445205170230-053b83016050.jpg"
        }
    ];

    return (
        <div className="min-h-screen bg-white dark:bg-black">
            <PageHero
                title={t("hero_title")}
                subtitle={t("hero_subtitle")}
                bgGradient="from-rose-900/40 via-black to-black"
            />

            <div className="container mx-auto px-4 py-24 space-y-32">
                {sections.map((section, index) => (
                    <motion.div
                        key={section.id}
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: index * 0.1 }}
                        viewport={{ once: true }}
                        className={`flex flex-col ${index % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center gap-12 lg:gap-20`}
                    >
                        {/* Text Content */}
                        <div className="flex-1 space-y-6">
                            <div className={`inline-flex p-3 rounded-2xl bg-zinc-100 dark:bg-zinc-900 ${section.color}`}>
                                <section.icon className="w-8 h-8" />
                            </div>
                            <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 dark:text-white">
                                {t(`sections.${section.id}.title`)}
                            </h2>
                            <p className="text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed">
                                {t(`sections.${section.id}.description`)}
                            </p>
                            <ul className="space-y-3 pt-2">
                                {(t.raw(`sections.${section.id}.features`) as string[]).map((feature, i) => (
                                    <li key={i} className="flex items-center gap-3 text-zinc-700 dark:text-zinc-300">
                                        <CheckCircle2 className={`w-5 h-5 ${section.color}`} />
                                        {feature}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Visual Container */}
                        <div className="flex-1 w-full aspect-video lg:aspect-square max-h-[500px] relative rounded-3xl overflow-hidden bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 group cyber-corner lg:neon-border-blue">
                            {/* eslint-disable-next-line @next/next/no-img-element */}
                            <img
                                src={section.imgUrl}
                                alt={t(`sections.${section.id}.title`)}
                                className="absolute inset-0 w-full h-full object-cover opacity-100 group-hover:scale-105 transition-all duration-1000"
                            />
                            <div className={`absolute inset-0 bg-gradient-to-br ${section.imgGradient} opacity-40 mix-blend-overlay`} />
                            {/* Decorative grid */}
                            <div className="absolute inset-0 bg-grid-white/[0.1] bg-[size:40px_40px]" />
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
}
