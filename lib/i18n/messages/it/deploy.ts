export const deploy = {
  page: {
    index: "01",
    label: "DEPLOYMENT",
    title: "Deployment e self-hosting",
    lead: "Da un singolo prodotto commercializzabile a un ciclo chiuso air-gapped: cinque profili congelati e una matrice delle modalità di capability, per consegna hosted e self-hosted.",
  },
  profiles: {
    index: "02",
    label: "PROFILES",
    title: "Cinque profili di deployment",
    lead: "I pack di scenario orchestrano più progetti Compose indipendenti: i sei prodotti non vanno mai uniti in un unico progetto.",
    headers: {
      profile: "profile",
      meaning: "Significato",
      minimum: "Stack minimo",
      modes: "Modalità di capability consentite",
    },
    rows: [
      {
        profile: "standalone",
        meaning: "Prodotto singolo, venduto e gestito da solo",
        minimum: "Un piano di prodotto + il proprio database",
        modes:
          "identity: qualsiasi; entitlement: off / offline_license consigliato; ai=off|local_byok",
      },
      {
        profile: "control-plane",
        meaning: "Solo control plane condiviso",
        minimum: "Identity (+ Auth Gateway) + Entitlement",
        modes: "Deve dichiarare services.identity",
      },
      {
        profile: "agent-commerce",
        meaning: "Ciclo chiuso di base",
        minimum: "VistaCast + SyncroBrain + DoerFlow (+ control plane opzionale)",
        modes: "Sono richiesti tutti e tre i piani di prodotto",
      },
      {
        profile: "smart-site",
        meaning: "Ciclo superiore completo (si aggiunge a agent-commerce)",
        minimum: "Quanto sopra + VistaRemote + DataLuminary (+ accesso alla formazione BlockyEdu)",
        modes: "BlockyEdu required deve essere false",
      },
      {
        profile: "air-gapped",
        meaning: "Consegna offline / in intranet",
        minimum: "Prodotto singolo o bundle senza traffico in uscita",
        modes:
          "ai≠central; entitlement∈{off, offline_license}; identity: external_oidc consigliato, local ammesso",
      },
    ],
  },
  capabilities: {
    index: "03",
    label: "CAPABILITIES",
    title: "Matrice delle modalità di capability",
    lead: "Il Control Manifest dichiara ogni modalità in modo esplicito; le versioni sconosciute devono impedire l'avvio.",
    modesLine:
      "identity=central|external_oidc|local · entitlement=off|shadow_read|enforce|offline_license · ai=off|central|local_byok · notification=none|smtp",
    headers: {
      capability: "Capability",
      modes: "Modalità",
    },
    rows: [
      {
        capability: "identity",
        modes: "central · external_oidc · local (lab — rifiutato in pilot/production)",
      },
      { capability: "entitlement", modes: "off · shadow_read · enforce · offline_license" },
      {
        capability: "ai",
        modes: "off · central (lab — bloccato in pilot/production) · local_byok",
      },
      { capability: "notification", modes: "none · smtp" },
    ],
  },
  installKit: {
    index: "04",
    label: "INSTALL",
    title: "Pack di installazione",
    lead: "luminaryworks-install offre un'installazione privata guidata da wizard: scegliete i prodotti, configurate domini e account amministratore, poi eseguite i controlli di accettazione. La documentazione passo a passo sulle variabili d'ambiente vive sul sito della documentazione, per evitare disallineamenti rispetto al pacchetto di installazione.",
    docsLink: "Leggi la documentazione di installazione",
  },
  airGapped: {
    index: "05",
    label: "AIR-GAPPED",
    title: "Consegna air-gapped, License offline e BYOK locale",
    lead: "La consegna air-gapped è un requisito di prima classe nella specifica, non una patch successiva al rilascio.",
    points: [
      "Il profilo air-gapped vieta ai=central; entitlement può essere solo off oppure offline_license.",
      "offline_license verifica localmente le licenze firmate, senza dipendenze rigide dall'Entitlement centrale.",
      "local_byok mantiene le chiavi dei modelli lato cliente; l'AI Platform centrale è oggi lab e non deve entrare in produzione.",
      "identity dovrebbe usare l'IdP del cliente (external_oidc); la modalità directory locale resta lab.",
    ],
  },
  maturity: {
    index: "06",
    label: "MATURITY",
    title: "Etichette di maturità",
    lead: "Codice rilasciato non significa pronto per la produzione. Documentazione e manifest devono riportare le etichette di fase.",
    headers: {
      label: "Etichetta",
      meaning: "Significato",
      wording: "Formulazione consentita",
    },
    rows: [
      {
        label: "production",
        meaning: "In esercizio, commercializzabile, con copertura di regressione",
        wording: '"Disponibile a tutti"',
      },
      { label: "pilot", meaning: "Utenti reali, ambito limitato", wording: '"Pilot"' },
      {
        label: "lab",
        meaning: "Funziona su portatile o in intranet, non irrobustito",
        wording: '"Sperimentale"',
      },
      {
        label: "stub",
        meaning: "L'API esiste, l'implementazione è un placeholder",
        wording: '"Non implementato" — nessuna monetizzazione né misurazione',
      },
    ],
    callout:
      "Oggi ai=central è lab: nessuna AuthN, nessun gate di Entitlement, nessun /ready. Il preflight rifiuta pilot/production.",
  },
  cta: {
    title: "Vi serve una consegna privata o offline?",
    lead: "Contattate il team dell'officina per parlare di profili, License e perimetro della consegna.",
    contact: "Contatta il team commerciale",
  },
};
