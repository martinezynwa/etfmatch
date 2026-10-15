import { readdirSync, readFileSync } from "node:fs";
import { join } from "node:path";
import { describe, expect, it } from "vitest";
import * as brokers from "./brokers";
import * as indexes from "./indexes";
import { sources } from "./sources";
import * as taxes from "./taxes";
import type { Fact } from "./types";

const isFact = (x: unknown): x is Fact<unknown> =>
  typeof x === "object" &&
  x !== null &&
  "value" in x &&
  "source" in x &&
  "quote" in x;

function collect(node: unknown, path: string, out: [string, Fact<unknown>][]) {
  if (isFact(node)) out.push([path, node]);
  else if (typeof node === "object" && node !== null)
    for (const [key, child] of Object.entries(node))
      collect(child, `${path}.${key}`, out);
  return out;
}

const facts = collect({ indexes, brokers, taxes }, "data", []);

// Markdown tables escape "|" as "\|"; quotes are stored unescaped.
const researchDir = join(process.cwd(), "docs/research");
const research = readdirSync(researchDir)
  .filter((f) => f.endsWith(".md"))
  .map((f) => readFileSync(join(researchDir, f), "utf8"))
  .join("\n")
  .replaceAll("\\|", "|");

const isoDate = /^\d{4}-\d{2}-\d{2}$/;

describe("src/data", () => {
  it("finds the facts", () => {
    expect(facts.length).toBeGreaterThan(40);
  });

  it.each(
    Object.entries(sources),
  )("source %s has a URL and dates", (_, src) => {
    expect(src.url).toMatch(/^https:\/\//);
    expect(src.accessed).toMatch(isoDate);
    if (src.asOf !== null) expect(src.asOf).toMatch(isoDate);
    expect(src.title).not.toBe("");
  });

  it.each(facts)("%s has a value, a known source and a quote", (_, f) => {
    expect(f.value).not.toBeUndefined();
    expect(Object.values(sources)).toContain(f.source);
    expect(f.quote.trim()).not.toBe("");
  });

  // " … " joins two parts of a quote that sit apart in the source.
  it.each(facts)("%s quote is in docs/research/", (_, f) => {
    for (const part of f.quote.split(" … ")) expect(research).toContain(part);
  });

  // The FAQ's fee answer (decision 16) says the EU Nasdaq-100 fund costs
  // more than its US fund and the EU World fund less.
  it("keeps the FAQ fee answer true", () => {
    const ter = (i: indexes.MarketIndex) => [
      i.euFund.ter.value,
      indexes.comparedFund(i).ter.value,
    ];
    const [ndxEu, ndxUs] = ter(indexes.indexes.ndx);
    const [worldEu, worldUs] = ter(indexes.indexes.world);
    expect(ndxEu).toBeGreaterThan(ndxUs);
    expect(worldEu).toBeLessThan(worldUs);
  });
});
