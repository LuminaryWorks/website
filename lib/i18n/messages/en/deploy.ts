export const deploy = {
  page: {
    index: "01",
    label: "DEPLOYMENT",
    title: "Deployment & self-hosting",
    lead: "From a single sellable product to an air-gapped closed loop — five frozen profiles and a capability-mode matrix for both hosted and self-hosted delivery.",
  },
  profiles: {
    index: "02",
    label: "PROFILES",
    title: "Five deployment profiles",
    lead: "Scenario packs orchestrate multiple independent Compose projects — never merge six products into one project.",
    headers: {
      profile: "profile",
      meaning: "Meaning",
      minimum: "Minimum stack",
      modes: "Allowed capability modes",
    },
    rows: [
      {
        profile: "standalone",
        meaning: "Single product, sold and run alone",
        minimum: "One product plane + its own database",
        modes: "identity: any; entitlement: off / offline_license recommended; ai=off|local_byok",
      },
      {
        profile: "control-plane",
        meaning: "Shared control plane only",
        minimum: "Identity (+ Auth Gateway) + Entitlement",
        modes: "Must declare services.identity",
      },
      {
        profile: "agent-commerce",
        meaning: "Baseline closed loop",
        minimum: "VistaCast + SyncroBrain + DoerFlow (+ optional control plane)",
        modes: "All three product planes required",
      },
      {
        profile: "smart-site",
        meaning: "Full upper loop (layers on agent-commerce)",
        minimum: "Above + VistaRemote + DataLuminary (+ BlockyEdu training entry)",
        modes: "BlockyEdu required must be false",
      },
      {
        profile: "air-gapped",
        meaning: "Offline / intranet delivery",
        minimum: "Single product or a bundle with no egress",
        modes:
          "ai≠central; entitlement∈{off, offline_license}; identity: external_oidc recommended, local allowed",
      },
    ],
  },
  capabilities: {
    index: "03",
    label: "CAPABILITIES",
    title: "Capability-mode matrix",
    lead: "Control Manifest declares every mode explicitly; unknown versions must fail startup.",
    modesLine:
      "identity=central|external_oidc|local · entitlement=off|shadow_read|enforce|offline_license · ai=off|central|local_byok · notification=none|smtp",
    headers: {
      capability: "Capability",
      modes: "Modes",
    },
    rows: [
      {
        capability: "identity",
        modes: "central · external_oidc · local (lab — rejected in pilot/production)",
      },
      { capability: "entitlement", modes: "off · shadow_read · enforce · offline_license" },
      { capability: "ai", modes: "off · central (lab — blocked in pilot/production) · local_byok" },
      { capability: "notification", modes: "none · smtp" },
    ],
  },
  installKit: {
    index: "04",
    label: "INSTALL",
    title: "Install packs",
    lead: "luminaryworks-install provides a wizard-driven private install: pick products, configure domains and admin accounts, then run acceptance checks. Step-by-step env docs live on the docs site to avoid drift from the install bundle.",
    docsLink: "Read install docs",
  },
  airGapped: {
    index: "05",
    label: "AIR-GAPPED",
    title: "Air-gapped delivery, offline License & local BYOK",
    lead: "Air-gapped delivery is a first-class spec concern — not a post-ship patch.",
    points: [
      "The air-gapped profile forbids ai=central; entitlement is off or offline_license only.",
      "offline_license verifies signed licenses locally — no hard dependency on central Entitlement.",
      "local_byok keeps model keys on the customer side; central AI Platform is lab today and must not enter production.",
      "identity should use the customer IdP (external_oidc); local directory mode remains lab.",
    ],
  },
  maturity: {
    index: "06",
    label: "MATURITY",
    title: "Maturity labels",
    lead: "Shipped code is not the same as production-ready. Docs and manifests must carry stage labels.",
    headers: {
      label: "Label",
      meaning: "Meaning",
      wording: "Allowed wording",
    },
    rows: [
      {
        label: "production",
        meaning: "Live, sellable, regression-covered",
        wording: '"Generally available"',
      },
      { label: "pilot", meaning: "Real users, bounded scope", wording: '"Pilot"' },
      {
        label: "lab",
        meaning: "Runs on a laptop or intranet, not hardened",
        wording: '"Experimental"',
      },
      {
        label: "stub",
        meaning: "API exists, implementation is a placeholder",
        wording: '"Not implemented" — no monetization or metering',
      },
    ],
    callout:
      "ai=central is lab today: no AuthN, no Entitlement gate, no /ready. Preflight rejects pilot/production.",
  },
  cta: {
    title: "Need private or offline delivery?",
    lead: "Contact the workshop team to discuss profiles, License and delivery scope.",
    contact: "Contact sales",
  },
};
