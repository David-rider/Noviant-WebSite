"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Building2, Landmark, Stethoscope, Briefcase, GraduationCap, ShoppingBag, Heart, Store, Handshake, ArrowRight } from "lucide-react";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";

const industries = [
    {
        id: "banking",
        icon: Landmark,
        image: "/images/unsplash/photo-1624996379697-f01d168b1a52.jpg"
    },
    {
        id: "education",
        icon: GraduationCap,
        image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1"
    },
    {
        id: "fashion",
        icon: ShoppingBag,
        image: "/images/unsplash/photo-1445205170230-053b83016050.jpg"
    },
    {
        id: "financial-services",
        icon: Briefcase,
        image: "/images/unsplash/photo-1590283603385-17ffb3a7f29f.jpg"
    },
    {
        id: "government",
        icon: Building2,
        image: "/images/unsplash/photo-1529107386315-e1a2ed48a620.jpg"
    },
    {
        id: "health-services",
        icon: Stethoscope,
        image: "/images/unsplash/photo-1516549655169-df83a0774514.jpg"
    },
    {
        id: "not-for-profit",
        icon: Heart,
        image: "/images/unsplash/photo-1488521787991-ed7bbaae773c.jpg"
    },
    {
        id: "retail",
        icon: Store,
        image: "/images/unsplash/photo-1556742049-0cfed4f6a45d.jpg"
    },
    {
        id: "service-businesses",
        icon: Handshake,
        image: "https://images.unsplash.com/photo-1556761175-5973dc0f32b7"
    }
];

export default function IndustrySlider() {
    const t = useTranslations("Industries");
    const [active, setActive] = useState("banking");

    const activeIndustry = industries.find(i => i.id === active);

    return (
        <div className="flex flex-col items-center">
            <div className="flex flex-wrap justify-center gap-4 mb-12">
                {industries.map((ind) => (
                    <button
                        key={ind.id}
                        onClick={() => setActive(ind.id)}
                        className={`flex items-center gap-2 px-6 py-3 rounded-full text-sm font-medium transition-all ${active === ind.id
                            ? "bg-blue-600 text-white shadow-lg shadow-blue-500/25"
                            : "bg-zinc-100 dark:bg-zinc-900 text-zinc-600 dark:text-zinc-400 hover:bg-zinc-200 dark:hover:bg-zinc-800"
                            }`}
                    >
                        <ind.icon className="w-4 h-4" />
                        {t(`tabs.${ind.id}`)}
                    </button>
                ))}
            </div>

            <div className="w-full max-w-5xl min-h-[450px] relative bg-white dark:bg-slate-900/50 rounded-3xl p-8 md:p-12 border border-zinc-200 dark:border-zinc-800/50 overflow-hidden shadow-xl">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={active}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.4 }}
                        className="flex flex-col lg:flex-row gap-12 items-center h-full"
                    >
                        <div className="flex-1 space-y-8">
                            <div>
                                <h3 className="text-3xl md:text-4xl font-black mb-4 text-slate-900 dark:text-white">
                                    {t(`content.${active}.title`)}
                                </h3>
                                <p className="text-xl text-slate-600 dark:text-slate-400 leading-relaxed">
                                    {t(`content.${active}.desc`)}
                                </p>
                            </div>
                            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                {(t.raw(`content.${active}.list`) as string[]).map((item, i) => (
                                    <li key={i} className="flex items-center gap-3 text-slate-700 dark:text-slate-300 font-medium">
                                        <div className="w-2 h-2 rounded-full bg-blue-500 shadow-[0_0_10px_rgba(37,99,235,0.5)]" />
                                        {item}
                                    </li>
                                ))}
                            </ul>

                            <div className="pt-4">
                                <Link
                                    href={`/industries/${active}`}
                                    className="inline-flex items-center gap-2 px-6 py-3 bg-blue-50 text-blue-600 hover:bg-blue-600 hover:text-white rounded-xl font-semibold transition-all"
                                >
                                    {t("learn_more") || "Learn More"} <ArrowRight className="w-4 h-4" />
                                </Link>
                            </div>
                        </div>

                        <div className="w-full lg:w-2/5 aspect-[4/3] relative rounded-2xl overflow-hidden shadow-2xl border border-white/10">
                            <motion.img
                                key={activeIndustry?.image}
                                src={activeIndustry?.image}
                                alt={active}
                                initial={{ scale: 1.1, opacity: 0 }}
                                animate={{ scale: 1, opacity: 1 }}
                                transition={{ duration: 0.6 }}
                                className="w-full h-full object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 to-transparent" />
                        </div>
                    </motion.div>
                </AnimatePresence>
            </div>
        </div>
    );
}
