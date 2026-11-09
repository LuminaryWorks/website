export const home = {
  hero: {
    eyebrow: "LUMINARYWORKS · PLATFORM",
    title: "Piattaforma di base AI SaaS",
    lead: "Account unificati, fatturazione e diritti, gateway IA, notifiche e standard condivisi. Ogni prodotto si consegna da solo — o insieme lungo la catena.",
    leadSecondary: "Sei prodotti hanno dimostrato l'atterraggio commerciale su questa piattaforma e formano una catena del valore.",
    primaryCta: "Esplora i prodotti",
    secondaryCta: "Deployment self-hosted",
    docs: "Documentazione per sviluppatori",
    diagramAria:
      "Schema del piano di controllo e dei piani dei prodotti partner. La riga superiore è un piano di controllo condiviso e facoltativo: Identity (OIDC), Entitlement e AI Gateway. Le righe inferiori sono i piani dei prodotti partner, ciascuno con il proprio database e la propria ACL. Le linee tratteggiate indicano che la dipendenza è facoltativa.",
    controlPlane: "CONTROL PLANE",
    controlNote: "condiviso opzionale",
    productPlanes: "PRODUCT PLANES",
    productNote: "consegna indipendente",
    identity: "Identity",
    identityProto: "OIDC",
    entitlement: "Entitlement",
    aiGateway: "AI Gateway",
    lab: "",
  },
    facts: {
    items: [
      { value: "6 prodotti", label: "atterraggio commerciale dimostrato" },
      { value: "1 fondazione", label: "accesso · fatturazione · gateway IA" },
      { value: "5 deploy", label: "standalone ad air-gapped" },
      { value: "Open source", label: "Polyform Noncommercial" },
    ],
  },
  valueChain: {
    index: "02",
    label: "VALUE CHAIN",
    title: "Una catena del valore già formata",
    lead: "Dalla creazione e apprendimento, al collegamento dei dispositivi e alla lettura dei dati, fino alla sicurezza visiva e alle operazioni remote, poi il regolamento tra agenti e persone. Ogni prodotto si consegna da solo; insieme chiudono il ciclo.",
    diagramAria:
      "Catena del valore: Creare con BlockyEdu, Connettere tramite SyncroBrain, Vedere con DataLuminary; Sorvegliare con VistaCast e Controllare con VistaRemote si diramano e confluiscono in Monetizzare con DoerFlow. Fate clic su un nodo per scorrere alla relativa scheda di prodotto.",
  },
  products: {
    index: "03",
    label: "PRODUCTS",
    title: "Sei prodotti, ciascuno pronto a essere consegnato da solo",
  },
  platform: {
    index: "04",
    label: "PLATFORM",
    title:
      "Ciò che è condiviso sono identità, entitlement e protocolli — mai la logica di business.",
    lab: "",
    cards: [
      {
        id: "identity",
        title: "Login unificato · Identity",
        body: "Un servizio di accesso OIDC per i prodotti; ciascuno mantiene logo e testi propri",
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
        body: "Accesso a modelli di più fornitori, vault delle chiavi e misurazione dei consumi",
        tags: ["BYOK"],
        lab: false,
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
    title: "Perché una piattaforma",
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
        body: "La documentazione e questo sito distinguono production / pilot / stub. Codice rilasciato non significa pronto per la produzione.",
      },
    ],
  },
  cta: {
    index: "07",
    label: "CTA",
    title: "Prima provatelo, poi decidete",
    lead: "Se il partner lo offre, un prodotto idoneo include una prova di 7 giorni. Non esiste un piano gratuito permanente. Per una consegna self-hosted, o per diventare partner, scrivi alla piattaforma.",
    startTrial: "Avvia il Trial",
    contact: "Contatta il team commerciale",
    github: "GitHub",
  },
};
