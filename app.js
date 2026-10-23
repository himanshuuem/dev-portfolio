import { SKILLS, BUILDS, CATEGORIES, ROTATING_PHRASES } from "./data.js";

const THEME_KEY = "portfolio-theme";
const root = document.documentElement;
const reducedMotion = matchMedia("(prefers-reduced-motion: reduce)").matches;

function el(tag, className, text) {
  const node = document.createElement(tag);
  if (className) node.className = className;
  if (text !== undefined) node.textContent = text;
  return node;
}

function renderSkills() {
  const cols = SKILLS.map(({ group, items }) => {
    const col = el("div", "col-sm-6");
    const card = el("div", "skill-card h-100 p-3 rounded-4");
    card.append(el("h3", "h6 fw-bold mb-2", group));
    const list = el("div", "d-flex flex-wrap gap-1");
    list.append(...items.map((item) => el("span", "badge skill-badge", item)));
    card.append(list);
    col.append(card);
    return col;
  });
  document.querySelector("#skills").replaceChildren(...cols);
}

function renderBuildFilters(active) {
  const counts = Object.fromEntries(CATEGORIES.map(([key]) => [key, key === "all" ? BUILDS.length : BUILDS.filter((b) => b.category === key).length]));
  const buttons = CATEGORIES.filter(([key]) => counts[key] > 0).map(([key, label]) => {
    const button = el("button", `btn btn-sm rounded-pill ${key === active ? "btn-accent" : "btn-outline-secondary"}`, `${label} · ${counts[key]}`);
    button.type = "button";
    button.dataset.category = key;
    button.setAttribute("aria-pressed", String(key === active));
    return button;
  });
  document.querySelector("#buildFilters").replaceChildren(...buttons);
}

function renderBuilds(category = "all") {
  const builds = category === "all" ? BUILDS : BUILDS.filter((b) => b.category === category);
  const cards = builds.map((build) => {
    const col = el("div", "col-sm-6 col-lg-4");
    const card = el("article", "build-card h-100 p-3 rounded-4 d-flex flex-column");
    card.append(el("h3", "h6 fw-bold mb-1", build.name), el("p", "small text-body-secondary flex-grow-1 mb-3", build.blurb));
    const links = el("div", "d-flex gap-3 small mono");
    if (build.demo) links.append(Object.assign(el("a", "link-accent", "live ↗"), { href: build.demo }));
    links.append(Object.assign(el("a", "link-secondary", "code ↗"), { href: build.code }));
    card.append(links);
    col.append(card);
    return col;
  });
  document.querySelector("#buildGrid").replaceChildren(...cards);
  renderBuildFilters(category);
}

function startRotator() {
  const target = document.querySelector(".rotator");
  if (reducedMotion) return;
  let index = 0;
  setInterval(() => {
    index = (index + 1) % ROTATING_PHRASES.length;
    target.classList.add("out");
    setTimeout(() => {
      target.textContent = ROTATING_PHRASES[index];
      target.classList.remove("out");
    }, 300);
  }, 2800);
}

document.querySelector("#buildFilters").addEventListener("click", (event) => {
  const category = event.target.closest("[data-category]")?.dataset.category;
  if (category) renderBuilds(category);
});

document.querySelector("#themeToggle").addEventListener("click", () => {
  const next = root.dataset.bsTheme === "dark" ? "light" : "dark";
  root.dataset.bsTheme = next;
  try { localStorage.setItem(THEME_KEY, next); } catch { /* storage blocked */ }
});

// Collapse the mobile menu after choosing a section.
document.querySelectorAll("#navLinks .nav-link").forEach((link) => {
  link.addEventListener("click", () => bootstrap.Collapse.getInstance("#navLinks")?.hide());
});

renderSkills();
renderBuilds();
startRotator();
