import GenericMSPView from "../GenericMSPView";
import { setRequestLocale } from "next-intl/server";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
    const { locale } = await params;
    return {
        title: locale.startsWith('zh')
            ? (locale === 'zh-TW' ? '雲端運算服務 紐約 | 雲端MSP - Noviant' : '云计算服务 纽约 | 云端MSP - Noviant')
            : 'Cloud Computing Services New York | Cloud MSP - Noviant',
        description: locale.startsWith('zh')
            ? (locale === 'zh-TW' ? 'Noviant為紐約企業提供雲端運算與遷移服務，涵蓋AWS、Azure、Microsoft 365部署、管理與最佳化。' : 'Noviant为纽约企业提供云计算与迁移服务，涵盖AWS、Azure、Microsoft 365部署、管理与优化。')
            : 'Cloud computing and migration services for businesses in New York. AWS, Azure, Microsoft 365 deployment, management, and optimization.',
        openGraph: {
            title: locale.startsWith('zh')
                ? (locale === 'zh-TW' ? '雲端運算服務 紐約 | 雲端MSP - Noviant' : '云计算服务 纽约 | 云端MSP - Noviant')
                : 'Cloud Computing Services New York | Cloud MSP - Noviant',
            description: locale.startsWith('zh')
                ? (locale === 'zh-TW' ? 'Noviant為紐約企業提供雲端運算與遷移服務，涵蓋AWS、Azure、Microsoft 365部署、管理與最佳化。' : 'Noviant为纽约企业提供云计算与迁移服务，涵盖AWS、Azure、Microsoft 365部署、管理与优化。')
                : 'Cloud computing and migration services for businesses in New York. AWS, Azure, Microsoft 365 deployment, management, and optimization.',
            url: 'https://www.noviant.com/en/msp/cloud-computing',
            siteName: 'Noviant',
            locale: locale,
            type: 'website',
        },
    };
}

export default async function Page({ params }: { params: Promise<{ locale: string }> }) {
    const { locale } = await params;
    setRequestLocale(locale);
    return <GenericMSPView pageKey="cloud" imageSrc="/images/unsplash/photo-1544197150-b99a580bb7a8.jpg" />;
}
