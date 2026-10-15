"use client";

import { type ReactNode, useState } from "react";
import { cs } from "@/copy/cs";
import { type IndexId, indexes } from "@/data/indexes";
import { kc } from "@/lib/format";
import { type Amount, amounts, defaultAmount, defaultIndex } from "@/lib/plan";
import { MatchCard } from "./MatchCard";

const copy = cs.taps;

type Plan = { index: IndexId; amount: Amount };

// The one piece of state on the page: the visitor's index and amount.
// The match card (and in C7 the ask) render from it.
export function Planner({ tapsId, askId }: { tapsId: string; askId: string }) {
  const [plan, setPlan] = useState<Plan>({
    index: defaultIndex,
    amount: defaultAmount,
  });

  return (
    <>
      <section
        id={tapsId}
        className="scroll-mt-3 pt-2 pb-4.5"
        aria-label={copy.label}
      >
        <Question>{copy.indexQuestion}</Question>
        <div className="mb-5 flex flex-wrap gap-2">
          {Object.values(indexes).map((index) => (
            <Chip
              key={index.id}
              pressed={plan.index === index.id}
              onClick={() => setPlan({ ...plan, index: index.id })}
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
              onClick={() => setPlan({ ...plan, amount })}
              className="px-1 text-sm"
            >
              {kc(amount)}
            </Chip>
          ))}
        </div>
      </section>

      <MatchCard
        index={indexes[plan.index]}
        amount={plan.amount}
        askId={askId}
      />
    </>
  );
}

function Question({ children }: { children: ReactNode }) {
  return (
    <h2 className="mb-2.5 text-lg font-extrabold tracking-[-0.01em] wdth-118">
      {children}
    </h2>
  );
}

function Chip({
  pressed,
  onClick,
  className = "px-4 text-[15px]",
  children,
}: {
  pressed: boolean;
  onClick: () => void;
  className?: string;
  children: ReactNode;
}) {
  return (
    <button
      type="button"
      aria-pressed={pressed}
      onClick={onClick}
      className={`min-h-11 cursor-pointer border-[1.5px] border-ink leading-none font-semibold transition-[background-color,color,transform] duration-180 active:scale-97 aria-pressed:bg-ink aria-pressed:text-white ${className}`}
    >
      {children}
    </button>
  );
}
