import GenericMSPView from "../GenericMSPView";
import { setRequestLocale } from "next-intl/server";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
    const { locale } = await params;
    return {
        title: locale.startsWith('zh')
            ? (locale === 'zh-TW' ? '企業電話系統與VoIP 紐約 - Noviant' : '企业电话系统与VoIP 纽约 - Noviant')
            : 'Business Phone Systems & VoIP New York - Noviant',
        description: locale.startsWith('zh')
            ? (locale === 'zh-TW' ? 'Noviant為紐約企業提供現代化VoIP與商業電話系統，涵蓋雲端PBX、統一通訊與全天候支援。' : 'Noviant为纽约企业提供现代化VoIP与商业电话系统，涵盖云端PBX、统一通信与全天候支持。')
            : 'Modern VoIP and business phone systems for New York enterprises. Cloud PBX, unified communications, and 24/7 support from Noviant.',
        openGraph: {
            title: locale.startsWith('zh')
                ? (locale === 'zh-TW' ? '企業電話系統與VoIP 紐約 - Noviant' : '企业电话系统与VoIP 纽约 - Noviant')
                : 'Business Phone Systems & VoIP New York - Noviant',
            description: locale.startsWith('zh')
                ? (locale === 'zh-TW' ? 'Noviant為紐約企業提供現代化VoIP與商業電話系統，涵蓋雲端PBX、統一通訊與全天候支援。' : 'Noviant为纽约企业提供现代化VoIP与商业电话系统，涵盖云端PBX、统一通信与全天候支持。')
                : 'Modern VoIP and business phone systems for New York enterprises. Cloud PBX, unified communications, and 24/7 support from Noviant.',
            url: 'https://www.noviant.com/en/msp/business-phone-system',
            siteName: 'Noviant',
            locale: locale,
            type: 'website',
        },
    };
}

export default async function Page({ params }: { params: Promise<{ locale: string }> }) {
    const { locale } = await params;
    setRequestLocale(locale);
    return <GenericMSPView pageKey="business_phone" imageSrc="/images/unsplash/photo-1596526131083-e8c633c948d2.jpg" />;
}
