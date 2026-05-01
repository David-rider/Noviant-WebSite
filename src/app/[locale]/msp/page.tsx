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
    return <MSPPage />;
}
