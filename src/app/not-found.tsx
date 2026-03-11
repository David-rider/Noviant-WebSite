import Link from 'next/link';

export default function NotFound() {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-slate-50 dark:bg-slate-950">
            <h2 className="text-4xl font-black mb-4 text-slate-900 dark:text-white">404</h2>
            <p className="text-xl text-slate-600 dark:text-slate-400 mb-8">Page Not Found</p>
            <Link
                href="/"
                className="px-6 py-3 bg-blue-600 text-white rounded-xl font-bold hover:bg-blue-500 transition-colors"
            >
                Return Home
            </Link>
        </div>
    );
}
