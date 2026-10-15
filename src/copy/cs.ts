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
  // Decisions 15, 26, 30. The checklist names the ISIN first, then the
  // five sections of the e-mail.
  ask: {
    headline: "Pošleme vám celý plán k",
    lead: "Jeden e-mail, sestavený podle toho, co jste vybrali.",
    checklist: {
      isin: "Evropský fond a jeho ISIN, podle kterého ho najdete u brokera",
      income: (amount: string, years: number) =>
        `Kolik by z ${amount} měsíčně mohlo být za ${years} let, u všech tří indexů`,
      inside: (labels: string[]) =>
        `Co je uvnitř: ${labels.slice(0, -1).join(", ")} a ${labels.at(-1)} vedle sebe`,
      fees: (brokers: string[]) =>
        `Poplatky u ${brokers.join(" a ")} pro vaši částku`,
      taxes: (years: number, limit: string, rate: string) =>
        `Daně v Česku stručně: ${years} roky, ${limit}, ${rate}`,
      accDist: "Akumulační, nebo distribuční fond",
    },
    emailLabel: "Váš e-mail",
    emailPlaceholder: "jmeno@email.cz",
    errors: {
      empty: "Vyplňte e-mail, na který plán pošleme.",
      invalid: "E-mail má chybný tvar, zkontrolujte ho.",
    },
    consent:
      "Odesláním souhlasíte, že váš e-mail použijeme jen k zaslání plánu. Správce údajů: provozovatel ETF Match (demo, jméno a kontakt doplníme před spuštěním). Souhlas můžete kdykoli odvolat.",
    submit: "Poslat plán",
    doneHead: "Hotovo, takhle plán vypadá.",
    doneText: "Demo: nic jsme neuložili ani neodeslali.",
    reopen: "Zobrazit e-mail znovu",
  },
  // The e-mail shown in the modal (decisions 2, 3, 4, 8, 9).
  email: {
    modalTitle: "Takhle vypadá váš e-mail",
    close: "Zavřít",
    subject: (index: string, amount: string) =>
      `Předmět: Váš ETF plán: ${index}, ${amount} měsíčně`,
    title: "Váš ETF plán",
    intro: (index: string, amount: string) =>
      `Vybrali jste ${index} a ${amount} měsíčně. Evropský fond, který sleduje stejný index:`,
    isin: "ISIN",
    income: {
      head: "1. Kolik by z toho mohlo být",
      warning:
        "Nejde o investiční doporučení. Je to jen historická statistika indexu, ne předpověď. Minulé výnosy nezaručují budoucí a investice může ztratit hodnotu.",
      total: (years: number) => `Za ${years} let`,
      paidIn: "Vložíte",
      gain: "Zisk",
      average: "Průměrně ročně",
      noteAssumption: (years: number, until: string) =>
        `Počítáme, jako by index rostl každý rok stejně, svým průměrem za posledních ${years} let (do ${until}).`,
      noteBadYear: (year: number, index: string, change: string) =>
        `Skutečné roky byly vyšší i nižší, třeba v roce ${year} index ${index} klesl o ${change} (bez dividend).`,
      noteTypes: (types: string) => `Výnosy jsou v USD: ${types}.`,
      noteCurrency: "Kurz koruny k dolaru výsledek mění.",
    },
    inside: {
      head: "2. Co je uvnitř",
      companies: "Počet firem",
      companiesValue: (n: string) => `${n} firem`,
      usShare: "Podíl USA",
      notPublished: "neuvádí",
      tech: (share: string) => `${share} technologie`,
      top3: "Největší 3",
      note: (world: string, usShare: string) =>
        `Všechny tři indexy vedou stejné firmy. I fond „${world}“ má ${usShare} peněz v USA.`,
    },
    fees: {
      head: (amount: string) => `3. Poplatky pro ${amount} měsíčně`,
      ter: (ter: string) => `Poplatek fondu (TER): ${ter} ročně`,
      terAfter: ", strhává se z hodnoty fondu, nic neplatíte zvlášť.",
      noCommission: "nákup bez provize",
      commissionUpTo: (commission: string, limit: string) =>
        `provize ${commission} do ${limit} měsíčně`,
      fx: (fee: string) => `směna měny ${fee}`,
      perPurchase: (perPurchase: string, perYear: string) =>
        ` = ${perPurchase} za nákup, ${perYear} za rok.`,
      note: "Platí, pokud máte účet v Kč a fond kupujete v jiné měně.",
    },
    taxes: {
      head: "4. Daně v Česku stručně",
      timeTest: (years: number) =>
        `Držíte déle než ${years} roky: zisk z prodeje je bez daně`,
      salesLimit: (limit: string) =>
        `Prodáte za max. ${limit} za rok (počítá se celá částka prodeje, ne zisk): bez daně`,
      rates: (base: string, high: string, from: string, year: number) =>
        `Jinak platíte daň ze zisku ${base}. Sazba ${high} platí až pro příjmy nad ${from} za rok (${year})`,
      note: "Přepočet měny a párování nákupů s prodeji probírejte s daňovým poradcem.",
    },
    accDist: {
      head: "5. Akumulační, nebo distribuční",
      text: "Akumulační fond dividendy nevyplácí, sám je znovu investuje. Distribuční fond je vyplácí a vyplacené dividendy se daní. Fond výše je akumulační.",
    },
    sourcesHead: "Zdroje",
  },
};
