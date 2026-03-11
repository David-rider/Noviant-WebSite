import { routing } from '@/i18n/routing';

export default function RootPage() {
    // For static exports, Next.js redirect() might not work perfectly across all generic CDN hosts
    // So we provide a fallback classic meta refresh.
    return (
        <html lang="en">
            <head>
                <meta httpEquiv="refresh" content={`0; url=/${routing.defaultLocale}/`} />
            </head>
            <body>
                <script
                    dangerouslySetInnerHTML={{
                        __html: `window.location.replace("/${routing.defaultLocale}/");`
                    }}
                />
            </body>
        </html>
    );
}
