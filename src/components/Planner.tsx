"use client";

import { type ReactNode, useRef, useState } from "react";
import { cs } from "@/copy/cs";
import { type IndexId, indexes } from "@/data/indexes";
import { kc } from "@/lib/format";
import { type Amount, amounts, defaultAmount, defaultIndex } from "@/lib/plan";
import { track } from "@/lib/track";
import { Ask } from "./Ask";
import { EmailPreview } from "./EmailPreview";
import { MatchCard } from "./MatchCard";

const copy = cs.taps;

type Plan = { index: IndexId; amount: Amount };

// The one piece of state on the page: the visitor's index and amount.
// The match card, the ask and the e-mail render from it.
export function Planner({ tapsId, askId }: { tapsId: string; askId: string }) {
  const [plan, setPlan] = useState<Plan>({
    index: defaultIndex,
    amount: defaultAmount,
  });
  // The e-mail modal: null until the first valid submit.
  const [mailOpen, setMailOpen] = useState<boolean | null>(null);
  const opens = useRef(0);
  const index = indexes[plan.index];

  // A chip sends its event only when it changes the plan.
  function selectIndex(id: IndexId) {
    if (id === plan.index) return;
    setPlan({ ...plan, index: id });
    track("index_selected", { index: id });
  }

  function selectAmount(amount: Amount) {
    if (amount === plan.amount) return;
    setPlan({ ...plan, amount });
    track("amount_selected", { amount });
  }

  function openMail() {
    opens.current += 1;
    setMailOpen(true);
    track("email_preview_opened", { count: opens.current });
  }

  return (
    <>
      <div className="page-wrap">
        <section
          id={tapsId}
          className="scroll-mt-3 pt-2 pb-4.5"
          aria-label={copy.label}
        >
          <Question>{copy.indexQuestion}</Question>
          {/* Both rows are the same control: equal columns, same type. */}
          <div className="mb-5 grid grid-cols-3 gap-1.5">
            {Object.values(indexes).map((index) => (
              <Chip
                key={index.id}
                pressed={plan.index === index.id}
                onClick={() => selectIndex(index.id)}
              >
                {index.label}
              </Chip>
            ))}
          </div>
          <Question>{copy.amountQuestion}</Question>
          <div className="grid grid-cols-4 gap-1.5">
            {amounts.map((amount) => (
              <Chip
                key={amount}
                pressed={plan.amount === amount}
                onClick={() => selectAmount(amount)}
              >
                {kc(amount)}
              </Chip>
            ))}
          </div>
        </section>

        <MatchCard index={index} amount={plan.amount} askId={askId} />
      </div>

      <Ask
        id={askId}
        index={index}
        amount={plan.amount}
        onSubmitted={openMail}
        onReopen={openMail}
      />
      {mailOpen !== null && (
        <EmailPreview
          open={mailOpen}
          onDismiss={() => setMailOpen(false)}
          index={index}
          amount={plan.amount}
        />
      )}
    </>
  );
}

function Question({ children }: { children: ReactNode }) {
  return (
    <h2 className="mb-2.5 text-xl font-extrabold tracking-head wdth-118">
      {children}
    </h2>
  );
}

function Chip({
  pressed,
  onClick,
  children,
}: {
  pressed: boolean;
  onClick: () => void;
  children: ReactNode;
}) {
  return (
    <button
      type="button"
      aria-pressed={pressed}
      onClick={onClick}
      className="min-h-11 cursor-pointer border-[1.5px] border-ink leading-none font-semibold transition-[background-color,color,transform] duration-180 active:scale-97 aria-pressed:bg-ink aria-pressed:text-white px-1 text-base whitespace-nowrap"
    >
      {children}
    </button>
  );
}
