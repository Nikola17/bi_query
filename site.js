// =============================================
// Power BI Academy - Site JS (Consolidated)
// Two tracks: Power Query + Power BI
// Hash-router SPA for GitHub Pages
// =============================================

// --- ROUTER ---
const routes = {};
function registerRoute(path, handler) { routes[path] = handler; }
function navigate(path) { window.location.hash = path; }
function getRoute() { return window.location.hash.slice(1) || '/home'; }
function matchRoute(hash) {
  const sorted = Object.keys(routes).sort((a, b) => b.length - a.length);
  for (const pattern of sorted) {
    const regex = new RegExp('^' + pattern.replace(/:\w+/g, '([^/]+)') + '$');
    const match = hash.match(regex);
    if (match) return { handler: routes[pattern], params: match.slice(1) };
  }
  return null;
}
function initRouter() {
  window.addEventListener('hashchange', renderPage);
  window.addEventListener('load', renderPage);
}
function renderPage() {
  const hash = getRoute();
  const matched = matchRoute(hash);
  const app = document.getElementById('app');
  if (!app) return;
  if (matched) {
    app.innerHTML = '';
    matched.handler(app, ...matched.params);
    window.scrollTo(0, 0);
  } else {
    app.innerHTML = '<div class="container" style="padding:4rem 0"><h2>Page non trouvée</h2><p><a href="#/home">Retour</a></p></div>';
  }
}

// --- APP STATE ---
const progressKey = 'pba-progress';
const themeKey = 'pba-theme';
const quizScoreKey = 'pba-quiz-score';

function getProgress() { try { return JSON.parse(localStorage.getItem(progressKey) || '{}'); } catch(e) { return {}; } }
function saveProgress(p) { localStorage.setItem(progressKey, JSON.stringify(p)); }
function getTheme() { return localStorage.getItem(themeKey) || 'light'; }
function toggleTheme() {
  const next = getTheme() === 'light' ? 'dark' : 'light';
  localStorage.setItem(themeKey, next);
  document.documentElement.classList.toggle('dark', next === 'dark');
  renderPage();
}
function toggleLesson(id, checked) {
  const p = getProgress();
  if (checked) p[id] = true; else delete p[id];
  saveProgress(p);
  renderPage();
}
function getQuizScore() { try { return JSON.parse(localStorage.getItem(quizScoreKey) || '{}'); } catch(e) { return {}; } }
function saveQuizAnswer(id, correct) {
  const s = getQuizScore(); s[id] = correct;
  localStorage.setItem(quizScoreKey, JSON.stringify(s));
}
const pba = { getProgress, saveProgress, getTheme, toggleTheme, toggleLesson, getQuizScore, saveQuizAnswer };
window.pba = pba;

// --- MODULES ---
const queryModules = [
  { id: 'q0', title: 'Bloc 0 — Mise en route', desc: "Comprendre l'écosystème Excel / Power Query / Power BI.", track: 'query', objective: 'Rassurer un débutant total.', result: "L'élève comprend le flux complet." },
  { id: 'q1', title: 'Bases Power Query', desc: 'Importer, nettoyer, typer les données.', track: 'query', objective: 'Savoir importer des données et les rendre propres.', result: "L'élève sait rendre une table propre et exploitable." },
  { id: 'q2', title: 'Power Query intermédiaire', desc: 'Group By, paramètres, logique de rafraîchissement.', track: 'query', objective: 'Savoir restructurer les données.', result: "L'élève sait construire un flux de transformation." },
  { id: 'q3', title: 'Power Query avancé', desc: 'Fonctions M, performance, query folding.', track: 'query', objective: 'Maîtriser le langage M et optimiser.', result: "L'élève n'a plus peur du code M." }
];

const biModules = [
  { id: 'b0', title: 'Bloc 0 — Mise en route', desc: "Comprendre l'écosystème et le flux Power BI.", track: 'bi', objective: 'Rassurer un débutant total.', result: "L'élève comprend le flux complet." },
  { id: 'b4', title: 'Modélisation', desc: 'Star schema, relations, table calendrier.', track: 'bi', objective: 'Construire des modèles propres.', result: "L'élève comprend pourquoi le modèle est la base." },
  { id: 'b5', title: 'DAX fondation', desc: 'Mesures essentielles et contexte de filtre.', track: 'bi', objective: 'Créer de vrais calculs utiles.', result: "L'élève sait écrire des mesures utiles." },
  { id: 'b6', title: 'DAX avancé', desc: 'Variables, itérateurs, time intelligence.', track: 'bi', objective: 'Atteindre un niveau DAX solide.', result: "L'élève sait construire des analyses avancées." },
  { id: 'b7', title: 'Visualisation', desc: 'Storytelling, hiérarchie visuelle, slicers.', track: 'bi', objective: 'Construire des rapports clairs.', result: "L'èlève sait faire un dashboard agréable." },
  { id: 'b8', title: 'Cas métiers', desc: 'Assembler toutes les compétences.', track: 'bi', objective: 'Appliquer les compétences dans des cas réels.', result: "L'élève sait gérer un projet complet." }
];

const allModules = [...queryModules, ...biModules];

// --- ALL LESSONS ---
const allLessons = [
  {
    "id": "l1",
    "title": "Importer un CSV et typer les colonnes",
    "track": "query",
    "moduleId": "q1",
    "difficulty": "DÃ©butant",
    "why": "Toute analyse commence par l'import et le typage. Si tes types sont faux, tout le reste est compromis â€” calculs erronÃ©s, tri cassÃ©, visuels incohÃ©rents.",
    "example": {
      "scenario": "Tu reÃ§ois un export ERP des ventes mensuelles.",
      "data": "Fichier CSV avec DateCommande en texte (01-02-2025), Montant en texte avec espaces (1 250,50), ClientID en nombre (00125 perdu).",
      "goal": "Obtenir une table propre avec les bons types : Date, DÃ©cimal, Texte."
    },
    "steps": [
      {
        "title": "Charger le CSV",
        "detail": "Dans Power Query, utiliser Accueil > Obtenir les donnÃ©es > Ã€ partir d'un fichier CSV. SÃ©lectionner le fichier et valider.",
        "tip": "VÃ©rifier l'encodage (UTF-8 par dÃ©faut) et le dÃ©limiteur (virgule ou point-virgule).",
        "pitfall": "Si le dÃ©limiteur est mal choisi, toutes les colonnes seront dans une seule."
      },
      {
        "title": "Promouvoir les en-tÃªtes",
        "detail": "AccÃ©der Ã  Accueil > Utiliser la premiÃ¨re ligne comme en-tÃªtes. Power Query dÃ©tecte souvent automatiquement.",
        "tip": "Toujours vÃ©rifier que la premiÃ¨re ligne est bien les en-tÃªtes, pas une ligne de donnÃ©es.",
        "pitfall": "Oublier cette Ã©tape donne des colonnes Column1, Column2, etc."
      },
      {
        "title": "Corriger les types",
        "detail": "Pour chaque colonne : clic droit sur l'en-tÃªte > Type de donnÃ©es. DateCommande â†’ Date, Montant â†’ Devise, ClientID â†’ Texte.",
        "tip": "Power Query propose des types, mais vÃ©rifie toujours. Un ID client n'est JAMAIS un nombre.",
        "pitfall": "ClientID en nombre perd les zÃ©ros initiaux (00125 â†’ 125)."
      },
      {
        "title": "Renommer la requÃªte",
        "detail": "Double-cliquer sur le nom de la requÃªte (RequÃªte1) et la renommer clairement (ex : Ventes_Typees).",
        "tip": "Des noms clairs facilitent la maintenance et la relecture.",
        "pitfall": "Un nom comme RequÃªte1 rend le flux incomprÃ©hensible pour quiconque."
      }
    ],
    "exercise": {
      "title": "Corriger les types d'un export ERP",
      "instructions": "1. Importe le fichier CSV fourni. 2. VÃ©rifie et corrige les types des 3 colonnes problÃ©matiques. 3. VÃ©rifie que le nombre de lignes reste identique aprÃ¨s typage.",
      "hints": [
        "VÃ©rifie le nombre de lignes avant/aprÃ¨s",
        "ClientID doit rester Texte",
        "Le montant avec espaces doit devenir DÃ©cimal"
      ],
      "dataset": "bloc1-l1-typer-colonnes.csv"
    },
    "solution": {
      "steps": [
        "Importer le CSV",
        "Promouvoir les en-tÃªtes",
        "Changer DateCommande en type Date",
        "Changer Montant en type DÃ©cimal (locale franÃ§aise)",
        "Changer ClientID en type Texte",
        "VÃ©rifier le nombre de lignes = identique"
      ],
      "explanation": "Le typage prÃ©serve les donnÃ©es tout en les rendant exploitables. Les IDs en texte Ã©vitent la perte d'information. Les montants en dÃ©cimal permettent les calculs."
    },
    "pitfalls": [
      {
        "trap": "ClientID transformÃ© en nombre",
        "fix": "Forcer le type Texte AVANT l'import via ParamÃ¨tres de dÃ©tection, ou corriger aprÃ¨s."
      },
      {
        "trap": "Locale dÃ©cimale incorrecte",
        "fix": "Utiliser ParamÃ¨tres rÃ©gionaux dans le menu Type de donnÃ©es pour choisir FranÃ§ais (France)."
      },
      {
        "trap": "Type Date non reconnu",
        "fix": "Utiliser Transformer > Type de donnÃ©es > Date en utilisant les paramÃ¨tres rÃ©gionaux adaptÃ©s au format source."
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
      "difficulty": "DÃ©butant",
      "explanation": "ClientID est un identifiant mÃ©tier, pas une valeur de calcul. En nombre, 00125 deviendrait 125."
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
    "difficulty": "DÃ©butant",
    "why": "Une table avec des doublons ou des nulls non traitÃ©s fausse les calculs. Nettoyer est la fondation de toute analyse fiable.",
    "example": {
      "scenario": "Tu reÃ§ois une base CRM avec des clients en double et des champs vides.",
      "data": "Table de 42 120 lignes avec 1 250 doublons sur ClientID et 320 valeurs null dans Email.",
      "goal": "Obtenir une table de 40 870 lignes uniques, sans erreur bloquante."
    },
    "steps": [
      {
        "title": "Identifier la clÃ© mÃ©tier",
        "detail": "Avant de supprimer les doublons, dÃ©terminer quelle colonne (ou combinaison) identifie un unique enregistrement. Ex : ClientID.",
        "tip": "La clÃ© mÃ©tier n'est pas toujours Ã©vidente. Parfois c'est une combinaison de colonnes.",
        "pitfall": "Supprimer les doublons sur la mauvaise colonne efface des lignes lÃ©gitimes."
      },
      {
        "title": "Supprimer les doublons",
        "detail": "SÃ©lectionner la colonne clÃ© > Accueil > Supprimer les doublons. VÃ©rifier le nombre de lignes avant/aprÃ¨s.",
        "tip": "Toujours comparer le nombre de lignes avant et aprÃ¨s pour comprendre l'impact.",
        "pitfall": "Oublier de vÃ©rifier le nombre de lignes peut masquer une erreur."
      },
      {
        "title": "Traiter les null et erreurs",
        "detail": "Pour chaque colonne avec des nulls : dÃ©cider d'une rÃ¨gle mÃ©tier. Remplacer null par une valeur par dÃ©faut ou filtrer.",
        "tip": "Documenter chaque rÃ¨gle de traitement dans les Ã©tapes de la requÃªte.",
        "pitfall": "Remplacer les nulls sans justification mÃ©tier peut introduire des biais."
      }
    ],
    "exercise": {
      "title": "Nettoyer une table prospects",
      "instructions": "1. Importe le CSV. 2. Identifie la clÃ© de dÃ©duplication. 3. Supprime les doublons. 4. Traite les null selon une rÃ¨gle mÃ©tier. 5. Documente tes choix.",
      "hints": [
        "La clÃ© est ClientID",
        "Les emails null peuvent Ãªtre remplacÃ©s par une valeur par dÃ©faut si validÃ© mÃ©tier",
        "Compare toujours le nombre de lignes"
      ],
      "dataset": "bloc1-l2-doublons-nulls.csv"
    },
    "solution": {
      "steps": [
        "Importer le CSV",
        "SÃ©lectionner ClientID",
        "Supprimer les doublons",
        "VÃ©rifier : 42120 â†’ 40870 lignes",
        "Remplacer les emails null par 'inconnu@temp.com' (si validÃ© mÃ©tier)"
      ],
      "explanation": "La dÃ©duplication sur ClientID garantit des analyses correctes. Le traitement des nulls dÃ©pend du contexte mÃ©tier."
    },
    "pitfalls": [
      {
        "trap": "Doublons supprimÃ©s sur mauvaise colonne",
        "fix": "Toujours valider la clÃ© de dÃ©duplication avec le mÃ©tier avant de supprimer."
      },
      {
        "trap": "Valeurs nulles masquÃ©es sans justification",
        "fix": "Documenter chaque rÃ¨gle de remplacement. Si pas de rÃ¨gle mÃ©tier, garder les nulls visibles."
      }
    ],
    "quiz": {
      "question": "Quelle est la premiÃ¨re dÃ©cision avant de supprimer les doublons ?",
      "options": [
        "DÃ©finir la clÃ© de dÃ©duplication",
        "Changer toutes les valeurs nulles",
        "Trier par date"
      ],
      "answer": 0,
      "difficulty": "DÃ©butant",
      "explanation": "Sans clÃ© mÃ©tier claire, tu risques de supprimer de mauvaises lignes."
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
    "difficulty": "IntermÃ©diaire",
    "why": "Combiner des donnÃ©es est le quotidien du data analyst. Savoir quand empiler (Append) et quand relier (Merge) est fondamental.",
    "example": {
      "scenario": "Tu as les ventes 2024, les ventes 2025 et un rÃ©fÃ©rentiel produits Ã  enrichir.",
      "data": "Ventes_2024 (10K lignes), Ventes_2025 (12K lignes), Produits (500 lignes).",
      "goal": "Obtenir une table ventes complÃ¨te (22K lignes) enrichie avec les catÃ©gories produits."
    },
    "steps": [
      {
        "title": "Append des annÃ©es",
        "detail": "Accueil > Ajouter des requÃªtes > Ajouter les requÃªtes en tant que nouvelles. SÃ©lectionner Ventes_2024 puis Ventes_2025.",
        "tip": "Les colonnes doivent avoir des noms identiques. Sinon, Power Query crÃ©e des colonnes supplÃ©mentaires.",
        "pitfall": "Des colonnes homonymes mais de contenu diffÃ©rent crÃ©ent des nulls."
      },
      {
        "title": "Merge avec dimensions",
        "detail": "Accueil > Fusionner des requÃªtes. Choisir la table ventes et la table Produits sur la clÃ© ProductID, jointure externe gauche.",
        "tip": "Toujours vÃ©rifier la cardinalitÃ© : 1 produit = 1 ligne dans la dimension.",
        "pitfall": "Un merge sur une clÃ© non unique crÃ©e une explosion de lignes."
      },
      {
        "title": "ContrÃ´ler la cardinalitÃ©",
        "detail": "AprÃ¨s le merge, vÃ©rifier que le nombre de lignes n'a pas augmentÃ© de maniÃ¨re inattendue.",
        "tip": "Ajouter une Ã©tape de comptage des lignes avant/aprÃ¨s chaque opÃ©ration.",
        "pitfall": "Ne pas vÃ©rifier la cardinalitÃ© est la cause nÂ°1 des totaux erroneÃ©s."
      }
    ],
    "exercise": {
      "title": "Produire une table ventes enrichie",
      "instructions": "1. Charge les 3 fichiers. 2. Append Ventes_2024 et Ventes_2025. 3. Merge avec Produits sur ProductID. 4. VÃ©rifie que le nombre de lignes reste correct.",
      "hints": [
        "Append empile les lignes (vertical)",
        "Merge ajoute des colonnes (horizontal)",
        "VÃ©rifie le nombre de lignes aprÃ¨s chaque opÃ©ration"
      ],
      "dataset": "bloc2-l3-merge-append.csv"
    },
    "solution": {
      "steps": [
        "Append Ventes_2024 + Ventes_2025 â†’ 22000 lignes",
        "Merge avec Produits sur ProductID (left outer)",
        "SÃ©lectionner CatÃ©gorie et Sous-CatÃ©gorie du merge",
        "VÃ©rifier : toujours 22000 lignes"
      ],
      "explanation": "Append empile verticalement, Merge relie horizontalement. La clÃ© ProductID unique dans la dimension garantit pas d'explosion."
    },
    "pitfalls": [
      {
        "trap": "Join sur clÃ© non unique",
        "fix": "VÃ©rifier que la clÃ© de merge est unique dans la dimension. Utiliser Supprimer les doublons si nÃ©cessaire."
      },
      {
        "trap": "Colonnes homonymes non renommÃ©es",
        "fix": "Avant le merge, renommer les colonnes qui portent le mÃªme nom mais contiennent des donnÃ©es diffÃ©rentes."
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
      "difficulty": "IntermÃ©diaire",
      "explanation": "Append concatÃ¨ne des lignes, alors que Merge ajoute des colonnes."
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
    "difficulty": "IntermÃ©diaire",
    "why": "Les donnÃ©es brutes arrivent souvent en format large (colonnes par mois). Power BI a besoin de format long pour fonctionner correctement.",
    "example": {
      "scenario": "Un budget mensuel avec colonnes Jan, FÃ©v, Mar, etc.",
      "data": "Table avec Produit | Jan | FÃ©v | Mar â€” chaque mois est une colonne.",
      "goal": "Transformer en Produit | Mois | Montant pour permettre l'analyse temporelle."
    },
    "steps": [
      {
        "title": "SÃ©lectionner les colonnes Ã  unpivot",
        "detail": "SÃ©lectionner les colonnes des mois (Jan, FÃ©v, Mar...) en maintenant Ctrl.",
        "tip": "Ne pas sÃ©lectionner les colonnes d'identification (Produit) â€” elles resteront.",
        "pitfall": "SÃ©lectionner les mauvaises colonnes dÃ©truit la structure de la table."
      },
      {
        "title": "Unpivot columns",
        "detail": "Transformer > DÃ©pivoter les colonnes sÃ©lectionnÃ©es. Les colonnes mois deviennent deux colonnes : Attribut et Valeur.",
        "tip": "Renommer Attribut â†’ Mois et Valeur â†’ Montant immÃ©diatement.",
        "pitfall": "Oublier de renommer rend les colonnes difficiles Ã  comprendre."
      },
      {
        "title": "Typer et ordonner les mois",
        "detail": "CrÃ©er une colonne de tri pour les mois (01-Jan, 02-FÃ©v, etc.) pour que l'ordre soit correct dans les visuels.",
        "tip": "Utiliser une table de correspondance mois numÃ©ro â†’ mois nom si nÃ©cessaire.",
        "pitfall": "Les mois triÃ©s alphabÃ©tiquement (Avril avant FÃ©vrier) sont une erreur frÃ©quente."
      }
    ],
    "exercise": {
      "title": "Convertir un tableau budget en format long",
      "instructions": "1. Importe le fichier budget. 2. Unpivot les colonnes mensuelles. 3. Renomme les colonnes rÃ©sultats. 4. Ajoute une colonne de tri pour les mois.",
      "hints": [
        "Unpivot seulement les colonnes de pÃ©riode",
        "Renomme Attribut â†’ Mois et Valeur â†’ Montant",
        "Ajoute un numÃ©ro de mois pour le tri"
      ],
      "dataset": "bloc2-l4-pivot-unpivot.csv"
    },
    "solution": {
      "steps": [
        "SÃ©lectionner colonnes mois",
        "Unpivot columns",
        "Renommer Attribut â†’ Mois",
        "Renommer Valeur â†’ Montant",
        "CrÃ©er colonne NÂ°Mois pour le tri"
      ],
      "explanation": "Le format long est la base d'un bon modÃ¨le Power BI. Il permet les slicers par mois, les calculs YTD et les comparaisons temporelles."
    },
    "pitfalls": [
      {
        "trap": "Unpivot sur mauvaise plage",
        "fix": "Toujours vÃ©rifier les colonnes sÃ©lectionnÃ©es avant l'opÃ©ration. Les colonnes fixes doivent rester."
      },
      {
        "trap": "Mois textuels non ordonnÃ©s",
        "fix": "CrÃ©er une colonne de tri (Sort By Column) qui associe chaque mois Ã  son numÃ©ro."
      }
    ],
    "quiz": {
      "question": "Quelle action transforme Jan/FÃ©v/Mar en lignes ?",
      "options": [
        "Unpivot",
        "Split column",
        "Merge queries"
      ],
      "answer": 0,
      "difficulty": "IntermÃ©diaire",
      "explanation": "Unpivot convertit des colonnes de pÃ©riode en lignes analytiques."
    },
    "downloadFile": "datasets/bloc2-l4-pivot-unpivot.csv",
    "nextLesson": "l13",
    "prerequisites": [
      "l1"
    ]
  },
  {
    "id": "l13",
    "title": "Group By avancÃ© avec indicateurs qualitÃ©",
    "track": "query",
    "moduleId": "q2",
    "difficulty": "IntermÃ©diaire",
    "why": "AgrÃ©ger les donnÃ©es permet de crÃ©er des indicateurs de synthÃ¨se et de repÃ©rer les anomalies sans analyser chaque ligne.",
    "example": {
      "scenario": "Suivi hebdomadaire des ventes par rÃ©gion avec contrÃ´le qualitÃ©.",
      "data": "Table de 40 000 lignes de transactions avec RÃ©gion, Montant, et Date.",
      "goal": "Table agrÃ©gÃ©e par RÃ©gion avec CA, CA moyen, et colonne de contrÃ´le d'anomalie."
    },
    "steps": [
      {
        "title": "Group by rÃ©gion",
        "detail": "Transformer > Grouper par. Choisir RÃ©gion comme colonne de groupe, et ajouter les agrÃ©gations : Somme de Montant, Moyenne de Montant.",
        "tip": "Ajouter plusieurs agrÃ©gations dans la mÃªme Ã©tape Group By pour Ã©viter des Ã©tapes multiples.",
        "pitfall": "Grouper sur la mauvaise colonne produit des rÃ©sultats incomprÃ©hensibles."
      },
      {
        "title": "CrÃ©er CA moyen",
        "detail": "Ajouter une colonne personnalisÃ©e qui calcule le CA moyen par transaction = CA Total / Nombre de transactions.",
        "tip": "Utiliser la colonne de comptage (Count) gÃ©nÃ©rÃ©e par Group By comme dÃ©nominateur.",
        "pitfall": "Oublier le Count dans le Group By empÃªche le calcul de la moyenne."
      },
      {
        "title": "Ajouter colonne contrÃ´le",
        "detail": "Ajouter une colonne conditionnelle : si CA moyen > seuil Ã— 1.15, alors 'Anomalie', sinon 'OK'.",
        "tip": "Le seuil de 15% est un point de dÃ©part â€” Ã  ajuster selon le contexte mÃ©tier.",
        "pitfall": "Un seuil trop bas gÃ©nÃ¨re trop de faux positifs."
      }
    ],
    "exercise": {
      "title": "Construire un rÃ©sumÃ© hebdo avec anomalie",
      "instructions": "1. Importe les transactions. 2. Group by RÃ©gion avec CA Total et Count. 3. Calcule CA moyen. 4. Ajoute une colonne contrÃ´le (anomalie si > 15% de la moyenne globale).",
      "hints": [
        "Group By RÃ©gion avec Somme et Nombre",
        "CA moyen = CA Total / Count",
        "Colonne conditionnelle sur l'Ã©cart"
      ],
      "dataset": "bloc2-l13-groupby.csv"
    },
    "solution": {
      "steps": [
        "Group By RÃ©gion â†’ Somme Montant, Count",
        "Ajouter colonne CA Moyen = [CA Total] / [Count]",
        "Colonne conditionnelle : si CA Moyen > 1.15 Ã— moyenne globale â†’ Anomalie"
      ],
      "explanation": "L'agrÃ©gation rÃ©duit les donnÃ©es Ã  l'essentiel. La colonne de contrÃ´le permet de repÃ©rer rapidement les rÃ©gions anormales."
    },
    "pitfalls": [
      {
        "trap": "AgrÃ©gation sur mauvaise clÃ©",
        "fix": "Toujours vÃ©rifier que la clÃ© de regroupement correspond au niveau d'analyse voulu."
      },
      {
        "trap": "Seuil d'anomalie arbitraire",
        "fix": "Discuter le seuil avec le mÃ©tier et documenter la rÃ¨gle."
      }
    ],
    "quiz": {
      "question": "Group By sert principalement Ã  :",
      "options": [
        "AgrÃ©ger des donnÃ©es par catÃ©gorie",
        "Joindre des tables",
        "Filtrer des dates"
      ],
      "answer": 0,
      "difficulty": "IntermÃ©diaire",
      "explanation": "Group By consolide les donnÃ©es en lignes agrÃ©gÃ©es par catÃ©gorie."
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
    "title": "ParamÃ¨tres et requÃªtes de rÃ©fÃ©rence",
    "track": "query",
    "moduleId": "q2",
    "difficulty": "AvancÃ©",
    "why": "Les paramÃ¨tres rendent les flux rÃ©utilisables et maintenables. Un changement de source n'affecte qu'un seul paramÃ¨tre.",
    "example": {
      "scenario": "Changer le dossier source d'un flux sans rÃ©Ã©crire les Ã©tapes.",
      "data": "Flux avec chemin codÃ© en dur : C:\\Rapports\\2024\\Ventes.csv",
      "goal": "Flux paramÃ©trÃ© : SourceFolder = parameter, adaptable Ã  tout environnement."
    },
    "steps": [
      {
        "title": "CrÃ©er un paramÃ¨tre",
        "detail": "Accueil > GÃ©rer les paramÃ¨tres > Nouveau paramÃ¨tre. Nommer SourceFolder, type Texte, valeur par dÃ©faut : C:\\Rapports\\2024.",
        "tip": "Les paramÃ¨tres apparaissent comme des requÃªtes avec une icÃ´ne spÃ©ciale dans le volet gauche.",
        "pitfall": "Oublier de typer le paramÃ¨tre peut causer des erreurs silencieuses."
      },
      {
        "title": "Utiliser dans les requÃªtes",
        "detail": "Remplacer le chemin en dur par le paramÃ¨tre dans l'Ã©tape Source de chaque requÃªte concernÃ©e.",
        "tip": "Cliquer sur le paramÃ¨tre dans le volet pour le rÃ©fÃ©rencer automatiquement.",
        "pitfall": "Remplacer seulementæŸäº› requÃªtes laisse des chemins orphelins."
      },
      {
        "title": "Tester le changement",
        "detail": "Modifier la valeur du paramÃ¨tre et vÃ©rifier que toutes les requÃªtes se mettent Ã  jour.",
        "tip": "CrÃ©er un second paramÃ¨tre pour l'environnement DEV vs PROD.",
        "pitfall": "Ne pas tester le paramÃ¨tre avec une vraie valeur alternative."
      }
    ],
    "exercise": {
      "title": "ParamÃ©trer le dossier source et tester",
      "instructions": "1. CrÃ©e un paramÃ¨tre SourceFolder. 2. Utilise-le dans la requÃªte Ventes. 3. Change la valeur et vÃ©rifie le rafraÃ®chissement.",
      "hints": [
        "CrÃ©e le paramÃ¨tre comme type Texte",
        "Remplace le chemin en dur dans l'Ã©tape Source",
        "Teste avec un chemin diffÃ©rent"
      ],
      "dataset": "bloc2-l14-parametres.csv"
    },
    "solution": {
      "steps": [
        "CrÃ©er paramÃ¨tre SourceFolder (Texte, valeur par dÃ©faut)",
        "Dans la requÃªte, remplacer le chemin par SourceFolder",
        "Changer SourceFolder â†’ vÃ©rifier que le flux se met Ã  jour"
      ],
      "explanation": "Un paramÃ¨tre centralise la configuration. Modifier un seul endroit impacte toutes les requÃªtes qui l'utilisent."
    },
    "pitfalls": [
      {
        "trap": "ParamÃ¨tre non appliquÃ© partout",
        "fix": "Rechercher les chemins en dur dans toutes les requÃªtes et les remplacer par le paramÃ¨tre."
      },
      {
        "trap": "ParamÃ¨tre mal typÃ©",
        "fix": "Toujours spÃ©cifier le type (Texte, Nombre, Date) pour Ã©viter les conversions implicites."
      }
    ],
    "quiz": {
      "question": "Un paramÃ¨tre Power Query permet :",
      "options": [
        "Changer facilement une valeur clÃ©",
        "CrÃ©er un visuel",
        "Activer drill-down"
      ],
      "answer": 0,
      "difficulty": "AvancÃ©",
      "explanation": "Un paramÃ¨tre est une valeur configurable qui rend les flux flexibles."
    },
    "downloadFile": "datasets/bloc2-l14-parametres.csv",
    "nextLesson": "l19",
    "prerequisites": [
      "l1"
    ]
  },
  {
    "id": "l19",
    "title": "Fonctions M personnalisÃ©es",
    "track": "query",
    "moduleId": "q3",
    "difficulty": "AvancÃ©",
    "why": "Quand une mÃªme logique se rÃ©pÃ¨te dans plusieurs requÃªtes, une fonction M l'encapsule pour la rÃ©utiliser sans duplication.",
    "example": {
      "scenario": "Normaliser des codes pays venant de 5 sources diffÃ©rentes.",
      "data": "Codes pays : 'FR ', 'france', 'FRA', 'fr' â€” tous doivent devenir 'FR'.",
      "goal": "CrÃ©er une fonction fnNormalizeCountry() qui nettoie et standardise automatiquement."
    },
    "steps": [
      {
        "title": "CrÃ©er une requÃªte fonction",
        "detail": "Commencer par nettoyer une colonne dans une requÃªte existante. Puis clic droit > CrÃ©er une fonction. La logique devient rÃ©utilisable.",
        "tip": "Ã‰crire la logique sur un exemple concret d'abord, puis la gÃ©nÃ©raliser en fonction.",
        "pitfall": "CrÃ©er une fonction sans l'avoir testÃ©e sur un exemple concret d'abord."
      },
      {
        "title": "Passer des paramÃ¨tres",
        "detail": "La fonction prend des arguments (ex: (code as text) as text). Utiliser des types explicites pour Ã©viter les erreurs.",
        "tip": "Ajouter des gardes de type (as text, as number) pour les paramÃ¨tres et le retour.",
        "pitfall": "ParamÃ¨tres mal typÃ©s causent des erreurs difficiles Ã  diagnostiquer."
      },
      {
        "title": "Appliquer sur une table",
        "detail": "Utiliser Transformer > Appeler une fonction personnalisÃ©e sur la colonne Ã  traiter.",
        "tip": "VÃ©rifier le rÃ©sultat sur quelques lignes avant de l'appliquer Ã  toute la table.",
        "pitfall": "Oublier de tester sur des valeurs null ou des cas limites."
      }
    ],
    "exercise": {
      "title": "Factoriser une logique de nettoyage en fonction M",
      "instructions": "1. CrÃ©e une requÃªte qui nettoie les codes pays. 2. Transforme-la en fonction fnNormalizeCountry. 3. Applique-la Ã  une table avec 5 sources.",
      "hints": [
        "Teste d'abord la logique sur un exemple",
        "Ajoute des gardes de type as text",
        "VÃ©rifie les rÃ©sultats sur les nulls"
      ],
      "dataset": "bloc3-l19-fonctions-m.csv"
    },
    "solution": {
      "steps": [
        "CrÃ©er une requÃªte de nettoyage exemple",
        "Transformer en fonction avec paramÃ¨tre (code as text)",
        "Appeler la fonction sur chaque colonne code pays des 5 sources"
      ],
      "explanation": "Une fonction M Ã©vite la duplication et facilite la maintenance. Un seul endroit Ã  modifier si la rÃ¨gle change."
    },
    "pitfalls": [
      {
        "trap": "ParamÃ¨tres mal typÃ©s",
        "fix": "Toujours ajouter des types explicites aux paramÃ¨tres de la fonction."
      },
      {
        "trap": "Fonction trop complexe",
        "fix": "DÃ©couper la logique en sous-fonctions simples et les composer."
      }
    ],
    "quiz": {
      "question": "Une fonction M sert surtout Ã  :",
      "options": [
        "RÃ©utiliser une logique de transformation",
        "CrÃ©er un visuel",
        "GÃ©nÃ©rer un thÃ¨me"
      ],
      "answer": 0,
      "difficulty": "AvancÃ©",
      "explanation": "Elle encapsule des transformations rÃ©pÃ©tÃ©es pour les rÃ©utiliser."
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
    "difficulty": "AvancÃ©",
    "why": "Un rafraÃ®chissement lent peut rendre un rapport inutilisable. Comprendre le query folding est la clÃ© pour optimiser les performances.",
    "example": {
      "scenario": "Source SQL + transformations dans Power Query qui rafraÃ®chit en 5 minutes.",
      "data": "RequÃªte sur une table SQL de 500K lignes avec filtres, colonnes calculÃ©es et merge.",
      "goal": "RÃ©duire le temps de rafraÃ®chissement Ã  moins de 2 minutes en optimisant le folding."
    },
    "steps": [
      {
        "title": "VÃ©rifier le folding",
        "detail": "Clic droit sur une Ã©tape > Voir la requÃªte native. Si Power Query affiche la requÃªte SQL, le folding fonctionne.",
        "tip": "Chaque Ã©tape qui casse le folding force le traitement local et ralentit.",
        "pitfall": "Ne pas vÃ©rifier le folding rÃ©guliÃ¨rement pendant la construction du flux."
      },
      {
        "title": "DÃ©placer les transformations",
        "detail": "Placer les filtres et sÃ©lections de colonnes le plus tÃ´t possible dans le flux, AVANT les Ã©tapes qui cassent le folding.",
        "tip": "L'ordre idÃ©al : Source â†’ Filtres â†’ SÃ©lection colonnes â†’ Autres transformations.",
        "pitfall": "Appliquer des opÃ©rations coÃ»teuses (colonnes calculÃ©es, merge) trop tÃ´t."
      },
      {
        "title": "Mesurer le temps",
        "detail": "Utiliser Power BI Service > ParamÃ¨tres du jeu de donnÃ©es > Historique de rafraÃ®chissement pour mesurer les temps.",
        "tip": "Comparer avant/aprÃ¨s chaque optimisation pour quantifier le gain.",
        "pitfall": "Optimiser sans mesurer ne permet pas de valider l'impact."
      }
    ],
    "exercise": {
      "title": "Optimiser un flux de 5 min vers moins de 2 min",
      "instructions": "1. Identifie les Ã©tapes qui cassent le folding. 2. RÃ©organise les Ã©tapes pour maximiser le folding. 3. Mesure le gain de performance.",
      "hints": [
        "VÃ©rifie 'Voir la requÃªte native' Ã  chaque Ã©tape",
        "Filtres et sÃ©lections de colonnes d'abord",
        "Colonnes calculÃ©es et merge ensuite"
      ],
      "dataset": "bloc3-l27-query-folding.csv"
    },
    "solution": {
      "steps": [
        "VÃ©rifier le folding Ã  chaque Ã©tape",
        "DÃ©placer filtres et sÃ©lections de colonnes en dÃ©but",
        "Rendre le merge foldable en utilisant une source commune",
        "Mesurer le temps de rafraÃ®chissement avant/aprÃ¨s"
      ],
      "explanation": "Le query folding dÃ©lÃ¨gue le calcul Ã  la source. Plus le folding est maintenu, plus le rafraÃ®chissement est rapide."
    },
    "pitfalls": [
      {
        "trap": "OpÃ©rations coÃ»teuses trop tÃ´t",
        "fix": "Repousser les colonnes calculÃ©es, merge et append aprÃ¨s les filtres."
      },
      {
        "trap": "Folding non vÃ©rifiÃ©",
        "fix": "Utiliser 'Voir la requÃªte native' rÃ©guliÃ¨rement et aprÃ¨s chaque ajout d'Ã©tape."
      }
    ],
    "quiz": {
      "question": "Le query folding permet surtout de :",
      "options": [
        "Pousser le traitement cÃ´tÃ© source",
        "Changer le thÃ¨me du rapport",
        "CrÃ©er des visuels plus rapidement"
      ],
      "answer": 0,
      "difficulty": "AvancÃ©",
      "explanation": "Le folding dÃ©lÃ¨gue le calcul Ã  la source de donnÃ©es pour accÃ©lÃ©rer le rafraÃ®chissement."
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
    "title": "Construire un schÃ©ma en Ã©toile",
    "track": "bi",
    "moduleId": "b4",
    "difficulty": "DÃ©butant",
    "why": "Le modÃ¨le est la fondation de tout rapport Power BI. Un mauvais modÃ¨le = des calculs faux et des rapports lents.",
    "example": {
      "scenario": "Tu as une table gÃ©ante SalesFlat avec tout dedans.",
      "data": "SalesFlat avec 100K lignes et 20 colonnes (dates, produits, clients, montants mÃ©langÃ©s).",
      "goal": "DÃ©couper en FactSales + DimDate + DimProduct + DimCustomer."
    },
    "steps": [
      {
        "title": "Isoler la table de faits",
        "detail": "Identifier les colonnes de mesures (CA, QuantitÃ©) et les clÃ©s de dimension. La fact table ne contient que des clÃ©s et des mesures.",
        "tip": "Une fact table est longue et Ã©troite â€” beaucoup de lignes, peu de colonnes.",
        "pitfall": "Mettre des libellÃ©s dans la fact table au lieu de clÃ©s Ã©trangÃ¨res."
      },
      {
        "title": "CrÃ©er les dimensions",
        "detail": "Pour chaque groupe d'attributs (produit, client, date), crÃ©er une table dimension avec une clÃ© primaire unique.",
        "tip": "Chaque dimension doit avoir une clÃ© unique sans doublon.",
        "pitfall": "Oublier de dÃ©dupliquer les dimensions crÃ©e des relations many-to-many."
      },
      {
        "title": "Relier en 1-â˜†",
        "detail": "Dans la vue ModÃ¨le, relier chaque dimension Ã  la fact table via les clÃ©s. VÃ©rifier la cardinalitÃ© 1-â˜†.",
        "tip": "La fact table est toujours du cÃ´tÃ© â˜† dans les relations.",
        "pitfall": "Des relations bidirectionnelles inutiles ralentissent le modÃ¨le."
      }
    ],
    "exercise": {
      "title": "DÃ©couper SalesFlat en 4 tables",
      "instructions": "1. Identifie les mesures et les clÃ©s dans SalesFlat. 2. CrÃ©e DimProduct, DimCustomer, DimDate. 3. Relie-les Ã  FactSales en 1-â˜†.",
      "hints": [
        "La fact table ne garde que les clÃ©s et les montants",
        "Chaque dimension a une clÃ© unique",
        "VÃ©rifie la cardinalitÃ© de chaque relation"
      ],
      "dataset": "bloc4-l5-star-schema.csv"
    },
    "solution": {
      "steps": [
        "Isoler les colonnes de mesures dans FactSales",
        "CrÃ©er DimProduct (clÃ© ProductID + infos produit)",
        "CrÃ©er DimCustomer (clÃ© CustomerID + infos client)",
        "CrÃ©er DimDate (clÃ© Date complÃ¨te)",
        "Relier chaque dimension Ã  FactSales en 1-â˜†"
      ],
      "explanation": "Le star schema sÃ©pare les faits des attributs. C'est le modÃ¨le le plus performant et maintenable dans Power BI."
    },
    "pitfalls": [
      {
        "trap": "Many-to-many Ã©vitable",
        "fix": "DÃ©dupliquer les dimensions et vÃ©rifier que chaque clÃ© est unique."
      },
      {
        "trap": "Relations bidirectionnelles inutiles",
        "fix": "Garder le filtre simple (dimension â†’ fact) sauf cas trÃ¨s spÃ©cifique."
      }
    ],
    "quiz": {
      "question": "Que contient principalement la table de faits ?",
      "options": [
        "Descriptions dÃ©taillÃ©es des produits",
        "Mesures + clÃ©s de dimensions",
        "Uniquement des dates"
      ],
      "answer": 1,
      "difficulty": "DÃ©butant",
      "explanation": "La fact table stocke les Ã©vÃ©nements mesurables reliÃ©s aux dimensions."
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
    "difficulty": "DÃ©butant",
    "why": "Pas de calendrier = analyses temporelles impossibles. La table calendrier est obligatoire pour tout modÃ¨le sÃ©rieux.",
    "example": {
      "scenario": "Comparer N vs N-1 et cumul mensuel sur les ventes.",
      "data": "FactSales avec OrderDate en clÃ©, mais pas de table DimDate complÃ¨te.",
      "goal": "CrÃ©er DimDate complÃ¨te avec AnnÃ©e, Mois, Trimestre, et relation active vers FactSales."
    },
    "steps": [
      {
        "title": "CrÃ©er DimDate",
        "detail": "Utiliser CALENDARAUTO() ou crÃ©er une table de dates couvrant toute la pÃ©riode du modÃ¨le.",
        "tip": "La table doit couvrir du premier au dernier jour de donnÃ©es, sans trous.",
        "pitfall": "Une table de dates incomplÃ¨te fausse les calculs YTD et SAMEPERIODLASTYEAR."
      },
      {
        "title": "Marquer table de dates",
        "detail": "Clic droit sur la table > Marquer comme table de dates. SÃ©lectionner la colonne Date.",
        "tip": "Cela active automatiquement les fonctions de time intelligence DAX.",
        "pitfall": "Oublier cette Ã©tape empÃªche SAMEPERIODLASTYEAR et TOTALYTD de fonctionner."
      },
      {
        "title": "Relier Ã  FactSales",
        "detail": "CrÃ©er la relation DimDate[Date] â†’ FactSales[OrderDate] en 1-â˜†.",
        "tip": "Ajouter les colonnes AnnÃ©e, Mois, Trimestre avec un tri correct.",
        "pitfall": "Mois triÃ©s alphabÃ©tiquement dans les visuels = erreur classique."
      }
    ],
    "exercise": {
      "title": "Ajouter AnnÃ©e, Mois, Trimestre triÃ©s correctement",
      "instructions": "1. CrÃ©e une table DimDate avec CALENDARAUTO(). 2. Ajoute les colonnes AnnÃ©e, Mois (nom et numÃ©ro), Trimestre. 3. Marque comme table de dates. 4. Relie Ã  FactSales.",
      "hints": [
        "CALENDARAUTO() dÃ©tecte les dates du modÃ¨le",
        "Trie les mois par numÃ©ro, pas par nom",
        "Marquer comme table de dates active les fonctions temporelles"
      ],
      "dataset": "bloc4-l6-calendrier.csv"
    },
    "solution": {
      "steps": [
        "CALENDARAUTO()",
        "Ajouter AnnÃ©e = YEAR([Date])",
        "Ajouter Mois = FORMAT([Date], 'MMM') + NÂ°Mois = MONTH([Date])",
        "Sort By Column: Mois par NÂ°Mois",
        "Marquer comme table de dates",
        "Relier DimDate â†’ FactSales"
      ],
      "explanation": "La table calendrier est indispensable. Sans elle, les calculs temporels DAX ne fonctionnent pas correctement."
    },
    "pitfalls": [
      {
        "trap": "Mois triÃ©s alphabÃ©tiquement",
        "fix": "Utiliser Sort By Column pour trier les mois par leur numÃ©ro."
      },
      {
        "trap": "PÃ©riode incomplÃ¨te",
        "fix": "S'assurer que la table couvre du min au max de toutes les dates du modÃ¨le."
      }
    ],
    "quiz": {
      "question": "Pourquoi marquer la table calendrier comme table de dates ?",
      "options": [
        "Pour colorer les visuels",
        "Pour accÃ©lÃ©rer le refresh",
        "Pour fiabiliser la time intelligence"
      ],
      "answer": 2,
      "difficulty": "DÃ©butant",
      "explanation": "Les fonctions temporelles DAX dÃ©pendent d'une vraie table de dates."
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
    "difficulty": "DÃ©butant",
    "why": "Les mesures sont les calculs centraux du rapport. Sans mesures bien nommÃ©es et protÃ©gÃ©es, le modÃ¨le est fragile.",
    "example": {
      "scenario": "CrÃ©er les KPI du rapport : CA, clients uniques, panier moyen.",
      "data": "FactSales avec Revenue, CustomerID, OrderID.",
      "goal": "Trois mesures centralisÃ©es dans une table _Measures."
    },
    "steps": [
      {
        "title": "CrÃ©er les mesures de base",
        "detail": "CA = SUM(FactSales[Revenue]). Clients = DISTINCTCOUNT(FactSales[CustomerID]). Panier Moyen = DIVIDE([CA], [Clients]).",
        "tip": "Toujours utiliser DIVIDE au lieu de / pour Ã©viter la division par zÃ©ro.",
        "pitfall": "Une colonne calculÃ©e Ã  la place d'une mesure est une erreur frÃ©quente de dÃ©butant."
      },
      {
        "title": "Utiliser DIVIDE",
        "detail": "DIVIDE(numerateur, denominateur, alternative) gÃ¨re la division par zÃ©ro proprement.",
        "tip": "Le 3e argument de DIVIDE est optionnel mais recommandÃ© (ex: BLANK() ou 0).",
        "pitfall": "DIVIDE oubliÃ© provoque des erreurs quand le dÃ©nominateur vaut zÃ©ro."
      },
      {
        "title": "Nommer proprement",
        "detail": "Placer toutes les mesures dans une table dÃ©diÃ©e _Measures. PrÃ©fixer : CA Total, Clients Uniques, Panier Moyen.",
        "tip": "Un nom de mesure doit expliciter ce qu'elle calcule. Ã‰viter 'Mesure1'.",
        "pitfall": "Des noms vagues rendent le modÃ¨le impossible Ã  maintenir."
      }
    ],
    "exercise": {
      "title": "CrÃ©er 3 mesures et les afficher dans des cartes KPI",
      "instructions": "1. CrÃ©e une table _Measures. 2. CrÃ©e CA, Clients Uniques, Panier Moyen. 3. Affiche les 3 dans des visuels carte.",
      "hints": [
        "SUM pour le CA total",
        "DISTINCTCOUNT pour les clients uniques",
        "DIVIDE pour le panier moyen"
      ],
      "dataset": "bloc5-l7-mesures-dax.csv"
    },
    "solution": {
      "steps": [
        "CrÃ©er table _Measures",
        "CA = SUM(FactSales[Revenue])",
        "Clients = DISTINCTCOUNT(FactSales[CustomerID])",
        "Panier Moyen = DIVIDE([CA], [Clients])",
        "Afficher dans 3 cartes KPI"
      ],
      "explanation": "Les mesures centralisÃ©es dans _Measures sont rÃ©utilisables partout. DIVIDE protÃ¨ge les divisions."
    },
    "pitfalls": [
      {
        "trap": "Colonnes calculÃ©es au lieu des mesures",
        "fix": "Une mesure est Ã©valuÃ©e au moment du visuel, une colonne calculÃ©e est stockÃ©e. PrÃ©fÃ©rer la mesure."
      },
      {
        "trap": "DIVIDE oubliÃ©",
        "fix": "Toujours utiliser DIVIDE au lieu de l'opÃ©rateur / pour les ratios."
      }
    ],
    "quiz": {
      "question": "Quelle fonction protÃ¨ge un ratio contre la division par zÃ©ro ?",
      "options": [
        "SUMX",
        "DIVIDE",
        "FILTER"
      ],
      "answer": 1,
      "difficulty": "DÃ©butant",
      "explanation": "DIVIDE gÃ¨re proprement les cas oÃ¹ le dÃ©nominateur vaut zÃ©ro."
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
    "difficulty": "IntermÃ©diaire",
    "why": "CALCULATE est la fonction la plus importante du DAX. Comprendre le contexte de filtre est la clÃ© de tout calcul avancÃ©.",
    "example": {
      "scenario": "Comparer le CA France au CA total pour calculer la part de la France.",
      "data": "FactSales avec Revenue et Country. CA France vs CA Total.",
      "goal": "CrÃ©er [CA France] et [% France] avec CALCULATE."
    },
    "steps": [
      {
        "title": "Mesure de base",
        "detail": "CA = SUM(FactSales[Revenue]). C'est la mesure qui sera modifiÃ©e par CALCULATE.",
        "tip": "Toujours partir d'une mesure de base simple avant d'utiliser CALCULATE.",
        "pitfall": "CrÃ©er une mesure complexe sans avoir la mesure de base d'abord."
      },
      {
        "title": "Mesure filtrÃ©e",
        "detail": "CA France = CALCULATE([CA], DimCountry[Country] = \"France\"). CALCULATE modifie le contexte de filtre.",
        "tip": "CALCULATE dit : 'Ã©value [CA] dans un contexte oÃ¹ Country = France'.",
        "pitfall": "Filtre mal appliquÃ© = rÃ©sultat incohÃ©rent. Toujours vÃ©rifier dans un tableau."
      },
      {
        "title": "Mesure de pourcentage",
        "detail": "% France = DIVIDE([CA France], [CA]). Le numÃ©rateur est filtrÃ©, le dÃ©nominateur est total.",
        "tip": "Tester la mesure dans une table avec et sans slicer pour vÃ©rifier le comportement.",
        "pitfall": "Confondre le contexte de filtre et le contexte de ligne est une erreur classique."
      }
    ],
    "exercise": {
      "title": "CrÃ©er [% France] et vÃ©rifier par segment",
      "instructions": "1. CrÃ©e [CA]. 2. CrÃ©e [CA France] avec CALCULATE. 3. CrÃ©e [% France] = DIVIDE. 4. VÃ©rifie avec un slicer Country.",
      "hints": [
        "CALCULATE modifie le contexte de filtre",
        "Le slicer ne doit pas affecter le dÃ©nominateur de % France",
        "Teste la mesure dans un tableau"
      ],
      "dataset": "bloc5-l8-calculate.csv"
    },
    "solution": {
      "steps": [
        "CA = SUM(FactSales[Revenue])",
        "CA France = CALCULATE([CA], DimCountry[Country] = \"France\")",
        "% France = DIVIDE([CA France], [CA])",
        "VÃ©rifier : total = 100%, France = part relative"
      ],
      "explanation": "CALCULATE permet de recalculer une mesure dans un contexte de filtre modifiÃ©. C'est la base des KPI segmentÃ©s."
    },
    "pitfalls": [
      {
        "trap": "Filtre mal appliquÃ©",
        "fix": "Toujours tester la mesure dans un tableau croisÃ© avec les dimensions concernÃ©es."
      },
      {
        "trap": "Contexte non compris",
        "fix": "Relire la formule en pensant : 'quel est le contexte de filtre Ã  chaque endroit ?'"
      }
    ],
    "quiz": {
      "question": "CALCULATE sert principalement Ã  :",
      "options": [
        "CrÃ©er des relations",
        "Changer le contexte de filtre",
        "Importer des CSV"
      ],
      "answer": 1,
      "difficulty": "IntermÃ©diaire",
      "explanation": "CALCULATE Ã©value une mesure dans un contexte de filtre modifiÃ©."
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
    "difficulty": "IntermÃ©diaire",
    "why": "Comparer les performances dans le temps est le besoin nÂ°1 de tout dashboard mÃ©tier.",
    "example": {
      "scenario": "Afficher l'Ã©volution du CA annuel : CA N, CA N-1, et % de variation.",
      "data": "FactSales avec Revenue et OrderDate liÃ© Ã  DimDate marquÃ©e.",
      "goal": "Trois mesures : [CA N-1], [% Evolution], affichÃ©es dans un graphique annuel."
    },
    "steps": [
      {
        "title": "CrÃ©er [CA N-1]",
        "detail": "CA N-1 = CALCULATE([CA], SAMEPERIODLASTYEAR(DimDate[Date])). NÃ©cessite une table de dates marquÃ©e.",
        "tip": "SAMEPERIODLASTYEAR est le raccourci le plus courant pour les comparaisons annuelles.",
        "pitfall": "Sans table de dates marquÃ©e, cette fonction retourne une erreur."
      },
      {
        "title": "CrÃ©er [% Evolution]",
        "detail": "% Evolution = DIVIDE([CA] - [CA N-1], [CA N-1]). Afficher en % avec 1 dÃ©cimale.",
        "tip": "Toujours gÃ©rer le cas N-1 = 0 avec DIVIDE.",
        "pitfall": "Une pÃ©riode N-1 incomplÃ¨te peut fausser la comparaison."
      },
      {
        "title": "Valider sur pÃ©riode complÃ¨te",
        "detail": "VÃ©rifier que les donnÃ©es N-1 couvrent la mÃªme pÃ©riode que l'annÃ©e en cours.",
        "tip": "Comparer janvier Ã  janvier, pas janvier Ã  cumul annuel.",
        "pitfall": "Comparer des pÃ©riodes de longueur diffÃ©rente donne des conclusions erronÃ©es."
      }
    ],
    "exercise": {
      "title": "Afficher un graphique annuel avec Ã©volution",
      "instructions": "1. CrÃ©e [CA]. 2. CrÃ©e [CA N-1] avec SAMEPERIODLASTYEAR. 3. CrÃ©e [% Evolution]. 4. Affiche dans un graphique en colonnes.",
      "hints": [
        "La table DimDate doit Ãªtre marquÃ©e comme table de dates",
        "SAMEPERIODLASTYEAR nÃ©cessite une relation active",
        "DIVIDE protÃ¨ge contre la division par zÃ©ro"
      ],
      "dataset": "bloc5-l9-time-intelligence.csv"
    },
    "solution": {
      "steps": [
        "CA = SUM(FactSales[Revenue])",
        "CA N-1 = CALCULATE([CA], SAMEPERIODLASTYEAR(DimDate[Date]))",
        "% Evolution = DIVIDE([CA] - [CA N-1], [CA N-1])",
        "Graphique en colonnes : CA N et CA N-1 par annÃ©e"
      ],
      "explanation": "Time intelligence nÃ©cessite une table calendrier correcte. Elle permet les comparaisons temporelles essentielles."
    },
    "pitfalls": [
      {
        "trap": "Table date absente",
        "fix": "Toujours crÃ©er et marquer une table de dates avant d'utiliser les fonctions de time intelligence."
      },
      {
        "trap": "PÃ©riodes incomplÃ¨tes",
        "fix": "VÃ©rifier que les donnÃ©es N-1 couvrent exactement la mÃªme pÃ©riode que N."
      }
    ],
    "quiz": {
      "question": "Quelle fonction DAX est classique pour comparer N Ã  N-1 ?",
      "options": [
        "SAMEPERIODLASTYEAR",
        "ALLEXCEPT",
        "TOPN"
      ],
      "answer": 0,
      "difficulty": "IntermÃ©diaire",
      "explanation": "SAMEPERIODLASTYEAR retourne la pÃ©riode Ã©quivalente de l'annÃ©e prÃ©cÃ©dente."
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
    "difficulty": "DÃ©butant",
    "why": "Un dashboard doit aider Ã  la dÃ©cision, pas Ã©taler des donnÃ©es. La clartÃ© est plus importante que la quantitÃ© d'informations.",
    "example": {
      "scenario": "Page ventes pour direction commerciale â€” 12 visuels encombrÃ©s.",
      "data": "FactSales avec toutes les dimensions disponibles.",
      "goal": "5 visuels clÃ©s, hiÃ©rarchie claire, message mÃ©tier explicite."
    },
    "steps": [
      {
        "title": "DÃ©finir une question business",
        "detail": "Avant de choisir un visuel, se demander : quelle question cette page doit-elle rÃ©pondre ?",
        "tip": "Une page = une question principale. Ex : 'Les ventes suivent-elles l'objectif ?'",
        "pitfall": "Commencer par les visuels au lieu de la question mÃ¨ne Ã  la surcharge."
      },
      {
        "title": "Limiter les visuels",
        "detail": "Maximum 5 visuels par page : 1 KPI principal, 1 tendance, 1 comparaison, 1 dÃ©tail, 1 segment.",
        "tip": "Chaque visuel doit rÃ©pondre Ã  une sous-question du thÃ¨me principal.",
        "pitfall": "Ajouter des visuels 'au cas oÃ¹' dilue le message."
      },
      {
        "title": "Appliquer une grille cohÃ©rente",
        "detail": "Utiliser l'alignement Power BI, espaces rÃ©guliers, taille de police cohÃ©rente (titres 14pt, donnÃ©es 10pt).",
        "tip": "La hiÃ©rarchie visuelle guide l'Å“il : grand KPI en haut Ã  gauche, dÃ©tails en bas.",
        "pitfall": "Des tailles de police incohÃ©rentes rendent la page confuse."
      }
    ],
    "exercise": {
      "title": "Refondre une page surchargÃ©e en page claire",
      "instructions": "1. Identifie la question principale de la page. 2. SÃ©lectionne 5 visuels maximum. 3. Organise avec une hiÃ©rarchie visuelle claire.",
      "hints": [
        "Une question = une page",
        "5 visuels max par page",
        "Le KPI principal en haut Ã  gauche"
      ],
      "dataset": "bloc7-l10-dashboard.csv"
    },
    "solution": {
      "steps": [
        "Identifier la question : 'Les ventes suivent-elles l'objectif ?'",
        "KPI principal : CA vs Objectif",
        "Tendance : Courbe mensuelle",
        "Comparaison : N vs N-1",
        "DÃ©tail : Table par rÃ©gion",
        "Segment : Slicer catÃ©gorie"
      ],
      "explanation": "Un dashboard clair rÃ©pond Ã  une question. La hiÃ©rarchie visuelle guide le regard vers l'essentiel."
    },
    "pitfalls": [
      {
        "trap": "Trop de couleurs",
        "fix": "Utiliser 2-3 couleurs maximum, avec une couleur pour l'accent."
      },
      {
        "trap": "Trop de graphiques",
        "fix": "Se limiter Ã  5 visuels par page. Chaque visuel doit justifier sa place."
      },
      {
        "trap": "Pas de message",
        "fix": "Commencer par la question mÃ©tier, pas par le choix des visuels."
      }
    ],
    "quiz": {
      "question": "Objectif principal d'un dashboard mÃ©tier :",
      "options": [
        "Montrer tous les graphiques possibles",
        "Aider la dÃ©cision",
        "Utiliser un maximum de couleurs"
      ],
      "answer": 1,
      "difficulty": "DÃ©butant",
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
    "difficulty": "DÃ©butant",
    "why": "L'interactivitÃ© fait la diffÃ©rence entre un rapport statique et un outil de dÃ©cision. Slicers, drill-down et navigation guident l'utilisateur.",
    "example": {
      "scenario": "Analyse ventes par rÃ©gion > pays > ville avec filtres et navigation.",
      "data": "FactSales avec DimRegion hiÃ©rarchique.",
      "goal": "Rapport interactif avec slicers, hiÃ©rarchie drill-down et boutons de navigation."
    },
    "steps": [
      {
        "title": "Configurer les slicers",
        "detail": "Ajouter des slicers sur les dimensions clÃ©s (AnnÃ©e, RÃ©gion, CatÃ©gorie). Les synchroniser entre pages.",
        "tip": "Limiter le nombre de slicers Ã  3-4 maximum pour ne pas surcharger.",
        "pitfall": "Trop de slicers rendent le rapport confus et lent."
      },
      {
        "title": "Activer le drill-down",
        "detail": "CrÃ©er une hiÃ©rarchie RÃ©gion > Pays > Ville. L'activer sur l'axe du graphique.",
        "tip": "Le drill-down fonctionne sur les graphiques en barres, colonnes et cartes.",
        "pitfall": "Oublier de crÃ©er la hiÃ©rarchie empÃªche le drill-down."
      },
      {
        "title": "CrÃ©er des boutons de navigation",
        "detail": "InsÃ©rer > Boutons > Naviguer. Relier chaque bouton Ã  une page cible.",
        "tip": "Ajouter des info-bulles aux boutons pour guider l'utilisateur.",
        "pitfall": "Navigation sans bouton retour = expÃ©rience frustrante."
      }
    ],
    "exercise": {
      "title": "CrÃ©er une navigation RÃ©sumÃ© â†’ DÃ©tail Produit",
      "instructions": "1. CrÃ©e une page RÃ©sumÃ© avec KPI et slicer RÃ©gion. 2. CrÃ©e une page DÃ©tail avec tableau produits. 3. Ajoute des boutons de navigation.",
      "hints": [
        "Slicer synchronisÃ© entre les pages",
        "HiÃ©rarchie RÃ©gion > Pays pour le drill-down",
        "Bouton Retour sur chaque page"
      ],
      "dataset": "bloc7-l11-slicers.csv"
    },
    "solution": {
      "steps": [
        "Page RÃ©sumÃ© : KPI + slicer RÃ©gion",
        "Page DÃ©tail : tableau produits filtrÃ©",
        "Bouton 'Voir dÃ©tail' â†’ page DÃ©tail",
        "Bouton 'Retour' â†’ page RÃ©sumÃ©"
      ],
      "explanation": "L'interactivitÃ© guide l'utilisateur dans son analyse. Slicers et drill-down rÃ©duisent le nombre de pages nÃ©cessaires."
    },
    "pitfalls": [
      {
        "trap": "Trop de slicers",
        "fix": "Se limiter Ã  3-4 slicersMaximum, synchronisÃ©s entre pages."
      },
      {
        "trap": "Navigation confuse",
        "fix": "Toujours inclure un bouton retour et garder la navigation cohÃ©rente."
      }
    ],
    "quiz": {
      "question": "Le drill-down permet de :",
      "options": [
        "Descendre dans le dÃ©tail",
        "CrÃ©er une nouvelle source",
        "Changer le thÃ¨me"
      ],
      "answer": 0,
      "difficulty": "DÃ©butant",
      "explanation": "Le drill-down passe d'un niveau agrÃ©gÃ© Ã  un niveau plus dÃ©taillÃ©."
    },
    "downloadFile": "datasets/bloc7-l11-slicers.csv",
    "nextLesson": "l12",
    "prerequisites": [
      "l10"
    ]
  },
  {
    "id": "l12",
    "title": "Cas mÃ©tier complet NovaRetail",
    "track": "bi",
    "moduleId": "b8",
    "difficulty": "IntermÃ©diaire",
    "why": "Assembler toutes les compÃ©tences dans un projet de bout en bout est la meilleure faÃ§on de consolider les acquis.",
    "example": {
      "scenario": "ComitÃ© de direction mensuel â€” rapport ventes complet.",
      "data": "Sources hÃ©tÃ©rogÃ¨nes : ventes CSV, produits Excel, budget SQL.",
      "goal": "Pipeline propre + dashboard + recommandations actionnables."
    },
    "steps": [
      {
        "title": "Ingestion",
        "detail": "Importer les 3 sources (CSV ventes, Excel produits, SQL budget) dans Power Query.",
        "tip": "Nommer chaque requÃªte clairement dÃ¨s l'import.",
        "pitfall": "Ne pas qualifier les sources dÃ¨s le dÃ©part rend le flux illisible."
      },
      {
        "title": "Nettoyage",
        "detail": "Typer, dÃ©dupliquer, gÃ©rer les nulls sur chaque source. ParamÃ©trer les chemins.",
        "tip": "Repasser les leÃ§ons L1-L4 si nÃ©cessaire.",
        "pitfall": "Sauter le nettoyage donne des calculs faux plus tard."
      },
      {
        "title": "ModÃ©lisation",
        "detail": "Construire le star schema : FactSales + DimProduct + DimCustomer + DimDate.",
        "tip": "VÃ©rifier les cardinalitÃ©s et les relations.",
        "pitfall": "Un modÃ¨le mal structurÃ© ne peut pas Ãªtre sauvÃ© par des visuels."
      },
      {
        "title": "Mesures",
        "detail": "CrÃ©er les mesures clÃ©s : CA, Marge, % Marge, N vs N-1, Top 10 clients.",
        "tip": "Placer toutes les mesures dans _Measures.",
        "pitfall": "Des mesures dispersÃ©es rendent le modÃ¨le impossible Ã  maintenir."
      },
      {
        "title": "Storytelling",
        "detail": "Organiser les pages : RÃ©sumÃ© > Analyse > DÃ©tail. Ajouter slicers et navigation.",
        "tip": "Le rapport doit raconter une histoire avec une conclusion.",
        "pitfall": "Des pages sans fil narratif perdent l'attention du lecteur."
      }
    ],
    "exercise": {
      "title": "Livrer 5 insights actionnables + plan d'action",
      "instructions": "1. Importe et nettoie les 3 sources. 2. Construis le modÃ¨le. 3. CrÃ©e les mesures. 4. Construis le dashboard en 3 pages. 5. RÃ©dige 5 recommandations.",
      "hints": [
        "QualitÃ© des donnÃ©es d'abord",
        "ModÃ¨le en Ã©toile",
        "Mesures centralisÃ©es",
        "Histoire cohÃ©rente"
      ],
      "dataset": "bloc8-l12-novaretail.csv"
    },
    "solution": {
      "steps": [
        "Sources propres",
        "Star schema validÃ©",
        "Mesures DAX dans _Measures",
        "Dashboard 3 pages",
        "5 recommandations rÃ©digÃ©es"
      ],
      "explanation": "Le projet complet valide toutes les compÃ©tences acquises. La qualitÃ© du rÃ©sultat dÃ©pend de chaque Ã©tape."
    },
    "pitfalls": [
      {
        "trap": "Sauter la modÃ©lisation",
        "fix": "Le modÃ¨le est la fondation. Sans lui, les visuels sont instables."
      },
      {
        "trap": "Pas de validation mÃ©tier",
        "fix": "Toujours faire valider les chiffres par un expert mÃ©tier avant publication."
      }
    ],
    "quiz": {
      "question": "La derniÃ¨re Ã©tape d'un cas mÃ©tier complet est :",
      "options": [
        "Ajouter des couleurs",
        "Recommander une action mÃ©tier claire",
        "Dupliquer la page"
      ],
      "answer": 1,
      "difficulty": "IntermÃ©diaire",
      "explanation": "La valeur finale est la recommandation concrÃ¨te basÃ©e sur l'analyse."
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
    "title": "CardinalitÃ©s et sens de filtre",
    "track": "bi",
    "moduleId": "b4",
    "difficulty": "IntermÃ©diaire",
    "why": "Une mauvaise relation peut doubler les totaux ou les fausser. Comprendre cardinalitÃ©s et filtres est essentiel pour un modÃ¨le fiable.",
    "example": {
      "scenario": "Total incohÃ©rent Ã  cause d'un filtre bidirectionnel non voulu.",
      "data": "FactSales reliÃ©e Ã  DimProduct et DimCustomer, mais un filtre croisÃ© inattendu.",
      "goal": "Corriger les relations pour obtenir des totaux fiables."
    },
    "steps": [
      {
        "title": "Identifier la table de faits",
        "detail": "La fact table est au centre. Toutes les dimensions se lient Ã  elle, jamais entre elles directement (sauf exception).",
        "tip": "Dessiner le schÃ©ma sur papier avant de le construire dans Power BI.",
        "pitfall": "Lier des dimensions entre elles sans table pont crÃ©e de l'ambiguitÃ©."
      },
      {
        "title": "Corriger la cardinalitÃ©",
        "detail": "VÃ©rifier chaque relation : dimension (1) â†’ fait (â˜†). Si Power BI affiche â˜†-â˜†, il y a un problÃ¨me de clÃ©.",
        "tip": "Les relations â˜†-â˜† indiquent souvent des doublons dans la dimension.",
        "pitfall": "Une relation many-to-many inattendue double les totaux."
      },
      {
        "title": "Tester les totaux",
        "detail": "Placer [CA] dans un visuel sans filtre, puis avec chaque dimension. Le total doit rester identique.",
        "tip": "Si le total change en fonction du filtre appliquÃ©, le modÃ¨le a un problÃ¨me.",
        "pitfall": "Ne pas tester les totaux est la cause la plus frÃ©quente d'erreurs."
      }
    ],
    "exercise": {
      "title": "Corriger un modÃ¨le qui double le CA",
      "instructions": "1. Identifie la relation problÃ©matique. 2. Corrige la cardinalitÃ© ou le sens de filtre. 3. VÃ©rifie que le total CA est correct.",
      "hints": [
        "VÃ©rifie chaque relation dans la vue ModÃ¨le",
        "La dimension doit Ãªtre cÃ´tÃ© 1",
        "Teste le total avec et sans filtre"
      ],
      "dataset": "bloc4-l15-cardinalites.csv"
    },
    "solution": {
      "steps": [
        "Ouvrir la vue ModÃ¨le",
        "Identifier la relation â˜†-â˜† ou bidirectionnelle",
        "DÃ©dupliquer la dimension ou ajouter une table pont",
        "VÃ©rifier tous les totaux"
      ],
      "explanation": "Les cardinalitÃ©s et le sens de filtre dÃ©terminent comment les calculs se propagent. Un modÃ¨le propre = des totaux fiables."
    },
    "pitfalls": [
      {
        "trap": "Bidirectionnel inutile",
        "fix": "Garder le filtre simple (dimension â†’ fait) sauf besoin explicite."
      },
      {
        "trap": "ClÃ© non unique dans la dimension",
        "fix": "Supprimer les doublons sur la clÃ© de la dimension avant de crÃ©er la relation."
      }
    ],
    "quiz": {
      "question": "Le sens de filtre recommandÃ© par dÃ©faut est :",
      "options": [
        "Simple (dimension â†’ fait)",
        "Double",
        "Aucun"
      ],
      "answer": 0,
      "difficulty": "IntermÃ©diaire",
      "explanation": "Le filtre simple Ã©vite les ambiguÃ¯tÃ©s et les lenteurs."
    },
    "downloadFile": "datasets/bloc4-l15-cardinalites.csv",
    "nextLesson": "l20",
    "prerequisites": [
      "l5"
    ]
  },
  {
    "id": "l16",
    "title": "Variables et lisibilitÃ© des mesures",
    "track": "bi",
    "moduleId": "b5",
    "difficulty": "IntermÃ©diaire",
    "why": "Les variables DAX (VAR) rendent les mesures lisibles, maintenables et plus performantes.",
    "example": {
      "scenario": "Calculer la marge en pourcentage avec logique intermÃ©diaire.",
      "data": "FactSales avec Revenue et Cost. Marge % = (Revenue - Cost) / Revenue.",
      "goal": "Mesure lisible avec VAR pour calculer la marge %."
    },
    "steps": [
      {
        "title": "DÃ©couper en VAR",
        "detail": "VAR Revenue = SUM(FactSales[Revenue]). VAR Cost = SUM(FactSales[Cost]). RETURN DIVIDE(Revenue - Cost, Revenue).",
        "tip": "Chaque VAR doit avoir un nom explicite qui dÃ©crit sa valeur.",
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
        "detail": "En mode dÃ©veloppement, tester chaque VAR individuellement dans un visuel avant de les assembler.",
        "tip": "Utiliser une mesure temporaire pour valider chaque Ã©tape du calcul.",
        "pitfall": "Assembler des variables non testÃ©es rend le dÃ©bogage difficile."
      }
    ],
    "exercise": {
      "title": "RÃ©Ã©crire une mesure complexe avec VAR",
      "instructions": "1. Prends la mesure Marge % calculÃ©e en une ligne. 2. DÃ©coupe-la en variables explicites. 3. VÃ©rifie que le rÃ©sultat est identique.",
      "hints": [
        "VAR pour Revenue et Cost sÃ©parÃ©ment",
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
      "explanation": "Les variables rendent la mesure lisible, dÃ©bogable et performante. Chaque Ã©tape est nommÃ©e et testable."
    },
    "pitfalls": [
      {
        "trap": "Noms vagues",
        "fix": "Utiliser des noms descriptifs comme vRevenueTotal, vCostTotal."
      },
      {
        "trap": "Variables trop longues",
        "fix": "Si une mesure dÃ©passe 10 variables, la dÃ©couper en sous-mesures."
      }
    ],
    "quiz": {
      "question": "VAR en DAX sert surtout Ã  :",
      "options": [
        "Rendre la mesure plus lisible",
        "Importer des donnÃ©es",
        "CrÃ©er une relation"
      ],
      "answer": 0,
      "difficulty": "IntermÃ©diaire",
      "explanation": "VAR clarifie et simplifie le dÃ©bogage des mesures DAX."
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
    "difficulty": "AvancÃ©",
    "why": "Identifier les segments Ã  forte valeur permet de concentrer les efforts lÃ  oÃ¹ l'impact est maximum.",
    "example": {
      "scenario": "Top 10 clients et leur part du CA total.",
      "data": "FactSales avec CustomerID et Revenue.",
      "goal": "Mesure qui isole le Top 10 clients et calcule leur part relative."
    },
    "steps": [
      {
        "title": "CrÃ©er la mesure CA",
        "detail": "CA = SUM(FactSales[Revenue]). C'est la mesure de base pour le classement.",
        "tip": "Toujours partir d'une mesure de base simple.",
        "pitfall": "Essayer de crÃ©er le TOPN sans mesure de CA au prÃ©alable."
      },
      {
        "title": "CrÃ©er le TOPN",
        "detail": "CALCULATE([CA], TOPN(10, ALL(DimCustomer), [CA])). CrÃ©e une table virtuelle des 10 meilleurs.",
        "tip": "ALL est nÃ©cessaire pour ignorer le filtre actuel et classer globalement.",
        "pitfall": "Oublier ALL donne un classement dans le filtre actuel, pas global."
      },
      {
        "title": "Comparer au total",
        "detail": "% Top 10 = DIVIDE([CA Top 10], [CA]). La part relative montre la concentration.",
        "tip": "Si le Top 10 reprÃ©sente 80% du CA, la concentration est forte.",
        "pitfall": "Ne pas comparer au total ne donne pas la perspective."
      }
    ],
    "exercise": {
      "title": "Construire un indicateur part du Top 10",
      "instructions": "1. CrÃ©e [CA]. 2. CrÃ©e [CA Top 10] avec CALCULATE et TOPN. 3. CrÃ©e [% Top 10] = DIVIDE. 4. Affiche dans un visuel.",
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
        "trap": "Contexte de filtre oubliÃ©",
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
        "Garder les N meilleurs Ã©lÃ©ments",
        "CrÃ©er des dates",
        "Nettoyer les nulls"
      ],
      "answer": 0,
      "difficulty": "AvancÃ©",
      "explanation": "TOPN retourne les N premiÃ¨res lignes selon un tri."
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
    "difficulty": "IntermÃ©diaire",
    "why": "Le drill-through permet d'aller du rÃ©sumÃ© au dÃ©tail en un clic. Les tooltips personnalisÃ©s enrichissent l'analyse sans surcharger.",
    "example": {
      "scenario": "Passer d'une vue rÃ©gion Ã  un dÃ©tail produit en cliquant sur une barre.",
      "data": "FactSales reliÃ©e Ã  DimRegion et DimProduct.",
      "goal": "Page RÃ©sumÃ© avec tooltip, page DÃ©tail avec drill-through sur RÃ©gion."
    },
    "steps": [
      {
        "title": "CrÃ©er la page dÃ©tail",
        "detail": "Ajouter une page 'DÃ©tail Produit' avec un visuel table affichant les colonnes produit et CA.",
        "tip": "La page dÃ©tail doit rÃ©pondre Ã  la question 'qu'est-ce qui compose ce chiffre ?'",
        "pitfall": "Page dÃ©tail surchargÃ©e = l'utilisateur est noyÃ© dans l'information."
      },
      {
        "title": "Activer le drill-through",
        "detail": "Dans la page dÃ©tail, ajouter le champ RÃ©gion dans la zone 'Drill-through'. Un bouton retour apparaÃ®t.",
        "tip": "Le drill-through filtre automatiquement la page dÃ©tail sur la valeur cliquÃ©e.",
        "pitfall": "Oublier le champ drill-through empÃªche la navigation contextuelle."
      },
      {
        "title": "Ajouter un tooltip personnalisÃ©",
        "detail": "CrÃ©er une page tooltip avec un petit visuel (ex: CA par catÃ©gorie). Activer 'Type = Tooltip' dans les propriÃ©tÃ©s.",
        "tip": "Le tooltip apparaÃ®t au survol, sans cliquer. TrÃ¨s utile pour les KPI.",
        "pitfall": "Un tooltip trop grand gÃªne la lecture."
      }
    ],
    "exercise": {
      "title": "Activer le drill-through sur la rÃ©gion",
      "instructions": "1. CrÃ©e une page DÃ©tail Produit. 2. Ajoute Region dans Drill-through. 3. CrÃ©e un tooltip personnalisÃ©. 4. Teste la navigation depuis la page RÃ©sumÃ©.",
      "hints": [
        "Zone Drill-through dans le volet PropriÃ©tÃ©s",
        "Le bouton retour est ajoutÃ© automatiquement",
        "Tooltip = petite page avec Type = Tooltip"
      ],
      "dataset": "bloc7-l18-tooltips.csv"
    },
    "solution": {
      "steps": [
        "CrÃ©er page DÃ©tail Produit",
        "Ajouter Region dans Drill-through",
        "CrÃ©er tooltip avec CA par catÃ©gorie",
        "Naviguer depuis la page RÃ©sumÃ©"
      ],
      "explanation": "Drill-through et tooltips rendent le rapport interactif sans surcharger les pages."
    },
    "pitfalls": [
      {
        "trap": "Page dÃ©tail surchargÃ©e",
        "fix": "La page dÃ©tail doit rester focalisÃ©e sur l'analyse du contexte cliquÃ©."
      },
      {
        "trap": "Oublier le bouton retour",
        "fix": "Power BI ajoute un bouton retour automatiquement. Le garder visible."
      }
    ],
    "quiz": {
      "question": "Le drill-through sert Ã  :",
      "options": [
        "Aller vers une page de dÃ©tail filtrÃ©e",
        "Exporter en CSV",
        "Changer le thÃ¨me"
      ],
      "answer": 0,
      "difficulty": "IntermÃ©diaire",
      "explanation": "Drill-through transmet le contexte du point cliquÃ© vers une page de dÃ©tail."
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
    "difficulty": "AvancÃ©",
    "why": "Les relations many-to-many sont frÃ©quentes en entreprise. Les gÃ©rer proprement avec une bridge table Ã©vite les totaux gonflÃ©s.",
    "example": {
      "scenario": "Produits multi-catÃ©gories et ventes â€” un produit peut appartenir Ã  plusieurs catÃ©gories.",
      "data": "DimProduct (500 produits), DimCategory (20 catÃ©gories), relation M2M.",
      "goal": "Bridge table explicite ProdcutCategory et totaux fiables."
    },
    "steps": [
      {
        "title": "CrÃ©er la table pont",
        "detail": "CrÃ©er une table Bridge_ProductCategory avec ProductID et CategoryID comme clÃ©s. Chaque ligne = un lien produit-catÃ©gorie.",
        "tip": "La table pont doit avoir une clÃ© composite unique (ProductID + CategoryID).",
        "pitfall": "Doublons dans la table pont = totaux gonflÃ©s."
      },
      {
        "title": "Relier les dimensions",
        "detail": "Relier DimProduct â†’ Bridge (1-â˜†), DimCategory â†’ Bridge (1-â˜†). La bridge table est au milieu.",
        "tip": "La relation doit Ãªtre dimension â†’ pont â†’ fait, jamais dimension â† pont â†’ fait.",
        "pitfall": "Relation directe M2M sans pont = ambiguitÃ© de filtre."
      },
      {
        "title": "Tester la mesure",
        "detail": "Placer [CA] par Category dans un visuel. VÃ©rifier que le total correspond au CA global.",
        "tip": "Si le total change quand on filtre, le modÃ¨le a un problÃ¨me.",
        "pitfall": "Totaux incohÃ©rents = modÃ¨le M2M mal gÃ©rÃ©."
      }
    ],
    "exercise": {
      "title": "Corriger un M2M qui gonfle les totaux",
      "instructions": "1. Identifie la relation M2M problÃ©matique. 2. CrÃ©e la bridge table. 3. Relie les dimensions. 4. VÃ©rifie les totaux.",
      "hints": [
        "La bridge table relie les deux dimensions",
        "ClÃ© composite unique dans la bridge",
        "VÃ©rifie le total CA aprÃ¨s correction"
      ],
      "dataset": "bloc4-l20-many-to-many.csv"
    },
    "solution": {
      "steps": [
        "CrÃ©er Bridge_ProductCategory(ProductID, CategoryID)",
        "Relier DimProduct(1) â†’ Bridge(â˜†)",
        "Relier DimCategory(1) â†’ Bridge(â˜†)",
        "Supprimer la relation M2M directe",
        "VÃ©rifier totaux"
      ],
      "explanation": "La bridge table clarifie la relation M2M et empÃªche les totaux gonflÃ©s."
    },
    "pitfalls": [
      {
        "trap": "Relations directes ambiguÃ«s",
        "fix": "Toujours utiliser une bridge table pour les M2M, jamais une relation directe."
      },
      {
        "trap": "Doublons dans la bridge",
        "fix": "VÃ©rifier la clÃ© composite unique avec Supprimer les doublons."
      }
    ],
    "quiz": {
      "question": "Pour gÃ©rer un many-to-many proprement, on ajoute :",
      "options": [
        "Une table pont",
        "Une colonne alÃ©atoire",
        "Un nouveau thÃ¨me"
      ],
      "answer": 0,
      "difficulty": "AvancÃ©",
      "explanation": "La bridge table rÃ©sout l'ambiguÃ¯tÃ© de filtre du M2M."
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
    "title": "SUMX et itÃ©rateurs",
    "track": "bi",
    "moduleId": "b6",
    "difficulty": "AvancÃ©",
    "why": "Les itÃ©rateurs DAX permettent des calculs ligne par ligne que SUM seul ne peut pas faire.",
    "example": {
      "scenario": "Calculer une marge pondÃ©rÃ©e : QuantitÃ© Ã— Marge unitaire par ligne.",
      "data": "FactSales avec Qty et MarginUnit par ligne de vente.",
      "goal": "Marge totale = SUMX(FactSales, Qty Ã— MarginUnit)."
    },
    "steps": [
      {
        "title": "DÃ©finir l'expression ligne",
        "detail": "L'expression FactSales[Qty] * FactSales[MarginUnit] calcule la marge pour chaque ligne de vente.",
        "tip": "L'expression est Ã©valuÃ©e dans le contexte de ligne de la table.",
        "pitfall": "Essayer d'utiliser SUM pour un calcul qui nÃ©cessite une multiplication ligne par ligne."
      },
      {
        "title": "Appliquer SUMX",
        "detail": "SUMX(FactSales, FactSales[Qty] * FactSales[MarginUnit]). ItÃ¨re sur chaque ligne, calcule l'expression, puis additionne.",
        "tip": "L'itÃ©rateur Ã©value d'abord l'expression pour chaque ligne, puis agrÃ¨ge.",
        "pitfall": "Confondre SUM et SUMX â€” SUM ne peut pas multiplier deux colonnes."
      },
      {
        "title": "Comparer au rÃ©sultat",
        "detail": "VÃ©rifier en ajoutant une colonne calculÃ©e et en sommant. Le rÃ©sultat doit Ãªtre identique.",
        "tip": "SUMX est prÃ©fÃ©rable Ã  une colonne calculÃ©e qui prend de l'espace.",
        "pitfall": "Ne pas vÃ©rifier le rÃ©sultat peut masquer une erreur de contexte."
      }
    ],
    "exercise": {
      "title": "Calculer une marge pondÃ©rÃ©e avec SUMX",
      "instructions": "1. CrÃ©e une mesure Marge Totale avec SUMX. 2. VÃ©rifie le rÃ©sultat contre une colonne calculÃ©e. 3. Affiche dans un visuel.",
      "hints": [
        "SUMX itÃ¨re sur chaque ligne de la table",
        "L'expression est Qty * MarginUnit",
        "Le rÃ©sultat est la somme de toutes les marges"
      ],
      "dataset": "bloc6-l21-iterateurs.csv"
    },
    "solution": {
      "steps": [
        "Marge Totale = SUMX(FactSales, FactSales[Qty] * FactSales[MarginUnit])",
        "VÃ©rifier avec une colonne calculÃ©e",
        "RÃ©sultat identique mais sans stockage supplÃ©mentaire"
      ],
      "explanation": "SUMX itÃ¨re ligne par ligne pour des calculs impossibles avec SUM seul."
    },
    "pitfalls": [
      {
        "trap": "Confondre SUM et SUMX",
        "fix": "SUM agrÃ¨ge une seule colonne. SUMX peut calculer une expression complexe par ligne."
      },
      {
        "trap": "Performance avec grande table",
        "fix": "Ã‰viter les SUMX imbriquÃ©s. PrÃ©fÃ©rer les mesures simples quand c'est possible."
      }
    ],
    "quiz": {
      "question": "SUMX effectue :",
      "options": [
        "ItÃ©ration ligne par ligne",
        "Filtrage visuel",
        "Tri automatique"
      ],
      "answer": 0,
      "difficulty": "AvancÃ©",
      "explanation": "SUMX Ã©value une expression pour chaque ligne de la table spÃ©cifiÃ©e."
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
    "difficulty": "AvancÃ©",
    "why": "Construire des ratios stables dans n'importe quel contexte de filtre est essentiel pour des KPI fiables.",
    "example": {
      "scenario": "Part du CA produit par rapport au total, stable mÃªme avec des slicers.",
      "data": "FactSales avec Revenue et DimProduct.",
      "goal": "[% Part Produit] = DIVIDE([CA], CALCULATE([CA], REMOVEFILTERS(DimProduct)))."
    },
    "steps": [
      {
        "title": "Mesure de base",
        "detail": "CA = SUM(FactSales[Revenue]). C'est le numÃ©rateur du ratio.",
        "tip": "Toujours partir d'une mesure de base simple.",
        "pitfall": "CrÃ©er le ratio sans mesure de base."
      },
      {
        "title": "Mesure total sans filtre",
        "detail": "CA Total = CALCULATE([CA], REMOVEFILTERS(DimProduct)). REMOVEFILTERS supprime les filtres sur la dimension.",
        "tip": "REMOVEFILTERS est la syntaxe moderne de ALL dans ce contexte.",
        "pitfall": "Retirer trop de filtres rend le ratio instable dans certains contextes."
      },
      {
        "title": "Ratio final",
        "detail": "% Part Produit = DIVIDE([CA], [CA Total]). Le numÃ©rateur est filtrÃ©, le dÃ©nominateur est le total.",
        "tip": "Tester avec un slicer produit : le numÃ©rateur change, le dÃ©nominateur reste stable.",
        "pitfall": "Tester le ratio sans slicer ne valide pas le comportement filtrÃ©."
      }
    ],
    "exercise": {
      "title": "CrÃ©er [% Part Produit] stable avec slicers",
      "instructions": "1. CrÃ©e [CA]. 2. CrÃ©e [CA Total] avec REMOVEFILTERS. 3. CrÃ©e [% Part Produit]. 4. Teste avec un slicer produit.",
      "hints": [
        "REMOVEFILTERS supprime les filtres sur la dimension",
        "Le total doit rester stable quand on filtre",
        "DIVIDE protÃ¨ge la division"
      ],
      "dataset": "bloc6-l22-all-removefilters.csv"
    },
    "solution": {
      "steps": [
        "CA = SUM(FactSales[Revenue])",
        "CA Total = CALCULATE([CA], REMOVEFILTERS(DimProduct))",
        "% Part = DIVIDE([CA], [CA Total])"
      ],
      "explanation": "REMOVEFILTERS permet de crÃ©er un dÃ©nominateur stable pour les ratios, indÃ©pendant des slicers."
    },
    "pitfalls": [
      {
        "trap": "Retirer trop de filtres",
        "fix": "SpÃ©cifier uniquement la dimension Ã  supprimer (REMOVEFILTERS(DimProduct)), pas ALL()."
      },
      {
        "trap": "Confondre ALL et REMOVEFILTERS",
        "fix": "REMOVEFILTERS est plus lisible et ne modifie que le contexte de filtre."
      }
    ],
    "quiz": {
      "question": "REMOVEFILTERS sert Ã  :",
      "options": [
        "Retirer des filtres dans le calcul",
        "Supprimer une table",
        "Changer la langue"
      ],
      "answer": 0,
      "difficulty": "AvancÃ©",
      "explanation": "REMOVEFILTERS modifie le contexte de calcul DAX en supprimant les filtres spÃ©cifiÃ©s."
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
    "title": "KPI avancÃ©s et alerts",
    "track": "bi",
    "moduleId": "b7",
    "difficulty": "AvancÃ©",
    "why": "Un KPI doit dire si la situation est bonne ou non. Les alertes visuelles rendent la dÃ©cision immÃ©diate.",
    "example": {
      "scenario": "Alerte marge < objectif â€” le vert ne suffit pas, il faut du rouge quand Ã§a ne va pas.",
      "data": "Marge = 68%, Objectif = 70%. Ã‰cart = -2 points.",
      "goal": "KPI avec couleur conditionnelle : vert si â‰¥ objectif, rouge sinon."
    },
    "steps": [
      {
        "title": "Mesure variance",
        "detail": "Variance = [Marge %] - [Objectif Marge]. CrÃ©er la mesure d'Ã©cart entre la valeur et l'objectif.",
        "tip": "L'objectif peut venir d'une table de budget ou d'un paramÃ¨tre.",
        "pitfall": "Ne pas avoir d'objectif explicite rend le KPI subjectif."
      },
      {
        "title": "Seuil d'alerte",
        "detail": "DÃ©finir un seuil clair : â‰¥ 70% = OK, < 70% = Attention, < 60% = Critique.",
        "tip": "Les seuils doivent Ãªtre validÃ©s avec le mÃ©tier.",
        "pitfall": "Seuils non partagÃ©s avec le mÃ©tier = KPI sans action."
      },
      {
        "title": "Mise en forme conditionnelle",
        "detail": "Dans le visuel carte, activer la mise en forme conditionnelle sur la couleur. Vert â‰¥ 70%, jaune 60-70%, rouge < 60%.",
        "tip": "Utiliser les rÃ¨gles de couleur plutÃ´t que les dÃ©gradÃ©s pour plus de lisibilitÃ©.",
        "pitfall": "Trop de nuances de couleur rendent le KPI illisible."
      }
    ],
    "exercise": {
      "title": "Ajouter un code couleur sur KPI marge",
      "instructions": "1. CrÃ©e [Marge %] et [Objectif Marge]. 2. CrÃ©e [Variance]. 3. Applique une mise en forme conditionnelle. 4. Teste avec diffÃ©rentes valeurs.",
      "hints": [
        "Variance = Marge % - Objectif",
        "RÃ¨gles de couleur : â‰¥ 70% vert, < 70% rouge",
        "Valider les seuils avec le mÃ©tier"
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
      "explanation": "Un KPI avec alerte visuelle rend la dÃ©cision immÃ©diate. Pas besoin de lire les chiffres pour savoir si Ã§a va."
    },
    "pitfalls": [
      {
        "trap": "Seuils non partagÃ©s avec le mÃ©tier",
        "fix": "Toujours valider les seuils avec les dÃ©cideurs avant publication."
      },
      {
        "trap": "Trop de nuances de couleur",
        "fix": "Se limiter Ã  3 niveaux : vert, jaune, rouge."
      }
    ],
    "quiz": {
      "question": "Un KPI alerting efficace doit :",
      "options": [
        "Avoir un seuil explicite",
        "ÃŠtre trÃ¨s dÃ©coratif",
        "Ignorer les objectifs"
      ],
      "answer": 0,
      "difficulty": "AvancÃ©",
      "explanation": "Le seuil rend le KPI dÃ©cisionnel et actionnable."
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
    "difficulty": "IntermÃ©diaire",
    "why": "Un rapport doit raconter une histoire, pas afficher des donnÃ©es sans lien. Le parcours guide le lecteur vers la dÃ©cision.",
    "example": {
      "scenario": "RÃ©sumÃ© direction â†’ dÃ©tail rÃ©gion â†’ dÃ©tail produit.",
      "data": "Dashboard multi-pages avec 3 niveaux de dÃ©tail.",
      "goal": "Parcours narratif clair : Quoi â†’ Pourquoi â†’ Action."
    },
    "steps": [
      {
        "title": "DÃ©finir le message",
        "detail": "Quel est le message principal du rapport ? Ex : 'Les ventes suivent l'objectif mais la marge baisse.'",
        "tip": "Le message doit tenir en une phrase.",
        "pitfall": "Pas de message clair = rapport qui ne guide pas."
      },
      {
        "title": "Ordre des pages",
        "detail": "Page 1 : RÃ©sumÃ© (KPI principaux). Page 2 : Causes (analyse). Page 3 : Actions (dÃ©tail et recommandations).",
        "tip": "Chaque page rÃ©pond Ã  une question soulevÃ©e par la page prÃ©cÃ©dente.",
        "pitfall": "Pages sans lien logique = parcours confus."
      },
      {
        "title": "Navigation guidÃ©e",
        "detail": "Ajouter des boutons de navigation clairs : 'Voir dÃ©tail', 'Retour au rÃ©sumÃ©'. Utiliser des signets pour les vues alternatives.",
        "tip": "L'utilisateur ne doit jamais se demander 'oÃ¹ aller ensuite ?'",
        "pitfall": "Navigation sans bouton retour = frustration."
      }
    ],
    "exercise": {
      "title": "Organiser 3 pages avec fil narratif",
      "instructions": "1. DÃ©finis le message principal. 2. CrÃ©e Page RÃ©sumÃ© (KPI). 3. CrÃ©e Page Causes. 4. CrÃ©e Page Actions. 5. Ajoute navigation entre les pages.",
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
        "Page 2 : Analyse par rÃ©gion/produit",
        "Page 3 : Actions recommandÃ©es",
        "Navigation entre pages"
      ],
      "explanation": "Le storytelling guide le lecteur. Chaque page doit rÃ©pondre Ã  la question soulevÃ©e par la page prÃ©cÃ©dente."
    },
    "pitfalls": [
      {
        "trap": "Pages sans lien logique",
        "fix": "Chaque page doit rÃ©pondre Ã  une question de la page prÃ©cÃ©dente."
      },
      {
        "trap": "Pas de bouton retour",
        "fix": "Ajouter un bouton retour sur chaque page de dÃ©tail."
      }
    ],
    "quiz": {
      "question": "Le storytelling multi-pages aide Ã  :",
      "options": [
        "Guider la dÃ©cision",
        "Ajouter des bugs",
        "Augmenter les clics inutiles"
      ],
      "answer": 0,
      "difficulty": "IntermÃ©diaire",
      "explanation": "Il structure la comprÃ©hension du dÃ©cideur."
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
    "title": "Projet RH guidÃ©",
    "track": "bi",
    "moduleId": "b8",
    "difficulty": "IntermÃ©diaire",
    "why": "Appliquer les compÃ©tences dans un cas concret RH consolide tous les acquis.",
    "example": {
      "scenario": "Dashboard RH opÃ©rationnel : effectif, turnover, absentÃ©isme.",
      "data": "Fichiers RH bruts avec donnÃ©es d'effectif, de dÃ©parts et d'absences.",
      "goal": "Dashboard RH prÃªt comitÃ© avec 3 recommandations actionnables."
    },
    "steps": [
      {
        "title": "Nettoyer RH",
        "detail": "Importer les fichiers, typer, dÃ©dupliquer, gÃ©rer les nulls sur les donnÃ©es d'effectif.",
        "tip": "Les donnÃ©es RH ont souvent des doublons et des dates incomplÃ¨tes.",
        "pitfall": "Les dates de dÃ©part manquantes crÃ©ent des calculs de turnover erronÃ©s."
      },
      {
        "title": "ModÃ©liser RH",
        "detail": "CrÃ©er FactEffectif + DimEmployee + DimDate. Star schema RH.",
        "tip": "La table d'effectif est la fact table. EmployÃ© et Date sont les dimensions.",
        "pitfall": "ModÃ¨le plat sans dimensions = visuels lents et calculs instables."
      },
      {
        "title": "Mesures RH",
        "detail": "CrÃ©er : Effectif, Nouveaux entrants, DÃ©parts, Taux Turnover, Taux AbsentÃ©isme.",
        "tip": "Turnover = DÃ©parts / Effectif moyen. Toujours DIVIDE pour les ratios.",
        "pitfall": "Turnover calculÃ© sur Effectif de fin de pÃ©riode au lieu de la moyenne."
      },
      {
        "title": "Visuels RH",
        "detail": "Courbes de tendance, comparaison N/N-1, top dÃ©partements, KPI turnover.",
        "tip": "Le visuel doit rÃ©pondre Ã  'OÃ¹ le turnover est-il un problÃ¨me et pourquoi ?'",
        "pitfall": "Visuels sans message RH actionable."
      }
    ],
    "exercise": {
      "title": "Livrer 3 recommandations RH basÃ©es sur les donnÃ©es",
      "instructions": "1. Importe et nettoie les donnÃ©es RH. 2. Construis le modÃ¨le. 3. CrÃ©e les mesures RH. 4. Construis le dashboard. 5. RÃ©dige 3 recommandations.",
      "hints": [
        "Effectif = DISTINCTCOUNT(EmployeeID)",
        "Turnover = DIVIDE(DÃ©parts, Effectif moyen)",
        "Segmentation par dÃ©partement"
      ],
      "dataset": "bloc8-l25-rh.csv"
    },
    "solution": {
      "steps": [
        "DonnÃ©es RH propres",
        "Star schema RH validÃ©",
        "Mesures : Effectif, Turnover, AbsentÃ©isme",
        "Dashboard RH 3 pages",
        "3 recommandations actionnables"
      ],
      "explanation": "Le projet RH relie les chiffres RH aux dÃ©cisions manager. La segmentation est clÃ©."
    },
    "pitfalls": [
      {
        "trap": "Indicateurs sans contexte temporel",
        "fix": "Toujours comparer N/N-1 et montrer la tendance."
      },
      {
        "trap": "Turnover sans segmentation",
        "fix": "Analyser par dÃ©partement, anciennetÃ© et catÃ©gorie pour identifier les leviers."
      }
    ],
    "quiz": {
      "question": "Un bon dashboard RH doit inclure :",
      "options": [
        "Turnover + absentÃ©isme",
        "Seulement des couleurs",
        "Aucune dimension temps"
      ],
      "answer": 0,
      "difficulty": "IntermÃ©diaire",
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
    "title": "Projet budget guidÃ©",
    "track": "bi",
    "moduleId": "b8",
    "difficulty": "AvancÃ©",
    "why": "Comparer budget vs rÃ©alisÃ© est le besoin fondamental du pilotage financier.",
    "example": {
      "scenario": "Centres de coÃ»ts mensuels â€” budget vs rÃ©alisÃ©.",
      "data": "Table budget (prÃ©visions) et table rÃ©alisÃ© (factuels) par centre de coÃ»t et mois.",
      "goal": "Dashboard variance et causes top 5 Ã©carts."
    },
    "steps": [
      {
        "title": "PrÃ©parer budget",
        "detail": "Importer la table budget, typer, et la relier au modÃ¨le (centre de coÃ»t + mois).",
        "tip": "Le budget est souvent en format large â€” unpivot les mois.",
        "pitfall": "Budget en format large = nÃ©cessite unpivot."
      },
      {
        "title": "Relier rÃ©alisÃ©",
        "detail": "Relier la table budget Ã  FactSales via DimDate et DimCostCenter.",
        "tip": "Budget et rÃ©alisÃ© doivent partager les mÃªmes dimensions.",
        "pitfall": "PÃ©riodes non alignÃ©es entre budget et rÃ©alisÃ©."
      },
      {
        "title": "Mesures d'Ã©cart",
        "detail": "Ã‰cart = [RÃ©alisÃ©] - [Budget]. Ã‰cart % = DIVIDE([Ã‰cart], [Budget]). Variance favorable/dÃ©favorable.",
        "tip": "Classer les Ã©carts par valeur absolue pour prioriser.",
        "pitfall": "Ne pas distinguer Ã©cart favorable et dÃ©favorable."
      },
      {
        "title": "Storytelling",
        "detail": "Page 1 : Vue globale des Ã©carts. Page 2 : Top 5 Ã©carts dÃ©favorables. Page 3 : Actions recommandÃ©es.",
        "tip": "Le rapport doit conduire Ã  l'action : oÃ¹ agir en prioritÃ© ?",
        "pitfall": "Dashboard sans plan d'action = exercice acadÃ©mique."
      }
    ],
    "exercise": {
      "title": "PrÃ©senter top 5 Ã©carts et actions",
      "instructions": "1. Importe budget et rÃ©alisÃ©. 2. Relie-les au modÃ¨le. 3. CrÃ©e les mesures d'Ã©cart. 4. Identifie les top 5 Ã©carts. 5. Propose des actions.",
      "hints": [
        "Unpivot le budget si nÃ©cessaire",
        "Ã‰cart = RÃ©alisÃ© - Budget",
        "Classer par valeur absolue"
      ],
      "dataset": "bloc8-l26-budget.csv"
    },
    "solution": {
      "steps": [
        "Budget unpivotÃ© et typÃ©",
        "Relier budget et rÃ©alisÃ© aux mÃªmes dimensions",
        "Ã‰cart = RÃ©alisÃ© - Budget",
        "Top 5 Ã©carts dÃ©favorables",
        "Plan d'action par centre de coÃ»t"
      ],
      "explanation": "Le projet budget montre oÃ¹ concentrer l'analyse. La variance est la base du pilotage financier."
    },
    "pitfalls": [
      {
        "trap": "PÃ©riodes non alignÃ©es",
        "fix": "VÃ©rifier que budget et rÃ©alisÃ© couvrent exactement les mÃªmes pÃ©riodes."
      },
      {
        "trap": "Ã‰carts sans priorisation",
        "fix": "Classer par valeur absolue et se concentrer sur les top 5."
      }
    ],
    "quiz": {
      "question": "Le KPI clÃ© du projet budget est :",
      "options": [
        "Ã‰cart budget-rÃ©alisÃ©",
        "Nombre de pages",
        "Couleur du thÃ¨me"
      ],
      "answer": 0,
      "difficulty": "AvancÃ©",
      "explanation": "L'Ã©cart est la base du pilotage budgÃ©taire."
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
    "title": "RLS (Row-Level Security) simplifiÃ©e",
    "track": "bi",
    "moduleId": "b4",
    "difficulty": "AvancÃ©",
    "why": "La sÃ©curitÃ© au niveau des lignes garantit que chaque utilisateur ne voit que ses donnÃ©es.",
    "example": {
      "scenario": "Chaque manager voit uniquement sa rÃ©gion dans le rapport.",
      "data": "DimRegion avec les rÃ©gions. Utilisateurs affectÃ©s Ã  des rÃ´les rÃ©gionaux.",
      "goal": "RÃ¨gle RLS par rÃ©gion : chaque manager ne voit que ses donnÃ©es."
    },
    "steps": [
      {
        "title": "CrÃ©er un rÃ´le",
        "detail": "ModÃ©lisation > GÃ©rer les rÃ´les > CrÃ©er un rÃ´le 'Manager RÃ©gion'. DÃ©finir le filtre sur DimRegion.",
        "tip": "Le rÃ´le filtre les donnÃ©es au niveau de la dimension, pas de la fact table.",
        "pitfall": "Filtrer directement la fact table au lieu de la dimension."
      },
      {
        "title": "Ã‰crire le filtre",
        "detail": "Dans le rÃ´le, ajouter : [Region] = USERNAME() ou [RegionEmail] = USERPRINCIPALNAME().",
        "tip": "USERPRINCIPALNAME() retourne l'email de l'utilisateur connectÃ©.",
        "pitfall": "Utiliser USERNAME() au lieu de USERPRINCIPALNAME() dans Power BI Service."
      },
      {
        "title": "Tester en mode rÃ´le",
        "detail": "ModÃ©lisation > Voir en tant que > SÃ©lectionner le rÃ´le et l'utilisateur pour vÃ©rifier le filtre.",
        "tip": "Toujours tester la RLS avant de publier le rapport.",
        "pitfall": "RLS non testÃ©e = donnÃ©es visibles par erreur."
      }
    ],
    "exercise": {
      "title": "CrÃ©er une RLS par rÃ©gion",
      "instructions": "1. CrÃ©e un rÃ´le 'Manager RÃ©gion'. 2. Ajoute le filtre sur DimRegion[Region]. 3. Teste en mode rÃ´le avec diffÃ©rents utilisateurs.",
      "hints": [
        "GÃ©rer les rÃ´les dans la vue ModÃ©lisation",
        "USERPRINCIPALNAME() dans Power BI Service",
        "Toujours tester en mode rÃ´le"
      ],
      "dataset": "bloc4-l28-rls.csv"
    },
    "solution": {
      "steps": [
        "CrÃ©er rÃ´le 'Manager RÃ©gion'",
        "Filtre : DimRegion[RegionEmail] = USERPRINCIPALNAME()",
        "Tester avec 'Voir en tant que'",
        "Publier et vÃ©rifier"
      ],
      "explanation": "RLS restreint les donnÃ©es visibles au niveau des lignes, basÃ© sur l'utilisateur connectÃ©."
    },
    "pitfalls": [
      {
        "trap": "RLS non testÃ©e avant publication",
        "fix": "Toujours utiliser 'Voir en tant que' pour simuler chaque rÃ´le."
      },
      {
        "trap": "Filtre sur la fact table",
        "fix": "Le filtre RLS doit toujours porter sur la dimension, pas sur la fact table."
      }
    ],
    "quiz": {
      "question": "La RLS sert Ã  :",
      "options": [
        "Restreindre les lignes visibles selon l'utilisateur",
        "AccÃ©lÃ©rer DAX",
        "Importer CSV"
      ],
      "answer": 0,
      "difficulty": "AvancÃ©",
      "explanation": "RLS filtre les donnÃ©es selon l'utilisateur connectÃ©."
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
    "difficulty": "AvancÃ©",
    "why": "Les KPI cumulÃ©s sont les indicateurs les plus demandÃ©s en entreprise. YTD, MTD, QTD sont indispensables.",
    "example": {
      "scenario": "Suivi CA cumulÃ© depuis dÃ©but d'annÃ©e et comparaison N-1.",
      "data": "FactSales reliÃ©e Ã  DimDate marquÃ©e comme table de dates.",
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
        "tip": "TOTALYTD accepte un 3e argument pour les exercices dÃ©calÃ©s.",
        "pitfall": "Table date incomplÃ¨te = YTD calculÃ© sur pÃ©riode partielle."
      },
      {
        "title": "Comparaison N-1",
        "detail": "CA YTD N-1 = CALCULATE([CA YTD], SAMEPERIODLASTYEAR(DimDate[Date])).",
        "tip": "Toujours comparer le YTD actuel au YTD de l'annÃ©e prÃ©cÃ©dente.",
        "pitfall": "Comparer YTD Ã  un mois spÃ©cifique de N-1 = non comparable."
      }
    ],
    "exercise": {
      "title": "Afficher YTD et variation vs YTD N-1",
      "instructions": "1. CrÃ©e [CA]. 2. CrÃ©e [CA YTD] avec TOTALYTD. 3. CrÃ©e [CA YTD N-1]. 4. CrÃ©e [% Variation YTD]. 5. Affiche dans un graphique.",
      "hints": [
        "TOTALYTD nÃ©cessite une table de dates marquÃ©e",
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
      "explanation": "YTD additionne depuis le dÃ©but de l'annÃ©e. La comparaison N-1 donne la tendance."
    },
    "pitfalls": [
      {
        "trap": "Table date incomplÃ¨te",
        "fix": "S'assurer que la table de dates couvre du 1er janvier au 31 dÃ©cembre."
      },
      {
        "trap": "PÃ©riodes non comparable",
        "fix": "Toujours comparer YTD Ã  YTD N-1, jamais Ã  un mois spÃ©cifique."
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
      "difficulty": "AvancÃ©",
      "explanation": "YTD calcule le cumul depuis le dÃ©but d'annÃ©e."
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
    "difficulty": "AvancÃ©",
    "why": "Le classement dynamique permet d'identifier les meilleurs Ã©lÃ©ments dans n'importe quel contexte de filtre.",
    "example": {
      "scenario": "Classement des commerciaux par CA, filtrable par rÃ©gion et pÃ©riode.",
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
        "detail": "Classement = RANKX(ALL(DimSalesperson), [CA]). RANKX Ã©value la mesure pour chaque ligne de la table et classe.",
        "tip": "ALL est nÃ©cessaire pour que le classement soit global, pas relatif au filtre actuel.",
        "pitfall": "Oublier ALL = classement dans le filtre actuel, pas global."
      },
      {
        "title": "Top N dynamique",
        "detail": "Ajouter un visuel avec filtre top N ou utiliser la mesure dans un visuel cartÃ©sien avec filtre [Classement] <= 5.",
        "tip": "Un slicer sur la pÃ©riode ne doit pas affecter le classement global si ALL est bien utilisÃ©.",
        "pitfall": "Classement figÃ© sans contexte de filtre."
      }
    ],
    "exercise": {
      "title": "Afficher top 5 commerciaux dynamiques",
      "instructions": "1. CrÃ©e [CA]. 2. CrÃ©e [Classement] avec RANKX. 3. Filtre top 5 dans un visuel. 4. Teste avec slicer rÃ©gion.",
      "hints": [
        "RANKX(ALL(DimSalesperson), [CA])",
        "Filtre visuel sur Classement <= 5",
        "Tester avec diffÃ©rents slicers"
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
        "trap": "Classement figÃ© sans contexte",
        "fix": "Utiliser ALL dans RANKX pour un classement global, ou un contexte partiel pour un classement relatif."
      },
      {
        "trap": "Performance sur grandes tables",
        "fix": "Ã‰viter les RANKX imbriquÃ©s et limiter le calcul aux N nÃ©cessaires."
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
      "difficulty": "AvancÃ©",
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
    "difficulty": "AvancÃ©",
    "why": "Un rapport professionnel doit Ãªtre lisible en 30 secondes. L'UX dÃ©termine l'adoption par les utilisateurs.",
    "example": {
      "scenario": "Refonte d'un rapport utilisÃ© en comitÃ© hebdo â€” 12 visuels, navigation confuse.",
      "data": "Rapport existant surchargÃ© Ã  refondre.",
      "goal": "3 pages maximum avec navigation claire et KPI visibles en 30 secondes."
    },
    "steps": [
      {
        "title": "Prioriser les KPIs",
        "detail": "SÃ©lectionner les 3 KPI les plus importants pour le comitÃ©. Les placer en haut de la page RÃ©sumÃ©.",
        "tip": "Moins mais mieux : 3 KPI forts valent mieux que 12 mÃ©triques floues.",
        "pitfall": "Surclasser les KPI dilue le message."
      },
      {
        "title": "Uniformiser le design",
        "detail": "Police cohÃ©rente (titres 14pt, donnÃ©es 10pt), palette limitÃ©e (3 couleurs max), fonds unis.",
        "tip": "L'alignement et l'espacement sont plus importants que les effets visuels.",
        "pitfall": "Polices et couleurs incohÃ©rentes = rapport amateur."
      },
      {
        "title": "Tester avec l'utilisateur",
        "detail": "PrÃ©senter le rapport Ã  un utilisateur cible et observer son parcours. Ajuster selon ses retours.",
        "tip": "L'utilisateur doit comprendre le message en 30 secondes sans explication.",
        "pitfall": "Ne pas tester = rapport qui ne sera pas utilisÃ©."
      }
    ],
    "exercise": {
      "title": "RÃ©organiser un rapport en 3 pages max",
      "instructions": "1. Identifie les 3 KPI prioritaires. 2. CrÃ©e 3 pages : RÃ©sumÃ©, Diagnostic, Action. 3. Uniformise le design. 4. Teste avec un collÃ¨gue.",
      "hints": [
        "3 KPI maximum en page RÃ©sumÃ©",
        "Palette de 3 couleurs",
        "Tester avec un vrai utilisateur"
      ],
      "dataset": "bloc7-l31-ux-reporting.csv"
    },
    "solution": {
      "steps": [
        "SÃ©lectionner 3 KPI prioritaires",
        "Page 1 : KPI + tendance",
        "Page 2 : Analyse causes",
        "Page 3 : Actions recommandÃ©es",
        "Design uniforme et test utilisateur"
      ],
      "explanation": "L'UX pro rend le rapport adoptable. 30 secondes pour comprendre le message."
    },
    "pitfalls": [
      {
        "trap": "Surcharge visuelle",
        "fix": "Supprimer tout visuel qui ne rÃ©pond pas directement Ã  la question principale."
      },
      {
        "trap": "Pas de test utilisateur",
        "fix": "Toujours tester avec un utilisateur rÃ©el avant de livrer."
      }
    ],
    "quiz": {
      "question": "Un bon UX reporting favorise :",
      "options": [
        "ComprÃ©hension rapide",
        "ComplexitÃ© maximale",
        "Couleurs alÃ©atoires"
      ],
      "answer": 0,
      "difficulty": "AvancÃ©",
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
    "difficulty": "AvancÃ©",
    "why": "Le ROI marketing est le KPI qui guide les arbitrages budgÃ©taires. Ce projet assemble toutes les compÃ©tences.",
    "example": {
      "scenario": "Campagnes multi-canaux (SEA, social, email) avec leur ROI respectif.",
      "data": "DÃ©penses marketing par canal, conversions et revenus associÃ©s.",
      "goal": "Dashboard ROI + plan d'action avec 3 arbitrages budgÃ©taires justifiÃ©s."
    },
    "steps": [
      {
        "title": "Nettoyer sources",
        "detail": "Importer les donnÃ©es de campagnes, dÃ©penses et conversions. Typer, dÃ©dupliquer, gÃ©rer les nulls.",
        "tip": "Les donnÃ©es marketing sont souvent multi-sources avec des formats hÃ©tÃ©rogÃ¨nes.",
        "pitfall": "Attribuer les conversions sans rÃ¨gle claire."
      },
      {
        "title": "ModÃ©liser canaux",
        "detail": "CrÃ©er FactCampaigns + DimChannel + DimDate. Star schema marketing.",
        "tip": "Le canal est une dimension clÃ© du modÃ¨le marketing.",
        "pitfall": "ModÃ¨le sans dimension canal = analyse impossible."
      },
      {
        "title": "Mesures ROI/CAC",
        "detail": "ROI = DIVIDE([Revenu Campagne] - [DÃ©pense Campagne], [DÃ©pense Campagne]). CAC = DIVIDE([DÃ©pense], [Nouveaux Clients]).",
        "tip": "Le ROI par canal permet les arbitrages budgÃ©taires.",
        "pitfall": "ROI sans tenir compte des coÃ»ts indirects."
      },
      {
        "title": "Restituer",
        "detail": "Dashboard : ROI par canal, Ã©volution mensuelle, top campagnes, recommandations.",
        "tip": "Le dashboard doit conduire aux dÃ©cisions : oÃ¹ investir plus, oÃ¹ rÃ©duire.",
        "pitfall": "Dashboard sans recommandation = exercice acadÃ©mique."
      }
    ],
    "exercise": {
      "title": "Proposer 3 arbitrages budgÃ©taires justifiÃ©s",
      "instructions": "1. Importe et nettoie les donnÃ©es marketing. 2. ModÃ©lise avec Star schema. 3. Calcule ROI et CAC par canal. 4. Propose 3 arbitrages.",
      "hints": [
        "ROI = (Revenu - DÃ©pense) / DÃ©pense",
        "CAC = DÃ©pense / Nouveaux Clients",
        "Comparer les canaux pour arbitrer"
      ],
      "dataset": "bloc8-l32-marketing.csv"
    },
    "solution": {
      "steps": [
        "DonnÃ©es propres multi-sources",
        "Star schema avec DimChannel",
        "ROI et CAC par canal",
        "Dashboard marketing 3 pages",
        "3 arbitrages : investir, rÃ©duire, tester"
      ],
      "explanation": "Le projet marketing relie dÃ©penses et rÃ©sultats pour guider les arbitrages budgÃ©taires."
    },
    "pitfalls": [
      {
        "trap": "Attribution des conversions sans rÃ¨gle claire",
        "fix": "DÃ©finir un modÃ¨le d'attribution (premier clic, dernier clic, multi-touch) avant le calcul."
      },
      {
        "trap": "ROI sans coÃ»ts indirects",
        "fix": "Inclure les coÃ»ts opÃ©rationnels dans le calcul du ROI."
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
      "difficulty": "AvancÃ©",
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
    "title": "ContrÃ´les paie et anomalies",
    "track": "bi",
    "moduleId": "b8",
    "difficulty": "AvancÃ©",
    "why": "DÃ©tecter automatiquement les Ã©carts de paie anormaux fait gagner des heures de contrÃ´le manuel.",
    "example": {
      "scenario": "Variation brut > 20% sans motif dÃ©clarÃ© sur les bulletins de paie.",
      "data": "Bulletins mensuels avec Brut, Net, Charges par employÃ©.",
      "goal": "Table anomalies priorisÃ©es avec statut de validation."
    },
    "steps": [
      {
        "title": "Importer bulletins",
        "detail": "Charger les bulletins de paie CSV/Excel. Typer les colonnes montant, vÃ©rifier les dates.",
        "tip": "Les montants de paie doivent Ãªtre en type DÃ©cimal avec locale franÃ§aise.",
        "pitfall": "Montants en texte = calculs impossibles."
      },
      {
        "title": "CrÃ©er rÃ¨gles de contrÃ´le",
        "detail": "Variation > 20% du brut d'un mois sur l'autre = anomalie. Montant net > brut = anomalie. Ã‰cart charges > 15% = anomalie.",
        "tip": "Chaque rÃ¨gle doit Ãªtre validÃ©e par le mÃ©tier (DRH, comptable).",
        "pitfall": "RÃ¨gles trop larges = trop de faux positifs."
      },
      {
        "title": "Prioriser anomalies",
        "detail": "Classer les anomalies par montant et par sÃ©vÃ©ritÃ©. Haute = Ã©cart > 30% ou montant > 50K. Moyenne = 20-30%. Basse = 15-20%.",
        "tip": "Se concentrer sur les anomalies haute prioritÃ© d'abord.",
        "pitfall": "Traiter toutes les anomalies pareil = perte de temps."
      }
    ],
    "exercise": {
      "title": "Construire un tableau anomalies paie mensuelles",
      "instructions": "1. Importe les bulletins. 2. Calcule la variation mensuelle. 3. Applique les rÃ¨gles de contrÃ´le. 4. Priorise les anomalies.",
      "hints": [
        "Variation = (Brut N - Brut N-1) / Brut N-1",
        "RÃ¨gles validÃ©es par le mÃ©tier",
        "PrioritÃ© haute > 30%, moyenne 20-30%"
      ],
      "dataset": "bloc8-l33-paie.csv"
    },
    "solution": {
      "steps": [
        "Importer et typer les bulletins",
        "Calculer variation mensuelle du brut",
        "Appliquer 3 rÃ¨gles de contrÃ´le",
        "Classer par sÃ©vÃ©ritÃ© haute/moyenne/basse"
      ],
      "explanation": "L'automatisation du contrÃ´le paie identifie rapidement les bulletins Ã  vÃ©rifier en prioritÃ©."
    },
    "pitfalls": [
      {
        "trap": "RÃ¨gles trop larges",
        "fix": "Ajuster les seuils avec le mÃ©tier et affiner progressivement."
      },
      {
        "trap": "Pas de statut de validation",
        "fix": "Ajouter une colonne ValidÃ©/En cours/RejetÃ© pour le suivi."
      }
    ],
    "quiz": {
      "question": "Un contrÃ´le paie utile est :",
      "options": [
        "Ã‰cart > seuil",
        "Changer les couleurs",
        "Renommer un onglet"
      ],
      "answer": 0,
      "difficulty": "AvancÃ©",
      "explanation": "Le contrÃ´le d'Ã©cart dÃ©tecte les anomalies rapidement."
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
    "difficulty": "AvancÃ©",
    "why": "Simuler l'impact d'une hausse salariale permet de dÃ©cider Ã  coÃ»t connu.",
    "example": {
      "scenario": "Simulation +2% sur une population ciblÃ©e.",
      "data": "DonnÃ©es d'effectif avec salaire brut par employÃ© et catÃ©gorie.",
      "goal": "Impact mensuel et annuel de l'augmentation sur la masse salariale."
    },
    "steps": [
      {
        "title": "CrÃ©er base masse salariale",
        "detail": "Importer les donnÃ©es d'effectif avec salaire brut, catÃ©gorie et dÃ©partement. Calculer la masse salariale actuelle.",
        "tip": "La masse salariale = somme des salaires bruts + charges patronales.",
        "pitfall": "Oublier les charges patronales sous-estime le coÃ»t rÃ©el."
      },
      {
        "title": "Appliquer scÃ©nario",
        "detail": "CrÃ©er un paramÃ¨tre What-if pour le taux d'augmentation. Mesure Masse simulÃ©e = Masse actuelle Ã— (1 + ParamÃ¨tre%).",
        "tip": "Utiliser un paramÃ¨tre What-if pour que l'utilisateur puisse tester diffÃ©rents scÃ©narios.",
        "pitfall": "ScÃ©nario sans paramÃ¨tre dynamique = rapport statique."
      },
      {
        "title": "Comparer rÃ©sultats",
        "detail": "Afficher cÃ´te Ã  cÃ´te la masse actuelle et la masse simulÃ©e avec l'Ã©cart en valeur et en %.",
        "tip": "Le visuel doit montrer immÃ©diatement l'impact coÃ»t.",
        "pitfall": "Population mal filtrÃ©e = simulation incorrecte."
      }
    ],
    "exercise": {
      "title": "Simuler 2 scÃ©narios d'augmentation",
      "instructions": "1. Importe les donnÃ©es d'effectif. 2. CrÃ©e un paramÃ¨tre What-if. 3. Calcule la masse simulÃ©e. 4. Compare actuelle vs simulÃ©e.",
      "hints": [
        "Masse = SUM(Salaire brut) Ã— 1.45 pour charges",
        "ParamÃ¨tre What-if pour le taux",
        "Comparer actuel vs simulÃ© en visuel"
      ],
      "dataset": "bloc8-l34-masse-salariale.csv"
    },
    "solution": {
      "steps": [
        "Masse actuelle = SUM(Salaire Brut) Ã— 1.45",
        "ParamÃ¨tre Taux Augmentation (0% Ã  5%)",
        "Masse simulÃ©e = Masse actuelle Ã— (1 + Taux)",
        "Visuel comparatif actuel vs simulÃ©"
      ],
      "explanation": "La simulation permet de tester des hypothÃ¨ses avant de dÃ©cider. L'impact coÃ»t est visible immÃ©diatement."
    },
    "pitfalls": [
      {
        "trap": "Population mal filtrÃ©e",
        "fix": "Appliquer la simulation seulement aux catÃ©gories concernÃ©es."
      },
      {
        "trap": "Charges patronales oubliÃ©es",
        "fix": "Inclure un coefficient de charges dans le calcul de la masse."
      }
    ],
    "quiz": {
      "question": "La simulation paie sert Ã  :",
      "options": [
        "Mesurer l'impact financier d'une augmentation",
        "CrÃ©er des thÃ¨mes visuels",
        "Supprimer des lignes"
      ],
      "answer": 0,
      "difficulty": "AvancÃ©",
      "explanation": "Elle aide Ã  anticiper les coÃ»ts salariaux avant dÃ©cision."
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
    "difficulty": "AvancÃ©",
    "why": "Mesurer et expliquer les dÃ©parts est la base du pilotage RH.",
    "example": {
      "scenario": "Turnover Ã©levÃ© sur une BU spÃ©cifique.",
      "data": "DonnÃ©es d'effectif avec dates d'entrÃ©e et de sortie par BU.",
      "goal": "KPI turnover + segmentation + recommandations de rÃ©tention."
    },
    "steps": [
      {
        "title": "Calculer turnover",
        "detail": "Turnover = DIVIDE(DÃ©parts sur la pÃ©riode, Effectif moyen sur la pÃ©riode).",
        "tip": "L'effectif moyen = (Effectif dÃ©but + Effectif fin) / 2.",
        "pitfall": "Turnover calculÃ© sur l'effectif de fin au lieu de l'effectif moyen."
      },
      {
        "title": "Segmenter par BU",
        "detail": "Analyser le turnover par dÃ©partement, anciennetÃ©, catÃ©gorie professionnelle.",
        "tip": "La segmentation rÃ©vÃ¨le les BU Ã  risque lÃ  oÃ¹ la moyenne globale masque le problÃ¨me.",
        "pitfall": "Pas de segmentation = moyenne trompeuse."
      },
      {
        "title": "Identifier facteurs",
        "detail": "CorrÃ©ler le turnover avec l'anciennetÃ©, le management, la localisation. Ajouter des indicateurs contextuels.",
        "tip": "Les facteurs explicatifs guident les actions de rÃ©tention.",
        "pitfall": "CorrÃ©lation â‰  causalitÃ©. Valider avec le terrain."
      }
    ],
    "exercise": {
      "title": "Produire une synthÃ¨se turnover trimestrielle",
      "instructions": "1. Calcule le taux de turnover global et par BU. 2. Identifie les BU Ã  risque. 3. Propose 3 actions de rÃ©tention.",
      "hints": [
        "Turnover = DÃ©parts / Effectif moyen",
        "Segmenter par BU et anciennetÃ©",
        "Actions de rÃ©tention ciblÃ©es"
      ],
      "dataset": "bloc8-l35-turnover.csv"
    },
    "solution": {
      "steps": [
        "Turnover global = DÃ©parts / Effectif moyen",
        "Turnover par BU et par anciennetÃ©",
        "Identifier BU Ã  risque (turnover > 15%)",
        "3 actions : intÃ©gration, management, mobilitÃ©"
      ],
      "explanation": "Le turnover analysÃ© par segment rÃ©vÃ¨le les leviers d'action RH."
    },
    "pitfalls": [
      {
        "trap": "Pas de segmentation",
        "fix": "Toujours analyser par BU, anciennetÃ©, catÃ©gorie pour identifier les vrais leviers."
      },
      {
        "trap": "CorrÃ©lation â‰  causalitÃ©",
        "fix": "Valider les hypothÃ¨ses avec les managers et les enquÃªtes de sortie."
      }
    ],
    "quiz": {
      "question": "Pour analyser le turnover, il faut surtout :",
      "options": [
        "Segmenter les populations",
        "Regarder une moyenne globale seule",
        "Masquer les dÃ©parts"
      ],
      "answer": 0,
      "difficulty": "AvancÃ©",
      "explanation": "La segmentation rÃ©vÃ¨le les vrais leviers RH."
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
    "title": "ClÃ´ture mensuelle et Ã©carts",
    "track": "bi",
    "moduleId": "b8",
    "difficulty": "AvancÃ©",
    "why": "Comparer rÃ©alisÃ© vs budget par centre de coÃ»t est la base du pilotage financier mensuel.",
    "example": {
      "scenario": "Ã‰carts significatifs sur charges externes lors de la clÃ´ture.",
      "data": "Table budget et table rÃ©alisÃ© par centre de coÃ»t et par mois.",
      "goal": "Vue Ã©carts priorisÃ©s avec top 10 Ã  commenter."
    },
    "steps": [
      {
        "title": "PrÃ©parer budget/rÃ©alisÃ©",
        "detail": "Importer les deux tables. S'assurer qu'elles partagent les mÃªmes dimensions (centre de coÃ»t, mois).",
        "tip": "Le budget est souvent en format large â€” unpivot les mois si nÃ©cessaire.",
        "pitfall": "PÃ©riodes non alignÃ©es entre budget et rÃ©alisÃ©."
      },
      {
        "title": "Calculer Ã©carts",
        "detail": "Ã‰cart = RÃ©alisÃ© - Budget. Ã‰cart % = DIVIDE(Ã‰cart, Budget). Variance favorable ou dÃ©favorable.",
        "tip": "Un Ã©cart positif sur les dÃ©penses est DÃ‰FAVORABLE (on dÃ©pense plus que prÃ©vu).",
        "pitfall": "Confondre Ã©cart favorable et dÃ©favorable selon le type de compte."
      },
      {
        "title": "Classer prioritÃ©s",
        "detail": "Ranking des Ã©carts par valeur absolue. Top 10 dÃ©favorables et top 5 favorables.",
        "tip": "Se concentrer sur les 10 plus gros Ã©carts dÃ©favorables d'abord.",
        "pitfall": "Traiter tous les Ã©carts pareil = perte de temps."
      }
    ],
    "exercise": {
      "title": "Sortir un top 10 Ã©carts Ã  commenter",
      "instructions": "1. Importe budget et rÃ©alisÃ©. 2. Calcule les Ã©carts en valeur et %. 3. Classe par valeur absolue. 4. Affiche top 10 Ã©carts Ã  commenter.",
      "hints": [
        "Ã‰cart = RÃ©alisÃ© - Budget",
        "Variance dÃ©favorable = dÃ©passement",
        "Classer par valeur absolue pour prioriser"
      ],
      "dataset": "bloc8-l36-cloture.csv"
    },
    "solution": {
      "steps": [
        "Budget et rÃ©alisÃ©s alignÃ©s (mÃªmes dimensions)",
        "Ã‰cart = RÃ©alisÃ© - Budget",
        "Ã‰cart % = DIVIDE(Ã‰cart, Budget)",
        "Top 10 Ã©carts dÃ©favorables par valeur absolue"
      ],
      "explanation": "La priorisation des Ã©carts concentre l'analyse lÃ  oÃ¹ l'impact est maximum."
    },
    "pitfalls": [
      {
        "trap": "PÃ©riodes non alignÃ©es",
        "fix": "VÃ©rifier que budget et rÃ©alisÃ© couvrent exactement les mÃªmes mois et centres de coÃ»t."
      },
      {
        "trap": "Sens des Ã©carts inversÃ©",
        "fix": "Pour les dÃ©penses : Ã©cart positif = dÃ©favorable. Pour les revenus : Ã©cart positif = favorable."
      }
    ],
    "quiz": {
      "question": "En clÃ´ture, le KPI clÃ© est :",
      "options": [
        "Ã‰cart budget-rÃ©alisÃ©",
        "Nombre de visuels",
        "ThÃ¨me sombre"
      ],
      "answer": 0,
      "difficulty": "AvancÃ©",
      "explanation": "L'Ã©cart est central pour le pilotage financier."
    },
    "downloadFile": "datasets/bloc8-l36-cloture.csv",
    "nextLesson": null,
    "prerequisites": [
      "l7",
      "l22"
    ]
  }
];

const queryLessons = allLessons.filter(l => l.track === 'query');
const biLessons = allLessons.filter(l => l.track === 'bi');

function getLessonsForModule(moduleId) {
  return allLessons.filter(l => l.moduleId === moduleId);
}
function getLessonById(id) {
  return allLessons.find(l => l.id === id);
}


// --- SHARED DATA ---
const datasets = [
  { id: 'sales', name: 'Dataset ventes multi-pays', level: 'Facile', format: 'CSV', rows: 2500, lessons: ['l1','l2','l3','l4','l5','l6','l7','l8','l9','l10','l11','l12'] },
  { id: 'hr', name: 'Dataset RH (effectifs / turnover)', level: 'Moyen', format: 'CSV', rows: 1200, lessons: ['l25','l35'] },
  { id: 'stock', name: 'Dataset stock & ruptures', level: 'Difficile', format: 'CSV', rows: 3100, lessons: ['l26'] },
  { id: 'marketing', name: 'Dataset marketing (campagnes)', level: 'Moyen', format: 'CSV', rows: 2800, lessons: ['l32'] },
  { id: 'finance', name: 'Dataset finance (budget vs r\u00e9el)', level: 'Difficile', format: 'CSV', rows: 3400, lessons: ['l28','l36'] }
];

const cheatsheets = [
  {
    id: 'cs-pq',
    title: 'Power Query \u2014 20 transformations cl\u00e9s',
    category: 'query',
    lines: [
      '1) Promouvoir en-t\u00eates',
      '2) Typage explicite',
      '3) Supprimer doublons',
      '4) Remplacer valeurs',
      '5) Merge / Append',
      '6) Pivot / Unpivot',
      '7) Group By',
      '8) Colonnes conditionnelles',
      '9) Param\u00e8tres',
      '10) Fonctions M'
    ]
  },
  {
    id: 'cs-dax',
    title: 'DAX \u2014 25 fonctions indispensables',
    category: 'bi',
    lines: [
      'SUM, COUNT, DISTINCTCOUNT',
      'DIVIDE, IF, SWITCH',
      'CALCULATE, FILTER',
      'ALL, REMOVEFILTERS',
      'SAMEPERIODLASTYEAR, TOTALYTD',
      'RANKX, TOPN',
      'SUMX, AVERAGEX'
    ]
  },
  {
    id: 'cs-model',
    title: "Checklist mod\u00e8le Power BI",
    category: 'bi',
    lines: [
      "Sch\u00e9ma en \u00e9toile",
      "Dimensions d\u00e9dupliqu\u00e9es",
      "Relations 1-*",
      "Table calendrier marqu\u00e9e",
      "Mesures dans table d\u00e9di\u00e9e"
    ]
  }
];

const badges = [
  { id: 'starter', label: '\U0001f680 Starter', rule: 'percent >= 15', hint: 'Atteindre 15% du parcours' },
  { id: 'pq', label: '\U0001f9f9 Data Cleaner', rule: "byTheme.query >= 4", hint: 'Terminer 4 le\u00e7ons Power Query' },
  { id: 'model', label: '\U0001f9e9 Model Builder', rule: "byTheme.bi >= 3", hint: 'Terminer 3 le\u00e7ons BI' },
  { id: 'dax', label: '\U0001f4c8 DAX Analyst', rule: "byTheme.bi >= 6", hint: 'Terminer 6 le\u00e7ons BI' },
  { id: 'project', label: '\U0001f3c1 Delivery', rule: 'percent >= 80', hint: 'Atteindre 80% du parcours' }
];

const labData = [
  { year: 2023, revenue: 345000, target: 320000 },
  { year: 2024, revenue: 412000, target: 395000 },
  { year: 2025, revenue: 488000, target: 470000 }
];

// --- COMPONENTS ---

function renderBreadcrumb(parts) {
  return '<nav class="breadcrumb">' + parts.map((p, i) => {
    if (i === parts.length - 1) return '<span class="breadcrumb-current">' + p.label + '</span>';
    return '<a href="' + p.href + '">' + p.label + '</a><span class="breadcrumb-sep">\u203A</span>';
  }).join('') + '</nav>';
}

function renderHeader() {
  const theme = getTheme();
  const themeIcon = theme === 'dark' ? '\u2600\ufe0f' : '\U0001f319';
  return '<header class="site-header"><div class="container"><div class="nav-wrap">' +
    '<a href="#/home" class="brand">Power BI Academy</a>' +
    '<nav class="main-nav">' +
    '<a href="#/query">Power Query</a>' +
    '<a href="#/bi">Power BI</a>' +
    '<a href="#/lab">Lab</a>' +
    '<a href="#/cheatsheets">Fiches</a>' +
    '<a href="#/progression">Progression</a>' +
    '<button class="btn btn-ghost" onclick="pba.toggleTheme()" style="font-size:1.2rem;padding:.3rem .5rem">' + themeIcon + '</button>' +
    '</nav></div></div></header>';
}

function renderFooter() {
  return '<footer class="site-footer"><div class="container"><p>Power BI Academy \u2014 Parcours interactif de z\u00e9ro \u00e0 avanc\u00e9</p></div></footer>';
}

function renderProgressBar(completed, total) {
  const pct = total ? Math.round((completed / total) * 100) : 0;
  return '<div class="progress-bar"><span style="width:' + pct + '%"></span></div>' +
    '<p class="muted" style="font-size:.85rem;margin-top:.3rem">' + completed + '/' + total + ' le\u00e7ons termin\u00e9es (' + pct + '%)</p>';
}

function renderLessonCard(lesson) {
  const progress = getProgress();
  const done = progress[lesson.id];
  const diff = lesson.difficulty || '';
  return '<a href="#/' + lesson.track + '/' + lesson.moduleId + '/' + lesson.id + '" class="card lesson-card-link">' +
    '<div class="lesson-card-header">' +
    '<span class="lesson-done">' + (done ? '\u2705' : '\u2b1c') + '</span>' +
    '<strong>' + lesson.title + '</strong>' +
    '</div>' +
    '<p class="muted" style="font-size:.88rem;margin:.3rem 0">' + (lesson.why || lesson.objective || '').substring(0, 100) + '...</p>' +
    '<span class="chip">' + diff + '</span>' +
    '</a>';
}

function renderQuiz(lesson) {
  const quiz = lesson.quiz;
  if (!quiz) return '';
  return '<fieldset class="lesson-quiz">' +
    '<legend><strong>Mini quiz :</strong> ' + quiz.question + '</legend>' +
    quiz.options.map(function(opt, i) {
      return '<label class="quiz-option">' +
        '<input type="radio" name="quiz-' + lesson.id + '" value="' + i + '" />' +
        '<span>' + opt + '</span></label>';
    }).join('') +
    '<button class="btn btn-ghost quiz-check" type="button" data-quiz-id="' + lesson.id + '" data-quiz-answer="' + quiz.answer + '">Valider ma r\u00e9ponse</button>' +
    '<p class="quiz-feedback" id="quiz-feedback-' + lesson.id + '"></p>' +
    '</fieldset>';
}

function bindQuizActions() {
  document.querySelectorAll('.quiz-check').forEach(function(btn) {
    btn.addEventListener('click', function() {
      var lessonId = btn.dataset.quizId;
      var correctAnswer = parseInt(btn.dataset.quizAnswer);
      var selected = document.querySelector('input[name="quiz-' + lessonId + '"]:checked');
      var feedback = document.getElementById('quiz-feedback-' + lessonId);
      if (!selected) {
        feedback.textContent = 'Choisis une r\u00e9ponse avant de valider.';
        feedback.className = 'quiz-feedback warning';
        return;
      }
      var isCorrect = parseInt(selected.value) === correctAnswer;
      var lesson = getLessonById(lessonId);
      feedback.textContent = isCorrect ? '\u2705 Bonne r\u00e9ponse. ' + (lesson.quiz.explanation || '') : '\u274c Pas encore. ' + (lesson.quiz.explanation || '');
      feedback.className = 'quiz-feedback ' + (isCorrect ? 'ok' : 'ko');
      saveQuizAnswer(lessonId, isCorrect);
    });
  });
}

function bindCheckboxActions() {
  document.querySelectorAll('[data-lesson-toggle]').forEach(function(cb) {
    cb.addEventListener('change', function() {
      toggleLesson(cb.dataset.lessonToggle, cb.checked);
    });
  });
}

// --- PAGES ---

function renderHome(app) {
  const progress = getProgress();
  const total = allLessons.length;
  const done = allLessons.filter(function(l) { return progress[l.id]; }).length;
  const pct = total ? Math.round((done / total) * 100) : 0;

  app.innerHTML = renderHeader() +
    '<div class="container">' +
    '<section class="hero">' +
    '<h1>Power BI Academy</h1>' +
    '<p class="tag">De z\u00e9ro \u00e0 avanc\u00e9 \u2014 deux parcours parall\u00e8les</p>' +
    '<p>Apprends Power Query et Power BI \u00e0 ton rythme, avec des le\u00e7ons d\u00e9taill\u00e9es, des exercices pratiques et des quiz.</p>' +
    '<div class="hero-actions">' +
    '<a href="#/query" class="btn">Parcours Power Query</a>' +
    '<a href="#/bi" class="btn btn-secondary">Parcours Power BI</a>' +
    '</div>' +
    renderProgressBar(done, total) +
    '</section>' +

    '<section class="section"><h2>Parcours</h2>' +
    '<div class="modules-grid">' +
    '<a href="#/query" class="card module"><h3>\U0001f527 Power Query</h3><p>8 le\u00e7ons : importer, nettoyer, transformer, optimiser</p></a>' +
    '<a href="#/bi" class="card module"><h3>\U0001f4ca Power BI</h3><p>28 le\u00e7ons : mod\u00e9liser, DAX, visualiser, cas m\u00e9tiers</p></a>' +
    '</div></section>' +

    '<section class="section section-alt"><h2>Outils</h2>' +
    '<div class="status-grid">' +
    '<a href="#/lab" class="card"><h3>\U0001f52c Lab</h3><p>Simulateur et donn\u00e9es d\'exercice</p></a>' +
    '<a href="#/cheatsheets" class="card"><h3>\U0001f4cb Fiches m\u00e9mo</h3><p>R\u00e9sum\u00e9s des concepts cl\u00e9s</p></a>' +
    '<a href="#/progression" class="card"><h3>\U0001f4c8 Progression</h3><p>Suivi et badges</p></a>' +
    '</div></section>' +

    '</div>' + renderFooter();

  bindCheckboxActions();
}

function renderTrack(app, track) {
  const modules = track === 'query' ? queryModules : biModules;
  const lessons = track === 'query' ? queryLessons : biLessons;
  const trackName = track === 'query' ? 'Power Query' : 'Power BI';
  const progress = getProgress();
  const done = lessons.filter(function(l) { return progress[l.id]; }).length;

  app.innerHTML = renderHeader() +
    '<div class="container">' +
    renderBreadcrumb([{label: 'Accueil', href: '#/home'}, {label: trackName}]) +
    '<section class="section"><h1>' + trackName + '</h1>' +
    '<p class="muted">' + lessons.length + ' le\u00e7ons \u2014 ' + done + ' termin\u00e9es</p>' +
    renderProgressBar(done, lessons.length) + '</section>' +

    '<section class="section"><div class="modules-grid">' +
    modules.map(function(mod) {
      var modLessons = getLessonsForModule(mod.id);
      var modDone = modLessons.filter(function(l) { return progress[l.id]; }).length;
      return '<a href="#/' + track + '/' + mod.id + '" class="card module">' +
        '<h3>' + mod.title + '</h3>' +
        '<p>' + mod.desc + '</p>' +
        '<p class="muted" style="font-size:.85rem">' + modDone + '/' + modLessons.length + ' le\u00e7ons</p>' +
        '</a>';
    }).join('') +
    '</div></section></div>' + renderFooter();
}

function renderChapter(app, track, moduleId) {
  var modules = track === 'query' ? queryModules : biModules;
  var mod = modules.find(function(m) { return m.id === moduleId; });
  if (!mod) { app.innerHTML = '<div class="container"><h2>Module non trouv\u00e9</h2></div>'; return; }
  var lessons = getLessonsForModule(moduleId);
  var progress = getProgress();
  var trackName = track === 'query' ? 'Power Query' : 'Power BI';
  var done = lessons.filter(function(l) { return progress[l.id]; }).length;

  app.innerHTML = renderHeader() +
    '<div class="container">' +
    renderBreadcrumb([{label: 'Accueil', href: '#/home'}, {label: trackName, href: '#/' + track}, {label: mod.title}]) +
    '<section class="section"><h1>' + mod.title + '</h1>' +
    '<p>' + mod.desc + '</p>' +
    '<p><strong>Objectif :</strong> ' + mod.objective + '</p>' +
    '<p><strong>R\u00e9sultat :</strong> ' + mod.result + '</p>' +
    renderProgressBar(done, lessons.length) + '</section>' +

    '<section class="section"><h2>Le\u00e7ons</h2>' +
    '<div class="status-grid">' +
    lessons.map(function(l) { return renderLessonCard(l); }).join('') +
    '</div></section></div>' + renderFooter();

  bindCheckboxActions();
}

function renderLesson(app, track, moduleId, lessonId) {
  var lesson = getLessonById(lessonId);
  if (!lesson) { app.innerHTML = '<div class="container"><h2>Le\u00e7on non trouv\u00e9e</h2></div>'; return; }
  var progress = getProgress();
  var done = progress[lessonId];
  var trackName = track === 'query' ? 'Power Query' : 'Power BI';
  var modules = track === 'query' ? queryModules : biModules;
  var mod = modules.find(function(m) { return m.id === moduleId; });
  var modTitle = mod ? mod.title : moduleId;
  var prevLesson = null;
  var nextLesson = lesson.nextLesson ? getLessonById(lesson.nextLesson) : null;

  // Find previous lesson
  var allTrackLessons = track === 'query' ? queryLessons : biLessons;
  var idx = allTrackLessons.findIndex(function(l) { return l.id === lessonId; });
  if (idx > 0) prevLesson = allTrackLessons[idx - 1];

  var html = renderHeader() +
    '<div class="container lesson-detail">' +
    renderBreadcrumb([
      {label: 'Accueil', href: '#/home'},
      {label: trackName, href: '#/' + track},
      {label: modTitle, href: '#/' + track + '/' + moduleId},
      {label: lesson.title}
    ]) +

    '<section class="lesson-section">' +
    '<h1>' + lesson.title + '</h1>' +
    '<div class="chips"><span class="chip">' + (lesson.difficulty || '') + '</span>' +
    (done ? '<span class="chip badge-ok">\u2705 Termin\u00e9e</span>' : '') +
    '</div>' +
    '<p><strong>Pourquoi :</strong> ' + lesson.why + '</p>' +
    '</section>';

  // Example
  if (lesson.example) {
    html += '<section class="lesson-section"><h2>Exemple</h2>' +
      '<p><strong>Sc\u00e9nario :</strong> ' + lesson.example.scenario + '</p>' +
      '<p><strong>Donn\u00e9es :</strong> ' + lesson.example.data + '</p>' +
      '<p><strong>Objectif :</strong> ' + lesson.example.goal + '</p>' +
      '<div class="visual-block"><div class="visual-grid">' +
      '<div><span class="visual-label">Avant</span><p>' + (lesson.example.before || lesson.example.data) + '</p></div>' +
      '<div><span class="visual-label">Apr\u00e8s</span><p>' + (lesson.example.after || lesson.example.goal) + '</p></div>' +
      '</div></div></section>';
  }

  // Steps
  if (lesson.steps && lesson.steps.length) {
    html += '<section class="lesson-section"><h2>\u00c9tapes d\u00e9taill\u00e9es</h2><ol>';
    lesson.steps.forEach(function(step) {
      html += '<li><strong>' + step.title + '</strong>' +
        '<p>' + step.detail + '</p>' +
        (step.tip ? '<div class="tip">\U0001f4a1 Astuce : ' + step.tip + '</div>' : '') +
        (step.pitfall ? '<div class="pitfall">\u26a0\ufe0f Pi\u00e8ge : ' + step.pitfall + '</div>' : '') +
        '</li>';
    });
    html += '</ol></section>';
  }

  // Exercise
  if (lesson.exercise) {
    html += '<section class="lesson-section"><h2>Exercice : ' + lesson.exercise.title + '</h2>' +
      '<p>' + lesson.exercise.instructions + '</p>';
    if (lesson.exercise.hints && lesson.exercise.hints.length) {
      html += '<details><summary>Indices</summary><ul>' +
        lesson.exercise.hints.map(function(h) { return '<li>' + h + '</li>'; }).join('') +
        '</ul></details>';
    }
    if (lesson.exercise.dataset) {
      html += '<p><a href="datasets/' + lesson.exercise.dataset + '" class="btn btn-ghost" download>\U0001f4e5 T\u00e9l\u00e9charger le dataset</a></p>';
    }
    html += '</section>';
  }

  // Solution
  if (lesson.solution) {
    html += '<section class="lesson-section"><h2>Solution</h2>' +
      '<details><summary>Voir la solution</summary>';
    if (lesson.solution.steps) {
      html += '<ol>' + lesson.solution.steps.map(function(s) { return '<li>' + s + '</li>'; }).join('') + '</ol>';
    }
    if (lesson.solution.explanation) {
      html += '<p>' + lesson.solution.explanation + '</p>';
    }
    html += '</details></section>';
  }

  // Pitfalls
  if (lesson.pitfalls && lesson.pitfalls.length) {
    html += '<section class="lesson-section"><h2>Pi\u00e8ges courants</h2>';
    lesson.pitfalls.forEach(function(p) {
      html += '<div class="pitfall"><strong>\u26a0\ufe0f ' + p.trap + '</strong><br>' + p.fix + '</div>';
    });
    html += '</section>';
  }

  // Quiz
  if (lesson.quiz) {
    html += '<section class="lesson-section">' + renderQuiz(lesson) + '</section>';
  }

  // Download + checkbox
  html += '<section class="lesson-section">' +
    '<div class="lesson-help-actions">' +
    (lesson.downloadFile ? '<a href="' + lesson.downloadFile + '" class="btn btn-ghost" download>\U0001f4e5 T\u00e9l\u00e9charger les donn\u00e9es</a>' : '') +
    '</div>' +
    '<label class="checkbox-line">' +
    '<input type="checkbox" data-lesson-toggle="' + lesson.id + '"' + (done ? ' checked' : '') + ' />' +
    'Marquer comme termin\u00e9e' +
    '</label>' +
    '</section>';

  // Navigation
  html += '<div class="lesson-nav">';
  if (prevLesson) {
    html += '<a href="#/' + track + '/' + moduleId + '/' + prevLesson.id + '" class="btn btn-ghost">\u2190 ' + prevLesson.title + '</a>';
  }
  if (nextLesson) {
    html += '<a href="#/' + track + '/' + (nextLesson.moduleId || moduleId) + '/' + nextLesson.id + '" class="btn">' + nextLesson.title + ' \u2192</a>';
  }
  html += '</div>';

  html += '</div>' + renderFooter();
  app.innerHTML = html;

  bindQuizActions();
  bindCheckboxActions();
}

function renderLab(app) {
  app.innerHTML = renderHeader() +
    '<div class="container">' +
    renderBreadcrumb([{label: 'Accueil', href: '#/home'}, {label: 'Lab'}]) +
    '<section class="section"><h1>\U0001f52c Lab interactif</h1>' +
    '<p>Simulateur de KPI et donn\u00e9es d\'exercice.</p>' +

    '<h2>Donn\u00e9es d\'exercice</h2>' +
    '<div class="status-grid">' +
    datasets.map(function(ds) {
      return '<div class="card"><h4>' + ds.name + '</h4>' +
        '<p class="muted">Niveau: ' + ds.level + ' \u2022 Format: ' + ds.format + ' \u2022 ~' + ds.rows + ' lignes</p>' +
        '<a href="datasets/' + ds.id + '.csv" class="btn btn-ghost" download>\U0001f4e5 T\u00e9l\u00e9charger</a></div>';
    }).join('') +
    '</div></section>' +

    '<section class="section section-alt"><h2>Simulateur KPI</h2>' +
    '<div class="table-wrap"><table><thead><tr><th>Ann\u00e9e</th><th>CA</th><th>Objectif</th><th>Atteint</th></tr></thead><tbody>' +
    labData.map(function(r) {
      var rate = Math.round((r.revenue / r.target) * 100);
      return '<tr><td>' + r.year + '</td><td>' + r.revenue.toLocaleString('fr-FR') + ' \u20ac</td>' +
        '<td>' + r.target.toLocaleString('fr-FR') + ' \u20ac</td>' +
        '<td><strong>' + rate + '%</strong></td></tr>';
    }).join('') +
    '</tbody></table></div></section>' +

    '</div>' + renderFooter();
}

function renderCheatsheets(app) {
  app.innerHTML = renderHeader() +
    '<div class="container">' +
    renderBreadcrumb([{label: 'Accueil', href: '#/home'}, {label: 'Fiches m\u00e9mo'}]) +
    '<section class="section"><h1>\U0001f4cb Fiches m\u00e9mo</h1>' +
    '<p>R\u00e9sum\u00e9s des concepts cl\u00e9s pour Power Query et Power BI.</p>' +
    '<div class="status-grid">' +
    cheatsheets.map(function(cs) {
      return '<div class="card"><h3>' + cs.title + '</h3>' +
        '<ul>' + cs.lines.map(function(l) { return '<li>' + l + '</li>'; }).join('') + '</ul>' +
        '<button class="btn btn-ghost" data-cheatsheet="' + cs.id + '">T\u00e9l\u00e9charger la fiche</button></div>';
    }).join('') +
    '</div></section></div>' + renderFooter();

  // Bind cheatsheet download
  document.querySelectorAll('[data-cheatsheet]').forEach(function(btn) {
    btn.addEventListener('click', function() {
      var cs = cheatsheets.find(function(c) { return c.id === btn.dataset.cheatsheet; });
      if (!cs) return;
      var content = cs.title + '\n\n' + cs.lines.join('\n') + '\n';
      var blob = new Blob([content], { type: 'text/plain;charset=utf-8;' });
      var url = URL.createObjectURL(blob);
      var link = document.createElement('a');
      link.href = url;
      link.download = cs.id + '.txt';
      link.click();
      URL.revokeObjectURL(url);
    });
  });
}

function renderProgression(app) {
  var progress = getProgress();
  var quizScore = getQuizScore();
  var totalQueries = queryLessons.length;
  var totalBI = biLessons.length;
  var doneQueries = queryLessons.filter(function(l) { return progress[l.id]; }).length;
  var doneBI = biLessons.filter(function(l) { return progress[l.id]; }).length;
  var totalAll = allLessons.length;
  var doneAll = allLessons.filter(function(l) { return progress[l.id]; }).length;
  var pct = totalAll ? Math.round((doneAll / totalAll) * 100) : 0;

  // Calculate badges
  var byTheme = { query: doneQueries, bi: doneBI };
  var earnedBadges = badges.filter(function(b) {
    if (b.id === 'starter') return pct >= 15;
    if (b.id === 'pq') return doneQueries >= 4;
    if (b.id === 'model') return doneBI >= 3;
    if (b.id === 'dax') return doneBI >= 6;
    if (b.id === 'project') return pct >= 80;
    return false;
  });

  // Quiz score
  var quizTotal = allLessons.filter(function(l) { return l.quiz; }).length;
  var quizCorrect = Object.keys(quizScore).filter(function(k) { return quizScore[k]; }).length;

  app.innerHTML = renderHeader() +
    '<div class="container">' +
    renderBreadcrumb([{label: 'Accueil', href: '#/home'}, {label: 'Progression'}]) +
    '<section class="section"><h1>\U0001f4c8 Ma progression</h1>' +
    renderProgressBar(doneAll, totalAll) +

    '<h2>Par parcours</h2>' +
    '<div class="status-grid">' +
    '<div class="card"><h4>\U0001f527 Power Query</h4><p class="muted">' + doneQueries + '/' + totalQueries + ' le\u00e7ons</p>' +
    '<div class="progress-bar"><span style="width:' + (totalQueries ? Math.round((doneQueries / totalQueries) * 100) : 0) + '%"></span></div></div>' +
    '<div class="card"><h4>\U0001f4ca Power BI</h4><p class="muted">' + doneBI + '/' + totalBI + ' le\u00e7ons</p>' +
    '<div class="progress-bar"><span style="width:' + (totalBI ? Math.round((doneBI / totalBI) * 100) : 0) + '%"></span></div></div>' +
    '</div></section>' +

    '<section class="section section-alt"><h2>\U0001f3c6 Badges</h2>' +
    '<div class="chips">' +
    badges.map(function(b) {
      var earned = earnedBadges.some(function(eb) { return eb.id === b.id; });
      return '<span class="chip ' + (earned ? 'badge-ok' : 'badge-lock') + '">' + b.label + (earned ? ' \u2705' : ' \U0001f512') + ' <small>' + b.hint + '</small></span>';
    }).join('') +
    '</div></section>' +

    '<section class="section"><h2>\U0001f9ee R\u00e9sultats quiz</h2>' +
    '<p>R\u00e9ponses correctes : <strong>' + quizCorrect + '/' + quizTotal + '</strong></p></section>' +

    '<section class="section section-alt">' +
    '<button class="btn btn-ghost" onclick="localStorage.removeItem(\'' + progressKey + '\');localStorage.removeItem(\'' + quizScoreKey + '\');pba.saveProgress({});location.hash=location.hash;">R\u00e9initialiser ma progression</button>' +
    '</section>' +

    '</div>' + renderFooter();
}

// --- ROUTES ---
registerRoute('/home', renderHome);
registerRoute('/query', function(app) { renderTrack(app, 'query'); });
registerRoute('/bi', function(app) { renderTrack(app, 'bi'); });
registerRoute('/query/:moduleId', function(app, moduleId) { renderChapter(app, 'query', moduleId); });
registerRoute('/bi/:moduleId', function(app, moduleId) { renderChapter(app, 'bi', moduleId); });
registerRoute('/query/:moduleId/:lessonId', function(app, moduleId, lessonId) { renderLesson(app, 'query', moduleId, lessonId); });
registerRoute('/bi/:moduleId/:lessonId', function(app, moduleId, lessonId) { renderLesson(app, 'bi', moduleId, lessonId); });
registerRoute('/lab', renderLab);
registerRoute('/cheatsheets', renderCheatsheets);
registerRoute('/progression', renderProgression);

// --- INIT ---
if (document.documentElement.classList.contains('dark') || localStorage.getItem(themeKey) === 'dark') {
  document.documentElement.classList.add('dark');
}
initRouter();
