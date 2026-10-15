// Every sourced value on the page is a Fact: the value, where it came
// from and the exact line it was read from (CLAUDE.md, Data rule).

export type Source = {
  /** Czech label shown in the "Zdroje" lists. */
  title: string;
  url: string;
  /** As-of date of the document (ISO), or null when the document has none. */
  asOf: string | null;
  /** When the value was read and its quote re-checked (ISO). */
  accessed: string;
};

export type Fact<T> = {
  value: T;
  source: Source;
  /** The line the value was read from, copied from docs/research/. */
  quote: string;
};

export const fact = <T>(value: T, source: Source, quote: string): Fact<T> => ({
  value,
  source,
  quote,
});
