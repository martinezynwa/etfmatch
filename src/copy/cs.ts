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
  // Decision 5.
  taps: {
    label: "Vyberte index a částku",
    indexQuestion: "Který index vás zajímá?",
    amountQuestion: "Kolik chcete investovat měsíčně?",
  },
  // Decisions 14, 17, 28, 32, 37.
  match: {
    returnHead: (index: string) => `${index} za 10 let průměrně`,
    perYear: "ročně",
    returnSub: (returnType: string) => `v USD, ${returnType}`,
    warning:
      "Minulé výnosy nezaručují budoucí. Nejde o investiční doporučení, jen o historickou statistiku indexu.",
    topHead: "Největší firmy uvnitř",
    companiesBefore: "Celkem",
    companiesAfter: "firem v indexu.",
    fundHead: (usFunds: string) => `Evropský fond místo ${usFunds}`,
    terLabel: "Poplatek fondu (TER) ročně",
    usTerLabel: "Americký fond pro srovnání",
    buyHead: "Kde koupit",
    fxFee: "směna měny",
    feesBefore: "Za nákup za",
    feesAfter: ", pokud máte účet v Kč.",
    commission: (fee: string) => `Provize za nákup ETF je u obou ${fee}.`,
    more: "Chci vědět víc ↓",
    sourcesHead: "Zdroje dat",
    sourceGroups: {
      return: "Výnos",
      companies: "Firmy",
      fund: "Fond a poplatek",
      brokers: "Brokeři",
    },
    /** A source without its own date: when it was read. */
    accessed: (date: string) => `staženo ${date}`,
  },
};
