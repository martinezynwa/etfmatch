"use client";

import { type ReactNode, useEffect, useRef } from "react";
import { cs } from "@/copy/cs";
import { brokers } from "@/data/brokers";
import {
  type IndexId,
  indexes,
  type MarketIndex,
  sp500BadYear,
} from "@/data/indexes";
import { taxes } from "@/data/taxes";
import type { Fact, Source } from "@/data/types";
import {
  approxKc,
  eur,
  feePerPurchase,
  formatDate,
  formatNumber,
  kc,
  kcFee,
  pct,
  pctWhole,
} from "@/lib/format";
import { income } from "@/lib/income";
import { years } from "@/lib/plan";
import { reducedMotion } from "./motion";
import { SourceLink } from "./SourceLink";

const copy = cs.email;
const titleId = "email-title";
const all = Object.values(indexes);
// "100 %", not "100,00 %"; other shares keep their decimals.
const share = (n: number) => (Number.isInteger(n) ? pctWhole(n) : pct(n));

// The modal with the exact e-mail (decision 3). Mounted on the first
// valid submit, so the e-mail is not in the page before it. Opens again
// from the reopen button, fades up and back down (decision 24); Escape
// closes it through the same fade.
export function EmailPreview({
  open,
  onDismiss,
  index,
  amount,
}: {
  open: boolean;
  onDismiss: () => void;
  index: MarketIndex;
  amount: number;
}) {
  const ref = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    const dialog = ref.current;
    if (!dialog) return;
    if (open && !dialog.open) {
      dialog.showModal();
      if (!reducedMotion())
        dialog.animate(
          [
            { opacity: 0, transform: "translateY(24px)" },
            { opacity: 1, transform: "none" },
          ],
          { duration: 280, easing: "cubic-bezier(0.2, 0.8, 0.2, 1)" },
        );
    } else if (!open && dialog.open) {
      if (reducedMotion()) return dialog.close();
      dialog.animate(
        [{ opacity: 1 }, { opacity: 0, transform: "translateY(16px)" }],
        { duration: 180, easing: "ease-in" },
      ).onfinish = () => dialog.close();
    }
  }, [open]);

  return (
    <dialog
      ref={ref}
      aria-labelledby={titleId}
      onCancel={(e) => {
        e.preventDefault();
        onDismiss();
      }}
      onClose={onDismiss}
      className="m-auto max-h-[calc(100%-32px)] w-[min(100%-16px,560px)] overflow-y-auto bg-card text-ink backdrop:bg-ink/55"
    >
      <div className="sticky top-0 z-10 flex items-center justify-between border-b border-line bg-card py-3 pr-3 pl-4.5">
        <p id={titleId} className="text-sm font-extrabold">
          {copy.modalTitle}
        </p>
        <button
          type="button"
          onClick={onDismiss}
          aria-label={copy.close}
          className="min-h-10 min-w-10 cursor-pointer bg-ground text-xl"
        >
          ×
        </button>
      </div>
      <Email index={index} amount={amount} />
    </dialog>
  );
}

// The e-mail body: five sections, a small number by each figure and the
// numbered "Zdroje" list at the end (decisions 2, 4, 8, 9). Sources are
// numbered in the order they are first cited.
function Email({ index, amount }: { index: MarketIndex; amount: number }) {
  const sources: Source[] = [];
  const cite = (f: Fact<unknown>) => {
    let n = sources.indexOf(f.source) + 1;
    if (!n) n = sources.push(f.source);
    return <sup className="ml-px text-[10px] text-muted">{n}</sup>;
  };
  const amountKc = kc(amount);
  const sellers = Object.values(brokers).filter(
    (b) => b.available[index.id].value,
  );
  const world = indexes.world;

  // Built first, so every cite() has run before the list is printed.
  const body = (
    <>
      <p className="mb-2 text-[12.5px] text-muted">
        {copy.subject(index.label, amountKc)}
      </p>
      <h2 className="mt-1.5 mb-2 text-[22px] font-[850] tracking-[-0.01em] wdth-118">
        {copy.title}
      </h2>
      <P>
        {copy.intro(index.longLabel, amountKc)}{" "}
        <strong>{index.euFund.name}</strong>, {copy.isin}{" "}
        {index.euFund.isin.value}
        {cite(index.euFund.isin)}.
      </P>

      <H3>{copy.income.head}</H3>
      <p className="mb-2 border-l-3 border-red bg-warn px-2.5 py-2 text-[13px]">
        {copy.income.warning}
      </p>
      {comparison(index.id, [
        [
          copy.income.total(years),
          (i) => (
            <strong>
              {approxKc(income(amount, i.return10y.value, years).total)}
            </strong>
          ),
        ],
        [
          copy.income.paidIn,
          (i) => kc(income(amount, i.return10y.value, years).paidIn),
        ],
        [
          copy.income.gain,
          (i) => approxKc(income(amount, i.return10y.value, years).gain),
        ],
        [
          copy.income.average,
          (i) => (
            <>
              {pct(i.return10y.value)}
              {cite(i.return10y)}
            </>
          ),
        ],
      ])}
      <Note>
        {copy.income.noteAssumption(
          years,
          formatDate(
            index.return10y.source.asOf ?? index.return10y.source.accessed,
          ),
        )}{" "}
        {copy.income.noteBadYear(
          sp500BadYear.year.value,
          indexes.sp500.label,
          pct(Math.abs(sp500BadYear.priceReturn.value)),
        )}
        {cite(sp500BadYear.priceReturn)}{" "}
        {copy.income.noteTypes(
          all.map((i) => `${i.label} ${i.returnType}`).join("; "),
        )}{" "}
        {copy.income.noteBasis} {copy.income.noteCurrency}
      </Note>

      <H3>{copy.inside.head}</H3>
      {comparison(index.id, [
        [
          copy.inside.companies,
          (i) => (
            <>
              {copy.inside.companiesValue(formatNumber(i.constituents.value))}
              {cite(i.constituents)}
            </>
          ),
        ],
        [
          copy.inside.usShare,
          (i) => (
            <>
              {i.usShare ? (
                <>
                  {share(i.usShare.value)}
                  {cite(i.usShare)}
                </>
              ) : (
                copy.inside.notPublished
              )}
              {i.techShare && (
                <span className="block text-[12.5px] text-muted">
                  {copy.inside.tech(pctWhole(i.techShare.value))}
                  {cite(i.techShare)}
                </span>
              )}
            </>
          ),
        ],
        [
          copy.inside.top3,
          (i) => (
            <>
              {i.top5
                .slice(0, 3)
                .map((c) => c.name)
                .join(", ")}
              {cite(i.top5[0].weight)}
            </>
          ),
        ],
      ])}
      {world.usShare && (
        <Note>
          {copy.inside.note(world.label, pct(world.usShare.value))}
          {cite(world.usShare)}
        </Note>
      )}

      <H3>{copy.fees.head(amountKc)}</H3>
      <ul className="mb-2 list-disc pl-4.5">
        <Li>
          {copy.fees.ter(pct(index.euFund.ter.value))}
          {cite(index.euFund.ter)}
          {copy.fees.terAfter}
        </Li>
        {sellers.map((b) => {
          const fee = feePerPurchase(amount, b.fxFee.value);
          return (
            <Li key={b.id}>
              {b.name}:{" "}
              {b.commissionUpToEur ? (
                <>
                  {copy.fees.commissionUpTo(
                    pctWhole(b.commission.value),
                    eur(b.commissionUpToEur.value),
                  )}
                  {cite(b.commissionUpToEur)}
                </>
              ) : (
                <>
                  {copy.fees.noCommission}
                  {cite(b.commission)}
                </>
              )}
              , {copy.fees.fx(pct(b.fxFee.value))}
              {cite(b.fxFee)}
              {copy.fees.perPurchase(
                kcFee(fee),
                kcFee(Math.round(fee * 12 * 100) / 100),
              )}
            </Li>
          );
        })}
      </ul>
      <Note>{copy.fees.note}</Note>

      <H3>{copy.taxes.head}</H3>
      <ul className="mb-2 list-disc pl-4.5">
        <Li>
          {copy.taxes.timeTest(taxes.timeTestYears.value)}
          {cite(taxes.timeTestYears)}.
        </Li>
        <Li>
          {copy.taxes.salesLimit(kc(taxes.yearlySalesLimitCzk.value))}
          {cite(taxes.yearlySalesLimitCzk)}.
        </Li>
        <Li>
          {copy.taxes.rates(
            pctWhole(taxes.rateBase.value),
            pctWhole(taxes.rateHigh.value),
            kc(taxes.rateHighFromCzk.value),
            taxes.year,
          )}
          {cite(taxes.rateHighFromCzk)}.
        </Li>
      </ul>
      <Note>{copy.taxes.note}</Note>

      <H3>{copy.accDist.head}</H3>
      <P>{copy.accDist.text}</P>
    </>
  );

  return (
    <div className="p-4.5 text-[15px]">
      {body}
      <H3>{copy.sourcesHead}</H3>
      <ol className="list-decimal pl-4.5 text-xs text-muted">
        {sources.map((s) => (
          <li key={s.url} className="mb-1">
            <SourceLink source={s} />
          </li>
        ))}
      </ol>
    </div>
  );
}

type Row = [label: string, cell: (index: MarketIndex) => ReactNode];

// All three indexes side by side, the chosen one highlighted (decision 8).
// A plain function, not a component: the cells must run inside Email's
// render, so their cite() calls number the sources in order.
function comparison(chosen: IndexId, rows: Row[]) {
  const tint = (id: IndexId) => (id === chosen ? "bg-warn" : "");
  return (
    <table className="mb-1.5 w-full border-collapse text-[13px]">
      <thead>
        <tr>
          <td className="border-b border-line" />
          {all.map((i) => (
            <th
              key={i.id}
              scope="col"
              className={`border-b border-line px-1 py-[7px] text-left align-top font-extrabold ${tint(i.id)} ${i.id === chosen ? "text-red" : ""}`}
            >
              {i.label}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {rows.map(([label, cell]) => (
          <tr key={label}>
            <th
              scope="row"
              className="w-[26%] border-b border-line px-1 py-[7px] text-left align-top font-medium text-muted"
            >
              {label}
            </th>
            {all.map((i) => (
              <td
                key={i.id}
                className={`border-b border-line px-1 py-[7px] align-top ${tint(i.id)}`}
              >
                {cell(i)}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}

function H3({ children }: { children: ReactNode }) {
  return (
    <h3 className="mt-5.5 mb-2 text-base font-extrabold tracking-[-0.01em] wdth-118">
      {children}
    </h3>
  );
}

function P({ children }: { children: ReactNode }) {
  return <p className="mb-2">{children}</p>;
}

function Li({ children }: { children: ReactNode }) {
  return <li className="mb-1">{children}</li>;
}

function Note({ children }: { children: ReactNode }) {
  return <p className="mb-2 text-[12.5px] text-muted">{children}</p>;
}
