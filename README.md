<div align="center">

# 🚀 FUTURE_FS_01

### ✨ Modern Developer Portfolio — Fast, Animated & Production-Ready

[![Vite](https://img.shields.io/badge/Vite-8.0-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)
[![React](https://img.shields.io/badge/React-19.2-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://react.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![Framer Motion](https://img.shields.io/badge/Framer_Motion-12-0055FF?style=for-the-badge&logo=framer&logoColor=white)](https://www.framer.com/motion/)
[![License](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)](LICENSE)

**🌌 Iconic, modern, and fast — a single-page portfolio built for developers who want polish without complexity.**

[📖 Documentation](#-table-of-contents) · [⚡ Quick Start](#-quick-start) · [🧩 Components](#-components-reference) · [🎨 Theming](#-styling--theming) · [🚢 Deployment](#-deployment)

</div>

---

## 📋 Table of Contents

- [📌 Project Overview](#-project-overview)
- [✨ Features](#-features)
- [🛠️ Tech Stack](#️-tech-stack)
- [⚡ Quick Start](#-quick-start)
- [📜 Available Scripts](#-available-scripts)
- [📁 Project Structure](#-project-structure)
- [🧭 Routing & Navigation](#-routing--navigation)
- [🧩 Components Reference](#-components-reference)
- [🎨 Styling & Theming](#-styling--theming)
- [🔧 Configuration](#-configuration)
- [✏️ Customization Guide](#️-customization-guide)
- [🚢 Deployment](#-deployment)
- [♿ Accessibility](#-accessibility)
- [🤝 Contributing](#-contributing)
- [🐛 Troubleshooting](#-troubleshooting)
- [❓ FAQ](#-faq)
- [📄 License & Credits](#-license--credits)

---

## 📌 Project Overview

**FUTURE_FS_01** is a responsive, accessible **developer portfolio** and landing site built with **Vite**, **React 19**, **Tailwind CSS**, and **Framer Motion**. It uses **hash-based routing** (`#home`, `#about`, etc.) so you get multi-page feel without a router dependency — ideal for static hosting on GitHub Pages, Netlify, or Vercel.

| | |
|---|---|
| 🎯 **Purpose** | Showcase skills, projects, resume, and contact in one polished site |
| ⚡ **Performance** | Vite bundling, code-split-friendly structure, minimal dependencies |
| 🎭 **UX** | Page transitions, typewriter hero, glass navbar, light/dark theme |
| 📱 **Responsive** | Mobile-first layout with collapsible navigation |
| 🔌 **Extensible** | Clear component boundaries and reusable UI primitives |

---

## ✨ Features

### 🖥️ Core Experience

- **🏠 Hash-based SPA navigation** — Switch sections via `#home`, `#about`, `#skills`, `#projects`, `#resume`, `#contact` without full page reloads
- **🎬 Framer Motion animations** — Smooth enter/exit transitions when changing sections
- **⌨️ Typewriter hero** — Animated rotating job titles on the home page
- **🌓 Light / Dark theme** — Toggle with persistence in `localStorage` and system-preference fallback
- **📲 Responsive navbar** — Glass effect on scroll, desktop links, mobile drawer menu

### 📄 Content Sections

| Section | Icon | Description |
|---------|------|-------------|
| **Hero** | 🦸 | Introduction, CTAs, social links, animated background |
| **Future Projects** | 🔮 | Roadmap / planned work with status badges |
| **About** | 👤 | Personal story and background |
| **Skills** | 🧠 | Categorized skills with tech icons (React Icons) |
| **Projects** | 💼 | Featured + filterable project grid with GitHub / live links |
| **Resume** | 📄 | Resume download or view section |
| **Contact** | ✉️ | Contact form and details |
| **Footer** | 🔗 | Copyright, quick links, social icons |

### 🎨 Design System

- **🎨 Custom Tailwind palette** — Orange/yellow gradients (light), sky/purple accents (dark)
- **✨ Glass morphism utilities** — `.glass` and `.glass-light` for navbar and cards
- **💫 Glow shadows & blob animations** — Premium visual depth
- **🔤 Outfit font** — Clean, modern typography via Google Fonts

---

## 🛠️ Tech Stack

| Category | Technology | Version |
|----------|------------|---------|
| ⚛️ **UI Library** | [React](https://react.dev/) | `^19.2.6` |
| 📦 **Bundler** | [Vite](https://vitejs.dev/) | `^8.0.12` |
| 🎨 **Styling** | [Tailwind CSS](https://tailwindcss.com/) | `^3.4.19` |
| 🎬 **Animation** | [Framer Motion](https://www.framer.com/motion/) | `^12.38.0` |
| 🎯 **Icons** | [React Icons](https://react-icons.github.io/react-icons/) | `^5.6.0` |
| 🧹 **Linting** | [ESLint](https://eslint.org/) + React Hooks / Refresh plugins | `^10.3.0` |
| 🔧 **CSS Processing** | PostCSS + Autoprefixer | — |

---

## ⚡ Quick Start

### 📋 Prerequisites

| Requirement | Minimum |
|-------------|---------|
| 🟢 **Node.js** | `18.x` or higher recommended (`16+` supported) |
| 📦 **Package manager** | `npm`, `yarn`, or `pnpm` |

### 📥 Installation

```bash
# 1️⃣ Clone the repository
git clone https://github.com/Rajan-4900/FUTURE_FS_01.git
cd FUTURE_FS_01

# 2️⃣ Install dependencies
npm install
```

### 🏃 Development

```bash
npm run dev
```

Open the URL shown in the terminal (typically **http://localhost:5173**).

### 🏗️ Production Build

```bash
# Build optimized static assets → dist/
npm run build

# Preview production build locally
npm run preview
```

### 🔍 Lint

```bash
npm run lint
```

---

## 📜 Available Scripts

| Script | Command | Description |
|--------|---------|-------------|
| 🟢 `dev` | `npm run dev` | Start Vite dev server with HMR |
| 📦 `build` | `npm run build` | Output production bundle to `dist/` |
| 👁️ `preview` | `npm run preview` | Serve `dist/` locally for testing |
| 🧹 `lint` | `npm run lint` | Run ESLint across the project |

---

## 📁 Project Structure

```
FUTURE_FS_01/
├── 📄 index.html              # Vite HTML entry + meta tags
├── 📄 vite.config.js          # Vite + React plugin config
├── 📄 tailwind.config.js      # Theme tokens, colors, animations
├── 📄 postcss.config.js       # Tailwind + Autoprefixer
├── 📄 eslint.config.js        # Flat ESLint config
├── 📂 public/                 # Static assets (favicon, etc.)
│   └── icons.svg
└── 📂 src/
    ├── 📄 main.jsx            # React root mount
    ├── 📄 App.jsx             # Layout, hash routing, page switching
    ├── 📄 index.css           # Tailwind directives + global utilities
    ├── 📄 App.css             # App-level styles (if any)
    ├── 📂 assets/             # Project screenshots & images
    ├── 📂 context/
    │   └── ThemeContext.jsx   # Theme provider + useTheme hook
    └── 📂 components/
        ├── Hero.jsx           # Landing hero + typewriter
        ├── Navbar.jsx         # Top navigation
        ├── About.jsx          # About section
        ├── Skills.jsx         # Skills grid with categories
        ├── Projects.jsx       # Project cards + filters
        ├── FutureProjects.jsx # Planned projects roadmap
        ├── Resume.jsx         # Resume section
        ├── Contact.jsx        # Contact section
        ├── Footer.jsx         # Site footer
        └── 📂 ui/
            ├── Section.jsx         # Consistent section wrapper
            ├── SectionTitle.jsx    # Section headings
            ├── ThemeToggle.jsx     # Light/dark switch
            ├── MobileMenu.jsx      # Mobile nav drawer
            ├── SocialIcons.jsx     # Social link buttons
            └── GlowBackground.jsx  # Animated hero background
```

---

## 🧭 Routing & Navigation

This app does **not** use React Router. Navigation is handled with **URL hashes**:

```
#home      → Hero + Future Projects
#about     → About section
#skills    → Skills section
#projects  → Projects section
#resume    → Resume section
#contact   → Contact section
```

**How it works:**

1. `Navbar` links use `href="#section"` (e.g. `#projects`).
2. `App.jsx` listens for `hashchange` and updates `currentPage` state.
3. `AnimatePresence` + `motion.div` animate between sections.
4. On route change, the window scrolls to the top.

To add a new page:

1. Create `src/components/YourSection.jsx`.
2. Add `{ name: "Your Page", href: "#yourpage" }` to `navLinks` in `Navbar.jsx`.
3. Render it in `App.jsx` when `currentPage === "yourpage"`.

---

## 🧩 Components Reference

### 📄 Page Components

| File | Role |
|------|------|
| `Hero.jsx` | Typewriter titles, CTA buttons, `GlowBackground`, `SocialIcons` |
| `FutureProjects.jsx` | Roadmap cards with category icons and status emojis |
| `About.jsx` | Bio and personal information |
| `Skills.jsx` | Tabbed/categorized skills with `react-icons/si` brand icons |
| `Projects.jsx` | Featured projects, category filters, GitHub & live demo links |
| `Resume.jsx` | Resume display or download |
| `Contact.jsx` | Contact form and reach-out details |
| `Footer.jsx` | Footer links and branding |
| `Navbar.jsx` | Logo, nav links, scroll styling, mobile menu trigger |

### 🧱 UI Primitives (`src/components/ui/`)

| File | Role |
|------|------|
| `Section.jsx` | Max-width container and vertical spacing for sections |
| `SectionTitle.jsx` | Consistent heading + subtitle styling |
| `ThemeToggle.jsx` | Sun/moon toggle wired to `ThemeContext` |
| `MobileMenu.jsx` | Full-screen or slide-out mobile navigation |
| `SocialIcons.jsx` | GitHub, LinkedIn, etc. icon buttons |
| `GlowBackground.jsx` | Animated gradient blobs behind hero |

### 🌓 Context

| File | API |
|------|-----|
| `ThemeContext.jsx` | `ThemeProvider`, `useTheme()` → `{ theme, toggleTheme }` |

---

## 🎨 Styling & Theming

### 🎨 Design Tokens (`tailwind.config.js`)

| Token | Usage |
|-------|--------|
| `dark-bg`, `dark-card`, `dark-border` | Dark mode surfaces |
| `light-bg`, `light-card`, `light-border` | Light mode surfaces |
| `primary-orange`, `primary-yellow` | Brand gradients & accents |
| `glow-orange`, `glow-yellow` | Box-shadow glow effects |
| `animation-blob` | Background blob movement |

### 🌓 Theme Behavior

- **Dark mode:** `class` strategy on `<html>` (`dark` / `light`)
- **Persistence:** `localStorage.theme`
- **Fallback:** `prefers-color-scheme` media query, then defaults to **dark**
- **Toggle:** `ThemeToggle.jsx` calls `toggleTheme()` from context

### 🧰 Global Utilities (`src/index.css`)

| Class | Purpose |
|-------|---------|
| `.glass` | Frosted panel (dark mode) |
| `.glass-light` | Frosted panel (light mode) |
| `.text-gradient` | Orange→yellow (light) / sky→purple (dark) gradient text |
| `.animate-marquee` | Horizontal scrolling marquee |

---

## 🔧 Configuration

| File | Purpose |
|------|---------|
| `vite.config.js` | Vite plugins (`@vitejs/plugin-react`) |
| `tailwind.config.js` | Content paths, theme extensions, dark mode |
| `postcss.config.js` | Tailwind + Autoprefixer pipeline |
| `eslint.config.js` | Recommended JS + React Hooks + Refresh rules |

### 🔐 Environment Variables

For build-time config, add a `.env` file:

```env
VITE_APP_TITLE=My Portfolio
```

Access in code:

```js
import.meta.env.VITE_APP_TITLE
```

> ⚠️ **Never commit secrets.** Prefix public vars with `VITE_` only.

---

## ✏️ Customization Guide

### 1️⃣ Site Metadata

Edit `index.html` — update `<title>`, favicon, and meta description.

### 2️⃣ Branding & Navbar

- **Logo text:** `Navbar.jsx` (search for `Rajan`)
- **Nav links:** `navLinks` array in `Navbar.jsx`

### 3️⃣ Hero Content

- **Name, titles, CTAs:** `Hero.jsx`
- **Typewriter words:** `words` array in the `Typewriter` component

### 4️⃣ Projects

Edit the `projects` array in `Projects.jsx`:

```js
{
  title: "My App",
  description: "Short description...",
  tech: ["React", "Node.js"],
  github: "https://github.com/you/repo",
  external: "https://live-demo.com",
  featured: true,
  image: myScreenshot, // optional import from assets/
  category: "frontend", // for filters
}
```

Add screenshots under `src/assets/`.

### 5️⃣ Skills

Update `skillCategories` in `Skills.jsx` — each skill supports `name`, `level`, `desc`, and a React Icon.

### 6️⃣ Social Links

Configure URLs in `SocialIcons.jsx`.

### 7️⃣ Colors & Fonts

- **Colors:** `tailwind.config.js` → `theme.extend.colors`
- **Font:** `src/index.css` → Google Fonts import + `font-family`

---

## 🚢 Deployment

The build outputs static files to **`dist/`**. Deploy that folder to any static host.

### ▲ Vercel

1. Push to GitHub
2. Import project on [vercel.com](https://vercel.com)
3. **Build command:** `npm run build`
4. **Output directory:** `dist`

### 🌐 Netlify

1. Connect repository
2. **Build:** `npm run build`
3. **Publish directory:** `dist`

### 📄 GitHub Pages

If deploying to `https://username.github.io/repo-name/`, set `base` in `vite.config.js`:

```js
export default defineConfig({
  base: '/FUTURE_FS_01/',
  plugins: [react()],
})
```

Then build and deploy `dist/` (e.g. with `gh-pages` branch or GitHub Actions).

---

## ♿ Accessibility

| Practice | Status |
|----------|--------|
| 🏷️ Semantic HTML | Sections use meaningful structure |
| 🧭 `aria-label` on nav | Desktop navigation labeled |
| ⌨️ Keyboard-friendly links | Hash links and buttons focusable |
| 🌗 Contrast | Theme-aware text and backgrounds |

**Recommended checks:**

- Run [Lighthouse](https://developer.chrome.com/docs/lighthouse) accessibility audit
- Test keyboard navigation through navbar and CTAs
- Verify focus states on interactive elements

---

## 🤝 Contributing

Contributions are welcome! 🎉

1. 🍴 Fork the repository
2. 🌿 Create a branch: `git checkout -b feat/your-feature`
3. ✏️ Make changes and test locally (`npm run dev`)
4. ✅ Run `npm run lint`
5. 📤 Open a Pull Request with a clear description

**PR checklist:**

- [ ] Builds with `npm run build`
- [ ] Lint passes with `npm run lint`
- [ ] UI is responsive on mobile and desktop
- [ ] New sections follow `Section` / `SectionTitle` patterns

---

## 🐛 Troubleshooting

| Problem | Solution |
|---------|----------|
| 🚫 Dev server won't start | Ensure Node 18+, port 5173 is free |
| 🎨 Tailwind classes missing | Confirm `@tailwind` in `index.css` and paths in `tailwind.config.js` |
| 🌓 Theme not persisting | Check browser allows `localStorage` |
| 🔗 Hash route shows blank | Verify `currentPage` case in `App.jsx` matches hash (no `#`) |
| 📦 Build fails | Delete `node_modules` + `package-lock.json`, run `npm install` again |

---

## ❓ FAQ

**Q: Where do I change the browser tab title?**  
A: Edit `<title>` in `index.html`.

**Q: How do I add Google Analytics?**  
A: Paste the tracking snippet in `index.html` before `</head>`.

**Q: Can I use React Router instead of hashes?**  
A: Yes — install `react-router-dom`, refactor `App.jsx` and nav links; set Vite `base` if needed for hosting.

**Q: Where is the resume file?**  
A: Check `Resume.jsx` for the download link path (add your PDF to `public/` or `src/assets/`).

**Q: How do I disable page transition animations?**  
A: Remove or simplify `AnimatePresence` / `motion.div` wrappers in `App.jsx`.

---

## 📄 License & Credits

| | |
|---|---|
| 📜 **License** | [MIT License](LICENSE) — free to use, modify, and distribute |
| 👤 **Author** | [Rajan](https://github.com/Rajan-4900) |
| 🔗 **Repository** | [github.com/Rajan-4900/FUTURE_FS_01](https://github.com/Rajan-4900/FUTURE_FS_01) |

### 🙏 Built With

- [Vite](https://vitejs.dev/) — Lightning-fast tooling
- [React](https://react.dev/) — UI library
- [Tailwind CSS](https://tailwindcss.com/) — Utility-first styling
- [Framer Motion](https://www.framer.com/motion/) — Production-grade motion
- [React Icons](https://react-icons.github.io/react-icons/) — Icon sets (Feather, Simple Icons, etc.)

---

<div align="center">

**⭐ If this project helped you, consider giving it a star on GitHub!**

Made with ❤️ by Rajan · © FUTURE_FS_01

</div>
