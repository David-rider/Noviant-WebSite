"use client";

import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";
import { Link } from "@/i18n/routing";

interface ServiceCardProps {
    title: string;
    description: string;
    icon: LucideIcon;
    href: string;
    index: number;
}

export default function ServiceCard({ title, description, icon: Icon, href, index }: ServiceCardProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
        >
            <Link href={href} className="block group">
                <div className="h-full p-8 rounded-2xl bg-white border border-slate-200 hover:border-blue-600 transition-all duration-300 shadow-sm hover:shadow-xl hover:shadow-blue-500/5 relative">
                    <div className="mb-8 w-14 h-14 rounded-xl bg-blue-50 flex items-center justify-center text-blue-600 group-hover:scale-110 transition-transform duration-300 border border-blue-100">
                        <Icon className="w-7 h-7" />
                    </div>

                    <h3 className="text-2xl font-bold mb-4 text-slate-900">
                        {title}
                    </h3>
                    <p className="text-slate-600 leading-relaxed text-base">
                        {description}
                    </p>

                    {/* Subtle aesthetic accent only */}
                    <div className="absolute bottom-4 right-4 w-6 h-6 border-b-2 border-r-2 border-slate-100 group-hover:border-blue-600/20 transition-colors" />
                </div>
            </Link>
        </motion.div>
    );
}
