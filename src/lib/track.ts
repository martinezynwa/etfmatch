import type { IndexId } from "../data/indexes";
import type { EmailError } from "./email";
import type { Amount } from "./plan";

// Measurement (decisions 19, 31): one `track()` that only console-logs.
// A real tool later replaces its inside. Every event carries the visit:
// the ad variant, the UTMs and the device, read in the browser only.

export type Variant = "ad-a" | "ad-b" | "none";

export type Visit = {
  variant: Variant;
  utm_source: string | null;
  utm_medium: string | null;
  utm_campaign: string | null;
  device: "mobile" | "desktop";
};

/** Below this viewport width a visit counts as mobile. */
export const mobileBelowPx = 768;

/** The events and their extra props. No prop can hold the e-mail address:
 * the form events carry the plan or the error type only. */
export type Events = {
  page_viewed: { referrer: string | null };
  cta_clicked: { location: CtaLocation };
  index_selected: { index: IndexId };
  amount_selected: { amount: Amount };
  match_viewed: PlanProps;
  form_viewed: PlanProps;
  form_started: Record<string, never>;
  form_error: { error_type: EmailError };
  form_submitted: PlanProps;
  email_preview_opened: { count: number };
  faq_opened: { question: string };
};

export type EventName = keyof Events;
export type CtaLocation = "first_screen" | "match_card";
type PlanProps = { index: IndexId; amount: Amount };

export function variantFrom(utmContent: string | null): Variant {
  return utmContent === "ad-a" || utmContent === "ad-b" ? utmContent : "none";
}

/** The visit from the URL's query string and the viewport width. */
export function visitProps(search: string, width: number): Visit {
  const params = new URLSearchParams(search);
  return {
    variant: variantFrom(params.get("utm_content")),
    utm_source: params.get("utm_source"),
    utm_medium: params.get("utm_medium"),
    utm_campaign: params.get("utm_campaign"),
    device: width < mobileBelowPx ? "mobile" : "desktop",
  };
}

/** What one event logs: the visit, then the event's own props. */
export function payload<E extends EventName>(
  visit: Visit,
  props: Events[E],
): Visit & Events[E] {
  return { ...visit, ...props };
}

// Read once, on the first event: the page never changes its URL.
let visit: Visit | undefined;

export function track<E extends EventName>(event: E, props: Events[E]) {
  visit ??= visitProps(window.location.search, window.innerWidth);
  console.log("[track]", event, payload(visit, props));
}

/** "≥ 50 % in view" for a block that may be taller than the screen: half
 * the block is visible, or the block fills half the viewport. */
export function halfInView(
  blockHeight: number,
  visibleHeight: number,
  viewportHeight: number,
) {
  return visibleHeight >= Math.min(blockHeight, viewportHeight) / 2;
}
