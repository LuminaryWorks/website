export const home = {
  hero: {
    eyebrow: "LUMINARYWORKS · 启明工坊",
    title: "六个可独立部署的 AI 产品，一套统一的身份与权益底座",
    lead: "LuminaryWorks（启明工坊）用 OIDC、MQTT、REST、WebRTC、ONVIF 等开放协议，把创造教育、设备物联、数据洞察、视觉安防、远程运维与 Agent 协作连成一条价值链。每个产品都能独立交付与私有化，也能按需组合成完整闭环。",
    primaryCta: "查看六大产品",
    secondaryCta: "私有化部署",
    docs: "开发者文档",
    diagramAria:
      "控制面与产品面结构示意图。上层为可选共享的控制面：Identity（OIDC）、Entitlement，以及带 lab 标记的 AI Gateway。下层为六个产品面，各自拥有数据库与 ACL。控制面到产品面的连线为虚线，表示可选依赖。",
    controlPlane: "CONTROL PLANE",
    controlNote: "可选共享",
    productPlanes: "PRODUCT PLANES",
    productNote: "各自数据库与 ACL",
    identity: "Identity",
    identityProto: "OIDC",
    entitlement: "Entitlement",
    aiGateway: "AI Gateway",
    lab: "lab",
  },
  facts: {
    items: [
      { value: "6", label: "独立可售产品" },
      { value: "5", label: "冻结部署形态" },
      { value: "1", label: "套统一登录与权益" },
      { value: "5", label: "类开放协议" },
      { value: "NC", label: "Polyform 非商业开源" },
    ],
  },
  valueChain: {
    index: "02",
    label: "VALUE CHAIN",
    title: "六个产品，回答同一条价值链的不同环节",
    lead: "学 + 创起步，接入设备、洞察数据，延伸到视觉安防、远程运维，最后由 Agent 与人类共同结算。",
    diagramAria:
      "价值链：学加创从 BlockyEdu 起步，连接到 SyncroBrain，由 DataLuminary 看数据；视 VistaCast 与控 VistaRemote 从主链分出，汇入赚 DoerFlow。点击节点滚动到对应产品卡。",
  },
  products: {
    index: "03",
    label: "PRODUCTS",
    title: "每个产品可独立售卖，组合后形成闭环",
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
        body: "一套 OIDC 登录服务承载六个品牌，各产品保留自己的 Logo 与文案",
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
    title: "为什么是工坊",
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
    lead: "适用产品提供 7 天 Trial；生态不提供永久免费档。需要私有化或离线交付，直接联系工坊。",
    startTrial: "开始试用",
    contact: "联系商务",
    github: "GitHub",
  },
};
