# 👨‍💻 dev-portfolio

> My personal portfolio, built on **Bootstrap 5** with a custom design system. It covers featured ML and security work, a filterable gallery of web builds, and light and dark themes.

**🔗 Live site:** https://himanshuuem.github.io/dev-portfolio/

![Bootstrap](https://img.shields.io/badge/Bootstrap-5.3-7952B3?logo=bootstrap&logoColor=white)
![JavaScript](https://img.shields.io/badge/ES_Modules-F7DF1E?logo=javascript&logoColor=black)
![GitHub Pages](https://img.shields.io/badge/GitHub_Pages-222?logo=githubpages&logoColor=white)

## ✨ Features

- **Content as data:** skills, project builds, filter categories and the hero's rotating phrases all live in `data.js`. Adding a project is one line.
- **Filterable build gallery:** category buttons show live counts and set `aria-pressed`.
- **Bootstrap ScrollSpy** highlights the current section in a frosted fixed navbar. The mobile menu closes when you pick a link.
- **Custom theming:** Bootstrap 5.3's `data-bs-theme` with my own tokens (a mint accent, Sora and IBM Plex Mono) and a persisted light/dark toggle with no flash on load.
- **Hero details:** a masked grid background and a rotating tagline. Both turn off under `prefers-reduced-motion`.
- Semantic sections and safe DOM rendering through `textContent`.

## 🛠 Tech Stack

Bootstrap 5.3 (grid, navbar, collapse, ScrollSpy) · CSS custom properties · `color-mix()` · CSS masks · Vanilla JS ES modules

## 📁 Structure

```
dev-portfolio/
├── index.html   # Page sections
├── styles.css   # Theme tokens over Bootstrap
├── data.js      # Skills, builds, categories, phrases
├── app.js       # Rendering, filters, theme, rotator
└── README.md
```

## 🚀 Run Locally

```bash
git clone https://github.com/himanshuuem/dev-portfolio.git
cd dev-portfolio
npx serve .
```

## 📚 Origin

This is my answer to *Capstone 1: Bootstrap Portfolio* from [The Complete Web Development Bootcamp](https://www.udemy.com/course/the-complete-web-development-bootcamp/). It doubles as the index of every project I rebuilt from the course.

---

Made by [Himanshu](https://github.com/himanshuuem)
