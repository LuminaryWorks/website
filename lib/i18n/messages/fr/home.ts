export const home = {
  hero: {
    eyebrow: "LUMINARYWORKS · PLATFORM",
    title: "Plateforme de fondation AI SaaS",
    lead: "Comptes unifiés, facturation et droits, passerelle IA, notifications et standards partagés. Chaque produit se livre seul — ou ensemble le long de la chaîne.",
    leadSecondary: "Six produits ont prouvé leur atterrissage commercial sur cette plateforme et forment une chaîne de valeur.",
    primaryCta: "Explorer les produits",
    secondaryCta: "Déploiement auto-hébergé",
    docs: "Documents pour développeurs",
    diagramAria:
      "Schéma du plan de contrôle et des plans des produits partenaires. La rangée supérieure est un plan de contrôle partagé et facultatif : Identity (OIDC), Entitlement et AI Gateway. Les rangées inférieures sont les plans des produits partenaires, chacun avec sa base de données et son ACL. Les pointillés indiquent que la dépendance est facultative.",
    controlPlane: "PLAN DE CONTRÔLE",
    controlNote: "partagé en option",
    productPlanes: "PLANS DE PRODUITS",
    productNote: "livraison indépendante",
    identity: "Identité",
    identityProto: "OIDC",
    entitlement: "Droit",
    aiGateway: "Passerelle IA",
    lab: "",
  },
    facts: {
    items: [
      { value: "6 produits", label: "atterrissage commercial prouvé" },
      { value: "1 fondation", label: "connexion · facturation · passerelle IA" },
      { value: "5 déploiements", label: "standalone à air-gapped" },
      { value: "Open source", label: "Polyform Noncommercial" },
    ],
  },
  valueChain: {
    index: "02",
    label: "CHAÎNE DE VALEUR",
    title: "Une chaîne de valeur déjà en place",
    lead: "De la création et l'apprentissage à la connexion des appareils et à la lecture des données, puis à la sécurité visuelle et aux opérations à distance, jusqu'au règlement entre agents et humains. Chaque produit se livre seul ; ensemble, ils ferment la boucle.",
    diagramAria:
      "Chaîne de valeur : Créer avec BlockyEdu, Connecter via SyncroBrain, Voir avec DataLuminary ; Regardez avec VistaCast et Contrôlez avec VistaRemote bifurquez et fusionnez dans Earn avec DoerFlow. Cliquez sur un nœud pour faire défiler jusqu'à sa fiche produit.",
  },
  products: {
    index: "03",
    label: "PRODUITS",
    title: "Six produits, chacun prêt à être livré seul",
  },
  platform: {
    index: "04",
    label: "PLATE-FORME",
    title:
      "Ce qui est partagé, c'est l'identité, les droits et les protocoles, jamais la logique métier.",
    lab: "",
    cards: [
      {
        id: "identité",
        title: "Connexion unifiée · Identité",
        body: "Un service de connexion OIDC pour les produits ; chacun garde son logo et ses textes",
        tags: ["Se connecter", "OIDC", "PKCE"],
        lab: false,
      },
      {
        id: "droit",
        title: "Droit central · Droit",
        body: "Les forfaits, les essais, les licences, les postes et les paiements sont gérés de manière centralisée ; les droits commerciaux n'entrent jamais dans le JWT",
        tags: ["NestJS", "PostgreSQL"],
        lab: false,
      },
      {
        id: "copain",
        title: "Autorisations des ressources · PAL",
        body: "Le niveau de ressource ACL reste dans chaque produit ; les autorisations voyagent avec la ressource",
        tags: ["Casbine", "COPAIN"],
        lab: false,
      },
      {
        id: "aiGateway",
        title: "Passerelle IA",
        body: "Accès aux modèles multifournisseurs, coffre-fort de clés et mesure de l'utilisation",
        tags: ["BYOK"],
        lab: false,
      },
      {
        id: "notification",
        title: "Notifications",
        body: "Module de messagerie et de notification partagé avec une identité d'envoi unifiée",
        tags: ["@luminaryworks/notification"],
        lab: false,
      },
      {
        id: "Bibliothèques partagées",
        title: "Bibliothèques partagées",
        body: "Les clients et outils d’identité, d’autorisation et de droit sont livrés sous forme de packages npm – pas d’importations de sources entre dépôts",
        tags: ["@luminaryworks/*"],
        lab: false,
      },
    ],
    calloutLabel: "Sémantique d'erreur unifiée",
    calloutCodes: "401 identité · 402 droit · 403 ressource ACL",
    emphasis:
      "Chaque produit possède sa propre base de données, ses migrations, ses politiques Casbin et sa propre cadence de publication ; il démarre et passe toujours les contrôles lorsque chaque produit frère est éteint.",
  },
  deployment: {
    index: "05",
    label: "DÉPLOIEMENT",
    title: "D'un produit unique à une boucle fermée à espace d'air",
    headers: {
      profile: "profil",
      meaning: "signification",
      composition: "composition minimale",
    },
    profiles: [
      {
        name: "autonome",
        meaning: "Déploiement et vente indépendants d'un seul produit",
        composition: "1 plan produit + sa propre base de données",
      },
      {
        name: "plan de contrôle",
        meaning: "Plan de contrôle partagé uniquement",
        composition: "Identité (+ passerelle d'authentification) + droit",
      },
      {
        name: "agent-commerce",
        meaning: "Boucle de composition de base",
        composition: "VistaCast + SyncroBrain + DoerFlow",
      },
      {
        name: "site intelligent",
        meaning: "Boucle complète de la couche supérieure (additif, pas remplacement)",
        composition: "Précédent + VistaRemote + DataLuminary (+ BlockyEdu entrée de formation)",
      },
      {
        name: "entrefer",
        meaning: "Livraison déconnectée / intranet",
        composition:
          "Produit ou composition unique, pas de sortie ; licence hors ligne, BYOK local",
      },
    ],
    modes:
      "identité=central|external_oidc|local · entitlement=off|shadow_read|enforce|offline_license · ai=off|central|local_byok · notification=none|smtp",
    cta: "Afficher les options de déploiement",
  },
  why: {
    index: "06",
    label: "POURQUOI",
    title: "Pourquoi une plateforme",
    items: [
      {
        title: "Ouvrir d'abord les protocoles",
        body: "L'intégration est OIDC / HTTP / MQTT / événements uniquement. Aucune importation de runtime entre produits, ce qui réduit les coûts de verrouillage et de migration.",
      },
      {
        title: "Entreprise isolée, identité unifiée",
        body: "Chaque produit possède sa base de données et sa ressource ACL. La connexion et les droits commerciaux sont essentiels, de sorte que l'expérience est cohérente sans que les échecs ne se répercutent en cascade.",
      },
      {
        title: "L'auto-hébergement est de première classe",
        body: "L'IdP client, les licences hors ligne, le BYOK local et l'air-gapping faisaient partie des spécifications dès le premier jour, et n'ont pas été mis à niveau ultérieurement.",
      },
      {
        title: "Étiquettes de maturité honnêtes",
        body: "Docs et ce site distinguent production / pilote / stub. Le code expédié n’est pas le même que celui prêt pour la production.",
      },
    ],
  },
  cta: {
    index: "07",
    label: "Appel à l'action",
    title: "Exécutez-le d'abord, décidez plus tard",
    lead: "Les produits éligibles incluent un essai de 7 jours. Il n'y a pas d'offre gratuite permanente. Pour une livraison auto-hébergée ou une demande commerciale, écrivez à la plateforme.",
    startTrial: "Commencer l'essai",
    contact: "Contacter le service commercial",
    github: "GitHub",
  },
};
