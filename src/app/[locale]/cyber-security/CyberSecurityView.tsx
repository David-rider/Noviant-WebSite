"use client";

import PageHero from "@/components/PageHero";
import { useTranslations } from "next-intl";
import { ShieldCheck, UserCheck, CheckSquare, BookOpen, CheckCircle2, Fingerprint } from "lucide-react";
import { motion } from "framer-motion";

export default function CyberSecurityPage() {
    const t = useTranslations("CyberSecurity");

    const sections = [
        {
            id: "mss",
            icon: ShieldCheck,
            color: "text-red-500",
            imgGradient: "from-red-500/20 to-orange-500/20",
            imgUrl: "/images/unsplash/photo-1550751827-4bd374c3f58b.jpg"
        },
        {
            id: "vciso",
            icon: UserCheck,
            color: "text-blue-500",
            imgGradient: "from-blue-500/20 to-cyan-500/20",
            imgUrl: "/images/unsplash/photo-1573164713988-8665fc963095.jpg"
        },
        {
            id: "compliance",
            icon: CheckSquare,
            color: "text-emerald-500",
            imgGradient: "from-emerald-500/20 to-teal-500/20",
            imgUrl: "/images/unsplash/photo-1450101499163-c8848c66ca85.jpg"
        },
        {
            id: "education",
            icon: BookOpen,
            color: "text-purple-500",
            imgGradient: "from-purple-500/20 to-indigo-500/20",
            imgUrl: "/images/unsplash/photo-1524178232363-1fb2b075b655.jpg"
        },
        {
            id: "iam",
            icon: Fingerprint,
            color: "text-rose-500",
            imgGradient: "from-rose-500/20 to-pink-500/20",
            imgUrl: "/images/unsplash/photo-1563986768609-322da13575f3.jpg"
        }
    ];

    return (
        <div className="min-h-screen bg-white dark:bg-black">
            <PageHero
                title={t("hero_title")}
                subtitle={t("hero_subtitle")}
                bgGradient="from-red-900/40 via-black to-black"
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

                            {/* Scanning line effect for the card */}
                            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-red-500/5 to-transparent h-1/2 w-full animate-pulse pointer-events-none" />

                            {/* Decorative grid */}
                            <div className="absolute inset-0 bg-grid-white/[0.1] bg-[size:40px_40px]" />

                            {/* Blue shadow glow */}
                            <div className="absolute inset-0 neon-border-blue pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity" />
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
}
