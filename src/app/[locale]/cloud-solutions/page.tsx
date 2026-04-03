import CloudSolutionsPage from "./CloudSolutionsView";
import { setRequestLocale } from "next-intl/server";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
    const { locale } = await params;
    return {
        title: locale === 'zh' 
            ? '企业云服务与ICT解决方案纽约 | 云迁移与管理 - Noviant'
            : 'Enterprise Cloud Services & ICT Solutions New York | Cloud Migration - Noviant',
        description: locale === 'zh'
            ? 'Noviant为纽约(New York)的企业提供顶级云服务和ICT技术咨询。涵盖云迁移、数据备份、Azure与AWS云部署架构。'
            : 'Noviant provides top-tier cloud services and ICT technical consulting for enterprises in New York. Covering cloud migration, Azure & AWS deployment.',
    };
}

export default async function Page({ params }: { params: Promise<{ locale: string }> }) {
    const { locale } = await params;
    setRequestLocale(locale);
    return <CloudSolutionsPage />;
}
