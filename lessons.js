const allLessons = [
  {
    "id": "l0q",
    "title": "Bien démarrer avec Power Query",
    "track": "query",
    "moduleId": "q0",
    "difficulty": "Débutant",
    "why": "Avant de manipuler des données, il faut comprendre où Power Query s'inscrit dans l'écosystème Excel / Power BI et ce qu'il peut faire pour toi.",
    "example": {
      "scenario": "Tu ouvres Excel pour la première fois et on te parle de Power Query.",
      "data": "Pas de données nécessaire pour cette leçon.",
      "goal": "Comprendre le rôle de Power Query, où le trouver et comment il s'intègre dans le flux de données."
    },
    "steps": [
      {
        "title": "Comprendre l'écosystème",
        "detail": "Power Query est le moteur de préparation de données. Il alimente Excel, Power BI et Analysis Services. Les données brutes y entrent, en ressortent propres et structurées.",
        "tip": "Pense à Power Query comme un entonnoir : les données sales entrent, les données propres sortent.",
        "pitfall": "Confondre Power Query et Power BI — Power Query est l'outil de préparation, Power BI est l'outil de visualisation."
      },
      {
        "title": "Ouvrir Power Query",
        "detail": "Dans Excel : onglet Données > Obtenir des données > Lancer l'éditeur. Dans Power BI : onglet Accueil > Transformer les données.",
        "tip": "L'éditeur Power Query s'ouvre dans une fenêtre séparée. Les modifications ne s'appliquent qu'après clic sur Fermer et charger.",
        "pitfall": "Charger directement sans transformer = données brutes dans le rapport."
      },
      {
        "title": "Découvrir l'interface",
        "detail": "Le ruban (Accueil, Transformer, Ajouter une colonne), le volet gauche (liste des requêtes), la zone centrale (aperçu des données), et la barre de formule en haut.",
        "tip": "Chaque étape de transformation est enregistrée dans le volet droit (Paramètres appliqués). Tu peux revenir en arrière à tout moment.",
        "pitfall": "Ne pas regarder les Paramètres appliqués = ne pas comprendre ce qui a été fait."
      }
    ],
    "exercise": {
      "title": "Explorer l'éditeur Power Query",
      "instructions": "1. Ouvre Excel ou Power BI. 2. Charge n'importe quel fichier CSV. 3. Ouvre l'éditeur Power Query. 4. Repère le ruban, le volet des requêtes, les Paramètres appliqués.",
      "hints": [
        "Onglet Données > Obtenir les données",
        "L'éditeur s'ouvre dans une fenêtre séparée",
        "Les Paramètres appliqués sont sur la droite"
      ],
      "dataset": null
    },
    "solution": {
      "steps": [
        "Ouvrir Power BI ou Excel",
        "Obtenir les données > À partir d'un fichier CSV",
        "Transformer les données pour ouvrir l'éditeur",
        "Repérer les 4 zones : ruban, requêtes, aperçu, étapes"
      ],
      "explanation": "L'éditeur Power Query est l'atelier où tu prépares les données. Le comprendre est la base de tout le parcours."
    },
    "pitfalls": [
      {
        "trap": "Confondre Power Query et Power BI",
        "fix": "Power Query prépare les données. Power BI les visualise. Les deux travaillent ensemble."
      },
      {
        "trap": "Sauter l'éditeur et charger brut",
        "fix": "Toujours transformer les données avant de les charger dans le rapport."
      }
    ],
    "quiz": {
      "question": "Power Query sert principalement à :",
      "options": [
        "Préparer et transformer les données",
        "Créer des visuels",
        "Envoyer des e-mails"
      ],
      "answer": 0,
      "difficulty": "Débutant",
      "explanation": "Power Query est l'outil de préparation des données avant toute analyse."
    },
    "downloadFile": null,
    "nextLesson": "l1",
    "prerequisites": []
  },
  {
    "id": "l0b",
    "title": "Bien démarrer avec Power BI",
    "track": "bi",
    "moduleId": "b0",
    "difficulty": "Débutant",
    "why": "Avant de construire des rapports, il faut comprendre le flux complet Power BI : de la donnée brute au dashboard final.",
    "example": {
      "scenario": "Tu découvres Power BI Desktop pour la première fois.",
      "data": "Pas de données nécessaire pour cette leçon.",
      "goal": "Comprendre le flux Power BI (import → modèle → visuels → partage) et repérer les zones clés de l'interface."
    },
    "steps": [
      {
        "title": "Le flux Power BI",
        "detail": "Le flux se résume en 4 étapes : 1) Importer les données, 2) Les transformer avec Power Query, 3) Construire le modèle (relations), 4) Créer les visuels et publier.",
        "tip": "Le modèle est la fondation. Sans bon modèle, les visuels seront faux ou lents.",
        "pitfall": "Commencer par les visuels sans modèle = résultats incohérents."
      },
      {
        "title": "Découvrir l'interface",
        "detail": "Power BI Desktop a 3 vues : Rapport (visuels), Données (tables), Modèle (relations). Le volet gauche affiche les champs, le volet droit les propriétés du visuel.",
        "tip": "La vue Modèle est la plus importante au début. C'est là que les relations between tables se définissent.",
        "pitfall": "Ne jamais aller en vue Modèle = modèle anarchique et calculs instables."
      },
      {
        "title": "Importation rapide",
        "detail": "Accueiiler > Obtenir les données > Excel/CSV/Web. Power BI détecte les types et propose un aperçu. Cliquer sur Transformer les données pour ouvrir Power Query.",
        "tip": "Toujours cliquer sur Transformer les données plutôt que Charger directement pour vérifier et nettoyer.",
        "pitfall": "Charger sans transformer = données brutes avec des types incorrects."
      }
    ],
    "exercise": {
      "title": "Importer un fichier et explorer l'interface",
      "instructions": "1. Ouvre Power BI Desktop. 2. Importe un fichier Excel ou CSV. 3. Clique sur Transformer les données. 4. Navigue entre les 3 vues.",
      "hints": [
        "Obtenir les données > Excel",
        "Transformer les données pour ouvrir Power Query",
        "Vue Rapport, vue Données, vue Modèle"
      ],
      "dataset": null
    },
    "solution": {
      "steps": [
        "Ouvrir Power BI Desktop",
        "Obtenir les données > Excel/CSV",
        "Transformer les données pour nettoyer",
        "Naviguer entre Rapport, Données et Modèle"
      ],
      "explanation": "Le flux Power BI est linéaire : import, nettoyage, modélisation, visualisation. Chaque étape dépend de la précédente."
    },
    "pitfalls": [
      {
        "trap": "Sauter l'étape modèle",
        "fix": "Le modèle est la fondation. Sans relations, les calculs et visuels seront imprévisibles."
      },
      {
        "trap": "Charger sans transformer",
        "fix": "Toujours passer par Power Query pour typer et nettoyer les colonnes."
      }
    ],
    "quiz": {
      "question": "Le flux Power BI se résume à :",
      "options": [
        "Import → Modèle → Visuels → Partage",
        "Visuels → Import → Données",
        "Partage → Import → Modèle"
      ],
      "answer": 0,
      "difficulty": "Débutant",
      "explanation": "Le flux est séquentiel : d'abord les données, puis le modèle, puis les visuels, enfin le partage."
    },
    "downloadFile": null,
    "nextLesson": "l5",
    "prerequisites": []
  },
  {
    "id": "l1",
    "title": "Importer un CSV et typer les colonnes",
    "track": "query",
    "moduleId": "q1",
    "difficulty": "Débutant",
    "why": "Toute analyse commence par l'import et le typage. Si tes types sont faux, tout le reste est compromis — calculs erronés, tri cassé, visuels incohérents.",
    "example": {
      "scenario": "Tu reçois un export ERP des ventes mensuelles.",
      "data": "Fichier CSV avec DateCommande en texte (01-02-2025), Montant en texte avec espaces (1 250,50), ClientID en nombre (00125 perdu).",
      "goal": "Obtenir une table propre avec les bons types : Date, Décimal, Texte."
    },
    "steps": [
      {
        "title": "Charger le CSV",
        "detail": "Dans Power Query, utiliser Accueil > Obtenir les données > À partir d'un fichier CSV. Sélectionner le fichier et valider.",
        "tip": "Vérifier l'encodage (UTF-8 par défaut) et le délimiteur (virgule ou point-virgule).",
        "pitfall": "Si le délimiteur est mal choisi, toutes les colonnes seront dans une seule."
      },
      {
        "title": "Promouvoir les en-têtes",
        "detail": "Accéder à Accueil > Utiliser la première ligne comme en-têtes. Power Query détecte souvent automatiquement.",
        "tip": "Toujours vérifier que la première ligne est bien les en-têtes, pas une ligne de données.",
        "pitfall": "Oublier cette étape donne des colonnes Column1, Column2, etc."
      },
      {
        "title": "Corriger les types",
        "detail": "Pour chaque colonne : clic droit sur l'en-tête > Type de données. DateCommande → Date, Montant → Devise, ClientID → Texte.",
        "tip": "Power Query propose des types, mais vérifie toujours. Un ID client n'est JAMAIS un nombre.",
        "pitfall": "ClientID en nombre perd les zéros initiaux (00125 → 125)."
      },
      {
        "title": "Renommer la requête",
        "detail": "Double-cliquer sur le nom de la requête (Requête1) et la renommer clairement (ex : Ventes_Typees).",
        "tip": "Des noms clairs facilitent la maintenance et la relecture.",
        "pitfall": "Un nom comme Requête1 rend le flux incompréhensible pour quiconque."
      }
    ],
    "exercise": {
      "title": "Corriger les types d'un export ERP",
      "instructions": "1. Importe le fichier CSV fourni. 2. Vérifie et corrige les types des 3 colonnes problématiques. 3. Vérifie que le nombre de lignes reste identique après typage.",
      "hints": [
        "Vérifie le nombre de lignes avant/après",
        "ClientID doit rester Texte",
        "Le montant avec espaces doit devenir Décimal"
      ],
      "dataset": "bloc1-l1-typer-colonnes.csv"
    },
    "solution": {
      "steps": [
        "Importer le CSV",
        "Promouvoir les en-têtes",
        "Changer DateCommande en type Date",
        "Changer Montant en type Décimal (locale française)",
        "Changer ClientID en type Texte",
        "Vérifier le nombre de lignes = identique"
      ],
      "explanation": "Le typage préserve les données tout en les rendant exploitables. Les IDs en texte évitent la perte d'information. Les montants en décimal permettent les calculs."
    },
    "pitfalls": [
      {
        "trap": "ClientID transformé en nombre",
        "fix": "Forcer le type Texte AVANT l'import via Paramètres de détection, ou corriger après."
      },
      {
        "trap": "Locale décimale incorrecte",
        "fix": "Utiliser Paramètres régionaux dans le menu Type de données pour choisir Français (France)."
      },
      {
        "trap": "Type Date non reconnu",
        "fix": "Utiliser Transformer > Type de données > Date en utilisant les paramètres régionaux adaptés au format source."
      }
    ],
    "quiz": {
      "question": "Quel type faut-il garder pour ClientID ?",
      "options": [
        "Nombre entier",
        "Texte",
        "Date"
      ],
      "answer": 1,
      "difficulty": "Débutant",
      "explanation": "ClientID est un identifiant métier, pas une valeur de calcul. En nombre, 00125 deviendrait 125."
    },
    "downloadFile": "datasets/bloc1-l1-typer-colonnes.csv",
    "nextLesson": "l2",
    "prerequisites": []
  },
  {
    "id": "l2",
    "title": "Nettoyer doublons, nulls, erreurs",
    "track": "query",
    "moduleId": "q1",
    "difficulty": "Débutant",
    "why": "Une table avec des doublons ou des nulls non traités fausse les calculs. Nettoyer est la fondation de toute analyse fiable.",
    "example": {
      "scenario": "Tu reçois une base CRM avec des clients en double et des champs vides.",
      "data": "Table de 42 120 lignes avec 1 250 doublons sur ClientID et 320 valeurs null dans Email.",
      "goal": "Obtenir une table de 40 870 lignes uniques, sans erreur bloquante."
    },
    "steps": [
      {
        "title": "Identifier la clé métier",
        "detail": "Avant de supprimer les doublons, déterminer quelle colonne (ou combinaison) identifie un unique enregistrement. Ex : ClientID.",
        "tip": "La clé métier n'est pas toujours évidente. Parfois c'est une combinaison de colonnes.",
        "pitfall": "Supprimer les doublons sur la mauvaise colonne efface des lignes légitimes."
      },
      {
        "title": "Supprimer les doublons",
        "detail": "Sélectionner la colonne clé > Accueil > Supprimer les doublons. Vérifier le nombre de lignes avant/après.",
        "tip": "Toujours comparer le nombre de lignes avant et après pour comprendre l'impact.",
        "pitfall": "Oublier de vérifier le nombre de lignes peut masquer une erreur."
      },
      {
        "title": "Traiter les null et erreurs",
        "detail": "Pour chaque colonne avec des nulls : décider d'une règle métier. Remplacer null par une valeur par défaut ou filtrer.",
        "tip": "Documenter chaque règle de traitement dans les étapes de la requête.",
        "pitfall": "Remplacer les nulls sans justification métier peut introduire des biais."
      }
    ],
    "exercise": {
      "title": "Nettoyer une table prospects",
      "instructions": "1. Importe le CSV. 2. Identifie la clé de déduplication. 3. Supprime les doublons. 4. Traite les null selon une règle métier. 5. Documente tes choix.",
      "hints": [
        "La clé est ClientID",
        "Les emails null peuvent être remplacés par une valeur par défaut si validé métier",
        "Compare toujours le nombre de lignes"
      ],
      "dataset": "bloc1-l2-doublons-nulls.csv"
    },
    "solution": {
      "steps": [
        "Importer le CSV",
        "Sélectionner ClientID",
        "Supprimer les doublons",
        "Vérifier : 42120 → 40870 lignes",
        "Remplacer les emails null par 'inconnu@temp.com' (si validé métier)"
      ],
      "explanation": "La déduplication sur ClientID garantit des analyses correctes. Le traitement des nulls dépend du contexte métier."
    },
    "pitfalls": [
      {
        "trap": "Doublons supprimés sur mauvaise colonne",
        "fix": "Toujours valider la clé de déduplication avec le métier avant de supprimer."
      },
      {
        "trap": "Valeurs nulles masquées sans justification",
        "fix": "Documenter chaque règle de remplacement. Si pas de règle métier, garder les nulls visibles."
      }
    ],
    "quiz": {
      "question": "Quelle est la première décision avant de supprimer les doublons ?",
      "options": [
        "Définir la clé de déduplication",
        "Changer toutes les valeurs nulles",
        "Trier par date"
      ],
      "answer": 0,
      "difficulty": "Débutant",
      "explanation": "Sans clé métier claire, tu risques de supprimer de mauvaises lignes."
    },
    "downloadFile": "datasets/bloc1-l2-doublons-nulls.csv",
    "nextLesson": "l3",
    "prerequisites": [
      "l1"
    ]
  },
  {
    "id": "l3",
    "title": "Merge vs Append",
    "track": "query",
    "moduleId": "q2",
    "difficulty": "Intermédiaire",
    "why": "Combiner des données est le quotidien du data analyst. Savoir quand empiler (Append) et quand relier (Merge) est fondamental.",
    "example": {
      "scenario": "Tu as les ventes 2024, les ventes 2025 et un référentiel produits à enrichir.",
      "data": "Ventes_2024 (10K lignes), Ventes_2025 (12K lignes), Produits (500 lignes).",
      "goal": "Obtenir une table ventes complète (22K lignes) enrichie avec les catégories produits."
    },
    "steps": [
      {
        "title": "Append des années",
        "detail": "Accueil > Ajouter des requêtes > Ajouter les requêtes en tant que nouvelles. Sélectionner Ventes_2024 puis Ventes_2025.",
        "tip": "Les colonnes doivent avoir des noms identiques. Sinon, Power Query crée des colonnes supplémentaires.",
        "pitfall": "Des colonnes homonymes mais de contenu différent créent des nulls."
      },
      {
        "title": "Merge avec dimensions",
        "detail": "Accueil > Fusionner des requêtes. Choisir la table ventes et la table Produits sur la clé ProductID, jointure externe gauche.",
        "tip": "Toujours vérifier la cardinalité : 1 produit = 1 ligne dans la dimension.",
        "pitfall": "Un merge sur une clé non unique crée une explosion de lignes."
      },
      {
        "title": "Contrôler la cardinalité",
        "detail": "Après le merge, vérifier que le nombre de lignes n'a pas augmenté de manière inattendue.",
        "tip": "Ajouter une étape de comptage des lignes avant/après chaque opération.",
        "pitfall": "Ne pas vérifier la cardinalité est la cause n°1 des totaux erroneés."
      }
    ],
    "exercise": {
      "title": "Produire une table ventes enrichie",
      "instructions": "1. Charge les 3 fichiers. 2. Append Ventes_2024 et Ventes_2025. 3. Merge avec Produits sur ProductID. 4. Vérifie que le nombre de lignes reste correct.",
      "hints": [
        "Append empile les lignes (vertical)",
        "Merge ajoute des colonnes (horizontal)",
        "Vérifie le nombre de lignes après chaque opération"
      ],
      "dataset": "bloc2-l3-merge-append.csv"
    },
    "solution": {
      "steps": [
        "Append Ventes_2024 + Ventes_2025 → 22000 lignes",
        "Merge avec Produits sur ProductID (left outer)",
        "Sélectionner Catégorie et Sous-Catégorie du merge",
        "Vérifier : toujours 22000 lignes"
      ],
      "explanation": "Append empile verticalement, Merge relie horizontalement. La clé ProductID unique dans la dimension garantit pas d'explosion."
    },
    "pitfalls": [
      {
        "trap": "Join sur clé non unique",
        "fix": "Vérifier que la clé de merge est unique dans la dimension. Utiliser Supprimer les doublons si nécessaire."
      },
      {
        "trap": "Colonnes homonymes non renommées",
        "fix": "Avant le merge, renommer les colonnes qui portent le même nom mais contiennent des données différentes."
      }
    ],
    "quiz": {
      "question": "Pour empiler deux fichiers de ventes mensuelles, tu utilises :",
      "options": [
        "Merge",
        "Append",
        "Group By"
      ],
      "answer": 1,
      "difficulty": "Intermédiaire",
      "explanation": "Append concatène des lignes, alors que Merge ajoute des colonnes."
    },
    "downloadFile": "datasets/bloc2-l3-merge-append.csv",
    "nextLesson": "l4",
    "prerequisites": [
      "l1",
      "l2"
    ]
  },
  {
    "id": "l4",
    "title": "Pivot / Unpivot pour restructurer",
    "track": "query",
    "moduleId": "q2",
    "difficulty": "Intermédiaire",
    "why": "Les données brutes arrivent souvent en format large (colonnes par mois). Power BI a besoin de format long pour fonctionner correctement.",
    "example": {
      "scenario": "Un budget mensuel avec colonnes Jan, Fév, Mar, etc.",
      "data": "Table avec Produit | Jan | Fév | Mar — chaque mois est une colonne.",
      "goal": "Transformer en Produit | Mois | Montant pour permettre l'analyse temporelle."
    },
    "steps": [
      {
        "title": "Sélectionner les colonnes à unpivot",
        "detail": "Sélectionner les colonnes des mois (Jan, Fév, Mar...) en maintenant Ctrl.",
        "tip": "Ne pas sélectionner les colonnes d'identification (Produit) — elles resteront.",
        "pitfall": "Sélectionner les mauvaises colonnes détruit la structure de la table."
      },
      {
        "title": "Unpivot columns",
        "detail": "Transformer > Dépivoter les colonnes sélectionnées. Les colonnes mois deviennent deux colonnes : Attribut et Valeur.",
        "tip": "Renommer Attribut → Mois et Valeur → Montant immédiatement.",
        "pitfall": "Oublier de renommer rend les colonnes difficiles à comprendre."
      },
      {
        "title": "Typer et ordonner les mois",
        "detail": "Créer une colonne de tri pour les mois (01-Jan, 02-Fév, etc.) pour que l'ordre soit correct dans les visuels.",
        "tip": "Utiliser une table de correspondance mois numéro → mois nom si nécessaire.",
        "pitfall": "Les mois triés alphabétiquement (Avril avant Février) sont une erreur fréquente."
      }
    ],
    "exercise": {
      "title": "Convertir un tableau budget en format long",
      "instructions": "1. Importe le fichier budget. 2. Unpivot les colonnes mensuelles. 3. Renomme les colonnes résultats. 4. Ajoute une colonne de tri pour les mois.",
      "hints": [
        "Unpivot seulement les colonnes de période",
        "Renomme Attribut → Mois et Valeur → Montant",
        "Ajoute un numéro de mois pour le tri"
      ],
      "dataset": "bloc2-l4-pivot-unpivot.csv"
    },
    "solution": {
      "steps": [
        "Sélectionner colonnes mois",
        "Unpivot columns",
        "Renommer Attribut → Mois",
        "Renommer Valeur → Montant",
        "Créer colonne N°Mois pour le tri"
      ],
      "explanation": "Le format long est la base d'un bon modèle Power BI. Il permet les slicers par mois, les calculs YTD et les comparaisons temporelles."
    },
    "pitfalls": [
      {
        "trap": "Unpivot sur mauvaise plage",
        "fix": "Toujours vérifier les colonnes sélectionnées avant l'opération. Les colonnes fixes doivent rester."
      },
      {
        "trap": "Mois textuels non ordonnés",
        "fix": "Créer une colonne de tri (Sort By Column) qui associe chaque mois à son numéro."
      }
    ],
    "quiz": {
      "question": "Quelle action transforme Jan/Fév/Mar en lignes ?",
      "options": [
        "Unpivot",
        "Split column",
        "Merge queries"
      ],
      "answer": 0,
      "difficulty": "Intermédiaire",
      "explanation": "Unpivot convertit des colonnes de période en lignes analytiques."
    },
    "downloadFile": "datasets/bloc2-l4-pivot-unpivot.csv",
    "nextLesson": "l13",
    "prerequisites": [
      "l1"
    ]
  },
  {
    "id": "l13",
    "title": "Group By avancé avec indicateurs qualité",
    "track": "query",
    "moduleId": "q2",
    "difficulty": "Intermédiaire",
    "why": "Agréger les données permet de créer des indicateurs de synthèse et de repérer les anomalies sans analyser chaque ligne.",
    "example": {
      "scenario": "Suivi hebdomadaire des ventes par région avec contrôle qualité.",
      "data": "Table de 40 000 lignes de transactions avec Région, Montant, et Date.",
      "goal": "Table agrégée par Région avec CA, CA moyen, et colonne de contrôle d'anomalie."
    },
    "steps": [
      {
        "title": "Group by région",
        "detail": "Transformer > Grouper par. Choisir Région comme colonne de groupe, et ajouter les agrégations : Somme de Montant, Moyenne de Montant.",
        "tip": "Ajouter plusieurs agrégations dans la même étape Group By pour éviter des étapes multiples.",
        "pitfall": "Grouper sur la mauvaise colonne produit des résultats incompréhensibles."
      },
      {
        "title": "Créer CA moyen",
        "detail": "Ajouter une colonne personnalisée qui calcule le CA moyen par transaction = CA Total / Nombre de transactions.",
        "tip": "Utiliser la colonne de comptage (Count) générée par Group By comme dénominateur.",
        "pitfall": "Oublier le Count dans le Group By empêche le calcul de la moyenne."
      },
      {
        "title": "Ajouter colonne contrôle",
        "detail": "Ajouter une colonne conditionnelle : si CA moyen > seuil × 1.15, alors 'Anomalie', sinon 'OK'.",
        "tip": "Le seuil de 15% est un point de départ — à ajuster selon le contexte métier.",
        "pitfall": "Un seuil trop bas génère trop de faux positifs."
      }
    ],
    "exercise": {
      "title": "Construire un résumé hebdo avec anomalie",
      "instructions": "1. Importe les transactions. 2. Group by Région avec CA Total et Count. 3. Calcule CA moyen. 4. Ajoute une colonne contrôle (anomalie si > 15% de la moyenne globale).",
      "hints": [
        "Group By Région avec Somme et Nombre",
        "CA moyen = CA Total / Count",
        "Colonne conditionnelle sur l'écart"
      ],
      "dataset": "bloc2-l13-groupby.csv"
    },
    "solution": {
      "steps": [
        "Group By Région → Somme Montant, Count",
        "Ajouter colonne CA Moyen = [CA Total] / [Count]",
        "Colonne conditionnelle : si CA Moyen > 1.15 × moyenne globale → Anomalie"
      ],
      "explanation": "L'agrégation réduit les données à l'essentiel. La colonne de contrôle permet de repérer rapidement les régions anormales."
    },
    "pitfalls": [
      {
        "trap": "Agrégation sur mauvaise clé",
        "fix": "Toujours vérifier que la clé de regroupement correspond au niveau d'analyse voulu."
      },
      {
        "trap": "Seuil d'anomalie arbitraire",
        "fix": "Discuter le seuil avec le métier et documenter la règle."
      }
    ],
    "quiz": {
      "question": "Group By sert principalement à :",
      "options": [
        "Agréger des données par catégorie",
        "Joindre des tables",
        "Filtrer des dates"
      ],
      "answer": 0,
      "difficulty": "Intermédiaire",
      "explanation": "Group By consolide les données en lignes agrégées par catégorie."
    },
    "downloadFile": "datasets/bloc2-l13-groupby.csv",
    "nextLesson": "l14",
    "prerequisites": [
      "l1",
      "l2"
    ]
  },
  {
    "id": "l14",
    "title": "Paramètres et requêtes de référence",
    "track": "query",
    "moduleId": "q2",
    "difficulty": "Avancé",
    "why": "Les paramètres rendent les flux réutilisables et maintenables. Un changement de source n'affecte qu'un seul paramètre.",
    "example": {
      "scenario": "Changer le dossier source d'un flux sans réécrire les étapes.",
      "data": "Flux avec chemin codé en dur : C:\\Rapports\\2024\\Ventes.csv",
      "goal": "Flux paramétré : SourceFolder = parameter, adaptable à tout environnement."
    },
    "steps": [
      {
        "title": "Créer un paramètre",
        "detail": "Accueil > Gérer les paramètres > Nouveau paramètre. Nommer SourceFolder, type Texte, valeur par défaut : C:\\Rapports\\2024.",
        "tip": "Les paramètres apparaissent comme des requêtes avec une icône spéciale dans le volet gauche.",
        "pitfall": "Oublier de typer le paramètre peut causer des erreurs silencieuses."
      },
      {
        "title": "Utiliser dans les requêtes",
        "detail": "Remplacer le chemin en dur par le paramètre dans l'étape Source de chaque requête concernée.",
        "tip": "Cliquer sur le paramètre dans le volet pour le référencer automatiquement.",
        "pitfall": "Remplacer seulementcertaines  requêtes laisse des chemins orphelins."
      },
      {
        "title": "Tester le changement",
        "detail": "Modifier la valeur du paramètre et vérifier que toutes les requêtes se mettent à jour.",
        "tip": "Créer un second paramètre pour l'environnement DEV vs PROD.",
        "pitfall": "Ne pas tester le paramètre avec une vraie valeur alternative."
      }
    ],
    "exercise": {
      "title": "Paramétrer le dossier source et tester",
      "instructions": "1. Crée un paramètre SourceFolder. 2. Utilise-le dans la requête Ventes. 3. Change la valeur et vérifie le rafraîchissement.",
      "hints": [
        "Crée le paramètre comme type Texte",
        "Remplace le chemin en dur dans l'étape Source",
        "Teste avec un chemin différent"
      ],
      "dataset": "bloc2-l14-parametres.csv"
    },
    "solution": {
      "steps": [
        "Créer paramètre SourceFolder (Texte, valeur par défaut)",
        "Dans la requête, remplacer le chemin par SourceFolder",
        "Changer SourceFolder → vérifier que le flux se met à jour"
      ],
      "explanation": "Un paramètre centralise la configuration. Modifier un seul endroit impacte toutes les requêtes qui l'utilisent."
    },
    "pitfalls": [
      {
        "trap": "Paramètre non appliqué partout",
        "fix": "Rechercher les chemins en dur dans toutes les requêtes et les remplacer par le paramètre."
      },
      {
        "trap": "Paramètre mal typé",
        "fix": "Toujours spécifier le type (Texte, Nombre, Date) pour éviter les conversions implicites."
      }
    ],
    "quiz": {
      "question": "Un paramètre Power Query permet :",
      "options": [
        "Changer facilement une valeur clé",
        "Créer un visuel",
        "Activer drill-down"
      ],
      "answer": 0,
      "difficulty": "Avancé",
      "explanation": "Un paramètre est une valeur configurable qui rend les flux flexibles."
    },
    "downloadFile": "datasets/bloc2-l14-parametres.csv",
    "nextLesson": "l19",
    "prerequisites": [
      "l1"
    ]
  },
  {
    "id": "l19",
    "title": "Fonctions M personnalisées",
    "track": "query",
    "moduleId": "q3",
    "difficulty": "Avancé",
    "why": "Quand une même logique se répète dans plusieurs requêtes, une fonction M l'encapsule pour la réutiliser sans duplication.",
    "example": {
      "scenario": "Normaliser des codes pays venant de 5 sources différentes.",
      "data": "Codes pays : 'FR ', 'france', 'FRA', 'fr' — tous doivent devenir 'FR'.",
      "goal": "Créer une fonction fnNormalizeCountry() qui nettoie et standardise automatiquement."
    },
    "steps": [
      {
        "title": "Créer une requête fonction",
        "detail": "Commencer par nettoyer une colonne dans une requête existante. Puis clic droit > Créer une fonction. La logique devient réutilisable.",
        "tip": "Écrire la logique sur un exemple concret d'abord, puis la généraliser en fonction.",
        "pitfall": "Créer une fonction sans l'avoir testée sur un exemple concret d'abord."
      },
      {
        "title": "Passer des paramètres",
        "detail": "La fonction prend des arguments (ex: (code as text) as text). Utiliser des types explicites pour éviter les erreurs.",
        "tip": "Ajouter des gardes de type (as text, as number) pour les paramètres et le retour.",
        "pitfall": "Paramètres mal typés causent des erreurs difficiles à diagnostiquer."
      },
      {
        "title": "Appliquer sur une table",
        "detail": "Utiliser Transformer > Appeler une fonction personnalisée sur la colonne à traiter.",
        "tip": "Vérifier le résultat sur quelques lignes avant de l'appliquer à toute la table.",
        "pitfall": "Oublier de tester sur des valeurs null ou des cas limites."
      }
    ],
    "exercise": {
      "title": "Factoriser une logique de nettoyage en fonction M",
      "instructions": "1. Crée une requête qui nettoie les codes pays. 2. Transforme-la en fonction fnNormalizeCountry. 3. Applique-la à une table avec 5 sources.",
      "hints": [
        "Teste d'abord la logique sur un exemple",
        "Ajoute des gardes de type as text",
        "Vérifie les résultats sur les nulls"
      ],
      "dataset": "bloc3-l19-fonctions-m.csv"
    },
    "solution": {
      "steps": [
        "Créer une requête de nettoyage exemple",
        "Transformer en fonction avec paramètre (code as text)",
        "Appeler la fonction sur chaque colonne code pays des 5 sources"
      ],
      "explanation": "Une fonction M évite la duplication et facilite la maintenance. Un seul endroit à modifier si la règle change."
    },
    "pitfalls": [
      {
        "trap": "Paramètres mal typés",
        "fix": "Toujours ajouter des types explicites aux paramètres de la fonction."
      },
      {
        "trap": "Fonction trop complexe",
        "fix": "Découper la logique en sous-fonctions simples et les composer."
      }
    ],
    "quiz": {
      "question": "Une fonction M sert surtout à :",
      "options": [
        "Réutiliser une logique de transformation",
        "Créer un visuel",
        "Générer un thème"
      ],
      "answer": 0,
      "difficulty": "Avancé",
      "explanation": "Elle encapsule des transformations répétées pour les réutiliser."
    },
    "downloadFile": "datasets/bloc3-l19-fonctions-m.csv",
    "nextLesson": "l27",
    "prerequisites": [
      "l13",
      "l14"
    ]
  },
  {
    "id": "l27",
    "title": "Performance Power Query (query folding)",
    "track": "query",
    "moduleId": "q3",
    "difficulty": "Avancé",
    "why": "Un rafraîchissement lent peut rendre un rapport inutilisable. Comprendre le query folding est la clé pour optimiser les performances.",
    "example": {
      "scenario": "Source SQL + transformations dans Power Query qui rafraîchit en 5 minutes.",
      "data": "Requête sur une table SQL de 500K lignes avec filtres, colonnes calculées et merge.",
      "goal": "Réduire le temps de rafraîchissement à moins de 2 minutes en optimisant le folding."
    },
    "steps": [
      {
        "title": "Vérifier le folding",
        "detail": "Clic droit sur une étape > Voir la requête native. Si Power Query affiche la requête SQL, le folding fonctionne.",
        "tip": "Chaque étape qui casse le folding force le traitement local et ralentit.",
        "pitfall": "Ne pas vérifier le folding régulièrement pendant la construction du flux."
      },
      {
        "title": "Déplacer les transformations",
        "detail": "Placer les filtres et sélections de colonnes le plus tôt possible dans le flux, AVANT les étapes qui cassent le folding.",
        "tip": "L'ordre idéal : Source → Filtres → Sélection colonnes → Autres transformations.",
        "pitfall": "Appliquer des opérations coûteuses (colonnes calculées, merge) trop tôt."
      },
      {
        "title": "Mesurer le temps",
        "detail": "Utiliser Power BI Service > Paramètres du jeu de données > Historique de rafraîchissement pour mesurer les temps.",
        "tip": "Comparer avant/après chaque optimisation pour quantifier le gain.",
        "pitfall": "Optimiser sans mesurer ne permet pas de valider l'impact."
      }
    ],
    "exercise": {
      "title": "Optimiser un flux de 5 min vers moins de 2 min",
      "instructions": "1. Identifie les étapes qui cassent le folding. 2. Réorganise les étapes pour maximiser le folding. 3. Mesure le gain de performance.",
      "hints": [
        "Vérifie 'Voir la requête native' à chaque étape",
        "Filtres et sélections de colonnes d'abord",
        "Colonnes calculées et merge ensuite"
      ],
      "dataset": "bloc3-l27-query-folding.csv"
    },
    "solution": {
      "steps": [
        "Vérifier le folding à chaque étape",
        "Déplacer filtres et sélections de colonnes en début",
        "Rendre le merge foldable en utilisant une source commune",
        "Mesurer le temps de rafraîchissement avant/après"
      ],
      "explanation": "Le query folding délègue le calcul à la source. Plus le folding est maintenu, plus le rafraîchissement est rapide."
    },
    "pitfalls": [
      {
        "trap": "Opérations coûteuses trop tôt",
        "fix": "Repousser les colonnes calculées, merge et append après les filtres."
      },
      {
        "trap": "Folding non vérifié",
        "fix": "Utiliser 'Voir la requête native' régulièrement et après chaque ajout d'étape."
      }
    ],
    "quiz": {
      "question": "Le query folding permet surtout de :",
      "options": [
        "Pousser le traitement côté source",
        "Changer le thème du rapport",
        "Créer des visuels plus rapidement"
      ],
      "answer": 0,
      "difficulty": "Avancé",
      "explanation": "Le folding délègue le calcul à la source de données pour accélérer le rafraîchissement."
    },
    "downloadFile": "datasets/bloc3-l27-query-folding.csv",
    "nextLesson": null,
    "prerequisites": [
      "l13",
      "l14"
    ]
  },
  {
    "id": "l5",
    "title": "Construire un schéma en étoile",
    "track": "bi",
    "moduleId": "b4",
    "difficulty": "Débutant",
    "why": "Le modèle est la fondation de tout rapport Power BI. Un mauvais modèle = des calculs faux et des rapports lents.",
    "example": {
      "scenario": "Tu as une table géante SalesFlat avec tout dedans.",
      "data": "SalesFlat avec 100K lignes et 20 colonnes (dates, produits, clients, montants mélangés).",
      "goal": "Découper en FactSales + DimDate + DimProduct + DimCustomer."
    },
    "steps": [
      {
        "title": "Isoler la table de faits",
        "detail": "Identifier les colonnes de mesures (CA, Quantité) et les clés de dimension. La fact table ne contient que des clés et des mesures.",
        "tip": "Une fact table est longue et étroite — beaucoup de lignes, peu de colonnes.",
        "pitfall": "Mettre des libellés dans la fact table au lieu de clés étrangères."
      },
      {
        "title": "Créer les dimensions",
        "detail": "Pour chaque groupe d'attributs (produit, client, date), créer une table dimension avec une clé primaire unique.",
        "tip": "Chaque dimension doit avoir une clé unique sans doublon.",
        "pitfall": "Oublier de dédupliquer les dimensions crée des relations many-to-many."
      },
      {
        "title": "Relier en 1-☆",
        "detail": "Dans la vue Modèle, relier chaque dimension à la fact table via les clés. Vérifier la cardinalité 1-☆.",
        "tip": "La fact table est toujours du côté ☆ dans les relations.",
        "pitfall": "Des relations bidirectionnelles inutiles ralentissent le modèle."
      }
    ],
    "exercise": {
      "title": "Découper SalesFlat en 4 tables",
      "instructions": "1. Identifie les mesures et les clés dans SalesFlat. 2. Crée DimProduct, DimCustomer, DimDate. 3. Relie-les à FactSales en 1-☆.",
      "hints": [
        "La fact table ne garde que les clés et les montants",
        "Chaque dimension a une clé unique",
        "Vérifie la cardinalité de chaque relation"
      ],
      "dataset": "bloc4-l5-star-schema.csv"
    },
    "solution": {
      "steps": [
        "Isoler les colonnes de mesures dans FactSales",
        "Créer DimProduct (clé ProductID + infos produit)",
        "Créer DimCustomer (clé CustomerID + infos client)",
        "Créer DimDate (clé Date complète)",
        "Relier chaque dimension à FactSales en 1-☆"
      ],
      "explanation": "Le star schema sépare les faits des attributs. C'est le modèle le plus performant et maintenable dans Power BI."
    },
    "pitfalls": [
      {
        "trap": "Many-to-many évitable",
        "fix": "Dédupliquer les dimensions et vérifier que chaque clé est unique."
      },
      {
        "trap": "Relations bidirectionnelles inutiles",
        "fix": "Garder le filtre simple (dimension → fact) sauf cas très spécifique."
      }
    ],
    "quiz": {
      "question": "Que contient principalement la table de faits ?",
      "options": [
        "Descriptions détaillées des produits",
        "Mesures + clés de dimensions",
        "Uniquement des dates"
      ],
      "answer": 1,
      "difficulty": "Débutant",
      "explanation": "La fact table stocke les événements mesurables reliés aux dimensions."
    },
    "downloadFile": "datasets/bloc4-l5-star-schema.csv",
    "nextLesson": "l6",
    "prerequisites": []
  },
  {
    "id": "l6",
    "title": "Table calendrier et relation active",
    "track": "bi",
    "moduleId": "b4",
    "difficulty": "Débutant",
    "why": "Pas de calendrier = analyses temporelles impossibles. La table calendrier est obligatoire pour tout modèle sérieux.",
    "example": {
      "scenario": "Comparer N vs N-1 et cumul mensuel sur les ventes.",
      "data": "FactSales avec OrderDate en clé, mais pas de table DimDate complète.",
      "goal": "Créer DimDate complète avec Année, Mois, Trimestre, et relation active vers FactSales."
    },
    "steps": [
      {
        "title": "Créer DimDate",
        "detail": "Utiliser CALENDARAUTO() ou créer une table de dates couvrant toute la période du modèle.",
        "tip": "La table doit couvrir du premier au dernier jour de données, sans trous.",
        "pitfall": "Une table de dates incomplète fausse les calculs YTD et SAMEPERIODLASTYEAR."
      },
      {
        "title": "Marquer table de dates",
        "detail": "Clic droit sur la table > Marquer comme table de dates. Sélectionner la colonne Date.",
        "tip": "Cela active automatiquement les fonctions de time intelligence DAX.",
        "pitfall": "Oublier cette étape empêche SAMEPERIODLASTYEAR et TOTALYTD de fonctionner."
      },
      {
        "title": "Relier à FactSales",
        "detail": "Créer la relation DimDate[Date] → FactSales[OrderDate] en 1-☆.",
        "tip": "Ajouter les colonnes Année, Mois, Trimestre avec un tri correct.",
        "pitfall": "Mois triés alphabétiquement dans les visuels = erreur classique."
      }
    ],
    "exercise": {
      "title": "Ajouter Année, Mois, Trimestre triés correctement",
      "instructions": "1. Crée une table DimDate avec CALENDARAUTO(). 2. Ajoute les colonnes Année, Mois (nom et numéro), Trimestre. 3. Marque comme table de dates. 4. Relie à FactSales.",
      "hints": [
        "CALENDARAUTO() détecte les dates du modèle",
        "Trie les mois par numéro, pas par nom",
        "Marquer comme table de dates active les fonctions temporelles"
      ],
      "dataset": "bloc4-l6-calendrier.csv"
    },
    "solution": {
      "steps": [
        "CALENDARAUTO()",
        "Ajouter Année = YEAR([Date])",
        "Ajouter Mois = FORMAT([Date], 'MMM') + N°Mois = MONTH([Date])",
        "Sort By Column: Mois par N°Mois",
        "Marquer comme table de dates",
        "Relier DimDate → FactSales"
      ],
      "explanation": "La table calendrier est indispensable. Sans elle, les calculs temporels DAX ne fonctionnent pas correctement."
    },
    "pitfalls": [
      {
        "trap": "Mois triés alphabétiquement",
        "fix": "Utiliser Sort By Column pour trier les mois par leur numéro."
      },
      {
        "trap": "Période incomplète",
        "fix": "S'assurer que la table couvre du min au max de toutes les dates du modèle."
      }
    ],
    "quiz": {
      "question": "Pourquoi marquer la table calendrier comme table de dates ?",
      "options": [
        "Pour colorer les visuels",
        "Pour accélérer le refresh",
        "Pour fiabiliser la time intelligence"
      ],
      "answer": 2,
      "difficulty": "Débutant",
      "explanation": "Les fonctions temporelles DAX dépendent d'une vraie table de dates."
    },
    "downloadFile": "datasets/bloc4-l6-calendrier.csv",
    "nextLesson": "l7",
    "prerequisites": [
      "l5"
    ]
  },
  {
    "id": "l7",
    "title": "Mesures DAX de base",
    "track": "bi",
    "moduleId": "b5",
    "difficulty": "Débutant",
    "why": "Les mesures sont les calculs centraux du rapport. Sans mesures bien nommées et protégées, le modèle est fragile.",
    "example": {
      "scenario": "Créer les KPI du rapport : CA, clients uniques, panier moyen.",
      "data": "FactSales avec Revenue, CustomerID, OrderID.",
      "goal": "Trois mesures centralisées dans une table _Measures."
    },
    "steps": [
      {
        "title": "Créer les mesures de base",
        "detail": "CA = SUM(FactSales[Revenue]). Clients = DISTINCTCOUNT(FactSales[CustomerID]). Panier Moyen = DIVIDE([CA], [Clients]).",
        "tip": "Toujours utiliser DIVIDE au lieu de / pour éviter la division par zéro.",
        "pitfall": "Une colonne calculée à la place d'une mesure est une erreur fréquente de débutant."
      },
      {
        "title": "Utiliser DIVIDE",
        "detail": "DIVIDE(numerateur, denominateur, alternative) gère la division par zéro proprement.",
        "tip": "Le 3e argument de DIVIDE est optionnel mais recommandé (ex: BLANK() ou 0).",
        "pitfall": "DIVIDE oublié provoque des erreurs quand le dénominateur vaut zéro."
      },
      {
        "title": "Nommer proprement",
        "detail": "Placer toutes les mesures dans une table dédiée _Measures. Préfixer : CA Total, Clients Uniques, Panier Moyen.",
        "tip": "Un nom de mesure doit expliciter ce qu'elle calcule. Éviter 'Mesure1'.",
        "pitfall": "Des noms vagues rendent le modèle impossible à maintenir."
      }
    ],
    "exercise": {
      "title": "Créer 3 mesures et les afficher dans des cartes KPI",
      "instructions": "1. Crée une table _Measures. 2. Crée CA, Clients Uniques, Panier Moyen. 3. Affiche les 3 dans des visuels carte.",
      "hints": [
        "SUM pour le CA total",
        "DISTINCTCOUNT pour les clients uniques",
        "DIVIDE pour le panier moyen"
      ],
      "dataset": "bloc5-l7-mesures-dax.csv"
    },
    "solution": {
      "steps": [
        "Créer table _Measures",
        "CA = SUM(FactSales[Revenue])",
        "Clients = DISTINCTCOUNT(FactSales[CustomerID])",
        "Panier Moyen = DIVIDE([CA], [Clients])",
        "Afficher dans 3 cartes KPI"
      ],
      "explanation": "Les mesures centralisées dans _Measures sont réutilisables partout. DIVIDE protège les divisions."
    },
    "pitfalls": [
      {
        "trap": "Colonnes calculées au lieu des mesures",
        "fix": "Une mesure est évaluée au moment du visuel, une colonne calculée est stockée. Préférer la mesure."
      },
      {
        "trap": "DIVIDE oublié",
        "fix": "Toujours utiliser DIVIDE au lieu de l'opérateur / pour les ratios."
      }
    ],
    "quiz": {
      "question": "Quelle fonction protège un ratio contre la division par zéro ?",
      "options": [
        "SUMX",
        "DIVIDE",
        "FILTER"
      ],
      "answer": 1,
      "difficulty": "Débutant",
      "explanation": "DIVIDE gère proprement les cas où le dénominateur vaut zéro."
    },
    "downloadFile": "datasets/bloc5-l7-mesures-dax.csv",
    "nextLesson": "l8",
    "prerequisites": [
      "l5"
    ]
  },
  {
    "id": "l8",
    "title": "CALCULATE et contexte de filtre",
    "track": "bi",
    "moduleId": "b5",
    "difficulty": "Intermédiaire",
    "why": "CALCULATE est la fonction la plus importante du DAX. Comprendre le contexte de filtre est la clé de tout calcul avancé.",
    "example": {
      "scenario": "Comparer le CA France au CA total pour calculer la part de la France.",
      "data": "FactSales avec Revenue et Country. CA France vs CA Total.",
      "goal": "Créer [CA France] et [% France] avec CALCULATE."
    },
    "steps": [
      {
        "title": "Mesure de base",
        "detail": "CA = SUM(FactSales[Revenue]). C'est la mesure qui sera modifiée par CALCULATE.",
        "tip": "Toujours partir d'une mesure de base simple avant d'utiliser CALCULATE.",
        "pitfall": "Créer une mesure complexe sans avoir la mesure de base d'abord."
      },
      {
        "title": "Mesure filtrée",
        "detail": "CA France = CALCULATE([CA], DimCountry[Country] = \"France\"). CALCULATE modifie le contexte de filtre.",
        "tip": "CALCULATE dit : 'évalue [CA] dans un contexte où Country = France'.",
        "pitfall": "Filtre mal appliqué = résultat incohérent. Toujours vérifier dans un tableau."
      },
      {
        "title": "Mesure de pourcentage",
        "detail": "% France = DIVIDE([CA France], [CA]). Le numérateur est filtré, le dénominateur est total.",
        "tip": "Tester la mesure dans une table avec et sans slicer pour vérifier le comportement.",
        "pitfall": "Confondre le contexte de filtre et le contexte de ligne est une erreur classique."
      }
    ],
    "exercise": {
      "title": "Créer [% France] et vérifier par segment",
      "instructions": "1. Crée [CA]. 2. Crée [CA France] avec CALCULATE. 3. Crée [% France] = DIVIDE. 4. Vérifie avec un slicer Country.",
      "hints": [
        "CALCULATE modifie le contexte de filtre",
        "Le slicer ne doit pas affecter le dénominateur de % France",
        "Teste la mesure dans un tableau"
      ],
      "dataset": "bloc5-l8-calculate.csv"
    },
    "solution": {
      "steps": [
        "CA = SUM(FactSales[Revenue])",
        "CA France = CALCULATE([CA], DimCountry[Country] = \"France\")",
        "% France = DIVIDE([CA France], [CA])",
        "Vérifier : total = 100%, France = part relative"
      ],
      "explanation": "CALCULATE permet de recalculer une mesure dans un contexte de filtre modifié. C'est la base des KPI segmentés."
    },
    "pitfalls": [
      {
        "trap": "Filtre mal appliqué",
        "fix": "Toujours tester la mesure dans un tableau croisé avec les dimensions concernées."
      },
      {
        "trap": "Contexte non compris",
        "fix": "Relire la formule en pensant : 'quel est le contexte de filtre à chaque endroit ?'"
      }
    ],
    "quiz": {
      "question": "CALCULATE sert principalement à :",
      "options": [
        "Créer des relations",
        "Changer le contexte de filtre",
        "Importer des CSV"
      ],
      "answer": 1,
      "difficulty": "Intermédiaire",
      "explanation": "CALCULATE évalue une mesure dans un contexte de filtre modifié."
    },
    "downloadFile": "datasets/bloc5-l8-calculate.csv",
    "nextLesson": "l9",
    "prerequisites": [
      "l7"
    ]
  },
  {
    "id": "l9",
    "title": "Time intelligence N vs N-1",
    "track": "bi",
    "moduleId": "b5",
    "difficulty": "Intermédiaire",
    "why": "Comparer les performances dans le temps est le besoin n°1 de tout dashboard métier.",
    "example": {
      "scenario": "Afficher l'évolution du CA annuel : CA N, CA N-1, et % de variation.",
      "data": "FactSales avec Revenue et OrderDate lié à DimDate marquée.",
      "goal": "Trois mesures : [CA N-1], [% Evolution], affichées dans un graphique annuel."
    },
    "steps": [
      {
        "title": "Créer [CA N-1]",
        "detail": "CA N-1 = CALCULATE([CA], SAMEPERIODLASTYEAR(DimDate[Date])). Nécessite une table de dates marquée.",
        "tip": "SAMEPERIODLASTYEAR est le raccourci le plus courant pour les comparaisons annuelles.",
        "pitfall": "Sans table de dates marquée, cette fonction retourne une erreur."
      },
      {
        "title": "Créer [% Evolution]",
        "detail": "% Evolution = DIVIDE([CA] - [CA N-1], [CA N-1]). Afficher en % avec 1 décimale.",
        "tip": "Toujours gérer le cas N-1 = 0 avec DIVIDE.",
        "pitfall": "Une période N-1 incomplète peut fausser la comparaison."
      },
      {
        "title": "Valider sur période complète",
        "detail": "Vérifier que les données N-1 couvrent la même période que l'année en cours.",
        "tip": "Comparer janvier à janvier, pas janvier à cumul annuel.",
        "pitfall": "Comparer des périodes de longueur différente donne des conclusions erronées."
      }
    ],
    "exercise": {
      "title": "Afficher un graphique annuel avec évolution",
      "instructions": "1. Crée [CA]. 2. Crée [CA N-1] avec SAMEPERIODLASTYEAR. 3. Crée [% Evolution]. 4. Affiche dans un graphique en colonnes.",
      "hints": [
        "La table DimDate doit être marquée comme table de dates",
        "SAMEPERIODLASTYEAR nécessite une relation active",
        "DIVIDE protège contre la division par zéro"
      ],
      "dataset": "bloc5-l9-time-intelligence.csv"
    },
    "solution": {
      "steps": [
        "CA = SUM(FactSales[Revenue])",
        "CA N-1 = CALCULATE([CA], SAMEPERIODLASTYEAR(DimDate[Date]))",
        "% Evolution = DIVIDE([CA] - [CA N-1], [CA N-1])",
        "Graphique en colonnes : CA N et CA N-1 par année"
      ],
      "explanation": "Time intelligence nécessite une table calendrier correcte. Elle permet les comparaisons temporelles essentielles."
    },
    "pitfalls": [
      {
        "trap": "Table date absente",
        "fix": "Toujours créer et marquer une table de dates avant d'utiliser les fonctions de time intelligence."
      },
      {
        "trap": "Périodes incomplètes",
        "fix": "Vérifier que les données N-1 couvrent exactement la même période que N."
      }
    ],
    "quiz": {
      "question": "Quelle fonction DAX est classique pour comparer N à N-1 ?",
      "options": [
        "SAMEPERIODLASTYEAR",
        "ALLEXCEPT",
        "TOPN"
      ],
      "answer": 0,
      "difficulty": "Intermédiaire",
      "explanation": "SAMEPERIODLASTYEAR retourne la période équivalente de l'année précédente."
    },
    "downloadFile": "datasets/bloc5-l9-time-intelligence.csv",
    "nextLesson": "l16",
    "prerequisites": [
      "l7",
      "l8"
    ]
  },
  {
    "id": "l10",
    "title": "Design d'un dashboard lisible",
    "track": "bi",
    "moduleId": "b7",
    "difficulty": "Débutant",
    "why": "Un dashboard doit aider à la décision, pas étaler des données. La clarté est plus importante que la quantité d'informations.",
    "example": {
      "scenario": "Page ventes pour direction commerciale — 12 visuels encombrés.",
      "data": "FactSales avec toutes les dimensions disponibles.",
      "goal": "5 visuels clés, hiérarchie claire, message métier explicite."
    },
    "steps": [
      {
        "title": "Définir une question business",
        "detail": "Avant de choisir un visuel, se demander : quelle question cette page doit-elle répondre ?",
        "tip": "Une page = une question principale. Ex : 'Les ventes suivent-elles l'objectif ?'",
        "pitfall": "Commencer par les visuels au lieu de la question mène à la surcharge."
      },
      {
        "title": "Limiter les visuels",
        "detail": "Maximum 5 visuels par page : 1 KPI principal, 1 tendance, 1 comparaison, 1 détail, 1 segment.",
        "tip": "Chaque visuel doit répondre à une sous-question du thème principal.",
        "pitfall": "Ajouter des visuels 'au cas où' dilue le message."
      },
      {
        "title": "Appliquer une grille cohérente",
        "detail": "Utiliser l'alignement Power BI, espaces réguliers, taille de police cohérente (titres 14pt, données 10pt).",
        "tip": "La hiérarchie visuelle guide l'œil : grand KPI en haut à gauche, détails en bas.",
        "pitfall": "Des tailles de police incohérentes rendent la page confuse."
      }
    ],
    "exercise": {
      "title": "Refondre une page surchargée en page claire",
      "instructions": "1. Identifie la question principale de la page. 2. Sélectionne 5 visuels maximum. 3. Organise avec une hiérarchie visuelle claire.",
      "hints": [
        "Une question = une page",
        "5 visuels max par page",
        "Le KPI principal en haut à gauche"
      ],
      "dataset": "bloc7-l10-dashboard.csv"
    },
    "solution": {
      "steps": [
        "Identifier la question : 'Les ventes suivent-elles l'objectif ?'",
        "KPI principal : CA vs Objectif",
        "Tendance : Courbe mensuelle",
        "Comparaison : N vs N-1",
        "Détail : Table par région",
        "Segment : Slicer catégorie"
      ],
      "explanation": "Un dashboard clair répond à une question. La hiérarchie visuelle guide le regard vers l'essentiel."
    },
    "pitfalls": [
      {
        "trap": "Trop de couleurs",
        "fix": "Utiliser 2-3 couleurs maximum, avec une couleur pour l'accent."
      },
      {
        "trap": "Trop de graphiques",
        "fix": "Se limiter à 5 visuels par page. Chaque visuel doit justifier sa place."
      },
      {
        "trap": "Pas de message",
        "fix": "Commencer par la question métier, pas par le choix des visuels."
      }
    ],
    "quiz": {
      "question": "Objectif principal d'un dashboard métier :",
      "options": [
        "Montrer tous les graphiques possibles",
        "Aider la décision",
        "Utiliser un maximum de couleurs"
      ],
      "answer": 1,
      "difficulty": "Débutant",
      "explanation": "Un dashboard doit orienter l'action, pas juste afficher des graphiques."
    },
    "downloadFile": "datasets/bloc7-l10-dashboard.csv",
    "nextLesson": "l11",
    "prerequisites": [
      "l5"
    ]
  },
  {
    "id": "l11",
    "title": "Slicers, drill-down, navigation",
    "track": "bi",
    "moduleId": "b7",
    "difficulty": "Débutant",
    "why": "L'interactivité fait la différence entre un rapport statique et un outil de décision. Slicers, drill-down et navigation guident l'utilisateur.",
    "example": {
      "scenario": "Analyse ventes par région > pays > ville avec filtres et navigation.",
      "data": "FactSales avec DimRegion hiérarchique.",
      "goal": "Rapport interactif avec slicers, hiérarchie drill-down et boutons de navigation."
    },
    "steps": [
      {
        "title": "Configurer les slicers",
        "detail": "Ajouter des slicers sur les dimensions clés (Année, Région, Catégorie). Les synchroniser entre pages.",
        "tip": "Limiter le nombre de slicers à 3-4 maximum pour ne pas surcharger.",
        "pitfall": "Trop de slicers rendent le rapport confus et lent."
      },
      {
        "title": "Activer le drill-down",
        "detail": "Créer une hiérarchie Région > Pays > Ville. L'activer sur l'axe du graphique.",
        "tip": "Le drill-down fonctionne sur les graphiques en barres, colonnes et cartes.",
        "pitfall": "Oublier de créer la hiérarchie empêche le drill-down."
      },
      {
        "title": "Créer des boutons de navigation",
        "detail": "Insérer > Boutons > Naviguer. Relier chaque bouton à une page cible.",
        "tip": "Ajouter des info-bulles aux boutons pour guider l'utilisateur.",
        "pitfall": "Navigation sans bouton retour = expérience frustrante."
      }
    ],
    "exercise": {
      "title": "Créer une navigation Résumé → Détail Produit",
      "instructions": "1. Crée une page Résumé avec KPI et slicer Région. 2. Crée une page Détail avec tableau produits. 3. Ajoute des boutons de navigation.",
      "hints": [
        "Slicer synchronisé entre les pages",
        "Hiérarchie Région > Pays pour le drill-down",
        "Bouton Retour sur chaque page"
      ],
      "dataset": "bloc7-l11-slicers.csv"
    },
    "solution": {
      "steps": [
        "Page Résumé : KPI + slicer Région",
        "Page Détail : tableau produits filtré",
        "Bouton 'Voir détail' → page Détail",
        "Bouton 'Retour' → page Résumé"
      ],
      "explanation": "L'interactivité guide l'utilisateur dans son analyse. Slicers et drill-down réduisent le nombre de pages nécessaires."
    },
    "pitfalls": [
      {
        "trap": "Trop de slicers",
        "fix": "Se limiter à 3-4 slicersMaximum, synchronisés entre pages."
      },
      {
        "trap": "Navigation confuse",
        "fix": "Toujours inclure un bouton retour et garder la navigation cohérente."
      }
    ],
    "quiz": {
      "question": "Le drill-down permet de :",
      "options": [
        "Descendre dans le détail",
        "Créer une nouvelle source",
        "Changer le thème"
      ],
      "answer": 0,
      "difficulty": "Débutant",
      "explanation": "Le drill-down passe d'un niveau agrégé à un niveau plus détaillé."
    },
    "downloadFile": "datasets/bloc7-l11-slicers.csv",
    "nextLesson": "l12",
    "prerequisites": [
      "l10"
    ]
  },
  {
    "id": "l12",
    "title": "Cas métier complet NovaRetail",
    "track": "bi",
    "moduleId": "b8",
    "difficulty": "Intermédiaire",
    "why": "Assembler toutes les compétences dans un projet de bout en bout est la meilleure façon de consolider les acquis.",
    "example": {
      "scenario": "Comité de direction mensuel — rapport ventes complet.",
      "data": "Sources hétérogènes : ventes CSV, produits Excel, budget SQL.",
      "goal": "Pipeline propre + dashboard + recommandations actionnables."
    },
    "steps": [
      {
        "title": "Ingestion",
        "detail": "Importer les 3 sources (CSV ventes, Excel produits, SQL budget) dans Power Query.",
        "tip": "Nommer chaque requête clairement dès l'import.",
        "pitfall": "Ne pas qualifier les sources dès le départ rend le flux illisible."
      },
      {
        "title": "Nettoyage",
        "detail": "Typer, dédupliquer, gérer les nulls sur chaque source. Paramétrer les chemins.",
        "tip": "Repasser les leçons L1-L4 si nécessaire.",
        "pitfall": "Sauter le nettoyage donne des calculs faux plus tard."
      },
      {
        "title": "Modélisation",
        "detail": "Construire le star schema : FactSales + DimProduct + DimCustomer + DimDate.",
        "tip": "Vérifier les cardinalités et les relations.",
        "pitfall": "Un modèle mal structuré ne peut pas être sauvé par des visuels."
      },
      {
        "title": "Mesures",
        "detail": "Créer les mesures clés : CA, Marge, % Marge, N vs N-1, Top 10 clients.",
        "tip": "Placer toutes les mesures dans _Measures.",
        "pitfall": "Des mesures dispersées rendent le modèle impossible à maintenir."
      },
      {
        "title": "Storytelling",
        "detail": "Organiser les pages : Résumé > Analyse > Détail. Ajouter slicers et navigation.",
        "tip": "Le rapport doit raconter une histoire avec une conclusion.",
        "pitfall": "Des pages sans fil narratif perdent l'attention du lecteur."
      }
    ],
    "exercise": {
      "title": "Livrer 5 insights actionnables + plan d'action",
      "instructions": "1. Importe et nettoie les 3 sources. 2. Construis le modèle. 3. Crée les mesures. 4. Construis le dashboard en 3 pages. 5. Rédige 5 recommandations.",
      "hints": [
        "Qualité des données d'abord",
        "Modèle en étoile",
        "Mesures centralisées",
        "Histoire cohérente"
      ],
      "dataset": "bloc8-l12-novaretail.csv"
    },
    "solution": {
      "steps": [
        "Sources propres",
        "Star schema validé",
        "Mesures DAX dans _Measures",
        "Dashboard 3 pages",
        "5 recommandations rédigées"
      ],
      "explanation": "Le projet complet valide toutes les compétences acquises. La qualité du résultat dépend de chaque étape."
    },
    "pitfalls": [
      {
        "trap": "Sauter la modélisation",
        "fix": "Le modèle est la fondation. Sans lui, les visuels sont instables."
      },
      {
        "trap": "Pas de validation métier",
        "fix": "Toujours faire valider les chiffres par un expert métier avant publication."
      }
    ],
    "quiz": {
      "question": "La dernière étape d'un cas métier complet est :",
      "options": [
        "Ajouter des couleurs",
        "Recommander une action métier claire",
        "Dupliquer la page"
      ],
      "answer": 1,
      "difficulty": "Intermédiaire",
      "explanation": "La valeur finale est la recommandation concrète basée sur l'analyse."
    },
    "downloadFile": "datasets/bloc8-l12-novaretail.csv",
    "nextLesson": "l15",
    "prerequisites": [
      "l5",
      "l7",
      "l10"
    ]
  },
  {
    "id": "l15",
    "title": "Cardinalités et sens de filtre",
    "track": "bi",
    "moduleId": "b4",
    "difficulty": "Intermédiaire",
    "why": "Une mauvaise relation peut doubler les totaux ou les fausser. Comprendre cardinalités et filtres est essentiel pour un modèle fiable.",
    "example": {
      "scenario": "Total incohérent à cause d'un filtre bidirectionnel non voulu.",
      "data": "FactSales reliée à DimProduct et DimCustomer, mais un filtre croisé inattendu.",
      "goal": "Corriger les relations pour obtenir des totaux fiables."
    },
    "steps": [
      {
        "title": "Identifier la table de faits",
        "detail": "La fact table est au centre. Toutes les dimensions se lient à elle, jamais entre elles directement (sauf exception).",
        "tip": "Dessiner le schéma sur papier avant de le construire dans Power BI.",
        "pitfall": "Lier des dimensions entre elles sans table pont crée de l'ambiguité."
      },
      {
        "title": "Corriger la cardinalité",
        "detail": "Vérifier chaque relation : dimension (1) → fait (☆). Si Power BI affiche ☆-☆, il y a un problème de clé.",
        "tip": "Les relations ☆-☆ indiquent souvent des doublons dans la dimension.",
        "pitfall": "Une relation many-to-many inattendue double les totaux."
      },
      {
        "title": "Tester les totaux",
        "detail": "Placer [CA] dans un visuel sans filtre, puis avec chaque dimension. Le total doit rester identique.",
        "tip": "Si le total change en fonction du filtre appliqué, le modèle a un problème.",
        "pitfall": "Ne pas tester les totaux est la cause la plus fréquente d'erreurs."
      }
    ],
    "exercise": {
      "title": "Corriger un modèle qui double le CA",
      "instructions": "1. Identifie la relation problématique. 2. Corrige la cardinalité ou le sens de filtre. 3. Vérifie que le total CA est correct.",
      "hints": [
        "Vérifie chaque relation dans la vue Modèle",
        "La dimension doit être côté 1",
        "Teste le total avec et sans filtre"
      ],
      "dataset": "bloc4-l15-cardinalites.csv"
    },
    "solution": {
      "steps": [
        "Ouvrir la vue Modèle",
        "Identifier la relation ☆-☆ ou bidirectionnelle",
        "Dédupliquer la dimension ou ajouter une table pont",
        "Vérifier tous les totaux"
      ],
      "explanation": "Les cardinalités et le sens de filtre déterminent comment les calculs se propagent. Un modèle propre = des totaux fiables."
    },
    "pitfalls": [
      {
        "trap": "Bidirectionnel inutile",
        "fix": "Garder le filtre simple (dimension → fait) sauf besoin explicite."
      },
      {
        "trap": "Clé non unique dans la dimension",
        "fix": "Supprimer les doublons sur la clé de la dimension avant de créer la relation."
      }
    ],
    "quiz": {
      "question": "Le sens de filtre recommandé par défaut est :",
      "options": [
        "Simple (dimension → fait)",
        "Double",
        "Aucun"
      ],
      "answer": 0,
      "difficulty": "Intermédiaire",
      "explanation": "Le filtre simple évite les ambiguïtés et les lenteurs."
    },
    "downloadFile": "datasets/bloc4-l15-cardinalites.csv",
    "nextLesson": "l20",
    "prerequisites": [
      "l5"
    ]
  },
  {
    "id": "l16",
    "title": "Variables et lisibilité des mesures",
    "track": "bi",
    "moduleId": "b5",
    "difficulty": "Intermédiaire",
    "why": "Les variables DAX (VAR) rendent les mesures lisibles, maintenables et plus performantes.",
    "example": {
      "scenario": "Calculer la marge en pourcentage avec logique intermédiaire.",
      "data": "FactSales avec Revenue et Cost. Marge % = (Revenue - Cost) / Revenue.",
      "goal": "Mesure lisible avec VAR pour calculer la marge %."
    },
    "steps": [
      {
        "title": "Découper en VAR",
        "detail": "VAR Revenue = SUM(FactSales[Revenue]). VAR Cost = SUM(FactSales[Cost]). RETURN DIVIDE(Revenue - Cost, Revenue).",
        "tip": "Chaque VAR doit avoir un nom explicite qui décrit sa valeur.",
        "pitfall": "Des noms vagues comme VAR1, VAR2 rendent la mesure illisible."
      },
      {
        "title": "Nommer explicitement",
        "detail": "Utiliser des noms comme vRevenueTotal, vCostTotal au lieu de x, y, tmp.",
        "tip": "Le nom de la variable doit pouvoir se lire comme une phrase : 'Revenue total'.",
        "pitfall": "Variables avec noms courts obscurcissent la logique."
      },
      {
        "title": "Tester les variables",
        "detail": "En mode développement, tester chaque VAR individuellement dans un visuel avant de les assembler.",
        "tip": "Utiliser une mesure temporaire pour valider chaque étape du calcul.",
        "pitfall": "Assembler des variables non testées rend le débogage difficile."
      }
    ],
    "exercise": {
      "title": "Réécrire une mesure complexe avec VAR",
      "instructions": "1. Prends la mesure Marge % calculée en une ligne. 2. Découpe-la en variables explicites. 3. Vérifie que le résultat est identique.",
      "hints": [
        "VAR pour Revenue et Cost séparément",
        "RETURN pour le calcul final",
        "Noms explicites pour chaque variable"
      ],
      "dataset": "bloc5-l16-variables.csv"
    },
    "solution": {
      "steps": [
        "VAR vRevenue = SUM(FactSales[Revenue])",
        "VAR vCost = SUM(FactSales[Cost])",
        "VAR vMarge = vRevenue - vCost",
        "RETURN DIVIDE(vMarge, vRevenue)"
      ],
      "explanation": "Les variables rendent la mesure lisible, débogable et performante. Chaque étape est nommée et testable."
    },
    "pitfalls": [
      {
        "trap": "Noms vagues",
        "fix": "Utiliser des noms descriptifs comme vRevenueTotal, vCostTotal."
      },
      {
        "trap": "Variables trop longues",
        "fix": "Si une mesure dépasse 10 variables, la découper en sous-mesures."
      }
    ],
    "quiz": {
      "question": "VAR en DAX sert surtout à :",
      "options": [
        "Rendre la mesure plus lisible",
        "Importer des données",
        "Créer une relation"
      ],
      "answer": 0,
      "difficulty": "Intermédiaire",
      "explanation": "VAR clarifie et simplifie le débogage des mesures DAX."
    },
    "downloadFile": "datasets/bloc5-l16-variables.csv",
    "nextLesson": "l17",
    "prerequisites": [
      "l7",
      "l8"
    ]
  },
  {
    "id": "l17",
    "title": "TOPN et segmentation client",
    "track": "bi",
    "moduleId": "b5",
    "difficulty": "Avancé",
    "why": "Identifier les segments à forte valeur permet de concentrer les efforts là où l'impact est maximum.",
    "example": {
      "scenario": "Top 10 clients et leur part du CA total.",
      "data": "FactSales avec CustomerID et Revenue.",
      "goal": "Mesure qui isole le Top 10 clients et calcule leur part relative."
    },
    "steps": [
      {
        "title": "Créer la mesure CA",
        "detail": "CA = SUM(FactSales[Revenue]). C'est la mesure de base pour le classement.",
        "tip": "Toujours partir d'une mesure de base simple.",
        "pitfall": "Essayer de créer le TOPN sans mesure de CA au préalable."
      },
      {
        "title": "Créer le TOPN",
        "detail": "CALCULATE([CA], TOPN(10, ALL(DimCustomer), [CA])). Crée une table virtuelle des 10 meilleurs.",
        "tip": "ALL est nécessaire pour ignorer le filtre actuel et classer globalement.",
        "pitfall": "Oublier ALL donne un classement dans le filtre actuel, pas global."
      },
      {
        "title": "Comparer au total",
        "detail": "% Top 10 = DIVIDE([CA Top 10], [CA]). La part relative montre la concentration.",
        "tip": "Si le Top 10 représente 80% du CA, la concentration est forte.",
        "pitfall": "Ne pas comparer au total ne donne pas la perspective."
      }
    ],
    "exercise": {
      "title": "Construire un indicateur part du Top 10",
      "instructions": "1. Crée [CA]. 2. Crée [CA Top 10] avec CALCULATE et TOPN. 3. Crée [% Top 10] = DIVIDE. 4. Affiche dans un visuel.",
      "hints": [
        "TOPN(10, ALL(DimCustomer), [CA]) pour le top global",
        "CALCULE le CA dans le contexte du Top 10",
        "DIVIDE pour la part relative"
      ],
      "dataset": "bloc5-l17-topn.csv"
    },
    "solution": {
      "steps": [
        "CA = SUM(FactSales[Revenue])",
        "CA Top10 = CALCULATE([CA], TOPN(10, ALL(DimCustomer[CustomerID]), [CA]))",
        "% Top10 = DIVIDE([CA Top10], [CA])"
      ],
      "explanation": "TOPN identifie les clients les plus importants. La part relative montre la concentration du chiffre d'affaires."
    },
    "pitfalls": [
      {
        "trap": "Contexte de filtre oublié",
        "fix": "Utiliser ALL dans TOPN pour le classement global."
      },
      {
        "trap": "Pas de comparaison au total",
        "fix": "Toujours diviser par le CA total pour donner la perspective."
      }
    ],
    "quiz": {
      "question": "TOPN permet de :",
      "options": [
        "Garder les N meilleurs éléments",
        "Créer des dates",
        "Nettoyer les nulls"
      ],
      "answer": 0,
      "difficulty": "Avancé",
      "explanation": "TOPN retourne les N premières lignes selon un tri."
    },
    "downloadFile": "datasets/bloc5-l17-topn.csv",
    "nextLesson": "l9",
    "prerequisites": [
      "l8"
    ]
  },
  {
    "id": "l18",
    "title": "Tooltips et drill-through",
    "track": "bi",
    "moduleId": "b7",
    "difficulty": "Intermédiaire",
    "why": "Le drill-through permet d'aller du résumé au détail en un clic. Les tooltips personnalisés enrichissent l'analyse sans surcharger.",
    "example": {
      "scenario": "Passer d'une vue région à un détail produit en cliquant sur une barre.",
      "data": "FactSales reliée à DimRegion et DimProduct.",
      "goal": "Page Résumé avec tooltip, page Détail avec drill-through sur Région."
    },
    "steps": [
      {
        "title": "Créer la page détail",
        "detail": "Ajouter une page 'Détail Produit' avec un visuel table affichant les colonnes produit et CA.",
        "tip": "La page détail doit répondre à la question 'qu'est-ce qui compose ce chiffre ?'",
        "pitfall": "Page détail surchargée = l'utilisateur est noyé dans l'information."
      },
      {
        "title": "Activer le drill-through",
        "detail": "Dans la page détail, ajouter le champ Région dans la zone 'Drill-through'. Un bouton retour apparaît.",
        "tip": "Le drill-through filtre automatiquement la page détail sur la valeur cliquée.",
        "pitfall": "Oublier le champ drill-through empêche la navigation contextuelle."
      },
      {
        "title": "Ajouter un tooltip personnalisé",
        "detail": "Créer une page tooltip avec un petit visuel (ex: CA par catégorie). Activer 'Type = Tooltip' dans les propriétés.",
        "tip": "Le tooltip apparaît au survol, sans cliquer. Très utile pour les KPI.",
        "pitfall": "Un tooltip trop grand gêne la lecture."
      }
    ],
    "exercise": {
      "title": "Activer le drill-through sur la région",
      "instructions": "1. Crée une page Détail Produit. 2. Ajoute Region dans Drill-through. 3. Crée un tooltip personnalisé. 4. Teste la navigation depuis la page Résumé.",
      "hints": [
        "Zone Drill-through dans le volet Propriétés",
        "Le bouton retour est ajouté automatiquement",
        "Tooltip = petite page avec Type = Tooltip"
      ],
      "dataset": "bloc7-l18-tooltips.csv"
    },
    "solution": {
      "steps": [
        "Créer page Détail Produit",
        "Ajouter Region dans Drill-through",
        "Créer tooltip avec CA par catégorie",
        "Naviguer depuis la page Résumé"
      ],
      "explanation": "Drill-through et tooltips rendent le rapport interactif sans surcharger les pages."
    },
    "pitfalls": [
      {
        "trap": "Page détail surchargée",
        "fix": "La page détail doit rester focalisée sur l'analyse du contexte cliqué."
      },
      {
        "trap": "Oublier le bouton retour",
        "fix": "Power BI ajoute un bouton retour automatiquement. Le garder visible."
      }
    ],
    "quiz": {
      "question": "Le drill-through sert à :",
      "options": [
        "Aller vers une page de détail filtrée",
        "Exporter en CSV",
        "Changer le thème"
      ],
      "answer": 0,
      "difficulty": "Intermédiaire",
      "explanation": "Drill-through transmet le contexte du point cliqué vers une page de détail."
    },
    "downloadFile": "datasets/bloc7-l18-tooltips.csv",
    "nextLesson": "l23",
    "prerequisites": [
      "l10",
      "l11"
    ]
  },
  {
    "id": "l20",
    "title": "Table pont many-to-many",
    "track": "bi",
    "moduleId": "b4",
    "difficulty": "Avancé",
    "why": "Les relations many-to-many sont fréquentes en entreprise. Les gérer proprement avec une bridge table évite les totaux gonflés.",
    "example": {
      "scenario": "Produits multi-catégories et ventes — un produit peut appartenir à plusieurs catégories.",
      "data": "DimProduct (500 produits), DimCategory (20 catégories), relation M2M.",
      "goal": "Bridge table explicite ProdcutCategory et totaux fiables."
    },
    "steps": [
      {
        "title": "Créer la table pont",
        "detail": "Créer une table Bridge_ProductCategory avec ProductID et CategoryID comme clés. Chaque ligne = un lien produit-catégorie.",
        "tip": "La table pont doit avoir une clé composite unique (ProductID + CategoryID).",
        "pitfall": "Doublons dans la table pont = totaux gonflés."
      },
      {
        "title": "Relier les dimensions",
        "detail": "Relier DimProduct → Bridge (1-☆), DimCategory → Bridge (1-☆). La bridge table est au milieu.",
        "tip": "La relation doit être dimension → pont → fait, jamais dimension ← pont → fait.",
        "pitfall": "Relation directe M2M sans pont = ambiguité de filtre."
      },
      {
        "title": "Tester la mesure",
        "detail": "Placer [CA] par Category dans un visuel. Vérifier que le total correspond au CA global.",
        "tip": "Si le total change quand on filtre, le modèle a un problème.",
        "pitfall": "Totaux incohérents = modèle M2M mal géré."
      }
    ],
    "exercise": {
      "title": "Corriger un M2M qui gonfle les totaux",
      "instructions": "1. Identifie la relation M2M problématique. 2. Crée la bridge table. 3. Relie les dimensions. 4. Vérifie les totaux.",
      "hints": [
        "La bridge table relie les deux dimensions",
        "Clé composite unique dans la bridge",
        "Vérifie le total CA après correction"
      ],
      "dataset": "bloc4-l20-many-to-many.csv"
    },
    "solution": {
      "steps": [
        "Créer Bridge_ProductCategory(ProductID, CategoryID)",
        "Relier DimProduct(1) → Bridge(☆)",
        "Relier DimCategory(1) → Bridge(☆)",
        "Supprimer la relation M2M directe",
        "Vérifier totaux"
      ],
      "explanation": "La bridge table clarifie la relation M2M et empêche les totaux gonflés."
    },
    "pitfalls": [
      {
        "trap": "Relations directes ambiguës",
        "fix": "Toujours utiliser une bridge table pour les M2M, jamais une relation directe."
      },
      {
        "trap": "Doublons dans la bridge",
        "fix": "Vérifier la clé composite unique avec Supprimer les doublons."
      }
    ],
    "quiz": {
      "question": "Pour gérer un many-to-many proprement, on ajoute :",
      "options": [
        "Une table pont",
        "Une colonne aléatoire",
        "Un nouveau thème"
      ],
      "answer": 0,
      "difficulty": "Avancé",
      "explanation": "La bridge table résout l'ambiguïté de filtre du M2M."
    },
    "downloadFile": "datasets/bloc4-l20-many-to-many.csv",
    "nextLesson": "l28",
    "prerequisites": [
      "l5",
      "l15"
    ]
  },
  {
    "id": "l21",
    "title": "SUMX et itérateurs",
    "track": "bi",
    "moduleId": "b6",
    "difficulty": "Avancé",
    "why": "Les itérateurs DAX permettent des calculs ligne par ligne que SUM seul ne peut pas faire.",
    "example": {
      "scenario": "Calculer une marge pondérée : Quantité × Marge unitaire par ligne.",
      "data": "FactSales avec Qty et MarginUnit par ligne de vente.",
      "goal": "Marge totale = SUMX(FactSales, Qty × MarginUnit)."
    },
    "steps": [
      {
        "title": "Définir l'expression ligne",
        "detail": "L'expression FactSales[Qty] * FactSales[MarginUnit] calcule la marge pour chaque ligne de vente.",
        "tip": "L'expression est évaluée dans le contexte de ligne de la table.",
        "pitfall": "Essayer d'utiliser SUM pour un calcul qui nécessite une multiplication ligne par ligne."
      },
      {
        "title": "Appliquer SUMX",
        "detail": "SUMX(FactSales, FactSales[Qty] * FactSales[MarginUnit]). Itère sur chaque ligne, calcule l'expression, puis additionne.",
        "tip": "L'itérateur évalue d'abord l'expression pour chaque ligne, puis agrège.",
        "pitfall": "Confondre SUM et SUMX — SUM ne peut pas multiplier deux colonnes."
      },
      {
        "title": "Comparer au résultat",
        "detail": "Vérifier en ajoutant une colonne calculée et en sommant. Le résultat doit être identique.",
        "tip": "SUMX est préférable à une colonne calculée qui prend de l'espace.",
        "pitfall": "Ne pas vérifier le résultat peut masquer une erreur de contexte."
      }
    ],
    "exercise": {
      "title": "Calculer une marge pondérée avec SUMX",
      "instructions": "1. Crée une mesure Marge Totale avec SUMX. 2. Vérifie le résultat contre une colonne calculée. 3. Affiche dans un visuel.",
      "hints": [
        "SUMX itère sur chaque ligne de la table",
        "L'expression est Qty * MarginUnit",
        "Le résultat est la somme de toutes les marges"
      ],
      "dataset": "bloc6-l21-iterateurs.csv"
    },
    "solution": {
      "steps": [
        "Marge Totale = SUMX(FactSales, FactSales[Qty] * FactSales[MarginUnit])",
        "Vérifier avec une colonne calculée",
        "Résultat identique mais sans stockage supplémentaire"
      ],
      "explanation": "SUMX itère ligne par ligne pour des calculs impossibles avec SUM seul."
    },
    "pitfalls": [
      {
        "trap": "Confondre SUM et SUMX",
        "fix": "SUM agrège une seule colonne. SUMX peut calculer une expression complexe par ligne."
      },
      {
        "trap": "Performance avec grande table",
        "fix": "Éviter les SUMX imbriqués. Préférer les mesures simples quand c'est possible."
      }
    ],
    "quiz": {
      "question": "SUMX effectue :",
      "options": [
        "Itération ligne par ligne",
        "Filtrage visuel",
        "Tri automatique"
      ],
      "answer": 0,
      "difficulty": "Avancé",
      "explanation": "SUMX évalue une expression pour chaque ligne de la table spécifiée."
    },
    "downloadFile": "datasets/bloc6-l21-iterateurs.csv",
    "nextLesson": "l22",
    "prerequisites": [
      "l7",
      "l8"
    ]
  },
  {
    "id": "l22",
    "title": "ALL / REMOVEFILTERS",
    "track": "bi",
    "moduleId": "b6",
    "difficulty": "Avancé",
    "why": "Construire des ratios stables dans n'importe quel contexte de filtre est essentiel pour des KPI fiables.",
    "example": {
      "scenario": "Part du CA produit par rapport au total, stable même avec des slicers.",
      "data": "FactSales avec Revenue et DimProduct.",
      "goal": "[% Part Produit] = DIVIDE([CA], CALCULATE([CA], REMOVEFILTERS(DimProduct)))."
    },
    "steps": [
      {
        "title": "Mesure de base",
        "detail": "CA = SUM(FactSales[Revenue]). C'est le numérateur du ratio.",
        "tip": "Toujours partir d'une mesure de base simple.",
        "pitfall": "Créer le ratio sans mesure de base."
      },
      {
        "title": "Mesure total sans filtre",
        "detail": "CA Total = CALCULATE([CA], REMOVEFILTERS(DimProduct)). REMOVEFILTERS supprime les filtres sur la dimension.",
        "tip": "REMOVEFILTERS est la syntaxe moderne de ALL dans ce contexte.",
        "pitfall": "Retirer trop de filtres rend le ratio instable dans certains contextes."
      },
      {
        "title": "Ratio final",
        "detail": "% Part Produit = DIVIDE([CA], [CA Total]). Le numérateur est filtré, le dénominateur est le total.",
        "tip": "Tester avec un slicer produit : le numérateur change, le dénominateur reste stable.",
        "pitfall": "Tester le ratio sans slicer ne valide pas le comportement filtré."
      }
    ],
    "exercise": {
      "title": "Créer [% Part Produit] stable avec slicers",
      "instructions": "1. Crée [CA]. 2. Crée [CA Total] avec REMOVEFILTERS. 3. Crée [% Part Produit]. 4. Teste avec un slicer produit.",
      "hints": [
        "REMOVEFILTERS supprime les filtres sur la dimension",
        "Le total doit rester stable quand on filtre",
        "DIVIDE protège la division"
      ],
      "dataset": "bloc6-l22-all-removefilters.csv"
    },
    "solution": {
      "steps": [
        "CA = SUM(FactSales[Revenue])",
        "CA Total = CALCULATE([CA], REMOVEFILTERS(DimProduct))",
        "% Part = DIVIDE([CA], [CA Total])"
      ],
      "explanation": "REMOVEFILTERS permet de créer un dénominateur stable pour les ratios, indépendant des slicers."
    },
    "pitfalls": [
      {
        "trap": "Retirer trop de filtres",
        "fix": "Spécifier uniquement la dimension à supprimer (REMOVEFILTERS(DimProduct)), pas ALL()."
      },
      {
        "trap": "Confondre ALL et REMOVEFILTERS",
        "fix": "REMOVEFILTERS est plus lisible et ne modifie que le contexte de filtre."
      }
    ],
    "quiz": {
      "question": "REMOVEFILTERS sert à :",
      "options": [
        "Retirer des filtres dans le calcul",
        "Supprimer une table",
        "Changer la langue"
      ],
      "answer": 0,
      "difficulty": "Avancé",
      "explanation": "REMOVEFILTERS modifie le contexte de calcul DAX en supprimant les filtres spécifiés."
    },
    "downloadFile": "datasets/bloc6-l22-all-removefilters.csv",
    "nextLesson": "l29",
    "prerequisites": [
      "l8",
      "l16"
    ]
  },
  {
    "id": "l23",
    "title": "KPI avancés et alerts",
    "track": "bi",
    "moduleId": "b7",
    "difficulty": "Avancé",
    "why": "Un KPI doit dire si la situation est bonne ou non. Les alertes visuelles rendent la décision immédiate.",
    "example": {
      "scenario": "Alerte marge < objectif — le vert ne suffit pas, il faut du rouge quand ça ne va pas.",
      "data": "Marge = 68%, Objectif = 70%. Écart = -2 points.",
      "goal": "KPI avec couleur conditionnelle : vert si ≥ objectif, rouge sinon."
    },
    "steps": [
      {
        "title": "Mesure variance",
        "detail": "Variance = [Marge %] - [Objectif Marge]. Créer la mesure d'écart entre la valeur et l'objectif.",
        "tip": "L'objectif peut venir d'une table de budget ou d'un paramètre.",
        "pitfall": "Ne pas avoir d'objectif explicite rend le KPI subjectif."
      },
      {
        "title": "Seuil d'alerte",
        "detail": "Définir un seuil clair : ≥ 70% = OK, < 70% = Attention, < 60% = Critique.",
        "tip": "Les seuils doivent être validés avec le métier.",
        "pitfall": "Seuils non partagés avec le métier = KPI sans action."
      },
      {
        "title": "Mise en forme conditionnelle",
        "detail": "Dans le visuel carte, activer la mise en forme conditionnelle sur la couleur. Vert ≥ 70%, jaune 60-70%, rouge < 60%.",
        "tip": "Utiliser les règles de couleur plutôt que les dégradés pour plus de lisibilité.",
        "pitfall": "Trop de nuances de couleur rendent le KPI illisible."
      }
    ],
    "exercise": {
      "title": "Ajouter un code couleur sur KPI marge",
      "instructions": "1. Crée [Marge %] et [Objectif Marge]. 2. Crée [Variance]. 3. Applique une mise en forme conditionnelle. 4. Teste avec différentes valeurs.",
      "hints": [
        "Variance = Marge % - Objectif",
        "Règles de couleur : ≥ 70% vert, < 70% rouge",
        "Valider les seuils avec le métier"
      ],
      "dataset": "bloc7-l23-kpi-alerts.csv"
    },
    "solution": {
      "steps": [
        "Marge % = DIVIDE([Marge], [CA])",
        "Objectif Marge = 0.70",
        "Variance = [Marge %] - [Objectif Marge]",
        "Mise en forme conditionnelle sur Variance"
      ],
      "explanation": "Un KPI avec alerte visuelle rend la décision immédiate. Pas besoin de lire les chiffres pour savoir si ça va."
    },
    "pitfalls": [
      {
        "trap": "Seuils non partagés avec le métier",
        "fix": "Toujours valider les seuils avec les décideurs avant publication."
      },
      {
        "trap": "Trop de nuances de couleur",
        "fix": "Se limiter à 3 niveaux : vert, jaune, rouge."
      }
    ],
    "quiz": {
      "question": "Un KPI alerting efficace doit :",
      "options": [
        "Avoir un seuil explicite",
        "Être très décoratif",
        "Ignorer les objectifs"
      ],
      "answer": 0,
      "difficulty": "Avancé",
      "explanation": "Le seuil rend le KPI décisionnel et actionnable."
    },
    "downloadFile": "datasets/bloc7-l23-kpi-alerts.csv",
    "nextLesson": "l24",
    "prerequisites": [
      "l10"
    ]
  },
  {
    "id": "l24",
    "title": "Storytelling multi-pages",
    "track": "bi",
    "moduleId": "b7",
    "difficulty": "Intermédiaire",
    "why": "Un rapport doit raconter une histoire, pas afficher des données sans lien. Le parcours guide le lecteur vers la décision.",
    "example": {
      "scenario": "Résumé direction → détail région → détail produit.",
      "data": "Dashboard multi-pages avec 3 niveaux de détail.",
      "goal": "Parcours narratif clair : Quoi → Pourquoi → Action."
    },
    "steps": [
      {
        "title": "Définir le message",
        "detail": "Quel est le message principal du rapport ? Ex : 'Les ventes suivent l'objectif mais la marge baisse.'",
        "tip": "Le message doit tenir en une phrase.",
        "pitfall": "Pas de message clair = rapport qui ne guide pas."
      },
      {
        "title": "Ordre des pages",
        "detail": "Page 1 : Résumé (KPI principaux). Page 2 : Causes (analyse). Page 3 : Actions (détail et recommandations).",
        "tip": "Chaque page répond à une question soulevée par la page précédente.",
        "pitfall": "Pages sans lien logique = parcours confus."
      },
      {
        "title": "Navigation guidée",
        "detail": "Ajouter des boutons de navigation clairs : 'Voir détail', 'Retour au résumé'. Utiliser des signets pour les vues alternatives.",
        "tip": "L'utilisateur ne doit jamais se demander 'où aller ensuite ?'",
        "pitfall": "Navigation sans bouton retour = frustration."
      }
    ],
    "exercise": {
      "title": "Organiser 3 pages avec fil narratif",
      "instructions": "1. Définis le message principal. 2. Crée Page Résumé (KPI). 3. Crée Page Causes. 4. Crée Page Actions. 5. Ajoute navigation entre les pages.",
      "hints": [
        "Message en une phrase",
        "Page 1 = Quoi, Page 2 = Pourquoi, Page 3 = Action",
        "Boutons de navigation clairs"
      ],
      "dataset": "bloc7-l24-storytelling.csv"
    },
    "solution": {
      "steps": [
        "Message : 'Ventes OK mais marge en baisse'",
        "Page 1 : KPI CA et Marge",
        "Page 2 : Analyse par région/produit",
        "Page 3 : Actions recommandées",
        "Navigation entre pages"
      ],
      "explanation": "Le storytelling guide le lecteur. Chaque page doit répondre à la question soulevée par la page précédente."
    },
    "pitfalls": [
      {
        "trap": "Pages sans lien logique",
        "fix": "Chaque page doit répondre à une question de la page précédente."
      },
      {
        "trap": "Pas de bouton retour",
        "fix": "Ajouter un bouton retour sur chaque page de détail."
      }
    ],
    "quiz": {
      "question": "Le storytelling multi-pages aide à :",
      "options": [
        "Guider la décision",
        "Ajouter des bugs",
        "Augmenter les clics inutiles"
      ],
      "answer": 0,
      "difficulty": "Intermédiaire",
      "explanation": "Il structure la compréhension du décideur."
    },
    "downloadFile": "datasets/bloc7-l24-storytelling.csv",
    "nextLesson": "l31",
    "prerequisites": [
      "l10",
      "l11"
    ]
  },
  {
    "id": "l25",
    "title": "Projet RH guidé",
    "track": "bi",
    "moduleId": "b8",
    "difficulty": "Intermédiaire",
    "why": "Appliquer les compétences dans un cas concret RH consolide tous les acquis.",
    "example": {
      "scenario": "Dashboard RH opérationnel : effectif, turnover, absentéisme.",
      "data": "Fichiers RH bruts avec données d'effectif, de départs et d'absences.",
      "goal": "Dashboard RH prêt comité avec 3 recommandations actionnables."
    },
    "steps": [
      {
        "title": "Nettoyer RH",
        "detail": "Importer les fichiers, typer, dédupliquer, gérer les nulls sur les données d'effectif.",
        "tip": "Les données RH ont souvent des doublons et des dates incomplètes.",
        "pitfall": "Les dates de départ manquantes créent des calculs de turnover erronés."
      },
      {
        "title": "Modéliser RH",
        "detail": "Créer FactEffectif + DimEmployee + DimDate. Star schema RH.",
        "tip": "La table d'effectif est la fact table. Employé et Date sont les dimensions.",
        "pitfall": "Modèle plat sans dimensions = visuels lents et calculs instables."
      },
      {
        "title": "Mesures RH",
        "detail": "Créer : Effectif, Nouveaux entrants, Départs, Taux Turnover, Taux Absentéisme.",
        "tip": "Turnover = Départs / Effectif moyen. Toujours DIVIDE pour les ratios.",
        "pitfall": "Turnover calculé sur Effectif de fin de période au lieu de la moyenne."
      },
      {
        "title": "Visuels RH",
        "detail": "Courbes de tendance, comparaison N/N-1, top départements, KPI turnover.",
        "tip": "Le visuel doit répondre à 'Où le turnover est-il un problème et pourquoi ?'",
        "pitfall": "Visuels sans message RH actionable."
      }
    ],
    "exercise": {
      "title": "Livrer 3 recommandations RH basées sur les données",
      "instructions": "1. Importe et nettoie les données RH. 2. Construis le modèle. 3. Crée les mesures RH. 4. Construis le dashboard. 5. Rédige 3 recommandations.",
      "hints": [
        "Effectif = DISTINCTCOUNT(EmployeeID)",
        "Turnover = DIVIDE(Départs, Effectif moyen)",
        "Segmentation par département"
      ],
      "dataset": "bloc8-l25-rh.csv"
    },
    "solution": {
      "steps": [
        "Données RH propres",
        "Star schema RH validé",
        "Mesures : Effectif, Turnover, Absentéisme",
        "Dashboard RH 3 pages",
        "3 recommandations actionnables"
      ],
      "explanation": "Le projet RH relie les chiffres RH aux décisions manager. La segmentation est clé."
    },
    "pitfalls": [
      {
        "trap": "Indicateurs sans contexte temporel",
        "fix": "Toujours comparer N/N-1 et montrer la tendance."
      },
      {
        "trap": "Turnover sans segmentation",
        "fix": "Analyser par département, ancienneté et catégorie pour identifier les leviers."
      }
    ],
    "quiz": {
      "question": "Un bon dashboard RH doit inclure :",
      "options": [
        "Turnover + absentéisme",
        "Seulement des couleurs",
        "Aucune dimension temps"
      ],
      "answer": 0,
      "difficulty": "Intermédiaire",
      "explanation": "Ces KPI sont centraux pour le pilotage RH."
    },
    "downloadFile": "datasets/bloc8-l25-rh.csv",
    "nextLesson": "l26",
    "prerequisites": [
      "l5",
      "l7",
      "l10"
    ]
  },
  {
    "id": "l26",
    "title": "Projet budget guidé",
    "track": "bi",
    "moduleId": "b8",
    "difficulty": "Avancé",
    "why": "Comparer budget vs réalisé est le besoin fondamental du pilotage financier.",
    "example": {
      "scenario": "Centres de coûts mensuels — budget vs réalisé.",
      "data": "Table budget (prévisions) et table réalisé (factuels) par centre de coût et mois.",
      "goal": "Dashboard variance et causes top 5 écarts."
    },
    "steps": [
      {
        "title": "Préparer budget",
        "detail": "Importer la table budget, typer, et la relier au modèle (centre de coût + mois).",
        "tip": "Le budget est souvent en format large — unpivot les mois.",
        "pitfall": "Budget en format large = nécessite unpivot."
      },
      {
        "title": "Relier réalisé",
        "detail": "Relier la table budget à FactSales via DimDate et DimCostCenter.",
        "tip": "Budget et réalisé doivent partager les mêmes dimensions.",
        "pitfall": "Périodes non alignées entre budget et réalisé."
      },
      {
        "title": "Mesures d'écart",
        "detail": "Écart = [Réalisé] - [Budget]. Écart % = DIVIDE([Écart], [Budget]). Variance favorable/défavorable.",
        "tip": "Classer les écarts par valeur absolue pour prioriser.",
        "pitfall": "Ne pas distinguer écart favorable et défavorable."
      },
      {
        "title": "Storytelling",
        "detail": "Page 1 : Vue globale des écarts. Page 2 : Top 5 écarts défavorables. Page 3 : Actions recommandées.",
        "tip": "Le rapport doit conduire à l'action : où agir en priorité ?",
        "pitfall": "Dashboard sans plan d'action = exercice académique."
      }
    ],
    "exercise": {
      "title": "Présenter top 5 écarts et actions",
      "instructions": "1. Importe budget et réalisé. 2. Relie-les au modèle. 3. Crée les mesures d'écart. 4. Identifie les top 5 écarts. 5. Propose des actions.",
      "hints": [
        "Unpivot le budget si nécessaire",
        "Écart = Réalisé - Budget",
        "Classer par valeur absolue"
      ],
      "dataset": "bloc8-l26-budget.csv"
    },
    "solution": {
      "steps": [
        "Budget unpivoté et typé",
        "Relier budget et réalisé aux mêmes dimensions",
        "Écart = Réalisé - Budget",
        "Top 5 écarts défavorables",
        "Plan d'action par centre de coût"
      ],
      "explanation": "Le projet budget montre où concentrer l'analyse. La variance est la base du pilotage financier."
    },
    "pitfalls": [
      {
        "trap": "Périodes non alignées",
        "fix": "Vérifier que budget et réalisé couvrent exactement les mêmes périodes."
      },
      {
        "trap": "Écarts sans priorisation",
        "fix": "Classer par valeur absolue et se concentrer sur les top 5."
      }
    ],
    "quiz": {
      "question": "Le KPI clé du projet budget est :",
      "options": [
        "Écart budget-réalisé",
        "Nombre de pages",
        "Couleur du thème"
      ],
      "answer": 0,
      "difficulty": "Avancé",
      "explanation": "L'écart est la base du pilotage budgétaire."
    },
    "downloadFile": "datasets/bloc8-l26-budget.csv",
    "nextLesson": "l28",
    "prerequisites": [
      "l5",
      "l7"
    ]
  },
  {
    "id": "l28",
    "title": "RLS (Row-Level Security) simplifiée",
    "track": "bi",
    "moduleId": "b4",
    "difficulty": "Avancé",
    "why": "La sécurité au niveau des lignes garantit que chaque utilisateur ne voit que ses données.",
    "example": {
      "scenario": "Chaque manager voit uniquement sa région dans le rapport.",
      "data": "DimRegion avec les régions. Utilisateurs affectés à des rôles régionaux.",
      "goal": "Règle RLS par région : chaque manager ne voit que ses données."
    },
    "steps": [
      {
        "title": "Créer un rôle",
        "detail": "Modélisation > Gérer les rôles > Créer un rôle 'Manager Région'. Définir le filtre sur DimRegion.",
        "tip": "Le rôle filtre les données au niveau de la dimension, pas de la fact table.",
        "pitfall": "Filtrer directement la fact table au lieu de la dimension."
      },
      {
        "title": "Écrire le filtre",
        "detail": "Dans le rôle, ajouter : [Region] = USERNAME() ou [RegionEmail] = USERPRINCIPALNAME().",
        "tip": "USERPRINCIPALNAME() retourne l'email de l'utilisateur connecté.",
        "pitfall": "Utiliser USERNAME() au lieu de USERPRINCIPALNAME() dans Power BI Service."
      },
      {
        "title": "Tester en mode rôle",
        "detail": "Modélisation > Voir en tant que > Sélectionner le rôle et l'utilisateur pour vérifier le filtre.",
        "tip": "Toujours tester la RLS avant de publier le rapport.",
        "pitfall": "RLS non testée = données visibles par erreur."
      }
    ],
    "exercise": {
      "title": "Créer une RLS par région",
      "instructions": "1. Crée un rôle 'Manager Région'. 2. Ajoute le filtre sur DimRegion[Region]. 3. Teste en mode rôle avec différents utilisateurs.",
      "hints": [
        "Gérer les rôles dans la vue Modélisation",
        "USERPRINCIPALNAME() dans Power BI Service",
        "Toujours tester en mode rôle"
      ],
      "dataset": "bloc4-l28-rls.csv"
    },
    "solution": {
      "steps": [
        "Créer rôle 'Manager Région'",
        "Filtre : DimRegion[RegionEmail] = USERPRINCIPALNAME()",
        "Tester avec 'Voir en tant que'",
        "Publier et vérifier"
      ],
      "explanation": "RLS restreint les données visibles au niveau des lignes, basé sur l'utilisateur connecté."
    },
    "pitfalls": [
      {
        "trap": "RLS non testée avant publication",
        "fix": "Toujours utiliser 'Voir en tant que' pour simuler chaque rôle."
      },
      {
        "trap": "Filtre sur la fact table",
        "fix": "Le filtre RLS doit toujours porter sur la dimension, pas sur la fact table."
      }
    ],
    "quiz": {
      "question": "La RLS sert à :",
      "options": [
        "Restreindre les lignes visibles selon l'utilisateur",
        "Accélérer DAX",
        "Importer CSV"
      ],
      "answer": 0,
      "difficulty": "Avancé",
      "explanation": "RLS filtre les données selon l'utilisateur connecté."
    },
    "downloadFile": "datasets/bloc4-l28-rls.csv",
    "nextLesson": "l29",
    "prerequisites": [
      "l5"
    ]
  },
  {
    "id": "l29",
    "title": "YTD, MTD, QTD",
    "track": "bi",
    "moduleId": "b6",
    "difficulty": "Avancé",
    "why": "Les KPI cumulés sont les indicateurs les plus demandés en entreprise. YTD, MTD, QTD sont indispensables.",
    "example": {
      "scenario": "Suivi CA cumulé depuis début d'année et comparaison N-1.",
      "data": "FactSales reliée à DimDate marquée comme table de dates.",
      "goal": "Mesures [CA YTD] et [CA YTD N-1] pour suivi et comparaison."
    },
    "steps": [
      {
        "title": "Mesure de base",
        "detail": "CA = SUM(FactSales[Revenue]). C'est la mesure sur laquelle on calcule les cumuls.",
        "tip": "Toutes les time intelligence partent d'une mesure de base.",
        "pitfall": "Essayer de cumuler sans mesure de base."
      },
      {
        "title": "TOTALYTD",
        "detail": "CA YTD = TOTALYTD([CA], DimDate[Date]). Cumul depuis le 1er janvier.",
        "tip": "TOTALYTD accepte un 3e argument pour les exercices décalés.",
        "pitfall": "Table date incomplète = YTD calculé sur période partielle."
      },
      {
        "title": "Comparaison N-1",
        "detail": "CA YTD N-1 = CALCULATE([CA YTD], SAMEPERIODLASTYEAR(DimDate[Date])).",
        "tip": "Toujours comparer le YTD actuel au YTD de l'année précédente.",
        "pitfall": "Comparer YTD à un mois spécifique de N-1 = non comparable."
      }
    ],
    "exercise": {
      "title": "Afficher YTD et variation vs YTD N-1",
      "instructions": "1. Crée [CA]. 2. Crée [CA YTD] avec TOTALYTD. 3. Crée [CA YTD N-1]. 4. Crée [% Variation YTD]. 5. Affiche dans un graphique.",
      "hints": [
        "TOTALYTD nécessite une table de dates marquée",
        "SAMEPERIODLASTYEAR pour la comparaison N-1",
        "DIVIDE pour le % de variation"
      ],
      "dataset": "bloc6-l29-ytd.csv"
    },
    "solution": {
      "steps": [
        "CA = SUM(FactSales[Revenue])",
        "CA YTD = TOTALYTD([CA], DimDate[Date])",
        "CA YTD N-1 = CALCULATE([CA YTD], SAMEPERIODLASTYEAR(DimDate[Date]))",
        "% Var YTD = DIVIDE([CA YTD] - [CA YTD N-1], [CA YTD N-1])"
      ],
      "explanation": "YTD additionne depuis le début de l'année. La comparaison N-1 donne la tendance."
    },
    "pitfalls": [
      {
        "trap": "Table date incomplète",
        "fix": "S'assurer que la table de dates couvre du 1er janvier au 31 décembre."
      },
      {
        "trap": "Périodes non comparable",
        "fix": "Toujours comparer YTD à YTD N-1, jamais à un mois spécifique."
      }
    ],
    "quiz": {
      "question": "YTD signifie :",
      "options": [
        "Year-To-Date",
        "Yesterday Trend Data",
        "Yearly Table Dimension"
      ],
      "answer": 0,
      "difficulty": "Avancé",
      "explanation": "YTD calcule le cumul depuis le début d'année."
    },
    "downloadFile": "datasets/bloc6-l29-ytd.csv",
    "nextLesson": "l30",
    "prerequisites": [
      "l9"
    ]
  },
  {
    "id": "l30",
    "title": "Ranking dynamique",
    "track": "bi",
    "moduleId": "b6",
    "difficulty": "Avancé",
    "why": "Le classement dynamique permet d'identifier les meilleurs éléments dans n'importe quel contexte de filtre.",
    "example": {
      "scenario": "Classement des commerciaux par CA, filtrable par région et période.",
      "data": "FactSales avec SalespersonID et Revenue.",
      "goal": "Top 5 commerciaux dynamiques avec RANKX."
    },
    "steps": [
      {
        "title": "Mesure CA",
        "detail": "CA = SUM(FactSales[Revenue]). Mesure de base pour le classement.",
        "tip": "Le ranking se fait toujours sur une mesure, pas sur une colonne.",
        "pitfall": "Utiliser une colonne au lieu d'une mesure pour le ranking."
      },
      {
        "title": "RANKX",
        "detail": "Classement = RANKX(ALL(DimSalesperson), [CA]). RANKX évalue la mesure pour chaque ligne de la table et classe.",
        "tip": "ALL est nécessaire pour que le classement soit global, pas relatif au filtre actuel.",
        "pitfall": "Oublier ALL = classement dans le filtre actuel, pas global."
      },
      {
        "title": "Top N dynamique",
        "detail": "Ajouter un visuel avec filtre top N ou utiliser la mesure dans un visuel cartésien avec filtre [Classement] <= 5.",
        "tip": "Un slicer sur la période ne doit pas affecter le classement global si ALL est bien utilisé.",
        "pitfall": "Classement figé sans contexte de filtre."
      }
    ],
    "exercise": {
      "title": "Afficher top 5 commerciaux dynamiques",
      "instructions": "1. Crée [CA]. 2. Crée [Classement] avec RANKX. 3. Filtre top 5 dans un visuel. 4. Teste avec slicer région.",
      "hints": [
        "RANKX(ALL(DimSalesperson), [CA])",
        "Filtre visuel sur Classement <= 5",
        "Tester avec différents slicers"
      ],
      "dataset": "bloc6-l30-ranking.csv"
    },
    "solution": {
      "steps": [
        "CA = SUM(FactSales[Revenue])",
        "Classement = RANKX(ALL(DimSalesperson), [CA])",
        "Filtrer le visuel sur Classement <= 5"
      ],
      "explanation": "RANKX classe dynamiquement selon le contexte. ALL garantit un classement global."
    },
    "pitfalls": [
      {
        "trap": "Classement figé sans contexte",
        "fix": "Utiliser ALL dans RANKX pour un classement global, ou un contexte partiel pour un classement relatif."
      },
      {
        "trap": "Performance sur grandes tables",
        "fix": "Éviter les RANKX imbriqués et limiter le calcul aux N nécessaires."
      }
    ],
    "quiz": {
      "question": "Fonction DAX de ranking :",
      "options": [
        "RANKX",
        "SWITCH",
        "VALUES"
      ],
      "answer": 0,
      "difficulty": "Avancé",
      "explanation": "RANKX calcule le rang dans un ensemble selon une mesure."
    },
    "downloadFile": "datasets/bloc6-l30-ranking.csv",
    "nextLesson": "l31",
    "prerequisites": [
      "l21",
      "l22"
    ]
  },
  {
    "id": "l31",
    "title": "UX reporting pro",
    "track": "bi",
    "moduleId": "b7",
    "difficulty": "Avancé",
    "why": "Un rapport professionnel doit être lisible en 30 secondes. L'UX détermine l'adoption par les utilisateurs.",
    "example": {
      "scenario": "Refonte d'un rapport utilisé en comité hebdo — 12 visuels, navigation confuse.",
      "data": "Rapport existant surchargé à refondre.",
      "goal": "3 pages maximum avec navigation claire et KPI visibles en 30 secondes."
    },
    "steps": [
      {
        "title": "Prioriser les KPIs",
        "detail": "Sélectionner les 3 KPI les plus importants pour le comité. Les placer en haut de la page Résumé.",
        "tip": "Moins mais mieux : 3 KPI forts valent mieux que 12 métriques floues.",
        "pitfall": "Surclasser les KPI dilue le message."
      },
      {
        "title": "Uniformiser le design",
        "detail": "Police cohérente (titres 14pt, données 10pt), palette limitée (3 couleurs max), fonds unis.",
        "tip": "L'alignement et l'espacement sont plus importants que les effets visuels.",
        "pitfall": "Polices et couleurs incohérentes = rapport amateur."
      },
      {
        "title": "Tester avec l'utilisateur",
        "detail": "Présenter le rapport à un utilisateur cible et observer son parcours. Ajuster selon ses retours.",
        "tip": "L'utilisateur doit comprendre le message en 30 secondes sans explication.",
        "pitfall": "Ne pas tester = rapport qui ne sera pas utilisé."
      }
    ],
    "exercise": {
      "title": "Réorganiser un rapport en 3 pages max",
      "instructions": "1. Identifie les 3 KPI prioritaires. 2. Crée 3 pages : Résumé, Diagnostic, Action. 3. Uniformise le design. 4. Teste avec un collègue.",
      "hints": [
        "3 KPI maximum en page Résumé",
        "Palette de 3 couleurs",
        "Tester avec un vrai utilisateur"
      ],
      "dataset": "bloc7-l31-ux-reporting.csv"
    },
    "solution": {
      "steps": [
        "Sélectionner 3 KPI prioritaires",
        "Page 1 : KPI + tendance",
        "Page 2 : Analyse causes",
        "Page 3 : Actions recommandées",
        "Design uniforme et test utilisateur"
      ],
      "explanation": "L'UX pro rend le rapport adoptable. 30 secondes pour comprendre le message."
    },
    "pitfalls": [
      {
        "trap": "Surcharge visuelle",
        "fix": "Supprimer tout visuel qui ne répond pas directement à la question principale."
      },
      {
        "trap": "Pas de test utilisateur",
        "fix": "Toujours tester avec un utilisateur réel avant de livrer."
      }
    ],
    "quiz": {
      "question": "Un bon UX reporting favorise :",
      "options": [
        "Compréhension rapide",
        "Complexité maximale",
        "Couleurs aléatoires"
      ],
      "answer": 0,
      "difficulty": "Avancé",
      "explanation": "L'objectif est une lecture rapide et fiable du message principal."
    },
    "downloadFile": "datasets/bloc7-l31-ux-reporting.csv",
    "nextLesson": "l32",
    "prerequisites": [
      "l10",
      "l24"
    ]
  },
  {
    "id": "l32",
    "title": "Projet marketing complet",
    "track": "bi",
    "moduleId": "b8",
    "difficulty": "Avancé",
    "why": "Le ROI marketing est le KPI qui guide les arbitrages budgétaires. Ce projet assemble toutes les compétences.",
    "example": {
      "scenario": "Campagnes multi-canaux (SEA, social, email) avec leur ROI respectif.",
      "data": "Dépenses marketing par canal, conversions et revenus associés.",
      "goal": "Dashboard ROI + plan d'action avec 3 arbitrages budgétaires justifiés."
    },
    "steps": [
      {
        "title": "Nettoyer sources",
        "detail": "Importer les données de campagnes, dépenses et conversions. Typer, dédupliquer, gérer les nulls.",
        "tip": "Les données marketing sont souvent multi-sources avec des formats hétérogènes.",
        "pitfall": "Attribuer les conversions sans règle claire."
      },
      {
        "title": "Modéliser canaux",
        "detail": "Créer FactCampaigns + DimChannel + DimDate. Star schema marketing.",
        "tip": "Le canal est une dimension clé du modèle marketing.",
        "pitfall": "Modèle sans dimension canal = analyse impossible."
      },
      {
        "title": "Mesures ROI/CAC",
        "detail": "ROI = DIVIDE([Revenu Campagne] - [Dépense Campagne], [Dépense Campagne]). CAC = DIVIDE([Dépense], [Nouveaux Clients]).",
        "tip": "Le ROI par canal permet les arbitrages budgétaires.",
        "pitfall": "ROI sans tenir compte des coûts indirects."
      },
      {
        "title": "Restituer",
        "detail": "Dashboard : ROI par canal, évolution mensuelle, top campagnes, recommandations.",
        "tip": "Le dashboard doit conduire aux décisions : où investir plus, où réduire.",
        "pitfall": "Dashboard sans recommandation = exercice académique."
      }
    ],
    "exercise": {
      "title": "Proposer 3 arbitrages budgétaires justifiés",
      "instructions": "1. Importe et nettoie les données marketing. 2. Modélise avec Star schema. 3. Calcule ROI et CAC par canal. 4. Propose 3 arbitrages.",
      "hints": [
        "ROI = (Revenu - Dépense) / Dépense",
        "CAC = Dépense / Nouveaux Clients",
        "Comparer les canaux pour arbitrer"
      ],
      "dataset": "bloc8-l32-marketing.csv"
    },
    "solution": {
      "steps": [
        "Données propres multi-sources",
        "Star schema avec DimChannel",
        "ROI et CAC par canal",
        "Dashboard marketing 3 pages",
        "3 arbitrages : investir, réduire, tester"
      ],
      "explanation": "Le projet marketing relie dépenses et résultats pour guider les arbitrages budgétaires."
    },
    "pitfalls": [
      {
        "trap": "Attribution des conversions sans règle claire",
        "fix": "Définir un modèle d'attribution (premier clic, dernier clic, multi-touch) avant le calcul."
      },
      {
        "trap": "ROI sans coûts indirects",
        "fix": "Inclure les coûts opérationnels dans le calcul du ROI."
      }
    ],
    "quiz": {
      "question": "Le KPI principal ici est :",
      "options": [
        "ROI campagne",
        "Nombre de visuels",
        "Taille de police"
      ],
      "answer": 0,
      "difficulty": "Avancé",
      "explanation": "Le ROI guide les arbitrages marketing."
    },
    "downloadFile": "datasets/bloc8-l32-marketing.csv",
    "nextLesson": "l33",
    "prerequisites": [
      "l5",
      "l7",
      "l10"
    ]
  },
  {
    "id": "l33",
    "title": "Contrôles paie et anomalies",
    "track": "bi",
    "moduleId": "b8",
    "difficulty": "Avancé",
    "why": "Détecter automatiquement les écarts de paie anormaux fait gagner des heures de contrôle manuel.",
    "example": {
      "scenario": "Variation brut > 20% sans motif déclaré sur les bulletins de paie.",
      "data": "Bulletins mensuels avec Brut, Net, Charges par employé.",
      "goal": "Table anomalies priorisées avec statut de validation."
    },
    "steps": [
      {
        "title": "Importer bulletins",
        "detail": "Charger les bulletins de paie CSV/Excel. Typer les colonnes montant, vérifier les dates.",
        "tip": "Les montants de paie doivent être en type Décimal avec locale française.",
        "pitfall": "Montants en texte = calculs impossibles."
      },
      {
        "title": "Créer règles de contrôle",
        "detail": "Variation > 20% du brut d'un mois sur l'autre = anomalie. Montant net > brut = anomalie. Écart charges > 15% = anomalie.",
        "tip": "Chaque règle doit être validée par le métier (DRH, comptable).",
        "pitfall": "Règles trop larges = trop de faux positifs."
      },
      {
        "title": "Prioriser anomalies",
        "detail": "Classer les anomalies par montant et par sévérité. Haute = écart > 30% ou montant > 50K. Moyenne = 20-30%. Basse = 15-20%.",
        "tip": "Se concentrer sur les anomalies haute priorité d'abord.",
        "pitfall": "Traiter toutes les anomalies pareil = perte de temps."
      }
    ],
    "exercise": {
      "title": "Construire un tableau anomalies paie mensuelles",
      "instructions": "1. Importe les bulletins. 2. Calcule la variation mensuelle. 3. Applique les règles de contrôle. 4. Priorise les anomalies.",
      "hints": [
        "Variation = (Brut N - Brut N-1) / Brut N-1",
        "Règles validées par le métier",
        "Priorité haute > 30%, moyenne 20-30%"
      ],
      "dataset": "bloc8-l33-paie.csv"
    },
    "solution": {
      "steps": [
        "Importer et typer les bulletins",
        "Calculer variation mensuelle du brut",
        "Appliquer 3 règles de contrôle",
        "Classer par sévérité haute/moyenne/basse"
      ],
      "explanation": "L'automatisation du contrôle paie identifie rapidement les bulletins à vérifier en priorité."
    },
    "pitfalls": [
      {
        "trap": "Règles trop larges",
        "fix": "Ajuster les seuils avec le métier et affiner progressivement."
      },
      {
        "trap": "Pas de statut de validation",
        "fix": "Ajouter une colonne Validé/En cours/Rejeté pour le suivi."
      }
    ],
    "quiz": {
      "question": "Un contrôle paie utile est :",
      "options": [
        "Écart > seuil",
        "Changer les couleurs",
        "Renommer un onglet"
      ],
      "answer": 0,
      "difficulty": "Avancé",
      "explanation": "Le contrôle d'écart détecte les anomalies rapidement."
    },
    "downloadFile": "datasets/bloc8-l33-paie.csv",
    "nextLesson": "l34",
    "prerequisites": [
      "l1",
      "l7"
    ]
  },
  {
    "id": "l34",
    "title": "Masse salariale et simulation",
    "track": "bi",
    "moduleId": "b8",
    "difficulty": "Avancé",
    "why": "Simuler l'impact d'une hausse salariale permet de décider à coût connu.",
    "example": {
      "scenario": "Simulation +2% sur une population ciblée.",
      "data": "Données d'effectif avec salaire brut par employé et catégorie.",
      "goal": "Impact mensuel et annuel de l'augmentation sur la masse salariale."
    },
    "steps": [
      {
        "title": "Créer base masse salariale",
        "detail": "Importer les données d'effectif avec salaire brut, catégorie et département. Calculer la masse salariale actuelle.",
        "tip": "La masse salariale = somme des salaires bruts + charges patronales.",
        "pitfall": "Oublier les charges patronales sous-estime le coût réel."
      },
      {
        "title": "Appliquer scénario",
        "detail": "Créer un paramètre What-if pour le taux d'augmentation. Mesure Masse simulée = Masse actuelle × (1 + Paramètre%).",
        "tip": "Utiliser un paramètre What-if pour que l'utilisateur puisse tester différents scénarios.",
        "pitfall": "Scénario sans paramètre dynamique = rapport statique."
      },
      {
        "title": "Comparer résultats",
        "detail": "Afficher côte à côte la masse actuelle et la masse simulée avec l'écart en valeur et en %.",
        "tip": "Le visuel doit montrer immédiatement l'impact coût.",
        "pitfall": "Population mal filtrée = simulation incorrecte."
      }
    ],
    "exercise": {
      "title": "Simuler 2 scénarios d'augmentation",
      "instructions": "1. Importe les données d'effectif. 2. Crée un paramètre What-if. 3. Calcule la masse simulée. 4. Compare actuelle vs simulée.",
      "hints": [
        "Masse = SUM(Salaire brut) × 1.45 pour charges",
        "Paramètre What-if pour le taux",
        "Comparer actuel vs simulé en visuel"
      ],
      "dataset": "bloc8-l34-masse-salariale.csv"
    },
    "solution": {
      "steps": [
        "Masse actuelle = SUM(Salaire Brut) × 1.45",
        "Paramètre Taux Augmentation (0% à 5%)",
        "Masse simulée = Masse actuelle × (1 + Taux)",
        "Visuel comparatif actuel vs simulé"
      ],
      "explanation": "La simulation permet de tester des hypothèses avant de décider. L'impact coût est visible immédiatement."
    },
    "pitfalls": [
      {
        "trap": "Population mal filtrée",
        "fix": "Appliquer la simulation seulement aux catégories concernées."
      },
      {
        "trap": "Charges patronales oubliées",
        "fix": "Inclure un coefficient de charges dans le calcul de la masse."
      }
    ],
    "quiz": {
      "question": "La simulation paie sert à :",
      "options": [
        "Mesurer l'impact financier d'une augmentation",
        "Créer des thèmes visuels",
        "Supprimer des lignes"
      ],
      "answer": 0,
      "difficulty": "Avancé",
      "explanation": "Elle aide à anticiper les coûts salariaux avant décision."
    },
    "downloadFile": "datasets/bloc8-l34-masse-salariale.csv",
    "nextLesson": "l35",
    "prerequisites": [
      "l7",
      "l16"
    ]
  },
  {
    "id": "l35",
    "title": "Turnover et causes RH",
    "track": "bi",
    "moduleId": "b8",
    "difficulty": "Avancé",
    "why": "Mesurer et expliquer les départs est la base du pilotage RH.",
    "example": {
      "scenario": "Turnover élevé sur une BU spécifique.",
      "data": "Données d'effectif avec dates d'entrée et de sortie par BU.",
      "goal": "KPI turnover + segmentation + recommandations de rétention."
    },
    "steps": [
      {
        "title": "Calculer turnover",
        "detail": "Turnover = DIVIDE(Départs sur la période, Effectif moyen sur la période).",
        "tip": "L'effectif moyen = (Effectif début + Effectif fin) / 2.",
        "pitfall": "Turnover calculé sur l'effectif de fin au lieu de l'effectif moyen."
      },
      {
        "title": "Segmenter par BU",
        "detail": "Analyser le turnover par département, ancienneté, catégorie professionnelle.",
        "tip": "La segmentation révèle les BU à risque là où la moyenne globale masque le problème.",
        "pitfall": "Pas de segmentation = moyenne trompeuse."
      },
      {
        "title": "Identifier facteurs",
        "detail": "Corréler le turnover avec l'ancienneté, le management, la localisation. Ajouter des indicateurs contextuels.",
        "tip": "Les facteurs explicatifs guident les actions de rétention.",
        "pitfall": "Corrélation ≠ causalité. Valider avec le terrain."
      }
    ],
    "exercise": {
      "title": "Produire une synthèse turnover trimestrielle",
      "instructions": "1. Calcule le taux de turnover global et par BU. 2. Identifie les BU à risque. 3. Propose 3 actions de rétention.",
      "hints": [
        "Turnover = Départs / Effectif moyen",
        "Segmenter par BU et ancienneté",
        "Actions de rétention ciblées"
      ],
      "dataset": "bloc8-l35-turnover.csv"
    },
    "solution": {
      "steps": [
        "Turnover global = Départs / Effectif moyen",
        "Turnover par BU et par ancienneté",
        "Identifier BU à risque (turnover > 15%)",
        "3 actions : intégration, management, mobilité"
      ],
      "explanation": "Le turnover analysé par segment révèle les leviers d'action RH."
    },
    "pitfalls": [
      {
        "trap": "Pas de segmentation",
        "fix": "Toujours analyser par BU, ancienneté, catégorie pour identifier les vrais leviers."
      },
      {
        "trap": "Corrélation ≠ causalité",
        "fix": "Valider les hypothèses avec les managers et les enquêtes de sortie."
      }
    ],
    "quiz": {
      "question": "Pour analyser le turnover, il faut surtout :",
      "options": [
        "Segmenter les populations",
        "Regarder une moyenne globale seule",
        "Masquer les départs"
      ],
      "answer": 0,
      "difficulty": "Avancé",
      "explanation": "La segmentation révèle les vrais leviers RH."
    },
    "downloadFile": "datasets/bloc8-l35-turnover.csv",
    "nextLesson": "l36",
    "prerequisites": [
      "l7",
      "l15"
    ]
  },
  {
    "id": "l36",
    "title": "Clôture mensuelle et écarts",
    "track": "bi",
    "moduleId": "b8",
    "difficulty": "Avancé",
    "why": "Comparer réalisé vs budget par centre de coût est la base du pilotage financier mensuel.",
    "example": {
      "scenario": "Écarts significatifs sur charges externes lors de la clôture.",
      "data": "Table budget et table réalisé par centre de coût et par mois.",
      "goal": "Vue écarts priorisés avec top 10 à commenter."
    },
    "steps": [
      {
        "title": "Préparer budget/réalisé",
        "detail": "Importer les deux tables. S'assurer qu'elles partagent les mêmes dimensions (centre de coût, mois).",
        "tip": "Le budget est souvent en format large — unpivot les mois si nécessaire.",
        "pitfall": "Périodes non alignées entre budget et réalisé."
      },
      {
        "title": "Calculer écarts",
        "detail": "Écart = Réalisé - Budget. Écart % = DIVIDE(Écart, Budget). Variance favorable ou défavorable.",
        "tip": "Un écart positif sur les dépenses est DÉFAVORABLE (on dépense plus que prévu).",
        "pitfall": "Confondre écart favorable et défavorable selon le type de compte."
      },
      {
        "title": "Classer priorités",
        "detail": "Ranking des écarts par valeur absolue. Top 10 défavorables et top 5 favorables.",
        "tip": "Se concentrer sur les 10 plus gros écarts défavorables d'abord.",
        "pitfall": "Traiter tous les écarts pareil = perte de temps."
      }
    ],
    "exercise": {
      "title": "Sortir un top 10 écarts à commenter",
      "instructions": "1. Importe budget et réalisé. 2. Calcule les écarts en valeur et %. 3. Classe par valeur absolue. 4. Affiche top 10 écarts à commenter.",
      "hints": [
        "Écart = Réalisé - Budget",
        "Variance défavorable = dépassement",
        "Classer par valeur absolue pour prioriser"
      ],
      "dataset": "bloc8-l36-cloture.csv"
    },
    "solution": {
      "steps": [
        "Budget et réalisés alignés (mêmes dimensions)",
        "Écart = Réalisé - Budget",
        "Écart % = DIVIDE(Écart, Budget)",
        "Top 10 écarts défavorables par valeur absolue"
      ],
      "explanation": "La priorisation des écarts concentre l'analyse là où l'impact est maximum."
    },
    "pitfalls": [
      {
        "trap": "Périodes non alignées",
        "fix": "Vérifier que budget et réalisé couvrent exactement les mêmes mois et centres de coût."
      },
      {
        "trap": "Sens des écarts inversé",
        "fix": "Pour les dépenses : écart positif = défavorable. Pour les revenus : écart positif = favorable."
      }
    ],
    "quiz": {
      "question": "En clôture, le KPI clé est :",
      "options": [
        "Écart budget-réalisé",
        "Nombre de visuels",
        "Thème sombre"
      ],
      "answer": 0,
      "difficulty": "Avancé",
      "explanation": "L'écart est central pour le pilotage financier."
    },
    "downloadFile": "datasets/bloc8-l36-cloture.csv",
    "nextLesson": null,
    "prerequisites": [
      "l7",
      "l22"
    ]
  }
];