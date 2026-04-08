# Webcraft Studio — Angular Site

A clean, single-page Angular 17 website for a web design business.

## Structure

```
src/
  app/
    nav/          — Fixed navigation bar
    hero/         — Hero section with headline + CTA
    services/     — 4 service cards
    work/         — 3 portfolio project rows
    contact/      — Contact form with validation
    footer/       — Simple footer
  styles.css      — Global CSS variables & resets
  index.html      — Loads Google Fonts
```

## Getting Started

```bash
# Install dependencies
npm install

# Start dev server (http://localhost:4200)
npm start

# Build for production
npm run build
```

## Customisation

- **Business name / copy** — edit the template strings in each component
- **Colours** — change CSS variables in `src/styles.css`
- **Fonts** — swap the Google Fonts link in `src/index.html` and update `--font-display` / `--font-body`
- **Services** — edit the `services` array in `services.component.ts`
- **Projects** — edit the `projects` array in `work.component.ts`
- **Contact form** — currently shows a success message on submit; wire up to a backend/Formspree/EmailJS as needed

## Tech

- Angular 17 (standalone components, no NgModules)
- Pure CSS (no Tailwind or UI libraries)
- Google Fonts: Instrument Serif + DM Sans
