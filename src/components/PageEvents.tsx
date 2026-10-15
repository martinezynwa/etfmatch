"use client";

import { useEffect, useRef } from "react";
import { track } from "@/lib/track";

// The page-wide events: page_viewed on load, and faq_opened for the FAQ's
// <details data-q> (the source accordions have no data-q, decision 31).
// Renders nothing, so the FAQ stays a server component.
export function PageEvents() {
  const viewed = useRef(false);

  useEffect(() => {
    if (!viewed.current) {
      viewed.current = true;
      track("page_viewed", { referrer: document.referrer || null });
    }
    // `toggle` does not bubble, so it is caught on the way down.
    const onToggle = (event: Event) => {
      const el = event.target;
      if (el instanceof HTMLDetailsElement && el.open && el.dataset.q)
        track("faq_opened", { question: el.dataset.q });
    };
    document.addEventListener("toggle", onToggle, true);
    return () => document.removeEventListener("toggle", onToggle, true);
  }, []);

  return null;
}
