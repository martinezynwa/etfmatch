# TODO

The commit plan. One section per commit, in order. Idea and design come
first, the app is set up once they are agreed. C5 and later are an outline;
C3 turns them into concrete sections.

## C1 Research

- [ ] Run `find-skills` to look for skills that could help here (landing pages, lead magnets, conversion, analytics). Install the useful ones into the project's `.claude/skills/` so they are in the repo.
- [ ] Agree in a short `/implementation-plan` what data to collect (e.g. fund pairs, historical returns, holdings, brokers, taxes), then collect as much of it as possible from primary sources, so later steps can pick from it. Write down what could not be verified. Everything goes to `docs/research.md`, each number with its source URL, date and quote.

## C2 Decisions

- [ ] Using `docs/research.md`, suggest the key elements of the page, then run `/implementation-plan` on them together with the "Decide first" list in `docs/brief.md`, starting from its "The idea" section.
- [ ] Write docs/decisions.md and docs/glossary.md. They are the input for the HTML mockups in C3.

## C3 Design Prep

- [ ] Based on decision in C2, create two variants of both ads and webpages as static HTML. Ads go to `ads/`, page mockups to `docs/mockups/`. Upon agreeing, structure the next tasks that will scaffold the development of the subsequent components one by one (C5 and further), replacing the outline below.

## C4 Setup

- [ ] Set up project: latest Next.js App Router, TypeScript, Tailwind 4, Biome, pnpm, src/. No other packages except Vitest.
- [ ] Run `pnpm dev` once
- [ ] Replace the boilerplate with an empty shell (title + one sentence); delete sample assets and unused CSS.
- [ ] Scripts: add typecheck (`next typegen && tsc --noEmit`), check = typecheck + lint, test = `vitest run`.
- [ ] Move the verified numbers from `docs/research.md` into typed files in `src/data/` (value, source URL, date, quote).
- [ ] Set up the design tokens from the agreed mockup (colours, fonts, spacing) in the Tailwind theme.
- [ ] Deploy the empty shell to Vercel from GitHub, so every later commit has a live URL. Note the URL in the README.
- [ ] README: how to run, project structure rules.

## Outline for C5 and further (refined in C3)

- Page sections, in the order decided, rendering data from `src/data/`.
- The interactive element(s), each one leading to the form.
- The form: on submit, show a preview of what the e-mail would contain (demo; nothing stored or sent).
- Measurement: a `track(event, props)` function that only console-logs, called at every step from arrival to submit, with ad A/B attribution.
- Launch readiness: privacy policy, consent, disclaimer, Open Graph, mobile performance check.
- README: section order, expected conversion, three A/B hypotheses, AI process, interpretation, what is missing.
