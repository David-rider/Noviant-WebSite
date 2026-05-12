export default function Loading() {
    return (
        <div className="min-h-screen bg-[#f8fafc] animate-pulse">
            {/* Hero skeleton */}
            <div className="h-64 bg-slate-200" />

            {/* Content skeleton */}
            <div className="container mx-auto px-4 py-20 space-y-8">
                <div className="h-8 bg-slate-200 rounded-lg w-1/3" />
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {Array.from({ length: 3 }).map((_, i) => (
                        <div key={i} className="rounded-2xl bg-slate-200 h-48" />
                    ))}
                </div>
                <div className="space-y-3">
                    <div className="h-4 bg-slate-200 rounded w-full" />
                    <div className="h-4 bg-slate-200 rounded w-5/6" />
                    <div className="h-4 bg-slate-200 rounded w-4/6" />
                </div>
            </div>
        </div>
    );
}
