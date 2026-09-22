export const ecosystem = {
  page: {
    index: "01",
    label: "ECOSYSTEM",
    title: "Ecosistema e architettura",
    lead: "I sei prodotti funzionano in modo indipendente e si compongono come una suite federata tramite protocolli aperti e un control plane condiviso opzionale: ciò che è condiviso sono identità, entitlement e protocolli, mai la logica di business.",
  },
  valueChain: {
    index: "01",
    label: "VALUE CHAIN",
    title: "Ciclo della catena del valore",
    lead: "Creazione e apprendimento portano alla connettività dei dispositivi e all'analisi dei dati, poi alla sicurezza visiva e alle operazioni remote e infine al regolamento in cui agenti e persone sono pari.",
    steps: [
      {
        stage: "Creare",
        product: "BlockyEdu",
        productLocal: "智码工坊",
        output: "Competenze, artefatti e contenuti di formazione",
      },
      {
        stage: "Connettere",
        product: "SyncroBrain",
        productLocal: "万物智脑",
        output: "Onboarding dei dispositivi, telemetria, incidenti e Safety Kernel",
      },
      {
        stage: "Vedere",
        product: "DataLuminary",
        productLocal: "数据明鉴",
        output: "Report, dashboard, export e integrazioni embedded",
      },
      {
        stage: "Sorvegliare",
        product: "VistaCast",
        productLocal: "视界云遥",
        output: "Eventi visivi, stato degli allarmi e conferme",
      },
      {
        stage: "Controllare",
        product: "VistaRemote",
        productLocal: "视界远程",
        output: "Sessioni remote, registrazione e audit",
      },
      {
        stage: "Monetizzare",
        product: "DoerFlow",
        productLocal: "智工网",
        output: "Attività, ricevute e regolamento contabile",
      },
    ],
  },
  platform: {
    index: "02",
    label: "PLATFORM",
    title: "Piattaforma condivisa",
    lead: "Il control plane è opzionale; i piani di prodotto restano autonomi. Quando i servizi centrali si fermano, ogni prodotto degrada esattamente come dichiara il suo manifest e Casbin non viene mai bypassato.",
    spineLabel: "CONTROL PLANE",
    unitsLabel: "CAPABILITY UNITS",
    items: [
      {
        title: "Identity (OIDC)",
        description:
          "Un'unica superficie di login OIDC per sei marchi; ogni prodotto mantiene logo e testi propri.",
        tags: ["Logto", "OIDC", "PKCE"],
      },
      {
        title: "Entitlement centrale",
        description:
          "Piani, Trial, License, postazioni e fatturazione in un unico punto; i diritti commerciali non entrano mai nel JWT.",
        tags: ["NestJS", "PostgreSQL"],
      },
      {
        title: "ACL delle risorse (PAL)",
        description:
          "L'ACL a livello di risorsa resta in ogni prodotto; i permessi viaggiano con la risorsa.",
        tags: ["Casbin", "PAL"],
      },
      {
        title: "Gateway AI",
        description:
          "Routing dei modelli multi-fornitore, vault delle chiavi e misurazione dei consumi.",
        tags: ["lab", "BYOK"],
        lab: true,
      },
      {
        title: "Notifiche",
        description: "Modulo condiviso di posta e notifiche con un'identità mittente unificata.",
        tags: ["@luminaryworks/notification"],
      },
      {
        title: "Pacchetti condivisi",
        description:
          "I client di Identity, ACL ed entitlement sono distribuiti come pacchetti npm: nessun import di codice tra repository.",
        tags: ["@luminaryworks/*"],
      },
    ],
  },
  integration: {
    index: "03",
    label: "INTEGRATION",
    title: "Matrice di integrazione",
    lead: "L'integrazione tra prodotti usa solo OIDC, HTTP, MQTT ed eventi versionati: nessun import a runtime né schemi di business condivisi.",
    allowedHeading: "Consentito",
    forbiddenHeading: "Vietato",
    allowed: [
      "Federazione di identità OIDC",
      "Export / embed REST via HTTP",
      "MQTT / CloudEvents",
      "Record di associazione espliciti (nessuna join implicita)",
    ],
    forbidden: [
      "Import a runtime tra prodotti (percorsi file:, riferimenti diretti al codice)",
      "Schemi di business o database di business condivisi",
      "Riutilizzare il JWT di un altro prodotto per autorizzare le risorse",
      "Inserire diritti commerciali nei JWT",
    ],
  },
  errors: {
    index: "04",
    label: "ERRORS",
    title: "Semantica unificata degli errori",
    lead: "I codici di stato HTTP hanno lo stesso significato in tutti i prodotti, per orchestrazione e audit.",
    items: [
      {
        code: "401",
        label: "Identity",
        description:
          "AuthN non riuscita; un'interruzione dell'identity non degrada mai in accesso anonimo.",
      },
      {
        code: "402",
        label: "Entitlement",
        description:
          "Diritti commerciali insufficienti (Trial scaduto, piano non corrispondente, quota esaurita).",
      },
      {
        code: "403",
        label: "ACL delle risorse",
        description: "Negazione di Casbin; la License non bypassa mai i permessi sulle risorse.",
      },
    ],
  },
  protocols: {
    index: "05",
    label: "PROTOCOLS",
    title: "Inventario dei protocolli aperti",
    lead: "Integrare prima di tutto tramite standard aperti, per ridurre il lock-in e il costo di migrazione.",
    items: ["OIDC", "MQTT", "REST", "WebRTC", "ONVIF"],
  },
  autonomy: {
    index: "06",
    label: "AUTONOMY",
    title: "Autonomia di prodotto (vincolo rigido)",
    lead: "Ogni prodotto possiede il proprio database, le migrazioni, la policy Casbin e la cadenza di release. Deve comunque avviarsi e superare i controlli di readiness quando tutti i prodotti fratelli sono spenti.",
    boundaries: [
      "Ogni prodotto possiede il proprio database, le migrazioni, la policy Casbin e la cadenza di release",
      "Deve comunque avviarsi e superare i controlli di readiness quando tutti i prodotti fratelli sono spenti",
    ],
  },
};
