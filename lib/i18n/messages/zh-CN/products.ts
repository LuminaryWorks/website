/**
 * `items` 为设计定稿（来自 spec/website-design.md §5），实现阶段不得改写。
 * 产品页（/products）所需的页面级字段可在 `items` 之外追加。
 */
export const products = {
  items: {
    blockyedu: {
      nameLocal: "智码工坊",
      role: "学+创",
      oneLiner:
        "AI 全民创造平台：从积木到网站、小程序与实体玩具；VibeLearn 为企业交付可私有化的内部培训。",
      chips: ["三屏一助手", "统一 Artifact", "VibeLearn LMS"],
      audience: "创作者、K12 至成人学习者、教师、企业培训管理员",
    },
    syncrobrain: {
      nameLocal: "万物智脑",
      role: "连",
      oneLiner: "连接设备的 AI 原生操作系统：接入、设备影子、OTA、边缘规则与数字孪生。",
      chips: ["多协议接入", "边缘规则", "Safety Kernel"],
      audience: "硬件厂商、系统集成商、充电桩与储能等设备商",
    },
    dataluminary: {
      nameLocal: "数据明鉴",
      role: "看",
      oneLiner: "用 AI 照亮数据：低代码 BI、可视化大屏，一句话生成报告与图表。",
      chips: ["DataView", "DataTalk", "DataInsight"],
      audience: "企业数据团队、运营、需要设备监控大屏的硬件厂商",
    },
    vistacast: {
      nameLocal: "视界云遥",
      role: "视",
      oneLiner:
      "PCB / SMT 工位光学质检：看视觉可见的虚焊征兆、连焊、少焊，以及波峰焊和 DIP 外观。不替代整线高速 AOI。",
      chips: ["SMT 焊点", "波峰焊", "DIP 外观"],
      audience: "电子制造与 PCBA 产线、需要工位留痕的品质团队",
    },
    vistaremote: {
      nameLocal: "视界远程",
      role: "控",
      oneLiner: "跨平台实时远程桌面与自托管录制洞察：工控机、边缘网关、IT 桌面与远程协助。",
      chips: ["WebRTC 远控", "会话录制审计", "AI 摘要"],
      audience: "工控运维、IT 服务商、远程客服、私有化部署客户",
    },
    doerflow: {
      nameLocal: "智工网",
      role: "赚",
      oneLiner: "自主执行体的价值流动协议：任务发布、匹配与托管结算，人与 Agent 同权。",
      chips: ["任务市场", "Agent 经济", "多链结算"],
      audience: "Web3 与 AI 开发者、设备与 Agent 运营方",
    },
  },
  card: {
    visitSite: "访问官网",
    viewSource: "源码",
    trial7d: "7 天 Trial",
    noTrial: "无 Trial",
    notSellable: "暂不可售",
    audienceLabel: "适用对象",
    operatorLabel: "",
    operatorNote: "",
    availableThrough: "独立交付 · 登录与账单接入 LuminaryWorks",
    legal: "产品条款",
  },
  page: {
    index: "01",
    label: "PRODUCTS",
    title: "产品",
    lead: "六款产品已在 LuminaryWorks 完成商业落地验证。各自可独立交付，也可沿价值合作链串联；统一登录与账单由平台提供。",
  },
  compare: {
    index: "02",
    label: "COMPARE",
    title: "对比表",
    lead: "平台上的产品：角色、适用对象、站点、品牌、商业状态与 Trial。",
    headers: {
      product: "产品",
      operator: "品牌",
      role: "角色",
      audience: "适用对象",
      domain: "官网域名",
      status: "商业化状态",
      trial: "Trial",
    },
    footnote:
      "目录中的商业状态描述的是平台结账能力。DoerFlow 无 Trial。没有永久免费档。",
  },
};
