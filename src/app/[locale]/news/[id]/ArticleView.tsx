"use client";

import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";
import { motion } from "framer-motion";
import { ArrowLeft, Calendar, Tag, Play } from "lucide-react";
import type { NewsArticle } from "@/data/news";

const categoryColors: Record<string, { bg: string; text: string; dot: string }> = {
    ai:       { bg: "bg-purple-100", text: "text-purple-700", dot: "bg-purple-500" },
    security: { bg: "bg-red-100",    text: "text-red-700",    dot: "bg-red-500"    },
    cloud:    { bg: "bg-blue-100",   text: "text-blue-700",   dot: "bg-blue-500"   },
    company:  { bg: "bg-green-100",  text: "text-green-700",  dot: "bg-green-500"  },
    industry: { bg: "bg-amber-100",  text: "text-amber-700",  dot: "bg-amber-500"  },
};

export default function ArticleView({
    article,
    locale,
}: {
    article: NewsArticle;
    locale: string;
}) {
    const t = useTranslations("News_Page");
    const tNav = useTranslations("Navigation");
    const lang = locale as "en" | "zh";
    const colors = categoryColors[article.category] ?? {
        bg: "bg-slate-100", text: "text-slate-700", dot: "bg-slate-400"
    };

    // Split body into paragraphs on double newline
    const paragraphs = (article.body[lang] ?? article.body.en)
        .split("\n\n")
        .map((p) => p.trim())
        .filter(Boolean);

    return (
        <div className="min-h-screen bg-[#f8fafc]">
            {/* Hero image */}
            <div className="relative h-72 md:h-96 w-full overflow-hidden bg-slate-900">
                <img
                    src={article.image}
                    alt={article.title[lang]}
                    className="w-full h-full object-cover opacity-60"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/30 to-transparent" />

                {/* Back link */}
                <div className="absolute top-24 left-0 right-0 container mx-auto px-4">
                    <Link
                        href="/news"
                        className="inline-flex items-center gap-2 text-sm text-white/80 hover:text-white transition-colors"
                    >
                        <ArrowLeft className="w-4 h-4" />
                        {tNav("news")}
                    </Link>
                </div>

                {/* Title block */}
                <div className="absolute bottom-0 left-0 right-0 container mx-auto px-4 pb-10">
                    <div className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold mb-4 ${colors.bg} ${colors.text}`}>
                        <span className={`w-1.5 h-1.5 rounded-full ${colors.dot}`} />
                        {t(`categories.${article.category}`)}
                    </div>
                    <h1 className="text-2xl md:text-4xl font-bold text-white leading-tight max-w-3xl">
                        {article.title[lang] ?? article.title.en}
                    </h1>
                    <div className="flex items-center gap-2 mt-4 text-sm text-white/60">
                        <Calendar className="w-4 h-4" />
                        {article.date[lang] ?? article.date.en}
                    </div>
                </div>
            </div>

            {/* Article body */}
            <div className="container mx-auto px-4 py-16">
                <div className="max-w-3xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="bg-white rounded-3xl shadow-sm border border-slate-200 p-8 md:p-12"
                    >
                        {/* Excerpt lead */}
                        <p className="text-lg md:text-xl text-slate-600 font-medium leading-relaxed border-l-4 border-blue-500 pl-6 mb-10">
                            {article.excerpt[lang] ?? article.excerpt.en}
                        </p>

                        {/* Body paragraphs */}
                        <div className="prose prose-slate max-w-none space-y-5">
                            {paragraphs.map((para, idx) => {
                                // Detect bullet lines starting with •
                                if (para.startsWith("•")) {
                                    const bullets = para.split("\n").filter(Boolean);
                                    return (
                                        <ul key={idx} className="list-none space-y-2 pl-2">
                                            {bullets.map((b, bi) => (
                                                <li key={bi} className="flex items-start gap-3 text-slate-700">
                                                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-blue-500 shrink-0" />
                                                    <span>{b.replace(/^•\s*/, "")}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    );
                                }
                                return (
                                    <p key={idx} className="text-slate-700 leading-relaxed">
                                        {para}
                                    </p>
                                );
                            })}
                        </div>

                        {/* Video Link */}
                        {article.videoUrl && (
                            <div className="mt-12 pt-10 border-t border-slate-100">
                                <a
                                    href={article.videoUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="group flex items-center justify-between p-6 rounded-2xl bg-slate-50 border border-slate-200 hover:border-blue-500/50 hover:bg-blue-50/30 transition-all shadow-sm"
                                >
                                    <div className="flex items-center gap-4">
                                        <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-red-100 text-red-600 group-hover:scale-110 transition-transform">
                                            <Play className="w-6 h-6 fill-current" />
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-slate-900 leading-tight">
                                                {t("watch_video")}
                                            </h4>
                                            <p className="text-sm text-slate-500 mt-1">
                                                youtube.com
                                            </p>
                                        </div>
                                    </div>
                                    <div className="text-blue-600 font-medium text-sm flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                                        Open Link
                                    </div>
                                </a>
                            </div>
                        )}
                    </motion.div>

                    {/* Back to News */}
                    <div className="mt-10 text-center">
                        <Link
                            href="/news"
                            className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white font-semibold rounded-xl hover:bg-blue-700 transition-colors shadow-md"
                        >
                            <ArrowLeft className="w-4 h-4" />
                            {tNav("news")}
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
