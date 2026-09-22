export const deploy = {
  page: {
    index: "01",
    label: "DEPLOYMENT",
    title: "部署與私有部署",
    lead: "從單品獨立交付到斷網內網閉環——五種凍結形態與能力模式矩陣，同時支撐 Hosted 與私有部署兩條商業路徑。",
  },
  profiles: {
    index: "02",
    label: "PROFILES",
    title: "五種部署形態",
    lead: "情境包只編排多個獨立 Compose project，不把六個產品合併成一個 project。",
    headers: {
      profile: "profile",
      meaning: "含義",
      minimum: "最小組成",
      modes: "允許的能力模式",
    },
    rows: [
      {
        profile: "standalone",
        meaning: "單一產品獨立部署與販售",
        minimum: "1 個產品 plane + 自有資料庫",
        modes: "identity 任意；entitlement 建議 off / offline_license；ai=off|local_byok",
      },
      {
        profile: "control-plane",
        meaning: "只部署共用控制面",
        minimum: "Identity（+ Auth Gateway）+ Entitlement",
        modes: "必須宣告 services.identity",
      },
      {
        profile: "agent-commerce",
        meaning: "基礎組合閉環",
        minimum: "VistaCast + SyncroBrain + DoerFlow（+ 可選控制面）",
        modes: "三個產品 plane 必須宣告",
      },
      {
        profile: "smart-site",
        meaning: "上層完整閉環（疊加而非取代 agent-commerce）",
        minimum: "前者 + VistaRemote + DataLuminary（+ BlockyEdu 訓練入口）",
        modes: "BlockyEdu required 必須為 false",
      },
      {
        profile: "air-gapped",
        meaning: "斷網 / 內網交付",
        minimum: "單品或組合，無對外連線",
        modes:
          "ai≠central；entitlement∈{off, offline_license}；identity 建議 external_oidc，允許 local",
      },
    ],
  },
  capabilities: {
    index: "03",
    label: "CAPABILITIES",
    title: "能力模式矩陣",
    lead: "Control Manifest 明確宣告每項能力模式；未知版本必須拒絕啟動。",
    modesLine:
      "identity=central|external_oidc|local · entitlement=off|shadow_read|enforce|offline_license · ai=off|central|local_byok · notification=none|smtp",
    headers: {
      capability: "能力",
      modes: "模式",
    },
    rows: [
      {
        capability: "identity",
        modes: "central · external_oidc · local（lab，pilot/production 拒絕）",
      },
      { capability: "entitlement", modes: "off · shadow_read · enforce · offline_license" },
      { capability: "ai", modes: "off · central（lab，禁止進 pilot/production） · local_byok" },
      { capability: "notification", modes: "none · smtp" },
    ],
  },
  installKit: {
    index: "04",
    label: "INSTALL",
    title: "安裝套件",
    lead: "luminaryworks-install 提供精靈式私有部署安裝：勾選產品、設定網域與超級管理員，再一鍵驗收。詳細步驟與 env 說明放在文件站，避免與安裝包版本不同步。",
    docsLink: "查看安裝文件",
  },
  airGapped: {
    index: "05",
    label: "AIR-GAPPED",
    title: "斷網交付、離線 License 與本地 BYOK",
    lead: "air-gapped 從規格階段即為一等公民，而非事後補丁。",
    points: [
      "air-gapped profile 禁止 ai=central，entitlement 僅能為 off 或 offline_license。",
      "offline_license 以公鑰在本地驗章，不得硬依賴中央 Entitlement 服務。",
      "local_byok 將模型金鑰留在客戶端；中央 AI Platform 目前為 lab，不得進入生產。",
      "identity 建議使用客戶 IdP（external_oidc）；local 目錄模式仍為 lab。",
    ],
  },
  maturity: {
    index: "06",
    label: "MATURITY",
    title: "成熟度分級",
    lead: "已寫完程式不等於已上線。文件與 manifest 必須攜帶 stage 標籤。",
    headers: {
      label: "標籤",
      meaning: "含義",
      wording: "允許的表述",
    },
    rows: [
      { label: "production", meaning: "已上線、可販售、有回歸測試", wording: "「已上線」" },
      { label: "pilot", meaning: "有真實使用者但範圍受控", wording: "「試點中」" },
      { label: "lab", meaning: "本機 / 內網跑通，未做生產強化", wording: "「實驗中」" },
      { label: "stub", meaning: "介面存在，實作為佔位", wording: "「未實作」，禁止變現或計量" },
    ],
    callout:
      "ai=central 目前成熟度為 lab：無 AuthN、無 Entitlement 把關、無 /ready。preflight 會拒絕 pilot/production。",
  },
  cta: {
    title: "需要私有部署或離線交付？",
    lead: "聯絡工坊商務團隊，討論部署形態、License 與交付範圍。",
    contact: "聯絡商務",
  },
};
