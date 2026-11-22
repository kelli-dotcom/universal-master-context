# Mistakes & Guardrails (`mistakes.md`)

## Never Repeat
1. **Bloated Monolithic Context Files (`> 150` Lines):** Never dump entire schemas, style guides, or multi-page transcripts inline into `CONTEXT.md` or `AGENTS.md`. Keep generated Master Context files between **60 and 120 lines** (hard ceiling: **150 lines**) using progressive disclosure pointers.
2. **Hardware-Blind Concurrency:** Never spawn 4–5 parallel agents or heavy local Docker stacks on a Light hardware tier (mobile, Chromebook, or 8GB RAM laptop). Always match concurrency caps (`1–2`, `3`, or `3–5`) to `examples/hardware-profiles.md`.
3. **Hidden Agent Files:** Keep `AGENTS.md`, `CONTEXT.md`, `llms.txt`, `HANDOFF.md`, `mistakes.md`, and `skills/` visible at the repository root so every AI model and human operator can inspect them directly.
