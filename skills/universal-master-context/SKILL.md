---
name: universal-master-context
description: Build a lightweight, adaptive Master Context (master spec, project canon, outline, or CONTEXT.md) contoured to any project and matched to AI models, agent skills, repositories, and the user's hardware specs.
---

# Universal Master Context Skill

Use this skill to design, generate, or refactor a project's root `CONTEXT.md` or `MASTER_SPEC.md` so any AI model or human collaborator can understand the entire project in a single `<150`-line read without burning context tokens or overloading the user's machine.

---

## 1. Detect Project Contour & Hardware Tier

Before writing a single line, classify both the **Project Contour** and the user's **Hardware Tier**:

### A. Project Contours
| Contour | Best For | Starter Template |
| :--- | :--- | :--- |
| **Code / Repo** | Web apps, APIs, CLI tools, libraries, mobile apps | [`templates/code-context.md`](../../templates/code-context.md) |
| **Creative / Canon** | Books, worldbuilding, brand systems, media series, curriculum | [`templates/creative-canon.md`](../../templates/creative-canon.md) |
| **Business / Ops** | Standard operating procedures, field operations, compliance, launches | [`templates/business-ops.md`](../../templates/business-ops.md) |
| **Hybrid / Multi-Agent** | Multi-repo ecosystems and orchestrated agent squads | [`templates/multi-agent-context.md`](../../templates/multi-agent-context.md) |

### B. Hardware Tiers (Match Workloads to the User's Real Machine)
- **Light (`Mobile · 8GB RAM · Chromebook · Browser-Only`):**
  - *Execution Boundary:* Cloud-first (GitHub Codespaces, browser sandboxes, hosted DBs, static previews). Avoid heavy local Docker stacks or multi-watcher bundlers.
  - *Concurrency Cap:* **1–2 active agents max**.
  - *Context Budget:* **60–90 lines** (`< 1.5 KB`).
- **Standard (`16GB RAM Mac / PC`):**
  - *Execution Boundary:* Local IDE + 1 lightweight dev server + cloud or single-container DB.
  - *Concurrency Cap:* **3 active agents max**.
  - *Context Budget:* **80–120 lines** (`< 2.5 KB`).
- **Heavy (`32GB+ RAM · Workstation GPU`):**
  - *Execution Boundary:* Local multi-container stacks, local vector DBs, parallel test runners, and local LLM inference.
  - *Concurrency Cap:* **3–5 scoped agents max**.
  - *Context Budget:* **100–150 lines** (`< 3.5 KB`).

*(See [`examples/hardware-profiles.md`](../../examples/hardware-profiles.md) for the full hardware-to-model routing matrix.)*

---

## 2. Contour the Master Context Skeleton (Target: 60–120 Lines)

Every generated Master Context (`CONTEXT.md` or `MASTER_SPEC.md`) MUST contain these 6 compact sections in exact order:

1. **Identity & North Star (3 lines max):**
   - Project name, 1-sentence outcome, target user, and primary license/status.
2. **Active Canon / Spec Locks:**
   - 4–8 bullet points locking immutable facts (tech stack, brand voice, compliance rules, or continuity constraints that agents must never violate).
3. **Hardware Profile & Execution Rules:**
   - Declared Hardware Tier (`Light`, `Standard`, or `Heavy`), local vs. cloud execution boundary, and hard agent concurrency cap.
4. **Model, Skill & Repo Routing Table:**
   - A 4-column Markdown table (`Task Type | Recommended Model Tier | Active Skill / Protocol | Target Repo / Path`) so any model knows which skill and file to load for each job.
5. **Progressive Disclosure Pointers:**
   - Direct relative links to deep specs (`design-spec/`), schemas, mistake logs (`mistakes.md`), and handoffs (`HANDOFF.md`)—never paste their contents inline.
6. **Current State & Next Action:**
   - Exact verification command, active blockers (if any), and the single next highest-priority step.

---

## 3. Validate for Weight & Speed

Before delivering or committing `CONTEXT.md` / `MASTER_SPEC.md`, verify all four gates:
- [ ] **Line Count Gate:** Total file length is **under 150 lines** (ideal: **60–120 lines**).
- [ ] **Zero Duplication Gate:** No schema, style guide, or skill prose is copied inline; all deep docs are linked via relative paths.
- [ ] **Hardware Alignment Gate:** Concurrency cap, dev server expectations, and model routing match the user's declared Hardware Tier (`Light`, `Standard`, or `Heavy`).
- [ ] **Drop-In Ready Gate:** Clean standard Markdown ready to save directly at the repository root as `CONTEXT.md` or `MASTER_SPEC.md`.

## 🎨 Active Signature (All AI Models)
When any AI model (Claude, Gemini, ChatGPT/Codex, Cursor, Windsurf, Antigravity, Copilot, OpenHands, or local LLMs) runs this skill, open the step with this exact monospace signature callout (Silver Slate `#94a3b8`):

```markdown
> ⚪ `[UNIVERSAL-MASTER-CONTEXT // <150-LINE CONTOUR]` — *Active on this step*
```
