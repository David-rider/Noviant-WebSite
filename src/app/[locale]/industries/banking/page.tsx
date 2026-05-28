import BankingPage from "./BankingView";
import { setRequestLocale } from "next-intl/server";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
    const { locale } = await params;
    return {
        title: locale.startsWith('zh')
            ? (locale === 'zh-TW' ? '銀行與金融機構IT解決方案 紐約 - Noviant' : '银行与金融机构IT解决方案 纽约 - Noviant')
            : 'IT Solutions for Banking & Financial Institutions NYC - Noviant',
        description: locale.startsWith('zh')
            ? (locale === 'zh-TW' ? 'Noviant為紐約銀行與金融機構提供安全合規的IT託管服務，涵蓋SOX、PCI-DSS合規、網路安全與全天候支援。' : 'Noviant为纽约银行与金融机构提供安全合规的IT托管服务，涵盖SOX、PCI-DSS合规、网络安全与全天候支持。')
            : 'Secure, compliant IT managed services for banks and financial institutions in New York. SOX, PCI-DSS compliance, cybersecurity, and 24/7 support.',
        openGraph: {
            title: locale.startsWith('zh')
                ? (locale === 'zh-TW' ? '銀行與金融機構IT解決方案 紐約 - Noviant' : '银行与金融机构IT解决方案 纽约 - Noviant')
                : 'IT Solutions for Banking & Financial Institutions NYC - Noviant',
            description: locale.startsWith('zh')
                ? (locale === 'zh-TW' ? 'Noviant為紐約銀行與金融機構提供安全合規的IT託管服務，涵蓋SOX、PCI-DSS合規、網路安全與全天候支援。' : 'Noviant为纽约银行与金融机构提供安全合规的IT托管服务，涵盖SOX、PCI-DSS合规、网络安全与全天候支持。')
                : 'Secure, compliant IT managed services for banks and financial institutions in New York. SOX, PCI-DSS compliance, cybersecurity, and 24/7 support.',
            url: 'https://www.noviant.com/en/industries/banking',
            siteName: 'Noviant',
            locale: locale,
            type: 'website',
        },
    };
}

export default async function Page({ params }: { params: Promise<{ locale: string }> }) {
    const { locale } = await params;
    setRequestLocale(locale);
    return <BankingPage />;
}
