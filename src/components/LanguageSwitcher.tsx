"use client";

import { useLocale } from "next-intl";
import { usePathname, useRouter } from "@/i18n/routing";
import { startTransition } from "react";
import { Globe } from "lucide-react";

export default function LanguageSwitcher() {
    const locale = useLocale();
    const router = useRouter();
    const pathname = usePathname();

    function onSelectChange(event: React.ChangeEvent<HTMLSelectElement>) {
        const nextLocale = event.target.value;
        startTransition(() => {
            router.replace(pathname, { locale: nextLocale });
        });
    }

    return (
        <div className="flex items-center gap-2">
            <Globe className="w-4 h-4 text-zinc-500 dark:text-zinc-400" />
            <select
                defaultValue={locale}
                className="bg-transparent py-1 text-sm outline-none cursor-pointer text-zinc-800 dark:text-zinc-200"
                onChange={onSelectChange}
            >
                <option value="en" className="text-black">English</option>
                <option value="zh-CN" className="text-black">简体中文</option>
                <option value="zh-TW" className="text-black">繁體中文</option>
            </select>
        </div>
    );
}
