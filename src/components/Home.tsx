import { FirstScreen } from "./FirstScreen";
import { Header } from "./Header";
import { Planner } from "./Planner";

const tapsId = "taps";
// The ask block arrives in C7; the match card already links to it.
const askId = "ask";

export function Home() {
  return (
    <div className="mx-auto max-w-page px-gutter">
      <Header />
      <main>
        <FirstScreen tapsId={tapsId} />
        <Planner tapsId={tapsId} askId={askId} />
      </main>
    </div>
  );
}
