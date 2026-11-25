# Routes — Data Map and Highway

A map of how the repos work together. Each repo is a place. Data travels
between them on highways. This file is the map. Each repo also carries its
own routes, naming the repos it connects to, what it takes, and what it
gives.

## The highways

- Seed highway: repoverse-master goes to every repo. The standard files
  travel this way. Tools: new-repo.mjs, push-dir, the seed rollout.
- Kit highway: a kit repo goes to an app or product that uses it. The app
  pulls in the kit. The kit never pulls in an app.
- Skill highway: skills in a repo go to the agent. Read the skill before
  doing the job.
- Site highway: the staging dir goes to kelli-dotcom.github.io. The site
  files travel this way. Tool: push-dir.
- Sale highway: a product repo goes to the Vault, then to Polar, then to
  the buyer. The product files travel this way.

## The map

Repo | Holds | Takes from | Gives to
--- | --- | --- | ---
repoverse-master | the seed, the master spec, the shared skills | nothing, it is the source | the standard files, to every repo
feather-themes | 1,092 themes, the UI kit, the CLI | the seed | themes and UI kit, to openflex, the site, the Vault
feather-speed | the performance kit | the seed, feather-themes | speed, to openflex
agent-etiquette | the behaviour skill | the seed | the skill, to every repo
empathy-marketing-skills | 5 marketing skills | the seed | positioning and story, to Human HQ and the Vault
archetype-agent-vault | 7 agent suites | the seed | agent suites, to the Vault
universal-master-context | context blueprints | the seed | blueprints, to the Vault and the seed
stack-blueprints | the stack matrix | the seed | stack picks, to any repo
github-trending-kit | README audit, SEO, launch copy | the seed | launch help, to feather-themes and the Vault
github-skills | GitHub skills | the seed | GitHub use, to the agent for all repos
openflex | the platform | feather-themes, feather-speed, the seed | the platform the themes power
getcrowd | the truck app | the seed, the kits | the app
school-kitchen-os | the kitchen app | the seed, the kits | the app
human-hq-skills | the Human HQ method | the seed, empathy skills | the method, to the Vault and to buyers
crta-pro-vault | the Vault, 3 packs | repoverse-master, universal-master-context, archetype-agent-vault, github-trending-kit | the packs, to buyers through Polar
kelli-dotcom.github.io | the site | feather-themes, the seed | the site, the Vault page, the blog
Kelli-dotcom | the profile | the seed | the profile, to every visitor
apify-ats-scraper | the ATS scraper | the seed | the scraper

## The guide — the right ways

- A new repo starts from the seed. It copies the standard files, then
  adds its own spec and its own skills.
- An app pulls in a kit. A kit never pulls in an app.
- A skill that two projects need is proposed for the master first.
- A repo that overlaps the master is checked against the master before
  anything new is added to it.
- Nothing brand-affecting ships unseen. The owner approves the exact
  wording first.
- Keep it light. See the keep-light skill.
