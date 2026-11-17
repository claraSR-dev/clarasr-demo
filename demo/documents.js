
"use strict";

/*
 * creditloop – Dokumentarchiv der Konzeptdemo
 * Alle Dokumente sind fiktive PDF-Musterbelege.
 * Die Original-PDFs liegen in demo/documents/.
 */

const creditloopDemoPDFs = {
  industrial: {
    "INV-101": {
      invoice: ["INV-101.pdf"],
      return: ["RET-101.pdf"],
      credit: [],
      booking: []
    },
    "INV-102": {
      invoice: ["INV-102.pdf"],
      return: ["RET-102.pdf"],
      credit: ["CR-102.pdf"],
      booking: ["BK-101.pdf"]
    },
    
"INV-103": {
  invoice: ["INV-103.pdf"],
  return: ["RET-103.pdf"],
  credit: ["CR-103.pdf"],
  booking: ["BK-102.pdf"]
},

"INV-104": {
  invoice: ["INV-104.pdf"],
  return: ["RET-104.pdf"],
  credit: [],
  booking: []
},


"INV-105": {
  invoice: ["INV-105.pdf"],
  return: ["RET-105.pdf"],
  credit: ["CR-105.pdf"],
  booking: []
},
"INV-106": {
  invoice: ["INV-106.pdf"],
  return: ["RET-106.pdf"],
  credit: ["CR-106.pdf"],
  booking: []
},
"INV-107": {
  invoice: ["INV-107.pdf"],
  return: ["RET-107A.pdf", "RET-107B.pdf"],
  credit: ["CR-107.pdf"],
  booking: []
},

    "INV-108": {
      invoice: ["INV-108.pdf"],
      return: ["RET-108.pdf"],
      credit: ["CR-108.pdf"],
      booking: ["BK-108.pdf"]
    },
    "INV-109": {
      invoice: ["INV-109.pdf"],
      return: ["RET-109.pdf"],
      credit: ["CR-109.pdf"],
      booking: ["BK-109.pdf"]
    },
    "INV-110": {
      invoice: ["INV-110.pdf"],
      return: ["RET-110.pdf"],
      credit: ["CR-110.pdf"],
      booking: []
    },
    "INV-111": {
      invoice: ["INV-111.pdf"],
      return: ["RET-111.pdf"],
      credit: ["CR-111.pdf"],
      booking: ["BK-111.pdf"]
    },
    "INV-112": {
      invoice: ["INV-112.pdf"],
      return: ["RET-112.pdf"],
      credit: ["CR-112.pdf"],
      booking: ["BK-112.pdf"]
    }


  },

  flowers: {
    "FL-201": {
      invoice: ["FL-201.pdf"],
      return: ["FR-201.pdf"],
      credit: [],
      booking: []
    },
    "FL-202": {
      invoice: ["FL-202.pdf"],
      return: ["FR-202.pdf"],
      credit: ["FC-202.pdf"],
      booking: ["BK-201.pdf"]
    },
    "FL-203": {
      invoice: ["FL-203.pdf"],
      return: ["FR-203.pdf"],
      credit: ["FC-203.pdf"],
     booking: ["BK-202.pdf"]
    }
  }
};

window.CreditloopDocuments = (() => {
  let overlay = null;
  let previousFocus = null;

  
  const categories = [
    { key: "all", label: "Alle" },
    { key: "invoice", label: "Rechnungen" },
    { key: "return", label: "Retouren" },
    { key: "credit", label: "Gutschriften" },
    { key: "booking", label: "Buchungsbelege" }
  ];


  function createNode(tag, text, className = "") {
    const node = document.createElement(tag);

    if (text !== undefined && text !== null) {
      node.textContent = text;
    }

    if (className) node.className = className;

    return node;
  }

  function close() {
    if (!overlay) return;

    overlay.remove();
    overlay = null;

    document.body.classList.remove(
      "document-modal-open"
    );

    if (previousFocus && previousFocus.isConnected) {
      previousFocus.focus();
    }

    previousFocus = null;
  }

    function open(
  invoiceId,
  preferredKind = "all",
  preferredFilename = null
) {
    const company = selectedScenario;
    const files = creditloopDemoPDFs[company]?.[invoiceId];

    if (!files) {
      console.warn(
        "Keine Demo-Dokumente für:",
        company,
        invoiceId
      );
      return;
    }

    // Vorheriges Fenster schließen, falls vorhanden.
    if (overlay) close();

    previousFocus = document.activeElement;

    overlay = createNode(
      "div",
      null,
      "document-overlay"
    );

    const dialog = createNode(
      "section",
      null,
      "document-dialog"
    );

    dialog.setAttribute("role", "dialog");
    dialog.setAttribute("aria-modal", "true");
    dialog.setAttribute(
      "aria-label",
      "Dokumentenarchiv zu " + invoiceId
    );
    dialog.setAttribute("tabindex", "-1");

    const header = createNode(
      "div",
      null,
      "document-modal-header"
    );

    const heading = createNode("div");

    heading.append(
      createNode(
        "small",
        "CREDITLOOP / DOKUMENTENARCHIV"
      ),
      createNode(
        "h2",
        "Dokumente zu " + invoiceId
      ),
      createNode(
        "p",
        demoScenarios[company].name
      )
    );

    const backButton = createNode(
      "button",
      "← Zurück zur vorherigen Ansicht",
      "document-close"
    );

    backButton.type = "button";
    backButton.addEventListener("click", close);

    header.append(heading, backButton);

    const categorySection = createNode(
      "div",
      null,
      "document-archive-section"
    );

    categorySection.appendChild(
      createNode(
        "div",
        "DOKUMENTART",
        "document-archive-label"
      )
    );

    const categoryTabs = createNode(
      "div",
      null,
      "document-category-tabs"
    );

    categorySection.appendChild(categoryTabs);

    const filesSection = createNode(
      "div",
      null,
      "document-archive-section document-files-section"
    );

    filesSection.appendChild(
      createNode(
        "div",
        "VERFÜGBARE DOKUMENTE",
        "document-archive-label"
      )
    );

    const fileList = createNode(
      "div",
      null,
      "document-file-list"
    );

    filesSection.appendChild(fileList);

    // Übersetzungsansicht der Konzeptdemo.
    // Noch keine automatische PDF-Übersetzung.
    let previewMode = "original";
    let targetLanguage = "de";
  

    const translationControls = createNode(
      "div",
      null,
      "document-translation-controls"
    );

    translationControls.style.display = "flex";
    translationControls.style.flexWrap = "wrap";
    translationControls.style.alignItems = "center";
    translationControls.style.gap = "10px";
    translationControls.style.marginTop = "16px";

    const originalButton = createNode(
      "button",
      "Original",
      "document-category-button active"
    );
    originalButton.type = "button";

    const translationButton = createNode(
      "button",
      "Übersetzung anzeigen",
      "document-category-button"
    );
    translationButton.type = "button";

    const languageSelect = createNode("select");
    languageSelect.className = "document-category-button";
    languageSelect.setAttribute(
      "aria-label",
      "Zielsprache der Übersetzung"
    );

    [
      ["de", "Deutsch"],
      ["en", "English"],
      ["it", "Italiano"],
      ["fr", "Français"]
    ].forEach(([value, label]) => {
      const option = createNode("option", label);
      option.value = value;
      languageSelect.appendChild(option);
    });

    languageSelect.value = targetLanguage;

    const translationHint = createNode(
      "small",
      "",
      "document-translation-hint"
    );
    translationHint.style.width = "100%";

    
function updateTranslationControls() {
  const available = Boolean(activeFile);

  translationButton.disabled = !available;
  languageSelect.disabled = !available;

  if (!available) {
    previewMode = "original";
  }

  originalButton.classList.toggle(
    "active",
    previewMode === "original"
  );

  translationButton.classList.toggle(
    "active",
    previewMode === "translation"
  );

  translationHint.textContent = available
    ? "Dokumentenübersetzung – Funktion in Entwicklung."
    : "Kein Dokument ausgewählt.";
}


    originalButton.addEventListener("click", () => {
      previewMode = "original";
      updateTranslationControls();
      renderPreview(activeFile);
    });

    translationButton.addEventListener("click", () => {
  if (!activeFile) return;

  previewMode = "translation";
  updateTranslationControls();
  renderPreview(activeFile);
});

    languageSelect.addEventListener("change", () => {
      targetLanguage = languageSelect.value;

      if (previewMode === "translation") {
        renderPreview(activeFile);
      }
    });

    translationControls.append(
      originalButton,
      translationButton,
      languageSelect,
      translationHint
    );

    filesSection.appendChild(translationControls);


    const preview = createNode(
      "div",
      null,
      "document-content"
    );

       let activeCategory = preferredKind;
    let activeFile = preferredFilename;

  function renderPreview(filename) {
  preview.replaceChildren();

  // Vorbereitete Übersetzungsansicht für INV-101.
  if (previewMode === "translation" && filename) {
  const notice = createNode(
    "div",
    null,
    "document-preview-empty"
  );

  notice.style.margin = "70px 20px 20px";
notice.style.padding = "32px";
notice.style.textAlign = "center";

  notice.append(
    createNode(
      "small",
      "CREDITLOOP / GEPLANTE FUNKTION"
    ),
    createNode(
      "h3",
      "Dokumentenübersetzung"
    ),
    createNode(
      "p",
      "Diese Funktion befindet sich derzeit in Entwicklung " +
      "und ist in der Konzeptdemo noch nicht verfügbar."
    ),
    createNode(
      "p",
      "Das Originaldokument bleibt unverändert und " +
      "kann jederzeit über „Original“ angezeigt werden."
    )
  );

  preview.appendChild(notice);
  return;
}

     


  const previewShell = createNode(
    "div",
    null,
    "document-preview-shell"
  );

  if (!filename) {
    const emptyCard = createNode(
      "div",
      null,
      "document-preview-empty"
    );

    emptyCard.append(
      createNode(
        "small",
        "DOKUMENTVORSCHAU"
      ),
      createNode(
        "h3",
        "Kein Musterbeleg vorhanden"
      ),
      createNode(
        "p",
        "Für diese Dokumentart ist bei diesem Vorgang aktuell kein PDF-Beleg hinterlegt."
      ),
      createNode(
        "p",
        "Sobald für diesen Dokumenttyp Demo- oder Originalbelege verfügbar sind, erscheinen sie hier an derselben Stelle."
      )
    );

    previewShell.appendChild(emptyCard);
    preview.appendChild(previewShell);

    const footer = createNode(
      "div",
      null,
      "document-pdf-actions"
    );

    footer.appendChild(
      createNode(
        "span",
        "Kein PDF hinterlegt"
      )
    );

    preview.appendChild(footer);
    return;
  }

  const url =
    "documents/" + encodeURIComponent(filename);

  const frame = createNode(
    "iframe",
    null,
    "document-pdf-frame"
  );

  frame.src = url;
  frame.title = "PDF-Vorschau: " + filename;

  previewShell.appendChild(frame);
  preview.appendChild(previewShell);

  const footer = createNode(
    "div",
    null,
    "document-pdf-actions"
  );

  footer.appendChild(
    createNode(
      "span",
      "Fiktiver Musterbeleg · Keine echte Rechnung"
    )
  );

  const openPDF = createNode(
    "a",
    "PDF separat öffnen ↗",
    "document-download-link"
  );

  openPDF.href = url;
  openPDF.target = "_blank";
  openPDF.rel = "noopener noreferrer";

  footer.appendChild(openPDF);
  preview.appendChild(footer);
}
    
    function renderFiles() {
      fileList.replaceChildren();

      // Beim Reiter "Alle" Dokumente nach Art gruppieren.
      const groups = activeCategory === "all"
        ? categories.filter(category => category.key !== "all")
        : categories.filter(category => category.key === activeCategory);

      const availableFiles = groups.flatMap(category =>
        (files[category.key] || []).map(filename => ({
          filename,
          category
        }))
      );

      if (availableFiles.length === 0) {
        activeFile = null;
        updateTranslationControls();

        fileList.appendChild(
          createNode(
            "p",
            "Keine Dokumente dieser Art hinterlegt.",
            "document-empty-state"
          )
        );

        renderPreview(null);
        return;
      }

      if (!availableFiles.some(item => item.filename === activeFile)) {
        activeFile = availableFiles[0].filename;
      }

      updateTranslationControls();

      for (const category of groups) {
        const categoryFiles = files[category.key] || [];


        for (const filename of categoryFiles) {
          const button = createNode(
            "button",
            filename,
            "document-file-button"
          );

          button.type = "button";

          const selected = filename === activeFile;

          button.classList.toggle("active", selected);
          button.setAttribute("aria-pressed", String(selected));

          button.addEventListener("click", () => {
            activeFile = filename;
            previewMode = "original";
            renderFiles();
          });

          fileList.appendChild(button);
        }
      }

      renderPreview(activeFile);
    }

     

    function renderCategories() {
      categoryTabs.replaceChildren();

      categories.forEach(category => {
        const button = createNode(
          "button",
          category.label,
          "document-category-button"
        );

        button.type = "button";

        const selected =
          category.key === activeCategory;

        button.classList.toggle("active", selected);
        button.setAttribute(
          "aria-pressed",
          String(selected)
        );

        button.addEventListener("click", () => {
          activeCategory = category.key;
          activeFile = null;

          renderCategories();
          renderFiles();
        });

        categoryTabs.appendChild(button);
      });
    }

    if (!categories.some(
      category => category.key === activeCategory
    )) {
      activeCategory = "invoice";
    }

    dialog.append(
      header,
      categorySection,
      filesSection,
      preview
    );

    overlay.appendChild(dialog);

    overlay.addEventListener("click", event => {
      if (event.target === overlay) {
        close();
      }
    });

    document.body.appendChild(overlay);

    document.body.classList.add(
      "document-modal-open"
    );

    renderCategories();
    renderFiles();
    backButton.focus();
  }

  document.addEventListener("keydown", event => {
    if (event.key === "Escape" && overlay) {
      close();
    }
  });

  return { open, close };
})();
