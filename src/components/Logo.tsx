import { Link } from "@/i18n/routing";
import Image from "next/image";

export default function Logo() {
    return (
        <Link href="/" className="flex items-center gap-2">
            <div className="relative w-40 h-10">
                <Image
                    src="/logo.svg"
                    alt="Noviant Logo"
                    fill
                    className="object-contain object-left dark:invert"
                    priority
                />
            </div>
        </Link>
    );
}
