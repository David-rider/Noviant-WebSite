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
        <>
            {/* ── TOP HEADER BAR ── */}
            <header
                className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-slate-200 shadow-sm"
                style={{ colorScheme: "light" }}
            >
                <div className="container mx-auto px-4 h-16 flex items-center justify-between">
                    <Logo />

                    {/* Desktop Nav — lg (1024px) and above */}
                    <nav className="hidden lg:flex items-center gap-2">
                        {/* Solutions dropdown */}
                        <div className="relative group">
                            <button className="px-4 py-2 text-sm font-bold tracking-tight text-slate-700 hover:text-blue-600 transition-colors flex items-center gap-1 focus:outline-none">
                                {t("solutions")} <ChevronDown className="w-4 h-4" />
                            </button>
                            <div className="absolute top-full left-0 mt-2 w-64 bg-white border border-slate-200 rounded-xl shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 flex flex-col py-2 overflow-hidden">
                                {solutionLinks.map((link) => (
                                    <Link key={link.href} href={link.href} className="px-4 py-2.5 text-sm font-medium text-slate-600 hover:text-blue-600 hover:bg-slate-50 transition-colors">
                                        {link.label}
                                    </Link>
                                ))}
                            </div>
                        </div>

                        {/* Industries dropdown */}
                        <div className="relative group">
                            <button className="px-4 py-2 text-sm font-bold tracking-tight text-slate-700 hover:text-blue-600 transition-colors flex items-center gap-1 focus:outline-none">
                                {t("industries")} <ChevronDown className="w-4 h-4" />
                            </button>
                            <div className="absolute top-full left-0 mt-2 w-64 bg-white border border-slate-200 rounded-xl shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 flex flex-col py-2 overflow-hidden max-h-[70vh] hover:overflow-y-auto">
                                {industryLinks.map((link) => (
                                    <Link key={link.href} href={link.href} className="px-4 py-2.5 text-sm font-medium text-slate-600 hover:text-blue-600 hover:bg-slate-50 transition-colors">
                                        {link.label}
                                    </Link>
                                ))}
                            </div>
                        </div>

                        {/* MSP dropdown */}
                        <div className="relative group">
                            <button className="px-4 py-2 text-sm font-bold tracking-tight text-slate-700 hover:text-blue-600 transition-colors flex items-center gap-1 focus:outline-none">
                                {t("msp")} <ChevronDown className="w-4 h-4" />
                            </button>
                            <div className="absolute top-full left-0 mt-2 w-64 bg-white border border-slate-200 rounded-xl shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 flex flex-col py-2 overflow-hidden max-h-[70vh] hover:overflow-y-auto">
                                {mspLinks.map((link) => (
                                    <Link key={link.href} href={link.href} className="px-4 py-2.5 text-sm font-medium text-slate-600 hover:text-blue-600 hover:bg-slate-50 transition-colors">
                                        {link.label}
                                    </Link>
                                ))}
                            </div>
                        </div>

                        {/* Direct links */}
                        {navLinks.map((link) => (
                            <Link key={link.href} href={link.href} className="px-4 py-2 text-sm font-bold tracking-tight text-slate-700 hover:text-blue-600 transition-colors">
                                {link.label}
                            </Link>
                        ))}

                        <div className="h-4 w-px bg-slate-200 mx-4" />
                        <LanguageSwitcher />
                    </nav>

                    {/* Mobile hamburger button */}
                    <button
                        className="lg:hidden p-2 rounded-lg text-slate-600 hover:text-blue-600 hover:bg-slate-100 transition-colors"
                        onClick={() => setIsOpen(true)}
                        aria-label="Open menu"
                    >
                        <Menu className="w-6 h-6" />
                    </button>
                </div>
            </header>

            {/* ── MOBILE SLIDE-IN DRAWER ── */}
            <AnimatePresence>
                {isOpen && (
                    <>
                        {/* Dark backdrop — click to close */}
                        <motion.div
                            key="backdrop"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.2 }}
                            className="fixed inset-0 z-[60] bg-black/50 backdrop-blur-sm lg:hidden"
                            onClick={() => setIsOpen(false)}
                        />

                        {/* Drawer panel — slides in from the right */}
                        <motion.div
                            key="drawer"
                            initial={{ x: "100%" }}
                            animate={{ x: 0 }}
                            exit={{ x: "100%" }}
                            transition={{ type: "spring", stiffness: 320, damping: 32 }}
                            className="fixed top-0 right-0 bottom-0 z-[70] w-[85vw] max-w-sm bg-white flex flex-col shadow-2xl lg:hidden"
                            style={{ colorScheme: "light" }}
                        >
                            {/* Drawer top bar */}
                            <div className="flex items-center justify-between px-5 h-16 border-b border-slate-100 shrink-0">
                                <Logo />
                                <button
                                    onClick={() => setIsOpen(false)}
                                    className="p-2 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors"
                                    aria-label="Close menu"
                                >
                                    <X className="w-5 h-5" />
                                </button>
                            </div>

                            {/* Scrollable nav list */}
                            <nav className="flex-1 overflow-y-auto px-4 py-5 space-y-1">
                                <MobileAccordion label={t("solutions")}>
                                    {solutionLinks.map((link) => (
                                        <Link key={link.href} href={link.href} onClick={() => setIsOpen(false)}
                                            className="block py-2.5 px-3 text-sm text-slate-600 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors">
                                            {link.label}
                                        </Link>
                                    ))}
                                </MobileAccordion>

                                <MobileAccordion label={t("industries")}>
                                    {industryLinks.map((link) => (
                                        <Link key={link.href} href={link.href} onClick={() => setIsOpen(false)}
                                            className="block py-2.5 px-3 text-sm text-slate-600 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors">
                                            {link.label}
                                        </Link>
                                    ))}
                                </MobileAccordion>

                                <MobileAccordion label={t("msp")}>
                                    {mspLinks.map((link) => (
                                        <Link key={link.href} href={link.href} onClick={() => setIsOpen(false)}
                                            className="block py-2.5 px-3 text-sm text-slate-600 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors">
                                            {link.label}
                                        </Link>
                                    ))}
                                </MobileAccordion>

                                {/* Direct links section */}
                                <div className="pt-2 border-t border-slate-100 mt-2">
                                    {navLinks.map((link) => (
                                        <Link key={link.href} href={link.href} onClick={() => setIsOpen(false)}
                                            className="block py-3 px-3 text-sm font-semibold text-slate-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors">
                                            {link.label}
                                        </Link>
                                    ))}
                                </div>
                            </nav>

                            {/* Drawer footer — language switcher pinned to bottom */}
                            <div className="shrink-0 px-5 py-4 border-t border-slate-100 bg-slate-50 flex items-center justify-between">
                                <span className="text-sm text-slate-500 font-medium">{t("language_label")}</span>
                                <LanguageSwitcher />
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </>
    );
}

/* ── Collapsible accordion section for mobile groups ── */
function MobileAccordion({ label, children }: { label: string; children: React.ReactNode }) {
    const [open, setOpen] = useState(false);

    return (
        <div>
            <button
                onClick={() => setOpen(!open)}
                className="w-full flex items-center justify-between px-3 py-3.5 text-sm font-bold text-slate-800 hover:bg-slate-50 rounded-xl transition-colors"
            >
                <span>{label}</span>
                <motion.span animate={{ rotate: open ? 180 : 0 }} transition={{ duration: 0.2 }}>
                    <ChevronDown className="w-4 h-4 text-slate-400" />
                </motion.span>
            </button>

            <AnimatePresence initial={false}>
                {open && (
                    <motion.div
                        key="content"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.22, ease: "easeInOut" }}
                        className="overflow-hidden"
                    >
                        <div className="pl-3 pb-2 space-y-0.5">
                            {children}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}
