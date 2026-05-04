/**
 * news_manifest.ts — Noviant News Articles Metadata
 * ===============================================
 * Contains only non-localized structural metadata for news articles.
 * Localized content is stored in messages/*.json under the 'NewsData' namespace.
 */

export interface NewsArticleMetadata {
    id: string;
    category: "ai" | "security" | "cloud" | "company" | "industry";
    image: string;
    videoUrl?: string;
}

export const newsArticlesMetadata: NewsArticleMetadata[] = [
    {
        id: "welcome-to-noviant-news",
        category: "company",
        image: "/images/unsplash/photo-1551434678-e076c223a692.jpg",
    },
    {
        id: "phunware-partners-with-noviant",
        category: "industry",
        image: "/images/news/phunware-partners.jpg",
    },
    {
        id: "covid-19-resources",
        category: "company",
        image: "/images/news/covid-resources.jpg",
    },
    {
        id: "notice-to-clients-in-response-to-covid-19",
        category: "company",
        image: "/images/news/notice-clients.jpg",
    },
    {
        id: "benefits-of-windows-virtual-desktop",
        category: "cloud",
        image: "/images/news/windows-virtual-desktop.jpg",
    },
    {
        id: "noviant-certified-for-the-iso-iec-270012013",
        category: "company",
        image: "/images/unsplash/photo-1450101499163-c8848c66ca85.jpg",
    },
    {
        id: "noviant-appears-in-nyc-comptrollers-video",
        category: "company",
        image: "/images/news/nyc-video.jpg",
        videoUrl: "https://www.youtube.com/watch?v=Pnjhu8lz2oQ",
    },
    {
        id: "the-era-of-the-pc-isnt-as-over-as-you-might-think",
        category: "industry",
        image: "/images/news/pc-era.png",
    },
    {
        id: "windows-8-1-unlikely-to-solve-the-os-problems",
        category: "industry",
        image: "/images/news/windows-8.png",
    },
    {
        id: "avoiding-the-e-mail-crush-following-a-vacation",
        category: "industry",
        image: "/images/news/email-vacation.png",
    },
    {
        id: "why-office-mobile-isnt-a-good-investment",
        category: "industry",
        image: "/images/news/office-mobile.png",
    },
    {
        id: "theres-another-alternative-for-those-mourning-google-reader",
        category: "industry",
        image: "/images/news/google-reader.png",
    },
    {
        id: "why-tech-less-meetings-should-be-your-goal",
        category: "industry",
        image: "/images/news/techless-meetings.png",
    },
];

export function getArticleMetadataById(id: string): NewsArticleMetadata | undefined {
    return newsArticlesMetadata.find((a) => a.id === id);
}

export function getAllArticleIds(): string[] {
    return newsArticlesMetadata.map((a) => a.id);
}
