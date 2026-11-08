export const home = {
  hero: {
    eyebrow: "LUMINARYWORKS · PLATFORM",
    title: "A platform for sign-in, billing and AI access. Partner products stay independent.",
    lead: "LuminaryWorks provides a unified account, billing and entitlement, an AI gateway, notifications and shared standards. DataLuminary, BlockyEdu, VistaRemote, VistaCast, DoerFlow and SyncroBrain are partner products. Each is operated by its own team or entity, on its own domain, with its own terms, and is available through the LuminaryWorks Platform.",
    primaryCta: "See partner products",
    secondaryCta: "Self-hosted deployment",
    docs: "Developer docs",
    diagramAria:
      "Diagram of the control plane and partner product planes. The upper row is an optional shared control plane: Identity (OIDC), Entitlement, and AI Gateway marked lab. The lower rows are partner product planes, each with its own database and ACL. Dashed lines mean the dependency is optional.",
    controlPlane: "CONTROL PLANE",
    controlNote: "optional shared",
    productPlanes: "PRODUCT PLANES",
    productNote: "own database and ACL each",
    identity: "Identity",
    identityProto: "OIDC",
    entitlement: "Entitlement",
    aiGateway: "AI Gateway",
    lab: "lab",
  },
  facts: {
    items: [
      { value: "6", label: "partner products listed" },
      { value: "5", label: "frozen deployment profiles" },
      { value: "1", label: "shared identity and entitlement layer" },
      { value: "5", label: "families of open protocols" },
      { value: "NC", label: "Polyform Noncommercial source" },
    ],
  },
  valueChain: {
    index: "02",
    label: "VALUE CHAIN",
    title: "Partner products along one value chain",
    lead: "These partner products can be used in sequence: creation and learning, devices and data insight, visual security and remote operations, then settlement between agents and humans. Each step is operated separately.",
    diagramAria:
      "Value chain: Create with BlockyEdu, Connect through SyncroBrain, See with DataLuminary; Watch with VistaCast and Control with VistaRemote branch off and merge into Earn with DoerFlow. Click a node to scroll to its product card.",
  },
  products: {
    index: "03",
    label: "PRODUCTS",
    title: "Each partner product stands on its own site, with its own operator.",
  },
  platform: {
    index: "04",
    label: "PLATFORM",
    title: "What is shared is identity, entitlement and protocols — never business logic.",
    lab: "lab",
    cards: [
      {
        id: "identity",
        title: "Unified login · Identity",
        body: "One OIDC login service for partner products; each product keeps its own logo, copy and operator",
        tags: ["Logto", "OIDC", "PKCE"],
        lab: false,
      },
      {
        id: "entitlement",
        title: "Central entitlement · Entitlement",
        body: "Plans, trials, licenses, seats and payments are managed centrally; commercial rights never enter the JWT",
        tags: ["NestJS", "PostgreSQL"],
        lab: false,
      },
      {
        id: "pal",
        title: "Resource permissions · PAL",
        body: "Resource-level ACL stays in each product; permissions travel with the resource",
        tags: ["Casbin", "PAL"],
        lab: false,
      },
      {
        id: "aiGateway",
        title: "AI Gateway",
        body: "Multi-vendor model access, a key vault and usage metering (currently lab, not in production)",
        tags: ["lab", "BYOK"],
        lab: true,
      },
      {
        id: "notification",
        title: "Notifications",
        body: "Shared mail and notification module with a unified sending identity",
        tags: ["@luminaryworks/notification"],
        lab: false,
      },
      {
        id: "sharedLibs",
        title: "Shared libraries",
        body: "Identity, permission and entitlement clients and tooling ship as npm packages — no cross-repo source imports",
        tags: ["@luminaryworks/*"],
        lab: false,
      },
    ],
    calloutLabel: "Unified error semantics",
    calloutCodes: "401 identity · 402 entitlement · 403 resource ACL",
    emphasis:
      "Each product owns its own database, migrations, Casbin policies and release cadence; it still boots and passes ready checks when every sibling product is off.",
  },
  deployment: {
    index: "05",
    label: "DEPLOYMENT",
    title: "From a single product to an air-gapped closed loop",
    headers: {
      profile: "profile",
      meaning: "meaning",
      composition: "minimum composition",
    },
    profiles: [
      {
        name: "standalone",
        meaning: "Single-product independent deploy and sale",
        composition: "1 product plane + its own database",
      },
      {
        name: "control-plane",
        meaning: "Shared control plane only",
        composition: "Identity (+ Auth Gateway) + Entitlement",
      },
      {
        name: "agent-commerce",
        meaning: "Baseline composition loop",
        composition: "VistaCast + SyncroBrain + DoerFlow",
      },
      {
        name: "smart-site",
        meaning: "Upper-layer full loop (additive, not a replacement)",
        composition: "Previous + VistaRemote + DataLuminary (+ BlockyEdu training entry)",
      },
      {
        name: "air-gapped",
        meaning: "Disconnected / intranet delivery",
        composition: "Single product or composition, no egress; offline license, local BYOK",
      },
    ],
    modes:
      "identity=central|external_oidc|local · entitlement=off|shadow_read|enforce|offline_license · ai=off|central|local_byok · notification=none|smtp",
    cta: "View deployment options",
  },
  why: {
    index: "06",
    label: "WHY",
    title: "Why a platform",
    items: [
      {
        title: "Open protocols first",
        body: "Integration is OIDC / HTTP / MQTT / events only. No cross-product runtime imports, which lowers lock-in and migration cost.",
      },
      {
        title: "Isolated business, unified identity",
        body: "Each product owns its database and resource ACL. Login and commercial entitlement are central, so the experience is consistent while failures do not cascade.",
      },
      {
        title: "Self-hosting is first-class",
        body: "Customer IdP, offline licenses, local BYOK and air-gapped were in the spec from day one — not retrofitted later.",
      },
      {
        title: "Honest maturity labels",
        body: "Docs and this site distinguish production / pilot / lab / stub. Shipped code is not the same as production-ready.",
      },
    ],
  },
  cta: {
    index: "07",
    label: "CTA",
    title: "Run it first, decide later",
    lead: "Where a partner offers it, an eligible product includes a 7-day trial. There is no permanent free tier. For self-hosted delivery, or to become a partner, email the platform.",
    startTrial: "Start trial",
    contact: "Contact sales",
    github: "GitHub",
  },
};
