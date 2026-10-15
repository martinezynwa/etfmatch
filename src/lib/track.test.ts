import { afterEach, describe, expect, it, vi } from "vitest";
import { halfInView, payload, track, variantFrom, visitProps } from "./track";

const adA =
  "?utm_source=meta&utm_medium=paid_social&utm_campaign=etf-match&utm_content=ad-a";

describe("variantFrom", () => {
  it.each(["ad-a", "ad-b"] as const)("%s is its own variant", (v) => {
    expect(variantFrom(v)).toBe(v);
  });

  it.each([null, "", "ad-c", "AD-A"])("%j is none", (v) => {
    expect(variantFrom(v)).toBe("none");
  });
});

describe("visitProps", () => {
  it("reads the variant and the UTMs of the ad's link", () => {
    expect(visitProps(adA, 375)).toEqual({
      variant: "ad-a",
      utm_source: "meta",
      utm_medium: "paid_social",
      utm_campaign: "etf-match",
      device: "mobile",
    });
  });

  it("a visit without UTMs is variant none, UTMs null", () => {
    expect(visitProps("", 1280)).toEqual({
      variant: "none",
      utm_source: null,
      utm_medium: null,
      utm_campaign: null,
      device: "desktop",
    });
  });

  it("767 px is mobile, 768 px desktop", () => {
    expect(visitProps("", 767).device).toBe("mobile");
    expect(visitProps("", 768).device).toBe("desktop");
  });
});

describe("payload", () => {
  const visit = visitProps("?utm_content=ad-b", 375);

  it("carries the visit and the event's props", () => {
    expect(
      payload<"form_submitted">(visit, { index: "ndx", amount: 3000 }),
    ).toEqual({ ...visit, index: "ndx", amount: 3000 });
  });

  it("form_started adds nothing to the visit", () => {
    expect(payload<"form_started">(visit, {})).toEqual(visit);
  });
});

describe("track", () => {
  afterEach(() => {
    vi.unstubAllGlobals();
    vi.restoreAllMocks();
  });

  it("console-logs the event with the visit read from the browser", () => {
    vi.stubGlobal("window", { location: { search: adA }, innerWidth: 375 });
    const log = vi.spyOn(console, "log").mockImplementation(() => {});
    track("cta_clicked", { location: "match_card" });
    expect(log).toHaveBeenCalledWith("[track]", "cta_clicked", {
      ...visitProps(adA, 375),
      location: "match_card",
    });
  });
});

describe("halfInView", () => {
  it("a short block needs half of itself visible", () => {
    expect(halfInView(400, 199, 667)).toBe(false);
    expect(halfInView(400, 200, 667)).toBe(true);
  });

  it("a block taller than the screen needs half the screen", () => {
    expect(halfInView(1600, 333, 667)).toBe(false);
    expect(halfInView(1600, 334, 667)).toBe(true);
  });
});
