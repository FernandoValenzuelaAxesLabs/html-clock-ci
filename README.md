# Recommended AI-Driven Development Workflow (Minimal & Professional)

## Repository structure

```text
live-clock/
├── .github/
│   └── workflows/
│       └── ci.yml              # GitHub Actions (CI)
├── scripts/
│   └── run-codex.bat           # Runs Codex
├── specs/
│   └── SPECS.md                # Application requirements
├── src/
│   ├── index.html
│   ├── app.js
│   └── styles.css
├── tests/
│   ├── TEST_SPECS.md           # Acceptance criteria
│   └── test.js                 # Generated tests
├── AGENTS.md                   # Permanent Codex instructions
├── run-codex.bat           	# Runs Codex
├── package.json
└── README.md
```

---

# Prerequisites

* NodeJS.
* OpenAI Codex.
* Codex CLI.
* OpenAI API Key.
* Login or login --with-api-key.
* Preferred Code Editor.
* Git.
* Github Axes labs access.

---

---

# Responsibilities

### Developer

* Write and review `SPECS.md`.
* Write and review `TEST_SPECS.md`.
* Run Codex manually.
* Review all generated code.
* Run local tests.
* Stage files intentionally.
* Commit.
* Push the feature branch.
* Open the Pull Request.
* Approve the final implementation.

---

### Codex

* Read `AGENTS.md`.
* Read `specs/SPECS.md`.
* Generate the application inside `src/`.
* Read `tests/TEST_SPECS.md`.
* Generate or update `tests/test.js`.
* Run the tests before finishing.
* Report ambiguities instead of inventing requirements.

---

### GitHub Actions (CI)

* Validate the committed code.
* Run automatically on Pull Requests and pushes to `main`.
* Never generate code.
* Never modify repository files.

---

# Daily workflow

## 1. Update your local repository

```powershell
git switch main
git pull --ff-only
```

---

## 2. Create a feature branch

```powershell
git switch -c feature/live-clock
```

---

## 3. Update the specifications

Edit:

```text
specs/SPECS.md
tests/TEST_SPECS.md
```

---

## 4. Generate the application

```powershell
npm run generate
```

Codex will:

* read `AGENTS.md`
* read `SPECS.md`
* generate the application
* read `TEST_SPECS.md`
* generate/update `tests/test.js`
* execute the tests

---

## 5. Review the generated changes

```powershell
git status
git diff --stat
git diff
```

---

## 6. Test manually

Verify:

* application behavior
* browser console
* UI
* responsiveness
* accessibility (if applicable)

---

## 7. Run automated tests

```powershell
npm test
```

---

## 8. Stage intentionally

Recommended:

```powershell
git add -p
```

or

```powershell
git add specs/
git add src/
git add tests/
```

Review what will be committed:

```powershell
git diff --cached
```

---

## 9. Commit

```powershell
git commit -m "feat: implement live clock"
```

---

## 10. Push the branch

First push:

```powershell
git push -u origin feature/live-clock
```

Next pushes:

```powershell
git push
```

---

## 11. Open a Pull Request

GitHub Actions will automatically run the tests.

---

## 12. Merge

When:

* CI passes ✅
* Code review is approved ✅

Merge into `main`.

---

# Complete flow

```text
Update main
        ↓
Create feature branch
        ↓
Update SPECS.md
        ↓
Update TEST_SPECS.md
        ↓
Run npm run generate
        ↓
Review git diff
        ↓
Manual verification
        ↓
Run npm test
        ↓
Stage files
        ↓
Review git diff --cached
        ↓
Commit
        ↓
Push feature branch
        ↓
Open Pull Request
        ↓
GitHub Actions validation
        ↓
Code Review
        ↓
Merge into main
```

---

# Golden Rule

```text
Specifications define WHAT to build.

Codex builds it.

You review it.

Git tracks it.

GitHub validates it.

The team approves it.
```
