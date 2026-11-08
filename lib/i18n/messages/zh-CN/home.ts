export const home = {
  hero: {
    eyebrow: "LUMINARYWORKS · PLATFORM",
    title: "AI SaaS 基础服务平台",
    lead: "平台提供统一账号、账单与权益、AI 网关、通知与共享标准；产品可独立交付，也可串联使用。",
    leadSecondary: "六款产品已在本平台完成商业落地验证，并形成一条价值合作链。",
    primaryCta: "查看产品",
    secondaryCta: "私有化部署",
    docs: "开发者文档",
    diagramAria:
      "控制面与产品面的结构示意图。上层是可选的共享控制面：Identity（OIDC）、Entitlement，以及标为 lab 的 AI Gateway。下层是产品面，各自拥有数据库与 ACL。虚线表示依赖可选。",
    controlPlane: "CONTROL PLANE",
    controlNote: "可选共享",
    productPlanes: "PRODUCT PLANES",
    productNote: "可独立交付",
    identity: "Identity",
    identityProto: "OIDC",
    entitlement: "Entitlement",
    aiGateway: "AI Gateway",
    lab: "lab",
  },
  facts: {
    items: [
      { value: "六款产品", label: "商业落地已验证" },
      { value: "一套底座", label: "登录 · 账单 · AI 网关" },
      { value: "五种部署", label: "单品到断网内网" },
      { value: "开源许可", label: "Polyform 非商业" },
    ],
  },
  valueChain: {
    index: "02",
    label: "VALUE CHAIN",
    title: "我们已经形成一条价值合作链",
    lead: "从创造与学习，到设备接入与数据洞察，再到视觉安防与远程运维，最后由 Agent 与人完成结算。六款产品各自可独立交付，串联后覆盖完整闭环。",
    diagramAria:
      "价值合作链：学加创从 BlockyEdu 起步，连接到 SyncroBrain，由 DataLuminary 看数据；视 VistaCast 与控 VistaRemote 从主链分出，汇入赚 DoerFlow。点击节点滚动到对应产品卡。",
  },
  products: {
    index: "03",
    label: "PRODUCTS",
    title: "六款产品，各自可独立交付",
  },
  platform: {
    index: "04",
    label: "PLATFORM",
    title: "统一的不是业务，是身份、权益与协议",
    lab: "lab",
    cards: [
      {
        id: "identity",
        title: "统一登录 Identity",
        body: "一套 OIDC 登录服务供产品接入；各产品保留自己的 Logo 与文案",
        tags: ["Logto", "OIDC", "PKCE"],
        lab: false,
      },
      {
        id: "entitlement",
        title: "中央权益 Entitlement",
        body: "套餐、Trial、License、席位与支付集中管理；商业权益不进 JWT",
        tags: ["NestJS", "PostgreSQL"],
        lab: false,
      },
      {
        id: "pal",
        title: "资源权限 PAL",
        body: "资源级 ACL 留在各产品，permissions 随资源下发",
        tags: ["Casbin", "PAL"],
        lab: false,
      },
      {
        id: "aiGateway",
        title: "AI 网关",
        body: "多供应商模型接入、密钥保险库与用量计量（当前 lab，不进生产）",
        tags: ["lab", "BYOK"],
        lab: true,
      },
      {
        id: "notification",
        title: "通知",
        body: "共享邮件与通知模块，统一发信身份",
        tags: ["@luminaryworks/notification"],
        lab: false,
      },
      {
        id: "sharedLibs",
        title: "共享库",
        body: "身份、权限、权益客户端与工具链以 npm 包分发，不做跨仓源码引用",
        tags: ["@luminaryworks/*"],
        lab: false,
      },
    ],
    calloutLabel: "统一错误语义",
    calloutCodes: "401 身份 · 402 权益 · 403 资源 ACL",
    emphasis:
      "每个产品独占自己的数据库、迁移、Casbin 策略与发布节奏；兄弟产品全部关闭时仍能启动并通过 ready 检查。",
  },
  deployment: {
    index: "05",
    label: "DEPLOYMENT",
    title: "从单品独立交付，到断网内网闭环",
    headers: {
      profile: "profile",
      meaning: "含义",
      composition: "最小组成",
    },
    profiles: [
      {
        name: "standalone",
        meaning: "单产品独立部署与售卖",
        composition: "1 个产品 plane + 自有数据库",
      },
      {
        name: "control-plane",
        meaning: "只部署共享控制面",
        composition: "Identity（+ Auth Gateway）+ Entitlement",
      },
      {
        name: "agent-commerce",
        meaning: "基础组合闭环",
        composition: "VistaCast + SyncroBrain + DoerFlow",
      },
      {
        name: "smart-site",
        meaning: "上层完整闭环（叠加而非替代）",
        composition: "前者 + VistaRemote + DataLuminary（+ BlockyEdu 培训入口）",
      },
      {
        name: "air-gapped",
        meaning: "断网 / 内网交付",
        composition: "单品或组合，无出网；离线 License、本地 BYOK",
      },
    ],
    modes:
      "identity=central|external_oidc|local · entitlement=off|shadow_read|enforce|offline_license · ai=off|central|local_byok · notification=none|smtp",
    cta: "查看部署方案",
  },
  why: {
    index: "06",
    label: "WHY",
    title: "为什么是平台",
    items: [
      {
        title: "开放协议优先",
        body: "集成一律走 OIDC / HTTP / MQTT / 事件，禁止跨产品运行时引用，降低锁定与迁移成本。",
      },
      {
        title: "业务隔离，身份统一",
        body: "各产品独占数据库与资源 ACL；登录与商业权益中央化，体验一致但故障不串联。",
      },
      {
        title: "私有化是一等公民",
        body: "客户自有 IdP、离线 License、本地 BYOK 与 air-gapped 从规格阶段就在，而非事后补丁。",
      },
      {
        title: "成熟度诚实标注",
        body: "文档与官网区分 production / pilot / lab / stub，已编码不等于已上线。",
      },
    ],
  },
  cta: {
    index: "07",
    label: "CTA",
    title: "先跑起来，再决定怎么买",
    lead: "符合条件的产品含 7 天试用。没有永久免费档。私有化交付或商务合作，请发邮件给平台。",
    startTrial: "开始试用",
    contact: "联系商务",
    github: "GitHub",
  },
};
