import type { ReactNode } from "react";
import { cs } from "@/copy/cs";
import { brokers } from "@/data/brokers";
import type { MarketIndex } from "@/data/indexes";
import type { Fact, Source } from "@/data/types";
import { feePerPurchase, formatNumber, kc, kcFee, pct } from "@/lib/format";
import { CtaLink } from "./CtaLink";
import { CountUp, Swap } from "./motion";
import { SourceLink } from "./SourceLink";

const copy = cs.match;
const titleId = "match-title";

// Module-level, so CountUp gets the same function every render.
const whole = (n: number) => formatNumber(n);
const crowns = (n: number) => kc(n);

const uniqueSources = (...facts: Fact<unknown>[]) => [
  ...new Set(facts.map((f) => f.source)),
];

// The answer to the taps, in the order of decision 37. Rendered inside
// the Planner client component; no ISIN here (it is in the e-mail).
export function MatchCard({
  index,
  amount,
  askId,
}: {
  index: MarketIndex;
  amount: number;
  askId: string;
}) {
  const usFund =
    index.usFunds.find((f) => f.ticker === index.compareWith) ??
    index.usFunds[0];
  const sellers = Object.values(brokers).filter(
    (b) => b.available[index.id].value,
  );
  const commissions = new Set(sellers.map((b) => b.commission.value));
  const maxWeight = Math.max(...index.top5.map((c) => c.weight.value));

  const sourceGroups: [string, Source[]][] = [
    [copy.sourceGroups.return, uniqueSources(index.return10y)],
    [
      copy.sourceGroups.companies,
      uniqueSources(...index.top5.map((c) => c.weight), index.companies),
    ],
    [copy.sourceGroups.fund, uniqueSources(index.euFund.ter, usFund.ter)],
    [
      copy.sourceGroups.brokers,
      uniqueSources(
        ...sellers.flatMap((b) => [
          b.commission,
          b.fxFee,
          b.available[index.id],
        ]),
      ),
    ],
  ];

  return (
    <article
      id="match"
      className="mb-7 bg-card px-4 pt-5 pb-4"
      aria-labelledby={titleId}
    >
      {/* The card's title: what to buy instead (decision 37). */}
      <h2 id={titleId} className="tracking-[-0.01em] wdth-118">
        <span className="mb-1.5 block text-[15px] font-extrabold">
          <Swap>
            {copy.fundHead(index.usFunds.map((f) => f.ticker).join(", "))}
          </Swap>
        </span>
        <span className="block text-[22px] leading-[1.1] font-[850]">
          <Swap>{index.euFund.name}</Swap>
        </span>
      </h2>

      <Block>
        <Head className="mb-1.5">
          <Swap>{copy.returnHead(index.longLabel)}</Swap>
        </Head>
        <p className="text-[30px] leading-none font-black tabular-nums wdth-120">
          <CountUp value={index.return10y.value} format={pct} /> {copy.perYear}
        </p>
        <p className="mt-1.5 text-sm text-muted">
          <Swap>{copy.returnSub(index.returnType)}</Swap>
        </p>
        <p className="mt-2.5 border-l-3 border-red bg-warn px-2.5 py-2 text-[13px] leading-[1.4]">
          {copy.warning}
        </p>
      </Block>

      <Block>
        <Head>{copy.topHead}</Head>
        <ul className="grid gap-[7px]">
          {index.top5.map((c, i) => (
            <li
              // Keyed by position, so a bar slides to its new width.
              // biome-ignore lint/suspicious/noArrayIndexKey: five fixed slots
              key={i}
              className="grid grid-cols-[92px_1fr_56px] items-center gap-2 text-sm"
            >
              <span>
                <Swap>{c.name}</Swap>
              </span>
              <span className="h-3 overflow-hidden bg-ground">
                <span
                  className={`block h-full ease-out-soft motion-safe:transition-[width] motion-safe:duration-500 ${i === 0 ? "bg-red" : "bg-ink"}`}
                  style={{ width: `${(c.weight.value / maxWeight) * 100}%` }}
                />
              </span>
              <span className="text-right font-bold tabular-nums">
                <CountUp value={c.weight.value} format={pct} />
              </span>
            </li>
          ))}
        </ul>
        <Note>
          {copy.companiesBefore}{" "}
          <CountUp value={index.companies.value} format={whole} />{" "}
          {copy.companiesAfter}
        </Note>
      </Block>

      <Block>
        <Row label={copy.terLabel}>
          <strong className="text-xl font-[850] tabular-nums wdth-112">
            <CountUp value={index.euFund.ter.value} format={pct} />
          </strong>
        </Row>
        <Row label={copy.usTerLabel}>
          <span className="text-sm text-muted">
            <Swap>{`${usFund.ticker} ${pct(usFund.ter.value)}`}</Swap>
          </span>
        </Row>
      </Block>

      <Block>
        <Head>{copy.buyHead}</Head>
        <ul className="flex gap-2">
          {sellers.map((b) => (
            <li
              key={b.id}
              className="flex-1 border-[1.5px] border-line px-3 py-2.5 text-base font-extrabold"
            >
              {b.name}
              <small className="mt-0.5 block text-[13px] font-normal text-muted">
                {copy.fxFee}{" "}
                <span className="tabular-nums">
                  <CountUp
                    value={feePerPurchase(amount, b.fxFee.value)}
                    format={kcFee}
                  />
                </span>
              </small>
            </li>
          ))}
        </ul>
        <Note>
          {copy.feesBefore} <CountUp value={amount} format={crowns} />
          {copy.feesAfter}
          {commissions.size === 1 &&
            ` ${copy.commission(kc(feePerPurchase(amount, [...commissions][0])))}`}
        </Note>
      </Block>

      <div className="mt-5">
        <CtaLink href={`#${askId}`}>{copy.more}</CtaLink>
      </div>

      <details className="mt-4 border-t border-line">
        <summary className="py-3 pr-8 pb-1 text-[13px] font-bold text-muted">
          {copy.sourcesHead}
        </summary>
        <ul className="grid gap-1.5 pt-1 text-xs leading-[1.4] text-muted">
          {sourceGroups.map(([label, list]) => (
            <li key={label}>
              <b className="font-semibold text-ink">{label}:</b>{" "}
              {list.map((s, i) => (
                <span key={s.url}>
                  {i > 0 && "; "}
                  <SourceLink source={s} />
                </span>
              ))}
            </li>
          ))}
        </ul>
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
      className={`text-[15px] font-extrabold tracking-[-0.01em] wdth-118 ${className}`}
    >
      {children}
    </h3>
  );
}

function Row({ label, children }: { label: string; children: ReactNode }) {
  return (
    <div className="flex items-baseline justify-between gap-3 text-[15px]">
      <span className="text-sm text-muted">{label}</span>
      {children}
    </div>
  );
}

function Note({ children }: { children: ReactNode }) {
  return <p className="mt-2 text-sm text-muted">{children}</p>;
}
