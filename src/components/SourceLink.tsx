import { cs } from "@/copy/cs";
import type { Source } from "@/data/types";
import { formatDate } from "@/lib/format";

// A source as the "Zdroje" lists print it: title and date, linked. A
// document without its own date shows when it was read.
export function SourceLink({ source }: { source: Source }) {
  const date = source.asOf
    ? formatDate(source.asOf)
    : cs.match.accessed(formatDate(source.accessed));
  return (
    <a href={source.url} target="_blank" rel="noopener" className="underline">
      {source.title}, {date}
    </a>
  );
}

/** Sources grouped under a label, one line per group, as the "Zdroje"
 * accordions list them. */
export function SourceGroups({ groups }: { groups: [string, Source[]][] }) {
  return (
    <ul className="grid gap-1.5 pt-1 text-xs leading-[1.4] text-muted">
      {groups.map(([label, list]) => (
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
  );
}
