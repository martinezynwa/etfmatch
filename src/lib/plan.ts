import type { IndexId } from "../data/indexes";

// The visitor's two taps (decision 5). Choices, not sourced figures, so
// they live here and not in src/data/.

export const amounts = [1000, 3000, 5000, 10000] as const;
export type Amount = (typeof amounts)[number];

export const defaultAmount: Amount = 5000;
export const defaultIndex: IndexId = "sp500";
