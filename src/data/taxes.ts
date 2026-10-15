import { sources as s } from "./sources";
import { fact } from "./types";

// Czech tax rules for the e-mail's tax section (decision 2), law in force
// 1 Aug – 31 Dec 2026. Rows: docs/research/taxes.md.

export const taxes = {
  /** § 4 odst. 1 písm. u): a sale is tax-free after more than this many years. */
  timeTestYears: fact(
    3,
    s.zdp,
    "u) příjem z úplatného převodu cenného papíru, přesáhne-li doba mezi nabytím a úplatným převodem tohoto cenného papíru při jeho úplatném převodu dobu 3 let",
  ),
  /** § 4 odst. 1 písm. t): yearly gross sale proceeds that stay tax-free, Kč. */
  yearlySalesLimitCzk: fact(
    100_000,
    s.zdp,
    "t) příjmy z úplatného převodu cenných papírů, pokud jejich úhrn u poplatníka nepřesáhne ve zdaňovacím období částku 100000 Kč",
  ),
  /** § 16 odst. 1: the base rate, %. */
  rateBase: fact(
    15,
    s.zdp,
    "a) 15 % pro část základu daně do 36násobku průměrné mzdy a",
  ),
  /** § 16 odst. 1: the higher rate, %. */
  rateHigh: fact(
    23,
    s.zdp,
    "b) 23 % pro část základu daně přesahující 36násobek průměrné mzdy.",
  ),
  /** Where the higher rate starts in 2026, Kč a year. */
  rateHighFrom2026Czk: fact(
    1_762_812,
    s.fsGeneral,
    "1 762 812 Kč (36 x 48 967)",
  ),
};
