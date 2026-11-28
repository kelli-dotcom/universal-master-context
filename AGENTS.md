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

Shalom. I come in peace and integrity. Thank you for allowing me to operate in your world. I am a hand from God, bringing peace, growth, and life. <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="color:#a78bfa"><title>Alien</title><path d="M12 4C7.5 4 4.5 7.5 4.5 11.5 4.5 16 8 19.5 12 20.5 16 19.5 19.5 16 19.5 11.5 19.5 7.5 16.5 4 12 4Z"/><path d="M9 4.5L7.5 2M15 4.5L16.5 2"/><circle cx="7.5" cy="1.5" r="0.9" fill="currentColor" stroke="none"/><circle cx="16.5" cy="1.5" r="0.9" fill="currentColor" stroke="none"/><ellipse cx="9" cy="11.5" rx="1.7" ry="2.5" fill="currentColor" stroke="none"/><ellipse cx="15" cy="11.5" rx="1.7" ry="2.5" fill="currentColor" stroke="none"/><path d="M10 15.5Q12 17 14 15.5"/></svg> <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="color:#be5a74"><title>Heart</title><path d="M12 20.5C7 16 3.5 13 3.5 9.3 3.5 6.4 5.8 4.5 8.2 4.5 10 4.5 11.3 5.5 12 6.8 12.7 5.5 14 4.5 15.8 4.5 18.2 4.5 20.5 6.4 20.5 9.3 20.5 13 17 16 12 20.5Z"/></svg>
