# Returns: indices and funds (USD)

Collected and re-checked against the live sources on 2026-10-15. Overview and scope: [README](README.md).

Index returns come from the index providers; fund returns from the issuers' factsheets.
Return types and as-of dates differ between sources (price, total, net total; 31 Aug vs 30 Sep 2026),
so figures from different rows are not directly comparable. See the key findings in the [README](README.md).

## Index returns

Accessed 2026-10-15 for every row. All values in USD. Quotes are copied from the
text layer of each PDF (pdfplumber; S&P via pdf.js in a browser) or from the raw JSON
where marked. Where a PDF's text layer splits a label from its value, the note says so.

Index sources (short names used in the tables):

| Short | URL | Title / as-of |
|---|---|---|
| SP-FS | https://www.spglobal.com/spdji/en/idsenhancedfactsheet/file.pdf?calcFrequency=M&force_download=true&hostIdentifier=48190c8c-42c4-46af-8d1a-0cd5db894797&languageId=1&indexId=340 | "S&P 500®" factsheet, "Return Type: Price Return", AS OF SEPTEMBER 30, 2026 (curl gets HTTP 403; I read it in a browser session on spglobal.com) |
| SP-JSON | https://www.spglobal.com/spdji/en/util/redesign/index-data/get-performance-data-for-datawidget-redesign.dot?indexId=340&language_id=1 | S&P DJI's own data feed behind spglobal.com/spdji/en/indices/equity/sp-500/ (NOT the factsheet), month-end data "Sep 30, 2026". Browser session only (curl gets 403) |
| NDX-FS | https://indexes.nasdaqomx.com/docs/FS_NDX.pdf | "NASDAQ-100" factsheet (PR version), "All Information as of 09/30/2026." |
| XNDX-FS | https://indexes.nasdaqomx.com/docs/FS_XNDX.pdf | "Nasdaq-100" factsheet (TR version, XNDX), "All Information as of 09/30/2026." |
| FAW-FS | https://research.ftserussell.com/Analytics/FactSheets/Home/DownloadSingleIssue?issueName=AWORLDS&IsManual=false | "FTSE All-World Index" factsheet, "Data as at: 30 September 2026" |
| FGAC-FS | https://research.ftserussell.com/Analytics/FactSheets/Home/DownloadSingleIssue?issueName=GEISLMS&IsManual=false | "FTSE Global All Cap Index" factsheet, "Data as at: 30 September 2026" |
| MW-FS | https://www.msci.com/documents/10199/4db922ce-68d2-446d-2f9e-4ed408a9db29 | "MSCI World Index (USD)" factsheet, NET RETURNS, SEP 30, 2026 |
| MA-FS | https://www.msci.com/documents/10199/a71b65b5-d0ea-4b5c-a709-24b1213bc3c5 | "MSCI ACWI Index (USD)" factsheet, NET RETURNS, SEP 30, 2026 |

The same MSCI factsheets also exist with GROSS returns. World gross: https://www.msci.com/documents/10199/178e6643-6ae6-47b9-82be-e1fc565ededb. ACWI gross: https://www.msci.com/documents/10199/8d97d244-4685-4200-a24c-3e2942e3adeb. Do NOT use https://www.msci.com/documents/10199/149ed7bc-316e-4b4c-8ea4-43fcb5bd6523: it is a stale MSCI World net factsheet from JUL 29, 2022.

### 1. S&P 500 (S&P Dow Jones Indices)

#### Returns (USD)

The factsheet publishes **price return** only, as the header `Return Type: Price Return` shows. The total-return (TR) figures come from SP-JSON's `"totalReturn"` → `"monthEndIndexPerformance"` block, for the index named "S&P 500 (TR)" with `"formattedDateForWidget":"Sep 30, 2026"`. That block has `"oneYearReturn":14.39914286541403` for PR, which agrees with the factsheet's 14.4 %.

| field | value | source URL | doc title, as-of, accessed | quote |
|---|---|---|---|---|
| Table header (PR) | 1 MO, 3 MOS, YTD, 1 YR, 3 YRS, 5 YRS, 10 YRS (annualized), after the index level | SP-FS | S&P 500® factsheet, Sep 30, 2026, accessed 2026-10-15 | `1 MO 3 MOS YTD 1 YR 3 YRS 5 YRS 10 YRS` |
| PR row (index level 7,651.54; 1M −0.45; 3M 2.03; YTD 11.77; 1Y 14.4; 3Y 21.29; 5Y 12.18; 10Y 13.44 %) | see left | SP-FS | same | `7,651.54 -0.45% 2.03% 11.77% 14.4% 21.29% 12.18% 13.44%` |
| PR 1y | 14.4 % | SP-FS | same | (row above) |
| PR 3y ann. | 21.29 % | SP-FS | same | (row above) |
| PR 5y ann. | 12.18 % | SP-FS | same | (row above) |
| PR 10y ann. | 13.44 % | SP-FS | same | (row above) |
| PR calendar-year header | 2025 … 2016 | SP-FS | same | `2025 2024 2023 2022 2021 2020 2019 2018 2017 2016` |
| PR calendar years 2025→2016 | 16.39, 23.31, 24.23, −19.44, 26.89, 16.26, 28.88, −6.24, 19.42, 9.54 % | SP-FS | same | `16.39% 23.31% 24.23% -19.44% 26.89% 16.26% 28.88% -6.24% 19.42% 9.54%` |
| TR 1y | 15.739090460856046 (≈15.74 %) | SP-JSON | S&P DJI data feed, month-end Sep 30, 2026 | `"oneYearReturn":15.739090460856046` |
| TR 3y ann. | 22.88899118574459 (≈22.89 %) | SP-JSON | same | `"threeYearReturn":22.88899118574459` |
| TR 5y ann. | 13.790743250481508 (≈13.79 %) | SP-JSON | same | `"fiveYearReturn":13.790743250481508` |
| TR 10y ann. | 15.332528551796454 (≈15.33 %) | SP-JSON | same | `"tenYearReturn":15.332528551796454` |
| TR YTD | 12.745681220152235 (≈12.75 %) | SP-JSON | same | `"yearToDateReturn":12.745681220152235` |

### 2. Nasdaq-100 (Nasdaq)

#### Returns (USD)

Total return (TR) comes from the XNDX factsheet. The third column of its "PERFORMANCE(TR Version)" table is ANNUALIZED. A net total-return (XNDXNNR) factsheet was not looked up.

| field | value | source URL | doc title, as-of, accessed | quote |
|---|---|---|---|---|
| TR 1y | 24.00 % | XNDX-FS | Nasdaq-100 TR factsheet, 09/30/2026, accessed 2026-10-15 | `1 Year 24.00% 1 Year 24.00% 1 Year 24.00%` |
| TR 3y ann. | 28.31 % | XNDX-FS | same | `3 Year 37.48% 3 Year 111.26% 3 Year 28.31%` |
| TR 5y ann. | 16.56 % | XNDX-FS | same | `5 Year -24.72% 5 Year 115.19% 5 Year 16.56%` |
| TR 10y ann. | 21.16 % | XNDX-FS | same | `10 Year 24.08% 10 Year 581.57% 10 Year 21.16%` |
| TR YTD 2026 | 21.01 % | XNDX-FS | same | `2026 21.01%` |
| TR 2025 | 21.02 % | XNDX-FS | same | `2025 21.02%` |
| TR 2024 | 25.88 % | XNDX-FS | same | `2024 25.88%` |
| TR 2023 | 55.13 % | XNDX-FS | same | `2023 55.13%` |
| TR 2022 | −32.38 % | XNDX-FS | same | `2022 -32.38%` |
| TR 2021 | 27.51 % | XNDX-FS | same | `2021 27.51%` |
| TR 2020 | 48.88 % | XNDX-FS | same | `2020 48.88%` |
| TR 2019 | 39.46 % | XNDX-FS | same | `2019 39.46%` |
| TR 2018 | 0.04 % | XNDX-FS | same | `2018 0.04%` |
| TR 2017 | 32.99 % | XNDX-FS | same | `2017 32.99%` |
| PR 1y | 23.21 % | NDX-FS | NASDAQ-100 factsheet, 09/30/2026 | `1 Year 23.21% 1 Year 23.21% 1 Year 23.21%` |
| PR 3y ann. | 27.37 % | NDX-FS | same | `3 Year 36.33% 3 Year 106.65% 3 Year 27.37%` |
| PR 5y ann. | 15.66 % | NDX-FS | same | `5 Year -25.31% 5 Year 107.01% 5 Year 15.66%` |
| PR 10y ann. | 20.09 % | NDX-FS | same | `10 Year 22.63% 10 Year 523.67% 10 Year 20.09%` |
| PR calendar 2026 YTD → 2017 | 20.43, 20.17, 24.88, 53.81, −32.97, 26.63, 47.58, 37.96, −1.04, 31.52 % | NDX-FS | same | `2025 20.17%` (one line per year, e.g. `2022 -32.97%`) |

### 3. FTSE All-World (FTSE Russell / LSEG)

#### Returns (USD)

The factsheet labels these "Total Return" and does not say whether they are net or gross. Its column order is: 3M, 6M, YTD, 12M, 3YR (cumulative), 5YR (cumulative), 3YR and 5YR (both % pa), then volatility for 1YR, 3YR and 5YR. The factsheet gives no 10-year return.

| field | value | source URL | doc title, as-of, accessed | quote |
|---|---|---|---|---|
| Performance row | see below | FAW-FS | FTSE All-World factsheet, 30 Sep 2026, accessed 2026-10-15 | `FTSE All-World 1.7 16.9 13.3 17.1 82.3 76.7 22.2 12.1 11.4 12.6 14.8` |
| TR 1y (12M) | 17.1 % | FAW-FS | same | (row above) |
| TR YTD | 13.3 % | FAW-FS | same | (row above) |
| TR 3y pa | 22.2 % | FAW-FS | same | (row above) |
| TR 5y pa | 12.1 % | FAW-FS | same | (row above) |
| TR 10y pa | not stated | FAW-FS | same | — |
| Calendar-year header | 2016 … 2025 | FAW-FS | same | `Index % (USD) 2016 2017 2018 2019 2020 2021 2022 2023 2024 2025` |
| TR calendar 2016→2025 | 8.6, 24.6, −9.1, 27.2, 16.6, 18.9, −17.7, 22.6, 17.7, 23.1 % | FAW-FS | same | `FTSE All-World 8.6 24.6 -9.1 27.2 16.6 18.9 -17.7 22.6 17.7 23.1` |

### 4. FTSE Global All Cap (FTSE Russell / LSEG)

The tables in this factsheet label the index "FTSE Global Equity Index Series wi All Cap", while its title is "FTSE Global All Cap Index". In the PDF text layer the performance-row label comes out partly garbled, so the quotes start at "wi All".

#### Returns (USD)

These are "Total Return" figures; the factsheet does not say whether they are net or gross. The columns are the same as for the All-World factsheet, and there is no 10-year return.

| field | value | source URL | doc title, as-of, accessed | quote |
|---|---|---|---|---|
| Performance row | see below | FGAC-FS | FTSE Global All Cap factsheet, 30 Sep 2026, accessed 2026-10-15 | `wi All 1.2 16.2 13.0 16.7 79.9 72.6 21.6 11.5 11.4 12.7 15.0` |
| TR 1y (12M) | 16.7 % | FGAC-FS | same | (row above) |
| TR YTD | 13.0 % | FGAC-FS | same | (row above) |
| TR 3y pa | 21.6 % | FGAC-FS | same | (row above) |
| TR 5y pa | 11.5 % | FGAC-FS | same | (row above) |
| TR 10y pa | not stated | FGAC-FS | same | — |
| TR calendar 2016→2025 | 9.0, 24.4, −9.6, 27.1, 16.8, 18.5, −17.9, 22.2, 16.8, 22.6 % | FGAC-FS | same | `9.0 24.4 -9.6 27.1 16.8 18.5 -17.9 22.2 16.8 22.6` (header `Index % (USD) 2016 2017 2018 2019 2020 2021 2022 2023 2024 2025`) |

### 5. MSCI World (MSCI)

#### Returns (USD, NET total return)

Column order: 1 Mo, 3 Mo, 1 Yr, YTD, then annualized 3 Yr, 5 Yr, 10 Yr and Since Dec 29, 2000. The table header reads `INDEX PERFORMANCE — NET RETURNS (%) (SEP 30, 2026)`. In the annual table the columns are MSCI World, MSCI Emerging Markets, MSCI ACWI; the first number is MSCI World.

| field | value | source URL | doc title, as-of, accessed | quote |
|---|---|---|---|---|
| Net row | see below | MW-FS | MSCI World factsheet (net), SEP 30, 2026, accessed 2026-10-15 | `MSCI World -1.19 1.88 15.24 11.75 21.40 11.89 12.81 7.46` |
| Net 1y | 15.24 % | MW-FS | same | (row above) |
| Net YTD | 11.75 % | MW-FS | same | (row above) |
| Net 3y ann. | 21.40 % | MW-FS | same | (row above) |
| Net 5y ann. | 11.89 % | MW-FS | same | (row above) |
| Net 10y ann. | 12.81 % | MW-FS | same | (row above) |
| Net 2025 | 21.09 % | MW-FS | same | `2025 21.09 33.57 22.34` |
| Net 2024 | 18.67 % | MW-FS | same | `2024 18.67 7.50 17.49` |
| Net 2023 | 23.79 % | MW-FS | same | `2023 23.79 9.83 22.20` |
| Net 2022 | −18.14 % | MW-FS | same | `2022 -18.14 -20.09 -18.36` |
| Net 2021 | 21.82 % | MW-FS | same | `2021 21.82 -2.54 18.54` |
| Net 2020 | 15.90 % | MW-FS | same | `2020 15.90 18.31 16.25` |
| Net 2019 | 27.67 % | MW-FS | same | `2019 27.67 18.42 26.60` |
| Net 2018 | −8.71 % | MW-FS | same | `2018 -8.71 -14.57 -9.41` |
| Net 2017 | 22.40 % | MW-FS | same | `2017 22.40 37.28 23.97` |
| Net 2016 | 7.51 % | MW-FS | same | `2016 7.51 11.19 7.86` |
| Net 2015 | −0.87 % | MW-FS | same | `2015 -0.87 -14.92 -2.36` |
| Net 2014 | 4.94 % | MW-FS | same | `2014 4.94 -2.19 4.16` |
| Net 2013 | 26.68 % | MW-FS | same | `2013 26.68 -2.60 22.80` |
| Net 2012 | 15.83 % | MW-FS | same | `2012 15.83 18.22 16.13` |

### 6. MSCI ACWI (MSCI)

#### Returns (USD, NET total return)

The header is `INDEX PERFORMANCE — NET RETURNS (%) (SEP 30, 2026)`, with the same column order as for MSCI World. In the annual table the columns are MSCI ACWI, MSCI World, MSCI Emerging Markets; the first number is ACWI.

| field | value | source URL | doc title, as-of, accessed | quote |
|---|---|---|---|---|
| Net row | see below | MA-FS | MSCI ACWI factsheet (net), SEP 30, 2026, accessed 2026-10-15 | `MSCI ACWI -1.11 1.60 16.75 13.03 21.73 11.57 12.38 7.41` |
| Net 1y | 16.75 % | MA-FS | same | (row above) |
| Net YTD | 13.03 % | MA-FS | same | (row above) |
| Net 3y ann. | 21.73 % | MA-FS | same | (row above) |
| Net 5y ann. | 11.57 % | MA-FS | same | (row above) |
| Net 10y ann. | 12.38 % | MA-FS | same | (row above) |
| Net 2025 | 22.34 % | MA-FS | same | `2025 22.34 21.09 33.57` |
| Net 2024 | 17.49 % | MA-FS | same | `2024 17.49 18.67 7.50` |
| Net 2023 | 22.20 % | MA-FS | same | `2023 22.20 23.79 9.83` |
| Net 2022 | −18.36 % | MA-FS | same | `2022 -18.36 -18.14 -20.09` |
| Net 2021 | 18.54 % | MA-FS | same | `2021 18.54 21.82 -2.54` |
| Net 2020 | 16.25 % | MA-FS | same | `2020 16.25 15.90 18.31` |
| Net 2019 | 26.60 % | MA-FS | same | `2019 26.60 27.67 18.42` |
| Net 2018 | −9.41 % | MA-FS | same | `2018 -9.41 -8.71 -14.57` |
| Net 2017 | 23.97 % | MA-FS | same | `2017 23.97 22.40 37.28` |
| Net 2016 | 7.86 % | MA-FS | same | `2016 7.86 7.51 11.19` |
| Net 2015 | −2.36 % | MA-FS | same | `2015 -2.36 -0.87 -14.92` |
| Net 2014 | 4.16 % | MA-FS | same | `2014 4.16 4.94 -2.19` |
| Net 2013 | 22.80 % | MA-FS | same | `2013 22.80 26.68 -2.60` |
| Net 2012 | 16.13 % | MA-FS | same | `2012 16.13 15.83 18.22` |

## Fund returns

Fund sources (short names used in the tables; full fund facts in [pairs.md](pairs.md)):

- F1 = https://www.ishares.com/gls-download/literature/fact-sheet/cspx-ishares-core-s-p-500-ucits-etf-fund-fact-sheet-en-gb.pdf. Fact sheet, September 2026, net assets as at 30-Sep-2026. Accessed 2026-10-15.
- V1 = https://fund-docs.vanguard.com/SandP_500_UCITS_ETF_USD_Distributing_9503_EU_INT_EN.pdf. Factsheet "Vanguard S&P 500 UCITS ETF (USD) Distributing", 31 August 2026. Professional-investor version. Accessed 2026-10-15.
- V2 = https://fund-docs.vanguard.com/SandP_500_UCITS_ETF_USD_Accumulating_9694_EU_INT_EN.pdf. Factsheet "(USD) Accumulating", 31 August 2026. Accessed 2026-10-15.
- SF = https://www.ssga.com/library-content/products/factsheets/etfs/emea/factsheet-emea-en_gb-spy5-gy.pdf. Fact Sheet. The extracted header shows both "31 August 2026" and "30 September 2026". Accessed 2026-10-15.
- I1 = https://www.invesco.com/content/dam/invesco/uk/en/product-documents/etf/share-class/factsheet/IE00B3YCGJ38_factsheet_en-uk.pdf. Factsheet "Invesco S&P 500 UCITS ETF Acc", as of 30 September 2026. Accessed 2026-10-15.
- F2 = https://www.ishares.com/gls-download/literature/fact-sheet/csndx-ishares-nasdaq-100-ucits-etf-fund-fact-sheet-en-gb.pdf. Fact sheet, September 2026, performance as at 30-Sep-2026. Accessed 2026-10-15.
- I2 = https://www.invesco.com/content/dam/invesco/uk/en/product-documents/etf/share-class/factsheet/IE0032077012_factsheet_en-uk.pdf. Factsheet "Invesco EQQQ NASDAQ-100 UCITS ETF Dist", as of 30 September 2026. Accessed 2026-10-15.
- I3 = https://www.invesco.com/content/dam/invesco/uk/en/product-documents/etf/share-class/factsheet/IE00BFZXGZ54_factsheet_en-uk.pdf. Factsheet "... Acc", as of 30 September 2026. Accessed 2026-10-15.
- V3 = https://fund-docs.vanguard.com/FTSE_All-World_UCITS_ETF_USD_Distributing_9505_EU_INT_EN.pdf. Factsheet "(USD) Distributing", 31 August 2026. Accessed 2026-10-15.
- V4 = https://fund-docs.vanguard.com/FTSE_All-World_UCITS_ETF_USD_Accumulating_9679_EU_INT_EN.pdf. Factsheet "(USD) Accumulating", 31 August 2026. Accessed 2026-10-15.
- F3 = https://www.ishares.com/gls-download/literature/fact-sheet/ssac-ishares-msci-all-country-world-ucits-etf-fund-fact-sheet-en-gb.pdf. Fact sheet, September 2026, as at 30-Sep-2026. Accessed 2026-10-15.
- SF3 = https://www.ssga.com/library-content/products/factsheets/etfs/emea/factsheet-emea-en_gb-spyi-gy.pdf. Fact Sheet; the header shows both 31 August 2026 and 30 September 2026. Accessed 2026-10-15.
- F4 = https://www.ishares.com/gls-download/literature/fact-sheet/swda-ishares-core-msci-world-ucits-etf-fund-fact-sheet-en-gb.pdf. Fact sheet, September 2026. Accessed 2026-10-15.
- X1 = https://etf.dws.com/en-gb/IE00BJ0KDQ92-msci-world-ucits-etf-1c/. Product page "Xtrackers MSCI World UCITS ETF 1C \| IE00BJ0KDQ92 \| XDWD LN", data as of 13/10/2026. Accessed 2026-10-15.
- A1 = https://www.amundietf.co.uk/pdfDocuments/monthly-factsheet/IE000BI8OT95/ENG/GBR/INSTITUTIONNEL/ETF. Factsheet "Amundi Core MSCI World UCITS ETF Acc", 30/09/2026. Professional-investor version. Accessed 2026-10-15.

All returns are in USD, net asset value (NAV) basis, net of fees, unless a row says otherwise. "Ann." means annualised.

### S&P 500

| fund / share class | metric | value | source URL | doc, as-of, accessed | quote |
|---|---|---|---|---|---|
| CSPX (USD acc) | ann. 1y / 3y / 5y / since inception | 15.47 / 22.57 / 13.48 / 14.16. 10y not shown on the factsheet. | F1 | iShares fact sheet, perf. as at 30-Sep-2026, accessed 2026-10-15 | "Share Class -0.37 2.25 17.72 12.55 15.47 22.57 13.48 14.16" (columns: 1m 3m 6m YTD 1y 3y 5y Since Inception) |
| CSPX | calendar 2016–2025 | 11.54, 21.40, -4.72, 31.02, 18.02, 28.36, -18.35, 25.92, 24.69, 17.58 | F1 | same | "Share Class 11.54 21.40 -4.72 31.02 18.02 28.36 -18.35 25.92 24.69 17.58" |
| VUSA (USD dist) | ann. 1y / 3y / 5y / 10y / since incep. | 20.09% / 20.73% / 12.48% / 15.02% / 14.83% | V1 | Vanguard factsheet, 31 August 2026, accessed 2026-10-15 | "Fund (Net of expenses) 2.70% 1.62% 12.96% 20.09% 20.73% 12.48% 15.02% 14.83%" (columns: 1 month, Quarter, YTD, 1y, 3y, 5y, 10y, Since inception) |
| VUSA | rolling 12 months (Sep–Aug), 2016/17 → 2025/26 | 15.78, 19.19, 2.54, 21.55, 30.81, -11.48, 15.59, 26.79, 15.58, 20.09 | V1 | same | "Fund (Net of expenses) 15.78% 19.19% 2.54% 21.55% 30.81% -11.48% 15.59% 26.79% 15.58% 20.09%" |
| VUAA (USD acc) | ann. 1y / 3y / 5y / since incep. | 20.09% / 20.73% / 12.48% / 16.09%. 10y shown as "—" because the class started on 14 May 2019, so it is younger than 10 years. | V2 | same date | "Fund (Net of expenses) 2.70% 1.62% 12.96% 20.09% 20.73% 12.48% — 16.09%" |
| SPY5 (USD dist) | ann. 1y / 3y / 5y / 10y / since incep. (Fund Net) | 15.48 / 22.58 / 13.48 / 14.96 / 13.97 | SF | State Street factsheet. Header dates 31 Aug and 30 Sep 2026; the 1-month figure (-0.37) matches the iShares 30-Sep-2026 figures. Accessed 2026-10-15 | "1 Year 15.34 15.51 0.18 15.48 0.14", "10 Year 14.76 15.05 0.28 14.96 0.20" (columns: Index, Fund Gross, Difference, Fund Net, Difference) |
| SPY5 | calendar 2021–2025 (Fund Net) | 2021 28.32, 2022 -18.36, 2023 25.86, 2024 24.72, 2025 17.59. 2026 YTD 12.56. | SF | same | "2025 17.43 17.63 0.20 17.59 0.16" / "2022 -18.51 -18.29 0.22 -18.36 0.15" |
| Invesco S&P 500 (USD acc, synthetic) | **cumulative** 1Y / 3Y / 5Y / 10Y / since fund inception (the factsheet gives no annualised figures) | 15.60 / 85.02 / 89.92 / 311.46 / 818.71 | I1 | Invesco factsheet, as at 30 September 2026, accessed 2026-10-15 | "ETF 15.60 85.02 89.92 311.46 818.71" |
| Invesco S&P 500 | calendar 2025 → 2016 | 17.75, 24.91, 26.18, -18.17, 28.64, 18.30, 31.37, -4.47, 21.41, 11.54 | I1 | same | "ETF 17.75 24.91 26.18 -18.17 28.64 18.30 31.37 -4.47 21.41 11.54" |

### Nasdaq-100

| fund / share class | metric | value | source URL | doc, as-of, accessed | quote |
|---|---|---|---|---|---|
| CNDX (USD acc) | ann. 1y / 3y / 5y / since incep. | 23.51 / 27.77 / 16.07 / 19.08. 10y not shown. | F2 | iShares fact sheet, 30-Sep-2026, accessed 2026-10-15 | "Share Class 3.26 0.48 28.23 20.65 23.51 27.77 16.07 19.08" |
| CNDX | calendar 2016–2025 | 6.72, 32.34, -0.44, 38.77, 48.17, 26.95, -32.67, 54.43, 25.32, 20.54 | F2 | same | "Share Class 6.72 32.34 -0.44 38.77 48.17 26.95 -32.67 54.43 25.32 20.54" |
| EQQQ (USD dist) | **cumulative** 1Y / 3Y / 5Y / 10Y / since fund inception (no annualised figures) | 23.49 / 108.69 / 110.91 / 553.39 / 2914.54 | I2 | Invesco factsheet, as at 30 September 2026, accessed 2026-10-15 | "ETF 23.49 108.69 110.91 553.39 2914.54" |
| EQQQ dist | calendar 2025 → 2016 | 20.56, 25.36, 54.47, -32.63, 26.98, 48.28, 38.81, -0.42, 32.39, 6.78 | I2 | same | "ETF 20.56 25.36 54.47 -32.63 26.98 48.28 38.81 -0.42 32.39 6.78" |
| EQQQ dist | rolling 12m (Sep→Sep), latest first | 23.49, 23.46, 36.88, 34.74, -25.00, 29.03, 48.14, 2.25, 28.33, 23.51 | I2 | same | "ETF 23.49 23.46 36.88 34.74 -25.00 29.03 48.14 2.25 28.33 23.51" |
| EQQQ acc | calendar 2025 → 2019 (class launched 24 Sep 2018, so it is younger than 10 years) | 20.56, 25.36, 54.48, -32.63, 26.98, 48.28, 38.81 | I3 | same date | "ETF 20.56 25.36 54.48 -32.63 26.98 48.28 38.81 - - -" |

### FTSE All-World / ACWI (alternatives for VT)

| fund / share class | metric | value | source URL | doc, as-of, accessed | quote |
|---|---|---|---|---|---|
| VWRL (USD dist) | ann. 1y / 3y / 5y / 10y / since incep. | 22.29% / 20.45% / 10.90% / 12.53% / 11.79% | V3 | Vanguard factsheet, 31 August 2026, accessed 2026-10-15 | "Fund (Net of expenses) 2.74% 1.95% 14.32% 22.29% 20.45% 10.90% 12.53% 11.79%" |
| VWRL | rolling 12m (Sep–Aug), 2016/17 → 2025/26 | 17.12, 11.21, -0.40, 16.48, 28.45, -15.76, 13.96, 23.25, 15.93, 22.29 | V3 | same | "Fund (Net of expenses) 17.12% 11.21% -0.40% 16.48% 28.45% -15.76% 13.96% 23.25% 15.93% 22.29%" |
| VWCE (USD acc) | ann. 1y / 3y / 5y / since incep. (class launched 23 Jul 2019, so it is younger than 10 years) | 22.29% / 20.45% / 10.90% / 13.27% | V4 | same | "Fund (Net of expenses) 2.74% 1.95% 14.32% 22.29% 20.45% 10.90% — 13.27%" |
| SSAC (USD acc) | ann. 1y / 3y / 5y / since incep. | 16.82 / 21.73 / 11.66 / 11.15. 10y not shown. | F3 | iShares fact sheet, 30-Sep-2026, accessed 2026-10-15 | "Share Class -1.12 1.62 16.79 13.09 16.82 21.73 11.66 11.15" |
| SSAC | calendar 2016–2025 | 7.82, 23.94, -9.52, 26.37, 15.62, 18.71, -18.19, 22.35, 17.35, 22.41 | F3 | same | "Share Class 7.82 23.94 -9.52 26.37 15.62 18.71 -18.19 22.35 17.35 22.41" |
| SPYI (USD acc) | ann. 1y / 3y / 5y / 10y / since incep. (Fund Net) | 17.15 / 21.27 / 11.28 / 11.94 / 10.10 | SF3 | State Street factsheet, header dates 31 Aug and 30 Sep 2026, accessed 2026-10-15 | "1 Year 16.61 17.35 0.73 17.15 0.53", "10 Year 12.05 12.29 0.24 11.94 -0.11" (columns: Index, Fund Gross, Diff, Fund Net, Diff) |
| SPYI | calendar 2021–2025 (Fund Net) | 2021 18.25, 2022 -17.52, 2023 21.10, 2024 16.13, 2025 22.20. 2026 YTD 13.32. | SF3 | same | "2025 22.06 22.41 0.35 22.20 0.14" / "2022 -18.40 -17.19 1.21 -17.52 0.88" |

### MSCI World

| fund / share class | metric | value | source URL | doc, as-of, accessed | quote |
|---|---|---|---|---|---|
| SWDA (USD acc) | ann. 1y / 3y / 5y / since incep. | 15.25 / 21.43 / 11.95 / 11.03. 10y not shown. | F4 | iShares fact sheet, 30-Sep-2026, accessed 2026-10-15 | "Share Class -1.20 1.88 15.87 11.75 15.25 21.43 11.95 11.03" |
| SWDA | calendar 2016–2025 | 7.73, 22.45, -8.65, 27.76, 15.95, 21.90, -18.03, 23.86, 18.70, 21.16 | F4 | same | "Share Class 7.73 22.45 -8.65 27.76 15.95 21.90 -18.03 23.86 18.70 21.16" |
| XDWD (USD 1C) | discrete 12m (Sep→Sep), 2016/17 → 2025/26 | 18.30, 11.33, 1.89, 10.47, 28.89, -19.59, 22.05, 32.50, 17.28, 15.32 | X1 | DWS product page, "Discrete" table, accessed 2026-10-15 | "Total return (USD) 18.30% 11.33% 1.89% 10.47% 28.89% -19.59% 22.05% 32.50% 17.28% 15.32%" |
| Amundi Core MSCI World Acc | **cumulative** YTD / 1y / since 18/01/2024 (younger than 3 years, so no 3y/5y/10y) | 11.80% / 15.29% / 62.20% | A1 | Amundi factsheet, 30/09/2026, accessed 2026-10-15 | "Portfolio 11.80% -1.18% 1.87% 15.29% - - 62.20%" |
| Amundi Core MSCI World Acc | calendar 2025 (only full year) | 21.18% | A1 | same | "Portfolio 21.18% - - - -" |

## Not verified

1. **Calendar-year returns for the Vanguard UCITS ETFs** (VUSA, VUAA, VWRL, VWCE). The Vanguard factsheets show only rolling 12-month periods (Sep–Aug) and annualised returns. The vanguard.co.uk product pages are JS-rendered and could not be read.
2. **Xtrackers MSCI World 1C annualised and calendar-year returns.** The DWS page renders only the "Discrete" table server-side. The factsheet links to "Historical Performance (online)" and contains no return table.
3. **10-year annualised returns for the iShares UCITS funds** (CSPX, CNDX, SWDA, SSAC). The UK factsheets show 1y, 3y, 5y and since inception only.
4. **Annualised returns for the Invesco UCITS ETFs** (EQQQ, Invesco S&P 500). The factsheets publish cumulative, calendar-year and rolling 12-month figures only. They were not converted here.
5. **Returns for the SPDR S&P 500 UCITS ETF (Acc) (SPYL, IE000XZSV718).** Its page was read for facts only. It launched 31 Oct 2023, so it has no 3y/5y/10y history.
6. **The exact as-of date of the State Street UCITS factsheets** (SPY5, SPYI). The extracted header shows both "31 August 2026" and "30 September 2026". The performance values match other funds' 30-Sep-2026 figures, but that match is an inference.
7. **S&P 500 total-return 1y/3y/5y/10y.** These are not in the factsheet, which is price return only. They come from SP-JSON, the provider's data feed and not a document. Both sources need a browser session, because curl gets HTTP 403.
8. **S&P 500 calendar-year total returns.** No provider document reached publishes them; only price-return calendar years are available, from the factsheet.
9. **FTSE All-World and FTSE Global All Cap 10-year annualised return.** The factsheets do not state one; they give 3YR and 5YR pa only.
10. **FTSE returns, net vs gross.** The factsheets say "Total Return" without saying which.
11. **Nasdaq-100 net total return (XNDXNNR).** Not looked up; total return (XNDX) and price return (NDX) are given above.
