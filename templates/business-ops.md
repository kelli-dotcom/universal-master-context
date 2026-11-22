# Master Context — Business & Operations (`CONTEXT.md`)

> **Operation / Initiative:** `<Company, Program, or Operational System Name>`  
> **North Star Outcome:** `<1-sentence measurable operational goal, e.g., inspection readiness & daily profit clarity>`  
> **Owner & Compliance Scope:** `<Organization>` · `<e.g., FDA Food Code / FERPA / SOC2 / Internal SOP>`

## 1. Operational Locks (Non-Negotiable Standards)
- **Compliance & Safety First:** Every checklist, log, or customer workflow must satisfy `<Regulatory / Quality Standard>` with verifiable timestamps.
- **Field Simplicity:** Workflows must be completable in under 60 seconds on a phone or tablet in a busy environment.
- **Data Privacy:** Never expose PII, student/staff records, or financial credentials in prompts or public files.
- **Cost Discipline:** Prefer zero-cost / fixed-cost tools over recurring per-seat SaaS bloat.

## 2. Hardware Profile & Field Constraints
- **Declared Hardware Tier:** `<Light (Mobile/Tablet/8GB) | Standard (16GB Office Laptop)>`
- **Execution Boundary:** Mobile-friendly Markdown, offline-capable checklists, and instant ZIP/cloud access.
- **Concurrency Cap:** Max **`<1–2 | 3>` active agents** per operational workflow.

## 3. Model, Skill & Workflow Routing
| Operational Task | Model Tier | Active Skill / SOP | Target Path |
| :--- | :--- | :--- | :--- |
| SOP & Compliance Audit | Frontier Reasoning | `skills/universal-master-context/SKILL.md` | `docs/`, `checklists/` |
| Daily Logs & Route/Shift Prep | Fast Flash / Mobile | `<Operations Skill Path>` | `ops/`, `schedules/` |
| Vendor / Permit Fact-Check | Web-Verified | Verification Gate | `mistakes.md`, `HANDOFF.md` |

## 4. Progressive Disclosure Pointers
- **Standard Operating Checklists:** [`docs/`](docs/)
- **Active Shift / Phase Handoff:** [`HANDOFF.md`](HANDOFF.md)
- **Incident & Preventative Guardrails:** [`mistakes.md`](mistakes.md)

## 5. Current State & Next Action
- **Verification Check:** `<e.g., All permit links and temperature thresholds verified against city code>`
- **Active Blockers:** `<None>`
- **Next Action:** `<Single next operational deliverable>`
