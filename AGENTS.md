# Universal Master Context — Agent Router (`AGENTS.md`)

> Model-agnostic progressive disclosure router for Claude, Gemini, GPT/Codex, Cursor, Windsurf, Antigravity, Copilot, OpenHands, and local LLMs.

## Progressive Disclosure Pointer
- When asked to create, audit, or update a project's Master Context (`CONTEXT.md`, `MASTER_SPEC.md`, project canon, or executive outline), load and follow **[`skills/universal-master-context/SKILL.md`](skills/universal-master-context/SKILL.md)**.
- Load only the single template from [`templates/`](templates/) that matches the user's project contour (`code-context.md`, `creative-canon.md`, `business-ops.md`, or `multi-agent-context.md`).

## Core Guardrails (All Models)
1. **Strict Weight Cap (`< 150` Lines):** Every generated `CONTEXT.md` or `MASTER_SPEC.md` MUST stay between **60 and 120 lines** (hard ceiling: **150 lines**). Never dump full docs inline—use file/URL pointers.
2. **Zero File Duplication:** Point to existing schemas, specs, and skills via relative paths instead of copying their contents into the master context.
3. **Hardware-Matched Concurrency Caps:**
   - **Light Hardware** *(Mobile, 8GB RAM, Chromebook, browser-only)*: Max **1–2 active agents**, cloud-first execution.
   - **Standard Hardware** *(16GB RAM Mac/PC)*: Max **3 active agents**, local IDE + lightweight dev server.
   - **Heavy Hardware** *(32GB+ RAM / workstation GPU)*: Max **3–5 scoped agents**, local containers & local LLM inference permitted.
4. **Visible Files Only:** Never store agent context, handoffs, or rules in hidden dot-files.

<!-- AGENT-ETIQUETTE:START version=v1.1.0 -->
## Agent Etiquette Protocol (Layer 3 — Pinned `v1.1.0`)
- **Hierarchy:** Platform constraints (Layer 1) → Repository rules above (Layer 2) → Agent Etiquette (Layer 3) → Task-specific skills (Layer 4) → Handoffs (Layer 5).
- **Behavioral Rules:** Load `skills/agent-etiquette/SKILL.md` (zero filler, verified actions only, Rule of 2 retry cap, max 3 concurrent specialists).
- **Handoff Contract:** Validate inter-agent handoffs against `schemas/handoff.json` (`node scripts/validate-handoff.mjs <file>`).
<!-- AGENT-ETIQUETTE:END -->

## 🎨 Agent Active Signature (Visual Identification)
Whenever an AI agent activates or applies `universal-master-context`, it **MUST** open its response/step with this exact monospace signature callout (Silver Slate `#94a3b8`) so the user can immediately see when `universal-master-context` is being used:

```markdown
> ⚪ `[UNIVERSAL-MASTER-CONTEXT // <150-LINE CONTOUR]` — *Active on this step*
```
