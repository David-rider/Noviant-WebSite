"use client";

import { Link } from "@/i18n/routing";
import { useTranslations } from "next-intl";
import LanguageSwitcher from "./LanguageSwitcher";
import Logo from "./Logo";
import { Menu, X, ChevronDown } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
    const t = useTranslations("Navigation");
    const [isOpen, setIsOpen] = useState(false);

    const solutionLinks = [
        { href: "/ai-solutions", label: t("ai_solutions") },
        { href: "/cyber-security", label: t("cyber_security") },
        { href: "/cloud-solutions", label: t("cloud_solutions") },
        { href: "/data-analytics", label: t("data_analytics") },
        { href: "/digital-infrastructure", label: t("digital_infrastructure") },
        { href: "/consulting-implementation", label: t("consulting_implementation") },
    ];

    const industryLinks = [
        { href: "/industries/banking", label: t("banking") },
        { href: "/industries/education", label: t("education") },
        { href: "/industries/fashion", label: t("fashion") },
        { href: "/industries/financial-services", label: t("financial_services") },
        { href: "/industries/government", label: t("government") },
        { href: "/industries/health-services", label: t("health_services") },
        { href: "/industries/not-for-profit", label: t("not_for_profit") },
        { href: "/industries/retail", label: t("retail") },
        { href: "/industries/service-based-businesses", label: t("service_businesses") },
    ];

    const mspLinks = [
        { href: "/msp", label: t("msp") },
        { href: "/msp/support-center", label: t("support_center") },
        { href: "/msp/is-this-you", label: t("is_this_you") },
        { href: "/msp/managed-it-services", label: t("managed_it") },
        { href: "/msp/cybersecurity-compliance", label: t("cybersecurity_compliance") },
        { href: "/msp/cloud-computing", label: t("cloud_computing") },
        { href: "/msp/business-phone-system", label: t("business_phone") },
        { href: "/msp/why-choose-us", label: t("why_choose_us") },
        { href: "/msp/our-clients", label: t("our_clients") },
        { href: "/msp/referral-program", label: t("referral_program") },
    ];

    const navLinks = [
        { href: "/partner", label: t("partner") },
        { href: "/contact", label: t("contact") },
    ];

    return (
        <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 border-b border-slate-200 shadow-sm">
            <div className="container mx-auto px-4 h-16 flex items-center justify-between relative">
                <Logo />

                {/* Desktop Nav */}
                <nav className="hidden xl:flex items-center gap-2">
                    <div className="relative group">
                        <button className="px-4 py-2 text-sm font-bold tracking-tight text-slate-700 hover:text-blue-600 transition-colors flex items-center gap-1 focus:outline-none">
                            {t("solutions")} <ChevronDown className="w-4 h-4" />
                        </button>
                        <div className="absolute top-full left-0 mt-2 w-64 bg-white border border-slate-200 rounded-xl shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 flex flex-col py-2 overflow-hidden">
                            {solutionLinks.map((link) => (
                                <Link
                                    key={link.href}
                                    href={link.href}
                                    className="px-4 py-2.5 text-sm font-medium text-slate-600 hover:text-blue-600 hover:bg-slate-50 transition-colors"
                                >
                                    {link.label}
                                </Link>
                            ))}
                        </div>
                    </div>
                    <div className="relative group">
                        <button className="px-4 py-2 text-sm font-bold tracking-tight text-slate-700 hover:text-blue-600 transition-colors flex items-center gap-1 focus:outline-none">
                            {t("industries")} <ChevronDown className="w-4 h-4" />
                        </button>
                        <div className="absolute top-full left-0 mt-2 w-64 bg-white border border-slate-200 rounded-xl shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 flex flex-col py-2 overflow-hidden max-h-[70vh] hover:overflow-y-auto">
                            {industryLinks.map((link) => (
                                <Link
                                    key={link.href}
                                    href={link.href}
                                    className="px-4 py-2.5 text-sm font-medium text-slate-600 hover:text-blue-600 hover:bg-slate-50 transition-colors"
                                >
                                    {link.label}
                                </Link>
                            ))}
                        </div>
                    </div>
                    <div className="relative group">
                        <button className="px-4 py-2 text-sm font-bold tracking-tight text-slate-700 hover:text-blue-600 transition-colors flex items-center gap-1 focus:outline-none">
                            {t("msp")} <ChevronDown className="w-4 h-4" />
                        </button>
                        <div className="absolute top-full left-0 mt-2 w-64 bg-white border border-slate-200 rounded-xl shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 flex flex-col py-2 overflow-hidden max-h-[70vh] hover:overflow-y-auto">
                            {mspLinks.map((link) => (
                                <Link
                                    key={link.href}
                                    href={link.href}
                                    className="px-4 py-2.5 text-sm font-medium text-slate-600 hover:text-blue-600 hover:bg-slate-50 transition-colors"
                                >
                                    {link.label}
                                </Link>
                            ))}
                        </div>
                    </div>
                    {navLinks.map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            className="px-4 py-2 text-sm font-bold tracking-tight text-slate-700 hover:text-blue-600 transition-colors"
                        >
                            {link.label}
                        </Link>
                    ))}
                    <div className="h-4 w-px bg-slate-200 mx-4" />
                    <LanguageSwitcher />
                </nav>

                {/* Mobile Menu Toggle */}
                <button
                    className="xl:hidden p-2 text-slate-600 hover:text-blue-600 transition-colors"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
                </button>
            </div>

            {/* Mobile Nav */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="xl:hidden bg-white border-b border-zinc-200 overflow-hidden"
                    >
                        <nav className="container mx-auto px-4 py-4 flex flex-col gap-4">
                            <div className="space-y-3">
                                <p className="text-sm font-bold text-slate-800 uppercase tracking-wider">{t("solutions")}</p>
                                <div className="flex flex-col gap-3 pl-4 border-l-2 border-slate-100">
                                    {solutionLinks.map((link) => (
                                        <Link
                                            key={link.href}
                                            href={link.href}
                                            className="text-base font-medium text-zinc-600 hover:text-blue-600"
                                            onClick={() => setIsOpen(false)}
                                        >
                                            {link.label}
                                        </Link>
                                    ))}
                                </div>
                            </div>
                            <div className="space-y-3">
                                <p className="text-sm font-bold text-slate-800 uppercase tracking-wider">{t("industries")}</p>
                                <div className="flex flex-col gap-3 pl-4 border-l-2 border-slate-100 max-h-48 overflow-y-auto">
                                    {industryLinks.map((link) => (
                                        <Link
                                            key={link.href}
                                            href={link.href}
                                            className="text-base font-medium text-zinc-600 hover:text-blue-600"
                                            onClick={() => setIsOpen(false)}
                                        >
                                            {link.label}
                                        </Link>
                                    ))}
                                </div>
                            </div>
                            <div className="space-y-3">
                                <p className="text-sm font-bold text-slate-800 uppercase tracking-wider">{t("msp")}</p>
                                <div className="flex flex-col gap-3 pl-4 border-l-2 border-slate-100 max-h-48 overflow-y-auto">
                                    {mspLinks.map((link) => (
                                        <Link
                                            key={link.href}
                                            href={link.href}
                                            className="text-base font-medium text-zinc-600 hover:text-blue-600"
                                            onClick={() => setIsOpen(false)}
                                        >
                                            {link.label}
                                        </Link>
                                    ))}
                                </div>
                            </div>
                            {navLinks.map((link) => (
                                <Link
                                    key={link.href}
                                    href={link.href}
                                    className="text-base font-medium text-zinc-600 hover:text-blue-600"
                                    onClick={() => setIsOpen(false)}
                                >
                                    {link.label}
                                </Link>
                            ))}
                            <div className="pt-4 border-t border-zinc-100 flex justify-between items-center">
                                <span className="text-sm text-zinc-500">{t("language_label")}</span>
                                <LanguageSwitcher />
                            </div>
                        </nav>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
}
