import type { Source } from "./types";

// The documents behind src/data/. Rows, quotes and how each one was
// checked are in docs/research/ (file named on each group).

const accessed = "2026-10-15";

export const sources = {
  // Index providers (docs/research/returns.md, holdings.md)
  spFeed: {
    title: "S&P DJI, data indexu S&P 500",
    url: "https://www.spglobal.com/spdji/en/util/redesign/index-data/get-performance-data-for-datawidget-redesign.dot?indexId=340&language_id=1",
    asOf: "2026-09-30",
    accessed,
  },
  spFactsheet: {
    title: "S&P 500 factsheet",
    url: "https://www.spglobal.com/spdji/en/idsenhancedfactsheet/file.pdf?calcFrequency=M&force_download=true&hostIdentifier=48190c8c-42c4-46af-8d1a-0cd5db894797&languageId=1&indexId=340",
    asOf: "2026-09-30",
    accessed,
  },
  ndxFactsheet: {
    title: "Nasdaq-100 factsheet",
    url: "https://indexes.nasdaqomx.com/docs/FS_NDX.pdf",
    asOf: "2026-09-30",
    accessed,
  },
  xndxFactsheet: {
    title: "Nasdaq-100 Total Return factsheet",
    url: "https://indexes.nasdaqomx.com/docs/FS_XNDX.pdf",
    asOf: "2026-09-30",
    accessed,
  },
  worldFactsheet: {
    title: "MSCI World Index (USD) factsheet",
    url: "https://www.msci.com/documents/10199/4db922ce-68d2-446d-2f9e-4ed408a9db29",
    asOf: "2026-09-30",
    accessed,
  },

  // EU funds (docs/research/pairs.md)
  ishSp500: {
    title: "iShares Core S&P 500 UCITS ETF, stránka fondu",
    url: "https://www.ishares.com/uk/individual/en/products/253743/ishares-sp-500-b-ucits-etf-acc-fund?switchLocale=y&siteEntryPassthrough=true",
    asOf: "2026-10-14",
    accessed,
  },
  ishNdx: {
    title: "iShares NASDAQ 100 UCITS ETF, stránka fondu",
    url: "https://www.ishares.com/uk/individual/en/products/253741/ishares-nasdaq-100-ucits-etf?switchLocale=y&siteEntryPassthrough=true",
    asOf: "2026-10-14",
    accessed,
  },
  ishWorld: {
    title: "iShares Core MSCI World UCITS ETF, stránka fondu",
    url: "https://www.ishares.com/uk/individual/en/products/251882/ishares-msci-world-ucits-etf-acc-fund?switchLocale=y&siteEntryPassthrough=true",
    asOf: "2026-10-14",
    accessed,
  },

  // US funds (docs/research/pairs.md)
  vooFactsheet: {
    title: "Vanguard S&P 500 ETF (VOO), fact sheet",
    url: "https://fund-docs.vanguard.com/F0968.pdf",
    asOf: "2026-06-30",
    accessed,
  },
  vooProspectus: {
    title: "Vanguard S&P 500 ETF, Summary Prospectus (SEC)",
    url: "https://www.sec.gov/Archives/edgar/data/36405/000003640526000183/f44783d1.htm",
    asOf: "2026-04-28",
    accessed,
  },
  spyFactsheet: {
    title: "SPDR S&P 500 ETF Trust (SPY), fact sheet",
    url: "https://www.ssga.com/us/en/intermediary/library-content/products/factsheets/etfs/us/factsheet-us-en-spy.pdf",
    asOf: "2026-06-30",
    accessed,
  },
  spyProspectus: {
    title: "SPDR S&P 500 ETF Trust, Prospectus (SEC)",
    url: "https://www.sec.gov/Archives/edgar/data/884394/000119312526022316/d77353d485bpos.htm",
    asOf: "2026-01-26",
    accessed,
  },
  ivvPage: {
    title: "iShares Core S&P 500 ETF (IVV)",
    url: "https://www.ishares.com/us/products/239726/ishares-core-sp-500-etf",
    asOf: "2026-10-14",
    accessed,
  },
  ivvProspectus: {
    title: "iShares Core S&P 500 ETF, Summary Prospectus (SEC)",
    url: "https://www.sec.gov/Archives/edgar/data/1100663/000119312526327930/d113852d497k.htm",
    asOf: "2026-07-31",
    accessed,
  },
  qqqPage: {
    title: "Invesco QQQ ETF",
    url: "https://www.invesco.com/qqq-etf/en/home.html",
    asOf: "2026-06-30",
    accessed,
  },
  qqqProspectus: {
    title: "Invesco QQQ Trust, Prospectus (SEC)",
    url: "https://www.sec.gov/Archives/edgar/data/1067839/000110465925123273/tm2529177d1_485bpos.htm",
    asOf: "2025-12-22",
    accessed,
  },
  urthPage: {
    title: "iShares MSCI World ETF (URTH)",
    url: "https://www.ishares.com/us/products/239696/ishares-msci-world-etf",
    asOf: "2026-10-14",
    accessed,
  },
  urthProspectus: {
    title: "iShares MSCI World ETF, Summary Prospectus (SEC)",
    url: "https://www.sec.gov/Archives/edgar/data/930667/000119312525336654/d72128d497k.htm",
    asOf: "2025-12-30",
    accessed,
  },

  // Brokers (docs/research/brokers.md)
  t212Terms: {
    title: "Trading 212, Obchodní podmínky pro Invest účty",
    url: "https://www.trading212.com/cs/terms/invest",
    asOf: null,
    accessed,
  },
  t212Instruments: {
    title: "Trading 212, seznam nástrojů",
    url: "https://www.trading212.com/cs/trading-instruments/invest",
    asOf: null,
    accessed,
  },
  xtbFees: {
    title: "XTB, Tabulka poplatků a provizí",
    url: "https://www.xtb.com/cz/soubory/tabulkapoplatkuaprovizi30092026.pdf",
    asOf: "2026-09-30",
    accessed,
  },
  xtbAccounts: {
    title: "XTB, Typy účtů a poplatky",
    url: "https://www.xtb.com/cz/ucet-a-poplatky",
    asOf: "2026-09-30",
    accessed,
  },
  xtbSp500: {
    title: "XTB, iShares Core S&P 500 UCITS ETF (Acc EUR)",
    url: "https://www.xtb.com/cz/etf/ishares-core-s-p-500-ucits-acc-eur",
    asOf: null,
    accessed,
  },
  xtbNdx: {
    title: "XTB, iShares NASDAQ 100 UCITS ETF (Acc EUR)",
    url: "https://www.xtb.com/cz/etf/ishares-nasdaq-100-ucits-acc-eur-sxrv",
    asOf: null,
    accessed,
  },
  xtbWorld: {
    title: "XTB, iShares Core MSCI World UCITS ETF (Acc EUR)",
    url: "https://www.xtb.com/cz/etf/ishares-core-msci-world-ucits-acc-eur",
    asOf: null,
    accessed,
  },

  // Czech taxes (docs/research/taxes.md)
  zdp: {
    title: "Zákon o daních z příjmů (586/1992 Sb.)",
    url: "https://www.zakonyprolidi.cz/cs/1992-586",
    asOf: "2026-08-01",
    accessed,
  },
  fsGeneral: {
    title: "Finanční správa, Obecné informace (daň z příjmů)",
    url: "https://financnisprava.gov.cz/cs/dane/dane/dan-z-prijmu/zamestnanci-zamestnavatele/obecne-informace",
    asOf: null,
    accessed,
  },
} satisfies Record<string, Source>;
