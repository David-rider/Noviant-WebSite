import { Link } from '@/i18n/routing';
import { useTranslations } from 'next-intl';

export default function NotFound() {
    const t = useTranslations('NotFound');

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-zinc-50 dark:bg-black text-center px-4">
            <h2 className="text-4xl font-bold text-zinc-900 dark:text-white mb-4">{t('title')}</h2>
            <p className="text-zinc-600 dark:text-zinc-400 mb-8">{t('description')}</p>
            <Link href="/" className="px-6 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-500 transition-colors">
                {t('return_home')}
            </Link>
        </div>
    );
}
