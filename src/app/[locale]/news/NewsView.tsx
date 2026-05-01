"use client";

import { useTranslations } from "next-intl";
import PageHero from "@/components/PageHero";
import { Link } from "@/i18n/routing";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Calendar, Tag, ChevronLeft, ChevronRight } from "lucide-react";
import { useState, useEffect } from "react";
import { newsArticles } from "@/data/news";


// Category badge color map
const categoryColors: Record<string, { bg: string; text: string; dot: string }> = {
    ai:       { bg: "bg-purple-50",  text: "text-purple-700",  dot: "bg-purple-500"  },
    security: { bg: "bg-red-50",     text: "text-red-700",     dot: "bg-red-500"     },
    cloud:    { bg: "bg-blue-50",    text: "text-blue-700",    dot: "bg-blue-500"    },
    company:  { bg: "bg-green-50",   text: "text-green-700",   dot: "bg-green-500"   },
    industry: { bg: "bg-amber-50",   text: "text-amber-700",   dot: "bg-amber-500"   },
};

const fallbackImage = "/images/unsplash/photo-1551434678-e076c223a692.jpg";

export default function NewsView({ locale }: { locale: string }) {
    const t = useTranslations("News_Page");
    const tNav = useTranslations("Navigation");
    const [currentPage, setCurrentPage] = useState(1);
    const lang = locale as "en" | "zh-CN" | "zh-TW";

    const ITEMS_PER_PAGE = 6;
    const totalPages = Math.ceil(newsArticles.length / ITEMS_PER_PAGE);
    
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    const paginatedArticles = newsArticles.slice(startIndex, startIndex + ITEMS_PER_PAGE);

    // Scroll to top when page changes
    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }, [currentPage]);

    return (
        <div className="min-h-screen bg-[#f8fafc]">
            <PageHero title={t("title")} subtitle={t("subtitle")} />

            <div className="container mx-auto px-4 py-20">
                {/* News Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <AnimatePresence mode="wait">
                        {paginatedArticles.map((article, index) => {
                        const colors = categoryColors[article.category] ?? {
                            bg: "bg-slate-50", text: "text-slate-700", dot: "bg-slate-400",
                        };
                        const imgSrc = article.image || fallbackImage;
                        const title   = article.title[lang]   ?? article.title.en;
                        const excerpt = article.excerpt[lang]  ?? article.excerpt.en;
                        const date    = article.date[lang]     ?? article.date.en;

                        return (
                            <motion.article
                                key={article.id}
                                initial={{ opacity: 0, y: 24 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.4, delay: index * 0.07 }}
                                className="group bg-white rounded-2xl overflow-hidden border border-slate-200 hover:border-blue-300 hover:shadow-xl hover:shadow-blue-500/5 transition-all duration-300 flex flex-col"
                            >
                                {/* Card Image */}
                                <div className="relative h-48 overflow-hidden bg-slate-100">
                                    <img
                                        src={imgSrc}
                                        alt={title}
                                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                                        onError={(e) => {
                                            (e.target as HTMLImageElement).src = fallbackImage;
                                        }}
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />

                                    {/* Category badge */}
                                    <div className={`absolute top-3 left-3 flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold ${colors.bg} ${colors.text}`}>
                                        <span className={`w-1.5 h-1.5 rounded-full ${colors.dot}`} />
                                        {t(`categories.${article.category}`)}
                                    </div>
                                </div>

                                {/* Card Body */}
                                <div className="flex flex-col flex-1 p-6">
                                    <div className="flex items-center gap-1.5 text-xs text-slate-400 mb-3">
                                        <Calendar className="w-3.5 h-3.5" />
                                        {date}
                                    </div>
                                    <h2 className="text-lg font-bold text-slate-900 mb-3 leading-snug group-hover:text-blue-600 transition-colors line-clamp-3">
                                        {title}
                                    </h2>
                                    <p className="text-sm text-slate-500 leading-relaxed flex-1 line-clamp-3">
                                        {excerpt}
                                    </p>

                                    {/* Read More — real link to article page */}
                                    <div className="mt-6 pt-4 border-t border-slate-100">
                                        <Link
                                            href={`/news/${article.id}`}
                                            className="inline-flex items-center gap-1.5 text-sm font-semibold text-blue-600 group-hover:gap-3 transition-all"
                                        >
                                            {t("read_more")}
                                            <ArrowRight className="w-4 h-4" />
                                        </Link>
                                    </div>
                                </div>
                            </motion.article>
                        );
                    })}
                    </AnimatePresence>
                </div>

                {/* Pagination Controls */}
                {totalPages > 1 && (
                    <div className="flex justify-center items-center gap-2 mt-16">
                        <button
                            onClick={() => setCurrentPage(prev => Math.max(1, prev - 1))}
                            disabled={currentPage === 1}
                            className="p-2 rounded-lg border border-slate-200 bg-white text-slate-600 disabled:opacity-30 disabled:cursor-not-allowed hover:bg-slate-50 transition-colors"
                        >
                            <ChevronLeft className="w-5 h-5" />
                        </button>

                        <div className="flex gap-2">
                            {Array.from({ length: totalPages }, (_, i) => i + 1).map((pageNum) => (
                                <button
                                    key={pageNum}
                                    onClick={() => setCurrentPage(pageNum)}
                                    className={`w-10 h-10 rounded-lg border text-sm font-semibold transition-all ${
                                        currentPage === pageNum
                                            ? "bg-blue-600 text-white border-blue-600 shadow-md shadow-blue-200"
                                            : "bg-white text-slate-600 border-slate-200 hover:border-blue-400 hover:text-blue-600"
                                    }`}
                                >
                                    {pageNum}
                                </button>
                            ))}
                        </div>

                        <button
                            onClick={() => setCurrentPage(prev => Math.min(totalPages, prev + 1))}
                            disabled={currentPage === totalPages}
                            className="p-2 rounded-lg border border-slate-200 bg-white text-slate-600 disabled:opacity-30 disabled:cursor-not-allowed hover:bg-slate-50 transition-colors"
                        >
                            <ChevronRight className="w-5 h-5" />
                        </button>
                    </div>
                )}

                {newsArticles.length === 0 && (
                    <div className="text-center py-24 text-slate-400">
                        <Tag className="w-12 h-12 mx-auto mb-4 opacity-30" />
                        <p className="text-lg">{t("no_articles")}</p>
                    </div>
                )}

                {/* CTA Banner */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="mt-20 rounded-3xl bg-gradient-to-br from-blue-600 to-blue-800 p-10 md:p-16 text-white text-center"
                >
                    <h3 className="text-2xl md:text-3xl font-bold mb-4">
                        {t("cta_title")}
                    </h3>
                    <p className="text-blue-100 mb-8 max-w-xl mx-auto">
                        {t("cta_subtitle")}
                    </p>
                    <Link
                        href="/contact"
                        className="inline-flex items-center gap-2 px-8 py-4 bg-white text-blue-700 font-bold rounded-xl hover:bg-blue-50 transition-colors shadow-lg"
                    >
                        {tNav("contact")} <ArrowRight className="w-5 h-5" />
                    </Link>
                </motion.div>
            </div>
        </div>
    );
}
