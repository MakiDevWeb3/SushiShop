# Maki — Sushi Restaurant

Site web du restaurant Maki. Construit avec React, Vite, TypeScript et Tailwind CSS.

## Stack

- **React 18** + **TypeScript**
- **Vite** (bundler)
- **Tailwind CSS** + **shadcn/ui**
- **Framer Motion** (animations)
- **React Router** (navigation)

## Démarrage local

```bash
npm install
npm run dev
```

Le site sera disponible sur `http://localhost:8080`.

## Build

```bash
npm run build
```

Le build est généré dans le dossier `dist/`.

## Déploiement

Ce projet se déploie automatiquement sur **GitHub Pages** via GitHub Actions à chaque push sur la branche `main`.

Pour activer GitHub Pages :
1. Aller dans **Settings → Pages**
2. Source : **GitHub Actions**
3. (Optionnel) Configurer un domaine personnalisé dans **Settings → Pages → Custom domain**

## Tests

```bash
npm run test          # Tests unitaires (Vitest)
npx playwright test   # Tests E2E (Playwright)
```
