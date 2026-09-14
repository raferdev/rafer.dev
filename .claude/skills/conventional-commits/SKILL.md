---
name: conventional-commits
description: Use when writing git commit messages in this repository. Enforces Conventional Commits as validated by .commitlintrc.json, plus the project's atomic-commit and no-trailer rules.
---

# Conventional Commits

This repository validates every commit message with
`@commitlint/config-conventional` (see `.commitlintrc.json`) in the `commit-msg`
hook. A message that does not parse is rejected, so match this format exactly.

## Format

    <type>(<scope>): <subject>

    <body>

    <footer>

Only the header line is required.

## Rules

- `<type>` is lowercase and one of: `feat`, `fix`, `docs`, `style`, `refactor`,
  `perf`, `test`, `build`, `ci`, `chore`, `revert`.
- `<scope>` is optional and lowercase — the area touched, e.g. `(web)`, `(ui)`,
  `(infra)`, `(workflow)`, `(deps)`. Omit it rather than inventing one.
- `<subject>` is imperative mood ("add", not "added"), has **no trailing
  period**, and the whole header is **100 characters or fewer**.
- `<body>` is optional, separated by a blank line, and explains *why* rather
  than *what* — the diff already shows what changed.
- Breaking changes are marked either with `!` after the scope
  (`refactor(ui)!: ...`) or a `BREAKING CHANGE:` footer. Prefer both when the
  break is significant.
- Link issues in the footer: `Closes #123`.

## Examples

    fix(web): prevent duplicate submit while the form is pending

    ci(workflow): run typecheck on pull requests

    refactor(ui)!: drop the legacy Button variant prop

    BREAKING CHANGE: `variant="plain"` is gone; use `variant="ghost"`.

## Beyond the format

- **Keep commits atomic.** One logical concern per commit. When a change spans
  unrelated areas, split it — see `.github/COMMIT_CONVENTION.md`.
- **Never add trailers.** No "Generated with Claude Code", no author or
  co-author lines. The commit author is whoever ran `git commit`; adding
  attribution for work you did not write misrepresents history.
- **Do not bypass the hooks** with `--no-verify` unless the hook itself is
  broken, and say so explicitly when you do.

## References

- `.gitmessage` — the template shown in the editor on `git commit`
- `.github/COMMIT_CONVENTION.md` — commit-splitting guidance
- `/commit` — interactive, guided commit flow
