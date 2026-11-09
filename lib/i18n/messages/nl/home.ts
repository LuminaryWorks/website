export const home = {
  hero: {
    eyebrow: "LUMINARYWORKS · PLATFORM",
    title: "AI SaaS-fundamentplatform",
    lead: "Uniforme accounts, facturatie en rechten, een AI-gateway, meldingen en gedeelde standaarden. Elk product levert zelfstandig — of samen langs de keten.",
    leadSecondary: "Zes producten hebben hun commerciële landing op dit platform bewezen en vormen één waardeketen.",
    primaryCta: "Producten verkennen",
    secondaryCta: "Self-hosted deployment",
    docs: "Ontwikkelaarsdocumentatie",
    diagramAria:
      "Schema van het besturingsvlak en de vlakken van partnerproducten. De bovenste rij is een optioneel gedeeld besturingsvlak: Identity (OIDC), Entitlement en AI Gateway. De onderste rijen zijn vlakken van partnerproducten, elk met een eigen database en ACL. Stippellijnen betekenen dat de afhankelijkheid optioneel is.",
    controlPlane: "CONTROL PLANE",
    controlNote: "optioneel gedeeld",
    productPlanes: "PRODUCT PLANES",
    productNote: "zelfstandig leverbaar",
    identity: "Identity",
    identityProto: "OIDC",
    entitlement: "Entitlement",
    aiGateway: "AI Gateway",
    lab: "",
  },
    facts: {
    items: [
      { value: "6 producten", label: "commercieel bewezen" },
      { value: "1 fundament", label: "login · facturatie · AI-gateway" },
      { value: "5 deploys", label: "standalone tot air-gapped" },
      { value: "Open source", label: "Polyform Noncommercial" },
    ],
  },
  valueChain: {
    index: "02",
    label: "VALUE CHAIN",
    title: "Eén waardeketen, al gevormd",
    lead: "Van maken en leren, via apparaatconnectie en data-inzicht, naar visuele beveiliging en beheer op afstand, tot afrekening tussen agents en mensen. Elk product levert alleen; samen sluiten ze de lus.",
    diagramAria:
      "Waardeketen: Creëren met BlockyEdu, Verbinden via SyncroBrain, Zien met DataLuminary; Bewaken met VistaCast en Besturen met VistaRemote takken af en komen samen in Verdienen met DoerFlow. Klik op een knooppunt om naar de bijbehorende productkaart te scrollen.",
  },
  products: {
    index: "03",
    label: "PRODUCTS",
    title: "Zes producten, elk klaar om zelfstandig te leveren",
  },
  platform: {
    index: "04",
    label: "PLATFORM",
    title: "Wat gedeeld wordt zijn identiteit, entitlement en protocollen — nooit businesslogica.",
    lab: "",
    cards: [
      {
        id: "identity",
        title: "Uniforme login · Identity",
        body: "Eén OIDC-aanmelddienst voor producten; elk houdt het eigen logo en de eigen tekst",
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
        body: "Toegang tot modellen van meerdere leveranciers, een key vault en verbruiksmeting",
        tags: ["BYOK"],
        lab: false,
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
    title: "Waarom een platform",
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
        body: "De documentatie en deze site onderscheiden production / pilot / stub. Opgeleverde code is niet hetzelfde als productieklaar.",
      },
    ],
  },
  cta: {
    index: "07",
    label: "CTA",
    title: "Eerst uitproberen, later beslissen",
    lead: "Waar een partner dat aanbiedt, omvat een in aanmerking komend product een proef van 7 dagen. Er is geen blijvend gratis niveau. Mail het platform voor self-hosted levering of om partner te worden.",
    startTrial: "Trial starten",
    contact: "Contact met sales",
    github: "GitHub",
  },
};
