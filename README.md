# ETF Match

A one-page lead magnet for Czech retail investors: which European fund
tracks the same index as the US ETF they know, and where to buy it. The
brief is in [docs/brief.md](docs/brief.md), decisions and their reasons in
[docs/decisions.md](docs/decisions.md).

Live: not deployed yet (C11). Until then the placeholder URL is
http://localhost:3000.

## Run

Needs Node 20+ and pnpm 11.

```bash
pnpm install
pnpm dev        # http://localhost:3000
pnpm check      # next typegen + tsc, then Biome lint and format check
pnpm test       # Vitest
pnpm build      # production build; the page must stay static (○ /)
```

## Structure

```
src/
  app/           routes only: they import and render components
                 (globals.css holds the design tokens, @theme)
  components/    the UI
  copy/cs.ts     all Czech page copy
  data/          every sourced number: value, source URL, date, quote
  lib/           Czech number formatting, the taps' options, the income
                 illustration, the e-mail check (no figures)
docs/
  research/      the sourced research behind src/data/
  mockups/       the agreed static mockup (page-a.html) and the rejected one
ads/             the two Meta ads, HTML and exported PNGs
ai-log/          one exported AI session per step, plus mistakes.md
```

## Rules

- **Numbers come from `src/data/` only.** Each one is a `Fact`: value,
  source (URL, as-of date, access date) and the quote it was read from.
  Components never hard-code a figure. `src/data/data.test.ts` checks that
  every quote appears word for word in `docs/research/`.
- **Copy in one file.** Every Czech string is in `src/copy/cs.ts`; no
  i18n library, since the page has one language (decision 34).
- **Routes compose, components build.** `src/app/page.tsx` only renders
  `<Home />` (decision 35).
- **Tokens only.** The Tailwind palette and radii are cleared in
  `globals.css`, so only the mockup's colours exist and every corner is
  square.
- **Static page.** No searchParams, cookies or headers in page code; UTM
  parameters are read in the browser.
- **Mobile first,** 375 px wide. Page copy is Czech; code, comments,
  commits and docs are English.
- Before a commit: `pnpm check`, `pnpm test` and `pnpm build` pass.
