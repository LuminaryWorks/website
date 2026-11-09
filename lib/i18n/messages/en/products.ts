/**
 * `items` is the approved copy deck (spec/website-design.md §5). Do not rewrite it.
 * Page-level keys for /products may be appended outside `items`.
 */
export const products = {
  items: {
    blockyedu: {
      nameLocal: "智码工坊",
      role: "Create",
      oneLiner:
        "AI creation for everyone — from blocks to websites, mini programs and physical toys; VibeLearn delivers self-hostable corporate training.",
      chips: ["Three-pane studio", "Unified Artifact", "VibeLearn LMS"],
      audience: "Creators, K12-to-adult learners, teachers, corporate training admins",
    },
    syncrobrain: {
      nameLocal: "万物智脑",
      role: "Connect",
      oneLiner:
        "An AI-native operating system for connected devices — onboarding, shadows, OTA, edge rules and digital twins.",
      chips: ["Multi-protocol ingest", "Edge rules", "Safety Kernel"],
      audience: "Hardware makers, system integrators, charging and energy-storage vendors",
    },
    dataluminary: {
      nameLocal: "数据明鉴",
      role: "See",
      oneLiner:
        "Illuminate data with AI — low-code BI, video-wall dashboards, reports from a single prompt.",
      chips: ["DataView", "DataTalk", "DataInsight"],
      audience: "Enterprise data teams, operations, hardware vendors needing device dashboards",
    },
    vistacast: {
      nameLocal: "视界云遥",
      role: "Watch",
      oneLiner:
      "Station AOI-lite for PCB and SMT: visible solder-defect signs, bridges, and insufficient solder, plus wave solder and DIP appearance. Not a high-speed inline AOI machine.",
      chips: ["SMT solder joints", "Wave solder", "DIP appearance"],
      audience: "Electronics and PCBA lines that need traceable station inspection",
    },
    vistaremote: {
      nameLocal: "视界远程",
      role: "Control",
      oneLiner:
        "Cross-platform real-time remote desktop with self-hosted recording insight — industrial PCs, edge gateways, IT desktops and remote assistance.",
      chips: ["WebRTC control", "Session recording audit", "AI summaries"],
      audience:
        "Industrial operations, IT service providers, remote support, self-hosted customers",
    },
    doerflow: {
      nameLocal: "智工网",
      role: "Earn",
      oneLiner:
        "The liquidity protocol for autonomous agents — task publishing, matching and escrow settlement, where humans and agents are peers.",
      chips: ["Task marketplace", "Agent economy", "Multi-chain settlement"],
      audience: "Web3 and AI developers, device and agent operators",
    },
  },
  card: {
    visitSite: "Visit site",
    viewSource: "Source",
    trial7d: "7-day trial",
    noTrial: "No trial",
    notSellable: "Not yet sellable",
    audienceLabel: "Built for",
    operatorLabel: "",
    operatorNote: "",
    availableThrough: "Ships alone · sign-in and billing via LuminaryWorks",
    legal: "Product terms",
  },
  page: {
    index: "01",
    label: "PRODUCTS",
    title: "Products",
    lead: "Six products have proven commercial landing on LuminaryWorks. Each ships on its own, or together along the value chain; unified sign-in and billing come from the platform.",
  },
  compare: {
    index: "02",
    label: "COMPARE",
    title: "Comparison table",
    lead: "Products on the platform: role, audience, site, brand, commercial status and Trial.",
    headers: {
      product: "Product",
      operator: "Brand",
      role: "Role",
      audience: "Audience",
      domain: "Site domain",
      status: "Commercial status",
      trial: "Trial",
    },
    footnote:
      "Catalog status describes platform checkout. DoerFlow has no trial. There is no permanent free tier.",
  },
};
