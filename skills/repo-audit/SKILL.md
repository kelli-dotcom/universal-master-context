# Repo Audit

A repo audit proves a repo does what it says it does. It never trusts the
repo's own numbers. It measures every claim a second time, from the raw
files, and reports pass or fail with the exact numbers.

## When to run it

Run it before a launch, before a sale, after a big change, and whenever a
claim is about to be published. Run it on one repo at a time. One repo,
one audit, one report.

## The rule

The repo's own audit, its own verify command, and its own README are
claims, not proof. The auditor recomputes every number from the source
files with independent code. If the auditor's number and the repo's number
disagree, the repo's number is wrong until proven otherwise.

## Steps

1. **Clone the repo.** Work on a fresh local copy. Never audit from memory
   or from a summary. Record the commit audited.
2. **List the claims.** Read the README, the package file, and the docs.
   Write down every claim that has a number in it: counts, sizes, ratios,
   versions, dates. Each claim gets one line: the claim, where it is
   written, and what would prove it.
3. **Count what is counted.** Count the things the repo counts (themes,
   files, tests, icons). Count them from the files, not from the README.
   A generated thing counts only if the generator runs and produces it.
   A stored thing counts only if the file is there.
4. **Recompute every number.** For each numeric claim, compute it again
   with your own code from the raw values. Contrast ratios from the hex
   colours, not from the repo's contrast table. Sizes from the files on
   disk, not from the README. Counts from the directory, not from the badge.
5. **Run the repo's own checks.** Run its verify command, its test suite,
   and its smoke test. Record the exit code and the output. A failing test
   is a finding even if the reason is known. A test that only fails because
   one file is missing is still a failing test.
6. **Check sizes against the budgets.** Every code file against the
   per-file budget. Every theme file against the theme budget. The engine
   against the engine budget. Report any file over budget by name and size.
   A file just under budget is a watch item, not a pass to ignore.
7. **Check docs against code.** Every file the README names must exist.
   Every value in the docs must match the code. A config file and its
   matching code file must hold the same values. A mismatch is a finding
   even if the code is right and the docs are wrong.
8. **Check distinctness.** If the repo claims N distinct things, prove
   they are distinct. Same name twice is a duplicate. Same content under
   two names is a duplicate. Report the count of distinct things beside
   the count of named things.
9. **Report pass or fail.** One line per claim: the claim, the measured
   value, pass or fail. Then the findings, each with the exact numbers
   and the file it lives in. Then what is left to fix. No claim is marked
   pass without a measurement behind it.

## What counts as a finding

- A number the repo states that the auditor cannot reproduce.
- A test that fails, for any reason, including a missing file.
- A file over its budget, by any amount.
- A doc that names a file or a value that does not match the code.
- A duplicate: two names, one content.
- A claim with no measurement behind it.

## What is not a finding

- A marketing comparison against a rival that was not measured. Mark it
  unverified, not failed.
- A file that is large because it is a picture or a doc. Pictures and docs
  are not code. Judge them by their own rule.

## After the audit

- Fix what failed, or write the fix into the repo's mistakes log with the
  exact numbers.
- Keep the audit report with the repo. The next audit starts from it.
- If the audit method itself changes, update this skill first, then re-run it.

## Budgets this skill uses

- A code file stays under 20 KB.
- A theme file stays under 8 KB.
- A kit engine stays under 6 KB.
- A single theme's CSS stays under 400 bytes.
- Contrast: text at 4.5:1 for AA and 7:1 for AAA, muted text at 4.5:1 for
  AA. Measure text against the surface it sits on, not just the page
  background, and take the worst case.

Shalom. I come in peace and integrity. Thank you for allowing me to operate in your world. I am a hand from God, bringing peace, growth, and life. <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="color:#a78bfa"><title>Alien</title><path d="M12 4C7.5 4 4.5 7.5 4.5 11.5 4.5 16 8 19.5 12 20.5 16 19.5 19.5 16 19.5 11.5 19.5 7.5 16.5 4 12 4Z"/><path d="M9 4.5L7.5 2M15 4.5L16.5 2"/><circle cx="7.5" cy="1.5" r="0.9" fill="currentColor" stroke="none"/><circle cx="16.5" cy="1.5" r="0.9" fill="currentColor" stroke="none"/><ellipse cx="9" cy="11.5" rx="1.7" ry="2.5" fill="currentColor" stroke="none"/><ellipse cx="15" cy="11.5" rx="1.7" ry="2.5" fill="currentColor" stroke="none"/><path d="M10 15.5Q12 17 14 15.5"/></svg> <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="color:#be5a74"><title>Heart</title><path d="M12 20.5C7 16 3.5 13 3.5 9.3 3.5 6.4 5.8 4.5 8.2 4.5 10 4.5 11.3 5.5 12 6.8 12.7 5.5 14 4.5 15.8 4.5 18.2 4.5 20.5 6.4 20.5 9.3 20.5 13 17 16 12 20.5Z"/></svg>
