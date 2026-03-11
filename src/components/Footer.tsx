"use client";

import { useTranslations } from "next-intl";
import Logo from "./Logo";

export default function Footer() {
    const t = useTranslations("Footer");

    return (
        <footer className="bg-zinc-50 border-t border-zinc-200 py-12">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
                    <div className="col-span-1 md:col-span-2">
                        <Logo />
                        <p className="mt-4 text-sm text-zinc-500 max-w-sm">
                            {t("address")} <br />
                            {t("phone")}
                        </p>
                    </div>

                    <div>
                        {/* Placeholder for footer links column 1 */}
                    </div>
                    <div>
                        {/* Placeholder for footer links column 2 */}
                    </div>
                </div>

                <div className="pt-8 border-t border-zinc-200 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-xs text-zinc-400">
                        {t("rights")}
                    </p>
                </div>
            </div>
        </footer>
    );
}
