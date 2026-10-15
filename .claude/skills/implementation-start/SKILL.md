---
name: implementation-start
description: Pick the next commit section from TODO.md and implement it end to end. Use when user says "next task", "start C3", or invokes /implementation-start.
---

# Implementation start

1. In `docs/TODO.md`, take the section named in the argument, or the first one with an unticked box. Read every file it points to. Do not touch other sections.
2. Before changing anything, write a five-line plan in chat: what you will create or change, and what is unclear. Ask only if the answer changes the work; otherwise state the assumption. Plan should be short and concise.
3. Implement the boxes in order, ticking each as it is done.
4. Update the Map in CLAUDE.md if files were added.
5. End with the files changed, then run `/implementation-end` (checks, export reminder, commit message, commit and push after approval).