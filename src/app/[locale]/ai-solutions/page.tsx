import AISolutionsPage from "./AISolutionsView";
import { setRequestLocale } from "next-intl/server";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
    const { locale } = await params;
    return {
        title: locale.startsWith('zh')
            ? (locale === 'zh-TW'
                ? '紐約企業AI解決方案 | LiquidEdge液冷集裝箱數據中心 | GPU集群 - Noviant'
                : '纽约企业AI解决方案 | LiquidEdge液冷集装箱数据中心 | GPU集群 - Noviant')
            : 'Enterprise AI Solutions New York | LiquidEdge AI POD | GPU Cluster - Noviant',
        description: locale.startsWith('zh')
            ? (locale === 'zh-TW'
                ? '為紐約企業提供AI基礎設施解決方案，包含LiquidEdge液冷一體化智算集裝箱(LE-44/LE-88/LE-200)、GPU伺服器集群、生成式AI與數位孿生系統。8週交付，PUE≤1.15。'
                : '为纽约企业提供AI基础设施解决方案，包含LiquidEdge液冷一体化智算集装箱(LE-44/LE-88/LE-200)、GPU服务器集群、生成式AI与数字孪生系统。8周交付，PUE≤1.15。')
            : 'Enterprise AI infrastructure solutions in New York — including LiquidEdge AI POD liquid-cooled datacenter containers (LE-44/88/200), GPU server clusters, generative AI, and Digital Twin systems. 8-week deployment, PUE ≤ 1.15.',
        openGraph: {
            title: locale.startsWith('zh')
                ? (locale === 'zh-TW'
                    ? '紐約企業AI解決方案 | LiquidEdge液冷集裝箱數據中心 - Noviant'
                    : '纽约企业AI解决方案 | LiquidEdge液冷集装箱数据中心 - Noviant')
                : 'Enterprise AI Solutions New York | LiquidEdge AI POD - Noviant',
            description: locale.startsWith('zh')
                ? (locale === 'zh-TW'
                    ? '液冷一體化智算集裝箱、GPU集群、生成式AI與數位孿生解決方案。'
                    : '液冷一体化智算集装箱、GPU集群、生成式AI与数字孪生解决方案。')
                : 'Liquid-cooled AI datacenter containers, GPU clusters, generative AI, and Digital Twin solutions.',
            url: `https://www.noviant.com/${locale}/ai-solutions`,
            siteName: 'Noviant',
            images: [{ url: 'https://www.noviant.com/images/ai-solutions/liquidedge-ai-pod.jpg', width: 1200, height: 628, alt: 'LiquidEdge AI POD' }],
            locale: locale,
            type: 'website',
        },
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
                    { "@type": "Question", "name": "What AI solutions does Noviant offer for enterprises?", "acceptedAnswer": { "@type": "Answer", "text": "Noviant offers enterprise AI solutions including process automation, predictive analytics, machine learning integration, natural language processing, AI-powered cybersecurity, Digital Twin implementations, and liquid-cooled AI datacenter container infrastructure (LiquidEdge AI POD) for New York businesses." } },
                    { "@type": "Question", "name": "How can AI improve my business operations?", "acceptedAnswer": { "@type": "Answer", "text": "AI can automate repetitive tasks, analyze large datasets for actionable insights, predict equipment failures, enhance customer service with intelligent chatbots, and improve security threat detection — resulting in significant cost savings and efficiency gains." } },
                    { "@type": "Question", "name": "What is a Digital Twin and how does Noviant implement it?", "acceptedAnswer": { "@type": "Answer", "text": "A Digital Twin is a virtual replica of a physical system, process, or facility. Noviant designs and deploys Digital Twin solutions for real estate and MSP environments, enabling real-time monitoring, simulation, and predictive maintenance." } },
                    { "@type": "Question", "name": "What is the LiquidEdge AI POD?", "acceptedAnswer": { "@type": "Answer", "text": "The LiquidEdge AI POD is a factory-built, liquid-cooled AI datacenter container built in a 40-ft North American-spec ISO container. It supports 44–200 kW of IT load, achieves PUE ≤ 1.15, and can be deployed and operational within 8 weeks. It supports NVIDIA GB200, H100, H200, B200, RTX 5090, and AMD MI300X GPUs." } },
                    { "@type": "Question", "name": "How quickly can an AI datacenter container be deployed?", "acceptedAnswer": { "@type": "Answer", "text": "The LiquidEdge AI POD is factory pre-built and tested, enabling deployment from factory to live operation in as little as 8 weeks — compared to 36+ months for traditional datacenter construction. No on-site civil works are required." } },
                    { "@type": "Question", "name": "What GPUs does the LiquidEdge AI POD support?", "acceptedAnswer": { "@type": "Answer", "text": "The LiquidEdge AI POD supports multiple GPU configurations: up to 64× NVIDIA RTX 5090, 32× H100/H200 SXM5, 24× B200 SXM6, 32× AMD MI300X per single-rack LE-44 unit, and up to 1× GB200 NVL72 (72 GPUs) in the quad-rack LE-200 configuration." } },
                    { "@type": "Question", "name": "Where can the LiquidEdge AI POD be deployed?", "acceptedAnswer": { "@type": "Answer", "text": "The LiquidEdge AI POD can be deployed anywhere power is available, including industrial sites, warehouse adjacencies, brownfield real estate, energy-adjacent locations (solar, gas wells), and remote or sovereign compute environments. Its IP55 enclosure operates from -40°C to +50°C." } }
                ]
            }) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "ItemList",
                "name": "LiquidEdge AI POD Product Lineup",
                "description": "Factory-built liquid-cooled AI datacenter containers available in three configurations",
                "itemListElement": [
                    {
                        "@type": "ListItem",
                        "position": 1,
                        "item": {
                            "@type": "Product",
                            "name": "LiquidEdge AI POD LE-44",
                            "description": "Single-rack edge AI datacenter container. 44 kW IT load, supports 64× RTX 5090 or 32× H100/H200 or 24× B200. Ideal for inference, fine-tuning, and edge AI workloads.",
                            "brand": { "@type": "Brand", "name": "LiquidEdge" },
                            "offers": { "@type": "Offer", "availability": "https://schema.org/InStock", "seller": { "@type": "Organization", "name": "Noviant" } },
                            "additionalProperty": [
                                { "@type": "PropertyValue", "name": "IT Load", "value": "44 kW" },
                                { "@type": "PropertyValue", "name": "PUE", "value": "≤ 1.15" },
                                { "@type": "PropertyValue", "name": "Delivery", "value": "8 weeks" },
                                { "@type": "PropertyValue", "name": "Form Factor", "value": "40-ft ISO Container" }
                            ]
                        }
                    },
                    {
                        "@type": "ListItem",
                        "position": 2,
                        "item": {
                            "@type": "Product",
                            "name": "LiquidEdge AI POD LE-88",
                            "description": "Twin-rack mainstream AI datacenter container. 88 kW IT load, supports 128× RTX 5090 or 64× H100/H200 or 48× B200. Ideal for Neocloud and GPU-as-a-Service deployments.",
                            "brand": { "@type": "Brand", "name": "LiquidEdge" },
                            "offers": { "@type": "Offer", "availability": "https://schema.org/InStock", "seller": { "@type": "Organization", "name": "Noviant" } },
                            "additionalProperty": [
                                { "@type": "PropertyValue", "name": "IT Load", "value": "88 kW" },
                                { "@type": "PropertyValue", "name": "PUE", "value": "≤ 1.15" },
                                { "@type": "PropertyValue", "name": "Delivery", "value": "8 weeks" },
                                { "@type": "PropertyValue", "name": "Form Factor", "value": "40-ft HC ISO Container" }
                            ]
                        }
                    },
                    {
                        "@type": "ListItem",
                        "position": 3,
                        "item": {
                            "@type": "Product",
                            "name": "LiquidEdge AI POD LE-200",
                            "description": "Quad-rack heavy AI datacenter container. 200 kW IT load, supports 1× GB200 NVL72 (72 GPUs) or 256× RTX 5090. Ideal for LLM training and hyperscaler bridge workloads.",
                            "brand": { "@type": "Brand", "name": "LiquidEdge" },
                            "offers": { "@type": "Offer", "availability": "https://schema.org/InStock", "seller": { "@type": "Organization", "name": "Noviant" } },
                            "additionalProperty": [
                                { "@type": "PropertyValue", "name": "IT Load", "value": "200 kW" },
                                { "@type": "PropertyValue", "name": "PUE", "value": "≤ 1.15" },
                                { "@type": "PropertyValue", "name": "Delivery", "value": "8 weeks" },
                                { "@type": "PropertyValue", "name": "Form Factor", "value": "40-ft HC ISO Container" }
                            ]
                        }
                    }
                ]
            }) }} />
            <AISolutionsPage />
        </>
    );
}
