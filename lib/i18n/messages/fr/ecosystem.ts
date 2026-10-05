export const ecosystem = {
  "page": {
    "index": "01",
    "label": "ÉCOSYSTÈME",
    "title": "Écosystème et architecture",
    "lead": "Six produits fonctionnent indépendamment et constituent une suite fédérée via des protocoles ouverts et un plan de contrôle partagé en option : ce qui est partagé, ce sont l'identité, les droits et les protocoles, jamais la logique métier."
  },
  "valueChain": {
    "index": "01",
    "label": "CHAÎNE DE VALEUR",
    "title": "Boucle de la chaîne de valeur",
    "lead": "La création et l'apprentissage mènent à la connectivité des appareils et à la compréhension des données, puis à la sécurité visuelle et aux opérations à distance, et enfin à l'établissement où les agents et les humains sont égaux.",
    "steps": [
      {
        "stage": "Créer",
        "product": "BlockyEdu",
        "productLocal": "智码工坊",
        "output": "Compétences, artefacts et contenu de formation"
      },
      {
        "stage": "Connecter",
        "product": "SyncroBrain",
        "productLocal": "万物智脑",
        "output": "Intégration des appareils, télémétrie, incidents et noyau de sécurité"
      },
      {
        "stage": "Voir",
        "product": "DataLuminary",
        "productLocal": "数据明鉴",
        "output": "Rapports, tableaux de bord, exportations et intégrations"
      },
      {
        "stage": "Montre",
        "product": "VistaCast",
        "productLocal": "视界云遥",
        "output": "Événements visuels, état d'alerte et accusés de réception"
      },
      {
        "stage": "Contrôle",
        "product": "VistaRemote",
        "productLocal": "视界远程",
        "output": "Sessions à distance, enregistrement et audit"
      },
      {
        "stage": "Gagner",
        "product": "DoerFlow",
        "productLocal": "智工网",
        "output": "Tâches, recettes et règlement du grand livre"
      }
    ]
  },
  "platform": {
    "index": "02",
    "label": "PLATE-FORME",
    "title": "Plateforme partagée",
    "lead": "Le plan de contrôle est facultatif ; les avions produits restent autonomes. Lorsque les services centraux s'arrêtent, chaque produit se dégrade exactement comme son manifeste l'indique : Casbin n'est jamais contourné.",
    "spineLabel": "PLAN DE CONTRÔLE",
    "unitsLabel": "UNITÉS DE CAPACITÉ",
    "items": [
      {
        "title": "Identité (OIDC)",
        "description": "Une surface de connexion OIDC pour six marques ; chaque produit conserve son propre logo et sa propre copie.",
        "tags": [
          "Se connecter",
          "OIDC",
          "PKCE"
        ]
      },
      {
        "title": "Droit central",
        "description": "Plans, essais, licences, sièges et facturation en un seul endroit ; les droits commerciaux n’entrent jamais dans le JWT.",
        "tags": [
          "NestJS",
          "PostgreSQL"
        ]
      },
      {
        "title": "Ressource ACL (PAL)",
        "description": "Le niveau de ressource ACL reste dans chaque produit ; les autorisations sont livrées avec la ressource.",
        "tags": [
          "Casbine",
          "COPAIN"
        ]
      },
      {
        "title": "Passerelle IA",
        "description": "Routage de modèles multifournisseurs, coffre-fort de clés et mesure de l'utilisation.",
        "tags": [
          "laboratoire",
          "BYOK"
        ],
        "lab": true
      },
      {
        "title": "Notification",
        "description": "Module de courrier et de notification partagé avec une identité d'expéditeur unifiée.",
        "tags": [
          "@luminaryworks/notification"
        ]
      },
      {
        "title": "Forfaits partagés",
        "description": "Les clients d'identité, ACL et de droits sont livrés sous forme de packages npm — pas d'importations de sources entre dépôts.",
        "tags": [
          "@luminaryworks/*"
        ]
      }
    ]
  },
  "integration": {
    "index": "03",
    "label": "INTÉGRATION",
    "title": "Matrice d'intégration",
    "lead": "L'intégration multi-produits utilise uniquement les événements OIDC, HTTP, MQTT et versionnés — pas d'importations d'exécution ni de schémas métier partagés.",
    "allowedHeading": "Autorisé",
    "forbiddenHeading": "Interdit",
    "allowed": [
      "OIDC fédération d'identité",
      "HTTP REST exporter/intégrer",
      "MQTT / CloudEvents",
      "Enregistrements de liaison explicites (pas de jointures implicites)"
    ],
    "forbidden": [
      "Importations d'exécution multi-produits (fichier : chemins, références sources directes)",
      "Schémas métier partagés/bases de données métier partagées",
      "Réutiliser le JWT d'un autre produit pour l'autorisation des ressources",
      "Intégration des droits commerciaux dans les JWT"
    ]
  },
  "errors": {
    "index": "04",
    "label": "ERREURS",
    "title": "Sémantique d'erreur unifiée",
    "lead": "Les codes d'état HTTP signifient la même chose dans tous les produits pour l'orchestration et l'audit.",
    "items": [
      {
        "code": "401",
        "label": "Identité",
        "description": "L'authentification a échoué ; les pannes d’identité ne se dégradent jamais en accès anonyme."
      },
      {
        "code": "402",
        "label": "Droit",
        "description": "Droits commerciaux insuffisants (essai expiré, plan incompatible, quota épuisé)."
      },
      {
        "code": "403",
        "label": "Ressource ACL",
        "description": "Refus de casbine ; La licence ne contourne jamais les autorisations de ressources."
      }
    ]
  },
  "protocols": {
    "index": "05",
    "label": "PROTOCOLES",
    "title": "Inventaire à protocole ouvert",
    "lead": "Intégrez d’abord via des normes ouvertes pour réduire les coûts de verrouillage et de migration.",
    "items": [
      "OIDC",
      "MQTT",
      "REST",
      "WebRTC",
      "ONVIF"
    ]
  },
  "autonomy": {
    "index": "06",
    "label": "AUTONOMIE",
    "title": "Autonomie du produit (contrainte dure)",
    "lead": "Chaque produit possède sa base de données, ses migrations, sa politique Casbin et sa cadence de publication. Il doit toujours démarrer et réussir la préparation lorsque chaque produit frère est en panne.",
    "boundaries": [
      "Chaque produit possède sa base de données, ses migrations, sa politique Casbin et sa cadence de publication",
      "Il doit toujours démarrer et réussir la préparation lorsque chaque produit frère est en panne"
    ]
  }
}
