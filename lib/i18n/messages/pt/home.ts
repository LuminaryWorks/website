export const home = {
  hero: {
    eyebrow: "LUMINARYWORKS · PLATFORM",
    title: "Plataforma base de AI SaaS",
    lead: "Contas unificadas, faturação e direitos, gateway de IA, notificações e normas partilhadas. Cada produto pode ser entregue sozinho — ou em conjunto ao longo da cadeia.",
    leadSecondary: "Seis produtos já provaram aterragem comercial nesta plataforma e formam uma cadeia de valor.",
    primaryCta: "Explorar produtos",
    secondaryCta: "Implementação autogerida",
    docs: "Documentação para programadores",
    diagramAria:
      "Diagrama do plano de controlo e dos planos dos produtos parceiros. A fila superior é um plano de controlo partilhado e opcional: Identity (OIDC), Entitlement e AI Gateway. As filas inferiores são os planos dos produtos parceiros, cada um com a sua base de dados e ACL. As linhas tracejadas significam que a dependência é opcional.",
    controlPlane: "CONTROL PLANE",
    controlNote: "partilhado opcional",
    productPlanes: "PRODUCT PLANES",
    productNote: "entrega independente",
    identity: "Identity",
    identityProto: "OIDC",
    entitlement: "Entitlement",
    aiGateway: "AI Gateway",
    lab: "",
  },
    facts: {
    items: [
      { value: "6 produtos", label: "aterragem comercial comprovada" },
      { value: "1 base", label: "sessão · faturação · gateway IA" },
      { value: "5 deploys", label: "standalone a air-gapped" },
      { value: "Open source", label: "Polyform Noncommercial" },
    ],
  },
  valueChain: {
    index: "02",
    label: "VALUE CHAIN",
    title: "Uma cadeia de valor já formada",
    lead: "Da criação e aprendizagem, à ligação de dispositivos e leitura de dados, à segurança visual e operações remotas, e por fim à liquidação entre agentes e pessoas. Cada produto entrega sozinho; juntos fecham o ciclo.",
    diagramAria:
      "Cadeia de valor: Criar com o BlockyEdu, Conectar com o SyncroBrain, Ver com o DataLuminary; Vigiar com o VistaCast e Controlar com o VistaRemote ramificam-se e convergem em Monetizar com o DoerFlow. Clique num nó para avançar para o respetivo cartão de produto.",
  },
  products: {
    index: "03",
    label: "PRODUCTS",
    title: "Seis produtos, cada um pronto a entregar sozinho",
  },
  platform: {
    index: "04",
    label: "PLATFORM",
    title:
      "O que é partilhado é a identidade, o entitlement e os protocolos — nunca a lógica de negócio.",
    lab: "",
    cards: [
      {
        id: "identity",
        title: "Início de sessão unificado · Identity",
        body: "Um serviço de login OIDC para os produtos; cada um mantém o seu logótipo e o seu texto",
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
        body: "Acesso a modelos de vários fornecedores, cofre de chaves e medição de utilização",
        tags: ["BYOK"],
        lab: false,
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
    title: "Por que uma plataforma",
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
        body: "A documentação e este site distinguem production / pilot / stub. Código lançado não é o mesmo que pronto para produção.",
      },
    ],
  },
  cta: {
    index: "07",
    label: "CTA",
    title: "Experimente primeiro, decida depois",
    lead: "Quando o parceiro o oferece, um produto elegível inclui um período experimental de 7 dias. Não há um escalão gratuito permanente. Para entrega autoalojada, ou para se tornar parceiro, escreva à plataforma.",
    startTrial: "Iniciar Trial",
    contact: "Falar com vendas",
    github: "GitHub",
  },
};
