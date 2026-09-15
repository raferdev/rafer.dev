# rafer.dev

Turborepo monorepo. `apps/web` is the Next.js site; `packages/ui` is the shadcn
design system shared across apps.

## Code style

- **Do not write comments.** Name things so the code explains itself. The
  exceptions are a license header, a `// eslint-disable` with a stated reason,
  and a link to an external issue that explains a workaround which would
  otherwise look like a mistake.
- Put explanation in the commit message and the PR body, not in the source.
- Match the surrounding file. Do not reformat code you are not changing.

## Components

- Add shadcn components with `pnpm dlx shadcn@latest add <name>` — never copy
  files from the shadcn repository by hand. The CLI resolves dependencies, path
  aliases and CSS tokens; a manual copy silently skips all three.
- Shared components and their hooks live in `packages/ui`. Anything that knows
  about this site's content belongs in `apps/web`.
- This project is Base UI, not Radix. Ignore the Radix half of any upstream
  example that ships both.

## Before saying work is done

Run all five. Report failures with their output rather than describing the
change as finished.

```
pnpm lint
pnpm typecheck
pnpm test
pnpm format:check
pnpm build
```

## Commits

Conventional Commits, enforced by commitlint in the `commit-msg` hook. See
`.gitmessage` for the format and `.github/COMMIT_CONVENTION.md` for how to split
a change. Never add `Co-Authored-By` or "Generated with" trailers.

## Branches and pull requests

**Check the branch is current before writing any code.** Not once per session —
at the start of every new piece of work, because earlier PRs get merged while a
session is still open.

```
git fetch origin
git status -sb
git log --oneline origin/main..HEAD
```

Then:

- Behind `origin/main`? Rebase onto it before starting.
- On a branch whose PR is already merged? Do not keep committing to it. Pushing
  to it recreates a branch GitHub deleted at merge. Start a new branch from
  the freshened `origin/main`.
- Commits that look unmerged but whose content is already on `main`? The PR was
  squash-merged. Rebase onto `origin/main` and drop them, rather than opening a
  PR that re-applies merged work.

**One feature, one branch, one PR.** Open a PR for each new feature rather than
adding it to an existing branch, and name the branch after what it contains. A
branch that outlives its original purpose gets renamed or replaced — never keep
using a name that no longer describes the change.
