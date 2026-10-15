"use client";

import type { ReactNode } from "react";
import { type CtaLocation, track } from "@/lib/track";

const ctaClass =
  "flex min-h-13 w-full items-center justify-center bg-red text-[17px] leading-none font-extrabold text-white no-underline transition-[background-color,transform] duration-150 wdth-110 hover:bg-red-dark active:translate-y-px";

// The red full-width button that scrolls to a section on the page.
// `location` names it in the cta_clicked event.
export function CtaLink({
  href,
  location,
  children,
}: {
  href: string;
  location: CtaLocation;
  children: ReactNode;
}) {
  return (
    <a
      href={href}
      onClick={() => track("cta_clicked", { location })}
      className={ctaClass}
    >
      {children}
    </a>
  );
}

/** The same red button, submitting a form. */
export function CtaSubmit({ children }: { children: ReactNode }) {
  return (
    <button type="submit" className={`${ctaClass} cursor-pointer`}>
      {children}
    </button>
  );
}
