# Syncfusion® — Recreated with Scalable Framer Design System

[![Syncfusion](https://img.shields.io/badge/Syncfusion-Essential%20Studio-6369ff?style=flat-square)](https://www.syncfusion.com/)
[![Design Direction](https://img.shields.io/badge/Design%20Direction-Scalable%20Framer-1aff75?style=flat-square)](https://scalable.framer.website/)
[![Live Preview](https://img.shields.io/badge/Live%20Demo-ragazabrian.github.io%2Fsyncfusion--scalable-6369ff?style=flat-square&logo=github)](https://ragazabrian.github.io/syncfusion-scalable/)
[![Framework](https://img.shields.io/badge/Stack-React%2019%20%2B%20Tailwind-white?style=flat-square)](https://react.dev/)
[![License](https://img.shields.io/badge/License-MIT-blue?style=flat-square)](LICENSE)

A full modern recreation of [Syncfusion®](https://www.syncfusion.com/) enterprise component and document processing platform, completely redesigned following the exact layout, structure, and high-end dark SaaS aesthetic of the [Scalable Framer Template](https://scalable.framer.website/).

🔗 **Live Public Preview**: **[https://ragazabrian.github.io/syncfusion-scalable/](https://ragazabrian.github.io/syncfusion-scalable/)**

---

## 🌟 Highlights

- **Deep Onyx & Glassmorphism Aesthetic**: Styled with `#0A0A0A` midnight backgrounds, crisp frosted glass cards (`backdrop-blur-2xl`), subtle border glows, and electric violet (`#6369FF`) / emerald mint (`#1AFF75`) accents.
- **Editorial Typography**: Pairing clean geometric sans-serif (`DM Sans`, `Inter`) with elegant italic serif accents (`Instrument Serif`) on key display headlines.
- **Live Interactive Demos**:
  - **Virtualized DataGrid**: Live search, column sorting, status tags, and export simulations.
  - **WebGL Realtime Chart**: High-frequency telemetry stream with live 60 FPS animation.
  - **In-App Document Studio**: PDF Viewer & Excel Spreadsheet mockups (forms, digital certificates, formulas).
  - **Code Studio AI Terminal**: Syncfusion-aware MCP prompt simulator generating verified component code.
- **Full Ecosystem Coverage**: Interactive framework code switchers for **Blazor, React 19, Angular 18+, Vue 3, .NET MAUI, and Flutter**.
- **Strategic Decision Matrix**: Explaining why Fortune 500s standardise on Syncfusion (Build Faster, Consolidate Vendors, Modernize & De-risk).
- **Official Raw Clone Archive**: Preserving Syncfusion's raw homepage snapshot, markdown files, and catalog manifest under `archive/syncfusion-raw/`.

---

## 🗂 Project Structure

```bash
syncfusion-scalable/
├── archive/
│   └── syncfusion-raw/             # Raw snapshot of the official Syncfusion site
│       ├── index.html              # Official homepage HTML snapshot
│       ├── index.md                # Official markdown content from syncfusion.com/index.md
│       └── manifest.json           # Catalog of products, frameworks, metrics & endpoints
├── src/
│   ├── components/
│   │   ├── Navbar.tsx              # Sticky blur navigation with dropdowns & trial CTA
│   │   ├── Hero.tsx                # Hero section with Scalable announcement badge & live mockup
│   │   ├── LogoMarquee.tsx         # Enterprise clients, G2 badges, Microsoft quote & stats
│   │   ├── BentoFeatures.tsx       # 4-card asymmetric bento grid (UI SDKs, Docs, AI, Suite)
│   │   ├── FrameworkSelector.tsx   # Interactive Blazor, React, Angular, MAUI, Flutter tabs
│   │   ├── InteractivePlayground.tsx# Live in-browser component sandbox & theme switcher
│   │   ├── WhySyncfusion.tsx       # 3-pillar strategic decision framework
│   │   ├── CustomerStories.tsx     # Case studies (Igniatek, McDaniel, Sistemi) & quotes
│   │   ├── PricingSection.tsx      # Annual/Monthly toggle with Community $0 & Enterprise
│   │   ├── FaqSection.tsx          # Interactive accordion FAQ
│   │   ├── CtaBanner.tsx           # High-impact bottom radial glow banner
│   │   ├── Footer.tsx              # System status indicator, framework links, and compliance
│   │   └── DemoModal.tsx           # Interactive 30-day evaluation key generator
│   ├── App.tsx                     # Main layout orchestration
│   ├── main.tsx                    # React DOM entry
│   └── index.css                   # Glassmorphism utilities & theme tokens
├── tailwind.config.js              # Scalable Framer theme extension
├── vite.config.ts                  # Vite 6 configuration
└── package.json
```

---

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ or [Bun](https://bun.sh/)

### Installation & Run

```bash
# Clone the repository
git clone https://github.com/ragazabrian/syncfusion-scalable.git
cd syncfusion-scalable

# Install dependencies
bun install
# or: npm install

# Start local development server
bun run dev
# or: npm run dev
```

Visit `http://localhost:3000` to interact with the application.

### Production Build

```bash
bun run build
# or: npm run build
```

---

## 🎨 Design System References

- **Scalable Framer Template**: [scalable.framer.website](https://scalable.framer.website/)
- **Syncfusion Official Website**: [syncfusion.com](https://www.syncfusion.com/)
- **Colors**:
  - Background: `#0A0A0A`, `#0D0D0D`, `#141414`
  - Accent Primary: `#6369FF` (Electric Violet), `#4F1AD6`
  - Accent Neon: `#1AFF75` (Luminous Mint)
  - Text: `#F5F5F8` (Primary), `#8E8E93` (Muted), `#636366` (Dim)

---

## 📄 License

MIT License. Designed and recreated for demonstration and architectural study.
