import { MetadataRoute } from "next";

export const dynamic = "force-static";
import { newsArticlesMetadata } from "@/data/news_manifest";

const BASE_URL = "https://www.noviant.com";
const LOCALES = ["en", "zh-CN", "zh-TW"] as const;

const STATIC_ROUTES = [
    { path: "", priority: 1.0, changeFrequency: "weekly" as const },
    { path: "/ai-solutions", priority: 0.8, changeFrequency: "monthly" as const },
    { path: "/cloud-solutions", priority: 0.8, changeFrequency: "monthly" as const },
    { path: "/cyber-security", priority: 0.8, changeFrequency: "monthly" as const },
    { path: "/data-analytics", priority: 0.8, changeFrequency: "monthly" as const },
    { path: "/digital-infrastructure", priority: 0.8, changeFrequency: "monthly" as const },
    { path: "/consulting-implementation", priority: 0.8, changeFrequency: "monthly" as const },
    { path: "/industries/banking", priority: 0.7, changeFrequency: "monthly" as const },
    { path: "/industries/education", priority: 0.7, changeFrequency: "monthly" as const },
    { path: "/industries/fashion", priority: 0.7, changeFrequency: "monthly" as const },
    { path: "/industries/financial-services", priority: 0.7, changeFrequency: "monthly" as const },
    { path: "/industries/government", priority: 0.7, changeFrequency: "monthly" as const },
    { path: "/industries/health-services", priority: 0.7, changeFrequency: "monthly" as const },
    { path: "/industries/not-for-profit", priority: 0.7, changeFrequency: "monthly" as const },
    { path: "/industries/retail", priority: 0.7, changeFrequency: "monthly" as const },
    { path: "/industries/service-based-businesses", priority: 0.7, changeFrequency: "monthly" as const },
    { path: "/msp", priority: 0.8, changeFrequency: "monthly" as const },
    { path: "/msp/managed-it-services", priority: 0.7, changeFrequency: "monthly" as const },
    { path: "/msp/cybersecurity-compliance", priority: 0.7, changeFrequency: "monthly" as const },
    { path: "/msp/cloud-computing", priority: 0.7, changeFrequency: "monthly" as const },
    { path: "/msp/business-phone-system", priority: 0.7, changeFrequency: "monthly" as const },
    { path: "/msp/why-choose-us", priority: 0.7, changeFrequency: "monthly" as const },
    { path: "/msp/our-clients", priority: 0.7, changeFrequency: "monthly" as const },
    { path: "/msp/referral-program", priority: 0.6, changeFrequency: "monthly" as const },
    { path: "/msp/support-center", priority: 0.7, changeFrequency: "monthly" as const },
    { path: "/msp/is-this-you", priority: 0.6, changeFrequency: "monthly" as const },
    { path: "/contact", priority: 0.9, changeFrequency: "monthly" as const },
    { path: "/partner", priority: 0.7, changeFrequency: "monthly" as const },
    { path: "/news", priority: 0.8, changeFrequency: "weekly" as const },
    { path: "/terms", priority: 0.4, changeFrequency: "yearly" as const },
    { path: "/privacy", priority: 0.4, changeFrequency: "yearly" as const },
];

// Bump this only when site-wide content actually changes — keeps
// sitemap lastModified meaningful instead of resetting on every deploy.
const LAST_MODIFIED = new Date("2026-06-23");

export default function sitemap(): MetadataRoute.Sitemap {
    const lastModified = LAST_MODIFIED;
    const entries: MetadataRoute.Sitemap = [];

    for (const { path, priority, changeFrequency } of STATIC_ROUTES) {
        for (const locale of LOCALES) {
            entries.push({
                url: `${BASE_URL}/${locale}${path}/`,
                lastModified,
                changeFrequency,
                priority,
                alternates: {
                    languages: {
                        ...Object.fromEntries(
                            LOCALES.map((l) => [l, `${BASE_URL}/${l}${path}/`])
                        ),
                        'x-default': `${BASE_URL}/en${path}/`,
                    },
                },
            });
        }
    }

    for (const article of newsArticlesMetadata) {
        for (const locale of LOCALES) {
            entries.push({
                url: `${BASE_URL}/${locale}/news/${article.id}/`,
                lastModified,
                changeFrequency: "yearly",
                priority: 0.5,
                alternates: {
                    languages: {
                        ...Object.fromEntries(
                            LOCALES.map((l) => [l, `${BASE_URL}/${l}/news/${article.id}/`])
                        ),
                        'x-default': `${BASE_URL}/en/news/${article.id}/`,
                    },
                },
            });
        }
    }

    return entries;
}
