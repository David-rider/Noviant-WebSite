"use client";

import PageHero from "@/components/PageHero";
import { useTranslations } from "next-intl";
import { Server, Database, Cable, CheckCircle2, Cpu, Zap, Thermometer, Box, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "@/i18n/routing";

export default function AISolutionsPage() {
    const t = useTranslations("AI_Page");

    const sections = [
        {
            id: "server",
            icon: Server,
            color: "text-blue-500",
            imgGradient: "from-blue-500/20 to-purple-500/20"
        },
        {
            id: "datacenter",
            icon: Database,
            color: "text-purple-500",
            imgGradient: "from-purple-500/20 to-pink-500/20"
        },
        {
            id: "connectivity",
            icon: Cable,
            color: "text-cyan-500",
            imgGradient: "from-cyan-500/20 to-blue-500/20"
        },
        {
            id: "gen_ai",
            icon: Cpu,
            color: "text-emerald-500",
            imgGradient: "from-emerald-500/20 to-teal-500/20"
        }
    ];

    return (
        <div className="min-h-screen bg-white dark:bg-black">
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "FAQPage",
                "mainEntity": [
                    { "@type": "Question", "name": "What AI solutions does Noviant offer for enterprises?", "acceptedAnswer": { "@type": "Answer", "text": "Noviant offers enterprise AI solutions including process automation, predictive analytics, machine learning integration, natural language processing, AI-powered cybersecurity, Digital Twin implementations, and liquid-cooled AI datacenter container infrastructure (LiquidEdge AI POD) for New York businesses." } },
                    { "@type": "Question", "name": "How can AI improve my business operations?", "acceptedAnswer": { "@type": "Answer", "text": "AI can automate repetitive tasks, analyze large datasets for actionable insights, predict equipment failures, enhance customer service with intelligent chatbots, and improve security threat detection — resulting in significant cost savings and efficiency gains." } },
                    { "@type": "Question", "name": "What is a Digital Twin and how does Noviant implement it?", "acceptedAnswer": { "@type": "Answer", "text": "A Digital Twin is a virtual replica of a physical system, process, or facility. Noviant designs and deploys Digital Twin solutions for real estate and MSP environments, enabling real-time monitoring, simulation, and predictive maintenance." } },
                    { "@type": "Question", "name": "What is the LiquidEdge AI POD?", "acceptedAnswer": { "@type": "Answer", "text": "The LiquidEdge AI POD is a factory-built, liquid-cooled AI datacenter container built in a 40-ft North American-spec ISO container. It supports 44–200 kW of IT load, achieves PUE ≤ 1.15, and can be deployed and operational within 8 weeks. It supports NVIDIA GB200, H100, H200, B200, RTX 5090, and AMD MI300X GPUs." } },
                    { "@type": "Question", "name": "How quickly can an AI datacenter container be deployed?", "acceptedAnswer": { "@type": "Answer", "text": "The LiquidEdge AI POD is factory pre-built and tested, enabling deployment from factory to live operation in as little as 8 weeks — compared to 36+ months for traditional datacenter construction. No on-site civil works are required." } },
                    { "@type": "Question", "name": "What GPUs does the LiquidEdge AI POD support?", "acceptedAnswer": { "@type": "Answer", "text": "The LiquidEdge AI POD supports multiple GPU configurations: up to 64× NVIDIA RTX 5090, 32× H100/H200 SXM5, 24× B200 SXM6, 32× AMD MI300X per single-rack LE-44 unit, and up to 1× GB200 NVL72 (72 GPUs) in the quad-rack LE-200 configuration." } },
                    { "@type": "Question", "name": "Where can the LiquidEdge AI POD be deployed?", "acceptedAnswer": { "@type": "Answer", "text": "The LiquidEdge AI POD can be deployed anywhere power is available, including industrial sites, warehouse adjacencies, brownfield real estate, energy-adjacent locations (solar, gas wells), and remote or sovereign compute environments. Its IP55 enclosure operates from -40°C to +50°C." } }
                ]
            }) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "ItemList",
                "name": "LiquidEdge AI POD Product Lineup",
                "description": "Factory-built liquid-cooled AI datacenter containers available in three configurations",
                "itemListElement": [
                    {
                        "@type": "ListItem",
                        "position": 1,
                        "item": {
                            "@type": "Product",
                            "name": "LiquidEdge AI POD LE-44",
                            "description": "Single-rack edge AI datacenter container. 44 kW IT load, supports 64× RTX 5090 or 32× H100/H200 or 24× B200. Ideal for inference, fine-tuning, and edge AI workloads.",
                            "brand": { "@type": "Brand", "name": "LiquidEdge" },
                            "offers": { "@type": "Offer", "availability": "https://schema.org/InStock", "seller": { "@type": "Organization", "name": "Noviant" } },
                            "additionalProperty": [
                                { "@type": "PropertyValue", "name": "IT Load", "value": "44 kW" },
                                { "@type": "PropertyValue", "name": "PUE", "value": "≤ 1.15" },
                                { "@type": "PropertyValue", "name": "Delivery", "value": "8 weeks" },
                                { "@type": "PropertyValue", "name": "Form Factor", "value": "40-ft ISO Container" }
                            ]
                        }
                    },
                    {
                        "@type": "ListItem",
                        "position": 2,
                        "item": {
                            "@type": "Product",
                            "name": "LiquidEdge AI POD LE-88",
                            "description": "Twin-rack mainstream AI datacenter container. 88 kW IT load, supports 128× RTX 5090 or 64× H100/H200 or 48× B200. Ideal for Neocloud and GPU-as-a-Service deployments.",
                            "brand": { "@type": "Brand", "name": "LiquidEdge" },
                            "offers": { "@type": "Offer", "availability": "https://schema.org/InStock", "seller": { "@type": "Organization", "name": "Noviant" } },
                            "additionalProperty": [
                                { "@type": "PropertyValue", "name": "IT Load", "value": "88 kW" },
                                { "@type": "PropertyValue", "name": "PUE", "value": "≤ 1.15" },
                                { "@type": "PropertyValue", "name": "Delivery", "value": "8 weeks" },
                                { "@type": "PropertyValue", "name": "Form Factor", "value": "40-ft HC ISO Container" }
                            ]
                        }
                    },
                    {
                        "@type": "ListItem",
                        "position": 3,
                        "item": {
                            "@type": "Product",
                            "name": "LiquidEdge AI POD LE-200",
                            "description": "Quad-rack heavy AI datacenter container. 200 kW IT load, supports 1× GB200 NVL72 (72 GPUs) or 256× RTX 5090. Ideal for LLM training and hyperscaler bridge workloads.",
                            "brand": { "@type": "Brand", "name": "LiquidEdge" },
                            "offers": { "@type": "Offer", "availability": "https://schema.org/InStock", "seller": { "@type": "Organization", "name": "Noviant" } },
                            "additionalProperty": [
                                { "@type": "PropertyValue", "name": "IT Load", "value": "200 kW" },
                                { "@type": "PropertyValue", "name": "PUE", "value": "≤ 1.15" },
                                { "@type": "PropertyValue", "name": "Delivery", "value": "8 weeks" },
                                { "@type": "PropertyValue", "name": "Form Factor", "value": "40-ft HC ISO Container" }
                            ]
                        }
                    }
                ]
            }) }} />
            <PageHero
                title={t("hero_title")}
                subtitle={t("hero_subtitle")}
                bgGradient="from-indigo-900/40 via-black to-black"
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
                            {/* Unsplash Source Images */}
                            {/* eslint-disable-next-line @next/next/no-img-element */}
                            <img
                                src={
                                    section.id === "server" ? "/images/ai-solutions/gpu-cluster.png" :
                                        section.id === "datacenter" ? "/images/ai-solutions/data-center.png" :
                                            section.id === "connectivity" ? "/images/unsplash/photo-1451187580459-43490279c0fa.jpg" :
                                                "/images/unsplash/photo-1620712943543-bcc4688e7485.jpg"
                                }
                                alt={t(`sections.${section.id}.title`)}
                                loading="lazy"
                                className="absolute inset-0 w-full h-full object-cover opacity-100 group-hover:scale-105 transition-all duration-1000"
                            />
                            <div className={`absolute inset-0 bg-gradient-to-br ${section.imgGradient} opacity-40 mix-blend-overlay`} />

                            {/* Scanning line effect for the card */}
                            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-500/5 to-transparent h-1/2 w-full animate-pulse pointer-events-none" />

                            {/* Decorative grid */}
                            <div className="absolute inset-0 bg-grid-white/[0.1] bg-[size:40px_40px]" />

                            {/* Blue shadow glow */}
                            <div className="absolute inset-0 neon-border-blue pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity" />
                        </div>
                    </motion.div>
                ))}
            </div>

            {/* ── LiquidEdge AI POD Section ── */}
            <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
                viewport={{ once: true }}
                className="border-t border-zinc-200 dark:border-zinc-800"
            >
                <div className="container mx-auto px-4 py-24 space-y-16">

                    {/* Header */}
                    <div className="text-center space-y-4 max-w-3xl mx-auto">
                        <h2 className="text-4xl md:text-5xl font-black text-zinc-900 dark:text-white">
                            {t("liquidedge.title")}
                        </h2>
                        <p className="text-xl font-semibold text-blue-600 dark:text-blue-400">
                            {t("liquidedge.subtitle")}
                        </p>
                        <p className="text-lg text-zinc-500 dark:text-zinc-400 italic">
                            {t("liquidedge.tagline")}
                        </p>
                        <p className="text-base text-zinc-600 dark:text-zinc-400 leading-relaxed">
                            {t("liquidedge.description")}
                        </p>
                    </div>

                    {/* Spec Grid */}
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                        {(t.raw("liquidedge.specs") as { label: string; value: string }[]).map((spec, i) => (
                            <div key={i} className="p-5 rounded-2xl bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 flex flex-col gap-1 hover:border-blue-500/40 transition-colors">
                                <span className="text-xs font-semibold uppercase tracking-wider text-zinc-400 dark:text-zinc-500">{spec.label}</span>
                                <span className="text-lg font-bold text-zinc-900 dark:text-white">{spec.value}</span>
                            </div>
                        ))}
                    </div>

                    {/* Product Image */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.97 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.7 }}
                        viewport={{ once: true }}
                        className="relative rounded-3xl overflow-hidden border border-zinc-200 dark:border-zinc-800 shadow-2xl group cyber-corner"
                    >
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                            src="/images/ai-solutions/liquidedge-ai-pod.jpg"
                            alt="LiquidEdge AI POD — Liquid-Cooled AI Datacenter Container"
                            className="w-full h-[420px] object-cover group-hover:scale-105 transition-transform duration-1000"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                        <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between">
                            <div>
                                <p className="text-white font-black text-2xl">LiquidEdge AI POD</p>
                                <p className="text-blue-300 text-sm font-medium">40-ft ISO Container · IP55 · Direct Liquid Cooling</p>
                            </div>
                            <div className="text-right">
                                <p className="text-white font-bold text-lg">PUE ≤ 1.15</p>
                                <p className="text-zinc-300 text-sm">8-Week Delivery</p>
                            </div>
                        </div>
                        <div className="absolute inset-0 neon-border-blue pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity" />
                    </motion.div>

                    {/* Compliance — below image */}
                    <p className="text-xs text-zinc-400 dark:text-zinc-500 text-center">
                        {t("liquidedge.compliance")}
                    </p>

                    {/* Three Tiers */}
                    <div className="space-y-6">
                        <h3 className="text-2xl font-bold text-zinc-900 dark:text-white text-center">
                            {t("liquidedge.tiers_title")}
                        </h3>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            {(t.raw("liquidedge.tiers") as { name: string; label: string; power: string; gpus: string; use: string }[]).map((tier, i) => (
                                <div key={i} className={`relative p-6 rounded-2xl border flex flex-col gap-4 cyber-corner transition-all hover:shadow-lg ${i === 1 ? 'bg-blue-600 dark:bg-blue-700 border-blue-500 text-white shadow-blue-500/20 shadow-xl' : 'bg-white dark:bg-zinc-900 border-zinc-200 dark:border-zinc-700'}`}>
                                    {i === 1 && (
                                        <span className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-0.5 rounded-full text-xs font-bold bg-white text-blue-600 shadow">FLAGSHIP</span>
                                    )}
                                    <div className="space-y-1">
                                        <div className={`text-3xl font-black ${i === 1 ? 'text-white' : 'text-blue-600 dark:text-blue-400'}`}>{tier.name}</div>
                                        <div className={`text-sm font-semibold ${i === 1 ? 'text-blue-100' : 'text-zinc-500 dark:text-zinc-400'}`}>{tier.label}</div>
                                    </div>
                                    <div className="space-y-2">
                                        <div className={`flex items-center gap-2 text-sm font-bold ${i === 1 ? 'text-white' : 'text-zinc-800 dark:text-zinc-200'}`}>
                                            <Zap className="w-4 h-4 shrink-0" />{tier.power}
                                        </div>
                                        <div className={`flex items-start gap-2 text-sm ${i === 1 ? 'text-blue-100' : 'text-zinc-600 dark:text-zinc-400'}`}>
                                            <Box className="w-4 h-4 shrink-0 mt-0.5" />{tier.gpus}
                                        </div>
                                        <div className={`flex items-center gap-2 text-sm ${i === 1 ? 'text-blue-100' : 'text-zinc-500 dark:text-zinc-400'}`}>
                                            <Thermometer className="w-4 h-4 shrink-0" />{tier.use}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* CTA */}
                    <div className="flex justify-center">
                        <Link href="/contact">
                            <button className="inline-flex items-center gap-2 px-8 py-4 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-xl transition-colors shadow-lg shadow-blue-500/20">
                                {t("liquidedge.cta")} <ArrowRight className="w-5 h-5" />
                            </button>
                        </Link>
                    </div>

                </div>
            </motion.div>

        </div>
    );
}
