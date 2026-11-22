# Master Context — Code / Repository (`CONTEXT.md`)

> **Project:** `<Project Name>` — `<1-sentence value proposition and exact problem solved>`  
> **Audience & License:** `<Target developers / users>` · `<MIT / License>` · **Status:** `<Active / v1.0>`

## 1. Active Spec Locks (Immutable Rules)
- **Runtime & Stack:** `<e.g., Next.js 15 / Node 20 / Bun / Zero-Dep ESM + PostgreSQL>`
- **Dependency Budget:** `<e.g., Zero unnecessary client libraries; First-Load JS < 120 KB>`
- **Type & Schema Gate:** Every state or API boundary must validate cleanly before merge.
- **UI & Accessibility:** `<e.g., WCAG 2.1 AA/AAA contrast, sharp architectural corners, zero layout shift>`
- **IP & Security Safety:** Clean-room code only; secrets strictly in `.env` (never committed).

## 2. Hardware Profile & Execution Rules
- **Declared Hardware Tier:** `<Light (<=8GB) | Standard (16GB) | Heavy (32GB+)>`
- **Execution Boundary:** `<e.g., Local dev server on :3000; heavy integration runs in CI>`
- **Concurrency Cap:** Maximum **`<1–2 | 3 | 3–5>` active agents** per workflow run.
- **Loop Breaker (Rule of 2):** Halt and escalate after 2 failed verification attempts on the same task.

## 3. Model, Skill & Repo Routing
| Task Type | Model Tier | Active Skill / Protocol | Target Path |
| :--- | :--- | :--- | :--- |
| Architecture & Schema Changes | Frontier Reasoning | `skills/universal-master-context/SKILL.md` | `src/db/`, `design-spec/` |
| Core Engine & Pure Logic | Balanced Coding | `<Domain Skill Path>` | `src/lib/`, `scripts/` |
| UI Components & Previews | Fast / Visual | `<Theme / UI Skill Path>` | `src/app/`, `preview/` |
| QA, Typecheck & Build Gate | Strict Verifier | Zero-Mercy Verification | `tests/`, `.github/workflows/` |

## 4. Progressive Disclosure Pointers (Load Only When Needed)
- **Agent Governance:** [`AGENTS.md`](AGENTS.md)
- **Architecture & UX Spec:** [`design-spec/`](design-spec/)
- **Session State & Handoff:** [`HANDOFF.md`](HANDOFF.md)
- **Permanent Guardrail Log:** [`mistakes.md`](mistakes.md)

## 5. Current State & Next Action
- **Verification Command:** `<e.g., bun run typecheck && bun run build>`
- **Active Blockers:** `<None>`
- **Next Action:** `<Single highest-priority deliverable>`
