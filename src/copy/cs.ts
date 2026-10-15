// All Czech page copy in one place, so wording changes touch one file.
// No numbers here: figures come from src/data/ and are put into the text
// by the component that renders them.

export const cs = {
  meta: {
    title: "ETF Match",
    description:
      "ETF z NYSE si tu většinou nekoupíte, stejný index v evropském fondu ano.",
  },
  header: {
    wordmark: "ETF Match",
  },
  // Decisions 11, 22, 25, 29.
  firstScreen: {
    headline:
      "ETF z NYSE si tu většinou nekoupíte, stejný index v evropském fondu ano.",
    why: "Americké fondy nemají dokument KID, který EU vyžaduje. Většina brokerů je proto drobným investorům neprodá.",
    columnUs: "NYSE",
    columnEu: "Evropa",
    /** Tags a US fund listed outside NYSE (decision 12). */
    listedOn: (ticker: string, exchange: string) =>
      `${ticker} je na burze ${exchange}`,
    cta: "Najít evropský fond ↓",
  },
  taps: {
    label: "Vyberte index a částku",
  },
};
