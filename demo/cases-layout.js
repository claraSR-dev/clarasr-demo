
"use strict";

/*
 * creditloop – Vorgangsliste, Strukturversion 1
 *
 * Nur Darstellung, Sortierung und Seitennavigation.
 * Keine Änderungen an Matching, Fallhistorien,
 * Abschlussentscheidungen oder localStorage.
 */

(() => {
  function initialize() {
    const section = document.querySelector(
      '[data-demo-view="cases"]'
    );

    if (!section) return;

    const layout = section.querySelector(".result-layout");
    const panel = layout?.querySelector(".cases-panel");
    const detail = layout?.querySelector(".detail-panel");
    const list = panel?.querySelector("#case-list");

    if (!layout || !panel || !detail || !list) return;

    if (
      typeof window.applyCaseFilter !== "function" ||
      typeof window.drawResults !== "function"
    ) {
      console.warn("creditloop: Falllistenfunktionen fehlen.");
      return;
    }

    const originalFilter = window.applyCaseFilter;
    const originalDraw = window.drawResults;

    const state = {
      page: 1,
      pageSize: 5,
      sortKey: "original",
      sortDirection: 1,
      matchingIds: new Set(),
      filterSignature: ""
    };

    // Vorhandene Panels verschieben, nicht neu erzeugen.
    // Dadurch bleiben ihre IDs und Ereignisse erhalten.
    layout.insertBefore(panel, detail);
    layout.classList.add("cl-cases-layout-v1");
    panel.classList.add("cl-cases-list-panel-v1");

    const heading = panel.querySelector("h3");
    if (heading) heading.textContent = "Vorgänge";

    const intro = panel.querySelector(".panel-intro");
    if (intro) intro.hidden = true;

    const total = document.createElement("span");
    total.className = "cl-cases-total";

    const header = document.createElement("div");
    header.className = "cl-cases-heading";

    if (heading) header.appendChild(heading);
    header.appendChild(total);
    panel.prepend(header);

    const columnHeader = document.createElement("div");
    columnHeader.className = "cl-cases-columns";

    const columns = [
      ["invoice", "Vorgang"],
      ["supplier", "Lieferant"],
      ["amount", "Betrag"],
      ["status", "Status"]
    ];

    for (const [key, label] of columns) {
      const button = document.createElement("button");
      button.type = "button";
      button.textContent = label;
      button.dataset.sort = key;
      button.setAttribute(
        "aria-label",
        "Sortieren nach " + label
      );

      button.addEventListener("click", () => {
        if (state.sortKey === key) {
          state.sortDirection *= -1;
        } else {
          state.sortKey = key;
          state.sortDirection = 1;
        }

        state.page = 1;
        renderPage();
      });

      columnHeader.appendChild(button);
    }

    list.before(columnHeader);

    const pagination = document.createElement("nav");
    pagination.className = "cl-cases-pagination";
    pagination.setAttribute(
      "aria-label",
      "Seitennavigation der Vorgänge"
    );

    list.after(pagination);

    function getRows() {
      return [...list.querySelectorAll(".case-list-item")];
    }

    function currentSignature() {
      const activeFilter = panel.querySelector(
        ".case-filter-button.active"
      )?.dataset.filter ?? "all";

      const search = panel.querySelector(
        "#case-search-input"
      )?.value ?? "";

      return activeFilter + "::" + search;
    }

    function arrangeControls() {
      const filters = panel.querySelector(
        "#case-workflow-filters"
      );

      const search = panel.querySelector(
        "#case-search-area"
      );

      if (filters) {
        panel.insertBefore(filters, columnHeader);
      }

      if (search) {
        panel.insertBefore(search, columnHeader);

        if (!search.querySelector(".cl-cases-settings")) {
          const settings = document.createElement("button");
          settings.type = "button";
          settings.className = "cl-cases-settings";
          settings.textContent = "☷";
          settings.title = "Anzahl der Vorgänge pro Seite";
          settings.setAttribute(
            "aria-label",
            "Vorgänge pro Seite ändern"
          );

          // Button bleibt für spätere Einstellungen erhalten.
// Vorerst keine Klickfunktion.

          search.appendChild(settings);
        }
      }
    }

    function captureFilteredRows() {
      state.matchingIds = new Set(
        getRows()
          .filter(row =>
            !row.hidden &&
            row.style.display !== "none"
          )
          .map(row => row.dataset.invoiceId)
      );
    }

    function amountOf(row) {
      const result =
        typeof currentResults !== "undefined"
          ? currentResults.find(
              item =>
                item.invoiceId === row.dataset.invoiceId
            )
          : null;

      return {
        currency: result?.currency ?? "",
        amount: Number.isFinite(result?.difference)
          ? result.difference
          : -1
      };
    }

    function compareRows(a, b) {
      const key = state.sortKey;
      let comparison = 0;

      if (key === "invoice") {
        comparison = a.dataset.invoiceId.localeCompare(
          b.dataset.invoiceId,
          "de",
          { numeric: true }
        );
      } else if (key === "supplier") {
        const supplierA = a.querySelector(
          ".case-button-bottom span"
        )?.textContent ?? "";

        const supplierB = b.querySelector(
          ".case-button-bottom span"
        )?.textContent ?? "";

        comparison = supplierA.localeCompare(
          supplierB, "de"
        );
      } else if (key === "amount") {
        const valueA = amountOf(a);
        const valueB = amountOf(b);

        // Keine direkte Betragsrangfolge über Währungen hinweg.
        comparison = valueA.currency.localeCompare(
          valueB.currency
        );

        if (comparison === 0) {
          comparison = valueA.amount - valueB.amount;
        }
      } else if (key === "status") {
        const statusA = a.querySelector(
          ".case-quick-status-select"
        )?.selectedOptions[0]?.textContent ?? "";

        const statusB = b.querySelector(
          ".case-quick-status-select"
        )?.selectedOptions[0]?.textContent ?? "";

        comparison = statusA.localeCompare(statusB, "de");
      }

      return comparison * state.sortDirection;
    }

    function pageButton(text, target, disabled, active) {
      const button = document.createElement("button");
      button.type = "button";
      button.textContent = text;
      button.disabled = disabled;

      if (active) {
        button.classList.add("active");
        button.setAttribute("aria-current", "page");
      }

      button.addEventListener("click", () => {
        state.page = target;
        renderPage();
      });

      return button;
    }

    function renderPage() {
      arrangeControls();

      const allRows = getRows();

      const matching = allRows.filter(row =>
        state.matchingIds.has(row.dataset.invoiceId)
      );

      if (state.sortKey !== "original") {
        matching.sort(compareRows);
      }

            // Bei Statusänderungen bleiben die vorhandenen Zeilen
      // an ihrem Platz. Nur eine tatsächlich geänderte
      // Sortierung verschiebt DOM-Elemente.
      if (state.sortKey !== "original") {
        const ordered = matching.concat(
          allRows.filter(row =>
            !state.matchingIds.has(row.dataset.invoiceId)
          )
        );

        ordered.forEach((row, index) => {
          const current = list.children[index];

          if (current !== row) {
            list.insertBefore(row, current ?? null);
          }
        });
      }

      const count = matching.length;

      const pages = Math.max(
        1,
        Math.ceil(count / state.pageSize)
      );

      state.page = Math.min(
        Math.max(state.page, 1),
        pages
      );

      const first = (state.page - 1) * state.pageSize;
      const last = Math.min(
        first + state.pageSize,
        count
      );

      const pageIds = new Set(
        matching
          .slice(first, last)
          .map(row => row.dataset.invoiceId)
      );

      for (const row of allRows) {
        const visible = pageIds.has(
          row.dataset.invoiceId
        );

        row.hidden = !visible;
        row.style.display = visible ? "" : "none";
      }

      total.textContent =
        count + (count === 1 ? " Fall" : " Fälle");

      pagination.replaceChildren();

      const navigation = document.createElement("div");
      navigation.className = "cl-cases-page-buttons";

      navigation.appendChild(
        pageButton("‹", state.page - 1, state.page === 1, false)
      );

      const visiblePages = new Set([
        1,
        pages,
        state.page - 1,
        state.page,
        state.page + 1
      ]);

      let previous = 0;

      for (let number = 1; number <= pages; number++) {
        if (!visiblePages.has(number)) continue;
        if (number < 1 || number > pages) continue;

        if (previous && number - previous > 1) {
          const dots = document.createElement("span");
          dots.textContent = "…";
          dots.className = "cl-cases-dots";
          navigation.appendChild(dots);
        }

        navigation.appendChild(
          pageButton(
            String(number),
            number,
            false,
            number === state.page
          )
        );

        previous = number;
      }

      navigation.appendChild(
        pageButton(
          "›",
          state.page + 1,
          state.page === pages,
          false
        )
      );

      const range = document.createElement("span");
      range.className = "cl-cases-range";
      range.textContent = count
        ? (first + 1) + "–" + last + " von " + count
        : "0 von 0";

      pagination.append(navigation, range);
    }

    function refreshAfterFilter() {
      const signature = currentSignature();

      if (signature !== state.filterSignature) {
        state.page = 1;
        state.filterSignature = signature;
      }

      captureFilteredRows();
      renderPage();
    }

    window.applyCaseFilter = function (...args) {
      const result = originalFilter.apply(this, args);
      refreshAfterFilter();
      return result;
    };

    window.drawResults = function (...args) {
      const result = originalDraw.apply(this, args);

      state.page = 1;
      state.sortKey = "original";
      state.sortDirection = 1;

      refreshAfterFilter();
      return result;
    };

    // Bereits auf der Seite geladene Fälle berücksichtigen.
    arrangeControls();
    captureFilteredRows();
    state.filterSignature = currentSignature();
    renderPage();
  }

  if (document.readyState === "loading") {
    document.addEventListener(
      "DOMContentLoaded",
      initialize,
      { once: true }
    );
  } else {
    initialize();
  }
})();
