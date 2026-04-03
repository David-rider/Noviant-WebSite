import CyberSecurityPage from "./CyberSecurityView";
import { setRequestLocale } from "next-intl/server";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
    const { locale } = await params;
    return {
        title: locale === 'zh' 
            ? '纽约企业级网络安全解决方案 | 数据防御与合规 - Noviant'
            : 'Enterprise Cybersecurity Solutions in New York | Data Defense NYC - Noviant',
        description: locale === 'zh'
            ? '提供位于纽约(New York)的企业级网络安全服务。全天候威胁监控、防勒索软件、合规顾问及零信任安全架构。'
            : 'Enterprise-grade cybersecurity services located in New York. 24/7 threat monitoring, ransomware protection, compliance, and Zero Trust architecture.',
    };
}

export default async function Page({ params }: { params: Promise<{ locale: string }> }) {
    const { locale } = await params;
    setRequestLocale(locale);
    return <CyberSecurityPage />;
}
