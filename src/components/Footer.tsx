"use client";

import { useTranslations } from "next-intl";
import Logo from "./Logo";
import { Link } from "@/i18n/routing";
import Image from "next/image";
import { Linkedin, Facebook } from "lucide-react";

export default function Footer() {
    const t = useTranslations("Footer");
    const tNav = useTranslations("Navigation");

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
                    {/* Column 1: Logo + Address + ISO */}
                    <div className="col-span-1">
                        <Logo />
                        <div className="mt-6 flex flex-col gap-4">
                            <div className="space-y-2">
                                <p className="text-sm text-zinc-500 leading-relaxed">
                                    {t("address")}
                                </p>
                                <div className="flex items-center gap-4">
                                    <a 
                                        href={`tel:${t("phone")}`} 
                                        className="text-sm text-zinc-500 hover:text-blue-600 transition-colors font-medium"
                                    >
                                        {t("phone")}
                                    </a>
                                    <div className="flex items-center gap-3">
                                        <a 
                                            href="https://www.linkedin.com/company/noviant/about/" 
                                            target="_blank" 
                                            rel="noopener noreferrer"
                                            className="p-1.5 rounded-full border border-zinc-200 text-zinc-400 hover:text-blue-600 hover:border-blue-600 transition-all"
                                            aria-label="LinkedIn"
                                        >
                                            <Linkedin size={16} />
                                        </a>
                                        <a 
                                            href="https://www.facebook.com/Noviant8" 
                                            target="_blank" 
                                            rel="noopener noreferrer"
                                            className="p-1.5 rounded-full border border-zinc-200 text-zinc-400 hover:text-[#1877F2] hover:border-[#1877F2] transition-all"
                                            aria-label="Facebook"
                                        >
                                            <Facebook size={16} />
                                        </a>
                                    </div>
                                </div>
                            </div>
                            
                            <div className="group relative inline-block w-fit mt-2">
                                <Image
                                    src="/images/certifications/iso-27001-certification.png"
                                    alt="ISO/IEC 27001:2022"
                                    width={48}
                                    height={48}
                                    className="opacity-90 hover:opacity-100 transition-opacity cursor-help"
                                />
                                {/* Tooltip */}
                                <div className="absolute bottom-full left-0 mb-3 w-72 p-3 bg-slate-900/95 backdrop-blur-sm text-white text-[11px] leading-relaxed rounded-xl opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none shadow-xl border border-white/10 translate-y-2 group-hover:translate-y-0 z-50">
                                    <div className="font-bold mb-1 text-blue-400">{t("iso_certification_title")}</div>
                                    {t("iso_certification_desc")}
                                    <div className="absolute top-full left-6 -translate-y-px border-8 border-transparent border-t-slate-900/95" />
                                </div>
                            </div>
                        </div>
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
                    <div className="flex items-center gap-3">
                        <p className="text-xs text-zinc-400 whitespace-nowrap">
                            {t("rights")}
                        </p>
                        <span className="text-zinc-300 text-xs hidden md:inline">|</span>
                        <Link href="/terms" className="text-xs text-zinc-400 hover:text-blue-600 transition-colors uppercase font-medium tracking-wider">
                            {tNav("terms")}
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
