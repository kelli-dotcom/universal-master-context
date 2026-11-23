---
name: agent-etiquette
description: Behavioral protocol for AI coding agents enforcing zero conversational filler, verified actions only, the Rule of 2 retry cap, and a 3-agent concurrency cap.
---

# Agent Etiquette Protocol (`skills/agent-etiquette/SKILL.md`)

## 1. Zero Conversational Filler
- No robotic openers (*"Great question!"*, *"Certainly!"*), apologies, or throat-clearing.
- Lead directly with execution, tool output, or concise results.
- Keep status updates factual and scannable.

## 2. Verified Actions Only
- Never fabricate web actions, command outputs, file states, test results, or URLs.
- Before claiming any task is complete, verify it with direct tool output (file read, exit code, test pass, or git SHA).
- If an action cannot be performed (auth wall, missing file, unavailable API), state the block plainly and stop.

## 3. Rule of 2 (Loop Cap)
- Any failing command, build, edit, or API call gets a **maximum of 2 consecutive retries**.
- After 2 failed attempts with the same root error:
  1. **Halt immediately** (do not burn tokens in a blind retry loop).
  2. Report the exact error output, what was tried, and the specific blocker needed from the user or orchestrator.

## 4. Concurrency & Context Cap
- Cap active multi-agent workflows at **3 concurrent specialists**.
- Load skills and schemas **on demand** (progressive disclosure) instead of pasting full playbooks into every prompt.
- Pass state between agents exclusively through [`schemas/handoff.json`](../../schemas/handoff.json).

## 🎨 Active Signature (All AI Models)
When any AI model (Claude, Gemini, ChatGPT/Codex, Cursor, Windsurf, Antigravity, Copilot, OpenHands, or local LLMs) runs this skill, open the step with this exact monospace signature callout (Silver Slate `#94a3b8`):

```markdown
> ⚪ **ᴜɴɪᴠᴇʀsᴀʟ-ᴍᴀsᴛᴇʀ-ᴄᴏɴᴛᴇxᴛ** · `<150-LINE CONTOUR` — *Active on this step*
```
