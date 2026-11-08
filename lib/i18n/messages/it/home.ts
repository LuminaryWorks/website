export const home = {
  hero: {
    eyebrow: "LUMINARYWORKS · PLATFORM",
    title:
      "Una piattaforma per accesso, fatturazione e uso dell'IA. I prodotti partner restano indipendenti.",
    lead: "LuminaryWorks fornisce un account unificato, fatturazione e diritti, un gateway IA, notifiche e standard condivisi. DataLuminary, BlockyEdu, VistaRemote, VistaCast, DoerFlow e SyncroBrain sono prodotti partner. Ciascuno è gestito dal proprio team o dalla propria entità, sul proprio dominio, con i propri termini, ed è disponibile attraverso la LuminaryWorks Platform.",
    primaryCta: "Vedi i prodotti partner",
    secondaryCta: "Deployment self-hosted",
    docs: "Documentazione per sviluppatori",
    diagramAria:
      "Schema del piano di controllo e dei piani dei prodotti partner. La riga superiore è un piano di controllo condiviso e facoltativo: Identity (OIDC), Entitlement e AI Gateway contrassegnato come lab. Le righe inferiori sono i piani dei prodotti partner, ciascuno con il proprio database e la propria ACL. Le linee tratteggiate indicano che la dipendenza è facoltativa.",
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
      { value: "6", label: "prodotti partner elencati" },
      { value: "5", label: "profili di deployment congelati" },
      { value: "1", label: "livello condiviso di identità e entitlement" },
      { value: "5", label: "famiglie di protocolli aperti" },
      { value: "NC", label: "codice sorgente Polyform Noncommercial" },
    ],
  },
  valueChain: {
    index: "02",
    label: "VALUE CHAIN",
    title: "Prodotti partner lungo una catena del valore",
    lead: "Questi prodotti partner si possono usare in sequenza: creazione e apprendimento, dispositivi e lettura dei dati, sicurezza visiva e operazioni remote, poi il regolamento tra agenti e persone. Ogni passaggio è gestito separatamente.",
    diagramAria:
      "Catena del valore: Creare con BlockyEdu, Connettere tramite SyncroBrain, Vedere con DataLuminary; Sorvegliare con VistaCast e Controllare con VistaRemote si diramano e confluiscono in Monetizzare con DoerFlow. Fate clic su un nodo per scorrere alla relativa scheda di prodotto.",
  },
  products: {
    index: "03",
    label: "PRODUCTS",
    title: "Ogni prodotto partner ha il proprio sito e il proprio operatore.",
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
        body: "Un servizio di accesso OIDC per i prodotti partner; ogni prodotto mantiene il proprio logo, i propri testi e il proprio operatore",
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
        body: "La documentazione e questo sito distinguono production / pilot / lab / stub. Codice rilasciato non significa pronto per la produzione.",
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
