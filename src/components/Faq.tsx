import { cs } from "@/copy/cs";
import { comparedFund, indexes, type MarketIndex } from "@/data/indexes";
import { pct } from "@/lib/format";

const copy = cs.faq;
const titleId = "faq-title";

/** The fee answer's two indexes: the EU fund dearer, then cheaper, than
 * its US fund (checked in data.test.ts). */
export const feeExamples = [indexes.ndx, indexes.world] as const;

// One index's TERs for the fee answer, read from src/data/.
function terPair(index: MarketIndex) {
  const us = comparedFund(index);
  return {
    index: index.longLabel,
    eu: pct(index.euFund.ter.value),
    ticker: us.ticker,
    us: pct(us.ter.value),
  };
}

// The four doubts that block the form (decision 16). Plain <details>: the
// accordion motion is in globals.css. `data-q` names each one for the
// faq_opened event (C9).
const items = [
  ["banned", copy.items.banned.question, copy.items.banned.answer],
  ["stocks", copy.items.stocks.question, copy.items.stocks.answer],
  [
    "ter",
    copy.items.ter.question,
    copy.items.ter.answer(terPair(feeExamples[0]), terPair(feeExamples[1])),
  ],
  [
    "isin",
    copy.items.isin.question,
    copy.items.isin.answer(indexes.sp500.euFund.isin.value.length),
  ],
] as const;

export function Faq() {
  return (
    <section className="pt-7 pb-2" aria-labelledby={titleId}>
      <h2
        id={titleId}
        className="mb-2.5 text-xl font-[850] tracking-[-0.01em] wdth-118"
      >
        {copy.head}
      </h2>
      {items.map(([id, question, answer]) => (
        <details key={id} data-q={id} className="mb-2 bg-card">
          <summary className="py-3.5 pr-11 pl-4 text-[15px] font-bold">
            {question}
          </summary>
          <p className="px-4 pb-3.5 text-[15px] text-ink-soft">{answer}</p>
        </details>
      ))}
    </section>
  );
}
