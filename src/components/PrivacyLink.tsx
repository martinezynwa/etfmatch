import Link from "next/link";
import type { ReactNode } from "react";

/** The privacy page's route (decision 40). */
export const privacyHref = "/ochrana-udaju";

// The link to the privacy page, from the consent text and the footer.
export function PrivacyLink({ children }: { children: ReactNode }) {
  return (
    <Link href={privacyHref} className="underline underline-offset-2">
      {children}
    </Link>
  );
}
