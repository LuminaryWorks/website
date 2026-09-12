export const deploy = {
  page: {
    index: "01",
    label: "DEPLOYMENT",
    title: "部署与私有化",
    lead: "从单品独立交付到断网内网闭环——五种冻结形态与能力模式矩阵，支撑 Hosted 与私有化两种商业路径。",
  },
  profiles: {
    index: "02",
    label: "PROFILES",
    title: "五种部署形态",
    lead: "场景包只编排多个独立 Compose project，不把六产品合并成一个 project。",
    headers: {
      profile: "profile",
      meaning: "含义",
      minimum: "最小组成",
      modes: "允许的能力模式",
    },
    rows: [
      {
        profile: "standalone",
        meaning: "单产品独立部署与售卖",
        minimum: "1 个产品 plane + 自有数据库",
        modes: "identity 任意；entitlement 建议 off / offline_license；ai=off|local_byok",
      },
      {
        profile: "control-plane",
        meaning: "只部署共享控制面",
        minimum: "Identity（+ Auth Gateway）+ Entitlement",
        modes: "必须声明 services.identity",
      },
      {
        profile: "agent-commerce",
        meaning: "基础组合闭环",
        minimum: "VistaCast + SyncroBrain + DoerFlow（+ 可选控制面）",
        modes: "三个产品 plane 必须声明",
      },
      {
        profile: "smart-site",
        meaning: "上层完整闭环（叠加而非替代 agent-commerce）",
        minimum: "前者 + VistaRemote + DataLuminary（+ BlockyEdu 培训入口）",
        modes: "BlockyEdu required 必须为 false",
      },
      {
        profile: "air-gapped",
        meaning: "断网 / 内网交付",
        minimum: "单品或组合，无出网",
        modes:
          "ai≠central；entitlement∈{off, offline_license}；identity 建议 external_oidc，允许 local",
      },
    ],
  },
  capabilities: {
    index: "03",
    label: "CAPABILITIES",
    title: "能力模式矩阵",
    lead: "Control Manifest 显式声明每项能力模式；未知版本必须拒绝启动。",
    modesLine:
      "identity=central|external_oidc|local · entitlement=off|shadow_read|enforce|offline_license · ai=off|central|local_byok · notification=none|smtp",
    headers: {
      capability: "能力",
      modes: "模式",
    },
    rows: [
      {
        capability: "identity",
        modes: "central · external_oidc · local（lab，pilot/production 拒绝）",
      },
      { capability: "entitlement", modes: "off · shadow_read · enforce · offline_license" },
      { capability: "ai", modes: "off · central（lab，禁止进 pilot/production） · local_byok" },
      { capability: "notification", modes: "none · smtp" },
    ],
  },
  installKit: {
    index: "04",
    label: "INSTALL",
    title: "安装套件",
    lead: "luminaryworks-install 提供向导式私有化安装：勾选产品、配置域名与超管、一键验收。详细步骤与 env 说明见文档站，避免与安装包版本不同步。",
    docsLink: "查看安装文档",
  },
  airGapped: {
    index: "05",
    label: "AIR-GAPPED",
    title: "断网、离线 License 与本地 BYOK",
    lead: "air-gapped 从规格阶段即为一等公民，而非事后补丁。",
    points: [
      "air-gapped profile 禁止 ai=central，entitlement 仅 off 或 offline_license。",
      "offline_license 通过公钥验签，不得硬依赖中央 Entitlement 服务。",
      "local_byok 将模型密钥留在客户侧；中央 AI Platform 当前为 lab，不得进入生产。",
      "identity 建议使用客户 IdP（external_oidc）；local 目录模式仍为 lab。",
    ],
  },
  maturity: {
    index: "06",
    label: "MATURITY",
    title: "成熟度分级",
    lead: "已编码不等于已上线。文档与 manifest 必须携带 stage 标签。",
    headers: {
      label: "标签",
      meaning: "含义",
      wording: "允许的表述",
    },
    rows: [
      { label: "production", meaning: "已上线、可售、有回归", wording: "「已上线」" },
      { label: "pilot", meaning: "有真实用户但范围受控", wording: "「试点中」" },
      { label: "lab", meaning: "本机 / 内网跑通，无生产硬化", wording: "「实验中」" },
      { label: "stub", meaning: "接口存在，实现是占位", wording: "「未实现」，禁止变现或计量" },
    ],
    callout:
      "ai=central 当前成熟度为 lab：无 AuthN、无 Entitlement 门禁、无 /ready。preflight 拒绝 pilot/production。",
  },
  cta: {
    title: "需要私有化或离线交付？",
    lead: "联系工坊商务团队，讨论部署形态、License 与交付范围。",
    contact: "联系商务",
  },
};
