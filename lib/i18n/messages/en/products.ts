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
        "Turn physical space into a programmable stream of visual events — reuse existing ONVIF/RTSP cameras, emit structured events at the edge.",
      chips: ["ONVIF/RTSP", "Footfall and intrusion", "Webhook events"],
      audience: "Retail chains, warehousing and logistics, small factories, facility security",
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
  },
  page: {
    index: "01",
    label: "PRODUCTS",
    title: "Product overview",
    lead: "Six independently sellable AI products. Each owns its database and ACL; they compose on demand through OIDC and open protocols.",
  },
  compare: {
    index: "02",
    label: "COMPARE",
    title: "Comparison table",
    lead: "Role, audience, domain, commercial status and Trial come from product specs — not rewritten on this page.",
    headers: {
      product: "Product",
      role: "Role",
      audience: "Audience",
      domain: "Site domain",
      status: "Commercial status",
      trial: "Trial",
    },
    footnote:
      "All six products are sellable. DoerFlow has no trial. The ecosystem has no permanent free tier.",
  },
};
