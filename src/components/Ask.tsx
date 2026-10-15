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
  const [done, setDone] = useState(false);
  const reopenRef = useRef<HTMLButtonElement>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const started = useRef(false);
  useSeenOnce(sectionRef, () =>
    track("form_viewed", { index: index.id, amount }),
  );

  // The form is gone once sent, so the reopen button takes the focus.
  // Its effect runs before the dialog's (the Ask comes first in the
  // tree), so the dialog hands the focus back to it when it closes.
  useEffect(() => {
    if (done) reopenRef.current?.focus({ preventScroll: true });
  }, [done]);

  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const email = new FormData(event.currentTarget).get("email");
    const problem = emailError(typeof email === "string" ? email : "");
    setError(problem);
    if (problem) return track("form_error", { error_type: problem });
    track("form_submitted", { index: index.id, amount });
    setDone(true);
    onSubmitted();
  }

  const checklist = [
    copy.checklist.isin,
    copy.checklist.income(kc(amount), years),
    copy.checklist.inside(Object.values(indexes).map((i) => i.label)),
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
          className="text-[26px] leading-[1.1] font-[850] tracking-[-0.01em] wdth-118"
        >
          {/* Non-breaking: "k" must not end a line. */}
          {copy.headline}&nbsp;<Swap>{index.longLabel}</Swap>
        </h2>
        <p className="mt-2 mb-4.5 text-[15px] text-on-dark-muted">
          {copy.lead}
        </p>
        <ul className="mb-5.5 grid gap-2.5">
          {checklist.map((item, i) => (
            // biome-ignore lint/suspicious/noArrayIndexKey: six fixed lines
            <li key={i} className="flex gap-3 text-[15px] leading-[1.35]">
              <Check />
              <Swap>{item}</Swap>
            </li>
          ))}
        </ul>

        {done ? (
          <div className="py-1">
            <h3 className="mb-1.5 text-xl font-extrabold tracking-[-0.01em] wdth-118">
              {copy.doneHead}
            </h3>
            <p className="mb-3.5 text-on-dark-muted">{copy.doneText}</p>
            <button
              ref={reopenRef}
              type="button"
              onClick={onReopen}
              className="min-h-12 cursor-pointer border-[1.5px] border-white px-4.5 text-[15px] leading-none font-bold"
            >
              {copy.reopen}
            </button>
          </div>
        ) : (
          <form noValidate onSubmit={submit}>
            <label htmlFor="email" className="mb-1.5 block text-sm font-bold">
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
              onFocus={() => {
                if (started.current) return;
                started.current = true;
                track("form_started", {});
              }}
              aria-invalid={error ? true : undefined}
              aria-describedby={error ? errorId : undefined}
              className="min-h-13 w-full border-2 border-white bg-white px-4 text-[17px] leading-none font-medium text-ink"
            />
            <p
              id={errorId}
              role="alert"
              className="mt-2 text-sm text-on-dark-error empty:hidden"
            >
              {error && copy.errors[error]}
            </p>
            <p className="mt-3 mb-4 text-[12.5px] leading-[1.45] text-on-dark-faint">
              {copy.consent} <PrivacyLink>{copy.consentMore}</PrivacyLink>
            </p>
            <CtaSubmit>{copy.submit}</CtaSubmit>
          </form>
        )}
      </div>
    </section>
  );
}

function Check() {
  return (
    <svg
      viewBox="0 0 20 20"
      aria-hidden="true"
      className="size-5 shrink-0 bg-red"
    >
      <path
        d="M5.5 10.5l3 3 6-7"
        fill="none"
        stroke="white"
        strokeWidth="2.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
