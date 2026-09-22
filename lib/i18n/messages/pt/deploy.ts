export const deploy = {
  page: {
    index: "01",
    label: "DEPLOYMENT",
    title: "Implementação e autoalojamento",
    lead: "De um único produto comercializável a um ciclo fechado air-gapped: cinco perfis congelados e uma matriz de modos de capacidade, para entrega hosted e autoalojada.",
  },
  profiles: {
    index: "02",
    label: "PROFILES",
    title: "Cinco perfis de implementação",
    lead: "Os packs de cenário orquestram vários projetos Compose independentes; nunca se juntam os seis produtos num só projeto.",
    headers: {
      profile: "profile",
      meaning: "Significado",
      minimum: "Stack mínima",
      modes: "Modos de capacidade permitidos",
    },
    rows: [
      {
        profile: "standalone",
        meaning: "Produto único, vendido e operado isoladamente",
        minimum: "Um plano de produto + a sua própria base de dados",
        modes:
          "identity: qualquer; entitlement: off / offline_license recomendado; ai=off|local_byok",
      },
      {
        profile: "control-plane",
        meaning: "Apenas plano de controlo partilhado",
        minimum: "Identity (+ Auth Gateway) + Entitlement",
        modes: "Tem de declarar services.identity",
      },
      {
        profile: "agent-commerce",
        meaning: "Ciclo fechado de base",
        minimum: "VistaCast + SyncroBrain + DoerFlow (+ plano de controlo opcional)",
        modes: "São necessários os três planos de produto",
      },
      {
        profile: "smart-site",
        meaning: "Ciclo superior completo (acresce ao agent-commerce)",
        minimum:
          "O anterior + VistaRemote + DataLuminary (+ ponto de entrada de formação do BlockyEdu)",
        modes: "BlockyEdu required tem de ser false",
      },
      {
        profile: "air-gapped",
        meaning: "Entrega offline / em intranet",
        minimum: "Produto único ou conjunto sem saída para a internet",
        modes:
          "ai≠central; entitlement∈{off, offline_license}; identity: external_oidc recomendado, local permitido",
      },
    ],
  },
  capabilities: {
    index: "03",
    label: "CAPABILITIES",
    title: "Matriz de modos de capacidade",
    lead: "O Control Manifest declara todos os modos de forma explícita; versões desconhecidas têm de impedir o arranque.",
    modesLine:
      "identity=central|external_oidc|local · entitlement=off|shadow_read|enforce|offline_license · ai=off|central|local_byok · notification=none|smtp",
    headers: {
      capability: "Capacidade",
      modes: "Modos",
    },
    rows: [
      {
        capability: "identity",
        modes: "central · external_oidc · local (lab — rejeitado em pilot/production)",
      },
      { capability: "entitlement", modes: "off · shadow_read · enforce · offline_license" },
      {
        capability: "ai",
        modes: "off · central (lab — bloqueado em pilot/production) · local_byok",
      },
      { capability: "notification", modes: "none · smtp" },
    ],
  },
  installKit: {
    index: "04",
    label: "INSTALL",
    title: "Packs de instalação",
    lead: "O luminaryworks-install oferece uma instalação privada guiada por assistente: escolher produtos, configurar domínios e contas de administração e executar as verificações de aceitação. A documentação passo a passo das variáveis de ambiente vive no site de documentação, para evitar desvios em relação ao pacote de instalação.",
    docsLink: "Ver documentação de instalação",
  },
  airGapped: {
    index: "05",
    label: "AIR-GAPPED",
    title: "Entrega air-gapped, License offline e BYOK local",
    lead: "A entrega air-gapped é um requisito de primeira linha na especificação, não um remendo pós-lançamento.",
    points: [
      "O perfil air-gapped proíbe ai=central; o entitlement só pode ser off ou offline_license.",
      "O offline_license valida licenças assinadas localmente, sem dependência estrita do Entitlement central.",
      "O local_byok mantém as chaves de modelo do lado do cliente; a AI Platform central está em lab e não deve entrar em produção.",
      "O identity deve usar o IdP do cliente (external_oidc); o modo de diretório local continua em lab.",
    ],
  },
  maturity: {
    index: "06",
    label: "MATURITY",
    title: "Etiquetas de maturidade",
    lead: "Código lançado não é o mesmo que pronto para produção. A documentação e os manifests têm de incluir etiquetas de fase.",
    headers: {
      label: "Etiqueta",
      meaning: "Significado",
      wording: "Formulação permitida",
    },
    rows: [
      {
        label: "production",
        meaning: "Em produção, comercializável, com cobertura de regressão",
        wording: '"Disponível de forma geral"',
      },
      { label: "pilot", meaning: "Utilizadores reais, âmbito limitado", wording: '"Pilot"' },
      {
        label: "lab",
        meaning: "Corre num portátil ou em intranet, sem endurecimento",
        wording: '"Experimental"',
      },
      {
        label: "stub",
        meaning: "A API existe, a implementação é um placeholder",
        wording: '"Não implementado" — sem monetização nem medição',
      },
    ],
    callout:
      "Hoje ai=central está em lab: sem AuthN, sem controlo de Entitlement, sem /ready. O preflight rejeita pilot/production.",
  },
  cta: {
    title: "Precisa de entrega privada ou offline?",
    lead: "Fale com a equipa da oficina sobre perfis, License e âmbito da entrega.",
    contact: "Falar com vendas",
  },
};
