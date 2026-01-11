# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

**Project Name:** GitHub Profile Portfolio
**Type:** Static Portfolio Website + Profile Documentation
**Status:** Production (deployed to GitHub Pages)

This repository contains Jed Park's (x-ordo) professional portfolio:
- **portfolio/** - Next.js 16 static site with interactive UI components
- **x-ordo/** - Project documentation, profile content, and resume in markdown

## Tech Stack

| Layer | Technology |
|-------|------------|
| Framework | Next.js 16.1.1 (App Router, Static Export) |
| UI | React 19, Tailwind CSS 4, Framer Motion, GSAP |
| Language | TypeScript 5 |
| Deployment | GitHub Pages via GitHub Actions |

## Commands

```bash
cd portfolio

npm run dev              # Start dev server at http://localhost:3000
npm run build            # Static export to /out directory
npm run lint             # ESLint
npm run deploy           # Manual deploy: build + push to gh-pages
```

## Architecture

### Directory Structure

```
github-profile/
├── portfolio/
│   ├── app/                  # App Router pages
│   │   ├── page.tsx          # Home (Hero + Manifesto)
│   │   ├── about/            # About page (Amber theme)
│   │   ├── contact/          # Contact page
│   │   ├── resume/           # Resume pages (Blue theme)
│   │   │   ├── ko/           # Korean resume
│   │   │   └── en/           # English resume
│   │   └── projects/
│   │       └── [slug]/       # Dynamic project routes
│   ├── components/
│   │   ├── sections/         # Page section components
│   │   └── ui/               # Reusable UI primitives
│   ├── data/
│   │   ├── projects.ts       # Project data
│   │   ├── metrics.ts        # Dashboard metrics
│   │   ├── experience.ts     # Timeline data
│   │   └── translations/     # i18n content
│   │       ├── en.ts
│   │       └── ko.ts
│   ├── lib/
│   │   └── i18n.tsx          # I18n context provider
│   └── types/
│       ├── project.ts        # Project interfaces
│       └── i18n.ts           # Translation type definitions
│
└── x-ordo/                   # Profile documentation
```

### Static Export Configuration

- `output: "export"` generates fully static HTML
- `trailingSlash: true` for GitHub Pages compatibility
- `images: { unoptimized: true }` required for GitHub Pages

### i18n System

Client-side internationalization with React Context:

```typescript
// Usage in components
import { useI18n } from "@/lib/i18n";

function Component() {
  const { t, locale, toggleLocale } = useI18n();
  return <h1>{t.hero.title}</h1>;
}
```

**Adding translations:**
1. Update type in `types/i18n.ts`
2. Add content to both `data/translations/en.ts` and `ko.ts`

### Page Theme Differentiation

Each page type has a distinct color theme:

| Page | Theme | Primary Color | Purpose |
|------|-------|---------------|---------|
| Home | Green | `#00ff00` | Hacker aesthetic, first impression |
| About | Amber | `#f59e0b` | Warm, personal storytelling |
| Resume | Blue | `#3b82f6` | Professional, trustworthy |

### Design System Classes

Global CSS defines `ds-*` utility classes in `globals.css`:

```css
/* Sections */
.ds-section          /* Section with margin-top spacing */
.ds-section-padded   /* Section with margin + padding */

/* Badges */
.ds-badge            /* Section label badge */

/* Buttons */
.ds-button-primary   /* Green accent button */
.ds-button-secondary /* Dark button with green shadow */
.ds-button-outline   /* Transparent with border */

/* Grids */
.ds-grid-2, .ds-grid-3, .ds-grid-4  /* Responsive grids */

/* Spacing */
.ds-mt-section, .ds-mt-component, .ds-mt-element
```

### SSR/Hydration Patterns

For animated components with static export, use this pattern to avoid hydration mismatch:

```typescript
// Example: AnimatedNumber component
const [count, setCount] = useState(value);  // Start with actual value for SSR
const [hasAnimated, setHasAnimated] = useState(false);

useEffect(() => {
  // Animation only triggers when element enters viewport
  const observer = new IntersectionObserver((entries) => {
    if (entries[0].isIntersecting && !hasAnimated) {
      setHasAnimated(true);
      // Start animation from 0
    }
  });
  // ...
}, []);
```

### Project Data Flow

```
data/projects.ts → types/project.ts → app/projects/page.tsx
                                    └→ app/projects/[slug]/page.tsx
```

### Animation Components

- `Squares` - Background grid with hover effects
- `FloatingParticles` - Ambient floating dots
- `ClickSpark` - Green spark on click
- `PixelDog` - Interactive pixel art mascot

## Development Notes

### Adding New Projects

Add to `portfolio/data/projects.ts`:
```typescript
{
  slug: "project-slug",
  name: "Project Name",
  summary: "One-line description",
  description: "Full description",
  category: "ai-agent",  // See ProjectCategory type
  stack: ["Next.js", "Python"],
  highlights: ["Feature 1", "Feature 2"],
  featured: true,
  metrics: { duration: "2 weeks", role: "Solo", impact: "3x faster" }
}
```

### Project Categories

Defined in `types/project.ts`: `b2b-saas`, `b2c-consumer`, `ai-agent`, `automation`, `developer-tools`, `analytics`, `experimental`

### Deployment

Automatic via GitHub Actions on push to `main`. Live site: https://x-ordo.github.io

## Git Conventions

- Conventional Commits: `feat:`, `fix:`, `docs:`, `style:`, `refactor:`
- Feature branches → PR → main
