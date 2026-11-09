export const home = {
  hero: {
    eyebrow: "LUMINARYWORKS · PLATFORM",
    title: "AI SaaS 基礎服務平台",
    lead: "平台提供統一帳號、帳單與權益、AI 閘道、通知與共享標準；產品可獨立交付，也可串聯使用。",
    leadSecondary: "六款產品已在本平台完成商業落地驗證，並形成一條價值合作鏈。",
    primaryCta: "查看產品",
    secondaryCta: "私有部署",
    docs: "開發者文件",
    diagramAria:
      "控制面與合作產品面的結構示意圖。上層是可選的共享控制面：Identity（OIDC）、Entitlement，以及 AI Gateway。下層是合作產品面，各自擁有資料庫與 ACL。虛線表示依賴可選。",
    controlPlane: "CONTROL PLANE",
    controlNote: "可選共用",
    productPlanes: "PRODUCT PLANES",
    productNote: "可獨立交付",
    identity: "Identity",
    identityProto: "OIDC",
    entitlement: "Entitlement",
    aiGateway: "AI Gateway",
    lab: "",
  },
    facts: {
    items: [
      { value: "六款產品", label: "商業落地已驗證" },
      { value: "一套底座", label: "登入 · 帳單 · AI 閘道" },
      { value: "五種部署", label: "單品到斷網內網" },
      { value: "開源許可", label: "Polyform 非商業" },
    ],
  },
  valueChain: {
    index: "02",
    label: "VALUE CHAIN",
    title: "我們已經形成一條價值合作鏈",
    lead: "從創造與學習，到裝置接入與資料洞察，再到視覺安防與遠端維運，最後由 Agent 與人完成結算。六款產品各自可獨立交付，串聯後覆蓋完整閉環。",
    diagramAria:
      "價值鏈：學加創從 BlockyEdu 起步，連接到 SyncroBrain，由 DataLuminary 看資料；視 VistaCast 與控 VistaRemote 從主鏈分出，匯入賺 DoerFlow。點擊節點可捲動到對應產品卡。",
  },
  products: {
    index: "03",
    label: "PRODUCTS",
    title: "六款產品，各自可獨立交付",
  },
  platform: {
    index: "04",
    label: "PLATFORM",
    title: "統一的不是業務，而是身分、權益與協定",
    lab: "",
    cards: [
      {
        id: "identity",
        title: "統一登入 Identity",
        body: "一套 OIDC 登入服務供產品接入；各產品保留自己的 Logo 與文案",
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
        body: "多供應商模型接入、金鑰保險庫與用量計量",
        tags: ["BYOK"],
        lab: false,
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
    title: "為什麼是平台",
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
        body: "文件與官網區分 production / pilot / stub，已寫完程式不等於已上線。",
      },
    ],
  },
  cta: {
    index: "07",
    label: "CTA",
    title: "先跑起來，再決定怎麼買",
    lead: "合作產品若提供 Trial，符合條件的產品含 7 天試用。沒有永久免費方案。私有化交付或希望成為合作夥伴，請寄信給平台。",
    startTrial: "開始試用",
    contact: "聯絡商務",
    github: "GitHub",
  },
};
