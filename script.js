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
    quiz: 'Quel type pour ClientID ? → Texte.'
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
    quiz: 'Première décision ? → Définir la clé de déduplication.'
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
    quiz: 'Empiler 2 fichiers mensuels ? → Append.'
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
    quiz: 'Pour transformer Jan/Fév/Mar en lignes ? → Unpivot.'
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
    quiz: 'La fact table contient ? → mesures + clés.'
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
    quiz: 'Pourquoi marquer la table date ? → pour time intelligence fiable.'
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
    quiz: 'Pour ratio sécurisé ? → DIVIDE.'
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
    quiz: 'CALCULATE sert à ? → changer le contexte de filtre.'
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
    quiz: 'Fonction N-1 classique ? → SAMEPERIODLASTYEAR.'
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
    quiz: 'Objectif d’un dashboard ? → Aider la décision.'
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
    quiz: 'Drill-down sert à ? → descendre dans le niveau de détail.'
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
    quiz: 'Dernière étape ? → recommandation métier claire.'
  }
];

const planStatus = [
  { phase: 'Phase 1 — MVP', done: '85%', note: 'Structure, progression, lab, 12 leçons détaillées.' },
  { phase: 'Phase 2 — Version solide', done: '25%', note: 'Base des leçons enrichie + composant visuel démarré.' },
  { phase: 'Phase 3 — Avancé / premium', done: '5%', note: 'Préparation: architecture prête pour extension.' }
];

const labData = [
  { year: 2023, revenue: 345000, target: 320000 },
  { year: 2024, revenue: 412000, target: 395000 },
  { year: 2025, revenue: 488000, target: 470000 }
];

const progressKey = 'pba-progress';
const themeKey = 'pba-theme';

const modulesList = document.getElementById('modules-list');
const themeList = document.getElementById('theme-list');
const lessonFilter = document.getElementById('lesson-filter');
const lessonSearch = document.getElementById('lesson-search');
const lessonsList = document.getElementById('lessons-list');
const planStatusList = document.getElementById('plan-status-list');
const progressFill = document.getElementById('progress-fill');
const progressValue = document.getElementById('progress-value');
const yearFilter = document.getElementById('year-filter');
const labRows = document.getElementById('lab-rows');

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
  const q = lessonSearch.value.trim().toLowerCase();
  return lessons.filter((lesson) => {
    const themeMatch = filter === 'all' || lesson.theme === filter;
    const text = `${lesson.title} ${lesson.objective} ${lesson.example}`.toLowerCase();
    const searchMatch = !q || text.includes(q);
    return themeMatch && searchMatch;
  });
}

function renderLessons() {
  const data = getFilteredLessons();

  lessonsList.innerHTML = data
    .map(
      (lesson) => `
      <details class="card lesson-card">
        <summary>
          <strong>${lesson.title}</strong>
          <span class="lesson-theme">${lesson.theme}</span>
        </summary>
        <div class="lesson-content">
          <p><strong>Ce que tu vas savoir faire :</strong> ${lesson.objective}</p>
          <p><strong>Exemple métier :</strong> ${lesson.example}</p>

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

          <p><strong>Mini quiz :</strong> ${lesson.quiz}</p>
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
    updateProgressUI();
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

  lessonFilter.addEventListener('change', () => {
    renderLessons();
    updateProgressUI();
  });

  lessonSearch.addEventListener('input', () => {
    renderLessons();
    updateProgressUI();
  });
}

renderModules();
renderThemes();
renderPlanStatus();
renderLessons();
renderLab();
updateProgressUI();
initTheme();
initProgressReset();
initLessonActions();

yearFilter.addEventListener('change', renderLab);
