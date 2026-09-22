export const home = {
  hero: {
    eyebrow: "LUMINARYWORKS · 启明工坊",
    title:
      "Sei prodotti AI con deployment indipendente. Un'unica base condivisa di identità e entitlement.",
    lead: "LuminaryWorks costruisce un ecosistema aperto AI-native su protocolli aperti — OIDC, MQTT, REST, WebRTC e ONVIF. Creazione e apprendimento, connettività dei dispositivi, analisi dei dati, sicurezza visiva, operazioni remote e collaborazione tra agenti formano un'unica catena del valore. Ogni prodotto viene rilasciato standalone e self-hosted e si compone all'occorrenza.",
    primaryCta: "Esplora i sei prodotti",
    secondaryCta: "Deployment self-hosted",
    docs: "Documentazione per sviluppatori",
    diagramAria:
      "Diagramma del control plane e dei piani di prodotto. La riga superiore è un control plane condiviso opzionale: Identity (OIDC), Entitlement e AI Gateway con etichetta lab. Le righe inferiori sono i sei piani di prodotto, ciascuno con il proprio database e la propria ACL. Le linee tratteggiate dal control plane ai piani di prodotto indicano che la dipendenza è opzionale.",
    controlPlane: "CONTROL PLANE",
    controlNote: "condiviso opzionale",
    productPlanes: "PRODUCT PLANES",
    productNote: "database e ACL propri",
    identity: "Identity",
    identityProto: "OIDC",
    entitlement: "Entitlement",
    aiGateway: "AI Gateway",
    lab: "lab",
  },
  facts: {
    items: [
      { value: "6", label: "prodotti commercializzabili in modo indipendente" },
      { value: "5", label: "profili di deployment congelati" },
      { value: "1", label: "livello condiviso di identità e entitlement" },
      { value: "5", label: "famiglie di protocolli aperti" },
      { value: "NC", label: "codice sorgente Polyform Noncommercial" },
    ],
  },
  valueChain: {
    index: "02",
    label: "VALUE CHAIN",
    title: "Sei prodotti, una catena del valore",
    lead: "Prima creazione e apprendimento, poi dispositivi e analisi dei dati, quindi sicurezza visiva e operazioni remote e infine agenti e persone che regolano insieme.",
    diagramAria:
      "Catena del valore: Creare con BlockyEdu, Connettere tramite SyncroBrain, Vedere con DataLuminary; Sorvegliare con VistaCast e Controllare con VistaRemote si diramano e confluiscono in Monetizzare con DoerFlow. Fate clic su un nodo per scorrere alla relativa scheda di prodotto.",
  },
  products: {
    index: "03",
    label: "PRODUCTS",
    title: "Ogni prodotto si vende da solo. Insieme chiudono il ciclo.",
  },
  platform: {
    index: "04",
    label: "PLATFORM",
    title:
      "Ciò che è condiviso sono identità, entitlement e protocolli — mai la logica di business.",
    lab: "lab",
    cards: [
      {
        id: "identity",
        title: "Login unificato · Identity",
        body: "Un unico servizio di login OIDC sostiene sei marchi; ogni prodotto mantiene logo e testi propri",
        tags: ["Logto", "OIDC", "PKCE"],
        lab: false,
      },
      {
        id: "entitlement",
        title: "Entitlement centrale · Entitlement",
        body: "Piani, trial, licenze, postazioni e pagamenti sono gestiti centralmente; i diritti commerciali non entrano mai nel JWT",
        tags: ["NestJS", "PostgreSQL"],
        lab: false,
      },
      {
        id: "pal",
        title: "Permessi sulle risorse · PAL",
        body: "L'ACL a livello di risorsa resta in ogni prodotto; i permessi viaggiano con la risorsa",
        tags: ["Casbin", "PAL"],
        lab: false,
      },
      {
        id: "aiGateway",
        title: "AI Gateway",
        body: "Accesso a modelli di più fornitori, vault delle chiavi e misurazione dei consumi (attualmente lab, non in produzione)",
        tags: ["lab", "BYOK"],
        lab: true,
      },
      {
        id: "notification",
        title: "Notifiche",
        body: "Modulo condiviso di posta e notifiche con un'identità di invio unificata",
        tags: ["@luminaryworks/notification"],
        lab: false,
      },
      {
        id: "sharedLibs",
        title: "Librerie condivise",
        body: "Client e strumenti di identità, permessi ed entitlement sono distribuiti come pacchetti npm — nessun import di codice tra repository",
        tags: ["@luminaryworks/*"],
        lab: false,
      },
    ],
    calloutLabel: "Semantica unificata degli errori",
    calloutCodes: "401 identità · 402 entitlement · 403 ACL delle risorse",
    emphasis:
      "Ogni prodotto possiede il proprio database, le migrazioni, le policy Casbin e la cadenza di release; continua ad avviarsi e a superare i controlli di readiness quando tutti i prodotti fratelli sono spenti.",
  },
  deployment: {
    index: "05",
    label: "DEPLOYMENT",
    title: "Da un singolo prodotto a un ciclo chiuso air-gapped",
    headers: {
      profile: "profile",
      meaning: "significato",
      composition: "composizione minima",
    },
    profiles: [
      {
        name: "standalone",
        meaning: "Deployment e vendita indipendenti di un singolo prodotto",
        composition: "1 piano di prodotto + il proprio database",
      },
      {
        name: "control-plane",
        meaning: "Solo control plane condiviso",
        composition: "Identity (+ Auth Gateway) + Entitlement",
      },
      {
        name: "agent-commerce",
        meaning: "Ciclo di composizione di base",
        composition: "VistaCast + SyncroBrain + DoerFlow",
      },
      {
        name: "smart-site",
        meaning: "Ciclo completo del livello superiore (additivo, non sostitutivo)",
        composition:
          "Il precedente + VistaRemote + DataLuminary (+ accesso alla formazione BlockyEdu)",
      },
      {
        name: "air-gapped",
        meaning: "Consegna offline / in intranet",
        composition:
          "Prodotto singolo o composizione, senza traffico in uscita; licenza offline, BYOK locale",
      },
    ],
    modes:
      "identity=central|external_oidc|local · entitlement=off|shadow_read|enforce|offline_license · ai=off|central|local_byok · notification=none|smtp",
    cta: "Vedi le opzioni di deployment",
  },
  why: {
    index: "06",
    label: "WHY",
    title: "Perché un'officina",
    items: [
      {
        title: "Prima i protocolli aperti",
        body: "L'integrazione usa solo OIDC / HTTP / MQTT / eventi. Nessun import a runtime tra prodotti, così si riducono il lock-in e il costo di migrazione.",
      },
      {
        title: "Business isolato, identità unificata",
        body: "Ogni prodotto possiede il proprio database e la propria ACL delle risorse. Login ed entitlement commerciale sono centrali, così l'esperienza è coerente e i guasti non si propagano.",
      },
      {
        title: "Il self-hosting è di prima classe",
        body: "IdP del cliente, licenze offline, BYOK locale e air-gapped erano nella specifica dal primo giorno — non aggiunti in seguito.",
      },
      {
        title: "Etichette di maturità oneste",
        body: "La documentazione e questo sito distinguono production / pilot / lab / stub. Codice rilasciato non significa pronto per la produzione.",
      },
    ],
  },
  cta: {
    index: "07",
    label: "CTA",
    title: "Prima provatelo, poi decidete",
    lead: "I prodotti idonei includono un Trial di 7 giorni; l'ecosistema non ha un piano gratuito permanente. Per consegne self-hosted od offline, contattate l'officina.",
    startTrial: "Avvia il Trial",
    contact: "Contatta il team commerciale",
    github: "GitHub",
  },
};
