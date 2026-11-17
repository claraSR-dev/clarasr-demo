
"use strict";

/*
 * creditloop – Workflow Layout
 *
 * Gewünschte Anordnung der Fälle-Ansicht:
 *
 * 1. Vorgänge links | Case Details rechts
 *
 * 2. Case Workflow über die gesamte Breite:
 *    Bearbeitung links | Ereignisverlauf rechts
 *
 * 3. Abschlussprüfung über die gesamte Breite
 *
 * Ereignisverlauf:
 * - 5 Einträge pro Seite
 * - Vorwärts- und Zurücknavigation
 * - Seitenzahlen
 * - Automatische Aktualisierung nach Änderungen
 *
 * Bestehende DOM-Elemente und Event-Listener
 * werden weiterverwendet.
 *
 * Keine Änderungen an:
 * - localStorage
 * - Matching Engine
 * - Settlement Engine
 * - Abschlussentscheidungen
 * - bestehenden Falldaten
 */

(() => {
  function initialize() {
    const section = document.querySelector(
      '[data-demo-view="cases"]'
    );

    const layout = section?.querySelector(".result-layout");

    const casesPanel = layout?.querySelector(
      ".cases-panel"
    );

    const detailPanel = layout?.querySelector(
      ".detail-panel"
    );

    const caseDetail = detailPanel?.querySelector(
      "#case-detail"
    );

    if (
      !layout ||
      !casesPanel ||
      !detailPanel ||
      !caseDetail
    ) {
      console.warn(
        "creditloop: Fälle-Layout nicht gefunden."
      );
      return;
    }

    // Doppelte Initialisierung verhindern.
    if (layout.querySelector(".cl-cases-top-row")) {
      return;
    }

    // ==========================================
    // 1. OBERE ZWEISPALTIGE ANORDNUNG
    // ==========================================

    // Vorgänge und Case Details bleiben
    // als vorhandene Elemente erhalten.

    const topRow = document.createElement("div");
    topRow.className = "cl-cases-top-row";

    layout.insertBefore(topRow, casesPanel);

    topRow.append(
      casesPanel,
      detailPanel
    );

    // ==========================================
    // 2. BREITER CASE WORKFLOW
    // ==========================================

    const workflowHost = document.createElement("section");

    workflowHost.className = "cl-workflow-host";
    workflowHost.hidden = true;
    workflowHost.dataset.invoiceId = "";

    layout.appendChild(workflowHost);

    // ==========================================
    // 3. BREITE ABSCHLUSSPRÜFUNG
    // ==========================================

    const closureHost = document.createElement("section");

    closureHost.className = "cl-closure-host";
    closureHost.hidden = true;
    closureHost.dataset.invoiceId = "";

        const closureContent = document.getElementById(
      "closure-content"
    );

    if (!closureContent) {
      console.error(
        "creditloop: Abschlussansicht fehlt."
      );
      return;
    }

    closureContent.appendChild(closureHost);

    // ==========================================
    // 4. SEITENNAVIGATION EREIGNISVERLAUF
    // ==========================================

    function addHistoryPagination(workflow) {
      const history = workflow.querySelector(
        ".workflow-history"
      );

      if (
        !history ||
        history.dataset.paginated === "true"
      ) {
        return;
      }

      history.dataset.paginated = "true";

      const navigation = document.createElement("nav");

      navigation.className = "cl-history-pagination";

      navigation.setAttribute(
        "aria-label",
        "Seiten des Ereignisverlaufs"
      );

      history.after(navigation);

      let currentPage = 1;

      const pageSize = 5;

      function renderPagination() {
        const entries = Array.from(
          history.querySelectorAll(
            ":scope > .workflow-history-entry"
          )
        );

        const total = entries.length;

        const totalPages = Math.max(
          1,
          Math.ceil(total / pageSize)
        );

        currentPage = Math.min(
          Math.max(currentPage, 1),
          totalPages
        );

        const start = (currentPage - 1) * pageSize;

        const end = Math.min(
          start + pageSize,
          total
        );

        // Nur die Anzeige ändern.
        // Keine Ereignisse löschen oder verändern.

        entries.forEach((entry, index) => {
          const visible =
            index >= start &&
            index < end;

          entry.hidden = !visible;

          entry.style.display = visible
            ? ""
            : "none";
        });

        navigation.replaceChildren();

        const buttons = document.createElement("div");

        buttons.className = "cl-history-page-buttons";

        function addButton(
          label,
          targetPage,
          disabled,
          active
        ) {
          const button = document.createElement("button");

          button.type = "button";
          button.textContent = label;
          button.disabled = disabled;

          if (active) {
            button.classList.add("active");

            button.setAttribute(
              "aria-current",
              "page"
            );
          }

          button.addEventListener("click", () => {
            currentPage = targetPage;
            renderPagination();
          });

          buttons.appendChild(button);
        }

        // Vorherige Seite.
        addButton(
          "‹",
          currentPage - 1,
          currentPage === 1,
          false
        );

        // Bei vielen Ereignissen nicht
        // hunderte Seitenzahlen anzeigen.

        const visiblePages = new Set([
          1,
          totalPages,
          currentPage - 1,
          currentPage,
          currentPage + 1
        ]);

        let previousPage = 0;

        for (
          let pageNumber = 1;
          pageNumber <= totalPages;
          pageNumber++
        ) {
          if (!visiblePages.has(pageNumber)) {
            continue;
          }

          if (
            previousPage &&
            pageNumber - previousPage > 1
          ) {
            const dots = document.createElement("span");

            dots.className = "cl-history-page-dots";
            dots.textContent = "…";

            buttons.appendChild(dots);
          }

          addButton(
            String(pageNumber),
            pageNumber,
            false,
            pageNumber === currentPage
          );

          previousPage = pageNumber;
        }

        // Nächste Seite.
        addButton(
          "›",
          currentPage + 1,
          currentPage === totalPages,
          false
        );

        const range = document.createElement("span");

        range.className = "cl-history-page-count";

        range.textContent = total
          ? `${start + 1}–${end} von ${total}`
          : "0 von 0";

        navigation.append(
          buttons,
          range
        );
      }

      // Wenn ein Ereignis gespeichert,
      // bearbeitet oder gelöscht wird,
      // aktualisiert sich die Seitennavigation.

      const historyObserver = new MutationObserver(() => {
        currentPage = 1;
        renderPagination();
      });

      historyObserver.observe(history, {
        childList: true
      });

      renderPagination();
    }

    // ==========================================
    // 5. WORKFLOW INTERN IN ZWEI SPALTEN
    // ==========================================

    function arrangeWorkflow(workflow) {
      if (
        workflow.dataset.arranged === "true"
      ) {
        return;
      }

      const history = workflow.querySelector(
        ".workflow-history"
      );

           const historyTitle = history?.previousElementSibling;

            if (
        !history ||
        historyTitle?.tagName !== "H5"
      ) 
      {
        console.warn(
          "creditloop: Ereignisverlauf im Workflow nicht gefunden."
        );
        return;
      }

      // Vorhandene Eingabefelder und Buttons
      // übernehmen, nicht neu erstellen.

      const columns = document.createElement("div");
      columns.className = "cl-workflow-columns";

      const editing = document.createElement("div");
      editing.className = "cl-workflow-editing";

      const events = document.createElement("div");
      events.className = "cl-workflow-events";

      // Alle Elemente zwischen der Workflow-
      // Einleitung und dem Ereignisverlauf gehören
      // zum Bearbeitungsbereich.

      const workflowChildren = Array.from(
        workflow.children
      );

      const historyIndex = workflowChildren.indexOf(
        historyTitle
      );

      const intro = workflow.querySelector(
        ".workflow-intro"
      );

      const introIndex = intro
        ? workflowChildren.indexOf(intro)
        : -1;

      const editingElements = workflowChildren.slice(
        introIndex + 1,
        historyIndex
      );

      for (const element of editingElements) {
        editing.appendChild(element);
      }

      // Ereignisverlauf mit bestehenden
      // Ereignissen und Event-Listenern übernehmen.

      events.append(
        historyTitle,
        history
      );

      columns.append(
        editing,
        events
      );

      // Überschrift und Beschreibung bleiben
      // oberhalb der beiden Workflow-Spalten.

      if (intro) {
        intro.after(columns);
      } else {
        workflow.prepend(columns);
      }

      workflow.classList.add(
        "cl-workflow-arranged"
      );

      workflow.dataset.arranged = "true";

      addHistoryPagination(workflow);
    }

    // ==========================================
    // 6. AKTUELLEN FALL SYNCHRONISIEREN
    // ==========================================

    function synchronizeWorkflow() {
      const invoiceId = caseDetail.querySelector(
        ".detail-title"
      )?.textContent.trim() ?? "";

      // Der normale Case Workflow besitzt
      // einen Ereignisverlauf.

      const workflow = Array.from(
        caseDetail.children
      ).find(element =>
        element.classList.contains("case-workflow") &&
        element.querySelector(".workflow-history")
      );

      // Die Abschlussprüfung wird separat erkannt.
      // Sie enthält keinen Ereignisverlauf.

      const closure = Array.from(
        caseDetail.children
      ).find(element =>
        element.classList.contains("case-workflow") &&
              Array.from(
          element.querySelectorAll(
            ":scope > h4, " +
            ":scope > .cl-closure-review > h4"
          )
        ).some(child =>
          child.tagName === "H4" &&
          child.textContent.trim() ===
            "Abschlussprüfung"
        )
      );

      // ----------------------------------------
      // Case Workflow verschieben
      // ----------------------------------------

      if (workflow) {
        arrangeWorkflow(workflow);

        workflowHost.replaceChildren(workflow);

        workflowHost.dataset.invoiceId = invoiceId;
        workflowHost.hidden = false;
      }

      // ----------------------------------------
      // Abschlussprüfung verschieben
      // ----------------------------------------

      if (closure) {
        closureHost.replaceChildren(closure);

        closureHost.dataset.invoiceId = invoiceId;
        closureHost.hidden = false;
      }

      // ----------------------------------------
      // Leere Fallauswahl
      // ----------------------------------------

      if (!invoiceId) {
        workflowHost.replaceChildren();
        closureHost.replaceChildren();

        workflowHost.dataset.invoiceId = "";
        closureHost.dataset.invoiceId = "";

        workflowHost.hidden = true;
        closureHost.hidden = true;

        return;
      }

      // ----------------------------------------
      // Alten Workflow bei Fallwechsel entfernen
      // ----------------------------------------

      if (
        !workflow &&
        workflowHost.dataset.invoiceId !== invoiceId
      ) {
        workflowHost.replaceChildren();

        workflowHost.dataset.invoiceId = "";
        workflowHost.hidden = true;
      }

      // ----------------------------------------
      // Alte Abschlussprüfung bei Fallwechsel
      // entfernen
      // ----------------------------------------

      if (
        !closure &&
        closureHost.dataset.invoiceId !== invoiceId
      ) {
        closureHost.replaceChildren();

        closureHost.dataset.invoiceId = "";
        closureHost.hidden = true;
      }
    }

    // ==========================================
    // 7. BEI FALLWECHSEL AKTUALISIEREN
    // ==========================================

    // Die bestehende Anwendung erzeugt bei einem
    // Fallwechsel neue Falldetails.
    //
    // Wir beobachten nur diese Änderungen und
    // verschieben die neuen Elemente an ihren
    // vorgesehenen Platz.

    const detailObserver = new MutationObserver(
      synchronizeWorkflow
    );

    detailObserver.observe(caseDetail, {
      childList: true
    });

    // Vorhandenen Fall direkt beim Laden anzeigen.
    synchronizeWorkflow();
  }

  // ==========================================
  // 8. INITIALISIERUNG
  // ==========================================

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
