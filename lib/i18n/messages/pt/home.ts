export const home = {
  hero: {
    eyebrow: "LUMINARYWORKS · 启明工坊",
    title:
      "Seis produtos de IA implementáveis de forma independente. Uma base partilhada de identidade e entitlement.",
    lead: "A LuminaryWorks constrói um ecossistema aberto AI-native sobre protocolos abertos — OIDC, MQTT, REST, WebRTC e ONVIF. Criação e aprendizagem, conectividade de dispositivos, análise de dados, segurança visual, operações remotas e colaboração entre agentes formam uma única cadeia de valor. Cada produto é entregue de forma autónoma e autoalojada e combina-se quando necessário.",
    primaryCta: "Explorar os seis produtos",
    secondaryCta: "Implementação autogerida",
    docs: "Documentação para programadores",
    diagramAria:
      "Diagrama do plano de controlo e dos planos de produto. A linha superior é um plano de controlo partilhado opcional: Identity (OIDC), Entitlement e AI Gateway marcado como lab. As linhas inferiores são os seis planos de produto, cada um com a sua base de dados e a sua ACL. As linhas tracejadas do plano de controlo para os planos de produto indicam que a dependência é opcional.",
    controlPlane: "CONTROL PLANE",
    controlNote: "partilhado opcional",
    productPlanes: "PRODUCT PLANES",
    productNote: "base de dados e ACL próprias",
    identity: "Identity",
    identityProto: "OIDC",
    entitlement: "Entitlement",
    aiGateway: "AI Gateway",
    lab: "lab",
  },
  facts: {
    items: [
      { value: "6", label: "produtos comercializáveis de forma independente" },
      { value: "5", label: "perfis de implementação congelados" },
      { value: "1", label: "camada partilhada de identidade e entitlement" },
      { value: "5", label: "famílias de protocolos abertos" },
      { value: "NC", label: "código-fonte Polyform Noncommercial" },
    ],
  },
  valueChain: {
    index: "02",
    label: "VALUE CHAIN",
    title: "Seis produtos, uma cadeia de valor",
    lead: "Primeiro a criação e a aprendizagem, depois os dispositivos e a análise de dados, em seguida a segurança visual e as operações remotas e, no final, agentes e pessoas a liquidar em conjunto.",
    diagramAria:
      "Cadeia de valor: Criar com o BlockyEdu, Conectar com o SyncroBrain, Ver com o DataLuminary; Vigiar com o VistaCast e Controlar com o VistaRemote ramificam-se e convergem em Monetizar com o DoerFlow. Clique num nó para avançar para o respetivo cartão de produto.",
  },
  products: {
    index: "03",
    label: "PRODUCTS",
    title: "Cada produto vende-se por si. Juntos, fecham o ciclo.",
  },
  platform: {
    index: "04",
    label: "PLATFORM",
    title:
      "O que é partilhado é a identidade, o entitlement e os protocolos — nunca a lógica de negócio.",
    lab: "lab",
    cards: [
      {
        id: "identity",
        title: "Início de sessão unificado · Identity",
        body: "Um único serviço de início de sessão OIDC suporta seis marcas; cada produto mantém o seu logótipo e os seus textos",
        tags: ["Logto", "OIDC", "PKCE"],
        lab: false,
      },
      {
        id: "entitlement",
        title: "Entitlement central · Entitlement",
        body: "Planos, trials, licenças, lugares e pagamentos são geridos centralmente; os direitos comerciais nunca entram no JWT",
        tags: ["NestJS", "PostgreSQL"],
        lab: false,
      },
      {
        id: "pal",
        title: "Permissões de recurso · PAL",
        body: "A ACL ao nível do recurso fica em cada produto; as permissões acompanham o recurso",
        tags: ["Casbin", "PAL"],
        lab: false,
      },
      {
        id: "aiGateway",
        title: "AI Gateway",
        body: "Acesso a modelos de vários fornecedores, cofre de chaves e medição de utilização (atualmente lab, não em produção)",
        tags: ["lab", "BYOK"],
        lab: true,
      },
      {
        id: "notification",
        title: "Notificações",
        body: "Módulo partilhado de e-mail e notificações com uma identidade de envio unificada",
        tags: ["@luminaryworks/notification"],
        lab: false,
      },
      {
        id: "sharedLibs",
        title: "Bibliotecas partilhadas",
        body: "Os clientes e as ferramentas de identidade, permissões e entitlement são distribuídos como pacotes npm — sem imports de código entre repositórios",
        tags: ["@luminaryworks/*"],
        lab: false,
      },
    ],
    calloutLabel: "Semântica de erros unificada",
    calloutCodes: "401 identidade · 402 entitlement · 403 ACL de recursos",
    emphasis:
      "Cada produto é dono da sua base de dados, migrações, políticas Casbin e cadência de lançamentos; continua a arrancar e a passar as verificações de readiness quando todos os produtos irmãos estão desligados.",
  },
  deployment: {
    index: "05",
    label: "DEPLOYMENT",
    title: "De um produto único a um ciclo fechado air-gapped",
    headers: {
      profile: "profile",
      meaning: "significado",
      composition: "composição mínima",
    },
    profiles: [
      {
        name: "standalone",
        meaning: "Implementação e venda independentes de um único produto",
        composition: "1 plano de produto + a sua própria base de dados",
      },
      {
        name: "control-plane",
        meaning: "Apenas plano de controlo partilhado",
        composition: "Identity (+ Auth Gateway) + Entitlement",
      },
      {
        name: "agent-commerce",
        meaning: "Ciclo de composição de base",
        composition: "VistaCast + SyncroBrain + DoerFlow",
      },
      {
        name: "smart-site",
        meaning: "Ciclo completo de camada superior (acresce, não substitui)",
        composition:
          "O anterior + VistaRemote + DataLuminary (+ ponto de entrada de formação do BlockyEdu)",
      },
      {
        name: "air-gapped",
        meaning: "Entrega offline / em intranet",
        composition:
          "Produto único ou composição, sem saída para a internet; licença offline, BYOK local",
      },
    ],
    modes:
      "identity=central|external_oidc|local · entitlement=off|shadow_read|enforce|offline_license · ai=off|central|local_byok · notification=none|smtp",
    cta: "Ver opções de implementação",
  },
  why: {
    index: "06",
    label: "WHY",
    title: "Porquê uma oficina",
    items: [
      {
        title: "Protocolos abertos primeiro",
        body: "A integração usa apenas OIDC / HTTP / MQTT / eventos. Sem imports em tempo de execução entre produtos, o que reduz o lock-in e o custo de migração.",
      },
      {
        title: "Negócio isolado, identidade unificada",
        body: "Cada produto é dono da sua base de dados e da sua ACL de recursos. O início de sessão e o entitlement comercial são centrais, pelo que a experiência é consistente e as falhas não se propagam.",
      },
      {
        title: "O autoalojamento é de primeira linha",
        body: "O IdP do cliente, as licenças offline, o BYOK local e o modo air-gapped estavam na especificação desde o primeiro dia — não foram acrescentados depois.",
      },
      {
        title: "Etiquetas de maturidade honestas",
        body: "A documentação e este site distinguem production / pilot / lab / stub. Código lançado não é o mesmo que pronto para produção.",
      },
    ],
  },
  cta: {
    index: "07",
    label: "CTA",
    title: "Experimente primeiro, decida depois",
    lead: "Os produtos elegíveis incluem um Trial de 7 dias; o ecossistema não tem um plano gratuito permanente. Para entrega autogerida ou offline, fale com a oficina.",
    startTrial: "Iniciar Trial",
    contact: "Falar com vendas",
    github: "GitHub",
  },
};
