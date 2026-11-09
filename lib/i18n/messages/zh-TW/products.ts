/**
 * `items` 為設計定稿（來自 spec/website-design.md §5），實作階段不得改寫。
 * 產品頁（/products）所需的頁面級欄位可在 `items` 之外追加。
 */
export const products = {
  items: {
    blockyedu: {
      nameLocal: "智碼工坊",
      role: "學+創",
      oneLiner:
        "AI 全民創造平台：從積木到網站、小程式與實體玩具；VibeLearn 為企業交付可私有部署的內部訓練。",
      chips: ["三屏一助手", "統一 Artifact", "VibeLearn LMS"],
      audience: "創作者、K12 至成人學習者、教師、企業訓練管理員",
    },
    syncrobrain: {
      nameLocal: "萬物智腦",
      role: "連",
      oneLiner: "連接裝置的 AI 原生作業系統：納管、裝置影子、OTA、邊緣規則與數位孿生。",
      chips: ["多協定接入", "邊緣規則", "Safety Kernel"],
      audience: "硬體廠商、系統整合商、充電樁與儲能等裝置商",
    },
    dataluminary: {
      nameLocal: "數據明鑑",
      role: "看",
      oneLiner: "用 AI 照亮資料：低程式碼 BI、視覺化大螢幕，一句話生成報表與圖表。",
      chips: ["DataView", "DataTalk", "DataInsight"],
      audience: "企業資料團隊、營運、需要裝置監控大螢幕的硬體廠商",
    },
    vistacast: {
      nameLocal: "視界雲遙",
      role: "視",
      oneLiner:
      "PCB / SMT 工位光學質檢：看視覺可見的虛焊徵兆、連焊、少焊，以及波峰焊和 DIP 外觀。不取代整線高速 AOI。",
      chips: ["SMT 焊點", "波峰焊", "DIP 外觀"],
      audience: "電子製造與 PCBA 產線、需要工位留痕的品質團隊",
    },
    vistaremote: {
      nameLocal: "視界遠程",
      role: "控",
      oneLiner: "跨平台即時遠端桌面與自架錄製洞察：工業電腦、邊緣閘道、IT 桌面與遠端協助。",
      chips: ["WebRTC 遠端控制", "會話錄製稽核", "AI 摘要"],
      audience: "工控維運、IT 服務商、遠端客服、私有部署客戶",
    },
    doerflow: {
      nameLocal: "智工網",
      role: "賺",
      oneLiner: "自主執行體的價值流動協定：任務發布、配對與履約結算，人類與 Agent 同權。",
      chips: ["任務市集", "Agent 經濟", "多鏈結算"],
      audience: "Web3 與 AI 開發者、裝置與 Agent 營運方",
    },
  },
  card: {
    visitSite: "前往官網",
    viewSource: "原始碼",
    trial7d: "7 天 Trial",
    noTrial: "無 Trial",
    notSellable: "尚未販售",
    audienceLabel: "適用對象",
    operatorLabel: "",
    operatorNote: "",
    availableThrough: "獨立交付 · 登入與帳單接入 LuminaryWorks",
    legal: "產品條款",
  },
  page: {
    index: "01",
    label: "PRODUCTS",
    title: "產品",
    lead: "六款產品已在 LuminaryWorks 完成商業落地驗證。各自可獨立交付，也可沿價值合作鏈串聯；統一登入與帳單由平台提供。",
  },
  compare: {
    index: "02",
    label: "COMPARE",
    title: "比較表",
    lead: "平台上的產品：角色、適用對象、站點、品牌、商業狀態與 Trial。",
    headers: {
      product: "產品",
      operator: "品牌",
      role: "角色",
      audience: "適用對象",
      domain: "官網網域",
      status: "商業化狀態",
      trial: "Trial",
    },
    footnote:
      "目錄中的商業狀態描述的是平台結帳能力。DoerFlow 無 Trial。沒有永久免費檔。",
  },
};
