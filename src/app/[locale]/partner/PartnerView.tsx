"use client";

import PageHero from "@/components/PageHero";
import { useTranslations } from "next-intl";
import { motion } from "framer-motion";

export default function PartnersPage() {
    const t = useTranslations("Partners_Page");

    const partners = [
        // Cloud & Infrastructure
        { name: "Microsoft", logo: "/images/partners/microsoft.svg", slug: "microsoft", color: "00A4EF", category: "cloud" },
        { name: "AWS", logo: "/images/partners/amazonaws.svg", slug: "amazonaws", color: "FF9900", category: "cloud" },
        { name: "Google Cloud", logo: "/images/partners/googlecloud.svg", slug: "googlecloud", color: "4285F4", category: "cloud" },
        { name: "VMware", logo: "/images/partners/vmware.svg", slug: "vmware", color: "607078", category: "cloud" },
        { name: "Nutanix", logo: "/images/partners/nutanix.png", slug: "nutanix", color: "00A39B", category: "cloud" },
        { name: "Veeam", logo: "/images/partners/veeam.png", slug: "veeam", color: "00B336", category: "cloud" },
        { name: "Carbonite", logo: "/images/partners/carbonite.png", slug: "carbonite", color: "00AEEF", category: "cloud" },
        { name: "Citrix", logo: "/images/partners/citrix.svg", slug: "citrix", color: "000000", category: "cloud" },
        { name: "RingCentral", logo: "/images/partners/ringcentral.png", slug: "ringcentral", color: "FF7A00", category: "cloud" },

        // Hardware
        { name: "Dell Technologies", logo: "/images/partners/dell.svg", slug: "dell", color: "0076CE", category: "hardware" },
        { name: "HPE", logo: "/images/partners/hp.svg", slug: "hp", color: "01A982", category: "hardware" },
        { name: "IBM", logo: "/images/partners/ibm.svg", slug: "ibm", color: "0530AD", category: "hardware" },
        { name: "Lenovo", logo: "/images/partners/lenovo.svg", slug: "lenovo", color: "E2231A", category: "hardware" },
        { name: "Schneider Electric", logo: "/images/partners/schneiderelectric.svg", slug: "schneiderelectric", color: "3DCD58", category: "hardware" },
        { name: "Eaton", logo: "/images/partners/eaton.png", slug: "eaton", color: "005BAA", category: "hardware" },
        { name: "Oracle", logo: "/images/partners/oracle.svg", slug: "oracle", color: "F80000", category: "hardware" },
        { name: "Intel", logo: "/images/partners/intel.svg", slug: "intel", color: "0071C5", category: "hardware" },

        // Network
        { name: "Cisco", logo: "/images/partners/cisco.svg", slug: "cisco", color: "049FD9", category: "network" },
        { name: "Juniper", logo: "/images/partners/junipernetworks.svg", slug: "junipernetworks", color: "336699", category: "network" },
        { name: "Fortinet", logo: "/images/partners/fortinet.svg", slug: "fortinet", color: "D7141A", category: "network" },
        { name: "NetApp", logo: "/images/partners/netapp.svg", slug: "netapp", color: "00B2E1", category: "network" },
        { name: "TP-Link", logo: "/images/partners/tplink.svg", slug: "tplink", color: "00AEEF", category: "network" },
        { name: "Ubiquiti", logo: "/images/partners/ubiquiti.svg", slug: "ubiquiti", color: "0073FF", category: "network" },
        { name: "A10 Networks", logo: "/images/partners/a10networks.png", slug: "a10networks", color: "006FB4", category: "network" },
        { name: "F5", logo: "/images/partners/f5.svg", slug: "f5", color: "E4002B", category: "network" },

        // Security
        { name: "Palo Alto", logo: "/images/partners/paloaltonetworks.svg", slug: "paloaltonetworks", color: "FA582D", category: "security" },
        { name: "Check Point", logo: "/images/partners/checkpoint.png", slug: "checkpoint", color: "D71920", category: "security" },
        { name: "Symantec", logo: "/images/partners/symantec.png", slug: "symantec", color: "ECB22E", category: "security" },
        { name: "Trend Micro", logo: "/images/partners/trendmicro.svg", slug: "trendmicro", color: "D71920", category: "security" },
        { name: "SonicWall", logo: "/images/partners/sonicwall.svg", slug: "sonicwall", color: "F58220", category: "security" },
    ];

    return (
        <div className="min-h-screen bg-white dark:bg-black relative overflow-hidden">
            <div className="absolute inset-0 cyber-grid opacity-20 pointer-events-none" />
            <PageHero
                title={t("title")}
                subtitle={t("subtitle")}
                bgGradient="from-blue-900/40 via-black to-blue-900/40"
            />

            <div className="container mx-auto px-4 py-24 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="max-w-3xl mb-16 cyber-corner p-8 bg-white/5 backdrop-blur-sm border border-white/10"
                >
                    <p className="text-zinc-600 dark:text-zinc-400 text-lg leading-relaxed">
                        {t("description")}
                    </p>
                </motion.div>

                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 md:gap-8">
                    {partners.map((partner, index) => (
                        <motion.div
                            key={partner.name}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.4, delay: index * 0.05 }}
                            viewport={{ once: true }}
                            className="bg-zinc-50 dark:bg-zinc-900/30 border border-zinc-200 dark:border-zinc-800 p-6 rounded-2xl flex flex-col items-center justify-between hover:border-blue-500/50 hover:bg-white dark:hover:bg-zinc-800 transition-all group aspect-square hover:shadow-2xl hover:shadow-blue-500/10"
                        >
                            <div className="flex-1 w-full flex items-center justify-center p-2 min-h-0">
                                {/* eslint-disable-next-line @next/next/no-img-element */}
                                <img
                                    src={partner.logo}
                                    alt={partner.name}
                                    className="max-w-[85%] max-h-[70%] object-contain transition-all duration-500 group-hover:scale-110"
                                    onError={(e) => {
                                        const slug = (partner as unknown as { slug: string }).slug || partner.name.toLowerCase().replace(/\s/g, '');
                                        const color = (partner as unknown as { color: string }).color ? `/${(partner as unknown as { color: string }).color.replace('#', '')}` : '';
                                        (e.target as HTMLImageElement).src = `https://cdn.simpleicons.org/${slug}${color}`;
                                    }}
                                />
                            </div>
                            <div className="w-full text-center mt-auto pb-2">
                                <div className="text-[10px] text-zinc-400 uppercase tracking-widest font-bold opacity-60 group-hover:opacity-100 transition-opacity whitespace-nowrap overflow-hidden text-ellipsis">
                                    {partner.name}
                                </div>
                                <div className="text-[8px] text-zinc-500 uppercase tracking-tighter mt-1 opacity-0 group-hover:opacity-100 transition-opacity">
                                    {t(`categories.${partner.category}` as Parameters<typeof t>[0])}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
}
