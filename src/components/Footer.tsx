"use client";

import { useTranslations } from "next-intl";
import Logo from "./Logo";
import { Link } from "@/i18n/routing";
import Image from "next/image";

export default function Footer() {
    const t = useTranslations("Footer");
    const tNav = useTranslations("Navigation");
    const currentYear = new Date().getFullYear();

    const solutionLinks = [
        { href: "/ai-solutions", label: tNav("ai_solutions") },
        { href: "/cloud-solutions", label: tNav("cloud_solutions") },
        { href: "/cyber-security", label: tNav("cyber_security") },
        { href: "/data-analytics", label: tNav("data_analytics") },
        { href: "/digital-infrastructure", label: tNav("digital_infrastructure") },
        { href: "/consulting-implementation", label: tNav("consulting_implementation") },
    ];

    const mspLinks = [
        { href: "/msp", label: tNav("msp") },
        { href: "/msp/managed-it-services", label: tNav("managed_it") },
        { href: "/msp/cybersecurity-compliance", label: tNav("cybersecurity_compliance") },
        { href: "/msp/cloud-computing", label: tNav("cloud_computing") },
        { href: "/msp/why-choose-us", label: tNav("why_choose_us") },
        { href: "/msp/support-center", label: tNav("support_center") },
    ];

    return (
        <footer className="bg-zinc-50 border-t border-zinc-200 py-12" style={{ colorScheme: 'light' }}>
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
                    {/* Column 1: Logo + Address */}
                    <div className="col-span-1">
                        <Logo />
                        <p className="mt-4 text-sm text-zinc-500 leading-relaxed">
                            {t("address")} <br />
                            {t("phone")}
                        </p>
                    </div>

                    {/* Column 2: Solutions */}
                    <div>
                        <h4 className="text-sm font-bold text-slate-800 uppercase tracking-wider mb-4">
                            {tNav("solutions")}
                        </h4>
                        <ul className="space-y-2">
                            {solutionLinks.map((link) => (
                                <li key={link.href}>
                                    <Link
                                        href={link.href}
                                        className="text-sm text-zinc-500 hover:text-blue-600 transition-colors"
                                    >
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Column 3: MSP */}
                    <div>
                        <h4 className="text-sm font-bold text-slate-800 uppercase tracking-wider mb-4">
                            {tNav("msp")}
                        </h4>
                        <ul className="space-y-2">
                            {mspLinks.map((link) => (
                                <li key={link.href}>
                                    <Link
                                        href={link.href}
                                        className="text-sm text-zinc-500 hover:text-blue-600 transition-colors"
                                    >
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Column 4: Company */}
                    <div>
                        <h4 className="text-sm font-bold text-slate-800 uppercase tracking-wider mb-4">
                            {tNav("company")}
                        </h4>
                        <ul className="space-y-2">
                            <li>
                                <Link href="/news" className="text-sm text-zinc-500 hover:text-blue-600 transition-colors">
                                    {tNav("news")}
                                </Link>
                            </li>
                            <li>
                                <Link href="/partner" className="text-sm text-zinc-500 hover:text-blue-600 transition-colors">
                                    {tNav("partner")}
                                </Link>
                            </li>
                            <li>
                                <Link href="/contact" className="text-sm text-zinc-500 hover:text-blue-600 transition-colors">
                                    {tNav("contact")}
                                </Link>
                            </li>
                            <li>
                                <Link href="/msp/referral-program" className="text-sm text-zinc-500 hover:text-blue-600 transition-colors">
                                    {tNav("referral_program")}
                                </Link>
                            </li>
                            <li>
                                <Link href="/msp/our-clients" className="text-sm text-zinc-500 hover:text-blue-600 transition-colors">
                                    {tNav("our_clients")}
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="pt-8 border-t border-zinc-200 flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6">
                    <div className="flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-8 flex-1">
                        <div className="flex items-center gap-3">
                            <p className="text-xs text-zinc-400 whitespace-nowrap">
                                {t("rights")}
                            </p>
                            <span className="text-zinc-300 text-xs hidden md:inline">|</span>
                            <Link href="/terms" className="text-xs text-zinc-400 hover:text-blue-600 transition-colors uppercase font-medium tracking-wider">
                                {tNav("terms")}
                            </Link>
                        </div>
                        <div className="flex items-start gap-3 bg-zinc-100/50 p-3 rounded-xl border border-zinc-200/50">
                            <div className="shrink-0">
                                <Image
                                    src="/images/certifications/iso-27001-certification.png"
                                    alt="ISO/IEC 27001:2022"
                                    width={40}
                                    height={40}
                                    className="opacity-90 hover:opacity-100 transition-opacity"
                                />
                            </div>
                            <p className="text-[10px] md:text-xs text-zinc-500 leading-relaxed max-w-3xl">
                                <span className="font-bold">{t("iso_certification_title")}</span>
                                {t("iso_certification_desc")}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
