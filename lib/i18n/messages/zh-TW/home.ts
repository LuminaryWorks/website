export const home = {
  hero: {
    eyebrow: "LUMINARYWORKS · 啟明工坊",
    title: "六個可獨立部署的 AI 產品，一套統一的身分與權益底座",
    lead: "LuminaryWorks（啟明工坊）以 OIDC、MQTT、REST、WebRTC、ONVIF 等開放協定，把創造教育、裝置物聯、資料洞察、視覺安防、遠端維運與 Agent 協作連成一條價值鏈。每個產品都能獨立交付與私有部署，也能按需組合成完整閉環。",
    primaryCta: "查看六大產品",
    secondaryCta: "私有部署",
    docs: "開發者文件",
    diagramAria:
      "控制面與產品面結構示意圖。上層為可選共用的控制面：Identity（OIDC）、Entitlement，以及標記為 lab 的 AI Gateway。下層為六個產品面，各自擁有資料庫與 ACL。控制面到產品面的連線為虛線，代表可選依賴。",
    controlPlane: "CONTROL PLANE",
    controlNote: "可選共用",
    productPlanes: "PRODUCT PLANES",
    productNote: "各自資料庫與 ACL",
    identity: "Identity",
    identityProto: "OIDC",
    entitlement: "Entitlement",
    aiGateway: "AI Gateway",
    lab: "lab",
  },
  facts: {
    items: [
      { value: "6", label: "獨立可販售產品" },
      { value: "5", label: "凍結部署形態" },
      { value: "1", label: "套統一登入與權益" },
      { value: "5", label: "類開放協定" },
      { value: "NC", label: "Polyform 非商業開源" },
    ],
  },
  valueChain: {
    index: "02",
    label: "VALUE CHAIN",
    title: "六個產品，回答同一條價值鏈的不同環節",
    lead: "學 + 創起步，接入裝置、洞察資料，延伸到視覺安防、遠端維運，最後由 Agent 與人類共同結算。",
    diagramAria:
      "價值鏈：學加創從 BlockyEdu 起步，連接到 SyncroBrain，由 DataLuminary 看資料；視 VistaCast 與控 VistaRemote 從主鏈分出，匯入賺 DoerFlow。點擊節點可捲動到對應產品卡。",
  },
  products: {
    index: "03",
    label: "PRODUCTS",
    title: "每個產品可獨立販售，組合後形成閉環",
  },
  platform: {
    index: "04",
    label: "PLATFORM",
    title: "統一的不是業務，而是身分、權益與協定",
    lab: "lab",
    cards: [
      {
        id: "identity",
        title: "統一登入 Identity",
        body: "一套 OIDC 登入服務承載六個品牌，各產品保留自己的 Logo 與文案",
        tags: ["Logto", "OIDC", "PKCE"],
        lab: false,
      },
      {
        id: "entitlement",
        title: "中央權益 Entitlement",
        body: "方案、Trial、License、席次與付款集中管理；商業權益不進 JWT",
        tags: ["NestJS", "PostgreSQL"],
        lab: false,
      },
      {
        id: "pal",
        title: "資源權限 PAL",
        body: "資源級 ACL 留在各產品，permissions 隨資源下發",
        tags: ["Casbin", "PAL"],
        lab: false,
      },
      {
        id: "aiGateway",
        title: "AI 閘道",
        body: "多供應商模型接入、金鑰保險庫與用量計量（目前為 lab，不進生產）",
        tags: ["lab", "BYOK"],
        lab: true,
      },
      {
        id: "notification",
        title: "通知",
        body: "共用郵件與通知模組，統一寄件身分",
        tags: ["@luminaryworks/notification"],
        lab: false,
      },
      {
        id: "sharedLibs",
        title: "共用套件",
        body: "身分、權限、權益用戶端與工具鏈以 npm 套件散發，不做跨儲存庫原始碼引用",
        tags: ["@luminaryworks/*"],
        lab: false,
      },
    ],
    calloutLabel: "統一錯誤語意",
    calloutCodes: "401 身分 · 402 權益 · 403 資源 ACL",
    emphasis:
      "每個產品獨占自己的資料庫、遷移、Casbin 政策與發布節奏；兄弟產品全部關閉時仍能啟動並通過 ready 檢查。",
  },
  deployment: {
    index: "05",
    label: "DEPLOYMENT",
    title: "從單品獨立交付，到斷網內網閉環",
    headers: {
      profile: "profile",
      meaning: "含義",
      composition: "最小組成",
    },
    profiles: [
      {
        name: "standalone",
        meaning: "單一產品獨立部署與販售",
        composition: "1 個產品 plane + 自有資料庫",
      },
      {
        name: "control-plane",
        meaning: "只部署共用控制面",
        composition: "Identity（+ Auth Gateway）+ Entitlement",
      },
      {
        name: "agent-commerce",
        meaning: "基礎組合閉環",
        composition: "VistaCast + SyncroBrain + DoerFlow",
      },
      {
        name: "smart-site",
        meaning: "上層完整閉環（疊加而非取代）",
        composition: "前者 + VistaRemote + DataLuminary（+ BlockyEdu 訓練入口）",
      },
      {
        name: "air-gapped",
        meaning: "斷網 / 內網交付",
        composition: "單品或組合，無對外連線；離線 License、本地 BYOK",
      },
    ],
    modes:
      "identity=central|external_oidc|local · entitlement=off|shadow_read|enforce|offline_license · ai=off|central|local_byok · notification=none|smtp",
    cta: "查看部署方案",
  },
  why: {
    index: "06",
    label: "WHY",
    title: "為什麼是工坊",
    items: [
      {
        title: "開放協定優先",
        body: "整合一律走 OIDC / HTTP / MQTT / 事件，禁止跨產品 runtime import，降低鎖定與移轉成本。",
      },
      {
        title: "業務隔離，身分統一",
        body: "各產品獨占資料庫與資源 ACL；登入與商業權益中央化，體驗一致但故障不連鎖。",
      },
      {
        title: "私有部署是一等公民",
        body: "客戶自有 IdP、離線 License、本地 BYOK 與 air-gapped 從規格階段就存在，而非事後補丁。",
      },
      {
        title: "成熟度誠實標註",
        body: "文件與官網區分 production / pilot / lab / stub，已寫完程式不等於已上線。",
      },
    ],
  },
  cta: {
    index: "07",
    label: "CTA",
    title: "先跑起來，再決定怎麼買",
    lead: "適用產品提供 7 天 Trial；生態不提供永久免費方案。需要私有部署或離線交付，請直接聯絡工坊。",
    startTrial: "開始試用",
    contact: "聯絡商務",
    github: "GitHub",
  },
};
