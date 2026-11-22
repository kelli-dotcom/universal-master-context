# Master Context — Hybrid & Multi-Agent Ecosystem (`CONTEXT.md`)

> **Ecosystem Name:** `<Organization / Multi-Repo Suite Name>`  
> **Mission:** `<1-sentence description of how the repositories and agent squads work together>`  
> **Governance Standard:** Model-Agnostic · Progressive Disclosure · Rule-of-2 Loop Cap

## 1. Ecosystem Architecture Locks
- **Progressive Disclosure:** Root files (`AGENTS.md`, `CONTEXT.md`, `llms.txt`) stay under 150 lines and route agents to specialized `skills/*/SKILL.md` files on demand.
- **Cross-Model Compatibility:** All instructions use plain standard Markdown so Claude, Gemini, GPT/Codex, Cursor, Antigravity, and local LLMs execute identically.
- **Verified Artifacts Only:** Inter-agent handoffs pass touched file paths and verified endpoints—never raw HTML dumps.
- **Rule of 2:** Any task failing verification twice halts immediately for orchestrator review.

## 2. Hardware Profile & Concurrency Matrix
- **Declared Hardware Tier:** `<Light (1-2 agents) | Standard (3 agents) | Heavy (3-5 agents)>`
- **Workspace Isolation:** Writers operate on disjoint file paths or isolated worktrees; verifiers run read-only checks + test commands.

## 3. Agent Squad & Repository Routing
| Role / Squad Member | Model Tier | Owned Skill / Contract | Owned Paths / Repos |
| :--- | :--- | :--- | :--- |
| **Orchestrator** | Frontier Reasoning | `skills/universal-master-context/SKILL.md` | `CONTEXT.md`, `AGENTS.md`, `HANDOFF.md` |
| **Builder / Ingestion** | Balanced Coding | `<Domain Build Skill>` | `src/lib/`, `scripts/`, `templates/` |
| **Gatekeeper / QA** | Strict Verifier | Zero-Mercy QA Gate | `tests/`, `mistakes.md`, CI workflows |
| **Launch / Docs** | Fast / Visual | Top-README & Demo Gate | `README.md`, `demo/`, `preview/` |

## 4. Progressive Disclosure Pointers
- **Universal AI Index:** [`llms.txt`](llms.txt)
- **Hardware Routing Matrix:** [`examples/hardware-profiles.md`](examples/hardware-profiles.md)
- **Active Handoff State:** [`HANDOFF.md`](HANDOFF.md)
- **Ecosystem Mistake Log:** [`mistakes.md`](mistakes.md)

## 5. Current State & Next Action
- **Verification Command:** `<e.g., verify all templates < 80 lines and CONTEXT.md < 150 lines>`
- **Active Blockers:** `<None>`
- **Next Action:** `<Single next cross-repo milestone>`
