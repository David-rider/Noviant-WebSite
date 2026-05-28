import GenericMSPView from "../GenericMSPView";
import { setRequestLocale } from "next-intl/server";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
    const { locale } = await params;
    return {
        title: locale.startsWith('zh')
            ? (locale === 'zh-TW' ? 'IT推薦獎勵計劃 紐約 - Noviant' : 'IT推荐奖励计划 纽约 - Noviant')
            : 'IT Referral Program New York - Earn Rewards with Noviant',
        description: locale.startsWith('zh')
            ? (locale === 'zh-TW' ? '推薦企業給Noviant即可獲得獎勵。加入我們紐約IT推薦計劃，幫助您的人脈享受一流的IT託管服務。' : '推荐企业给Noviant即可获得奖励。加入我们纽约IT推荐计划，帮助您的人脉享受一流的IT托管服务。')
            : 'Refer businesses to Noviant and earn rewards. Join our IT referral program in New York and help your network access world-class managed IT services.',
        openGraph: {
            title: locale.startsWith('zh')
                ? (locale === 'zh-TW' ? 'IT推薦獎勵計劃 紐約 - Noviant' : 'IT推荐奖励计划 纽约 - Noviant')
                : 'IT Referral Program New York - Earn Rewards with Noviant',
            description: locale.startsWith('zh')
                ? (locale === 'zh-TW' ? '推薦企業給Noviant即可獲得獎勵。加入我們紐約IT推薦計劃，幫助您的人脈享受一流的IT託管服務。' : '推荐企业给Noviant即可获得奖励。加入我们纽约IT推荐计划，帮助您的人脉享受一流的IT托管服务。')
                : 'Refer businesses to Noviant and earn rewards. Join our IT referral program in New York and help your network access world-class managed IT services.',
            url: 'https://www.noviant.com/en/msp/referral-program',
            siteName: 'Noviant',
            locale: locale,
            type: 'website',
        },
    };
}

export default async function Page({ params }: { params: Promise<{ locale: string }> }) {
    const { locale } = await params;
    setRequestLocale(locale);
    return <GenericMSPView pageKey="referral_program" imageSrc="/images/unsplash/photo-1454165804606-c3d57bc86b40.jpg" />;
}
