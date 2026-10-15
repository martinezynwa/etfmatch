import Link from "next/link";
import { cs } from "@/copy/cs";

export function Header() {
  return (
    <header className="flex h-11 items-center">
      <Link
        href="/"
        className="text-2xl font-black tracking-mark no-underline wdth-125"
      >
        {cs.header.wordmark}
        <span className="text-accent" aria-hidden="true">
          .
        </span>
      </Link>
    </header>
  );
}
