import { Link } from "@/i18n/routing";

// Inline SVG ensures colors are ALWAYS correct regardless of system theme,
// OS dark mode, browser color-scheme, or any CSS invert filters.
export default function Logo() {
    return (
        <Link href="/" className="flex items-center gap-2" style={{ colorScheme: 'light' }}>
            <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 240 60"
                fill="none"
                width="160"
                height="40"
                aria-label="Noviant Logo"
                style={{ colorScheme: 'light', filter: 'none' }}
            >
                <g transform="translate(5, 5) scale(0.50)">
                    {/* Left Triangle — always Navy */}
                    <path d="M0 50 L25 25 L25 75 Z" fill="#0F172A" />
                    {/* Right Triangle — always Navy */}
                    <path d="M100 50 L75 25 L75 75 Z" fill="#0F172A" />
                    {/* Top Polygon — always Red */}
                    <path d="M50 0 L65 15 L65 55 L35 25 L35 15 Z" fill="#991B1B" />
                    {/* Bottom Polygon — always Red */}
                    <path d="M50 100 L35 85 L35 45 L65 75 L65 85 Z" fill="#991B1B" />
                </g>
                {/* Text — always Navy */}
                <text
                    x="65"
                    y="42"
                    fontFamily="Arial, Helvetica, sans-serif"
                    fontWeight="bold"
                    fontSize="38"
                    fill="#0F172A"
                    letterSpacing="-1"
                >
                    noviant
                </text>
            </svg>
        </Link>
    );
}
