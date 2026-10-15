// All Czech page copy in one place, so wording changes touch one file.
// No numbers here: figures come from src/data/ and are put into the text
// by the component that renders them.

/** One index's TERs, formatted: the EU fund and the US fund it replaces. */
type TerPair = { index: string; eu: string; ticker: string; us: string };

// Decision 26: said in the consent text, the footer and the privacy page.
const controllerWho =
  "provozovatel ETF Match (demo, jméno a kontakt doplníme před spuštěním)";
const controller = `Správce údajů: ${controllerWho}.`;

const description =
  "ETF z NYSE si tu většinou nekoupíte, stejný index v evropském fondu ano.";

export const cs = {
  meta: {
    title: "ETF Match",
    description,
    // Open Graph and the share card (decision 40).
    // QQQ is left out: it is listed on Nasdaq, not NYSE (decision 27).
    ogTitle: "ETF Match: evropský fond místo VOO, SPY nebo IVV",
    ogAlt: `ETF Match. ${description}`,
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
    companiesAfter: "akcií v indexu.",
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
      companies: "Složení",
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
    consent: `Odesláním souhlasíte, že váš e-mail použijeme jen k zaslání plánu. ${controller} Souhlas můžete kdykoli odvolat.`,
    consentMore: "Jak s e-mailem zacházíme",
    submit: "Poslat plán",
    doneHead: "Hotovo, takhle plán vypadá.",
    doneText: "Demo: nic jsme neuložili ani neodeslali.",
    reopen: "Zobrazit e-mail znovu",
  },
  // Decision 16. The keys name the questions for the faq_opened event (C9).
  faq: {
    head: "Časté otázky",
    items: {
      banned: {
        question: "Je nákup ETF z NYSE v Česku zakázaný?",
        answer:
          "Není. Pravidla EU chtějí, aby fond pro drobné investory měl dokument KID (klíčové informace). Americké fondy ho nevydávají, a proto je většina brokerů v EU nenabízí.",
      },
      stocks: {
        question: "Můžu koupit akcie amerických firem?",
        answer:
          "Ano. Pravidlo o dokumentu KID se týká fondů, ne akcií jednotlivých firem.",
      },
      ter: {
        question: "Proč je evropský fond někdy dražší?",
        answer: (dearer: TerPair, cheaper: TerPair) =>
          `Poplatek si určuje každý fond sám. U indexu ${dearer.index} stojí evropský fond ${dearer.eu} ročně, ${dearer.ticker} ${dearer.us}. U indexu ${cheaper.index} je to naopak: evropský fond ${cheaper.eu}, ${cheaper.ticker} ${cheaper.us}.`,
      },
      isin: {
        question: "Co je ISIN a jak fond najdu u brokera?",
        answer: (length: number) =>
          `ISIN je ${length}místný kód jednoho konkrétního fondu. Pošleme vám ho v plánu; vložte ho do vyhledávání v aplikaci brokera. Ticker se liší podle burzy, ISIN je všude stejný.`,
      },
    },
  },
  // Decisions 17, 26, 32.
  footer: {
    disclaimerLead: "Nejde o investiční doporučení.",
    disclaimer:
      "Stránka ukazuje historická data indexů, ne předpověď. Minulé výnosy nezaručují budoucí a investice může ztratit hodnotu. Broker je uveden jen jako místo, kde fond najdete, ne jako doporučení.",
    sourcesHead: "Zdroje",
    sourceGroups: {
      kid: "Proč americké ETF většinou nekoupíte",
      exchanges: "Burzy amerických fondů",
      fees: "Poplatky fondů v otázkách",
    },
    controller,
    privacy: "Ochrana osobních údajů",
  },
  // The privacy page, /ochrana-udaju (decision 40). Says what the demo
  // does today; what a live mailing would add is left to fill in.
  privacy: {
    title: "Ochrana osobních údajů",
    back: "Zpět na ETF Match",
    sections: [
      { head: "Správce údajů", text: `Je to ${controllerWho}.` },
      {
        head: "Jaké údaje a proč",
        text: "Jen e-mail, který zadáte do formuláře. Použijeme ho k jedinému účelu: poslat vám plán sestavený podle indexu a částky, které jste vybrali. Žádný newsletter.",
      },
      {
        head: "Právní základ",
        text: "Váš souhlas podle čl. 6 odst. 1 písm. a) GDPR, který dáváte odesláním formuláře. Souhlas můžete kdykoli odvolat.",
      },
      {
        head: "Co se s e-mailem děje teď",
        text: "Stránka je demo. E-mail se zkontroluje jen ve vašem prohlížeči a nikam se neodesílá ani neukládá. Plán, který by vám přišel, se zobrazí přímo na stránce.",
      },
      {
        head: "Měření návštěvy",
        text: "Stránka zaznamenává kroky návštěvy (třeba výběr indexu nebo odeslání formuláře), parametry reklamy z odkazu (UTM) a zda jde o mobil. Zatím jen do konzole vašeho prohlížeče, nikam je neposílá. E-mail se nezaznamenává. Stránka nepoužívá cookies.",
      },
      {
        head: "Před spuštěním doplníme",
        text: "Než začneme plán skutečně posílat, doplníme sem jméno a kontakt správce, kdo e-maily rozesílá a jak dlouho e-mail uchováváme. Před zapnutím analytického nástroje se stránka zeptá na souhlas s cookies.",
      },
      {
        head: "Vaše práva",
        text: "Máte právo na přístup ke svým údajům, jejich opravu a výmaz, omezení zpracování, přenositelnost a odvolání souhlasu. Stížnost můžete podat u Úřadu pro ochranu osobních údajů.",
      },
    ],
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
      noteBasis:
        "Je to výnos indexu, ne fondu: poplatek fondu a poplatky brokera se neodečítají. Základ výnosů se mezi indexy liší, proto je nelze přesně porovnat.",
      noteCurrency: "Kurz koruny k dolaru výsledek mění.",
    },
    inside: {
      head: "2. Co je uvnitř",
      companies: "Počet akcií",
      companiesValue: (n: string) => `${n} akcií`,
      usShare: "Podíl USA",
      notPublished: "neuvádí",
      tech: (share: string) => `${share} technologie`,
      top3: "Největší 3",
      note: (world: string, usShare: string) =>
        `Všechny tři indexy mají v čele stejné tři firmy. I fond „${world}“ má ${usShare} peněz v USA.`,
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
        `Jinak platíte daň ze zisku ${base}. Sazba ${high} platí jen pro tu část ročního základu daně, která přesáhne ${from} (${year})`,
      note: "Přepočet měny a párování nákupů s prodeji probírejte s daňovým poradcem.",
    },
    accDist: {
      head: "5. Akumulační, nebo distribuční",
      text: "Akumulační fond dividendy nevyplácí, sám je znovu investuje. Distribuční fond je vyplácí a vyplacené dividendy se daní. Fond výše je akumulační.",
    },
    sourcesHead: "Zdroje",
  },
};
