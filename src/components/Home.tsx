import { Faq } from "./Faq";
import { FirstScreen } from "./FirstScreen";
import { Footer } from "./Footer";
import { Header } from "./Header";
import { PageEvents } from "./PageEvents";
import { Planner } from "./Planner";

const tapsId = "taps";
const askId = "ask";

// Each section sets its own column (the `page-wrap` utility), so the dark ask
// block can run the full width.
export function Home() {
  return (
    <>
      <div className="page-wrap">
        <Header />
      </div>
      <main>
        <div className="page-wrap">
          <FirstScreen tapsId={tapsId} />
        </div>
        <Planner tapsId={tapsId} askId={askId} />
        <div className="page-wrap">
          <Faq />
        </div>
      </main>
      <div className="page-wrap">
        <Footer />
      </div>
      <PageEvents />
    </>
  );
}
