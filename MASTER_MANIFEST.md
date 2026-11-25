# Master Manifest — where every file came from

Every file in this template came from one of Kelli's own repos, or was
written short and plain for this template where no good source existed.
Nothing here came from the web, and nothing came from a repo that is
not hers. Copy this master, put your idea in the middle, and the rest
is already there.

## Why this is the Repoverse

- `WHY_REPOVERSE.md` — Written for this template. It says, in plain
  words, what a repoverse is, what a fractal repo means, and the three
  checks that make the name true. Every new repo starts from this
  master, every file came from one of her own repos, and nothing in
  the master is dead weight.
- `SECURITY.md` — Written for this template. Short, plain, and it
  points reports to crtatechsolutions@gmail.com, with no private
  details in public.
- `CODE_OF_CONDUCT.md` — Written for this template. One short page,
  be kind and plain. Only archetype-agent-vault had one before.
- `scripts/new-repo.mjs` — Written for this template. One command
  copies the master to a new folder and fills in the project name.
  It does not create a GitHub repo or push anything.
- `FEATHER_STANDARD.md` — Written for this template, from the
  feather-themes precedent (whole engine under 6 KB, one theme
  about 300 bytes) and the feather-speed idea of light by design.
  It defines feather true as one rule everywhere, not one size
  everywhere: a code file under 20 KB, a theme file under
  8 KB, the master template under 60 KB total, a kit engine
  under 6 KB, a first screen under 50 KB of the project's own
  code. Docs and pictures are not counted in the code check.
  `scripts/verify.mjs` checks the per-file budget with node
  only, and reports any code file over budget by name and
  size. The first-screen budget
  is measured in the browser, not by the check, and the standard
  says so plainly. The budget numbers are Kelli's to fix.

## Root files

- `README.md` — Written for this template. Plain words, one page, one
  sentence per file, so a non-tech-savvy owner can use it. Based on the
  long READMEs in feather-themes and openflex, cut down to the essentials.
- `AGENTS.md` — Written for this template, from the hard rules in
  feather-themes (7 tokens only, WCAG gate, sync invariant) and openflex
  (4-stage loop, proof before push-off), plus her standing rules:
  propose first, build only after explicit approval, no silent brand
  colour changes, no private data in public repos, product code stays
  private unless she says public, verify before reporting.
- `LICENSE` — Copied as-is from feather-themes (MIT, Copyright (c) 2026
  CRTA Tech Solutions). Openflex uses the same MIT text. See the license
  note in README.md: MIT is for public kits only, private product code
  must use proprietary instead.
- `.gitignore` — From openflex (.gitignore: node_modules, .next, out,
  build, .env, *.db, *.sqlite, *.log, .DS_Store) plus the getcrowd lines
  from the repoverse audit (app.db, blobs/, uploads/, sessions/, dist/).
  The 37-byte minimal .gitignore in agent-etiquette, github-trending-kit,
  and archetype-agent-vault was NOT used. It only covers .DS_Store, .env,
  .vscode, and *.log, and would let a database slip through.
- `.env.example` — From openflex (.env.example: DATABASE_URL and
  AI_API_KEY placeholders), rewritten generic so it fits any project.
  Placeholder values only. No real keys.
- `CHANGELOG.md` — Style from agent-etiquette and archetype-agent-vault
  (short, one entry per version), plus the opt-in update rule from
  feather-themes CHANGELOG.md: read it first, update only if you choose,
  stay on the old version as long as you want.
- `HANDOFF.md` — Style from feather-themes HANDOFF.md (the most detailed
  in the repoverse), cut down to one template with one example entry.
- `mistakes.md` — Style from openflex mistakes.md (what happened, root
  cause, fix, never repeat), cut down to one example entry plus standing
  rules. The example is a short version of openflex mistake 1, a script
  running its main code on import. The full openflex log (10,418 bytes)
  was NOT copied.
- `llms.txt` — Style from feather-themes llms.txt (agent entry points,
  key paths, verification command), rewritten for this template's files.
- `CONTRIBUTING.md` — Written for this template. Short plain rules,
  based on the shared pull request checklist used by 8 of her repos.
- `package.json` — Style from feather-themes package.json (name, version,
  type module, one verify script), cut down to the minimum. Name and
  description are placeholders to fill in per project.

## Folders

- `docs/START_HERE.md` — Style from getcrowd's numbered docs
  (00_MASTER_BUILD_DIRECTIVE.md through 07_WORK_SEQUENCE_AND_REPORTING.md),
  cut down to ONE page: idea, who it is for, what it does, what it does
  not do, how to check it, what is left to do.
- `examples/example.md` — Written for this template. Universal-master-
  context is the only repo with a true examples/ folder, but its example
  (hardware-profiles.md) is a big hardware table, too heavy to copy.
  This template has ONE tiny example instead, showing the shape of a
  project built from the master.
- `scripts/verify.mjs` — Written for this template. One zero-dependency
  check that every required file is present. Modelled on the verify-all
  idea in feather-themes, and the validate-handoff script in
  agent-etiquette.
- `skills/agent-etiquette/SKILL.md` — Copied as-is from agent-etiquette.
  It is already in 8 of her repos, and it is the shared behaviour rule
  for AI agents (zero filler, verified actions only, Rule of 2, 3-agent cap).
- `skills/repo-audit/SKILL.md` — Written for this template, from the audit
  of feather-themes. It proves a repo does what it says it does, by
  measuring every claim a second time from the raw files, and it records
  what counts as a finding.
- `skills/skill-use/SKILL.md` — Written for this template. It makes sure
  the skills were used, and lets the agent facilitate it. The record lives
  in HANDOFF.md under "Skills used".
- `skills/likeness-gate/SKILL.md` — Written for this template. The free
  gate: it checks copy against a short voice standard the owner writes
  by hand, before it ships. Human HQ is the paid method that builds the
  deep standard.
- `MASTER_SPEC.md` — Written for this template, from the owner's standing
  rules. It is the master spec for every repo and project: what a repo must
  be, what a per-project spec must hold, what a skill must do, and what is
  checked before a launch or a sale.
- `NATION.md` — Written for this template. The motherboard: every repo has
  a layer and a position, like a country. Read it before creating a repo.
- `ROUTES.md` — The data map and highway. Five highways, the table of
  every repo, and the guide to the right ways. Every repo carries it.
- `tests/smoke.test.mjs` — Style from agent-etiquette
  tests/install-and-schema.test.mjs, cut down to ONE smoke test. The full
  agent-etiquette test suite (9,518 bytes) was NOT copied.
- `.github/pull_request_template.md` — From the shared pull request
  template used by 8 of her repos (openflex version: summary, why,
  verification checklist), rewritten generic so it fits any project.
- `.github/ISSUE_TEMPLATE/bug-report.md` — Adapted from archetype-agent-
  vault .github/ISSUE_TEMPLATE/bug-report.md, stripped of archetype-
  specific fields, kept tiny and generic.
- `.github/workflows/ci.yml` — From openflex .github/workflows/ci.yml,
  trimmed to install plus one check gate (checkout, setup Node, run
  the smoke test). The Bun setup, handoff-contract gate, typecheck, and
  build steps were left out because they belong to openflex only.
  The maintenance.yml workflow was also left out.

## What is NOT in this template, and why

- `src/` — Created by the project, not by the template. Every project
  puts different code here. The README says to create it when needed.
- `demo/` and `preview/` — Most repos have one, but they are project
  content, not template structure. Left out to keep weight down.
- `schemas/` — Agent-etiquette has handoff schemas, but they belong to
  that repo's multi-agent work, not to every new repo.
- `CODE_OF_CONDUCT.md` — Corrected: this file IS in the template now,
  187 bytes, one short page. Only archetype-agent-vault had one before.
- `FUNDING.yml`, `Dockerfile`, `docker-compose.yml` — Openflex only.
  Left out; they belong to that app, not to a master template.
- `CONTEXT.md` — Openflex only. Left out; HANDOFF.md covers the same job here.
- `agent-etiquette.lock.json` — Present in 8 repos, but it pins a skill
  version per repo. Left out; add it per repo if that repo uses the skill.
- The 44 skills in archetype-agent-vault — Left out. Only the one shared
  agent-etiquette skill is in this template. Add other skills per project.
- `maintenance.yml` workflow — Openflex only. Left out.
- `.env`, `app.db`, `blobs/`, `node_modules/`, `dist/` — Never in any
  template. They are private or generated, and .gitignore keeps them out.
