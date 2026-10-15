"use client";

import { type RefObject, useEffect, useRef } from "react";
import { halfInView } from "@/lib/track";

const steps = Array.from({ length: 21 }, (_, i) => i / 20);

/** Calls `onSeen` the first time the block is half in view (see
 * `halfInView`), with the props it holds at that moment. */
export function useSeenOnce(
  ref: RefObject<HTMLElement | null>,
  onSeen: () => void,
) {
  const latest = useRef(onSeen);
  latest.current = onSeen;
  // A ref, so React's dev double effect does not send the event twice.
  const seen = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el || seen.current) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        const viewport = entry.rootBounds?.height ?? window.innerHeight;
        if (
          !halfInView(
            entry.boundingClientRect.height,
            entry.intersectionRect.height,
            viewport,
          )
        )
          return;
        seen.current = true;
        observer.disconnect();
        latest.current();
      },
      { threshold: steps },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [ref]);
}
