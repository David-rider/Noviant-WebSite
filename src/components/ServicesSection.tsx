"use client";

import ServiceCard from "@/components/ServiceCard";
import { Server, Database, ShieldCheck, Cloud, Cpu, Briefcase } from "lucide-react";
import { useTranslations } from "next-intl";

export default function ServicesSection() {
    const t = useTranslations("Services");

    const services = [
        {
            id: "ai",
            icon: Cpu,
            href: "/ai-solutions"
        },
        {
            id: "cloud",
            icon: Cloud,
            href: "/cloud-solutions"
        },
        {
            id: "cybersecurity",
            icon: ShieldCheck,
            href: "/cyber-security"
        },
        {
            id: "consulting",
            icon: Briefcase,
            href: "/consulting-implementation"
        },
        {
            id: "data",
            icon: Database,
            href: "/data-analytics"
        },
        {
            id: "infrastructure",
            icon: Server,
            href: "/digital-infrastructure"
        }
    ];

    return (
        <section className="py-24 bg-slate-50/50 dark:bg-slate-900/20">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400">
                        {t("title")}
                    </h2>
                    <p className="text-lg text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto">
                        {t("subtitle")}
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <ServiceCard
                            key={index}
                            title={t(`items.${service.id}.title`)}
                            description={t(`items.${service.id}.desc`)}
                            icon={service.icon}
                            href={service.href}
                            index={index}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}
