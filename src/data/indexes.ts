import { sources as s } from "./sources";
import { type Fact, fact } from "./types";

// The three indexes on the page, each with its US funds and the one EU
// fund chosen for it (decisions 6, 7, 8, 30). Percentages are stored as
// percent (15.33 means 15.33 %). Rows: docs/research/returns.md,
// holdings.md, pairs.md.

export type IndexId = "sp500" | "ndx" | "world";

export type UsFund = {
  ticker: string;
  /** Where the US fund is listed (decision 12). */
  exchange: Fact<"NYSE Arca" | "Nasdaq">;
  /** Expense ratio, % a year. */
  ter: Fact<number>;
};

export type Company = { name: string; weight: Fact<number> };

export type MarketIndex = {
  id: IndexId;
  /** Chip and table label. */
  label: string;
  /** Longer name where "Svět" needs its index named. */
  longLabel: string;
  usFunds: UsFund[];
  /** The US fund the EU fund's TER is compared with on the match card. */
  compareWith: string;
  euFund: {
    /** Full name as brokers list it (decision 28). */
    name: string;
    /** The name without "UCITS ETF" and share class, for the pairs list. */
    shortName: string;
    isin: Fact<string>;
    /** Total expense ratio, % a year. */
    ter: Fact<number>;
  };
  /** 10-year annualised return in USD, % a year. */
  return10y: Fact<number>;
  /** What the return includes, in page wording (decision 4). */
  returnType: string;
  /** Constituents (securities) in the index, as each provider counts them;
   * a company with two share classes counts twice. */
  constituents: Fact<number>;
  /** Share of the index in US companies, %; null where not published. */
  usShare: Fact<number> | null;
  /** Nasdaq-100 only: its technology share (decision 8). */
  techShare?: Fact<number>;
  top5: Company[];
};

const sp500: MarketIndex = {
  id: "sp500",
  label: "S&P 500",
  longLabel: "S&P 500",
  usFunds: [
    {
      ticker: "VOO",
      exchange: fact(
        "NYSE Arca",
        s.vooProspectus,
        "The Fund's ETF Shares are listed for trading on NYSE Arca",
      ),
      ter: fact(0.03, s.vooFactsheet, "Expense ratio 1 0.03%"),
    },
    {
      ticker: "SPY",
      exchange: fact(
        "NYSE Arca",
        s.spyProspectus,
        "NYSE Arca, Inc. under the symbol",
      ),
      ter: fact(0.0945, s.spyFactsheet, "Net Expense Ratio (%) 0.0945"),
    },
    {
      ticker: "IVV",
      exchange: fact(
        "NYSE Arca",
        s.ivvProspectus,
        "iShares Core S&P 500 ETF IVV | NYSE Arca",
      ),
      ter: fact(
        0.03,
        s.ivvPage,
        "Expense Ratio: Fees as stated in the prospectus 0.03%",
      ),
    },
  ],
  compareWith: "VOO",
  euFund: {
    name: "iShares Core S&P 500 UCITS ETF (Acc)",
    shortName: "iShares Core S&P 500",
    isin: fact("IE00B5BMR087", s.ishSp500, "ISIN IE00B5BMR087"),
    ter: fact(0.07, s.ishSp500, "Total Expense Ratio 0.07%"),
  },
  // Total return (gross) from S&P DJI's data feed; the factsheet has
  // price return only.
  return10y: fact(15.33, s.spFeed, '"tenYearReturn":15.332528551796454'),
  returnType: "celkový výnos včetně dividend, před daní z dividend",
  constituents: fact(503, s.spFactsheet, "NUMBER OF CONSTITUENTS 503"),
  usShare: fact(100, s.spFactsheet, "United States 503 68,448,592.21 100"),
  // The feed gives weights as fractions of 1; ×100 is a unit change
  // (decision 14).
  top5: [
    {
      name: "Nvidia",
      weight: fact(
        8.38,
        s.spFeed,
        '"indexWeight":0.0838272625120269503,"instrumentKey":"27016","instrumentName":"Nvidia Corp"',
      ),
    },
    {
      name: "Apple",
      weight: fact(
        7.37,
        s.spFeed,
        '"indexWeight":0.07371601745744708571,"instrumentKey":"5080","instrumentName":"Apple Inc."',
      ),
    },
    {
      name: "Microsoft",
      weight: fact(
        5.78,
        s.spFeed,
        '"indexWeight":0.05776607805391440041,"instrumentKey":"4844","instrumentName":"Microsoft Corp"',
      ),
    },
    {
      name: "Amazon",
      weight: fact(
        3.71,
        s.spFeed,
        '"indexWeight":0.03709259281171551077,"instrumentKey":"22480","instrumentName":"Amazon.com Inc"',
      ),
    },
    {
      name: "Alphabet (A)",
      weight: fact(
        3.06,
        s.spFeed,
        '"indexWeight":0.03062396248365077191,"instrumentKey":"41032","instrumentName":"Alphabet Inc A"',
      ),
    },
  ],
};

const ndx: MarketIndex = {
  id: "ndx",
  label: "Nasdaq-100",
  longLabel: "Nasdaq-100",
  usFunds: [
    {
      ticker: "QQQ",
      exchange: fact(
        "Nasdaq",
        s.qqqProspectus,
        "Shares of the Trust are listed on The Nasdaq Stock Market LLC",
      ),
      ter: fact(0.18, s.qqqPage, "Invesco QQQ’s total expense ratio is 0.18%."),
    },
  ],
  compareWith: "QQQ",
  euFund: {
    name: "iShares NASDAQ 100 UCITS ETF",
    shortName: "iShares NASDAQ 100",
    isin: fact("IE00B53SZB19", s.ishNdx, "ISIN IE00B53SZB19"),
    ter: fact(0.3, s.ishNdx, "Total Expense Ratio 0.30%"),
  },
  return10y: fact(
    21.16,
    s.xndxFactsheet,
    "10 Year 24.08% 10 Year 581.57% 10 Year 21.16%",
  ),
  returnType: "celkový výnos včetně dividend",
  // 100 companies, 101 securities (Alphabet has two share classes): the
  // page counts securities, as it does for the other two indexes.
  constituents: fact(101, s.ndxFactsheet, "Securities: … 101"),
  usShare: null,
  techShare: fact(68.01, s.ndxFactsheet, "Technology 68.01% 47"),
  top5: [
    {
      name: "Nvidia",
      weight: fact(8.36, s.ndxFactsheet, "NVDA NVIDIA CORPORATION 8.36%"),
    },
    {
      name: "Apple",
      weight: fact(7.38, s.ndxFactsheet, "AAPL APPLE INC. 7.38%"),
    },
    {
      name: "Microsoft",
      weight: fact(5.78, s.ndxFactsheet, "MSFT MICROSOFT CORP 5.78%"),
    },
    {
      name: "Micron",
      weight: fact(5.04, s.ndxFactsheet, "MU MICRON TECHNOLOGY 5.04%"),
    },
    {
      name: "AMD",
      weight: fact(4.19, s.ndxFactsheet, "AMD ADV MICRO DEVICES 4.19%"),
    },
  ],
};

const world: MarketIndex = {
  id: "world",
  label: "Svět",
  longLabel: "Svět (MSCI World)",
  usFunds: [
    {
      ticker: "URTH",
      exchange: fact(
        "NYSE Arca",
        s.urthProspectus,
        "Stock Exchange: NYSE Arca",
      ),
      ter: fact(
        0.24,
        s.urthPage,
        "Expense Ratio: Fees as stated in the prospectus 0.24%",
      ),
    },
  ],
  compareWith: "URTH",
  euFund: {
    name: "iShares Core MSCI World UCITS ETF (Acc)",
    shortName: "iShares Core MSCI World",
    isin: fact("IE00B4L5Y983", s.ishWorld, "ISIN IE00B4L5Y983"),
    ter: fact(0.2, s.ishWorld, "Total Expense Ratio 0.20%"),
  },
  // Net total return: the factsheet's 10 Yr column.
  return10y: fact(
    12.81,
    s.worldFactsheet,
    "MSCI World -1.19 1.88 15.24 11.75 21.40 11.89 12.81 7.46",
  ),
  returnType: "celkový výnos včetně dividend, po srážkové dani z dividend",
  constituents: fact(1249, s.worldFactsheet, "With 1,249 constituents"),
  usShare: fact(72.94, s.worldFactsheet, "United States 72.94%"),
  top5: [
    {
      name: "Nvidia",
      weight: fact(5.81, s.worldFactsheet, "NVIDIA 5,250.46 5.81 Info Tech"),
    },
    {
      name: "Apple",
      weight: fact(5.41, s.worldFactsheet, "APPLE 4,891.18 5.41 Info Tech"),
    },
    {
      name: "Microsoft",
      weight: fact(
        4.0,
        s.worldFactsheet,
        "MICROSOFT CORP 3,619.54 4.00 Info Tech",
      ),
    },
    {
      name: "Amazon",
      weight: fact(
        2.67,
        s.worldFactsheet,
        "AMAZON.COM 2,412.12 2.67 Cons Discr",
      ),
    },
    {
      name: "Alphabet (A)",
      weight: fact(
        2.23,
        s.worldFactsheet,
        "ALPHABET A 2,018.89 2.23 Comm Srvcs",
      ),
    },
  ],
};

export const indexes: Record<IndexId, MarketIndex> = { sp500, ndx, world };

/** The US fund named next to the EU fund's TER (match card, FAQ). */
export const comparedFund = (index: MarketIndex) =>
  index.usFunds.find((f) => f.ticker === index.compareWith) ?? index.usFunds[0];

/** The bad year the e-mail names (decision 4): the S&P 500 price return
 * in the fourth column of the factsheet's calendar-year row. */
export const sp500BadYear = {
  year: fact(
    2022,
    s.spFactsheet,
    "2025 2024 2023 2022 2021 2020 2019 2018 2017 2016",
  ),
  priceReturn: fact(
    -19.44,
    s.spFactsheet,
    "16.39% 23.31% 24.23% -19.44% 26.89% 16.26% 28.88% -6.24% 19.42% 9.54%",
  ),
};
