"use client";

import { useTranslations } from "next-intl";
import Logo from "./Logo";
import { Link } from "@/i18n/routing";

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

                <div className="pt-8 border-t border-zinc-200 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-xs text-zinc-400">
                        {t("rights")}
                    </p>
                </div>
            </div>
        </footer>
    );
}
