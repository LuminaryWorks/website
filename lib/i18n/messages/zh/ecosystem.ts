export const ecosystem = {
  page: {
    index: "01",
    label: "ECOSYSTEM",
    title: "生态与架构",
    lead: "六个产品各自独立运行，通过开放协议与可选共享控制面组成联邦式套件——统一的是身份、权益与协议，不是业务逻辑。",
  },
  valueChain: {
    index: "01",
    label: "VALUE CHAIN",
    title: "价值链闭环",
    lead: "从创造与学习起步，接入设备、洞察数据，延伸到视觉安防与远程运维，最后由 Agent 与人类共同结算。",
    steps: [
      {
        stage: "学+创",
        product: "BlockyEdu",
        productLocal: "智码工坊",
        output: "技能、Artifact 与培训内容",
      },
      {
        stage: "连",
        product: "SyncroBrain",
        productLocal: "万物智脑",
        output: "设备接入、遥测、Incident 与 Safety Kernel",
      },
      {
        stage: "看",
        product: "DataLuminary",
        productLocal: "数据明鉴",
        output: "报表、看板、导出与 embed",
      },
      {
        stage: "视",
        product: "VistaCast",
        productLocal: "视界云遥",
        output: "视觉事件、告警状态与 ack",
      },
      {
        stage: "控",
        product: "VistaRemote",
        productLocal: "视界远程",
        output: "远程会话、录制与审计",
      },
      {
        stage: "赚",
        product: "DoerFlow",
        productLocal: "智工网",
        output: "任务、Receipt 与账本结算",
      },
    ],
  },
  platform: {
    index: "02",
    label: "PLATFORM",
    title: "共享底座",
    lead: "控制面可选、产品面自治。中央服务停机时，各产品按 manifest 声明降级，Casbin 永不被绕过。",
    items: [
      {
        title: "统一登录 Identity",
        description: "一套 OIDC 登录服务承载六个品牌，各产品保留自己的 Logo 与文案。",
        tags: ["Logto", "OIDC", "PKCE"],
      },
      {
        title: "中央权益 Entitlement",
        description: "套餐、Trial、License、席位与支付集中管理；商业权益不进 JWT。",
        tags: ["NestJS", "PostgreSQL"],
      },
      {
        title: "资源权限 PAL",
        description: "资源级 ACL 留在各产品，permissions 随资源下发。",
        tags: ["Casbin", "PAL"],
      },
      {
        title: "AI 网关",
        description: "多供应商模型接入、密钥保险库与用量计量。",
        tags: ["lab", "BYOK"],
        lab: true,
      },
      {
        title: "通知",
        description: "共享邮件与通知模块，统一发信身份。",
        tags: ["@luminaryworks/notification"],
      },
      {
        title: "共享库",
        description: "身份、权限、权益客户端与工具链以 npm 包分发，不做跨仓源码引用。",
        tags: ["@luminaryworks/*"],
      },
    ],
  },
  integration: {
    index: "03",
    label: "INTEGRATION",
    title: "集成矩阵",
    lead: "跨产品集成一律走 OIDC、HTTP、MQTT 与版本化事件；禁止跨产品 runtime import 与共享业务 schema。",
    allowedHeading: "允许",
    forbiddenHeading: "禁止",
    allowed: [
      "OIDC 身份联邦",
      "HTTP REST export / embed",
      "MQTT / CloudEvents",
      "显式绑定记录（非隐式关联）",
    ],
    forbidden: [
      "跨产品 runtime import（file: 路径、直接引用对方源码）",
      "共享业务 schema / 共享业务数据库",
      "复用对方 JWT 做资源授权",
      "把商业权益写入 JWT",
    ],
  },
  errors: {
    index: "04",
    label: "ERRORS",
    title: "统一错误语义",
    lead: "HTTP 状态码在各产品间含义一致，便于编排与审计。",
    items: [
      { code: "401", label: "身份", description: "AuthN 失败；身份服务不可用时不降级为匿名。" },
      {
        code: "402",
        label: "权益",
        description: "商业权益不足（Trial 过期、套餐未覆盖、配额耗尽）。",
      },
      { code: "403", label: "资源 ACL", description: "Casbin 拒绝；License 永不绕过资源权限。" },
    ],
  },
  protocols: {
    index: "05",
    label: "PROTOCOLS",
    title: "开放协议清单",
    lead: "集成优先开放标准，降低锁定与迁移成本。",
    items: ["OIDC", "MQTT", "REST", "WebRTC", "ONVIF"],
  },
  autonomy: {
    index: "06",
    label: "AUTONOMY",
    title: "产品自治硬约束",
    lead: "每个产品独占自己的数据库、迁移、Casbin 策略与发布节奏；兄弟产品全部关闭时仍能启动并通过 ready 检查。",
  },
};
