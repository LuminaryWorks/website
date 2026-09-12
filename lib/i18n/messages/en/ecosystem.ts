export const ecosystem = {
  page: {
    index: "01",
    label: "ECOSYSTEM",
    title: "Ecosystem & architecture",
    lead: "Six products run independently and compose as a federated suite through open protocols and an optional shared control plane — what is shared is identity, entitlement and protocols, never business logic.",
  },
  valueChain: {
    index: "01",
    label: "VALUE CHAIN",
    title: "Value-chain loop",
    lead: "Creation and learning lead to device connectivity and data insight, then visual security and remote operations, and finally settlement where agents and humans are peers.",
    steps: [
      {
        stage: "Create",
        product: "BlockyEdu",
        productLocal: "智码工坊",
        output: "Skills, artifacts and training content",
      },
      {
        stage: "Connect",
        product: "SyncroBrain",
        productLocal: "万物智脑",
        output: "Device onboarding, telemetry, incidents and Safety Kernel",
      },
      {
        stage: "See",
        product: "DataLuminary",
        productLocal: "数据明鉴",
        output: "Reports, dashboards, exports and embeds",
      },
      {
        stage: "Watch",
        product: "VistaCast",
        productLocal: "视界云遥",
        output: "Visual events, alert state and acknowledgements",
      },
      {
        stage: "Control",
        product: "VistaRemote",
        productLocal: "视界远程",
        output: "Remote sessions, recording and audit",
      },
      {
        stage: "Earn",
        product: "DoerFlow",
        productLocal: "智工网",
        output: "Tasks, receipts and ledger settlement",
      },
    ],
  },
  platform: {
    index: "02",
    label: "PLATFORM",
    title: "Shared platform",
    lead: "The control plane is optional; product planes stay autonomous. When central services stop, each product degrades exactly as its manifest declares — Casbin is never bypassed.",
    items: [
      {
        title: "Identity (OIDC)",
        description:
          "One OIDC login surface for six brands; each product keeps its own logo and copy.",
        tags: ["Logto", "OIDC", "PKCE"],
      },
      {
        title: "Central Entitlement",
        description:
          "Plans, Trial, License, seats and billing in one place; commercial rights never enter the JWT.",
        tags: ["NestJS", "PostgreSQL"],
      },
      {
        title: "Resource ACL (PAL)",
        description:
          "Resource-level ACL stays in each product; permissions ship with the resource.",
        tags: ["Casbin", "PAL"],
      },
      {
        title: "AI gateway",
        description: "Multi-vendor model routing, key vault and usage metering.",
        tags: ["lab", "BYOK"],
        lab: true,
      },
      {
        title: "Notification",
        description: "Shared mail and notification module with a unified sender identity.",
        tags: ["@luminaryworks/notification"],
      },
      {
        title: "Shared packages",
        description:
          "Identity, ACL and entitlement clients ship as npm packages — no cross-repo source imports.",
        tags: ["@luminaryworks/*"],
      },
    ],
  },
  integration: {
    index: "03",
    label: "INTEGRATION",
    title: "Integration matrix",
    lead: "Cross-product integration uses OIDC, HTTP, MQTT and versioned events only — no runtime imports or shared business schemas.",
    allowedHeading: "Allowed",
    forbiddenHeading: "Forbidden",
    allowed: [
      "OIDC identity federation",
      "HTTP REST export / embed",
      "MQTT / CloudEvents",
      "Explicit binding records (no implicit joins)",
    ],
    forbidden: [
      "Cross-product runtime imports (file: paths, direct source references)",
      "Shared business schemas / shared business databases",
      "Reusing another product's JWT for resource authorization",
      "Embedding commercial rights in JWTs",
    ],
  },
  errors: {
    index: "04",
    label: "ERRORS",
    title: "Unified error semantics",
    lead: "HTTP status codes mean the same thing across products for orchestration and audit.",
    items: [
      {
        code: "401",
        label: "Identity",
        description: "AuthN failed; identity outages never degrade to anonymous access.",
      },
      {
        code: "402",
        label: "Entitlement",
        description:
          "Commercial rights insufficient (Trial expired, plan mismatch, quota exhausted).",
      },
      {
        code: "403",
        label: "Resource ACL",
        description: "Casbin denial; License never bypasses resource permissions.",
      },
    ],
  },
  protocols: {
    index: "05",
    label: "PROTOCOLS",
    title: "Open-protocol inventory",
    lead: "Integrate through open standards first to reduce lock-in and migration cost.",
    items: ["OIDC", "MQTT", "REST", "WebRTC", "ONVIF"],
  },
  autonomy: {
    index: "06",
    label: "AUTONOMY",
    title: "Product autonomy (hard constraint)",
    lead: "Each product owns its database, migrations, Casbin policy and release cadence. It must still start and pass readiness when every sibling product is down.",
  },
};
