"use client";

import { type ReactNode, useRef } from "react";
import { cs } from "@/copy/cs";
import type { MarketIndex } from "@/data/indexes";
import type { Fact, Source } from "@/data/types";
import { formatNumber, pct } from "@/lib/format";
import type { Amount } from "@/lib/plan";
import { track } from "@/lib/track";
import { CtaLink } from "./CtaLink";
import { CountUp, Swap } from "./motion";
import { SourceGroups } from "./SourceLink";
import { useSeenOnce } from "./useSeenOnce";

const copy = cs.match;
const titleId = "match-title";

// Module-level, so CountUp gets the same function every render.
const whole = (n: number) => formatNumber(n);

const uniqueSources = (...facts: Fact<unknown>[]) => [
  ...new Set(facts.map((f) => f.source)),
];

// The answer to the taps, in the order of decision 37, thinned by
// decision 46: the fees and the brokers are in the e-mail only. Rendered
// inside the Planner; no ISIN here (it is in the e-mail). Sends
// match_viewed once, with the plan shown at that moment.
export function MatchCard({
  index,
  amount,
  askId,
}: {
  index: MarketIndex;
  amount: Amount;
  askId: string;
}) {
  const ref = useRef<HTMLElement>(null);
  useSeenOnce(ref, () => track("match_viewed", { index: index.id, amount }));
  const maxWeight = Math.max(...index.top5.map((c) => c.weight.value));

  const sourceGroups: [string, Source[]][] = [
    [copy.sourceGroups.return, uniqueSources(index.return10y)],
    [
      copy.sourceGroups.companies,
      uniqueSources(...index.top5.map((c) => c.weight), index.constituents),
    ],
  ];

  return (
    <article
      ref={ref}
      id="match"
      className="mb-7 bg-card px-4 pt-5 pb-4"
      aria-labelledby={titleId}
    >
      {/* The card's title: what to buy instead (decision 37). */}
      <h2 id={titleId} className="tracking-head wdth-118">
        <span className="mb-1.5 block text-base font-extrabold">
          <Swap>
            {copy.fundHead(index.usFunds.map((f) => f.ticker).join(", "))}
          </Swap>
        </span>
        <span className="block text-3xl leading-[1.1] font-heavy">
          <Swap>{index.euFund.name}</Swap>
        </span>
      </h2>

      <Block>
        <Head className="mb-1.5">
          <Swap>{copy.returnHead(index.longLabel)}</Swap>
        </Head>
        <p className="text-5xl leading-none font-black tabular-nums wdth-120">
          <CountUp value={index.return10y.value} format={pct} /> {copy.perYear}
        </p>
        {/* One line at 375 px: the short return type (decision 46). */}
        <p className="mt-1.5 truncate text-sm text-muted">
          <Swap>{copy.returnSub(index.returnTypeShort)}</Swap>
        </p>
        <p className="mt-2.5 border-l-3 border-red bg-warn px-2.5 py-2 text-sm leading-[1.4]">
          {copy.warning}
        </p>
      </Block>

      <Block>
        <Head>
          {copy.topHead} {copy.companiesBefore}{" "}
          <CountUp value={index.constituents.value} format={whole} />{" "}
          {copy.companiesAfter}
        </Head>
        <ul className="grid gap-1.75">
          {index.top5.map((c, i) => (
            <li
              // Keyed by position, so a bar slides to its new width.
              // biome-ignore lint/suspicious/noArrayIndexKey: five fixed slots
              key={i}
              className="grid grid-cols-[92px_1fr_56px] items-center gap-2 text-md"
            >
              <span>
                <Swap>{c.name}</Swap>
              </span>
              <span className="h-3 overflow-hidden bg-ground">
                <span
                  className={`block h-full ease-out-soft motion-safe:transition-[width] motion-safe:duration-500 ${i === 0 ? "bg-accent" : "bg-ink"}`}
                  style={{ width: `${(c.weight.value / maxWeight) * 100}%` }}
                />
              </span>
              <span className="text-right font-bold tabular-nums">
                <CountUp value={c.weight.value} format={pct} />
              </span>
            </li>
          ))}
        </ul>
      </Block>

      <div className="mt-5">
        <CtaLink href={`#${askId}`} location="match_card">
          {copy.more}
        </CtaLink>
      </div>

      <details className="mt-4 border-t border-line">
        <summary className="text-sm font-bold text-muted">
          {copy.sourcesHead}
        </summary>
        <SourceGroups groups={sourceGroups} />
      </details>
    </article>
  );
}

function Block({ children }: { children: ReactNode }) {
  return <div className="mt-4 border-t border-line pt-4">{children}</div>;
}

function Head({
  className = "mb-2",
  children,
}: {
  className?: string;
  children: ReactNode;
}) {
  return (
    <h3
      className={`text-base font-extrabold tracking-head wdth-118 ${className}`}
    >
      {children}
    </h3>
  );
}
