// Shared behaviour for the C3 page mockups (page-a.html, page-b.html).
// Throwaway design prep: the numbers are copied from docs/research/ with
// their source; in the app they move to src/data/ (C4).

const SRC = {
  spFeed: { title: "S&P DJI, data indexu S&P 500", date: "30. 9. 2026", url: "https://www.spglobal.com/spdji/en/indices/equity/sp-500/" },
  spFs: { title: "S&P 500 factsheet", date: "30. 9. 2026", url: "https://www.spglobal.com/spdji/en/idsenhancedfactsheet/file.pdf?calcFrequency=M&force_download=true&hostIdentifier=48190c8c-42c4-46af-8d1a-0cd5db894797&languageId=1&indexId=340" },
  ndxFs: { title: "Nasdaq-100 factsheet", date: "30. 9. 2026", url: "https://indexes.nasdaqomx.com/docs/FS_NDX.pdf" },
  xndxFs: { title: "Nasdaq-100 Total Return factsheet", date: "30. 9. 2026", url: "https://indexes.nasdaqomx.com/docs/FS_XNDX.pdf" },
  mwFs: { title: "MSCI World Index (USD) factsheet", date: "30. 9. 2026", url: "https://www.msci.com/documents/10199/4db922ce-68d2-446d-2f9e-4ed408a9db29" },
  ishSp: { title: "iShares Core S&P 500 UCITS ETF, stránka fondu", date: "14. 10. 2026", url: "https://www.ishares.com/uk/individual/en/products/253743/ishares-sp-500-b-ucits-etf-acc-fund" },
  ishNdx: { title: "iShares NASDAQ 100 UCITS ETF, stránka fondu", date: "14. 10. 2026", url: "https://www.ishares.com/uk/individual/en/products/253741/ishares-nasdaq-100-ucits-etf" },
  ishMw: { title: "iShares Core MSCI World UCITS ETF, stránka fondu", date: "14. 10. 2026", url: "https://www.ishares.com/uk/individual/en/products/251882/ishares-msci-world-ucits-etf-acc-fund" },
  voo: { title: "Vanguard S&P 500 ETF (VOO), fact sheet", date: "30. 6. 2026", url: "https://fund-docs.vanguard.com/F0968.pdf" },
  qqq: { title: "Invesco QQQ ETF", date: "30. 6. 2026", url: "https://www.invesco.com/qqq-etf/en/home.html" },
  urth: { title: "iShares MSCI World ETF (URTH)", date: "14. 10. 2026", url: "https://www.ishares.com/us/products/239696/ishares-msci-world-etf" },
  t212: { title: "Trading 212, Obchodní podmínky pro Invest účty", date: "staženo 15. 10. 2026", url: "https://www.trading212.com/cs/terms/invest" },
  t212List: { title: "Trading 212, seznam nástrojů", date: "staženo 15. 10. 2026", url: "https://www.trading212.com/cs/trading-instruments/invest" },
  xtbFees: { title: "XTB, Tabulka poplatků a provizí", date: "30. 9. 2026", url: "https://www.xtb.com/cz/soubory/tabulkapoplatkuaprovizi30092026.pdf" },
  zdp: { title: "Zákon o daních z příjmů (586/1992 Sb.), § 4 odst. 1 písm. t) a u)", date: "staženo 15. 10. 2026", url: "https://www.zakonyprolidi.cz/cs/1992-586" },
  fsRate: { title: "Finanční správa, Obecné informace (daň z příjmů)", date: "staženo 15. 10. 2026", url: "https://financnisprava.gov.cz/cs/dane/dane/dan-z-prijmu/zamestnanci-zamestnavatele/obecne-informace" },
};

const INDEXES = {
  sp500: {
    label: "S&P 500",
    us: "VOO, SPY, IVV",
    fund: "iShares Core S&P 500 UCITS ETF (Acc)",
    isin: "IE00B5BMR087",
    ter: 0.07, usTer: "VOO 0,03 %",
    ret10: 15.33, retType: "celkový výnos včetně dividend, před daní z dividend",
    companies: "503 firem", usShare: "100 %", extra: "",
    top: [["Nvidia", 8.38], ["Apple", 7.37], ["Microsoft", 5.78], ["Amazon", 3.71], ["Alphabet (A)", 3.06]],
    src: { fund: "ishSp", us: "voo", top: "spFeed", count: "spFs", ret: "spFeed" },
  },
  ndx: {
    label: "Nasdaq-100",
    us: "QQQ",
    fund: "iShares NASDAQ 100 UCITS ETF",
    isin: "IE00B53SZB19",
    ter: 0.3, usTer: "QQQ 0,18 %",
    ret10: 21.16, retType: "celkový výnos včetně dividend",
    companies: "100 firem", usShare: "neuvádí", extra: "68 % technologie",
    top: [["Nvidia", 8.36], ["Apple", 7.38], ["Microsoft", 5.78], ["Micron", 5.04], ["AMD", 4.19]],
    src: { fund: "ishNdx", us: "qqq", top: "ndxFs", count: "ndxFs", ret: "xndxFs" },
  },
  world: {
    label: "Svět",
    long: "Svět (MSCI World)",
    us: "URTH",
    fund: "iShares Core MSCI World UCITS ETF (Acc)",
    isin: "IE00B4L5Y983",
    ter: 0.2, usTer: "URTH 0,24 %",
    ret10: 12.81, retType: "celkový výnos včetně dividend, po srážkové dani z dividend",
    companies: "1 249 firem", usShare: "72,94 %", extra: "",
    top: [["Nvidia", 5.81], ["Apple", 5.41], ["Microsoft", 4.0], ["Amazon", 2.67], ["Alphabet (A)", 2.23]],
    src: { fund: "ishMw", us: "urth", top: "mwFs", count: "mwFs", ret: "mwFs" },
  },
};

const FX = { t212: 0.15, xtb: 0.5 };
const state = { index: "sp500", amount: 5000, emailOpens: 0 };

// ---------- measurement (decision 19): console only ----------
const params = new URLSearchParams(location.search);
const visit = {
  variant: ["ad-a", "ad-b"].includes(params.get("utm_content")) ? params.get("utm_content") : "none",
  utm_source: params.get("utm_source"),
  utm_medium: params.get("utm_medium"),
  utm_campaign: params.get("utm_campaign"),
  device: innerWidth < 768 ? "mobile" : "desktop",
};
function track(event, props = {}) {
  console.log("[track]", event, { ...visit, ...props });
}

// ---------- formatting ----------
const pct = (n) => `${n.toFixed(2).replace(".", ",")} %`;
const kc = (n) => `${Math.round(n).toLocaleString("cs-CZ")} Kč`;
const kcFee = (n) => `${n.toLocaleString("cs-CZ", { minimumFractionDigits: n % 1 ? 2 : 0, maximumFractionDigits: 2 })} Kč`;
function approx(n) {
  if (n >= 1e6) return `cca\u00a0${(n / 1e6).toFixed(2).replace(".", ",")}\u00a0mil.\u00a0Kč`;
  return `cca\u00a0${kc(Math.round(n / 1000) * 1000)}`;
}
// Monthly amount for 120 months, the yearly average turned into a monthly rate.
function grow(monthly, yearlyPct) {
  const i = (1 + yearlyPct / 100) ** (1 / 12) - 1;
  return (monthly * ((1 + i) ** 120 - 1)) / i;
}
const srcLink = (key) => `<a href="${SRC[key].url}" target="_blank" rel="noopener">${SRC[key].title}, ${SRC[key].date}</a>`;

// ---------- page rendering ----------
// Motion pattern (C3): text that changes fades in, numbers count to their
// new value, bars slide (CSS). Nothing moves with prefers-reduced-motion.
const reduce = matchMedia("(prefers-reduced-motion: reduce)").matches;
const ease = (t) => 1 - (1 - t) ** 3;

function swapIn(el) {
  if (reduce) return;
  el.animate([{ opacity: 0, transform: "translateY(6px)" }, { opacity: 1, transform: "none" }], { duration: 260, easing: "ease-out" });
}

function bind(name, html, { animate = true } = {}) {
  for (const el of document.querySelectorAll(`[data-bind="${name}"]`)) {
    if (el.innerHTML === html) continue;
    const first = !el.dataset.ready;
    el.innerHTML = html;
    el.dataset.ready = "1";
    if (animate && !first) swapIn(el);
  }
}

function tween(el, to, fmt) {
  const from = el._v ?? to;
  el._v = to;
  cancelAnimationFrame(el._raf);
  if (reduce || from === to) return void (el.textContent = fmt(to));
  const t0 = performance.now();
  const step = (now) => {
    const t = Math.min(1, (now - t0) / 450);
    el.textContent = fmt(from + (to - from) * ease(t));
    if (t < 1) el._raf = requestAnimationFrame(step);
  };
  el._raf = requestAnimationFrame(step);
}

function bindNum(name, value, fmt) {
  for (const el of document.querySelectorAll(`[data-bind="${name}"]`)) tween(el, value, fmt);
}

// Fixed decimals while counting, so the width does not jump.
const feeFmt = (target) => (n) =>
  `${n.toLocaleString("cs-CZ", { minimumFractionDigits: target % 1 ? 2 : 0, maximumFractionDigits: target % 1 ? 2 : 0 })} Kč`;

function renderBars(list, top) {
  const max = top[0][1];
  if (list.children.length !== top.length) {
    list.innerHTML = top.map(() => `
      <li class="bar">
        <span class="bar-name"></span>
        <span class="bar-track"><span class="bar-fill"></span></span>
        <span class="bar-value"></span>
      </li>`).join("");
  }
  top.forEach(([name, w], i) => {
    const li = list.children[i];
    const label = li.querySelector(".bar-name");
    if (label.textContent !== name) {
      const first = !label.textContent;
      label.textContent = name;
      if (!first) swapIn(label);
    }
    li.querySelector(".bar-fill").style.setProperty("--w", `${(w / max) * 100}%`);
    tween(li.querySelector(".bar-value"), w, pct);
  });
}

function render() {
  const x = INDEXES[state.index];
  bind("indexLabel", x.long || x.label);
  bind("us", x.us);
  bind("fund", x.fund);
  bind("isin", x.isin);
  bindNum("ter", x.ter, pct);
  bind("usTer", x.usTer);
  bindNum("ret10", x.ret10, pct);
  bind("retType", x.retType);
  bind("companies", x.companies);
  bindNum("amount", state.amount, kc);
  bindNum("feeT212", (state.amount * FX.t212) / 100, feeFmt((state.amount * FX.t212) / 100));
  bindNum("feeXtb", (state.amount * FX.xtb) / 100, feeFmt((state.amount * FX.xtb) / 100));
  for (const list of document.querySelectorAll('[data-bind="bars"]')) renderBars(list, x.top);
  bind("srcFund", `Zdroj: ${srcLink(x.src.fund)}; ${srcLink(x.src.us)}`, { animate: false });
  bind("srcTop", `Zdroj: ${srcLink(x.src.top)}${x.src.count !== x.src.top ? `; ${srcLink(x.src.count)}` : ""}`, { animate: false });
  bind("srcRet", `Zdroj: ${srcLink(x.src.ret)}`, { animate: false });
  bind("srcFees", `Zdroj: ${srcLink("t212")}; ${srcLink("xtbFees")}; dostupnost: ${srcLink("t212List")}, XTB podle názvu fondu`, { animate: false });
  bind("srcAll", `<ul class="src-list">
    <li><b>Výnos:</b> ${srcLink(x.src.ret)}</li>
    <li><b>Firmy:</b> ${srcLink(x.src.top)}${x.src.count !== x.src.top ? `; ${srcLink(x.src.count)}` : ""}</li>
    <li><b>Fond a poplatek:</b> ${srcLink(x.src.fund)}; ${srcLink(x.src.us)}</li>
    <li><b>Brokeři:</b> ${srcLink("t212")}; ${srcLink("xtbFees")}; dostupnost: ${srcLink("t212List")}, XTB podle názvu fondu</li>
  </ul>`, { animate: false });
  bind("email", emailHtml(), { animate: false });
  for (const b of document.querySelectorAll("[data-index]")) b.setAttribute("aria-pressed", b.dataset.index === state.index);
  for (const b of document.querySelectorAll("[data-amount]")) b.setAttribute("aria-pressed", Number(b.dataset.amount) === state.amount);
}

// ---------- the e-mail (decisions 2, 4, 8, 9) ----------
function emailHtml() {
  const x = INDEXES[state.index];
  const keys = Object.keys(INDEXES);
  const sources = ["spFeed", "spFs", "ndxFs", "xndxFs", "mwFs", x.src.fund, "t212", "xtbFees", "zdp", "fsRate"];
  const n = (key) => `<sup>${sources.indexOf(key) + 1}</sup>`;
  const put = state.amount * 120;
  const cols = keys.map((k) => `<th scope="col" class="${k === state.index ? "is-chosen" : ""}">${INDEXES[k].label}</th>`).join("");
  const row = (label, fn) => `<tr><th scope="row">${label}</th>${keys.map((k) => `<td class="${k === state.index ? "is-chosen" : ""}">${fn(INDEXES[k], k)}</td>`).join("")}</tr>`;
  const fee = (p) => (state.amount * p) / 100;

  return `
  <p class="mail-meta">Předmět: Váš ETF plán: ${x.label}, ${kc(state.amount)} měsíčně</p>
  <h2>Váš ETF plán</h2>
  <p>Vybrali jste ${x.long || x.label} a ${kc(state.amount)} měsíčně. Evropský fond, který sleduje stejný index: <strong>${x.fund}</strong>, ISIN ${x.isin}.</p>

  <h3>1. Kolik by z toho mohlo být</h3>
  <p class="mail-warn">Nejde o investiční doporučení. Je to jen historická statistika indexu, ne předpověď. Minulé výnosy nezaručují budoucí a investice může ztratit hodnotu.</p>
  <table class="mail-table">
    <thead><tr><th></th>${cols}</tr></thead>
    <tbody>
      ${row("Za 10 let", (i) => `<strong>${approx(grow(state.amount, i.ret10))}</strong>`)}
      ${row("Vložíte", () => kc(put))}
      ${row("Zisk", (i) => approx(grow(state.amount, i.ret10) - put))}
      ${row("Průměrně ročně", (i, k) => `${pct(i.ret10)}${n(INDEXES[k].src.ret)}`)}
    </tbody>
  </table>
  <p class="mail-note">Počítáme, jako by index rostl každý rok stejně, svým průměrem za posledních 10 let (do 30. 9. 2026). Skutečné roky byly vyšší i nižší, třeba v roce 2022 index S&P 500 klesl o 19,44\u00a0% (bez dividend)${n("spFs")}. Výnosy jsou v USD: S&P 500 celkový výnos před daní z dividend, Nasdaq-100 celkový výnos, MSCI World celkový výnos po srážkové dani. Kurz koruny k dolaru výsledek mění.</p>

  <h3>2. Co je uvnitř</h3>
  <table class="mail-table">
    <thead><tr><th></th>${cols}</tr></thead>
    <tbody>
      ${row("Počet firem", (i, k) => `${i.companies}${n(k === "sp500" ? "spFs" : k === "ndx" ? "ndxFs" : "mwFs")}`)}
      ${row("Podíl USA", (i) => i.usShare + (i.extra ? `<br><span class="mail-small">${i.extra}</span>` : ""))}
      ${row("Největší 3", (i) => i.top.slice(0, 3).map((t) => t[0]).join(", "))}
    </tbody>
  </table>
  <p class="mail-note">Všechny tři indexy vedou stejné firmy. I fond „Svět“ má skoro tři čtvrtiny peněz v USA.</p>

  <h3>3. Poplatky pro ${kc(state.amount)} měsíčně</h3>
  <ul>
    <li>Poplatek fondu (TER): ${pct(x.ter)} ročně${n(x.src.fund)}, strhává se z hodnoty fondu, nic neplatíte zvlášť.</li>
    <li>Trading 212: nákup bez provize, směna měny 0,15\u00a0%${n("t212")} = ${kcFee(fee(0.15))} za nákup, ${kcFee(fee(0.15) * 12)} za rok.</li>
    <li>XTB: provize 0\u00a0% do 100\u00a0000\u00a0€ měsíčně, směna měny 0,5\u00a0%${n("xtbFees")} = ${kcFee(fee(0.5))} za nákup, ${kcFee(fee(0.5) * 12)} za rok.</li>
  </ul>
  <p class="mail-note">Platí, pokud máte účet v Kč a fond kupujete v jiné měně.</p>

  <h3>4. Daně v Česku stručně</h3>
  <ul>
    <li>Držíte déle než 3 roky: zisk z prodeje je bez daně${n("zdp")}.</li>
    <li>Prodáte za max. 100\u00a0000\u00a0Kč za rok (počítá se celá částka prodeje, ne zisk): bez daně${n("zdp")}.</li>
    <li>Jinak platíte daň ze zisku 15\u00a0%. Sazba 23\u00a0% platí až pro příjmy nad 1\u00a0762\u00a0812\u00a0Kč za rok (2026)${n("fsRate")}.</li>
  </ul>
  <p class="mail-note">Přepočet měny a párování nákupů s prodeji probírejte s daňovým poradcem.</p>

  <h3>5. Akumulační, nebo distribuční</h3>
  <p>Akumulační fond dividendy nevyplácí, sám je znovu investuje. Distribuční fond je vyplácí a vyplacené dividendy se daní. Fond výše je akumulační.</p>

  <h3>Zdroje</h3>
  <ol class="mail-sources">${sources.map((k) => `<li>${srcLink(k)}</li>`).join("")}</ol>`;
}

// ---------- interactions ----------
document.addEventListener("click", async (e) => {
  const t = e.target.closest("[data-index],[data-amount],[data-action]");
  if (!t) return;
  if (t.dataset.index) {
    state.index = t.dataset.index;
    render();
    track("index_selected", { index: state.index });
    if (t.dataset.scroll) document.querySelector(t.dataset.scroll)?.scrollIntoView({ behavior: "smooth" });
  } else if (t.dataset.amount) {
    state.amount = Number(t.dataset.amount);
    render();
    track("amount_selected", { amount: state.amount });
  } else if (t.dataset.action === "cta") {
    track("cta_clicked", { location: "first_screen" });
  } else if (t.dataset.action === "more") {
    track("cta_clicked", { location: "match_card" });
  } else if (t.dataset.action === "copy-isin") {
    try { await navigator.clipboard.writeText(INDEXES[state.index].isin); } catch {}
    const label = t.textContent;
    t.textContent = "Zkopírováno";
    setTimeout(() => (t.textContent = label), 1500);
    track("isin_copied", { index: state.index });
  } else if (t.dataset.action === "open-email") {
    openEmail();
  } else if (t.dataset.action === "close-email") {
    closeEmail();
  }
});

function openEmail() {
  const modal = document.querySelector("[data-modal]");
  state.emailOpens += 1;
  modal.showModal();
  if (!reduce) modal.animate([{ opacity: 0, transform: "translateY(24px)" }, { opacity: 1, transform: "none" }], { duration: 280, easing: "cubic-bezier(.2,.8,.2,1)" });
  track("email_preview_opened", { count: state.emailOpens });
}

function closeEmail() {
  const modal = document.querySelector("[data-modal]");
  if (reduce) return modal.close();
  modal.animate([{ opacity: 1 }, { opacity: 0, transform: "translateY(16px)" }], { duration: 180, easing: "ease-in" }).onfinish = () => modal.close();
}

const form = document.querySelector("[data-form]");
const input = form.querySelector("input[type=email]");
const error = form.querySelector("[data-form-error]");
input.addEventListener("focus", () => track("form_started"), { once: true });
form.addEventListener("submit", (e) => {
  e.preventDefault();
  const consent = form.querySelector("input[type=checkbox]");
  let errorType = "";
  if (!input.value.trim()) errorType = "empty";
  else if (!input.checkValidity()) errorType = "invalid";
  else if (consent && !consent.checked) errorType = "no_consent";
  if (errorType) {
    error.textContent = {
      empty: "Vyplňte e-mail, na který plán pošleme.",
      invalid: "E-mail má chybný tvar, zkontrolujte ho.",
      no_consent: "Bez souhlasu plán poslat nemůžeme.",
    }[errorType];
    error.hidden = false;
    swapIn(error);
    track("form_error", { error_type: errorType });
    return;
  }
  error.hidden = true;
  form.hidden = true;
  const done = document.querySelector("[data-form-done]");
  done.hidden = false;
  swapIn(done);
  track("form_submitted", { index: state.index, amount: state.amount });
  openEmail();
});

for (const d of document.querySelectorAll("details[data-q]")) {
  d.addEventListener("toggle", () => d.open && track("faq_opened", { question: d.dataset.q }));
}

function onceInView(selector, event) {
  const el = document.querySelector(selector);
  if (!el) return;
  const io = new IntersectionObserver(([entry]) => {
    if (entry.isIntersecting) {
      track(event, { index: state.index, amount: state.amount });
      io.disconnect();
    }
  }, { threshold: 0.5 });
  io.observe(el);
}

render();
track("page_viewed", { referrer: document.referrer || null });
onceInView("#match", "match_viewed");
onceInView("#ask", "form_viewed");
