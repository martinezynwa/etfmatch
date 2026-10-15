# Decisions

Each decision with its reason. Numbers named here come from
`docs/research/`, where each one has its source, date and quote. Czech
text in quotes is page or e-mail wording; terms are in
[glossary.md](glossary.md).

## C2 Decisions (2026-10-15)

Agreed in the C2 planning session. Builds on the C1 research scope in
[research/README.md](research/README.md).

### Audience and offer

1. **Target group.** A Czech beginner with some basic knowledge, on a
   phone. Knows "S&P 500" and maybe VOO from US-made content; has not
   bought an ETF yet or has just opened an app such as Revolut or XTB.
   *Reason:* the S&P 500 is the top ETF at most Czech brokers and 27 % of
   Revolut CZ ETF trades in 2025 ([popularity.md](research/popularity.md));
   the "cannot buy it here" moment hits exactly this person.

2. **What the visitor gets: "Váš ETF plán", one e-mail** built from their
   taps (index, amount), in five sections:
   1. income illustration (decision 4)
   2. what is inside: S&P 500 vs Nasdaq-100 vs Svět (decision 8)
   3. fees at Trading 212 and XTB for their amount
   4. Czech taxes in brief (3-year test, 100 000 Kč limit, 15 % / 23 %)
   5. akumulační vs distribuční

   No steps to a first purchase. *Reason:* a visitor gives an e-mail for
   something concrete; a plan shaped by their own choices is concrete.
   Step-by-step guides per broker would be long and tedious; the e-mail
   is a reference, not a manual.

3. **After submit: a modal shows the exact e-mail.** It can be closed and
   reopened any number of times. The full e-mail text is shown nowhere
   else on the page. Nothing is stored or sent. *Reason:* the demo has no
   e-mail delivery; the modal shows the visitor what they would get,
   while the value stays behind the form.

4. **Income illustration: monthly amount over 10 years at the index's
   10-year average, in Kč, rounded** ("cca 1,32 mil. Kč", with what was
   put in and what the gain is). All three indexes side by side.
   - A box directly above the numbers: "Nejde o investiční doporučení. Je
     to jen historická statistika indexu, ne předpověď. Minulé výnosy
     nezaručují budoucí a investice může ztratit hodnotu."
   - The note under it names the assumption (the same average every
     year), the rates and their return type, the currency (USD) and that
     the koruna/dollar rate changes the result.
   - Indexes: S&P 500 15.33 % (total return, gross), Nasdaq-100 21.16 %
     (total return), MSCI World 12.81 % (net total return); see
     [returns.md](research/returns.md). The return type stays in the note,
     because the bases differ.

   *Reason:* the visitor asked "what could it become" and a % a year
   means little to a beginner. **Deliberate exception** to C1 scope point
   5 ("no CZK"): no currency is converted, but a Kč amount is grown at a
   USD return. Allowed only with the currency caveat. No month-by-month
   index history was collected, so a true backtest is not possible.

5. **Inputs are taps, not form fields.** Index: S&P 500 / Nasdaq-100 /
   Svět. Amount: 1 000 / 3 000 / 5 000 / 10 000 Kč a month, default
   5 000. The period is fixed at 10 years. *Reason:* the form stays one
   field; 10 years is the period the sourced averages cover.

### Funds

6. **One EU fund per index, all accumulating (Acc), all iShares:**

   | Index | US funds | EU fund | ISIN | TER |
   |---|---|---|---|---|
   | S&P 500 | VOO, SPY, IVV | iShares Core S&P 500 UCITS ETF (Acc) | IE00B5BMR087 | 0.07 % |
   | Nasdaq-100 | QQQ | iShares NASDAQ 100 UCITS ETF | IE00B53SZB19 | 0.30 % |
   | MSCI World | URTH | iShares Core MSCI World UCITS ETF (Acc) | IE00B4L5Y983 | 0.20 % |

   *Reason:* for each index, the most popular or largest candidate with
   the longest history; the S&P 500 fund is the top ETF at Patria, Fio,
   Cyrrus and Portu and the only one XTB confirms by ISIN. One issuer
   keeps the page consistent. Each EU fund names the same benchmark as
   its US fund ([pairs.md](research/pairs.md)). Trade-off accepted:
   Xtrackers MSCI World 1C is cheaper (0.12 %). Distributing classes are
   only explained in the e-mail.

7. **"Svět" means MSCI World. VT → FTSE All-World is not on the page.**
   *Reason:* FTSE publishes no 10-year return, so the income illustration
   cannot work for it, and All-World is not the same index as VT. Every
   pair left on the page tracks the same index.

### The e-mail

8. **The comparison shows all three indexes, the chosen one
   highlighted.** Rows: number of companies, US share, top 3, the income
   illustration. Nasdaq-100 publishes no US share: the cell says
   "neuvádí". The Nasdaq column adds "68 % technologie" (factsheet
   Technology 68.01 %). *Reason:* the comparison is the e-mail's value.
   Gaps are shown, not filled. Sectors are not compared across columns,
   because the providers use different sector systems (ICB vs GICS).

9. **Sources in the e-mail: a small number by each figure and a "Zdroje"
   list at the end** (document, date, link). *Reason:* every number is
   traceable and the table stays readable on a phone.

### The page

10. **Order:** first screen → taps → match card → the ask → FAQ →
    disclaimer and sources. The **form appears once, after the match
    card**. The red CTA on the first screen scrolls to the taps, not to
    the form. *Reason:* the value is clear before the ask.

11. **First screen.** Headline: "ETF z NYSE si tu většinou nekoupíte.
    Stejný index v evropském fondu ano." One line on why (no KID, most EU
    brokers do not sell US ETFs). The US → EU pairs list. CTA: "Najít
    evropský fond ↓". The word "dvojče" is never used. *Reason:* it
    continues the ad's "cannot buy → can buy" promise. "Většinou" keeps it
    within the safe wording ([us-etf-rule.md](research/us-etf-rule.md));
    "stejný index" is true for all three pairs (decision 6).

12. **The QQQ row is tagged "(Nasdaq)".** VOO, SPY, IVV and URTH are
    listed on NYSE Arca, QQQ on Nasdaq (SEC EDGAR prospectuses,
    [pairs.md](research/pairs.md)). *Reason:* the headline stays true
    for the list. "NYSE Arca" is too technical for the page; the source
    note names it.

13. **No acc/dist tap.** The brief's "reinvest or pay out" tap is
    replaced by the amount tap. *Reason:* all three funds are Acc; a
    beginner cannot yet judge the choice, and it is explained in the
    e-mail (C1 scope point 4).

14. **Match card,** top to bottom:
    1. "Místo VOO, SPY, IVV" → the EU fund name and its ISIN with a copy
       button. No ticker: tickers differ by exchange and broker, the ISIN
       finds the fund everywhere.
    2. TER vs the US fund (e.g. 0,07 % vs VOO 0,03 %).
    3. Top 5 companies as bars with weights, plus the number of companies.
    4. "Za 10 let průměrně … % ročně (v USD)", with the return type and
       "minulé výnosy nezaručují budoucí".
    5. Where to buy: Trading 212 · XTB.
    6. One fees row for the chosen amount: the currency-conversion fee
       per purchase at each broker, "pokud máte účet v Kč".

    *Reason:* these are the brief's anchors (big names, returns, where to
    buy, fees as one row); the amount tap visibly changes something on
    the page. S&P 500 weights come from S&P DJI's data feed as fractions
    (0.0838 → 8.38 %); the ×100 is a unit change, not a new figure.
    Revolut is not named: no fund is verified as available there
    ([brokers.md](research/brokers.md)).

15. **The ask** (dark block): "Pošleme vám celý plán k [index]", a
    checklist of the five e-mail sections, one e-mail field, GDPR consent,
    a red submit. **Data controller:** "Martin G (demo projekt)"; the
    contact is filled in at C5. *Reason:* the brief needs a named
    controller and the fewest fields; no company is invented.

16. **FAQ** (accordions under the form):
    1. "Je nákup ETF z NYSE v Česku zakázaný?" Not banned; most brokers
       do not offer them because the KID is missing.
    2. "Můžu koupit akcie amerických firem?" Yes, shares are not
       affected. No specific stock is named.
    3. "Proč je evropský fond někdy dražší?" Nasdaq-100: 0,30 % vs QQQ
       0,18 %.
    4. "Co je ISIN a jak fond najdu u brokera?"

    *Reason:* these answer the doubts that block the form. Taxes and
    Acc/Dist stay in the e-mail, because they are what it offers.

17. **Disclaimer.** "Not investment advice, historical statistics only"
    appears above the income illustration in the e-mail, by the return
    on the match card, and in the page footer. *Reason:* the page shows
    returns to beginners; the warning has to sit next to the numbers,
    not only at the bottom.

### Ads

18. **Two ads, one variable: the hook.** Same format: a static Meta image
    (Instagram/Facebook feed, 4:5).
    - **Ad A (problem):** "Chcete ETF z NYSE? V Česku ho většinou
      nekoupíte." CTA "Co místo toho".
    - **Ad B (answer):** "S&P 500 i Nasdaq-100 koupíte i v Evropě.
      Ukážeme vám který fond a kde." CTA "Najít fond".
    - Links carry `utm_content=ad-a` or `ad-b`; final wording in C3.

    *Reason:* one changed variable gives a readable test: does tension or
    a direct answer bring more e-mails? A hook built on returns was
    rejected: it promises returns in an ad.

### Measurement

19. **One `track(event, props)` call; console.log only.** Every event
    carries `variant` (ad-a / ad-b / none, from `utm_content`),
    `utm_source`, `utm_medium`, `utm_campaign` and `device` (mobile /
    desktop by viewport width).

    | Event | When | Extra props | Question it answers |
    |---|---|---|---|
    | `page_viewed` | load | `referrer` | How many arrived from each ad? |
    | `cta_clicked` | red CTA on the first screen | `location` | Does the first screen move people on? |
    | `index_selected` | index chip | `index` | Which index do they care about? |
    | `amount_selected` | amount chip | `amount` | What amounts are they thinking of? |
    | `match_viewed` | match card ≥ 50 % in view, once | `index`, `amount` | Did the hook carry them to the answer? |
    | `isin_copied` | copy button | `index` | Do they intend to buy? |
    | `form_viewed` | ask block ≥ 50 % in view, once | `index`, `amount` | Do they reach the ask? |
    | `form_started` | first focus in the e-mail field | – | Does the offer tempt them? |
    | `form_error` | submit blocked | `error_type` | Is the form losing people? |
    | `form_submitted` | valid submit | `index`, `amount` | Primary conversion |
    | `email_preview_opened` | modal opened | `count` | Do they come back to the e-mail? |
    | `faq_opened` | an accordion opened | `question` | Which doubts block them? |

    - A/B primary metric: `form_submitted / page_viewed` per variant.
      Secondary: `match_viewed / page_viewed`.
    - The e-mail address is never logged.

    *Reason:* the analytics skill's rules: every event informs a decision,
    object_action names, no personal data in properties. The form metrics
    follow `cro/references/form.md`. Scroll depth is left out, because
    `match_viewed` and `form_viewed` cover the steps that matter.

20. **README "to build on later":** a real tool (e.g. GA4) replaces the
    inside of `track()`; analytics needs a cookie-consent step before it
    goes live. *Reason:* the demo only logs; EU consent rules apply as
    soon as a real tool collects data.

## C3 Design (2026-10-15)

Agreed in the C3 review of the static mockups (`docs/mockups/`, `ads/`).
Where a point changes a C2 decision, it says which one.

21. **Page variant A.** Warm grey ground, white cards, black type, one red,
    Archivo (variable width) for everything. Tokens for C4: background
    `#e6e3de`, card `#ffffff`, ink `#000000`, muted `#5c5853`, line
    `#d4d0ca`, red `#d7000f`, red on hover `#a8000c`. Variant B (no cards,
    each pair row is the index tap) stays in `docs/mockups/` as the option
    not taken. *Reason:* the user's choice; it is the brief's direction.

22. **No strike-through anywhere** (page and ads). In the pairs list the
    US and EU names have the same size; the US side is grey and the
    columns are headed "Z NYSE, většinou nekoupíte" and "V Evropě, stejný
    index". *Reason:* agreed in review; the pair is a match, not a
    correction, and the column heads carry the "cannot / can buy" meaning.

23. **Square corners on everything** (`--radius: 0`): cards, chips,
    buttons, inputs, modal, check marks. *Reason:* agreed in review.

24. **Motion pattern.** One load sequence: the pair rows rise in, one
    after another. After that, motion only answers a tap: numbers count to
    their new value (450 ms), changed text fades up (260 ms), bars slide
    (500 ms), accordions expand, the modal fades up and back down. All of
    it is off under `prefers-reduced-motion`. *Reason:* agreed in review;
    motion shows what a tap changed, and nothing moves on its own after
    the first screen.

25. **Headline is one sentence:** "ETF z NYSE si tu většinou nekoupíte,
    stejný index v evropském fondu ano." Replaces the two-sentence wording
    in decision 11.

26. **No personal name on the page.** The consent text and footer say
    "Správce údajů: provozovatel ETF Match (demo, jméno a kontakt doplníme
    před spuštěním)". Replaces the controller in decision 15. *Open:* the
    brief asks for a named controller; it is filled in at launch readiness.

27. **Ads: one pattern, NYSE in both headers.** Logo, big header, a sub
    under a black rule, a full-width red button inside the side padding.
    Replaces the wording in decision 18; the hook is still the only
    variable.
    - **A (problem):** "Chcete ETF z NYSE? V Česku ho většinou
      nekoupíte." Sub: "VOO, SPY ani IVV vám většina brokerů v EU
      neprodá. Ukážeme vám evropský fond se stejným indexem." Button "Co
      místo toho". QQQ is left out: it is listed on Nasdaq, not NYSE
      (decision 12).
    - **B (answer):** "ETF z NYSE mají evropské protějšky." Sub: "S&P 500
      i Nasdaq-100 koupíte i v Evropě, ve fondu se stejným indexem.
      Ukážeme vám, který fond a kde." Button "Najít fond".

28. **The match card shows the fund's full name** with "UCITS ETF", e.g.
    "iShares Core S&P 500 UCITS ETF (Acc)". *Reason:* it is the name the
    visitor finds in the broker's app; explanatory copy still avoids
    "UCITS" (glossary).

29. **Pairs list: one-word column heads, labels below.** The heads read
    "NYSE" and "Evropa"; the index name sits under each row (e.g. "S&P
    500", "Nasdaq-100 (QQQ je na burze Nasdaq)"). *Reason:* agreed in
    review; the names are what the visitor reads first.

30. **Match card order changed** (replaces the order in decision 14):
    1. "[index] za 10 let průměrně": the 10-year % with its warning, first,
       so a tap visibly changes the top of the card
    2. top 5 companies as bars, plus the number of companies
    3. "Evropský fond místo [US funds]": fund name, TER vs the US fund
    4. where to buy and the fees row
    5. a red "Chci vědět víc ↓" button that scrolls to the form
    6. "Zdroje dat", an accordion with all the card's sources

    **The ISIN is not on the page any more**; it is in the e-mail, and the
    ask's checklist names it first ("Evropský fond a jeho ISIN…"). The
    companies stay in the e-mail too. *Reason:* agreed in review; the ISIN
    is the most concrete thing to give for the e-mail address, and every
    interactive element should lead to the form.

31. **Events** (changes decision 19): `isin_copied` is dropped with the
    copy button. The new button sends `cta_clicked` with `location:
    "match_card"` (the first-screen CTA sends `"first_screen"`). Source
    accordions do not send `faq_opened`.

32. **Sources behind accordions.** On the page every source sits in a
    closed "Zdroje dat" / "Zdroje" accordion next to its block; the
    warnings stay visible. The e-mail keeps its numbered "Zdroje" list.
    *Reason:* agreed in review; the rule "every number has its source"
    still holds, one tap away.

33. **Ads exported** as `ads/ad-a.png` and `ads/ad-b.png`, 1080 × 1350,
    from the HTML at device scale 2.5. The links get the live domain in
    C10.

## C4 Setup (2026-10-15)

Agreed in the C4 review of the scaffold.

34. **No i18n framework; all Czech copy in `src/copy/cs.ts`.** Components
    read their text from it and hold no Czech strings. Numbers never go
    into copy; they come from `src/data/`. *Reason:* the page has one
    language, so an i18n library (an extra package) or a `[lang]` route
    segment buys nothing. One copy file still makes wording changes and
    copy A/B tests a one-file edit, and it becomes the first dictionary
    if a second language is ever added.

35. **Route files only compose components.** `src/app/page.tsx` imports
    and renders `<Home />`; markup and logic live in `src/components/`.
    *Reason:* the pattern is set before C5, so each later section adds a
    component instead of growing the page file.

36. **Deploy moves to C11; localhost is the placeholder URL until then.**
    README and the ad links in `ads/` use `http://localhost:3000`; the
    C10 performance and accessibility check runs on a local production
    build. C11 deploys and swaps the placeholder for the live URL.
    Changes decision 33 ("the links get the live domain in C10").
    *Reason:* the user's choice; no URL is set before the deploy.

## C6 Taps and match card (2026-10-15)

Agreed in the C6 review of the match card at 375 px.

37. **The fund is the card's title** (changes the order in decision 30).
    The card is headed by "Evropský fond místo [US funds]" and the fund's
    full name, as one heading that names the card for screen readers.
    The fund's TER and the US fund for comparison become their own block
    after the top 5. Order:
    1. the fund: "Evropský fond místo [US funds]" and its full name
    2. "[index] za 10 let průměrně": the 10-year % with its warning
    3. top 5 companies as bars, plus the number of companies
    4. TER vs the US fund
    5. where to buy and the fees row
    6. the red "Chci vědět víc ↓" button
    7. "Zdroje dat", the sources accordion

    *Reason:* the user's choice in review; the fund is the answer the
    first screen promises, so it leads, and a tap still changes the top
    of the card (the name and the return both swap).

## C9 Measurement (2026-10-15)

38. **"≥ 50 % in view" means half the block or half the screen.** At
    375 px the match card is more than twice the screen's height, so half
    of it is never visible at once. `match_viewed` and `form_viewed` fire
    when the visible part is at least half the block or half the
    viewport, whichever is smaller. *Reason:* the literal rule would never
    fire for the match card on mobile, the page's target.

39. **A chip sends its event only when it changes the plan.** Tapping the
    chip already pressed sends nothing. Device is mobile below 768 px, as
    in the mockups; a missing UTM is logged as `null`. *Reason:* the
    events count choices, and a repeat tap is not one.


## C10 Launch readiness (2026-10-15)

40. **The controller stays a placeholder; a privacy page explains the
    demo.** The user kept decision 26's wording ("provozovatel ETF Match,
    jméno a kontakt doplníme před spuštěním"), so the brief's "named data
    controller" is still open. `/ochrana-udaju` says what the form takes
    (the e-mail only), why (the plan), the legal basis (consent), that the
    demo stores and sends nothing, that `track()` only logs to the
    browser console with no cookies, what is filled in before a real
    mailing, and the visitor's rights. The consent text and the footer
    link to it. The share card (`public/og.png`, 1200 × 630, from
    `ads/og.html` on the ads' template) and the OG title name VOO, SPY,
    IVV, not QQQ, which is listed on Nasdaq (decision 27). *Reason:* the
    user's choice; the page says honestly what the demo does instead of
    inventing a policy for a mailing that does not exist.

41. **Archivo is self-hosted as one Czech subset.** `next/font/google`
    preloaded Google's latin and latin-ext files, 172 KiB with the width
    axis, and Czech needs both. `src/fonts/subset.sh` cuts the OFL source
    to the Czech characters and the ranges the code uses (weight
    400–900, width 100–125): one 54 KiB file, loaded with
    `next/font/local`. Mobile Lighthouse on the production build: LCP
    2.9 s → 2.3 s, performance 96 → 98–99, page weight 342 → 223 KiB.
    An SVG icon removes the `/favicon.ico` 404 (best practices 96 →
    100). Accessibility and SEO were 100 before and after. *Reason:* the
    headline is the LCP element and waited on the font; the brief asks
    for "fast on a mobile connection". The remaining hints (unused and
    legacy JS, 7 KiB render-blocking CSS) are Next.js's own chunks.
