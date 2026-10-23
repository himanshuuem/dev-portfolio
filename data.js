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
