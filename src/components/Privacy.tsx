import Link from "next/link";
import { cs } from "@/copy/cs";
import { Header } from "./Header";

const copy = cs.privacy;

// The privacy page (decision 40): who the controller is, what the form
// takes and what the demo does with it. One column, like the home page.
export function Privacy() {
  return (
    <div className="page-wrap">
      <Header />
      <main className="pt-4 pb-10">
        <h1 className="mb-5 text-[30px] leading-[1.05] font-[850] tracking-[-0.01em] wdth-118">
          {copy.title}
        </h1>
        {copy.sections.map((section) => (
          <section key={section.head} className="mb-4.5">
            <h2 className="mb-1 text-[17px] font-extrabold wdth-110">
              {section.head}
            </h2>
            <p className="text-[15px] leading-normal">{section.text}</p>
          </section>
        ))}
        <Link
          href="/"
          className="mt-2 inline-flex min-h-12 items-center font-bold underline underline-offset-2"
        >
          <span aria-hidden="true">←&nbsp;</span>
          {copy.back}
        </Link>
      </main>
    </div>
  );
}
