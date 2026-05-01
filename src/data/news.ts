/**
 * news.ts — Noviant News Articles Data File
 * ==========================================
 * To add or edit a news article, modify this array.
 * Each article supports English (en), Simplified Chinese (zh-CN), and Traditional Chinese (zh-TW) content.
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
    date: { en: string; "zh-CN": string; "zh-TW": string };
    title: { en: string; "zh-CN": string; "zh-TW": string };
    excerpt: { en: string; "zh-CN": string; "zh-TW": string };
    body: { en: string; "zh-CN": string; "zh-TW": string };
    videoUrl?: string;
}

export const newsArticles: NewsArticle[] = [
    {
        id: "welcome-to-noviant-news",
        category: "company",
        image: "/images/unsplash/photo-1551434678-e076c223a692.jpg",
        date: {
            en: "April 2, 2026",
            "zh-CN": "2026年4月2日",
            "zh-TW": "2026年4月2日",
        },
        title: {
            en: "Welcome to Noviant News — Your Source for IT Insights",
            "zh-CN": "欢迎来到 Noviant 新闻中心——您的 IT 洞见来源",
            "zh-TW": "歡迎來到 Noviant 新聞中心——您的 IT 洞見來源",
        },
        excerpt: {
            en: "This is Noviant's official news center. We will share technology updates, company announcements, and industry insights here. Stay tuned.",
            "zh-CN": "这里是 Noviant 的官方新闻中心。我们将在此分享技术动态、公司公告以及行业洞见，敬请关注。",
            "zh-TW": "這裡是 Noviant 的官方新聞中心。我們將在此分享技術動態、公司公告以及行業洞見，敬請關注。",
        },
        body: {
            en: `Welcome to the Noviant News & Insights hub.\n\nWe created this space to keep you informed about the latest developments in enterprise IT, managed services, and AI infrastructure — all from the perspective of a team that works with these technologies every day.\n\nWhat to expect here:\n\n• Company announcements and new service launches\n• Technology deep-dives written by our engineers\n• Industry insights and best practices\n• Case studies from our client work\n\nIf you have questions about any of our services, please visit our Contact page. We look forward to sharing more with you soon.`,
            "zh-CN": `欢迎来到 Noviant 新闻与洞见中心。\n\n我们创建这个空间，是为了让您及时了解企业 IT、托管服务和 AI 基础设施领域的最新动态——一切来自每天与这些技术打交道的团队视角。\n\n您可以在这里期待：\n\n• 公司公告与新服务发布\n• 由我们工程师撰写的深度技术文章\n• 行业洞见与最佳实践\n• 来自客户合作的案例研究\n\n如果您对我们的任何服务有疑问，请访问联系页面。我们期待很快与您分享更多内容。`,
            "zh-TW": `歡迎來到 Noviant 新聞與洞見中心。\n\n我們創建這個空間，是為了讓您及時了解企業 IT、託管服務和 AI 基礎設施領域的最新動態——一切來自每天與這些技術打交道的團隊視角。\n\n您可以在這裡期待：\n\n• 公司公告與新服務發布\n• 由我們工程師撰寫的深度技術文章\n• 行業洞見與最佳實踐\n• 來自客戶合作的案例研究\n\n如果您對我們的任何服務有疑問，請訪問聯繫頁面。我們期待很快與您分享更多內容。`,
        },
    },
    {
        id: "phunware-partners-with-noviant",
        category: "industry",
        image: "/images/news/phunware-partners.jpg",
        date: {
            en: "May 14, 2020",
            "zh-CN": "2020年5月14日",
            "zh-TW": "2020年5月14日",
        },
        title: {
            en: "Phunware Partners with Noviant to Bring Pandemic Response Solutions to Cities",
            "zh-CN": "Phunware 与 Noviant 合作，为城市提供疫情应对解决方案",
            "zh-TW": "Phunware 與 Noviant 合作，為城市提供疫情應對解決方案",
        },
        excerpt: {
            en: "Phunware ecosystem expansion with Noviant to provide mobile solutions for pandemic response in healthcare and government sectors.",
            "zh-CN": "Phunware 与 Noviant 合作扩展生态系统，为医疗和政府部门提供疫情应对移动解决方案。",
            "zh-TW": "Phunware 與 Noviant 合作擴展生態系統，為醫療和政府部門提供疫情應對移動解決方案。",
        },
        body: {
            en: `Phunware, Inc. (NASDAQ: PHUN), a fully-integrated enterprise cloud platform for mobile that provides products, solutions, data and services for brands worldwide, announced today it has partnered with Noviant to bring Phunware’s Pandemic Response Solutions to cities, health systems and small businesses.\n\nNoviant is a technology consulting and managed services company with a focus on delivering secure and innovative digital infrastructure. Through this partnership, Noviant will offer Phunware’s mobile-first platform to help its clients manage the complexities of the COVID-19 pandemic, including symptom tracking, facility access management, and communication tools for remote teams.`,
            "zh-CN": `Phunware, Inc. (NASDAQ: PHUN) 是一家为全球品牌提供产品、解决方案、数据和服务的移动端全集成企业云平台。该公司今天宣布，已与 Noviant 合作，将 Phunware 的疫情应对解决方案带给城市、医疗系统和小型企业。\n\nNoviant 是一家技术咨询和托管服务公司，专注于提供安全且创新的数字基础设施。通过此次合作，Noviant 将提供 Phunware 的 mobile-first 平台，帮助其客户应对 COVID-19 疫情带来的复杂挑战，包括症状追踪、设施准入管理以及远程团队沟通工具。`,
            "zh-TW": `Phunware, Inc. (NASDAQ: PHUN) 是一家為全球品牌提供產品、解決方案、數據和服務的移動端全集成企業雲端平台。該公司今天宣布，已與 Noviant 合作，將 Phunware 的疫情應對解決方案帶給城市、醫療系統和小型企業。\n\nNoviant 是一家技術諮詢和託管服務公司，專注於提供安全且創新的數位基礎設施。通過此次合作，Noviant 將提供 Phunware 的 mobile-first 平台，幫助其客戶應對 COVID-19 疫情帶來的複雜挑戰，包括症狀追踪、設施准入管理以及遠程團隊溝通工具。`,
        },
    },
    {
        id: "covid-19-resources",
        category: "company",
        image: "/images/news/covid-resources.jpg",
        date: {
            en: "April 1, 2020",
            "zh-CN": "2020年4月1日",
            "zh-TW": "2020年4月1日",
        },
        title: {
            en: "Noviant is Committed to Providing You Updated Resources",
            "zh-CN": "Noviant 致力于为您提供最新的资源支持",
            "zh-TW": "Noviant 致力於為您提供最新的資源支持",
        },
        excerpt: {
            en: "Noviant provides critical IT and remote work resources to support businesses during the global pandemic.",
            "zh-CN": "Noviant 提供关键的 IT 和远程工作资源，在此全球疫情期间支持企业运营。",
            "zh-TW": "Noviant 提供關鍵的 IT 和遠程工作資源，在此全球疫情期間支持企業運營。",
        },
        body: {
            en: `During these uncertain times, Noviant is committed to being your reliable technology partner. We understand the challenges of transitioning to remote work and maintaining system security.\n\nWe have curated a list of resources, from secure VPN setup guides to collaboration tool best practices, to ensure your business remains operational and secure. Our team is available 24/7 to assist with any technical issues and infrastructure adjustments needed to navigate this transition.`,
            "zh-CN": `在这些不确定的时期，Noviant 致力于成为您可靠的技术合作伙伴。我们深知向远程办公转型及维持系统安全的挑战。\n\n我们整理了一系列资源，从安全 VPN 设置指南到协作工具最佳实践，以确保您的业务保持运行且安全。我们的团队 24/7 全天候提供服务，协助处理任何技术问题和应对此转型所需的基础设施调整。`,
            "zh-TW": `在這些不確定的時期，Noviant 致力於成為您可靠的技術合作伙伴。我們深知向遠程辦公轉型及維持系統安全的挑戰。\n\n我們整理了一系列資源，從安全 VPN 設置指南到協作工具最佳實踐，以確保您的業務保持運行且安全。我們的團隊 24/7 全天候提供服務，協助處理任何技術問題和應對此轉型所需的基礎設施調整。`,
        },
    },
    {
        id: "notice-to-clients-in-response-to-covid-19",
        category: "company",
        image: "/images/news/notice-clients.jpg",
        date: {
            en: "March 18, 2020",
            "zh-CN": "2020年3月18日",
            "zh-TW": "2020年3月18日",
        },
        title: {
            en: "Notice to Our Clients: Service Changes in Response to COVID-19",
            "zh-CN": "致客户通知：应对 COVID-19 的服务调整",
            "zh-TW": "致客戶通知：應對 COVID-19 的服務調整",
        },
        excerpt: {
            en: "An update on how Noviant is adapting its services to prioritize safety while maintaining enterprise support.",
            "zh-CN": "关于 Noviant 如何调整服务以在维持企业支持的同时优先考虑安全的更新。",
            "zh-TW": "關於 Noviant 如何調整服務以在維持企業支持的同時優先考慮安全的更新。",
        },
        body: {
            en: `To prioritize the health of our staff and clients, Noviant is transitioning to fully remote support operations starting March 18, 2020. Our Helpdesk remains fully operational, and we have increased capacity to handle higher volumes of remote access requests.\n\nOn-site visits will be limited to critical infrastructure emergencies only. We are committed to providing the same high level of service you expect from us through our secure remote management tools.`,
            "zh-CN": `为优先保障员工和客户的健康，Noviant 将于 2020 年 3 月 18 日起全面转型为远程支持运营。我们的咨询台（Helpdesk）仍全天候运作，并且我们已提升了处理大批量远程访问请求的能力。\n\n现场访问将仅限于关键基础设施紧急情况。我们承诺通过安全远程管理工具，继续为您提供一如既往的高水平服务。`,
            "zh-TW": `為優先保障員工和客戶的健康，Noviant 將於 2020 年 3 月 18 日起全面轉型為遠程支持運營。我們的諮詢台（Helpdesk）仍全天候運作，並且我們已提升了處理大批量遠程訪問請求的能力。\n\n現場訪問將僅限於關鍵基礎設施緊急情況。我們承諾通過安全遠程管理工具，繼續為您提供一如既往的高水平服務。`,
        },
    },
    {
        id: "benefits-of-windows-virtual-desktop",
        category: "cloud",
        image: "/images/news/windows-virtual-desktop.jpg",
        date: {
            en: "March 2, 2020",
            "zh-CN": "2020年3月2日",
            "zh-TW": "2020年3月2日",
        },
        title: {
            en: "The Benefits of Using Microsoft Azure’s Windows Virtual Desktop",
            "zh-CN": "使用 Microsoft Azure Windows 虚拟桌面的优势",
            "zh-TW": "使用 Microsoft Azure Windows 虛擬桌面的優勢",
        },
        excerpt: {
            en: "How WVD enables secure, scalable, and remote-friendly computing environments for the modern workforce.",
            "zh-CN": "WVD 如何为现代职场提供安全、可扩展且适合远程办公的计算环境。",
            "zh-TW": "WVD 如何為現代職場提供安全、可擴展且適合遠程辦公的計算環境。",
        },
        body: {
            en: `Microsoft Azure’s Windows Virtual Desktop (WVD) provides the only multi-session Windows 10 experience, optimized for Office 365 ProPlus. It allows businesses to deploy and scale Windows desktops and apps on Azure in minutes, with built-in security and compliance.\n\nBenefits include reduced hardware costs, unified management, and the ability to access a full desktop experience from any device, anywhere. This is a game-changer for businesses implementing flexible work policies.`,
            "zh-CN": `Microsoft Azure 的 Windows 虚拟桌面 (WVD) 提供了唯一的针对 Office 365 ProPlus 优化的多会话 Windows 10 体验。它允许企业数分钟内就在 Azure 上部署并扩展 Windows 桌面和应用，且内置安全性和合规性。\n\n优势包括降低硬件成本、统一管理，以及能够从任何设备、任何地点访问完整的桌面体验。对于实施灵活办公政策的企业来说，这具有划时代的意义。`,
            "zh-TW": `Microsoft Azure 的 Windows 虛擬桌面 (WVD) 提供了唯一的針對 Office 365 ProPlus 優化的多會話 Windows 10 體驗。它允許企業數分鐘內就在 Azure 上部署並擴展 Windows 桌面和應用，且內置安全性和合規性。\n\n優勢包括降低硬體成本、統一管理，以及能夠從任何設備、任何地點訪問完整的桌面體驗。對於實施靈活辦公政策企業來說，這具有劃時代的意義。`,
        },
    },
    {
        id: "noviant-certified-for-the-iso-iec-270012013",
        category: "company",
        image: "/images/unsplash/photo-1450101499163-c8848c66ca85.jpg",
        date: {
            en: "October 26, 2019",
            "zh-CN": "2019年10月26日",
            "zh-TW": "2019年10月26日",
        },
        title: {
            en: "Noviant certified for the ISO/IEC 27001:2013",
            "zh-CN": "Noviant 获得 ISO/IEC 27001:2013 认证",
            "zh-TW": "Noviant 獲得 ISO/IEC 27001:2013 認證",
        },
        excerpt: {
            en: "Noviant achieves global standard for information security management systems.",
            "zh-CN": "Noviant 达到信息安全管理体系的国际标准。",
            "zh-TW": "Noviant 達到信息安全管理體系的國際標準。",
        },
        body: {
            en: `We are proud to announce that Noviant has successfully achieved the ISO/IEC 27001:2013 certification. This internationally recognized standard ensures that our information security management systems are robust and meet the highest security requirements.\n\nThis certification reaffirms our commitment to protecting our clients' data and continuous improvement in our internal security processes.`,
            "zh-CN": `我们自豪地宣布，Noviant 已成功获得 ISO/IEC 27001:2013 认证。这一国际认可的标准确保了我们的信息安全管理体系稳健且符合最高安全要求。\n\n该认证再次肯定了我们对保护客户数据的承诺，以及在内部安全流程中持续改进的决心。`,
            "zh-TW": `我們自豪地宣布，Noviant 已成功獲得 ISO/IEC 27001:2013 認證。這一國際認可的標準確保了我們的信息安全管理體系穩健且符合最高安全要求。\n\n該認證再次肯定了我們對保護客戶數據的承諾，以及在內部安全流程中持續改進的決心。`,
        },
    },
    {
        id: "noviant-appears-in-nyc-comptrollers-video",
        category: "company",
        image: "/images/news/nyc-video.jpg",
        date: {
            en: "March 1, 2019",
            "zh-CN": "2019年3月1日",
            "zh-TW": "2019年3月1日",
        },
        title: {
            en: "Noviant Appears in NYC Comptroller’s Video",
            "zh-CN": "Noviant 出现在纽约市审计长的宣传视频中",
            "zh-TW": "Noviant 出現在紐約市審計長的宣傳視頻中",
        },
        excerpt: {
            en: "Noviant featured by the NYC Comptroller highlighting local technology support for small businesses.",
            "zh-CN": "Noviant 被纽约市审计长专题报道，展示对本地小型企业的技术支持。",
            "zh-TW": "Noviant 被紐約市審計長專題報導，展示對本地小型企業的技術支持。",
        },
        body: {
            en: `Noviant was recently featured in a video produced by the NYC Comptroller’s Office. The video highlights how local businesses in New York City are leveraging technology to grow and thrive.\n\nOur team is honored to represent the tech sector and show our impact on the New York business community through managed services and infrastructure innovation.`,
            "zh-CN": `Noviant 最近出现在纽约市审计办制作的视频中。该视频展示了纽约市本地企业如何利用技术实现增长和繁荣。\n\n我们的团队很荣幸能够代表技术领域，通过托管服务和基础设施创新展示我们对纽约商业社区的影响。`,
            "zh-TW": `Noviant 最近出現在紐約市審計辦製作的視頻中。該視頻展示了紐約市本地企業如何利用技術實現增長和繁榮。\n\n我們的團隊很榮幸能夠代表技術領域，通過託管服務和基礎設施創新展示我們對紐約商業社區的影響。`,
        },
        videoUrl: "https://www.youtube.com/watch?v=Pnjhu8lz2oQ",
    },
    {
        id: "the-era-of-the-pc-isnt-as-over-as-you-might-think",
        category: "industry",
        image: "/images/news/pc-era.png",
        date: {
            en: "March 1, 2019",
            "zh-CN": "2019年3月1日",
            "zh-TW": "2019年3月1日",
        },
        title: {
            en: "The era of the PC isn´t as over as you might think",
            "zh-CN": "PC 时代还没像你想象的那样终结",
            "zh-TW": "PC 時代還沒像你想象的那樣終結",
        },
        excerpt: {
            en: "Why the desktop computer remains a cornerstone of enterprise productivity despite the mobile revolution.",
            "zh-CN": "尽管移动革命如火如荼，为什么台式电脑仍是企业生产力的基石。",
            "zh-TW": "儘管移動革命如火如荼，為什麼台式電腦仍是企業生產力的基石。",
        },
        body: {
            en: `Despite the rise of smartphones and tablets, the desktop PC remains the primary workhorse for enterprise environments. High-performance tasks, complex data processing, and ergonomics still favor the traditional PC.\n\nModern infrastructure focuses on how to integrate the PC with cloud services rather than replacing it, ensuring users have the power they need for serious productivity.`,
            "zh-CN": `尽管智能手机和平板电脑兴起，台式机仍是企业环境中的主要生产工具。高性能任务、复杂数据处理以及人体工程学依然青睐传统 PC。\n\n现代基础设施侧重于如何将 PC 与云服务集成而非取代它，确保用户拥有重度生产力所需的算力。`,
            "zh-TW": `儘管智能手機和平板電腦興起，台式機仍是企業環境中的主要生產工具。高性能任務、複雜數據處理以及人體工程學依然青睞傳統 PC。\n\n現代基礎設施側重於如何將 PC 與雲端服務集成而非取代它，確保用戶擁有重度生產力所需的算力。`,
        },
    },
    {
        id: "windows-8-1-unlikely-to-solve-the-os-problems",
        category: "industry",
        image: "/images/news/windows-8.png",
        date: {
            en: "March 1, 2019",
            "zh-CN": "2019年3月1日",
            "zh-TW": "2019年3月1日",
        },
        title: {
            en: "Windows 8.1 unlikely to solve the OS’ problems",
            "zh-CN": "Windows 8.1 不太可能解决系统原有的核心问题",
            "zh-TW": "Windows 8.1 不太可能解決系統原有的核心問題",
        },
        excerpt: {
            en: "An analytical look at Windows 8.1 and the persistent challenges of hybrid OS design.",
            "zh-CN": "对 Windows 8.1 以及混合操作系统设计持续面临的挑战进行的分析。",
            "zh-TW": "對 Windows 8.1 以及混合操作系統設計持續面臨的挑戰進行的分析。",
        },
        body: {
            en: `While Windows 8.1 addresses some UI complaints from users, the core tension between touch-first design and desktop productivity remains. Businesses are weighing the benefits of upgrading against potential training costs.\n\nAs we look ahead to future iterations, finding a balance between modern tile interfaces and the traditional desktop environment remains Microsoft's biggest challenge.`,
            "zh-CN": `虽然 Windows 8.1 解决了一部分用户的 UI 投诉，但触控优先设计与桌面生产力之间的核心张力仍然存在。企业正在权衡升级带来的好处与潜在的培训成本。\n\n展望未来的迭代，在现代磁贴界面与传统桌面环境之间寻找平衡点，仍是微软面临的最大挑战。`,
            "zh-TW": `雖然 Windows 8.1 解決了一部分用戶的 UI 投訴，但觸控優先設計與桌面生產力之間的核心張力仍然存在。企業正在權衡升級帶來的好處與潛在的培訓成本。\n\n展望未來迭代，在現代磁貼界面與傳統桌面環境之間尋找平衡點，仍是微軟面臨的最大挑戰。`,
        },
    },
    {
        id: "avoiding-the-e-mail-crush-following-a-vacation",
        category: "industry",
        image: "/images/news/email-vacation.png",
        date: {
            en: "March 1, 2019",
            "zh-CN": "2019年3月1日",
            "zh-TW": "2019年3月1日",
        },
        title: {
            en: "Avoiding the e-mail crush following a vacation",
            "zh-CN": "如何避免度假归来后的邮件狂潮",
            "zh-TW": "如何避免度假歸來後的郵件狂潮",
        },
        excerpt: {
            en: "Practical tips and filtering strategies to manage an overflowing inbox after time off.",
            "zh-CN": "度假归来后管理爆满收件箱的实用技巧和过滤策略。",
            "zh-TW": "度假歸來後管理爆滿收件箱的實用技巧和過濾策略。",
        },
        body: {
            en: `Coming back from vacation shouldn't be defined by an inbox of 500 unread emails. By implementing advanced filtering rules and scheduling focus time, you can prioritize critical communications over noise.\n\nWe recommend using categories and automated replies to setting expectations for recovery time, allowing you to transition back to work smoothly without the stress.`,
            "zh-CN": `度假归来不应被 500 封未读邮件定义的焦虑所笼罩。通过实施高级过滤规则和安排专注时间，您可以优先处理关键沟通，过滤杂音。\n\n我们建议使用类别标签和自动回复来设定恢复工作的预期时间，让您能够轻松顺畅地回归职场。`,
            "zh-TW": `度假歸來不應被 500 封未讀郵件定義的焦慮所籠罩。通過實施高級過濾規則和安排專注時間，您可以優先處理關鍵溝通，過濾雜音。\n\n我們建議使用類別標籤和自動回覆來設定恢復工作的預期時間，讓您能夠輕鬆順暢地回歸職場。`,
        },
    },
    {
        id: "why-office-mobile-isnt-a-good-investment",
        category: "industry",
        image: "/images/news/office-mobile.png",
        date: {
            en: "March 1, 2019",
            "zh-CN": "2019年3月1日",
            "zh-TW": "2019年3月1日",
        },
        title: {
            en: "Why Office Mobile isn’t a good investment",
            "zh-CN": "为什么 Office 移动应用并不是一笔好投资",
            "zh-TW": "為什麼 Office 移動應用並不是一筆好投資",
        },
        excerpt: {
            en: "A critical evaluation of mobile Office suites versus full cloud-sync desktop environments.",
            "zh-CN": "对 mobile 版 Office 套件与全云同步桌面环境进行的批判性评估。",
            "zh-TW": "對行動版 Office 套件與全雲端同步桌面環境進行的批判性評估。",
        },
        body: {
            en: `For true productivity, mobile apps are often stripped of essential features. Businesses investing in 'mobile-only' licenses often find users reverting to desktop versions to finish complex tasks.\n\nHybrid cloud environments, where mobile is used for consumption and desktop for creation, remain the most efficient way to deploy Microsoft 365.`,
            "zh-CN": `对于真正的生产力而言，移动应用往往被削减了核心功能。投资于“仅限移动端”授权的企业经常发现用户会回到桌面版来完成复杂任务。\n\n混合云环境（移动端用于查看，桌面端用于创作）仍是部署 Microsoft 365 最有效的方式。`,
            "zh-TW": `對於真正的生產力而言，行動應用往往被削減了核心功能。投資於“僅限行動端”授權的企業經常發現用戶會回到桌面版來完成複雜任務。\n\n混合雲端環境（行動端用於查看，桌面端用於創作）仍是部署 Microsoft 365 最有效的方式。`,
        },
    },
    {
        id: "theres-another-alternative-for-those-mourning-google-reader",
        category: "industry",
        image: "/images/news/google-reader.png",
        date: {
            en: "March 1, 2019",
            "zh-CN": "2019年3月1日",
            "zh-TW": "2019年3月1日",
        },
        title: {
            en: "There’s another alternative for those mourning Google Reader",
            "zh-CN": "给那些怀念 Google Reader 的人的另一个选择",
            "zh-TW": "給那些懷念 Google Reader 的人的另一個選擇",
        },
        excerpt: {
            en: "Exploring RSS feed alternatives to stay updated with industry news after Google Reader's shutdown.",
            "zh-CN": "在 Google Reader 关闭后，探索 RSS 订阅替代方案以获取行业新闻。",
            "zh-TW": "在 Google Reader 關閉後，探索 RSS 訂閱替代方案以獲取行業新聞。",
        },
        body: {
            en: `With Google Reader gone, users are looking for reliable ways to aggregate their technology feeds. Feedly and other specialized aggregators represent the next generation of content consumption.\n\nEffective news monitoring is essential for IT professionals, and choosing the right tool determines how quickly you can respond to emerging trends.`,
            "zh-CN": `随着 Google Reader 的消失，用户正在寻找可靠的方式来聚合他们的技术信息订阅。Feedly 和其他专业聚合器代表了内容消费的下一代形式。\n\n有效的新闻监控对 IT 专业人员至关重要，选择正确的工具决定了您应对新兴趋势的速度。`,
            "zh-TW": `隨著 Google Reader 的消失，用戶正在尋找可靠的方式來聚合他們的技術信息訂閱。Feedly 和其他專業聚合器代表了內容消費的下一代形式。\n\n有效的新聞監控對 IT 專業人員至關重要，選擇正確的工具決定了您應對新興趨勢的速度。`,
        },
    },
    {
        id: "why-tech-less-meetings-should-be-your-goal",
        category: "industry",
        image: "/images/news/techless-meetings.png",
        date: {
            en: "March 1, 2019",
            "zh-CN": "2019年3月1日",
            "zh-TW": "2019年3月1日",
        },
        title: {
            en: "Why tech-less meetings should be your goal",
            "zh-CN": "为什么“脱离科技”的会议应该是你的目标",
            "zh-TW": "為什麼“脫離科技”的會議應該是你的目標",
        },
        excerpt: {
            en: "How removing screens from the boardroom can lead to better decision-making and human connection.",
            "zh-CN": "减少会议室中的屏幕如何能带来更好的决策和人际沟通。",
            "zh-TW": "減少會議室中的屏幕如何能帶來更好的決策和人際溝通。",
        },
        body: {
            en: `Constant notifications and laptops in meetings lead to distracted teams. 'Tech-less' meetings focus on human interaction, whiteboarding, and active listening, leading to more creative outcomes.\n\nWe encourage organizations to designate specific meeting types where devices are deposited at the door to foster absolute focus.`,
            "zh-CN": `会议中不断的通知和笔记本电脑会导致团队分心。“脱离科技”的会议专注于人际互动、白板讨论和积极倾听，从而产生更多创意成果。\n\n我们鼓励组织设立特定的会议类型，在这些会议中将设备留在门外，以培养绝对的专注力。`,
            "zh-TW": `會議中不斷的通知和筆記型電腦會導致團隊分心。“脫離科技”的會議專注於人際互動、白板討論和積極傾聽，從而產生更多創意成果。\n\n我們鼓勵組織設立特定的會議類型，在這些會議中將設備留在門外，以培養絕對的專注力。`,
        },
    },
];

export function getArticleById(id: string): NewsArticle | undefined {
    return newsArticles.find((a) => a.id === id);
}

export function getAllArticleIds(): string[] {
    return newsArticles.map((a) => a.id);
}
