import { cs } from "@/copy/cs";
import { FirstScreen } from "./FirstScreen";
import { Header } from "./Header";

const tapsId = "taps";

export function Home() {
  return (
    <div className="mx-auto max-w-page px-gutter">
      <Header />
      <main>
        <FirstScreen tapsId={tapsId} />
        {/* The index and amount taps arrive in C6. */}
        <section
          id={tapsId}
          className="scroll-mt-3"
          aria-label={cs.taps.label}
        />
      </main>
    </div>
  );
}
