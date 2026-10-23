export const SKILLS = [
  { group: "Machine Learning", items: ["Python", "PyTorch", "scikit-learn", "Pandas", "Feature engineering", "Model evaluation"] },
  { group: "Security", items: ["Intrusion & anomaly detection", "IoT security", "Docker sandboxing"] },
  { group: "AI Agents", items: ["LLM tooling", "MCP servers", "RAG", "Automation"] },
  { group: "Web", items: ["JavaScript", "Node.js", "Express", "PostgreSQL", "React", "Bootstrap"] },
];

const pages = (repo) => `https://himanshuuem.github.io/${repo}/`;
const repoUrl = (repo) => `https://github.com/himanshuuem/${repo}`;

// category: frontend | backend | database | react
export const BUILDS = [
  { name: "CineList", repo: "cinelist", category: "frontend", blurb: "Ranked film watchlist with filters, search and dark mode.", demo: pages("cinelist") },
  { name: "Stargazer RSVP", repo: "rsvp-card", category: "frontend", blurb: "Glassmorphism invite with countdown and .ics export.", demo: pages("rsvp-card") },
  { name: "terminal-folio", repo: "terminal-folio", category: "frontend", blurb: "Terminal-styled multi-page personal site.", demo: pages("terminal-folio") },
  { name: "Hue Lexicon", repo: "hue-lexicon", category: "frontend", blurb: "Multilingual colour dictionary with WCAG contrast checks.", demo: pages("hue-lexicon") },
  { name: "Daily Spark", repo: "daily-spark", category: "frontend", blurb: "Mood-themed quote card with PNG export.", demo: pages("daily-spark") },
  { name: "Studio Nine", repo: "studio-nine", category: "frontend", blurb: "Editorial agency landing page with scroll reveals.", demo: pages("studio-nine") },
  { name: "TierUp", repo: "tierup", category: "frontend", blurb: "Flexbox pricing page with billing and currency toggles.", demo: pages("tierup") },
  { name: "Bento", repo: "bento-grid", category: "frontend", blurb: "CSS Grid dashboard with live GitHub stats.", demo: pages("bento-grid") },
  { name: "PetPulse", repo: "petpulse", category: "frontend", blurb: "Bootstrap pet-adoption finder with live photos.", demo: pages("petpulse") },
  { name: "JS Katas", repo: "js-katas", category: "frontend", blurb: "JS fundamentals as pure, unit-tested functions.", demo: pages("js-katas") },
  { name: "Critical Roll", repo: "critical-roll", category: "frontend", blurb: "Fair crypto-random RPG dice roller with duel mode.", demo: pages("critical-roll") },
  { name: "BeatPad", repo: "beatpad", category: "frontend", blurb: "Web Audio drum machine with a 16-step sequencer.", demo: pages("beatpad") },
  { name: "Echo Pulse", repo: "echo-pulse", category: "frontend", blurb: "Neon Simon memory game built with jQuery.", demo: pages("echo-pulse") },
  { name: "QRForge", repo: "qrforge", category: "backend", blurb: "Node CLI for PNG/SVG/terminal QR codes." },
  { name: "Vault Gate", repo: "vault-gate", category: "backend", blurb: "Express middleware: rate limits, CSP, HMAC cookies." },
  { name: "Name Forge", repo: "name-forge", category: "backend", blurb: "Express + EJS generator with seeded share links." },
  { name: "DevLog", repo: "devlog", category: "backend", blurb: "Markdown blog engine with CRUD and sanitised HTML." },
  { name: "API Auth Lab", repo: "api-auth-lab", category: "backend", blurb: "Basic, API key and Bearer auth: provider + axios client." },
  { name: "SkyCast", repo: "skycast", category: "backend", blurb: "Open-Meteo weather with SVG charts and caching." },
  { name: "GeoQuest", repo: "geoquest", category: "database", blurb: "Postgres capitals/flags quiz with signed game state." },
  { name: "Wanderlog", repo: "wanderlog", category: "database", blurb: "Family travel map on Postgres with FK cascades." },
  { name: "TaskFlow", repo: "taskflow", category: "database", blurb: "Postgres task manager with ENUM priorities." },
  { name: "ShelfNotes", repo: "shelfnotes", category: "database", blurb: "Reading log with Open Library search and covers." },
  { name: "Whisper", repo: "whisper", category: "database", blurb: "bcrypt, Postgres sessions, Passport, OAuth, CSRF." },
  { name: "EmojiDex", repo: "emojidex", category: "react", blurb: "Ranked emoji search with favourites and dialogs.", demo: pages("emojidex") },
  { name: "FocusList", repo: "focuslist", category: "react", blurb: "Tasks + Pomodoro with useReducer and custom hooks.", demo: pages("focuslist") },
  { name: "NoteNest", repo: "notenest", category: "react", blurb: "Keep-style notes: labels, pins, archive, undo.", demo: pages("notenest") },
].map((build) => ({ ...build, code: repoUrl(build.repo) }));

export const CATEGORIES = [
  ["all", "All"],
  ["frontend", "Front-end"],
  ["backend", "Node & APIs"],
  ["database", "SQL & Auth"],
  ["react", "React"],
];

export const ROTATING_PHRASES = [
  "ML that defends networks",
  "agents that save people hours",
  "tools that grade code fairly",
  "fast, accessible web apps",
];
