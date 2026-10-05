export const deploy = {
  "page": {
    "index": "01",
    "label": "DÉPLOIEMENT",
    "title": "Déploiement et auto-hébergement",
    "lead": "D'un produit vendable unique à une boucle fermée isolée : cinq profils gelés et une matrice de modes de capacités pour la livraison hébergée et auto-hébergée."
  },
  "profiles": {
    "index": "02",
    "label": "PROFILS",
    "title": "Cinq profils de déploiement",
    "lead": "Les packs de scénarios orchestrent plusieurs projets Compose indépendants : ne fusionnez jamais six produits en un seul projet.",
    "headers": {
      "profile": "profil",
      "meaning": "Signification",
      "minimum": "Pile minimale",
      "modes": "Modes de capacité autorisés"
    },
    "rows": [
      {
        "profile": "autonome",
        "meaning": "Produit unique, vendu et géré seul",
        "minimum": "Un plan produit + sa propre base de données",
        "modes": "identité : n'importe laquelle ; droit : off / offline_license recommandé ; ai=off|local_byok"
      },
      {
        "profile": "plan de contrôle",
        "meaning": "Plan de contrôle partagé uniquement",
        "minimum": "Identité (+ passerelle d'authentification) + droit",
        "modes": "Doit déclarer services.identity"
      },
      {
        "profile": "agent-commerce",
        "meaning": "Boucle fermée de référence",
        "minimum": "VistaCast + SyncroBrain + DoerFlow (+ plan de contrôle facultatif)",
        "modes": "Les trois plans de produits requis"
      },
      {
        "profile": "site intelligent",
        "meaning": "Boucle supérieure complète (couches sur le commerce d'agent)",
        "minimum": "Au dessus + VistaRemote + DataLuminary (+ BlockyEdu entrée formation)",
        "modes": "BlockyEdu obligatoire doit être faux"
      },
      {
        "profile": "entrefer",
        "meaning": "Livraison hors ligne / intranet",
        "minimum": "Produit unique ou bundle sans sortie",
        "modes": "ai≠central; droit∈{off, offline_license} ; identité : external_oidc recommandé, local autorisé"
      }
    ]
  },
  "capabilities": {
    "index": "03",
    "label": "CAPACITÉS",
    "title": "Matrice de mode de capacité",
    "lead": "Control Manifest déclare explicitement chaque mode ; les versions inconnues doivent échouer au démarrage.",
    "modesLine": "identité=central|external_oidc|local · entitlement=off|shadow_read|enforce|offline_license · ai=off|central|local_byok · notification=none|smtp",
    "headers": {
      "capability": "Capacité",
      "modes": "Modes"
    },
    "rows": [
      {
        "capability": "identité",
        "modes": "central · external_oidc · local (laboratoire — rejeté en pilote/production)"
      },
      {
        "capability": "droit",
        "modes": "désactivé · shadow_read · appliquer · offline_license"
      },
      {
        "capability": "ai",
        "modes": "off · central (laboratoire — bloqué en pilote/production) · local_byok"
      },
      {
        "capability": "notification",
        "modes": "aucun · smtp"
      }
    ]
  },
  "installKit": {
    "index": "04",
    "label": "INSTALLER",
    "title": "Installer des packs",
    "lead": "luminaryworks-install fournit une installation privée pilotée par un assistant : sélectionnez les produits, configurez les domaines et les comptes d'administrateur, puis exécutez des contrôles d'acceptation. Les documents d'environnement étape par étape sont disponibles sur le site de documentation pour éviter toute dérive du bundle d'installation.",
    "docsLink": "Lire la documentation d'installation"
  },
  "airGapped": {
    "index": "05",
    "label": "À AIR GAPPÉ",
    "title": "Livraison à distance, licence hors ligne et BYOK local",
    "lead": "La livraison avec espace d'air est une préoccupation de première classe en matière de spécifications, et non un correctif après expédition.",
    "points": [
      "Le profil entrefer interdit ai=central ; le droit est désactivé ou hors ligne_license uniquement.",
      "Offline_license vérifie les licences signées localement – aucune dépendance stricte vis-à-vis des droits centraux.",
      "local_byok conserve les clés de modèle côté client ; Central AI Platform est aujourd’hui un laboratoire et ne doit pas entrer en production.",
      "l'identité doit utiliser l'IdP du client (external_oidc) ; le mode répertoire local reste laboratoire."
    ]
  },
  "maturity": {
    "index": "06",
    "label": "MATURITÉ",
    "title": "Étiquettes de maturité",
    "lead": "Le code expédié n’est pas le même que celui prêt pour la production. Les documents et manifestes doivent porter des étiquettes d’étape.",
    "headers": {
      "label": "Étiquette",
      "meaning": "Signification",
      "wording": "Formulation autorisée"
    },
    "rows": [
      {
        "label": "production",
        "meaning": "Live, vendable, couvert par la régression",
        "wording": "\"Généralement disponible\""
      },
      {
        "label": "pilote",
        "meaning": "Utilisateurs réels, portée limitée",
        "wording": "\"Pilote\""
      },
      {
        "label": "laboratoire",
        "meaning": "Fonctionne sur un ordinateur portable ou un intranet, non renforcé",
        "wording": "\"Expérimental\""
      },
      {
        "label": "bout",
        "meaning": "API existe, l'implémentation est un espace réservé",
        "wording": "\"Non implémenté\" – pas de monétisation ni de mesure"
      }
    ],
    "callout": "ai=central est le laboratoire aujourd'hui : pas d'AuthN, pas de porte d'autorisation, non /ready. Le contrôle en amont rejette le pilote/la production."
  },
  "cta": {
    "title": "Besoin d'une livraison privée ou hors ligne ?",
    "lead": "Contactez l’équipe de l’atelier pour discuter des profils, de la licence et de l’étendue de la livraison.",
    "contact": "Contacter le service commercial"
  }
}
