# The Feather Standard

Feather means light. A repo is feather true when it follows the same
rule everywhere, not when it is the same size as everything else.

A theme kit can be under 6 KB. A real app like GetCrowd, with 228
files, cannot. That does not make the app a failure. Feather true
does not mean the same total size for everything. It means the same
rule for everything.

## The rule

1. Every file has one job. If a file tries to do three jobs, split it.
2. No dead code. If nothing uses it, take it out.
3. No duplicate code. If the same words appear twice, keep one copy.
4. No bulky copies. Copy the piece you need, not the whole repo.
5. Load only what you use, when you use it. Do not load a whole
   app for one screen.
6. Zero dependencies where you can. Where you cannot, use only the
   ones you truly need, and say why each one is there.
7. Every piece is small enough to understand in one minute.

## The budgets

These numbers were checked against Kelli's real repos on
2026-11-24, and that check changed them. The first draft said
8 KB for every file. That was too tight. The bug fixer in
feather-themes, bin/feather-fix.mjs, is 19,394 bytes and it is
one job, well tested. Her READMEs are 11,000 to 12,000 bytes,
and a README is supposed to be long. A demo gif alone is
204,646 bytes. So the rule is split now, by what a file is.

- A code file (.mjs, .js, .ts, .css, .json, .yml, .sh, and the
  like): under 20 KB (20,480 bytes). If a code file grows past
  it, split it, or write the reason in HANDOFF.md and fix it
  before calling the repo feather true.
- A theme or token file, one theme on its own: under 8 KB
  (8,192 bytes). One theme is about 300 bytes, so 8 KB is
  plenty for one theme file.
- Docs (.md, .txt) and pictures and sound (.gif, .png, .jpg,
  .svg, .mp3, .mp4) are not counted in the code check. A
  README is supposed to be long, and a picture is not code.
  They still have to earn their place, they just do not fail
  a code size check.
- The whole master template: under 60 KB total. It is about
  56 KB now, so there is room, but not room for bloat. This
  was 40 KB in the first draft, then 50 KB, and it was raised
  because the master itself is docs heavy by design, and the
  lower numbers left almost no room for a new rule.
- A kit's shipped engine file: under 6 KB. This comes from
  feather-themes, where the whole engine is under 6 KB and one
  theme is about 300 bytes.
- A kit's single theme: about 300 bytes.
- The first screen of an app: the project's own code on the first
  screen under 50 KB. This is a starting number, not locked.
  It is measured in the browser, by looking at what the browser
  loads on the first screen, and written down in HANDOFF.md.
  The check in this template does not measure it, so do not
  claim a first-screen number unless you measured it.

## How the check works

Run `node scripts/verify.mjs` or `node tests/smoke.test.mjs`.
The check looks at every code file in the repo, with node only,
no other tools, and it reports any code file over 20 KB by name
and size. Docs and pictures are skipped, because they are not
code. It also skips .git, node_modules, dist, .next, build,
blobs, uploads, and sessions, because those are generated or
private, not code. It also lists how many dependencies the
project has, so you can see them. If the master template itself
grows past 60 KB total, the check says so too. A child repo
made from the master does not have that total check, because a
real app grows, but every code file in it still has to stay
under 20 KB.

## What to do when a file is over budget

Split it into two smaller files, each with one job. If you truly
cannot split it, write the reason in HANDOFF.md, say when you
will fix it, and do not call the repo feather true until it is
fixed. An exception with a date is honest. An exception with no
date is just bloat with a note on it.
