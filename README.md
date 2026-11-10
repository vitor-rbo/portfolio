# Vitor Oliveira — Portfolio

Personal portfolio website: a short intro, skills, a featured project and contact details.

**Live site:** https://vitoroliveiradev.vercel.app

## Features

- Single-page layout with a sticky navigation bar and smooth scrolling between sections
- Light and dark mode, following the system setting with a manual toggle
- English and Portuguese translations, with the choice remembered between visits
- Custom Material UI theme, typography and logo, rather than the default look
- Responsive down to phone widths, and respects the reduced-motion setting

## Tech stack

- [React](https://react.dev/) and [TypeScript](https://www.typescriptlang.org/)
- [Vite](https://vite.dev/) for development and builds
- [Material UI](https://mui.com/) for components and theming
- [Oxlint](https://oxc.rs/docs/guide/usage/linter) for linting
- Hosted on [Vercel](https://vercel.com/)

## Getting started

Requires Node.js 20.19 or newer (or 22.12+).

```bash
npm install
npm run dev
```

The dev server starts at http://localhost:5173 and reloads when files change.

### Scripts

| Command           | What it does                                  |
| ----------------- | --------------------------------------------- |
| `npm run dev`     | Start the development server                  |
| `npm run build`   | Type-check and create a production build      |
| `npm run preview` | Serve the production build locally            |
| `npm run lint`    | Run the linter                                |

## Project structure

```
public/            Static files served as-is: project screenshot, favicon
src/
  components/      One file per page section, plus the nav, logo and shared pieces
  content.ts       All page text (English and Portuguese), plus links and project data
  i18n.tsx         Language provider: stores the language choice, updates title and lang
  theme.ts         Material UI theme: colours for both modes, fonts, component defaults
  App.tsx          Page layout
  main.tsx         Entry point
```

## Editing the content

Almost everything on the page lives in `src/content.ts`:

- **Text:** edit the `en` and `pt` objects. Both must have the same shape, and TypeScript reports an error if one is missing a field.
- **Links and email:** the `profile` object.
- **Project details:** `project` (links, tags, image) and the `projects` section of each language.
- **Screenshot:** replace the file in `public/`, keeping the same filename.
- **Colours and fonts:** `src/theme.ts`.

## Deployment

The site is deployed on Vercel from the `main` branch. Every push to `main` triggers a new production deployment, using the framework defaults (build command `npm run build`, output directory `dist`).
