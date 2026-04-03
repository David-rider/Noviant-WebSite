import { NextIntlClientProvider } from 'next-intl';
import { getMessages, setRequestLocale } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { routing } from '@/i18n/routing';
import { Geist, Geist_Mono } from "next/font/google";
import "../globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

import { ThemeProvider } from "@/components/ThemeProvider";

export function generateStaticParams() {
    return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
    params
}: {
    params: Promise<{ locale: string }>;
}) {
    const { locale } = await params;
    return {
        title: locale === 'zh' 
            ? 'Noviant | 纽约企业ICT与MSP托管服务 | AI与数字孪生解决方案'
            : 'Noviant | Enterprise ICT & MSP Solutions in New York | AI & Digital Twin',
        description: locale === 'zh'
            ? '位于纽约(New York)的顶级IT托管服务(MSP)和企业ICT咨询公司。我们在帮助企业进行数字化转型、集成AI人工智能和搭建房地产及MSP数字孪生环境方面处于领先地位。'
            : 'Top-tier IT Managed Service Provider (MSP) and enterprise ICT consulting located in New York. We lead in enterprise digital transformation, AI integration, and Digital Twin deployment.',
        alternates: {
            languages: {
                en: '/en',
                zh: '/zh',
            },
        },
    };
}

export default async function LocaleLayout({
    children,
    params
}: {
    children: React.ReactNode;
    params: Promise<{ locale: string }>;
}) {
    // Ensure that the incoming `locale` is valid
    const { locale } = await params;
    if (!routing.locales.includes(locale as (typeof routing.locales)[number])) {
        notFound();
    }

    setRequestLocale(locale);

    // Providing all messages to the client
    // side is the easiest way to get started
    const messages = await getMessages({ locale });

    const jsonLd = {
        '@context': 'https://schema.org',
        '@type': 'LocalBusiness',
        name: 'Noviant',
        url: 'https://www.noviant.com',
        telephone: '+1-212-809-6625',
        address: {
            '@type': 'PostalAddress',
            streetAddress: '1250 Broadway, 36th Floor',
            addressLocality: 'New York',
            addressRegion: 'NY',
            postalCode: '10001',
            addressCountry: 'US'
        },
        geo: {
            '@type': 'GeoCoordinates',
            latitude: 40.7484, // Approximate latitude for 1250 Broadway
            longitude: -73.9882 // Approximate longitude for 1250 Broadway
        }
    };

    return (
        <html lang={locale} suppressHydrationWarning>
            <head>
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
                />
            </head>
            <body className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[#f8fafc] text-slate-900`}>
                <ThemeProvider
                    attribute="class"
                    defaultTheme="light"
                    enableSystem={false}
                    forcedTheme="light"
                >
                    <div className="cyber-scanline" />
                    <NextIntlClientProvider messages={messages}>
                        <Navbar />
                        <main className="min-h-screen pt-16 relative z-10">
                            {children}
                        </main>
                        <Footer />
                    </NextIntlClientProvider>
                </ThemeProvider>
            </body>
        </html>
    );
}
