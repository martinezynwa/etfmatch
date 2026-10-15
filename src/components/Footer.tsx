import { cs } from "@/copy/cs";
import { comparedFund, indexes } from "@/data/indexes";
import { sources } from "@/data/sources";
import type { Source } from "@/data/types";
import { feeExamples } from "./Faq";
import { PrivacyLink } from "./PrivacyLink";
import { SourceGroups } from "./SourceLink";

const copy = cs.footer;

const all = Object.values(indexes);
const unique = (list: Source[]) => [...new Set(list)];

// Sources for what the first screen and the FAQ say; the match card lists
// its own (decision 32).
const sourceGroups: [string, Source[]][] = [
  [copy.sourceGroups.kid, [sources.priips, sources.xtbHelp]],
  [
    copy.sourceGroups.exchanges,
    unique(all.flatMap((i) => i.usFunds.map((f) => f.exchange.source))),
  ],
  [
    copy.sourceGroups.fees,
    unique(
      feeExamples.flatMap((i) => [
        i.euFund.ter.source,
        comparedFund(i).ter.source,
      ]),
    ),
  ],
];

// The page's last block: the disclaimer (decision 17), the sources behind
// an accordion, the data controller (decision 26) and the privacy page
// (decision 40).
export function Footer() {
  return (
    <footer className="pt-4.5 pb-10 text-[12.5px] leading-normal text-muted">
      <p className="mb-2.5">
        <strong className="text-ink">{copy.disclaimerLead}</strong>{" "}
        {copy.disclaimer}
      </p>
      <details className="mb-2.5 border-t border-line">
        <summary className="py-3 pr-8 pb-1 text-[13px] font-bold">
          {copy.sourcesHead}
        </summary>
        <SourceGroups groups={sourceGroups} />
      </details>
      <p>
        {copy.controller} <PrivacyLink>{copy.privacy}</PrivacyLink>
      </p>
    </footer>
  );
}
