# TODO

The commit plan. One section per commit, in order. Idea and design come
first, the app is set up once they are agreed. C5 and later were planned
in C3 from the agreed mockup (`docs/mockups/page-a.html`).

## C1 Research

- [x] Run `find-skills` to look for skills that could help here (landing pages, lead magnets, conversion, analytics). Install the useful ones into the project's `.claude/skills/` so they are in the repo.
- [x] Agree in a short `/implementation-plan` what data to collect (e.g. fund pairs, historical returns, holdings, brokers, taxes), then collect as much of it as possible from primary sources, so later steps can pick from it. Write down what could not be verified. Everything goes to `docs/research/` (one file per topic, overview in its README), each number with its source URL, date and quote.

## C2 Decisions

- [x] Using `docs/research/` (start with its README), suggest the key elements of the page, then run `/implementation-plan` on them together with the "Decide first" list in `docs/brief.md`, starting from its "The idea" section.
- [x] Write docs/decisions.md and docs/glossary.md. They are the input for the HTML mockups in C3.

## C3 Design Prep

- [x] Based on decision in C2, create two variants of both ads and webpages as static HTML. Ads go to `ads/`, page mockups to `docs/mockups/`. Upon agreeing, structure the next tasks that will scaffold the development of the subsequent components one by one (C5 and further), replacing the outline below.

## C4 Setup

- [x] Set up project: latest Next.js App Router, TypeScript, Tailwind 4, Biome, pnpm, src/. No other packages except Vitest.
- [x] Run `pnpm dev` once
- [x] Replace the boilerplate with an empty shell (title + one sentence); delete sample assets and unused CSS.
- [x] Scripts: add typecheck (`next typegen && tsc --noEmit`), check = typecheck + lint, test = `vitest run`.
- [x] Move the verified numbers from `docs/research/` into typed files in `src/data/` (value, source URL, date, quote).
- [x] Set up the design tokens from the agreed mockup (colours, fonts, spacing) in the Tailwind theme.
- [x] README: how to run, project structure rules.

## C5 First screen

- [ ] Header with the ETF Match wordmark.
- [ ] Headline, the KID line and the US → EU pairs list, rendered from `src/data/`, with the load sequence (decision 24).
- [ ] Red CTA scrolls to the taps.
- [ ] Fits 375 × 667: check with a screenshot.

## C6 Taps and match card

- [ ] Index and amount chips (one client component, one state).
- [ ] Match card in the order of decision 30: 10-year return with its warning, top 5 bars and company count, EU fund and TER vs the US fund, brokers and fees row, "Chci vědět víc" button to the form, sources in an accordion. No ISIN on the page. All values from `src/data/`.
- [ ] Motion on change (decision 24): numbers count, text fades, bars slide; nothing under reduced motion.
- [ ] Tests: percent and Kč formatting, fee per purchase.

## C7 The ask and the e-mail

- [ ] Dark ask block: headline with the chosen index, checklist (ISIN first), one e-mail field, consent text, red submit, error messages.
- [ ] Income illustration function (monthly amount, 10 years, yearly average) with tests; 5 000 Kč at 15.33 % gives cca 1,32 mil. Kč (decision 4).
- [ ] E-mail modal built from `src/data/`: five sections, numbered sources; opens on submit, closes and reopens. Nothing stored or sent.

## C8 FAQ, disclaimer, sources

- [ ] Four FAQ accordions (decision 16) that open smoothly.
- [ ] Footer: disclaimer, sources in an accordion, data controller line.

## C9 Measurement

- [ ] `track(event, props)` that only console-logs; variant, UTM and device read in the browser.
- [ ] The events of decision 19 as changed by decision 31 wired; the e-mail address is never logged.
- [ ] Tests: variant from `utm_content`, event props.

## C10 Launch readiness

- [ ] Named data controller and a privacy policy page (decision 26 leaves the name open).
- [ ] Open Graph tags and image.
- [ ] Mobile performance and accessibility check on a production build at http://localhost:3000 (`pnpm build && pnpm start`), with fixes.
- [ ] Ad links in `ads/` keep the http://localhost:3000 placeholder (decision 36); re-export the PNGs if the ads change.

## C11 Deploy

- [ ] Import the GitHub repo in Vercel and deploy.
- [ ] Replace the http://localhost:3000 placeholder with the live URL: README, ad links in `ads/`, `metadataBase` for the Open Graph tags.

## C12 README

- [ ] Why the sections are in this order, expected conversion, three A/B hypotheses, how the AI was used, where the task was open, demo limits and what is unfinished.
