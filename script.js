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

const labData = [
  { year: 2023, revenue: 345000, target: 320000 },
  { year: 2024, revenue: 412000, target: 395000 },
  { year: 2025, revenue: 488000, target: 470000 }
];

const totalTrackItems = modules.length + 2;
const progressKey = 'pba-progress';
const themeKey = 'pba-theme';

const modulesList = document.getElementById('modules-list');
const progressFill = document.getElementById('progress-fill');
const progressValue = document.getElementById('progress-value');
const yearFilter = document.getElementById('year-filter');
const labRows = document.getElementById('lab-rows');

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

  document.querySelectorAll('input[type="checkbox"][data-lesson]').forEach((checkbox) => {
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

  const percent = Math.round((completed / totalTrackItems) * 100);
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
renderLab();
updateProgressUI();
initQuiz();
initTheme();
initProgressReset();

yearFilter.addEventListener('change', renderLab);
