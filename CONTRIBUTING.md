# Contributing to Universal Master Context (`CONTRIBUTING.md`)

Thank you for contributing to **Universal Master Context**! Both **human builders** and **AI coding agents** across all models are welcome to contribute templates, hardware profiles, and context-engineering improvements.

---

## 1. High-Impact Ways to Contribute
- **New Project-Contour Templates (`templates/`):** Add ultra-lean (`< 80` lines) starter templates for additional domains (e.g., `research-paper.md`, `hardware-iot.md`, `course-curriculum.md`).
- **Hardware Profile Benchmarks (`examples/hardware-profiles.md`):** Refine model-tier and concurrency recommendations for mobile, Chromebook, 8 GB, 16 GB, and 32 GB+ workstations.
- **Skill & Generator Enhancements:** Improve `skills/universal-master-context/SKILL.md` or the zero-dependency browser generator in `preview/index.html`.

## 2. Human & AI Agent Guardrails (`AGENTS.md` + `llms.txt`)
- **Strict Line Caps:** Every starter template in `templates/` MUST stay **under 80 lines**, and every generated Master Context (`CONTEXT.md` / `MASTER_SPEC.md`) MUST stay **under 150 lines**.
- **Progressive Disclosure (Zero Duplication):** Link to deep specs, schemas, and skills via relative paths instead of pasting their contents inline.
- **All-Model Compatibility:** Use clean, vendor-neutral Markdown that works identically in Claude, Gemini, ChatGPT/Codex, Cursor, Windsurf, Antigravity, Copilot, OpenHands, and local LLMs.

## 3. 60-Second Verification Gate (Required Before Every PR)
```bash
wc -l AGENTS.md skills/universal-master-context/SKILL.md templates/*.md examples/hardware-profiles.md
```
*(Confirm every `templates/*.md` file is `< 80` lines and `SKILL.md` is `< 150` lines.)*

## 4. 3-Step Pull Request Workflow
1. **Fork & Branch:** `git checkout -b feat/your-template-or-profile`
2. **Verify Line Counts:** Run the `wc -l` check above to verify weight caps.
3. **Submit a Pull Request:** Open a PR against `main` with your line-count output. *(Mobile contributors can edit templates and `SKILL.md` directly in the GitHub mobile/web UI.)*

## 5. IP Safety & MIT License
All contributions must be 100% original clean-room work and are licensed under the repository's [MIT License](LICENSE).
