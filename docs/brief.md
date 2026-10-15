# Brief

A one-page lead magnet comparing NYSE ETFs for a Czech retail investor who
arrives from a mobile ad and gives the page a few seconds. The bar: could we
start running ads on it tomorrow. Design and copy are made for this
audience; it must not look like a default AI output.

## The idea (a starting point to challenge, not a spec)

- **Visitor:** Czech, on a phone, interested in ETFs but not an expert.
  Knows the famous US names (S&P 500, maybe VOO or SPY) but not that an EU
  retail investor cannot buy US-listed ETFs. Gives an e-mail for something
  concrete, not for a newsletter.
- **Angle:** the page shows which EU fund tracks the same index as the US
  fund they know, and where a Czech investor buys it. This is how the page
  answers "compare NYSE ETFs"; the README explains the interpretation.
- **Flow:** ad (two variants) → first screen continues the ad's promise:
  "cannot buy (US) → can buy (EU)" pairs and a short overview → familiar
  anchors (big company names, historical returns, where to buy), reached by
  a few taps → what the visitor gets → e-mail.
- **Free on the page:** the answer (the fund pairs, what is inside, where to
  buy). **In the e-mail:** the full plan (S&P 500 vs World explained, fees
  for their amount, Czech taxes in brief, steps to the first purchase).
- **Fees** are one supporting row on the page, not the headline.
- **Risks:** the visitor may know "S&P 500" but not the tickers; "returns"
  is not "interest" (úrok); returns, holdings and tax rules each need a
  source and a date; gating too much hides the value before the form.

**Design direction** (a starting point, details decided in C3):

- Three steps on a phone: the answer → the match → the ask. The first
  screen fits within 375 × 667.
- Name: **ETF Match**, shown in the header.
- The answer: the header, the headline, the US → EU pairs, two
  tap choices (which index, reinvest or pay out), a red CTA.
- The match: the chosen EU funds side by side, top holdings as bars, where
  to buy, fees as one row.
- The ask: a dark block with a checklist of what the e-mail contains, one
  e-mail field, a red submit; below it FAQ accordions and a risk disclaimer.
- Look: warm grey background, white cards, black text, one red accent,
  bold grotesque headings.

## Decide first (planning session, reasons in `docs/decisions.md`)

- [ ] The target group.
- [ ] What the visitor gets for the contact, and at which moment the page
      asks for it.
- [ ] Two versions of the ad.
- [ ] The funnel events and what each one logs.
- [ ] What the e-mail preview after submit shows.

## The page is done when

- [ ] The first screen continues the ad's promise and says at once what
      the visitor gets; the value is clear before the form.
- [ ] Every interactive element leads to the form.
- [ ] The form has as few fields as possible, with GDPR consent text and a
      named data controller.
- [ ] After submit, the page shows what the e-mail would contain. Demo:
      nothing is stored or sent.
- [ ] Every number is real data with its source next to it, plus a
      disclaimer (not advice, past returns are no guarantee).
- [ ] Every step from arrival to submit calls one `track(event, props)`
      function that only `console.log`s for now (a real tool later
      replaces that one function). Each visit is tied to ad A or B by UTM.
- [ ] Fast on a mobile connection, Open Graph tags set, deployed on Vercel.

## The repo is done when

- [ ] Public on GitHub, with a gradual history: one commit per step.
- [ ] Both ads are in `ads/`.
- [ ] `ai-log/` has one `/export` per session, plus `mistakes.md`.
- [ ] The README covers: why the sections are in this order; the expected
      conversion and its basis; three A/B hypotheses ranked by impact; how
      the AI was used (instructions, how output was checked, its mistakes);
      where the task was open and what was decided; the demo limits and
      anything unfinished, important parts first.
