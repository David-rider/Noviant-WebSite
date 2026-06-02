import CyberSecurityPage from "./CyberSecurityView";
import { setRequestLocale } from "next-intl/server";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
    const { locale } = await params;
    return {
        title: locale.startsWith('zh')
            ? (locale === 'zh-TW'
                ? '紐約企業級網路安全解決方案 | 數據防禦與合規 - Noviant'
                : '纽约企业级网络安全解决方案 | 数据防御与合规 - Noviant')
            : 'Enterprise Cybersecurity Solutions in New York | Data Defense NYC - Noviant',
        description: locale.startsWith('zh')
            ? (locale === 'zh-TW'
                ? '提供位於紐約(New York)的企業級網路安全服務。全天候威脅監控、防勒索軟體、合規顧問及零信任安全架構。'
                : '提供位于纽约(New York)的企业级网络安全服务。全天候威胁监控、防勒索软件、合规顾问及零信任安全架构。')
            : 'Enterprise-grade cybersecurity services located in New York. 24/7 threat monitoring, ransomware protection, compliance, and Zero Trust architecture.',
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
                    { "@type": "Question", "name": "What cybersecurity services does Noviant provide in New York?", "acceptedAnswer": { "@type": "Answer", "text": "Noviant provides comprehensive cybersecurity services including threat detection and response, vulnerability assessments, penetration testing, SIEM implementation, endpoint protection, email security, and vCISO advisory services for New York enterprises." } },
                    { "@type": "Question", "name": "How does Noviant help with compliance requirements?", "acceptedAnswer": { "@type": "Answer", "text": "Noviant helps businesses achieve and maintain compliance with HIPAA, SOX, PCI-DSS, NIST, and other regulatory frameworks through gap assessments, policy development, technical controls implementation, and ongoing compliance monitoring." } },
                    { "@type": "Question", "name": "What should I do if my business experiences a cyberattack?", "acceptedAnswer": { "@type": "Answer", "text": "If you experience a cyberattack, contact Noviant immediately at (212) 809-6625. Our incident response team will contain the threat, investigate the breach, recover your systems, and implement measures to prevent future attacks." } }
                ]
            }) }} />
            <CyberSecurityPage />
        </>
    );
}
