export const home = {
  "hero": {
    "eyebrow": "LUMINARYWORKS · 启明工坊",
    "title": "Six produits d'IA déployables indépendamment. Une fondation partagée en matière d’identité et de droits.",
    "lead": "LuminaryWorks construit un écosystème ouvert natif d'IA sur des protocoles ouverts — OIDC, MQTT, REST, WebRTC et ONVIF. La création et l'apprentissage, la connectivité des appareils, la compréhension des données, la sécurité visuelle, les opérations à distance et la collaboration des agents forment une seule chaîne de valeur. Chaque produit est livré de manière autonome et auto-hébergé, et compose à la demande.",
    "primaryCta": "Découvrez les six produits",
    "secondaryCta": "Déploiement auto-hébergé",
    "docs": "Documents pour développeurs",
    "diagramAria": "Schéma du plan de contrôle et des plans produits. La rangée supérieure est un plan de contrôle partagé facultatif : identité (OIDC), droit et laboratoire marqué AI Gateway. Les rangées inférieures représentent les six plans de produits, chacun avec sa propre base de données et ACL. Les lignes pointillées allant du plan de contrôle aux plans de produit signifient que la dépendance est facultative.",
    "controlPlane": "PLAN DE CONTRÔLE",
    "controlNote": "partagé en option",
    "productPlanes": "PLANS DE PRODUITS",
    "productNote": "propre base de données et ACL chacun",
    "identity": "Identité",
    "identityProto": "OIDC",
    "entitlement": "Droit",
    "aiGateway": "Passerelle IA",
    "lab": "laboratoire"
  },
  "facts": {
    "items": [
      {
        "value": "6",
        "label": "produits vendables indépendamment"
      },
      {
        "value": "5",
        "label": "profils de déploiement gelés"
      },
      {
        "value": "1",
        "label": "couche d'identité et de droits partagée"
      },
      {
        "value": "5",
        "label": "familles de protocoles ouverts"
      },
      {
        "value": "Caroline du Nord",
        "label": "Source non commerciale Polyform"
      }
    ]
  },
  "valueChain": {
    "index": "02",
    "label": "CHAÎNE DE VALEUR",
    "title": "Six produits, une chaîne de valeur",
    "lead": "La création et l'apprentissage d'abord, puis la compréhension des appareils et des données, puis la sécurité visuelle et les opérations à distance, et enfin l'installation des agents et des humains.",
    "diagramAria": "Chaîne de valeur : Créer avec BlockyEdu, Connecter via SyncroBrain, Voir avec DataLuminary ; Regardez avec VistaCast et Contrôlez avec VistaRemote bifurquez et fusionnez dans Earn avec DoerFlow. Cliquez sur un nœud pour faire défiler jusqu'à sa fiche produit."
  },
  "products": {
    "index": "03",
    "label": "PRODUITS",
    "title": "Chaque produit se vend seul. Ensemble, ils bouclent la boucle."
  },
  "platform": {
    "index": "04",
    "label": "PLATE-FORME",
    "title": "Ce qui est partagé, c'est l'identité, les droits et les protocoles, jamais la logique métier.",
    "lab": "laboratoire",
    "cards": [
      {
        "id": "identité",
        "title": "Connexion unifiée · Identité",
        "body": "Un seul service de connexion OIDC propose six marques ; chaque produit conserve son propre logo et sa propre copie",
        "tags": [
          "Se connecter",
          "OIDC",
          "PKCE"
        ],
        "lab": false
      },
      {
        "id": "droit",
        "title": "Droit central · Droit",
        "body": "Les forfaits, les essais, les licences, les postes et les paiements sont gérés de manière centralisée ; les droits commerciaux n'entrent jamais dans le JWT",
        "tags": [
          "NestJS",
          "PostgreSQL"
        ],
        "lab": false
      },
      {
        "id": "copain",
        "title": "Autorisations des ressources · PAL",
        "body": "Le niveau de ressource ACL reste dans chaque produit ; les autorisations voyagent avec la ressource",
        "tags": [
          "Casbine",
          "COPAIN"
        ],
        "lab": false
      },
      {
        "id": "aiGateway",
        "title": "Passerelle IA",
        "body": "Accès aux modèles multifournisseurs, coffre-fort de clés et mesure de l'utilisation (actuellement en laboratoire, pas en production)",
        "tags": [
          "laboratoire",
          "BYOK"
        ],
        "lab": true
      },
      {
        "id": "notification",
        "title": "Notifications",
        "body": "Module de messagerie et de notification partagé avec une identité d'envoi unifiée",
        "tags": [
          "@luminaryworks/notification"
        ],
        "lab": false
      },
      {
        "id": "Bibliothèques partagées",
        "title": "Bibliothèques partagées",
        "body": "Les clients et outils d’identité, d’autorisation et de droit sont livrés sous forme de packages npm – pas d’importations de sources entre dépôts",
        "tags": [
          "@luminaryworks/*"
        ],
        "lab": false
      }
    ],
    "calloutLabel": "Sémantique d'erreur unifiée",
    "calloutCodes": "401 identité · 402 droit · 403 ressource ACL",
    "emphasis": "Chaque produit possède sa propre base de données, ses migrations, ses politiques Casbin et sa propre cadence de publication ; il démarre et passe toujours les contrôles lorsque chaque produit frère est éteint."
  },
  "deployment": {
    "index": "05",
    "label": "DÉPLOIEMENT",
    "title": "D'un produit unique à une boucle fermée à espace d'air",
    "headers": {
      "profile": "profil",
      "meaning": "signification",
      "composition": "composition minimale"
    },
    "profiles": [
      {
        "name": "autonome",
        "meaning": "Déploiement et vente indépendants d'un seul produit",
        "composition": "1 plan produit + sa propre base de données"
      },
      {
        "name": "plan de contrôle",
        "meaning": "Plan de contrôle partagé uniquement",
        "composition": "Identité (+ passerelle d'authentification) + droit"
      },
      {
        "name": "agent-commerce",
        "meaning": "Boucle de composition de base",
        "composition": "VistaCast + SyncroBrain + DoerFlow"
      },
      {
        "name": "site intelligent",
        "meaning": "Boucle complète de la couche supérieure (additif, pas remplacement)",
        "composition": "Précédent + VistaRemote + DataLuminary (+ BlockyEdu entrée de formation)"
      },
      {
        "name": "entrefer",
        "meaning": "Livraison déconnectée / intranet",
        "composition": "Produit ou composition unique, pas de sortie ; licence hors ligne, BYOK local"
      }
    ],
    "modes": "identité=central|external_oidc|local · entitlement=off|shadow_read|enforce|offline_license · ai=off|central|local_byok · notification=none|smtp",
    "cta": "Afficher les options de déploiement"
  },
  "why": {
    "index": "06",
    "label": "POURQUOI",
    "title": "Pourquoi un atelier",
    "items": [
      {
        "title": "Ouvrir d'abord les protocoles",
        "body": "L'intégration est OIDC / HTTP / MQTT / événements uniquement. Aucune importation de runtime entre produits, ce qui réduit les coûts de verrouillage et de migration."
      },
      {
        "title": "Entreprise isolée, identité unifiée",
        "body": "Chaque produit possède sa base de données et sa ressource ACL. La connexion et les droits commerciaux sont essentiels, de sorte que l'expérience est cohérente sans que les échecs ne se répercutent en cascade."
      },
      {
        "title": "L'auto-hébergement est de première classe",
        "body": "L'IdP client, les licences hors ligne, le BYOK local et l'air-gapping faisaient partie des spécifications dès le premier jour, et n'ont pas été mis à niveau ultérieurement."
      },
      {
        "title": "Étiquettes de maturité honnêtes",
        "body": "Docs et ce site distinguent production/pilote/laboratoire/stub. Le code expédié n’est pas le même que celui prêt pour la production."
      }
    ]
  },
  "cta": {
    "index": "07",
    "label": "Appel à l'action",
    "title": "Exécutez-le d'abord, décidez plus tard",
    "lead": "Les produits éligibles incluent un essai de 7 jours ; l'écosystème n'a pas de niveau gratuit permanent. Pour une livraison auto-hébergée ou hors ligne, contactez l'atelier.",
    "startTrial": "Commencer l'essai",
    "contact": "Contacter le service commercial",
    "github": "GitHub"
  }
}
