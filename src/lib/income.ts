// The e-mail's income illustration (decision 4): a monthly amount put in
// for a number of years, growing every year at the index's 10-year
// average. An illustration, not a backtest: no month-by-month history
// was collected.

export type Income = {
  /** What the purchases would be worth at the end, Kč. */
  total: number;
  /** What was put in, Kč. */
  paidIn: number;
  /** total − paidIn, Kč. */
  gain: number;
};

/** `monthly` Kč at the end of each month for `years` years, the yearly
 * average `yearlyPct` (%) turned into the equivalent monthly rate. */
export function income(
  monthly: number,
  yearlyPct: number,
  years: number,
): Income {
  const months = years * 12;
  const paidIn = monthly * months;
  const rate = (1 + yearlyPct / 100) ** (1 / 12) - 1;
  const total =
    rate === 0 ? paidIn : (monthly * ((1 + rate) ** months - 1)) / rate;
  return { total, paidIn, gain: total - paidIn };
}
