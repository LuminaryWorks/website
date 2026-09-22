/**
 * `items` is de goedgekeurde copy (spec/website-design.md §5). Niet herschrijven.
 * Paginasleutels voor /products kunnen buiten `items` worden toegevoegd.
 */
export const products = {
  items: {
    blockyedu: {
      nameLocal: "智码工坊",
      role: "Creëren",
      oneLiner:
        "AI-creatie voor iedereen — van blokken naar websites, mini-apps en fysiek speelgoed; VibeLearn levert self-hostbare bedrijfstrainingen.",
      chips: ["Studio met drie panelen", "Uniforme Artifact", "VibeLearn LMS"],
      audience:
        "Creators, lerenden van basisschool tot volwassenen, docenten, beheerders van bedrijfstrainingen",
    },
    syncrobrain: {
      nameLocal: "万物智脑",
      role: "Verbinden",
      oneLiner:
        "Een AI-native besturingssysteem voor verbonden devices — onboarding, shadows, OTA, edge-regels en digital twins.",
      chips: ["Multiprotocol-ingest", "Edge-regels", "Safety Kernel"],
      audience:
        "Hardwarefabrikanten, systeemintegratoren, leveranciers van laadinfrastructuur en energieopslag",
    },
    dataluminary: {
      nameLocal: "数据明鉴",
      role: "Zien",
      oneLiner:
        "Data verlichten met AI — low-code BI, videowall-dashboards en rapporten uit één prompt.",
      chips: ["DataView", "DataTalk", "DataInsight"],
      audience:
        "Enterprise-datateams, operations, hardwareleveranciers die devicedashboards nodig hebben",
    },
    vistacast: {
      nameLocal: "视界云遥",
      role: "Bewaken",
      oneLiner:
        "Maak van fysieke ruimte een programmeerbare stroom visuele events — hergebruik bestaande ONVIF/RTSP-camera's en verstuur gestructureerde events op de edge.",
      chips: ["ONVIF/RTSP", "Bezoekersaantallen en inbraak", "Webhook-events"],
      audience: "Retailketens, warehousing en logistiek, kleine fabrieken, facilitaire beveiliging",
    },
    vistaremote: {
      nameLocal: "视界远程",
      role: "Besturen",
      oneLiner:
        "Cross-platform realtime remote desktop met self-hosted opname-inzicht — industriële pc's, edge-gateways, IT-desktops en remote hulp.",
      chips: ["WebRTC-besturing", "Audit van sessieopnames", "AI-samenvattingen"],
      audience: "Industriële operations, IT-dienstverleners, remote support, self-hosted klanten",
    },
    doerflow: {
      nameLocal: "智工网",
      role: "Verdienen",
      oneLiner:
        "Het liquiditeitsprotocol voor autonome agents — taken publiceren, matchen en afrekenen via escrow, waarbij mensen en agents gelijkwaardig zijn.",
      chips: ["Taakmarktplaats", "Agent-economie", "Multi-chain-afrekening"],
      audience: "Web3- en AI-ontwikkelaars, beheerders van devices en agents",
    },
  },
  card: {
    visitSite: "Site bezoeken",
    viewSource: "Broncode",
    trial7d: "Trial van 7 dagen",
    noTrial: "Geen trial",
    notSellable: "Nog niet verkoopbaar",
    audienceLabel: "Gemaakt voor",
  },
  page: {
    index: "01",
    label: "PRODUCTS",
    title: "Productoverzicht",
    lead: "Zes onafhankelijk verkoopbare AI-producten. Elk bezit zijn eigen database en ACL; ze combineren op aanvraag via OIDC en open protocollen.",
  },
  compare: {
    index: "02",
    label: "COMPARE",
    title: "Vergelijkingstabel",
    lead: "Rol, doelgroep, domein, commerciële status en Trial komen uit de productspecificaties — ze worden op deze pagina niet herschreven.",
    headers: {
      product: "Product",
      role: "Rol",
      audience: "Doelgroep",
      domain: "Domein van de site",
      status: "Commerciële status",
      trial: "Trial",
    },
    footnote:
      "Alle zes producten zijn verkoopbaar. DoerFlow heeft geen trial. Het ecosysteem heeft geen permanent gratis plan.",
  },
};
