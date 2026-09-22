/**
 * `items` é o texto aprovado (spec/website-design.md §5). Não reescrever.
 * As chaves de página para /products podem ser acrescentadas fora de `items`.
 */
export const products = {
  items: {
    blockyedu: {
      nameLocal: "智码工坊",
      role: "Criar",
      oneLiner:
        "Criação com IA para todos — de blocos a sites, mini-apps e brinquedos físicos; o VibeLearn entrega formação empresarial autoalojável.",
      chips: ["Estúdio de três painéis", "Artifact unificado", "VibeLearn LMS"],
      audience:
        "Criadores, alunos do ensino básico a adultos, docentes, responsáveis de formação empresarial",
    },
    syncrobrain: {
      nameLocal: "万物智脑",
      role: "Conectar",
      oneLiner:
        "Um sistema operativo AI-native para dispositivos conectados — onboarding, shadows, OTA, regras no edge e gémeos digitais.",
      chips: ["Ingestão multiprotocolo", "Regras no edge", "Safety Kernel"],
      audience:
        "Fabricantes de hardware, integradores de sistemas, fornecedores de carregamento e armazenamento de energia",
    },
    dataluminary: {
      nameLocal: "数据明鉴",
      role: "Ver",
      oneLiner:
        "Iluminar os dados com IA — BI low-code, dashboards para videowall e relatórios a partir de um único prompt.",
      chips: ["DataView", "DataTalk", "DataInsight"],
      audience:
        "Equipas de dados empresariais, operações, fabricantes de hardware que precisam de dashboards de dispositivos",
    },
    vistacast: {
      nameLocal: "视界云遥",
      role: "Vigiar",
      oneLiner:
        "Transforme o espaço físico num fluxo programável de eventos visuais — reutilize câmaras ONVIF/RTSP existentes e emita eventos estruturados no edge.",
      chips: ["ONVIF/RTSP", "Afluência e intrusão", "Eventos por webhook"],
      audience:
        "Cadeias de retalho, armazenamento e logística, pequenas fábricas, segurança de instalações",
    },
    vistaremote: {
      nameLocal: "视界远程",
      role: "Controlar",
      oneLiner:
        "Ambiente de trabalho remoto multiplataforma em tempo real com análise de gravações autoalojada — PCs industriais, gateways edge, postos de TI e assistência remota.",
      chips: ["Controlo por WebRTC", "Auditoria de gravação de sessões", "Resumos com IA"],
      audience:
        "Operações industriais, prestadores de serviços de TI, suporte remoto, clientes autoalojados",
    },
    doerflow: {
      nameLocal: "智工网",
      role: "Monetizar",
      oneLiner:
        "O protocolo de liquidez para agentes autónomos — publicação de tarefas, correspondência e liquidação em escrow, onde pessoas e agentes estão em pé de igualdade.",
      chips: ["Marketplace de tarefas", "Economia de agentes", "Liquidação multicadeia"],
      audience: "Programadores Web3 e de IA, operadores de dispositivos e agentes",
    },
  },
  card: {
    visitSite: "Visitar o site",
    viewSource: "Código",
    trial7d: "Trial de 7 dias",
    noTrial: "Sem Trial",
    notSellable: "Ainda não comercializável",
    audienceLabel: "Pensado para",
  },
  page: {
    index: "01",
    label: "PRODUCTS",
    title: "Visão geral dos produtos",
    lead: "Seis produtos de IA comercializáveis de forma independente. Cada um é dono da sua base de dados e da sua ACL; combinam-se quando necessário através de OIDC e de protocolos abertos.",
  },
  compare: {
    index: "02",
    label: "COMPARE",
    title: "Tabela comparativa",
    lead: "O papel, o público, o domínio, o estado comercial e o Trial vêm das especificações de produto — não são reescritos nesta página.",
    headers: {
      product: "Produto",
      role: "Papel",
      audience: "Público",
      domain: "Domínio do site",
      status: "Estado comercial",
      trial: "Trial",
    },
    footnote:
      "Os seis produtos são comercializáveis. O DoerFlow não tem Trial. O ecossistema não tem plano gratuito permanente.",
  },
};
