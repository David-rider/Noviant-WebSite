/**
 * news.ts — Noviant News Articles Data File
 * ==========================================
 * To add or edit a news article, modify this array.
 * Each article supports English (en) and Chinese (zh) content.
 * 
 * Fields:
 *   id       — unique URL slug, e.g. "ai-platform-launch"
 *   category — one of: "ai" | "security" | "cloud" | "company" | "industry"
 *   date     — display date string per locale
 *   image    — path relative to /public, e.g. "/images/news/article1.jpg"
 *   title    — article headline per locale
 *   excerpt  — short summary shown on the listing card per locale
 *   body     — full article content in Markdown-style plain text per locale
 *              Use \n\n for paragraph breaks
 */

export interface NewsArticle {
    id: string;
    category: "ai" | "security" | "cloud" | "company" | "industry";
    image: string;
    date: { en: string; zh: string };
    title: { en: string; zh: string };
    excerpt: { en: string; zh: string };
    body: { en: string; zh: string };
    videoUrl?: string;
}

export const newsArticles: NewsArticle[] = [
    {
        id: "welcome-to-noviant-news",
        category: "company",
        image: "/images/unsplash/photo-1551434678-e076c223a692.jpg",
        date: {
            en: "April 2, 2026",
            zh: "2026年4月2日",
        },
        title: {
            en: "Welcome to Noviant News — Your Source for IT Insights",
            zh: "欢迎来到 Noviant 新闻中心——您的 IT 洞见来源",
        },
        excerpt: {
            en: "This is Noviant's official news center. We will share technology updates, company announcements, and industry insights here. Stay tuned.",
            zh: "这里是 Noviant 的官方新闻中心。我们将在此分享技术动态、公司公告以及行业洞见，敬请关注。",
        },
        body: {
            en: `Welcome to the Noviant News & Insights hub.\n\nWe created this space to keep you informed about the latest developments in enterprise IT, managed services, and AI infrastructure — all from the perspective of a team that works with these technologies every day.\n\nWhat to expect here:\n\n• Company announcements and new service launches\n• Technology deep-dives written by our engineers\n• Industry insights and best practices\n• Case studies from our client work\n\nIf you have questions about any of our services, please visit our Contact page. We look forward to sharing more with you soon.`,
            zh: `欢迎来到 Noviant 新闻与洞见中心。\n\n我们创建这个空间，是为了让您及时了解企业 IT、托管服务和 AI 基础设施领域的最新动态——一切来自每天与这些技术打交道的团队视角。\n\n您可以在这里期待：\n\n• 公司公告与新服务发布\n• 由我们工程师撰写的深度技术文章\n• 行业洞见与最佳实践\n• 来自客户合作的案例研究\n\n如果您对我们的任何服务有疑问，请访问联系页面。我们期待很快与您分享更多内容。`,
        },
    },
    {
        id: "phunware-partners-with-noviant",
        category: "industry",
        image: "/images/news/phunware-partners.jpg",
        date: {
            en: "May 14, 2020",
            zh: "2020年5月14日",
        },
        title: {
            en: "Phunware Partners with Noviant to Bring Pandemic Response Solutions to Cities",
            zh: "Phunware 与 Noviant 合作，为城市提供疫情应对解决方案",
        },
        excerpt: {
            en: "Phunware ecosystem expansion with Noviant to provide mobile solutions for pandemic response in healthcare and government sectors.",
            zh: "Phunware 与 Noviant 合作扩展生态系统，为医疗和政府部门提供疫情应对移动解决方案。",
        },
        body: {
            en: `Phunware, Inc. (NASDAQ: PHUN), a fully-integrated enterprise cloud platform for mobile that provides products, solutions, data and services for brands worldwide, announced today it has partnered with Noviant to bring Phunware’s Pandemic Response Solutions to cities, health systems and small businesses.\n\nNoviant is a technology consulting and managed services company with a focus on delivering secure and innovative digital infrastructure. Through this partnership, Noviant will offer Phunware’s mobile-first platform to help its clients manage the complexities of the COVID-19 pandemic, including symptom tracking, facility access management, and communication tools for remote teams.`,
            zh: `Phunware, Inc. (NASDAQ: PHUN) 是一家为全球品牌提供产品、解决方案、数据和服务的移动端全集成企业云平台。该公司今天宣布，已与 Noviant 合作，将 Phunware 的疫情应对解决方案带给城市、医疗系统和小型企业。\n\nNoviant 是一家技术咨询和托管服务公司，专注于提供安全且创新的数字基础设施。通过此次合作，Noviant 将提供 Phunware 的 mobile-first 平台，帮助其客户应对 COVID-19 疫情带来的复杂挑战，包括症状追踪、设施准入管理以及远程团队沟通工具。`,
        },
    },
    {
        id: "covid-19-resources",
        category: "company",
        image: "/images/news/covid-resources.jpg",
        date: {
            en: "April 1, 2020",
            zh: "2020年4月1日",
        },
        title: {
            en: "Noviant is Committed to Providing You Updated Resources",
            zh: "Noviant 致力于为您提供最新的资源支持",
        },
        excerpt: {
            en: "Noviant provides critical IT and remote work resources to support businesses during the global pandemic.",
            zh: "Noviant 提供关键的 IT 和远程工作资源，在此全球疫情期间支持企业运营。",
        },
        body: {
            en: `During these uncertain times, Noviant is committed to being your reliable technology partner. We understand the challenges of transitioning to remote work and maintaining system security.\n\nWe have curated a list of resources, from secure VPN setup guides to collaboration tool best practices, to ensure your business remains operational and secure. Our team is available 24/7 to assist with any technical issues and infrastructure adjustments needed to navigate this transition.`,
            zh: `在这些不确定的时期，Noviant 致力于成为您可靠的技术合作伙伴。我们深知向远程办公转型及维持系统安全的挑战。\n\n我们整理了一系列资源，从安全 VPN 设置指南到协作工具最佳实践，以确保您的业务保持运行且安全。我们的团队 24/7 全天候提供服务，协助处理任何技术问题和应对此转型所需的基础设施调整。`,
        },
    },
    {
        id: "notice-to-clients-in-response-to-covid-19",
        category: "company",
        image: "/images/news/notice-clients.jpg",
        date: {
            en: "March 18, 2020",
            zh: "2020年3月18日",
        },
        title: {
            en: "Notice to Our Clients: Service Changes in Response to COVID-19",
            zh: "致客户通知：应对 COVID-19 的服务调整",
        },
        excerpt: {
            en: "An update on how Noviant is adapting its services to prioritize safety while maintaining enterprise support.",
            zh: "关于 Noviant 如何调整服务以在维持企业支持的同时优先考虑安全的更新。",
        },
        body: {
            en: `To prioritize the health of our staff and clients, Noviant is transitioning to fully remote support operations starting March 18, 2020. Our Helpdesk remains fully operational, and we have increased capacity to handle higher volumes of remote access requests.\n\nOn-site visits will be limited to critical infrastructure emergencies only. We are committed to providing the same high level of service you expect from us through our secure remote management tools.`,
            zh: `为优先保障员工和客户的健康，Noviant 将于 2020 年 3 月 18 日起全面转型为远程支持运营。我们的咨询台（Helpdesk）仍全天候运作，并且我们已提升了处理大批量远程访问请求的能力。\n\n现场访问将仅限于关键基础设施紧急情况。我们承诺通过安全远程管理工具，继续为您提供一如既往的高水平服务。`,
        },
    },
    {
        id: "benefits-of-windows-virtual-desktop",
        category: "cloud",
        image: "/images/news/windows-virtual-desktop.jpg",
        date: {
            en: "March 2, 2020",
            zh: "2020年3月2日",
        },
        title: {
            en: "The Benefits of Using Microsoft Azure’s Windows Virtual Desktop",
            zh: "使用 Microsoft Azure Windows 虚拟桌面的优势",
        },
        excerpt: {
            en: "How WVD enables secure, scalable, and remote-friendly computing environments for the modern workforce.",
            zh: "WVD 如何为现代职场提供安全、可扩展且适合远程办公的计算环境。",
        },
        body: {
            en: `Microsoft Azure’s Windows Virtual Desktop (WVD) provides the only multi-session Windows 10 experience, optimized for Office 365 ProPlus. It allows businesses to deploy and scale Windows desktops and apps on Azure in minutes, with built-in security and compliance.\n\nBenefits include reduced hardware costs, unified management, and the ability to access a full desktop experience from any device, anywhere. This is a game-changer for businesses implementing flexible work policies.`,
            zh: `Microsoft Azure 的 Windows 虚拟桌面 (WVD) 提供了唯一的针对 Office 365 ProPlus 优化的多会话 Windows 10 体验。它允许企业数分钟内就在 Azure 上部署并扩展 Windows 桌面和应用，且内置安全性和合规性。\n\n优势包括降低硬件成本、统一管理，以及能够从任何设备、任何地点访问完整的桌面体验。对于实施灵活办公政策的企业来说，这具有划时代的意义。`,
        },
    },
    {
        id: "noviant-certified-for-the-iso-iec-270012013",
        category: "company",
        image: "/images/unsplash/photo-1450101499163-c8848c66ca85.jpg",
        date: {
            en: "October 26, 2019",
            zh: "2019年10月26日",
        },
        title: {
            en: "Noviant certified for the ISO/IEC 27001:2013",
            zh: "Noviant 获得 ISO/IEC 27001:2013 认证",
        },
        excerpt: {
            en: "Noviant achieves global standard for information security management systems.",
            zh: "Noviant 达到信息安全管理体系的国际标准。",
        },
        body: {
            en: `We are proud to announce that Noviant has successfully achieved the ISO/IEC 27001:2013 certification. This internationally recognized standard ensures that our information security management systems are robust and meet the highest security requirements.\n\nThis certification reaffirms our commitment to protecting our clients' data and continuous improvement in our internal security processes.`,
            zh: `我们自豪地宣布，Noviant 已成功获得 ISO/IEC 27001:2013 认证。这一国际认可的标准确保了我们的信息安全管理体系稳健且符合最高安全要求。\n\n该认证再次肯定了我们对保护客户数据的承诺，以及在内部安全流程中持续改进的决心。`,
        },
    },
    {
        id: "noviant-appears-in-nyc-comptrollers-video",
        category: "company",
        image: "/images/news/nyc-video.jpg",
        date: {
            en: "March 1, 2019",
            zh: "2019年3月1日",
        },
        title: {
            en: "Noviant Appears in NYC Comptroller’s Video",
            zh: "Noviant 出现在纽约市审计长的宣传视频中",
        },
        excerpt: {
            en: "Noviant featured by the NYC Comptroller highlighting local technology support for small businesses.",
            zh: "Noviant 被纽约市审计长专题报道，展示对本地小型企业的技术支持。",
        },
        body: {
            en: `Noviant was recently featured in a video produced by the NYC Comptroller’s Office. The video highlights how local businesses in New York City are leveraging technology to grow and thrive.\n\nOur team is honored to represent the tech sector and show our impact on the New York business community through managed services and infrastructure innovation.`,
            zh: `Noviant 最近出现在纽约市审计办制作的视频中。该视频展示了纽约市本地企业如何利用技术实现增长和繁荣。\n\n我们的团队很荣幸能够代表技术领域，通过托管服务和基础设施创新展示我们对纽约商业社区的影响。`,
        },
        videoUrl: "https://www.youtube.com/watch?v=Pnjhu8lz2oQ",
    },
    {
        id: "the-era-of-the-pc-isnt-as-over-as-you-might-think",
        category: "industry",
        image: "/images/news/pc-era.png",
        date: {
            en: "March 1, 2019",
            zh: "2019年3月1日",
        },
        title: {
            en: "The era of the PC isn´t as over as you might think",
            zh: "PC 时代还没像你想象的那样终结",
        },
        excerpt: {
            en: "Why the desktop computer remains a cornerstone of enterprise productivity despite the mobile revolution.",
            zh: "尽管移动革命如火如荼，为什么台式电脑仍是企业生产力的基石。",
        },
        body: {
            en: `Despite the rise of smartphones and tablets, the desktop PC remains the primary workhorse for enterprise environments. High-performance tasks, complex data processing, and ergonomics still favor the traditional PC.\n\nModern infrastructure focuses on how to integrate the PC with cloud services rather than replacing it, ensuring users have the power they need for serious productivity.`,
            zh: `尽管智能手机和平板电脑兴起，台式机仍是企业环境中的主要生产工具。高性能任务、复杂数据处理以及人体工程学依然青睐传统 PC。\n\n现代基础设施侧重于如何将 PC 与云服务集成而非取代它，确保用户拥有重度生产力所需的算力。`,
        },
    },
    {
        id: "windows-8-1-unlikely-to-solve-the-os-problems",
        category: "industry",
        image: "/images/news/windows-8.png",
        date: {
            en: "March 1, 2019",
            zh: "2019年3月1日",
        },
        title: {
            en: "Windows 8.1 unlikely to solve the OS’ problems",
            zh: "Windows 8.1 不太可能解决系统原有的核心问题",
        },
        excerpt: {
            en: "An analytical look at Windows 8.1 and the persistent challenges of hybrid OS design.",
            zh: "对 Windows 8.1 以及混合操作系统设计持续面临的挑战进行的分析。",
        },
        body: {
            en: `While Windows 8.1 addresses some UI complaints from users, the core tension between touch-first design and desktop productivity remains. Businesses are weighing the benefits of upgrading against potential training costs.\n\nAs we look ahead to future iterations, finding a balance between modern tile interfaces and the traditional desktop environment remains Microsoft's biggest challenge.`,
            zh: `虽然 Windows 8.1 解决了一部分用户的 UI 投诉，但触控优先设计与桌面生产力之间的核心张力仍然存在。企业正在权衡升级带来的好处与潜在的培训成本。\n\n展望未来的迭代，在现代磁贴界面与传统桌面环境之间寻找平衡点，仍是微软面临的最大挑战。`,
        },
    },
    {
        id: "avoiding-the-e-mail-crush-following-a-vacation",
        category: "industry",
        image: "/images/news/email-vacation.png",
        date: {
            en: "March 1, 2019",
            zh: "2019年3月1日",
        },
        title: {
            en: "Avoiding the e-mail crush following a vacation",
            zh: "如何避免度假归来后的邮件狂潮",
        },
        excerpt: {
            en: "Practical tips and filtering strategies to manage an overflowing inbox after time off.",
            zh: "度假归来后管理爆满收件箱的实用技巧和过滤策略。",
        },
        body: {
            en: `Coming back from vacation shouldn't be defined by an inbox of 500 unread emails. By implementing advanced filtering rules and scheduling focus time, you can prioritize critical communications over noise.\n\nWe recommend using categories and automated replies to setting expectations for recovery time, allowing you to transition back to work smoothly without the stress.`,
            zh: `度假归来不应被 500 封未读邮件定义的焦虑所笼罩。通过实施高级过滤规则和安排专注时间，您可以优先处理关键沟通，过滤杂音。\n\n我们建议使用类别标签和自动回复来设定恢复工作的预期时间，让您能够轻松顺畅地回归职场。`,
        },
    },
    {
        id: "why-office-mobile-isnt-a-good-investment",
        category: "industry",
        image: "/images/news/office-mobile.png",
        date: {
            en: "March 1, 2019",
            zh: "2019年3月1日",
        },
        title: {
            en: "Why Office Mobile isn’t a good investment",
            zh: "为什么 Office 移动应用并不是一笔好投资",
        },
        excerpt: {
            en: "A critical evaluation of mobile Office suites versus full cloud-sync desktop environments.",
            zh: "对移动版 Office 套件与全云同步桌面环境进行的批判性评估。",
        },
        body: {
            en: `For true productivity, mobile apps are often stripped of essential features. Businesses investing in 'mobile-only' licenses often find users reverting to desktop versions to finish complex tasks.\n\nHybrid cloud environments, where mobile is used for consumption and desktop for creation, remain the most efficient way to deploy Microsoft 365.`,
            zh: `对于真正的生产力而言，移动应用往往被削减了核心功能。投资于“仅限移动端”授权的企业经常发现用户会回到桌面版来完成复杂任务。\n\n混合云环境（移动端用于查看，桌面端用于创作）仍是部署 Microsoft 365 最有效的方式。`,
        },
    },
    {
        id: "theres-another-alternative-for-those-mourning-google-reader",
        category: "industry",
        image: "/images/news/google-reader.png",
        date: {
            en: "March 1, 2019",
            zh: "2019年3月1日",
        },
        title: {
            en: "There’s another alternative for those mourning Google Reader",
            zh: "给那些怀念 Google Reader 的人的另一个选择",
        },
        excerpt: {
            en: "Exploring RSS feed alternatives to stay updated with industry news after Google Reader's shutdown.",
            zh: "在 Google Reader 关闭后，探索 RSS 订阅替代方案以获取行业新闻。",
        },
        body: {
            en: `With Google Reader gone, users are looking for reliable ways to aggregate their technology feeds. Feedly and other specialized aggregators represent the next generation of content consumption.\n\nEffective news monitoring is essential for IT professionals, and choosing the right tool determines how quickly you can respond to emerging trends.`,
            zh: `随着 Google Reader 的消失，用户正在寻找可靠的方式来聚合他们的技术信息订阅。Feedly 和其他专业聚合器代表了内容消费的下一代形式。\n\n有效的新闻监控对 IT 专业人员至关重要，选择正确的工具决定了您应对新兴趋势的速度。`,
        },
    },
    {
        id: "why-tech-less-meetings-should-be-your-goal",
        category: "industry",
        image: "/images/news/techless-meetings.png",
        date: {
            en: "March 1, 2019",
            zh: "2019年3月1日",
        },
        title: {
            en: "Why tech-less meetings should be your goal",
            zh: "为什么“脱离科技”的会议应该是你的目标",
        },
        excerpt: {
            en: "How removing screens from the boardroom can lead to better decision-making and human connection.",
            zh: "减少会议室中的屏幕如何能带来更好的决策和人际沟通。",
        },
        body: {
            en: `Constant notifications and laptops in meetings lead to distracted teams. 'Tech-less' meetings focus on human interaction, whiteboarding, and active listening, leading to more creative outcomes.\n\nWe encourage organizations to designate specific meeting types where devices are deposited at the door to foster absolute focus.`,
            zh: `会议中不断的通知和笔记本电脑会导致团队分心。“脱离科技”的会议专注于人际互动、白板讨论和积极倾听，从而产生更多创意成果。\n\n我们鼓励组织设立特定的会议类型，在这些会议中将设备留在门外，以培养绝对的专注力。`,
        },
    },
];

export function getArticleById(id: string): NewsArticle | undefined {
    return newsArticles.find((a) => a.id === id);
}

export function getAllArticleIds(): string[] {
    return newsArticles.map((a) => a.id);
}
