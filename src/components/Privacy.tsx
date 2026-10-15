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
        <BackLink className="mb-2" />
        <h1 className="mb-5 text-4xl leading-[1.08] font-heavy tracking-head text-balance wdth-118">
          {copy.title}
        </h1>
        {copy.sections.map((section) => (
          <section key={section.head} className="mb-4.5">
            <h2 className="mb-1 text-lg font-extrabold wdth-110">
              {section.head}
            </h2>
            <p className="text-base leading-normal">{section.text}</p>
          </section>
        ))}
        <BackLink className="mt-2" />
      </main>
    </div>
  );
}

// The way back, at the top and at the end of the page.
function BackLink({ className }: { className: string }) {
  return (
    <Link
      href="/"
      className={`inline-flex min-h-11 items-center font-bold underline underline-offset-2 ${className}`}
    >
      <span aria-hidden="true">←&nbsp;</span>
      {copy.back}
    </Link>
  );
}
