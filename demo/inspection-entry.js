"use strict";

(() => {
  const base = window.ClaraSRData;
  const engine = window.ClaraSRInspection;
  const text = window.ClaraSRText;
  const storageKey = "clarasr-manual-checks-v1";

  const words = {
    suppliers: [
      "Alle Lieferanten",
      "All suppliers",
      "Tutti i fornitori",
      "Tous les fournisseurs"
    ],
    supplier: [
      "Lieferant",
      "Supplier",
      "Fornitore",
      "Fournisseur"
    ],
    company: [
      "Demo-Unternehmen wechseln",
      "Switch demo company",
      "Cambiare azienda demo",
      "Changer d’entreprise de démonstration"
    ],
    add: [
      "+ Neue Prüfung",
      "+ New review",
      "+ Nuova verifica",
      "+ Nouvelle vérification"
    ],
    title: [
      "Neue Liefer- und Rechnungsprüfung",
      "New delivery and invoice review",
      "Nuova verifica di consegna e fattura",
      "Nouvelle vérification de livraison et facture"
    ],
    notice: [
      "Erfassen Sie ausschließlich fiktive Testdaten. Die Prüfung wird lokal in diesem Browser gespeichert. Es werden keine Dateien hochgeladen und keine Lieferanten kontaktiert.",
      "Enter fictional test data only. The review is saved locally in this browser. No files are uploaded and no suppliers are contacted.",
      "Inserisca solo dati di test fittizi. La verifica viene salvata localmente in questo browser. Non vengono caricati file né contattati fornitori.",
      "Saisissez uniquement des données de test fictives. La vérification est enregistrée localement dans ce navigateur. Aucun fichier n’est téléversé et aucun fournisseur n’est contacté."
    ],
    article: [
      "Artikelbezeichnung",
      "Item description",
      "Descrizione dell’articolo",
      "Description de l’article"
    ],
    reference: [
      "Rechnungsreferenz",
      "Invoice reference",
      "Riferimento fattura",
      "Référence de facture"
    ],
    order: [
      "Bestellreferenz",
      "Order reference",
      "Riferimento ordine",
      "Référence de commande"
    ],
    schedule: [
      "Restlieferung ist ausdrücklich angekündigt",
      "Remaining delivery is explicitly scheduled",
      "La consegna residua è espressamente annunciata",
      "Le solde de livraison est expressément annoncé"
    ],
    due: [
      "Angekündigter Liefertermin",
      "Scheduled delivery date",
      "Data di consegna annunciata",
      "Date de livraison annoncée"
    ],
    save: [
      "Prüfung anlegen und berechnen",
      "Create and calculate review",
      "Creare e calcolare la verifica",
      "Créer et calculer la vérification"
    ],
    cancel: [
      "Abbrechen",
      "Cancel",
      "Annulla",
      "Annuler"
    ],
    invalid: [
      "Bitte Eingaben prüfen. Mengen müssen ganzzahlig und Preise positiv sein. Referenzen müssen eindeutig sein; Semikolons und Zeilenumbrüche sind nicht erlaubt.",
      "Check the entries. Quantities must be whole numbers and prices positive. References must be unique; semicolons and line breaks are not allowed.",
      "Verifichi i dati. Le quantità devono essere intere e i prezzi positivi. I riferimenti devono essere univoci; punti e virgola e interruzioni di riga non sono ammessi.",
      "Vérifiez les données. Les quantités doivent être entières et les prix positifs. Les références doivent être uniques ; les points-virgules et sauts de ligne sont interdits."
    ],
    storage: [
      "Speicherung nicht möglich. Es wurde keine neue Prüfung angelegt.",
      "Saving failed. No new review was created.",
      "Salvataggio non riuscito. Nessuna nuova verifica creata.",
      "Échec de l’enregistrement. Aucune nouvelle vérification créée."
    ],
    corrupt: [
      "Gespeicherte eigene Prüfungen konnten nicht zuverlässig gelesen werden. Neue Prüfungen sind gesperrt; vorhandene Daten werden nicht überschrieben.",
      "Saved custom reviews could not be read reliably. New reviews are blocked; existing data will not be overwritten.",
      "Impossibile leggere in modo affidabile le verifiche personali salvate. Le nuove verifiche sono bloccate; i dati esistenti non vengono sovrascritti.",
      "Les vérifications personnelles enregistrées n’ont pas pu être lues de manière fiable. Les nouvelles vérifications sont bloquées ; les données existantes ne seront pas écrasées."
    ],
    manual: [
      "Eigene Demo-Prüfung · keine Originalbelege hinterlegt",
      "Custom demo review · no original documents available",
      "Verifica demo personale · nessun documento originale disponibile",
      "Vérification démo personnelle · aucun document original disponible"
    ],
    empty: [
      "Diese Prüfung wurde manuell mit fiktiven Testdaten angelegt. Es wurden keine PDF-Belege hochgeladen oder erzeugt.",
      "This review was created manually using fictional test data. No PDF documents were uploaded or generated.",
      "Questa verifica è stata creata manualmente con dati fittizi. Nessun documento PDF è stato caricato o generato.",
      "Cette vérification a été créée manuellement à partir de données fictives. Aucun justificatif PDF n’a été téléversé ni généré."
    ]
  };

  function tr(name) {
    const index = {
      de: 0,
      en: 1,
      it: 2,
      fr: 3
    }[text.lang()] ?? 0;

    return words[name][index];
  }

  function el(tag, value, className) {
    const element = document.createElement(tag);

    if (value !== undefined) {
      element.textContent = value;
    }

    if (className) {
      element.className = className;
    }

    return element;
  }

  function clean(value) {
    return (
      typeof value === "string" &&
      value.trim().length > 0 &&
      value.length <= 120 &&
      !/[;\r\n]/.test(value)
    );
  }

  function valid(item) {
    return Boolean(
      item &&
      item.custom === true &&
      /^TEST-[A-Za-z0-9-]+$/.test(item.id) &&
      ["industrial", "flowers"].includes(item.company) &&
      clean(item.supplier) &&
      clean(item.article) &&
      clean(item.orderId) &&
      clean(item.invoiceReference) &&
      item.currency === "CHF" &&
      item.unit === "Stück" &&
      item.asOf === base.asOf &&
      [
        "match",
        "partial",
        "shortage",
        "damage",
        "price",
        "multiple",
        "deliveryOpen",
        "lowerPrice"
      ].includes(item.kind) &&
      Array.isArray(item.receiptIds) &&
      item.receiptIds.length === 1 &&
      clean(item.receiptIds[0]) &&
      Array.isArray(item.documents) &&
      item.documents.length === 0 &&
      Array.isArray(item.credits) &&
      item.credits.length === 0 &&
      Array.isArray(item.settlements) &&
      item.settlements.length === 0 &&
      item.approved === 0 &&
      item.approvalId === null &&
      (
        item.kind !== "partial" ||
        (
          /^\d{4}-\d{2}-\d{2}$/.test(item.due) &&
          Number.isFinite(Date.parse(item.due))
        )
      ) &&
      engine.inspect(item).valid
    );
  }

  let records = [];
  let broken = false;

  try {
    const raw = localStorage.getItem(storageKey);

    if (raw !== null) {
      records = JSON.parse(raw);
    }

    if (
      !Array.isArray(records) ||
      records.length > 200 ||
      !records.every(valid)
    ) {
      throw new Error("invalid");
    }

    const ids = new Set(base.items.map(item => item.id));

    const references = new Set(
      base.items.map(item => item.id.toLowerCase())
    );

    for (const item of records) {
      const reference = item.invoiceReference.toLowerCase();

      if (ids.has(item.id) || references.has(reference)) {
        throw new Error("duplicate");
      }

      ids.add(item.id);
      references.add(reference);
    }
  } catch (error) {
    records = [];
    broken = true;
  }

  const data = {
    ...base,
    items: [...base.items, ...records]
  };

  window.ClaraSRData = data;

  function noDocuments(item) {
    const dialog = el(
      "dialog",
      undefined,
      "cl-inspection-document-dialog"
    );

    const close = el(
      "button",
      text.t("close"),
      "document-viewer-button"
    );

    close.type = "button";
    close.onclick = () => dialog.close();

    dialog.append(
      el("h3", item.id),
      el("p", tr("empty")),
      close
    );

    dialog.addEventListener(
      "close",
      () => dialog.remove(),
      { once: true }
    );

    document.body.append(dialog);
    dialog.showModal();
  }

  function mount(ctx) {
    let supplier = "all";
    let query = "";
    let kind = "all";
    let active = "INV-301";
    let previousCompany = ctx.company();

    function refreshSuppliers() {
      document.querySelectorAll(
        "[data-supplier-select]"
      ).forEach(select => {
        const oldValue = select.value;

        select.replaceChildren(
          new Option(tr("suppliers"), "all")
        );

        [...new Set(data.items.map(item => item.supplier))]
          .sort()
          .forEach(name => {
            select.add(new Option(name, name));
          });

        select.value = [...select.options].some(
          option => option.value === oldValue
        ) ? oldValue : "all";
      });
    }

    function openForm() {
      if (broken) return;

      const company = ctx.company();

      const dialog = el(
        "dialog",
        undefined,
        "cl-inspection-document-dialog cl-entry-dialog"
      );

      const heading = el("h3", tr("title"));
      heading.id = "cl-entry-title";

      dialog.setAttribute(
        "aria-labelledby",
        heading.id
      );

      const form = el(
        "form",
        undefined,
        "cl-inspection-form"
      );

      const inputs = {};

      const defaults = {
        supplier: "",
        article: "",
        reference: "",
        order: "",
        ordered: "100",
        received: "95",
        damaged: "0",
        invoiced: "100",
        unitPrice: "20.00",
        invoiceUnitPrice: "20.00"
      };

      for (const [name, value] of Object.entries(defaults)) {
        const caption = words[name]
          ? tr(name)
          : text.t(name) +
            (name.includes("Price") ? " (CHF)" : "");

        const label = el("label", caption);
        const input = el("input");

        input.type = [
          "supplier",
          "article",
          "reference",
          "order"
        ].includes(name) ? "text" : "number";

        input.required = true;
        input.value = value;

        if (input.type === "number") {
          input.min = name.includes("Price") ? "0.01" : "0";
          input.step = name.includes("Price") ? "0.01" : "1";
        } else {
          input.maxLength = 120;
        }

        label.append(input);
        form.append(label);
        inputs[name] = input;
      }

      const scheduleLabel = el("label", tr("schedule"));
      const schedule = el("input");
      schedule.type = "checkbox";
      scheduleLabel.prepend(schedule);

      const dateLabel = el("label", tr("due"));
      const date = el("input");
      date.type = "date";
      date.disabled = true;

      schedule.onchange = () => {
        date.disabled = !schedule.checked;
        date.required = schedule.checked;
      };

      dateLabel.append(date);
      form.append(scheduleLabel, dateLabel);

      const save = el(
        "button",
        tr("save"),
        "document-viewer-button"
      );

      save.type = "submit";

      const cancel = el(
        "button",
        tr("cancel"),
        "document-viewer-button"
      );

      cancel.type = "button";
      cancel.onclick = () => dialog.close();

      const feedback = el("p");
      feedback.setAttribute("role", "alert");

      form.append(save, cancel);

      dialog.append(
        heading,
        el("p", tr("notice")),
        form,
        feedback
      );

      dialog.addEventListener(
        "close",
        () => dialog.remove(),
        { once: true }
      );

      form.onsubmit = event => {
        event.preventDefault();

        if (!form.reportValidity()) return;

        const values = Object.fromEntries(
          Object.entries(inputs).map(([name, input]) => [
            name,
            input.value.trim()
          ])
        );

        const textValid = [
          "supplier",
          "article",
          "reference",
          "order"
        ].every(name => clean(values[name]));

        const duplicate = (
          records.some(item =>
            item.invoiceReference.toLowerCase() ===
            values.reference.toLowerCase()
          ) ||
          data.items.some(item =>
            item.id.toLowerCase() ===
            values.reference.toLowerCase()
          )
        );

        if (!textValid || duplicate || records.length >= 200) {
          feedback.textContent = tr("invalid");
          return;
        }

        const id =
          "TEST-" +
          Date.now().toString(36).toUpperCase() +
          "-" +
          crypto.randomUUID().slice(0, 4).toUpperCase();

        const item = {
          id,
          custom: true,
          company,
          supplier: values.supplier,
          article: values.article,
          invoiceReference: values.reference,
          orderId: values.order,
          sku: id,
          unit: "Stück",
          currency: "CHF",
          asOf: base.asOf,
          ordered: Number(values.ordered),
          received: [Number(values.received)],
          damaged: Number(values.damaged),
          invoiced: Number(values.invoiced),
          unitPrice: Math.round(Number(values.unitPrice) * 100),
          invoiceUnitPrice: Math.round(
            Number(values.invoiceUnitPrice) * 100
          ),
          receiptIds: ["TEST-WE-" + id.slice(5)],
          approved: 0,
          approvalId: null,
          credits: [],
          settlements: [],
          documents: [],
          kind: schedule.checked ? "partial" : "match",
          due: schedule.checked ? date.value : null
        };

        const result = engine.inspect(item);

        if (!valid(item) || !result.valid) {
          feedback.textContent = tr("invalid");
          return;
        }

        if (!schedule.checked) {
          item.kind = result.key;
        }

        const next = [...records, item];

        try {
          localStorage.setItem(
            storageKey,
            JSON.stringify(next)
          );
        } catch (error) {
          feedback.textContent = tr("storage");
          return;
        }

        records = next;
        data.items.push(item);

        active = item.id;
        query = "";
        kind = "all";
        supplier = "all";

        refreshSuppliers();
        ctx.calculate();
        dialog.close();
        render();
      };

      document.body.append(dialog);
      dialog.showModal();
    }

    function render() {
      const companyKey = ctx.company();

      if (companyKey !== previousCompany) {
        supplier = "all";
        query = "";
        kind = "all";
        previousCompany = companyKey;
      }

      const page = ctx.page;

      const resultsLabel = {
  de: "DEMO-ERGEBNISSE",
  en: "DEMO RESULTS",
  it: "RISULTATI DELLA DEMO",
  fr: "RÉSULTATS DE LA DÉMO"
};

page.replaceChildren(
  el(
    "span",
    resultsLabel[text.lang()] || resultsLabel.de,
    "results-badge cl-inspection-results-badge"
  ),
  el("h2", text.t("inspection"), "cl-inspection-title"),
  el("p", text.t("intro"), "cl-inspection-intro"),
  el(
    "p",
    text.t("asOf") + ": " + data.asOf,
    "cl-inspection-muted"
  )
);

      const top = el(
        "div",
        undefined,
        "cl-entry-toolbar"
      );

      const companyLabel = el("label", tr("company"));
      const company = el("select");

      company.setAttribute("aria-label", tr("company"));
      company.add(new Option("Alpine Parts AG", "industrial"));
      company.add(new Option("Flora Ticino SA", "flowers"));
      company.value = companyKey;

      company.onchange = () => {
        ctx.changeCompany(company.value);
        ctx.calculate();
        render();
      };

      companyLabel.append(company);

      const add = el(
        "button",
        tr("add"),
        "document-viewer-button"
      );

      add.type = "button";
      add.disabled = broken || ctx.locked();
      add.onclick = openForm;

      top.append(companyLabel, add);
      page.append(top);

      if (broken) {
        page.append(
          el("p", tr("corrupt"), "cl-inspection-notice")
        );
      }

      const controls = el(
        "div",
        undefined,
        "cl-inspection-controls"
      );

      const supplierSelect = el("select");

      supplierSelect.setAttribute(
        "aria-label",
        tr("supplier")
      );

      supplierSelect.add(
        new Option(tr("suppliers"), "all")
      );

      [...new Set(
        data.items
          .filter(item => item.company === companyKey)
          .map(item => item.supplier)
      )]
        .sort()
        .forEach(name => {
          supplierSelect.add(new Option(name, name));
        });

      if (![...supplierSelect.options].some(
        option => option.value === supplier
      )) {
        supplier = "all";
      }

      supplierSelect.value = supplier;

      const search = el("input");
      search.type = "search";
      search.placeholder = text.t("search");
      search.setAttribute("aria-label", text.t("search"));
      search.value = query;

      const filter = el("select");
      filter.setAttribute("aria-label", text.t("all"));

      [
        "all",
        "shortage",
        "damage",
        "price",
        "multiple",
        "partial",
        "deliveryOpen",
        "overdue",
        "match"
      ].forEach(value => {
        filter.add(new Option(text.t(value), value));
      });

      filter.value = kind;

      const body = el(
        "div",
        undefined,
        "cl-inspection-grid"
      );

      const list = el(
        "div",
        undefined,
        "cl-inspection-list"
      );

      const detail = el(
        "div",
        undefined,
        "cl-inspection-detail"
      );

      const message = el("p");
      message.setAttribute("aria-live", "polite");

      function draw() {
        
        /* ClaraSR: Neueste eigene Prüfungen zuerst */
        const visible = [
          ...data.items
            .filter(entry => entry.custom)
            .reverse(),
          ...data.items
            .filter(entry => !entry.custom)
        ].filter(item => {
          const supplierMatches = (
            supplier === "all" ||
            item.supplier === supplier
          );

          const kindMatches = (
            kind === "all" ||
            ctx.current(item).key === kind
          );

          const searchable = [
            item.id,
            item.invoiceReference || "",
            item.orderId,
            item.supplier,
            item.article, (window.ClaraSRArticleName ? window.ClaraSRArticleName(item) : item.article)
          ].join(" ").toLowerCase();

          return (
            item.company === companyKey &&
            supplierMatches &&
            kindMatches &&
            searchable.includes(query.toLowerCase())
          );
        });

        list.replaceChildren();
        detail.replaceChildren();

        if (!visible.length) {
          list.append(el("p", text.t("noResults")));
          return;
        }

        if (!visible.some(item => item.id === active)) {
          active = visible[0].id;
        }

        for (const item of visible) {
          const result = ctx.current(item);

          const button = el(
            "button",
            undefined,
            "cl-inspection-item"
          );

          button.type = "button";

          const heading = el(
            "span",
            undefined,
            "cl-entry-card-heading"
          );

          heading.append(
            el(
              "strong",
              item.custom ? item.invoiceReference : item.id
            ),
            el("span", item.supplier)
          );

          const status = el(
            "span",
            text.t(result.key),
            "cl-entry-badge"
          );

          status.dataset.tone = [
            "shortage",
            "damage",
            "price",
            "multiple",
            "overdue"
          ].includes(result.key)
            ? "warning"
            : result.key === "match"
              ? "match"
              : "neutral";

          button.append(heading, status);

          if (item.id === active) {
            button.setAttribute("aria-current", "true");
          }

          button.onclick = () => {
            active = item.id;
            draw();
          };

          list.append(button);
        }

        const item = data.items.find(
          entry => entry.id === active
        );

        ctx.editor(detail, item, message);
        /* ClaraSR: Eigene Prüfung löschen v1 */

        if (item.custom) {
          const language = {
            de: 0,
            en: 1,
            it: 2,
            fr: 3
          }[text.lang()] ?? 0;

          const captions = [
            "Eigene Prüfung löschen",
            "Delete custom review",
            "Eliminare la verifica personale",
            "Supprimer la vérification personnelle"
          ];

          const questions = [
            "Diese eigene Demo-Prüfung mit ihren Bearbeitungsnotizen dauerhaft aus diesem Browser löschen? Die vorbereiteten Beispiele bleiben erhalten.",
            "Permanently delete this custom demo review and its processing notes from this browser? Prepared examples will remain available.",
            "Eliminare definitivamente da questo browser questa verifica demo personale e le relative note? Gli esempi predisposti restano disponibili.",
            "Supprimer définitivement de ce navigateur cette vérification démo personnelle et ses notes ? Les exemples préparés restent disponibles."
          ];

          const failure = [
            "Löschen fehlgeschlagen. Bitte die Fehlermeldung prüfen.",
            "Deletion failed. Please check the error message.",
            "Eliminazione non riuscita. Verifichi il messaggio di errore.",
            "Échec de la suppression. Vérifiez le message d’erreur."
          ];

          const remove = el(
            "button",
            captions[language],
            "document-viewer-button"
          );

          remove.type = "button";
          remove.style.marginTop = "18px";

          remove.onclick = () => {
            if (!confirm(questions[language])) return;

            const originals = new Map();

            try {
              const manualKey = "clarasr-manual-checks-v1";
              const mainKey = "clarasr-upstream-demo-v1";
              const workflowKey = "creditloop-demo-workflows-v1";

              for (const key of [
                manualKey,
                mainKey,
                workflowKey
              ]) {
                originals.set(key, localStorage.getItem(key));
              }

              const stored = JSON.parse(
                originals.get(manualKey) || "[]"
              );

              if (
                !Array.isArray(stored) ||
                !stored.every(valid) ||
                !stored.some(entry =>
                  entry.id === item.id && entry.custom
                )
              ) {
                throw Error("Invalid custom data");
              }

              const next = stored.filter(
                entry => entry.id !== item.id
              );

              const writes = [];

              if (originals.get(mainKey) !== null) {
                const state = JSON.parse(
                  originals.get(mainKey)
                );

                if (
                  !state ||
                  !state.variants ||
                  Array.isArray(state.variants) ||
                  !state.finals ||
                  Array.isArray(state.finals)
                ) {
                  throw Error("Invalid review state");
                }

                if (state.finals[item.id]?.length) {
                  throw Error(
                    "A saved final case file exists; deletion is blocked."
                  );
                }

                delete state.variants[item.id];

                writes.push([
                  mainKey,
                  JSON.stringify(state)
                ]);
              }

              if (originals.get(workflowKey) !== null) {
                const workflows = JSON.parse(
                  originals.get(workflowKey)
                );

                if (
                  !Array.isArray(workflows) ||
                  !workflows.every(entry =>
                    Array.isArray(entry) &&
                    entry.length === 2 &&
                    typeof entry[0] === "string"
                  )
                ) {
                  throw Error("Invalid workflow data");
                }

                const target =
                  item.company + "::" + item.id;

                writes.push([
                  workflowKey,
                  JSON.stringify(
                    workflows.filter(
                      entry => entry[0] !== target
                    )
                  )
                ]);
              }

              writes.push([
                manualKey,
                JSON.stringify(next)
              ]);

              try {
                for (const [key, value] of writes) {
                  localStorage.setItem(key, value);
                }
              } catch (error) {
                for (const [key, value] of originals) {
                  if (value === null) {
                    localStorage.removeItem(key);
                  } else {
                    localStorage.setItem(key, value);
                  }
                }

                throw error;
              }

              window.location.reload();
            } catch (error) {
              message.textContent =
                failure[language] + " " + error.message;

              message.setAttribute("role", "alert");
            }
          };

          detail.append(remove);
        }


        if (item.custom) {
          detail.querySelector("h3").textContent =
            item.invoiceReference + " · " + item.article;

          detail.prepend(
            el("p", tr("manual"), "cl-inspection-muted")
          );
        }
      }

      supplierSelect.onchange = () => {
        supplier = supplierSelect.value;
        draw();
      };

      search.oninput = () => {
        query = search.value;
        draw();
      };

      filter.onchange = () => {
        kind = filter.value;
        draw();
      };

      controls.append(supplierSelect, search, filter);
      body.append(list, detail);
      page.append(controls, message, body);

      draw();
    }

    return render;
  }

  window.ClaraSREntry = {
    mount,
    noDocuments
  };
})();
/* ClaraSR: Ansicht vereinfachen v1 */
(() => {
  let scheduled = false;

  function cleanSectionLabels() {
    scheduled = false;

    document.querySelectorAll(
      ".section-label, .eyebrow, [data-section-label]"
    ).forEach(element => {
      const numbered = /^\s*\d{2}\s*\//.test(
        element.textContent
      );

      element.classList.toggle(
        "cl-numbered-section-hidden",
        numbered
      );
    });
  }

  function schedule() {
    if (scheduled) return;

    scheduled = true;
    requestAnimationFrame(cleanSectionLabels);
  }

  new MutationObserver(schedule).observe(document.body, {
    childList: true,
    subtree: true,
    characterData: true
  });

  cleanSectionLabels();
})();
