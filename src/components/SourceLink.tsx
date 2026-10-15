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
