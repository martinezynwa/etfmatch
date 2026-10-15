# What is inside: index holdings and structure

Collected and re-checked against the live sources on 2026-10-15. Overview and scope: [README](README.md).

Accessed 2026-10-15 for every row. All values in USD. Quotes are copied from the
text layer of each PDF (pdfplumber; S&P via pdf.js in a browser) or from the raw JSON
where marked. Where a PDF's text layer splits a label from its value, the note says so.

Sources used (short names used in tables):

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

## 1. S&P 500 (S&P Dow Jones Indices)

### Holdings (top 10)

The factsheet's text layer gives the top-10 names, but not their weights. Page 4 draws the weights as a chart, so they cannot be extracted as text. The weights below come from SP-JSON as raw fractions of 1 (0.0838… = 8.38 %). The as-of is the constituents' effectiveDate 1790740800000 (= Sep 30, 2026).

| field | value | source URL | doc title, as-of, accessed | quote |
|---|---|---|---|---|
| #1 Nvidia | 0.0838272625120269503 (≈8.38 %) | SP-JSON | S&P DJI data feed, Sep 30, 2026, accessed 2026-10-15 | `"indexWeight":0.0838272625120269503,"instrumentKey":"27016","instrumentName":"Nvidia Corp"` |
| #2 Apple | 0.07371601745744708571 (≈7.37 %) | SP-JSON | same | `"indexWeight":0.07371601745744708571,"instrumentKey":"5080","instrumentName":"Apple Inc."` |
| #3 Microsoft | 0.05776607805391440041 (≈5.78 %) | SP-JSON | same | `"indexWeight":0.05776607805391440041,"instrumentKey":"4844","instrumentName":"Microsoft Corp"` |
| #4 Amazon | 0.03709259281171551077 (≈3.71 %) | SP-JSON | same | `"indexWeight":0.03709259281171551077,"instrumentKey":"22480","instrumentName":"Amazon.com Inc"` |
| #5 Alphabet A | 0.03062396248365077191 (≈3.06 %) | SP-JSON | same | `"indexWeight":0.03062396248365077191,"instrumentKey":"41032","instrumentName":"Alphabet Inc A"` |
| #6 Broadcom | 0.02534195352853837118 (≈2.53 %) | SP-JSON | same | `"indexWeight":0.02534195352853837118,"instrumentKey":"210176","instrumentName":"Broadcom Inc"` |
| #7 Alphabet C | 0.02456534592831951464 (≈2.46 %) | SP-JSON | same | `"indexWeight":0.02456534592831951464,"instrumentKey":"351217","instrumentName":"Alphabet Inc C"` |
| #8 Meta | 0.02425446324868433352 (≈2.43 %) | SP-JSON | same | `"indexWeight":0.02425446324868433352,"instrumentKey":"299774","instrumentName":"Meta Platforms, Inc. Class A"` |
| #9 Micron | 0.01824531657196964534 (≈1.82 %) | SP-JSON | same | `"indexWeight":0.01824531657196964534,"instrumentKey":"4405","instrumentName":"Micron Technology Inc"` |
| #10 Tesla | 0.01516659813958381108 (≈1.52 %) | SP-JSON | same | `"indexWeight":0.01516659813958381108,"instrumentKey":"226189","instrumentName":"Tesla, Inc"` |
| top-10 names/order (factsheet) | Nvidia, Apple, Microsoft, Amazon, Alphabet A, Broadcom, Alphabet C, Meta, Micron, Tesla | SP-FS | S&P 500® factsheet, Sep 30, 2026, accessed 2026-10-15 | `Nvidia Corp NVDA Information Technology` … `Tesla, Inc TSLA Consumer Discretionary` |

### Structure

| field | value | source URL | doc title, as-of, accessed | quote |
|---|---|---|---|---|
| Number of constituents | 503 | SP-FS | S&P 500® factsheet, Sep 30, 2026, accessed 2026-10-15 | `NUMBER OF CONSTITUENTS 503` |
| Top-10 share | 39.1 % | SP-FS | same | `WEIGHT TOP 10 CONSTITUENTS [%] 39.1` |
| Top-10 share (unrounded) | 39.06 % | SP-JSON | S&P DJI data feed, Sep 30, 2026 | `"topNConstituentWeight":39.06` |
| Largest constituent weight | 8.4 % | SP-FS | same as SP-FS | `WEIGHT LARGEST CONSTITUENT [%] 8.4` |
| Country: United States | 100 % (503 constituents) | SP-FS | same as SP-FS | `United States 503 68,448,592.21 100` |
| Sector: Information Technology | 0.3971… (≈39.71 %) | SP-JSON | S&P DJI data feed, "formattedeffectiveDate":"Sep 30, 2026" | `"marketCapitalPercentage":0.39711143692591935659,"sectorCode":"45","sectorDescription":"Information Technology"` |
| Sector: Financials | 0.1140… (≈11.40 %) | SP-JSON | same | `"marketCapitalPercentage":0.11402288717439421926,"sectorCode":"40","sectorDescription":"Financials"` |
| Sector: Communication Services | 0.0995… (≈9.95 %) | SP-JSON | same | `"marketCapitalPercentage":0.09947106329753158949,"sectorCode":"50","sectorDescription":"Communication Services"` |
| Sector: Health Care | 0.0926… (≈9.26 %) | SP-JSON | same | `"marketCapitalPercentage":0.09257128769601483728,"sectorCode":"35","sectorDescription":"Health Care"` |
| Sector: Consumer Discretionary | 0.0860… (≈8.60 %) | SP-JSON | same | `"marketCapitalPercentage":0.0860114410081521932,"sectorCode":"25","sectorDescription":"Consumer Discretionary"` |
| Sector: Industrials | 0.0805… (≈8.05 %) | SP-JSON | same | `"marketCapitalPercentage":0.08046572165436951452,"sectorCode":"20","sectorDescription":"Industrials"` |
| Sector: Consumer Staples | 0.0437… (≈4.37 %) | SP-JSON | same | `"marketCapitalPercentage":0.04366084998097597901,"sectorCode":"30","sectorDescription":"Consumer Staples"` |
| Sector: Energy | 0.0340… (≈3.40 %) | SP-JSON | same | `"marketCapitalPercentage":0.03396187830662304185,"sectorCode":"10","sectorDescription":"Energy"` |
| Sector: Utilities | 0.0188… (≈1.88 %) | SP-JSON | same | `"marketCapitalPercentage":0.01877772582578480463,"sectorCode":"55","sectorDescription":"Utilities"` |
| Sector: Materials | 0.0170… (≈1.70 %) | SP-JSON | same | `"marketCapitalPercentage":0.01699233931754909794,"sectorCode":"15","sectorDescription":"Materials"` |
| Sector: Real Estate | 0.0170… (≈1.70 %) | SP-JSON | same | `"marketCapitalPercentage":0.01695336881268536622,"sectorCode":"60","sectorDescription":"Real Estate"` |

## 2. Nasdaq-100 (Nasdaq)

### Holdings (top 10)

| field | value | source URL | doc title, as-of, accessed | quote |
|---|---|---|---|---|
| #1 NVIDIA | 8.36 % | NDX-FS | NASDAQ-100 factsheet, 09/30/2026, accessed 2026-10-15 | `NVDA NVIDIA CORPORATION 8.36%` |
| #2 Apple | 7.38 % | NDX-FS | same | `AAPL APPLE INC. 7.38%` |
| #3 Microsoft | 5.78 % | NDX-FS | same | `MSFT MICROSOFT CORP 5.78%` |
| #4 Micron | 5.04 % | NDX-FS | same | `MU MICRON TECHNOLOGY 5.04%` |
| #5 AMD | 4.19 % | NDX-FS | same | `AMD ADV MICRO DEVICES 4.19%` |
| #6 Amazon | 4.08 % | NDX-FS | same | `AMZN AMAZON.COM INC 4.08%` |
| #7 Meta | 3.27 % | NDX-FS | same | `META META PLATFORMS INC. 3.27%` |
| #8 Alphabet A | 3.07 % | NDX-FS | same | `GOOGL ALPHABET CL A CMN 3.07%` |
| #9 Alphabet C | 2.86 % | NDX-FS | same | `GOOG ALPHABET CL C CAP 2.86%` |
| #10 Tesla | 2.83 % | NDX-FS | same | `TSLA TESLA INC. 2.83%` |

### Structure

| field | value | source URL | doc title, as-of, accessed | quote |
|---|---|---|---|---|
| Number of securities | 101 | NDX-FS | NASDAQ-100 factsheet, 09/30/2026, accessed 2026-10-15 | `Securities:` … `101` (in the QUICK FACTS box; the text layer places the label and the value on separate lines) |
| Description (companies) | 100 companies | NDX-FS | same | `includes 100 of the largest domestic and international non-financial companies` |
| Top-10 share | not stated | NDX-FS | same | — |
| Country split | not stated | NDX-FS | same | — |
| Industry: Technology | 68.01 % (47 securities) | NDX-FS | same | `Technology 68.01% 47` |
| Industry: Consumer Discretionary | 15.14 % (15) | NDX-FS | same | `Consumer Discretionary 15.14% 15` |
| Industry: Telecommunications | 5.91 % (5) | NDX-FS | same | `Telecommunications 5.91% 5` |
| Industry: Health Care | 3.78 % (9) | NDX-FS | same | `Health Care 3.78% 9` |
| Industry: Industrials | 2.82 % (12) | NDX-FS | same | `Industrials 2.82% 12` |
| Industry: Consumer Staples | 1.73 % (5) | NDX-FS | same | `Consumer Staples 1.73% 5` |
| Industry: Basic Materials | 1.16 % (2) | NDX-FS | same | `Basic Materials 1.16% 2` |
| Industry: Utilities | 1.01 % (4) | NDX-FS | same | `Utilities 1.01% 4` |
| Industry: Energy | 0.44 % (2) | NDX-FS | same | `Energy 0.44% 2` |
| Industry: Financials | 0.00 % (0) | NDX-FS | same | `Financials 0.00% 0` |
| Industry: Real Estate | 0.00 % (0) | NDX-FS | same | `Real Estate 0.00% 0` |

## 3. FTSE All-World (FTSE Russell / LSEG)

### Holdings (top 10)

| field | value | source URL | doc title, as-of, accessed | quote |
|---|---|---|---|---|
| #1 Nvidia | 5.02 % | FAW-FS | FTSE All-World Index factsheet, 30 Sep 2026, accessed 2026-10-15 | `Nvidia USA Technology Hardware and Equipment 5,314,529 5.02` |
| #2 Apple | 4.54 % | FAW-FS | same | `Apple Inc. USA Technology Hardware and Equipment 4,803,055 4.54` |
| #3 Microsoft | 3.59 % | FAW-FS | same | `Microsoft Corp USA Software and Computer Services 3,801,235 3.59` |
| #4 Amazon | 2.28 % | FAW-FS | same | `Amazon.Com USA Retailers 2,411,027 2.28` |
| #5 Alphabet A | 1.89 % | FAW-FS | same | `Alphabet Class A USA Software and Computer Services 1,999,996 1.89` |
| #6 TSMC | 1.79 % | FAW-FS | same | `Taiwan Semiconductor Manufacturing Taiwan Technology Hardware and Equipment 1,891,161 1.79` |
| #7 Broadcom | 1.54 % | FAW-FS | same | `Broadcom USA Technology Hardware and Equipment 1,629,780 1.54` |
| #8 Alphabet C | 1.53 % | FAW-FS | same | `Alphabet Class C USA Software and Computer Services 1,616,163 1.53` |
| #9 Meta | 1.50 % | FAW-FS | same | `Meta Platforms Inc USA Software and Computer Services 1,590,144 1.50` |
| #10 Micron | 1.13 % | FAW-FS | same | `Micron Technology USA Technology Hardware and Equipment 1,197,703 1.13` |

### Structure

| field | value | source URL | doc title, as-of, accessed | quote |
|---|---|---|---|---|
| Number of constituents | 4,204 | FAW-FS | FTSE All-World factsheet, 30 Sep 2026, accessed 2026-10-15 | `Number of constituents 4204 1904 2300` (1st column = FTSE All-World) |
| Top-10 share | 24.81 % | FAW-FS | same | `Top 10 Holdings (% Index MCap) 24.81 26.67 31.01` (1st column = All-World); also `Totals 26,254,794 24.81` |
| Country: USA | 62.28 % (483 cons) | FAW-FS | same | `USA 483 65,901,259 62.28` |
| Country: Japan | 6.06 % | FAW-FS | same | `Japan 442 6,414,178 6.06` |
| Country: Taiwan | 3.54 % | FAW-FS | same | `Taiwan 136 3,745,612 3.54` |
| Country: UK | 3.06 % | FAW-FS | same | `UK 86 3,240,028 3.06` |
| Country: Canada | 2.91 % | FAW-FS | same | `Canada 87 3,077,914 2.91` |
| Country: China | 2.68 % | FAW-FS | same | `China 1315 2,832,986 2.68` |
| Country: Korea | 2.60 % | FAW-FS | same | `Korea 142 2,753,362 2.60` |
| Country: Czech Rep. | 0.01 % | FAW-FS | same | `Czech Rep. 5 15,179 0.01` |
| ICB Technology | 36.11 % | FAW-FS | same | `10 Technology 502 38,209,502 36.11` |
| ICB Financials | 14.86 % | FAW-FS | same | `30 Financials 645 15,720,633 14.86` |
| ICB Industrials | 12.01 % | FAW-FS | same | `50 Industrials 794 12,708,104 12.01` |
| ICB Consumer Discretionary | 10.46 % | FAW-FS | same | `40 Consumer Discretionary 537 11,067,003 10.46` |
| ICB Health Care | 7.94 % | FAW-FS | same | `20 Health Care 297 8,400,501 7.94` |
| ICB Energy | 4.12 % | FAW-FS | same | `60 Energy 183 4,355,805 4.12` |
| ICB Consumer Staples | 3.77 % | FAW-FS | same | `45 Consumer Staples 280 3,991,934 3.77` |
| ICB Telecommunications | 3.40 % | FAW-FS | same | `15 Telecommunications 128 3,596,346 3.40` |
| ICB Basic Materials | 3.24 % | FAW-FS | same | `55 Basic Materials 399 3,426,154 3.24` |
| ICB Utilities | 2.46 % | FAW-FS | same | `65 Utilities 233 2,605,449 2.46` |
| ICB Real Estate | 1.63 % | FAW-FS | same | `35 Real Estate 206 1,729,333 1.63` |

## 4. FTSE Global All Cap (FTSE Russell / LSEG)

The tables in this factsheet label the index "FTSE Global Equity Index Series wi All Cap", while its title is "FTSE Global All Cap Index". In the PDF text layer the performance-row label comes out partly garbled, so the quotes start at "wi All".

### Holdings (top 10)

| field | value | source URL | doc title, as-of, accessed | quote |
|---|---|---|---|---|
| #1 Nvidia | 4.58 % | FGAC-FS | FTSE Global All Cap Index factsheet, 30 Sep 2026, accessed 2026-10-15 | `Nvidia USA Technology Hardware and Equipment 5,314,529 4.58` |
| #2 Apple | 4.14 % | FGAC-FS | same | `Apple Inc. USA Technology Hardware and Equipment 4,803,055 4.14` |
| #3 Microsoft | 3.28 % | FGAC-FS | same | `Microsoft Corp USA Software and Computer Services 3,801,235 3.28` |
| #4 Amazon | 2.08 % | FGAC-FS | same | `Amazon.Com USA Retailers 2,411,027 2.08` |
| #5 Alphabet A | 1.72 % | FGAC-FS | same | `Alphabet Class A USA Software and Computer Services 1,999,996 1.72` |
| #6 TSMC | 1.63 % | FGAC-FS | same | `Taiwan Semiconductor Manufacturing Taiwan Technology Hardware and Equipment 1,891,161 1.63` |
| #7 Broadcom | 1.41 % | FGAC-FS | same | `Broadcom USA Technology Hardware and Equipment 1,629,780 1.41` |
| #8 Alphabet C | 1.39 % | FGAC-FS | same | `Alphabet Class C USA Software and Computer Services 1,616,163 1.39` |
| #9 Meta | 1.37 % | FGAC-FS | same | `Meta Platforms Inc USA Software and Computer Services 1,590,144 1.37` |
| #10 Micron | 1.03 % | FGAC-FS | same | `Micron Technology USA Technology Hardware and Equipment 1,197,703 1.03` |

### Structure

| field | value | source URL | doc title, as-of, accessed | quote |
|---|---|---|---|---|
| Number of constituents | 10,222 | FGAC-FS | FTSE Global All Cap factsheet, 30 Sep 2026, accessed 2026-10-15 | `Number of constituents 10222 1742 2462 6018` (1st column = wi All Cap) |
| Top-10 share | 22.64 % | FGAC-FS | same | `Top 10 Holdings (% Index MCap) 22.64 30.68 5.23 2.83`; also `Totals 26,254,794 22.64` |
| Country: USA | 62.35 % (1,546 cons) | FGAC-FS | same | `USA 1546 72,292,651 62.35` |
| Country: Japan | 6.05 % | FGAC-FS | same | `Japan 1351 7,016,993 6.05` |
| Country: Taiwan | 3.50 % | FGAC-FS | same | `Taiwan 535 4,053,513 3.50` |
| Country: UK | 3.06 % | FGAC-FS | same | `UK 225 3,548,030 3.06` |
| Country: Canada | 2.97 % | FGAC-FS | same | `Canada 217 3,441,347 2.97` |
| Country: China | 2.63 % | FGAC-FS | same | `China 2616 3,049,120 2.63` |
| Country: Korea | 2.55 % | FGAC-FS | same | `Korea 441 2,955,814 2.55` |
| Country: Czech Rep. | 0.01 % | FGAC-FS | same | `Czech Rep. 5 15,179 0.01` |
| ICB Technology | 34.21 % | FGAC-FS | same | `10 Technology 1293 39,664,948 34.21` |
| ICB Financials | 14.70 % | FGAC-FS | same | `30 Financials 1163 17,048,119 14.70` |
| ICB Industrials | 12.80 % | FGAC-FS | same | `50 Industrials 2104 14,841,702 12.80` |
| ICB Consumer Discretionary | 10.59 % | FGAC-FS | same | `40 Consumer Discretionary 1487 12,280,272 10.59` |
| ICB Health Care | 8.25 % | FGAC-FS | same | `20 Health Care 843 9,566,738 8.25` |
| ICB Energy | 4.15 % | FGAC-FS | same | `60 Energy 376 4,806,492 4.15` |
| ICB Consumer Staples | 3.75 % | FGAC-FS | same | `45 Consumer Staples 612 4,346,056 3.75` |
| ICB Basic Materials | 3.66 % | FGAC-FS | same | `55 Basic Materials 1034 4,238,896 3.66` |
| ICB Telecommunications | 3.27 % | FGAC-FS | same | `15 Telecommunications 257 3,794,903 3.27` |
| ICB Utilities | 2.49 % | FGAC-FS | same | `65 Utilities 412 2,890,957 2.49` |
| ICB Real Estate | 2.13 % | FGAC-FS | same | `35 Real Estate 641 2,466,160 2.13` |

## 5. MSCI World (MSCI)

### Holdings (top 10)

| field | value | source URL | doc title, as-of, accessed | quote |
|---|---|---|---|---|
| #1 NVIDIA | 5.81 % | MW-FS | MSCI World Index (USD) factsheet, SEP 30, 2026, accessed 2026-10-15 | `NVIDIA 5,250.46 5.81 Info Tech` |
| #2 Apple | 5.41 % | MW-FS | same | `APPLE 4,891.18 5.41 Info Tech` |
| #3 Microsoft | 4.00 % | MW-FS | same | `MICROSOFT CORP 3,619.54 4.00 Info Tech` |
| #4 Amazon | 2.67 % | MW-FS | same | `AMAZON.COM 2,412.12 2.67 Cons Discr` |
| #5 Alphabet A | 2.23 % | MW-FS | same | `ALPHABET A 2,018.89 2.23 Comm Srvcs` |
| #6 Alphabet C | 1.76 % | MW-FS | same | `ALPHABET C 1,592.85 1.76 Comm Srvcs` |
| #7 Meta | 1.76 % | MW-FS | same | `META PLATFORMS A 1,592.53 1.76 Comm Srvcs` |
| #8 Broadcom | 1.76 % | MW-FS | same | `BROADCOM 1,587.27 1.76 Info Tech` |
| #9 Micron | 1.33 % | MW-FS | same | `MICRON TECHNOLOGY 1,202.93 1.33 Info Tech` |
| #10 Tesla | 1.12 % | MW-FS | same | `TESLA 1,015.10 1.12 Cons Discr` |

### Structure

| field | value | source URL | doc title, as-of, accessed | quote |
|---|---|---|---|---|
| Number of constituents | 1,249 | MW-FS | MSCI World factsheet, SEP 30, 2026, accessed 2026-10-15 | `With 1,249 constituents` |
| Top-10 share | 27.85 % (stated as the "Total" row of the top-10 table) | MW-FS | same | `Total 25,182.87 27.85` |
| Country: United States | 72.94 % | MW-FS | same | `United States 72.94%` |
| Country: Japan | 5.91 % | MW-FS | same | `Japan 5.91%` |
| Country: United Kingdom | 3.41 % | MW-FS | same | `United Kingdom 3.41%` |
| Country: Canada | 3.29 % | MW-FS | same | `Canada 3.29%` |
| Country: France | 2.24 % | MW-FS | same | `France 2.24%` |
| Country: Other | 12.21 % | MW-FS | same | `Other 12.21%` |
| Sector: Information Technology | 31.78 % | MW-FS | same | `Information Technology 31.78%` |
| Sector: Financials | 15.74 % | MW-FS | same | `Financials 15.74%` |
| Sector: Industrials | 10.8 % | MW-FS | same | `Industrials 10.8%` |
| Sector: Health Care | 9.2 % | MW-FS | same | `Health Care 9.2%` |
| Sector: Consumer Discretionary | 8.36 % | MW-FS | same | `Consumer Discretionary 8.36%` |
| Sector: Communication Services | 8.31 % | MW-FS | same | `Communication Services 8.31%` |
| Sector: Consumer Staples | 4.77 % | MW-FS | same | `Consumer Staples 4.77%` |
| Sector: Energy | 4.03 % | MW-FS | same | `Energy 4.03%` |
| Sector: Materials | 3.21 % | MW-FS | same | `Materials 3.21%` |
| Sector: Utilities | 2.3 % | MW-FS | same | `Utilities 2.3%` |
| Sector: Real Estate | 1.52 % | MW-FS | same | `Real Estate 1.52%` |

## 6. MSCI ACWI (MSCI)

### Holdings (top 10)

| field | value | source URL | doc title, as-of, accessed | quote |
|---|---|---|---|---|
| #1 NVIDIA | 5.11 % | MA-FS | MSCI ACWI Index (USD) factsheet, SEP 30, 2026, accessed 2026-10-15 | `NVIDIA US 5,250.46 5.11 Info Tech` |
| #2 Apple | 4.76 % | MA-FS | same | `APPLE US 4,891.18 4.76 Info Tech` |
| #3 Microsoft | 3.52 % | MA-FS | same | `MICROSOFT CORP US 3,619.54 3.52 Info Tech` |
| #4 Amazon | 2.35 % | MA-FS | same | `AMAZON.COM US 2,412.12 2.35 Cons Discr` |
| #5 Alphabet A | 1.97 % | MA-FS | same | `ALPHABET A US 2,018.89 1.97 Comm Srvcs` |
| #6 TSMC | 1.87 % | MA-FS | same | `TAIWAN SEMICONDUCTOR MFG TW 1,919.50 1.87 Info Tech` |
| #7 Alphabet C | 1.55 % | MA-FS | same | `ALPHABET C US 1,592.85 1.55 Comm Srvcs` |
| #8 Meta | 1.55 % | MA-FS | same | `META PLATFORMS A US 1,592.53 1.55 Comm Srvcs` |
| #9 Broadcom | 1.55 % | MA-FS | same | `BROADCOM US 1,587.27 1.55 Info Tech` |
| #10 Micron | 1.17 % | MA-FS | same | `MICRON TECHNOLOGY US 1,202.93 1.17 Info Tech` |

### Structure

| field | value | source URL | doc title, as-of, accessed | quote |
|---|---|---|---|---|
| Number of constituents | 2,414 | MA-FS | MSCI ACWI factsheet, SEP 30, 2026, accessed 2026-10-15 | `With 2,414 constituents` |
| Top-10 share | 25.40 % (stated as the "Total" row) | MA-FS | same | `Total 26,087.27 25.40` |
| Country: United States | 64.21 % | MA-FS | same | `United States 64.21%` |
| Country: Japan | 5.2 % | MA-FS | same | `Japan 5.2%` |
| Country: Taiwan | 3.46 % | MA-FS | same | `Taiwan 3.46%` |
| Country: United Kingdom | 3 % | MA-FS | same | `United Kingdom 3%` |
| Country: Canada | 2.9 % | MA-FS | same | `Canada 2.9%` |
| Country: Other | 21.22 % | MA-FS | same | `Other 21.22%` |
| Sector: Information Technology | 33.21 % | MA-FS | same | `Information Technology 33.21%` |
| Sector: Financials | 16.17 % | MA-FS | same | `Financials 16.17%` |
| Sector: Industrials | 10.27 % | MA-FS | same | `Industrials 10.27%` |
| Sector: Health Care | 8.42 % | MA-FS | same | `Health Care 8.42%` |
| Sector: Consumer Discretionary | 8.24 % | MA-FS | same | `Consumer Discretionary 8.24%` |
| Sector: Communication Services | 8.01 % | MA-FS | same | `Communication Services 8.01%` |
| Sector: Consumer Staples | 4.51 % | MA-FS | same | `Consumer Staples 4.51%` |
| Sector: Energy | 3.96 % | MA-FS | same | `Energy 3.96%` |
| Sector: Materials | 3.51 % | MA-FS | same | `Materials 3.51%` |
| Sector: Utilities | 2.25 % | MA-FS | same | `Utilities 2.25%` |
| Sector: Real Estate | 1.45 % | MA-FS | same | `Real Estate 1.45%` |

## Not verified

1. **S&P 500 top-10 weights and sector weights in the factsheet PDF.** Page 4 draws them as a chart, with no text layer. The rows above come from S&P DJI's own data feed (SP-JSON). Those values are raw fractions, so turning them into % is a ×100 conversion, not a published figure. The factsheet itself states only `WEIGHT TOP 10 CONSTITUENTS [%] 39.1` and `WEIGHT LARGEST CONSTITUENT [%] 8.4`.
2. **Nasdaq-100 country split and top-10 share.** Neither is stated in the factsheet.
3. **MSCI World / ACWI sector and country splits.** The factsheets publish only the top 5 countries plus "Other"; the full country split is not stated.
