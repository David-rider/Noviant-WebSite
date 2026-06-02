import MSPPage from "./MSPView";
import { setRequestLocale } from "next-intl/server";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
    const { locale } = await params;
    return {
        title: locale.startsWith('zh')
            ? (locale === 'zh-TW'
                ? '紐約最佳MSP與IT託管服務 | 企業IT支持 - Noviant'
                : '纽约最佳MSP与IT托管服务 | 企业IT支持 - Noviant')
            : 'Top MSP & IT Managed Services in New York | Enterprise IT Support - Noviant',
        description: locale.startsWith('zh')
            ? (locale === 'zh-TW'
                ? '我們是紐約(New York)領先的MSP(IT託管服務提供商)。為企業提供24/7全天候監控、網路安全、雲端運算與數據備份等一站式IT解決方案。'
                : '我们是纽约(New York)领先的MSP(IT托管服务提供商)。为企业提供24/7全天候监控、网络安全、云计算与数据备份等一站式IT解决方案。')
            : 'Leading MSP (Managed Service Provider) in New York. We provide 24/7 monitoring, cybersecurity, cloud computing, and data backup IT solutions for enterprises.',
    };
}

export default async function Page({ params }: { params: Promise<{ locale: string }> }) {
    const { locale } = await params;
    setRequestLocale(locale);
    return (
        <>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "FAQPage",
                "mainEntity": [
                    { "@type": "Question", "name": "What is a Managed Service Provider (MSP)?", "acceptedAnswer": { "@type": "Answer", "text": "A Managed Service Provider (MSP) is a company that remotely manages a customer's IT infrastructure and end-user systems. Noviant provides proactive 24/7 monitoring, helpdesk support, cybersecurity, cloud management, and more for New York businesses." } },
                    { "@type": "Question", "name": "How much does managed IT services cost in New York?", "acceptedAnswer": { "@type": "Answer", "text": "Managed IT services pricing in New York typically ranges from $100 to $250 per user per month depending on the scope of services. Noviant offers customized plans tailored to your business size and needs." } },
                    { "@type": "Question", "name": "What industries does Noviant serve in New York?", "acceptedAnswer": { "@type": "Answer", "text": "Noviant provides managed IT services across multiple industries in New York including banking, financial services, healthcare, education, government, retail, fashion, and nonprofit organizations." } },
                    { "@type": "Question", "name": "Does Noviant provide 24/7 IT support?", "acceptedAnswer": { "@type": "Answer", "text": "Yes, Noviant provides 24/7 IT helpdesk and monitoring services. Our team is available around the clock to respond to IT incidents and ensure your business systems remain operational." } }
                ]
            }) }} />
            <MSPPage />
        </>
    );
}
