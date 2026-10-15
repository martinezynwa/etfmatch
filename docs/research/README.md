# Research

Sourced data collected in C1. Later steps pick from it; nothing here is a
page decision yet (those are made in C2 and recorded in `docs/decisions.md`).

## Files

| File | What it holds |
|---|---|
| [popularity.md](popularity.md) | Which ETFs and brokers Czechs use (Czech media, broker statements) |
| [us-etf-rule.md](us-etf-rule.md) | Why US ETFs are unavailable: PRIIPs, ČNB, broker pages, safe wording |
| [pairs.md](pairs.md) | US funds and their EU (UCITS) candidates: ISIN, TER, size, listings |
| [holdings.md](holdings.md) | Index top 10, number of companies, country and sector split |
| [returns.md](returns.md) | Index returns and fund returns, with their return types and dates |
| [brokers.md](brokers.md) | Revolut, XTB, Trading 212: entity, fees, savings plans, ETF availability |
| [taxes.md](taxes.md) | Czech tax rules from the law: time test, annual limit, rates, reporting |

Each file ends with its own "Not verified" list.

## Scope

Agreed in the C1 planning session, 2026-10-15.

1. **Pairs.** S&P 500 (VOO, SPY, IVV), Nasdaq-100 (QQQ), total world (VT),
   MSCI World (URTH) → EU funds. These are the names Czech broker reports
   list as top picks.
2. **Matching rule.** Same index first; otherwise the closest exposure,
   labelled "alternative" with a one-line reason. 2–3 EU candidates per
   pair: index, TER, AUM, domicile, acc/dist, ISIN, exchange and currency.
   C2 picks the final fund.
3. **Dividend ETFs are out.** No Czech evidence that they are popular; a
   different topic.
4. **Accumulating vs distributing** belongs in the e-mail, not on the page.
   Both share classes are still recorded. The page is the hook, the e-mail
   the full experience.
5. **Returns.** Index and fund, in USD as published, annualised 1/5/10 years
   plus calendar years. No CZK (no primary source; we do no currency maths
   of our own). What to do about short fund histories is decided once the
   data is in.
6. **Holdings.** Top 10 plus structure (number of companies, top-10 share,
   country and sector split) from the index provider's factsheet. The page
   may show the top 5.
7. **Brokers.** Revolut, XTB, Trading 212: popular global brokers with a
   Czech app. A pointer, not an endorsement, and listed only where the
   chosen ETFs are verified as available. Per broker: Czech residents, ETF
   availability by ISIN, commission, FX fee, other fees, savings plan. IBKR
   (no Czech interface), eToro (no Czech evidence) and robo-advisors are
   out.
8. **Taxes.** Researched in depth from the law: time test, annual limit,
   rate, reporting duty, recent changes, one line on dividends. Key points
   on the page; the full version in the e-mail, citing the law.
9. **The NYSE claim.** The EU rule (EUR-Lex plus a regulator), retail vs
   professional exceptions, a broker confirmation, US stocks vs US ETFs on
   the NYSE, and the US fund side of each pair (ticker, name, index,
   expense ratio, issuer).
10. **Format and sources.** One file per topic; one row per number:
    `value | source URL | document title, as-of date, accessed date | quote`.
    Primary sources only: issuers, index providers, brokers' own pages,
    EUR-Lex, zakonyprolidi.cz, financnisprava.cz, ČNB, ESMA. Aggregators
    (justETF, Morningstar) are used to find things, never cited. Czech
    media only for popularity, labelled as weaker. Every quote is re-checked
    against its source before it lands here; a failed check moves the item
    to "Not verified".

## Key findings

A short reading of the evidence below, for C2. Every number here appears,
with its source and quote, in the linked topic file. Numbers are as
published: return types and as-of dates differ between sources (see 5).

### 1. Which funds Czechs buy ([popularity.md](popularity.md))

- The S&P 500 is the top ETF at Patria, Fio, Cyrrus and Portu (Ekonom,
  22 Jan 2025). At XTB the top ETF is Vanguard FTSE All-World.
- At Revolut CZ, the Vanguard S&P 500 made up 27 % of all ETF trades in
  2025 (Investujeme, 30 Jan 2026).
- XTB (CC.cz, 7 Aug 2024): S&P 500 first, Nasdaq-100 second, global
  funds third.
- Dividend interest shows up in individual US stocks, not in dividend
  ETFs (Seznam Zprávy, 20 Oct 2023).

### 2. "You can't buy VOO": what the sources support ([us-etf-rule.md](us-etf-rule.md))

- **It is not a legal ban.** PRIIPs (EU 1286/2014) requires a key
  information document (KID) before a fund is sold to retail investors
  (Art. 5(1), 13(1)). This covers non-EU funds (Commission guidelines
  2017/C 218/02).
- **US issuers don't publish a KID, so most EU brokers don't offer US
  ETFs to retail clients.** Confirmed on broker pages:
  - XTB (international help page; the Czech page lacks the sentence)
  - Saxo
  - Revolut ("registered in the European Union" only)
- **Shares are not PRIIPs** (recital 7), so US company shares stay
  buyable. Apple is listed on Nasdaq and Coca-Cola on the NYSE (SEC
  EDGAR).
- **The Czech exception.** The ČNB (Q&A RS2018-12, still valid) says an
  execution-only broker is not bound by Art. 13(1). Fio said in 2022 its
  clients can buy US ETFs "bez omezení" (without restriction). Whether
  that is still possible today is not verified.
- Professional clients (MiFID II Annex II) are an exception.
- **Safe page wording:** "most brokers in the EU won't sell you VOO",
  not "it is banned".

### 3. Pairs (US fund → EU candidates) ([pairs.md](pairs.md))

| US fund (index, expense ratio) | EU candidates (ISIN acc / dist, TER) | Match |
|---|---|---|
| VOO 0.03 %, SPY 0.0945 %, IVV 0.03 % (S&P 500) | iShares Core S&P 500 (IE00B5BMR087, 0.07 %); Vanguard S&P 500 (IE00BFMXXD54 / IE00B3XXRP09, 0.07 %); SPDR S&P 500 (IE000XZSV718 / IE00B6YX5C33, 0.03 % on the Dist page); Invesco S&P 500 (IE00B3YCGJ38, 0.05 % + 0.07 % swap fee, synthetic) | same index |
| QQQ 0.18 % (Nasdaq-100) | iShares NASDAQ 100 (IE00B53SZB19, 0.30 %); Invesco EQQQ (IE00BFZXGZ54 / IE0032077012, 0.30 %) | same index |
| VT 0.06 % (FTSE Global All Cap) | Vanguard FTSE All-World (IE00BK5BQT80 / IE00B3RBWM25, 0.14 %, no small caps); iShares MSCI ACWI (IE00B6R52259 / IE0002FCUS29, 0.20 %, no small caps); SPDR MSCI ACWI IMI (IE00B3YLTY66, 0.17 %, with small caps) | alternative, not identical: no UCITS ETF on the FTSE Global All Cap was found |
| URTH 0.24 % (MSCI World) | iShares Core MSCI World (IE00B4L5Y983 / IE000OHHIBC6, 0.20 %); Xtrackers MSCI World 1C (IE00BJ0KDQ92, 0.12 %); Amundi Core MSCI World (IE000BI8OT95, 0.12 %, launched 2024) | same index |

The EU funds are not always cheaper. On the Nasdaq-100 they cost more
than QQQ (0.30 % vs 0.18 %); on MSCI World they cost less than URTH.

### 4. What is inside (index factsheets, 30 Sep 2026) ([holdings.md](holdings.md))

| Index | Companies | Top 10 share | US share |
|---|---|---|---|
| S&P 500 | 503 | 39.1 % | 100 % |
| Nasdaq-100 | 101 securities (100 companies) | not stated | not stated |
| MSCI World | 1,249 | 27.85 % | 72.94 % |
| MSCI ACWI | 2,414 | 25.40 % | 64.21 % |
| FTSE All-World | 4,204 | 24.81 % | 62.28 % |
| FTSE Global All Cap | 10,222 | 22.64 % | 62.35 % |

- The same names lead every index: Nvidia, Apple and Microsoft are the
  top three everywhere.
- This is the core of "S&P 500 vs World": even a world fund is about
  two-thirds US.

### 5. Returns (USD; return types differ) ([returns.md](returns.md))

| Index | 10 y p.a. | Return type | Worst calendar year shown |
|---|---|---|---|
| S&P 500 | 15.33 % | total return (gross), S&P data feed | 2022: −19.44 % (price return, factsheet) |
| Nasdaq-100 | 21.16 % | total return (XNDX factsheet) | 2022: −32.38 % |
| MSCI World | 12.81 % | net total return | 2022: −18.14 % |
| MSCI ACWI | 12.38 % | net total return | 2022: −18.36 % |
| FTSE All-World | not published (5 y p.a. 12.1 %) | "total return", net/gross not stated | 2022: −17.7 % |

- Side-by-side figures on the page need one consistent basis, which is a
  C2 decision. For example, net total return where it exists, or fund
  NAV returns instead of index returns.
- Fund factsheets have different as-of dates: Vanguard is 31 Aug 2026,
  the others 30 Sep 2026. Fund figures from different issuers are not
  directly comparable.
- Several funds are younger than 10 years: VUAA, VWCE, the EQQQ Acc
  class, SPYL and Amundi Core. Several factsheets show no 10-year figure
  at all: iShares UK, and Invesco, which publishes cumulative returns
  only.

### 6. Brokers (Revolut, XTB, Trading 212) ([brokers.md](brokers.md))

| | Trading 212 | XTB | Revolut |
|---|---|---|---|
| Entity, regulator | Trading 212 Markets Ltd., CySEC 398/21 | XTB S.A. Prague branch; KNF, ČNB oversight | Revolut Securities Europe UAB, Bank of Lithuania |
| Our 11 candidate ISINs | all listed (checked in its instrument data) | all listed by fund name; ISIN shown only for IE00B5BMR087 | unknown: list is in the app only |
| ETF commission | free | 0 % up to €100,000 a month, then 0.2 % (min €10) | 25 Kč per order beyond the plan's free orders (Standard: 0 free); investment-plan ETF buys free |
| Currency conversion | 0.15 % | 0.5 % | none inside the investment account; funding counts toward the Standard plan's 25,000 Kč/month limit, then 1 % |
| Inactivity / custody | none / free | €10/month only after 365 days without a trade and 90 days without a deposit, **and never while any position is open**; custody 0.02 %/yr only above €250,000 | none / none |
| Savings plan | Pies + AutoInvest (ETFs yes) | Investiční plány, from €15 (page also says 350 Kč) | Investiční plán, eligible ETPs only |

- Under the agreed rule (list a broker only where the chosen ETF is
  verified), Revolut cannot be named for a specific fund until someone
  checks its app.
- XTB's fee table changes on 20 Oct 2026. Card deposits become free; the
  rows used above stay the same.

### 7. Czech taxes (law in force 1 Aug – 31 Dec 2026) ([taxes.md](taxes.md))

- **Time test:** a sale is tax-free after more than 3 years
  (§ 4 odst. 1 písm. u) ZDP).
- **Annual limit:** sales are tax-free when total gross sale proceeds in
  a year are at most 100 000 Kč (§ 4 odst. 1 písm. t)). This has applied
  since 1 Jan 2015, not 2014 as popular sources say.
- **The 40 mil. Kč cap** on time-test income applied to securities in
  2025 only. Zákon 360/2025 removed it for securities from 1 Jan 2026; it
  still applies to crypto.
- **Taxable gains:** income under § 10, sale minus purchase price and
  fees, taxed at 15 % / 23 %. The 23 % rate starts above 1 762 812 Kč in
  2026.
- **Tax return:** required above 50 000 Kč of taxable income, or above
  20 000 Kč of other income for an employee.
- **Reporting:** a single exempt income above 5 000 000 Kč must be
  reported (§ 38v).
- **Dividends** from a distributing ETF: § 8 income, 15 % / 23 %, or 15 %
  in a separate tax base.
- **Needs a tax advisor or a Financial Administration source:**
  - lot matching (FIFO)
  - currency conversion
  - whether the 50k/20k thresholds use gross or net income
  - Irish withholding tax

### Corrections made while checking

- The time-test letter is **u)**, not w). My brief to the research agent
  had it wrong.
- XTB inactivity fee: the agent's row left out "Pokud má Zákazník
  otevřenou pozici na jakémkoliv účtu, není účtován žádný poplatek".
  Fixed in [brokers.md](brokers.md).
- Ekonom (22 Jan 2025) says Vanguard FTSE All-World tracks MSCI World;
  it tracks the FTSE All-World. Media are cited here only for
  popularity.

## How this was checked

- Five research agents collected the data on 2026-10-15 from primary
  sources only.
- Every quote was then re-fetched and matched against its source:
  - by a script (curl, pypdf) where the site allows it;
  - in Chrome where it blocks scripts (Trading 212, Revolut, S&P DJI,
    Invesco PDFs, EUR-Lex).
- PDF tables whose text comes out scrambled (S&P 500, Nasdaq-100, FTSE
  Global All Cap) were matched by position on the page, so each value
  is tied to its own label.
- Quotes that only translate a Czech quote into English were not
  matched; the Czech original was.
