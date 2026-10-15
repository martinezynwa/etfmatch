import Link from "next/link";
import type { ReactNode } from "react";

/** The privacy page's route (decision 40). */
export const privacyHref = "/ochrana-udaju";

// The link to the privacy page, from the consent text and the footer.
// `newTab` keeps the form in place for a visitor who checks it mid-way.
// The vertical padding widens the tap area without moving the text.
export function PrivacyLink({
  newTab = false,
  children,
}: {
  newTab?: boolean;
  children: ReactNode;
}) {
  return (
    <Link
      href={privacyHref}
      className="py-2.5 underline underline-offset-2"
      {...(newTab && { target: "_blank", rel: "noopener" })}
    >
      {children}
    </Link>
  );
}
