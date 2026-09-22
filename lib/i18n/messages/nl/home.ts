export const home = {
  hero: {
    eyebrow: "LUMINARYWORKS · 启明工坊",
    title:
      "Zes onafhankelijk te deployen AI-producten. Één gedeelde basis voor identiteit en entitlement.",
    lead: "LuminaryWorks bouwt een AI-native open ecosysteem op open protocollen — OIDC, MQTT, REST, WebRTC en ONVIF. Creatie en leren, deviceconnectiviteit, data-inzicht, visuele beveiliging, remote operaties en samenwerking tussen agents vormen één waardeketen. Elk product wordt standalone en self-hosted geleverd en combineert op aanvraag.",
    primaryCta: "Bekijk de zes producten",
    secondaryCta: "Self-hosted deployment",
    docs: "Ontwikkelaarsdocumentatie",
    diagramAria:
      "Diagram van de control plane en de productplanes. De bovenste rij is een optionele gedeelde control plane: Identity (OIDC), Entitlement en AI Gateway met het label lab. De onderste rijen zijn de zes productplanes, elk met een eigen database en ACL. Stippellijnen van de control plane naar de productplanes betekenen dat de afhankelijkheid optioneel is.",
    controlPlane: "CONTROL PLANE",
    controlNote: "optioneel gedeeld",
    productPlanes: "PRODUCT PLANES",
    productNote: "elk een eigen database en ACL",
    identity: "Identity",
    identityProto: "OIDC",
    entitlement: "Entitlement",
    aiGateway: "AI Gateway",
    lab: "lab",
  },
  facts: {
    items: [
      { value: "6", label: "onafhankelijk verkoopbare producten" },
      { value: "5", label: "vastgezette deployment-profielen" },
      { value: "1", label: "gedeelde laag voor identiteit en entitlement" },
      { value: "5", label: "families van open protocollen" },
      { value: "NC", label: "Polyform Noncommercial-broncode" },
    ],
  },
  valueChain: {
    index: "02",
    label: "VALUE CHAIN",
    title: "Zes producten, één waardeketen",
    lead: "Eerst creatie en leren, dan devices en data-inzicht, daarna visuele beveiliging en remote operaties en ten slotte agents en mensen die samen afrekenen.",
    diagramAria:
      "Waardeketen: Creëren met BlockyEdu, Verbinden via SyncroBrain, Zien met DataLuminary; Bewaken met VistaCast en Besturen met VistaRemote takken af en komen samen in Verdienen met DoerFlow. Klik op een knooppunt om naar de bijbehorende productkaart te scrollen.",
  },
  products: {
    index: "03",
    label: "PRODUCTS",
    title: "Elk product verkoopt op eigen kracht. Samen sluiten ze de kringloop.",
  },
  platform: {
    index: "04",
    label: "PLATFORM",
    title: "Wat gedeeld wordt zijn identiteit, entitlement en protocollen — nooit businesslogica.",
    lab: "lab",
    cards: [
      {
        id: "identity",
        title: "Uniforme login · Identity",
        body: "Één OIDC-loginservice draagt zes merken; elk product houdt zijn eigen logo en teksten",
        tags: ["Logto", "OIDC", "PKCE"],
        lab: false,
      },
      {
        id: "entitlement",
        title: "Centrale entitlement · Entitlement",
        body: "Plannen, trials, licenties, seats en betalingen worden centraal beheerd; commerciële rechten komen nooit in de JWT",
        tags: ["NestJS", "PostgreSQL"],
        lab: false,
      },
      {
        id: "pal",
        title: "Resourcepermissies · PAL",
        body: "De ACL op resourceniveau blijft in elk product; permissies reizen mee met de resource",
        tags: ["Casbin", "PAL"],
        lab: false,
      },
      {
        id: "aiGateway",
        title: "AI Gateway",
        body: "Toegang tot modellen van meerdere leveranciers, een key vault en verbruiksmeting (momenteel lab, niet in productie)",
        tags: ["lab", "BYOK"],
        lab: true,
      },
      {
        id: "notification",
        title: "Notificaties",
        body: "Gedeelde mail- en notificatiemodule met één uniforme afzenderidentiteit",
        tags: ["@luminaryworks/notification"],
        lab: false,
      },
      {
        id: "sharedLibs",
        title: "Gedeelde libraries",
        body: "Identity-, permissie- en entitlement-clients en tooling worden als npm-packages geleverd — geen source-imports tussen repositories",
        tags: ["@luminaryworks/*"],
        lab: false,
      },
    ],
    calloutLabel: "Uniforme foutsemantiek",
    calloutCodes: "401 identiteit · 402 entitlement · 403 resource-ACL",
    emphasis:
      "Elk product bezit zijn eigen database, migraties, Casbin-policies en releasecadans; het start nog steeds op en doorstaat de readiness-checks wanneer alle zusterproducten uit staan.",
  },
  deployment: {
    index: "05",
    label: "DEPLOYMENT",
    title: "Van één product tot een air-gapped gesloten kringloop",
    headers: {
      profile: "profile",
      meaning: "betekenis",
      composition: "minimale samenstelling",
    },
    profiles: [
      {
        name: "standalone",
        meaning: "Onafhankelijke deployment en verkoop van één product",
        composition: "1 productplane + eigen database",
      },
      {
        name: "control-plane",
        meaning: "Alleen een gedeelde control plane",
        composition: "Identity (+ Auth Gateway) + Entitlement",
      },
      {
        name: "agent-commerce",
        meaning: "Basissamenstelling van de kringloop",
        composition: "VistaCast + SyncroBrain + DoerFlow",
      },
      {
        name: "smart-site",
        meaning: "Volledige bovenlaag (aanvullend, geen vervanging)",
        composition: "Vorige + VistaRemote + DataLuminary (+ BlockyEdu-trainingsingang)",
      },
      {
        name: "air-gapped",
        meaning: "Offline levering / intranet",
        composition:
          "Eén product of samenstelling, geen uitgaand verkeer; offline licentie, local BYOK",
      },
    ],
    modes:
      "identity=central|external_oidc|local · entitlement=off|shadow_read|enforce|offline_license · ai=off|central|local_byok · notification=none|smtp",
    cta: "Deployment-opties bekijken",
  },
  why: {
    index: "06",
    label: "WHY",
    title: "Waarom een werkplaats",
    items: [
      {
        title: "Open protocollen eerst",
        body: "Integratie verloopt alleen via OIDC / HTTP / MQTT / events. Geen runtime-imports tussen producten, wat lock-in en migratiekosten verlaagt.",
      },
      {
        title: "Geïsoleerde business, uniforme identiteit",
        body: "Elk product bezit zijn eigen database en resource-ACL. Login en commerciële entitlement zijn centraal, waardoor de ervaring consistent is en storingen niet doorwerken.",
      },
      {
        title: "Self-hosting is eersteklas",
        body: "De IdP van de klant, offline licenties, local BYOK en air-gapped zaten vanaf dag één in de specificatie — niet achteraf ingebouwd.",
      },
      {
        title: "Eerlijke maturiteitslabels",
        body: "De documentatie en deze site onderscheiden production / pilot / lab / stub. Opgeleverde code is niet hetzelfde als productieklaar.",
      },
    ],
  },
  cta: {
    index: "07",
    label: "CTA",
    title: "Eerst uitproberen, later beslissen",
    lead: "In aanmerking komende producten hebben een trial van 7 dagen; het ecosysteem heeft geen permanent gratis plan. Voor self-hosted of offline levering neemt u contact op met de werkplaats.",
    startTrial: "Trial starten",
    contact: "Contact met sales",
    github: "GitHub",
  },
};
