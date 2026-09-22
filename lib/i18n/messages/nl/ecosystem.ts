export const ecosystem = {
  page: {
    index: "01",
    label: "ECOSYSTEM",
    title: "Ecosysteem en architectuur",
    lead: "De zes producten werken onafhankelijk en vormen via open protocollen en een optionele gedeelde control plane een gefedereerde suite — wat gedeeld wordt zijn identiteit, entitlement en protocollen, nooit businesslogica.",
  },
  valueChain: {
    index: "01",
    label: "VALUE CHAIN",
    title: "Kringloop van de waardeketen",
    lead: "Creatie en leren leiden naar deviceconnectiviteit en data-inzicht, daarna naar visuele beveiliging en remote operaties en ten slotte naar afrekening waarbij agents en mensen gelijkwaardig zijn.",
    steps: [
      {
        stage: "Creëren",
        product: "BlockyEdu",
        productLocal: "智码工坊",
        output: "Skills, artefacten en trainingsmateriaal",
      },
      {
        stage: "Verbinden",
        product: "SyncroBrain",
        productLocal: "万物智脑",
        output: "Device-onboarding, telemetrie, incidenten en Safety Kernel",
      },
      {
        stage: "Zien",
        product: "DataLuminary",
        productLocal: "数据明鉴",
        output: "Rapporten, dashboards, exports en embeds",
      },
      {
        stage: "Bewaken",
        product: "VistaCast",
        productLocal: "视界云遥",
        output: "Visuele events, alarmstatus en bevestigingen",
      },
      {
        stage: "Besturen",
        product: "VistaRemote",
        productLocal: "视界远程",
        output: "Remote sessies, opname en audit",
      },
      {
        stage: "Verdienen",
        product: "DoerFlow",
        productLocal: "智工网",
        output: "Taken, bewijsstukken en afrekening in het grootboek",
      },
    ],
  },
  platform: {
    index: "02",
    label: "PLATFORM",
    title: "Gedeeld platform",
    lead: "De control plane is optioneel; productplanes blijven autonoom. Als centrale services stoppen, degradeert elk product exact zoals zijn manifest declareert — Casbin wordt nooit omzeild.",
    spineLabel: "CONTROL PLANE",
    unitsLabel: "CAPABILITY UNITS",
    items: [
      {
        title: "Identity (OIDC)",
        description:
          "Één OIDC-loginoppervlak voor zes merken; elk product houdt zijn eigen logo en teksten.",
        tags: ["Logto", "OIDC", "PKCE"],
      },
      {
        title: "Centrale Entitlement",
        description:
          "Plannen, Trial, License, seats en facturatie op één plek; commerciële rechten komen nooit in de JWT.",
        tags: ["NestJS", "PostgreSQL"],
      },
      {
        title: "Resource-ACL (PAL)",
        description:
          "De ACL op resourceniveau blijft in elk product; permissies reizen mee met de resource.",
        tags: ["Casbin", "PAL"],
      },
      {
        title: "AI-gateway",
        description: "Modelrouting over meerdere leveranciers, key vault en verbruiksmeting.",
        tags: ["lab", "BYOK"],
        lab: true,
      },
      {
        title: "Notificaties",
        description: "Gedeelde mail- en notificatiemodule met één uniforme afzenderidentiteit.",
        tags: ["@luminaryworks/notification"],
      },
      {
        title: "Gedeelde packages",
        description:
          "Identity-, ACL- en entitlement-clients worden als npm-packages geleverd — geen source-imports tussen repositories.",
        tags: ["@luminaryworks/*"],
      },
    ],
  },
  integration: {
    index: "03",
    label: "INTEGRATION",
    title: "Integratiematrix",
    lead: "Integratie tussen producten verloopt uitsluitend via OIDC, HTTP, MQTT en geversioneerde events — geen runtime-imports of gedeelde businessschema's.",
    allowedHeading: "Toegestaan",
    forbiddenHeading: "Verboden",
    allowed: [
      "OIDC-identiteitsfederatie",
      "HTTP REST-export / embed",
      "MQTT / CloudEvents",
      "Expliciete bindingsrecords (geen impliciete joins)",
    ],
    forbidden: [
      "Runtime-imports tussen producten (file:-paden, directe verwijzingen naar broncode)",
      "Gedeelde businessschema's of gedeelde businessdatabases",
      "De JWT van een ander product hergebruiken voor resource-autorisatie",
      "Commerciële rechten opnemen in JWT's",
    ],
  },
  errors: {
    index: "04",
    label: "ERRORS",
    title: "Uniforme foutsemantiek",
    lead: "HTTP-statuscodes betekenen in alle producten hetzelfde, voor orkestratie en audit.",
    items: [
      {
        code: "401",
        label: "Identity",
        description:
          "AuthN is mislukt; een identity-storing degradeert nooit naar anonieme toegang.",
      },
      {
        code: "402",
        label: "Entitlement",
        description:
          "Onvoldoende commerciële rechten (Trial verlopen, plan komt niet overeen, quotum op).",
      },
      {
        code: "403",
        label: "Resource-ACL",
        description: "Weigering door Casbin; een License omzeilt nooit resourcepermissies.",
      },
    ],
  },
  protocols: {
    index: "05",
    label: "PROTOCOLS",
    title: "Inventaris van open protocollen",
    lead: "Integreer eerst via open standaarden om lock-in en migratiekosten te beperken.",
    items: ["OIDC", "MQTT", "REST", "WebRTC", "ONVIF"],
  },
  autonomy: {
    index: "06",
    label: "AUTONOMY",
    title: "Productautonomie (harde randvoorwaarde)",
    lead: "Elk product bezit zijn eigen database, migraties, Casbin-policy en releasecadans. Het moet nog steeds opstarten en de readiness-check doorstaan wanneer alle zusterproducten uit staan.",
    boundaries: [
      "Elk product bezit zijn eigen database, migraties, Casbin-policy en releasecadans",
      "Het moet nog steeds opstarten en de readiness-check doorstaan wanneer alle zusterproducten uit staan",
    ],
  },
};
