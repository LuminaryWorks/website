/**
 * `items` è il testo approvato (spec/website-design.md §5). Non riscriverlo.
 * Le chiavi di pagina per /products possono essere aggiunte fuori da `items`.
 */
export const products = {
  items: {
    blockyedu: {
      nameLocal: "智码工坊",
      role: "Creare",
      oneLiner:
        "Creazione con AI per tutti — dai blocchi a siti web, mini programmi e giocattoli fisici; VibeLearn offre formazione aziendale self-hostabile.",
      chips: ["Studio a tre pannelli", "Artifact unificato", "VibeLearn LMS"],
      audience:
        "Creator, studenti dalla scuola all'età adulta, docenti, responsabili della formazione aziendale",
    },
    syncrobrain: {
      nameLocal: "万物智脑",
      role: "Connettere",
      oneLiner:
        "Un sistema operativo AI-native per dispositivi connessi — onboarding, shadow, OTA, regole sull'edge e gemelli digitali.",
      chips: ["Ingest multi-protocollo", "Regole sull'edge", "Safety Kernel"],
      audience:
        "Produttori di hardware, system integrator, fornitori di ricarica e accumulo di energia",
    },
    dataluminary: {
      nameLocal: "数据明鉴",
      role: "Vedere",
      oneLiner:
        "Illuminare i dati con l'AI — BI low-code, dashboard per videowall e report da un singolo prompt.",
      chips: ["DataView", "DataTalk", "DataInsight"],
      audience:
        "Team dati aziendali, operations, fornitori di hardware che necessitano di dashboard per dispositivi",
    },
    vistacast: {
      nameLocal: "视界云遥",
      role: "Sorvegliare",
      oneLiner:
      "AOI-lite di stazione per PCB e SMT: segni visibili di difetto di saldatura, ponti e saldatura insufficiente, più saldatura a onda e aspetto DIP. Non sostituisce una AOI di linea ad alta velocità.",
      chips: ["Giunti SMT", "Saldatura a onda", "Aspetto DIP"],
      audience: "Linee elettroniche e PCBA che servono ispezione tracciabile per stazione",
    },
    vistaremote: {
      nameLocal: "视界远程",
      role: "Controllare",
      oneLiner:
        "Desktop remoto multipiattaforma in tempo reale con analisi delle registrazioni self-hosted — PC industriali, gateway edge, postazioni IT e assistenza remota.",
      chips: ["Controllo via WebRTC", "Audit delle registrazioni di sessione", "Riepiloghi con AI"],
      audience:
        "Operations industriali, fornitori di servizi IT, supporto remoto, clienti self-hosted",
    },
    doerflow: {
      nameLocal: "智工网",
      role: "Monetizzare",
      oneLiner:
        "Il protocollo di liquidità per agenti autonomi — pubblicazione delle attività, matching e regolamento in escrow, dove persone e agenti sono pari.",
      chips: ["Marketplace di attività", "Economia degli agenti", "Regolamento multi-chain"],
      audience: "Sviluppatori Web3 e AI, operatori di dispositivi e agenti",
    },
  },
  card: {
    visitSite: "Visita il sito",
    viewSource: "Codice",
    trial7d: "Trial di 7 giorni",
    noTrial: "Nessun Trial",
    notSellable: "Non ancora commercializzabile",
    audienceLabel: "Pensato per",
    operatorLabel: "",
    operatorNote: "",
    availableThrough: "Consegna indipendente · accesso e fatturazione via LuminaryWorks",
    legal: "Termini del prodotto",
  },
  page: {
    index: "01",
    label: "PRODUCTS",
    title: "Prodotti",
    lead: "Sei prodotti hanno dimostrato l'atterraggio commerciale su LuminaryWorks. Ciascuno si consegna da solo o lungo la catena del valore; accesso e fatturazione unificati arrivano dalla piattaforma.",
  },
  compare: {
    index: "02",
    label: "COMPARE",
    title: "Tabella comparativa",
    lead: "Ruolo, pubblico, sito, operatore, stato commerciale e Trial dei prodotti disponibili attraverso la LuminaryWorks Platform.",
    headers: {
      product: "Prodotto",
      operator: "Brand",
      role: "Ruolo",
      audience: "Pubblico",
      domain: "Dominio del sito",
      status: "Stato commerciale",
      trial: "Trial",
    },
    footnote:
      "Lo stato in catalogo descrive il checkout della piattaforma. Non significa che un solo operatore gestisca ogni prodotto. DoerFlow non ha trial. Non esiste un piano gratuito permanente.",
  },
};
