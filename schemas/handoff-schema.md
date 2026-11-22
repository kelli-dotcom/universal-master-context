# Multi-Agent Handoff Schema (`schemas/handoff-schema.md`)

Every handoff between agents must emit a valid JSON object matching [`schemas/handoff.json`](handoff.json).

## Required Fields
| Field | Type | Description |
| :--- | :--- | :--- |
| `from_agent` | `string` | Identifier of the sending agent |
| `to_agent` | `string` | Identifier of the receiving agent (or `"user"`) |
| `task_id` | `string` | Unique task or ticket identifier |
| `status` | `"in_progress" \| "blocked" \| "ready_for_review" \| "done"` | Current verified state |
| `verified_artifacts` | `string[]` | File paths, commit SHAs, or test outputs directly verified |
| `blockers` | `string[]` | Concrete blockers (empty array `[]` if none) |
| `next_action` | `string` | Single unambiguous next instruction |

## Example
```json
{
  "from_agent": "builder-1",
  "to_agent": "reviewer-1",
  "task_id": "AUTH-42",
  "status": "ready_for_review",
  "verified_artifacts": [
    "src/auth/session.ts",
    "tests/auth.test.ts (14 pass, 0 fail)",
    "commit: 9a3f1c2"
  ],
  "blockers": [],
  "next_action": "Audit session rotation edge cases and approve merge to main."
}
```
