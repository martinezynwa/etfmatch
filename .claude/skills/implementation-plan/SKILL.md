---
name: implementation-plan
description: Grill the user on a planning step of this app, one question at a time, grounded in the repo's context. Use when a TODO.md task says to run /implementation-plan, or when the user wants to decide something about the page before building it.
---

# Implementation plan

A thin wrapper around the `grilling` skill for this repo.

1. Read the context first: `CLAUDE.md`, `docs/brief.md`, the current section of `docs/TODO.md`, and `docs/decisions.md`, `docs/research/README.md` (and the topic files it links) and `docs/glossary.md` if they exist. Do not ask about anything they already settle; build on it.
2. In one short paragraph, state what this session has to decide and which existing decisions it builds on. Ask the user to confirm the scope.
3. Call the Skill tool with "grilling" and follow it, with one change: ask **one question at a time**, not a whole round. Pick the frontier question that unblocks the most others, give your recommended answer, and wait.
4. Facts come from `docs/research/` or a sub-agent with a source URL, never from memory. If a fact is missing, say so and mark the question as depending on it.
5. When the frontier is empty, list the agreed decisions, each with a one-line reason, and wait for confirmation. Then write them where the TODO task says (usually `docs/decisions.md`).
