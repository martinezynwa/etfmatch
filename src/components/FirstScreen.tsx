import { cs } from "@/copy/cs";
import { indexes, type MarketIndex } from "@/data/indexes";
import { CtaLink } from "./CtaLink";

const copy = cs.firstScreen;

// Keeps the last word with the one before it, so "S&P 500" never breaks.
const keepLastTwo = (text: string) => text.replace(/ (\S+)$/, " $1");

// The index name under a pair, tagged where a US fund is not on NYSE
// (decision 12): "Nasdaq-100 (QQQ je na burze Nasdaq)".
function indexNote(index: MarketIndex) {
  const offNyse = index.usFunds
    .filter((f) => f.exchange.value !== "NYSE Arca")
    .map((f) => copy.listedOn(f.ticker, f.exchange.value));
  return offNyse.length
    ? `${index.longLabel} (${offNyse.join(", ")})`
    : index.longLabel;
}

const pairGrid = "grid grid-cols-[112px_20px_1fr] gap-x-2";

export function FirstScreen({ tapsId }: { tapsId: string }) {
  return (
    <section className="pt-1.5 pb-7" aria-labelledby="headline">
      <h1
        id="headline"
        className="text-[28px] leading-[1.08] font-[850] tracking-[-0.01em] wdth-118"
      >
        {copy.headline}
      </h1>
      <p className="mt-3 mb-4 text-[15px] leading-[1.45] text-muted">
        {copy.why}
      </p>

      <div className="mb-4 bg-card px-4 pt-2.5 pb-1">
        <div
          className={`${pairGrid} border-b-2 border-ink pb-1.5 text-[13px] font-extrabold`}
          aria-hidden="true"
        >
          <span>{copy.columnUs}</span>
          <span className="col-start-3">{copy.columnEu}</span>
        </div>
        <ul>
          {Object.values(indexes).map((index, i) => (
            <li
              key={index.id}
              className={`${pairGrid} items-baseline border-line pt-[11px] pb-[9px] not-first:border-t motion-safe:animate-rise`}
              style={{ animationDelay: `${i * 80 + 150}ms` }}
            >
              <span className="text-base leading-[1.2] font-[750] text-muted">
                <span className="sr-only">{copy.columnUs}: </span>
                {index.usFunds.map((f) => f.ticker).join(", ")}
              </span>
              <span className="font-black text-red" aria-hidden="true">
                →
              </span>
              <span className="text-base leading-[1.2] font-[750]">
                <span className="sr-only">{copy.columnEu}: </span>
                {keepLastTwo(index.euFund.shortName)}
              </span>
              <span className="col-span-full mt-0.5 text-xs text-muted">
                {indexNote(index)}
              </span>
            </li>
          ))}
        </ul>
      </div>

      <CtaLink href={`#${tapsId}`} location="first_screen">
        {copy.cta}
      </CtaLink>
    </section>
  );
}
