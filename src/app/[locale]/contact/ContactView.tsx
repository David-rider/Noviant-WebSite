"use client";

import PageHero from "@/components/PageHero";
import { useTranslations, useLocale } from "next-intl";
import { MapPin, Phone, Send, Target, Users } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";

export default function ContactPage() {
    const t = useTranslations("Contact_Page");
    const footerT = useTranslations("Footer");
    const locale = useLocale();

    const mapLanguage = locale === "zh" ? "zh-CN" : "en";

    // Form state
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSent, setIsSent] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        const form = e.target as HTMLFormElement;
        const formData = new FormData(form);
        const data = Object.fromEntries(formData.entries());

        const industryLabel = t(`form.industries.${data.industry}`);
        const solutionLabel = t(`form.solutions.${data.solution}`);

        // Construct email body
        const subject = encodeURIComponent(
            t("form.email_subject", {
                name: String(data.name),
                company: String(data.company || 'N/A')
            })
        );
        const body = encodeURIComponent(
            t("form.email_body", {
                name: String(data.name),
                email: String(data.email),
                company: String(data.company || 'N/A'),
                phone: String(data.phone || 'N/A'),
                industry: industryLabel,
                solution: solutionLabel,
                message: String(data.message || t("form.no_message"))
            })
        );

        // Open local mail client
        window.location.href = `mailto:am@noviant.com?subject=${subject}&body=${body}`;

        // Give some visual feedback
        setTimeout(() => {
            setIsSent(true);
            setIsSubmitting(false);
        }, 500);
    };

    const industries = [
        "banking", "education", "fashion", "financial", "government",
        "health", "nonprofit", "retail", "service", "other"
    ];

    const solutions = [
        "business_continuity", "cabling", "cloud", "security", "analytics",
        "infrastructure", "msp", "professional", "staffing", "vciso",
        "virtualization", "voip", "other"
    ];

    return (
        <div className="min-h-screen bg-white dark:bg-black relative overflow-hidden">
            <div className="absolute inset-0 cyber-grid opacity-20 pointer-events-none" />
            <PageHero
                title={t("title")}
                subtitle={t("subtitle")}
                bgGradient="from-blue-900/40 via-black to-blue-900/40"
            />

            <div className="container mx-auto px-4 py-24 relative z-10 space-y-24">

                {/* Our Mission Section */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20 items-center"
                >
                    <div className="space-y-6">
                        <h2 className="text-3xl lg:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-cyan-500 dark:from-blue-400 dark:to-cyan-300">
                            {t("mission.title")}
                        </h2>

                        <div className="flex gap-4 p-6 rounded-2xl bg-zinc-50 dark:bg-zinc-900/50 border border-zinc-200 dark:border-zinc-800 cyber-corner group hover:border-blue-500/30 transition-colors">
                            <div className="shrink-0 p-3 bg-blue-100 dark:bg-blue-900/30 rounded-xl text-blue-600 dark:text-blue-400 h-fit group-hover:scale-110 transition-transform">
                                <Target className="w-6 h-6" />
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-zinc-900 dark:text-white mb-2">{t("mission.who_we_are")}</h3>
                                <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">
                                    {t("mission.who_desc")}
                                </p>
                            </div>
                        </div>

                        <div className="flex gap-4 p-6 rounded-2xl bg-zinc-50 dark:bg-zinc-900/50 border border-zinc-200 dark:border-zinc-800 cyber-corner group hover:border-blue-500/30 transition-colors">
                            <div className="shrink-0 p-3 bg-blue-100 dark:bg-blue-900/30 rounded-xl text-blue-600 dark:text-blue-400 h-fit group-hover:scale-110 transition-transform">
                                <Users className="w-6 h-6" />
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-zinc-900 dark:text-white mb-2">{t("mission.partner")}</h3>
                                <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">
                                    {t("mission.partner_desc")}
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Decorative Visual */}
                    <div className="relative aspect-square md:aspect-[4/3] rounded-3xl overflow-hidden cyber-corner border border-white/10 shadow-2xl">
                        <img
                            src="/images/unsplash/photo-1517245386807-bb43f82c33c4.jpg"
                            alt="Our Mission"
                            className="absolute inset-0 w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-blue-900/20 mix-blend-overlay"></div>
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                    </div>
                </motion.div>

                {/* Contact Form Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                    {/* Contact Info */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className="space-y-12 cyber-corner p-10 bg-white/5 backdrop-blur-sm border border-white/10"
                    >
                        <div>
                            <h2 className="text-3xl font-bold mb-6 text-zinc-900 dark:text-white">
                                {t("info.title")}
                            </h2>
                            <p className="text-zinc-600 dark:text-zinc-400 text-lg leading-relaxed mb-8">
                                {t("subtitle")}
                            </p>
                        </div>

                        <div className="grid gap-8">
                            {/* Main Office */}
                            <div className="flex items-start gap-4">
                                <div className="p-3 bg-blue-100 dark:bg-blue-900/30 rounded-full text-blue-600 dark:text-blue-400 shrink-0 neon-glow-blue">
                                    <MapPin className="w-6 h-6" />
                                </div>
                                <div>
                                    <h3 className="font-semibold text-zinc-900 dark:text-white mb-1">
                                        {t("info.address_label")}
                                    </h3>
                                    <a
                                        href="https://www.google.com/maps/search/?api=1&query=1250+Broadway+New+York+NY+10001"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-zinc-600 dark:text-zinc-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                                    >
                                        {footerT("address")}
                                    </a>
                                </div>
                            </div>

                            {/* Main Phone / Fax */}
                            <div className="flex items-start gap-4">
                                <div className="p-3 bg-blue-100 dark:bg-blue-900/30 rounded-full text-blue-600 dark:text-blue-400 shrink-0 neon-glow-blue">
                                    <Phone className="w-6 h-6" />
                                </div>
                                <div>
                                    <h3 className="font-semibold text-zinc-900 dark:text-white mb-1">
                                        {t("info.phone_label")}
                                    </h3>
                                    <div className="space-y-1 text-zinc-600 dark:text-zinc-400">
                                        <p>{t("info.call_label")}: <a href={`tel:${footerT("phone")}`} className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">{footerT("phone")}</a></p>
                                        <p>{t("info.fax_label")}: {t("info.fax_number")}</p>
                                    </div>
                                </div>
                            </div>

                            <hr className="border-zinc-200 dark:border-zinc-800" />

                            {/* Specific Contacts */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                <div>
                                    <h4 className="font-bold text-zinc-900 dark:text-white mb-2">{t("info.sales")}</h4>
                                    <a href="tel:+12128096625,8302" className="text-zinc-600 dark:text-zinc-400 mb-1 hover:text-blue-600 dark:hover:text-blue-400 transition-colors block">(212) 809-6625 x8302</a>
                                    <a href={`mailto:${t("info.sales_email")}`} className="text-blue-600 hover:text-blue-500 transition-colors">
                                        {t("info.sales_email")}
                                    </a>
                                </div>
                                <div>
                                    <h4 className="font-bold text-zinc-900 dark:text-white mb-2">{t("info.support")}</h4>
                                    <a href="tel:+12128096625,8301" className="text-zinc-600 dark:text-zinc-400 mb-1 hover:text-blue-600 dark:hover:text-blue-400 transition-colors block">(212) 809-6625 x8301</a>
                                    <a href={`mailto:${t("info.support_email")}`} className="text-blue-600 hover:text-blue-500 transition-colors">
                                        {t("info.support_email")}
                                    </a>
                                </div>
                            </div>

                            {/* Map Display */}
                            <div className="mt-8 rounded-3xl overflow-hidden border border-zinc-200 dark:border-zinc-800 shadow-xl group hover:border-blue-500/30 transition-all duration-500">
                                <iframe
                                    src={`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.6173!2d-73.9897!3d40.7484!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259a9aeb1c0ef%3A0x24757c38561db4e8!2s1250%20Broadway%2C%20New%20York%2C%20NY%2010001!5e0!3m2!1s${mapLanguage}!2sen!4v1713300000000!5m2!1s${mapLanguage}!2sen&hl=${mapLanguage}`}
                                    width="100%"
                                    height="300"
                                    style={{ border: 0 }}
                                    allowFullScreen
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                    className="filter grayscale-[20%] group-hover:grayscale-0 transition-all duration-700"
                                />
                                <div className="p-4 bg-zinc-50 dark:bg-zinc-900/80 border-t border-zinc-200 dark:border-zinc-800 flex justify-between items-center">
                                    <span className="text-xs text-zinc-500 dark:text-zinc-400 font-medium">1250 Broadway, New York, NY</span>
                                    <a
                                        href="https://www.google.com/maps/search/?api=1&query=1250+Broadway+New+York+NY+10001"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-xs font-bold text-blue-600 dark:text-blue-400 hover:underline"
                                    >
                                        Open in Maps
                                    </a>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className="bg-zinc-50 dark:bg-zinc-900/50 p-8 md:p-10 rounded-3xl border border-zinc-200 dark:border-zinc-800 cyber-corner hover:neon-glow-blue transition-all"
                    >
                        <h3 className="text-2xl font-bold mb-6 text-zinc-900 dark:text-white">
                            {t("form.submit")}
                        </h3>
                        {isSent ? (
                            <div className="h-full flex flex-col items-center justify-center text-center py-12">
                                <div className="w-16 h-16 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center text-green-600 mb-6">
                                    <Send className="w-8 h-8" />
                                </div>
                                <h3 className="text-2xl font-bold text-zinc-900 dark:text-white mb-2">
                                    {t("form.success")}
                                </h3>
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit} className="space-y-4">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div className="space-y-2">
                                        <label htmlFor="name" className="text-sm font-medium text-zinc-700 dark:text-zinc-300">
                                            {t("form.name")} *
                                        </label>
                                        <input
                                            id="name"
                                            name="name"
                                            required
                                            type="text"
                                            className="w-full px-4 py-3 rounded-xl bg-white dark:bg-black border border-zinc-200 dark:border-zinc-800 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all text-zinc-900 dark:text-white"
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <label htmlFor="company" className="text-sm font-medium text-zinc-700 dark:text-zinc-300">
                                            {t("form.company")}
                                        </label>
                                        <input
                                            id="company"
                                            name="company"
                                            type="text"
                                            className="w-full px-4 py-3 rounded-xl bg-white dark:bg-black border border-zinc-200 dark:border-zinc-800 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all text-zinc-900 dark:text-white"
                                        />
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div className="space-y-2">
                                        <label htmlFor="email" className="text-sm font-medium text-zinc-700 dark:text-zinc-300">
                                            {t("form.email")} *
                                        </label>
                                        <input
                                            id="email"
                                            name="email"
                                            required
                                            type="email"
                                            className="w-full px-4 py-3 rounded-xl bg-white dark:bg-black border border-zinc-200 dark:border-zinc-800 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all text-zinc-900 dark:text-white"
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <label htmlFor="phone" className="text-sm font-medium text-zinc-700 dark:text-zinc-300">
                                            {t("form.phone")}
                                        </label>
                                        <input
                                            id="phone"
                                            name="phone"
                                            type="tel"
                                            className="w-full px-4 py-3 rounded-xl bg-white dark:bg-black border border-zinc-200 dark:border-zinc-800 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all text-zinc-900 dark:text-white"
                                        />
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div className="space-y-2">
                                        <label htmlFor="industry" className="text-sm font-medium text-zinc-700 dark:text-zinc-300">
                                            {t("form.industry")} *
                                        </label>
                                        <select
                                            id="industry"
                                            name="industry"
                                            required
                                            className="w-full px-4 py-3 rounded-xl bg-white dark:bg-black border border-zinc-200 dark:border-zinc-800 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all text-zinc-900 dark:text-white appearance-none"
                                        >
                                            <option value="">{t("form.select_placeholder")}</option>
                                            {industries.map(ind => (
                                                <option key={ind} value={ind}>{t(`form.industries.${ind}`)}</option>
                                            ))}
                                        </select>
                                    </div>
                                    <div className="space-y-2">
                                        <label htmlFor="solution" className="text-sm font-medium text-zinc-700 dark:text-zinc-300">
                                            {t("form.solution")} *
                                        </label>
                                        <select
                                            id="solution"
                                            name="solution"
                                            required
                                            className="w-full px-4 py-3 rounded-xl bg-white dark:bg-black border border-zinc-200 dark:border-zinc-800 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all text-zinc-900 dark:text-white appearance-none"
                                        >
                                            <option value="">{t("form.select_placeholder")}</option>
                                            {solutions.map(sol => (
                                                <option key={sol} value={sol}>{t(`form.solutions.${sol}`)}</option>
                                            ))}
                                        </select>
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <label htmlFor="message" className="text-sm font-medium text-zinc-700 dark:text-zinc-300">
                                        {t("form.message")}
                                    </label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        rows={4}
                                        className="w-full px-4 py-3 rounded-xl bg-white dark:bg-black border border-zinc-200 dark:border-zinc-800 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all text-zinc-900 dark:text-white resize-none"
                                    />
                                </div>

                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="w-full py-4 bg-blue-600 hover:bg-blue-500 text-white font-semibold rounded-xl transition-colors disabled:opacity-50 flex items-center justify-center gap-2"
                                >
                                    {isSubmitting ? t("form.sending") : t("form.submit")}
                                    {!isSubmitting && <Send className="w-4 h-4" />}
                                </button>
                            </form>
                        )}
                    </motion.div>
                </div>
            </div>
        </div>
    );
}
