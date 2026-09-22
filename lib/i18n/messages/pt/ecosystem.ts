export const ecosystem = {
  page: {
    index: "01",
    label: "ECOSYSTEM",
    title: "Ecossistema e arquitetura",
    lead: "Os seis produtos funcionam de forma independente e combinam-se como uma suite federada através de protocolos abertos e de um plano de controlo partilhado opcional: o que é partilhado é a identidade, o entitlement e os protocolos, nunca a lógica de negócio.",
  },
  valueChain: {
    index: "01",
    label: "VALUE CHAIN",
    title: "Ciclo da cadeia de valor",
    lead: "A criação e a aprendizagem levam à conectividade de dispositivos e à análise de dados, depois à segurança visual e às operações remotas e, por fim, à liquidação onde agentes e pessoas estão em pé de igualdade.",
    steps: [
      {
        stage: "Criar",
        product: "BlockyEdu",
        productLocal: "智码工坊",
        output: "Competências, artefactos e conteúdos de formação",
      },
      {
        stage: "Conectar",
        product: "SyncroBrain",
        productLocal: "万物智脑",
        output: "Onboarding de dispositivos, telemetria, incidentes e Safety Kernel",
      },
      {
        stage: "Ver",
        product: "DataLuminary",
        productLocal: "数据明鉴",
        output: "Relatórios, dashboards, exportações e embeds",
      },
      {
        stage: "Vigiar",
        product: "VistaCast",
        productLocal: "视界云遥",
        output: "Eventos visuais, estado de alertas e confirmações",
      },
      {
        stage: "Controlar",
        product: "VistaRemote",
        productLocal: "视界远程",
        output: "Sessões remotas, gravação e auditoria",
      },
      {
        stage: "Monetizar",
        product: "DoerFlow",
        productLocal: "智工网",
        output: "Tarefas, comprovativos e liquidação contabilística",
      },
    ],
  },
  platform: {
    index: "02",
    label: "PLATFORM",
    title: "Plataforma partilhada",
    lead: "O plano de controlo é opcional; os planos de produto mantêm-se autónomos. Quando os serviços centrais param, cada produto degrada-se exatamente como o seu manifest declara e o Casbin nunca é contornado.",
    spineLabel: "CONTROL PLANE",
    unitsLabel: "CAPABILITY UNITS",
    items: [
      {
        title: "Identity (OIDC)",
        description:
          "Uma única superfície de início de sessão OIDC para seis marcas; cada produto mantém o seu logótipo e os seus textos.",
        tags: ["Logto", "OIDC", "PKCE"],
      },
      {
        title: "Entitlement central",
        description:
          "Planos, Trial, License, lugares e faturação num só lugar; os direitos comerciais nunca entram no JWT.",
        tags: ["NestJS", "PostgreSQL"],
      },
      {
        title: "ACL de recursos (PAL)",
        description:
          "A ACL ao nível do recurso fica em cada produto; as permissões acompanham o recurso.",
        tags: ["Casbin", "PAL"],
      },
      {
        title: "Gateway de IA",
        description:
          "Encaminhamento de modelos multifornecedor, cofre de chaves e medição de utilização.",
        tags: ["lab", "BYOK"],
        lab: true,
      },
      {
        title: "Notificações",
        description:
          "Módulo partilhado de e-mail e notificações com uma identidade de remetente unificada.",
        tags: ["@luminaryworks/notification"],
      },
      {
        title: "Pacotes partilhados",
        description:
          "Os clientes de Identity, ACL e entitlement são distribuídos como pacotes npm — sem imports de código entre repositórios.",
        tags: ["@luminaryworks/*"],
      },
    ],
  },
  integration: {
    index: "03",
    label: "INTEGRATION",
    title: "Matriz de integração",
    lead: "A integração entre produtos usa apenas OIDC, HTTP, MQTT e eventos versionados — sem imports em tempo de execução nem esquemas de negócio partilhados.",
    allowedHeading: "Permitido",
    forbiddenHeading: "Proibido",
    allowed: [
      "Federação de identidade OIDC",
      "Exportação / embed REST por HTTP",
      "MQTT / CloudEvents",
      "Registos de ligação explícitos (sem joins implícitos)",
    ],
    forbidden: [
      "Imports em tempo de execução entre produtos (caminhos file:, referências diretas ao código)",
      "Esquemas de negócio ou bases de dados de negócio partilhados",
      "Reutilizar o JWT de outro produto para autorizar recursos",
      "Incluir direitos comerciais nos JWT",
    ],
  },
  errors: {
    index: "04",
    label: "ERRORS",
    title: "Semântica de erros unificada",
    lead: "Os códigos de estado HTTP significam o mesmo em todos os produtos, para orquestração e auditoria.",
    items: [
      {
        code: "401",
        label: "Identity",
        description: "A AuthN falhou; uma falha de identidade nunca degrada para acesso anónimo.",
      },
      {
        code: "402",
        label: "Entitlement",
        description:
          "Direitos comerciais insuficientes (Trial expirado, plano incompatível, quota esgotada).",
      },
      {
        code: "403",
        label: "ACL de recursos",
        description: "Recusa do Casbin; a License nunca contorna as permissões de recurso.",
      },
    ],
  },
  protocols: {
    index: "05",
    label: "PROTOCOLS",
    title: "Inventário de protocolos abertos",
    lead: "Integrar primeiro através de normas abertas, para reduzir o lock-in e o custo de migração.",
    items: ["OIDC", "MQTT", "REST", "WebRTC", "ONVIF"],
  },
  autonomy: {
    index: "06",
    label: "AUTONOMY",
    title: "Autonomia do produto (restrição rígida)",
    lead: "Cada produto é dono da sua base de dados, migrações, política Casbin e cadência de lançamentos. Ainda assim tem de arrancar e passar as verificações de readiness quando todos os produtos irmãos estão em baixo.",
    boundaries: [
      "Cada produto é dono da sua base de dados, migrações, política Casbin e cadência de lançamentos",
      "Tem de arrancar e passar as verificações de readiness quando todos os produtos irmãos estão em baixo",
    ],
  },
};
