const modules = [
  { id: 'b0', title: 'Bloc 0 — Mise en route', desc: 'Comprendre l’écosystème Excel / Power Query / Power BI.' },
  { id: 'b1', title: 'Bloc 1 — Bases Power Query', desc: 'Importer, nettoyer, typer les données.' },
  { id: 'b2', title: 'Bloc 2 — Power Query intermédiaire', desc: 'Merge, append, group by, pivot / unpivot.' },
  { id: 'b3', title: 'Bloc 3 — Power Query avancé', desc: 'Premiers pas en langage M et performance.' },
  { id: 'b4', title: 'Bloc 4 — Modélisation', desc: 'Star schema, relations, table calendrier.' },
  { id: 'b5', title: 'Bloc 5 — DAX fondation', desc: 'Mesures essentielles et contexte de filtre.' },
  { id: 'b6', title: 'Bloc 6 — DAX avancé', desc: 'Variables, itérateurs, time intelligence.' },
  { id: 'b7', title: 'Bloc 7 — Visualisation', desc: 'Storytelling, hiérarchie visuelle, slicers.' },
  { id: 'b8', title: 'Bloc 8 — Cas métiers', desc: 'Assembler toutes les compétences.' }
];

const lessons = [
  {
    id: 'l1',
    theme: 'Power Query',
    title: 'L1 — Importer un CSV et typer les colonnes',
    objective: 'Importer une source brute et corriger les types sans casser les données.',
    example: 'Export ERP ventes avec dates en texte et montants mélangés.',
    visual: {
      type: 'Avant / Après',
      before: 'DateCommande="01-02-2025" ; Montant="1 250,50" ; ClientID=00125 (nombre)',
      after: 'DateCommande=Date ; Montant=Décimal ; ClientID=Texte'
    },
    steps: ['Charger le CSV', 'Promouvoir les en-têtes', 'Corriger types', 'Renommer requête'],
    exercise: 'Corrige les 3 colonnes mal typées puis valide le nombre de lignes.',
    solution: 'Types fixes + vérification des lignes avant/après (identiques).',
    simple: 'Toujours regarder les types dès la première minute.',
    pitfalls: ['Codes clients transformés en nombre', 'Locale décimale incorrecte', 'Type Date non reconnu'],
    summary: ['Typage = fondation', 'Pas de modèle solide sans types propres', 'Nommer les étapes clairement'],
    quiz: {
      question: 'Quel type faut-il garder pour ClientID ?',
      options: ['Nombre entier', 'Texte', 'Date'],
      answer: 1,
      explain: 'ClientID est un identifiant métier, pas une valeur de calcul.'
    }
  },
  {
    id: 'l2',
    theme: 'Power Query',
    title: 'L2 — Nettoyer doublons, nulls, erreurs',
    objective: 'Livrer une table fiable pour l’analyse.',
    example: 'Base CRM avec emails vides et clients dupliqués.',
    visual: {
      type: 'Checklist visuelle',
      before: '42 120 lignes, 1 250 doublons, 320 erreurs',
      after: '40 870 lignes uniques, 0 erreur bloquante'
    },
    steps: ['Identifier clé métier', 'Supprimer doublons', 'Traiter null/erreurs par règle métier'],
    exercise: 'Nettoie la table prospects et documente les choix.',
    solution: 'Déduplication sur ClientID + règle null email=“inconnu@...” uniquement si validé métier.',
    simple: 'Tu choisis d’abord la clé, ensuite tu nettoies.',
    pitfalls: ['Doublons supprimés sur mauvaise colonne', 'Valeurs nulles masquées sans justification'],
    summary: ['Nettoyage tracé', 'Toujours comparer nb lignes', 'Règles métier explicites'],
    quiz: {
      question: 'Quelle est la première décision avant de supprimer les doublons ?',
      options: ['Définir la clé de déduplication', 'Changer toutes les valeurs nulles', 'Trier par date'],
      answer: 0,
      explain: 'Sans clé métier claire, tu risques de supprimer de mauvaises lignes.'
    }
  },
  {
    id: 'l3',
    theme: 'Power Query',
    title: 'L3 — Merge vs Append',
    objective: 'Utiliser la bonne opération de combinaison.',
    example: 'Ventes 2024 + ventes 2025 + référentiel produits.',
    visual: {
      type: 'Schéma rapide',
      before: 'Ventes_2024 || Ventes_2025 + Produits',
      after: 'Append(Ventes_2024,Ventes_2025) puis Merge avec Produits'
    },
    steps: ['Append des années', 'Merge avec dimensions', 'Contrôle cardinalité'],
    exercise: 'Produis une table ventes enrichie catégorie/sous-catégorie.',
    solution: 'Append puis merge sur ProductID unique.',
    simple: 'Append empile. Merge relie.',
    pitfalls: ['Join sur clé non unique', 'Colonnes homonymes non renommées'],
    summary: ['Append=vertical', 'Merge=horizontal', 'Tester toujours le nombre de lignes'],
    quiz: {
      question: 'Pour empiler deux fichiers de ventes mensuelles, tu utilises :',
      options: ['Merge', 'Append', 'Group by'],
      answer: 1,
      explain: 'Append concatène des lignes, alors que Merge ajoute des colonnes.'
    }
  },
  {
    id: 'l4',
    theme: 'Power Query',
    title: 'L4 — Pivot / Unpivot pour restructurer',
    objective: 'Passer d’un format large à un format analytique.',
    example: 'Colonnes Jan, Fév, Mar à transformer en lignes.',
    visual: {
      type: 'Transformation',
      before: 'Produit | Jan | Fév | Mar',
      after: 'Produit | Mois | Montant'
    },
    steps: ['Sélectionner colonnes mois', 'Unpivot columns', 'Renommer attribut/valeur'],
    exercise: 'Convertis un tableau budget mensuel en format long.',
    solution: 'Unpivot sur colonnes période puis typage date/mois.',
    simple: 'Les visuels aiment les tableaux “longs”.',
    pitfalls: ['Unpivot sur mauvaise plage', 'Mois textuels non ordonnés'],
    summary: ['Format long > format large', 'Facilite DAX', 'Facilite slicers'],
    quiz: {
      question: 'Quelle action transforme Jan/Fév/Mar en lignes ?',
      options: ['Unpivot', 'Split column', 'Merge queries'],
      answer: 0,
      explain: 'Unpivot convertit des colonnes de période en lignes analytiques.'
    }
  },
  {
    id: 'l5',
    theme: 'Modélisation',
    title: 'L5 — Construire un schéma en étoile',
    objective: 'Créer un modèle stable et performant.',
    example: 'Ventes + clients + produits + calendrier.',
    visual: {
      type: 'Mini schéma',
      before: 'Une table géante SalesFlat',
      after: 'FactSales au centre + DimDate/DimProduct/DimCustomer'
    },
    steps: ['Isoler la table de faits', 'Créer dimensions', 'Relier en 1-*'],
    exercise: 'Découper SalesFlat en 4 tables principales.',
    solution: 'Fact + 3 dimensions nettoyées et dédupliquées.',
    simple: 'Le modèle est plus important que le visuel.',
    pitfalls: ['Many-to-many évitable', 'Relations bidirectionnelles inutiles'],
    summary: ['Star schema = base', 'Dimensions propres', 'Clés claires'],
    quiz: {
      question: 'Que contient principalement la table de faits ?',
      options: ['Descriptions détaillées des produits', 'Mesures + clés de dimensions', 'Uniquement des dates'],
      answer: 1,
      explain: 'La fact table stocke les événements mesurables reliés aux dimensions.'
    }
  },
  {
    id: 'l6',
    theme: 'Modélisation',
    title: 'L6 — Table calendrier et relation active',
    objective: 'Activer une vraie analyse temporelle.',
    example: 'Comparer N vs N-1 et cumul mensuel.',
    visual: {
      type: 'Contrôle modèle',
      before: 'Dates venant de la fact uniquement',
      after: 'DimDate complète reliée en relation active'
    },
    steps: ['Créer DimDate', 'Marquer table de dates', 'Relier à FactSales[OrderDate]'],
    exercise: 'Ajouter Année, Mois, Trimestre triés correctement.',
    solution: 'Colonnes calendaires + sort by month number.',
    simple: 'Pas de calendrier = analyses de temps bancales.',
    pitfalls: ['Mois triés alphabétiquement', 'Période incomplète'],
    summary: ['Date continue', 'Relation active', 'Colonnes utiles au slicing'],
    quiz: {
      question: 'Pourquoi marquer la table calendrier comme table de dates ?',
      options: ['Pour colorer les visuels', 'Pour accélérer le refresh', 'Pour fiabiliser la time intelligence'],
      answer: 2,
      explain: 'Les fonctions temporelles DAX dépendent d’une vraie table de dates.'
    }
  },
  {
    id: 'l7',
    theme: 'DAX',
    title: 'L7 — Mesures DAX de base',
    objective: 'Créer des KPI robustes et lisibles.',
    example: 'CA, clients uniques, panier moyen.',
    visual: {
      type: 'Formules clés',
      before: 'Calculs au hasard dans visuels',
      after: '[CA], [Clients], [Panier Moyen] centralisés'
    },
    steps: ['Créer mesures de base', 'Utiliser DIVIDE', 'Nommer proprement'],
    exercise: 'Créer 3 mesures et les afficher dans cartes KPI.',
    solution: 'Mesures dans table dédiée _Measures.',
    simple: 'Une mesure bien nommée = temps gagné partout.',
    pitfalls: ['Colonnes calculées à la place des mesures', 'DIVIDE oublié'],
    summary: ['Mesures réutilisables', 'Noms explicites', 'Zéro division protégée'],
    quiz: {
      question: 'Quelle fonction protège un ratio contre la division par zéro ?',
      options: ['SUMX', 'DIVIDE', 'FILTER'],
      answer: 1,
      explain: 'DIVIDE gère proprement les cas où le dénominateur vaut zéro.'
    }
  },
  {
    id: 'l8',
    theme: 'DAX',
    title: 'L8 — CALCULATE et contexte de filtre',
    objective: 'Comprendre pourquoi un KPI change selon les filtres.',
    example: 'CA France vs CA total.',
    visual: {
      type: 'Contexte',
      before: '[CA] global',
      after: '[CA France] = CALCULATE([CA], Country="France")'
    },
    steps: ['Mesure base', 'Mesure filtrée', 'Mesure de pourcentage'],
    exercise: 'Créer [% France] et vérifier par segment.',
    solution: '[% France] = DIVIDE([CA France],[CA]).',
    simple: 'CALCULATE dit “dans quel filtre on calcule”.',
    pitfalls: ['Filtre mal appliqué', 'Contexte non compris'],
    summary: ['Partir d’une base solide', 'Modifier contexte explicitement', 'Tester slicers'],
    quiz: {
      question: 'CALCULATE sert principalement à :',
      options: ['Créer des relations', 'Changer le contexte de filtre', 'Importer des CSV'],
      answer: 1,
      explain: 'CALCULATE évalue une mesure dans un contexte de filtre modifié.'
    }
  },
  {
    id: 'l9',
    theme: 'DAX',
    title: 'L9 — Time intelligence N vs N-1',
    objective: 'Comparer la performance dans le temps.',
    example: 'Variation de CA annuel.',
    visual: {
      type: 'Comparatif',
      before: 'CA N sans référence',
      after: 'CA N + CA N-1 + % évolution'
    },
    steps: ['Créer [CA N-1]', 'Créer [% Evolution]', 'Valider sur période complète'],
    exercise: 'Affiche un graphique annuel avec évolution.',
    solution: 'SAMEPERIODLASTYEAR + DIVIDE.',
    simple: 'Toujours comparer à une base temporelle.',
    pitfalls: ['Table date absente', 'Périodes incomplètes'],
    summary: ['Base calendrier', 'Mesures séparées', 'Vérification croisée'],
    quiz: {
      question: 'Quelle fonction DAX est classique pour comparer N à N-1 ?',
      options: ['SAMEPERIODLASTYEAR', 'ALLEXCEPT', 'TOPN'],
      answer: 0,
      explain: 'SAMEPERIODLASTYEAR retourne la période équivalente de l’année précédente.'
    }
  },
  {
    id: 'l10',
    theme: 'Visualisation',
    title: 'L10 — Design d’un dashboard lisible',
    objective: 'Créer une page claire orientée décision.',
    example: 'Page ventes pour direction commerciale.',
    visual: {
      type: 'Avant / Après visuel',
      before: '12 visuels, couleurs saturées, titres vagues',
      after: '5 visuels clés, hiérarchie claire, message métier explicite'
    },
    steps: ['Définir une question business', 'Limiter visuels', 'Appliquer grille cohérente'],
    exercise: 'Refondre une page surchargée en page claire.',
    solution: 'Storyboard simple + KPI prioritaires.',
    simple: 'Un dashboard doit répondre vite à une question.',
    pitfalls: ['Trop de couleurs', 'Trop de graphiques', 'Pas de message'],
    summary: ['Moins mais mieux', 'Un visuel = un message', 'Contraste maîtrisé'],
    quiz: {
      question: 'Objectif principal d’un dashboard métier :',
      options: ['Montrer tous les graphiques possibles', 'Aider la décision', 'Utiliser un maximum de couleurs'],
      answer: 1,
      explain: 'Un dashboard doit orienter l’action, pas juste afficher des graphiques.'
    }
  },
  {
    id: 'l11',
    theme: 'Visualisation',
    title: 'L11 — Slicers, drill-down, navigation',
    objective: 'Rendre le rapport réellement interactif.',
    example: 'Analyse par région > pays > ville.',
    visual: {
      type: 'Parcours utilisateur',
      before: 'Rapport statique',
      after: 'Filtres + drill-down + boutons de navigation'
    },
    steps: ['Configurer slicers', 'Activer drill-down', 'Créer boutons de navigation'],
    exercise: 'Créer une navigation page Résumé -> Détail Produit.',
    solution: 'Signets + boutons + hiérarchie sur axe.',
    simple: 'L’interaction doit rester simple et guidée.',
    pitfalls: ['Trop de slicers', 'Navigation confuse'],
    summary: ['Interactivité utile', 'Parcours guidé', 'Slicers limités'],
    quiz: {
      question: 'Le drill-down permet de :',
      options: ['Descendre dans le détail', 'Créer une nouvelle source', 'Changer le thème clair/sombre'],
      answer: 0,
      explain: 'Le drill-down passe d’un niveau agrégé à un niveau plus détaillé.'
    }
  },
  {
    id: 'l12',
    theme: 'Projet',
    title: 'L12 — Cas métier complet NovaRetail',
    objective: 'Assembler Power Query + Modèle + DAX + Dashboard + restitution.',
    example: 'Comité de direction mensuel.',
    visual: {
      type: 'Flux de bout en bout',
      before: 'Données brutes hétérogènes',
      after: 'Pipeline propre + dashboard + recommandations'
    },
    steps: ['Ingestion', 'Nettoyage', 'Modélisation', 'Mesures', 'Storytelling'],
    exercise: 'Livrer 5 insights actionnables + plan d’action.',
    solution: 'Pack final avec rapport, dictionnaire, recommandations.',
    simple: 'Tu racontes une histoire basée sur des chiffres fiables.',
    pitfalls: ['Sauter la modélisation', 'Pas de validation métier'],
    summary: ['Qualité des données', 'Lisibilité des KPI', 'Conclusion orientée action'],
    quiz: {
      question: 'La dernière étape d’un cas métier complet est :',
      options: ['Ajouter des couleurs', 'Recommander une action métier claire', 'Dupliquer la page'],
      answer: 1,
      explain: 'La valeur finale est la recommandation concrète basée sur l’analyse.'
    }
  }
];

const phase2Lessons = [
  {
    id: 'l13',
    theme: 'Power Query',
    level: 'Intermédiaire',
    title: 'L13 — Group By avancé avec indicateurs qualité',
    objective: 'Agréger les données et contrôler les écarts.',
    example: 'Suivi hebdomadaire des ventes par région.',
    visual: { type: 'Avant / Après', before: 'Lignes transactionnelles', after: 'Table agrégée avec KPI qualité' },
    steps: ['Group by région', 'Créer CA moyen', 'Ajouter colonne contrôle'],
    exercise: 'Construis un résumé hebdo avec anomalie >15%.',
    solution: 'Agréger + colonne conditionnelle de contrôle.',
    simple: 'Tu réduis les lignes pour mieux piloter.',
    pitfalls: ['Agrégation sur mauvaise clé'],
    summary: ['Agréger utile', 'Contrôle qualité', 'Règles claires'],
    quiz: { question: 'Group By sert à :', options: ['Agréger', 'Joindre', 'Filtrer date'], answer: 0, explain: 'Group By consolide les données.' }
  },
  {
    id: 'l14',
    theme: 'Power Query',
    level: 'Avancé',
    title: 'L14 — Paramètres et requêtes de référence',
    objective: 'Rendre les flux de transformation réutilisables.',
    example: 'Changer le dossier source sans réécrire le flux.',
    visual: { type: 'Paramétrage', before: 'Chemins codés en dur', after: 'Paramètre SourceFolder' },
    steps: ['Créer paramètre', 'Utiliser requête référence', 'Tester changement'],
    exercise: 'Paramètre le dossier et teste 2 environnements.',
    solution: 'Un paramètre + 2 requêtes de référence.',
    simple: 'Tu fais un flux flexible et maintenable.',
    pitfalls: ['Paramètre non appliqué partout'],
    summary: ['Réutilisable', 'Flexible', 'Propre'],
    quiz: { question: 'Un paramètre Power Query permet :', options: ['Changer facilement une valeur clé', 'Créer un visuel', 'Activer drill-down'], answer: 0, explain: 'Paramètre = valeur configurable.' }
  },
  {
    id: 'l15',
    theme: 'Modélisation',
    level: 'Intermédiaire',
    title: 'L15 — Cardinalités et sens de filtre',
    objective: 'Diagnostiquer les erreurs de relation.',
    example: 'Total incohérent à cause d’un filtre bidirectionnel.',
    visual: { type: 'Schéma', before: 'Relations ambiguës', after: 'Relations 1-* avec filtre simple' },
    steps: ['Identifier table fait', 'Corriger cardinalité', 'Tester total'],
    exercise: 'Corrige un modèle qui double le CA.',
    solution: 'Filtre simple + clé unique côté dimension.',
    simple: 'Un mauvais lien peut casser tout le rapport.',
    pitfalls: ['Bidirectionnel inutile'],
    summary: ['Cardinalité correcte', 'Filtre contrôlé', 'Totaux fiables'],
    quiz: { question: 'Le sens de filtre recommandé par défaut est :', options: ['Simple', 'Double', 'Aucun'], answer: 0, explain: 'Simple évite ambiguïtés et lenteurs.' }
  },
  {
    id: 'l16',
    theme: 'DAX',
    level: 'Intermédiaire',
    title: 'L16 — Variables et lisibilité des mesures',
    objective: 'Structurer une mesure DAX pro.',
    example: 'Marge % avec logique intermédiaire.',
    visual: { type: 'Code', before: 'Formule longue illisible', after: 'VAR Revenue / VAR Cost / RETURN' },
    steps: ['Découper en VAR', 'Nommer explicitement', 'Tester'],
    exercise: 'Réécris une mesure complexe avec VAR.',
    solution: 'Variables intermédiaires puis RETURN final.',
    simple: 'Les VAR te font gagner du temps.',
    pitfalls: ['Noms vagues'],
    summary: ['Lisible', 'Maintenable', 'Fiable'],
    quiz: { question: 'VAR en DAX sert surtout à :', options: ['Rendre la mesure plus lisible', 'Importer des données', 'Créer relation'], answer: 0, explain: 'VAR clarifie et simplifie le débogage.' }
  },
  {
    id: 'l17',
    theme: 'DAX',
    level: 'Avancé',
    title: 'L17 — TOPN et segmentation client',
    objective: 'Isoler les segments à forte valeur.',
    example: 'Top 10 clients et part du CA.',
    visual: { type: 'Segmentation', before: 'Liste complète clients', after: 'Top N avec part relative' },
    steps: ['Créer mesure CA', 'Créer table virtuelle TOPN', 'Comparer total'],
    exercise: 'Construis un indicateur part du Top 10.',
    solution: 'TOPN + CALCULATE + DIVIDE.',
    simple: 'Tu identifies vite les clients qui pèsent le plus.',
    pitfalls: ['Contexte de filtre oublié'],
    summary: ['Prioriser', 'Analyser', 'Décider'],
    quiz: { question: 'TOPN permet de :', options: ['Garder les N meilleurs éléments', 'Créer des dates', 'Nettoyer nulls'], answer: 0, explain: 'TOPN retourne les N premières lignes selon un tri.' }
  },
  {
    id: 'l18',
    theme: 'Visualisation',
    level: 'Intermédiaire',
    title: 'L18 — Tooltips et drill-through',
    objective: 'Créer une navigation d’analyse efficace.',
    example: 'Passer d’une vue région à détail produit.',
    visual: { type: 'Navigation', before: 'Vue figée', after: 'Tooltip + page drill-through' },
    steps: ['Créer page détail', 'Activer drill-through', 'Ajouter tooltip'],
    exercise: 'Active le drill-through sur la région.',
    solution: 'Champ région en drill-through + tooltip dédié.',
    simple: 'Tu passes du résumé au détail en un clic.',
    pitfalls: ['Page détail surchargée'],
    summary: ['Navigation claire', 'Détail utile', 'Rapide'],
    quiz: { question: 'Le drill-through sert à :', options: ['Aller vers une page de détail filtrée', 'Exporter CSV', 'Changer thème'], answer: 0, explain: 'Drill-through transmet le contexte du point cliqué.' }
  }
];

lessons.push(...phase2Lessons);

const phase2AdvancedLessons = [
  {
    id: 'l19',
    theme: 'Power Query',
    level: 'Avancé',
    title: 'L19 — Fonctions M personnalisées',
    objective: 'Créer une fonction M réutilisable sur plusieurs requêtes.',
    example: 'Normaliser des codes pays venant de 5 fichiers.',
    visual: { type: 'Code M', before: 'Étapes répétées', after: 'Fonction fnNormalizeCountry()' },
    steps: ['Créer requête fonction', 'Passer paramètre', 'Appliquer sur table'],
    exercise: 'Factorise une logique de nettoyage texte en fonction.',
    solution: 'Fonction M + invocation sur colonne.',
    simple: 'Une fonction évite de recopier les mêmes étapes.',
    pitfalls: ['Paramètres mal typés'],
    summary: ['Réutilisation', 'Moins d’erreurs', 'Maintenance'],
    quiz: { question: 'Une fonction M sert surtout à :', options: ['Réutiliser une logique', 'Créer un visuel', 'Générer un thème'], answer: 0, explain: 'Elle encapsule des transformations répétées.' }
  },
  {
    id: 'l20',
    theme: 'Modélisation',
    level: 'Avancé',
    title: 'L20 — Table pont many-to-many',
    objective: 'Résoudre proprement un many-to-many métier.',
    example: 'Produits multi-catégories et ventes.',
    visual: { type: 'Modèle', before: 'Relation ambigüe', after: 'Bridge table explicite' },
    steps: ['Créer table pont', 'Relier dimensions', 'Tester mesure'],
    exercise: 'Corrige un M2M qui gonfle les totaux.',
    solution: 'Bridge + sens de filtre contrôlé.',
    simple: 'La table pont clarifie qui relie qui.',
    pitfalls: ['Relations directes ambiguës'],
    summary: ['M2M maîtrisé', 'Totaux fiables', 'Modèle propre'],
    quiz: { question: 'Pour gérer un many-to-many proprement, on ajoute :', options: ['Table pont', 'Colonne aléatoire', 'Nouveau thème'], answer: 0, explain: 'La bridge table résout l’ambiguïté de filtre.' }
  },
  {
    id: 'l21',
    theme: 'DAX',
    level: 'Avancé',
    title: 'L21 — SUMX et itérateurs',
    objective: 'Comprendre les calculs ligne par ligne puis agrégation.',
    example: 'Calcul de marge pondérée.',
    visual: { type: 'Itération', before: 'SUM simple', after: 'SUMX(Table, expression)' },
    steps: ['Définir expression ligne', 'Appliquer SUMX', 'Comparer résultat'],
    exercise: 'Calcule une marge pondérée avec SUMX.',
    solution: 'SUMX(FactSales, FactSales[Qty]*FactSales[MarginUnit]).',
    simple: 'SUMX calcule chaque ligne puis additionne.',
    pitfalls: ['Confondre SUM et SUMX'],
    summary: ['Itérateurs utiles', 'Contexte ligne', 'KPI précis'],
    quiz: { question: 'SUMX effectue :', options: ['Itération ligne par ligne', 'Filtrage visuel', 'Tri automatique'], answer: 0, explain: 'SUMX évalue une expression pour chaque ligne.' }
  },
  {
    id: 'l22',
    theme: 'DAX',
    level: 'Avancé',
    title: 'L22 — ALL / REMOVEFILTERS',
    objective: 'Construire des ratios robustes au contexte.',
    example: 'Part CA produit vs total.',
    visual: { type: 'Contexte', before: 'Ratio instable', after: 'Denominator avec ALL/REMOVEFILTERS' },
    steps: ['Mesure de base', 'Mesure total sans filtre', 'Ratio final'],
    exercise: 'Crée [% Part Produit] stable avec slicers.',
    solution: 'DIVIDE([CA], CALCULATE([CA], REMOVEFILTERS(DimProduct))).',
    simple: 'Tu enlèves un filtre pour créer une référence stable.',
    pitfalls: ['Retirer trop de filtres'],
    summary: ['Ratios fiables', 'Contexte contrôlé', 'Lecture claire'],
    quiz: { question: 'REMOVEFILTERS sert à :', options: ['Retirer des filtres dans le calcul', 'Supprimer une table', 'Changer la langue'], answer: 0, explain: 'Il modifie le contexte de calcul DAX.' }
  },
  {
    id: 'l23',
    theme: 'Visualisation',
    level: 'Avancé',
    title: 'L23 — KPI avancés et alerts',
    objective: 'Construire des indicateurs d’alerte lisibles.',
    example: 'Alerte marge < objectif.',
    visual: { type: 'Signal', before: 'KPI statique', after: 'KPI + couleur + icône d’alerte' },
    steps: ['Mesure variance', 'Seuil d’alerte', 'Mise en forme conditionnelle'],
    exercise: 'Ajoute un code couleur sur KPI marge.',
    solution: 'Mesure statut + conditional formatting.',
    simple: 'Un KPI doit dire si ça va bien ou non.',
    pitfalls: ['Seuils non partagés avec métier'],
    summary: ['KPI actionnable', 'Seuil clair', 'Décision rapide'],
    quiz: { question: 'Un KPI alerting efficace doit :', options: ['Avoir un seuil explicite', 'Être très décoratif', 'Ignorer les objectifs'], answer: 0, explain: 'Le seuil rend le KPI décisionnel.' }
  },
  {
    id: 'l24',
    theme: 'Visualisation',
    level: 'Intermédiaire',
    title: 'L24 — Storytelling multi-pages',
    objective: 'Créer un parcours de lecture logique.',
    example: 'Résumé direction → détail région → détail produit.',
    visual: { type: 'Flow', before: 'Pages isolées', after: 'Parcours narratif clair' },
    steps: ['Définir message', 'Ordre des pages', 'Navigation guidée'],
    exercise: 'Organise 3 pages avec fil narratif.',
    solution: 'Page 1 KPI, page 2 causes, page 3 actions.',
    simple: 'Tu racontes une histoire de décision.',
    pitfalls: ['Pages sans lien logique'],
    summary: ['Narratif', 'Navigation', 'Impact'],
    quiz: { question: 'Le storytelling multi-pages aide à :', options: ['Guider la décision', 'Ajouter des bugs', 'Augmenter les clics inutiles'], answer: 0, explain: 'Il structure la compréhension du décideur.' }
  },
  {
    id: 'l25',
    theme: 'Projet',
    level: 'Intermédiaire',
    title: 'L25 — Projet RH guidé',
    objective: 'Construire un dashboard RH opérationnel.',
    example: 'Effectif, turnover, absentéisme.',
    visual: { type: 'Projet', before: 'Fichiers RH bruts', after: 'Dashboard RH prêt comité' },
    steps: ['Nettoyer RH', 'Modèle RH', 'Mesures RH', 'Visuels RH'],
    exercise: 'Livrer 3 recommandations RH basées données.',
    solution: 'Rapport RH + actions de rétention.',
    simple: 'Tu relies les chiffres RH aux décisions manager.',
    pitfalls: ['Indicateurs sans contexte temporel'],
    summary: ['Projet bout-en-bout', 'RH orienté action', 'Restitution claire'],
    quiz: { question: 'Un bon dashboard RH doit inclure :', options: ['Turnover + absentéisme', 'Seulement des couleurs', 'Aucune dimension temps'], answer: 0, explain: 'Ces KPI sont centraux pour le pilotage RH.' }
  },
  {
    id: 'l26',
    theme: 'Projet',
    level: 'Avancé',
    title: 'L26 — Projet budget guidé',
    objective: 'Comparer budget vs réalisé et expliquer les écarts.',
    example: 'Centres de coûts mensuels.',
    visual: { type: 'Analyse variance', before: 'Table budget brute', after: 'Dashboard variance et causes' },
    steps: ['Préparer budget', 'Relier réalisé', 'Mesures d’écart', 'Storytelling'],
    exercise: 'Présente top 5 écarts et actions.',
    solution: 'Variance absolue/relative + plan d’action.',
    simple: 'Tu montres où on dépasse et pourquoi.',
    pitfalls: ['Périodes non alignées'],
    summary: ['Variance fiable', 'Priorisation', 'Actions'],
    quiz: { question: 'Le KPI clé du projet budget est :', options: ['Écart budget-réalisé', 'Nombre de pages', 'Couleur du thème'], answer: 0, explain: 'L’écart est la base du pilotage budgétaire.' }
  }
];

lessons.push(...phase2AdvancedLessons);

const phase2FinalLessons = [
  {
    id: 'l27',
    theme: 'Power Query',
    level: 'Avancé',
    title: 'L27 — Performance Power Query (query folding)',
    objective: 'Identifier les étapes qui cassent le query folding.',
    example: 'Source SQL + transformations dans Power Query.',
    visual: { type: 'Performance', before: 'Rafraîchissement lent', after: 'Étapes foldables prioritaires' },
    steps: ['Vérifier folding', 'Déplacer transformations', 'Mesurer temps'],
    exercise: 'Optimise un flux de 5 min vers <2 min.',
    solution: 'Conserver filtres/colonnes tôt + éviter étapes non foldables trop tôt.',
    simple: 'Les bonnes étapes au bon endroit accélèrent tout.',
    pitfalls: ['Appliquer des opérations coûteuses trop tôt'],
    summary: ['Folding', 'Ordre des étapes', 'Temps réduit'],
    quiz: { question: 'Le query folding permet surtout de :', options: ['Pousser le traitement côté source', 'Changer le thème', 'Créer des visuels'], answer: 0, explain: 'Le moteur délègue une partie du calcul à la source.' }
  },
  {
    id: 'l28',
    theme: 'Modélisation',
    level: 'Avancé',
    title: 'L28 — RLS (Row-Level Security) simplifiée',
    objective: 'Limiter l’accès aux données par profil.',
    example: 'Chaque manager voit uniquement sa région.',
    visual: { type: 'Sécurité', before: 'Tout le monde voit tout', after: 'Règles RLS par rôle' },
    steps: ['Créer rôle', 'Écrire filtre', 'Tester en mode role'],
    exercise: 'Crée une RLS par région.',
    solution: 'Filtre DimRegion[Region] avec rôle dédié.',
    simple: 'RLS = chacun voit seulement ses données.',
    pitfalls: ['RLS non testée avant publication'],
    summary: ['Sécurité', 'Rôles', 'Validation'],
    quiz: { question: 'La RLS sert à :', options: ['Restreindre les lignes visibles', 'Accélérer DAX', 'Importer CSV'], answer: 0, explain: 'RLS filtre les données selon l’utilisateur.' }
  },
  {
    id: 'l29',
    theme: 'DAX',
    level: 'Avancé',
    title: 'L29 — YTD, MTD, QTD',
    objective: 'Construire les KPI cumulés standards.',
    example: 'Suivi CA cumulé depuis début d’année.',
    visual: { type: 'Time intelligence', before: 'Valeur mensuelle seule', after: 'YTD/MTD/QTD comparables' },
    steps: ['Mesure base', 'TOTALYTD', 'Comparaison N-1'],
    exercise: 'Affiche YTD et variation vs YTD N-1.',
    solution: 'TOTALYTD + SAMEPERIODLASTYEAR.',
    simple: 'YTD additionne depuis le début de l’année.',
    pitfalls: ['Table date incomplète'],
    summary: ['YTD', 'Comparaison', 'Pilotage'],
    quiz: { question: 'YTD signifie :', options: ['Year-To-Date', 'Yesterday Trend Data', 'Yearly Table Dimension'], answer: 0, explain: 'YTD calcule le cumul depuis le début d’année.' }
  },
  {
    id: 'l30',
    theme: 'DAX',
    level: 'Avancé',
    title: 'L30 — Ranking dynamique',
    objective: 'Classer les entités selon le contexte.',
    example: 'Classement des commerciaux par CA filtré.',
    visual: { type: 'Classement', before: 'Liste non ordonnée', after: 'Rank dynamique par slicer' },
    steps: ['Mesure CA', 'RANKX', 'Tester filtres'],
    exercise: 'Affiche top 5 commerciaux dynamiques.',
    solution: 'RANKX + filtre de rang <= 5.',
    simple: 'Le classement doit s’adapter aux filtres.',
    pitfalls: ['Classement figé sans contexte'],
    summary: ['RANKX', 'Dynamique', 'Top N'],
    quiz: { question: 'Fonction DAX de ranking :', options: ['RANKX', 'SWITCH', 'VALUES'], answer: 0, explain: 'RANKX calcule le rang dans un ensemble.' }
  },
  {
    id: 'l31',
    theme: 'Visualisation',
    level: 'Avancé',
    title: 'L31 — UX reporting pro',
    objective: 'Améliorer lisibilité, navigation et adoption.',
    example: 'Refonte d’un rapport utilisé en comité hebdo.',
    visual: { type: 'UX', before: 'Parcours confus', after: 'Navigation claire, pages structurées' },
    steps: ['Prioriser KPIs', 'Uniformiser design', 'Tester utilisateur'],
    exercise: 'Réorganise un rapport en 3 pages max.',
    solution: 'Résumé, diagnostic, action.',
    simple: 'Un rapport pro est simple à lire en 30 secondes.',
    pitfalls: ['Surcharge visuelle'],
    summary: ['Clarté', 'Cohérence', 'Adoption'],
    quiz: { question: 'Un bon UX reporting favorise :', options: ['Compréhension rapide', 'Complexité maximale', 'Couleurs aléatoires'], answer: 0, explain: 'L’objectif est une lecture rapide et fiable.' }
  },
  {
    id: 'l32',
    theme: 'Projet',
    level: 'Avancé',
    title: 'L32 — Projet marketing complet',
    objective: 'Analyser ROI campagnes et recommandations budget.',
    example: 'Campagnes multi-canaux (SEA, social, email).',
    visual: { type: 'Projet complet', before: 'Données brutes par canal', after: 'Dashboard ROI + plan d’action' },
    steps: ['Nettoyer sources', 'Modéliser canaux', 'Mesures ROI/CAC', 'Restituer'],
    exercise: 'Propose 3 arbitrages budgétaires justifiés.',
    solution: 'Réallocation vers canaux ROI élevés.',
    simple: 'Tu relies dépenses marketing et résultats business.',
    pitfalls: ['Attribuer les conversions sans règle claire'],
    summary: ['ROI', 'Arbitrage', 'Action'],
    quiz: { question: 'Le KPI principal ici est :', options: ['ROI campagne', 'Nombre de visuels', 'Taille de police'], answer: 0, explain: 'Le ROI guide les arbitrages marketing.' }
  }
];

lessons.push(...phase2FinalLessons);

const phase3DomainLessons = [
  {
    id: 'l33',
    theme: 'Paie',
    level: 'Avancé',
    title: 'L33 — Contrôles paie et anomalies',
    objective: 'Détecter automatiquement les écarts de paie anormaux.',
    example: 'Variation brut > 20% sans motif déclaré.',
    visual: { type: 'Contrôle', before: 'Bulletins non contrôlés', after: 'Table anomalies priorisées' },
    steps: ['Importer bulletins', 'Créer règles de contrôle', 'Prioriser anomalies'],
    exercise: 'Construis un tableau anomalies paie mensuelles.',
    solution: 'Règles d’écart + statut de validation.',
    simple: 'Tu identifies vite les bulletins à vérifier.',
    pitfalls: ['Règles trop larges'],
    summary: ['Fiabilité paie', 'Contrôle automatique', 'Gain de temps'],
    quiz: { question: 'Un contrôle paie utile est :', options: ['Écart > seuil', 'Changer les couleurs', 'Renommer un onglet'], answer: 0, explain: 'Le contrôle d’écart détecte les anomalies rapidement.' }
  },
  {
    id: 'l34',
    theme: 'Paie',
    level: 'Avancé',
    title: 'L34 — Masse salariale et simulation',
    objective: 'Simuler l’impact d’une hausse salariale.',
    example: 'Simulation +2% sur une population ciblée.',
    visual: { type: 'Simulation', before: 'Vision statique', after: 'Impact coût mensuel/annuel' },
    steps: ['Créer base masse salariale', 'Appliquer scénario', 'Comparer résultats'],
    exercise: 'Simule 2 scénarios d’augmentation.',
    solution: 'Mesures DAX scénario A/B.',
    simple: 'Tu testes des hypothèses avant décision.',
    pitfalls: ['Population mal filtrée'],
    summary: ['Scénarios', 'Impact budgétaire', 'Décision'],
    quiz: { question: 'La simulation paie sert à :', options: ['Mesurer impact financier', 'Créer des thèmes', 'Supprimer des lignes'], answer: 0, explain: 'Elle aide à anticiper les coûts salariaux.' }
  },
  {
    id: 'l35',
    theme: 'RH',
    level: 'Avancé',
    title: 'L35 — Turnover et causes RH',
    objective: 'Mesurer et expliquer les départs.',
    example: 'Turnover élevé sur une BU.',
    visual: { type: 'Analyse RH', before: 'Taux brut seul', after: 'Taux + causes + plan d’action' },
    steps: ['Calculer turnover', 'Segmenter par BU', 'Identifier facteurs'],
    exercise: 'Produis une synthèse turnover trimestrielle.',
    solution: 'KPI turnover + segmentation + recommandations.',
    simple: 'Tu passes du chiffre à l’action RH.',
    pitfalls: ['Pas de segmentation'],
    summary: ['Comprendre', 'Segmenter', 'Agir'],
    quiz: { question: 'Pour analyser le turnover, il faut surtout :', options: ['Segmenter les populations', 'Regarder une moyenne globale seule', 'Masquer les départs'], answer: 0, explain: 'La segmentation révèle les vrais leviers RH.' }
  },
  {
    id: 'l36',
    theme: 'Finance',
    level: 'Avancé',
    title: 'L36 — Clôture mensuelle et écarts',
    objective: 'Comparer réalisé vs budget par centre de coût.',
    example: 'Écarts significatifs sur charges externes.',
    visual: { type: 'Clôture', before: 'Table brute de clôture', after: 'Vue écarts priorisés' },
    steps: ['Préparer budget/réalisé', 'Calculer écarts', 'Classer priorités'],
    exercise: 'Sors un top 10 écarts à commenter.',
    solution: 'Variance absolue + variance % + ranking.',
    simple: 'Tu sais où concentrer l’analyse financière.',
    pitfalls: ['Périodes non alignées'],
    summary: ['Variance', 'Priorisation', 'Commentaire'],
    quiz: { question: 'En clôture, le KPI clé est :', options: ['Écart budget-réalisé', 'Nombre de visuels', 'Thème sombre'], answer: 0, explain: 'L’écart est central pour le pilotage financier.' }
  }
];

lessons.push(...phase3DomainLessons);

lessons.forEach((lesson, idx) => {
  if (!lesson.level) {
    if (idx < 6) lesson.level = 'Débutant';
    else if (idx < 13) lesson.level = 'Intermédiaire';
    else lesson.level = 'Avancé';
  }
});

const planStatus = [
  { phase: 'Phase 1 — MVP', done: '100%', note: 'Phase 1 terminée et stabilisée.' },
  { phase: 'Phase 2 — Version solide', done: '100%', note: 'Phase 2 finalisée : 32 leçons, lab étendu, datasets, simulateurs, badges, filtres niveau/thème, fiches mémo et projets métiers.' },
  { phase: 'Phase 3 — Avancé / premium', done: '45%', note: 'Spécialisation Paie/RH/Finance + évaluations + révisions intelligentes + suivi performance + section nouveautés.' }
];

const datasets = [
  { id: 'sales', name: 'Dataset ventes multi-pays', level: 'Facile', format: 'CSV', rows: 2500 },
  { id: 'hr', name: 'Dataset RH (effectifs / turnover)', level: 'Moyen', format: 'CSV', rows: 1200 },
  { id: 'stock', name: 'Dataset stock & ruptures', level: 'Difficile', format: 'CSV', rows: 3100 },
  { id: 'marketing', name: 'Dataset marketing (campagnes)', level: 'Moyen', format: 'CSV', rows: 2800 },
  { id: 'finance', name: 'Dataset finance (budget vs réel)', level: 'Difficile', format: 'CSV', rows: 3400 }
];

const projects = [
  { id: 'p-sales', title: 'Projet ventes', goal: 'Piloter CA, marge et objectifs commerciaux.' },
  { id: 'p-rh', title: 'Projet RH', goal: 'Suivre effectif, absentéisme et turnover.' },
  { id: 'p-budget', title: 'Projet budget', goal: 'Comparer réalisé vs budget par centre de coût.' },
  { id: 'p-stock', title: 'Projet stock', goal: 'Identifier ruptures et surstocks par famille.' }
];

const badges = [
  { id: 'starter', label: '🚀 Starter', rule: (ctx) => ctx.percent >= 15, hint: 'Atteindre 15% du parcours' },
  { id: 'pq', label: '🧹 Data Cleaner', rule: (ctx) => ctx.byTheme['Power Query'] >= 4, hint: 'Terminer 4 leçons Power Query' },
  { id: 'model', label: '🧩 Model Builder', rule: (ctx) => ctx.byTheme['Modélisation'] >= 2, hint: 'Terminer 2 leçons Modélisation' },
  { id: 'dax', label: '📈 DAX Analyst', rule: (ctx) => ctx.byTheme.DAX >= 3, hint: 'Terminer 3 leçons DAX' },
  { id: 'project', label: '🏁 Delivery', rule: (ctx) => ctx.projectsDone >= 2, hint: 'Terminer au moins 2 projets métiers' }
];

const cheatsheets = [
  {
    id: 'cs-pq',
    title: 'Power Query — 20 transformations clés',
    lines: [
      '1) Promouvoir en-têtes',
      '2) Typage explicite',
      '3) Supprimer doublons',
      '4) Remplacer valeurs',
      '5) Merge / Append',
      '6) Pivot / Unpivot'
    ]
  },
  {
    id: 'cs-dax',
    title: 'DAX — 25 fonctions indispensables',
    lines: [
      'SUM, COUNT, DISTINCTCOUNT',
      'DIVIDE, IF, SWITCH',
      'CALCULATE, FILTER',
      'ALL, REMOVEFILTERS',
      'SAMEPERIODLASTYEAR'
    ]
  },
  {
    id: 'cs-model',
    title: 'Checklist modèle Power BI',
    lines: [
      'Schéma en étoile',
      'Dimensions dédupliquées',
      'Relations 1-*',
      'Table calendrier marquée',
      'Mesures dans table dédiée'
    ]
  }
];

const phase3Cases = [
  { title: 'Cas Paie complet', scope: 'Contrôles paie, simulation masse salariale, restitution direction.' },
  { title: 'Cas RH complet', scope: 'Turnover, absentéisme, actions de rétention et prévention.' },
  { title: 'Cas Finance complet', scope: 'Clôture, variance budget/réalisé, projection cash-flow.' }
];

const evalTracks = {
  paie: [
    { q: 'Quel KPI prioriser pour contrôler la paie ?', options: ['Écart brut vs N-1', 'Nombre de couleurs', 'Nb de pages'], a: 0 },
    { q: 'Une simulation paie sert à ?', options: ['Anticiper les coûts', 'Importer un thème', 'Changer le header'], a: 0 }
  ],
  rh: [
    { q: 'Pour expliquer le turnover, il faut surtout :', options: ['Segmenter les populations', 'Garder une moyenne globale', 'Retirer les filtres'], a: 0 },
    { q: 'Le suivi absentéisme efficace intègre :', options: ['Tendance temporelle', 'Valeur unique d’un mois', 'Aucun seuil'], a: 0 }
  ],
  finance: [
    { q: 'En pilotage financier, le KPI de base est :', options: ['Écart budget-réalisé', 'Nombre de slicers', 'Nombre de couleurs'], a: 0 },
    { q: 'Le cash-flow prévisionnel sert à :', options: ['Anticiper les tensions', 'Changer la charte graphique', 'Ajouter des emojis'], a: 0 }
  ]
};

const powerBiNews = [
  'Suivre les nouveautés Fabric et intégrations Power BI Service.',
  'Surveiller les évolutions DAX et fonctions d’optimisation.',
  'Vérifier les nouveautés gouvernance/sécurité (RLS, partage, workspace).'
];

const labData = [
  { year: 2023, revenue: 345000, target: 320000 },
  { year: 2024, revenue: 412000, target: 395000 },
  { year: 2025, revenue: 488000, target: 470000 }
];

const progressKey = 'pba-progress';
const themeKey = 'pba-theme';
const viewModeKey = 'pba-view-mode';

const modulesList = document.getElementById('modules-list');
const themeList = document.getElementById('theme-list');
const lessonFilter = document.getElementById('lesson-filter');
const levelFilter = document.getElementById('level-filter');
const lessonSearch = document.getElementById('lesson-search');
const lessonsList = document.getElementById('lessons-list');
const planStatusList = document.getElementById('plan-status-list');
const progressFill = document.getElementById('progress-fill');
const progressValue = document.getElementById('progress-value');
const yearFilter = document.getElementById('year-filter');
const labRows = document.getElementById('lab-rows');
const lessonsTitle = document.getElementById('lessons-title');
const datasetList = document.getElementById('dataset-list');
const projectsList = document.getElementById('projects-list');
const badgesList = document.getElementById('badges-list');
const themeProgress = document.getElementById('theme-progress');
const quizScoreValue = document.getElementById('quiz-score-value');
const challengeTimerEl = document.getElementById('challenge-timer');
const challengeFeedbackEl = document.getElementById('challenge-feedback');
const challengeAnswerEl = document.getElementById('challenge-answer');
const cheatsheetList = document.getElementById('cheatsheet-list');
const simpleModeBtn = document.getElementById('simple-mode');
const techModeBtn = document.getElementById('tech-mode');
const phase3CasesEl = document.getElementById('phase3-cases');
const evalTrackEl = document.getElementById('eval-track');
const evalStartEl = document.getElementById('eval-start');
const evalQuestionEl = document.getElementById('eval-question');
const evalOptionsEl = document.getElementById('eval-options');
const evalFeedbackEl = document.getElementById('eval-feedback');
const revisionListEl = document.getElementById('revision-list');
const performanceStatsEl = document.getElementById('performance-stats');
const powerBiNewsEl = document.getElementById('powerbi-news');

let challengeSeconds = 60;
let challengeInterval = null;
let currentEval = null;

function getThemes() {
  return [...new Set(lessons.map((lesson) => lesson.theme))];
}

function renderThemes() {
  const themes = getThemes();
  themeList.innerHTML = themes.map((theme) => `<span class="chip">${theme}</span>`).join('');
  lessonFilter.innerHTML += themes.map((theme) => `<option value="${theme}">${theme}</option>`).join('');
}

function renderPlanStatus() {
  planStatusList.innerHTML = planStatus
    .map(
      (item) => `
      <article class="card status-card">
        <h3>${item.phase}</h3>
        <p><strong>Avancement :</strong> ${item.done}</p>
        <p class="muted">${item.note}</p>
      </article>
    `
    )
    .join('');
}

function renderModules() {
  modulesList.innerHTML = modules
    .map(
      (mod) => `
      <article class="card module">
        <h3>${mod.title}</h3>
        <p>${mod.desc}</p>
        <label class="checkbox-line">
          <input type="checkbox" data-track="${mod.id}" />
          Bloc terminé
        </label>
      </article>
    `
    )
    .join('');
}

function getFilteredLessons() {
  const filter = lessonFilter.value;
  const level = levelFilter.value;
  const q = lessonSearch.value.trim().toLowerCase();
  return lessons.filter((lesson) => {
    const themeMatch = filter === 'all' || lesson.theme === filter;
    const levelMatch = level === 'all' || lesson.level === level;
    const text = `${lesson.title} ${lesson.objective} ${lesson.example}`.toLowerCase();
    const searchMatch = !q || text.includes(q);
    return themeMatch && levelMatch && searchMatch;
  });
}

function renderLessons() {
  const data = getFilteredLessons();
  const viewMode = localStorage.getItem(viewModeKey) || 'tech';
  simpleModeBtn.classList.toggle('is-active', viewMode === 'simple');
  techModeBtn.classList.toggle('is-active', viewMode === 'tech');

  lessonsList.innerHTML = data
    .map(
      (lesson) => `
      <details class="card lesson-card">
        <summary>
          <strong>${lesson.title}</strong>
          <span class="lesson-theme">${lesson.theme} • ${lesson.level}</span>
        </summary>
        <div class="lesson-content">
          <p><strong>Ce que tu vas savoir faire :</strong> ${lesson.objective}</p>
          <p><strong>Exemple métier :</strong> ${lesson.example}</p>

          ${
            viewMode === 'tech'
              ? `
          <div class="visual-block">
            <h4>Démo visuelle — ${lesson.visual.type}</h4>
            <div class="visual-grid">
              <div><span class="visual-label">Avant</span><p>${lesson.visual.before}</p></div>
              <div><span class="visual-label">Après</span><p>${lesson.visual.after}</p></div>
            </div>
          </div>

          <p><strong>Explication pas à pas :</strong></p>
          <ol>${lesson.steps.map((step) => `<li>${step}</li>`).join('')}</ol>

          <p><strong>Exercice interactif :</strong> ${lesson.exercise}</p>
          `
              : `<p><strong>Version simple :</strong> ${lesson.simple}</p>`
          }

          <div class="lesson-help-actions">
            <button class="btn btn-ghost" type="button" data-action="simple">Explique-moi simplement</button>
            <button class="btn btn-ghost" type="button" data-action="solution">Montre-moi la solution</button>
          </div>

          <div class="help-output" hidden>
            <p class="simple-text"><strong>Version simple :</strong> ${lesson.simple}</p>
            <p class="solution-text"><strong>Correction commentée :</strong> ${lesson.solution}</p>
          </div>

          <p><strong>Pièges fréquents :</strong></p>
          <ul>${lesson.pitfalls.map((pitfall) => `<li>${pitfall}</li>`).join('')}</ul>

          <p><strong>Résumé en 3 points :</strong></p>
          <ul>${lesson.summary.map((item) => `<li>${item}</li>`).join('')}</ul>

          <fieldset class="lesson-quiz">
            <legend><strong>Mini quiz :</strong> ${lesson.quiz.question}</legend>
            ${lesson.quiz.options
              .map(
                (option, idx) => `
              <label class="quiz-option">
                <input type="radio" name="quiz-${lesson.id}" value="${idx}" />
                <span>${option}</span>
              </label>
            `
              )
              .join('')}
            <button class="btn btn-ghost quiz-check" type="button" data-quiz-check="${lesson.id}">Valider ma réponse</button>
            <p class="quiz-feedback" id="quiz-feedback-${lesson.id}" aria-live="polite"></p>
          </fieldset>
          <label class="checkbox-line">
            <input type="checkbox" data-track="${lesson.id}" />
            Marquer la leçon comme terminée
          </label>
        </div>
      </details>
    `
    )
    .join('');

  bindLessonHelpActions();
  bindLessonQuizActions();
}

function bindLessonHelpActions() {
  document.querySelectorAll('.lesson-card').forEach((card) => {
    const simpleBtn = card.querySelector('[data-action="simple"]');
    const solutionBtn = card.querySelector('[data-action="solution"]');
    const output = card.querySelector('.help-output');
    const simpleText = card.querySelector('.simple-text');
    const solutionText = card.querySelector('.solution-text');

    simpleBtn?.addEventListener('click', () => {
      output.hidden = false;
      simpleText.hidden = false;
      solutionText.hidden = true;
    });

    solutionBtn?.addEventListener('click', () => {
      output.hidden = false;
      simpleText.hidden = true;
      solutionText.hidden = false;
    });
  });
}

function bindLessonQuizActions() {
  document.querySelectorAll('[data-quiz-check]').forEach((button) => {
    button.addEventListener('click', () => {
      const lessonId = button.dataset.quizCheck;
      const lesson = lessons.find((item) => item.id === lessonId);
      const selected = document.querySelector(`input[name="quiz-${lessonId}"]:checked`);
      const feedback = document.getElementById(`quiz-feedback-${lessonId}`);

      if (!selected) {
        feedback.textContent = 'Choisis une réponse avant de valider.';
        feedback.className = 'quiz-feedback warning';
        return;
      }

      const isCorrect = Number(selected.value) === lesson.quiz.answer;
      feedback.textContent = isCorrect
        ? `✅ Bonne réponse. ${lesson.quiz.explain}`
        : `❌ Pas encore. ${lesson.quiz.explain}`;
      feedback.className = `quiz-feedback ${isCorrect ? 'ok' : 'ko'}`;
      const quizState = JSON.parse(localStorage.getItem('pba-quiz-score') || '{}');
      quizState[lessonId] = isCorrect;
      localStorage.setItem('pba-quiz-score', JSON.stringify(quizState));
      const quizErrors = JSON.parse(localStorage.getItem('pba-quiz-errors') || '{}');
      if (!isCorrect) quizErrors[lessonId] = (quizErrors[lessonId] || 0) + 1;
      localStorage.setItem('pba-quiz-errors', JSON.stringify(quizErrors));
      renderQuizScore();
      renderRevisionList();
      renderPerformanceStats();
    });
  });
}

function renderQuizScore() {
  const quizState = JSON.parse(localStorage.getItem('pba-quiz-score') || '{}');
  const total = lessons.length;
  const good = lessons.filter((lesson) => quizState[lesson.id]).length;
  quizScoreValue.textContent = `${good} / ${total} bonnes réponses`;
}

function renderPhase3Cases() {
  phase3CasesEl.innerHTML = phase3Cases
    .map(
      (item) => `
      <article class="card">
        <h4>${item.title}</h4>
        <p>${item.scope}</p>
      </article>
    `
    )
    .join('');
}

function trackUserVisit() {
  const visitsRaw = localStorage.getItem('pba-visits');
  const visits = visitsRaw ? Number(visitsRaw) + 1 : 1;
  localStorage.setItem('pba-visits', String(visits));
  localStorage.setItem('pba-last-visit', new Date().toISOString());
}

function renderRevisionList() {
  const errors = JSON.parse(localStorage.getItem('pba-quiz-errors') || '{}');
  const prioritized = Object.entries(errors)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 5);

  if (!prioritized.length) {
    revisionListEl.innerHTML = '<li>Pas d’erreurs récurrentes pour le moment. Continue les évaluations 👏</li>';
    return;
  }

  revisionListEl.innerHTML = prioritized
    .map(([lessonId, count]) => {
      const lesson = lessons.find((item) => item.id === lessonId);
      return `<li><strong>${lesson?.title || lessonId}</strong> — ${count} erreur(s) : à réviser en priorité.</li>`;
    })
    .join('');
}

function renderPerformanceStats() {
  const visits = Number(localStorage.getItem('pba-visits') || 0);
  const lastVisit = localStorage.getItem('pba-last-visit');
  const progress = getProgress();
  const completedLessons = lessons.filter((lesson) => progress[lesson.id]).length;
  const completedProjects = projects.filter((project) => progress[project.id]).length;
  const errors = JSON.parse(localStorage.getItem('pba-quiz-errors') || '{}');
  const totalErrors = Object.values(errors).reduce((acc, count) => acc + Number(count), 0);

  performanceStatsEl.innerHTML = `
    <li><strong>Sessions ouvertes :</strong> ${visits}</li>
    <li><strong>Dernière session :</strong> ${lastVisit ? new Date(lastVisit).toLocaleString('fr-FR') : '—'}</li>
    <li><strong>Leçons terminées :</strong> ${completedLessons}/${lessons.length}</li>
    <li><strong>Projets terminés :</strong> ${completedProjects}/${projects.length}</li>
    <li><strong>Erreurs quiz cumulées :</strong> ${totalErrors}</li>
  `;
}

function renderPowerBiNews() {
  powerBiNewsEl.innerHTML = powerBiNews.map((item) => `<li>${item}</li>`).join('');
}

function renderEvalQuestion() {
  if (!currentEval) return;
  const { track, index } = currentEval;
  const item = evalTracks[track][index];
  evalQuestionEl.textContent = `Q${index + 1}/${evalTracks[track].length} — ${item.q}`;
  evalOptionsEl.innerHTML = item.options
    .map(
      (opt, idx) => `
      <label class="quiz-option">
        <input type="radio" name="eval-option" value="${idx}" />
        <span>${opt}</span>
      </label>
    `
    )
    .join('');
}

function initPhase3Evaluation() {
  evalStartEl.addEventListener('click', () => {
    currentEval = { track: evalTrackEl.value, index: 0, score: 0 };
    evalFeedbackEl.textContent = '';
    renderEvalQuestion();
  });

  evalOptionsEl.addEventListener('change', (event) => {
    if (!currentEval) return;
    const choice = Number(event.target.value);
    const item = evalTracks[currentEval.track][currentEval.index];
    if (choice === item.a) currentEval.score += 1;

    currentEval.index += 1;
    if (currentEval.index >= evalTracks[currentEval.track].length) {
      evalQuestionEl.textContent = `Évaluation terminée (${currentEval.track.toUpperCase()}).`;
      evalOptionsEl.innerHTML = '';
      evalFeedbackEl.textContent = `Score: ${currentEval.score}/${evalTracks[currentEval.track].length}`;
      currentEval = null;
      return;
    }
    renderEvalQuestion();
  });
}

function startChallenge() {
  challengeSeconds = 60;
  challengeTimerEl.textContent = `${challengeSeconds}s`;
  challengeFeedbackEl.textContent = '';
  challengeAnswerEl.value = '';
  clearInterval(challengeInterval);

  challengeInterval = setInterval(() => {
    challengeSeconds -= 1;
    challengeTimerEl.textContent = `${challengeSeconds}s`;
    if (challengeSeconds <= 0) {
      clearInterval(challengeInterval);
      challengeInterval = null;
      challengeFeedbackEl.textContent = '⏱️ Temps écoulé ! Réessaie pour améliorer ta vitesse.';
    }
  }, 1000);
}

function stopChallenge() {
  clearInterval(challengeInterval);
  challengeInterval = null;
  challengeFeedbackEl.textContent = `Défi arrêté avec ${challengeSeconds}s restantes.`;
}

function validateChallenge() {
  const answer = Number(challengeAnswerEl.value);
  const expected = Math.round((488000 / 470000) * 100);
  if (challengeInterval === null && challengeSeconds === 60) {
    challengeFeedbackEl.textContent = 'Clique d’abord sur “Démarrer le défi”.';
    return;
  }
  if (!answer) {
    challengeFeedbackEl.textContent = 'Entre une réponse numérique.';
    return;
  }

  const isCorrect = answer === expected;
  if (isCorrect) {
    const usedSeconds = 60 - challengeSeconds;
    const bestRaw = localStorage.getItem('pba-challenge-best');
    const best = bestRaw ? Number(bestRaw) : null;
    if (best === null || usedSeconds < best) {
      localStorage.setItem('pba-challenge-best', String(usedSeconds));
    }
    const bestNow = localStorage.getItem('pba-challenge-best');
    challengeFeedbackEl.textContent = `✅ Correct (${expected}%). Temps: ${usedSeconds}s. Meilleur temps: ${bestNow}s.`;
  } else {
    challengeFeedbackEl.textContent = `❌ Incorrect. La bonne réponse est ${expected}%.`;
  }
}

function getProgress() {
  const raw = localStorage.getItem(progressKey);
  return raw ? JSON.parse(raw) : {};
}

function saveProgress(progress) {
  localStorage.setItem(progressKey, JSON.stringify(progress));
}

function updateProgressUI() {
  const progress = getProgress();
  let completed = 0;
  const checkboxes = document.querySelectorAll('input[type="checkbox"][data-track]');
  const totalTrackItems = checkboxes.length;

  checkboxes.forEach((checkbox) => {
    const key = checkbox.dataset.track;
    checkbox.checked = Boolean(progress[key]);
    if (progress[key]) completed += 1;

    checkbox.onchange = (event) => {
      const next = getProgress();
      next[key] = event.target.checked;
      saveProgress(next);
      updateProgressUI();
    };
  });

  const percent = totalTrackItems ? Math.round((completed / totalTrackItems) * 100) : 0;
  progressFill.style.width = `${percent}%`;
  progressValue.textContent = `${percent}%`;
  renderThemeProgress(progress);
  renderBadges(progress, percent);
}

function renderThemeProgress(progress) {
  const themes = [...new Set(lessons.map((lesson) => lesson.theme))];
  const byTheme = Object.fromEntries(themes.map((theme) => [theme, 0]));
  const totals = Object.fromEntries(themes.map((theme) => [theme, lessons.filter((l) => l.theme === theme).length]));

  lessons.forEach((lesson) => {
    if (progress[lesson.id]) byTheme[lesson.theme] += 1;
  });

  themeProgress.innerHTML = themes
    .map((theme) => {
      const done = byTheme[theme];
      const total = totals[theme];
      const percent = total ? Math.round((done / total) * 100) : 0;
      return `
        <article class="card">
          <h4>${theme}</h4>
          <p class="muted">${done}/${total} leçons</p>
          <div class="progress-bar mini"><span style="width:${percent}%"></span></div>
        </article>
      `;
    })
    .join('');
}

function renderBadges(progress, percent) {
  const byTheme = lessons.reduce((acc, lesson) => {
    if (!acc[lesson.theme]) acc[lesson.theme] = 0;
    if (progress[lesson.id]) acc[lesson.theme] += 1;
    return acc;
  }, {});

  const projectsDone = projects.filter((project) => progress[project.id]).length;
  const context = { percent, byTheme, projectsDone };
  const earned = badges.filter((badge) => badge.rule(context));

  badgesList.innerHTML = badges
    .map((badge) => {
      const unlocked = earned.some((item) => item.id === badge.id);
      return `<span class="chip ${unlocked ? 'badge-ok' : 'badge-lock'}">${badge.label} ${unlocked ? '✓' : '•'}<small> ${badge.hint}</small></span>`;
    })
    .join('');
}

function renderLab() {
  const selected = yearFilter.value;
  const rows = selected === 'all' ? labData : labData.filter((row) => String(row.year) === selected);

  labRows.innerHTML = rows
    .map((row) => {
      const rate = Math.round((row.revenue / row.target) * 100);
      return `
        <tr>
          <td>${row.year}</td>
          <td>${row.revenue.toLocaleString('fr-FR')} €</td>
          <td>${row.target.toLocaleString('fr-FR')} €</td>
          <td>${rate}%</td>
        </tr>
      `;
    })
    .join('');
}

function csvFromRows(rows) {
  const headers = Object.keys(rows[0]);
  const lines = [headers.join(',')];
  rows.forEach((row) => {
    lines.push(headers.map((header) => row[header]).join(','));
  });
  return lines.join('\n');
}

function downloadCsv(content, filename) {
  const blob = new Blob([content], { type: 'text/csv;charset=utf-8;' });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.download = filename;
  link.click();
  URL.revokeObjectURL(url);
}

function renderDatasets() {
  datasetList.innerHTML = datasets
    .map(
      (dataset) => `
      <article class="card">
        <h4>${dataset.name}</h4>
        <p class="muted">Niveau: ${dataset.level} • Format: ${dataset.format} • Lignes: ~${dataset.rows}</p>
        <p>Défi guidé: nettoyer les types, créer les KPI de base et vérifier les écarts.</p>
        <button class="btn btn-ghost" type="button" data-dataset="${dataset.id}">Télécharger ${dataset.format}</button>
      </article>
    `
    )
    .join('');

  document.querySelectorAll('[data-dataset]').forEach((button) => {
    button.addEventListener('click', () => {
      const id = button.dataset.dataset;
      const rows = [
        { Year: 2024, Region: 'FR', Revenue: 250000, Target: 240000 },
        { Year: 2024, Region: 'ES', Revenue: 180000, Target: 190000 },
        { Year: 2025, Region: 'DE', Revenue: 210000, Target: 200000 }
      ];
      downloadCsv(csvFromRows(rows), `novaretail_${id}.csv`);
    });
  });
}

function downloadText(content, filename) {
  const blob = new Blob([content], { type: 'text/plain;charset=utf-8;' });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.download = filename;
  link.click();
  URL.revokeObjectURL(url);
}

function renderCheatsheets() {
  cheatsheetList.innerHTML = cheatsheets
    .map(
      (sheet) => `
      <article class="card">
        <h3>${sheet.title}</h3>
        <ul>${sheet.lines.map((line) => `<li>${line}</li>`).join('')}</ul>
        <button class="btn btn-ghost" type="button" data-cheatsheet="${sheet.id}">Télécharger la fiche</button>
      </article>
    `
    )
    .join('');

  document.querySelectorAll('[data-cheatsheet]').forEach((button) => {
    button.addEventListener('click', () => {
      const sheet = cheatsheets.find((item) => item.id === button.dataset.cheatsheet);
      const content = `${sheet.title}\n\n${sheet.lines.join('\n')}\n`;
      downloadText(content, `${sheet.id}.txt`);
    });
  });
}

function renderProjects() {
  projectsList.innerHTML = projects
    .map(
      (project) => `
      <article class="card module">
        <h3>${project.title}</h3>
        <p>${project.goal}</p>
        <label class="checkbox-line">
          <input type="checkbox" data-track="${project.id}" />
          Projet terminé
        </label>
      </article>
    `
    )
    .join('');
}

function initSimulators() {
  const relationMode = document.getElementById('relation-mode');
  const relationFeedback = document.getElementById('relation-feedback');
  const daxFilter = document.getElementById('dax-filter');
  const daxFeedback = document.getElementById('dax-feedback');

  const relationMessages = {
    star: '✅ Excellent choix : modèle robuste et performant pour Power BI.',
    snowflake: '⚠️ Correct mais plus complexe à maintenir pour un débutant.',
    flat: '❌ Risque élevé: faible lisibilité et scalabilité limitée.'
  };

  const daxValues = { all: 640000, fr: 250000, es: 180000, de: 210000 };
  const daxPct = { all: 100, fr: 39, es: 28, de: 33 };

  const updateRelation = () => {
    relationFeedback.textContent = relationMessages[relationMode.value];
  };

  const updateDax = () => {
    const selected = daxFilter.value;
    daxFeedback.textContent = `CA simulé: ${daxValues[selected].toLocaleString('fr-FR')} € (${daxPct[selected]}% du total).`;
  };

  relationMode.addEventListener('change', updateRelation);
  daxFilter.addEventListener('change', updateDax);
  updateRelation();
  updateDax();
}

function initTheme() {
  const root = document.documentElement;
  const toggle = document.getElementById('theme-toggle');
  const savedTheme = localStorage.getItem(themeKey);

  if (savedTheme === 'dark') {
    root.classList.add('dark');
    toggle.textContent = '☀️';
  }

  toggle.addEventListener('click', () => {
    root.classList.toggle('dark');
    const isDark = root.classList.contains('dark');
    localStorage.setItem(themeKey, isDark ? 'dark' : 'light');
    toggle.textContent = isDark ? '☀️' : '🌙';
  });
}

function initProgressReset() {
  document.getElementById('reset-progress').addEventListener('click', () => {
    localStorage.removeItem(progressKey);
    localStorage.removeItem('pba-quiz-score');
    localStorage.removeItem('pba-quiz-errors');
    updateProgressUI();
    renderQuizScore();
    renderRevisionList();
    renderPerformanceStats();
  });

  document.getElementById('resume-learning').addEventListener('click', () => {
    const progress = getProgress();
    const nextLesson = lessons.find((lesson) => !progress[lesson.id]);
    if (!nextLesson) {
      alert('Bravo ! Tu as terminé toutes les leçons disponibles.');
      return;
    }
    const details = document.querySelectorAll('.lesson-card');
    details.forEach((detail) => {
      const title = detail.querySelector('summary strong')?.textContent || '';
      detail.open = title.includes(nextLesson.title);
    });
    document.getElementById('lessons').scrollIntoView({ behavior: 'smooth' });
  });
}

function initLessonActions() {
  document.getElementById('expand-lessons').addEventListener('click', () => {
    document.querySelectorAll('.lesson-card').forEach((card) => {
      card.open = true;
    });
  });

  document.getElementById('collapse-lessons').addEventListener('click', () => {
    document.querySelectorAll('.lesson-card').forEach((card) => {
      card.open = false;
    });
  });

  document.getElementById('random-lesson').addEventListener('click', () => {
    const cards = [...document.querySelectorAll('.lesson-card')];
    if (!cards.length) return;
    cards.forEach((card) => {
      card.open = false;
    });
    const randomCard = cards[Math.floor(Math.random() * cards.length)];
    randomCard.open = true;
    randomCard.scrollIntoView({ behavior: 'smooth', block: 'center' });
  });

  lessonFilter.addEventListener('change', () => {
    renderLessons();
    updateProgressUI();
  });

  levelFilter.addEventListener('change', () => {
    renderLessons();
    updateProgressUI();
  });

  lessonSearch.addEventListener('input', () => {
    renderLessons();
    updateProgressUI();
  });

  simpleModeBtn.addEventListener('click', () => {
    localStorage.setItem(viewModeKey, 'simple');
    renderLessons();
  });

  techModeBtn.addEventListener('click', () => {
    localStorage.setItem(viewModeKey, 'tech');
    renderLessons();
  });
}

function initChallenge() {
  document.getElementById('challenge-start').addEventListener('click', startChallenge);
  document.getElementById('challenge-stop').addEventListener('click', stopChallenge);
  document.getElementById('challenge-validate').addEventListener('click', validateChallenge);
}

renderModules();
renderThemes();
renderPlanStatus();
renderLessons();
trackUserVisit();
renderLab();
renderDatasets();
renderCheatsheets();
renderPhase3Cases();
renderProjects();
updateProgressUI();
renderQuizScore();
renderRevisionList();
renderPerformanceStats();
renderPowerBiNews();
initTheme();
initProgressReset();
initLessonActions();
initSimulators();
initChallenge();
initPhase3Evaluation();

lessonsTitle.textContent = `Leçons complètes (${lessons.length})`;

yearFilter.addEventListener('change', renderLab);
