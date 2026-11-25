# Nation — the motherboard

Every repo has a position. The layers, top to bottom, are the Constitution,
the Kits, the Apps, the Products, the Site and Profile, and the Services.
A repo sits in one layer. A new repo gets a position before it is built.

## The layers

- Constitution — repoverse-master. The seed, the spec, the rules.
  Everything starts here.
- Kits — the shared tools. Any app or product can pull them in. A kit
  never pulls in an app.
- Apps — built from kits. Openflex, GetCrowd, School Kitchen OS.
- Products — sellable, private. The Vault, Human HQ.
- Site and Profile — the public face. The site, the profile.
- Services — one job, behind the scenes. The ATS scraper.

## Every repo, in its layer

Repo | Layer | Job
--- | --- | ---
repoverse-master | Constitution | the seed and the rules
feather-themes | Kit | themes and the UI kit
feather-speed | Kit | the performance kit
agent-etiquette | Kit | the behaviour skill
empathy-marketing-skills | Kit | the marketing skills
archetype-agent-vault | Kit | the agent suites
universal-master-context | Kit | the context blueprints
stack-blueprints | Kit | the stack matrix
github-trending-kit | Kit | the launch kit
github-skills | Kit | the GitHub skills
openflex | App | the platform
getcrowd | App | the truck app
school-kitchen-os | App | the kitchen app
crta-pro-vault | Product | the Vault, sold
human-hq-skills | Product | the Human HQ method, sold
kelli-dotcom.github.io | Site and Profile | the site
Kelli-dotcom | Site and Profile | the profile
apify-ats-scraper | Service | the ATS scraper

## The rules

- Read this file before creating a repo. A new repo gets a layer and a
  position first.
- A repo with no position is a finding. It gets one, or it gets deleted.
- A repo never moves layers without the owner saying so.
- ROUTES.md shows how repos connect. This file shows where they sit.
