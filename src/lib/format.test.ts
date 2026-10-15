import { describe, expect, it } from "vitest";
import { brokers } from "../data/brokers";
import {
  approxKc,
  eur,
  feePerPurchase,
  formatDate,
  formatNumber,
  kc,
  kcFee,
  pct,
  pctWhole,
} from "./format";
import { amounts } from "./plan";

// Spaces in the output are non-breaking; the tests write them as " ".
const plain = (s: string) => s.replaceAll(" ", " ");

describe("formatNumber", () => {
  it.each([
    [0, 0, "0"],
    [999, 0, "999"],
    [1000, 0, "1 000"],
    [1249, 0, "1 249"],
    [1_762_812, 0, "1 762 812"],
    [7.5, 2, "7,50"],
    [-19.44, 2, "-19,44"],
    [-0.001, 2, "0,00"],
  ])("%d with %d decimals → %s", (n, d, out) => {
    expect(plain(formatNumber(n, d))).toBe(out);
  });
});

describe("pct", () => {
  it.each([
    [15.33, "15,33 %"],
    [0.07, "0,07 %"],
    [0.3, "0,30 %"],
    [4.0, "4,00 %"],
    [21.16, "21,16 %"],
  ])("%d → %s", (n, out) => expect(plain(pct(n))).toBe(out));

  it("rounds to two decimals", () => {
    expect(plain(pct(0.0945))).toBe("0,09 %");
  });
});

describe("kc", () => {
  it("prints whole crowns with grouped thousands", () => {
    expect(plain(kc(5000))).toBe("5 000 Kč");
    expect(plain(kc(10000))).toBe("10 000 Kč");
    expect(plain(kc(4999.6))).toBe("5 000 Kč");
  });

  it("keeps the unit on the same line", () => {
    expect(kc(1000)).toBe("1 000 Kč");
  });
});

describe("kcFee", () => {
  it("shows haléře only when the fee has them", () => {
    expect(plain(kcFee(7.5))).toBe("7,50 Kč");
    expect(plain(kcFee(15))).toBe("15 Kč");
  });

  it("takes the decimals from the target while counting", () => {
    expect(plain(kcFee(11.2, 15))).toBe("11 Kč");
    expect(plain(kcFee(9, 7.5))).toBe("9,00 Kč");
  });
});

describe("feePerPurchase", () => {
  it.each([
    [1000, 0.15, 1.5],
    [3000, 0.15, 4.5],
    [5000, 0.15, 7.5],
    [10000, 0.15, 15],
    [1000, 0.5, 5],
    [5000, 0.5, 25],
    [10000, 0.5, 50],
  ])("%d Kč at %d % → %d Kč", (amount, percent, fee) => {
    expect(feePerPurchase(amount, percent)).toBe(fee);
  });

  it("has no float noise for any amount and broker", () => {
    for (const amount of amounts)
      for (const b of Object.values(brokers)) {
        const fee = feePerPurchase(amount, b.fxFee.value);
        expect(fee).toBe(Number(fee.toFixed(2)));
      }
  });

  it("is zero at zero commission", () => {
    expect(feePerPurchase(5000, 0)).toBe(0);
  });
});

describe("formatDate", () => {
  it("prints a Czech date without leading zeros", () => {
    expect(plain(formatDate("2026-09-30"))).toBe("30. 9. 2026");
    expect(plain(formatDate("2026-01-05"))).toBe("5. 1. 2026");
  });
});

describe("approxKc", () => {
  it.each([
    [1_322_800, "cca 1,32 mil. Kč"],
    [1_000_000, "cca 1,00 mil. Kč"],
    [999_400, "cca 999 000 Kč"],
    [229_600, "cca 230 000 Kč"],
    [722_800, "cca 723 000 Kč"],
  ])("%d → %s", (n, out) => expect(plain(approxKc(n))).toBe(out));
});

describe("pctWhole and eur", () => {
  it("round to whole units", () => {
    expect(plain(pctWhole(68.01))).toBe("68 %");
    expect(plain(pctWhole(15))).toBe("15 %");
    expect(plain(eur(100_000))).toBe("100 000 €");
  });
});
