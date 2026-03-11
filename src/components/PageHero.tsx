"use client";

import { motion } from "framer-motion";

interface PageHeroProps {
    title: string;
    subtitle: string;
    bgGradient?: string;
}

export default function PageHero({
    title,
    subtitle,
    bgGradient = "from-blue-900/40 via-black to-black"
}: PageHeroProps) {
    return (
        <section className="relative h-[60vh] min-h-[400px] flex items-center justify-center overflow-hidden bg-black text-white pt-16">
            {/* Background Elements */}
            <div className={`absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] ${bgGradient} opacity-80`} />
            <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:50px_50px]" />

            <div className="container relative z-10 px-4 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white via-blue-100 to-white">
                        {title}
                    </h1>
                    <p className="text-lg md:text-xl text-zinc-400 max-w-2xl mx-auto leading-relaxed">
                        {subtitle}
                    </p>
                </motion.div>
            </div>

            {/* Decorative Glow */}
            <div className="absolute -bottom-40 left-1/2 -translate-x-1/2 w-96 h-96 bg-blue-500 rounded-full blur-[160px] opacity-20" />
        </section>
    );
}
