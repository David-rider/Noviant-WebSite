import ConsultingImplementationPage from "./ConsultingImplementationView";
import { setRequestLocale } from "next-intl/server";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
    const { locale } = await params;
    return {
        title: locale.startsWith('zh')
            ? (locale === 'zh-TW' ? 'IT諮詢與實施服務 紐約 - Noviant' : 'IT咨询与实施服务 纽约 - Noviant')
            : 'IT Consulting & Implementation Services New York - Noviant',
        description: locale.startsWith('zh')
            ? (locale === 'zh-TW' ? 'Noviant紐約IT諮詢與實施服務，提供技術路線規劃、系統整合、專案管理與vCISO服務。' : 'Noviant纽约IT咨询与实施服务，提供技术路线规划、系统集成、项目管理与vCISO服务。')
            : 'Expert IT consulting and implementation services in New York. Technology roadmaps, system integration, project management, and vCISO services.',
        openGraph: {
            title: locale.startsWith('zh')
                ? (locale === 'zh-TW' ? 'IT諮詢與實施服務 紐約 - Noviant' : 'IT咨询与实施服务 纽约 - Noviant')
                : 'IT Consulting & Implementation Services New York - Noviant',
            description: locale.startsWith('zh')
                ? (locale === 'zh-TW' ? 'Noviant紐約IT諮詢與實施服務，提供技術路線規劃、系統整合、專案管理與vCISO服務。' : 'Noviant纽约IT咨询与实施服务，提供技术路线规划、系统集成、项目管理与vCISO服务。')
                : 'Expert IT consulting and implementation services in New York. Technology roadmaps, system integration, project management, and vCISO services.',
            url: 'https://www.noviant.com/en/consulting-implementation',
            siteName: 'Noviant',
            locale: locale,
            type: 'website',
        },
    };
}

export default async function Page({ params }: { params: Promise<{ locale: string }> }) {
    const { locale } = await params;
    setRequestLocale(locale);
    return <ConsultingImplementationPage />;
}
