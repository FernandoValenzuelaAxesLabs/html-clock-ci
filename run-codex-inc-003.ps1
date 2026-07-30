$ErrorActionPreference = "Stop"

$prompt = @' 
The current application in src/ is the accepeted baseline.

Implement only the change described in:
specs\changes\003-fixing-visual-design.md

Use the acceptance criteria described in:
tests\changes\003-fixing-visual-design.test.md

Requirements:
- Modify the existing implementation; do not recreate the entire application.
- Make the smallest reasonable change.
- Don't boilerplate; only implement the change described.
- Update tests\test.js with test for the new behavior.
- Do not modify any specification files; they are read-only.
- Report any ambiguity in the new behavior instead of inventing requirements.
'@

Write-Host "Implementing...Fixing Visual Design"
Write-Host ""

codex exec --sandbox workspace-write $prompt

if ($LASTEXITCODE -ne 0) {
    throw "Codex execution failed with exit code $LASTEXITCODE."
}

Write-Host ""
Write-Host "Running the complete test suite..."

npm test

if ($LASTEXITCODE -ne 0) {
    throw "Tests failed with exit code $LASTEXITCODE."
}

Write-Host ""
Write-Host "Generation and validation completed."
Write-Host "Review the changes with:"
Write-Host "  git status"
Write-Host "  git diff"
