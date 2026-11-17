"use strict";

(() => {
  const D = window.ClaraSRData;
  const E = window.ClaraSRInspection;
  const { t, lang } = window.ClaraSRText;

  const storageKey = "clarasr-upstream-demo-v1";

  let store = {
    variants: {},
    finals: {},
    reopenings: [],
    journeys: {}
  };

  const guidedIds = new Set([
    "INV-301",
    "INV-303"
  ]);

  const stageKeys = [
    "stageDetected",
    "stageReview",
    "stageApproved",
    "stageCredited",
    "stageSettled"
  ];

  let damagedStore = false;
  let activeId = "INV-301";
  let query = "";
  let kind = "all";
  let renderPending = false;

  const clone = value =>
    JSON.parse(JSON.stringify(value));

  const itemById = id =>
    D.items.find(item => item.id === id);

  function money(value) {
    if (!Number.isSafeInteger(value)) {
      return "—";
    }

    const locale = ({
      de: "de-CH",
      en: "en-CH",
      it: "it-CH",
      fr: "fr-CH"
    })[lang()] || "de-CH";

    return new Intl.NumberFormat(locale, {
      style: "currency",
      currency: "CHF"
    }).format(value / 100);
  }

  function node(tag, text, className) {
    const element = document.createElement(tag);

    if (text !== undefined) {
      element.textContent = text;

      const key = window.ClaraSRText.keyFor(text);

      if (key) {
        element.dataset.inspectionText = key;
      }
    }

    if (className) {
      element.className = className;
    }

    return element;
  }

  function button(
    text,
    action,
    className = "document-viewer-button"
  ) {
    const element = node(
      "button",
      text,
      className
    );

    element.type = "button";
    element.addEventListener("click", action);

    return element;
  }

  function journey(id) {
    return store.journeys[id] || {
      stage: 0,
      events: []
    };
  }

  // Ausgangsdaten enthalten die vollständige Belegkette.
  // Im geführten Ablauf werden spätere Belege erst
  // nach dem zugehörigen Schritt eingeblendet.
  function effectiveItem(item) {
    if (!guidedIds.has(item.id)) {
      return item;
    }

    const stage = journey(item.id).stage;

    return {
      ...item,

      approved:
        stage >= 2 ? item.approved : 0,

      approvalId:
        stage >= 2 ? item.approvalId : null,

      credits:
        stage >= 3 ? item.credits : [],

      settlements:
        stage >= 4 ? item.settlements : [],

      documents: item.documents.filter(doc =>
        ![
          "decision",
          "credit",
          "offset",
          "refund"
        ].includes(doc.type) ||
        (doc.type === "decision" && stage >= 2) ||
        (doc.type === "credit" && stage >= 3) ||
        (
          ["offset", "refund"].includes(doc.type) &&
          stage >= 4
        )
      )
    };
  }

  function current(item) {
    return E.inspect(
      effectiveItem(item),
      store.variants[item.id] || null
    );
  }

  function activeFinal(id) {
    const records = store.finals[id] || [];
    const last = records.at(-1);

    if (!last) {
      return null;
    }

    const reopened = store.reopenings.some(
      entry =>
        entry.invoiceId === id &&
        entry.version === last.version
    );

    return reopened ? null : last;
  }

  function checkStore(value) {
    if (
      !value ||
      typeof value !== "object" ||
      Array.isArray(value) ||
      !value.variants ||
      !value.finals ||
      !Array.isArray(value.reopenings) ||
      Array.isArray(value.variants) ||
      Array.isArray(value.finals)
    ) {
      throw new Error("corrupt");
    }

    if (value.journeys === undefined) {
      value.journeys = {};
    }

    if (
      !value.journeys ||
      typeof value.journeys !== "object" ||
      Array.isArray(value.journeys)
    ) {
      throw new Error("corrupt");
    }

    for (
      const [id, record] of
      Object.entries(value.journeys)
    ) {
      if (
        !guidedIds.has(id) ||
        !record ||
        !Number.isInteger(record.stage) ||
        record.stage < 0 ||
        record.stage > 4 ||
        !Array.isArray(record.events)
      ) {
        throw new Error("corrupt");
      }

      for (const event of record.events) {
        if (
          !event ||
          !Number.isInteger(event.stage) ||
          event.stage < 0 ||
          event.stage > 4 ||
          !Number.isFinite(Date.parse(event.at))
        ) {
          throw new Error("corrupt");
        }
      }
    }

    for (
      const [id, variant] of
      Object.entries(value.variants)
    ) {
      const item = itemById(id);

      if (
        !item ||
        !variant ||
        !E.inspect(item, variant).valid
      ) {
        throw new Error("corrupt");
      }
    }

    for (
      const [id, records] of
      Object.entries(value.finals)
    ) {
      if (
        !itemById(id) ||
        !Array.isArray(records)
      ) {
        throw new Error("corrupt");
      }

      records.forEach((record, index) => {
        if (
          !record ||
          record.invoiceId !== id ||
          record.version !== index + 1 ||
          typeof record.reason !== "string" ||
          record.reason.trim().length < 10 ||
          record.reason.length > 1000 ||
          !Number.isFinite(Date.parse(record.at)) ||
          record.item?.id !== id ||
          !record.inspection?.demoClosable ||
          !Array.isArray(record.workflow?.history) ||
          !["de", "en", "it", "fr"].includes(
            record.language
          )
        ) {
          throw new Error("corrupt");
        }
      });
    }

    for (const entry of value.reopenings) {
      if (
        !entry ||
        !value.finals[entry.invoiceId]?.some(
          record =>
            record.version === entry.version
        ) ||
        typeof entry.reason !== "string" ||
        entry.reason.length < 10 ||
        entry.reason.length > 1000 ||
        !Number.isFinite(Date.parse(entry.at))
      ) {
        throw new Error("corrupt");
      }
    }

    return value;
  }

  try {
    const raw = localStorage.getItem(storageKey);

    if (raw) {
      store = checkStore(JSON.parse(raw));
    }
  } catch (error) {
    damagedStore = true;
  }

  function save(next) {
    if (damagedStore) {
      throw new Error("corrupt");
    }

    checkStore(next);

    // Zustand erst übernehmen, wenn die Speicherung
    // erfolgreich abgeschlossen wurde.
    localStorage.setItem(
      storageKey,
      JSON.stringify(next)
    );

    store = next;
  }

  function feedback(host, error = false) {
    const key = error
      ? damagedStore
        ? "corrupt"
        : "storageError"
      : "checked";

    host.textContent = t(key);

    host.setAttribute(
      "role",
      error ? "alert" : "status"
    );
  }

  function kindLabel(key) {
    return t(key);
  }

  function docType(type) {
    return t(
      type === "damage"
        ? "damageDocument"
        : type
    );
  }

  function unitLabel(unit) {
    return t(
      unit === "Stück"
        ? "units"
        : unit === "Stiel"
          ? "stems"
          : "bundles"
    );
  }

  function csv(headers, records) {
    return [
      headers.join(";"),
      ...records.map(row =>
        row.map(value => String(value)).join(";")
      )
    ].join("\n");
  }

  // Bestehende Belegtabellen und Ausgleichsfunktionen
  // erhalten die jeweils verfügbaren neuen Daten.
  //
  // Der technische Tab-Schlüssel "returns" bleibt
  // kompatibel. Sichtbar wird er als Lieferantenzusage
  // bezeichnet; die Datensätze enthalten DEC-Referenzen.
  function synchronizeData() {
    for (
      const company of
      ["industrial", "flowers"]
    ) {
      const items = D.items
        .filter(item => item.company === company)
        .map(effectiveItem);

      demoScenarios[company].invoices = csv(
        [
          "Rechnungsnummer",
          "Lieferant",
          "Betrag",
          "Waehrung"
        ],
        items.map(item => [
          item.id,
          item.supplier,
          (
            item.invoiced *
            item.invoiceUnitPrice /
            100
          ).toFixed(2),
          item.currency
        ])
      );

      demoScenarios[company].returns = csv(
        [
          "Retourennummer",
          "Rechnungsnummer",
          "Lieferant",
          "GenehmigterBetrag",
          "Waehrung",
          "Status"
        ],
        items
          .filter(item => item.approved > 0)
          .map(item => [
            item.approvalId,
            item.id,
            item.supplier,
            (item.approved / 100).toFixed(2),
            item.currency,
            "Genehmigt"
          ])
      );

      demoScenarios[company].credits = csv(
        [
          "Gutschriftnummer",
          "Rechnungsnummer",
          "Lieferant",
          "Betrag",
          "Waehrung"
        ],
        items.flatMap(item =>
          item.credits.map(credit => [
            credit.id,
            item.id,
            item.supplier,
            (credit.amount / 100).toFixed(2),
            item.currency
          ])
        )
      );

      settlementDemoData[company] = csv(
        [
          "Buchungsnummer",
          "Gutschriftnummer",
          "Buchungsart",
          "Betrag",
          "Waehrung",
          "Belegreferenz"
        ],
        items.flatMap(item =>
          item.settlements.map(entry => [
            entry.id,
            entry.creditId,
            entry.method === "refund"
              ? "Rueckzahlung"
              : "Verrechnung",
            (entry.amount / 100).toFixed(2),
            item.currency,
            entry.id
          ])
        )
      );

      // Rückzahlungen sind bereits als eigene
      // Zuordnung enthalten: nicht doppelt zählen.
      demoPaymentEvidence[company] = [];
    }
  }

  synchronizeData();

  const oldLoad = loadScenario;

  loadScenario = function (key) {
    synchronizeData();

    return {
      ...oldLoad(key),
      upstream: D.items.filter(
        item => item.company === key
      )
    };
  };

  const oldProcess =
    window.CreditloopMatching.process;

  function resultFor(item) {
    const inspection = current(item);
    const effective = effectiveItem(item);
    const baseline = E.inspect(effective);

    return {
      invoiceId: item.id,
      supplier: item.supplier,

      expected: effective.approved,
      issued: baseline.issued,

      currency: item.currency,
      invoiceCurrency: item.currency,
      claimCurrency: item.currency,

      difference: inspection.valid
        ? Math.max(
            0,
            inspection.exposure -
              (
                inspection.changed
                  ? 0
                  : inspection.allocated
              )
          )
        : null,

      category: kindLabel(inspection.key),
      explanation: t("noClaim"),

      financialStatus: inspection.changed
        ? t("variant")
        : t("lifecycle"),

      evidence: {
        returnIds: effective.approvalId
          ? [effective.approvalId]
          : [],

        creditIds: effective.credits.map(
          credit => credit.id
        )
      },

      upstream: item,
      inspection
    };
  }

  window.CreditloopMatching.process =
    function (datasets) {
      if (!datasets.upstream) {
        return oldProcess(datasets);
      }

      return datasets.upstream.map(resultFor);
    };

  const oldIssue = isPotentialIssue;

  isPotentialIssue = function (result) {
    if (!result.upstream) {
      return oldIssue(result);
    }

    const inspection = current(
      result.upstream
    );

    return (
      !inspection.valid ||
      inspection.exposure > 0 ||
      inspection.issues.length > 0
    );
  };

  const oldLocked = isDemoCaseLocked;

  isDemoCaseLocked = function (result) {
    if (!result.upstream) {
      return oldLocked(result);
    }

    return (
      damagedStore ||
      Boolean(activeFinal(result.invoiceId))
    );
  };

  const oldAllow = allowDemoCaseEdit;

  allowDemoCaseEdit = function (result) {
    if (!result.upstream) {
      return oldAllow(result);
    }

    if (isDemoCaseLocked(result)) {
      alert(
        t(
          damagedStore
            ? "corrupt"
            : "resetLocked"
        )
      );

      return false;
    }

    return true;
  };

  const oldFilter = matchesCaseFilter;

  matchesCaseFilter = function (result) {
    if (
      result.upstream &&
      activeCaseFilter === "closed"
    ) {
      return (
        Boolean(
          activeFinal(result.invoiceId)
        ) ||
        getCaseWorkflow(result).status === "closed"
      );
    }

    if (
      result.upstream &&
      activeFinal(result.invoiceId) &&
      activeCaseFilter !== "all"
    ) {
      return false;
    }

    return oldFilter(result);
  };

  const oldRefresh =
    refreshCaseStatusLabels;

  refreshCaseStatusLabels = function () {
    oldRefresh();

    caseList.querySelectorAll(
      ".case-list-item"
    ).forEach(row => {
      const closed = Boolean(
        activeFinal(row.dataset.invoiceId)
      );

      const select = row.querySelector(
        ".case-quick-status-select"
      );

      const reset = row.querySelector(
        ".case-list-reset"
      );

      if (select) {
        select.disabled =
          damagedStore || closed;
      }

      if (reset) {
        reset.disabled =
          damagedStore || closed;
      }

      if (closed) {
        const label = row.querySelector(
          ".case-workflow-status"
        );

        if (label) {
          label.hidden = false;
          label.style.display = "";
          label.textContent = t("closed");
        }
      }
    });
  };

  const oldDraw = drawResults;

  drawResults = function (results) {
    const actionable = results.filter(
      result =>
        !result.upstream ||
        isPotentialIssue(result)
    );

    oldDraw(actionable);

    setText(
      "summary-total",
      results.length
    );

    updateLabels();
  };

  const oldShow = showCaseDetails;

  showCaseDetails = function (result) {
    if (!result.upstream) {
      return oldShow(result);
    }

    const item = result.upstream;
    const inspection = current(item);

    caseDetail.replaceChildren(
      node(
        "h3",
        item.id,
        "detail-title"
      ),
      node("p", item.supplier),
      node(
        "strong",
        kindLabel(inspection.key)
      )
    );

    renderFacts(
      caseDetail,
      item,
      inspection
    );

    const guide = renderJourney(item);

    if (guide) {
      caseDetail.append(guide);
    }

    caseDetail.append(
      button(
        t("documents"),
        () => openDocuments(item.id)
      ),
      node("h4", t("next")),
      node(
        "p",
        nextText(item, inspection)
      ),
      buildCaseWorkflow(result),
      button(
        t("preliminary"),
        () => {
          downloadReport(item.id).catch(
            error => alert(error.message)
          );
        }
      )
    );

    const closureHost =
      document.querySelector(
        "#closure-content .cl-closure-host"
      ) ||
      document.getElementById(
        "closure-content"
      );

    if (closureHost) {
      document.querySelectorAll(
        "#closure-content .cl-inspection-closure"
      ).forEach(element => element.remove());

      closureHost.replaceChildren(
        makeClosure(item)
      );

      closureHost.dataset.invoiceId =
        item.id;

      closureHost.hidden = false;
    }
  };

  const oldPdf = createPreliminaryCasePdf;

  createPreliminaryCasePdf =
    async function (
      result,
      previewTab = null
    ) {
      if (!result.upstream) {
        return oldPdf(
          result,
          previewTab
        );
      }

      await downloadReport(
        result.invoiceId
      );

      if (previewTab) {
        previewTab.close();
      }
    };

  // Navigation und neue Ansicht.
  const nav = document.querySelector(
    '.demo-nav-link[data-view="reconcile"]'
  );

  const inspectionLink =
    nav.cloneNode(false);

  inspectionLink.dataset.view =
    "inspection";

  inspectionLink.href =
    "#inspection-page";

  inspectionLink.addEventListener(
    "click",
    event => {
      event.preventDefault();
      showDemoView("inspection");
    }
  );

  nav.before(inspectionLink);

  const page = node(
    "section",
    undefined,
    "workspace demo-view cl-inspection"
  );

  page.id = "inspection-page";
  page.dataset.demoView = "inspection";

  document.querySelector(
    '[data-demo-view="reconcile"]'
  ).before(page);

  function nextText(item, inspection) {
    if (!inspection.valid) {
      return t(inspection.key);
    }

    if (inspection.key === "match") {
      return t("nextMatch");
    }

    if (
      inspection.key === "partial" ||
      inspection.key === "deliveryOpen"
    ) {
      return t("nextPartial");
    }

    if (
      guidedIds.has(item.id) &&
      journey(item.id).stage < 4 &&
      !inspection.changed
    ) {
      return t("nextGuided");
    }

    if (inspection.demoClosable) {
      return t("nextComplete");
    }

    return t(
      inspection.approved &&
      !inspection.changed
        ? "nextCredit"
        : "nextIssue"
    );
  }

  function fact(host, label, value) {
    const box = node(
      "div",
      undefined,
      "cl-inspection-fact"
    );

    box.append(
      node("small", label),
      node("strong", value)
    );

    host.append(box);
  }

  function renderFacts(
    host,
    item,
    inspection
  ) {
    if (inspection.changed) {
      host.append(
        node(
          "p",
          t("variant"),
          "cl-inspection-notice"
        )
      );
    }

    if (!inspection.valid) {
      host.append(
        node(
          "p",
          t(inspection.key),
          "cl-inspection-notice"
        )
      );

      return;
    }

    const facts = node(
      "div",
      undefined,
      "cl-inspection-facts"
    );

    fact(
      facts,
      t(
        inspection.changed
          ? "testExposure"
          : "originalExposure"
      ),
      money(inspection.exposure)
    );

    fact(
      facts,
      t("approved"),
      inspection.approved
        ? money(inspection.approved)
        : t("unknown")
    );

    fact(
      facts,
      t("issued"),
      money(inspection.issued)
    );

    fact(
      facts,
      t("allocated"),
      money(inspection.allocated)
    );

    fact(
      facts,
      t("creditGap"),
      inspection.approved
        ? money(
            inspection.creditOutstanding
          )
        : "—"
    );

    fact(
      facts,
      t("allocationGap"),
      money(
        inspection.allocationOutstanding
      )
    );

    host.append(
      facts,
      node(
        "p",
        t("noClaim"),
        "cl-inspection-muted"
      )
    );
  }

  function refreshTransaction(id) {
    activeId = id;

    currentDatasets =
      loadScenario(selectedScenario);

    setText(
      "invoice-count",
      currentDatasets.invoices.length
    );

    setText(
      "return-count",
      currentDatasets.returns.length
    );

    setText(
      "credit-count",
      currentDatasets.credits.length
    );

    calculateDemoAutomatically();
    drawTable();

    const result = currentResults.find(
      entry => entry.invoiceId === id
    );

    if (result) {
      selectCase(result);
    }

    renderPage();
  }

  function renderJourney(item) {
    if (!guidedIds.has(item.id)) {
      return null;
    }

    const box = node(
      "section",
      undefined,
      "cl-inspection-notice cl-inspection-journey"
    );

    const progress = journey(item.id);
    const stage = progress.stage;

    box.append(
      node("h4", t("guidedTitle")),
      node("p", t("guidedIntro"))
    );

    const steps = node("ol");

    stageKeys.forEach((key, index) => {
      const entry = node("li", t(key));

      if (index === stage) {
        entry.setAttribute(
          "aria-current",
          "step"
        );
      }

      if (index < stage) {
        entry.style.fontWeight = "600";
      }

      steps.append(entry);
    });

    box.append(steps);

    const errorMessage = node("p");

    errorMessage.setAttribute(
      "aria-live",
      "polite"
    );

    const locked =
      damagedStore ||
      Boolean(activeFinal(item.id)) ||
      Boolean(current(item).changed);

    if (stage < 4) {
      const nextKeys = [
        "prepareClaim",
        "simulateApproval",
        "importCredits",
        "simulateSettlement"
      ];

      const advance = button(
        t(nextKeys[stage]),
        () => {
          if (
            damagedStore ||
            activeFinal(item.id) ||
            current(item).changed ||
            journey(item.id).stage !== stage
          ) {
            return;
          }

          const next = clone(store);

          next.journeys[item.id] = {
            stage: stage + 1,

            events: [
              ...journey(item.id).events,
              {
                stage: stage + 1,
                at: new Date().toISOString()
              }
            ]
          };

          try {
            save(next);
            refreshTransaction(item.id);
          } catch (error) {
            feedback(
              errorMessage,
              true
            );
          }
        }
      );

      advance.disabled = locked;
      box.append(advance);
    } else {
      box.append(
        button(
          t("goClosure"),
          () => {
            const result =
              currentResults.find(
                entry =>
                  entry.invoiceId === item.id
              );

            if (result) {
              selectCase(result);
              showDemoView("closure");
            }
          }
        )
      );
    }

    const reset = button(
      t("restartJourney"),
      () => {
        if (damagedStore) {
          return;
        }

        if (activeFinal(item.id)) {
          alert(t("resetLocked"));
          return;
        }

        if (!confirm(t("restartConfirm"))) {
          return;
        }

        const next = clone(store);

        next.journeys[item.id] = {
          stage: 0,

          events: [
            ...journey(item.id).events,
            {
              stage: 0,
              at: new Date().toISOString()
            }
          ]
        };

        try {
          save(next);
          refreshTransaction(item.id);
        } catch (error) {
          feedback(
            errorMessage,
            true
          );
        }
      }
    );

    reset.disabled =
      damagedStore ||
      Boolean(activeFinal(item.id));

    box.append(
      reset,
      errorMessage
    );

    return box;
  }

  function renderPage() {
    const companies = {
      industrial: "Alpine Parts AG",
      flowers: "Flora Ticino SA"
    };

    page.replaceChildren(
      node("h2", t("inspection")),
      node("p", t("intro")),
      node(
        "p",
        t("asOf") + ": " + D.asOf,
        "cl-inspection-muted"
      )
    );

    const controls = node(
      "div",
      undefined,
      "cl-inspection-controls"
    );

    const company =
      document.createElement("select");

    company.setAttribute(
      "aria-label",
      t("company")
    );

    for (
      const [key, name] of
      Object.entries(companies)
    ) {
      const option = node(
        "option",
        name
      );

      option.value = key;
      company.append(option);
    }

    company.value = selectedScenario;

    company.addEventListener(
      "change",
      () => {
        selectScenario(company.value);
        calculateDemoAutomatically();

        activeId = D.items.find(
          item =>
            item.company === company.value
        ).id;

        renderPage();
      }
    );

    const search =
      document.createElement("input");

    search.type = "search";
    search.placeholder = t("search");

    search.setAttribute(
      "aria-label",
      t("search")
    );

    search.value = query;

    const filter =
      document.createElement("select");

    filter.setAttribute(
      "aria-label",
      t("all")
    );

    for (
      const key of [
        "all",
        "shortage",
        "damage",
        "price",
        "partial",
        "match"
      ]
    ) {
      const option = node(
        "option",
        t(key)
      );

      option.value = key;
      filter.append(option);
    }

    filter.value = kind;

    const body = node(
      "div",
      undefined,
      "cl-inspection-grid"
    );

    const list = node(
      "div",
      undefined,
      "cl-inspection-list"
    );

    const detail = node(
      "div",
      undefined,
      "cl-inspection-detail"
    );

    const message = node("p");

    message.setAttribute(
      "aria-live",
      "polite"
    );

    function renderList() {
      const visible = D.items.filter(item => {
        const matchesCompany =
          item.company === selectedScenario;

        const matchesKind =
          kind === "all" ||
          item.kind === kind;

        const searchText = [
          item.id,
          item.orderId,
          item.supplier,
          item.article
        ].join(" ").toLocaleLowerCase();

        return (
          matchesCompany &&
          matchesKind &&
          searchText.includes(
            query.toLocaleLowerCase()
          )
        );
      });

      list.replaceChildren();

      if (!visible.length) {
        list.append(
          node("p", t("noResults"))
        );

        detail.replaceChildren();
        return;
      }

      if (
        !visible.some(
          item => item.id === activeId
        )
      ) {
        activeId = visible[0].id;
      }

      for (const item of visible) {
        const inspection = current(item);

        const entry = button(
          item.id +
            " · " +
            item.supplier +
            "\n" +
            kindLabel(inspection.key),

          () => {
            activeId = item.id;
            renderList();
          },

          "cl-inspection-item"
        );

        if (item.id === activeId) {
          entry.setAttribute(
            "aria-current",
            "true"
          );
        }

        list.append(entry);
      }

      renderEditor(
        detail,
        itemById(activeId),
        message
      );
    }

    search.addEventListener(
      "input",
      () => {
        query = search.value;
        renderList();
      }
    );

    filter.addEventListener(
      "change",
      () => {
        kind = filter.value;
        renderList();
      }
    );

    controls.append(
      company,
      search,
      filter
    );

    body.append(
      list,
      detail
    );

    page.append(
      controls,
      message,
      body
    );

    if (damagedStore) {
      page.prepend(
        node(
          "p",
          t("corrupt"),
          "cl-inspection-notice"
        )
      );
    }

    renderList();
  }

  function renderEditor(
    host,
    item,
    message
  ) {
    const inspection = current(item);

    const values = inspection.valid
      ? inspection.values
      : item;

    host.replaceChildren(
      node(
        "h3",
        item.id + " · " + item.article
      ),
      node(
        "p",
        item.supplier +
          " · " +
          item.orderId
      ),
      node(
        "strong",
        kindLabel(inspection.key)
      )
    );

    const form =
      document.createElement("form");

    form.className =
      "cl-inspection-form";

    const inputs = {};

    function input(
      key,
      value,
      receiptIndex = null
    ) {
      const label = node(
        "label",
        t(
          receiptIndex === null
            ? key
            : "receipt"
        ) +
          (
            receiptIndex === null
              ? ""
              : " · " +
                item.receiptIds[receiptIndex]
          )
      );

      const field =
        document.createElement("input");

      field.type = "number";
      field.min = "0";

      field.step = key.includes("Price")
        ? "0.01"
        : "1";

      field.required = true;

      field.value = key.includes("Price")
        ? (value / 100).toFixed(2)
        : value;

      field.disabled =
        damagedStore ||
        Boolean(activeFinal(item.id));

      label.append(field);
      form.append(label);

      const inputKey =
        receiptIndex === null
          ? key
          : "receipt" + receiptIndex;

      inputs[inputKey] = field;
    }

    input(
      "ordered",
      values.ordered
    );

    values.received.forEach(
      (quantity, index) => {
        input(
          "received",
          quantity,
          index
        );
      }
    );

    input(
      "damaged",
      values.damaged
    );

    input(
      "invoiced",
      values.invoiced
    );

    input(
      "unitPrice",
      values.unitPrice
    );

    input(
      "invoiceUnitPrice",
      values.invoiceUnitPrice
    );

    host.append(
      node(
        "p",
        t("unit") +
          ": " +
          unitLabel(item.unit)
      ),
      form
    );

    if (item.kind === "partial") {
      host.append(
        node(
          "p",
          t("due") + ": " + item.due
        )
      );
    }

    const run = node(
      "button",
      t("run"),
      "document-viewer-button"
    );

    run.type = "submit";

    run.disabled =
      damagedStore ||
      Boolean(activeFinal(item.id));

    form.append(run);

    form.addEventListener(
      "submit",
      event => {
        event.preventDefault();

        if (!form.reportValidity()) {
          return;
        }

        if (activeFinal(item.id)) {
          alert(t("resetLocked"));
          return;
        }

        const variant = {
          received: []
        };

        for (
          const key of [
            "ordered",
            "damaged",
            "invoiced",
            "unitPrice",
            "invoiceUnitPrice"
          ]
        ) {
          const raw =
            inputs[key].value;

          variant[key] = raw === ""
            ? NaN
            : key.includes("Price")
              ? Math.round(
                  Number(raw) * 100
                )
              : Number(raw);
        }

        item.received.forEach(
          (_, index) => {
            const raw =
              inputs[
                "receipt" + index
              ].value;

            variant.received.push(
              raw === ""
                ? NaN
                : Number(raw)
            );
          }
        );

        const check = E.inspect(
          item,
          variant
        );

        if (!check.valid) {
          message.textContent =
            t(check.key);

          message.setAttribute(
            "role",
            "alert"
          );

          return;
        }

        const next = clone(store);

        if (check.changed) {
          next.variants[item.id] =
            variant;
        } else {
          delete next.variants[item.id];
        }

        try {
          save(next);
          calculateDemoAutomatically();
          renderPage();

          page.querySelector(
            "[aria-live]"
          ).textContent = t("checked");
        } catch (error) {
          feedback(
            message,
            true
          );
        }
      }
    );

    const reset = button(
      t("reset"),
      () => {
        if (activeFinal(item.id)) {
          alert(t("resetLocked"));
          return;
        }

        const next = clone(store);

        delete next.variants[item.id];

        try {
          save(next);
          calculateDemoAutomatically();
          renderPage();
        } catch (error) {
          feedback(
            message,
            true
          );
        }
      }
    );

    reset.disabled = damagedStore;

    host.append(reset);

    renderFacts(
      host,
      item,
      inspection
    );

    const guide = renderJourney(item);

    if (guide) {
      host.append(guide);
    }

    host.append(
      node("h4", t("next")),
      node(
        "p",
        nextText(item, inspection)
      ),
      button(
        t("documents"),
        () => openDocuments(item.id)
      )
    );

    if (
      isPotentialIssue(
        resultFor(item)
      )
    ) {
      host.append(
        button(
          t("openCase"),
          () => {
            const result =
              currentResults.find(
                entry =>
                  entry.invoiceId === item.id
              );

            if (result) {
              selectCase(result);
              showDemoView("cases");
            }
          }
        )
      );
    }
  }

  let documentDialog = null;
  let documentContext = null;

  function openDocuments(
    id,
    category = "all",
    filename = null
  ) {
    const source = itemById(id);

    if (!source) {
      return;
    }

    const item = effectiveItem(source);

    documentContext = {
      id,
      category,
      filename
    };

    if (!documentDialog) {
      documentDialog = node(
        "dialog",
        undefined,
        "cl-inspection-document-dialog"
      );

      document.body.append(
        documentDialog
      );
    }

    documentDialog.replaceChildren();

    documentDialog.setAttribute(
      "aria-label",
      t("documents") + " · " + id
    );

    const header =
      node("header");

    header.append(
      node(
        "h3",
        t("documents") + " · " + id
      ),
      button(
        t("close"),
        () => documentDialog.close()
      )
    );

    const links = node(
      "div",
      undefined,
      "cl-inspection-doc-links"
    );

    const frame =
      document.createElement("iframe");

    frame.title =
      t("documents") + " · " + id;

    const external = node(
      "a",
      t("openPdf")
    );

    external.target = "_blank";
    external.rel = "noopener";

    let selected =
      item.documents.find(
        doc => doc.filename === filename
      ) ||
      item.documents.find(
        doc => doc.type === category
      ) ||
      item.documents[0];

    function show(doc) {
      selected = doc;

      documentContext.filename =
        doc.filename;

      const path =
        "documents/" +
        encodeURIComponent(doc.filename);

      frame.src = path;
      external.href = path;

      links.querySelectorAll(
        "button"
      ).forEach(entry => {
        entry.setAttribute(
          "aria-pressed",
          String(
            entry.dataset.filename ===
              doc.filename
          )
        );
      });
    }

    for (
      const doc of item.documents
    ) {
      const entry = button(
        doc.id +
          " · " +
          docType(doc.type),

        () => show(doc),

        "cl-inspection-doc-link"
      );

      entry.dataset.filename =
        doc.filename;

      links.append(entry);
    }

    documentDialog.append(
      header,
      node("p", t("baseline")),
      links,
      external,
      frame
    );

    show(selected);

    if (!documentDialog.open) {
      documentDialog.showModal();
    }
  }

  window.CreditloopDocuments =
    window.CreditloopDocuments || {};

  window.CreditloopDocuments.open =
    openDocuments;

  function makeClosure(item) {
    const box = node(
      "section",
      undefined,
      "cl-inspection-closure"
    );

    box.setAttribute(
      "data-closure-raw",
      ""
    );

    box.append(
      node(
        "h3",
        t("closure") + " · " + item.id
      ),
      node(
        "p",
        t("simulation"),
        "cl-inspection-notice"
      )
    );

    const inspection = current(item);

    renderFacts(
      box,
      item,
      inspection
    );

    const guide = renderJourney(item);

    if (guide) {
      box.append(guide);
    }

    const active =
      activeFinal(item.id);

    const message = node("p");

    message.setAttribute(
      "aria-live",
      "polite"
    );

    if (damagedStore) {
      box.append(
        node("p", t("corrupt"))
      );

      return box;
    }

    if (active) {
      box.append(
        node("strong", t("closed")),
        node("p", active.at),
        node("p", active.reason),

        button(reportViewLabel("view"), () => previewSavedReport(item.id, active)),
        button(
          t("finalPdf"),
          () => {
            downloadReport(
              item.id,
              active
            ).catch(
              error =>
                alert(error.message)
            );
          }
        ),

        button(
          t("reopen"),
          () => {
            const reason = prompt(
              t("reopenReason")
            );

            if (reason === null) {
              return;
            }

            if (
              reason.trim().length < 10 ||
              reason.trim().length > 1000
            ) {
              alert(t("reason"));
              return;
            }

            const next =
              clone(store);

            next.reopenings.push({
              invoiceId: item.id,
              version: active.version,
              reason: reason.trim(),
              at: new Date().toISOString()
            });

            try {
              save(next);
              refreshCaseStatusLabels();

              showCaseDetails(
                resultFor(item)
              );

              renderPage();
            } catch (error) {
              feedback(
                message,
                true
              );
            }
          }
        )
      );
    } else {
      const form =
        document.createElement("form");

      const review = node(
        "label",
        t("reviewEvidence")
      );

      const reviewed =
        document.createElement("input");

      reviewed.type = "checkbox";
      reviewed.required = true;
      review.prepend(reviewed);

      const acknowledgement = node(
        "label",
        t("acknowledge")
      );

      const acknowledged =
        document.createElement("input");

      acknowledged.type = "checkbox";
      acknowledged.required = true;

      acknowledgement.prepend(
        acknowledged
      );

      const label = node(
        "label",
        t("reason")
      );

      const reason =
        document.createElement("textarea");

      reason.minLength = 10;
      reason.maxLength = 1000;
      reason.required = true;

      label.append(reason);

      const submit = node(
        "button",
        t("finalise"),
        "document-viewer-button"
      );

      submit.type = "submit";

      function enable() {
        submit.disabled = !(
          inspection.demoClosable &&
          reviewed.checked &&
          acknowledged.checked &&
          reason.value.trim().length >= 10
        );
      }

      form.addEventListener(
        "input",
        enable
      );

      enable();

      form.append(
        review,
        acknowledgement,
        label,
        submit
      );

      form.addEventListener(
        "submit",
        event => {
          event.preventDefault();

          if (
            !form.reportValidity() ||
            !current(item).demoClosable ||
            activeFinal(item.id) ||
            !reviewed.checked ||
            !acknowledged.checked ||
            reason.value.trim().length < 10
          ) {
            return;
          }

          const next = clone(store);

          const history =
            next.finals[item.id] || [];

          const snapshot = {
            invoiceId: item.id,
            version: history.length + 1,
            at: new Date().toISOString(),
            reason: reason.value.trim(),
            language: lang(),

            item: clone(
              effectiveItem(item)
            ),

            inspection: clone(
              current(item)
            ),

            workflow: clone(
              getCaseWorkflow(
                resultFor(item)
              )
            ),

            journey: clone(
              journey(item.id)
            )
          };

          next.finals[item.id] = [
            ...history,
            snapshot
          ];

          try {
            save(next);
            refreshCaseStatusLabels();

            showCaseDetails(
              resultFor(item)
            );

            renderPage();
          } catch (error) {
            feedback(
              message,
              true
            );
          }
        }
      );

      box.append(
        button(
          t("documents"),
          () => openDocuments(item.id)
        ),
        node(
          "p",
          t(
            inspection.demoClosable
              ? "nextComplete"
              : "blocked"
          )
        ),
        form
      );
    }

    box.append(message);

    
    const saved = store.finals[item.id] || [];

    if (saved.length) {
      box.append(node("h4", t("savedVersions")));

      for (const snapshot of saved) {
        const row = node("div");

        row.append(
          node(
            "p",
            "#" + snapshot.version + " · " + snapshot.at
          ),
          button(
            reportViewLabel("view"),
            () => previewSavedReport(item.id, snapshot)
          ),
          button(
            t("finalPdf"),
            () => downloadReport(item.id, snapshot)
              .catch(error => alert(error.message))
          )
        );

        box.append(row);
      }
    }


    return box;
  }

  
  function reportViewLabel(key) {
    const labels = {
      de: {
        view: "Fallakte ansehen",
        close: "Schließen",
        loading: "PDF-Vorschau wird erstellt …",
        failed: "PDF-Vorschau konnte nicht erstellt werden."
      },
      en: {
        view: "View case file",
        close: "Close",
        loading: "Creating PDF preview …",
        failed: "Could not create PDF preview."
      },
      it: {
        view: "Visualizzare il fascicolo",
        close: "Chiudi",
        loading: "Creazione dell’anteprima PDF …",
        failed: "Impossibile creare l’anteprima PDF."
      },
      fr: {
        view: "Consulter le dossier",
        close: "Fermer",
        loading: "Création de l’aperçu PDF …",
        failed: "Impossible de créer l’aperçu PDF."
      }
    };

    const language = document.documentElement.lang
      .toLowerCase()
      .split("-")[0];

    return (labels[language] || labels.de)[key];
  }

  async function previewSavedReport(id, snapshot) {
    const dialog = document.createElement("dialog");
    dialog.className = "cl-inspection-document-dialog";
    dialog.setAttribute(
      "aria-label",
      reportViewLabel("view") + " · " + id
    );

    const header = document.createElement("header");
    const heading = document.createElement("h3");

    heading.textContent =
      reportViewLabel("view") +
      " · " + id +
      " · #" + snapshot.version;

    const close = document.createElement("button");
    close.type = "button";
    close.textContent = reportViewLabel("close");

    close.addEventListener("click", () => {
      dialog.close();
    });

    const message = document.createElement("p");
    message.setAttribute("role", "status");
    message.textContent = reportViewLabel("loading");

    header.append(heading, close);
    dialog.append(header, message);

    let objectUrl = null;

    dialog.addEventListener("close", () => {
      if (objectUrl) {
        URL.revokeObjectURL(objectUrl);
      }

      dialog.remove();
    }, { once: true });

    document.body.append(dialog);
    dialog.showModal();

    try {
      const blob = await downloadReport(
        id,
        snapshot,
        true
      );

      if (!dialog.open || !dialog.isConnected) {
        return;
      }

      objectUrl = URL.createObjectURL(blob);

      const frame = document.createElement("iframe");
      frame.title = heading.textContent;
      frame.src = objectUrl;

      message.remove();
      dialog.append(frame);
    } catch (error) {
      if (dialog.isConnected) {
        message.textContent =
          reportViewLabel("failed") +
          " " + error.message;

        message.setAttribute("role", "alert");
      }
    }
  }

  async function downloadReport(id, snapshot = null, previewOnly = false) {
    const source = itemById(id);

    const item = snapshot
      ? snapshot.item
      : source
        ? effectiveItem(source)
        : null;

    if (!item || !window.PDFLib) {
      throw new Error(
        "Die PDF-Bibliothek ist nicht verfügbar."
      );
    }

    const inspection = snapshot
      ? snapshot.inspection
      : current(item);

    const language = snapshot
      ? snapshot.language
      : lang();

    const tr = key =>
      t(key, language);

    const workflow = snapshot
      ? snapshot.workflow
      : clone(
          getCaseWorkflow(
            resultFor(item)
          )
        );

    const {
      PDFDocument,
      rgb
    } = window.PDFLib;

    const pdf =
      await PDFDocument.create();

    if (!window.fontkit) {
      throw new Error(
        "Die PDF-Schriftbibliothek ist nicht verfügbar."
      );
    }

    pdf.registerFontkit(
      window.fontkit
    );

    async function loadFont(path) {
      const response =
        await fetch(path);

      if (!response.ok) {
        throw new Error(
          "PDF-Schrift nicht erreichbar: " +
            path
        );
      }

      const bytes =
        new Uint8Array(
          await response.arrayBuffer()
        );

      return pdf.embedFont(
        bytes,
        { subset: true }
      );
    }

    const regular = await loadFont(
      "vendor/DejaVuSans.ttf"
    );

    const bold = await loadFont(
      "vendor/DejaVuSans-Bold.ttf"
    );

    const printable = value =>
      String(value ?? "");

    let page;
    let y;

    function addPage() {
      page = pdf.addPage([
        595.28,
        841.89
      ]);

      y = 790;
    }

    addPage();

    function write(
      value,
      size = 10,
      isBold = false
    ) {
      const font = isBold
        ? bold
        : regular;

      const paragraphs =
        printable(value).split("\n");

      for (
        const paragraph of paragraphs
      ) {
        const words =
          paragraph.split(/\s+/);

        let line = "";

        function flush() {
          if (y < 65) {
            addPage();
          }

          page.drawText(line, {
            x: 46,
            y,
            size,
            font,
            color: rgb(
              0.16,
              0.23,
              0.29
            )
          });

          y -= size + 6;
          line = "";
        }

        for (const word of words) {
          const next = line
            ? line + " " + word
            : word;

          if (
            font.widthOfTextAtSize(
              next,
              size
            ) > 500 &&
            line
          ) {
            flush();
          }

          if (
            font.widthOfTextAtSize(
              word,
              size
            ) > 500
          ) {
            for (
              const character of word
            ) {
              if (
                font.widthOfTextAtSize(
                  line + character,
                  size
                ) > 500
              ) {
                flush();
              }

              line += character;
            }
          } else {
            line = line
              ? line + " " + word
              : word;
          }
        }

        flush();
      }
    }

    function valueMoney(value) {
      return Number.isSafeInteger(value)
        ? "CHF " +
          (value / 100).toFixed(2)
        : "—";
    }

    write(
      "ClaraSR",
      20,
      true
    );

    write(
      tr(
        snapshot
          ? "finalTitle"
          : "preliminaryTitle"
      ),
      14,
      true
    );

    write(
      tr("simulation"),
      9
    );

    y -= 10;

    write(
      item.id +
        " | " +
        item.supplier,
      12,
      true
    );

    write(window.ClaraSRArticleName(item, language) +
        " | " +
        item.sku +
        " | " +
        item.orderId
    );

    write(
      tr("asOf") +
        ": " +
        item.asOf
    );

    const values =
      inspection.valid
        ? inspection.values
        : item;

    write(
      tr("ordered") +
        ": " +
        values.ordered +
        " | " +
        tr("received") +
        ": " +
        values.received.join(" + ")
    );

    write(
      tr("damaged") +
        ": " +
        values.damaged +
        " | " +
        tr("invoiced") +
        ": " +
        values.invoiced
    );

    write(
      tr("unitPrice") +
        ": " +
        valueMoney(
          values.unitPrice
        )
    );

    write(
      tr("invoiceUnitPrice") +
        ": " +
        valueMoney(
          values.invoiceUnitPrice
        )
    );

    write(
      tr(inspection.key),
      11,
      true
    );

    if (inspection.changed) {
      write(tr("variant"));
    }

    if (inspection.valid) {
      write(
        tr("originalExposure") +
          ": " +
          valueMoney(
            inspection.exposure
          )
      );

      write(
        tr("approved") +
          ": " +
          valueMoney(
            inspection.approved
          )
      );

      write(
        tr("issued") +
          ": " +
          valueMoney(
            inspection.issued
          )
      );

      write(
        tr("allocated") +
          ": " +
          valueMoney(
            inspection.allocated
          )
      );

      write(
        tr("creditGap") +
          ": " +
          valueMoney(
            inspection.creditOutstanding
          )
      );

      write(
        tr("allocationGap") +
          ": " +
          valueMoney(
            inspection.allocationOutstanding
          )
      );
    }

    if (snapshot) {
      write(
        tr("closed"),
        12,
        true
      );

      write(
        snapshot.at +
          " | Version " +
          snapshot.version
      );

      write(snapshot.reason);
    }

    write(
      tr("history"),
      12,
      true
    );

    const progress = snapshot
      ? snapshot.journey
      : journey(item.id);

    for (
      const event of
      progress?.events || []
    ) {
      write(
        event.at +
          " | " +
          tr(
            stageKeys[event.stage]
          )
      );
    }

    for (
      const event of
      workflow.history || []
    ) {
      write(
        String(event.at || "") +
          " | " +
          String(event.status || "")
      );

      if (event.note) {
        write(event.note);
      }
    }

    write(
      tr("evidence"),
      12,
      true
    );

    for (
      const doc of item.documents
    ) {
      write(
        doc.id +
          " | " +
          tr(
            doc.type === "damage"
              ? "damageDocument"
              : doc.type
          )
      );
    }

    // Nur die zum jeweiligen Stand gehörenden
    // Original-Musterbelege werden angehängt.
    // Fehlt eine Anlage, wird die Erstellung abgebrochen.
    for (
      const doc of item.documents
    ) {
      const response = await fetch(
        "documents/" +
          encodeURIComponent(
            doc.filename
          )
      );

      if (!response.ok) {
        throw new Error(
          "PDF nicht erreichbar: " +
            doc.filename
        );
      }

      const bytes =
        new Uint8Array(
          await response.arrayBuffer()
        );

      const original =
        await PDFDocument.load(bytes);

      const copiedPages =
        await pdf.copyPages(
          original,
          original.getPageIndices()
        );

      copiedPages.forEach(
        copiedPage => {
          pdf.addPage(copiedPage);
        }
      );
    }

    const bytes = await pdf.save();

    const blob = new Blob(
      [bytes],
      { type: "application/pdf" }
    );

    if (previewOnly) return blob;
    const url =
      URL.createObjectURL(blob);

    const link = node("a");

    link.href = url;

    link.download =
      "ClaraSR_" +
      id +
      (
        snapshot
          ? "_DEMO_FINAL_v" +
            snapshot.version
          : "_VORLAEUFIG"
      ) +
      ".pdf";

    document.body.append(link);
    link.click();
    link.remove();

    setTimeout(
      () => URL.revokeObjectURL(url),
      60000
    );
  }

  function updateLabels() {
    inspectionLink.textContent =
      t("inspection");

    document.querySelectorAll(
      "[data-inspection-text]"
    ).forEach(element => {
      const value = t(
        element.dataset.inspectionText
      );

      if (
        !element.children.length
      ) {
        if (
          element.textContent !== value
        ) {
          element.textContent = value;
        }
      } else {
        // Eingabefelder innerhalb eines Labels erhalten.
        const textNode = [
          ...element.childNodes
        ].find(
          child =>
            child.nodeType === 3
        );

        if (
          textNode &&
          textNode.nodeValue !== value
        ) {
          textNode.nodeValue = value;
        }
      }
    });

    const replacements = [
      [
        ".intro-text",
        "overviewIntro"
      ],
      [
        "#workspace-title",
        "recordsTitle"
      ],
      [
        ".workspace-heading p",
        "overviewIntro"
      ],
      [
        ".data-heading p",
        "intro"
      ],
      [
        ".run-area p",
        "intro"
      ],
      [
        '[data-demo-view="reconcile"] .data-footnote',
        "simulation"
      ],
      [
        ".summary-card:nth-child(1) > span",
        "exposureSummary"
      ],
      [
        ".summary-card:nth-child(1) > small",
        "summaryHint"
      ],
      [
        ".summary-card:nth-child(2) > span",
        "testCount"
      ],
      [
        '[data-demo-view="closure"] .results-heading p',
        "simulation"
      ],
      [
        '[data-demo-view="cases"] .results-disclaimer',
        "noClaim"
      ]
    ];

    for (
      const [selector, key] of
      replacements
    ) {
      document.querySelectorAll(
        selector
      ).forEach(element => {
        const value = t(key);

        if (
          element.textContent !== value
        ) {
          element.textContent = value;
        }
      });
    }

    document.querySelectorAll(
      '[data-view="reconcile"]'
    ).forEach(element => {
      element.textContent =
        t("recordsTitle");
    });

    const guide = {
      eyebrow: "inspection",
      title: "overviewTitle",
      intro: "overviewIntro",

      step1Title: "inspection",
      step1Text: "intro",

      step2Title: "openCase",
      step2Text: "nextIssue",

      step3Title: "credit",
      step3Text: "nextCredit",

      step4Title: "closure",
      step4Text: "nextComplete",

      exampleTitle: "lifecycle",
      exampleText: "overviewExample",
      exampleAction: "overviewSteps",

      importantText: "noClaim",
      noteText: "simulation",
      startButton: "inspection"
    };

    for (
      const [key, translationKey] of
      Object.entries(guide)
    ) {
      document.querySelectorAll(
        '[data-guide-text="' +
          key +
          '"]'
      ).forEach(element => {
        const value =
          t(translationKey);

        if (
          element.textContent !== value
        ) {
          element.textContent = value;
        }
      });
    }

    const returnTab =
      document.querySelector(
        '[data-tab="returns"]'
      );

    if (returnTab) {
      for (
        const child of
        returnTab.childNodes
      ) {
        if (
          child.nodeType === 3 &&
          child.nodeValue.trim()
        ) {
          child.nodeValue =
            " " +
            t("decision") +
            " ";
        }
      }
    }

    if (
      selectedTab === "returns"
    ) {
      const heading =
        tableHead.querySelector("th");

      if (heading) {
        heading.textContent =
          t("decision");
      }
    }

    const numberedLabel =
      document.querySelector(
        '[data-demo-view="reconcile"] .run-area .section-label'
      );

    if (numberedLabel) {
      numberedLabel.hidden = true;
    }
  }

  const originalDrawTable =
    drawTable;

  drawTable = function () {
    originalDrawTable();
    updateLabels();
  };

  document.querySelectorAll(
    "[data-guide-start]"
  ).forEach(link => {
    link.addEventListener(
      "click",
      event => {
        event.preventDefault();
        event.stopImmediatePropagation();

        showDemoView(
          "inspection"
        );
      },
      { capture: true }
    );
  });

  const oldView =
    showDemoView;

  showDemoView = function (view) {
    if (
      view === "inspection"
    ) {
      renderPage();
    }

    oldView(view);
  };

  function refreshLanguage() {
    if (renderPending) {
      return;
    }

    renderPending = true;

    requestAnimationFrame(() => {
      renderPending = false;

      updateLabels();
      renderPage();

      const result =
        currentResults.find(
          entry =>
            entry.invoiceId ===
              selectedCaseId
        );

      if (result) {
        const host =
          document.querySelector(
            "#closure-content .cl-closure-host"
          );

        if (host) {
          const text =
            host.querySelector(
              "textarea"
            )?.value || "";

          const checks = [
            ...host.querySelectorAll(
              'input[type="checkbox"]'
            )
          ].map(
            checkbox =>
              checkbox.checked
          );

          host.replaceChildren(
            makeClosure(
              result.upstream
            )
          );

          const textarea =
            host.querySelector(
              "textarea"
            );

          if (textarea) {
            textarea.value = text;
          }

          host.querySelectorAll(
            'input[type="checkbox"]'
          ).forEach(
            (checkbox, index) => {
              checkbox.checked =
                checks[index] || false;
            }
          );

          host.querySelector(
            "form"
          )?.dispatchEvent(
            new Event("input", {
              bubbles: true
            })
          );
        }
      }

      if (
        documentDialog?.open &&
        documentContext
      ) {
        openDocuments(
          documentContext.id,
          documentContext.category,
          documentContext.filename
        );
      }
    });
  }

  new MutationObserver(
    refreshLanguage
  ).observe(
    document.documentElement,
    {
      attributes: true,
      attributeFilter: ["lang"]
    }
  );

  // Filter enthalten nur die neuen Demo-Lieferanten.
  document.querySelectorAll(
    "[data-supplier-select]"
  ).forEach(select => {
    select.replaceChildren();

    const all = node(
      "option",
      t("all")
    );

    all.value = "all";
    select.append(all);

    const suppliers = [
      ...new Set(
        D.items.map(
          item => item.supplier
        )
      )
    ].sort();

    suppliers.forEach(name => {
      const option = node(
        "option",
        name
      );

      option.value = name;
      select.append(option);
    });
  });

  selectScenario(
    "industrial"
  );

  calculateDemoAutomatically();
  renderPage();
  updateLabels();

  
  /* ClaraSR: Oberflächenkorrektur v3 */

  const previousOverviewLabels = updateLabels;

  updateLabels = function () {
    previousOverviewLabels();

    document.querySelectorAll(
      '[data-guide-text="step2Title"]'
    ).forEach(element => {
      const clean = element.textContent
        .replace(/\s*[→↗]\s*$/, "");

      if (element.textContent !== clean) {
        element.textContent = clean;
      }
    });
  };

  updateLabels();

  const settlementNavigation = document.querySelector(
    '.demo-nav-link[data-view="settlement"]'
  );

  const closureNavigation = document.querySelector(
    '.demo-nav-link[data-view="closure"]'
  );

  if (
    settlementNavigation &&
    closureNavigation &&
    settlementNavigation.parentElement ===
      closureNavigation.parentElement
  ) {
    closureNavigation.before(settlementNavigation);
  }

  
  /* ClaraSR: Neue Prüfungen v1 */

  if (!window.ClaraSREntry) {
    throw Error("inspection-entry.js fehlt");
  }

  const previousDocumentView = openDocuments;

  openDocuments = function (
    id,
    category = "all",
    filename = null
  ) {
    const item = itemById(id);

    if (item && item.custom) {
      return window.ClaraSREntry.noDocuments(item);
    }

    return previousDocumentView(id, category, filename);
  };

  window.CreditloopDocuments.open = openDocuments;

  renderPage = window.ClaraSREntry.mount({
    page,
    company: () => selectedScenario,
    changeCompany: key => selectScenario(key),

    calculate: () => {
      selectScenario(selectedScenario);
      calculateDemoAutomatically();
    },

    locked: () => damagedStore,
    current,
    editor: renderEditor
  });

  renderPage();

  window.ClaraSRDemo = {
    inspect: E.inspect,
    openDocuments,
    downloadReport,

    getSnapshot: id =>
      clone(activeFinal(id)),

    data: D
  };
})();