# Hardware Profiles & Adaptive Agent Routing (`examples/hardware-profiles.md`)

Use this reference table to align AI model tiers, local vs. cloud execution boundaries, and agent concurrency caps with the user's real machine specs.

| Hardware Tier | Device Profile | Local vs. Cloud Boundary | Recommended AI Model Mix | Max Active Agents | Context Target |
| :--- | :--- | :--- | :--- | :---: | :---: |
| **Light** | Mobile (iOS/Android), iPad, Chromebook, or **4–8 GB RAM** laptop | **Cloud-First:** Browser IDEs, GitHub Codespaces, zero-dep static HTML previews, remote CI verification. Avoid heavy local Docker or parallel watchers. | Fast Flash / Mini models for discovery & edits; reasoning model for architecture locks only. | **1–2** | **60–90 lines** (`< 1.5 KB`) |
| **Standard** | **16 GB RAM** MacBook / Windows / Linux dev machine | **Hybrid Local + Cloud:** Local IDE + 1 active dev server (`localhost:3000`) + lightweight SQLite or cloud Postgres. | Balanced frontier model for coding + lightweight subagent for browser/test verification. | **3** | **80–120 lines** (`< 2.5 KB`) |
| **Heavy** | **32 GB+ RAM** workstation / dedicated GPU | **Full Local Execution:** Local Docker Compose stacks, local Postgres/`pgvector`, parallel test runners, and local quantized/full LLMs. | Frontier reasoning lead + 2–4 specialized worker agents running isolated worktrees. | **3–5** | **100–150 lines** (`< 3.5 KB`) |

---

## Practical Rules by Tier

### 1. Light Tier (`<= 8 GB RAM` or Mobile)
- Prefer zero-dependency ES modules (`.mjs`) and single-file HTML playgrounds (`preview/index.html`) that open instantly without `node_modules` bloat.
- Run builds and heavy test suites via GitHub Actions or remote sandboxes when free local memory drops below `512 MB`.

### 2. Standard Tier (`16 GB RAM`)
- Run at most one local framework dev server at a time; kill stale background processes before starting a production build.
- Cap concurrent scraper/worker pools dynamically based on `os.freemem()` and `os.cpus().length`.

### 3. Heavy Tier (`32 GB+ RAM`)
- Isolate parallel agent file edits in separate Git worktrees or clearly partitioned directories (`src/lib/*` vs. `src/app/*`) so parallel agents never overwrite each other.
