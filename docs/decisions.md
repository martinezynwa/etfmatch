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
