"use client";

import { useEffect, useRef, useState } from "react";

// The tap motion of decision 24: numbers count to their new value, changed
// text fades up. Nothing runs on first render or under reduced motion.

export const reducedMotion = () =>
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;

const easeOut = (t: number) => 1 - (1 - t) ** 3;

/** A number that counts from its last value to `value` in 450 ms. `format`
 * gets the target too, so the decimals stay fixed while counting. */
export function CountUp({
  value,
  format,
}: {
  value: number;
  format: (n: number, target: number) => string;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const shown = useRef(value);
  // React owns only the first text; later frames write textContent, so
  // React never overwrites a count in progress.
  const [initial] = useState(() => format(value, value));

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const from = shown.current;
    if (from === value || reducedMotion()) {
      shown.current = value;
      el.textContent = format(value, value);
      return;
    }
    const t0 = performance.now();
    let frame = 0;
    const step = (now: number) => {
      const t = Math.min(1, (now - t0) / 450);
      shown.current = from + (value - from) * easeOut(t);
      el.textContent = format(shown.current, value);
      if (t < 1) frame = requestAnimationFrame(step);
    };
    frame = requestAnimationFrame(step);
    return () => cancelAnimationFrame(frame);
  }, [value, format]);

  return <span ref={ref}>{initial}</span>;
}

/** Text that fades up for 260 ms when it changes. */
export function Swap({ children }: { children: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const last = useRef(children);

  useEffect(() => {
    if (last.current === children) return;
    last.current = children;
    if (reducedMotion()) return;
    ref.current?.animate(
      [
        { opacity: 0, transform: "translateY(6px)" },
        { opacity: 1, transform: "none" },
      ],
      { duration: 260, easing: "ease-out" },
    );
  }, [children]);

  // inline-block so the transform applies.
  return (
    <span ref={ref} className="inline-block">
      {children}
    </span>
  );
}
