# Fund pairs: US ETF → EU-buyable (UCITS) candidates

Collected and re-checked against the live sources on 2026-10-15. Overview and scope: [README](README.md).

Returns of these funds are in [returns.md](returns.md).

Collected 2026-10-15 from issuer websites, factsheets and KIDs only. justETF was not used, either to find funds or as a source.

**How to read the quotes**
- Each quote is copied from the extracted text of the page or PDF.
- Where the source splits a label and its value across table cells or lines, the quote joins them with a single space. Runs of whitespace are collapsed to one space. No other characters were changed.
- PDF text was extracted with pypdf. Some State Street and DWS PDFs extract with stray spaces (e.g. "T otal", "Ye s"). Quotes avoid those words where possible. Where one could not be avoided, the quote keeps it exactly as extracted.
- "Accessed" is 2026-10-15 for every row.

**Final URLs and redirects**
- iShares factsheet links redirect from `/uk/individual/en/literature/fact-sheet/...` to `/gls-download/literature/fact-sheet/...`. The tables give the final URL.
- iShares UK product pages need `?switchLocale=y&siteEntryPassthrough=true` to skip the investor-type gate.
- etf.dws.com product pages are JS-rendered for normal browsers. The text quoted here is the server-rendered version the site serves to crawler user agents, at the same URL.
- Invesco EMEA product pages (etf.invesco.com) redirect to the Invesco US site from this location, and direct curl gets HTTP 406. The Invesco UCITS factsheet PDFs were read through WebFetch, which saved the PDF, and the text was then extracted locally.

## 1. S&P 500 (US: VOO, SPY, IVV)

### US side

| field | value | source URL | doc title, as-of, accessed | quote |
|---|---|---|---|---|
| VOO ticker / full name | VOO, Vanguard S&P 500 ETF | https://fund-docs.vanguard.com/F0968.pdf | Vanguard fact sheet "Vanguard S&P 500 ETF \| VOO", as of June 30, 2026, accessed 2026-10-15 | "Vanguard S&P 500 ETF \| VOO" |
| VOO index | S&P 500 Index | same | same | "Benchmark S&P 500 Index" |
| VOO expense ratio | 0.03% | same | same | "Expense ratio 1 0.03%" |
| VOO issuer | Vanguard | same | same | "Vanguard S&P 500 ETF \| VOO" |
| VOO inception | 2010-09-07 | same | same | "Inception date 2010-09-07" |
| SPY ticker / full name | SPY, State Street® SPDR® S&P 500® ETF Trust | https://www.ssga.com/us/en/intermediary/etfs/state-street-spdr-sp-500-etf-trust-spy | ssga.com product page "SPY: State Street® SPDR® S&P 500® ETF Trust", data as of Oct 14–15 2026, accessed 2026-10-15 | "SPY: State Street® SPDR® S&P 500® ETF Trust" |
| SPY index | S&P 500 Index | same | same | "Benchmark S&P 500 Index" |
| SPY expense ratio | 0.0945% (gross = net) | https://www.ssga.com/us/en/intermediary/library-content/products/factsheets/etfs/us/factsheet-us-en-spy.pdf | SPY fact sheet, as of 06/30/2026, accessed 2026-10-15 | "Gross Expense Ratio (%) 0.0945" / "Net Expense Ratio (%) 0.0945" |
| SPY issuer | State Street Investment Management (formerly SSGA) | same factsheet | same | "State Street Global Advisors (SSGA) is now State Street Investment Management." |
| SPY inception | 1993-01-22 | https://www.ssga.com/us/en/intermediary/etfs/state-street-spdr-sp-500-etf-trust-spy | product page, accessed 2026-10-15 | "Inception Date Jan 22 1993" |
| IVV ticker / full name | IVV, iShares Core S&P 500 ETF | https://www.ishares.com/us/products/239726/ishares-core-sp-500-etf | ishares.com product page "iShares Core S&P 500 ETF \| IVV", data as of Oct 14, 2026, accessed 2026-10-15 | "iShares Core S&P 500 ETF \| IVV" |
| IVV index | S&P 500 Index | same | same | "Benchmark Index S&P 500 Index" |
| IVV expense ratio | 0.03% | same | same | "Expense Ratio: Fees as stated in the prospectus 0.03%" |
| IVV issuer | iShares (BlackRock) | same | same | "iShares Core S&P 500 ETF \| IVV" |
| IVV inception | 2000-05-15 | same | same | "Fund Inception May 15, 2000" |
| VOO listing exchange | NYSE Arca | https://www.sec.gov/Archives/edgar/data/36405/000003640526000183/f44783d1.htm | Vanguard S&P 500 ETF Summary Prospectus (Form 497K), April 28, 2026, accessed 2026-10-15 | "The Fund's ETF Shares are listed for trading on NYSE Arca" |
| SPY listing exchange | NYSE Arca | https://www.sec.gov/Archives/edgar/data/884394/000119312526022316/d77353d485bpos.htm | State Street SPDR S&P 500 ETF Trust Prospectus (Form 485BPOS), January 26, 2026, accessed 2026-10-15 | "NYSE Arca, Inc. under the symbol" |
| IVV listing exchange | NYSE Arca | https://www.sec.gov/Archives/edgar/data/1100663/000119312526327930/d113852d497k.htm | iShares Core S&P 500 ETF Summary Prospectus (Form 497K), July 31, 2026, accessed 2026-10-15 | "iShares Core S&P 500 ETF IVV \| NYSE Arca" |

### EU candidates

All three candidates below track the same index (S&P 500). The Invesco fund (D) also tracks the S&P 500, but it holds a swap instead of the stocks.

#### A. iShares Core S&P 500 UCITS ETF (CSPX)

Sources:
- P1 = https://www.ishares.com/uk/individual/en/products/253743/ishares-sp-500-b-ucits-etf-acc-fund?switchLocale=y&siteEntryPassthrough=true. iShares UK product page "iShares Core S&P 500 UCITS ETF \| CSPX \| iShares". Key facts as of 14/Oct/2026. Accessed 2026-10-15.
- F1 = https://www.ishares.com/gls-download/literature/fact-sheet/cspx-ishares-core-s-p-500-ucits-etf-fund-fact-sheet-en-gb.pdf. Fact sheet, September 2026, net assets as at 30-Sep-2026. Accessed 2026-10-15.

| field | value | source URL | doc title, as-of, accessed | quote |
|---|---|---|---|---|
| full name | iShares Core S&P 500 UCITS ETF, USD (Accumulating) | F1 | fact sheet Sep 2026 | "iShares Core S&P 500 UCITS ETF U.S. Dollar (Accumulating)" |
| ISIN (acc) | IE00B5BMR087 | P1 | page, 14/Oct/2026 | "ISIN IE00B5BMR087" |
| ISIN (dist) | none in this fund. The page's share-class menu lists no unhedged distributing class. | P1 | page | "USD (Accumulating) EUR Hedged (Accumulating) GBP Hedged (Distributing) MXN Hedged (Accumulating)" |
| index | S&P 500 Index | P1 | page | "Benchmark Index S&P 500 Index" |
| TER | 0.07% | P1 | page | "Total Expense Ratio 0.07%" |
| fund AUM | USD 159,309,340,468 as of 14/Oct/2026 | P1 | page | "Net Assets of Fund as of 14/Oct/2026 USD 159,309,340,468" |
| share class AUM | USD 156,101,379,273 as of 14/Oct/2026 | P1 | page | "Net Assets as of 14/Oct/2026 USD 156,101,379,273" |
| domicile | Ireland | P1 | page | "Domicile Ireland" |
| distribution | Accumulating | P1 | page | "Use of Income Accumulating" |
| fund inception | 18/May/2010 | P1 | page | "Fund Launch Date 18/May/2010" |
| share class inception | 19/May/2010 | P1 | page | "Inception Date 19/May/2010" |
| listing Xetra | SXR8, EUR | P1 | page, Listings table | "Deutsche Boerse Xetra SXR8 EUR 26/May/2010" |
| listing London (USD) | CSPX, USD | P1 | page, Listings table | "London Stock Exchange CSPX USD 15/Sept/2010" |
| listing London (GBP) | CSP1, GBP | P1 | page, Listings table | "London Stock Exchange CSP1 GBP 15/Sept/2010" |

#### B. Vanguard S&P 500 UCITS ETF (VUSA dist / VUAA acc)

Sources:
- V1 = https://fund-docs.vanguard.com/SandP_500_UCITS_ETF_USD_Distributing_9503_EU_INT_EN.pdf. Factsheet "Vanguard S&P 500 UCITS ETF (USD) Distributing", 31 August 2026. Professional-investor version. Accessed 2026-10-15.
- V2 = https://fund-docs.vanguard.com/SandP_500_UCITS_ETF_USD_Accumulating_9694_EU_INT_EN.pdf. Factsheet "(USD) Accumulating", 31 August 2026. Accessed 2026-10-15.

| field | value | source URL | doc title, as-of, accessed | quote |
|---|---|---|---|---|
| full name | Vanguard S&P 500 UCITS ETF, (USD) Distributing / (USD) Accumulating | V1 / V2 | factsheets 31 Aug 2026 | "Vanguard S&P 500 UCITS ETF" / "(USD) Distributing - An exchange-traded fund" / "(USD) Accumulating - An exchange-traded fund" |
| ISIN (dist) | IE00B3XXRP09 | V1 | 31 Aug 2026 | "Vanguard Funds plc Physical IE00B3XXRP09 Distributed Quarterly" |
| ISIN (acc) | IE00BFMXXD54 | V2 | 31 Aug 2026 | "Vanguard Funds plc Physical IE00BFMXXD54 Accumulated" |
| index | S&P 500 (net total return) | V1 | 31 Aug 2026 | "Benchmark — S&P 500 Net Total Return" |
| TER (OCF) | 0.07% (both classes) | V1, V2 | 31 Aug 2026 | "Ongoing Charges Figure† 0.07%" |
| fund AUM | $89,226 million as at 31 August 2026 | V1 | 31 Aug 2026 | "Total assets (million) $89,226 \| Share class assets (million) $53,374 as at 31 August 2026" |
| share class AUM (dist) | $53,374 million | V1 | same | same quote as above |
| share class AUM (acc) | $35,852 million | V2 | 31 Aug 2026 | "Total assets (million) $89,226 \| Share class assets (million) $35,852 as at 31 August 2026" |
| domicile | Ireland | V1 | 31 Aug 2026 | "USD Austria, Germany, Switzerland and UK 4 SPTR500N UCITS Ireland" (columns: Base currency, Tax reporting, SRI, Index ticker, Investment structure, Domicile) |
| distribution | dist: quarterly. acc: accumulating | V1 / V2 | 31 Aug 2026 | "Distributed Quarterly" / "IE00BFMXXD54 Accumulated" |
| share class inception (dist) | 22 May 2012 | V1 | 31 Aug 2026 | "Inception date: 22 May 2012" |
| share class inception (acc) | 14 May 2019 | V2 | 31 Aug 2026 | "Inception date: 14 May 2019" |
| listing Xetra / Deutsche Börse (dist) | VUSA, EUR | V1 | Key ETF facts, under "Deutsche Börse" | "EUR VUSA BVCTLF3 VUSA.DE VUSA GY IVUSAEUR —" |
| listing London (dist) | VUSA (GBP), VUSD (USD) | V1 | Key ETF facts, under "London Stock Exchange" | "GBP VUSA B7NLLS3 VUSA.L VUSA LN IVUSAGBP —" / "USD VUSD B7NLJN4 VUSD.L VUSD LN IVUSDUSD —" |
| listing Xetra / Deutsche Börse (acc) | VUAA, EUR | V2 | Key ETF facts, under "Deutsche Börse" | "EUR VUAA BJJW355 VUA1.DE VUAA GY IVUAAEUR —" |
| listing London (acc) | VUAG (GBP), VUAA (USD) | V2 | Key ETF facts, under "London Stock Exchange" | "GBP VUAG BH3JG59 VAVUAG.L VUAG LN IVUAAGBP —" / "USD VUAA BH3T3H0 VUAA.L VUAA LN IVUAAUSD —" |

#### C. State Street SPDR S&P 500 UCITS ETF (SPY5 dist / SPYL acc)

Sources:
- S1 = https://www.ssga.com/uk/en_gb/intermediary/etfs/state-street-spdr-sp-500-ucits-etf-dist-spy5-gy. Product page "State Street® SPDR® S&P® 500 UCITS ETF (Dist)". Data as of 14–15 Oct 2026. Accessed 2026-10-15.
- S2 = https://www.ssga.com/uk/en_gb/intermediary/etfs/state-street-spdr-sp-500-ucits-etf-acc-spyl-gy. Product page "State Street® SPDR® S&P® 500 UCITS ETF (Acc)". Accessed 2026-10-15.
- SF = https://www.ssga.com/library-content/products/factsheets/etfs/emea/factsheet-emea-en_gb-spy5-gy.pdf. Fact Sheet. The extracted header shows both "31 August 2026" and "30 September 2026". Accessed 2026-10-15.

| field | value | source URL | doc title, as-of, accessed | quote |
|---|---|---|---|---|
| full name | State Street® SPDR® S&P® 500 UCITS ETF (Dist) / (Acc). Called "SPDR® S&P® 500 UCITS ETF (Dist)" before 19 Feb 2026. | S1 / S2 / SF | pages and factsheet | "State Street® SPDR® S&P® 500 UCITS ETF (Dist)" / "State Street® SPDR® S&P® 500 UCITS ETF (Acc)" / "Prior to 19th February 2026, the Fund was known as SPDR® S&P® 500 UCITS ETF (Dist)." |
| ISIN (dist) | IE00B6YX5C33 | S1 | page, as of 15 Oct 2026 | "ISIN IE00B6YX5C33" |
| ISIN (acc) | IE000XZSV718 | S2 | page | "ISIN IE000XZSV718" |
| index | S&P 500® Index | SF | factsheet | "Index Name S&P 500® Index" |
| TER | 0.03% | S1 | page | "TER 0.03%" |
| fund AUM | USD 44,678.42 M as of 14 Oct 2026 | S1 | page | "as of 14 Oct 2026 Total Fund Assets USD $44,678.42 M" |
| share class AUM (dist) | US$21,095.55 million | SF | factsheet | "Share Class Assets (millions) US$21,095.55" |
| share class AUM (acc) | $19,562.38 M, NAV section as of 14 Oct 2026 | S2 | page | "Share Class Assets $19,562.38 M" |
| domicile | Ireland | SF | factsheet | "Domicile Ireland" |
| distribution | dist: quarterly. acc: accumulation | SF / S2 | factsheet / page | "Income Treatment Quarterly Distribution" / "Income Treatment Accumulation" |
| inception (dist) | 19 Mar 2012 | S1 | page | "Inception Date 19 Mar 2012" |
| inception (acc) | 31 Oct 2023 | S2 | page | "Inception Date 31 Oct 2023" |
| listing Xetra (dist) | SPY5, EUR (primary) | SF | factsheet listings | "Deutsche Börse* SPY5 EUR INSPY5E SPY5 GY SPY5.DE B6YX5T0" |
| listing London (dist) | SPY5 (USD), SPX5 (GBP) | SF | factsheet listings | "London Stock Exchange SPY5 USD INSPY5 SPY5 LN SPY5.L B6YX5C3" / "London Stock Exchange SPX5 GBP INSPY5P SPX5 LN SPX5.L B757BB2" |
| listing Xetra (acc) | SPYL, EUR (primary) | S2 | page listings | "Deutsche Börse (Primary) EUR 01 Nov 2023 SPYL" |
| listing London (acc) | SPYL (USD), SPXL (GBP) | S2 | page listings | "London Stock Exchange USD 02 Nov 2023 SPYL" / "London Stock Exchange GBP 02 Nov 2023 SPXL" |

#### D. Invesco S&P 500 UCITS ETF Acc (synthetic, swap-based)

**Note:** this fund tracks the same index, but it uses synthetic (swap) replication rather than holding the stocks.

Source:
- I1 = https://www.invesco.com/content/dam/invesco/uk/en/product-documents/etf/share-class/factsheet/IE00B3YCGJ38_factsheet_en-uk.pdf. Factsheet "Invesco S&P 500 UCITS ETF Acc", as of 30 September 2026. Accessed 2026-10-15.

| field | value | source URL | doc title, as-of, accessed | quote |
|---|---|---|---|---|
| full name | Invesco S&P 500 UCITS ETF Acc | I1 | 30 Sep 2026 | "Invesco S&P 500 UCITS ETF Acc" |
| ISIN (acc) | IE00B3YCGJ38 | I1 | same | "ISIN code IE00B3YCGJ38" |
| index | S&P 500 Index | I1 | same | "Index S&P 500 Index" |
| ongoing charge | 0.05% p.a., plus a 0.07% p.a. swap fee | I1 | same | "Ongoing charge 1 0.05% p.a." / "Swap fee 1 0.07% p.a." |
| replication | Synthetic | I1 | same | "Replication method Synthetic" |
| fund AUM | USD 58,957.64m (30 Sep 2026) | I1 | same | "Fund size USD 58,957.64m" |
| domicile | Ireland | I1 | same | "Domicile Ireland" |
| distribution | Accumulating | I1 | same | "Dividend treatment Accumulating" |
| inception | 20 May 2010 (fund and share class) | I1 | same | "Fund launch date 20 May 2010" |
| Bloomberg ticker (London) | SPXS LN | I1 | same | "Bloomberg ticker SPXS LN" |

## 2. Nasdaq-100 (US: QQQ)

### US side

| field | value | source URL | doc title, as-of, accessed | quote |
|---|---|---|---|---|
| ticker / name | QQQ, Invesco QQQ ETF. The disclaimer on the same page calls it "Invesco QQQ Trust". | https://www.invesco.com/qqq-etf/en/home.html | "Invesco QQQ ETF \| Invesco US", data as of 6/30/2026, accessed 2026-10-15 | "Invesco QQQ ETF inception date of March 10, 1999" |
| index | Nasdaq-100 Index | same | same | "Invesco QQQ is passively managed and tracks the Nasdaq-100 index" |
| expense ratio | 0.18% | same | same | "Invesco QQQ’s total expense ratio is 0.18%." |
| issuer / sponsor | Invesco Capital Management LLC | same | same | "is Invesco Capital Management LLC (Invesco)." |
| inception | March 10, 1999 | same | same | "Invesco QQQ ETF inception date of March 10, 1999" |
| listing exchange | Nasdaq (The Nasdaq Stock Market LLC) | https://www.sec.gov/Archives/edgar/data/1067839/000110465925123273/tm2529177d1_485bpos.htm | Invesco QQQ Trust, Series 1 Prospectus (Form 485BPOS), December 22, 2025, accessed 2026-10-15 | "Shares of the Trust are listed on The Nasdaq Stock Market LLC" |

### EU candidates (same index)

#### A. iShares NASDAQ 100 UCITS ETF (CNDX)

Sources:
- P2 = https://www.ishares.com/uk/individual/en/products/253741/ishares-nasdaq-100-ucits-etf?switchLocale=y&siteEntryPassthrough=true. Product page "iShares NASDAQ 100 UCITS ETF \| CNDX \| iShares", as of 14/Oct/2026. Accessed 2026-10-15.
- F2 = https://www.ishares.com/gls-download/literature/fact-sheet/csndx-ishares-nasdaq-100-ucits-etf-fund-fact-sheet-en-gb.pdf. Fact sheet, September 2026, performance as at 30-Sep-2026. Accessed 2026-10-15.

| field | value | source URL | doc title, as-of, accessed | quote |
|---|---|---|---|---|
| full name | iShares NASDAQ 100 UCITS ETF, USD (Accumulating) | F2 | Sep 2026 | "iShares NASDAQ 100 UCITS ETF U.S. Dollar (Accumulating)" |
| ISIN (acc) | IE00B53SZB19 | P2 | 14/Oct/2026 | "ISIN IE00B53SZB19" |
| ISIN (dist) | none in this fund. The share-class menu shows only USD (Acc) and EUR Hedged (Acc). | P2 | page | "USD (Accumulating) EUR Hedged (Accumulating)" |
| index | NASDAQ 100 Index | P2 | page | "Benchmark Index NASDAQ 100 Index" |
| TER | 0.30% | P2 | page | "Total Expense Ratio 0.30%" |
| fund AUM | USD 31,338,388,459 as of 14/Oct/2026 | P2 | page | "Net Assets of Fund as of 14/Oct/2026 USD 31,338,388,459" |
| share class AUM | USD 29,195,338,577 | P2 | page | "Net Assets of Share Class as of 14/Oct/2026 USD 29,195,338,577" |
| domicile | Ireland | P2 | page | "Domicile Ireland" |
| distribution | Accumulating | P2 | page | "Use of Income Accumulating" |
| inception | 26/Jan/2010 (fund and share class) | P2 | page | "Fund Launch Date 26/Jan/2010" |
| listing Xetra | SXRV, EUR | P2 | Listings | "Deutsche Boerse Xetra SXRV EUR 10/Mar/2010" |
| listing London | CNDX (USD), CNX1 (GBP) | P2 | Listings | "London Stock Exchange CNDX USD 15/Sept/2010" / "London Stock Exchange CNX1 GBP 15/Sept/2010" |

#### B. Invesco EQQQ NASDAQ-100 UCITS ETF (Dist / Acc)

Sources:
- I2 = https://www.invesco.com/content/dam/invesco/uk/en/product-documents/etf/share-class/factsheet/IE0032077012_factsheet_en-uk.pdf. Factsheet "Invesco EQQQ NASDAQ-100 UCITS ETF Dist", as of 30 September 2026. Accessed 2026-10-15.
- I3 = https://www.invesco.com/content/dam/invesco/uk/en/product-documents/etf/share-class/factsheet/IE00BFZXGZ54_factsheet_en-uk.pdf. Factsheet "... Acc", as of 30 September 2026. Accessed 2026-10-15.

| field | value | source URL | doc title, as-of, accessed | quote |
|---|---|---|---|---|
| full name | Invesco EQQQ NASDAQ-100 UCITS ETF Dist / Acc | I2 / I3 | 30 Sep 2026 | "Invesco EQQQ NASDAQ-100 UCITS ETF Dist" / "Invesco EQQQ NASDAQ-100 UCITS ETF Acc" |
| ISIN (dist) | IE0032077012 | I2 | same | "ISIN code IE0032077012" |
| ISIN (acc) | IE00BFZXGZ54 | I3 | same | "ISIN code IE00BFZXGZ54" |
| index | NASDAQ-100 Index (USD) | I2 | same | "Index NASDAQ-100 Index (USD)" |
| ongoing charge | 0.30% p.a. | I2, I3 | same | "Ongoing charge 1 0.30% p.a." |
| fund AUM | USD 21,610.38m (30 Sep 2026) | I2 | same | "Fund size USD 21,610.38m" |
| domicile | Ireland | I2 | same | "Domicile Ireland" |
| distribution | dist: quarterly. acc: accumulating | I2 / I3 | same | "Dividend schedule Quarterly" / "Dividend treatment Accumulating" |
| fund inception | 02 December 2002 | I2 | same | "Fund launch date 02 December 2002" |
| share class inception (acc) | 24 September 2018 | I3 | same | "Share class launch date 24 September 2018" |
| Bloomberg ticker (SIX) | EQQQ SW (dist), EQAC SW (acc) | I2 / I3 | same | "Bloomberg ticker EQQQ SW" / "Bloomberg ticker EQAC SW" |
| listings Xetra / London | **Not verified.** See the list at the end. | | | |

## 3. FTSE Global All Cap (US: VT) → FTSE All-World / MSCI ACWI (alternatives)

### US side

| field | value | source URL | doc title, as-of, accessed | quote |
|---|---|---|---|---|
| ticker / name | VT, Vanguard Total World Stock ETF | https://fund-docs.vanguard.com/F3141.pdf | Vanguard fact sheet, as of June 30, 2026, accessed 2026-10-15 | "Vanguard Total World Stock ETF \| VT" |
| index | FTSE Global All Cap Index | same | same | "Benchmark FTSE Global All Cap Index" |
| index scope | large, mid and small caps | same | same | "The FTSE Global All Cap Index measures the market performance of" |
| expense ratio | 0.06% | same | same | "Expense ratio 1 0.06%" |
| issuer | Vanguard | same | same | "Vanguard Total World Stock ETF \| VT" |
| inception | 2008-06-24 | same | same | "Inception date 2008-06-24" |

No UCITS ETF on the plain FTSE Global All Cap Index came up during discovery. Vanguard's ESG Global All Cap UCITS ETF exists, but search results say it tracks the "FTSE Global All Cap Choice Index", an ESG-screened version. That was not checked on an issuer document, so it is not used here. Every candidate below is therefore an **alternative, not identical** fund.

### EU candidates

#### A. Vanguard FTSE All-World UCITS ETF (VWRL dist / VWCE acc)

**Alternative, not identical:** the FTSE All-World Index holds only large and mid caps. VT's FTSE Global All Cap Index also holds small caps.

Sources:
- V3 = https://fund-docs.vanguard.com/FTSE_All-World_UCITS_ETF_USD_Distributing_9505_EU_INT_EN.pdf. Factsheet "(USD) Distributing", 31 August 2026. Accessed 2026-10-15.
- V4 = https://fund-docs.vanguard.com/FTSE_All-World_UCITS_ETF_USD_Accumulating_9679_EU_INT_EN.pdf. Factsheet "(USD) Accumulating", 31 August 2026. Accessed 2026-10-15.

| field | value | source URL | doc title, as-of, accessed | quote |
|---|---|---|---|---|
| full name | Vanguard FTSE All-World UCITS ETF, (USD) Distributing / (USD) Accumulating | V3 / V4 | 31 Aug 2026 | "Vanguard FTSE All-World UCITS ETF" |
| ISIN (dist) | IE00B3RBWM25 | V3 | same | "Vanguard Funds plc Physical IE00B3RBWM25 Distributed Quarterly" |
| ISIN (acc) | IE00BK5BQT80 | V4 | same | "Vanguard Funds plc Physical IE00BK5BQT80 Accumulated" |
| index | FTSE All-World Index | V3 | same | "Benchmark — FTSE All-World Index" |
| index scope (reason for "not identical") | large and mid caps, developed and emerging markets | V4 | same | "The Index is comprised of large and mid-sized company stocks in developed and emerging markets." |
| TER (OCF) | 0.14% (both classes) | V3, V4 | same | "Ongoing Charges Figure† 0.14%" |
| fund AUM | $85,317 million as at 31 August 2026 | V3 | same | "Total assets (million) $85,317 \| Share class assets (million) $27,268 as at 31 August 2026" |
| share class AUM (acc) | $58,049 million | V4 | same | "Total assets (million) $85,317 \| Share class assets (million) $58,049 as at 31 August 2026" |
| domicile | Ireland | V3 | same | "USD Austria, Germany, Switzerland and UK 4 TAWNT01U UCITS Ireland" |
| share class inception (dist) | 22 May 2012 | V3 | same | "Inception date: 22 May 2012" |
| share class inception (acc) | 23 July 2019 | V4 | same | "Inception date: 23 July 2019" |
| listing Deutsche Börse (dist) | VGWL, EUR | V3 | Key ETF facts | "EUR VGWL B83RD04 VGWL.DE VGWL GY IVWRLEUR —" |
| listing London (dist) | VWRL (GBP), VWRD (USD) | V3 | Key ETF facts | "GBP VWRL B7NLLH2 VWRL.L VWRL LN IVWRLGBP —" / "USD VWRD B6QBHM9 VWRD.L VWRD LN IVWRDUSD —" |
| listing Deutsche Börse (acc) | VWCE, EUR | V4 | Key ETF facts | "EUR VWCE BJVR0R9 VWCE.DE VWCE GY IVWRAEUR —" |
| listing London (acc) | VWRP (GBP), VWRA (USD) | V4 | Key ETF facts | "GBP VWRP BK5XT51 VWRP.L VWRP LN IVWRAGBP —" / "USD VWRA BK5XTF1 VWRA.L VWRA LN IVWRAUSD —" |

#### B. iShares MSCI All Country World UCITS ETF (SSAC)

**Alternative, not identical:** this fund follows MSCI rather than FTSE, and the MSCI ACWI holds large and mid caps only, with no small caps.

Sources:
- P3 = https://www.ishares.com/uk/individual/en/products/251850/ishares-msci-acwi-ucits-etf?switchLocale=y&siteEntryPassthrough=true. Product page "iShares MSCI All Country World UCITS ETF \| SSAC \| iShares", as of 14/Oct/2026. Accessed 2026-10-15.
- P3d = https://www.ishares.com/uk/individual/en/products/346447/ishares-msci-all-country-world-ucits-etf?switchLocale=y&siteEntryPassthrough=true. Page for the USD (Distributing) share class. Accessed 2026-10-15.
- F3 = https://www.ishares.com/gls-download/literature/fact-sheet/ssac-ishares-msci-all-country-world-ucits-etf-fund-fact-sheet-en-gb.pdf. Fact sheet, September 2026, as at 30-Sep-2026. Accessed 2026-10-15.

| field | value | source URL | doc title, as-of, accessed | quote |
|---|---|---|---|---|
| full name | iShares MSCI All Country World UCITS ETF | P3 | page | "iShares MSCI All Country World UCITS ETF \| SSAC \| iShares" |
| ISIN (acc) | IE00B6R52259 | P3 | page | "ISIN IE00B6R52259" |
| ISIN (dist) | IE0002FCUS29 | P3d | page | "ISIN IE0002FCUS29" |
| index | MSCI All Country World Index (Net) | P3 | page | "Benchmark Index MSCI All Country World Index (Net)" |
| TER | 0.20% | P3 | page | "Total Expense Ratio 0.20%" |
| fund AUM | USD 36,777,864,169 as of 14/Oct/2026 | P3 | page | "Net Assets of Fund as of 14/Oct/2026 USD 36,777,864,169" |
| domicile | Ireland | P3 | page | "Domicile Ireland" |
| distribution | acc: Accumulating. dist: Semi-Annual | P3 / P3d | pages | "Use of Income Accumulating" / "Distribution Frequency Semi-Annual" |
| fund inception | 21/Oct/2011 | P3 | page | "Fund Launch Date 21/Oct/2011" |
| dist share class inception | 29/Oct/2025 | P3d | page | "Inception Date 29/Oct/2025" |
| listing Xetra | IUSQ, EUR | P3 | Listings | "Deutsche Boerse Xetra IUSQ EUR 02/Apr/2012" |
| listing London | SSAC (GBP), ISAC (USD) | P3 | Listings | "London Stock Exchange SSAC GBP 24/Oct/2011" / "London Stock Exchange ISAC USD 24/Oct/2011" |

#### C. State Street SPDR MSCI All Country World Investable Market UCITS ETF (Acc) (SPYI)

**Alternative, not identical:** the MSCI ACWI IMI includes small caps, so its coverage is closest to VT's. It is still an MSCI index, not a FTSE one.

Sources:
- S3 = https://www.ssga.com/uk/en_gb/intermediary/etfs/state-street-spdr-msci-all-country-world-investable-market-ucits-etf-acc-spyi-gy. Product page, as of 14–15 Oct 2026. Accessed 2026-10-15.
- SF3 = https://www.ssga.com/library-content/products/factsheets/etfs/emea/factsheet-emea-en_gb-spyi-gy.pdf. Fact Sheet; the header shows both 31 August 2026 and 30 September 2026. Accessed 2026-10-15.

| field | value | source URL | doc title, as-of, accessed | quote |
|---|---|---|---|---|
| full name | State Street® SPDR® MSCI All Country World Investable Market UCITS ETF (Acc). Called "SPDR® MSCI ACWI IMI UCITS ETF (Acc)" before 31 Jan 2025. | SF3 | factsheet | "Prior to 31st January 2025, the Fund was known as SPDR® MSCI ACWI IMI UCITS ETF" |
| ISIN (acc) | IE00B3YLTY66 | S3 | page | "ISIN IE00B3YLTY66" |
| index | MSCI ACWI IMI (All Country World Investable Market Index) Index | S3 | page | "Benchmark MSCI ACWI IMI (All Country World Investable Market Index) Index" |
| TER | 0.17% | S3 | page | "TER 0.17%" |
| fund AUM | USD 9,544.27 M as of 14 Oct 2026 | S3 | page | "as of 14 Oct 2026 Total Fund Assets USD $9,544.27 M" |
| share class AUM | $9,277.86 M (NAV section as of 14 Oct 2026) | S3 | page | "Share Class Assets $9,277.86 M" |
| domicile | Ireland | SF3 | factsheet | "Domicile Ireland" |
| distribution | Accumulation | S3 | page | "Income Treatment Accumulation" |
| inception | 13 May 2011 | S3 | page | "Inception Date 13 May 2011" |
| listing Xetra | SPYI, EUR (primary) | SF3 | factsheet listings | "Deutsche Börse* SPYI EUR INSPYIE SPYI GY IMIE.DE B42W5R3" |
| listing London | IMID, USD | S3 | page listings | "London Stock Exchange USD 26 Jul 2011 IMID" |

## 4. MSCI World (US: URTH)

### US side

| field | value | source URL | doc title, as-of, accessed | quote |
|---|---|---|---|---|
| ticker / name | URTH, iShares MSCI World ETF | https://www.ishares.com/us/products/239696/ishares-msci-world-etf | ishares.com product page, data as of Oct 14, 2026, accessed 2026-10-15 | "iShares MSCI World ETF \| URTH" |
| index | MSCI World Index (Net) | same | same | "Benchmark Index MSCI World Index (Net)" |
| expense ratio | 0.24% | same | same | "Expense Ratio: Fees as stated in the prospectus 0.24%" |
| issuer | iShares (BlackRock) | same | same | "iShares MSCI World ETF \| URTH" |
| inception | Jan 10, 2012 | same | same | "Fund Inception Jan 10, 2012" |
| listing exchange | NYSE Arca | https://www.sec.gov/Archives/edgar/data/930667/000119312525336654/d72128d497k.htm | iShares MSCI World ETF Summary Prospectus (Form 497K), December 30, 2025, accessed 2026-10-15 | "Stock Exchange: NYSE Arca" |

### EU candidates (same index)

#### A. iShares Core MSCI World UCITS ETF (SWDA / IWDA / EUNL)

Sources:
- P4 = https://www.ishares.com/uk/individual/en/products/251882/ishares-msci-world-ucits-etf-acc-fund?switchLocale=y&siteEntryPassthrough=true. Product page "iShares Core MSCI World UCITS ETF \| SWDA \| iShares", as of 14/Oct/2026. Accessed 2026-10-15.
- P4d = https://www.ishares.com/uk/individual/en/products/332655/ishares-core-msci-world-ucits-etf?switchLocale=y&siteEntryPassthrough=true. Page for the USD (Distributing) share class. Accessed 2026-10-15.
- F4 = https://www.ishares.com/gls-download/literature/fact-sheet/swda-ishares-core-msci-world-ucits-etf-fund-fact-sheet-en-gb.pdf. Fact sheet, September 2026. Accessed 2026-10-15.

| field | value | source URL | doc title, as-of, accessed | quote |
|---|---|---|---|---|
| full name | iShares Core MSCI World UCITS ETF, USD (Accumulating) | F4 | Sep 2026 | "iShares Core MSCI World UCITS ETF U.S. Dollar (Accumulating)" |
| ISIN (acc) | IE00B4L5Y983 | P4 | page | "ISIN IE00B4L5Y983" |
| ISIN (dist) | IE000OHHIBC6 | P4d | page | "ISIN IE000OHHIBC6" |
| index | MSCI World Index (Net) | P4 | page | "Benchmark Index MSCI World Index (Net)" |
| TER | 0.20% (acc and dist) | P4, P4d | pages | "Total Expense Ratio 0.20%" |
| fund AUM | USD 152,048,133,856 as of 14/Oct/2026 | P4 | page | "Net Assets of Fund as of 14/Oct/2026 USD 152,048,133,856" |
| share class AUM (acc) | USD 147,925,493,505 | P4 | page | "Net Assets of Share Class as of 14/Oct/2026 USD 147,925,493,505" |
| domicile | Ireland | P4 | page | "Domicile Ireland" |
| distribution | acc: Accumulating. dist: Quarterly | P4 / P4d | pages | "Use of Income Accumulating" / "Distribution Frequency Quarterly" |
| fund inception | 25/Sept/2009 | P4 | page | "Fund Launch Date 25/Sept/2009" |
| dist share class inception | 26/Jul/2023 | P4d | page | "Inception Date 26/Jul/2023" |
| listing Xetra | EUNL, EUR | P4 | Listings | "Deutsche Boerse Xetra EUNL EUR 20/Oct/2009" |
| listing London | SWDA (GBP), IWDA (USD) | P4 | Listings | "London Stock Exchange SWDA GBP 28/Sept/2009" / "London Stock Exchange IWDA USD 28/Sept/2009" |
| dist Bloomberg ticker | IWDD LN | P4d | page | "Bloomberg Ticker IWDD LN" |

#### B. Xtrackers MSCI World UCITS ETF 1C (XDWD)

Sources:
- X1 = https://etf.dws.com/en-gb/IE00BJ0KDQ92-msci-world-ucits-etf-1c/. Product page "Xtrackers MSCI World UCITS ETF 1C \| IE00BJ0KDQ92 \| XDWD LN", data as of 13/10/2026. Accessed 2026-10-15.
- XF = https://etf.dws.com/download/asset/7479ae20-a6b8-4a30-82e5-639d29ab8ea4. The page's "Factsheet 30/09/2026" link. Accessed 2026-10-15.

| field | value | source URL | doc title, as-of, accessed | quote |
|---|---|---|---|---|
| full name | Xtrackers MSCI World UCITS ETF 1C | XF | factsheet as of 30 Sep 2026 | "Xtrackers MSCI World UCITS ETF 1C" |
| ISIN (1C, acc) | IE00BJ0KDQ92 | XF | same | "ISIN IE00BJ0KDQ92" |
| ISIN (dist) | **Not verified.** No distributing class was found on the page. | | | |
| index | MSCI World Index (NTR, USD) | X1 | page | "The MSCI World Index (NTR, USD) aims to reflect the performance of the following market:" |
| TER (all-in fee) | 0.12% p.a. | XF | factsheet | "All-in fee¹ 0.12% p.a." |
| fund AUM | USD 30.97 billion (factsheet, 30 Sep 2026) | XF | factsheet | "T otal Fund Assets USD 30.97 Billion" (PDF text extracts with a space inside "Total") |
| domicile | Ireland | XF | factsheet | "Domicile Ireland" |
| distribution | Capitalizing (accumulating) | XF | factsheet | "Income treatment Capitalizing" |
| inception | 22/07/2014 (fund and share class) | XF | factsheet | "Fund launch date 22/07/2014" |
| listing Xetra | XDWD, EUR | XF | Listing table | "XETRA XDWD GY XDWD.DE EUR" |
| listing London | XDWD (USD), XWLD (GBX) | XF | Listing table | "London Stock Exchange XDWD LN XDWD.L USD" / "London Stock Exchange XWLD LN XWLD.L GBX" |

#### C. Amundi Core MSCI World UCITS ETF Acc

Source:
- A1 = https://www.amundietf.co.uk/pdfDocuments/monthly-factsheet/IE000BI8OT95/ENG/GBR/INSTITUTIONNEL/ETF. Factsheet "Amundi Core MSCI World UCITS ETF Acc", 30/09/2026. Professional-investor version. Accessed 2026-10-15.

| field | value | source URL | doc title, as-of, accessed | quote |
|---|---|---|---|---|
| full name | Amundi Core MSCI World UCITS ETF Acc | A1 | 30/09/2026 | "Amundi Core MSCI World UCITS ETF Acc" |
| ISIN (acc) | IE000BI8OT95 | A1 | same | "ISIN code A : IE000BI8OT95" |
| ISIN (dist) | **Not verified** | | | |
| index | MSCI World | A1 | same | "Benchmark 100% MSCI WORLD" |
| TER (fees) | 0.12% | A1 | same | "Management fees and other administrative or operating costs * 0.12%" |
| AUM | 19,167.55 million USD, as of 30/09/2026 | A1 | same | "Assets Under Management (AUM) 19,167.55 ( million USD )" / "NAV and AUM as of 30/09/2026" |
| domicile | Ireland (Irish ICAV) | A1 | same | "Fund structure ICAV Irish" |
| distribution | Accumulation | A1 | same | "Type of shares Accumulation" |
| share class inception | 17/01/2024 (first NAV 18/01/2024) | A1 | same | "Share-class inception date 17/01/2024" |
| listing Xetra | MWRE (EUR), MWRD (GBP) | A1 | Listing data | "Deutsche Boerse (Xetra) EUR MWRE GY MWRDEUIV MWRE.DE MWRDEURINAV=SOLA" |
| listing London | MWRU (USD), MWRL (GBP) | A1 | Listing data | "LSE USD MWRU LN MWRDUSIV MWRU.L MWRDUSDINAV=SOLA" / "LSE GBP MWRL LN IMWRDGIV MWRL.L IMWRDINAV=SOLA" |

## Not verified

1. **Xetra and London listings for Invesco EQQQ (Dist/Acc) and Invesco S&P 500 UCITS ETF.** The factsheets give only the Bloomberg ticker (EQQQ SW, EQAC SW, SPXS LN). The Invesco EMEA product pages (etf.invesco.com) redirect to the US site from here, and direct requests return HTTP 406.
2. **Distributing share classes** for Xtrackers MSCI World (only 1C was checked), Amundi Core MSCI World (only Acc was checked) and the SPDR MSCI ACWI IMI (only Acc was checked).
3. **Whether any UCITS ETF tracks the plain FTSE Global All Cap Index.** Search results point to Vanguard ESG Global All Cap UCITS ETF on the "FTSE Global All Cap Choice Index", an ESG variant, but this was not checked on an issuer document.
4. **SPY's legal sponsor.** The SSGA page brands the fund "State Street"; the legal sponsor entity was not looked up.
5. **The QQQ legal fund name.** invesco.com/qqq-etf calls it "Invesco QQQ ETF"; its disclaimer says "Invesco QQQ Trust". The exact current legal name (e.g. "Invesco QQQ Trust, Series 1") was not confirmed on an Invesco document.
