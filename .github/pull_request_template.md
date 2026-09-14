## Summary

- What changed, and why it was worth changing
- Any architectural or dependency decisions a reviewer should weigh in on
- Anything deliberately left out of scope

## Test plan

- [ ] `pnpm lint`
- [ ] `pnpm typecheck`
- [ ] `pnpm test`
- [ ] `pnpm format:check`
- [ ] `pnpm build`
- [ ] Verified in the browser (state which routes, or why not applicable)

**Verification:**

```bash
pnpm lint         # ✅
pnpm typecheck    # ✅
pnpm test         # ✅
pnpm format:check # ✅
pnpm build        # ✅
```

Closes #[issue-number]

---

### PR Requirements

- Summarise with bullet points; say why, not just what.
- Tick only the checks you actually ran, and paste real output if a check
  fails or is skipped — an unticked box with an explanation beats a ticked
  box that is not true.
- Call out anything a reviewer should look at closely: schema changes, IAM or
  permission changes, dependency bumps, deletions.
- Link the issue with "Closes #[issue-number]" when one exists.
- Keep unrelated changes out — open a second PR instead.
- NEVER add trailers such as "Generated with Claude Code", author, or
  co-author lines.
