import Link from "next/link";
import { cs } from "@/copy/cs";

export function Header() {
  return (
    <header className="flex h-13 items-center">
      <Link
        href="/"
        className="text-[19px] font-black tracking-[-0.02em] no-underline wdth-125"
      >
        {cs.header.wordmark}
        <span className="text-red" aria-hidden="true">
          .
        </span>
      </Link>
    </header>
  );
}
