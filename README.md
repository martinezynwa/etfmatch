# ETF Match

A one-page lead magnet for Czech retail investors: which European fund
tracks the same index as the US ETF they know. Brief:
[docs/brief.md](docs/brief.md). Decisions with reasons:
[docs/decisions.md](docs/decisions.md) ("D12" = decision 12).

Live: not deployed yet (C12). Placeholder URL: http://localhost:3000.

## Why this order

An EU retail investor usually cannot buy a US-listed ETF (no KID under
PRIIPs), so the page compares by **index** and points to the EU fund.

1. **First screen**: "cannot buy → can buy" continues both ads' promise;
   the CTA scrolls to the taps, not the form (D10, D11).
2. **Taps** (index, amount): personal without a form field (D5).
3. **Match card**: the answer for free, before anything is asked (D46).
4. **The ask**, once, after the value: one field, consent; the ISIN is
   the first thing promised, the most concrete item kept for the e-mail (D30).
5. **FAQ** answers the doubts that block a submit (D16).
6. **Disclaimer and sources**; warnings also sit next to every return (D17).

## Expected conversion

**About 4 % of page views (3–6 %)**, an estimate with no traffic yet.
Anchor: Unbounce's 2024 Conversion Benchmark Report, finance page
([link](https://unbounce.com/conversion-benchmark-report/finance-insurance-conversion-rate/),
updated 25 Feb 2026, read 15 Oct 2026): "investing is struggling to keep
up, with a conversion rate of just 3.9%". Financial services overall is
8.3 %. The page should beat 3.9 %: one field, a free answer before the
ask, mobile paid-social traffic (above the finance median on the same
page). Cold beginners keep it well below 8.3 %. Assumed funnel per 100
views, to be replaced by the C9 events: 55 `match_viewed` → 30
`form_viewed` → 8 `form_started` → 4 `form_submitted`.

## A/B hypotheses, by impact

Metric: `form_submitted / page_viewed` per variant. At 4 %, detecting
4 → 6 % needs ~1 900 views per variant (5 % significance, 80 % power).

1. **Ad hook, problem (A) vs answer (B).** Built (`ads/`, `utm_content`).
   B wins, because it promises exactly what the first screen gives. It
   changes who arrives, so it moves every step.
2. **The ask leads with the tax rule instead of the ISIN.** Raises
   `form_started / form_viewed`: beginners fear taxes more than they know
   what an ISIN is. One line in `cs.ts`.
3. **A second e-mail field under the taps.** More submits from the ~45 %
   who never reach the card; `match_viewed` is the guardrail. Last: it
   breaks "value before the ask".

## How the AI was used

Claude Code, one session per step, exported to [ai-log/](ai-log/).

- **Instructions**: [CLAUDE.md](CLAUDE.md) holds rules only; project
  skills plan (one question at a time), implement one TODO section, and
  commit after approval.
- **Checks**: every number is a `Fact` (URL, date, quote) from a primary
  source; `data.test.ts` fails if a quote is not word for word in
  `docs/research/`. A second session re-read all 58 values (D42).
  `pnpm check`, `test` and `build` run before each commit, Lighthouse
  runs on the production build (D41), and the user reviewed the UI at 375 px.
- **Mistakes** ([ai-log/mistakes.md](ai-log/mistakes.md)): constituents
  shown as "firem", a quarter-old SPY date, the 23 % tax rule on income
  instead of the tax base (D42); hard-coded font sizes (D44); red on
  focus and selection (D43).

## Where the task was open

- **"Compare NYSE ETFs"**: compared by index; QQQ is on Nasdaq, so it is
  tagged and left out of the ads (D12, D27).
- **The e-mail's value**: a plan from the visitor's taps; no purchase
  guide (D2).
- **Returns for a beginner**: Kč over 10 years at the index average,
  with a warning and the USD caveat (D4).
- **Acc/dist tap** became an amount tap; all funds are Acc (D13).
- **Fund choice**: one iShares Acc fund per index (D6); Revolut not named,
  as availability is unverified (D14).
- **After submit**: a modal shows the exact e-mail (D3).

## Demo limits and unfinished

1. **Not deployed**: README, ad links and `metadataBase` point to
   localhost until C12.
2. **No named data controller** yet, by choice; `/ochrana-udaju`
   explains the demo (D40). Needed before ads run.
3. **Nothing is sent or stored**; a mailing tool and double opt-in are
   missing.
4. **`track()` only logs to the console**; a real tool needs cookie
   consent (D20).
5. **Data snapshot** from 15 Oct 2026, with no refresh.
6. **Ads** are static images, not uploaded to Meta.

## Run

Needs Node 20+ and pnpm 11.

```bash
pnpm install
pnpm dev        # http://localhost:3000
pnpm check      # typegen + tsc, Biome
pnpm test       # Vitest
pnpm build      # must stay static (○ /)
```

## Structure

```
src/app/         routes only; globals.css holds the @theme tokens
src/components/  the UI
src/copy/cs.ts   all Czech copy
src/data/        every sourced number: value, URL, date, quote
src/lib/         formatting, taps, income illustration, e-mail check, track()
src/fonts/       Archivo Czech subset, OFL licence
docs/            brief, decisions, research, mockups, TODO
ads/             the two Meta ads; og.html → public/og.png
ai-log/          one export per session, mistakes.md
```

The working rules are in [CLAUDE.md](CLAUDE.md).
