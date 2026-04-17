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
  { id: 'b7', title: 'Visualisation', desc: 'Storytelling, hiérarchie visuelle, slicers.', track: 'bi', objective: 'Construire des rapports clairs.', result: "L'élève sait faire un dashboard agréable." },
  { id: 'b8', title: 'Cas métiers', desc: 'Assembler toutes les compétences.', track: 'bi', objective: 'Appliquer les compétences dans des cas réels.', result: "L'élève sait gérer un projet complet." }
];

const allModules = [...queryModules, ...biModules];

// =============================================
// Lessons data moved to lessons.js
// Load it via: <script src="lessons.js"></script> in index.html

// --- LESSONS LOADED FROM lessons.js ---


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
  { id: 'starter', label: '\u{1F680} Starter', rule: 'percent >= 15', hint: 'Atteindre 15% du parcours' },
  { id: 'pq', label: '\u{1F9F9} Data Cleaner', rule: "byTheme.query >= 4", hint: 'Terminer 4 le\u00e7ons Power Query' },
  { id: 'model', label: '\u{1F9E9} Model Builder', rule: "byTheme.bi >= 3", hint: 'Terminer 3 le\u00e7ons BI' },
  { id: 'dax', label: '\u{1F4C8} DAX Analyst', rule: "byTheme.bi >= 6", hint: 'Terminer 6 le\u00e7ons BI' },
  { id: 'project', label: '\u{1F3C1} Delivery', rule: 'percent >= 80', hint: 'Atteindre 80% du parcours' }
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
  const themeIcon = theme === 'dark' ? '\u2600\ufe0f' : '\u{1F319}';
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
    '<a href="#/query" class="card module"><h3>\u{1F527} Power Query</h3><p>8 le\u00e7ons : importer, nettoyer, transformer, optimiser</p></a>' +
    '<a href="#/bi" class="card module"><h3>\u{1F4CA} Power BI</h3><p>28 le\u00e7ons : mod\u00e9liser, DAX, visualiser, cas m\u00e9tiers</p></a>' +
    '</div></section>' +

    '<section class="section section-alt"><h2>Outils</h2>' +
    '<div class="status-grid">' +
    '<a href="#/lab" class="card"><h3>\u{1F52C} Lab</h3><p>Simulateur et donn\u00e9es d\'exercice</p></a>' +
    '<a href="#/cheatsheets" class="card"><h3>\u{1F4CB} Fiches m\u00e9mo</h3><p>R\u00e9sum\u00e9s des concepts cl\u00e9s</p></a>' +
    '<a href="#/progression" class="card"><h3>\u{1F4C8} Progression</h3><p>Suivi et badges</p></a>' +
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
        (step.tip ? '<div class="tip">\u{1F4A1} Astuce : ' + step.tip + '</div>' : '') +
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
      html += '<p><a href="datasets/' + lesson.exercise.dataset + '" class="btn btn-ghost" download>\u{1F4E5} T\u00e9l\u00e9charger le dataset</a></p>';
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
    (lesson.downloadFile ? '<a href="' + lesson.downloadFile + '" class="btn btn-ghost" download>\u{1F4E5} T\u00e9l\u00e9charger les donn\u00e9es</a>' : '') +
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
    '<section class="section"><h1>\u{1F52C} Lab interactif</h1>' +
    '<p>Simulateur de KPI et donn\u00e9es d\'exercice.</p>' +

    '<h2>Donn\u00e9es d\'exercice</h2>' +
    '<div class="status-grid">' +
    datasets.map(function(ds) {
      return '<div class="card"><h4>' + ds.name + '</h4>' +
        '<p class="muted">Niveau: ' + ds.level + ' \u2022 Format: ' + ds.format + ' \u2022 ~' + ds.rows + ' lignes</p>' +
        '<a href="datasets/' + ds.id + '.csv" class="btn btn-ghost" download>\u{1F4E5} T\u00e9l\u00e9charger</a></div>';
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
    '<section class="section"><h1>\u{1F4CB} Fiches m\u00e9mo</h1>' +
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
    '<section class="section"><h1>\u{1F4C8} Ma progression</h1>' +
    renderProgressBar(doneAll, totalAll) +

    '<h2>Par parcours</h2>' +
    '<div class="status-grid">' +
    '<div class="card"><h4>\u{1F527} Power Query</h4><p class="muted">' + doneQueries + '/' + totalQueries + ' le\u00e7ons</p>' +
    '<div class="progress-bar"><span style="width:' + (totalQueries ? Math.round((doneQueries / totalQueries) * 100) : 0) + '%"></span></div></div>' +
    '<div class="card"><h4>\u{1F4CA} Power BI</h4><p class="muted">' + doneBI + '/' + totalBI + ' le\u00e7ons</p>' +
    '<div class="progress-bar"><span style="width:' + (totalBI ? Math.round((doneBI / totalBI) * 100) : 0) + '%"></span></div></div>' +
    '</div></section>' +

    '<section class="section section-alt"><h2>\u{1F3C6} Badges</h2>' +
    '<div class="chips">' +
    badges.map(function(b) {
      var earned = earnedBadges.some(function(eb) { return eb.id === b.id; });
      return '<span class="chip ' + (earned ? 'badge-ok' : 'badge-lock') + '">' + b.label + (earned ? ' \u2705' : ' \u{1F512}') + ' <small>' + b.hint + '</small></span>';
    }).join('') +
    '</div></section>' +

    '<section class="section"><h2>\u{1F9EE} R\u00e9sultats quiz</h2>' +
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
