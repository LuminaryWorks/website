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
        "把线下空间变成可编程的视觉事件流：复用既有 ONVIF/RTSP 摄像头，在边缘产出结构化事件。",
      chips: ["ONVIF/RTSP", "客流与入侵", "Webhook 事件"],
      audience: "连锁零售、仓储物流、中小工厂、物业安防",
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
  },
  page: {
    index: "01",
    label: "PRODUCTS",
    title: "产品总览",
    lead: "六个可独立售卖的 AI 产品。每个产品独占数据库与 ACL，通过 OIDC 与开放协议按需组合。",
  },
  compare: {
    index: "02",
    label: "COMPARE",
    title: "对比表",
    lead: "角色、适用对象、域名、商业化状态与 Trial 均来自产品规格，不在页面另写。",
    headers: {
      product: "产品",
      role: "角色",
      audience: "适用对象",
      domain: "官网域名",
      status: "商业化状态",
      trial: "Trial",
    },
    footnote: "六产品均可售。DoerFlow 无 Trial；全生态无永久免费档。",
  },
};
