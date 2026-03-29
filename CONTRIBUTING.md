# Contributing to FinTech Edu

Thank you for your interest in contributing to **FinTech Edu**! 🎉  
We welcome contributions of all kinds — bug fixes, new features, documentation improvements, and more.

Please take a moment to review this guide before submitting your first contribution.

---

## 📑 Table of Contents

- [Code of Conduct](#code-of-conduct)
- [How to Fork and Clone](#how-to-fork-and-clone)
- [Branch Naming Conventions](#branch-naming-conventions)
- [Commit Message Guidelines](#commit-message-guidelines)
- [How to Open a Pull Request](#how-to-open-a-pull-request)
- [Code Style / Linting Requirements](#code-style--linting-requirements)
- [Issue Reporting Guide](#issue-reporting-guide)

---

## 📜 Code of Conduct

By participating in this project, you agree to uphold a respectful and welcoming environment for everyone. Please be kind, constructive, and considerate in all interactions.

---

## 🍴 How to Fork and Clone

### 1. Fork the repository

Click the **Fork** button at the top-right of the [repository page](https://github.com/Surajphirke3/finetech) to create your own copy.

### 2. Clone your fork

```bash
git clone https://github.com/<your-username>/finetech.git
cd finetech
```

### 3. Add the upstream remote

This keeps your fork in sync with the original repository:

```bash
git remote add upstream https://github.com/Surajphirke3/finetech.git
```

### 4. Install dependencies

```bash
npm install
```

### 5. Create a `.env.local` file

```env
NEXT_PUBLIC_GEMINI_API_KEY=your_google_generative_ai_api_key_here
```

### 6. Start the development server

```bash
npm run dev
```

---

## 🌿 Branch Naming Conventions

Always create a new branch for your work — **never commit directly to `main`**.

Use the following prefixes based on the type of change:

| Prefix | When to Use | Example |
|--------|------------|---------|
| `feat/` | New feature or enhancement | `feat/dark-mode` |
| `fix/` | Bug fix | `fix/chat-api-key-leak` |
| `docs/` | Documentation updates | `docs/update-readme` |
| `chore/` | Build, tooling, or dependency updates | `chore/upgrade-nextjs` |
| `refactor/` | Code refactoring (no behavior change) | `refactor/extract-chat-hook` |
| `test/` | Adding or updating tests | `test/chat-component-tests` |
| `style/` | Formatting / style changes only | `style/fix-tailwind-classes` |

### Steps to create and switch to a new branch

```bash
# Sync your fork with upstream first
git fetch upstream
git checkout main
git merge upstream/main

# Create and switch to your new branch
git checkout -b feat/your-feature-name
```

---

## ✍️ Commit Message Guidelines

This project follows the [Conventional Commits](https://www.conventionalcommits.org/) specification to keep the Git history clean and machine-readable.

### Format

```
<type>(<optional scope>): <short summary>

[optional body]

[optional footer(s)]
```

### Types

| Type | Description |
|------|-------------|
| `feat` | A new feature |
| `fix` | A bug fix |
| `docs` | Documentation only changes |
| `style` | Changes that do not affect the meaning of the code (formatting, etc.) |
| `refactor` | A code change that neither fixes a bug nor adds a feature |
| `test` | Adding missing tests or correcting existing tests |
| `chore` | Changes to the build process, dependencies, or tooling |
| `perf` | A code change that improves performance |

### Examples

```bash
# Good commit messages
git commit -m "feat(chat): add streaming response support for Gemini AI"
git commit -m "fix(env): move hardcoded API key to environment variable"
git commit -m "docs: add screenshots to README"
git commit -m "chore: upgrade next.js to v14.1.0"

# Bad commit messages ❌
git commit -m "fix stuff"
git commit -m "WIP"
git commit -m "asdf"
```

### Breaking Changes

If your change introduces a **breaking change**, add `!` after the type and include a `BREAKING CHANGE` footer:

```bash
git commit -m "feat!: rename content route from /content to /learn

BREAKING CHANGE: All links to /content/* must be updated to /learn/*"
```

---

## 📬 How to Open a Pull Request

1. **Push your branch** to your fork:
   ```bash
   git push origin feat/your-feature-name
   ```

2. **Open a Pull Request** on GitHub:
   - Go to [https://github.com/Surajphirke3/finetech](https://github.com/Surajphirke3/finetech)
   - Click **"Compare & pull request"**
   - Fill in the PR template (title, description, related issues)

3. **PR Title** — Use the same Conventional Commits format as your commit messages:
   ```
   feat(chat): add streaming response support
   ```

4. **PR Description** — Include:
   - **What** the PR does
   - **Why** the change is needed
   - **How** to test it
   - Screenshots / recordings (for UI changes)
   - Reference to any related issues: `Closes #42`

5. **Wait for review** — A maintainer will review your PR. Please be responsive to feedback.

6. **Keep your branch up to date** — If the `main` branch has new commits, rebase or merge them into your branch:
   ```bash
   git fetch upstream
   git rebase upstream/main
   ```

---

## 🎨 Code Style / Linting Requirements

### TypeScript

- The project uses **strict TypeScript** — all code must be properly typed
- Avoid using `any` types
- Use functional React components with proper type annotations

### ESLint

Run the linter before opening a PR:

```bash
npm run lint
```

All lint errors must be resolved before a PR can be merged. Warnings should be addressed when possible.

### Tailwind CSS

- Use Tailwind utility classes for styling
- Avoid writing custom CSS unless absolutely necessary
- Keep class names readable — break long class strings across multiple lines if needed

### General Guidelines

- Keep functions and components small and focused
- Use descriptive variable and function names
- Co-locate related files (e.g., keep component-specific logic in the component file)
- Remove all `console.log` statements before submitting a PR

---

## 🐛 Issue Reporting Guide

Found a bug or have a feature request? Please [open an issue](https://github.com/Surajphirke3/finetech/issues/new).

### Before Opening an Issue

1. **Search existing issues** to make sure it hasn't been reported already
2. **Check if the problem is reproducible** on the latest version of `main`

### Bug Report

Please include:

- **Description** — Clear and concise description of the bug
- **Steps to Reproduce** — Numbered steps to reproduce the behavior
- **Expected Behavior** — What you expected to happen
- **Actual Behavior** — What actually happened
- **Screenshots** — If applicable
- **Environment** — OS, browser, Node.js version, npm version

### Feature Request

Please include:

- **Problem Statement** — What problem does this feature solve?
- **Proposed Solution** — Describe the feature you'd like to see
- **Alternatives Considered** — Any alternative approaches you've thought of
- **Additional Context** — Mockups, references, or related issues

---

Thank you for helping make FinTech Edu better! 🚀
