"use client";

import { type FormEvent, useEffect, useRef, useState } from "react";
import { cs } from "@/copy/cs";
import { brokers } from "@/data/brokers";
import { indexes, type MarketIndex } from "@/data/indexes";
import { taxes } from "@/data/taxes";
import { type EmailError, emailError } from "@/lib/email";
import { kc, pctWhole } from "@/lib/format";
import { type Amount, years } from "@/lib/plan";
import { track } from "@/lib/track";
import { CtaSubmit } from "./CtaLink";
import { Swap } from "./motion";
import { PrivacyLink } from "./PrivacyLink";
import { useSeenOnce } from "./useSeenOnce";

const copy = cs.ask;
const titleId = "ask-title";
const errorId = "ask-error";

// The ask (decisions 15, 26, 30): what the e-mail holds, one field, the
// consent text. A valid submit only opens the preview; the address is
// read once for the check and kept nowhere, and no event carries it.
export function Ask({
  id,
  index,
  amount,
  onSubmitted,
  onReopen,
}: {
  id: string;
  index: MarketIndex;
  amount: Amount;
  onSubmitted: () => void;
  onReopen: () => void;
}) {
  const [error, setError] = useState<EmailError | null>(null);
  // The plan the visitor submitted. A new index or amount brings the form
  // back, so the e-mail shown is always the one for the plan on screen.
  const [sentPlan, setSentPlan] = useState<string | null>(null);
  const plan = `${index.id}-${amount}`;
  const done = sentPlan === plan;
  const reopenRef = useRef<HTMLButtonElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const started = useRef(false);
  const justSent = useRef(false);
  useSeenOnce(sectionRef, () =>
    track("form_viewed", { index: index.id, amount }),
  );

  // The form is gone once sent, so the reopen button takes the focus.
  // Its effect runs before the dialog's (the Ask comes first in the
  // tree), so the dialog hands the focus back to it when it closes. Only
  // right after a submit: a tap back to a sent plan leaves focus alone.
  useEffect(() => {
    if (!done || !justSent.current) return;
    justSent.current = false;
    reopenRef.current?.focus({ preventScroll: true });
  }, [done]);

  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const email = new FormData(event.currentTarget).get("email");
    const problem = emailError(typeof email === "string" ? email : "");
    setError(problem);
    if (problem) {
      inputRef.current?.focus();
      return track("form_error", { error_type: problem });
    }
    track("form_submitted", { index: index.id, amount });
    justSent.current = true;
    setSentPlan(plan);
    onSubmitted();
  }

  const checklist = [
    copy.checklist.isin,
    copy.checklist.income(kc(amount), years),
    copy.checklist.inside(Object.values(indexes).map((i) => i.longLabel)),
    copy.checklist.fees(Object.values(brokers).map((b) => b.name)),
    copy.checklist.taxes(
      taxes.timeTestYears.value,
      kc(taxes.yearlySalesLimitCzk.value),
      pctWhole(taxes.rateBase.value),
    ),
    copy.checklist.accDist,
  ];

  return (
    <section
      ref={sectionRef}
      id={id}
      className="bg-ink pt-8 pb-9 text-white"
      aria-labelledby={titleId}
    >
      <div className="page-wrap">
        <h2
          id={titleId}
          className="text-4xl leading-[1.1] font-heavy tracking-head text-balance wdth-118"
        >
          {/* Non-breaking: "index" stays with the index's name. */}
          {copy.headline}&nbsp;<Swap>{index.longLabel}</Swap>
        </h2>
        <p className="mt-2 mb-4.5 text-base text-on-dark-muted">{copy.lead}</p>
        <ul className="mb-5.5 grid gap-2.5">
          {checklist.map((item, i) => (
            // biome-ignore lint/suspicious/noArrayIndexKey: six fixed lines
            <li key={i} className="flex gap-3 text-base leading-[1.35]">
              <Check />
              <Swap>{item}</Swap>
            </li>
          ))}
        </ul>

        {done ? (
          <div className="py-1">
            <h3 className="mb-1.5 text-2xl font-extrabold tracking-head wdth-118">
              {copy.doneHead}
            </h3>
            <p className="mb-3.5 text-on-dark-muted">{copy.doneText}</p>
            <button
              ref={reopenRef}
              type="button"
              onClick={onReopen}
              className="min-h-12 cursor-pointer border-[1.5px] border-white px-4.5 text-base leading-none font-bold"
            >
              {copy.reopen}
            </button>
          </div>
        ) : (
          <form noValidate onSubmit={submit}>
            <label htmlFor="email" className="mb-1.5 block text-md font-bold">
              {copy.emailLabel}
            </label>
            <input
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              inputMode="email"
              placeholder={copy.emailPlaceholder}
              required
              ref={inputRef}
              // The old message goes as soon as the visitor fixes the field.
              onInput={() => error && setError(null)}
              onFocus={() => {
                if (started.current) return;
                started.current = true;
                track("form_started", {});
              }}
              aria-invalid={error ? true : undefined}
              aria-describedby={error ? errorId : undefined}
              className="min-h-13 w-full border-2 border-white bg-white px-4 text-lg leading-none font-medium text-ink aria-invalid:border-on-dark-error"
            />
            <p
              id={errorId}
              role="alert"
              className="mt-2 text-md text-on-dark-error empty:hidden"
            >
              {error && copy.errors[error]}
            </p>
            <p className="mt-3 mb-4 text-sm leading-[1.45] text-on-dark-faint">
              {copy.consent}{" "}
              <PrivacyLink newTab>{copy.consentMore}</PrivacyLink>
            </p>
            <CtaSubmit>{copy.submit}</CtaSubmit>
          </form>
        )}
      </div>
    </section>
  );
}

// A plain tick, not a filled box: the list says what the e-mail holds,
// it is not something to tick off.
function Check() {
  return (
    <svg
      viewBox="0 0 20 20"
      aria-hidden="true"
      className="size-5 shrink-0 text-on-dark-accent"
    >
      <path
        d="M4.5 10.5l3.5 3.5 7.5-8"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
