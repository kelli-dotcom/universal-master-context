# Changelog

All updates are opt-in. Nothing updates on its own. A dev reads this file
first, then chooses whether to update, and stays on the old version for
as long as they want.

## 0.1.0 — [date]

What changed in this release:

- First release. [Write one short line per change.]

What breaks in 0.1.0:

- Nothing breaking. [Or: list exactly what breaks, and what to check.]

What a dev should check before updating:

- Read this entry first, then update only if they want the new bits.
- Install the pinned version: `npm install [package-name]@0.1.0`.
- Run `node tests/smoke.test.mjs` after updating.
- If they do not want any of this, they can stay on their old version.
  Nothing will change in their project until they run the update.

## How to version

- A fix is a patch version: 0.1.0 becomes 0.1.1.
- A new feature is a minor version: 0.1.0 becomes 0.2.0.
- A breaking change is a major version: 0.1.0 becomes 1.0.0.
