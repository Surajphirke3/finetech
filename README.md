# 💰 FinTech Edu — AI-Powered Financial Education Platform

<div align="center">

![FinTech Edu Banner](https://img.shields.io/badge/FinTech-Edu-blue?style=for-the-badge&logo=googlechrome&logoColor=white)

[![Next.js](https://img.shields.io/badge/Next.js-14-black?style=flat-square&logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?style=flat-square&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3-38B2AC?style=flat-square&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![Google Gemini AI](https://img.shields.io/badge/Google_Gemini_AI-0.1.3-4285F4?style=flat-square&logo=google&logoColor=white)](https://ai.google.dev/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=flat-square)](./LICENSE)

**Personalized FinTech education powered by Google Gemini AI — tailored for students, employees, and retirees.**

[Live Demo](#) · [Report a Bug](https://github.com/Surajphirke3/finetech/issues) · [Request a Feature](https://github.com/Surajphirke3/finetech/issues)

</div>

---

## 📑 Table of Contents

- [About the Project](#-about-the-project)
- [Features](#-features)
- [Tech Stack](#-tech-stack)
- [Prerequisites](#-prerequisites)
- [Installation & Setup](#-installation--setup)
- [Usage Guide](#-usage-guide)
- [Screenshots](#-screenshots)
- [Configuration / Environment Variables](#-configuration--environment-variables)
- [Folder Structure](#-folder-structure)
- [Roadmap](#-roadmap)
- [Contributing](#-contributing)
- [License](#-license)
- [Acknowledgements](#-acknowledgements)

---

## 🎯 About the Project

FinTech Edu is an AI-powered educational web platform that delivers **personalized financial literacy content** to three distinct user groups — students, working employees, and retirees. The platform uses Google's Gemini AI to provide real-time, context-aware answers to financial questions through an interactive chat interface.

### The Problem It Solves

Financial education is rarely one-size-fits-all. A college student learning about budgeting has very different needs from a mid-career professional planning for retirement or a retiree managing their savings. FinTech Edu solves this by tailoring learning paths and AI-powered conversations to each demographic.

---

## ✨ Features

- 🤖 **AI-Powered Chat** — Real-time financial Q&A powered by Google Gemini Pro, customized per user type
- 🎓 **Personalized Learning Paths** — Distinct content tracks for students, employees, and retirees
- 📱 **Responsive Design** — Fully mobile-friendly interface built with Tailwind CSS
- ⚡ **Fast & Modern** — Built on Next.js 14 with server-side rendering for optimal performance
- 🧩 **Modular Architecture** — Reusable React components for consistent UX across all content pages
- 🔒 **Type-Safe Codebase** — End-to-end TypeScript with strict mode enabled

---

## 🛠 Tech Stack

| Layer | Technology | Version |
|-------|-----------|---------|
| **Framework** | [Next.js](https://nextjs.org/) | 14.0.4 |
| **UI Library** | [React](https://react.dev/) | 18 |
| **Language** | [TypeScript](https://www.typescriptlang.org/) | 5 |
| **Styling** | [Tailwind CSS](https://tailwindcss.com/) | 3.4.16 |
| **CSS Processing** | [PostCSS](https://postcss.org/) + [Autoprefixer](https://github.com/postcss/autoprefixer) | 8.4.49 / 10.4.20 |
| **AI Integration** | [Google Generative AI (Gemini)](https://ai.google.dev/) | 0.1.3 |
| **Linting** | [ESLint](https://eslint.org/) (Next.js config) | 8 |

---

## ✅ Prerequisites

Make sure you have the following installed before setting up the project:

- **Node.js** ≥ 18.x ([Download](https://nodejs.org/))
- **npm** ≥ 9.x (comes with Node.js) or **yarn** / **pnpm**
- A **Google Generative AI API key** ([Get one here](https://aistudio.google.com/app/apikey))

---

## 🚀 Installation & Setup

Follow these steps to run FinTech Edu locally:

### 1. Clone the repository

```bash
git clone https://github.com/Surajphirke3/finetech.git
cd finetech
```

### 2. Install dependencies

```bash
npm install
```

### 3. Configure environment variables

Create a `.env.local` file in the project root and add your Google Generative AI API key:

```bash
cp .env.example .env.local   # if .env.example exists, otherwise create manually
```

```env
# .env.local
NEXT_PUBLIC_GEMINI_API_KEY=your_google_generative_ai_api_key_here
```

> ⚠️ **Security Note:** Never commit your `.env.local` file or expose API keys in source code.  
> The key must be set as an environment variable and referenced via `process.env.NEXT_PUBLIC_GEMINI_API_KEY`.

### 4. Start the development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the app running.

### 5. Build for production

```bash
npm run build
npm run start
```

---

## 📖 Usage Guide

### Navigating the Platform

1. **Home Page (`/`)** — Select your user type: *Student*, *Employee*, or *Retiree*
2. **Content Pages** (`/content/student`, `/content/employee`, `/content/retired`) — Browse curated financial lessons for your category
3. **AI Chat** — Use the integrated chat widget on any content page to ask personalized financial questions
4. **About Page (`/about`)** — Learn about the platform's mission
5. **Contact Page (`/contact`)** — Get in touch with the team

### Using the AI Chat

Each content page includes an AI-powered chat interface. Simply type a financial question in the chat box and receive a personalized response from Google Gemini:

```
Student Chat Example:
  You: "How should I start investing as a college student?"
  AI:  "As a student, starting small is key. Consider opening a high-yield
        savings account, explore index funds with low minimums like Fidelity
        ZERO funds, and take advantage of your employer's 401(k) match once
        you start working..."
```

### Available npm Scripts

| Script | Command | Description |
|--------|---------|-------------|
| Development | `npm run dev` | Start development server at `localhost:3000` |
| Build | `npm run build` | Create optimized production build |
| Start | `npm run start` | Start production server |
| Lint | `npm run lint` | Run ESLint code quality checks |

---

## 📸 Screenshots

> _Screenshots will be added here once the UI is finalized._

| Home Page | Student Content | AI Chat |
|-----------|----------------|---------|
| _(coming soon)_ | _(coming soon)_ | _(coming soon)_ |

---

## ⚙️ Configuration / Environment Variables

| Variable | Required | Description |
|----------|----------|-------------|
| `NEXT_PUBLIC_GEMINI_API_KEY` | ✅ Yes | Google Generative AI (Gemini) API key for the chat feature |

Create a `.env.local` file at the project root and populate it with the variables above. This file is included in `.gitignore` and will **not** be committed to version control.

---

## 📁 Folder Structure

```
finetech/
├── app/                        # Next.js App Router (main source)
│   ├── about/
│   │   └── page.tsx            # About the platform
│   ├── components/
│   │   ├── Chat.tsx            # AI chat widget (Gemini integration)
│   │   ├── ContentPage.tsx     # Reusable lesson display component
│   │   ├── Footer.tsx          # Site footer
│   │   └── Header.tsx          # Navigation header
│   ├── contact/
│   │   └── page.tsx            # Contact information page
│   ├── content/
│   │   ├── employee/
│   │   │   └── page.tsx        # Employee-focused content
│   │   ├── retired/
│   │   │   └── page.tsx        # Retiree-focused content
│   │   └── student/
│   │       └── page.tsx        # Student-focused content
│   ├── globals.css             # Global Tailwind CSS styles
│   ├── layout.tsx              # Root layout (Header + Footer wrapper)
│   └── page.tsx                # Home / landing page
├── .eslintrc.json              # ESLint configuration
├── .gitignore                  # Git ignore rules
├── next.config.mjs             # Next.js configuration
├── package.json                # Project metadata and dependencies
├── postcss.config.js           # PostCSS configuration
├── tailwind.config.js          # Tailwind CSS configuration
├── tsconfig.json               # TypeScript configuration
├── CONTRIBUTING.md             # Contributor guide
├── LICENSE                     # MIT License
└── README.md                   # This file
```

---

## 🗺 Roadmap

- [x] AI-powered chat with Google Gemini
- [x] Personalized content for students, employees, and retirees
- [x] Responsive Tailwind CSS design
- [ ] Move API key to environment variables
- [ ] Add user authentication (NextAuth.js or Clerk)
- [ ] Persist chat history (local storage or database)
- [ ] Add progress tracking for each learning module
- [ ] Dark mode support
- [ ] Multilingual support (i18n)
- [ ] Unit and integration tests (Jest + React Testing Library)
- [ ] CI/CD pipeline via GitHub Actions

---

## 🤝 Contributing

Contributions are welcome and greatly appreciated! Please read [CONTRIBUTING.md](./CONTRIBUTING.md) for guidelines on how to get started, branch naming conventions, commit message standards, and how to open a pull request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feat/amazing-feature`)
3. Commit your changes (`git commit -m "feat: add amazing feature"`)
4. Push to the branch (`git push origin feat/amazing-feature`)
5. Open a Pull Request

---

## 📄 License

This project is licensed under the **MIT License**. See the [LICENSE](./LICENSE) file for details.

---

## 🙏 Acknowledgements

- [**Shristi Singhal**](https://github.com/shristisinghal) — Co-author and contributor
- [**Suraj Phirke**](https://github.com/Surajphirke3) — Project creator and maintainer
- [Google Gemini AI](https://ai.google.dev/) — Generative AI powering the chat feature
- [Next.js](https://nextjs.org/) — React framework used for the platform
- [Tailwind CSS](https://tailwindcss.com/) — Utility-first CSS framework
- [Vercel](https://vercel.com/) — Recommended deployment platform for Next.js apps
