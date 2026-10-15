---
name: implementation-end
description: Close a TODO.md commit section - run checks, remind about the log export, propose the commit message, then commit and push after approval. Use when the user says "finish", "wrap up", "commit this", or invokes /implementation-end.
---

# Implementation end

1. If there is no `package.json` yet (the sections before Setup), skip this step and say so. Otherwise run `pnpm check`, `pnpm test` and `pnpm build`. If any fails, stop: show the failing output, fix it or ask, and start again from this step. Never commit on a red check.
2. Look at `git status` and `git diff`. In `docs/TODO.md`, every box of the section being closed is ticked; if one is not, say which and ask whether it moves to a later section.
3. Remind the user to `/export` this session to `ai-log/NNN-<topic>.txt` (next free `NNN`, topic from the section), so it lands in the same commit. Name the caught mistakes of this session for `ai-log/mistakes.md`; never write that file.
4. Share the commit message in a code block: imperative subject of at most 72 characters, a blank line, short `-` bullets of what changed and why, then the attribution trailer. Match the style of `git log`. List the files that will be staged.
5. Wait for an explicit approval of the message. If the user edits it, use their text.
6. After approval: check the export file exists in `ai-log/` (if not, ask once more), stage the listed files plus the export by name (no `git add -A`), commit, and push to the current branch's upstream. Show the resulting `git log -1 --stat` and the push output.