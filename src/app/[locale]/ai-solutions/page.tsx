import AISolutionsPage from "./AISolutionsView";
import { setRequestLocale } from "next-intl/server";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
    const { locale } = await params;
    return {
        title: locale === 'zh' 
            ? '纽约企业人工智能解决方案 | AI集成 - Noviant'
            : 'Enterprise AI Solutions in New York | AI Integration NYC - Noviant',
        description: locale === 'zh'
            ? '为您纽约(New York)的企业提供领先的人工智能(AI)解决方案，覆盖自动化流、预测分析、机器学习集成应用。'
            : 'Leading Artificial Intelligence (AI) solutions for enterprises in New York. We provide automation, predictive analytics, and machine learning integration.',
    };
}

export default async function Page({ params }: { params: Promise<{ locale: string }> }) {
    const { locale } = await params;
    setRequestLocale(locale);
    return <AISolutionsPage />;
}
