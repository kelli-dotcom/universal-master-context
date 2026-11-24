# Universal Master Context — Fractal Agent Contract (`AGENTS.md`)

- **Pillar:** CRTA Tech Solutions (Public MIT Open-Source Toolkit)
- **North Star:** Generate `<150`-line, model-agnostic `CONTEXT.md` files contoured to project type, hardware profile, and progressive disclosure.

## Hard Phase Locks & Guardrails
- **Strict Weight Cap (`< 150` Lines):** Every generated `CONTEXT.md` or `MASTER_SPEC.md` MUST stay between **60 and 120 lines** (hard ceiling: `150` lines).
- **Zero File Duplication:** Always point to schemas, specs, and skills via relative links instead of copying contents inline.
- **4 Contour Templates:** Match the project to `templates/code-context.md`, `templates/multi-agent-context.md`, `templates/business-ops.md`, or `templates/creative-canon.md`.

## Stack, Entry Points & Verification
- **Stack:** Pure Markdown templates + static HTML `preview/index.html`.
- **Entry Points:** `skills/universal-master-context/SKILL.md`, `templates/*.md`, `examples/hardware-profiles.md`.
- **Verification:** Line-count check (`wc -l CONTEXT.md <= 150`) and link check across `templates/`.

## Pointers
- State & Index: [`HANDOFF.md`](HANDOFF.md) · [`mistakes.md`](mistakes.md) · [`llms.txt`](llms.txt)
- Active Signature: `> ⚪ **ᴜɴɪᴠᴇʀsᴀʟ-ᴍᴀsᴛᴇʀ-ᴄᴏɴᴛᴇxᴛ** · \`<150-LINE CONTOUR\` — *Active on this step*`

## 4-Stage Loop
1. **Frame:** Identify the project contour (`Code`, `Multi-Agent`, `Business Ops`, or `Creative`).
2. **Bridge:** Apply the `<150`-line weight cap and hardware concurrency profile.
3. **Proof:** Verify line count and relative pointer integrity.
4. **Push-Off:** Update `HANDOFF.md` and hand off to `agent-etiquette` for execution.

## Live State & Next Action
- **State:** `v1.0.0` live on GitHub across all 4 contour templates.
- **Next Action:** Apply Uneven U checks when authoring new `examples/` or `README.md` updates.
