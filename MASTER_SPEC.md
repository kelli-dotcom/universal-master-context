# Master Spec

This is the master spec for every repo and project in this universe. It
says what a repo must be, what a project spec must hold, and what a skill
must do. A new repo starts from this spec. A new project gets its own
tailored spec that follows it. Nothing ships that does not meet it.

## What a repo is

- One repo, one project, one job. A repo that does two jobs gets split.
- A repo is either a kit or a product. A kit is public and MIT, and anyone
  can use it. A product is private and proprietary, all rights reserved,
  and it is sold, not given away. The owner picks one per repo before it
  is published. The template does not decide it.
- A repo starts from this master. It copies the standard files, then adds
  its own spec and its own skills. It never starts empty.

## The standard files

Every repo carries the standard files from this master: the README, the
agent contract, the license, the ignore list, the env example, the
changelog, the handoff, the mistakes log, the llms map, the contributing
guide, the package file, the manifest, the why, the feather standard, the
security note, the code of conduct, the verify script, the new-repo script,
the start-here spec, the example, the agent-etiquette skill, the repo-audit
skill, the skill-use skill, the likeness-gate skill, the nation model, the routes map, the smoke
test, the pull request template, the issue template, and
the CI workflow. The check is `node tests/smoke.test.mjs`. It must pass.

## The master rules

- Propose first, build only after explicit approval. An information
  request is never build approval. Show the exact wording first, wait for
  the yes, then build.
- One bit at a time. Build one piece, test it, report it, then move on.
- Define first. No layout, no app, no feature is built without a brief
  first: the feature list, the style guide, one job per screen, and the
  states per screen. The brief is approved in exact words before any
  builder is sent.
- Never silently change a brand colour. A fix that would change a colour,
  a token, or a brand value is reported first, and a human decides.
- No private data in public repos. No keys, no passwords, no databases,
  no uploads, no .env files. Ever.
- Product code stays private unless the owner says public.
- Verify before reporting. Never claim a task is complete from the build
  alone. Check it with a direct tool result, a file read, an exit code,
  or a test pass. If it cannot be verified, say so plainly.
- Rule of 2. A failing command, build, or edit gets at most 2 retries
  with the same error. Then halt, report the exact error, and wait.
- Every repo carries ROUTES.md, the map of how the repos work together.
- Every repo records skill use in HANDOFF.md under "Skills used", one
  line per skill per use.
- NATION.md is the motherboard. Every new repo gets a layer and a
  position in it before it is built.

## The budgets (Feather Standard)

- A code file stays under 20 KB.
- A theme file stays under 8 KB.
- A kit engine stays under 6 KB.
- A single theme's CSS stays under 400 bytes.
- The master template stays under 60 KB total.
- Contrast: text at 4.5:1 for AA and 7:1 for AAA, muted text at 4.5:1
  for AA. Measure text against the surface it sits on, and take the
  worst case.

## A per-project spec

Every project gets its own tailored spec, in its own repo. It lives in
`design-spec/` and it is named for the project. It holds:

- The idea in one line, and who it is for.
- What it does, and what it does not do.
- The feature list, in order.
- The style guide: colours, type, spacing, and the one shape rule.
- One job per screen, and the states each screen can be in.
- The budgets it must meet, and the checks that prove them.
- What is out of scope, named plainly, so it is never built by accident.

The project spec is approved in exact words before anything is built from
it. A spec that is only a draft is marked draft, and nothing is built from
a draft.

## Skills

- A skill is one job, written plain, under 8 KB, with zero dependencies.
- Shared skills live in this master, in `skills/`. A new repo from the
  master gets them all. The shared skills are agent-etiquette, repo-audit,
  skill-use, and likeness-gate.
- Per-project skills live in the project repo, in `skills/`, named for
  the job they do. A skill that belongs to one project never goes in the
  master. A skill that two projects need is proposed for the master first.
- A skill never names the owner. It says "the owner approves", never a
  person's name. A buyer becomes the owner of their own copy.

## Direction

- Apps are built from the repo pieces. An app pulls in the shared kits.
  The kits stay standalone and never pull in an app. No app code ever
  goes into a kit repo.
- A repo that overlaps the master is checked against the master before
  anything new is added to it.

## Before a launch or a sale

- The repo is audited with the repo-audit skill. The audit measures every
  claim a second time from the raw files. No claim ships without a
  measurement behind it.
- The copy is checked with the owner's likeness gate before it ships.
- The offer is checked with the positioning and empathy skills before
  it is sold.
- Nothing brand-affecting ships unseen. The owner approves the exact
  wording first.
