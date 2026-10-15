# Info

One-page lead magnet. A Czech retail investor arrives from a mobile ad,
gets real value, and leaves an e-mail. The brief is `docs/brief.md`.
Decisions and their reasons live in `docs/decisions.md`, never here.

## How this file works

- Rules and the map only. No history, no decisions, no plans.
- Budget: 100 lines. When a topic needs more, it becomes a file under
  `docs/` or a skill under `.claude/skills/`, linked here with one line.
- A rule changes in the same commit as the code that needed it.

## Rules

- Data: every number shown on the page has a source URL, a date and the
  quoted line it came from. Nothing from memory. "Not verified" is a
  valid answer; an invented value is not.
- Sourced numbers live only in `src/data/` (value, source URL, date,
  quote). Components render them from there, never hard-code them.
- Copy is Czech, written for a beginner. Code, comments, commits and
  docs are English.
- Mobile first: 375 px wide is the design target.
- Pages stay static: no searchParams, cookies or headers in page code.
  UTM and other visit parameters are read in the browser only.
- Before "done": `pnpm check` and `pnpm test` pass.
- Colours, fonts and spacing come from the `@theme` tokens in
  `src/app/globals.css`; the default palette, radii and type sizes are
  cleared.
- Red marks only CTAs and disclaimers; selection, emphasis and focus use
  `accent`.
- Page copy lives in `src/copy/cs.ts`; components hold no Czech strings.
- Route files in `src/app/` only import and render components from
  `src/components/`.

## AI log

- `ai-log/NNN-<topic>.txt`: one `/export` per session, at the end of it.
- `ai-log/mistakes.md`: the AI mistakes caught, written by the user.

## Map

- `README.md` how to run, structure, live URL
- `AGENTS.md` written by `next dev`: read `node_modules/next/dist/docs/` before Next.js code
- `src/app/` routes (`/`, `/ochrana-udaju`, `icon.svg`); `src/components/` the UI; `src/copy/cs.ts` Czech copy; `src/data/` sourced facts (`types.ts`, one file per topic, `data.test.ts`); `src/lib/` formatting, the taps' options, the income illustration, the e-mail check and `track()`, with tests; `src/fonts/` the Archivo subset, its OFL licence and `subset.sh`
- `docs/brief.md` the idea, decisions to make, done-when checklists
- `docs/TODO.md` the commit plan, one section per commit
- `docs/decisions.md` decisions with reasons
- `docs/glossary.md` term · plain explanation · Czech page wording
- `docs/research/` sourced data from C1, one file per topic; start at its README
- `docs/mockups/` static page mockups from C3; `shared.js` holds their data and behaviour
- `ads/` the two Meta ads (A problem hook, B answer hook): HTML on one template `ad.css`, exported PNGs; `og.html` is the source of `public/og.png`
- `.claude/skills/implementation-start` and `implementation-end` open and close a TODO section
- `.claude/skills/implementation-plan` grilling for planning steps, one question at a time
- `.claude/skills/` third-party skills, pinned in `skills-lock.json`: lead-magnets, copywriting, cro, ad-creative, analytics, ab-testing, frontend-design, performance, core-web-vitals, accessibility
