# Brokers for Czech retail investors: UCITS ETF access

Collected and re-checked against the live sources on 2026-10-15. Overview and scope: [README](README.md).

Accessed 2026-10-15 for every row. These are primary sources only: broker web pages, help centres, terms and fee PDFs.
Quotes are copied verbatim. Line breaks and runs of whitespace from PDFs or tables are collapsed to single spaces.
Where a quote was assembled from table cells, the cells are joined with " | " and the row says so.

Fetch notes:
- XTB: all pages and PDFs were fetched directly with curl (HTTP 200).
- Trading 212: the help centre was read through its public Zendesk API (`/api/v2/help_center/en-us/articles/{id}.json`). The help centre has no Czech locale, so quotes from it are in English. `www.trading212.com` returns 403 to curl and WebFetch, so its pages were read in a real Chrome browser. The terms page showed CZK values; the Czech URL is cited.
- Revolut: `www.revolut.com` and `help.revolut.com` return 403 or a "security check" page to curl and WebFetch, so they were read in a real Chrome browser (cs-CZ pages). The cdn.revolut.com PDF was fetched with curl.

---

## 1. XTB

| Field | Value | Source URL | Doc title, date, accessed | Quote (verbatim) |
|---|---|---|---|---|
| Entity serving CZ clients | XTB S.A. (Warsaw), operating in CZ through its Prague branch "XTB S.A., organizační složka" (IČO 27867102) | https://www.xtb.com/cz/zakladni_informace_o_xtb_27092025.pdf | Základní informace o XTB (file dated 27092025); accessed 2026-10-15 | "podnikající na území České republiky prostřednictvím své organizační složky XTB S.A., organizační složka, IČ: 278 67 102" |
| Home regulator | KNF (Komisja Nadzoru Finansowego, Poland) | same PDF | same | "XTB je plně licencována společnost dozorovaná polským orgánem dohledu Komisí pro finanční dohled (Komisja Nadzoru Finansowego)" |
| CZ branch supervision | ČNB, for the conduct-of-business sections listed | same PDF | same | "Dohled nad činností XTB v České republice prostřednictvím Organizační složky dle ustanovení" … "je vykonáván Českou národní bankou" |
| Czech-language website | Yes (`<html lang="cs">`, Czech UI) | https://www.xtb.com/cz | XTB CZ homepage; accessed 2026-10-15 | "Český" (language selector) |
| Czech-language app/platform | Yes | https://www.xtb.com/cz/platforma | Obchodní platforma; accessed 2026-10-15 | "Platforma je k dispozici v češtině" |
| ETF commission | 0 % up to €100,000 monthly volume; above that 0.2 %, minimum €10 | https://www.xtb.com/cz/ucet-a-poplatky | Informace o účtech / Typy účtů a poplatky; page lists fee tables valid from 30.09.2026 and 20.10.2026; accessed 2026-10-15 | "Při měsíčním obj. do 100 000 EUR (pak popl. 0,2 %, min. 10 EUR)." |
| ETF commission (fee table) | same | https://www.xtb.com/cz/soubory/tabulkapoplatkuaprovizi30092026.pdf | TABULKA POPLATKŮ A PROVIZÍ XTB ze dne 30. září 2026 (in force on access date; next version dated 20. října 2026); accessed 2026-10-15 | "0%, minimálně 0 EUR 0.2%, minimálně 10 EUR 0,5%" (row: commission before €100k / after €100k / FX fee) |
| FX conversion fee (trades) | 0.5 % | https://www.xtb.com/cz/investicni-plany | Investiční plány; accessed 2026-10-15 | "Může být účtován poplatek 0,5 % za konverzi měn." |
| FX conversion fee (fee table) | 0.5 % mark-up on the XTB rate | https://www.xtb.com/cz/soubory/tabulkapoplatkuaprovizi30092026.pdf | same as above | "Všechny měnové konverze související s obchodováním a korporátní události v rámci OMI a Frakčních práv podléhají 0,5% přirážce na vrcholu kurzu" |
| Manual cash-to-cash FX between sub-accounts | 0.5 % weekdays; 0.8 % on weekends and holidays | https://www.xtb.com/cz/soubory/tabulkapoplatkuaprovizi30092026.pdf | same | "0,8 % z hodnoty převodu provedeného o víkendech a svátcích z účtu v CZK" |
| Account opening and maintenance | Free | https://www.xtb.com/cz/ucet-a-poplatky | same as above | "Zdarma pro všechny aktivní klienty bez ohledu na zůstatek na účtu" |
| Inactivity fee | €10 a month, only if there was no position opened or closed in 365 days and no deposit in 90 days, and never while the client holds an open position on any account (sentence added during verification; unchanged in the 20.10.2026 table) | https://www.xtb.com/cz/soubory/tabulkapoplatkuaprovizi30092026.pdf | same | "Pouze pokud jsou následující dvě podmínky splněny, tak je účtován měsíční poplatek ve výši 10 EUR" … "v posledních 365 dnech nedošlo k otevření nebo uzavření pozice na účtu Zákazníka" … "během posledních 90 dnů nebyl na účet proveden žádný vklad peněžních prostředků" … "Pokud má Zákazník otevřenou pozici na jakémkoliv účtu, není účtován žádný poplatek." |
| Custody fee | 0.02 % a year, charged only if the average daily portfolio value exceeds €250,000 | https://www.xtb.com/cz/soubory/tabulkapoplatkuaprovizi30092026.pdf | same | "0.02 % ročně, účtováno měsíčně pokud průměrná denní hodnota portfolia překročí 250 000 EUR" |
| Minimum deposit | None | https://www.xtb.com/cz/ucet-a-poplatky | same | "Žádná minimální částka" |
| Deposit by bank transfer | Free (0 %) | https://www.xtb.com/cz/ucet-a-poplatky | same | "Poplatek 0 %" (bank transfer, CZK/EUR/USD) |
| Deposit by card (until 19.10.2026) | 0.77 % (CZK) | https://www.xtb.com/cz/soubory/tabulkapoplatkuaprovizi30092026.pdf | same | "0,77 % z vložené částky (vklad v CZK)" |
| Deposit by card (from 20.10.2026) | Free | https://www.xtb.com/cz/soubory/tabulkapoplatkuaprovizi20102026.pdf | TABULKA POPLATKŮ A PROVIZÍ XTB ze dne 20. října 2026 (future version); accessed 2026-10-15 | "Poplatek za vklad kreditní nebo debetní kartou Zdarma" |
| Minimum order (general page) | €10 for stocks | https://www.xtb.com/cz/ucet-a-poplatky | same | "Minimální hodnota investic do akcií" … "10 EUR" |
| Minimum order (ETF instrument pages) | €1 (EUR lines) / 1 USD / 1 GBP, depending on the line | e.g. https://www.xtb.com/cz/etf/vanguard-ftse-all-world-ucits-acc-eur- | ETF instrument page; accessed 2026-10-15 | "Minimální hodnota pokynu" … "1 EUR" |
| Savings plan | Yes: "Investiční plány" with Auto Invest (recurring deposits invested automatically) | https://www.xtb.com/cz/investicni-plany | Investiční plány; accessed 2026-10-15 | "Pravidelně vkládejte prostředky na svůj účet a investujte automaticky pomocí funkce Auto Invest." |
| Savings plan: ETFs | Yes: stocks and ETFs | same | same | "Kombinujte akcie a ETF v jednom investičním plánu" |
| Savings plan minimum | €15 (FAQ). The page hero also says 350 CZK | same | same | "Investovat v rámci Investičních plánů můžete již od 15 EUR." / "začněte investovat už od 350 CZK." |
| Savings plan fees | Free to set up and run; trades follow the same 0 % up to €100k rule | same | same | "Založení a správa Investičních plánů v XTB jsou zcela zdarma." |

### XTB: ETF availability

Source: XTB CZ instrument pages (`https://www.xtb.com/cz/etf/<slug>`), found through XTB's own CZ instrument search (`/web-api/v2/languages/cs/branches/cz/instruments?query=…`, the backend of https://www.xtb.com/cz/specifikace-instrumentu). XTB instrument pages show the ISIN as "-", except SXR8.DE. So availability for the other ISINs is matched by fund name and share class only. XTB does not show the ISIN, and that fund-to-ISIN link is not verified from an XTB source. The exchange is not named on the pages; only the ticker suffix (.DE / .UK / .NL) and currency are shown.

| ISIN | Available | Line(s) shown (ticker, currency in name) | URL | Quote |
|---|---|---|---|---|
| IE00B5BMR087 | Yes (ISIN shown) | SXR8.DE (EUR, "na burze Xetra"); also CSPX.UK (Acc USD) by name | https://www.xtb.com/cz/etf/ishares-core-s-p-500-ucits-acc-eur ; https://www.xtb.com/cz/etf/ishares-core-s-p-500-ucits-acc-usd | "Na burze Xetra se obchoduje pod tickerem SXR8 a jeho identifikátory jsou ISIN IE00B5BMR087 a WKN A0YEDG." |
| IE00BFMXXD54 | Yes by name (ISIN not shown) | VUAA.DE (Acc, EUR); VUAA.UK (Acc, USD) | https://www.xtb.com/cz/etf/vanguard-s-p-500-ucits-acc-eur | "Vanguard S&P 500 UCITS ETF USD (Acc, EUR)" |
| IE00B3XXRP09 | Yes by name (ISIN not shown) | VUSA.DE (Dist, EUR); VUSA.UK (Dist, GBP) | https://www.xtb.com/cz/etf/vanguard-s-p-500-ucits-dist-eur | "Vanguard S&P 500 UCITS ETF USD (Dist, EUR)" |
| IE00B53SZB19 | Yes by name (ISIN not shown) | SXRV.DE (Acc EUR); CNDX.UK (Acc USD) | https://www.xtb.com/cz/etf/ishares-nasdaq-100-ucits-acc-eur-sxrv | "iShares NASDAQ 100 UCITS ETF (Acc EUR)" |
| IE0032077012 | Yes by name (ISIN not shown) | EQQQ.DE (Dist, EUR); EQQQ.UK (Dist, GBP) | https://www.xtb.com/cz/etf/eqqq-de | "Invesco EQQQ NASDAQ-100 UCITS (Dist, EUR)" |
| IE00BK5BQT80 | Yes by name (ISIN not shown) | VWCE.DE (Acc EUR); VWRA.UK (Acc, USD) | https://www.xtb.com/cz/etf/vanguard-ftse-all-world-ucits-acc-eur- | "Vanguard FTSE All-World UCITS ETF (Acc EUR )" |
| IE00B3RBWM25 | Yes by name (ISIN not shown) | VWRL.NL (Dist EUR); VGWL.DE (Dist, EUR) | https://www.xtb.com/cz/etf/vanguard-ftse-all-world-ucits-dist-eur | "Vanguard FTSE All-World UCITS (Dist EUR)" |
| IE00B4L5Y983 | Yes by name (ISIN not shown) | EUNL.DE (Acc EUR); IWDA.UK (Acc USD) | https://www.xtb.com/cz/etf/ishares-core-msci-world-ucits-acc-eur | "iShares Core MSCI World UCITS ETF (Acc EUR)" |
| IE00BJ0KDQ92 | Yes by name (ISIN not shown) | XDWD.DE (Acc, EUR); XDWD.UK (Acc, USD) | https://www.xtb.com/cz/etf/xdwd-de | "Xtrackers (IE) PLC - Xtrackers MSCI World UCITS (Acc, EUR)" |
| IE00B3YLTY66 | Yes by name (ISIN not shown) | SPYI.DE (Acc EUR) | https://www.xtb.com/cz/etf/spdr-msci-acwi-imi-ucits-acc-eur | "SPDR MSCI ACWI IMI UCITS (Acc EUR)" |
| IE00B6R52259 | Yes by name (ISIN not shown) | IUSQ.DE (Acc, EUR); ISAC.UK (Acc USD) | https://www.xtb.com/cz/etf/ishares-msci-acwi-ucits-acc-eur | "iShares MSCI ACWI UCITS ETF (Acc, EUR)" |

---

## 2. Trading 212

| Field | Value | Source URL | Doc title, date, accessed | Quote (verbatim) |
|---|---|---|---|---|
| Accepts CZ residents; entity | Yes. Czech Republic is listed under Trading 212 Markets Ltd. | https://helpcentre.trading212.com/hc/en-us/articles/12933782261917-What-are-the-supported-countries | "What are the supported countries?" (updated 2026-10-12); accessed 2026-10-15 | "Based on your country of residence, your newly created account would be under one of our four entities." (table: "Trading 212 Markets Ltd." … "Czech Republic") |
| Regulator | CySEC (Cyprus), licence 398/21 | https://www.trading212.com/cs | Trading 212 CZ homepage footer; accessed 2026-10-15 | "Společnost Trading 212 Markets Ltd. je registrována na Kypru, autorizována a podléhá regulaci Kyperské komisi pro cenné papíry a burzy (č. licence 398/21)." |
| Investor protection | ICF up to €20,000 | https://www.trading212.com/cs | same | "Ochrana Kompenzačním fondem pro investory (ICF) až do výše 20 000 EUR" |
| Czech-language website | Yes (`lang="cs"`) | https://www.trading212.com/cs | same | "Investování bez provize pro každého" |
| CZK account currency | CZK supported in the multi-currency account | https://helpcentre.trading212.com/hc/en-us/articles/11669719976093-What-is-a-multi-currency-account | "What is a multi-currency account?" (updated 2026-09-11); accessed 2026-10-15 | "We support GBP, USD, EUR, CHF, DKK, NOK, PLN, SEK, CZK, RON, HUF, CAD, AUD." |
| Commission | Free | https://www.trading212.com/cs/terms/invest | Obchodní podmínky pro Invest účty (no date on page); accessed 2026-10-15 | "Obchodní provize" … "Bezplatně" |
| FX fee | 0.15 % | https://www.trading212.com/cs/terms/invest | same | "Ani o víkendu nezaplatíš více než 0,15 %." |
| Custody fee | Free | https://www.trading212.com/cs/terms/invest | same | "Poplatek za úschovu" … "Bezplatně" |
| Inactivity fee | None | https://helpcentre.trading212.com/hc/en-us/articles/360007303418-Is-there-an-inactivity-fee | "Is there an inactivity fee?" (updated 2026-08-28); accessed 2026-10-15 | "No. There are no inactivity fees associated with your Trading 212 account." |
| Deposit fee | Bank transfer free; cards and wallets free up to 60,000 CZK / €2,000 cumulative, then 0.7 % | https://www.trading212.com/cs/terms/invest | same | "Od 60 000 Kč/2 000 € kumulativně" … "0,7 %" |
| Minimum deposit | 30 CZK / €1 | https://www.trading212.com/cs/terms/invest | same | "Min. vklad" … "30 Kč, 1 €" |
| Minimum order | 25 CZK / €1; ETFs €1 / $1 | https://www.trading212.com/cs/terms/invest | same | "Min. objednávka pro nákup/prodej" … "25 Kč, 1 €" ; "ETF" … "1 €, 1 $" |
| Savings plan | Yes: Pies + AutoInvest; also AutoInvest on a single instrument | https://helpcentre.trading212.com/hc/en-us/articles/30661163244317-Pies-AutoInvest-Introduction | "Pies & AutoInvest - Introduction" (updated 2026-10-09); accessed 2026-10-15 | "AutoInvest is also available for single instruments. You can set up a recurring investment directly from an instrument’s details page, without needing to create a Pie." |
| Savings plan: ETFs | Yes | same | same | "This makes it easy to automate investing in a specific stock or ETF on a schedule that works for you." |
| Savings plan frequency | Daily to every six months (Pies) | same | same | "Choose how often you want to invest – daily, weekly, monthly, every two weeks, every two months, or every six months." |
| Savings plan funding for Markets Ltd. clients | Free funds allowed | https://helpcentre.trading212.com/hc/en-us/articles/30668804460061-AutoInvest-Payments-Adjustments-Settings | "AutoInvest - Payments, Adjustments & Settings" (updated 2026-10-09); accessed 2026-10-15 | "If you are registered under Trading 212 UK Ltd, Trading 212 Markets Ltd., Trading 212 EU, or Trading 212 AU Pty Ltd., you can use your account’s available free funds" |
| Savings plan minimum | No fixed number; it depends on the Pie's lowest target weight | https://helpcentre.trading212.com/hc/en-us/articles/360013526998-Why-is-my-Pie-Free-Cash-not-invested | "Why is my Pie Free Cash not invested?" (updated 2026-10-12); accessed 2026-10-15 | "Each Pie has a minimum investment amount (threshold). It’s determined by the lowest target weight in the Pie." |
| FX inside Pies | 0.15 % applies | https://helpcentre.trading212.com/hc/en-us/articles/360018909758-What-is-the-FX-fee-Invest-Stocks-ISA | "What is the FX fee? (Invest & Stocks ISA)" (updated 2026-10-06); accessed 2026-10-15 | "If you buy or sell instruments in a pie that are in another currency, you will still pay the 0.15% fee." |

### Trading 212: ETF availability

Source: https://www.trading212.com/cs/trading-instruments/invest ("Investuj do akcií a ETF po celém světě", accessed 2026-10-15). Re-checked 2026-10-15 in Chrome: all 11 ISINs appear in the page's embedded instrument data, each with several currency lines. The rendered table has the columns SYMBOL | NÁZEV | MĚNA | ISIN | TYP | BURZA. Rows were read from the page's embedded instrument data, which has 19,984 entries; exchange names come from the page's own exchange list. The quote column is the table cells joined with " | ". Caveat: the list does not say it is filtered by entity. Lines quoted in GBX/GBP may be aimed at UK clients. Lines marked [cv] carry a "conditionalVisibility" flag in the data.

| ISIN | Available | Exchange / currency lines listed | URL | Quote (table cells) |
|---|---|---|---|---|
| IE00B5BMR087 | Yes | Xetra EUR (SXR8); LSE USD (CSPX); LSE GBX (CSP1) | https://www.trading212.com/cs/trading-instruments/invest | "SXR8 \| iShares Core S&P 500 (Acc) \| EUR \| IE00B5BMR087 \| ETF \| Deutsche Börse Xetra" |
| IE00BFMXXD54 | Yes | Borsa Italiana EUR (VUAA); LSE USD (VUAA); LSE GBP (VUAG) | same | "VUAA \| Vanguard S&P 500 (Acc) \| EUR \| IE00BFMXXD54 \| ETF \| Borsa Italiana" |
| IE00B3XXRP09 | Yes | Euronext Amsterdam EUR (VUSA); LSE GBP (VUSA); LSE USD (VUSD); SIX CHF (VUSA) | same | "VUSA \| Vanguard S&P 500 (Dist) \| EUR \| IE00B3XXRP09 \| ETF \| Euronext Amsterdam" |
| IE00B53SZB19 | Yes | Xetra EUR (SXRV); LSE USD (CNDX); LSE GBX (CNX1) | same | "SXRV \| iShares NASDAQ 100 (Acc) \| EUR \| IE00B53SZB19 \| ETF \| Deutsche Börse Xetra" |
| IE0032077012 | Yes | Borsa Italiana EUR (EQQQ); LSE GBX (EQQQ); SIX USD (EQQQ) | same | "EQQQ \| Invesco EQQQ Nasdaq-100 (Dist) \| EUR \| IE0032077012 \| ETF \| Borsa Italiana" |
| IE00BK5BQT80 | Yes | Xetra EUR (VWCE); LSE USD (VWRA); LSE GBP (VWRP); SIX CHF (VWRA) | same | "VWCE \| Vanguard FTSE All-World (Acc) \| EUR \| IE00BK5BQT80 \| ETF \| Deutsche Börse Xetra" |
| IE00B3RBWM25 | Yes | Euronext Amsterdam EUR (VWRL); Xetra EUR (VGWL) [cv]; LSE USD (VWRD); LSE GBP (VWRL); SIX CHF (VWRL) | same | "VWRL \| Vanguard FTSE All-World (Dist) \| EUR \| IE00B3RBWM25 \| ETF \| Euronext Amsterdam" |
| IE00B4L5Y983 | Yes | Xetra EUR (EUNL); LSE USD (IWDA); Euronext Amsterdam EUR (IWDA) [cv]; LSE GBX (SWDA) | same | "EUNL \| iShares Core MSCI World (Acc) \| EUR \| IE00B4L5Y983 \| ETF \| Deutsche Börse Xetra" |
| IE00BJ0KDQ92 | Yes | Xetra EUR (XDWD); LSE USD (XDWD); LSE GBX (XWLD) | same | "XDWD \| Xtrackers MSCI World (Acc) \| EUR \| IE00BJ0KDQ92 \| ETF \| Deutsche Börse Xetra" |
| IE00B3YLTY66 | Yes | Xetra EUR (SPYI); LSE USD (IMID) | same | "SPYI \| SPDR MSCI All Country World Investable Market (Acc) \| EUR \| IE00B3YLTY66 \| ETF \| Deutsche Börse Xetra" |
| IE00B6R52259 | Yes | Xetra EUR (IUSQ); LSE USD (ISAC); LSE GBX (SSAC); SIX CHF (SSACCHF) | same | "IUSQ \| iShares MSCI All Country World (Acc) \| EUR \| IE00B6R52259 \| ETF \| Deutsche Börse Xetra" |

---

## 3. Revolut

| Field | Value | Source URL | Doc title, date, accessed | Quote (verbatim) |
|---|---|---|---|---|
| Entity for investment services (EEA, incl. CZ) | Revolut Securities Europe UAB (reg. no. 305799582, Vilnius) | https://www.revolut.com/cs-CZ/legal/investment-services-terms/ | PODMÍNKY A UJEDNÁNÍ SPOLEČNOSTI REVOLUT SECURITIES UAB, valid from 5. srpna 2026 (free-trade limit table from 6. října 2026); accessed 2026-10-15 | "Investiční služby v Evropském hospodářském prostoru („EHP“) poskytuje Revolut Securities Europe UAB (registrační kód 305799582, adresa Konstitucijos ave. 21B, Vilnius, Litva, LT-08130), která je Litevskou centrální bankou autorizována jako makléřská firma." |
| Regulator | Bank of Lithuania (BoL) | same | same | "Společnost Revolut Securities Europe UAB je založena v Litvě pod registračním číslem 305799582 a je autorizována a regulována Litevskou centrální bankou („BoL“) jako investiční společnost." |
| Czech-language website / help | Yes (cs-CZ site and help centre) | https://help.revolut.com/cs-CZ/help/wealth/stocks/trading-stocks/trading-fees/what-fees-will-i-be-charged-for-my-trading/ | Poplatky za obchodování s Revolutem; accessed 2026-10-15 | "Poplatky za obchodování s Revolutem" |
| Contract language note | The English version prevails; the Czech text is for reference | https://www.revolut.com/cs-CZ/legal/investment-services-terms/ | same | "V případě nesouladu nebo rozporu mezi přeloženou verzí těchto podmínek a ujednání a původní verzí v angličtině platí původní verze." |
| Commission-free orders per plan | Standard/Plus 0; Premium 5; Metal/Ultra 10 a month | https://help.revolut.com/cs-CZ/help/wealth/stocks/trading-stocks/trading-fees/what-fees-will-i-be-charged-for-my-trading/ | same | "Standard a Plus: 0 pokynů" / "Premium: 5 pokynů" / "Metal a Ultra: 10 pokynů" |
| Commission per order (outside the allowance) | 25 CZK per order | same | same | "Mimo průběžný měsíční limit vašeho plánu bude provize činit 25 Kč za pokyn." |
| Commission (terms) | Fixed €1.00 or the country minimum; CZ minimum 25.00 CZK | https://www.revolut.com/cs-CZ/legal/investment-services-terms/ | same (Sazebník poplatků) | "Tento poplatek bude činit buď pevnou částku 1,00 EUR (nebo její ekvivalent v USD), nebo minimální poplatek stanovený pro danou zemi" … "Česká republika 25,00 CZK" |
| Commission in the investment plan | 0 for eligible ETPs (one-off and recurring buys), even above the plan allowance | https://help.revolut.com/cs-CZ/help/wealth/stocks/getting-started-with-etf-s/etfs-investment-plans/ | Investiční plány (help); accessed 2026-10-15 | "Opakované nákupy a jednorázové pokyny k nákupu jsou v rámci investičního plánu bez provize. Nákupy zůstanou bez provize, i když překročíte svůj měsíční limit." |
| FX fee inside the investment account | None charged by Revolut Securities | https://www.revolut.com/cs-CZ/legal/investment-services-terms/ | same (Sazebník poplatků, "Směna měn") | "Nebudeme vám účtovat žádné poplatky za směnu měn." |
| FX when funding from the main Revolut account | Standard plan: 25,000 CZK a month without fair-usage fee, then 1 %; weekend exchanges 1 % | https://cdn.revolut.com/terms_and_conditions/pdf/osobn_poplatky_standard_e98f0159_2.7.2_1774516949_cs.pdf | Osobní poplatky (Standard), version valid from 10. listopadu 2025 until 19. prosince 2026 (linked from https://www.revolut.com/cs-CZ/legal/standard-fees/); accessed 2026-10-15 | "Standard: Limit pro směnu 25000 Kč měsíčně. Na každou další výměnu se vztahuje poplatek za spravedlivé používání ve výši 1 %." / "Pokud provedete směnu o víkendech (v pátek mezi 17:00 newyorského času a v neděli 18:00 newyorského času), účtuje se 1% poplatek." |
| FX funding counts toward the limit | Yes for Standard/Plus | https://www.revolut.com/cs-CZ/legal/investment-services-terms/ | same | "Směny měn prováděné v souvislosti s přidáváním prostředků na váš investiční účet se počítají do vašeho limitu spravedlivého používání směny, pokud jste zákazníkem planu Standard nebo Plus" |
| Custody fee | None | https://help.revolut.com/cs-CZ/help/wealth/stocks/trading-stocks/trading-fees/what-fees-will-i-be-charged-for-my-trading/ | same | "Poplatky za úschovu: my žádné poplatky za úschovu neúčtujeme" |
| Outbound transfer fee | $35 per position | same | same | "převody z vašeho investičního účtu na jinou platformu podléhají poplatku 35 USD za převedenou pozici" |
| Standard plan subscription | Free | https://www.revolut.com/cs-CZ/legal/standard-fees/ | Osobní poplatky (Standard), web version valid from 19. prosince 2026; accessed 2026-10-15 | "Poplatek za předplatné" … "Zdarma." |
| Minimum order | From €1 with fractional ETFs; the exact minimum is set in the app | https://www.revolut.com/cs-CZ/etfs/ | ETF (product page); accessed 2026-10-15 | "Začněte již od 1 € se zlomkovými akciemi" |
| Minimum order (terms) | Set in the platform and changeable without notice | https://www.revolut.com/cs-CZ/legal/investment-services-terms/ | same | "Jelikož minimální hodnota pokynu závisí na řadě faktorů, můžeme rozhodnout o změně minimální hodnoty pokynu, aniž bychom vás o tom předem informovali." |
| Savings plan | Yes: "Investiční plán" for selected ETPs, one-off or recurring | https://www.revolut.com/cs-CZ/legal/investment-services-terms/ | same | "U některých produktů obchodovaných na burze (ETP) můžete zadávat jednorázové i opakované nákupní příkazy bez placení standardní provize (tuto službu nazýváme „investiční plán“)." |
| Savings plan eligibility | Not all ETPs; the list is in the app only | same | same | "Ne všechny produkty ETP dostupné na naší platformě jsou pro investiční plán způsobilé." |
| Recurring frequency | Daily, weekly or monthly | same | same | "která může být denní, týdenní nebo měsíční" |
| Ownership structure | Omnibus account in the name of "klienti Revolut Securities Europe UAB"; the client remains beneficial owner | same | same | "Všechny nástroje držené na hromadném účtu budou registrovány na jméno 'klienti Revolut Securities Europe UAB', přičemž vy po celou dobu zůstanete skutečným vlastníkem těchto nástrojů." |
| Fractional shares caveat | No voting rights | https://www.revolut.com/cs-CZ/etfs/ | ETF (product page); accessed 2026-10-15 | "Zlomkové akcie s sebou nesou dodatečná rizika a nejsou s nimi spojena hlasovací práva." |

### Revolut: ETF availability

Revolut publishes no public instrument list. "Vybrat ETF" on https://www.revolut.com/cs-CZ/etfs/ only links to an app download. The help centre says ETF search is inside the app. The only public statement is general: "Momentálně nabízíme nekomplexní ETF, které jsou registrované v Evropské unii." (https://help.revolut.com/cs-CZ/help/wealth/stocks/getting-started-with-etf-s/which-types-of-etf-are-available-in-the-revolut-app/, accessed 2026-10-15)

| ISIN | Available | Exchange/currency | URL | Quote |
|---|---|---|---|---|
| IE00B5BMR087 | unknown | – | – | No public Revolut instrument page found |
| IE00BFMXXD54 | unknown | – | – | same |
| IE00B3XXRP09 | unknown | – | – | same |
| IE00B53SZB19 | unknown | – | – | same |
| IE0032077012 | unknown | – | – | same |
| IE00BK5BQT80 | unknown | – | – | same |
| IE00B3RBWM25 | unknown | – | – | same |
| IE00B4L5Y983 | unknown | – | – | same |
| IE00BJ0KDQ92 | unknown | – | – | same |
| IE00B3YLTY66 | unknown | – | – | same |
| IE00B6R52259 | unknown | – | – | same |

---

## Not verified

1. **Revolut: availability of each ETF.** The instrument list is in the app only, and Revolut has no public ETF pages. All 11 ISINs are unknown.
2. **Revolut: which ETFs are in the investment plan, and its minimum amount.** The eligible list is in the app only. No minimum amount is stated on the pages found; the terms only refer to the "minimální hodnota pokynu uvedená v investiční platformě".
3. **Revolut: minimum deposit and inactivity fee.** Neither is stated in the investment terms or the trading-fee help article.
4. **Revolut: Czech-language app.** The website and help centre are in Czech; the app's language support was not found stated.
5. **Revolut: "1,00 EUR" in the terms vs "25 Kč" in the help article.** Both are quoted. The terms say the fee is either €1.00 or the country minimum (CZ 25.00 CZK); the help article says 25 Kč per order. The exact rule for a CZ resident's EUR- or USD-priced trade is not spelled out.
6. **Revolut: Standard-plan FX after 19.12.2026.** The web version valid from 19 Dec 2026 does not state the limit amount in the text read. The 25,000 CZK figure comes from the version in force now (from 10 Nov 2025). The Czech diacritics in that PDF were extracted with stray spaces, so the quote has the spaces normalised.
7. **XTB: ISIN for 10 of the 11 ETFs.** XTB instrument pages show "ISIN -". Availability is matched by fund name and share class; only IE00B5BMR087 (SXR8.DE) is confirmed by an ISIN on an XTB page. The exchange is not named on those pages (except Xetra for SXR8); only the ticker suffix is shown.
8. **XTB: €15 vs 350 CZK minimum for Investiční plány.** Both appear on the same page.
9. **Trading 212: entity-specific instrument list.** The public list is not stated to be filtered for Trading 212 Markets Ltd. clients. Lines on LSE in GBX/GBP may not be offered to CZ clients.
10. **Trading 212: Czech-language app.** The website is in Czech. The help article on app language ("How do I change my app's language?") does not list the languages.
11. **Trading 212: custody for CZ clients.** One help article says there was a "custody migration from Trading 212 Markets Ltd. to Trading 212 EU GmbH"; the custody article says it is "applicable only to clients of Trading 212 EU GmbH". Whether CZ (Markets Ltd.) clients' assets moved is not clear from these sources.
12. **Trading 212: document dates.** The terms page has no effective date. The help centre dates are the article "updated" timestamps from the help-centre API.
