# 🍣 Maki — Sushi Restaurant

[![GitHub Pages](https://img.shields.io/badge/deployed%20on-GitHub%20Pages-blue)](https://makidevweb3.github.io/SushiShop/)
[![React](https://img.shields.io/badge/React-18-61DAFB?logo=react)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?logo=typescript)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite-6-646CFF?logo=vite)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3-38B2AC?logo=tailwind-css)](https://tailwindcss.com/)

Welcome to the official repository of the **Maki** restaurant website. This project is a modern, responsive, and interactive showcase designed to deliver a sleek and smooth user experience.

🔗 **Live site:** [makidevweb3.github.io/SushiShop/](https://makidevweb3.github.io/SushiShop/)

## ✨ Overview

The website presents the Maki restaurant's universe with a clean interface and subtle animations. It's built to be fast, accessible, and optimized for all devices.

## 🛠️ Tech Stack

- **Frontend:** React 18 with TypeScript
- **Build tool:** Vite
- **Styling:** Tailwind CSS & shadcn/ui
- **Animations:** Framer Motion
- **Routing:** React Router
- **Testing:** Vitest (unit) & Playwright (E2E)
- **Deployment:** GitHub Pages via GitHub Actions

## 🚀 Key Features

- **Responsive design** – Perfect adaptation to mobile, tablet, and desktop
- **Smooth animations** – Elegant transitions and micro-interactions
- **SPA navigation** – Fast, seamless page transitions
- **Continuous deployment** – Automatic publishing after every push to `main`

## 📦 Local Setup

Follow these steps to run the project locally:

```bash
# 1. Clone the repository
git clone https://github.com/MakiDevWeb3/SushiShop.git
cd SushiShop

# 2. Install dependencies
npm install

# 3. Start the development server
npm run dev  
```
The site will be available at: http://localhost:8080

🏗️ Production Build
To generate an optimized production build:
```bash
npm run build
```
Static files will be created in the dist/ folder.

🧪 Testing
The project includes two levels of testing:
```bash
# Unit tests (Vitest)
npm run test

# End-to-end tests (Playwright)
npx playwright test
```
🌐 Deployment
Deployment is fully automated via GitHub Actions. On every push to the main branch:

Tests are executed

Build is generated

Site is published to GitHub Pages

To manually configure GitHub Pages:

Go to Settings → Pages

Source: GitHub Actions

(Optional) Add a custom domain in Settings → Pages → Custom domain

📁 Project Structure (main folders)
```bash
SushiShop/
├── .github/workflows/   # CI/CD with GitHub Actions
├── public/              # Static assets
├── src/                 # React source code
│   ├── components/      # Reusable components
│   ├── pages/           # Application pages
│   ├── styles/          # Global styles
│   └── main.tsx         # Entry point
├── index.html           # Main template
├── package.json         # Dependencies and scripts
├── tailwind.config.ts   # Tailwind configuration
└── vite.config.ts       # Vite configuration
```
🤝 Contributing
Contributions are welcome! Feel free to open an issue or a pull request for any suggestions or improvements.

📄 No License

Built with ❤️ by [MakiDevWeb3](https://github.com/MakiDevWeb3)
