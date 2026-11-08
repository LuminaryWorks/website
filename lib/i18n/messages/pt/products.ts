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
    operatorLabel: "",
    operatorNote: "",
    availableThrough: "Entrega independente · sessão e faturação via LuminaryWorks",
    legal: "Termos do produto",
  },
  page: {
    index: "01",
    label: "PRODUCTS",
    title: "Produtos",
    lead: "Seis produtos comprovaram aterragem comercial na LuminaryWorks. Cada um entrega sozinho ou em cadeia de valor; o início de sessão e a faturação unificados vêm da plataforma.",
  },
  compare: {
    index: "02",
    label: "COMPARE",
    title: "Tabela comparativa",
    lead: "Papel, público, site, operador, estado comercial e Trial dos produtos disponíveis através da LuminaryWorks Platform.",
    headers: {
      product: "Produto",
      operator: "Marca",
      role: "Papel",
      audience: "Público",
      domain: "Domínio do site",
      status: "Estado comercial",
      trial: "Trial",
    },
    footnote:
      "O estado no catálogo descreve o checkout da plataforma. Não significa que um só operador execute todos os produtos. O DoerFlow não tem trial. Não há um escalão gratuito permanente.",
  },
};
