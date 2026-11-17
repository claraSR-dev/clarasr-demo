
"use strict";

/*
 * creditloop – Interaktive Demo v0.5B
 * Ausschließlich fiktive Beispieldaten.
 * Keine echten Kundendaten oder Datei-Uploads.
 *
 * Verwendet die bestehenden Engines:
 * - CreditloopCSV
 * - CreditloopMatching
 * - CreditloopSettlement
 */

// ===================================================
// 1. FIKTIVE BEISPIELDATEN
// ===================================================

const demoScenarios = {
  industrial: {
    name: "Alpine Parts AG",

    invoices: `Rechnungsnummer;Lieferant;Betrag;Waehrung

INV-101;Meccanica Italia S.r.l.;12000.00;CHF
INV-102;Alpen Technik GmbH;8000.00;CHF
INV-103;Swiss Precision AG;5300.00;CHF

INV-104;Alpen Technik GmbH;4500.00;CHF
INV-105;Meccanica Italia S.r.l.;6200.00;CHF
INV-106;Swiss Precision AG;3800.00;CHF
INV-107;Meccanica Italia S.r.l.;5400.00;CHF
INV-108;Atlantic Industrial Supply Inc.;4900.00;CHF
INV-109;Europa Precision GmbH;12000.00;CHF
INV-110;Officine Lombarde S.r.l.;18000.00;CHF
INV-111;Pacific Industrial Components Inc.;15000.00;USD
INV-112;Atlantic Robotics Supply LLC;24000.00;USD`





  ,returns: `Retourennummer;Rechnungsnummer;Lieferant;GenehmigterBetrag;Waehrung;Status

RET-101;INV-101;Meccanica Italia S.r.l.;2400.00;CHF;Genehmigt
RET-102;INV-102;Alpen Technik GmbH;1800.00;CHF;Genehmigt
RET-103;INV-103;Swiss Precision AG;950.00;CHF;Genehmigt

RET-104;INV-104;Alpen Technik GmbH;800.00;CHF;Genehmigt
RET-105;INV-105;Meccanica Italia S.r.l.;1300.00;CHF;Genehmigt
RET-106;INV-106;Swiss Precision AG;600.00;CHF;Genehmigt
RET-107A;INV-107;Meccanica Italia S.r.l.;400.00;CHF;Genehmigt
RET-107B;INV-107;Meccanica Italia S.r.l.;250.00;CHF;Genehmigt
RET-108;INV-108;Atlantic Industrial Supply Inc.;900.00;CHF;Genehmigt
RET-109;INV-109;Europa Precision GmbH;1000.00;EUR;Genehmigt
RET-110;INV-110;Officine Lombarde S.r.l.;3000.00;EUR;Genehmigt
RET-111;INV-111;Pacific Industrial Components Inc.;4000.00;USD;Genehmigt
RET-112;INV-112;Atlantic Robotics Supply LLC;6000.00;USD;Genehmigt`





    ,credits: `Gutschriftnummer;Rechnungsnummer;Lieferant;Betrag;Waehrung
CR-102;INV-102;Alpen Technik GmbH;650.00;CHF

CR-103;INV-103;Swiss Precision AG;950.00;CHF

CR-105;INV-105;Meccanica Italia S.r.l.;500.00;CHF
CR-106;INV-106;Swiss Precision AG;600.00;CHF
CR-107;INV-107;Meccanica Italia S.r.l.;650.00;CHF
CR-108;INV-108;Atlantic Industrial Supply Inc.;900.00;CHF
CR-109;INV-109;Europa Precision GmbH;1000.00;EUR

CR-110;INV-110;Officine Lombarde S.r.l.;1800.00;EUR
CR-111;INV-111;Pacific Industrial Components Inc.;4000.00;USD
CR-112;INV-112;Atlantic Robotics Supply LLC;3500.00;USD`



  },

  flowers: {
    name: "Flora Ticino SA",

    invoices: `Rechnungsnummer;Lieferant;Betrag;Waehrung
FL-201;Fiori Milano S.r.l.;1800.00;CHF
FL-202;Alpina Pflanzen AG;1200.00;CHF
FL-203;Viva Verde S.r.l.;950.00;CHF`,

    returns: `Retourennummer;Rechnungsnummer;Lieferant;GenehmigterBetrag;Waehrung;Status
FR-201;FL-201;Fiori Milano S.r.l.;450.00;CHF;Genehmigt
FR-202;FL-202;Alpina Pflanzen AG;240.00;CHF;Genehmigt
FR-203;FL-203;Viva Verde S.r.l.;150.00;CHF;Genehmigt`,

    credits: `Gutschriftnummer;Rechnungsnummer;Lieferant;Betrag;Waehrung
FC-202;FL-202;Alpina Pflanzen AG;100.00;CHF
FC-203;FL-203;Viva Verde S.r.l.;150.00;CHF`
  }
};

const settlementDemoData = {

  industrial: `Buchungsnummer;Gutschriftnummer;Buchungsart;Betrag;Waehrung;Belegreferenz;Wechselkurs;Kursdatum;Kursquelle
BK-101;CR-102;Verrechnung;400.00;CHF;DEMO-REF-101;;;
BK-102;CR-103;Verrechnung;950.00;CHF;DEMO-REF-102;;;
BK-108;CR-108;Verrechnung;600.00;CHF;DEMO-REF-108;;;

BK-109;CR-109;Verrechnung;950.00;CHF;DEMO-FX-109;1.05263158;2026-11-12;Fiktiver Testkurs
BK-111;CR-111;Verrechnung;3200.00;CHF;DEMO-FX-111;1.25;2026-11-12;Fiktiver USD-Testkurs
BK-112;CR-112;Verrechnung;1600.00;CHF;DEMO-FX-112;1.25;2026-11-12;Fiktiver USD-Testkurs`
,


  flowers: `Buchungsnummer;Gutschriftnummer;Buchungsart;Betrag;Waehrung;Belegreferenz
BK-201;FC-202;Verrechnung;60.00;CHF;DEMO-REF-201
BK-202;FC-203;Verrechnung;150.00;CHF;DEMO-REF-202`
};

const demoPaymentEvidence = {
  industrial: [
    {
      paymentId: "PAY-106",
      invoiceId: "INV-106",
      creditId: "CR-106",
      supplier: "Swiss Precision AG",
      amount: 60000,
      currency: "CHF",
      paymentDate: "2026-11-12",
      source: "Fiktiver Bankumsatz",
      demoOnly: true
    }
  ],
  flowers: []
};
// ===================================================
// 2. DOM UND ZUSTAND
// ===================================================

const scenarioButtons = document.querySelectorAll(
  "[data-scenario]"
);

const tabButtons = document.querySelectorAll(
  "[data-tab]"
);

const tableHead = document.getElementById(
  "data-table-head"
);

const tableBody = document.getElementById(
  "data-table-body"
);

const runButton = document.getElementById(
  "run-demo"
);

const demoMessage = document.getElementById(
  "demo-message"
);

const resultsSection = document.getElementById(
  "results-section"
);

const caseList = document.getElementById(
  "case-list"
);

const caseDetail = document.getElementById(
  "case-detail"
);

let selectedScenario = "industrial";
let selectedTab = "invoices";

let currentDatasets = null;
let currentResults = [];

let hasCompletedReconciliation = false;

let activeCaseFilter = "all";
let selectedCaseId = null;

// ===================================================
// 3. HILFSFUNKTIONEN
// ===================================================

function setText(id, value) {
  const element = document.getElementById(id);

  if (element) {
    element.textContent = String(value);
  }
}

function createElement(tag, text, className = "") {
  const element = document.createElement(tag);

  if (text !== undefined && text !== null) {
    element.textContent = String(text);
  }

  if (className) {
    element.className = className;
  }

  return element;
}

function formatMoney(minorUnits, currency = "CHF") {
  if (
    minorUnits === null ||
    minorUnits === undefined ||
    !currency
  ) {
    return "–";
  }

  
  return new Intl.NumberFormat("de-CH", {
    style: "currency",
    currency,
    currencyDisplay:
      currency.toUpperCase() === "USD"
        ? "code"
        : "symbol",
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  }).format(minorUnits / 100);

}

function parseDataset(csvText, expectedType) {
  const parsed = CreditloopCSV.parse(csvText);

  if (parsed.errors.length) {
    throw new Error(parsed.errors.join(" | "));
  }

  const type = CreditloopMatching.detectType(
    parsed.headers
  );

  if (type !== expectedType) {
    throw new Error(
      "Unerwartete Dokumentart: " + expectedType
    );
  }

  return parsed.records;
}

function loadScenario(key) {
  const scenario = demoScenarios[key];

  if (!scenario) {
    throw new Error("Unbekanntes Demo-Szenario.");
  }

  return {
    invoices: parseDataset(
      scenario.invoices,
      "invoices"
    ),
    returns: parseDataset(
      scenario.returns,
      "returns"
    ),
    credits: parseDataset(
      scenario.credits,
      "credits"
    )
  };
}

// ===================================================
// 4. TABELLEN
// ===================================================

const tableColumns = {
  invoices: [
    ["Rechnungsnummer", "Rechnung"],
    ["Lieferant", "Lieferant"],
    ["Betrag", "Betrag"],
    ["Waehrung", "Währung"]
  ],

  returns: [
    ["Retourennummer", "Retoure"],
    ["Rechnungsnummer", "Rechnung"],
    ["Lieferant", "Lieferant"],
    ["GenehmigterBetrag", "Genehmigter Betrag"],
    ["Waehrung", "Währung"],
    ["Status", "Status"]
  ],

  credits: [
    ["Gutschriftnummer", "Gutschrift"],
    ["Rechnungsnummer", "Rechnung"],
    ["Lieferant", "Lieferant"],
    ["Betrag", "Betrag"],
    ["Waehrung", "Währung"]
  ]
};
// Seitennavigation für „Verfügbare Belege“
const recordsPageSize = 15;
let recordsPage = 1;
let recordsPageTab = null;
let recordsPageDataset = null;

function renderRecordsPagination(total) {
  let pagination = document.getElementById("records-pagination");

  if (!pagination) {
    const tableContainer = tableBody.closest(".table-container");
    if (!tableContainer) return;

    pagination = document.createElement("nav");
    pagination.id = "records-pagination";
    pagination.className = "records-pagination";
    tableContainer.after(pagination);
  }

  const language = document.documentElement.lang
    .toLowerCase()
    .split("-")[0];

  const texts = {
    de: {
      label: "Seiten der verfügbaren Belege",
      previous: "Zurück",
      next: "Weiter",
      page: "Seite",
      of: "von"
    },
    en: {
      label: "Available records pages",
      previous: "Previous",
      next: "Next",
      page: "Page",
      of: "of"
    },
    it: {
      label: "Pagine dei documenti disponibili",
      previous: "Precedente",
      next: "Successiva",
      page: "Pagina",
      of: "di"
    },
    fr: {
      label: "Pages des documents disponibles",
      previous: "Précédent",
      next: "Suivant",
      page: "Page",
      of: "sur"
    }
  };

  const text = texts[language] || texts.de;
  const pageCount = Math.max(1, Math.ceil(total / recordsPageSize));

  pagination.replaceChildren();
  pagination.setAttribute("aria-label", text.label);
  pagination.hidden = total <= recordsPageSize;

  if (pagination.hidden) return;

  const first = (recordsPage - 1) * recordsPageSize + 1;
  const last = Math.min(recordsPage * recordsPageSize, total);

  const summary = document.createElement("span");
  summary.className = "records-pagination-summary";
  summary.textContent = `${first}–${last} ${text.of} ${total}`;
  pagination.appendChild(summary);

  const controls = document.createElement("div");
  controls.className = "records-pagination-controls";
  pagination.appendChild(controls);

  function addButton(label, targetPage, disabled, current = false) {
    const button = document.createElement("button");
    button.type = "button";
    button.textContent = label;
    button.disabled = disabled;

    if (current) {
      button.setAttribute("aria-current", "page");
    }

    if (typeof label === "number") {
      button.setAttribute("aria-label", `${text.page} ${label}`);
    }

    button.addEventListener("click", () => {
      if (targetPage === recordsPage) return;

      recordsPage = targetPage;
      drawTable();

      // Tastaturfokus nach dem Neuaufbau erhalten.
      document.querySelector(
        '#records-pagination [aria-current="page"]'
      )?.focus({ preventScroll: true });
    });

    controls.appendChild(button);
  }

  addButton(text.previous, recordsPage - 1, recordsPage === 1);

  // Bei vielen Seiten die Navigation kompakt halten.
  for (let page = 1; page <= pageCount; page += 1) {
    const visible =
      page === 1 ||
      page === pageCount ||
      Math.abs(page - recordsPage) <= 1;

    if (visible) {
      addButton(page, page, false, page === recordsPage);
    } else if (
      controls.lastElementChild?.className !==
      "records-pagination-gap"
    ) {
      const gap = document.createElement("span");
      gap.className = "records-pagination-gap";
      gap.textContent = "…";
      gap.setAttribute("aria-hidden", "true");
      controls.appendChild(gap);
    }
  }

  addButton(text.next, recordsPage + 1, recordsPage === pageCount);
}

// Beschriftungen bei einem Sprachwechsel ebenfalls aktualisieren.
new MutationObserver(() => {
  if (document.getElementById("records-pagination")) {
    renderRecordsPagination(currentDatasets[selectedTab].length);
  }
}).observe(document.documentElement, {
  attributes: true,
  attributeFilter: ["lang"]
});
function drawTable() {
  tableHead.replaceChildren();
  tableBody.replaceChildren();

    const columns = tableColumns[selectedTab];
  const records = currentDatasets[selectedTab];

  // Bei anderer Dokumentart oder neuem Datensatz auf Seite 1 beginnen.
  if (
    recordsPageTab !== selectedTab ||
    recordsPageDataset !== records
  ) {
    recordsPage = 1;
    recordsPageTab = selectedTab;
    recordsPageDataset = records;
  }

  const pageCount = Math.max(
    1,
    Math.ceil(records.length / recordsPageSize)
  );

  recordsPage = Math.min(Math.max(recordsPage, 1), pageCount);

  const pageStart = (recordsPage - 1) * recordsPageSize;
  const visibleRecords = records.slice(
    pageStart,
    pageStart + recordsPageSize
  );

  renderRecordsPagination(records.length);

  const headerRow = document.createElement("tr");

  columns.forEach(([, label]) => {
    headerRow.appendChild(
      createElement("th", label)
    );
  });

  tableHead.appendChild(headerRow);

    visibleRecords.forEach(record => {
    const row = document.createElement("tr");

    columns.forEach(([field]) => {
      let value = record[field] ?? "–";

      if (
        field === "Betrag" ||
        field === "GenehmigterBetrag"
      ) {
        const number = Number(value);

        if (Number.isFinite(number)) {
          value = new Intl.NumberFormat("de-CH", {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2
          }).format(number);
        }
      }

const cell = createElement("td", value);

if (field === "Rechnungsnummer") {
  const invoiceId = String(value).trim();

  const link = createElement(
    "button",
    invoiceId,
    "invoice-case-link"
  );

  link.type = "button";

  
link.addEventListener("click", () => {
  window.CreditloopDocuments.open(
    invoiceId,
    "invoice"
  );
});


cell.replaceChildren(link);
}

row.appendChild(cell);

});

tableBody.appendChild(row);
});

  if (!records.length) {
    const row = document.createElement("tr");

    const cell = createElement(
      "td",
      "Keine Beispieldaten vorhanden."
    );

    cell.colSpan = columns.length;

    row.appendChild(cell);
    tableBody.appendChild(row);
  }
}

function selectTab(name) {
  if (!tableColumns[name]) return;

  selectedTab = name;

  tabButtons.forEach(button => {
    const active = button.dataset.tab === name;

    button.classList.toggle("active", active);

    button.setAttribute(
      "aria-selected",
      String(active)
    );
  });

  drawTable();
}

function openCaseSourceTable(tabName, invoiceId) {
  // Zur Abgleichansicht wechseln.
  showDemoView("reconcile");

  // Passende Quelldatentabelle anzeigen.
  selectTab(tabName);

  // Rechnung steht in Spalte 1,
  // bei Retouren und Gutschriften in Spalte 2.
  const invoiceColumn =
    tabName === "invoices" ? 0 : 1;

  const rows = Array.from(
    tableBody.querySelectorAll("tr")
  );

  const matchingRow = rows.find(row => {
    const cell = row.cells[invoiceColumn];

    return cell &&
      cell.textContent.trim() === invoiceId;
  });

  if (matchingRow) {
    matchingRow.style.outline =
      "2px solid #397D79";

    matchingRow.style.outlineOffset = "-2px";

    matchingRow.scrollIntoView({
      behavior: "smooth",
      block: "center"
    });
  } else {
    tableBody.scrollIntoView({
      behavior: "smooth",
      block: "center"
    });
  }
}

function resetDemoResults() {
  hasCompletedReconciliation = false;
  currentResults = [];
document.getElementById("reconciliation-feedback")?.remove();
selectedCaseId = null;

  resultsSection.hidden = true;

  const settlement = document.getElementById(
    "settlement-demo"
  );

  if (settlement) {
    settlement.hidden = true;
  }

  caseList.replaceChildren();
  caseDetail.replaceChildren();

  const filters = document.getElementById(
    "case-workflow-filters"
  );

  if (filters) {
    filters.remove();
  }

  demoMessage.textContent =
    "Bereit. Starte den Abgleich mit den " +
    "angezeigten Beispieldaten.";
}

function selectScenario(key) {
  const datasets = loadScenario(key);

  currentDatasets = datasets;
  selectedScenario = key;
  syncDemoCompanySelectors();

  activeCaseFilter = "all";

  scenarioButtons.forEach(button => {
    const active =
      button.dataset.scenario === key;

    button.classList.toggle(
      "selected",
      active
    );

    button.setAttribute(
      "aria-pressed",
      String(active)
    );
  });

  setText(
    "invoice-count",
    datasets.invoices.length
  );

  setText(
    "return-count",
    datasets.returns.length
  );

  setText(
    "credit-count",
    datasets.credits.length
  );

  resetDemoResults();
  selectTab("invoices");
}

// ===================================================
// 5. RECOVERY WORKFLOW – DATENSPEICHERUNG
// ===================================================


const demoCaseWorkflows = new Map();

const demoWorkflowStorageKey =
  "creditloop-demo-workflows-v1";

function caseStorageKey(result) {
  return selectedScenario + "::" + result.invoiceId;
}

const workflowStatuses = {
  new: "Noch nicht bearbeitet",
  review: "Unterlagen werden geprüft",
  contact: "Lieferantenklärung läuft",
  waiting: "Auf weitere Nachweise warten",
  closed: "Abgeschlossen (Bearbeitung)"
};



function saveDemoWorkflows() {
  try {
    const data = Array.from(
      demoCaseWorkflows.entries()
    );

    if (data.length === 0) {
      localStorage.removeItem(
        demoWorkflowStorageKey
      );
    } else {
      localStorage.setItem(
        demoWorkflowStorageKey,
        JSON.stringify(data)
      );
    }

    return true;
  } catch (error) {
    console.error(
      "Demo-Speicherung fehlgeschlagen:",
      error
    );

    return false;
  }
}

function restoreDemoWorkflows() {
  try {
    const stored = localStorage.getItem(
      demoWorkflowStorageKey
    );

    if (!stored) return;

    const data = JSON.parse(stored);

    if (!Array.isArray(data)) return;

    for (const entry of data) {
      if (
        !Array.isArray(entry) ||
        entry.length !== 2
      ) {
        continue;
      }

      const [key, workflow] = entry;

      if (
        typeof key !== "string" ||
        !Object.hasOwn(
          workflowStatuses,
          workflow?.status
        ) ||
        !Array.isArray(workflow.history)
      ) {
        continue;
      }

      const history = workflow.history.filter(
        item =>
          item &&
          typeof item.status === "string" &&
          typeof item.note === "string"
      );

      // Den automatischen Systemeintrag erhalten.
      if (
        history.length === 0 ||
        history[0].status !==
          "Auffälligkeit automatisch erfasst"
      ) {
        history.unshift({
          status: "Auffälligkeit automatisch erfasst",
          note:
            "Matching-Ergebnis aus fiktiven Beispieldaten."
        });
      }

      
      const lastActivityAt =
        typeof workflow.lastActivityAt === "string" &&
        Number.isFinite(Date.parse(workflow.lastActivityAt))
          ? workflow.lastActivityAt
          : null;

      demoCaseWorkflows.set(key, {
        status: workflow.status,
        lastActivityAt,
        history: [
          history[0],
          ...history.slice(1).slice(-99)
        ]
      });

    }
  } catch (error) {
    console.error(
      "Demo-Daten konnten nicht geladen werden:",
      error
    );
  }
}

function isDemoCaseLocked(result) {
  try {
    if (!window.CreditloopCaseDecisions?.read) {
      console.error(
        "Die Abschlussverwaltung ist nicht verfügbar."
      );
      return true;
    }

    const record = window.CreditloopCaseDecisions.read(
      selectedScenario,
      result.invoiceId
    );

    return record.status === "closed";

  } catch (error) {
    console.error(
      "Abschlussstatus konnte nicht geprüft werden:",
      error
    );

    // Im Fehlerfall keine Bearbeitung zulassen.
    return true;
  }
}

function allowDemoCaseEdit(result) {
  if (!isDemoCaseLocked(result)) {
    return true;
  }

  window.alert(
    "Dieser Fall ist administrativ abgeschlossen.\n\n" +
    "Bitte den Fall zuerst mit einer Begründung " +
    "wiedereröffnen, bevor du Änderungen vornimmst."
  );

  return false;
}

function getCaseWorkflow(result) {
  const key = caseStorageKey(result);

  if (!demoCaseWorkflows.has(key)) {
    demoCaseWorkflows.set(key, {
      status: "new",
      history: [
        {
          status: "Auffälligkeit automatisch erfasst",
          note:
            "Matching-Ergebnis aus fiktiven Beispieldaten."
        }
      ]
    });
  }

  return demoCaseWorkflows.get(key);
}


function hasManualEntries(result) {
  const workflow = demoCaseWorkflows.get(
    caseStorageKey(result)
  );

  return (
    workflow?.history?.length > 1
  );
}

// Echten Zeitpunkt einer Workflow-Aktivität ausgeben.
function formatCaseLastActivity(workflow) {
  const value = workflow?.lastActivityAt;

  if (!value) {
    return (workflow?.history?.length ?? 0) > 1
      ? "Letzte Aktivität: Zeitpunkt nicht dokumentiert"
      : "Letzte Aktivität: Noch keine Bearbeitung";
  }

  const date = new Date(value);

  if (!Number.isFinite(date.getTime())) {
    return "Letzte Aktivität: Zeitpunkt nicht verfügbar";
  }

  const now = new Date();

  const isToday =
    date.getFullYear() === now.getFullYear() &&
    date.getMonth() === now.getMonth() &&
    date.getDate() === now.getDate();

  const time = new Intl.DateTimeFormat("de-CH", {
    hour: "2-digit",
    minute: "2-digit",
    hourCycle: "h23"
  }).format(date);

  if (isToday) {
    return "Letzte Aktivität: Heute, " + time + " Uhr";
  }

  const day = new Intl.DateTimeFormat("de-CH", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric"
  }).format(date);

  return "Letzte Aktivität: " + day + ", " + time + " Uhr";
}

restoreDemoWorkflows();


// ===================================================
// 6. MATCHING-ERGEBNISSE UND FALLLISTE
// ===================================================

function isPotentialIssue(result) {
  return (
    result.difference !== null &&
    result.difference > 0
  ) || [
    "Prüfung erforderlich",
    "Nicht zugeordnet",
    "Gutschrift nicht gefunden",
    "Teilweise Gutschrift"
  ].includes(result.category);
}

function refreshCaseStatusLabels() {
  const wrappers = caseList.querySelectorAll(
    ".case-list-item"
  );

  wrappers.forEach(wrapper => {
    const invoiceId = wrapper.dataset.invoiceId;

    const key =
      selectedScenario + "::" + invoiceId;

    const workflow = demoCaseWorkflows.get(key);

    const status = workflow?.status ?? "new";
    const quickSelect = wrapper.querySelector(
  ".case-quick-status-select"
);

if (quickSelect) {
  quickSelect.value = status;
}

    const label = wrapper.querySelector(
      ".case-workflow-status"
    );

  
if (label) {
  const result = currentResults.find(
    item => item.invoiceId === invoiceId
  );

  const noAmountIssue =
    result && !isPotentialIssue(result);

  const notManuallyEdited =
    status === "new" &&
    (workflow?.history?.length ?? 0) <= 1;

  const hideStatus =
    noAmountIssue && notManuallyEdited;

  label.hidden = hideStatus;
  label.style.display = hideStatus ? "none" : "";

  label.textContent =
    "Status: " +
    (workflowStatuses[status] ??
      workflowStatuses.new);
}


    const resetButton = wrapper.querySelector(
      ".case-list-reset"
    );

    if (resetButton) {
      const manuallyEdited =
        (workflow?.history?.length ?? 0) > 1;

      resetButton.hidden = !manuallyEdited;

      resetButton.style.display =
        manuallyEdited ? "" : "none";
    }

    const activityElement = wrapper.querySelector(
      ".case-last-activity"
    );

    if (activityElement) {
      activityElement.textContent =
        formatCaseLastActivity(workflow);
    }
  });

  applyCaseFilter();
}

function matchesCaseFilter(result) {
  const workflow = demoCaseWorkflows.get(
    caseStorageKey(result)
  );

  const status = workflow?.status ?? "new";

  switch (activeCaseFilter) {
    case "all":
      return true;

    case "open":
      return status === "new" && isPotentialIssue(result);

    case "active":
      return ["review", "contact", "waiting"].includes(status);

    case "closed":
      return status === "closed";

    default:
      return false;
  }
}


function applyCaseFilter() {
  const wrappers = caseList.querySelectorAll(
    ".case-list-item"
  );

  const searchInput = document.getElementById(
    "case-search-input"
  );

  const query = (searchInput?.value ?? "")
    .trim()
    .toLocaleLowerCase("de-CH");

  const visibleResults = currentResults.filter(result => {
    const matchesStatus = matchesCaseFilter(result);

    const searchableText = [
      result.invoiceId,
      result.supplier,
      result.caseId
    ]
      .filter(Boolean)
      .join(" ")
      .toLocaleLowerCase("de-CH");

    return matchesStatus && searchableText.includes(query);
  });

  const visibleIds = new Set(
    visibleResults.map(result => result.invoiceId)
  );

  wrappers.forEach(wrapper => {
    const visible = visibleIds.has(
      wrapper.dataset.invoiceId
    );

    wrapper.hidden = !visible;
    wrapper.style.display = visible ? "" : "none";
  });

  const resultCount = document.getElementById(
    "case-search-count"
  );

  if (resultCount) {
    resultCount.textContent =
      visibleResults.length +
      (visibleResults.length === 1
        ? " Vorgang gefunden"
        : " Vorgänge gefunden");
  }

  if (
    selectedCaseId &&
    visibleIds.has(selectedCaseId)
  ) {
    return;
  }

  if (visibleResults.length > 0) {
    selectCase(visibleResults[0]);
  } else {
    selectedCaseId = null;
    caseDetail.replaceChildren();

    caseDetail.appendChild(
      createElement(
        "p",
        "Keine passenden Vorgänge gefunden.",
        "empty-detail"
      )
    );
  }
}


function createCaseFilters() {
  const existing = document.getElementById(
    "case-workflow-filters"
  );

  if (existing) {
    existing.remove();
  }

  const container = createElement(
    "div",
    null,
    "case-filter-bar"
  );

  container.id = "case-workflow-filters";

  
const filters = [
  ["all", "Alle Vorgänge"],
  ["open", "Offene Prüffälle"],
  ["active", "In Bearbeitung"],
  ["closed", "Abgeschlossen"]
];

  filters.forEach(([value, text]) => {
    const button = createElement(
      "button",
      text,
      "case-filter-button"
    );

    button.type = "button";
    button.dataset.filter = value;

    if (activeCaseFilter === value) {
      button.classList.add("active");
    }

    button.addEventListener("click", () => {
      activeCaseFilter = value;

      container.querySelectorAll(
        ".case-filter-button"
      ).forEach(item => {
        item.classList.remove("active");
      });

      button.classList.add("active");

      applyCaseFilter();
    });

    container.appendChild(button);
  });

    if (
    document.getElementById(
      "case-search-input"
    )?.closest(".cl-unified-toolbar")
  ) {
    caseList.before(container);
    return;
  }
  document.getElementById(
    "case-search-area"
  )?.remove();

  const searchArea = createElement(
    "div",
    null,
    "case-search-area"
  );

  searchArea.id = "case-search-area";

  const searchInput = document.createElement("input");

  searchInput.type = "search";
  searchInput.id = "case-search-input";
  searchInput.className = "case-search-input";
  searchInput.placeholder =
    "Rechnungsnummer, Fall-ID oder Lieferant suchen …";

  searchInput.setAttribute(
    "aria-label",
    "Vorgänge durchsuchen"
  );

  const count = createElement(
    "p",
    "",
    "case-search-count"
  );

  count.id = "case-search-count";

  searchInput.addEventListener(
    "input",
    applyCaseFilter
  );

  searchArea.append(searchInput, count);

  caseList.before(searchArea, container);

}

function selectCase(result) {
  selectedCaseId = result.invoiceId;

  caseList.querySelectorAll(
    ".case-button"
  ).forEach(button => {
    button.classList.toggle(
      "active",
      button.dataset.invoiceId ===
        result.invoiceId
    );
  });

    showCaseDetails(result);
  renderCaseQuickNavigation();
  syncClosureCaseNavigation();
}

function drawResults(results) {
  currentResults = results;

  
  const totalsByCurrency = new Map();

  for (const result of results) {
    if (
      !Number.isSafeInteger(result.difference) ||
      result.difference <= 0 ||
      !result.currency
    ) {
      continue;
    }

    const code = result.currency.toUpperCase();
    const previous = totalsByCurrency.get(code) ?? 0;
    const next = previous + result.difference;

    if (!Number.isSafeInteger(next)) {
      throw new Error(
        "Betragssumme für " + code + " ist zu groß."
      );
    }

    totalsByCurrency.set(code, next);
  }

  const issueCount = results.filter(
    isPotentialIssue
  ).length;

  const currencySummary = [...totalsByCurrency]
    .sort(([a], [b]) => a.localeCompare(b))
    .map(([code, amount]) => formatMoney(amount, code))
    .join("\n");

  setText(
    "summary-difference",
    currencySummary || "Keine positive Betragsdifferenz"
  );

  const summaryElement = document.getElementById(
    "summary-difference"
  );

  if (summaryElement) {
    summaryElement.style.whiteSpace = "pre-line";
  }


  setText(
    "summary-total",
    results.length
  );

  setText(
    "summary-issues",
    issueCount
  );

  caseList.replaceChildren();
  caseDetail.replaceChildren();

  selectedCaseId = null;

  results.forEach(result => {
    const wrapper = createElement(
      "div",
      null,
      "case-list-item"
    );

    wrapper.dataset.invoiceId =
      result.invoiceId;

    const button = createElement(
      "button",
      null,
      "case-button"
    );

    button.type = "button";

    button.dataset.invoiceId =
      result.invoiceId;

    const top = createElement(
      "div",
      null,
      "case-button-top"
    );

    top.append(
      createElement(
        "strong",
        result.invoiceId
      ),
      createElement(
        "span",
        isPotentialIssue(result)
          ? "Prüfen"
          : "Abgeglichen",
        isPotentialIssue(result)
          ? "status-tag warning"
          : "status-tag"
      )
    );

    const bottom = createElement(
      "div",
      null,
      "case-button-bottom"
    );

    bottom.append(
      createElement(
        "span",
        result.supplier
      ),
      createElement(
        "b",
        formatMoney(
          result.difference,
          result.currency
        )
      )
    );

    const caseStatus = createElement(
      "div",
      "",
      "case-workflow-status"
    );

    caseStatus.dataset.invoiceId =
      result.invoiceId;
// Bearbeitungsstatus direkt in der Fallliste ändern.
const quickStatus = createElement(
  "div",
  null,
  "case-quick-status"
);


const quickLabel = createElement(
  "label",
  window.CreditloopI18n?.translate("workflowStatusLabel") ||
    "Bearbeitungsstand",
  "case-quick-status-label"
);


const quickSelect = document.createElement("select");
quickSelect.className = "case-quick-status-select";

quickSelect.id =
  "quick-status-" + selectedScenario + "-" + result.invoiceId;

quickLabel.htmlFor = quickSelect.id;


const quickStatusKeys = {
  new: "statusNew",
  review: "statusReview",
  contact: "statusContact",
  waiting: "statusWaiting",
  closed: "statusClosed"
};

for (const [value, label] of Object.entries(workflowStatuses)) {
  const option = document.createElement("option");

  option.value = value;
  option.textContent =
    window.CreditloopI18n?.translate(quickStatusKeys[value]) ||
    label;

  quickSelect.appendChild(option);
}


quickSelect.value = getCaseWorkflow(result).status;

quickSelect.addEventListener("change", () => {
  if (!allowDemoCaseEdit(result)) {
    quickSelect.value = getCaseWorkflow(result).status;
    return;
  }

  const workflow = getCaseWorkflow(result);
  const newStatus = quickSelect.value;

  if (workflow.status === newStatus) return;

  const scrollBefore = window.scrollY;
  const scrollLeft = window.scrollX;

  workflow.status = newStatus;

  const activityAt = new Date().toISOString();

  workflow.history.push({
    status: workflowStatuses[newStatus],
    note: "Bearbeitungsstand direkt in der Fallliste geändert.",
    at: activityAt
  });

  workflow.lastActivityAt = activityAt;

  const saved = saveDemoWorkflows();

  refreshCaseStatusLabels();

  if (selectedCaseId === result.invoiceId) {
    showCaseDetails(result);
  }

  requestAnimationFrame(() => {
    requestAnimationFrame(() => {
      const row = quickSelect.closest(".case-list-item");

      if (
        quickSelect.isConnected &&
        row &&
        !row.hidden &&
        row.getClientRects().length
      ) {
        window.scrollTo({
          top: scrollBefore,
          left: scrollLeft,
          behavior: "instant"
        });
      }
    });
  });

  if (!saved) {
    window.alert(
      "Status geändert, aber die dauerhafte " +
      "Speicherung im Browser ist fehlgeschlagen."
    );
  }
});

  

quickStatus.append(quickLabel, quickSelect);

    
    const lastActivity = createElement(
      "div",
      formatCaseLastActivity(getCaseWorkflow(result)),
      "case-last-activity"
    );

    button.append(
      top,
      bottom,
      caseStatus,
      lastActivity
    );


    button.addEventListener("click", () => {
      selectCase(result);
    });

    // Zurücksetzen des jeweiligen Falls

    const resetButton = createElement(
      "button",
      "Bearbeitung zurücksetzen",
      "case-list-reset"
    );

    resetButton.type = "button";

    resetButton.addEventListener("click", () => {
        if (!allowDemoCaseEdit(result)) return;
      const confirmed = window.confirm(
        "Bearbeitung wirklich zurücksetzen?\n\n" +
        "Rechnung: " + result.invoiceId + "\n" +
        "Lieferant: " + result.supplier + "\n\n" +
        "Alle manuellen Bearbeitungseinträge " +
        "dieses Falls werden gelöscht."
      );

      if (!confirmed) return;

      demoCaseWorkflows.delete(
        caseStorageKey(result)
      );

      const saved = saveDemoWorkflows();

      // Fallliste sofort aktualisieren.
      refreshCaseStatusLabels();

      // Details des ausgewählten Falls erneuern.
      if (selectedCaseId === result.invoiceId) {
        showCaseDetails(result);
      }

      if (!saved) {
        window.alert(
          "Die Bearbeitung wurde zurückgesetzt, " +
          "aber die dauerhafte Speicherung " +
          "ist fehlgeschlagen."
        );
      }
    });

   wrapper.append(
  button,
  quickStatus,
  resetButton
);

    caseList.appendChild(wrapper);
  });

  createCaseFilters();
  refreshCaseStatusLabels();
    renderCaseQuickNavigation();
  syncClosureCaseNavigation();

  resultsSection.hidden = false;
}

// ===================================================
// 7. FALLDETAILS
// ===================================================

function showCaseDetails(result) {
  caseDetail.replaceChildren();

  const title = createElement(
    "h3",
    result.invoiceId,
    "detail-title"
  );

  const category = createElement(
    "div",
    result.category,
    "detail-category"
  );

  const description = createElement(
    "p",
    result.explanation,
    "detail-description"
  );

  caseDetail.append(
    title,
    category,
    description
  );

  const facts = createElement(
    "div",
    null,
    "detail-facts"
  );

  const factValues = [
    ["Lieferant", result.supplier],
    [
      "Genehmigt",
      formatMoney(
        result.expected,
        result.currency
      )
    ],
    [
      "Gutschriften erfasst",
      formatMoney(
        result.issued,
        result.currency
      )
    ],
    [
      "Potenzielle Differenz",
      formatMoney(
        result.difference,
        result.currency
      )
    ]
  ];

  factValues.forEach(([label, value]) => {
    const fact = createElement(
      "div",
      null,
      "detail-fact"
    );

    fact.append(
      createElement("small", label),
      createElement("strong", value)
    );

    facts.appendChild(fact);
  });

  caseDetail.appendChild(facts);

  const evidence = createElement(
    "div",
    null,
    "detail-evidence"
  );

  const returnIds =
    result.evidence?.returnIds ?? [];

  const creditIds =
    result.evidence?.creditIds ?? [];

  evidence.append(
    createElement(
      "strong",
      "Dokumentreferenzen"
    ),
    createElement(
      "p",
      "Retouren: " +
      (returnIds.join(", ") || "Keine")
    ),
    createElement(
      "p",
      "Gutschriften: " +
      (creditIds.join(", ") || "Keine")
    ),
    createElement(
      "p",
      "Finanzstatus: " +
      result.financialStatus
    )
  );

  caseDetail.appendChild(evidence);


// Vollständige Belegvorschau öffnen.
const documentViewerButton = createElement(
  "button",
  "Musterdokumente öffnen ↗",
  "document-viewer-button"
);

documentViewerButton.type = "button";

documentViewerButton.addEventListener("click", () => {
  window.CreditloopDocuments.open(result.invoiceId);
});

caseDetail.appendChild(documentViewerButton);



  caseDetail.appendChild(
    buildRecoveryReview(result)
  );

  caseDetail.appendChild(
    buildCaseWorkflow(result)
  );

  caseDetail.appendChild(
    buildCaseClosureCheck(result)
  );
  const previewPdfButton = createElement(
  "button",
  "PDF-Fallakte ansehen ↗",
  "document-viewer-button"
);

previewPdfButton.type = "button";
previewPdfButton.style.marginTop = "20px";
previewPdfButton.style.marginRight = "12px";

previewPdfButton.addEventListener("click", async () => {
  const previewTab = window.open("", "_blank");

  if (!previewTab) {
    window.alert(
      "Bitte Pop-ups für localhost erlauben, " +
      "damit die PDF-Vorschau geöffnet werden kann."
    );
    return;
  }

  previewPdfButton.disabled = true;
  previewPdfButton.textContent = "Vorschau wird erstellt ...";

  try {
    await createPreliminaryCasePdf(result, previewTab);
  } catch (error) {
    previewTab.close();
    console.error("PDF-Vorschau:", error);
    window.alert(
      "Die PDF-Vorschau konnte nicht erstellt werden. " +
      error.message
    );
  } finally {
    previewPdfButton.disabled = false;
    previewPdfButton.textContent = "PDF-Fallakte ansehen ↗";
  }
});

caseDetail.appendChild(previewPdfButton);
    const exportButton = createElement(
    "button",
    "PDF-Fallakte herunterladen",
    "document-viewer-button"
  );

  exportButton.type = "button";
    exportButton.classList.add("case-pdf-download");
  exportButton.style.marginTop = "20px";

  exportButton.addEventListener("click", async () => {
    exportButton.disabled = true;
    exportButton.textContent = "PDF wird erstellt ...";

    try {
      await createPreliminaryCasePdf(result);
    } catch (error) {
      console.error("PDF-Fallakte:", error);
      window.alert(
        "Die PDF-Fallakte konnte nicht erstellt werden. " +
        error.message
      );
    } finally {
      exportButton.disabled = false;
      exportButton.textContent =
        "PDF-Fallakte herunterladen";
    }
  });

  caseDetail.appendChild(exportButton);
}

function buildCaseClosureCheck(result) {
    const closureText = value =>
    window.CreditloopI18n?.translateClosureText
      ? window.CreditloopI18n.translateClosureText(value)
      : value;
  const panel = createElement(
    "section",
    null,
    "case-workflow"
  );

  panel.style.marginTop = "24px";

  panel.appendChild(
    createElement("h4", "Abschlussprüfung")
  );

  panel.appendChild(
    createElement(
      "p",
      "Prüfung für " + result.invoiceId +
      " · " + result.supplier,
      "workflow-intro"
    )
  );

  const workflow = getCaseWorkflow(result);

  const checks = [
    {
      label: "Rechnungs- und Retourenabgleich",
      detail:
        "Prüfergebnis: " + result.category +
        ". Genehmigt: " +
        formatMoney(result.expected, result.currency) +
        ". Gutschriften erfasst: " +
        formatMoney(result.issued, result.currency) + "."
    },
    {
      label: "Dokumentierte Bearbeitung",
      detail:
        workflow.history.length > 1
          ? "Manuelle Bearbeitungseinträge vorhanden: " +
            (workflow.history.length - 1) + "."
          : "Bisher nur ein automatischer Systemeintrag."
    },
    {
      label: "Nachweis des Abschlussergebnisses",
      detail:
        "Ein unabhängig bestätigter finanzieller " +
        "Ausgleich oder ein anderes abschließendes " +
        "Klärungsergebnis ist noch nicht nachgewiesen."
    }
  ];

  checks.forEach(check => {
    const item = createElement(
      "div",
      null,
      "recovery-check"
    );

    item.style.marginTop = "14px";

    const details = createElement("div");

    const detailText = createElement("p");

const parts = check.detail.split(
  /(Prüfergebnis:|Genehmigt:|Gutschriften erfasst:|Manuelle Bearbeitungseinträge vorhanden:)/
);

const labels = [
  "Prüfergebnis:",
  "Genehmigt:",
  "Gutschriften erfasst:",
  "Manuelle Bearbeitungseinträge vorhanden:"
];

let isResult = false;

parts.forEach(part => {
  if (!part) return;

  const span = document.createElement("span");
  span.textContent = part;

  if (labels.includes(part)) {
    isResult = true;
  } else if (isResult) {
    span.style.fontWeight = "550";
    isResult = false;
  }

  detailText.appendChild(span);
});

details.append(
  createElement("strong", check.label),
  detailText
);

    item.appendChild(details);
    panel.appendChild(item);
  });

  const status = createElement(
    "p",
    "Fallabschluss noch nicht freigegeben",
    "workflow-feedback"
  );

  status.style.marginTop = "20px";
  status.style.fontWeight = "600";

  panel.appendChild(status);

  panel.appendChild(
    createElement(
      "p",
      "Die Übereinstimmung von Rechnungs-, Retouren- " +
      "und Gutschriftbeträgen genügt allein nicht " +
      "als Nachweis einer Rückgewinnung. Auch eine " +
      "erfasste Buchungszuordnung ist noch kein " +
      "unabhängig bestätigter Ausgleich.",
      "workflow-footnote"
    )
  );

  // ----------------------------------------------
  // Abschlussergebnis – vorläufiger Entwurf
  // ----------------------------------------------

  const closureForm = createElement("div");
  closureForm.style.marginTop = "28px";

  closureForm.appendChild(
    createElement("h4", "Abschlussergebnis dokumentieren")
  );

  closureForm.appendChild(
    createElement(
      "p",
      "Wähle ein mögliches Ergebnis und erfasse die " +
      "zugehörige Nachweisreferenz. Diese Angaben " +
      "gelten zunächst nur als Entwurf.",
      "workflow-intro"
    )
  );

  const outcomeLabel = createElement(
    "label",
    "Ergebnis der Klärung",
    "workflow-label"
  );

  const outcomeSelect = document.createElement("select");
  outcomeSelect.className = "workflow-select";

  outcomeSelect.id = "closure-outcome-" + result.invoiceId;
  outcomeLabel.htmlFor = outcomeSelect.id;

  const options = [
    ["", "Bitte Ergebnis auswählen"],
    ["credit", "Gutschrift ausgestellt – Ausgleich offen"],
    ["full", "Vollständiger Ausgleich – Nachweis prüfen"],
    ["partial", "Teilweiser Ausgleich – Nachweis prüfen"],
    ["rejected", "Ohne Rückgewinnung geklärt"]
  ];

  options.forEach(([value, label]) => {
    const option = document.createElement("option");
    option.value = value;
    option.textContent = label;
    outcomeSelect.appendChild(option);
  });

  const referenceLabel = createElement(
    "label",
    "Referenz des Nachweises",
    "workflow-label"
  );

  referenceLabel.style.marginTop = "18px";

  const referenceInput = document.createElement("input");
  referenceInput.type = "text";
  referenceInput.className = "workflow-select";
  referenceInput.maxLength = 120;
  referenceInput.placeholder =
    "z. B. Buchhaltungsbeleg oder Klärungsreferenz";

  referenceInput.id = "closure-reference-" + result.invoiceId;
  referenceLabel.htmlFor = referenceInput.id;

  const previewButton = createElement(
    "button",
    "Entwurf speichern",
    "workflow-save"
  );

  previewButton.type = "button";
  previewButton.style.marginTop = "18px";

  const feedback = createElement(
    "p",
    "",
    "workflow-feedback"
  );

  feedback.setAttribute("role", "status");

  
  
  // Abschlussentwurf und Änderungshistorie
  // Gemeinsamer Speicherplatz – bestehende Entwürfe bleiben erhalten.
  const closureStorageKey =
    "creditloop-demo-closure-draft-v1::" +
    selectedScenario + "::" + result.invoiceId;

  const historyArea = createElement("div");
  historyArea.style.marginTop = "28px";

  historyArea.appendChild(
    createElement("h4", "Änderungshistorie des Abschlussentwurfs")
  );

  const historyList = createElement("div");
  historyArea.appendChild(historyList);

  let savedDraft = null;

  function isValidClosureDraft(draft) {
    return (
      draft &&
      typeof draft === "object" &&
      options.some(([value]) =>
        value !== "" && value === draft.outcome
      ) &&
      typeof draft.reference === "string" &&
      draft.reference.trim().length > 0 &&
      draft.reference.length <= 120
    );
  }

  function getClosureLabel(value) {
    return options.find(([key]) => key === value)?.[1] ??
      "Unbekanntes Ergebnis";
  }

  function renderClosureHistory() {
    historyList.replaceChildren();

    const revisions = Array.isArray(savedDraft?.revisions)
      ? savedDraft.revisions
      : [];

    if (!revisions.length) {
      historyList.appendChild(
        createElement(
          "p",
          "Noch keine dokumentierten Änderungen vorhanden.",
          "workflow-intro"
        )
      );
      return;
    }

    [...revisions].reverse().forEach((entry, index) => {
      const item = createElement("div");

      item.style.padding = "14px 0";
      item.style.borderBottom = "1px solid #e5ecee";

      const isCurrent = index === 0;

      item.appendChild(
        createElement(
          "strong",
          isCurrent
            ? "Aktueller gespeicherter Entwurf"
            : "Frühere Version"
        )
      );

      item.appendChild(
        createElement(
          "p",
          "Ergebnis: " + getClosureLabel(entry.outcome)
        )
      );

      item.appendChild(
        createElement(
          "p",
          "Nachweisreferenz: " + entry.reference
        )
      );

      const validDate =
        typeof entry.savedAt === "string" &&
        !Number.isNaN(Date.parse(entry.savedAt));

      const dateText = validDate
        ? new Date(entry.savedAt).toLocaleString("de-CH")
        : "Aus bisherigem Entwurf übernommen – Zeitpunkt unbekannt";

      item.appendChild(
        createElement("small", dateText)
      );

      historyList.appendChild(item);
    });
  }

  // Bereits gespeicherten Entwurf laden.
  try {
    const stored = localStorage.getItem(closureStorageKey);

    if (stored) {
      const draft = JSON.parse(stored);

      if (isValidClosureDraft(draft)) {
        savedDraft = {
          outcome: draft.outcome,
          reference: draft.reference,
          revisions: Array.isArray(draft.revisions)
            ? draft.revisions.filter(isValidClosureDraft)
            : []
        };

        outcomeSelect.value = savedDraft.outcome;
        referenceInput.value = savedDraft.reference;

        feedback.textContent =
          "Gespeicherter Entwurf geladen. " +
          "Der Nachweis ist weiterhin ungeprüft.";
      }
    }
  } catch (error) {
    console.error(
      "Abschlussentwurf konnte nicht geladen werden:",
      error
    );
  }

  renderClosureHistory();

  // ----------------------------------------------
  // Finanzielle Plausibilitätsprüfung
  // ----------------------------------------------

  const plausibilityBox = createElement("div");
  plausibilityBox.style.marginTop = "20px";
  plausibilityBox.style.padding = "16px";
  plausibilityBox.style.border = "1px solid #dce6e9";
  plausibilityBox.style.borderRadius = "8px";
  plausibilityBox.style.background = "#f5f8f9";

  const plausibilityText = createElement("p");
  plausibilityText.style.marginTop = "8px";
  plausibilityText.style.whiteSpace = "pre-line";

  plausibilityBox.append(
    createElement("strong", "Automatische Plausibilitätsprüfung"),
    plausibilityText
  );

  function checkClosurePlausibility() {
    const outcome = outcomeSelect.value;

    if (!outcome) {
      plausibilityText.textContent =
        "Bitte zuerst ein Abschlussergebnis auswählen.";
      return;
    }

    try {
      const relatedCredits = currentDatasets.credits.filter(
        credit =>
          String(credit.Rechnungsnummer).trim() ===
          result.invoiceId
      );

      const creditIds = new Set(
        relatedCredits.map(credit =>
          String(credit.Gutschriftnummer).trim()
        )
      );

      const parsed = CreditloopCSV.parse(
        settlementDemoData[selectedScenario]
      );

      if (
        parsed.errors.length ||
        !CreditloopSettlement.isSettlementFile(parsed.headers)
      ) {
        throw new Error("Buchungsdaten konnten nicht geprüft werden.");
      }

      const bookings = parsed.records.filter(booking =>
        creditIds.has(
          String(booking.Gutschriftnummer).trim()
        )
      );

      const report = CreditloopSettlement.reconcile(
        relatedCredits,
        bookings
      );

      if (report.warnings.length) {
        plausibilityText.textContent =
          "Die Buchungsprüfung enthält Warnungen. " +
          "Eine manuelle Prüfung ist erforderlich. " +
          "Kein Abschluss wird bestätigt.";
        return;
      }

      const issued = report.results.reduce(
        (sum, item) => sum + item.issued, 0
      );

      const allocated = report.results.reduce(
        (sum, item) => sum + item.allocated, 0
      );

      const remaining = report.results.reduce(
        (sum, item) => sum + item.remaining, 0
      );

      const expected = result.expected;
      const currency = result.currency;

      const summary =
  "Genehmigt: " +
  formatMoney(expected, currency) + "\n" +
  "Gutschrift ausgestellt: " +
  formatMoney(issued, currency) + "\n" +
  "Buchhalterisch zugeordnet: " +
  formatMoney(allocated, currency) + "\n" +
  "Noch nicht zugeordnet: " +
  formatMoney(remaining, currency) + "\n\n";

      let message = "";

      if (outcome === "credit") {
        message = issued > 0
          ? "Eine Gutschrift ist erfasst. " +
            "Der tatsächliche Ausgleich bleibt ungeprüft."
          : "Keine passende Gutschrift erfasst. " +
            "Dieses Ergebnis ist anhand der Daten nicht belegbar.";

      } else if (outcome === "full") {
        if (issued < expected || remaining > 0) {
          message =
            "Achtung: Ein vollständiger Ausgleich ist anhand " +
            "der vorhandenen Gutschriften und Buchungen " +
            "nicht plausibel. Weitere Nachweise erforderlich.";
        } else {
          message =
            "Die Beträge sind buchhalterisch vollständig " +
            "zugeordnet. Ein tatsächlicher Ausgleich ist " +
            "dadurch jedoch noch nicht unabhängig bestätigt.";
        }

      } else if (outcome === "partial") {
        message = allocated > 0 && remaining > 0
          ? "Eine teilweise Buchungszuordnung ist erkennbar. " +
            "Ein tatsächlicher Teilausgleich ist noch " +
            "nicht unabhängig bestätigt."
          : "Ein teilweiser Ausgleich ist anhand der " +
            "vorhandenen Buchungsdaten nicht eindeutig " +
            "belegbar. Manuelle Prüfung erforderlich.";

      } else if (outcome === "rejected") {
        message =
          "Eine Ablehnung oder Klärung ohne Rückgewinnung " +
          "kann aus diesen Beträgen nicht abgeleitet werden. " +
          "Hierfür ist eine dokumentierte Entscheidung nötig.";
      }

      plausibilityText.textContent =
        summary + message +
        " Die Auswahl bleibt ein ungeprüfter Entwurf.";

    } catch (error) {
      console.error("Abschlussprüfung fehlgeschlagen:", error);

      plausibilityText.textContent =
        "Die finanzielle Plausibilitätsprüfung konnte " +
        "nicht durchgeführt werden. Kein Abschluss freigegeben.";
    }
  }

  outcomeSelect.addEventListener(
    "change",
    checkClosurePlausibility
  );

  checkClosurePlausibility();

  previewButton.addEventListener("click", () => {
        if (!allowDemoCaseEdit(result)) return;
    const outcome = outcomeSelect.value;
    const reference = referenceInput.value.trim();

    if (!outcome) {
      feedback.textContent =
        "Bitte zunächst ein Abschlussergebnis auswählen.";
      return;
    }

    if (!reference) {
      feedback.textContent =
        "Bitte eine Nachweisreferenz eingeben.";
      return;
    }

    if (
      savedDraft?.outcome === outcome &&
      savedDraft?.reference === reference
    ) {
      feedback.textContent =
        "Keine Änderungen vorhanden. " +
        "Der bestehende Entwurf bleibt gespeichert.";
      return;
    }

    const revisions = savedDraft?.revisions
      ? [...savedDraft.revisions]
      : [];

    // Einen alten Entwurf ohne Historie einmalig übernehmen.
    if (savedDraft && revisions.length === 0) {
      revisions.push({
        outcome: savedDraft.outcome,
        reference: savedDraft.reference,
        savedAt: null
      });
    }

    revisions.push({
      outcome,
      reference,
      savedAt: new Date().toISOString()
    });

    const updatedDraft = {
      outcome,
      reference,
      revisions
    };

    try {
      // Ein gemeinsamer Schreibvorgang für Entwurf und Historie.
      localStorage.setItem(
        closureStorageKey,
        JSON.stringify(updatedDraft)
      );

      savedDraft = updatedDraft;

      feedback.textContent =
        "Entwurf und Änderungshistorie gespeichert. " +
        "Der Nachweis bleibt ungeprüft. " +
        "Ein endgültiger Fallabschluss ist nicht freigegeben.";

      renderClosureHistory();

    } catch (error) {
      console.error(
        "Abschlussentwurf konnte nicht gespeichert werden:",
        error
      );

      feedback.textContent =
        "Speicherung fehlgeschlagen. " +
        "Der bisherige Entwurf wurde nicht überschrieben.";
    }
  });

    closureForm.append(
  outcomeLabel,
  outcomeSelect,
  plausibilityBox,
  referenceLabel,
  referenceInput,
  previewButton,
  feedback
);

  // ----------------------------------------------
  // Abschlussfreigabe – fachliche Vorprüfung
  // ----------------------------------------------

  const releasePanel = createElement("div");
  releasePanel.style.marginTop = "28px";
  releasePanel.style.padding = "18px";
  releasePanel.style.border = "1px solid #dce6e9";
  releasePanel.style.borderRadius = "8px";

  releasePanel.appendChild(
        createElement(
      "h4",
      "Prüfung der Abschlussfreigabe - Zentrale Abschlussentscheidung"
    )
  );

  const releaseChecks = createElement("div");
  releasePanel.appendChild(releaseChecks);

  

  // Verständliche Meldungen für die Abschlussprüfung.
  // Die technischen Fehlercodes bleiben intern erhalten.
  const closureErrorMessages = { 
    CURRENCY_MISMATCH_REQUIRES_REVIEW:
      "Dieser Fall enthält unterschiedliche Währungen. " +
      "Eine finanzielle Abschlussfreigabe ist erst nach " +
      "geprüfter Umrechnung und Zuordnung möglich.",

    CASE_DATA_INVALID:
      "Die Falldaten sind unvollständig oder ungültig.",

    INPUT_INVALID:
      "Die Prüfdaten haben ein ungültiges Format.",

    PROOF_INVALID:
      "Ein dokumentierter Nachweis hat einen ungültigen Typ.",

    PROOF_DUPLICATE_OR_EMPTY:
      "Eine Nachweisreferenz fehlt oder wurde mehrfach erfasst.",

    PAYMENT_PROOF_NOT_UNIQUE_OR_FOREIGN:
      "Der Zahlungsnachweis ist unbekannt, mehrfach vorhanden " +
      "oder gehört nicht zu diesem Fall.",

    BOOKING_PROOF_NOT_UNIQUE_OR_FOREIGN:
      "Der Buchungsnachweis konnte diesem Fall nicht " +
      "eindeutig zugeordnet werden.",

    CREDIT_PROOF_NOT_UNIQUE_OR_FOREIGN:
      "Die Gutschriftreferenz ist unbekannt, mehrfach " +
      "vorhanden oder gehört zu einem anderen Fall.",

    CREDIT_DUPLICATE_OR_EMPTY:
      "Eine Gutschriftreferenz fehlt oder ist mehrfach vorhanden.",

    CREDIT_DATA_INVALID:
      "Gutschriftbetrag, Lieferant oder Währung sind nicht plausibel.",

    BOOKING_INVALID_OR_DUPLICATED:
      "Eine Buchung enthält ungültige Daten oder " +
      "eine mehrfach verwendete Buchungsnummer.",

    PAYMENT_INVALID_OR_DUPLICATED:
      "Eine Zahlung enthält ungültige Daten oder " +
      "eine mehrfach verwendete Zahlungsreferenz.",

    TOTAL_UNSAFE:
      "Die finanzielle Summe konnte nicht sicher berechnet werden.",

    CREDIT_OVERALLOCATED:
      "Die Summe der Buchungen und Zahlungen " +
      "übersteigt den verfügbaren Gutschriftbetrag.",

    POTENTIAL_SAME_ECONOMIC_EVENT:
      "Eine Zahlung und eine Buchung könnten " +
      "denselben finanziellen Vorgang betreffen.",

    PAYMENT_CREDIT_NOT_IN_CASE:
      "Die Zahlung gehört zu keiner Gutschrift dieses Falls.",

    FULL_CREDIT_COVERAGE_MISSING:
      "Der genehmigte Betrag wurde nicht vollständig gutgeschrieben."
  };

  function describeClosureErrors(message) {
    return String(message).replace(
      /\b[A-Z][A-Z0-9]*(?:_[A-Z0-9]+)+\b/g,
      code =>
        closureErrorMessages[code] ??
        "Unbekannter Prüfkonflikt (" + code + ")"
    );
  }

  function renderReleaseChecks() {
    releaseChecks.replaceChildren();

    function addCheck(ok, title, description) {
      const item = createElement("div");
      item.style.padding = "12px 0";
      item.style.borderBottom = "1px solid #e5ecee";

      const heading = createElement(
        "strong",
        (ok ? "✓ " : "○ ") + title
      );

      heading.style.color = ok ? "#397D79" : "#334155";

      item.append(
        heading,
        createElement("p", description)
      );

      releaseChecks.appendChild(item);
    }

    let assessment = null;

    try {
      if (
        !window.CreditloopClosure?.audit ||
        !window.CreditloopClosure?.assessRelease
      ) {
        throw new Error(
          "Zentrale Abschlussprüfengine nicht verfügbar."
        );
      }

      const parsedBookings = CreditloopCSV.parse(
        settlementDemoData[selectedScenario]
      );

      if (
        parsedBookings.errors.length ||
        !CreditloopSettlement.isSettlementFile(
          parsedBookings.headers
        )
      ) {
        throw new Error("Buchungsdaten ungültig.");
      }

      const audit = window.CreditloopClosure.audit({
        invoiceId: result.invoiceId,
        supplier: result.supplier,
        currency: result.currency,
        expected: result.expected,
        credits: currentDatasets.credits,
        bookings: parsedBookings.records,
        payments: demoPaymentEvidence[selectedScenario] ?? [],
        proofs: savedProofs,
        outcome: outcomeSelect.value
      });

      assessment = window.CreditloopClosure.assessRelease({
        auditResult: audit,
        outcome: outcomeSelect.value,
        reference: referenceInput.value.trim(),
        expected: result.expected,
        issued: result.issued,
        proofLoadFailed
      });


      releaseChecks.appendChild(
        createElement(
          "p",
          assessment.classification
        )
      );

      addCheck(
        Boolean(outcomeSelect.value),
        "Abschlussart",
        outcomeSelect.value
          ? "Ein vorläufiges Abschlussergebnis ist ausgewählt."
          : "Bitte ein Abschlussergebnis auswählen."
      );

      addCheck(
        Boolean(referenceInput.value.trim()),
        "Abschlussreferenz",
        referenceInput.value.trim()
          ? "Referenz erfasst – Echtheit noch nicht bestätigt."
          : "Eine Abschlussreferenz fehlt."
      );

      addCheck(
        audit.errors.length === 0,
        "Finanzieller Datenabgleich",
        audit.errors.length
          ? "Prüfkonflikte:\n" +
  audit.errors.map(describeClosureErrors).join("\n")
          : "Keine strukturellen Konflikte erkannt."
      );

      const expected = Number.isSafeInteger(result.expected)
        ? result.expected
        : null;

      const issued = Number.isSafeInteger(result.issued)
        ? result.issued
        : null;

      const amountsAreValid =
        expected !== null &&
        issued !== null &&
        expected >= 0 &&
        issued >= 0;

      addCheck(
        amountsAreValid,
        "Betragsdaten",
        amountsAreValid
          ? "Genehmigt: " +
            formatMoney(expected, result.currency) +
            " · Gutschriften: " +
            formatMoney(issued, result.currency)
          : "Betragsdaten unvollständig oder ungültig."
      );

      const evidenceAvailable =
        !proofLoadFailed &&
        Array.isArray(savedProofs) &&
        savedProofs.length > 0;

      addCheck(
        evidenceAvailable,
        "Dokumentierte Nachweise",
        proofLoadFailed
          ? "Gespeicherte Nachweise konnten nicht gelesen werden."
          : evidenceAvailable
            ? savedProofs.length +
              " Nachweis(e) dokumentiert. Dokumentation ist " +
              "keine unabhängige Bestätigung."
            : "Noch keine Nachweise dokumentiert."
      );

      addCheck(
        false,
        "Unabhängige Abschlussverifikation",
        "Ein belastbarer Zahlungs-, Verrechnungs- oder " +
        "Klärungsnachweis wurde noch nicht unabhängig " +
        "bestätigt. Simulierte Daten genügen nicht."
      );

      if (assessment.blockers.length > 0) {
        releaseChecks.appendChild(
          createElement("h5", "Offene Sperrgründe")
        );

        assessment.blockers.forEach(reason => {
          const item = createElement(
  "p",
  "• " + describeClosureErrors(reason)
);
          item.style.margin = "8px 0";
          releaseChecks.appendChild(item);
        });
      }

      releaseChecks.appendChild(
        createElement(
          "p",
          "Bestätigte Rückgewinnung: " +
          formatMoney(
            assessment.confirmedRecoveredMinor,
            result.currency
          )
        )
      );

    } catch (error) {
      console.error(
        "Zentrale Freigabecheckliste:",
        error
      );

      addCheck(
        false,
        "Prüfung fehlgeschlagen",
        "Die Abschlussbedingungen konnten nicht " +
        "zuverlässig ausgewertet werden."
      );
    }

    const releaseButton = createElement(
      "button",
      "Finale Fallakte freigeben",
      "workflow-save"
    );

    releaseButton.type = "button";
    releaseButton.disabled = !assessment?.canRelease;
    releaseButton.style.marginTop = "18px";

    releaseButton.title =
      "Die finale Freigabe ist ohne verifizierte " +
      "Abschlussnachweise nicht möglich.";

    releaseChecks.appendChild(releaseButton);

    releaseChecks.appendChild(
      createElement(
        "p",
        "Vorläufige Demo-Prüfung. Keine echte " +
        "finanzielle Rückgewinnung bestätigt.",
        "workflow-footnote"
      )
    );
  }


  outcomeSelect.addEventListener(
    "change",
    renderReleaseChecks
  );

  referenceInput.addEventListener(
    "input",
    renderReleaseChecks
  );

    // Erste Prüfung erfolgt nach dem Laden der Nachweise.

  closureForm.appendChild(releasePanel);

  // ----------------------------------------------
  // Dokumentierte Abschlussnachweise
  // ----------------------------------------------

  const proofPanel = createElement("div");
  proofPanel.style.marginTop = "28px";

  proofPanel.appendChild(
    createElement("h4", "Abschlussnachweise dokumentieren")
  );

  proofPanel.appendChild(
    createElement(
      "p",
      "Hier können vorhandene Nachweise zu diesem " +
      "Fall erfasst werden. Eine Dokumentation " +
      "bedeutet noch keine erfolgreiche Verifikation.",
      "workflow-intro"
    )
  );

  const proofTypeLabel = createElement(
    "label",
    "Art des Nachweises",
    "workflow-label"
  );

  const proofType = document.createElement("select");
  proofType.className = "workflow-select";
  proofType.id = "proof-type-" + result.invoiceId;
  proofTypeLabel.htmlFor = proofType.id;

    const proofTypes = [
    ["", "Bitte Nachweisart auswählen"],
    ["credit", "Ausgestellte Lieferantengutschrift"],
    ["payment", "Zahlungseingang / Banknachweis"],
    ["offset", "Verrechnung / Buchungsbeleg"],
    ["supplier", "Schriftliche Lieferantenentscheidung"],
    ["other", "Sonstiger Klärungsnachweis"]
  ];

  proofTypes.forEach(([value, label]) => {
    const option = document.createElement("option");
    option.value = value;
    option.textContent = label;
    proofType.appendChild(option);
  });

  const proofReferenceLabel = createElement(
    "label",
    "Dokument- oder Buchungsreferenz",
    "workflow-label"
  );
  proofReferenceLabel.style.marginTop = "16px";

  const proofReference = document.createElement("input");
  proofReference.type = "text";
  proofReference.className = "workflow-select";
  proofReference.maxLength = 120;
  proofReference.placeholder = "z. B. BK-102";
  proofReference.id = "proof-reference-" + result.invoiceId;
  proofReferenceLabel.htmlFor = proofReference.id;

  const proofNoteLabel = createElement(
    "label",
    "Beschreibung des Nachweises",
    "workflow-label"
  );
  proofNoteLabel.style.marginTop = "16px";

  const proofNote = document.createElement("textarea");
  proofNote.className = "workflow-textarea";
  proofNote.rows = 3;
  proofNote.maxLength = 500;
  proofNote.placeholder =
    "Was dokumentiert dieser Beleg? " +
    "Was muss noch überprüft werden?";
  proofNote.id = "proof-note-" + result.invoiceId;
  proofNoteLabel.htmlFor = proofNote.id;

  const proofSave = createElement(
    "button",
    "Nachweis dokumentieren",
    "workflow-save"
  );
  proofSave.type = "button";
  proofSave.style.marginTop = "16px";

  const proofFeedback = createElement(
    "p",
    "",
    "workflow-feedback"
  );
  proofFeedback.setAttribute("role", "status");

  const proofList = createElement("div");
  proofList.style.marginTop = "22px";

  const proofStorageKey =
    "creditloop-demo-closure-proofs-v1::" +
    selectedScenario + "::" + result.invoiceId;

  function validProof(entry) {
    return (
      entry &&
      typeof entry === "object" &&
      proofTypes.some(([value]) =>
        value !== "" && value === entry.type
      ) &&
      typeof entry.reference === "string" &&
      entry.reference.trim().length > 0 &&
      entry.reference.length <= 120 &&
      typeof entry.note === "string" &&
      entry.note.length <= 500 &&
      typeof entry.savedAt === "string" &&
      !Number.isNaN(Date.parse(entry.savedAt))
    );
  }

  let savedProofs = [];
  let proofLoadFailed = false;

  try {
    const storedProofs = localStorage.getItem(proofStorageKey);

    if (storedProofs !== null) {
      const parsedProofs = JSON.parse(storedProofs);

      if (!Array.isArray(parsedProofs) ||
          !parsedProofs.every(validProof)) {
        throw new Error("Ungültige Nachweisdaten.");
      }

      savedProofs = parsedProofs;
    }
  } catch (error) {
    proofLoadFailed = true;
    console.error("Nachweise konnten nicht geladen werden:", error);
    proofFeedback.textContent =
      "Vorhandene Nachweisdaten konnten nicht gelesen werden. " +
      "Die Speicherung bleibt zum Schutz der Daten gesperrt.";
    proofSave.disabled = true;
  }

  function buildCombinedSettlementAudit() {
    const panel = createElement("div");
    panel.style.marginTop = "16px";
    panel.style.padding = "16px";
    panel.style.background = "#f3f7f8";
    panel.style.borderRadius = "8px";
    panel.style.whiteSpace = "pre-line";

    panel.appendChild(
      createElement(
        "strong",
        "Gemeinsame Prüfung auf Doppelzählungen"
      )
    );

    const messages = [];

    function toCents(value) {
      if (value === null || value === undefined ||
          String(value).trim() === "") return null;

      const amount = Number(value);
      const cents = Math.round(amount * 100);

      return Number.isFinite(amount) &&
        amount >= 0 &&
        Number.isSafeInteger(cents) &&
        Math.abs(amount * 100 - cents) < 0.000001
          ? cents
          : null;
    }

    function hasDuplicateReferences(items, field) {
      const refs = items.map(item =>
        String(item[field] ?? "").trim()
      );

      return refs.some((ref, index) =>
        !ref || refs.indexOf(ref) !== index
      );
    }

    try {
      const parsed = CreditloopCSV.parse(
        settlementDemoData[selectedScenario]
      );

      if (
        parsed.errors.length ||
        !CreditloopSettlement.isSettlementFile(parsed.headers)
      ) {
        throw new Error("Buchungsdaten ungültig.");
      }

      const allBookings = parsed.records;
      const allPayments =
        demoPaymentEvidence[selectedScenario] ?? [];

      const credits = currentDatasets.credits.filter(
        credit =>
          String(credit.Rechnungsnummer ?? "").trim() ===
          result.invoiceId
      );

      const duplicateProofs = savedProofs.filter(
        proof => proof.type === "payment" ||
                 proof.type === "offset"
      );

      const proofKeys = duplicateProofs.map(
        proof => proof.type + "::" + proof.reference.trim()
      );

      if (new Set(proofKeys).size !== proofKeys.length) {
        messages.push(
          "WARNUNG: Eine Zahlungs- oder Buchungsreferenz " +
          "wurde mehrfach als Nachweis dokumentiert."
        );
      }

      if (credits.length === 0) {
        messages.push(
          "Keine ausgestellte Gutschrift für diesen Fall vorhanden."
        );
      }

      for (const credit of credits) {
        const creditId =
          String(credit.Gutschriftnummer ?? "").trim();

        const creditAmount = toCents(credit.Betrag);

        const bookings = allBookings.filter(
          booking =>
            String(booking.Gutschriftnummer ?? "").trim() ===
            creditId
        );

        const payments = allPayments.filter(
          payment =>
            String(payment.creditId ?? "").trim() ===
            creditId
        );

        const issues = [];
        let bookingTotal = 0;
        let paymentTotal = 0;

        if (
          !creditId ||
          currentDatasets.credits.filter(
            item =>
              String(item.Gutschriftnummer ?? "").trim() ===
              creditId
          ).length !== 1
        ) {
          issues.push("Gutschriftreferenz nicht eindeutig");
        }

        if (creditAmount === null || creditAmount <= 0) {
          issues.push("Gutschriftbetrag ungültig");
        }

        if (hasDuplicateReferences(
          bookings, "Buchungsnummer"
        )) {
          issues.push("Buchungsreferenz doppelt oder leer");
        }

        if (hasDuplicateReferences(
          payments, "paymentId"
        )) {
          issues.push("Zahlungsreferenz doppelt oder leer");
        }

        for (const booking of bookings) {
          const amount = toCents(booking.Betrag);

          if (
            amount === null || amount <= 0 ||
            booking.Waehrung !== credit.Waehrung ||
            allBookings.filter(
              item => item.Buchungsnummer ===
                booking.Buchungsnummer
            ).length !== 1
          ) {
            issues.push("Ungültige oder uneindeutige Buchung");
          } else {
            bookingTotal += amount;
          }
        }

        for (const payment of payments) {
          if (
            !Number.isSafeInteger(payment.amount) ||
            payment.amount <= 0 ||
            payment.currency !== credit.Waehrung ||
            payment.invoiceId !== result.invoiceId ||
            payment.supplier !== result.supplier ||
            payment.demoOnly !== true ||
            allPayments.filter(
              item => item.paymentId === payment.paymentId
            ).length !== 1
          ) {
            issues.push("Ungültige oder uneindeutige Zahlung");
          } else {
            paymentTotal += payment.amount;
          }
        }

        const combined = bookingTotal + paymentTotal;

        if (!Number.isSafeInteger(combined)) {
          issues.push("Summenberechnung nicht sicher");
        }

        if (
          creditAmount !== null &&
          combined > creditAmount
        ) {
          issues.push(
            "ÜBERBUCHUNG: Buchungen und Zahlungen " +
            "übersteigen die Gutschrift"
          );
        }

        if (bookingTotal > 0 && paymentTotal > 0) {
          issues.push(
            "MÖGLICHE DOPPELZÄHLUNG: Zahlung und " +
            "Buchung betreffen dieselbe Gutschrift. " +
            "Wirtschaftliche Vorgänge gesondert abgleichen"
          );
        }

        messages.push(
          "Gutschrift: " + creditId +
          "\nGutschriftbetrag: " +
          (creditAmount === null
            ? "Ungültig"
            : formatMoney(creditAmount, credit.Waehrung)) +
          "\nBuchhalterisch zugeordnet: " +
          formatMoney(bookingTotal, credit.Waehrung) +
          "\nSimulierte Zahlungen: " +
          formatMoney(paymentTotal, credit.Waehrung) +
          "\nRechnerische Summe: " +
          formatMoney(combined, credit.Waehrung) +
          "\n" +
          (issues.length
            ? "PRÜFUNG ERFORDERLICH:\n" +
              issues.join("\n")
            : "Keine Doppelzählung aus diesen Daten erkennbar.") +
          "\nKeine unabhängige Rückgewinnung bestätigt."
        );
      }

    } catch (error) {
      console.error("Doppelzählungsprüfung:", error);
      messages.push(
        "Gemeinsame Prüfung fehlgeschlagen. " +
        "Keine finanzielle Bestätigung möglich."
      );
    }

    panel.appendChild(
      createElement("p", messages.join("\n\n"))
    );

    return panel;
  }
  let proofPage = 1;
  const proofPageSize = 5;
  function renderProofs() {
    proofList.replaceChildren();

    proofList.appendChild(
      createElement("h5", "Dokumentierte Nachweise")
    );
      
    // ---------------------------------------------
    // Zentrale finanzielle Abschlussprüfung
    // ---------------------------------------------

    const auditPanel = createElement("div");
    auditPanel.style.marginTop = "16px";
    auditPanel.style.padding = "16px";
    auditPanel.style.background = "#f3f7f8";
    auditPanel.style.borderRadius = "8px";

    auditPanel.appendChild(
      createElement(
        "strong",
        "Zentrale finanzielle Abschlussprüfung"
      )
    );

    try {
      if (!window.CreditloopClosure) {
        throw new Error(
          "Abschlussprüfengine wurde nicht geladen."
        );
      }

      const parsedBookings = CreditloopCSV.parse(
        settlementDemoData[selectedScenario]
      );

      if (
        parsedBookings.errors.length ||
        !CreditloopSettlement.isSettlementFile(
          parsedBookings.headers
        )
      ) {
        throw new Error(
          "Buchungsdaten sind ungültig."
        );
      }

      const audit = window.CreditloopClosure.audit({
        invoiceId: result.invoiceId,
        supplier: result.supplier,
        currency: result.currency,
        expected: result.expected,
        credits: currentDatasets.credits,
        bookings: parsedBookings.records,
        payments:
          demoPaymentEvidence[selectedScenario] ?? [],
        proofs: savedProofs,
        outcome: outcomeSelect.value
      });

      const errorLabels = {
        CASE_DATA_INVALID:
          "Falldaten unvollständig oder ungültig",
        INPUT_INVALID:
          "Prüfdaten haben ein ungültiges Format",
        PROOF_INVALID:
          "Ungültiger Nachweistyp",
        PROOF_DUPLICATE_OR_EMPTY:
          "Nachweisreferenz doppelt oder leer",
        PAYMENT_PROOF_NOT_UNIQUE_OR_FOREIGN:
          "Zahlungsnachweis unbekannt, mehrfach oder fallfremd",
        BOOKING_PROOF_NOT_UNIQUE_OR_FOREIGN:
          "Buchungsnachweis unbekannt, mehrfach oder fallfremd",
        CREDIT_PROOF_NOT_UNIQUE_OR_FOREIGN:
          "Gutschriftnachweis unbekannt, mehrfach oder fallfremd",
        CREDIT_DUPLICATE_OR_EMPTY:
          "Gutschriftreferenz doppelt oder leer",
        CREDIT_DATA_INVALID:
          "Gutschriftdaten ungültig",
        BOOKING_INVALID_OR_DUPLICATED:
          "Buchungsreferenz oder Buchungsdaten ungültig",
        PAYMENT_INVALID_OR_DUPLICATED:
          "Zahlungsreferenz oder Zahlungsdaten ungültig",
        TOTAL_UNSAFE:
          "Betragssumme nicht zuverlässig berechenbar",
        CREDIT_OVERALLOCATED:
          "Überbuchung: Gutschriftbetrag überschritten",
        POTENTIAL_SAME_ECONOMIC_EVENT:
          "Mögliche Doppelzählung von Zahlung und Buchung",
        PAYMENT_CREDIT_NOT_IN_CASE:
          "Zahlung gehört nicht zu einer Gutschrift dieses Falls",
        FULL_CREDIT_COVERAGE_MISSING:
          "Genehmigter Betrag nicht vollständig gutgeschrieben"
      };

      audit.groups.forEach(group => {
        const lines = [
          "Gutschrift: " + group.creditId,
          "Gutschriftbetrag: " +
            formatMoney(group.creditMinor, result.currency),
          "Buchhalterisch zugeordnet: " +
            formatMoney(group.bookedMinor, result.currency),
          "Simulierte Zahlungen: " +
            formatMoney(group.paymentMinor, result.currency),
          "Rechnerische Summe: " +
            formatMoney(group.combinedMinor, result.currency)
        ];

        const detail = createElement(
          "p",
          lines.join("\n")
        );

        detail.style.whiteSpace = "pre-line";
        detail.style.marginTop = "12px";
        auditPanel.appendChild(detail);
      });

      if (audit.errors.length > 0) {
        const warnings = audit.errors.map(
          code => errorLabels[code] ?? code
        );

        const warningText = createElement(
          "p",
          "Prüfung erforderlich:\n" +
            warnings.join("\n")
        );

        warningText.style.whiteSpace = "pre-line";
        warningText.style.marginTop = "12px";

        auditPanel.appendChild(warningText);
      } else {
        auditPanel.appendChild(
          createElement(
            "p",
            "Keine strukturellen Konflikte erkannt."
          )
        );
      }

      auditPanel.appendChild(
        createElement(
          "p",
          "Unabhängig bestätigte Rückgewinnung: " +
            formatMoney(
              audit.confirmedRecoveredMinor,
              result.currency
            ) +
            ". Finale finanzielle Freigabe weiterhin gesperrt."
        )
      );

    } catch (error) {
      console.error(
        "Zentrale Abschlussprüfung:",
        error
      );

      auditPanel.appendChild(
        createElement(
          "p",
          "Die zentrale Abschlussprüfung konnte " +
            "nicht durchgeführt werden. " +
            "Ein finanzieller Abschluss darf " +
            "nicht bestätigt werden."
        )
      );
    }

    proofList.appendChild(auditPanel);


    if (!savedProofs.length) {
      proofList.appendChild(
        createElement(
          "p",
          "Noch keine Nachweise dokumentiert.",
          "workflow-intro"
        )
      );
      return;
    }

        const proofPageCount = Math.max(
      1,
      Math.ceil(savedProofs.length / proofPageSize)
    );

    proofPage = Math.min(Math.max(proofPage, 1), proofPageCount);

    const proofStart = (proofPage - 1) * proofPageSize;

    [...savedProofs]
      .reverse()
      .slice(proofStart, proofStart + proofPageSize)
      .forEach(entry => {
      const item = createElement("div");
      item.style.padding = "14px 0";
      item.style.borderBottom = "1px solid #e5ecee";

      const typeLabel = proofTypes.find(
        ([value]) => value === entry.type
      )?.[1] ?? "Unbekannte Nachweisart";

      item.append(
        createElement("strong", typeLabel),
        createElement("p", "Referenz: " + entry.reference),
        createElement("p", "Beschreibung: " + entry.note),
        createElement(
          "small",
          "Erfasst am: " +
          new Date(entry.savedAt).toLocaleString("de-CH")
        ),
        createElement(
          "p",
          "Status: Dokumentiert – noch nicht verifiziert"
        )
      );

      // Automatische Zuordnung dokumentierter Buchungsbelege.
      // Nur Datensatzabgleich – keine Zahlungsbestätigung.

      // Automatischer Abgleich von Lieferantengutschriften.
      // Eine ausgestellte Gutschrift ist kein Zahlungsnachweis.
      if (entry.type === "credit") {
        const verification = createElement("div");
        verification.style.marginTop = "12px";
        verification.style.padding = "12px";
        verification.style.background = "#f3f7f8";
        verification.style.borderRadius = "8px";

        verification.appendChild(
          createElement("strong", "Automatischer Gutschriftabgleich")
        );

        let message = "";

        try {
          const matchingCredits = currentDatasets.credits.filter(
            credit =>
              String(credit.Gutschriftnummer ?? "").trim() ===
              entry.reference.trim()
          );

          if (matchingCredits.length === 0) {
            message =
              "Gutschriftreferenz in den vorhandenen " +
              "Beispieldaten nicht gefunden. Manuelle Prüfung erforderlich.";

          } else if (matchingCredits.length > 1) {
            message =
              "Gutschriftreferenz mehrfach vorhanden. " +
              "Eine eindeutige Zuordnung ist nicht möglich.";

          } else {
            const credit = matchingCredits[0];

            const correctCase =
              String(credit.Rechnungsnummer ?? "").trim() ===
                result.invoiceId &&
              String(credit.Lieferant ?? "").trim() ===
                result.supplier;

            const currency =
              String(credit.Waehrung ?? "").trim();

            const amount = Number(credit.Betrag);
            const amountCents = Math.round(amount * 100);

            const validAmount =
              String(credit.Betrag ?? "").trim() !== "" &&
              Number.isFinite(amount) &&
              amount > 0 &&
              Number.isSafeInteger(amountCents) &&
              Math.abs(amount * 100 - amountCents) < 0.000001;

            if (!correctCase) {
              message =
                "Gutschrift gefunden, aber Rechnung oder " +
                "Lieferant stimmen nicht mit diesem Fall überein.";

            } else if (
              currency !== result.currency ||
              !validAmount
            ) {
              message =
                "Gutschrift gehört zum Fall, aber Betrag " +
                "oder Währung müssen geprüft werden.";

            } else {
              message =
                "Gutschriftreferenz gefunden und dem Fall zugeordnet.\n" +
                "Gutschrift: " + credit.Gutschriftnummer + "\n" +
                "Rechnung: " + credit.Rechnungsnummer + "\n" +
                "Lieferant: " + credit.Lieferant + "\n" +
                "Betrag: " +
                formatMoney(amountCents, currency) + "\n\n" +
                "Die Gutschrift ist in den Beispieldaten erfasst.\n" +
                "Eine Zahlung oder tatsächliche Verrechnung " +
                "ist dadurch nicht bestätigt.";
            }
          }

        } catch (error) {
          console.error("Gutschriftabgleich fehlgeschlagen:", error);
          message =
            "Der automatische Gutschriftabgleich " +
            "konnte nicht abgeschlossen werden.";
        }

        const verificationResult = createElement("p", message);
        verificationResult.style.whiteSpace = "pre-line";
        verificationResult.style.marginTop = "8px";

        verification.appendChild(verificationResult);
        item.appendChild(verification);
      }


      // ----------------------------------------------
      // Automatischer Abgleich fiktiver Zahlungseingänge
      // ----------------------------------------------
      if (entry.type === "payment") {
        const verification = createElement("div");
        verification.style.marginTop = "12px";
        verification.style.padding = "12px";
        verification.style.background = "#f3f7f8";
        verification.style.borderRadius = "8px";

        verification.appendChild(
          createElement("strong", "Automatischer Zahlungsabgleich")
        );

        let message = "";

        try {
          const payments =
            demoPaymentEvidence[selectedScenario] ?? [];

          const matchingPayments = payments.filter(
            payment =>
              payment.paymentId === entry.reference.trim()
          );

          if (matchingPayments.length === 0) {
            message =
              "Zahlungsreferenz in den vorbereiteten " +
              "Beispieldaten nicht gefunden.";

          } else if (matchingPayments.length > 1) {
            message =
              "Zahlungsreferenz mehrfach vorhanden. " +
              "Keine eindeutige Zuordnung möglich.";

          } else {
            const payment = matchingPayments[0];

            const matchingCredits =
              currentDatasets.credits.filter(
                credit =>
                  String(credit.Gutschriftnummer ?? "").trim() ===
                  String(payment.creditId ?? "").trim()
              );

            const credit = matchingCredits[0];

            const correctCase =
              payment.invoiceId === result.invoiceId &&
              payment.supplier === result.supplier &&
              payment.currency === result.currency &&
              matchingCredits.length === 1 &&
              String(credit.Rechnungsnummer ?? "").trim() ===
                result.invoiceId &&
              String(credit.Lieferant ?? "").trim() ===
                result.supplier &&
              String(credit.Waehrung ?? "").trim() ===
                result.currency;

            const creditAmount = Number(credit?.Betrag);
            const creditCents = Math.round(creditAmount * 100);

            const validAmount =
              Number.isSafeInteger(payment.amount) &&
              payment.amount > 0 &&
              Number.isFinite(creditAmount) &&
              creditAmount > 0 &&
              Number.isSafeInteger(creditCents) &&
              Math.abs(creditAmount * 100 - creditCents) <
                0.000001 &&
              payment.amount <= creditCents &&
              Number.isSafeInteger(result.expected) &&
              payment.amount <= result.expected;

            const validDate =
              typeof payment.paymentDate === "string" &&
              /^\d{4}-\d{2}-\d{2}$/.test(payment.paymentDate) &&
              !Number.isNaN(
                Date.parse(payment.paymentDate + "T00:00:00Z")
              );

            if (!correctCase) {
              message =
                "Zahlung gefunden, aber Rechnung, Lieferant, " +
                "Gutschrift oder Währung passen nicht " +
                "eindeutig zu diesem Fall.";

            } else if (!validAmount || !validDate) {
              message =
                "Zahlung gehört zum Fall, aber Betrag " +
                "oder Zahlungsdatum sind nicht plausibel.";

            } else if (payment.demoOnly !== true) {
              message =
                "Zahlungsquelle ist nicht als vorbereiteter " +
                "Demo-Testdatensatz gekennzeichnet.";

            } else {
              message =
                "Zahlungsreferenz gefunden und dem Fall zugeordnet.\n" +
                "Zahlung: " + payment.paymentId + "\n" +
                "Rechnung: " + payment.invoiceId + "\n" +
                "Gutschrift: " + payment.creditId + "\n" +
                "Lieferant: " + payment.supplier + "\n" +
                "Zahlungsbetrag: " +
                formatMoney(payment.amount, payment.currency) + "\n" +
                "Zahlungsdatum: " + payment.paymentDate + "\n\n" +
                "Referenzen, Betrag und Währung sind " +
                "innerhalb der fiktiven Testdaten plausibel.\n\n" +
                "WICHTIG: Dies ist ein simulierter Zahlungseingang. " +
                "Es wurde kein echter Bankumsatz unabhängig bestätigt.";
            }
          }

        } catch (error) {
          console.error("Zahlungsabgleich fehlgeschlagen:", error);
          message =
            "Der automatische Zahlungsabgleich " +
            "konnte nicht abgeschlossen werden.";
        }

        const resultText = createElement("p", message);
        resultText.style.whiteSpace = "pre-line";
        resultText.style.marginTop = "8px";

        verification.appendChild(resultText);
        item.appendChild(verification);
      }

      if (entry.type === "offset") {
        const verification = createElement("div");
        verification.style.marginTop = "12px";
        verification.style.padding = "12px";
        verification.style.background = "#f3f7f8";
        verification.style.borderRadius = "8px";

        verification.appendChild(
          createElement("strong", "Automatischer Referenzabgleich")
        );

        let verificationMessage = "";

        try {
          const parsedBookings = CreditloopCSV.parse(
            settlementDemoData[selectedScenario]
          );

          if (
            parsedBookings.errors.length ||
            !CreditloopSettlement.isSettlementFile(
              parsedBookings.headers
            )
          ) {
            throw new Error("Buchungsdaten ungültig.");
          }

          const matchingBookings = parsedBookings.records.filter(
            booking =>
              String(booking.Buchungsnummer ?? "").trim() ===
              entry.reference.trim()
          );

          if (matchingBookings.length === 0) {
            verificationMessage =
              "Referenz nicht in den vorhandenen " +
              "Buchungsdaten gefunden.";

          } else if (matchingBookings.length > 1) {
            verificationMessage =
              "Die Buchungsreferenz ist mehrfach vorhanden. " +
              "Eine eindeutige Zuordnung ist nicht möglich.";

          } else {
            const booking = matchingBookings[0];

            const relatedCredit = currentDatasets.credits.find(
              credit =>
                String(credit.Gutschriftnummer ?? "").trim() ===
                String(booking.Gutschriftnummer ?? "").trim()
            );

            if (
              !relatedCredit ||
              String(relatedCredit.Rechnungsnummer ?? "").trim() !==
                result.invoiceId ||
              String(relatedCredit.Lieferant ?? "").trim() !==
                result.supplier
            ) {
              verificationMessage =
                "Referenz gefunden, aber nicht eindeutig " +
                "diesem Fall und Lieferanten zugeordnet.";

            } else {
              const bookingCurrency =
                String(booking.Waehrung ?? "").trim();

              const creditCurrency =
                String(relatedCredit.Waehrung ?? "").trim();

              const bookingAmount = Number(booking.Betrag);
              const creditAmount = Number(relatedCredit.Betrag);

              const amountsValid =
                Number.isFinite(bookingAmount) &&
                Number.isFinite(creditAmount) &&
                bookingAmount > 0 &&
                creditAmount > 0 &&
                Math.round(bookingAmount * 100) <=
                  Math.round(creditAmount * 100);

              if (
                bookingCurrency !== creditCurrency ||
                bookingCurrency !== result.currency ||
                !amountsValid
              ) {
                verificationMessage =
                  "Buchung und Gutschrift gehören zum Fall, " +
                  "aber Betrag oder Währung müssen geprüft werden.";

              } else {
                verificationMessage =
                  "Referenz gefunden und dem Fall zugeordnet.\n" +
                  "Gutschrift: " +
                  relatedCredit.Gutschriftnummer + "\n" +
                  "Buchung: " + booking.Buchungsnummer + "\n" +
                  "Zuordnungsbetrag: " +
                  new Intl.NumberFormat("de-CH", {
                    style: "currency",
                    currency: bookingCurrency
                  }).format(bookingAmount) + "\n" +
                  "Betrag und Währung dieses Buchungseintrags " +
                  "sind plausibel.\n\n" +
                  "Der tatsächliche finanzielle Ausgleich " +
                  "ist weiterhin nicht unabhängig bestätigt.";
              }
            }
          }

        } catch (error) {
          console.error("Referenzabgleich fehlgeschlagen:", error);

          verificationMessage =
            "Der Referenzabgleich konnte nicht durchgeführt werden.";
        }

        const verificationResult = createElement(
          "p",
          verificationMessage
        );

        verificationResult.style.whiteSpace = "pre-line";
        verificationResult.style.marginTop = "8px";

        verification.appendChild(verificationResult);
        // Zugehörige Originalbelege im bestehenden Viewer öffnen.
if (
  verificationMessage.startsWith(
    "Referenz gefunden und dem Fall zugeordnet."
  )
) {
  const openEvidenceButton = createElement(
    "button",
    "Zugehörige Originalbelege öffnen ↗",
    "document-viewer-button"
  );

  openEvidenceButton.type = "button";
  openEvidenceButton.style.marginTop = "14px";

  openEvidenceButton.addEventListener("click", () => {
    if (!window.CreditloopDocuments?.open) {
            window.alert(
        closureText(
          "Der Dokumentenviewer ist nicht verfügbar."
        )
      );
      return;
    }

    window.CreditloopDocuments.open(
      result.invoiceId,
      "booking"
    );
  });

  verification.appendChild(openEvidenceButton);
}
        item.appendChild(verification);
      }

         proofList.appendChild(item);
    });

    const pagination = createElement(
      "nav",
      null,
      "cl-proof-pagination"
    );

    const summary = createElement("span");
    summary.dataset.proofPageSummary = "";
    summary.dataset.page = String(proofPage);
    summary.dataset.pages = String(proofPageCount);
    summary.dataset.total = String(savedProofs.length);
    pagination.appendChild(summary);

    function addPageButton(label, page, disabled, current = false) {
      const button = createElement("button", label);
      button.type = "button";
      button.disabled = disabled;

      if (current) {
        button.setAttribute("aria-current", "page");
      }

      button.addEventListener("click", () => {
        if (proofPage === page) return;

        proofPage = page;
        renderProofs();

        proofList.querySelector(
          '[aria-current="page"]'
        )?.focus({ preventScroll: true });
      });

      pagination.appendChild(button);
      return button;
    }

    if (proofPageCount > 1) {
      addPageButton(
        "←",
        proofPage - 1,
        proofPage === 1
      ).dataset.proofPagePrevious = "";

      for (let page = 1; page <= proofPageCount; page += 1) {
        if (
          page === 1 ||
          page === proofPageCount ||
          Math.abs(page - proofPage) <= 1
        ) {
          addPageButton(
            String(page),
            page,
            false,
            page === proofPage
          );
        } else if (
          pagination.lastElementChild?.className !== "cl-proof-gap"
        ) {
          pagination.appendChild(
            createElement("span", "…", "cl-proof-gap")
          );
        }
      }

      addPageButton(
        "→",
        proofPage + 1,
        proofPage === proofPageCount
      ).dataset.proofPageNext = "";
    }

    proofList.appendChild(pagination);
    window.updateProofPaginationLabels?.();
  }

  proofSave.addEventListener("click", () => {
        if (!allowDemoCaseEdit(result)) return;
    if (proofLoadFailed) return;

    const type = proofType.value;
    const reference = proofReference.value.trim();
    const note = proofNote.value.trim();

    if (!type || !reference || !note) {
      proofFeedback.textContent =
        "Bitte Nachweisart, Referenz und Beschreibung ausfüllen.";
      return;
    }

    const entry = {
      type,
      reference,
      note,
      savedAt: new Date().toISOString()
    };

    const updatedProofs = [...savedProofs, entry];

    try {
      localStorage.setItem(
        proofStorageKey,
        JSON.stringify(updatedProofs)
      );

      savedProofs = updatedProofs;

      proofType.value = "";
      proofReference.value = "";
      proofNote.value = "";

      proofFeedback.textContent =
        "Nachweis dokumentiert und lokal gespeichert. " +
        "Eine inhaltliche Prüfung steht noch aus.";

            renderProofs();
      renderReleaseChecks();
    } catch (error) {
      console.error("Nachweis konnte nicht gespeichert werden:", error);
      proofFeedback.textContent =
        "Speicherung fehlgeschlagen. " +
        "Bisherige Nachweise bleiben unverändert.";
    }
  });

    renderProofs();
  renderReleaseChecks();

  proofPanel.append(
    proofTypeLabel,
    proofType,
    proofReferenceLabel,
    proofReference,
    proofNoteLabel,
    proofNote,
    proofSave,
    proofFeedback,
    proofList
  );

  closureForm.appendChild(proofPanel);

  // ----------------------------------------------
  // Dokumentierter administrativer Demo-Abschluss
  // ----------------------------------------------

  const decisionPanel = createElement("div");
  decisionPanel.style.marginTop = "28px";
  decisionPanel.style.padding = "18px";
  decisionPanel.style.border = "1px solid #dce6e9";
  decisionPanel.style.borderRadius = "8px";

  decisionPanel.appendChild(
    createElement(
      "h4",
      "Administrativen Demo-Abschluss dokumentieren"
    )
  );

  decisionPanel.appendChild(
    createElement(
      "p",
      "Diese Funktion dokumentiert ausschließlich eine " +
      "simulierte Abschlussentscheidung. Sie bestätigt " +
      "weder einen echten Zahlungseingang noch einen " +
      "unabhängig geprüften finanziellen Ausgleich."
    )
  );

  const decisionReason = document.createElement("textarea");
  decisionReason.className = "workflow-textarea";
  decisionReason.rows = 3;
  decisionReason.maxLength = 1000;
  decisionReason.placeholder =
    "Warum soll der Fall administrativ geschlossen werden?";

  const decisionReasonLabel = createElement(
    "label",
    "Begründung der Abschlussentscheidung",
    "workflow-label"
  );

  decisionReasonLabel.style.display = "block";
  decisionReasonLabel.style.marginTop = "16px";

  const decisionCloseButton = createElement(
    "button",
    "Demo-Abschluss dokumentieren",
    "workflow-save"
  );

  decisionCloseButton.type = "button";
  decisionCloseButton.style.marginTop = "14px";

  const decisionReopenButton = createElement(
    "button",
    "Fall wiedereröffnen",
    "workflow-save"
  );

  decisionReopenButton.type = "button";
  decisionReopenButton.style.marginTop = "14px";

  const decisionStatus = createElement("p");
  decisionStatus.style.marginTop = "14px";
  decisionStatus.setAttribute("role", "status");

  const decisionHistory = createElement("div");
  decisionHistory.style.marginTop = "18px";

  function renderDecisionState() {
    decisionHistory.replaceChildren();

    try {
      const record = CreditloopCaseDecisions.read(
        selectedScenario,
        result.invoiceId
      );

      const closed = record.status === "closed";

      decisionCloseButton.hidden = closed;
      decisionReopenButton.hidden = !closed;

      // Den bestehenden Abschlussentwurf und die
      // Nachweiserfassung bei geschlossenem Demo-Fall
      // vor versehentlichen Änderungen schützen.
      outcomeSelect.disabled = closed;
      referenceInput.disabled = closed;
      previewButton.disabled = closed;
      proofType.disabled = closed;
      proofReference.disabled = closed;
      proofNote.disabled = closed;
      proofSave.disabled = closed || proofLoadFailed;
      decisionCloseButton.disabled = false;
      decisionReopenButton.disabled = false;

      if (closed) {
        decisionStatus.textContent =
          "Administrativ abgeschlossen (Demo). " +
          "Keine echte Rückgewinnung bestätigt.";

        decisionHistory.appendChild(
          createElement(
            "p",
            "Abschlussart: " +
            (CreditloopCaseDecisions.OUTCOMES[
              record.decision.outcome
            ] ?? record.decision.outcome)
          )
        );

        decisionHistory.appendChild(
          createElement(
            "p",
            "Abschlussreferenz: " +
            record.decision.reference
          )
        );

        decisionHistory.appendChild(
          createElement(
            "p",
            "Entscheidung: " + record.decision.reason
          )
        );
      } else {
        decisionStatus.textContent =
          "Noch kein administrativer Demo-Abschluss gespeichert.";
      }

      record.history.forEach((entry, index) => {
        const label = entry.action === "closed"
          ? "Demo-Abschluss"
          : "Wiedereröffnung";

        decisionHistory.appendChild(
          createElement(
            "p",
            (index + 1) + ". " +
            label + " – " +
            new Date(entry.at).toLocaleString("de-CH") +
            (entry.reason
              ? " – Grund: " + entry.reason
              : " – Referenz: " +
                (entry.decision?.reference ?? "–"))
          )
        );
      });

    } catch (error) {
      console.error("Demo-Abschlussdaten:", error);
      decisionStatus.textContent =
        "Abschlussdaten konnten nicht zuverlässig gelesen werden. " +
        "Änderungen sind gesperrt.";

      decisionCloseButton.disabled = true;
      decisionReopenButton.disabled = true;
      proofSave.disabled = true;
      previewButton.disabled = true;
    }
  }

  decisionCloseButton.addEventListener("click", () => {
    try {
      if (proofLoadFailed) {
        throw new Error(
          "Die dokumentierten Nachweise konnten nicht geladen werden."
        );
      }

      const parsed = CreditloopCSV.parse(
        settlementDemoData[selectedScenario]
      );

      if (
        parsed.errors.length ||
        !CreditloopSettlement.isSettlementFile(parsed.headers)
      ) {
        throw new Error("Die Buchungsdaten sind ungültig.");
      }

      const audit = CreditloopClosure.audit({
        invoiceId: result.invoiceId,
        supplier: result.supplier,
        currency: result.currency,
        expected: result.expected,
        credits: currentDatasets.credits,
        bookings: parsed.records,
        payments: demoPaymentEvidence[selectedScenario] ?? [],
        proofs: savedProofs,
        outcome: outcomeSelect.value
      });

      const check = CreditloopCaseDecisions.inspect({
        outcome: outcomeSelect.value,
        reference: referenceInput.value,
        reason: decisionReason.value,
        expected: result.expected,
        audit,
        proofs: savedProofs
      });

      if (!check.allowed) {
        decisionStatus.textContent =
          "Abschluss gesperrt: " + check.blockers.join(" ");
        return;
      }

            const confirmed = window.confirm(
        closureText(
          "Administrativen DEMO-Abschluss speichern?\n\n" +
          "Dies bestätigt ausdrücklich keine reale " +
          "finanzielle Rückgewinnung."
        )
      );

      if (!confirmed) return;

      CreditloopCaseDecisions.close({
        scenario: selectedScenario,
        invoiceId: result.invoiceId,
        outcome: outcomeSelect.value,
        reference: referenceInput.value,
        reason: decisionReason.value,
        expected: result.expected,
        audit,
        proofs: savedProofs
      });

      
      decisionReason.value = "";

      // Nach erfolgreichem Abschluss alle Fallbereiche
      // neu aufbauen, damit alte Sperrmeldungen verschwinden.
      showCaseDetails(result);
      refreshCaseStatusLabels();


    } catch (error) {
      console.error("Demo-Abschluss:", error);
      decisionStatus.textContent =
        "Abschluss konnte nicht gespeichert werden: " +
        error.message;
    }
  });

  decisionReopenButton.addEventListener("click", () => {
        const reason = window.prompt(
      closureText(
        "Bitte begründe die Wiedereröffnung " +
        "(mindestens 10 Zeichen):"
      )
    );

    if (reason === null) return;

    try {
      CreditloopCaseDecisions.reopen(
        selectedScenario,
        result.invoiceId,
        reason
      );

            renderDecisionState();

      // Alle Bearbeitungsbereiche nach erfolgreicher
      // Wiedereröffnung neu aufbauen.
      showCaseDetails(result);
      refreshCaseStatusLabels();

    } catch (error) {
      decisionStatus.textContent =
        "Wiedereröffnung fehlgeschlagen: " +
        error.message;
    }
  });

  decisionPanel.append(
    decisionReasonLabel,
    decisionReason,
    decisionCloseButton,
    decisionReopenButton,
    decisionStatus,
    decisionHistory
  );

  closureForm.appendChild(decisionPanel);
  renderDecisionState();

    // Bestehende Elemente verschieben.
  // Eingaben und Event-Listener bleiben erhalten.

    const reviewCard = createElement(
    "section",
    null,
    "cl-closure-card cl-closure-review"
  );

  reviewCard.append(
    ...Array.from(panel.children)
  );

  function prepareClosureCard(element, className) {
    element.classList.add(
      "cl-closure-card",
      className
    );

    element.style.marginTop = "0";
    element.style.padding = "";
    element.style.border = "";
    element.style.borderRadius = "";
  }

  prepareClosureCard(
    closureForm,
    "cl-closure-outcome"
  );

  prepareClosureCard(
    historyArea,
    "cl-closure-history"
  );

  prepareClosureCard(
    proofPanel,
    "cl-closure-evidence-form"
  );

  prepareClosureCard(
    proofList,
    "cl-closure-records"
  );

  prepareClosureCard(
    decisionPanel,
    "cl-closure-decision"
  );

  prepareClosureCard(
    releasePanel,
    "cl-closure-release"
  );

  // Historie rechts und reine Nachweiserfassung links.
  const middleRow = createElement(
    "div",
    null,
    "cl-closure-bottom-row"
  );

  // Nachweise erfassen links, dokumentierte Nachweise rechts.
  middleRow.append(
    proofPanel,
    proofList
  );

  // Administrativen Abschluss als eigenen,
  // breiten Kasten mit zwei Innenbereichen aufbauen.
  const decisionCopy = createElement(
    "div",
    null,
    "cl-closure-decision-copy"
  );

  decisionCopy.append(
    ...Array.from(decisionPanel.children).slice(0, 2)
  );

  const decisionFields = createElement(
    "div",
    null,
    "cl-closure-decision-fields"
  );

  decisionReasonLabel.style.marginTop = "0";

  decisionFields.append(
    decisionReasonLabel,
    decisionReason,
    decisionCloseButton,
    decisionReopenButton,
    decisionStatus,
    decisionHistory
  );

  decisionPanel.replaceChildren(
    decisionCopy,
    decisionFields
  );

  panel.classList.add(
    "cl-closure-layout"
  );

  panel.style.marginTop = "0";
  panel.dataset.invoiceId = result.invoiceId;

  // Bereits dokumentierte Nachweise werden aus dem
  // Eingabekasten herausgenommen und separat angezeigt.
  // Die Freigabeprüfung steht ausdrücklich ganz zuletzt.
   panel.replaceChildren(
    reviewCard,
    closureForm,
    middleRow,
    historyArea,
    decisionPanel,
    releasePanel
  );
  return panel;
}

// ===================================================
// 8. RECOVERY CASE REVIEW
// ===================================================

function buildRecoveryReview(result) {
  const panel = createElement(
    "div",
    null,
    "recovery-review"
  );

  panel.appendChild(
    createElement(
      "h4",
     window.CreditloopI18n?.translate("recoveryReview") || "Reklamationsprüfung"
    )
  );

  const invoices =
    currentDatasets?.invoices ?? [];

  const returns =
    currentDatasets?.returns ?? [];

  const credits =
    currentDatasets?.credits ?? [];

  const invoice = invoices.find(
    item =>
      item.Rechnungsnummer.trim() ===
      result.invoiceId
  );

  const relatedReturns = returns.filter(
    item =>
      item.Rechnungsnummer.trim() ===
      result.invoiceId
  );

  const approvedReturns = relatedReturns.filter(
    item =>
      item.Status.trim().toLowerCase() ===
      "genehmigt"
  );

  const relatedCredits = credits.filter(
    item =>
      item.Rechnungsnummer.trim() ===
      result.invoiceId
  );

  function addCheck(label, status, note) {
    const item = createElement(
      "div",
      null,
      "recovery-check"
    );

    const symbol = createElement(
      "span",
      status === "present" ? "✓" : "?",
      "recovery-symbol " + status
    );

    const text = createElement(
      "div",
      null,
      "recovery-check-text"
    );

    text.appendChild(
      createElement("strong", label)
    );

    text.appendChild(
      createElement("p", note)
    );

    item.append(symbol, text);
    panel.appendChild(item);
  }

  addCheck(
    "Originalrechnung",
    invoice ? "present" : "unknown",
    invoice
      ? "Rechnung " + result.invoiceId +
        " ist im Beispieldatensatz enthalten."
      : "Keine passende Originalrechnung im Datensatz."
  );

  addCheck(
    "Retourenfreigabe",
    approvedReturns.length
      ? "present"
      : "unknown",
    approvedReturns.length
      ? approvedReturns.length +
        " genehmigte Retoure(n) im Datensatz."
      : "Keine genehmigte Retoure im Datensatz erkennbar."
  );

  addCheck(
    "Lieferantengutschrift",
    relatedCredits.length
      ? "present"
      : "unknown",
    relatedCredits.length
      ? relatedCredits.length +
        " Gutschrift(en) in den Beispieldaten vorhanden."
      : "Keine passende Gutschrift in den Beispieldaten."
  );

  addCheck(
    "Unabhängig bestätigter finanzieller Ausgleich",
    "unknown",
    "Nicht geprüft. Eine Gutschrift oder " +
    "Buchungszuordnung ist noch kein " +
    "unabhängiger Nachweis."
  );

  const action = createElement(
    "div",
    null,
    "recovery-next-action"
  );

  action.appendChild(
    createElement(
      "strong",
      "Möglicher nächster Prüfschritt"
    )
  );

  let nextStep;

  if (!invoice) {
    nextStep =
      "Zunächst die zugehörige Originalrechnung " +
      "beschaffen und Dokumentreferenzen überprüfen.";

  } else if (!approvedReturns.length) {
    nextStep =
      "Prüfen, ob eine gültige Retourenfreigabe " +
      "vorliegt. Ohne ausreichende Grundlage lässt " +
      "sich keine Forderung ableiten.";

  } else if (
  result.category === "Gutschrift nicht gefunden"
) {
  nextStep =
    "Prüfen, ob der genehmigten Retoure bereits " +
    "eine Gutschrift zugeordnet wurde oder weitere " +
    "Gutschriften außerhalb der vorhandenen Daten " +
    "existieren. Auch den Lieferantenkontoauszug " +
    "und mögliche Verrechnungen kontrollieren. " +
    "Falls keine Gutschrift nachweisbar ist, " +
    "den Lieferanten kontaktieren und den " +
    "Bearbeitungsstand dokumentieren.";

} else if (
  result.category === "Teilweise Gutschrift"
) {
  nextStep =
    "Die Differenz zwischen genehmigtem " +
    "Retourenbetrag und erfassten Gutschriften " +
    "prüfen. Weitere Gutschriften, zulässige " +
    "Abzüge, Teilverrechnungen und die " +
    "Vollständigkeit der Buchungsdaten " +
    "kontrollieren. Falls die Differenz " +
    "ungeklärt bleibt, den Lieferanten " +
    "um Klärung bitten.";

  } else if (
    result.category === "Betrag stimmt überein"
  ) {
    nextStep =
      "Die Beträge stimmen überein. Nun die " +
      "Buchungszuordnung und gegebenenfalls " +
      "den tatsächlichen finanziellen Ausgleich prüfen.";

  } else {
    nextStep =
      "Dokumente und Zuordnungen manuell prüfen, " +
      "bevor eine Forderung angenommen wird.";
  }

  action.appendChild(
    createElement("p", nextStep)
  );
  panel.appendChild(action);

  panel.appendChild(
    createElement(
      "p",
      "Dies ist eine automatische Prüfung " +
      "fiktiver Daten, keine bestätigte Forderung " +
      "oder rechtliche Bewertung.",
      "recovery-review-note"
    )
  );

  return panel;
}

// ===================================================
// 9. INTERAKTIVER CASE WORKFLOW
// ===================================================

function formatWorkflowEntryTime(value) {
  const date = value ? new Date(value) : null;

  if (
    !date ||
    !Number.isFinite(date.getTime())
  ) {
    return "Zeitpunkt nicht dokumentiert";
  }

  const locale = ({
    de: "de-CH",
    en: "en-GB",
    it: "it-CH",
    fr: "fr-CH"
  })[document.documentElement.lang] || "de-CH";

  return new Intl.DateTimeFormat(locale, {
    timeZone: "Europe/Zurich",
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    hourCycle: "h23"
  }).format(date);
}
function buildCaseWorkflow(result) {
  const workflow = getCaseWorkflow(result);

  const t = (key, fallback) =>
    window.CreditloopI18n?.translate(key) || fallback;


  const panel = createElement(
    "div",
    null,
    "case-workflow"
  );

  panel.appendChild(
    createElement("h4", window.CreditloopI18n?.translate("caseWorkflow") || "Fallbearbeitung")
  );

  
  panel.appendChild(
    createElement(
      "p",
      t("workflowIntro", "Bearbeiten Sie diesen fiktiven Fall und dokumentieren Sie die nächsten Prüfschritte."),
      "workflow-intro"
    )
  );


  // -------------------------------------------------
  // Bearbeitungsstatus
  // -------------------------------------------------


  const statusLabel = createElement(
    "label",
    t("workflowStatusLabel", "Bearbeitungsstand"),
    "workflow-label"
  );


  const select = document.createElement(
    "select"
  );

  select.className = "workflow-select";

  const selectId =
    "workflow-status-" + result.invoiceId;

  select.id = selectId;
  statusLabel.htmlFor = selectId;


  const statusTranslationKeys = {
    new: "statusNew",
    review: "statusReview",
    contact: "statusContact",
    waiting: "statusWaiting",
    closed: "statusClosed"
  };

  for (const [value, label] of Object.entries(
    workflowStatuses
  )) {
    const option = document.createElement("option");

    option.value = value;
    option.textContent = t(
      statusTranslationKeys[value],
      label
    );

    select.appendChild(option);
  }


  select.value = workflow.status;

  // -------------------------------------------------
  // Notizfeld
  // -------------------------------------------------

  const noteLabel = createElement(
    "label",
    t("workflowNoteLabel", "Interne Fallnotiz"),
    "workflow-label"
  );

  const textarea = document.createElement(
    "textarea"
  );

  textarea.className = "workflow-textarea";
  textarea.rows = 3;
  textarea.maxLength = 500;

  textarea.placeholder =
  t("workflowNotePlaceholder", "Zum Beispiel: Lieferantenkontoauszug anfordern.");

  const textareaId =
    "workflow-note-" + result.invoiceId;

  textarea.id = textareaId;
  noteLabel.htmlFor = textareaId;

  // -------------------------------------------------
  // Speichern
  // -------------------------------------------------

  const saveButton = createElement(
    "button",
    t("workflowSave", "Eintrag speichern"),
    "workflow-save"
  );

  saveButton.type = "button";

  const feedback = createElement(
    "p",
    "",
    "workflow-feedback"
  );

  feedback.setAttribute(
    "role",
    "status"
  );

  // -------------------------------------------------
  // Ereignisverlauf
  // -------------------------------------------------

  const historyTitle = createElement(
    "h5",
    t("workflowHistory", "Ereignisverlauf")
  );

  const historyList = createElement(
    "div",
    null,
    "workflow-history"
  );

  function renderHistory() {
    historyList.replaceChildren();

    const entries = workflow.history
      .map((entry, index) => ({
        entry,
        index
      }))
      .reverse();

    for (const { entry, index } of entries) {
      const item = createElement(
        "div",
        null,
        "workflow-history-entry"
      );

      item.appendChild(
        createElement(
          "strong",
          entry.status
        )
      );

      const description = createElement(
        "p",
        entry.note
      );

      item.appendChild(description);
            const entryTimestamp =
        entry.at ??
        entry.createdAt ??
        entry.timestamp ??
        null;

      const entryDate = entryTimestamp
        ? new Date(entryTimestamp)
        : null;

      if (
        entryDate &&
        Number.isFinite(entryDate.getTime())
      ) {
        const timeNode = createElement(
          "time",
          formatWorkflowEntryTime(entryTimestamp),
          "workflow-entry-time"
        );

        timeNode.dateTime = entryDate.toISOString();

        item.appendChild(timeNode);
      } else if (index > 0) {
        item.appendChild(
          createElement(
            "small",
            "Zeitpunkt nicht dokumentiert",
            "workflow-entry-time"
          )
        );
      }

      // Automatischer Systemeintrag bleibt geschützt.
      if (index === 0) {
        item.appendChild(
          createElement(
            "small",
            "SYSTEM · Automatisch erstellt · Nicht bearbeitbar",
            "workflow-system-label"
          )
        );

        historyList.appendChild(item);
        continue;
      }

            // Der neueste manuelle Eintrag erhält
      // statt der beiden Textbuttons eine Kennzeichnung.
           if (
        index === workflow.history.length - 1
      ) {
        item.appendChild(
          createElement(
            "small",
            "Neu",
            "workflow-new-label"
          )
        );
      }
      const actions = createElement(
        "div",
        null,
        "workflow-entry-actions"
      );

      const editButton = createElement(
        "button",
        "Bearbeiten",
        "workflow-entry-edit"
      );

      const deleteButton = createElement(
        "button",
        "Löschen",
        "workflow-entry-delete"
      );

      editButton.type = "button";
      deleteButton.type = "button";

      // Alle manuellen Einträge erhalten dieselben Symbole.
      editButton.textContent = "✎";
      editButton.title = "Eintrag bearbeiten";

      editButton.setAttribute(
        "aria-label",
        "Eintrag bearbeiten"
      );

      deleteButton.textContent = "🗑";
      deleteButton.title = "Eintrag löschen";

      deleteButton.setAttribute(
        "aria-label",
        "Eintrag löschen"
      );

      actions.classList.add(
        "workflow-entry-actions-compact"
      );


      // ---------------------------------------------
      // Bestehenden Eintrag bearbeiten
      // ---------------------------------------------

      editButton.addEventListener("click", () => {
                if (!allowDemoCaseEdit(result)) return;
        actions.hidden = true;
        description.hidden = true;

        const editor = document.createElement(
          "textarea"
        );

        editor.className = "workflow-textarea";
        editor.rows = 3;
        editor.maxLength = 500;
        editor.value = entry.note;

        const controls = createElement(
          "div",
          null,
          "workflow-entry-actions"
        );

        const saveEdit = createElement(
          "button",
          "Speichern",
          "workflow-entry-edit"
        );

        const cancelEdit = createElement(
          "button",
          "Abbrechen",
          "workflow-entry-edit"
        );

        saveEdit.type = "button";
        cancelEdit.type = "button";

        saveEdit.addEventListener("click", () => {
                    if (!allowDemoCaseEdit(result)) return;
          const updatedNote = editor.value.trim();

          if (!updatedNote) {
            window.alert(
              "Bitte eine Notiz eingeben."
            );

            return;
          }

          
          if (entry.note === updatedNote) {
            renderHistory();
            return;
          }

          const activityAt = new Date().toISOString();

          entry.note = updatedNote;
          entry.editedAt = activityAt;
          workflow.lastActivityAt = activityAt;

          const saved = saveDemoWorkflows();


          feedback.textContent = saved
            ? "Eintrag aktualisiert und gespeichert."
            : "Änderung übernommen, aber nicht dauerhaft gespeichert.";

          renderHistory();
          refreshCaseStatusLabels();
        });

        cancelEdit.addEventListener("click", () => {
          editor.remove();
          controls.remove();

          description.hidden = false;
          actions.hidden = false;
        });

        controls.append(
          saveEdit,
          cancelEdit
        );

        item.append(
          editor,
          controls
        );

        editor.focus();
      });

      // ---------------------------------------------
      // Einzelnen Eintrag löschen
      // ---------------------------------------------

      deleteButton.addEventListener("click", () => {
                if (!allowDemoCaseEdit(result)) return;
        const confirmed = window.confirm(
          "Diesen Eintrag wirklich löschen?\n\n" +
          entry.status + "\n" +
          entry.note
        );

        if (!confirmed) return;

        workflow.history.splice(index, 1);

        // Den Bearbeitungsstatus aus dem letzten
        // verbleibenden manuellen Eintrag bestimmen.

        const latest = workflow.history
          .slice(1)
          .reverse()
          .find(item =>
            Object.values(
              workflowStatuses
            ).includes(item.status)
          );

        if (latest) {
          const matchingStatus = Object.keys(
            workflowStatuses
          ).find(
            key =>
              workflowStatuses[key] ===
              latest.status
          );

          workflow.status =
            matchingStatus ?? "new";
        } else {
          workflow.status = "new";
        }

        
        select.value = workflow.status;

        workflow.lastActivityAt = new Date().toISOString();

        const saved = saveDemoWorkflows();


        feedback.textContent = saved
          ? "Eintrag gelöscht und Änderung gespeichert."
          : "Eintrag entfernt, aber nicht dauerhaft gespeichert.";

        renderHistory();

        // Wichtig:
        // Nach dem Löschen sofort die Fallliste
        // und den Zurücksetzen-Button aktualisieren.
        refreshCaseStatusLabels();
      });

      actions.append(
        editButton,
        deleteButton
      );

      item.appendChild(actions);
      historyList.appendChild(item);
    }
  }

  // -------------------------------------------------
  // Neuen Bearbeitungseintrag speichern
  // -------------------------------------------------

  saveButton.addEventListener("click", () => {
        if (!allowDemoCaseEdit(result)) return;
    const newStatus = select.value;
    const note = textarea.value.trim();

    const statusChanged =
      workflow.status !== newStatus;

    if (!statusChanged && !note) {
      feedback.textContent =
        "Bitte Status ändern oder eine Notiz eingeben.";

      return;
    }

    workflow.status = newStatus;

    
    const activityAt = new Date().toISOString();

    workflow.history.push({
      status: workflowStatuses[newStatus],
      note:
        note || "Bearbeitungsstand geändert.",
      at: activityAt
    });

    workflow.lastActivityAt = activityAt;

    const saved = saveDemoWorkflows();


    textarea.value = "";

    feedback.textContent = saved
      ? "Demo-Eintrag dauerhaft im Browser gespeichert."
      : "Eintrag übernommen, aber nicht dauerhaft gespeichert.";

    renderHistory();

    // Wichtig:
    // Zurücksetzen-Button erscheint sofort,
    // sobald ein manueller Eintrag vorliegt.
    refreshCaseStatusLabels();
  });

  // -------------------------------------------------
  // Panel zusammensetzen
  // -------------------------------------------------

  
panel.append(
  statusLabel,
  select,
  noteLabel,
  textarea,
  saveButton,
  feedback,
  historyTitle,
  historyList
);


  panel.appendChild(
    createElement(
      "p",
      "Nur eine interaktive Demo. Einträge werden " +
      "lokal in diesem Browser gespeichert und " +
      "stellen keine bestätigten Ansprüche dar.",
      "workflow-footnote"
    )
  );

    const caseLocked = isDemoCaseLocked(result);

  select.disabled = caseLocked;
  textarea.disabled = caseLocked;
  saveButton.disabled = caseLocked;

  if (caseLocked) {
    feedback.textContent =
      "Dieser Fall ist administrativ abgeschlossen. " +
      "Bearbeitung erst nach dokumentierter Wiedereröffnung möglich.";

    panel.querySelectorAll(
      ".workflow-entry-edit, .workflow-entry-delete"
    ).forEach(button => {
      button.disabled = true;
    });
  }

  renderHistory();

  if (caseLocked) {
    historyList.querySelectorAll("button").forEach(button => {
      button.disabled = true;
    });
  }

  return panel;
  }

// ===================================================
// 10. SETTLEMENT-DEMO
// ===================================================

function renderSettlementDemo() {
  if (!window.CreditloopSettlement) {
    throw new Error(
      "Settlement Engine wurde nicht geladen."
    );
  }

  const parsed = CreditloopCSV.parse(
    settlementDemoData[selectedScenario]
  );

  if (parsed.errors.length) {
    throw new Error(
      parsed.errors.join(" | ")
    );
  }

  if (
    !CreditloopSettlement.isSettlementFile(
      parsed.headers
    )
  ) {
    throw new Error(
      "Buchungsdaten haben falsche Spalten."
    );
  }

  
// Nur Buchungen berücksichtigen, die zu den
// aktuell ausgewählten Gutschriften gehören.
const visibleCreditIds = new Set(
  currentDatasets.credits.map(credit =>
    String(credit.Gutschriftnummer ?? "").trim()
  )
);

const matchingBookings = parsed.records.filter(booking =>
  visibleCreditIds.has(
    String(booking.Gutschriftnummer ?? "").trim()
  )
);

const report = CreditloopSettlement.reconcile(
  currentDatasets.credits,
  matchingBookings
);


  const section = document.getElementById(
    "settlement-demo"
  );

  const tbody = document.getElementById(
    "demo-settlement-rows"
  );

  const details = document.getElementById(
    "demo-settlement-details"
  );

  tbody.replaceChildren();
  details.replaceChildren();


  for (const item of report.results) {
    const row = document.createElement("tr");

    const creditRecord = currentDatasets.credits.find(
      credit =>
        String(credit.Gutschriftnummer ?? "").trim() ===
        String(item.id)
    );

    const invoiceId = String(
      creditRecord?.Rechnungsnummer ?? ""
    ).trim();

    const searchText = [
      item.id,
      invoiceId,
      item.supplier,
      ...item.bookings.flatMap(booking => [
        booking.bookingId,
        booking.reference
      ])
    ]
      .filter(Boolean)
      .join(" ")
      .toLocaleLowerCase("de-CH");

    row.dataset.settlementSearch = searchText;
    row.dataset.settlementInvoice = invoiceId;

        const creditCell = document.createElement("td");

    const creditButton = createElement(
      "button",
      item.id,
      "settlement-document-link"
    );

    creditButton.type = "button";
    creditButton.disabled = !invoiceId;

    creditButton.addEventListener("click", () => {
      if (!window.CreditloopDocuments?.open) {
        const message =
          "Der Dokumentenviewer ist nicht verfügbar.";

        window.alert(
          window.CreditloopI18n?.translateClosureText
            ? window.CreditloopI18n.translateClosureText(
                message
              )
            : message
        );

        return;
      }

      window.CreditloopDocuments.open(
        invoiceId,
        "credit",
        item.id + ".pdf"
      );
    });

    creditCell.appendChild(creditButton);
    row.appendChild(creditCell);

    [
      item.supplier,
      formatMoney(
        item.issued,
        item.currency
      ),
      formatMoney(
        item.allocated,
        item.currency
      ),
      formatMoney(
        item.remaining,
        item.currency
      ),
      item.status
    ].forEach(value => {
      row.appendChild(
        createElement("td", value)
      );
    });

    tbody.appendChild(row);

    const entry = createElement(
      "div",
      null,
      "settlement-entry"
    );
        entry.dataset.settlementSearch = searchText;
            entry.dataset.settlementInvoice = invoiceId;

    entry.appendChild(
      createElement(
        "strong",
        item.id + " – " + item.status
      )
    );

    if (item.bookings.length === 0) {
      entry.appendChild(
        createElement(
          "p",
          "Keine passende Buchung in den Beispieldaten."
        )
      );
    }

    
    for (const booking of item.bookings) {
      const bookingInfo = createElement("div");
      bookingInfo.style.marginTop = "12px";

      bookingInfo.appendChild(
        createElement(
          "p",
          booking.bookingId + " · " +
          booking.type + " · " +
          formatMoney(booking.amount, item.currency) +
          " zugeordnet · Referenz: " +
          booking.reference
        )
      );

      if (booking.conversion) {
        const conversion = booking.conversion;

        const originalAmount = formatMoney(
          booking.originalAmountMinor,
          booking.originalCurrency
        );

        const convertedAmount = formatMoney(
          booking.amount,
          booking.creditCurrency
        );

        bookingInfo.appendChild(
          createElement(
            "p",
            "Ursprünglicher Buchungsbetrag: " +
            originalAmount +
            " | Umgerechnet: " +
            convertedAmount,
            "settlement-note"
          )
        );

        bookingInfo.appendChild(
          createElement(
            "p",
            "Dokumentierter Kurs: 1 " +
            conversion.from + " = " +
            conversion.rate + " " +
            conversion.to +
            " | Kursdatum: " +
            conversion.rateDate +
            " | Quelle: " +
            conversion.rateSource,
            "settlement-note"
          )
        );
      }

      entry.appendChild(bookingInfo);
    }

    details.appendChild(entry);
  }

  for (const warning of report.warnings) {
    details.appendChild(
      createElement(
        "p",
        "Prüfwarnung: " + warning,
        "settlement-note"
      )
    );
  }

  details.appendChild(
    createElement(
      "p",
      "Alle Zuordnungen sind vorläufig. " +
      "Eine unabhängig bestätigte Rückgewinnung " +
      "liegt in dieser Demo nicht vor.",
      "settlement-note"
    )
  );

    section.hidden = false;
  applySettlementSearch();
}

// ===================================================
// DEMO-NAVIGATION – ANSICHTEN WECHSELN
// ===================================================


// ===============================================
// GEMEINSAME UNTERNEHMENS- UND FALLNAVIGATION
// ===============================================

function syncDemoCompanySelectors() { 
  const settlementTitle = document.getElementById(
    "settlement-company-title"
  );

    if (settlementTitle) {
    settlementTitle.textContent =
      (window.CreditloopI18n?.translate("settlementResultsTitle") ||
        "Gutschriften und Ausgleich");
  }

  const title = document.getElementById(
    "results-company-title"
  );

   if (title) {
    title.textContent =
      (window.CreditloopI18n?.translate("caseResultsTitle") ||
        "Abgleichsergebnisse");
  }

  
  document.querySelectorAll(
    "[data-company-switch]"
  ).forEach(select => {
    select.value = selectedScenario;
  });

  // Feste Unternehmensanzeige auf Fälle
  // und Gutschriften automatisch aktualisieren.
  document.querySelectorAll(
    "[data-demo-company-name]"
  ).forEach(element => {
    element.textContent =
      demoScenarios[selectedScenario].name;
  });
}



function renderCaseQuickNavigation() {
  const container = document.getElementById(
    "case-quick-navigation"
  );

  if (!container) return;

  // Bei unseren bisherigen Demodaten wird angenommen,
  // dass neue Fälle am Ende von currentResults stehen.
  // Falls zwei Fälle einen Erstellungszeitpunkt besitzen,
  // wird dieser für ihre Reihenfolge verwendet.

  const newestFirst = currentResults
    .map((result, index) => ({ result, index }))
    .sort((a, b) => {
      const dateA = Date.parse(a.result.createdAt);
      const dateB = Date.parse(b.result.createdAt);

      if (
        Number.isFinite(dateA) &&
        Number.isFinite(dateB) &&
        dateA !== dateB
      ) {
        return dateB - dateA;
      }

      return b.index - a.index;
    })
    .map(item => item.result);

  container.replaceChildren();

    for (const result of newestFirst.slice(0, 8)) {
    const button = createElement(
      "button",
      result.invoiceId,
      "case-quick-nav-button"
    );

    button.type = "button";

    const isSelected =
      result.invoiceId === selectedCaseId;

    button.classList.toggle("active", isSelected);

    button.setAttribute(
      "aria-pressed",
      String(isSelected)
    );

    button.addEventListener("click", () => {
      // Bisherige Schnellnavigation beibehalten.
      activeCaseFilter = "all";

      const searchInput = document.getElementById(
        "case-search-input"
      );

      if (searchInput) {
        searchInput.value = "";
      }

      document.querySelectorAll(
        "#case-workflow-filters .case-filter-button"
      ).forEach(filterButton => {
        filterButton.classList.toggle(
          "active",
          filterButton.dataset.filter === "all"
        );
      });

      applyCaseFilter();
      selectCase(result);
    });

    container.appendChild(button);
  }
}


function switchDemoCompany(key, viewName) {
  if (!Object.hasOwn(demoScenarios, key)) {
    return;
  }

  if (key !== selectedScenario) {
    selectScenario(key);
    calculateDemoAutomatically();
  }

  syncDemoCompanySelectors();

  if (hasCompletedReconciliation) {
    showDemoView(viewName);
  } else {
    showDemoView("reconcile");
  }
}

// Beide Dropdowns verwenden dieselbe Szenarioauswahl.
document.querySelectorAll(
  "[data-company-switch]"
).forEach(select => {
  select.addEventListener("change", () => {
    const currentView =
      select.closest('[data-demo-view="settlement"]')
        ? "settlement"
        : "cases";

    switchDemoCompany(
      select.value,
      currentView
    );
  });
});

function syncClosureCaseNavigation() {
  syncUnifiedNavigation();
}


document.getElementById(
  "closure-case-select"
)?.addEventListener("change", event => {
  const result = currentResults.find(
    item => item.invoiceId === event.target.value
  );

  if (result) {
    selectCase(result);
  }
});
function showDemoView(viewName) {
    const requiresResults = [
    "cases",
    "closure",
    "settlement"
  ].includes(viewName);

  
if (requiresResults && !hasCompletedReconciliation) {
    showDemoView("reconcile");
    demoMessage.textContent =
      "Bitte zuerst den Demo-Abgleich starten.";
    return;
  }
  syncUnifiedNavigation();
  document.querySelectorAll("[data-demo-view]")
    .forEach(section => {
      section.classList.toggle(
        "demo-view-active",
        section.dataset.demoView === viewName
      );
    });

  document.querySelectorAll(".demo-nav-link")
    .forEach(link => {
      const active = link.dataset.view === viewName;

      link.classList.toggle("active", active);

      if (active) {
        link.setAttribute("aria-current", "page");
      } else {
        link.removeAttribute("aria-current");
      }
    });

  window.scrollTo({
    top: 0,
    behavior: "instant"
  });
}

document.querySelectorAll(".demo-nav-link")
  .forEach(link => {
    link.addEventListener("click", event => {
      event.preventDefault();
      showDemoView(link.dataset.view);
    });
  });

// Bestehende Zurück-Links funktionieren auch
// innerhalb der neuen Ansichtssteuerung.

document.querySelectorAll(".workspace-return")
  .forEach(link => {
    link.addEventListener("click", event => {
      event.preventDefault();
      showDemoView("overview");
    });
  });


function calculateDemoAutomatically() {
  try {
    if (!currentDatasets) {
      throw new Error(
        "Es wurden keine Beispieldaten geladen."
      );
    }

    const results = CreditloopMatching.process(
      currentDatasets
    );

    drawResults(results);
    renderSettlementDemo();

    hasCompletedReconciliation = true;

    demoMessage.textContent =
      "Beispieldaten automatisch ausgewertet: " +
      results.length +
      " Vorgänge. Abgleich erneut starten möglich.";

  } catch (error) {
    hasCompletedReconciliation = false;
    resultsSection.hidden = true;

    const settlementSection =
      document.getElementById("settlement-demo");

    if (settlementSection) {
      settlementSection.hidden = true;
    }

    demoMessage.textContent =
      "Automatische Demo-Auswertung fehlgeschlagen: " +
      error.message;

    console.error(error);
  }
}

// ===================================================
// 11. EVENT HANDLER
// ===================================================

scenarioButtons.forEach(button => {
  button.addEventListener("click", () => {
    try {
    
selectScenario(
  button.dataset.scenario
);
calculateDemoAutomatically();

    } catch (error) {
      demoMessage.textContent =
        "Szenario konnte nicht geladen werden: " +
        error.message;

      console.error(error);
    }
  });
});

tabButtons.forEach(button => {
  button.addEventListener("click", () => {
    if (currentDatasets) {
      selectTab(
        button.dataset.tab
      );
    }
  });
});

function showReconciliationSummary(results) {
  let panel = document.getElementById(
    "reconciliation-feedback"
  );

  if (!panel) {
    panel = createElement(
      "div",
      null,
      "reconciliation-feedback"
    );

    panel.id = "reconciliation-feedback";
    panel.setAttribute("role", "status");
    panel.setAttribute("aria-live", "polite");

    demoMessage.insertAdjacentElement(
      "afterend",
      panel
    );
  }

  const issueCount = results.filter(
    isPotentialIssue
  ).length;

  
  // Potenzielle Differenzen strikt nach Währung trennen.
  // CHF, EUR und USD dürfen nicht addiert werden.
  const differencesByCurrency = new Map();

  for (const item of results) {
    if (
      !Number.isSafeInteger(item.difference) ||
      item.difference <= 0 ||
      !item.currency
    ) {
      continue;
    }

    const currency = item.currency.toUpperCase();
    const previous = differencesByCurrency.get(currency) ?? 0;
    const next = previous + item.difference;

    if (!Number.isSafeInteger(next)) {
      throw new Error(
        "Betragssumme für " + currency + " ist zu groß."
      );
    }

    differencesByCurrency.set(currency, next);
  }

  const differenceText = [...differencesByCurrency]
    .sort(([a], [b]) => a.localeCompare(b))
    .map(([currency, amount]) =>
      formatMoney(amount, currency)
    )
    .join("\n") || "Keine positive Betragsdifferenz";


  panel.replaceChildren();

  panel.appendChild(
    createElement(
      "strong",
      "✓ Abgleich erfolgreich abgeschlossen",
      "reconciliation-feedback-title"
    )
  );

  panel.appendChild(
    createElement(
      "p",
      demoScenarios[selectedScenario].name +
        " · " +
        results.length +
        " Vorgänge ausgewertet",
      "reconciliation-feedback-description"
    )
  );

  const metrics = createElement(
    "div",
    null,
    "reconciliation-feedback-metrics"
  );

  
  const values = [
    ["Geprüft", String(results.length)],
    ["Auffällig", String(issueCount)],
    [
      "Potenzielle Differenzen",
      differenceText
    ]
  ];


  values.forEach(([label, value]) => {
    const metric = createElement(
      "div",
      null,
      "reconciliation-feedback-metric"
    );

   
    const valueElement = createElement("strong", value);

    // Mehrere Währungen auf getrennten Zeilen anzeigen.
    valueElement.style.whiteSpace = "pre-line";

    metric.append(
      createElement("span", label),
      valueElement
    );


    metrics.appendChild(metric);
  });

  panel.appendChild(metrics);

  panel.appendChild(
    createElement(
      "p",
      "Potenzielle Abweichungen sind keine " +
        "bestätigten Forderungen oder Rückgewinnungen.",
      "reconciliation-feedback-note"
    )
  );

  const openCases = createElement(
    "button",
    "Erkannte Fälle ansehen →",
    "reconciliation-feedback-link"
  );

  openCases.type = "button";

  openCases.addEventListener("click", () => {
    showDemoView("cases");
  });

  panel.appendChild(openCases);
}

runButton.addEventListener("click", () => {
  runButton.disabled = true;

  demoMessage.textContent =
    "Beispieldaten werden geprüft …";

  try {
    if (!currentDatasets) {
      throw new Error(
        "Es wurden keine Beispieldaten geladen."
      );
    }

    // Berechnung mit unserer bestehenden Engine.
    const results = CreditloopMatching.process(
      currentDatasets
    );

    drawResults(results);

    // Separater Buchungsabgleich.
    renderSettlementDemo();

       demoMessage.textContent =
      "Abgleich abgeschlossen: " +
      results.length +
      " Vorgänge ausgewertet.";

    
hasCompletedReconciliation = true;

demoMessage.textContent = "";

showReconciliationSummary(results);
showDemoView("reconcile");

document.getElementById("reconciliation-feedback")
  ?.scrollIntoView({
    behavior: "smooth",
    block: "center"
  });



    } catch (error) {
    hasCompletedReconciliation = false;
    resultsSection.hidden = true;

    demoMessage.textContent =
      "Abgleich fehlgeschlagen: " +
      error.message;

    console.error(error);

  } finally {
    runButton.disabled = false;
  }
});

// ===================================================
// 12. INITIALISIERUNG
// ===================================================

try {
  if (
    !window.CreditloopCSV ||
    !window.CreditloopMatching ||
    !window.CreditloopSettlement
  ) {
    throw new Error(
      "Eine benötigte Demo-Engine fehlt."
    );
  }

  
selectScenario("industrial");
calculateDemoAutomatically();
showDemoView("overview");


} catch (error) {
  runButton.disabled = true;

  demoMessage.textContent =
    "Demo konnte nicht gestartet werden: " +
    error.message;

  console.error(error);
}

/* ==========================================
   CREDITLOOP – GEMEINSAMER LIEFERANTENFILTER
   ========================================== */

const supplierSelectors = document.querySelectorAll(
  "[data-supplier-select]"
);

const supplierNames = [
  ...new Set(
    loadScenario("industrial").invoices
      .map(invoice =>
        String(invoice.Lieferant ?? "").trim()
      )
      .filter(Boolean)
  )
].sort((a, b) => a.localeCompare(b, "de"));

supplierSelectors.forEach(select => {
  select.replaceChildren();

  const allOption = document.createElement("option");
  allOption.value = "all";
  allOption.textContent = "Alle Lieferanten";
  select.appendChild(allOption);

  supplierNames.forEach(supplier => {
    const option = document.createElement("option");
    option.value = supplier;
    option.textContent = supplier;
    select.appendChild(option);
  });

  select.value = "all";
});


let activeSupplier = "all";

function applySupplierSelection(supplier) {
  const originalDatasets = loadScenario("industrial");
  const filteredDatasets = {};

  for (const type of ["invoices", "returns", "credits"]) {
    filteredDatasets[type] = supplier === "all"
      ? originalDatasets[type]
      : originalDatasets[type].filter(record =>
          String(record.Lieferant ?? "").trim() === supplier
        );
  }

  // Nur die Daten der aktuellen Auswertung ändern.
  currentDatasets = filteredDatasets;

  setText("invoice-count", filteredDatasets.invoices.length);
  setText("return-count", filteredDatasets.returns.length);
  setText("credit-count", filteredDatasets.credits.length);

  // Die Browser-Speicherung der Fallnotizen
  // und Bearbeitungsstände wird nicht verändert.
  resetDemoResults();

  // Quelldaten und Ergebnisse neu berechnen.
  selectTab(selectedTab);
  calculateDemoAutomatically();

  if (!hasCompletedReconciliation) {
    throw new Error(
      "Die Neuberechnung konnte nicht abgeschlossen werden."
    );
  }

  // Alle drei Dropdowns auf denselben Stand bringen.
  activeSupplier = supplier;

   supplierSelectors.forEach(select => {
    select.value = supplier;
  });

  syncUnifiedNavigation();
}

supplierSelectors.forEach(select => {
  select.addEventListener("change", () => {
    const supplier = select.value;

    try {
      applySupplierSelection(supplier);
    } catch (error) {
      console.error("Lieferantenfilter fehlgeschlagen:", error);

      demoMessage.textContent =
        "Lieferantenfilter fehlgeschlagen: " +
        error.message;

      supplierSelectors.forEach(item => {
        item.value = activeSupplier;
      });
    }
  });
});

// ==========================================
// GUTSCHRIFTEN – SUCHFUNKTION
// ==========================================

function applySettlementSearch() {
  const query = (
    document.getElementById(
      "settlement-search-input"
    )?.value ?? ""
  )
    .trim()
    .toLocaleLowerCase("de-CH");

  const invoice =
    document.getElementById(
      "settlement-case-select"
    )?.value || "all";

  document.querySelectorAll(
    "#demo-settlement-rows tr, " +
    "#demo-settlement-details .settlement-entry"
  ).forEach(element => {
    const matchesSearch =
      element.dataset.settlementSearch
        ?.includes(query) ?? false;

    const matchesInvoice =
      invoice === "all" ||
      element.dataset.settlementInvoice === invoice;

    const matches =
      matchesSearch && matchesInvoice;

    element.hidden = !matches;
    element.style.display = matches ? "" : "none";
  });
}

function setupSettlementSearch() {
  if (document.getElementById("settlement-search-input")) {
    return;
  }

  const supplierSelect = document.getElementById(
    "settlement-supplier-select"
  );

  const supplierColumn = supplierSelect?.closest(
    ".case-navigation-company"
  );

  if (!supplierColumn) return;

  const column = document.createElement("div");
  column.className = "case-navigation-company cl-settlement-search";

  const label = document.createElement("label");
  label.htmlFor = "settlement-search-input";
  label.textContent = "GUTSCHRIFT SUCHEN";

  const input = document.createElement("input");
  input.id = "settlement-search-input";
  input.type = "search";
  input.className = "demo-company-select";
  input.placeholder = "CR-109, INV-109, Lieferant …";
  input.setAttribute("aria-label", "Gutschriften durchsuchen");

  input.addEventListener("input", applySettlementSearch);

  column.append(label, input);
  supplierColumn.insertAdjacentElement("afterend", column);
}

setupSettlementSearch();
applySettlementSearch();


async function createPreliminaryCasePdf(result, previewTab = null) {
  if (!window.PDFLib) {
    throw new Error("Die PDF-Bibliothek wurde nicht geladen.");
  }

  if (!currentDatasets || !window.CreditloopSettlement) {
    throw new Error("Die Prüfungsdaten sind nicht verfügbar.");
  }
  const pdfLanguage = document.documentElement.lang;

  const translatePdf =
    window.CreditloopI18n
      ?.createReportTranslator?.(pdfLanguage)
    ?? (value => String(value ?? ""));
  const { PDFDocument, StandardFonts, rgb } = window.PDFLib;

  const invoiceId = String(result.invoiceId).trim();

  // Nur sichere Dokumentkennungen zulassen.
  if (!/^[A-Za-z0-9_-]+$/.test(invoiceId)) {
    throw new Error("Ungültige Rechnungsnummer.");
  }

  // ----------------------------------------------
  // 1. Zugehörige Dokumente ermitteln
  // ----------------------------------------------

  const relatedReturns = currentDatasets.returns.filter(
    item =>
      String(item.Rechnungsnummer ?? "").trim() === invoiceId
  );

  const relatedCredits = currentDatasets.credits.filter(
    item =>
      String(item.Rechnungsnummer ?? "").trim() === invoiceId
  );

  const creditIds = new Set(
    relatedCredits.map(item =>
      String(item.Gutschriftnummer ?? "").trim()
    )
  );

  const parsedBookings = CreditloopCSV.parse(
    settlementDemoData[selectedScenario]
  );

  if (
    parsedBookings.errors.length ||
    !CreditloopSettlement.isSettlementFile(parsedBookings.headers)
  ) {
    throw new Error("Buchungsdaten konnten nicht geprüft werden.");
  }

  const relatedBookings = parsedBookings.records.filter(
    item =>
      creditIds.has(
        String(item.Gutschriftnummer ?? "").trim()
      )
  );

  const settlement = CreditloopSettlement.reconcile(
    relatedCredits,
    relatedBookings
  );

  const sumAmount = (field) => {
    const values = settlement.results.map(item => item[field]);

    if (!values.every(Number.isSafeInteger)) {
      throw new Error("Ein Buchungsbetrag ist ungültig.");
    }

    const sum = values.reduce((total, value) => total + value, 0);

    if (!Number.isSafeInteger(sum)) {
      throw new Error("Betragssumme überschreitet den sicheren Bereich.");
    }

    return sum;
  };

  const allocated = sumAmount("allocated");
  const remaining = sumAmount("remaining");

  const documents = [
    {
      filename: invoiceId + ".pdf",
      label: "Originalrechnung"
    }
  ];

  for (const item of relatedReturns) {
    documents.push({
      filename: String(item.Retourennummer).trim() + ".pdf",
      label: "Retourenbeleg"
    });
  }

  for (const item of relatedCredits) {
    documents.push({
      filename: String(item.Gutschriftnummer).trim() + ".pdf",
      label: "Lieferantengutschrift"
    });
  }

  for (const item of relatedBookings) {
    documents.push({
      filename: String(item.Buchungsnummer).trim() + ".pdf",
      label: "Interner Buchungsbeleg"
    });
  }

  // Doppelte Dateien verhindern.
  const uniqueDocuments = [
    ...new Map(
      documents.map(item => [item.filename, item])
    ).values()
  ];

  for (const item of uniqueDocuments) {
    if (!/^[A-Za-z0-9_-]+\.pdf$/.test(item.filename)) {
      throw new Error("Ungültiger Dokumentname: " + item.filename);
    }
  }

  // ----------------------------------------------
  // 2. PDF-Prüfbericht erzeugen
  // ----------------------------------------------

  const pdf = await PDFDocument.create();

  const font = await pdf.embedFont(StandardFonts.Helvetica);
  const boldFont = await pdf.embedFont(
    StandardFonts.HelveticaBold
  );

  const dark = rgb(0.12, 0.20, 0.25);
  const muted = rgb(0.36, 0.46, 0.51);
  const lineColor = rgb(0.82, 0.87, 0.89);

  let page = pdf.addPage([595, 842]);
  let y = 780;

  // Standard-PDF-Schriften können nicht jedes
  // Unicode-Zeichen darstellen.
    function pdfSafe(value) {
    const characters = Array.from(
      String(value ?? "")
        .replace(/[\r\n\t]/g, " ")
    );

    return characters.map(character => {
      try {
        font.encodeText(character);
        return character;
      } catch {
        return "?";
      }
    }).join("");
  }
  function formatPdfDate(value) {
    if (!value) return "Zeitpunkt nicht bekannt";

    const date = new Date(value);

    if (Number.isNaN(date.getTime())) {
      return String(value);
    }

    return new Intl.DateTimeFormat("de-CH", {
      timeZone: "Europe/Zurich",
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
      hourCycle: "h23"
    }).format(date);
  }
  function addPage() {
    page = pdf.addPage([595, 842]);
    y = 780;
  }

    function write(text, size = 11, bold = false, raw = false) {
    const selectedFont = bold ? boldFont : font;

    const words = pdfSafe(
      raw ? text : translatePdf(text)
    ).split(/\s+/);
    const lines = [];
    let currentLine = "";

    for (const word of words) {
      const candidate = currentLine
        ? currentLine + " " + word
        : word;

      if (
        currentLine &&
        selectedFont.widthOfTextAtSize(candidate, size) > 495
      ) {
        lines.push(currentLine);
        currentLine = word;
      } else {
        currentLine = candidate;
      }
    }

    if (currentLine) {
      lines.push(currentLine);
    }

    for (const line of lines) {
      if (y < 65) addPage();

      page.drawText(line, {
        x: 48,
        y,
        size,
        font: selectedFont,
        color: bold ? dark : muted
      });

      y -= size + 8;
    }
  }

    function ensureSpace(requiredHeight = 100) {
    if (y - requiredHeight < 65) {
      addPage();
    }
  }

  function section(title) {
    ensureSpace(100);

    y -= 17;
    write(title, 12, true);
    y -= 5;
  }

  function money(value) {
    return formatMoney(value, result.currency);
  }

  write("CREDITLOOP / VORLAEUFIGE FALLAKTE", 12, true);
  y -= 15;

  write(invoiceId, 24, true);
    write(result.supplier, 12, false, true);

  y -= 12;

  page.drawLine({
    start: { x: 48, y },
    end: { x: 547, y },
    thickness: 1,
    color: lineColor
  });

  section("FALLUEBERSICHT");
  write("Unternehmen: " + demoScenarios[selectedScenario].name);
  write("Rechnung: " + invoiceId);
  write("Lieferant: " + result.supplier);
  write("Pruefergebnis: " + result.category);

  section("FINANZIELLE PRUEFUNG");
  write("Genehmigter Betrag: " + money(result.expected));
  write("Gutschriften erfasst: " + money(result.issued));
  write("Potenzielle Differenz: " + money(result.difference));
  write("Buchhalterisch zugeordnet: " + money(allocated));
  write("Noch nicht zugeordnet: " + money(remaining));

  section("BEWERTUNG");

  if (settlement.warnings.length) {
    write(
      "Die Buchungspruefung enthaelt Warnungen. " +
      "Eine manuelle Kontrolle ist erforderlich."
    );
  }

  if (result.difference > 0) {
    write(
      "Es besteht eine potenzielle Betragsabweichung. " +
      "Diese ist keine bestaetigte Forderung."
    );
  } else {
    write(
      "Im erfassten Retouren- und Gutschriftabgleich " +
      "wurde keine positive Betragsdifferenz festgestellt."
    );
  }

  write(
    "Ein tatsaechlich erfolgter finanzieller Ausgleich " +
    "ist durch die vorhandenen Daten nicht unabhaengig bestaetigt."
  );

  section("DOKUMENTENUEBERSICHT");

  uniqueDocuments.forEach((item, index) => {
    write(
      (index + 1) + ". " +
      item.filename + " - " + item.label,
      10
    );
  });

  // ----------------------------------------------
  // Dokumentierter Demo-Abschlussstatus
  // ----------------------------------------------

  
  // Ausreichend Platz für den administrativen Abschluss
  // reservieren, bevor die Überschrift geschrieben wird.
  // Bei Platzmangel beginnt der Abschnitt auf einer neuen Seite.
  ensureSpace(650);

  section("ADMINISTRATIVER DEMO-ABSCHLUSS");


  try {
    const decisionRecord = CreditloopCaseDecisions.read(
      selectedScenario,
      invoiceId
    );

    if (decisionRecord.status === "closed") {
      const decision = decisionRecord.decision;

      write("Status: Administrativ abgeschlossen (Demo)", 10, true);
      write(
        "Abschlussart: " +
        (CreditloopCaseDecisions.OUTCOMES[
          decision.outcome
        ] ?? decision.outcome),
        10
      );
      write("Referenz: " + decision.reference, 10);
      write("Begruendung: " + decision.reason, 10);
      write(
        "Entscheidungszeitpunkt: " +
        formatPdfDate(decision.at),
        10
      );
    } else {
      write("Status: Kein aktiver Demo-Abschluss.", 10);
    }

    if (decisionRecord.history.length) {
      write("Dokumentierte Abschlussereignisse:", 10, true);

      decisionRecord.history.forEach((entry, index) => {
        write(
          (index + 1) + ". " +
          (entry.action === "closed"
            ? "Demo-Abschluss"
            : "Wiedereroeffnung") +
          " - " + formatPdfDate(entry.at),
          9
        );

        if (entry.reason) {
          write("Grund: " + entry.reason, 9);
        }
      });
    }

  } catch (error) {
    console.error("PDF-Abschlussstatus:", error);
    write(
      "Abschlussstatus konnte nicht zuverlaessig gelesen werden.",
      10
    );
  }

  write(
    "Keine unabhaengig bestaetigte finanzielle Rueckgewinnung.",
    10,
    true
  );

  section("STATUS");
  write(
    "VORLAEUFIGER PRUEFBERICHT - KEIN FINALER FALLABSCHLUSS.",
    10,
    true
  );

  write(
    "Fiktive Konzeptdemo. Die Daten und Nachweise " +
    "wurden nicht unabhaengig verifiziert.",
    9
  );

  // ----------------------------------------------
  // 2b. Bearbeitung und Abschlussdokumentation
  // ----------------------------------------------

  section("BEARBEITUNGSVERLAUF");

  const workflow = getCaseWorkflow(result);
  const history = Array.isArray(workflow?.history)
    ? workflow.history
    : [];

  if (!history.length) {
    write("Keine Bearbeitungseintraege vorhanden.", 10);
  } else {
    history.forEach((entry, index) => {
      if (!entry || typeof entry !== "object") {
        write(
          (index + 1) + ". Nicht auswertbarer Verlaufseintrag.",
          10
        );
        return;
      }

      // Felder aus dem vorhandenen Ereigniseintrag
      // auslesen, ohne den gespeicherten Eintrag zu ändern.
      const date =
        entry.createdAt ??
        entry.timestamp ??
        entry.date ??
        entry.at ??
        "";

      const status =
        entry.status ??
        entry.label ??
        entry.title ??
        "";

      const note =
        entry.note ??
        entry.text ??
        entry.message ??
        entry.description ??
        "";

      write("Eintrag " + (index + 1), 10, true);

      if (date) {
        write("Zeitangabe: " + formatPdfDate(date), 10);
      }

      if (status) {
        write("Status / Ereignis: " + String(status), 10);
      }

      if (note) {
              write(
          translatePdf("Notiz") + ": " +
          (index === 0
            ? translatePdf(String(note))
            : String(note)),
          10,
          false,
          true
        );
      }

      if (!date && !status && !note) {
        write(
          "Weitere gespeicherte Angaben: " +
          JSON.stringify(entry),
          9
        );
      }

      y -= 6;
    });
  }

  // ----------------------------------------------
  // Aktueller Abschlussentwurf und Versionen
  // ----------------------------------------------

  section("ABSCHLUSSENTWURF");

  const closureKey =
    "creditloop-demo-closure-draft-v1::" +
    selectedScenario + "::" + invoiceId;

  const closureOptions = {
    credit: "Gutschrift ausgestellt - Ausgleich offen",
    full: "Vollstaendiger Ausgleich - Nachweis pruefen",
    partial: "Teilweiser Ausgleich - Nachweis pruefen",
    rejected: "Ohne Rueckgewinnung geklaert"
  };

  try {
    const rawDraft = localStorage.getItem(closureKey);

    if (!rawDraft) {
      write("Kein Abschlussentwurf gespeichert.", 10);
    } else {
      const draft = JSON.parse(rawDraft);

      if (
        !draft ||
        typeof draft !== "object" ||
        typeof draft.outcome !== "string" ||
        typeof draft.reference !== "string"
      ) {
        throw new Error("Ungueltiger Abschlussentwurf.");
      }

      write("Aktueller Entwurf", 11, true);

      write(
        "Ergebnis: " +
        (closureOptions[draft.outcome] ??
          "Unbekannte Abschlussart"),
        10
      );

      write("Nachweisreferenz: " + draft.reference, 10);

      write(
        "Status: Gespeichert - nicht unabhaengig verifiziert.",
        10
      );

      const revisions = Array.isArray(draft.revisions)
        ? draft.revisions
        : [];

      section("AENDERUNGSHISTORIE DES ABSCHLUSSENTWURFS");

      if (!revisions.length) {
        write("Keine gespeicherten Revisionen vorhanden.", 10);
      } else {
        [...revisions].reverse().forEach((revision, index) => {
          if (!revision || typeof revision !== "object") {
            write(
              "Revision " + (index + 1) +
              ": Nicht auswertbarer Eintrag.",
              10
            );
            return;
          }

          write("Version " + (revisions.length - index), 10, true);

          write(
            "Ergebnis: " +
            (closureOptions[revision.outcome] ??
              "Unbekannte Abschlussart"),
            10
          );

          write(
            "Referenz: " + String(revision.reference ?? ""),
            10
          );

          write(
            "Gespeichert: " +
            formatPdfDate(revision.savedAt),
            10
          );

          y -= 5;
        });
      }
    }
  } catch (error) {
    console.error("PDF: Abschlussentwurf:", error);

    write(
      "Abschlussentwurf konnte nicht zuverlaessig gelesen werden.",
      10
    );
  }

  // ----------------------------------------------
  // Dokumentierte Abschlussnachweise
  // ----------------------------------------------

  section("DOKUMENTIERTE ABSCHLUSSNACHWEISE");

  const proofsKey =
    "creditloop-demo-closure-proofs-v1::" +
    selectedScenario + "::" + invoiceId;

    const proofLabels = {
    credit: "Ausgestellte Lieferantengutschrift",
    payment: "Zahlungseingang / Banknachweis",
    offset: "Verrechnung / Buchungsbeleg",
    supplier: "Schriftliche Lieferantenentscheidung",
    other: "Sonstiger Klaerungsnachweis"
  };

  try {
    const rawProofs = localStorage.getItem(proofsKey);

    if (!rawProofs) {
      write("Keine Abschlussnachweise dokumentiert.", 10);
    } else {
      const proofs = JSON.parse(rawProofs);

      if (!Array.isArray(proofs)) {
        throw new Error("Ungueltige Nachweisliste.");
      }

      if (!proofs.length) {
        write("Keine Abschlussnachweise dokumentiert.", 10);
      }

      proofs.forEach((proof, index) => {
        if (!proof || typeof proof !== "object") {
          write(
            "Nachweis " + (index + 1) +
            ": Nicht auswertbarer Eintrag.",
            10
          );
          return;
        }

        write("Nachweis " + (index + 1), 11, true);

        write(
          "Nachweisart: " +
          (proofLabels[proof.type] ?? "Unbekannte Art"),
          10
        );

        write(
          "Referenz: " + String(proof.reference ?? ""),
          10
        );

        write(
          "Beschreibung: " + String(proof.note ?? ""),
          10
        );

        write(
          "Erfasst: " +
          (proof.savedAt
            ? String(proof.savedAt)
            : "Zeitpunkt unbekannt"),
          10
        );

        
        write(
          "Pruefstatus: Dokumentiert - nicht unabhaengig verifiziert.",
          10
        );

        // Automatischer Referenzabgleich im PDF-Bericht.
                if (proof.type === "offset") {
          ensureSpace(155);

          write("AUTOMATISCHER REFERENZABGLEICH", 10, true);

          try {
            const matchingBookings = parsedBookings.records.filter(
              booking =>
                String(booking.Buchungsnummer ?? "").trim() ===
                String(proof.reference ?? "").trim()
            );

            if (matchingBookings.length !== 1) {
              write(
                matchingBookings.length === 0
                  ? "Referenz in den Buchungsdaten nicht gefunden."
                  : "Referenz mehrfach vorhanden - Zuordnung unklar.",
                10
              );
            } else {
              const booking = matchingBookings[0];

              const credit = relatedCredits.find(
                item =>
                  String(item.Gutschriftnummer ?? "").trim() ===
                  String(booking.Gutschriftnummer ?? "").trim()
              );

              const validMatch =
                credit &&
                String(credit.Rechnungsnummer ?? "").trim() ===
                  invoiceId &&
                String(credit.Lieferant ?? "").trim() ===
                  result.supplier &&
                String(booking.Waehrung ?? "").trim() ===
                  String(credit.Waehrung ?? "").trim() &&
                String(credit.Waehrung ?? "").trim() ===
                  result.currency;

              const bookingAmount = Number(booking.Betrag);
              const creditAmount = Number(credit?.Betrag);

              const validAmounts =
                Number.isFinite(bookingAmount) &&
                Number.isFinite(creditAmount) &&
                bookingAmount > 0 &&
                creditAmount > 0 &&
                Number.isSafeInteger(
                  Math.round(bookingAmount * 100)
                ) &&
                Number.isSafeInteger(
                  Math.round(creditAmount * 100)
                ) &&
                Math.round(bookingAmount * 100) <=
                  Math.round(creditAmount * 100);

              if (!validMatch || !validAmounts) {
                write(
                  "Referenz vorhanden, aber Fallzuordnung, " +
                  "Waehrung oder Betrag nicht eindeutig plausibel.",
                  10
                );
              } else {
                write("Referenz gefunden und Fall zugeordnet.", 10);
                write(
                  "Gutschrift: " + credit.Gutschriftnummer,
                  10
                );
                write(
                  "Buchung: " + booking.Buchungsnummer,
                  10
                );
                write(
                  "Buchungsbetrag: " +
                  formatMoney(bookingAmount * 100, result.currency),
                  10
                );
                write(
                  "Referenz, Einzelbetrag und Waehrung plausibel.",
                  10
                );
              }
            }

          } catch (error) {
            console.error("PDF-Referenzpruefung:", error);

            write(
              "Referenzabgleich konnte nicht abgeschlossen werden.",
              10
            );
          }

          write(
            "Kein unabhaengiger Nachweis eines " +
            "tatsaechlichen finanziellen Ausgleichs.",
            10
          );
        }

        y -= 7;

      });
    }
  } catch (error) {
    console.error("PDF: Abschlussnachweise:", error);

    write(
      "Dokumentierte Nachweise konnten nicht zuverlaessig gelesen werden.",
      10
    );
  }
ensureSpace(110);
  section("WICHTIGER PRUEFHINWEIS");

  write(
    "Diese Fallakte enthaelt gespeicherte Demo-Eintraege. " +
    "Die Eintraege sind nicht revisionssicher und " +
    "belegen keine bestaetigte finanzielle Rueckgewinnung.",
    10
  );
  // ----------------------------------------------
  // Seitenzahlen nur für creditloop-Berichtsseiten
  // ----------------------------------------------

  const reportPages = pdf.getPages();

  reportPages.forEach((reportPage, index) => {
    const pageText =
      "creditloop Pruefbericht  |  Seite " +
      (index + 1) + " von " + reportPages.length;

    reportPage.drawLine({
      start: { x: 48, y: 48 },
      end: { x: 547, y: 48 },
      thickness: 0.5,
      color: lineColor
    });

        reportPage.drawText(pdfSafe(translatePdf(pageText)), {
      x: 48,
      y: 32,
      size: 8,
      font,
      color: muted
    });
  });
  // ----------------------------------------------
  // 3. Original-PDF-Seiten anhängen
  // ----------------------------------------------

  for (const item of uniqueDocuments) {
    const response = await fetch(
      "documents/" + encodeURIComponent(item.filename)
    );

    if (!response.ok) {
      throw new Error(
        "PDF fehlt oder ist nicht erreichbar: " +
        item.filename
      );
    }

    const bytes = await response.arrayBuffer();
    const sourcePdf = await PDFDocument.load(bytes);

    const copiedPages = await pdf.copyPages(
      sourcePdf,
      sourcePdf.getPageIndices()
    );

    copiedPages.forEach(copiedPage => {
      pdf.addPage(copiedPage);
    });
  }

  // ----------------------------------------------
  // 4. Vorschau oder Download
  // ----------------------------------------------

  const pdfBytes = await pdf.save();

  const blob = new Blob([pdfBytes], {
    type: "application/pdf"
  });

  const url = URL.createObjectURL(blob);

  if (previewTab) {
    previewTab.location.href = url;
  } else {
    const link = document.createElement("a");

    link.href = url;
    link.download =
      "creditloop_Fallakte_" + invoiceId + "_ENTWURF.pdf";

    document.body.appendChild(link);
    link.click();
    link.remove();
  }

  setTimeout(() => URL.revokeObjectURL(url), 300000);
}
// ==========================================
// Einheitliche Auswahlleisten
// ==========================================

function syncUnifiedNavigation() {
  if (!document.querySelector(".cl-unified-toolbar")) {
    return;
  }

  const queryFor = id =>
    (document.getElementById(id)?.value ?? "")
      .trim()
      .toLocaleLowerCase("de-CH");

  function matches(result, query) {
    return [
      result.invoiceId,
      result.caseId,
      result.supplier
    ]
      .filter(Boolean)
      .join(" ")
      .toLocaleLowerCase("de-CH")
      .includes(query);
  }

  function fill(select, results, value, all = false) {
    if (!select) return;

    const placeholder = createElement(
      "option",
      all ? "Alle Vorgänge" : "Vorgang auswählen"
    );

    placeholder.value = all ? "all" : "";

    select.replaceChildren(placeholder);

    results.forEach(result => {
      const option = createElement(
        "option",
        result.invoiceId + " · " + result.supplier
      );

      option.value = result.invoiceId;
      select.appendChild(option);
    });

    select.value = results.some(
      result => result.invoiceId === value
    )
      ? value
      : placeholder.value;

    select.disabled = results.length === 0;
  }

  const cases = currentResults.filter(result =>
    matches(result, queryFor("case-search-input"))
  );

  const closures = currentResults.filter(result =>
    matches(result, queryFor("closure-search-input"))
  );

  fill(
    document.getElementById("cases-case-select"),
    cases,
    selectedCaseId
  );

  fill(
    document.getElementById("closure-case-select"),
    closures,
    selectedCaseId
  );

  const creditedInvoices = new Set(
    currentDatasets.credits.map(record =>
      String(record.Rechnungsnummer).trim()
    )
  );

  const creditCases = currentResults.filter(result =>
    creditedInvoices.has(result.invoiceId)
  );

  const settlementSelect = document.getElementById(
    "settlement-case-select"
  );

  fill(
    settlementSelect,
    creditCases,
    settlementSelect?.value,
    true
  );

  document.querySelectorAll(
    ".cl-unified-toolbar [data-supplier-select]"
  ).forEach(select => {
    select.value = activeSupplier;
  });

  const closureHost = document.querySelector(
    "#closure-content .cl-closure-host"
  );

  if (closureHost) {
    closureHost.hidden =
      !closures.length ||
      !closureHost.children.length;
  }

  applySettlementSearch();
}

function initializeUnifiedToolbars() {
  if (
    !currentDatasets ||
    document.querySelector(".cl-unified-toolbar")
  ) {
    return;
  }

  const casesView = document.querySelector(
    '[data-demo-view="cases"]'
  );

  const closureView = document.querySelector(
    '[data-demo-view="closure"]'
  );

  const settlementView = document.querySelector(
    '[data-demo-view="settlement"]'
  );

  const casesSupplier = document.getElementById(
    "cases-supplier-select"
  );

  const settlementSupplier = document.getElementById(
    "settlement-supplier-select"
  );

  const closureSelect = document.getElementById(
    "closure-case-select"
  );

  const settlementSearch = document.getElementById(
    "settlement-search-input"
  );

  if (
    !casesView ||
    !closureView ||
    !settlementView ||
    !casesSupplier ||
    !settlementSupplier ||
    !closureSelect ||
    !settlementSearch
  ) {
    console.error(
      "creditloop: Eine Auswahlleiste konnte nicht aufgebaut werden."
    );
    return;
  }

  function makeSelect(id) {
    const select = document.createElement("select");
    select.id = id;
    return select;
  }

  function makeSearch(id, placeholder) {
    const input = document.createElement("input");

    input.id = id;
    input.type = "search";
    input.placeholder = placeholder;

    return input;
  }

  function mount(
    view,
    supplier,
    select,
    search,
    oldBar
  ) {
    const bar = createElement(
      "div",
      null,
      "cl-unified-toolbar"
    );

    const fields = [
      ["LIEFERANT AUSWÄHLEN", supplier],
      ["Vorgang auswählen", select],
      ["Suchen", search]
    ];

    fields.forEach(([text, control]) => {
      const field = createElement(
        "div",
        null,
        "cl-unified-field"
      );

      const label = createElement("label", text);
      label.htmlFor = control.id;

      control.classList.add(
        "demo-company-select",
        "cl-unified-control"
      );

      // Die sichtbare Beschriftung übernimmt
      // die zugängliche Bezeichnung.
      control.removeAttribute("aria-label");

      field.append(label, control);
      bar.appendChild(field);
    });

    if (oldBar) {
      oldBar.replaceWith(bar);
    } else {
      view.querySelector(".results-heading").after(bar);
    }
  }

  const oldCaseBar = casesView.querySelector(
    ".case-navigation-bar"
  );

  const oldSettlementBar = settlementView.querySelector(
    ".settlement-company-bar"
  );

  const oldClosureBar = closureSelect.closest(
    ".cl-closure-selector"
  );

  const caseSearch = makeSearch(
    "case-search-input",
    "INV-109 oder Lieferant …"
  );

  document.getElementById(
    "case-search-input"
  )?.remove();

  const caseSelect = makeSelect(
    "cases-case-select"
  );

  const settlementSelect = makeSelect(
    "settlement-case-select"
  );

  const closureSearch = makeSearch(
    "closure-search-input",
    "INV-109 oder Lieferant …"
  );

  const closureSupplier = makeSelect(
    "closure-supplier-select"
  );

  closureSupplier.setAttribute(
    "data-supplier-select",
    ""
  );

  [...casesSupplier.options].forEach(option => {
    closureSupplier.appendChild(
      option.cloneNode(true)
    );
  });

  mount(
    casesView,
    casesSupplier,
    caseSelect,
    caseSearch,
    oldCaseBar
  );

  mount(
    closureView,
    closureSupplier,
    closureSelect,
    closureSearch,
    oldClosureBar
  );

  mount(
    settlementView,
    settlementSupplier,
    settlementSelect,
    settlementSearch,
    oldSettlementBar
  );

  document.getElementById(
    "case-search-area"
  )?.remove();

  document.getElementById(
    "closure-case-context"
  )?.remove();

  caseSearch.addEventListener("input", () => {
    window.applyCaseFilter();
    syncUnifiedNavigation();
  });

  caseSelect.addEventListener("change", () => {
    const result = currentResults.find(
      item => item.invoiceId === caseSelect.value
    );

    if (!result) return;

    // Falls ein Bearbeitungsfilter den ausgewählten
    // Vorgang ausblendet, diesen Filter zurückstellen.
    if (!matchesCaseFilter(result)) {
      activeCaseFilter = "all";

      document.querySelectorAll(
        "#case-workflow-filters .case-filter-button"
      ).forEach(button => {
        button.classList.toggle(
          "active",
          button.dataset.filter === "all"
        );
      });

      window.applyCaseFilter();
    }

    selectCase(result);
  });

  closureSearch.addEventListener("input", () => {
    const query = closureSearch.value
      .trim()
      .toLocaleLowerCase("de-CH");

    const matching = currentResults.filter(result =>
      [
        result.invoiceId,
        result.caseId,
        result.supplier
      ]
        .filter(Boolean)
        .join(" ")
        .toLocaleLowerCase("de-CH")
        .includes(query)
    );

    if (
      matching.length &&
      !matching.some(
        result => result.invoiceId === selectedCaseId
      )
    ) {
      selectCase(matching[0]);
    }

    syncUnifiedNavigation();
  });

  settlementSelect.addEventListener(
    "change",
    applySettlementSearch
  );

  closureSupplier.addEventListener("change", () => {
    try {
      applySupplierSelection(
        closureSupplier.value
      );
    } catch (error) {
      closureSupplier.value = activeSupplier;
      window.alert(error.message);
    }
  });

  // Kompakte Unternehmensangabe außerhalb der Leisten.
  const companyBadge = createElement(
    "aside",
    null,
    "cl-demo-company-badge"
  );

  companyBadge.id = "demo-company-badge";

  const caption = createElement(
    "small",
    "ANGEMELDETES UNTERNEHMEN",
    "cl-demo-company-caption"
  );

  const name = createElement(
    "strong",
    demoScenarios[selectedScenario].name
  );

  name.setAttribute(
    "data-demo-company-name",
    ""
  );

  const description = createElement(
    "small",
    "Fiktives Demo-Unternehmen · Demo-Modus",
    "cl-demo-company-description"
  );

  companyBadge.append(
    caption,
    name,
    description
  );

    const topbarLabel = document.querySelector(
    ".topbar-label"
  );

  if (topbarLabel) {
    const headerContext = createElement(
      "div",
      null,
      "cl-demo-header-context"
    );

    topbarLabel.replaceWith(headerContext);

    headerContext.append(
      topbarLabel,
      companyBadge
    );
  }

  syncUnifiedNavigation();
}

initializeUnifiedToolbars();