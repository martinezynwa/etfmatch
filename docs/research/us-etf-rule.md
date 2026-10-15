# Can a Czech retail investor buy US-listed ETFs?

Collected and re-checked against the live sources on 2026-10-15. Overview and scope: [README](README.md).

Accessed: 2026-10-15 for every row. Quotes are copied verbatim from the page text. Whitespace was collapsed when the HTML was converted to text. The only other differences are line breaks in PDFs.

**Headline finding:** the strict claim "a Czech retail investor cannot buy US ETFs" is **not fully supported**. The EU rule (PRIIPs) puts KID duties on product manufacturers and on people who advise on or sell PRIIPs. It does not ban retail investors from owning these products. The Czech National Bank (ČNB) says a broker that only executes orders on a foreign exchange, without offering or advising, is not bound by the Art. 13(1) KID-delivery duty. Fio banka (a Czech broker) said in 2022 that its clients can still buy US ETFs "bez omezení" (without restriction), and its ETF list still includes SPY today. Most EU brokers (XTB, Saxo, Revolut) do not offer US ETFs to retail clients.

Access note: eur-lex.europa.eu returned HTTP 202 with a bot challenge and an empty body to both curl and WebFetch. The same Official Journal texts were read from the EU Publications Office (`publications.europa.eu/resource/celex/<CELEX>`), which serves the same OJ document. EUR-Lex equivalents are given for convenience: `https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:<CELEX>`.

---

## Q1. The rule (EU law)

| # | Claim (plain English) | Source URL | Document, date | Verbatim quote |
|---|---|---|---|---|
| 1.1 | The manufacturer must write a KID and publish it **before** a PRIIP is made available to retail investors. | https://eur-lex.europa.eu/legal-content/EN/TXT/HTML/?uri=CELEX:32014R1286 (EUR-Lex: CELEX 32014R1286) | Regulation (EU) No 1286/2014 (PRIIPs), 26 Nov 2014, OJ L 352, 9.12.2014; Art. 5(1) | "Before a PRIIP is made available to retail investors, the PRIIP manufacturer shall draw up for that product a key information document in accordance with the requirements of this Regulation and shall publish the document on its website." |
| 1.2 | Whoever advises on or sells a PRIIP must give the retail investor the KID before the deal. | same | PRIIPs Art. 13(1) | "A person advising on, or selling, a PRIIP shall provide retail investors with the key information document in good time before those retail investors are bound by any contract or offer relating to that PRIIP." |
| 1.3 | Definition of a PRIP: the payout depends on assets the investor does not buy directly. A fund fits this definition. | same | PRIIPs Art. 4(1) | "‘packaged retail investment product’ or ‘PRIP’ means an investment, including instruments issued by special purpose vehicles as defined in point (26) of Article 13 of Directive 2009/138/EC or securitisation special purpose entities as defined in point (an) of Article 4(1) of the Directive 2011/61/EU of the European Parliament and of the Council ( 19 ) , where, regardless of the legal form of the investment, the amount repayable to the retail investor is subject to fluctuations because of exposure to reference values or to the performance of one or more assets which are not directly purchased by the retail investor;" |
| 1.4 | Investment funds are named as PRIIPs. | same | PRIIPs recital 6 | "Those products should be known as PRIIPs for the purposes of this Regulation and should include, among other things, investment products such as investment funds, life insurance policies with an investment element, structured products and structured deposits." |
| 1.5 | The rules cover products from outside the EU (e.g. US) when EU retail investors buy them. | https://eur-lex.europa.eu/legal-content/EN/TXT/HTML/?uri=CELEX:52017XC0707(02) (EUR-Lex: CELEX 52017XC0707(02)) | Commission Guidelines on the application of Reg. 1286/2014, 2017/C 218/02, OJ C 218, 7.7.2017; para. (10) | "Consequently, where retail investors within the territory of the Union decide to subscribe or purchase third country PRIIPs, the requirements established in Regulation 1286/2014 apply." |
| 1.6 | The same guidelines say the rules apply even when the investor buys on their own initiative without advice. Compare 2.3, where the ČNB takes a narrower view. | same | Guidelines para. (16) | "Regulation 1286/2014 does not distinguish between PRIIPs sold with or without advice provided to the retail investor, or acquired by the retail investor on its own initiative or otherwise." |
| 1.7 | The PRIIPs Regulation has applied since 1 January 2018 (postponed from 31 Dec 2016). | https://eur-lex.europa.eu/legal-content/EN/TXT/HTML/?uri=CELEX:32016R2340 | Regulation (EU) 2016/2340, 14 Dec 2016, OJ L 354, 23.12.2016; Art. 1 | "‘It shall apply from 1 January 2018’" |
| 1.8 | UCITS transition: UCITS funds were exempt (Art. 32) until a set date. The date was finally extended to 31 Dec 2022, so UCITS ETFs have needed a PRIIPs KID from 1 Jan 2023. | https://eur-lex.europa.eu/legal-content/EN/TXT/HTML/?uri=CELEX:32014R1286 | PRIIPs Art. 32(1) (original text) | "Management companies as defined in Article 2(1)(b) of Directive 2009/65/EC, investment companies as referred to in Article 27 thereof and persons advising on, or selling, units of UCITS as referred to in Article 1(2) thereof shall be exempt from the obligations under this Regulation until 31 December 2019." |
| 1.9 | (as 1.8) | https://eur-lex.europa.eu/legal-content/EN/TXT/HTML/?uri=CELEX:32021R2259 | Regulation (EU) 2021/2259, 15 Dec 2021, OJ L 455, 20.12.2021; Art. 1 | "In Article 32(1) of Regulation (EU) No 1286/2014, the date ‘31 December 2021’ is replaced by ‘31 December 2022’." |
| 1.10 | MiFID II product governance: manufacturers must design products for an identified target market. No source found that names this as the reason US ETFs are unavailable (see "Not verified"). | https://eur-lex.europa.eu/legal-content/EN/TXT/HTML/?uri=CELEX:32014L0065 | Directive 2014/65/EU (MiFID II), 15 May 2014, OJ L 173, 12.6.2014; Art. 24(2) | "Investment firms which manufacture financial instruments for sale to clients shall ensure that those financial instruments are designed to meet the needs of an identified target market of end clients within the relevant category of clients" |

**Is the 2023 UCITS KIID → KID transition relevant?** *Interpretation:* only indirectly. The Art. 32 exemption covered UCITS (and some national non-UCITS funds, Art. 32(2)). A US-domiciled ETF is not a UCITS, so the exemption never covered it. For US ETFs, the KID requirement has applied since 1 Jan 2018 (row 1.7). The 2023 change only means EU UCITS ETFs (the alternatives) now carry a PRIIPs KID. Note that the AMF ombudsman (row 2.4) has a footnote saying "The entry into force of the Regulation was deferred to 1 January 2023 for investment funds". That is broader than Art. 32's wording, so do not rely on it for US ETFs.

## Q2. Regulator explanations

| # | Claim | Source URL | Document, date | Verbatim quote |
|---|---|---|---|---|
| 2.1 | ČNB: offering a PRIIP without a KID breaks the regulation. | https://www.cnb.cz/cs/dohled-financni-trh/legislativni-zakladna/stanoviska-k-regulaci-financniho-trhu/RS2018-12/ | ČNB, "Otázky a odpovědi k nařízení o sdělení klíčových informací (PRIIPs)", ID RS2018-12, published 22. 10. 2018, valid until "neurčeno" | "Nabízení produktů spadajících do působnosti nařízení PRIIPs bez odpovídajícího KID je porušením nařízení PRIIPs." |
| 2.2 | ČNB: a "retail investor" means anyone who is not a MiFID II professional client. | same | same | "Retailovým investorem se pro účely nařízení PRIIPs rozumí takový zákazník, který není profesionálním zákazníkem podle směrnice MiFID II." |
| 2.3 | **ČNB: a broker that only executes the investor's order or only gives access to a foreign exchange, without offering or advising, is not bound by the Art. 13(1) KID duty.** | same | same, section B.2 "Poskytování KID v případě „execution-only“ služeb" | "Pokud tedy obchodník s cennými papíry provádí pouze execution-only služby v návaznosti na podnět investora, resp. pouze „zprostředkovává“ přístup na zahraniční burzu, aniž by dané produkty sám nabízel, a současně ohledně produktů neposkytuje žádnou poradenskou činnost, nelze jej považovat za subjekt povinnosti podle čl. 13 odst. 1 nařízení PRIIPs." |
| 2.4 | AMF (French regulator) ombudsman: since PRIIPs, US packaged products without a KID can no longer be marketed in the EU. | https://www.amf-france.org/en/amf-ombudsman/ombudsman-online-diary/latest/application-priips-regulation-what-happens-us-packaged-products-subscribed-regulation-came-force | AMF Ombudsman's blog, "Application of the PRIIPs Regulation: what happens to US packaged products subscribed before the regulation came into force?", 09 March 2023 | "It is also clear that, since the entry into force of PRIIPs, packaged US products falling within the scope of this regulation that are not accompanied by the Key Information Document can no longer be marketed." |
| 2.5 | AMF: ETFs fall within the PRIIPs definition. | same | same | "This regulation applies to all "packaged retail investment products" (PRIIPs), the definition of which effectively includes ETFs, which are financial instruments designed to replicate the movements of an underlying asset, whether upwards or downwards." |
| 2.6 | AMF: the EU rule does not bind the US fund company, which is why there is no KID. | same | same | "This European jurisdictional limitation explains why the US investment management company was not required to provide a KID to investors." |
| 2.7 | ESAs (ESMA/EBA/EIOPA) Joint Committee: KIDs are owed to everyone who is not a MiFID II Annex II professional, whatever national label they carry. | https://www.esma.europa.eu/sites/default/files/2023-05/JC_2023_22_-_Consolidated_JC_PRIIPs_Q_As.pdf | JC 2023 22, Consolidated Q&A on the PRIIPs KID, 5 December 2025; Section I, Q1 (originally published 18 Aug 2017) | "The obligation in the PRIIPs Regulation to provide a KID extends to all investors that do not meet the criteria laid down in Annex II of Directive 2014/65/EU, irrespective of any additional categorisation provided for in national law." |
| 2.8 | ESAs: being listed on an exchange does not remove the KID duty unless the product is meant only for non-retail investors. | same | same, Section I, Q2 (published 20 Nov 2017) | "A manufacturer is not required to draw up a KID for a product listed on a regulated market when they have defined the product as meant only for non-retail investors" |

No ESMA or ČNB page was found that says "US ETFs" in plain words. The AMF ombudsman (2.4–2.6) is the only regulator text found that names US ETFs.

## Q3. Scope and exceptions

| # | Claim | Source URL | Document, date | Verbatim quote |
|---|---|---|---|---|
| 3.1 | PRIIPs protects "retail investors", meaning MiFID II retail clients. | https://eur-lex.europa.eu/legal-content/EN/TXT/HTML/?uri=CELEX:32014R1286 | PRIIPs Art. 4(6) | "‘retail investor’ means: (a) a retail client as defined in point (11) of Article 4 (1) of Directive 2014/65/EU;" |
| 3.2 | A MiFID II retail client is anyone who is not a professional client. | https://eur-lex.europa.eu/legal-content/EN/TXT/HTML/?uri=CELEX:32014L0065 | MiFID II Art. 4(1)(11) | "‘retail client’ means a client who is not a professional client;" |
| 3.3 | Private individuals can ask to be treated as professionals. | same | MiFID II Annex II, II.1 | "Clients other than those mentioned in section I, including public sector bodies, local public authorities, municipalities and private individual investors, may also be allowed to waive some of the protections afforded by the conduct of business rules." |
| 3.4 | Criteria for professional treatment on request (at least two must be met). | same | MiFID II Annex II, II.1 | "In the course of that assessment, as a minimum, two of the following criteria shall be satisfied: — the client has carried out transactions, in significant size, on the relevant market at an average frequency of 10 per quarter over the previous four quarters, — the size of the client’s financial instrument portfolio, defined as including cash deposits and financial instruments exceeds EUR 500 000, — the client works or has worked in the financial sector for at least one year in a professional position, which requires knowledge of the transactions or services envisaged." |
| 3.5 | The request must be made in writing, and the client must accept losing some protections. | same | MiFID II Annex II, II.2 | "they must state in writing to the investment firm that they wish to be treated as a professional client, either generally or in respect of a particular investment service or transaction, or type of transaction or product," |
| 3.6 | A broker confirms that the block applies to non-professional clients only. | https://www.help.saxo/hc/en-us/articles/360048661252-Why-can-t-I-trade-certain-instruments-KID | Saxo A/S Help center, "Why can't I trade certain instruments - KID?", updated June 01, 2026 | "Saxo is not able to facilitate trading in instruments with missing KIDs for non-professional investors" |
| 3.7 | Existing holdings: the AMF ombudsman says a retail investor who bought a US ETF before PRIIPs should still be able to sell it, while new purchases ("subscription") were rightly refused. | https://www.amf-france.org/en/amf-ombudsman/ombudsman-online-diary/latest/application-priips-regulation-what-happens-us-packaged-products-subscribed-regulation-came-force | AMF, 09 March 2023 | "In fact, while institution X was right to prohibit subscription, it seemed to me to be completely abnormal that the sale of the shares of this ETF was refused to Ms H, who in this case already had an open position in this security in her portfolio." |
| 3.8 | Broker practice for instruments without a KID: reduce or close only. | https://www.help.saxo/hc/en-us/articles/360048661252-Why-can-t-I-trade-certain-instruments-KID | Saxo, updated June 01, 2026 | "This instrument has been set to reduce-only. You can reduce or close your holdings but not open new positions" |
| 3.9 | Execution-only route in CZ: see 2.3 (ČNB) and 4.6–4.8 (Fio). | — | — | — |

Getting US ETFs through **options exercise**: **not verified** (no primary source found; see below).

## Q4. Broker confirmations

| # | Claim | Source URL | Document, date | Verbatim quote |
|---|---|---|---|---|
| 4.1 | XTB: does not offer US ETFs because they lack KIDs. | https://www.xtb.com/int/help-center/stocks-and-etfs/adding-a-new-instrument-to-the-offer | XTB Help center (international, EN), "Adding a new instrument to the offer", Updated: 2026-02-03 14:13:37 | "We are unable to offer ETFs from the United States (due to the lack of KIDs documentation), which complies with EU requirements." |
| 4.2 | Caveat for 4.1: the Czech version of the same article does **not** contain that sentence. It only describes how to request an instrument. | https://www.xtb.com/cz/help-center/akcie-a-etf/pridani-noveho-instrumentu-do-nabidky | XTB CZ, "Přidání nového instrumentu do nabídky", Aktualizováno: 2026-06-22 11:21:19 | "Vaši žádost prověří Tým XTB a v případě, že požadovaný finanční instrument splní stanovená kritéria, bude přidán do nabídky." |
| 4.3 | Saxo (EU broker, Denmark): US ETFs are often unavailable because their issuers have no KID. | https://www.help.saxo/hc/en-us/articles/360048661252-Why-can-t-I-trade-certain-instruments-KID | Saxo A/S Help center, updated June 01, 2026; section "US ETF's are often not available, why?" | "For a number of instruments, and mainly for instruments traded in the United States, the issuer has not issued a KID (Key Information Document)." |
| 4.4 | Saxo: EU banks and brokers may not facilitate these trades for non-professional clients. | same | same | "As a result, banks and brokers in the European Union, including Saxo, are no longer allowed to facilitate transactions in these products -often ETFs - for non‑professional clients ." |
| 4.5 | Revolut (Czech help page) offers only ETFs registered in the EU. The page does not state the reason. | https://help.revolut.com/en-CZ/help/wealth/stocks/getting-started-with-etf-s/which-types-of-etf-are-available-in-the-revolut-app/ | Revolut Czechia Help, "Available types of ETFs", no date shown (read via browser; curl got 403) | "We're currently offering non-complex ETFs that are registered in the European Union." |
| 4.6 | **Counter-example, Fio banka (CZ):** said its clients can still invest in US ETFs, citing a ČNB opinion. | https://www.fio.cz/zpravodajstvi/odborne-clanky/238722-americka-burza-jak-investovat-do-indexu-s-p-500 | Fio banka, "Americká burza: Jak investovat do indexu S&P 500?", 7.5.2020, "Aktualizováno 19. 1. 2022" | "Klienti Fio banky tak i nadále mohou investovat do amerických ETF bez omezení." |
| 4.7 | Fio's reasoning (ČNB opinion: execution-only allowed, but no advice or active offer). | same | same | "Na Fio banku dohlíží Česká národní banka, která v tomto směru vydala pro obchodníky relativně vstřícné stanovisko a investorům klasické obchodování amerických ETF nadále umožňuje, i když k nim obchodníci s cennými papíry nemůžou klientům poskytovat poradenství či tato ETF klientům aktivně nabízet." |
| 4.8 | Fio's ETF list (accessed today) still includes SPY, and Fio describes itself as giving access, not offering. | https://www.fio.cz/akcie-investice/etf/vypis-etf?offset=810 and https://www.fio.cz/akcie-investice/etf/vypis-etf | Fio banka, "Výpis ETF", no date | "SPDR S&P 500 ETF SPY Equity State Street Global Advisors" / "Fio banka svým klientům ani dalším osobám nenabízí žádné ETF (ani jiné typy ETP), svým klientům pouze umožňuje přístup na vybrané trhy s cennými papíry, na nichž je možné s některými ETF (a dalšími typy ETP) obchodovat." |

Trading 212 and Interactive Brokers: **not verified** (see below).

## Q5. US shares can be bought; US ETFs cannot

| # | Claim | Source URL | Document, date | Verbatim quote |
|---|---|---|---|---|
| 5.1 | Directly held shares are **not** PRIIPs, so no KID is needed to buy a share such as Apple or Coca-Cola. | https://eur-lex.europa.eu/legal-content/EN/TXT/HTML/?uri=CELEX:32014R1286 | PRIIPs recital 7 | "Assets that are held directly, such as corporate shares or sovereign bonds, are not PRIIPs, and should therefore be excluded from the scope of this Regulation." |
| 5.2 | XTB CZ offers shares from US companies, including Apple. | https://www.xtb.com/cz/akcie | XTB CZ, "Akcie" product page, no date | "Vybírejte z více než 7400 společností z několika zemí, včetně: USA, Polska, Německa, Velké Británie a Česka." (the site menu on the same page lists "ČEZ, Tesla, Amazon, Apple, Netflix") |
| 5.3 | On the same XTB site (international help page), US ETFs are excluded while US exchanges such as NYSE are named as valid when requesting new shares. | https://www.xtb.com/int/help-center/stocks-and-etfs/adding-a-new-instrument-to-the-offer | XTB, Updated: 2026-02-03 | "Stock exchanges where securities are listed (e.g., NYSE, WSE, XETRA)" + row 4.1 |
| 5.4 | Apple is listed on **Nasdaq**, not NYSE. | https://data.sec.gov/submissions/CIK0000320193.json | US SEC EDGAR submissions record, Apple Inc. (read 2026-10-15) | `"name":"Apple Inc.","tickers":["AAPL"],"exchanges":["Nasdaq"]` |
| 5.5 | Coca-Cola is a valid **NYSE** example. | https://data.sec.gov/submissions/CIK0000021344.json | US SEC EDGAR submissions record, Coca-Cola Co (read 2026-10-15); also the cover of its 10-K filed 2026-02-20 (https://www.sec.gov/Archives/edgar/data/21344/000162828026010047/ko-20251231.htm), whose registration table lists Common Stock "KO" on "New York Stock Exchange" (seen in browser, not machine-quoted) | `"name":"COCA COLA CO","tickers":["KO"],"exchanges":["NYSE"]` |

*Interpretation:* no broker page was found that lists Coca-Cola (KO) by name as tradable for Czech retail clients. XTB's CZ instrument search could not be queried automatically. If the copy says "NYSE", pair it with "e.g. Coca-Cola". Apple can only be used as a "Nasdaq" example.

## Q6. Does it depend on the exchange or on the product (domicile / documentation)?

What the sources say:
- The trigger is the **product type plus a missing KID**, not the exchange. PRIIPs attaches to "packaged" products (rows 1.3–1.4) and excludes directly held shares (5.1). Shares on the same US exchanges remain available (5.2–5.3).
- Third-country products are covered when EU retail investors buy them (1.5). Being listed on a regulated market does not remove the duty unless the product is meant only for non-retail investors (2.8).
- Brokers give the reason as the missing KID: XTB "due to the lack of KIDs documentation" (4.1). Saxo says "the issuer has not issued a KID" (4.3). The AMF says US products "not accompanied by the Key Information Document can no longer be marketed" (2.4).
- Saxo adds a second, separate reason that some ETFs "may not be distributable in your country due to local regulations" (same Saxo page).
- *Interpretation:* "US-domiciled" is a proxy. The legal test is whether a PRIIPs KID exists, plus distribution rules. A US ETF whose issuer published a KID would not be blocked by PRIIPs. Saxo says issuers create one only "once a US issuer actively wants to enter the European market". Revolut's own criterion is "registered in the European Union" (4.5).

---

## Not verified / interpretation

**Not verified**
- **Trading 212:** a full scan of its help centre (422 en-us articles via the public Zendesk API, plus de/cs search) found no page about US ETFs, KIDs or PRIIPs. The only PRIIPs mention concerns the German pension account. The "pro client" article lists the MiFID criteria but does not mention ETFs. Third-party sites claim T212 offers only UCITS ETFs to EU clients, but these cannot be cited.
- **Interactive Brokers:** the knowledge-base pages (ibkb.interactivebrokers.com/node/2993 and /node/3324 "PRIIPs Overview") now redirect to a JS search page, and the content could not be read with curl, WebFetch or the browser. Search snippets quote IBKR saying "EEA and UK Retail clients may not purchase the product", but the page itself was not read, so do not use it.
- **Revolut's reason:** the Revolut CZ KID page explains what a KID is but does not mention US ETFs or say why they are excluded. Its CZ page on US stocks could not be found (404).
- **Options exercise** delivering US ETF shares to EU retail clients: only forum and blog sources were found, no primary source.
- **MiFID II product governance** as a cause of US-ETF unavailability: no regulator or broker source makes that link. All cite the PRIIPs KID.
- **Fio today:** Fio's statement is from 2020, updated Jan 2022. SPY is still in its ETF list today, but that list also contains long-closed funds (e.g. "Claymore BulletShares 2011 Corporate Bond ETF"), so being listed does not prove it is tradable today. Current tradability at Fio (or Patria) was not confirmed.
- **ČNB opinion still valid?** The page shows "Platnost od: 22. 10. 2018 do: neurčeno" (valid indefinitely). No later ČNB statement withdrawing it was found, but none was specifically searched for beyond the RS2018-12 page.
- **Pending EU change:** the Retail Investment Strategy package (amendments to PRIIPs) was politically agreed in Dec 2025. Secondary sources say it was not yet in the Official Journal as of Aug 2026. The Council press release returned 403, so its status is unconfirmed, and nothing indicates it removes the KID requirement.

**Interpretation (flagged)**
- There is tension between the Commission guidelines para. (16) (no difference for products "acquired by the retail investor on its own initiative") and the ČNB opinion (execution-only brokers are not bound by Art. 13(1)). Guidelines are non-binding, and so is the ČNB Q&A. In practice most EU brokers block US ETFs, while at least one Czech broker has said it allows them.
- The claim that a US ETF counts as a PRIIP rests on Art. 4(1) and recital 6, and the AMF states it expressly (2.5).

---

## Safe wording

Candidate sentences (fully supported):
1. "Most brokers in the EU, such as XTB, Saxo and Revolut, do not let retail investors buy US-listed ETFs like VOO, SPY or QQQ, because their US issuers do not publish the key information document (KID) that EU rules (PRIIPs) require."
2. "So instead of VOO you will usually buy an EU-registered (UCITS) ETF that tracks the same index, such as the S&P 500, which does have a KID."
3. "This applies to funds, not companies: you can still buy shares of US companies such as Apple (Nasdaq) or Coca-Cola (NYSE)."

What NOT to say:
- Do not say "Czech investors cannot legally buy US ETFs", "it is illegal" or "EU law bans US ETFs". PRIIPs places duties on manufacturers and sellers and has a professional-client exception. The ČNB treats pure execution-only access as outside Art. 13(1), and a Czech broker (Fio) has said its clients can buy US ETFs.
- Do not use "on NYSE" with Apple (Apple is on Nasdaq).
- Do not say that holders of US ETFs must sell them. The AMF ombudsman says existing positions should remain sellable.
