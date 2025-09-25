# Beginner Guide: Environment, IDE, and GitHub Basics

> Quick links: [Main README](../README.md) • [Creating New Tasks](newTask.md) • [Trial Screen Guide](trialScreen.md)

This guide is for newcomers who know the tasks conceptually but need help with the coding setup: picking an IDE, installing tools, working with GitHub (VS Code GUI first), and organizing files.

---

## 1) Choose and Set Up Your IDE

- Recommended IDE:
  - Visual Studio Code (VS Code): Free, cross-platform, great extensions

- VS Code essentials:
  - "GitLens" (optional)
  - Settings: Enable format on save (optional)

---

## 2) Install Required Tools

1. Node.js (includes npm): https://nodejs.org/en/
2. Git: https://git-scm.com/downloads

Verify installs:
```
node -v
npm -v
git --version
```

---

## 3) Get the Code and Run Locally

Clone the repo (choose a directory you control):
```
git clone https://github.com/crlabgeorgetown/behavioral.git
cd behavioral
npm install
npx webpack --watch
```

Open a task HTML to preview (macOS example):
```
open task/html/index.html
```

You can open any html in `task/html/` (e.g., `typingToDiction.html`).

---

## 4) Git with VS Code (GUI)

Use VS Code's Source Control panel for pull, branch, commit, push, and PR.

### Pull latest
1. Open Source Control (left sidebar)
2. Click the three-dots (⋯) → Pull (ensure `main` if syncing main)

### Create a new branch
1. Click the branch name in bottom-left → Create new branch
2. Name it (e.g., `feature/my-change`)

### Stage and commit
1. In Source Control, review changed files
2. Click "+" to stage (file or all)
3. Enter a commit message, click the checkmark (Commit)

### Push / Publish branch
- Click "Sync Changes" or the cloud icon
- If prompted, "Publish Branch" to push to GitHub

### Create Pull Request
- After publishing, VS Code may prompt to open a PR
- Or use the GitHub extension/activity to create a PR

### Resolve conflicts
- Conflicts show inline with Accept Current/Incoming/Both
- Fix, stage, and commit the resolution

Tip: Pull before you push to reduce conflicts.

---

## 5) Command Line Git (Alternative)

- Pull latest:
```
git pull origin main
```

- Create a branch for your work:
```
git checkout -b feature/my-change
```

- Stage, commit, push:
```
git add .
git commit -m "Describe the change"
git push -u origin feature/my-change
```

- Open a Pull Request (PR) on GitHub.

Notes:
- Keep commits focused and messages clear
- Minimize pushes to main to avoid unnecessary CI runs

---

## 6) Where to Put Things

- `task/` → Main task code (new variants, screens, trials)
- `task/html/` → HTML entry points for local testing
- `task/variants/` → Variant classes (admin/config per task)
- `task/trials/` → Trial classes (per-trial data and exports)
- `task/screens/trials/` → Trial Screen classes (UI & logic)
- `static/` → CSV data, images, audio, video
- `development_instructions/` → Docs

Do not edit:
- `task/task.js`, `task/orchestrator.js`, `task/sequenceNode.js`, `task/qualtricsClient.js`
- Anything in `dist/`

---

## 7) Qualtrics Basics (Very High-Level)

- Deploys from GitHub Pages after pushing to `main` (≈1.5 minutes)
- Use a JavaScript question and load CSV + instantiate the Task
- Test via anonymous link (not Preview)

See: `development_instructions/qualtricsExplained.md`.

---

## 8) Common Setup Pitfalls

- Webpack not running: ensure `npx webpack --watch` is active
- Local HTML not opening: use the correct path in `task/html/`
- CSV not loading in Qualtrics: confirm GitHub Pages URL and deployment
- Assets 404: check file paths under `static/`

---

## 9) Next Steps

- Read `development_instructions/project_overview.md` (short overview)
- Follow `development_instructions/newTask.md` to build a new variant
- Use `development_instructions/componentExamples.md` to compose screens
- For Trial Screen details: `development_instructions/trialScreen.md`
