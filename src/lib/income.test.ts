import { describe, expect, it } from "vitest";
import { indexes } from "../data/indexes";
import { approxKc } from "./format";
import { income } from "./income";
import { amounts, years } from "./plan";

const plain = (s: string) => s.replaceAll("\u00a0", " ");

describe("income", () => {
  it("5 000 Kč a month at 15.33 % for 10 years is cca 1,32 mil. Kč", () => {
    const { total } = income(5000, 15.33, 10);
    expect(total).toBeGreaterThan(1_315_000);
    expect(total).toBeLessThan(1_325_000);
    expect(plain(approxKc(total))).toBe("cca 1,32 mil. Kč");
  });

  it("counts what was put in and the gain", () => {
    const r = income(5000, 15.33, 10);
    expect(r.paidIn).toBe(600_000);
    expect(r.gain).toBeCloseTo(r.total - 600_000, 6);
  });

  it("at 0 % returns what was put in", () => {
    expect(income(1000, 0, 10)).toEqual({
      total: 120_000,
      paidIn: 120_000,
      gain: 0,
    });
  });

  it("a monthly payment of 1 for 1 year at 12 % matches the annuity formula", () => {
    const i = 1.12 ** (1 / 12) - 1;
    expect(income(1, 12, 1).total).toBeCloseTo(((1 + i) ** 12 - 1) / i, 10);
  });

  it("grows with the amount and the rate for every tap", () => {
    for (const index of Object.values(indexes)) {
      const totals = amounts.map(
        (a) => income(a, index.return10y.value, years).total,
      );
      expect(totals).toEqual([...totals].sort((a, b) => a - b));
      expect(totals[0]).toBeGreaterThan(amounts[0] * years * 12);
    }
  });
});
