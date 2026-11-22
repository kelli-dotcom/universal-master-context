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
