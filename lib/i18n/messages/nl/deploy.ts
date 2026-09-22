export const deploy = {
  page: {
    index: "01",
    label: "DEPLOYMENT",
    title: "Deployment en self-hosting",
    lead: "Van één verkoopbaar product tot een air-gapped gesloten kringloop — vijf vastgezette profielen en een matrix van capability-modi, voor zowel hosted als self-hosted levering.",
  },
  profiles: {
    index: "02",
    label: "PROFILES",
    title: "Vijf deployment-profielen",
    lead: "Scenariopakketten orkestreren meerdere onafhankelijke Compose-projecten — voeg de zes producten nooit samen in één project.",
    headers: {
      profile: "profile",
      meaning: "Betekenis",
      minimum: "Minimale stack",
      modes: "Toegestane capability-modi",
    },
    rows: [
      {
        profile: "standalone",
        meaning: "Eén product, apart verkocht en uitgevoerd",
        minimum: "Één productplane + eigen database",
        modes: "identity: elk; entitlement: off / offline_license aanbevolen; ai=off|local_byok",
      },
      {
        profile: "control-plane",
        meaning: "Alleen een gedeelde control plane",
        minimum: "Identity (+ Auth Gateway) + Entitlement",
        modes: "Moet services.identity declareren",
      },
      {
        profile: "agent-commerce",
        meaning: "Basis gesloten kringloop",
        minimum: "VistaCast + SyncroBrain + DoerFlow (+ optionele control plane)",
        modes: "Alle drie de productplanes zijn vereist",
      },
      {
        profile: "smart-site",
        meaning: "Volledige bovenlaag (bovenop agent-commerce)",
        minimum: "Bovenstaande + VistaRemote + DataLuminary (+ BlockyEdu-trainingsingang)",
        modes: "BlockyEdu required moet false zijn",
      },
      {
        profile: "air-gapped",
        meaning: "Offline levering / intranet",
        minimum: "Eén product of een bundel zonder uitgaand verkeer",
        modes:
          "ai≠central; entitlement∈{off, offline_license}; identity: external_oidc aanbevolen, local toegestaan",
      },
    ],
  },
  capabilities: {
    index: "03",
    label: "CAPABILITIES",
    title: "Matrix van capability-modi",
    lead: "Het Control Manifest declareert elke modus expliciet; onbekende versies moeten het opstarten blokkeren.",
    modesLine:
      "identity=central|external_oidc|local · entitlement=off|shadow_read|enforce|offline_license · ai=off|central|local_byok · notification=none|smtp",
    headers: {
      capability: "Capability",
      modes: "Modi",
    },
    rows: [
      {
        capability: "identity",
        modes: "central · external_oidc · local (lab — geweigerd in pilot/production)",
      },
      { capability: "entitlement", modes: "off · shadow_read · enforce · offline_license" },
      {
        capability: "ai",
        modes: "off · central (lab — geblokkeerd in pilot/production) · local_byok",
      },
      { capability: "notification", modes: "none · smtp" },
    ],
  },
  installKit: {
    index: "04",
    label: "INSTALL",
    title: "Installatiepakketten",
    lead: "luminaryworks-install biedt een private installatie met wizard: kies producten, configureer domeinen en beheerdersaccounts en voer daarna de acceptatiechecks uit. De stap-voor-stap-documentatie over omgevingsvariabelen staat op de documentatiesite, om afwijkingen ten opzichte van het installatiepakket te voorkomen.",
    docsLink: "Installatiedocumentatie lezen",
  },
  airGapped: {
    index: "05",
    label: "AIR-GAPPED",
    title: "Air-gapped levering, offline License en local BYOK",
    lead: "Air-gapped levering is een eersteklas onderdeel van de specificatie — geen pleister na de release.",
    points: [
      "Het air-gapped-profiel verbiedt ai=central; entitlement kan alleen off of offline_license zijn.",
      "offline_license verifieert gesigneerde licenties lokaal — zonder harde afhankelijkheid van de centrale Entitlement.",
      "local_byok houdt modelsleutels aan de klantzijde; het centrale AI Platform is vandaag lab en mag niet in productie komen.",
      "identity gebruikt bij voorkeur de IdP van de klant (external_oidc); de lokale directory-modus blijft lab.",
    ],
  },
  maturity: {
    index: "06",
    label: "MATURITY",
    title: "Maturiteitslabels",
    lead: "Opgeleverde code is niet hetzelfde als productieklaar. Documentatie en manifests moeten faselabels bevatten.",
    headers: {
      label: "Label",
      meaning: "Betekenis",
      wording: "Toegestane formulering",
    },
    rows: [
      {
        label: "production",
        meaning: "Live, verkoopbaar, met regressiedekking",
        wording: '"Algemeen beschikbaar"',
      },
      { label: "pilot", meaning: "Echte gebruikers, beperkte scope", wording: '"Pilot"' },
      {
        label: "lab",
        meaning: "Draait op een laptop of intranet, niet gehard",
        wording: '"Experimenteel"',
      },
      {
        label: "stub",
        meaning: "De API bestaat, de implementatie is een placeholder",
        wording: '"Niet geïmplementeerd" — geen monetisatie of metering',
      },
    ],
    callout:
      "ai=central is vandaag lab: geen AuthN, geen Entitlement-gate, geen /ready. Preflight weigert pilot/production.",
  },
  cta: {
    title: "Private of offline levering nodig?",
    lead: "Neem contact op met het team van de werkplaats over profielen, License en leveringsomvang.",
    contact: "Contact met sales",
  },
};
