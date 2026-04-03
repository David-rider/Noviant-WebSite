import MSPPage from "./MSPView";
import { setRequestLocale } from "next-intl/server";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
    const { locale } = await params;
    return {
        title: locale === 'zh' 
            ? '纽约最佳MSP与IT托管服务 | 企业IT支持 - Noviant'
            : 'Top MSP & IT Managed Services in New York | Enterprise IT Support - Noviant',
        description: locale === 'zh'
            ? '我们是纽约(New York)领先的MSP(IT托管服务提供商)。为企业提供24/7全天候监控、网络安全、云计算与数据备份等一站式IT解决方案。'
            : 'Leading MSP (Managed Service Provider) in New York. We provide 24/7 monitoring, cybersecurity, cloud computing, and data backup IT solutions for enterprises.',
    };
}

export default async function Page({ params }: { params: Promise<{ locale: string }> }) {
    const { locale } = await params;
    setRequestLocale(locale);
    return <MSPPage />;
}
