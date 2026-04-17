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
    objective: 'Importer une source brute et corriger les types.',
    example: 'Fichier de ventes e-commerce exporté depuis un ERP.',
    steps: ['Charger le CSV', 'Promouvoir les en-têtes', 'Ajuster type Date / Nombre / Texte'],
    exercise: 'Trouve et corrige 3 colonnes mal typées.',
    solution: 'DateCommande en date, Montant en décimal, ClientID en texte.',
    pitfalls: ['Type automatique incorrect', 'Virgule/point décimal', 'Codes clients convertis en nombre'],
    summary: ['Toujours vérifier les types', 'Préférer des noms explicites', 'Conserver une requête source brute'],
    quiz: 'Question: quel type pour ClientID ? Réponse: Texte.'
  },
  {
    id: 'l2',
    theme: 'Power Query',
    title: 'L2 — Nettoyage : doublons, nulls, erreurs',
    objective: 'Rendre une table exploitable.',
    example: 'Base prospects avec emails manquants et doublons.',
    steps: ['Identifier la clé métier', 'Supprimer doublons', 'Gérer nulls/erreurs'],
    exercise: 'Nettoie la table et garde 1 ligne par client.',
    solution: 'Suppression doublons sur ClientID + remplacement null contrôlé.',
    pitfalls: ['Supprimer sur mauvaise colonne', 'Remplacer null sans logique métier', 'Masquer les erreurs'],
    summary: ['Nettoyage documenté', 'Toujours tester le résultat', 'Sauvegarder étapes'],
    quiz: 'Question: première étape ? Réponse: définir la clé.'
  },
  {
    id: 'l3',
    theme: 'Power Query',
    title: 'L3 — Merge vs Append',
    objective: 'Choisir la bonne opération de combinaison.',
    example: 'Ventes + table produits + ventes historiques.',
    steps: ['Merge ventes-produits', 'Append historiques', 'Contrôler cardinalité'],
    exercise: 'Assembler les données de 2 années et enrichir par catégorie.',
    solution: 'Append annuel puis merge sur ProductID.',
    pitfalls: ['Confondre append et merge', 'Join sur clé non unique', 'Colonnes homonymes non gérées'],
    summary: ['Append = empiler', 'Merge = joindre', 'Toujours valider les lignes'],
    quiz: 'Question: pour empiler 2024+2025 ? Réponse: Append.'
  },
  {
    id: 'l4',
    theme: 'Modélisation',
    title: 'L4 — Construire un schéma en étoile',
    objective: 'Passer d’un modèle plat à un modèle robuste.',
    example: 'Table ventes unique vers faits + dimensions.',
    steps: ['Créer table de faits', 'Extraire dimensions', 'Relier en 1-*'],
    exercise: 'Découpe une table unique en modèle en étoile.',
    solution: 'FactSales + DimDate + DimProduct + DimCustomer.',
    pitfalls: ['Relations bidirectionnelles inutiles', 'Dimensions non dédupliquées', 'Pas de table calendrier'],
    summary: ['Modèle d’abord', 'Clés propres', 'Relations lisibles'],
    quiz: 'Question: une fact table contient quoi ? Réponse: mesures + clés.'
  },
  {
    id: 'l5',
    theme: 'Modélisation',
    title: 'L5 — Table calendrier et relations',
    objective: 'Fiabiliser l’analyse temporelle.',
    example: 'Comparer CA mensuel N vs N-1.',
    steps: ['Créer DimDate', 'Marquer comme table de dates', 'Relier à la fact'],
    exercise: 'Activer un slicing par mois + année.',
    solution: 'Relation active DimDate[Date] -> FactSales[OrderDate].',
    pitfalls: ['Date textuelle', 'Multiples relations actives', 'Table de dates incomplète'],
    summary: ['Sans calendrier = time intelligence limitée', 'Date continue', 'Colonnes année/mois utiles'],
    quiz: 'Question: pourquoi une table calendrier ? Réponse: analyses temporelles stables.'
  },
  {
    id: 'l6',
    theme: 'DAX',
    title: 'L6 — Mesures DAX indispensables',
    objective: 'Écrire des KPI lisibles.',
    example: 'CA, nombre de clients, panier moyen.',
    steps: ['Créer [CA] = SUM', 'Créer [Clients] = DISTINCTCOUNT', 'Créer ratio via DIVIDE'],
    exercise: 'Créer 3 KPI de base pour le dashboard ventes.',
    solution: '[CA], [Clients], [Panier Moyen] = DIVIDE([CA],[Clients]).',
    pitfalls: ['Colonne calculée au lieu de mesure', 'Division par zéro', 'Noms de mesures ambigus'],
    summary: ['Mesure > colonne pour KPI', 'Utiliser DIVIDE', 'Nommage cohérent'],
    quiz: 'Question: SUM en colonne ou mesure ? Réponse: mesure pour KPI.'
  },
  {
    id: 'l7',
    theme: 'DAX',
    title: 'L7 — CALCULATE et contexte de filtre',
    objective: 'Modifier correctement le contexte.',
    example: 'CA France vs CA global.',
    steps: ['Mesure base [CA]', 'Mesure filtrée avec CALCULATE', 'Comparer résultats'],
    exercise: 'Créer [CA France] et [% France].',
    solution: '[CA France] = CALCULATE([CA], DimCountry[Country]="France").',
    pitfalls: ['Filtre mal ciblé', 'Confondre row context et filter context', 'Dépendances cachées'],
    summary: ['CALCULATE change le contexte', 'Toujours partir d’une mesure base', 'Tester avec slicers'],
    quiz: 'Question: rôle principal de CALCULATE ? Réponse: modifier filtre.'
  },
  {
    id: 'l8',
    theme: 'DAX',
    title: 'L8 — Time intelligence N vs N-1',
    objective: 'Comparer performance d’une période à la précédente.',
    example: 'CA de cette année vs année précédente.',
    steps: ['Mesure [CA]', 'Mesure [CA N-1]', 'Mesure [% Évolution]'],
    exercise: 'Afficher une carte de variation annuelle.',
    solution: '[CA N-1] via SAMEPERIODLASTYEAR sur table calendrier.',
    pitfalls: ['Pas de table dates', 'Formatage incohérent', 'Mois incomplets'],
    summary: ['Toujours table calendrier', 'Mesures séparées puis ratio', 'Validation avec tableau brut'],
    quiz: 'Question: fonction clé N-1 ? Réponse: SAMEPERIODLASTYEAR.'
  },
  {
    id: 'l9',
    theme: 'Visualisation',
    title: 'L9 — Construire une page dashboard lisible',
    objective: 'Créer une page claire orientée décision.',
    example: 'Page Ventes : KPI, tendance, top produits.',
    steps: ['Définir objectif de page', 'Choisir 3 à 5 visuels max', 'Appliquer hiérarchie visuelle'],
    exercise: 'Refaire une page encombrée en page claire.',
    solution: 'Disposition en grille + titres explicites + couleurs sobres.',
    pitfalls: ['Trop de visuels', 'Couleurs agressives', 'Titres vagues'],
    summary: ['Moins mais mieux', 'Un message par visuel', 'Design cohérent'],
    quiz: 'Question: nombre idéal de visuels ? Réponse: limité et pertinent.'
  },
  {
    id: 'l10',
    theme: 'Projet',
    title: 'L10 — Cas métier complet : dashboard ventes',
    objective: 'Assembler tout le flux data jusqu’au reporting.',
    example: 'NovaRetail : ventes, produits, clients, objectifs.',
    steps: ['Power Query', 'Modélisation', 'DAX', 'Design dashboard', 'Restitution métier'],
    exercise: 'Livrer un dashboard avec 5 insights actionnables.',
    solution: 'Rapport final + checklist qualité + recommandations.',
    pitfalls: ['Sauter l’étape modèle', 'Mesures non documentées', 'Pas de conclusion métier'],
    summary: ['Pipeline complet', 'Qualité > vitesse', 'Insight orienté action'],
    quiz: 'Question: finalité ? Réponse: aide à la décision.'
  }
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
const lessonsList = document.getElementById('lessons-list');
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

function renderModules() {
  modulesList.innerHTML = modules
    .map(
      (mod) => `
      <article class="card module">
        <h3>${mod.title}</h3>
        <p>${mod.desc}</p>
        <label class="checkbox-line">
          <input type="checkbox" data-lesson="${mod.id}" />
          Bloc terminé
        </label>
      </article>
    `
    )
    .join('');
}

function renderLessons() {
  const filter = lessonFilter.value;
  const data = filter === 'all' ? lessons : lessons.filter((lesson) => lesson.theme === filter);

  lessonsList.innerHTML = data
    .map(
      (lesson) => `
      <details class="card lesson-card">
        <summary>
          <strong>${lesson.title}</strong>
          <span class="lesson-theme">${lesson.theme}</span>
        </summary>
        <div class="lesson-content">
          <p><strong>Objectif :</strong> ${lesson.objective}</p>
          <p><strong>Exemple métier :</strong> ${lesson.example}</p>
          <p><strong>Explication pas à pas :</strong></p>
          <ol>${lesson.steps.map((step) => `<li>${step}</li>`).join('')}</ol>
          <p><strong>Exercice :</strong> ${lesson.exercise}</p>
          <p><strong>Correction :</strong> ${lesson.solution}</p>
          <p><strong>Pièges fréquents :</strong></p>
          <ul>${lesson.pitfalls.map((pitfall) => `<li>${pitfall}</li>`).join('')}</ul>
          <p><strong>Résumé :</strong></p>
          <ul>${lesson.summary.map((item) => `<li>${item}</li>`).join('')}</ul>
          <p><strong>Mini quiz :</strong> ${lesson.quiz}</p>
          <label class="checkbox-line">
            <input type="checkbox" data-lesson="${lesson.id}" />
            Marquer la leçon comme terminée
          </label>
        </div>
      </details>
    `
    )
    .join('');
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
  const checkboxes = document.querySelectorAll('input[type="checkbox"][data-lesson]');
  const totalTrackItems = checkboxes.length;

  checkboxes.forEach((checkbox) => {
    const key = checkbox.dataset.lesson;
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

function initQuiz() {
  const quizForm = document.getElementById('quiz-form');
  const quizResult = document.getElementById('quiz-result');

  quizForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const formData = new FormData(quizForm);
    const answers = { q1: 'a', q2: 'a', q3: 'a' };
    const score = Object.entries(answers).reduce(
      (acc, [question, answer]) => acc + Number(formData.get(question) === answer),
      0
    );

    quizResult.textContent = `Score : ${score}/3 — ${
      score === 3 ? 'Excellent, tu peux avancer.' : 'Continue, tu es en bonne voie.'
    }`;
  });
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

renderModules();
renderThemes();
renderLessons();
renderLab();
updateProgressUI();
initQuiz();
initTheme();
initProgressReset();

lessonFilter.addEventListener('change', () => {
  renderLessons();
  updateProgressUI();
});
yearFilter.addEventListener('change', renderLab);
