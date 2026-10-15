import type { IndexId } from "./indexes";
import { sources as s } from "./sources";
import { type Fact, fact } from "./types";

// Trading 212 and XTB, the two brokers named on the page (decision 14;
// Revolut is left out until a fund is verified there). Rows:
// docs/research/brokers.md.

export type BrokerId = "t212" | "xtb";

export type Broker = {
  id: BrokerId;
  name: string;
  /** Commission on an ETF buy, %; XTB's 0 % holds up to €100,000 a month. */
  commission: Fact<number>;
  /** Currency-conversion fee per purchase, % of the amount. */
  fxFee: Fact<number>;
  /** Whether each chosen EU fund is listed. */
  available: Record<IndexId, Fact<boolean>>;
};

const t212: Broker = {
  id: "t212",
  name: "Trading 212",
  commission: fact(0, s.t212Terms, "Obchodní provize … Bezplatně"),
  fxFee: fact(0.15, s.t212Terms, "Ani o víkendu nezaplatíš více než 0,15 %."),
  available: {
    sp500: fact(
      true,
      s.t212Instruments,
      "SXR8 | iShares Core S&P 500 (Acc) | EUR | IE00B5BMR087 | ETF | Deutsche Börse Xetra",
    ),
    ndx: fact(
      true,
      s.t212Instruments,
      "SXRV | iShares NASDAQ 100 (Acc) | EUR | IE00B53SZB19 | ETF | Deutsche Börse Xetra",
    ),
    world: fact(
      true,
      s.t212Instruments,
      "EUNL | iShares Core MSCI World (Acc) | EUR | IE00B4L5Y983 | ETF | Deutsche Börse Xetra",
    ),
  },
};

const xtb: Broker = {
  id: "xtb",
  name: "XTB",
  commission: fact(
    0,
    s.xtbFees,
    "0%, minimálně 0 EUR 0.2%, minimálně 10 EUR 0,5%",
  ),
  fxFee: fact(
    0.5,
    s.xtbFees,
    "Všechny měnové konverze související s obchodováním a korporátní události v rámci OMI a Frakčních práv podléhají 0,5% přirážce na vrcholu kurzu",
  ),
  // XTB shows the ISIN only for the S&P 500 fund; the other two are
  // matched by fund name and share class.
  available: {
    sp500: fact(
      true,
      s.xtbSp500,
      "Na burze Xetra se obchoduje pod tickerem SXR8 a jeho identifikátory jsou ISIN IE00B5BMR087 a WKN A0YEDG.",
    ),
    ndx: fact(true, s.xtbNdx, "iShares NASDAQ 100 UCITS ETF (Acc EUR)"),
    world: fact(
      true,
      s.xtbWorld,
      "iShares Core MSCI World UCITS ETF (Acc EUR)",
    ),
  },
};

export const brokers: Record<BrokerId, Broker> = { t212, xtb };

/** XTB's free-commission limit per month, EUR. */
export const xtbFreeMonthlyEur = fact(
  100_000,
  s.xtbAccounts,
  "Při měsíčním obj. do 100 000 EUR (pak popl. 0,2 %, min. 10 EUR).",
);
