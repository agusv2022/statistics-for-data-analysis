// ---------------------------------------------------------------------------
// Renders the page from COURSE / WEEKS (see content.js). No build step —
// plain DOM rendering so the site stays a few static files on GitHub Pages.
// ---------------------------------------------------------------------------

const TODO_KEY = "sda-todo-v1";
const THEME_KEY = "sda-theme";

function loadChecked() {
  try {
    return new Set(JSON.parse(localStorage.getItem(TODO_KEY) || "[]"));
  } catch (e) {
    return new Set();
  }
}

function saveChecked(set) {
  try {
    localStorage.setItem(TODO_KEY, JSON.stringify([...set]));
  } catch (e) {
    /* storage unavailable — ignore, state just won't persist */
  }
}

let checked = loadChecked();

function escapeHtml(str) {
  return String(str)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}

// ---------- Theme ----------
function initTheme() {
  const btn = document.getElementById("themeToggle");
  const stored = localStorage.getItem(THEME_KEY);
  if (stored === "dark" || stored === "light") {
    document.documentElement.setAttribute("data-theme", stored);
  }
  updateThemeIcon();
  btn.addEventListener("click", () => {
    const current = document.documentElement.getAttribute("data-theme");
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const effectiveCurrent = current || (prefersDark ? "dark" : "light");
    const next = effectiveCurrent === "dark" ? "light" : "dark";
    document.documentElement.setAttribute("data-theme", next);
    try { localStorage.setItem(THEME_KEY, next); } catch (e) {}
    updateThemeIcon();
  });
}

function updateThemeIcon() {
  const btn = document.getElementById("themeToggle");
  const current = document.documentElement.getAttribute("data-theme");
  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  const effective = current || (prefersDark ? "dark" : "light");
  btn.textContent = effective === "dark" ? "☀️" : "🌙";
}

// ---------- Timeline (roadmap) ----------
function renderTimeline() {
  const el = document.getElementById("timeline");
  el.innerHTML = WEEKS.map(w => `
    <a class="timeline-item" href="#week-${w.id}">
      <span class="week-no">Week ${w.id}</span>
      <span class="week-dates">${escapeHtml(w.dates)}</span>
      <span class="week-title"><span class="status-dot ${w.status}"></span>${escapeHtml(w.title)}</span>
    </a>
  `).join("");
}

// ---------- Modules ----------
function renderModules() {
  const el = document.getElementById("modulesList");
  el.innerHTML = WEEKS.map(w => renderModule(w)).join("");

  el.querySelectorAll(".module-header").forEach(header => {
    header.addEventListener("click", () => {
      header.closest(".module").classList.toggle("open");
    });
  });
}

function renderModule(w) {
  const topicsHtml = w.topics.length
    ? `<h4 class="sub">Topics covered</h4><ul class="topics">${w.topics.map(t => `<li>${escapeHtml(t)}</li>`).join("")}</ul>`
    : "";

  const formulasHtml = w.formulas.length
    ? `<h4 class="sub">Key formulas</h4>${w.formulas.map(f => `<div class="formula-box">${escapeHtml(f)}</div>`).join("")}`
    : "";

  const materialsHtml = w.materials.length
    ? `<h4 class="sub">Class materials</h4><ul class="materials">${w.materials.map(m => `<li>${escapeHtml(m)}</li>`).join("")}</ul>`
    : "";

  const videosHtml = `<h4 class="sub">Videos</h4>${w.videos.map(v => `
    <div class="video-slot">
      <div class="video-label">${escapeHtml(v.label)}</div>
      ${v.url
        ? `<a class="video-link" href="${escapeHtml(v.url)}" target="_blank" rel="noopener">Open on Google Drive ↗</a>`
        : `<span class="no-link">No link yet — add it in js/content.js (videos[].url)</span>`}
    </div>
  `).join("")}`;

  const transcriptHtml = `<h4 class="sub">Notes / transcript</h4>
    <div class="transcript-box">${w.transcript ? escapeHtml(w.transcript) : "No notes yet. Paste a transcript (e.g. from Gemini Notebook) into js/content.js → this week's `transcript` field."}</div>`;

  // w.reading is trusted, hand-authored HTML (not user input) — rendered as-is.
  const readingHtml = w.reading
    ? `<h4 class="sub">In depth</h4><div class="reading-content">${w.reading}</div>`
    : "";

  return `
    <article class="module" id="week-${w.id}">
      <div class="module-header">
        <div class="module-header-left">
          <h3>Week ${w.id} — ${escapeHtml(w.title)}</h3>
          <span class="dates">${escapeHtml(w.dates)}</span>
          <span class="badge ${w.status}">${w.status === "done" ? "Covered" : "Upcoming"}</span>
        </div>
        <svg class="chevron" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <path d="M6 9l6 6 6-6" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </div>
      <div class="module-body">
        <p class="module-summary">${escapeHtml(w.summary)}</p>
        ${readingHtml}
        <div class="module-grid">
          <div>${topicsHtml}${formulasHtml}</div>
          <div>${materialsHtml}${videosHtml}${transcriptHtml}</div>
        </div>
      </div>
    </article>
  `;
}

// ---------- To-do (derived from every week's topics) ----------
function renderTodo() {
  const el = document.getElementById("todoList");
  const items = [];
  WEEKS.forEach(w => {
    w.topics.forEach((t, i) => {
      items.push({ id: `w${w.id}-t${i}`, week: w.id, weekTitle: w.title, text: t });
    });
  });

  el.innerHTML = items.map(it => `
    <label class="todo-item ${checked.has(it.id) ? "checked" : ""}" data-id="${it.id}">
      <input type="checkbox" ${checked.has(it.id) ? "checked" : ""} />
      <span class="todo-text">
        <strong>${escapeHtml(it.text)}</strong>
        <span>Week ${it.week} — ${escapeHtml(it.weekTitle)}</span>
      </span>
    </label>
  `).join("");

  el.querySelectorAll(".todo-item").forEach(row => {
    const id = row.dataset.id;
    const input = row.querySelector("input");
    input.addEventListener("change", () => {
      if (input.checked) checked.add(id); else checked.delete(id);
      row.classList.toggle("checked", input.checked);
      saveChecked(checked);
      updateProgress(items.length);
    });
  });

  updateProgress(items.length);
}

function updateProgress(total) {
  const fill = document.getElementById("progressFill");
  const label = document.getElementById("progressLabel");
  const done = [...checked].filter(id => true).length; // all stored ids are valid topic ids
  const pct = total ? Math.round((Math.min(done, total) / total) * 100) : 0;
  fill.style.width = pct + "%";
  label.textContent = `${Math.min(done, total)} / ${total} topics checked off`;
}

// ---------- Resources ----------
function renderResources() {
  const assessEl = document.getElementById("assessGrid");
  assessEl.innerHTML = COURSE.assessments.map(a => `
    <div class="assess-card">
      <span class="name">${escapeHtml(a.name)}</span>
      <span class="weight">${escapeHtml(a.weight)}</span>
      <span class="detail">${escapeHtml(a.detail)}</span>
      ${a.released !== "—" ? `<span class="released">Released: ${escapeHtml(a.released)}</span>` : ""}
    </div>
  `).join("");

  const scheduleBody = document.querySelector("#scheduleTable tbody");
  scheduleBody.innerHTML = COURSE.schedule.map(s => `
    <tr><td>${escapeHtml(s.time)}</td><td>${escapeHtml(s.activity)}</td></tr>
  `).join("");

  const booksEl = document.getElementById("booksGrid");
  booksEl.innerHTML = COURSE.books.map(b => `
    <div class="book-card">
      <strong>${escapeHtml(b.title)}</strong>
      <span>${escapeHtml(b.author)}</span>
      <span>${escapeHtml(b.note)}</span>
    </div>
  `).join("");
}

// ---------- Deep-link open ----------
function openModuleFromHash() {
  const hash = window.location.hash;
  if (!hash) return;
  const target = document.querySelector(hash);
  if (target && target.classList.contains("module")) {
    target.classList.add("open");
    setTimeout(() => target.scrollIntoView({ behavior: "smooth", block: "start" }), 50);
  }
}

// ---------- Init ----------
document.addEventListener("DOMContentLoaded", () => {
  initTheme();
  renderTimeline();
  renderModules();
  renderTodo();
  renderResources();
  openModuleFromHash();
  window.addEventListener("hashchange", openModuleFromHash);
});
