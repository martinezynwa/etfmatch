// Czech number formatting for the page. Written by hand instead of
// toLocaleString, so server and browser always print the same string:
// decimal comma, a non-breaking space between thousands and before the unit.

const nbsp = " ";

export function formatNumber(n: number, decimals = 0) {
  const [whole, fraction] = Math.abs(n).toFixed(decimals).split(".");
  const grouped = whole.replace(/\B(?=(\d{3})+(?!\d))/g, nbsp);
  const sign = n < 0 && Number(n.toFixed(decimals)) !== 0 ? "-" : "";
  return sign + grouped + (fraction ? `,${fraction}` : "");
}

/** 15.33 → "15,33 %". Values are stored as percent (types.ts). */
export const pct = (n: number) => `${formatNumber(n, 2)}${nbsp}%`;

/** 5000 → "5 000 Kč". */
export const kc = (n: number, decimals = 0) =>
  `${formatNumber(n, decimals)}${nbsp}Kč`;

/** A rounded amount for the income illustration: 1 322 800 → "cca 1,32
 * mil. Kč", 229 600 → "cca 230 000 Kč". */
export function approxKc(n: number) {
  const text =
    Math.abs(n) >= 1_000_000
      ? `${formatNumber(n / 1_000_000, 2)}${nbsp}mil.${nbsp}Kč`
      : kc(Math.round(n / 1000) * 1000);
  return `cca${nbsp}${text}`;
}

/** A fee in Kč: whole crowns stay whole, otherwise two decimals. The
 * target decides, so a count from 7,50 to 15 keeps its width. */
export const kcFee = (n: number, target = n) =>
  kc(n, Number.isInteger(target) ? 0 : 2);

/** A fee of `percent` % on one purchase of `amount` Kč, rounded to haléře. */
export const feePerPurchase = (amount: number, percent: number) =>
  Math.round(amount * percent) / 100;

/** "2026-09-30" → "30. 9. 2026". */
export function formatDate(iso: string) {
  const [y, m, d] = iso.split("-").map(Number);
  return [`${d}.`, `${m}.`, y].join(nbsp);
}

/** 68.01 → "68 %": a share where decimals would add noise. */
export const pctWhole = (n: number) => `${formatNumber(n)}${nbsp}%`;

/** 100000 → "100 000 €". */
export const eur = (n: number) => `${formatNumber(n)}${nbsp}€`;
