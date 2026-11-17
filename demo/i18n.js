"use strict";

// ClaraSR – Übersetzungen für DE / EN / IT / FR.
// Technische Schnittstellen und Speicherkennungen bleiben erhalten.

(() => {
  const translations = {
    de: {
      website: "← Zur Website",
      overview: "Übersicht",
      reconcile: "Belege & Abgleich",
      cases: "Fälle",
      settlement: "Gutschriften & Ausgleich",
      eyebrow: "PRODUKTDEMONSTRATION",
      intro: "Erleben Sie an fiktiven Geschäftsvorgängen, wie ClaraSR genehmigte Retouren mit ausgestellten Lieferantengutschriften vergleicht und mögliche Abweichungen sichtbar macht.",
      topbarDemo: "INTERAKTIVE PRODUKTDEMO",
      quickOverview: "KURZÜBERBLICK",
      howDemoWorks: "So funktioniert die Demo",
      demoScope: "FUNKTIONSUMFANG DER DEMO",
      demoWorkspace: "Belege & Abgleich",
      availableRecords: "Verfügbare Belege",
      readyToReconcile: "Bereit für den Abgleich?",
      caseDetails: "Falldetails",
      demoResults: "DEMO-ERGEBNISSE",
      languageLabel: "SPRACHE",
      demoScopeTitle: "Was hier gezeigt wird",
      scenariosLabel: "DEMO-UNTERNEHMEN",
      demoCompanyTitle: "Angemeldetes Demo-Unternehmen",
      sourceRecordsLabel: "02 / QUELLDATEN",
      workspaceTag: "LOKALE DEMO",
      recordsDescription: "Diese Tabellen zeigen die Daten, die unser Abgleichsystem tatsächlich auswertet.",
      runDescription: "Vergleichen Sie die genehmigten Retouren mit den erfassten Gutschriften.",
      footerProduct: "Lieferantenreklamationen und Gutschriftenabgleich",
      potentialDifference: "Potenzielle Betragsdifferenz",
      noConfirmedClaim: "Keine bestätigte Forderung",
      checkedCases: "Verglichene Vorgänge",
      reconciliationResults: "Ergebnisse des Abgleichs",
      flaggedCases: "Auffällige Vorgänge",
      manualReview: "Manuelle Prüfung erforderlich",
      detectedCases: "Erkannte Vorgänge",
      selectCaseHint: "Wählen Sie einen Vorgang aus, um die Erklärung und die zugehörigen Dokumentreferenzen anzusehen.",
      selectCaseDetail: "Wählen Sie rechts einen Vorgang aus.",
      settlementDescription: "Prüfen Sie, welche ausgestellten Lieferantengutschriften bereits Buchungen zugeordnet werden konnten.",
      backToOverview: "← Zur Übersicht",
      caseResultsTitle: "Fälle",
      settlementResultsTitle: "Gutschriften & Ausgleich",
      caseOverviewHint: "Wählen Sie einen Vorgang aus, um seine Details und die zugehörigen Dokumente einzusehen.",
      settlementCredit: "Gutschrift",
      settlementSupplier: "Lieferant",
      settlementIssued: "Ausgestellter Betrag",
      settlementAllocated: "Buchhalterisch zugeordnet",
      settlementOpen: "Noch nicht zugeordnet",
      settlementStatus: "Zuordnungsstatus",
      caseDisclaimerTitle: "Wichtig:",
      caseDisclaimer: "Eine Differenz in den importierten Beispieldaten ist kein Nachweis für eine tatsächliche Forderung. Gutschriftzuordnung, Verrechnung und Zahlungseingang müssen gesondert geprüft werden.",
      settlementDisclaimerTitle: "Wichtiger Hinweis:",
      settlementDisclaimer: "Buchungen werden hier anhand künstlicher Beispieldaten zugeordnet. Weder Rückzahlungen noch wirksame Verrechnungen wurden unabhängig nachgewiesen.",
      recoveryReview: "Reklamationsprüfung",
      caseWorkflow: "Fallbearbeitung",
      workflowIntro: "Bearbeiten Sie diesen fiktiven Fall und dokumentieren Sie die nächsten Prüfschritte.",
      workflowStatusLabel: "Bearbeitungsstand",
      workflowNoteLabel: "Interne Fallnotiz",
      workflowNotePlaceholder: "Zum Beispiel: Lieferantenkontoauszug anfordern.",
      workflowSave: "Eintrag speichern",
      workflowHistory: "Ereignisverlauf",
      statusNew: "Noch nicht bearbeitet",
      statusReview: "Unterlagen werden geprüft",
      statusContact: "Lieferantenklärung läuft",
      statusWaiting: "Auf weitere Nachweise warten",
      statusClosed: "Abgeschlossen (Bearbeitung)"
    },

    en: {
      website: "← Back to website",
      overview: "Overview",
      reconcile: "Documents & reconciliation",
      cases: "Cases",
      settlement: "Credit notes & settlement",
      eyebrow: "PRODUCT DEMONSTRATION",
      intro: "Explore how ClaraSR compares approved returns with supplier credit notes and highlights potential discrepancies using fictional business records.",
      topbarDemo: "INTERACTIVE PRODUCT DEMO",
      quickOverview: "QUICK OVERVIEW",
      howDemoWorks: "How this demo works",
      demoScope: "DEMO SCOPE",
      demoWorkspace: "Documents & reconciliation",
      availableRecords: "Available records",
      readyToReconcile: "Ready to reconcile?",
      caseDetails: "Case Details",
      demoResults: "DEMO RESULTS",
      languageLabel: "LANGUAGE",
      demoScopeTitle: "What's included",
      scenariosLabel: "DEMO COMPANY",
      demoCompanyTitle: "Selected demo company",
      sourceRecordsLabel: "02 / SOURCE RECORDS",
      workspaceTag: "LOCAL DEMO",
      recordsDescription: "These tables show the records actually evaluated by our reconciliation system.",
      runDescription: "Compare approved returns with recorded supplier credit notes.",
      footerProduct: "Supplier Claims & Credit Reconciliation",
      potentialDifference: "Potential amount discrepancy",
      noConfirmedClaim: "No confirmed claim",
      checkedCases: "Reviewed cases",
      reconciliationResults: "Reconciliation results",
      flaggedCases: "Flagged cases",
      manualReview: "Manual review required",
      detectedCases: "Identified cases",
      selectCaseHint: "Select a case to view its explanation and document references.",
      selectCaseDetail: "Select a case on the right.",
      settlementDescription: "Review which issued supplier credit notes have been matched to accounting entries.",
      backToOverview: "← Back to overview",
      caseResultsTitle: "Cases",
      settlementResultsTitle: "Credit notes & settlement",
      caseOverviewHint: "Select a case to view its details and related documents.",
      settlementCredit: "Credit note",
      settlementSupplier: "Supplier",
      settlementIssued: "Issued amount",
      settlementAllocated: "Allocated in accounting records",
      settlementOpen: "Not yet allocated",
      settlementStatus: "Allocation status",
      caseDisclaimerTitle: "Important:",
      caseDisclaimer: "A discrepancy in the fictional imported data does not establish an actual claim. Credit allocation, offsetting and receipt of payment must be verified separately.",
      settlementDisclaimerTitle: "Important notice:",
      settlementDisclaimer: "Accounting entries are matched using fictional sample data. Neither refunds nor legally effective offsets have been independently verified.",
      recoveryReview: "Claim review",
      caseWorkflow: "Case workflow",
      workflowIntro: "Review this fictional case and document the next steps.",
      workflowStatusLabel: "Processing status",
      workflowNoteLabel: "Internal case note",
      workflowNotePlaceholder: "For example: Request a supplier account statement.",
      workflowSave: "Save entry",
      workflowHistory: "Activity history",
      statusNew: "Not yet processed",
      statusReview: "Documents under review",
      statusContact: "Clarification with supplier in progress",
      statusWaiting: "Awaiting further evidence",
      statusClosed: "Processing completed"
    },

    it: {
      website: "← Torna al sito",
      overview: "Panoramica",
      reconcile: "Documenti e riconciliazione",
      cases: "Casi",
      settlement: "Note di credito e regolamento",
      eyebrow: "DIMOSTRAZIONE DEL PRODOTTO",
      intro: "Scopra come ClaraSR confronta i resi approvati con le note di credito dei fornitori e segnala possibili differenze attraverso dati aziendali fittizi.",
      topbarDemo: "DEMO INTERATTIVA DEL PRODOTTO",
      quickOverview: "PANORAMICA RAPIDA",
      howDemoWorks: "Come funziona la demo",
      demoScope: "FUNZIONALITÀ DELLA DEMO",
      demoWorkspace: "Documenti e riconciliazione",
      availableRecords: "Documenti disponibili",
      readyToReconcile: "Pronti per la riconciliazione?",
      caseDetails: "Dettagli del caso",
      demoResults: "RISULTATI DELLA DEMO",
      languageLabel: "LINGUA",
      demoScopeTitle: "Cosa mostra la demo",
      scenariosLabel: "AZIENDA DIMOSTRATIVA",
      demoCompanyTitle: "Azienda demo selezionata",
      sourceRecordsLabel: "02 / DATI DI ORIGINE",
      workspaceTag: "DEMO LOCALE",
      recordsDescription: "Queste tabelle mostrano i dati effettivamente analizzati dal nostro sistema di riconciliazione.",
      runDescription: "Confronti i resi approvati con le note di credito dei fornitori registrate.",
      footerProduct: "Reclami ai fornitori e riconciliazione delle note di credito",
      potentialDifference: "Differenza potenziale negli importi",
      noConfirmedClaim: "Nessun credito confermato",
      checkedCases: "Operazioni confrontate",
      reconciliationResults: "Risultati della riconciliazione",
      flaggedCases: "Casi con anomalie",
      manualReview: "Verifica manuale necessaria",
      detectedCases: "Casi individuati",
      selectCaseHint: "Selezioni un caso per visualizzare la spiegazione e i riferimenti ai documenti.",
      selectCaseDetail: "Selezioni un caso sulla destra.",
      settlementDescription: "Verifichi quali note di credito dei fornitori emesse sono già state associate alle registrazioni contabili.",
      backToOverview: "← Torna alla panoramica",
      caseResultsTitle: "Casi",
      settlementResultsTitle: "Note di credito e regolamento",
      caseOverviewHint: "Selezioni un caso per consultarne i dettagli e i documenti associati.",
      settlementCredit: "Nota di credito",
      settlementSupplier: "Fornitore",
      settlementIssued: "Importo emesso",
      settlementAllocated: "Abbinato contabilmente",
      settlementOpen: "Non ancora abbinato",
      settlementStatus: "Stato dell’abbinamento",
      caseDisclaimerTitle: "Importante:",
      caseDisclaimer: "Una differenza nei dati fittizi importati non costituisce prova di un credito effettivo. L'abbinamento delle note di credito, la compensazione e la ricezione dei pagamenti devono essere verificati separatamente.",
      settlementDisclaimerTitle: "Avviso importante:",
      settlementDisclaimer: "Le registrazioni contabili vengono abbinate sulla base di dati fittizi. Non è stato verificato in modo indipendente alcun rimborso o compensazione giuridicamente efficace.",
      recoveryReview: "Verifica del reclamo",
      caseWorkflow: "Gestione del caso",
      workflowIntro: "Esamini questo caso fittizio e documenti i prossimi passaggi di verifica.",
      workflowStatusLabel: "Stato di lavorazione",
      workflowNoteLabel: "Nota interna sul caso",
      workflowNotePlaceholder: "Ad esempio: richiedere un estratto conto al fornitore.",
      workflowSave: "Salva la registrazione",
      workflowHistory: "Cronologia delle attività",
      statusNew: "Non ancora elaborato",
      statusReview: "Documenti in fase di verifica",
      statusContact: "Chiarimenti con il fornitore in corso",
      statusWaiting: "In attesa di ulteriori prove",
      statusClosed: "Lavorazione completata"
    },

    fr: {
      website: "← Retour au site",
      overview: "Vue d’ensemble",
      reconcile: "Documents et rapprochement",
      cases: "Dossiers",
      settlement: "Avoirs et règlement",
      eyebrow: "DÉMONSTRATION DU PRODUIT",
      intro: "Découvrez comment ClaraSR compare les retours approuvés aux avoirs fournisseurs et signale les écarts potentiels à partir de données commerciales fictives.",
      topbarDemo: "DÉMONSTRATION INTERACTIVE DU PRODUIT",
      quickOverview: "APERÇU RAPIDE",
      howDemoWorks: "Comment fonctionne la démo",
      demoScope: "FONCTIONNALITÉS DE LA DÉMO",
      demoWorkspace: "Documents et rapprochement",
      availableRecords: "Documents disponibles",
      readyToReconcile: "Prêt pour le rapprochement ?",
      caseDetails: "Détails du dossier",
      demoResults: "RÉSULTATS DE LA DÉMO",
      languageLabel: "LANGUE",
      demoScopeTitle: "Ce que montre la démo",
      scenariosLabel: "ENTREPRISE DE DÉMONSTRATION",
      demoCompanyTitle: "Entreprise de démonstration sélectionnée",
      sourceRecordsLabel: "02 / DONNÉES SOURCES",
      workspaceTag: "DÉMO LOCALE",
      recordsDescription: "Ces tableaux présentent les données réellement analysées par notre système de rapprochement.",
      runDescription: "Comparez les retours approuvés avec les avoirs fournisseurs enregistrés.",
      footerProduct: "Réclamations fournisseurs et rapprochement des avoirs",
      potentialDifference: "Écart de montant potentiel",
      noConfirmedClaim: "Aucune créance confirmée",
      checkedCases: "Opérations comparées",
      reconciliationResults: "Résultats du rapprochement",
      flaggedCases: "Dossiers présentant des anomalies",
      manualReview: "Vérification manuelle nécessaire",
      detectedCases: "Dossiers identifiés",
      selectCaseHint: "Sélectionnez un dossier pour consulter son explication et ses références documentaires.",
      selectCaseDetail: "Sélectionnez un dossier à droite.",
      settlementDescription: "Vérifiez quels avoirs fournisseurs émis ont déjà été associés à des écritures comptables.",
      backToOverview: "← Retour à la vue d’ensemble",
      caseResultsTitle: "Dossiers",
      settlementResultsTitle: "Avoirs et règlement",
      caseOverviewHint: "Sélectionnez un dossier pour consulter ses détails et les documents associés.",
      settlementCredit: "Avoir",
      settlementSupplier: "Fournisseur",
      settlementIssued: "Montant émis",
      settlementAllocated: "Affecté en comptabilité",
      settlementOpen: "Pas encore affecté",
      settlementStatus: "Statut d’affectation",
      caseDisclaimerTitle: "Important :",
      caseDisclaimer: "Un écart dans les données fictives importées ne prouve pas l'existence d'une créance réelle. L'affectation des avoirs, la compensation et la réception des paiements doivent être vérifiées séparément.",
      settlementDisclaimerTitle: "Avis important :",
      settlementDisclaimer: "Les écritures comptables sont rapprochées à partir de données fictives. Aucun remboursement ni aucune compensation juridiquement effective n'ont fait l'objet d'une vérification indépendante.",
      recoveryReview: "Examen de la réclamation",
      caseWorkflow: "Gestion du dossier",
      workflowIntro: "Examinez ce dossier fictif et documentez les prochaines étapes de vérification.",
      workflowStatusLabel: "État de traitement",
      workflowNoteLabel: "Note interne du dossier",
      workflowNotePlaceholder: "Par exemple : demander un relevé de compte au fournisseur.",
      workflowSave: "Enregistrer l’entrée",
      workflowHistory: "Historique des activités",
      statusNew: "Pas encore traité",
      statusReview: "Documents en cours de vérification",
      statusContact: "Clarification avec le fournisseur en cours",
      statusWaiting: "En attente de justificatifs supplémentaires",
      statusClosed: "Traitement terminé"
    }
  };

  function translate(key) {
    const language = document.documentElement.lang;
    const dictionary = translations[language] || translations.de;

    return dictionary[key] || translations.de[key] || key;
  }

  window.CreditloopI18n = {
    translate
  };

  function setText(selector, value) {
    const node = document.querySelector(selector);
    if (node) node.textContent = value;
  }

  function applyLanguage(language) {
    const dictionary = translations[language];
    if (!dictionary) return;

    document.documentElement.lang = language;

    const demoTitles = {
      de: "Interaktive Demo | ClaraSR",
      en: "Interactive demo | ClaraSR",
      it: "Demo interattiva | ClaraSR",
      fr: "Démo interactive | ClaraSR"
    };

    document.title = demoTitles[language] || demoTitles.de;

    setText(".topbar .back-link", dictionary.website);
    setText('[data-view="overview"]', dictionary.overview);
    setText('[data-view="reconcile"]', dictionary.reconcile);
    setText('[data-view="cases"]', dictionary.cases);
    setText('[data-view="settlement"]', dictionary.settlement);

    const eyebrow = document.querySelector(".intro .eyebrow");

    if (eyebrow) {
      const dot = eyebrow.querySelector(".eyebrow-dot");

      eyebrow.replaceChildren();

      if (dot) {
        eyebrow.appendChild(dot);
      }

      eyebrow.appendChild(
        document.createTextNode(" " + dictionary.eyebrow)
      );
    }

    setText(".intro-text", dictionary.intro);

    setText(".topbar-label", dictionary.topbarDemo);
    setText(".overview-card-primary .section-label", dictionary.quickOverview);
    setText(".overview-card-primary h2", dictionary.howDemoWorks);
    setText(".overview-card:nth-child(2) .section-label", dictionary.demoScope);
    setText("#workspace-title", dictionary.demoWorkspace);
    setText(".data-heading h3", dictionary.availableRecords);
    setText(".run-area h3", dictionary.readyToReconcile);
    setText(".detail-header .section-label", dictionary.caseDetails);

    document.querySelectorAll(".results-badge").forEach(node => {
      node.textContent = dictionary.demoResults;
    });

    setText(".language-picker-label", dictionary.languageLabel);
    setText(".overview-card:nth-child(2) h3", dictionary.demoScopeTitle);
    setText(".overview-card:nth-child(3) .section-label", dictionary.scenariosLabel);
    setText(".overview-card:nth-child(3) h3", dictionary.demoCompanyTitle);
    setText(".data-heading .section-label", dictionary.sourceRecordsLabel);
    setText(".workspace-tag", dictionary.workspaceTag);
    setText(".data-heading p", dictionary.recordsDescription);
    setText(".run-area p", dictionary.runDescription);

    const footerProduct = document.querySelector(
      ".demo-footer span:first-child"
    );

    if (footerProduct) {
      footerProduct.textContent =
        "ClaraSR — " + dictionary.footerProduct;
    }

    // Fallübersicht: Zusammenfassung.
    setText(
      ".summary-card:nth-child(1) > span",
      dictionary.potentialDifference
    );

    setText(
      ".summary-card:nth-child(1) > small",
      dictionary.noConfirmedClaim
    );

    setText(
      ".summary-card:nth-child(2) > span",
      dictionary.checkedCases
    );

    setText(
      ".summary-card:nth-child(2) > small",
      dictionary.reconciliationResults
    );

    setText(
      ".summary-card:nth-child(3) > span",
      dictionary.flaggedCases
    );

    setText(
      ".summary-card:nth-child(3) > small",
      dictionary.manualReview
    );

    // Fallübersicht: Beschriftungen.
    setText(".cases-panel h3", dictionary.detectedCases);
    setText(".cases-panel .panel-intro", dictionary.selectCaseHint);

    // Leeren Detailbereich nur aktualisieren,
    // wenn der Hinweis noch vorhanden ist.
    setText(
      ".detail-panel .empty-detail",
      dictionary.selectCaseDetail
    );

    // Gutschriften und Ausgleich.
    setText(
      '[data-demo-view="settlement"] .results-heading p',
      dictionary.settlementDescription
    );

    // Zurück-Navigation.
    document.querySelectorAll(
      '[data-demo-view="cases"] .workspace-return, ' +
      '[data-demo-view="settlement"] .workspace-return'
    ).forEach(node => {
      node.textContent = dictionary.backToOverview;
    });

    // Ergebnisüberschriften.
    setText(
      "#results-company-title",
      dictionary.caseResultsTitle
    );

    setText(
      "#settlement-company-title",
      dictionary.settlementResultsTitle
    );

    setText(
      ".cases-panel .panel-intro",
      dictionary.caseOverviewHint
    );

    // Überschriften der Gutschriftentabelle.
    const settlementHeaders = [
      dictionary.settlementCredit,
      dictionary.settlementSupplier,
      dictionary.settlementIssued,
      dictionary.settlementAllocated,
      dictionary.settlementOpen,
      dictionary.settlementStatus
    ];

    document.querySelectorAll(
      "#settlement-demo .data-table thead th"
    ).forEach((header, index) => {
      if (settlementHeaders[index]) {
        header.textContent = settlementHeaders[index];
      }
    });

    // Hinweise unter Fallübersicht und Gutschriften.
    const disclaimers = [
      {
        selector: '[data-demo-view="cases"] .results-disclaimer',
        title: dictionary.caseDisclaimerTitle,
        message: dictionary.caseDisclaimer
      },
      {
        selector: '[data-demo-view="settlement"] .results-disclaimer',
        title: dictionary.settlementDisclaimerTitle,
        message: dictionary.settlementDisclaimer
      }
    ];

    disclaimers.forEach(item => {
      const node = document.querySelector(item.selector);
      if (!node) return;

      node.replaceChildren();

      const strong = document.createElement("strong");
      strong.textContent = item.title;

      node.append(
        strong,
        document.createTextNode(" " + item.message)
      );
    });

    // Bereits geöffnete Fallakte aktualisieren.
    setText(
      ".recovery-review h4",
      dictionary.recoveryReview
    );

    setText(
      ".cl-workflow-events > h5",
      dictionary.workflowHistory
    );

    setText(
      ".cl-workflow-host .case-workflow > h4",
      dictionary.caseWorkflow
    );

    setText(
      ".cl-workflow-host .workflow-intro",
      dictionary.workflowIntro
    );

    setText(
      ".cl-workflow-host .workflow-label",
      dictionary.workflowStatusLabel
    );

    const workflowLabels = document.querySelectorAll(
      ".cl-workflow-host .workflow-label"
    );

    if (workflowLabels[1]) {
      workflowLabels[1].textContent = dictionary.workflowNoteLabel;
    }

    const noteInput = document.querySelector(
      ".cl-workflow-host .workflow-textarea"
    );

    if (noteInput) {
      noteInput.placeholder = dictionary.workflowNotePlaceholder;
    }

    setText(
      ".cl-workflow-host .workflow-save",
      dictionary.workflowSave
    );

    const statusKeys = {
      new: "statusNew",
      review: "statusReview",
      contact: "statusContact",
      waiting: "statusWaiting",
      closed: "statusClosed"
    };

    document.querySelectorAll(
      ".case-workflow .workflow-select option"
    ).forEach(option => {
      const key = statusKeys[option.value];

      if (key && dictionary[key]) {
        option.textContent = dictionary[key];
      }
    });

    // Bearbeitungsstand direkt in der Fallübersicht.
    document.querySelectorAll(
      ".case-quick-status-label"
    ).forEach(label => {
      label.textContent = dictionary.workflowStatusLabel;
    });

    // Statusoptionen in den Vorgangskarten.
    document.querySelectorAll(
      ".case-quick-status-select option"
    ).forEach(option => {
      const key = statusKeys[option.value];

      if (key && dictionary[key]) {
        option.textContent = dictionary[key];
      }
    });

    try {
      localStorage.setItem(
        "creditloop-demo-language",
        language
      );
    } catch (error) {
      console.warn(
        "Sprache konnte nicht gespeichert werden.",
        error
      );
    }
  }

  const select = document.getElementById(
    "demo-language-select"
  );

  if (!select) return;

  let savedLanguage = "de";

  try {
    savedLanguage =
      localStorage.getItem("creditloop-demo-language") || "de";
  } catch (error) {
    // Standardsprache Deutsch bleibt aktiv.
  }

  if (!translations[savedLanguage]) {
    savedLanguage = "de";
  }

  select.value = savedLanguage;
  applyLanguage(savedLanguage);

  select.addEventListener("change", () => {
    applyLanguage(select.value);
  });
})();
"use strict";

// Ergänzende Übersetzungen der Ergebnisanzeigen.
// Freitextnotizen und gespeicherte Falldaten bleiben unverändert.

(() => {
  const rows = [
    ["Neu", "New", "Nuovo", "Nouveau"],
    ["Suchen", "Search", "Cercare", "Rechercher"],
    [
      "INV-109 oder Lieferant …",
      "INV-109 or supplier …",
      "INV-109 o fornitore …",
      "INV-109 ou fournisseur …"
    ],
    [
      "Abschlussprüfung",
      "Closure review",
      "Verifica della chiusura",
      "Vérification de la clôture"
    ],
    [
      "Prüfen Sie den ausgewählten Vorgang und dokumentieren Sie das Abschlussergebnis.",
      "Review the selected case and document the closure outcome.",
      "Esamini il caso selezionato e documenti l’esito della chiusura.",
      "Examinez le dossier sélectionné et documentez le résultat de la clôture."
    ],
    [
      "Vorgang auswählen",
      "Select case",
      "Selezionare un caso",
      "Sélectionner un dossier"
    ],
    [
      "Keine Vorgänge verfügbar",
      "No cases available",
      "Nessun caso disponibile",
      "Aucun dossier disponible"
    ],
    [
      "Interaktive Konzeptdemo",
      "Interactive concept demo",
      "Demo concettuale interattiva",
      "Démo conceptuelle interactive"
    ],
    [
      "Ausschließlich erfundene Daten. Keine echten Unternehmen, Kundenresultate oder bestätigten Rückforderungen. Es werden keine eigenen Dateien hochgeladen.",
      "Fictional data only. No real companies, customer results or confirmed recovery claims. No user files are uploaded.",
      "Solo dati fittizi. Nessuna azienda reale, nessun risultato di clienti e nessuna richiesta di recupero confermata. Non vengono caricati file propri.",
      "Données fictives uniquement. Aucune entreprise réelle, aucun résultat client et aucune demande de recouvrement confirmée. Aucun fichier personnel n’est téléversé."
    ],
    [
      "Diese lokale Konzeptdemo zeigt an fiktiven Beispieldaten, wie ClaraSR genehmigte Retouren, ausgestellte Lieferantengutschriften und deren buchhalterische Zuordnung nachvollziehbar gegenüberstellt.",
      "This local concept demo uses fictional sample data to show how ClaraSR transparently compares approved returns, issued supplier credit notes and their accounting allocations.",
      "Questa demo concettuale locale utilizza dati fittizi per mostrare come ClaraSR confronta in modo trasparente i resi approvati, le note di credito dei fornitori emesse e i relativi abbinamenti contabili.",
      "Cette démo conceptuelle locale utilise des données fictives pour montrer comment ClaraSR compare de manière transparente les retours approuvés, les avoirs fournisseurs émis et leurs affectations comptables."
    ],
    [
      "Abgleich:",
      "Reconciliation:",
      "Riconciliazione:",
      "Rapprochement :"
    ],
    ["Fälle:", "Cases:", "Casi:", "Dossiers :"],
    [
      "Settlement:",
      "Credit settlement:",
      "Regolamento delle note di credito:",
      "Règlement des avoirs :"
    ],
    [
      "Beispieldaten auswählen und den Demo-Abgleich starten.",
      "Select sample data and run the demo reconciliation.",
      "Selezioni i dati di esempio e avvii la riconciliazione demo.",
      "Sélectionnez les données d’exemple et lancez le rapprochement de démonstration."
    ],
    [
      "Auffällige Vorgänge prüfen, Bearbeitungsstand setzen und Notizen dokumentieren.",
      "Review flagged cases, set the processing status and record notes.",
      "Esamini i casi con anomalie, imposti lo stato di lavorazione e registri le note.",
      "Examinez les dossiers présentant des anomalies, définissez l’état de traitement et consignez des notes."
    ],
    [
      "Bereits ausgestellte Gutschriften auf Zuordnung und offenen Betrag prüfen.",
      "Review issued credit notes for allocations and outstanding amounts.",
      "Verifichi gli abbinamenti e gli importi residui delle note di credito già emesse.",
      "Vérifiez les affectations et les soldes restants des avoirs déjà émis."
    ],
    [
      "Genehmigte Retouren vs. erfasste Gutschriften",
      "Approved returns compared with recorded credit notes",
      "Resi approvati a confronto con le note di credito registrate",
      "Retours approuvés comparés aux avoirs enregistrés"
    ],
    [
      "Potenzielle Differenzen als prüfbare Fälle",
      "Potential discrepancies presented as cases for review",
      "Differenze potenziali presentate come casi da verificare",
      "Écarts potentiels présentés sous forme de dossiers à examiner"
    ],
    [
      "Dokumentreferenzen und Bearbeitungsstatus",
      "Document references and processing status",
      "Riferimenti ai documenti e stato di lavorazione",
      "Références documentaires et état de traitement"
    ],
    [
      "Zuordnung ausgestellter Gutschriften zu Buchungen",
      "Allocation of issued credit notes to accounting entries",
      "Abbinamento delle note di credito emesse alle registrazioni contabili",
      "Affectation des avoirs émis aux écritures comptables"
    ],
    [
      "Maschinenbau & Ersatzteile",
      "Mechanical engineering & spare parts",
      "Meccanica e ricambi",
      "Construction mécanique et pièces détachées"
    ],
    [
      "Alle Daten sind frei erfunden und dienen nur zur Veranschaulichung der Produktlogik.",
      "All data is fictional and serves only to illustrate how the product works.",
      "Tutti i dati sono fittizi e servono esclusivamente a illustrare la logica del prodotto.",
      "Toutes les données sont fictives et servent uniquement à illustrer le fonctionnement du produit."
    ],
    [
      "Keine positive Betragsdifferenz",
      "No positive amount discrepancy",
      "Nessuna differenza positiva di importo",
      "Aucun écart de montant positif"
    ],
    ["Alles im", "Everything in", "Tutto sotto", "Tout en"],
    ["Blick.", "view.", "controllo.", "vue."],
    [
      "CLARASR / DOKUMENTENARCHIV",
      "CLARASR / DOCUMENT ARCHIVE",
      "CLARASR / ARCHIVIO DOCUMENTI",
      "CLARASR / ARCHIVES DOCUMENTAIRES"
    ],
    [
      "← Zurück zur vorherigen Ansicht",
      "← Back to previous view",
      "← Tornare alla vista precedente",
      "← Retour à la vue précédente"
    ],
    [
      "DOKUMENTART",
      "DOCUMENT TYPE",
      "TIPO DI DOCUMENTO",
      "TYPE DE DOCUMENT"
    ],
    [
      "VERFÜGBARE DOKUMENTE",
      "AVAILABLE DOCUMENTS",
      "DOCUMENTI DISPONIBILI",
      "DOCUMENTS DISPONIBLES"
    ],
    ["Alle", "All", "Tutti", "Tous"],
    [
      "Buchungsbelege",
      "Accounting records",
      "Documenti contabili",
      "Pièces comptables"
    ],
    ["Original", "Original", "Originale", "Original"],
    [
      "Übersetzung anzeigen",
      "Show translation",
      "Mostrare la traduzione",
      "Afficher la traduction"
    ],
    [
      "Zielsprache der Übersetzung",
      "Translation target language",
      "Lingua di destinazione della traduzione",
      "Langue cible de la traduction"
    ],
    ["Deutsch", "German", "Tedesco", "Allemand"],
    ["English", "English", "Inglese", "Anglais"],
    ["Italiano", "Italian", "Italiano", "Italien"],
    ["Français", "French", "Francese", "Français"],
    [
      "Dokumentenübersetzung – Funktion in Entwicklung.",
      "Document translation – feature under development.",
      "Traduzione dei documenti – funzione in sviluppo.",
      "Traduction des documents – fonctionnalité en développement."
    ],
    [
      "Kein Dokument ausgewählt.",
      "No document selected.",
      "Nessun documento selezionato.",
      "Aucun document sélectionné."
    ],
    [
      "CLARASR / GEPLANTE FUNKTION",
      "CLARASR / PLANNED FEATURE",
      "CLARASR / FUNZIONE PREVISTA",
      "CLARASR / FONCTIONNALITÉ PRÉVUE"
    ],
    [
      "Dokumentenübersetzung",
      "Document translation",
      "Traduzione dei documenti",
      "Traduction des documents"
    ],
    [
      "Diese Funktion befindet sich derzeit in Entwicklung und ist in der Konzeptdemo noch nicht verfügbar.",
      "This feature is under development and is not yet available in the concept demo.",
      "Questa funzione è in sviluppo e non è ancora disponibile nella demo concettuale.",
      "Cette fonctionnalité est en développement et n’est pas encore disponible dans la démo conceptuelle."
    ],
    [
      "Das Originaldokument bleibt unverändert und kann jederzeit über „Original“ angezeigt werden.",
      "The original document remains unchanged and can be displayed at any time using “Original”.",
      "Il documento originale rimane invariato e può essere visualizzato in qualsiasi momento tramite «Originale».",
      "Le document original reste inchangé et peut être affiché à tout moment via «Original»."
    ],
    [
      "DOKUMENTVORSCHAU",
      "DOCUMENT PREVIEW",
      "ANTEPRIMA DEL DOCUMENTO",
      "APERÇU DU DOCUMENT"
    ],
    [
      "Kein Musterbeleg vorhanden",
      "No sample document available",
      "Nessun documento di esempio disponibile",
      "Aucun document d’exemple disponible"
    ],
    [
      "Für diese Dokumentart ist bei diesem Vorgang aktuell kein PDF-Beleg hinterlegt.",
      "No PDF is currently available for this document type in this case.",
      "Per questo tipo di documento non è attualmente disponibile alcun PDF per questo caso.",
      "Aucun PDF n’est actuellement disponible pour ce type de document dans ce dossier."
    ],
    [
      "Sobald für diesen Dokumenttyp Demo- oder Originalbelege verfügbar sind, erscheinen sie hier an derselben Stelle.",
      "Demo or original documents of this type will appear here when available.",
      "I documenti demo o originali di questo tipo appariranno qui quando saranno disponibili.",
      "Les documents de démonstration ou originaux de ce type apparaîtront ici dès qu’ils seront disponibles."
    ],
    [
      "Kein PDF hinterlegt",
      "No PDF available",
      "Nessun PDF disponibile",
      "Aucun PDF disponible"
    ],
    [
      "Fiktiver Musterbeleg · Keine echte Rechnung",
      "Fictional sample document · Not a real invoice",
      "Documento di esempio fittizio · Non è una fattura reale",
      "Document d’exemple fictif · Aucune facture réelle"
    ],
    [
      "PDF separat öffnen ↗",
      "Open PDF separately ↗",
      "Aprire il PDF separatamente ↗",
      "Ouvrir le PDF séparément ↗"
    ],
    [
      "Keine Dokumente dieser Art hinterlegt.",
      "No documents of this type available.",
      "Nessun documento di questo tipo disponibile.",
      "Aucun document de ce type disponible."
    ],

    // Selbst erzeugter PDF-Prüfbericht.
    [
      "CLARASR / VORLAEUFIGE FALLAKTE",
      "CLARASR / PRELIMINARY CASE FILE",
      "CLARASR / FASCICOLO PROVVISORIO",
      "CLARASR / DOSSIER PROVISOIRE"
    ],
    [
      "FALLUEBERSICHT",
      "CASE OVERVIEW",
      "PANORAMICA DEL CASO",
      "APERÇU DU DOSSIER"
    ],
    [
      "FINANZIELLE PRUEFUNG",
      "FINANCIAL REVIEW",
      "VERIFICA FINANZIARIA",
      "VÉRIFICATION FINANCIÈRE"
    ],
    ["BEWERTUNG", "ASSESSMENT", "VALUTAZIONE", "ÉVALUATION"],
    [
      "DOKUMENTENUEBERSICHT",
      "DOCUMENT OVERVIEW",
      "ELENCO DEI DOCUMENTI",
      "LISTE DES DOCUMENTS"
    ],
    [
      "ADMINISTRATIVER DEMO-ABSCHLUSS",
      "ADMINISTRATIVE DEMO CLOSURE",
      "CHIUSURA AMMINISTRATIVA DEMO",
      "CLÔTURE ADMINISTRATIVE DE DÉMONSTRATION"
    ],
    [
      "BEARBEITUNGSVERLAUF",
      "PROCESSING HISTORY",
      "CRONOLOGIA DELLA LAVORAZIONE",
      "HISTORIQUE DU TRAITEMENT"
    ],
    [
      "ABSCHLUSSENTWURF",
      "CLOSURE DRAFT",
      "BOZZA DI CHIUSURA",
      "PROJET DE CLÔTURE"
    ],
    [
      "AENDERUNGSHISTORIE DES ABSCHLUSSENTWURFS",
      "CLOSURE DRAFT REVISION HISTORY",
      "CRONOLOGIA DELLE REVISIONI DELLA BOZZA DI CHIUSURA",
      "HISTORIQUE DES MODIFICATIONS DU PROJET DE CLÔTURE"
    ],
    [
      "DOKUMENTIERTE ABSCHLUSSNACHWEISE",
      "DOCUMENTED CLOSURE EVIDENCE",
      "PROVE DI CHIUSURA DOCUMENTATE",
      "JUSTIFICATIFS DE CLÔTURE DOCUMENTÉS"
    ],
    [
      "AUTOMATISCHER REFERENZABGLEICH",
      "AUTOMATED REFERENCE MATCHING",
      "ABBINAMENTO AUTOMATICO DEI RIFERIMENTI",
      "RAPPROCHEMENT AUTOMATISÉ DES RÉFÉRENCES"
    ],
    [
      "WICHTIGER PRUEFHINWEIS",
      "IMPORTANT REVIEW NOTICE",
      "AVVISO IMPORTANTE SULLA VERIFICA",
      "AVIS IMPORTANT SUR LA VÉRIFICATION"
    ],
    ["Unternehmen", "Company", "Azienda", "Entreprise"],
    [
      "Pruefergebnis",
      "Review result",
      "Risultato della verifica",
      "Résultat de la vérification"
    ],
    [
      "Buchhalterisch zugeordnet",
      "Allocated in accounting records",
      "Abbinato contabilmente",
      "Affecté en comptabilité"
    ],
    [
      "Noch nicht zugeordnet",
      "Not yet allocated",
      "Non ancora abbinato",
      "Pas encore affecté"
    ],
    [
      "Retourenbeleg",
      "Return document",
      "Documento di reso",
      "Justificatif de retour"
    ],
    [
      "Interner Buchungsbeleg",
      "Internal accounting record",
      "Documento contabile interno",
      "Pièce comptable interne"
    ],
    [
      "Die Buchungspruefung enthaelt Warnungen. Eine manuelle Kontrolle ist erforderlich.",
      "The accounting review contains warnings. A manual check is required.",
      "La verifica contabile contiene avvisi. È necessario un controllo manuale.",
      "La vérification comptable comporte des avertissements. Un contrôle manuel est nécessaire."
    ],
    [
      "Es besteht eine potenzielle Betragsabweichung. Diese ist keine bestaetigte Forderung.",
      "There is a potential amount discrepancy. It does not establish a confirmed claim.",
      "Esiste una differenza potenziale di importo. Non costituisce un credito confermato.",
      "Il existe un écart de montant potentiel. Il ne constitue pas une créance confirmée."
    ],
    [
      "Im erfassten Retouren- und Gutschriftabgleich wurde keine positive Betragsdifferenz festgestellt.",
      "No positive amount discrepancy was found in the recorded return and credit note reconciliation.",
      "Non è stata rilevata alcuna differenza positiva di importo nella riconciliazione dei resi e delle note di credito registrati.",
      "Aucun écart de montant positif n’a été constaté lors du rapprochement des retours et des avoirs enregistrés."
    ],
    [
      "Ein tatsaechlich erfolgter finanzieller Ausgleich ist durch die vorhandenen Daten nicht unabhaengig bestaetigt.",
      "An actual financial settlement has not been independently verified using the available data.",
      "Un effettivo regolamento finanziario non è stato verificato in modo indipendente sulla base dei dati disponibili.",
      "Un règlement financier effectif n’a pas été vérifié de manière indépendante à partir des données disponibles."
    ],
    [
      "Administrativ abgeschlossen (Demo)",
      "Administratively closed (demo)",
      "Chiuso amministrativamente (demo)",
      "Clôturé administrativement (démo)"
    ],
    [
      "Kein aktiver Demo-Abschluss.",
      "No active demo closure.",
      "Nessuna chiusura demo attiva.",
      "Aucune clôture de démonstration active."
    ],
    ["Abschlussart", "Closure type", "Tipo di chiusura", "Type de clôture"],
    ["Referenz", "Reference", "Riferimento", "Référence"],
    ["Begruendung", "Reason", "Motivazione", "Motif"],
    ["Grund", "Reason", "Motivo", "Motif"],
    [
      "Entscheidungszeitpunkt",
      "Decision timestamp",
      "Data e ora della decisione",
      "Date et heure de la décision"
    ],
    [
      "Dokumentierte Abschlussereignisse",
      "Documented closure events",
      "Eventi di chiusura documentati",
      "Événements de clôture documentés"
    ],
    [
      "Demo-Abschluss",
      "Demo closure",
      "Chiusura demo",
      "Clôture de démonstration"
    ],
    ["Wiedereroeffnung", "Reopening", "Riapertura", "Réouverture"],
    [
      "Abschlussstatus konnte nicht zuverlaessig gelesen werden.",
      "The closure status could not be read reliably.",
      "Impossibile leggere in modo affidabile lo stato di chiusura.",
      "Le statut de clôture n’a pas pu être lu de manière fiable."
    ],
    [
      "Keine unabhaengig bestaetigte finanzielle Rueckgewinnung.",
      "No independently verified financial recovery.",
      "Nessun recupero finanziario verificato in modo indipendente.",
      "Aucun recouvrement financier vérifié de manière indépendante."
    ],
    [
      "VORLAEUFIGER PRUEFBERICHT - KEIN FINALER FALLABSCHLUSS.",
      "PRELIMINARY REVIEW REPORT - NOT A FINAL CASE CLOSURE.",
      "RAPPORTO DI VERIFICA PROVVISORIO - NON È UNA CHIUSURA DEFINITIVA DEL CASO.",
      "RAPPORT DE VÉRIFICATION PROVISOIRE - AUCUNE CLÔTURE DÉFINITIVE DU DOSSIER."
    ],
    [
      "Fiktive Konzeptdemo. Die Daten und Nachweise wurden nicht unabhaengig verifiziert.",
      "Fictional concept demo. The data and evidence have not been independently verified.",
      "Demo concettuale fittizia. I dati e le prove non sono stati verificati in modo indipendente.",
      "Démo conceptuelle fictive. Les données et les justificatifs n’ont pas été vérifiés de manière indépendante."
    ],
    [
      "Keine Bearbeitungseintraege vorhanden.",
      "No processing entries available.",
      "Nessuna registrazione di lavorazione presente.",
      "Aucune entrée de traitement disponible."
    ],
    ["Eintrag", "Entry", "Registrazione", "Entrée"],
    ["Zeitangabe", "Timestamp", "Data e ora", "Date et heure"],
    ["Status / Ereignis", "Status / event", "Stato / evento", "Statut / événement"],
    ["Notiz", "Note", "Nota", "Note"],
    [
      "Weitere gespeicherte Angaben",
      "Other saved information",
      "Altre informazioni salvate",
      "Autres informations enregistrées"
    ],
    [
      "Gutschrift ausgestellt - Ausgleich offen",
      "Credit note issued - settlement outstanding",
      "Nota di credito emessa - regolamento ancora aperto",
      "Avoir émis - règlement en attente"
    ],
    [
      "Vollstaendiger Ausgleich - Nachweis pruefen",
      "Full settlement - review evidence",
      "Regolamento completo - verificare la prova",
      "Règlement intégral - vérifier le justificatif"
    ],
    [
      "Teilweiser Ausgleich - Nachweis pruefen",
      "Partial settlement - review evidence",
      "Regolamento parziale - verificare la prova",
      "Règlement partiel - vérifier le justificatif"
    ],
    [
      "Ohne Rueckgewinnung geklaert",
      "Resolved without recovery",
      "Chiarito senza recupero",
      "Résolu sans recouvrement"
    ],
    [
      "Vollständiger Ausgleich – Demoentscheidung",
      "Full settlement - demo decision",
      "Regolamento completo - decisione demo",
      "Règlement intégral - décision de démonstration"
    ],
    [
      "Teilweiser Ausgleich – Demoentscheidung",
      "Partial settlement - demo decision",
      "Regolamento parziale - decisione demo",
      "Règlement partiel - décision de démonstration"
    ],
    [
      "Ohne Rückgewinnung geklärt – Demoentscheidung",
      "Resolved without recovery - demo decision",
      "Chiarito senza recupero - decisione demo",
      "Résolu sans recouvrement - décision de démonstration"
    ],
    [
      "Kein Abschlussentwurf gespeichert.",
      "No closure draft saved.",
      "Nessuna bozza di chiusura salvata.",
      "Aucun projet de clôture enregistré."
    ],
    ["Aktueller Entwurf", "Current draft", "Bozza attuale", "Projet actuel"],
    ["Ergebnis", "Outcome", "Esito", "Résultat"],
    [
      "Unbekannte Abschlussart",
      "Unknown closure type",
      "Tipo di chiusura sconosciuto",
      "Type de clôture inconnu"
    ],
    [
      "Nachweisreferenz",
      "Evidence reference",
      "Riferimento della prova",
      "Référence du justificatif"
    ],
    [
      "Gespeichert - nicht unabhaengig verifiziert.",
      "Saved - not independently verified.",
      "Salvato - non verificato in modo indipendente.",
      "Enregistré - non vérifié de manière indépendante."
    ],
    [
      "Keine gespeicherten Revisionen vorhanden.",
      "No saved revisions available.",
      "Nessuna revisione salvata presente.",
      "Aucune révision enregistrée disponible."
    ],
    ["Revision", "Revision", "Revisione", "Révision"],
    ["Version", "Version", "Versione", "Version"],
    ["Gespeichert", "Saved", "Salvato", "Enregistré"],
    [
      "Abschlussentwurf konnte nicht zuverlaessig gelesen werden.",
      "The closure draft could not be read reliably.",
      "Impossibile leggere in modo affidabile la bozza di chiusura.",
      "Le projet de clôture n’a pas pu être lu de manière fiable."
    ],
    [
      "Keine Abschlussnachweise dokumentiert.",
      "No closure evidence documented.",
      "Nessuna prova di chiusura documentata.",
      "Aucun justificatif de clôture documenté."
    ],
    ["Nachweis", "Evidence item", "Prova", "Justificatif"],
    [
      "Nicht auswertbarer Eintrag.",
      "Entry cannot be evaluated.",
      "Registrazione non valutabile.",
      "Entrée impossible à évaluer."
    ],
    [
      "Nachweisart",
      "Evidence type",
      "Tipo di prova",
      "Type de justificatif"
    ],
    [
      "Ausgestellte Lieferantengutschrift",
      "Issued supplier credit note",
      "Nota di credito del fornitore emessa",
      "Avoir fournisseur émis"
    ],
    [
      "Zahlungseingang / Banknachweis",
      "Receipt of payment / bank evidence",
      "Pagamento ricevuto / prova bancaria",
      "Réception du paiement / justificatif bancaire"
    ],
    [
      "Verrechnung / Buchungsbeleg",
      "Offset / accounting record",
      "Compensazione / documento contabile",
      "Compensation / pièce comptable"
    ],
    [
      "Schriftliche Lieferantenentscheidung",
      "Written supplier decision",
      "Decisione scritta del fornitore",
      "Décision écrite du fournisseur"
    ],
    [
      "Sonstiger Klaerungsnachweis",
      "Other resolution evidence",
      "Altra prova di chiarimento",
      "Autre justificatif de résolution"
    ],
    ["Unbekannte Art", "Unknown type", "Tipo sconosciuto", "Type inconnu"],
    ["Beschreibung", "Description", "Descrizione", "Description"],
    ["Erfasst", "Recorded", "Registrato", "Enregistré"],
    [
      "Zeitpunkt unbekannt",
      "Timestamp unknown",
      "Data e ora sconosciute",
      "Date et heure inconnues"
    ],
    [
      "Zeitpunkt nicht bekannt",
      "Timestamp unknown",
      "Data e ora sconosciute",
      "Date et heure inconnues"
    ],
    [
      "Pruefstatus",
      "Verification status",
      "Stato della verifica",
      "Statut de vérification"
    ],
    [
      "Dokumentiert - nicht unabhaengig verifiziert.",
      "Documented - not independently verified.",
      "Documentato - non verificato in modo indipendente.",
      "Documenté - non vérifié de manière indépendante."
    ],
    [
      "Referenz in den Buchungsdaten nicht gefunden.",
      "Reference not found in the accounting data.",
      "Riferimento non trovato nei dati contabili.",
      "Référence introuvable dans les données comptables."
    ],
    [
      "Referenz mehrfach vorhanden - Zuordnung unklar.",
      "Reference occurs multiple times - allocation unclear.",
      "Riferimento presente più volte - abbinamento incerto.",
      "Référence présente plusieurs fois - affectation incertaine."
    ],
    [
      "Referenz vorhanden, aber Fallzuordnung, Waehrung oder Betrag nicht eindeutig plausibel.",
      "Reference available, but case matching, currency or amount is not clearly plausible.",
      "Riferimento presente, ma abbinamento al caso, valuta o importo non chiaramente plausibili.",
      "Référence présente, mais rapprochement avec le dossier, devise ou montant insuffisamment plausibles."
    ],
    [
      "Referenz gefunden und Fall zugeordnet.",
      "Reference found and matched to the case.",
      "Riferimento trovato e abbinato al caso.",
      "Référence trouvée et rapprochée du dossier."
    ],
    ["Buchung", "Accounting entry", "Registrazione contabile", "Écriture comptable"],
    [
      "Buchungsbetrag",
      "Accounting entry amount",
      "Importo contabile",
      "Montant de l’écriture"
    ],
    [
      "Referenz, Einzelbetrag und Waehrung plausibel.",
      "Reference, individual amount and currency are plausible.",
      "Riferimento, singolo importo e valuta sono plausibili.",
      "La référence, le montant individuel et la devise sont plausibles."
    ],
    [
      "Referenzabgleich konnte nicht abgeschlossen werden.",
      "Reference matching could not be completed.",
      "Impossibile completare l’abbinamento dei riferimenti.",
      "Le rapprochement des références n’a pas pu être terminé."
    ],
    [
      "Kein unabhaengiger Nachweis eines tatsaechlichen finanziellen Ausgleichs.",
      "No independent evidence of an actual financial settlement.",
      "Nessuna prova indipendente di un effettivo regolamento finanziario.",
      "Aucune preuve indépendante d’un règlement financier effectif."
    ],
    [
      "Dokumentierte Nachweise konnten nicht zuverlaessig gelesen werden.",
      "Documented evidence could not be read reliably.",
      "Impossibile leggere in modo affidabile le prove documentate.",
      "Les justificatifs documentés n’ont pas pu être lus de manière fiable."
    ],
    [
      "Diese Fallakte enthaelt gespeicherte Demo-Eintraege. Die Eintraege sind nicht revisionssicher und belegen keine bestaetigte finanzielle Rueckgewinnung.",
      "This case file contains saved demo entries. The entries are not audit-proof and do not establish verified financial recovery.",
      "Questo fascicolo contiene registrazioni demo salvate. Le registrazioni non garantiscono l’inalterabilità e non attestano un recupero finanziario verificato.",
      "Ce dossier contient des entrées de démonstration enregistrées. Elles ne garantissent pas une traçabilité inaltérable et ne prouvent aucun recouvrement financier vérifié."
    ],
    [
      "Prüfe Rechnungen, Retouren und Gutschriften deiner Lieferanten.",
      "Review your suppliers’ invoices, returns and credit notes.",
      "Esamini le fatture, i resi e le note di credito dei Suoi fornitori.",
      "Examinez les factures, les retours et les avoirs de vos fournisseurs."
    ],
    ["Rechnungen", "Invoices", "Fatture", "Factures"],
    ["Rechnung", "Invoice", "Fattura", "Facture"],
    ["Retoure", "Return", "Reso", "Retour"],
    ["Gutschrift", "Credit note", "Nota di credito", "Avoir"],
    ["Währung", "Currency", "Valuta", "Devise"],
    [
      "Genehmigter Betrag",
      "Approved amount",
      "Importo approvato",
      "Montant approuvé"
    ],
    [
      "Alle Beträge und Geschäftsvorgänge sind frei erfunden. Die Dokumente sind bewusst vereinfacht.",
      "All amounts and business transactions are fictional. The documents are deliberately simplified.",
      "Tutti gli importi e le operazioni commerciali sono fittizi. I documenti sono volutamente semplificati.",
      "Tous les montants et toutes les opérations commerciales sont fictifs. Les documents sont volontairement simplifiés."
    ],
    [
      "03 / AUTOMATISCHER ABGLEICH",
      "03 / AUTOMATED RECONCILIATION",
      "03 / RICONCILIAZIONE AUTOMATICA",
      "03 / RAPPROCHEMENT AUTOMATISÉ"
    ],
    [
      "Abgleich starten",
      "Run reconciliation",
      "Avviare la riconciliazione",
      "Lancer le rapprochement"
    ],
    [
      "Beispieldaten werden geprüft …",
      "Checking sample data …",
      "Verifica dei dati di esempio …",
      "Vérification des données d’exemple …"
    ],
    [
      "Prototyp · Fiktive Daten · Keine Kundenanwendung",
      "Prototype · Fictional data · Not a customer application",
      "Prototipo · Dati fittizi · Non destinato all’uso da parte dei clienti",
      "Prototype · Données fictives · Application non destinée aux clients"
    ],
    [
      "Fallbearbeitung",
      "Case workflow",
      "Gestione del caso",
      "Gestion du dossier"
    ],
    [
      "Bearbeiten Sie diesen fiktiven Fall und dokumentieren Sie die nächsten Prüfschritte.",
      "Review this fictional case and document the next steps.",
      "Esamini questo caso fittizio e documenti i prossimi passaggi di verifica.",
      "Examinez ce dossier fictif et documentez les prochaines étapes de vérification."
    ],
    [
      "Bearbeitungsstand",
      "Processing status",
      "Stato di lavorazione",
      "État de traitement"
    ],
    [
      "Ereignisverlauf",
      "Activity history",
      "Cronologia delle attività",
      "Historique des activités"
    ],
    [
      "Neu / ungeprüft",
      "New / not reviewed",
      "Nuovo / non verificato",
      "Nouveau / non examiné"
    ],
    ["Bearbeiten", "Edit", "Modificare", "Modifier"],
    ["Löschen", "Delete", "Eliminare", "Supprimer"],
    ["Speichern", "Save", "Salvare", "Enregistrer"],
    ["Abbrechen", "Cancel", "Annullare", "Annuler"],
    [
      "Älteren Eintrag bearbeiten",
      "Edit earlier entry",
      "Modificare una registrazione precedente",
      "Modifier une entrée antérieure"
    ],
    [
      "Älteren Eintrag löschen",
      "Delete earlier entry",
      "Eliminare una registrazione precedente",
      "Supprimer une entrée antérieure"
    ],
    [
      "Eintrag bearbeiten",
      "Edit entry",
      "Modificare la registrazione",
      "Modifier l’entrée"
    ],
    [
      "Eintrag löschen",
      "Delete entry",
      "Eliminare la registrazione",
      "Supprimer l’entrée"
    ],
    [
      "Demo-Eintrag dauerhaft im Browser gespeichert.",
      "Demo entry saved persistently in this browser.",
      "Registrazione demo salvata in modo persistente in questo browser.",
      "Entrée de démonstration enregistrée durablement dans ce navigateur."
    ],
    [
      "Eintrag übernommen, aber nicht dauerhaft gespeichert.",
      "Entry applied, but not saved persistently.",
      "Registrazione applicata, ma non salvata in modo persistente.",
      "Entrée prise en compte, mais non enregistrée durablement."
    ],
    [
      "Bitte Status ändern oder eine Notiz eingeben.",
      "Please change the status or enter a note.",
      "Modifichi lo stato o inserisca una nota.",
      "Veuillez modifier le statut ou saisir une note."
    ],
    [
      "Eintrag aktualisiert und gespeichert.",
      "Entry updated and saved.",
      "Registrazione aggiornata e salvata.",
      "Entrée mise à jour et enregistrée."
    ],
    [
      "Änderung übernommen, aber nicht dauerhaft gespeichert.",
      "Change applied, but not saved persistently.",
      "Modifica applicata, ma non salvata in modo persistente.",
      "Modification prise en compte, mais non enregistrée durablement."
    ],
    [
      "Eintrag gelöscht und Änderung gespeichert.",
      "Entry deleted and change saved.",
      "Registrazione eliminata e modifica salvata.",
      "Entrée supprimée et modification enregistrée."
    ],
    [
      "Eintrag entfernt, aber nicht dauerhaft gespeichert.",
      "Entry removed, but change not saved persistently.",
      "Registrazione rimossa, ma modifica non salvata in modo persistente.",
      "Entrée supprimée, mais modification non enregistrée durablement."
    ],
    [
      "Matching-Ergebnis aus fiktiven Beispieldaten.",
      "Reconciliation result based on fictional sample data.",
      "Risultato della riconciliazione basato su dati di esempio fittizi.",
      "Résultat du rapprochement fondé sur des données d’exemple fictives."
    ],
    [
      "SYSTEM · Automatisch erstellt · Nicht bearbeitbar",
      "SYSTEM · Created automatically · Cannot be edited",
      "SISTEMA · Creato automaticamente · Non modificabile",
      "SYSTÈME · Créé automatiquement · Non modifiable"
    ],
    [
      "05 / BUCHUNGS- UND VERRECHNUNGSPRÜFUNG",
      "05 / ACCOUNTING ALLOCATION AND OFFSET REVIEW",
      "05 / VERIFICA DELLE REGISTRAZIONI E DELLE COMPENSAZIONI",
      "05 / VÉRIFICATION DES ÉCRITURES ET DES COMPENSATIONS"
    ],
    [
      "Keine passende Buchung in den Beispieldaten.",
      "No matching accounting entry in the sample data.",
      "Nessuna registrazione contabile corrispondente nei dati di esempio.",
      "Aucune écriture comptable correspondante dans les données d’exemple."
    ],
    [
      "Alle Zuordnungen sind vorläufig. Eine unabhängig bestätigte Rückgewinnung liegt in dieser Demo nicht vor.",
      "All allocations are provisional. This demo contains no independently verified recovery.",
      "Tutti gli abbinamenti sono provvisori. In questa demo non è presente alcun recupero verificato in modo indipendente.",
      "Toutes les affectations sont provisoires. Aucun recouvrement n’a été vérifié de manière indépendante dans cette démo."
    ],
    ["Verrechnung", "Offset", "Compensazione", "Compensation"],
    ["Rückzahlung", "Refund", "Rimborso", "Remboursement"],
    [
      "Fiktiver Testkurs",
      "Fictional test rate",
      "Tasso di prova fittizio",
      "Taux de test fictif"
    ],
    [
      "Fiktiver USD-Testkurs",
      "Fictional USD test rate",
      "Tasso di prova USD fittizio",
      "Taux de test USD fictif"
    ],
    [
      "INTERNATIONALE PRÜFBEISPIELE",
      "INTERNATIONAL REVIEW EXAMPLES",
      "ESEMPI DI VERIFICA INTERNAZIONALI",
      "EXEMPLES DE VÉRIFICATION INTERNATIONAUX"
    ],
    [
      "Wechselkursprüfung",
      "Exchange rate review",
      "Verifica dei tassi di cambio",
      "Vérification des taux de change"
    ],
    [
      "Drei separate Beispielszenarien mit fiktiven Wechselkursen. Keine Änderung an bestehenden Fällen oder Gutschriften.",
      "Three separate sample scenarios with fictional exchange rates. Existing cases and credit notes remain unchanged.",
      "Tre scenari di esempio separati con tassi di cambio fittizi. I casi e le note di credito esistenti restano invariati.",
      "Trois scénarios d’exemple distincts avec des taux de change fictifs. Les dossiers et les avoirs existants restent inchangés."
    ],
    [
      "Europa – EUR / CHF",
      "Europe – EUR / CHF",
      "Europa – EUR / CHF",
      "Europe – EUR / CHF"
    ],
    [
      "USA – USD / CHF",
      "USA – USD / CHF",
      "USA – USD / CHF",
      "États-Unis – USD / CHF"
    ],
    [
      "Japan – JPY / CHF",
      "Japan – JPY / CHF",
      "Giappone – JPY / CHF",
      "Japon – JPY / CHF"
    ],
    [
      "Fiktiver EU-Lieferant",
      "Fictional EU supplier",
      "Fornitore UE fittizio",
      "Fournisseur fictif de l’UE"
    ],
    [
      "Fiktiver US-Lieferant",
      "Fictional US supplier",
      "Fornitore USA fittizio",
      "Fournisseur fictif des États-Unis"
    ],
    [
      "Fiktiver japanischer Lieferant",
      "Fictional Japanese supplier",
      "Fornitore giapponese fittizio",
      "Fournisseur japonais fictif"
    ],
    [
      "Genehmigte Lieferantengutschrift",
      "Approved supplier credit",
      "Credito del fornitore approvato",
      "Crédit fournisseur approuvé"
    ],
    [
      "Ausgestellte Gutschrift",
      "Issued credit note",
      "Nota di credito emessa",
      "Avoir émis"
    ],
    [
      "Potenzielle Differenz in Originalwährung",
      "Potential discrepancy in original currency",
      "Differenza potenziale nella valuta originale",
      "Écart potentiel dans la devise d’origine"
    ],
    [
      "Ursprünglicher CHF-Referenzwert",
      "Original CHF reference value",
      "Valore di riferimento CHF iniziale",
      "Valeur de référence initiale en CHF"
    ],
    [
      "Späterer CHF-Referenzwert",
      "Later CHF reference value",
      "Valore di riferimento CHF successivo",
      "Valeur de référence ultérieure en CHF"
    ],
    [
      "Berechneter Wechselkurseffekt auf den ausgestellten Gutschriftbetrag",
      "Calculated exchange rate effect on the issued credit note amount",
      "Effetto del cambio calcolato sull’importo della nota di credito emessa",
      "Effet de change calculé sur le montant de l’avoir émis"
    ],
    [
      "Genehmigter und ausgestellter Betrag stimmen in der Originalwährung überein. Der CHF-Unterschied entsteht ausschließlich aus den beiden Beispiel-Bewertungskursen.",
      "The approved and issued amounts match in the original currency. The CHF difference results solely from the two sample valuation rates.",
      "Gli importi approvato ed emesso coincidono nella valuta originale. La differenza in CHF deriva esclusivamente dai due tassi di valutazione di esempio.",
      "Les montants approuvé et émis correspondent dans la devise d’origine. L’écart en CHF résulte uniquement des deux taux de valorisation d’exemple."
    ],
    [
      "Konzeptberechnung mit fiktiven Kursen und Stichtagen. Keine automatisch ermittelte buchhalterische Kursdifferenz, kein Nachweis einer Forderung und keine Bestätigung eines Zahlungseingangs.",
      "Concept calculation using fictional rates and dates. This is not an automatically determined accounting exchange difference, evidence of a claim or confirmation of receipt of payment.",
      "Calcolo concettuale con tassi e date fittizi. Non costituisce una differenza di cambio contabile determinata automaticamente, una prova di credito o una conferma di pagamento ricevuto.",
      "Calcul conceptuel utilisant des taux et des dates fictifs. Il ne constitue ni un écart de change comptable déterminé automatiquement, ni une preuve de créance, ni une confirmation de réception d’un paiement."
    ],
    [
      "Die Ergebnisse werden von unserer bestehenden Matching Engine berechnet.",
      "The results are calculated by our existing reconciliation engine.",
      "I risultati sono calcolati dal nostro motore di riconciliazione esistente.",
      "Les résultats sont calculés par notre moteur de rapprochement existant."
    ],
    [
      "04 / ERGEBNISSE",
      "04 / RESULTS",
      "04 / RISULTATI",
      "04 / RÉSULTATS"
    ],
    [
      "01 / ANGEMELDETES UNTERNEHMEN",
      "01 / SIGNED-IN COMPANY",
      "01 / AZIENDA CONNESSA",
      "01 / ENTREPRISE CONNECTÉE"
    ],
    [
      "ANGEMELDETES UNTERNEHMEN",
      "SIGNED-IN COMPANY",
      "AZIENDA CONNESSA",
      "ENTREPRISE CONNECTÉE"
    ],
    [
      "Fiktives Demo-Unternehmen · Demo-Modus",
      "Fictional demo company · Demo mode",
      "Azienda dimostrativa fittizia · Modalità demo",
      "Entreprise de démonstration fictive · Mode démo"
    ],
    [
      "LIEFERANT AUSWÄHLEN",
      "SELECT SUPPLIER",
      "SELEZIONARE IL FORNITORE",
      "SÉLECTIONNER UN FOURNISSEUR"
    ],
    [
      "Alle Lieferanten",
      "All suppliers",
      "Tutti i fornitori",
      "Tous les fournisseurs"
    ],
    [
      "SCHNELL ZU EINEM VORGANG",
      "QUICK CASE ACCESS",
      "ACCESSO RAPIDO A UN CASO",
      "ACCÈS RAPIDE À UN DOSSIER"
    ],
    ["Alle Vorgänge", "All cases", "Tutti i casi", "Tous les dossiers"],
    [
      "Offene Prüffälle",
      "Cases awaiting review",
      "Casi da verificare",
      "Dossiers à examiner"
    ],
    [
      "In Bearbeitung",
      "In progress",
      "In lavorazione",
      "En cours de traitement"
    ],
    ["Abgeschlossen", "Completed", "Completati", "Terminés"],
    [
      "Rechnungsnummer, Fall-ID oder Lieferant suchen …",
      "Search invoice number, case ID or supplier …",
      "Cercare numero di fattura, ID del caso o fornitore …",
      "Rechercher un numéro de facture, un identifiant de dossier ou un fournisseur …"
    ],
    [
      "Vorgänge durchsuchen",
      "Search cases",
      "Cercare nei casi",
      "Rechercher dans les dossiers"
    ],
    ["Prüfen", "Review", "Da verificare", "À examiner"],
    ["Abgeglichen", "Reconciled", "Riconciliato", "Rapproché"],
    [
      "Bearbeitung zurücksetzen",
      "Reset processing",
      "Ripristinare la lavorazione",
      "Réinitialiser le traitement"
    ],
    ["Status", "Status", "Stato", "Statut"],
    [
      "Noch nicht bearbeitet",
      "Not yet processed",
      "Non ancora elaborato",
      "Pas encore traité"
    ],
    [
      "Unterlagen werden geprüft",
      "Documents under review",
      "Documenti in fase di verifica",
      "Documents en cours de vérification"
    ],
    [
      "Lieferantenklärung läuft",
      "Clarification with supplier in progress",
      "Chiarimenti con il fornitore in corso",
      "Clarification avec le fournisseur en cours"
    ],
    [
      "Auf weitere Nachweise warten",
      "Awaiting further evidence",
      "In attesa di ulteriori prove",
      "En attente de justificatifs supplémentaires"
    ],
    [
      "Abgeschlossen (Bearbeitung)",
      "Processing completed",
      "Lavorazione completata",
      "Traitement terminé"
    ],
    [
      "Letzte Aktivität",
      "Last activity",
      "Ultima attività",
      "Dernière activité"
    ],
    [
      "Zeitpunkt nicht dokumentiert",
      "Time not documented",
      "Data e ora non documentate",
      "Date et heure non documentées"
    ],
    [
      "Noch keine Bearbeitung",
      "No activity yet",
      "Nessuna attività finora",
      "Aucun traitement pour le moment"
    ],
    [
      "Zeitpunkt nicht verfügbar",
      "Time unavailable",
      "Data e ora non disponibili",
      "Date et heure indisponibles"
    ],
    ["Heute", "Today", "Oggi", "Aujourd’hui"],
    [
      "Betrag stimmt überein",
      "Amounts match",
      "Gli importi coincidono",
      "Les montants correspondent"
    ],
    [
      "Teilweise Gutschrift",
      "Partial credit note",
      "Nota di credito parziale",
      "Avoir partiel"
    ],
    [
      "Gutschrift nicht gefunden",
      "Credit note not found",
      "Nota di credito non trovata",
      "Avoir introuvable"
    ],
    [
      "Prüfung erforderlich",
      "Review required",
      "Verifica necessaria",
      "Vérification nécessaire"
    ],
    ["Nicht zugeordnet", "Unmatched", "Non abbinato", "Non rapproché"],
    [
      "Die ausgestellten Gutschriften entsprechen dem genehmigten Betrag. Es wurde keine Betragsabweichung festgestellt. Ob die Gutschrift tatsächlich verrechnet oder zurückgezahlt wurde, muss separat anhand von Buchhaltungsdaten geprüft werden.",
      "The issued credit notes match the approved amount. No amount discrepancy was found. Whether the credit was actually offset or refunded must be checked separately using accounting records.",
      "Le note di credito emesse corrispondono all’importo approvato. Non sono state rilevate differenze di importo. L’effettiva compensazione o il rimborso devono essere verificati separatamente sulla base dei dati contabili.",
      "Les avoirs émis correspondent au montant approuvé. Aucun écart de montant n’a été constaté. La compensation ou le remboursement effectif doit être vérifié séparément à partir des données comptables."
    ],
    [
      "Die ausgestellten Gutschriften sind geringer als die dokumentierte Retourenfreigabe.",
      "The issued credit notes are lower than the documented approved return amount.",
      "Le note di credito emesse sono inferiori all’importo del reso approvato documentato.",
      "Les avoirs émis sont inférieurs au montant du retour approuvé documenté."
    ],
    [
      "In den importierten Daten wurde noch keine passende Gutschrift gefunden. Das beweist nicht, dass keine Gutschrift existiert.",
      "No matching credit note has been found in the imported data. This does not prove that no credit note exists.",
      "Nei dati importati non è stata trovata una nota di credito corrispondente. Ciò non dimostra che non esista.",
      "Aucun avoir correspondant n’a été trouvé dans les données importées. Cela ne prouve pas qu’aucun avoir n’existe."
    ],
    [
      "Ausgestellte Gutschriften übersteigen den genehmigten Betrag. Keine automatische Forderungsberechnung.",
      "Issued credit notes exceed the approved amount. No claim is calculated automatically.",
      "Le note di credito emesse superano l’importo approvato. Nessun credito viene calcolato automaticamente.",
      "Les avoirs émis dépassent le montant approuvé. Aucune créance n’est calculée automatiquement."
    ],
    ["Lieferant", "Supplier", "Fornitore", "Fournisseur"],
    ["Genehmigt", "Approved", "Approvato", "Approuvé"],
    [
      "Gutschriften erfasst",
      "Recorded credit notes",
      "Note di credito registrate",
      "Avoirs enregistrés"
    ],
    [
      "Potenzielle Differenz",
      "Potential discrepancy",
      "Differenza potenziale",
      "Écart potentiel"
    ],
    [
      "Dokumentreferenzen",
      "Document references",
      "Riferimenti ai documenti",
      "Références documentaires"
    ],
    ["Retouren", "Returns", "Resi", "Retours"],
    ["Gutschriften", "Credit notes", "Note di credito", "Avoirs"],
    ["Keine", "None", "Nessuno", "Aucun"],
    [
      "Finanzstatus",
      "Financial status",
      "Stato finanziario",
      "Statut financier"
    ],
    [
      "Keine Betragsabweichung – Verrechnung ungeprüft",
      "No amount discrepancy – offsetting not verified",
      "Nessuna differenza di importo – compensazione non verificata",
      "Aucun écart de montant – compensation non vérifiée"
    ],
    [
      "Potenzielle Auffälligkeit",
      "Potential issue",
      "Anomalia potenziale",
      "Anomalie potentielle"
    ],
    [
      "Zuordnung prüfen",
      "Review matching",
      "Verificare l’abbinamento",
      "Vérifier le rapprochement"
    ],
    [
      "Musterdokumente öffnen ↗",
      "Open sample documents ↗",
      "Aprire i documenti di esempio ↗",
      "Ouvrir les documents d’exemple ↗"
    ],
    ["Originalrechnung", "Original invoice", "Fattura originale", "Facture originale"],
    [
      "Retourenfreigabe",
      "Return approval",
      "Approvazione del reso",
      "Approbation du retour"
    ],
    [
      "Lieferantengutschrift",
      "Supplier credit note",
      "Nota di credito del fornitore",
      "Avoir fournisseur"
    ],
    [
      "Keine passende Originalrechnung im Datensatz.",
      "No matching original invoice in the dataset.",
      "Nessuna fattura originale corrispondente nei dati.",
      "Aucune facture originale correspondante dans les données."
    ],
    [
      "Keine genehmigte Retoure im Datensatz erkennbar.",
      "No approved return identified in the dataset.",
      "Nessun reso approvato individuato nei dati.",
      "Aucun retour approuvé identifié dans les données."
    ],
    [
      "Keine passende Gutschrift in den Beispieldaten.",
      "No matching credit note in the sample data.",
      "Nessuna nota di credito corrispondente nei dati di esempio.",
      "Aucun avoir correspondant dans les données d’exemple."
    ],
    [
      "Unabhängig bestätigter finanzieller Ausgleich",
      "Independently verified financial settlement",
      "Regolamento finanziario verificato in modo indipendente",
      "Règlement financier vérifié de manière indépendante"
    ],
    [
      "Nicht geprüft. Eine Gutschrift oder Buchungszuordnung ist noch kein unabhängiger Nachweis.",
      "Not checked. A credit note or accounting allocation is not independent evidence.",
      "Non verificato. Una nota di credito o un abbinamento contabile non costituisce una prova indipendente.",
      "Non vérifié. Un avoir ou une affectation comptable ne constitue pas une preuve indépendante."
    ],
    [
      "Möglicher nächster Prüfschritt",
      "Possible next review step",
      "Possibile prossimo passaggio di verifica",
      "Prochaine étape de vérification possible"
    ],
    [
      "Die Beträge stimmen überein. Nun die Buchungszuordnung und gegebenenfalls den tatsächlichen finanziellen Ausgleich prüfen.",
      "The amounts match. Next, review the accounting allocation and, where applicable, the actual financial settlement.",
      "Gli importi coincidono. Verificare ora l’abbinamento contabile e, se pertinente, l’effettivo regolamento finanziario.",
      "Les montants correspondent. Vérifier ensuite l’affectation comptable et, le cas échéant, le règlement financier effectif."
    ],
    [
      "Prüfen, ob der genehmigten Retoure bereits eine Gutschrift zugeordnet wurde oder weitere Gutschriften außerhalb der vorhandenen Daten existieren. Auch den Lieferantenkontoauszug und mögliche Verrechnungen kontrollieren. Falls keine Gutschrift nachweisbar ist, den Lieferanten kontaktieren und den Bearbeitungsstand dokumentieren.",
      "Check whether a credit note has already been matched to the approved return or whether other credit notes exist outside the available data. Also review the supplier account statement and possible offsets. If no credit note can be evidenced, contact the supplier and document the processing status.",
      "Verificare se al reso approvato è già stata abbinata una nota di credito o se ne esistono altre al di fuori dei dati disponibili. Controllare anche l’estratto conto del fornitore ed eventuali compensazioni. Se non è possibile documentare una nota di credito, contattare il fornitore e registrare lo stato di lavorazione.",
      "Vérifier si un avoir a déjà été rapproché du retour approuvé ou si d’autres avoirs existent en dehors des données disponibles. Contrôler également le relevé de compte fournisseur et les compensations éventuelles. Si aucun avoir ne peut être justifié, contacter le fournisseur et documenter l’état du traitement."
    ],
    [
      "Die Differenz zwischen genehmigtem Retourenbetrag und erfassten Gutschriften prüfen. Weitere Gutschriften, zulässige Abzüge, Teilverrechnungen und die Vollständigkeit der Buchungsdaten kontrollieren. Falls die Differenz ungeklärt bleibt, den Lieferanten um Klärung bitten.",
      "Review the difference between the approved return amount and recorded credit notes. Check for further credit notes, permitted deductions, partial offsets and complete accounting data. Ask the supplier for clarification if the difference remains unresolved.",
      "Verificare la differenza tra l’importo del reso approvato e le note di credito registrate. Controllare ulteriori note di credito, deduzioni ammesse, compensazioni parziali e completezza dei dati contabili. Se la differenza resta irrisolta, chiedere chiarimenti al fornitore.",
      "Examiner l’écart entre le montant du retour approuvé et les avoirs enregistrés. Vérifier les avoirs supplémentaires, les déductions autorisées, les compensations partielles et l’exhaustivité des données comptables. Si l’écart reste inexpliqué, demander des précisions au fournisseur."
    ],
    [
      "Zunächst die zugehörige Originalrechnung beschaffen und Dokumentreferenzen überprüfen.",
      "First obtain the original invoice and check document references.",
      "Procurarsi prima la fattura originale e verificare i riferimenti ai documenti.",
      "Obtenir d’abord la facture originale et vérifier les références documentaires."
    ],
    [
      "Prüfen, ob eine gültige Retourenfreigabe vorliegt. Ohne ausreichende Grundlage lässt sich keine Forderung ableiten.",
      "Check for a valid return approval. A claim cannot be established without sufficient grounds.",
      "Verificare la presenza di un’approvazione valida del reso. Senza una base sufficiente non è possibile stabilire un credito.",
      "Vérifier l’existence d’une approbation de retour valide. Une créance ne peut être établie sans fondement suffisant."
    ],
    [
      "Dokumente und Zuordnungen manuell prüfen, bevor eine Forderung angenommen wird.",
      "Review documents and matching manually before assuming a claim exists.",
      "Verificare manualmente documenti e abbinamenti prima di presumere l’esistenza di un credito.",
      "Examiner manuellement les documents et les rapprochements avant de présumer l’existence d’une créance."
    ],
    [
      "Dies ist eine automatische Prüfung fiktiver Daten, keine bestätigte Forderung oder rechtliche Bewertung.",
      "This is an automated review of fictional data, not a confirmed claim or legal assessment.",
      "Si tratta di una verifica automatica di dati fittizi, non di un credito confermato o di una valutazione giuridica.",
      "Il s’agit d’un examen automatisé de données fictives, et non d’une créance confirmée ou d’une évaluation juridique."
    ],
    [
      "PDF-Fallakte ansehen ↗",
      "View PDF case file ↗",
      "Visualizzare il fascicolo PDF ↗",
      "Consulter le dossier PDF ↗"
    ],
    [
      "PDF-Fallakte herunterladen",
      "Download PDF case file",
      "Scaricare il fascicolo PDF",
      "Télécharger le dossier PDF"
    ],
    [
      "Vorschau wird erstellt ...",
      "Creating preview ...",
      "Creazione dell’anteprima ...",
      "Création de l’aperçu ..."
    ],
    [
      "PDF wird erstellt ...",
      "Creating PDF ...",
      "Creazione del PDF ...",
      "Création du PDF ..."
    ],
    [
      "Nur eine interaktive Demo. Einträge werden lokal in diesem Browser gespeichert und stellen keine bestätigten Ansprüche dar.",
      "Interactive demo only. Entries are saved locally in this browser and do not establish confirmed claims.",
      "Solo una demo interattiva. Le registrazioni sono salvate localmente in questo browser e non costituiscono crediti confermati.",
      "Démo interactive uniquement. Les entrées sont enregistrées localement dans ce navigateur et ne constituent pas des créances confirmées."
    ],
    [
      "GUTSCHRIFT SUCHEN",
      "SEARCH CREDIT NOTES",
      "CERCARE UNA NOTA DI CREDITO",
      "RECHERCHER UN AVOIR"
    ],
    [
      "CR-109, INV-109, Lieferant …",
      "CR-109, INV-109, supplier …",
      "CR-109, INV-109, fornitore …",
      "CR-109, INV-109, fournisseur …"
    ],
    [
      "Gutschriften durchsuchen",
      "Search credit notes",
      "Cercare nelle note di credito",
      "Rechercher dans les avoirs"
    ],
    [
      "Keine Buchung zugeordnet",
      "No accounting entry allocated",
      "Nessuna registrazione contabile abbinata",
      "Aucune écriture comptable affectée"
    ],
    [
      "Vollständig zugeordnet",
      "Fully allocated",
      "Interamente abbinato",
      "Entièrement affecté"
    ],
    [
      "Teilweise zugeordnet",
      "Partially allocated",
      "Parzialmente abbinato",
      "Partiellement affecté"
    ],
    ["Vorgänge", "Cases", "Casi", "Dossiers"],
    ["Vorgang", "Case", "Caso", "Dossier"],
    ["Betrag", "Amount", "Importo", "Montant"],
    [
      "Anzahl der Vorgänge pro Seite",
      "Number of cases per page",
      "Numero di casi per pagina",
      "Nombre de dossiers par page"
    ],
    [
      "Vorgänge pro Seite ändern",
      "Change cases per page",
      "Modificare i casi per pagina",
      "Modifier le nombre de dossiers par page"
    ],
    [
      "Seitennavigation der Vorgänge",
      "Case pagination",
      "Navigazione tra le pagine dei casi",
      "Pagination des dossiers"
    ],
    [
      "Auffälligkeit automatisch erfasst",
      "Potential issue recorded automatically",
      "Anomalia registrata automaticamente",
      "Anomalie enregistrée automatiquement"
    ]
  ];
    rows.push(
    ["03 / VORGANGSÜBERSICHT", "03 / CASE OVERVIEW", "03 / PANORAMICA DEI CASI", "03 / APERÇU DES DOSSIERS"],
    ["04 / ABSCHLUSSPRÜFUNG", "04 / CLOSURE REVIEW", "04 / VERIFICA DELLA CHIUSURA", "04 / VÉRIFICATION DE LA CLÔTURE"],
    ["06 / BUCHUNGS- UND VERRECHNUNGSPRÜFUNG", "06 / BOOKING AND SETTLEMENT REVIEW", "06 / VERIFICA DELLE REGISTRAZIONI E DEL REGOLAMENTO", "06 / VÉRIFICATION DES ÉCRITURES ET DU RÈGLEMENT"],
    ["Prüfung für", "Review for", "Verifica per", "Vérification pour"],
    ["Rechnungs- und Retourenabgleich", "Invoice and return reconciliation", "Riconciliazione di fatture e resi", "Rapprochement des factures et des retours"],
    ["Dokumentierte Bearbeitung", "Documented processing", "Lavorazione documentata", "Traitement documenté"],
    ["Manuelle Bearbeitungseinträge vorhanden", "Manual processing entries available", "Registrazioni manuali presenti", "Entrées de traitement manuel disponibles"],
    ["Bisher nur ein automatischer Systemeintrag.", "Only an automatic system entry so far.", "Finora è presente solo una registrazione automatica di sistema.", "Seule une entrée automatique du système est présente pour le moment."],
    ["Nachweis des Abschlussergebnisses", "Evidence of the closure outcome", "Prova dell’esito della chiusura", "Justificatif du résultat de la clôture"],
    ["Ein unabhängig bestätigter finanzieller Ausgleich oder ein anderes abschließendes Klärungsergebnis ist noch nicht nachgewiesen.", "An independently verified financial settlement or another final resolution has not yet been evidenced.", "Non è ancora documentato un regolamento finanziario verificato in modo indipendente o un altro esito definitivo.", "Aucun règlement financier vérifié de manière indépendante ni aucune autre résolution définitive n’a encore été justifié."],
    ["Fallabschluss noch nicht freigegeben", "Case closure not yet authorized", "Chiusura del caso non ancora autorizzata", "Clôture du dossier pas encore autorisée"],
    ["Die Übereinstimmung von Rechnungs-, Retouren- und Gutschriftbeträgen genügt allein nicht als Nachweis einer Rückgewinnung. Auch eine erfasste Buchungszuordnung ist noch kein unabhängig bestätigter Ausgleich.", "Matching invoice, return and credit note amounts alone do not prove recovery. A recorded accounting allocation is not an independently verified settlement either.", "La corrispondenza degli importi di fatture, resi e note di credito non dimostra da sola un recupero. Anche un abbinamento contabile registrato non costituisce un regolamento verificato in modo indipendente.", "La concordance des montants des factures, retours et avoirs ne prouve pas à elle seule un recouvrement. Une affectation comptable enregistrée ne constitue pas non plus un règlement vérifié de manière indépendante."],
    ["Abschlussergebnis dokumentieren", "Document closure outcome", "Documentare l’esito della chiusura", "Documenter le résultat de la clôture"],
    ["Wähle ein mögliches Ergebnis und erfasse die zugehörige Nachweisreferenz. Diese Angaben gelten zunächst nur als Entwurf.", "Select a possible outcome and enter its evidence reference. These details initially constitute a draft only.", "Selezioni un possibile esito e inserisca il relativo riferimento della prova. Queste informazioni costituiscono inizialmente solo una bozza.", "Sélectionnez un résultat possible et saisissez la référence du justificatif correspondant. Ces informations constituent initialement un simple projet."],
    ["Wählen Sie ein mögliches Ergebnis und erfassen Sie die zugehörige Nachweisreferenz. Diese Angaben gelten zunächst nur als Entwurf.", "Select a possible outcome and enter its evidence reference. These details initially constitute a draft only.", "Selezioni un possibile esito e inserisca il relativo riferimento della prova. Queste informazioni costituiscono inizialmente solo una bozza.", "Sélectionnez un résultat possible et saisissez la référence du justificatif correspondant. Ces informations constituent initialement un simple projet."],
    ["Ergebnis der Klärung", "Resolution outcome", "Esito del chiarimento", "Résultat de la clarification"],
    ["Bitte Ergebnis auswählen", "Please select an outcome", "Selezionare un esito", "Veuillez sélectionner un résultat"],
    ["Referenz des Nachweises", "Evidence reference", "Riferimento della prova", "Référence du justificatif"],
    ["z. B. Buchhaltungsbeleg oder Klärungsreferenz", "e.g. an accounting record or resolution reference", "ad es. un documento contabile o un riferimento del chiarimento", "p. ex. une pièce comptable ou une référence de clarification"],
    ["Entwurf speichern", "Save draft", "Salvare la bozza", "Enregistrer le projet"],
    ["Änderungshistorie des Abschlussentwurfs", "Closure draft revision history", "Cronologia delle revisioni della bozza di chiusura", "Historique des modifications du projet de clôture"],
    ["Noch keine dokumentierten Änderungen vorhanden.", "No changes documented yet.", "Nessuna modifica ancora documentata.", "Aucune modification documentée pour le moment."],
    ["Aktueller gespeicherter Entwurf", "Current saved draft", "Bozza attuale salvata", "Projet enregistré actuel"],
    ["Frühere Version", "Earlier version", "Versione precedente", "Version antérieure"],
    ["Aus bisherigem Entwurf übernommen – Zeitpunkt unbekannt", "Imported from an existing draft – timestamp unknown", "Ripreso da una bozza esistente – data e ora sconosciute", "Repris d’un projet existant – date et heure inconnues"],
    ["Gespeicherter Entwurf geladen. Der Nachweis ist weiterhin ungeprüft.", "Saved draft loaded. The evidence remains unverified.", "Bozza salvata caricata. La prova resta non verificata.", "Projet enregistré chargé. Le justificatif reste non vérifié."],
    ["Automatische Plausibilitätsprüfung", "Automated plausibility check", "Verifica automatica di plausibilità", "Contrôle automatisé de plausibilité"],
    ["Bitte zuerst ein Abschlussergebnis auswählen.", "Please select a closure outcome first.", "Selezioni prima un esito della chiusura.", "Veuillez d’abord sélectionner un résultat de clôture."],
    ["Bitte zunächst ein Abschlussergebnis auswählen.", "Please select a closure outcome first.", "Selezioni prima un esito della chiusura.", "Veuillez d’abord sélectionner un résultat de clôture."],
    ["Die Buchungsprüfung enthält Warnungen. Eine manuelle Prüfung ist erforderlich. Kein Abschluss wird bestätigt.", "The accounting review contains warnings. Manual review is required. No closure is confirmed.", "La verifica contabile contiene avvisi. È necessaria una verifica manuale. Nessuna chiusura viene confermata.", "La vérification comptable comporte des avertissements. Un examen manuel est nécessaire. Aucune clôture n’est confirmée."],
    ["Gutschrift ausgestellt", "Credit note issued", "Nota di credito emessa", "Avoir émis"],
    ["Eine Gutschrift ist erfasst. Der tatsächliche Ausgleich bleibt ungeprüft.", "A credit note is recorded. Actual settlement remains unverified.", "È registrata una nota di credito. Il regolamento effettivo resta non verificato.", "Un avoir est enregistré. Le règlement effectif reste non vérifié."],
    ["Keine passende Gutschrift erfasst. Dieses Ergebnis ist anhand der Daten nicht belegbar.", "No matching credit note is recorded. This outcome cannot be evidenced by the data.", "Non è registrata alcuna nota di credito corrispondente. Questo esito non è documentabile con i dati disponibili.", "Aucun avoir correspondant n’est enregistré. Ce résultat ne peut pas être justifié par les données."],
    ["Achtung: Ein vollständiger Ausgleich ist anhand der vorhandenen Gutschriften und Buchungen nicht plausibel. Weitere Nachweise erforderlich.", "Warning: full settlement is not plausible from the available credit notes and accounting entries. Further evidence is required.", "Attenzione: un regolamento completo non è plausibile sulla base delle note di credito e delle registrazioni disponibili. Sono necessarie ulteriori prove.", "Attention : un règlement intégral n’est pas plausible au vu des avoirs et écritures disponibles. Des justificatifs supplémentaires sont nécessaires."],
    ["Die Beträge sind buchhalterisch vollständig zugeordnet. Ein tatsächlicher Ausgleich ist dadurch jedoch noch nicht unabhängig bestätigt.", "The amounts are fully allocated in accounting records. This does not independently verify actual settlement.", "Gli importi sono interamente abbinati contabilmente. Ciò non verifica in modo indipendente il regolamento effettivo.", "Les montants sont entièrement affectés en comptabilité. Cela ne vérifie pas de manière indépendante le règlement effectif."],
    ["Eine teilweise Buchungszuordnung ist erkennbar. Ein tatsächlicher Teilausgleich ist noch nicht unabhängig bestätigt.", "A partial accounting allocation is evident. Actual partial settlement has not been independently verified.", "È riconoscibile un abbinamento contabile parziale. Un regolamento parziale effettivo non è ancora verificato in modo indipendente.", "Une affectation comptable partielle est visible. Un règlement partiel effectif n’a pas encore été vérifié de manière indépendante."],
    ["Ein teilweiser Ausgleich ist anhand der vorhandenen Buchungsdaten nicht eindeutig belegbar. Manuelle Prüfung erforderlich.", "Partial settlement cannot be clearly evidenced by the available accounting data. Manual review is required.", "Un regolamento parziale non è chiaramente documentabile con i dati contabili disponibili. È necessaria una verifica manuale.", "Un règlement partiel ne peut pas être clairement justifié par les données comptables disponibles. Un examen manuel est nécessaire."],
    ["Eine Ablehnung oder Klärung ohne Rückgewinnung kann aus diesen Beträgen nicht abgeleitet werden. Hierfür ist eine dokumentierte Entscheidung nötig.", "Rejection or resolution without recovery cannot be inferred from these amounts. A documented decision is required.", "Da questi importi non è possibile dedurre un rifiuto o un chiarimento senza recupero. È necessaria una decisione documentata.", "Un refus ou une résolution sans recouvrement ne peut pas être déduit de ces montants. Une décision documentée est nécessaire."],
    ["Die Auswahl bleibt ein ungeprüfter Entwurf.", "The selection remains an unverified draft.", "La selezione resta una bozza non verificata.", "La sélection reste un projet non vérifié."],
    ["Die finanzielle Plausibilitätsprüfung konnte nicht durchgeführt werden. Kein Abschluss freigegeben.", "The financial plausibility check could not be performed. No closure authorized.", "Impossibile eseguire la verifica finanziaria di plausibilità. Nessuna chiusura autorizzata.", "Le contrôle financier de plausibilité n’a pas pu être effectué. Aucune clôture autorisée."],
    ["Bitte eine Nachweisreferenz eingeben.", "Please enter an evidence reference.", "Inserisca un riferimento della prova.", "Veuillez saisir une référence de justificatif."],
    ["Keine Änderungen vorhanden. Der bestehende Entwurf bleibt gespeichert.", "No changes. The existing draft remains saved.", "Nessuna modifica. La bozza esistente resta salvata.", "Aucune modification. Le projet existant reste enregistré."],
    ["Entwurf und Änderungshistorie gespeichert. Der Nachweis bleibt ungeprüft. Ein endgültiger Fallabschluss ist nicht freigegeben.", "Draft and revision history saved. The evidence remains unverified. Final case closure is not authorized.", "Bozza e cronologia delle revisioni salvate. La prova resta non verificata. La chiusura definitiva del caso non è autorizzata.", "Projet et historique des modifications enregistrés. Le justificatif reste non vérifié. La clôture définitive du dossier n’est pas autorisée."],
    ["Speicherung fehlgeschlagen. Der bisherige Entwurf wurde nicht überschrieben.", "Saving failed. The existing draft was not overwritten.", "Salvataggio non riuscito. La bozza precedente non è stata sovrascritta.", "Échec de l’enregistrement. Le projet précédent n’a pas été écrasé."],
    ["Prüfung der Abschlussfreigabe - Zentrale Abschlussentscheidung", "Closure authorization review - Central closure decision", "Verifica dell’autorizzazione alla chiusura - Decisione centrale di chiusura", "Vérification de l’autorisation de clôture - Décision centrale de clôture"],
    ["Ein vorläufiges Abschlussergebnis ist ausgewählt.", "A provisional closure outcome is selected.", "È selezionato un esito provvisorio della chiusura.", "Un résultat de clôture provisoire est sélectionné."],
    ["Bitte ein Abschlussergebnis auswählen.", "Please select a closure outcome.", "Selezioni un esito della chiusura.", "Veuillez sélectionner un résultat de clôture."],
    ["Referenz erfasst – Echtheit noch nicht bestätigt.", "Reference recorded – authenticity not yet verified.", "Riferimento registrato – autenticità non ancora verificata.", "Référence enregistrée – authenticité pas encore vérifiée."],
    ["Eine Abschlussreferenz fehlt.", "A closure reference is missing.", "Manca un riferimento di chiusura.", "Une référence de clôture manque."],
    ["Abschlussreferenz", "Closure reference", "Riferimento di chiusura", "Référence de clôture"],
    ["Finanzieller Datenabgleich", "Financial data reconciliation", "Riconciliazione dei dati finanziari", "Rapprochement des données financières"],
    ["Prüfkonflikte", "Review conflicts", "Conflitti di verifica", "Conflits de vérification"],
    ["Keine strukturellen Konflikte erkannt.", "No structural conflicts detected.", "Nessun conflitto strutturale rilevato.", "Aucun conflit structurel détecté."],
    ["Betragsdaten", "Amount data", "Dati sugli importi", "Données de montant"],
    ["Betragsdaten unvollständig oder ungültig.", "Amount data is incomplete or invalid.", "Dati sugli importi incompleti o non validi.", "Données de montant incomplètes ou invalides."],
    ["Dokumentierte Nachweise", "Documented evidence", "Prove documentate", "Justificatifs documentés"],
    ["Gespeicherte Nachweise konnten nicht gelesen werden.", "Saved evidence could not be read.", "Impossibile leggere le prove salvate.", "Les justificatifs enregistrés n’ont pas pu être lus."],
    ["Nachweis(e) dokumentiert. Dokumentation ist keine unabhängige Bestätigung.", "evidence item(s) documented. Documentation is not independent verification.", "prove documentate. La documentazione non costituisce una verifica indipendente.", "justificatif(s) documenté(s). La documentation ne constitue pas une vérification indépendante."],
    ["Dokumentation ist keine unabhängige Bestätigung.", "Documentation is not independent verification.", "La documentazione non costituisce una verifica indipendente.", "La documentation ne constitue pas une vérification indépendante."],
    ["Noch keine Nachweise dokumentiert.", "No evidence documented yet.", "Nessuna prova ancora documentata.", "Aucun justificatif documenté pour le moment."],
    ["Unabhängige Abschlussverifikation", "Independent closure verification", "Verifica indipendente della chiusura", "Vérification indépendante de la clôture"],
    ["Ein belastbarer Zahlungs-, Verrechnungs- oder Klärungsnachweis wurde noch nicht unabhängig bestätigt. Simulierte Daten genügen nicht.", "Reliable evidence of payment, offsetting or resolution has not yet been independently verified. Simulated data is insufficient.", "Non è ancora stata verificata in modo indipendente una prova attendibile di pagamento, compensazione o chiarimento. I dati simulati non sono sufficienti.", "Aucune preuve fiable de paiement, de compensation ou de résolution n’a encore été vérifiée de manière indépendante. Les données simulées ne suffisent pas."],
    ["Offene Sperrgründe", "Outstanding blockers", "Motivi di blocco aperti", "Motifs de blocage restants"],
    ["Bestätigte Rückgewinnung", "Verified recovery", "Recupero verificato", "Recouvrement vérifié"],
    ["Prüfung fehlgeschlagen", "Review failed", "Verifica non riuscita", "Échec de la vérification"],
    ["Die Abschlussbedingungen konnten nicht zuverlässig ausgewertet werden.", "The closure conditions could not be assessed reliably.", "Impossibile valutare in modo affidabile le condizioni di chiusura.", "Les conditions de clôture n’ont pas pu être évaluées de manière fiable."],
    ["Finale Fallakte freigeben", "Authorize final case file", "Autorizzare il fascicolo finale", "Autoriser le dossier définitif"],
    ["Die finale Freigabe ist ohne verifizierte Abschlussnachweise nicht möglich.", "Final authorization requires verified closure evidence.", "L’autorizzazione finale richiede prove di chiusura verificate.", "L’autorisation définitive nécessite des justificatifs de clôture vérifiés."],
    ["Vorläufige Demo-Prüfung. Keine echte finanzielle Rückgewinnung bestätigt.", "Preliminary demo review. No real financial recovery verified.", "Verifica demo provvisoria. Nessun recupero finanziario reale verificato.", "Vérification de démonstration provisoire. Aucun recouvrement financier réel vérifié."],
    ["Abschlussnachweise dokumentieren", "Document closure evidence", "Documentare le prove di chiusura", "Documenter les justificatifs de clôture"],
    ["Hier können vorhandene Nachweise zu diesem Fall erfasst werden. Eine Dokumentation bedeutet noch keine erfolgreiche Verifikation.", "Record existing evidence for this case here. Documenting evidence does not mean it has been successfully verified.", "Qui è possibile registrare le prove esistenti relative al caso. La documentazione non equivale a una verifica riuscita.", "Enregistrez ici les justificatifs existants pour ce dossier. Leur documentation ne signifie pas qu’ils ont été vérifiés avec succès."],
    ["Art des Nachweises", "Evidence type", "Tipo di prova", "Type de justificatif"],
    ["Bitte Nachweisart auswählen", "Please select an evidence type", "Selezionare un tipo di prova", "Veuillez sélectionner un type de justificatif"],
    ["Dokument- oder Buchungsreferenz", "Document or accounting reference", "Riferimento del documento o della registrazione contabile", "Référence du document ou de l’écriture comptable"],
    ["z. B. BK-102", "e.g. BK-102", "ad es. BK-102", "p. ex. BK-102"],
    ["Beschreibung des Nachweises", "Evidence description", "Descrizione della prova", "Description du justificatif"],
    ["Was dokumentiert dieser Beleg? Was muss noch überprüft werden?", "What does this document establish? What still needs to be checked?", "Che cosa documenta questa prova? Che cosa deve ancora essere verificato?", "Que documente cette pièce ? Que reste-t-il à vérifier ?"],
    ["Nachweis dokumentieren", "Document evidence", "Documentare la prova", "Documenter le justificatif"],
    ["Vorhandene Nachweisdaten konnten nicht gelesen werden. Die Speicherung bleibt zum Schutz der Daten gesperrt.", "Existing evidence data could not be read. Saving remains blocked to protect the data.", "Impossibile leggere i dati delle prove esistenti. Il salvataggio resta bloccato per proteggere i dati.", "Les données de justificatifs existantes n’ont pas pu être lues. L’enregistrement reste bloqué pour protéger les données."],
    ["Zentrale finanzielle Abschlussprüfung", "Central financial closure review", "Verifica finanziaria centrale della chiusura", "Vérification financière centrale de la clôture"],
    ["Gutschriftbetrag", "Credit note amount", "Importo della nota di credito", "Montant de l’avoir"],
    ["Simulierte Zahlungen", "Simulated payments", "Pagamenti simulati", "Paiements simulés"],
    ["Rechnerische Summe", "Calculated total", "Totale calcolato", "Total calculé"],
    ["Unabhängig bestätigte Rückgewinnung", "Independently verified recovery", "Recupero verificato in modo indipendente", "Recouvrement vérifié de manière indépendante"],
    ["Finale finanzielle Freigabe weiterhin gesperrt.", "Final financial approval remains blocked.", "L’approvazione finanziaria finale resta bloccata.", "L’approbation financière finale reste bloquée."],
    ["Die zentrale Abschlussprüfung konnte nicht durchgeführt werden. Ein finanzieller Abschluss darf nicht bestätigt werden.", "The central closure review could not be performed. Financial closure must not be confirmed.", "Impossibile eseguire la verifica centrale di chiusura. La chiusura finanziaria non deve essere confermata.", "La vérification centrale de clôture n’a pas pu être effectuée. La clôture financière ne doit pas être confirmée."],
    ["Erfasst am", "Recorded on", "Registrato il", "Enregistré le"],
    ["Dokumentiert – noch nicht verifiziert", "Documented – not yet verified", "Documentato – non ancora verificato", "Documenté – pas encore vérifié"],
    ["Bitte Nachweisart, Referenz und Beschreibung ausfüllen.", "Please complete the evidence type, reference and description.", "Compili il tipo di prova, il riferimento e la descrizione.", "Veuillez renseigner le type de justificatif, la référence et la description."],
    ["Nachweis dokumentiert und lokal gespeichert. Eine inhaltliche Prüfung steht noch aus.", "Evidence documented and saved locally. Content review is still pending.", "Prova documentata e salvata localmente. La verifica del contenuto è ancora da effettuare.", "Justificatif documenté et enregistré localement. L’examen du contenu reste à effectuer."],
    ["Speicherung fehlgeschlagen. Bisherige Nachweise bleiben unverändert.", "Saving failed. Existing evidence remains unchanged.", "Salvataggio non riuscito. Le prove precedenti restano invariate.", "Échec de l’enregistrement. Les justificatifs existants restent inchangés."],
    ["Administrativen Demo-Abschluss dokumentieren", "Document administrative demo closure", "Documentare la chiusura amministrativa demo", "Documenter la clôture administrative de démonstration"],
    ["Diese Funktion dokumentiert ausschließlich eine simulierte Abschlussentscheidung. Sie bestätigt weder einen echten Zahlungseingang noch einen unabhängig geprüften finanziellen Ausgleich.", "This function documents a simulated closure decision only. It confirms neither an actual receipt of payment nor an independently verified financial settlement.", "Questa funzione documenta esclusivamente una decisione di chiusura simulata. Non conferma un pagamento reale ricevuto né un regolamento finanziario verificato in modo indipendente.", "Cette fonction documente uniquement une décision de clôture simulée. Elle ne confirme ni une réception réelle de paiement ni un règlement financier vérifié de manière indépendante."],
    ["Warum soll der Fall administrativ geschlossen werden?", "Why should this case be closed administratively?", "Perché il caso deve essere chiuso amministrativamente?", "Pourquoi ce dossier doit-il être clôturé administrativement ?"],
    ["Begründung der Abschlussentscheidung", "Reason for the closure decision", "Motivazione della decisione di chiusura", "Motif de la décision de clôture"],
    ["Demo-Abschluss dokumentieren", "Document demo closure", "Documentare la chiusura demo", "Documenter la clôture de démonstration"],
    ["Fall wiedereröffnen", "Reopen case", "Riaprire il caso", "Rouvrir le dossier"],
    ["Administrativ abgeschlossen (Demo). Keine echte Rückgewinnung bestätigt.", "Administratively closed (demo). No real recovery verified.", "Chiuso amministrativamente (demo). Nessun recupero reale verificato.", "Clôturé administrativement (démo). Aucun recouvrement réel vérifié."],
    ["Noch kein administrativer Demo-Abschluss gespeichert.", "No administrative demo closure saved yet.", "Nessuna chiusura amministrativa demo ancora salvata.", "Aucune clôture administrative de démonstration enregistrée pour le moment."],
    ["Entscheidung", "Decision", "Decisione", "Décision"],
    ["Abschlussdaten konnten nicht zuverlässig gelesen werden. Änderungen sind gesperrt.", "Closure data could not be read reliably. Changes are blocked.", "Impossibile leggere in modo affidabile i dati di chiusura. Le modifiche sono bloccate.", "Les données de clôture n’ont pas pu être lues de manière fiable. Les modifications sont bloquées."],
    ["Abschluss gesperrt", "Closure blocked", "Chiusura bloccata", "Clôture bloquée"],
    ["Abschluss konnte nicht gespeichert werden", "Closure could not be saved", "Impossibile salvare la chiusura", "La clôture n’a pas pu être enregistrée"],
    ["Wiedereröffnung fehlgeschlagen", "Reopening failed", "Riapertura non riuscita", "Échec de la réouverture"],
    ["Kein Abschlussergebnis ausgewählt", "No closure outcome selected", "Nessun esito di chiusura selezionato", "Aucun résultat de clôture sélectionné"],
    ["Vollständiger finanzieller Ausgleich", "Full financial settlement", "Regolamento finanziario completo", "Règlement financier intégral"],
    ["Teilweiser finanzieller Ausgleich", "Partial financial settlement", "Regolamento finanziario parziale", "Règlement financier partiel"],
    ["Die zentrale Finanzprüfung fehlt.", "The central financial review is missing.", "Manca la verifica finanziaria centrale.", "La vérification financière centrale manque."],
    ["Die Finanzprüfung ist unvollständig.", "The financial review is incomplete.", "La verifica finanziaria è incompleta.", "La vérification financière est incomplète."],
    ["Finanzielle Prüfkonflikte vorhanden", "Financial review conflicts detected", "Conflitti di verifica finanziaria presenti", "Conflits de vérification financière détectés"],
    ["Gespeicherte Nachweise konnten nicht zuverlässig geladen werden.", "Saved evidence could not be loaded reliably.", "Impossibile caricare in modo affidabile le prove salvate.", "Les justificatifs enregistrés n’ont pas pu être chargés de manière fiable."],
    ["Genehmigte oder gutgeschriebene Beträge sind ungültig.", "Approved or credited amounts are invalid.", "Gli importi approvati o accreditati non sono validi.", "Les montants approuvés ou crédités sont invalides."],
    ["Keine ausgestellte Gutschrift vorhanden.", "No issued credit note available.", "Nessuna nota di credito emessa presente.", "Aucun avoir émis disponible."],
    ["Der finanzielle Ausgleich ist noch offen. Der Fall darf nicht als zurückgewonnen geschlossen werden.", "Financial settlement is outstanding. The case must not be closed as recovered.", "Il regolamento finanziario è ancora aperto. Il caso non deve essere chiuso come recuperato.", "Le règlement financier est encore en attente. Le dossier ne doit pas être clôturé comme recouvré."],
    ["Der ausgestellte Gutschriftbetrag deckt den genehmigten Betrag nicht exakt.", "The issued credit note does not exactly cover the approved amount.", "La nota di credito emessa non copre esattamente l’importo approvato.", "L’avoir émis ne couvre pas exactement le montant approuvé."],
    ["Ein unabhängig geprüfter vollständiger Zahlungs- oder Verrechnungsnachweis fehlt.", "Independently verified evidence of full payment or offsetting is missing.", "Manca una prova verificata in modo indipendente del pagamento o della compensazione completi.", "Une preuve de paiement ou de compensation intégrale vérifiée de manière indépendante manque."],
    ["Kein positiver Gutschriftbetrag vorhanden.", "No positive credit note amount available.", "Nessun importo positivo di nota di credito presente.", "Aucun montant d’avoir positif disponible."],
    ["Ein unabhängig geprüfter Teilausgleich fehlt.", "An independently verified partial settlement is missing.", "Manca un regolamento parziale verificato in modo indipendente.", "Un règlement partiel vérifié de manière indépendante manque."],
    ["Der offene Restbetrag und seine weitere Behandlung sind noch nicht abschließend geklärt.", "The outstanding balance and its further treatment have not been finally resolved.", "Il saldo residuo e il suo ulteriore trattamento non sono ancora definitivamente chiariti.", "Le solde restant et son traitement ultérieur ne sont pas encore définitivement clarifiés."],
    ["Eine geprüfte Lieferantenentscheidung oder dokumentierte Einigung fehlt.", "A reviewed supplier decision or documented agreement is missing.", "Manca una decisione del fornitore verificata o un accordo documentato.", "Une décision fournisseur vérifiée ou un accord documenté manque."],
    ["Dieser Fall enthält unterschiedliche Währungen. Eine finanzielle Abschlussfreigabe ist erst nach geprüfter Umrechnung und Zuordnung möglich.", "This case contains different currencies. Financial closure authorization requires verified conversion and allocation.", "Il caso contiene valute diverse. L’autorizzazione alla chiusura finanziaria richiede conversione e abbinamento verificati.", "Ce dossier contient plusieurs devises. L’autorisation de clôture financière nécessite une conversion et une affectation vérifiées."],
    ["Die Falldaten sind unvollständig oder ungültig.", "Case data is incomplete or invalid.", "I dati del caso sono incompleti o non validi.", "Les données du dossier sont incomplètes ou invalides."],
    ["Die Prüfdaten haben ein ungültiges Format.", "Review data has an invalid format.", "I dati di verifica hanno un formato non valido.", "Les données de vérification ont un format invalide."],
    ["Ein dokumentierter Nachweis hat einen ungültigen Typ.", "A documented evidence item has an invalid type.", "Una prova documentata ha un tipo non valido.", "Un justificatif documenté a un type invalide."],
    ["Eine Nachweisreferenz fehlt oder wurde mehrfach erfasst.", "An evidence reference is missing or duplicated.", "Un riferimento della prova manca o è duplicato.", "Une référence de justificatif manque ou est dupliquée."],
    ["Der Zahlungsnachweis ist unbekannt, mehrfach vorhanden oder gehört nicht zu diesem Fall.", "Payment evidence is unknown, duplicated or belongs to another case.", "La prova di pagamento è sconosciuta, duplicata o appartiene a un altro caso.", "Le justificatif de paiement est inconnu, dupliqué ou appartient à un autre dossier."],
    ["Der Buchungsnachweis konnte diesem Fall nicht eindeutig zugeordnet werden.", "The accounting evidence could not be uniquely matched to this case.", "Impossibile abbinare univocamente la prova contabile a questo caso.", "Le justificatif comptable n’a pas pu être rapproché de manière unique de ce dossier."],
    ["Die Gutschriftreferenz ist unbekannt, mehrfach vorhanden oder gehört zu einem anderen Fall.", "The credit note reference is unknown, duplicated or belongs to another case.", "Il riferimento della nota di credito è sconosciuto, duplicato o appartiene a un altro caso.", "La référence d’avoir est inconnue, dupliquée ou appartient à un autre dossier."],
    ["Eine Gutschriftreferenz fehlt oder ist mehrfach vorhanden.", "A credit note reference is missing or duplicated.", "Un riferimento di nota di credito manca o è duplicato.", "Une référence d’avoir manque ou est dupliquée."],
    ["Gutschriftbetrag, Lieferant oder Währung sind nicht plausibel.", "Credit note amount, supplier or currency is not plausible.", "Importo della nota di credito, fornitore o valuta non plausibili.", "Montant d’avoir, fournisseur ou devise non plausibles."],
    ["Eine Buchung enthält ungültige Daten oder eine mehrfach verwendete Buchungsnummer.", "An accounting entry contains invalid data or a duplicated entry number.", "Una registrazione contabile contiene dati non validi o un numero duplicato.", "Une écriture comptable contient des données invalides ou un numéro dupliqué."],
    ["Eine Zahlung enthält ungültige Daten oder eine mehrfach verwendete Zahlungsreferenz.", "A payment contains invalid data or a duplicated payment reference.", "Un pagamento contiene dati non validi o un riferimento duplicato.", "Un paiement contient des données invalides ou une référence dupliquée."],
    ["Die finanzielle Summe konnte nicht sicher berechnet werden.", "The financial total could not be calculated safely.", "Impossibile calcolare in modo sicuro il totale finanziario.", "Le total financier n’a pas pu être calculé de manière sûre."],
    ["Die Summe der Buchungen und Zahlungen übersteigt den verfügbaren Gutschriftbetrag.", "Accounting entries and payments exceed the available credit note amount.", "Registrazioni contabili e pagamenti superano l’importo disponibile della nota di credito.", "Les écritures comptables et paiements dépassent le montant d’avoir disponible."],
    ["Eine Zahlung und eine Buchung könnten denselben finanziellen Vorgang betreffen.", "A payment and an accounting entry may represent the same financial event.", "Un pagamento e una registrazione contabile potrebbero rappresentare la stessa operazione finanziaria.", "Un paiement et une écriture comptable pourraient représenter la même opération financière."],
    ["Die Zahlung gehört zu keiner Gutschrift dieses Falls.", "The payment does not belong to a credit note in this case.", "Il pagamento non appartiene a una nota di credito di questo caso.", "Le paiement ne correspond à aucun avoir de ce dossier."],
    ["Der genehmigte Betrag wurde nicht vollständig gutgeschrieben.", "The approved amount has not been fully credited.", "L’importo approvato non è stato interamente accreditato.", "Le montant approuvé n’a pas été intégralement crédité."],
    ["Automatischer Gutschriftabgleich", "Automated credit note matching", "Abbinamento automatico delle note di credito", "Rapprochement automatisé des avoirs"],
    ["Gutschriftreferenz in den vorhandenen Beispieldaten nicht gefunden. Manuelle Prüfung erforderlich.", "Credit note reference not found in the sample data. Manual review required.", "Riferimento della nota di credito non trovato nei dati di esempio. Verifica manuale necessaria.", "Référence d’avoir introuvable dans les données d’exemple. Examen manuel nécessaire."],
    ["Gutschriftreferenz mehrfach vorhanden. Eine eindeutige Zuordnung ist nicht möglich.", "Credit note reference is duplicated. Unique matching is not possible.", "Riferimento della nota di credito duplicato. Abbinamento univoco impossibile.", "Référence d’avoir dupliquée. Un rapprochement unique est impossible."],
    ["Gutschrift gefunden, aber Rechnung oder Lieferant stimmen nicht mit diesem Fall überein.", "Credit note found, but invoice or supplier does not match this case.", "Nota di credito trovata, ma fattura o fornitore non corrispondono a questo caso.", "Avoir trouvé, mais la facture ou le fournisseur ne correspond pas à ce dossier."],
    ["Gutschrift gehört zum Fall, aber Betrag oder Währung müssen geprüft werden.", "The credit note belongs to the case, but its amount or currency needs review.", "La nota di credito appartiene al caso, ma importo o valuta devono essere verificati.", "L’avoir appartient au dossier, mais son montant ou sa devise doit être vérifié."],
    ["Gutschriftreferenz gefunden und dem Fall zugeordnet.", "Credit note reference found and matched to the case.", "Riferimento della nota di credito trovato e abbinato al caso.", "Référence d’avoir trouvée et rapprochée du dossier."],
    ["Die Gutschrift ist in den Beispieldaten erfasst.", "The credit note is recorded in the sample data.", "La nota di credito è registrata nei dati di esempio.", "L’avoir est enregistré dans les données d’exemple."],
    ["Eine Zahlung oder tatsächliche Verrechnung ist dadurch nicht bestätigt.", "This does not confirm payment or actual offsetting.", "Ciò non conferma un pagamento o una compensazione effettiva.", "Cela ne confirme pas un paiement ou une compensation effective."],
    ["Der automatische Gutschriftabgleich konnte nicht abgeschlossen werden.", "Automated credit note matching could not be completed.", "Impossibile completare l’abbinamento automatico delle note di credito.", "Le rapprochement automatisé des avoirs n’a pas pu être terminé."],
    ["Automatischer Zahlungsabgleich", "Automated payment matching", "Abbinamento automatico dei pagamenti", "Rapprochement automatisé des paiements"],
    ["Zahlungsreferenz in den vorbereiteten Beispieldaten nicht gefunden.", "Payment reference not found in the prepared sample data.", "Riferimento di pagamento non trovato nei dati di esempio predisposti.", "Référence de paiement introuvable dans les données d’exemple préparées."],
    ["Zahlungsreferenz mehrfach vorhanden. Keine eindeutige Zuordnung möglich.", "Payment reference is duplicated. Unique matching is not possible.", "Riferimento di pagamento duplicato. Abbinamento univoco impossibile.", "Référence de paiement dupliquée. Un rapprochement unique est impossible."],
    ["Zahlung gefunden, aber Rechnung, Lieferant, Gutschrift oder Währung passen nicht eindeutig zu diesem Fall.", "Payment found, but invoice, supplier, credit note or currency does not uniquely match this case.", "Pagamento trovato, ma fattura, fornitore, nota di credito o valuta non corrispondono univocamente al caso.", "Paiement trouvé, mais facture, fournisseur, avoir ou devise ne correspond pas de manière unique au dossier."],
    ["Zahlung gehört zum Fall, aber Betrag oder Zahlungsdatum sind nicht plausibel.", "The payment belongs to the case, but its amount or payment date is not plausible.", "Il pagamento appartiene al caso, ma importo o data non sono plausibili.", "Le paiement appartient au dossier, mais son montant ou sa date n’est pas plausible."],
    ["Zahlungsquelle ist nicht als vorbereiteter Demo-Testdatensatz gekennzeichnet.", "The payment source is not marked as a prepared demo test dataset.", "La fonte del pagamento non è contrassegnata come dati di test demo predisposti.", "La source de paiement n’est pas identifiée comme jeu de données de test de démonstration préparé."],
    ["Zahlungsreferenz gefunden und dem Fall zugeordnet.", "Payment reference found and matched to the case.", "Riferimento di pagamento trovato e abbinato al caso.", "Référence de paiement trouvée et rapprochée du dossier."],
    ["Zahlung", "Payment", "Pagamento", "Paiement"],
    ["Zahlungsbetrag", "Payment amount", "Importo del pagamento", "Montant du paiement"],
    ["Zahlungsdatum", "Payment date", "Data del pagamento", "Date du paiement"],
    ["Referenzen, Betrag und Währung sind innerhalb der fiktiven Testdaten plausibel.", "References, amount and currency are plausible within the fictional test data.", "Riferimenti, importo e valuta sono plausibili nei dati di test fittizi.", "Les références, le montant et la devise sont plausibles dans les données de test fictives."],
    ["WICHTIG: Dies ist ein simulierter Zahlungseingang. Es wurde kein echter Bankumsatz unabhängig bestätigt.", "IMPORTANT: This is a simulated receipt of payment. No real bank transaction has been independently verified.", "IMPORTANTE: Si tratta di un pagamento ricevuto simulato. Nessuna operazione bancaria reale è stata verificata in modo indipendente.", "IMPORTANT : Il s’agit d’une réception de paiement simulée. Aucune opération bancaire réelle n’a été vérifiée de manière indépendante."],
    ["Der automatische Zahlungsabgleich konnte nicht abgeschlossen werden.", "Automated payment matching could not be completed.", "Impossibile completare l’abbinamento automatico dei pagamenti.", "Le rapprochement automatisé des paiements n’a pas pu être terminé."],
    ["Referenz nicht in den vorhandenen Buchungsdaten gefunden.", "Reference not found in the available accounting data.", "Riferimento non trovato nei dati contabili disponibili.", "Référence introuvable dans les données comptables disponibles."],
    ["Die Buchungsreferenz ist mehrfach vorhanden. Eine eindeutige Zuordnung ist nicht möglich.", "The accounting reference is duplicated. Unique matching is not possible.", "Il riferimento contabile è duplicato. Abbinamento univoco impossibile.", "La référence comptable est dupliquée. Un rapprochement unique est impossible."],
    ["Referenz gefunden, aber nicht eindeutig diesem Fall und Lieferanten zugeordnet.", "Reference found, but not uniquely matched to this case and supplier.", "Riferimento trovato, ma non abbinato univocamente al caso e al fornitore.", "Référence trouvée, mais pas rapprochée de manière unique de ce dossier et de ce fournisseur."],
    ["Buchung und Gutschrift gehören zum Fall, aber Betrag oder Währung müssen geprüft werden.", "Accounting entry and credit note belong to the case, but amount or currency needs review.", "Registrazione contabile e nota di credito appartengono al caso, ma importo o valuta devono essere verificati.", "L’écriture comptable et l’avoir appartiennent au dossier, mais le montant ou la devise doit être vérifié."],
    ["Referenz gefunden und dem Fall zugeordnet.", "Reference found and matched to the case.", "Riferimento trovato e abbinato al caso.", "Référence trouvée et rapprochée du dossier."],
    ["Zuordnungsbetrag", "Allocation amount", "Importo abbinato", "Montant affecté"],
    ["Betrag und Währung dieses Buchungseintrags sind plausibel.", "The amount and currency of this accounting entry are plausible.", "Importo e valuta di questa registrazione contabile sono plausibili.", "Le montant et la devise de cette écriture comptable sont plausibles."],
    ["Der tatsächliche finanzielle Ausgleich ist weiterhin nicht unabhängig bestätigt.", "Actual financial settlement remains independently unverified.", "Il regolamento finanziario effettivo resta non verificato in modo indipendente.", "Le règlement financier effectif reste non vérifié de manière indépendante."],
    ["Der Referenzabgleich konnte nicht durchgeführt werden.", "Reference matching could not be performed.", "Impossibile eseguire l’abbinamento dei riferimenti.", "Le rapprochement des références n’a pas pu être effectué."],
    ["Zugehörige Originalbelege öffnen ↗", "Open related original documents ↗", "Aprire i documenti originali associati ↗", "Ouvrir les documents originaux associés ↗"],
    ["Falldaten unvollständig oder ungültig", "Case data incomplete or invalid", "Dati del caso incompleti o non validi", "Données du dossier incomplètes ou invalides"],
    ["Prüfdaten haben ein ungültiges Format", "Review data has an invalid format", "Formato dei dati di verifica non valido", "Format des données de vérification invalide"],
    ["Ungültiger Nachweistyp", "Invalid evidence type", "Tipo di prova non valido", "Type de justificatif invalide"],
    ["Nachweisreferenz doppelt oder leer", "Evidence reference duplicated or empty", "Riferimento della prova duplicato o vuoto", "Référence du justificatif en double ou vide"],
    ["Zahlungsnachweis unbekannt, mehrfach oder fallfremd", "Payment evidence unknown, duplicated or unrelated to this case", "Prova di pagamento sconosciuta, duplicata o non pertinente al caso", "Justificatif de paiement inconnu, en double ou étranger au dossier"],
    ["Buchungsnachweis unbekannt, mehrfach oder fallfremd", "Booking evidence unknown, duplicated or unrelated to this case", "Prova contabile sconosciuta, duplicata o non pertinente al caso", "Justificatif comptable inconnu, en double ou étranger au dossier"],
    ["Gutschriftnachweis unbekannt, mehrfach oder fallfremd", "Credit note evidence unknown, duplicated or unrelated to this case", "Prova della nota di credito sconosciuta, duplicata o non pertinente al caso", "Justificatif d’avoir inconnu, en double ou étranger au dossier"],
    ["Gutschriftreferenz doppelt oder leer", "Credit note reference duplicated or empty", "Riferimento della nota di credito duplicato o vuoto", "Référence de l’avoir en double ou vide"],
    ["Gutschriftdaten ungültig", "Invalid credit note data", "Dati della nota di credito non validi", "Données de l’avoir invalides"],
    ["Buchungsreferenz oder Buchungsdaten ungültig", "Invalid booking reference or data", "Riferimento o dati contabili non validi", "Référence ou données comptables invalides"],
    ["Zahlungsreferenz oder Zahlungsdaten ungültig", "Invalid payment reference or data", "Riferimento o dati di pagamento non validi", "Référence ou données de paiement invalides"],
    ["Betragssumme nicht zuverlässig berechenbar", "Total cannot be calculated reliably", "Impossibile calcolare il totale in modo affidabile", "Le total ne peut pas être calculé de manière fiable"],
    ["Überbuchung: Gutschriftbetrag überschritten", "Overallocation: credit note amount exceeded", "Sovraimputazione: importo della nota di credito superato", "Suraffectation : montant de l’avoir dépassé"],
    ["Mögliche Doppelzählung von Zahlung und Buchung", "Possible double counting of payment and booking", "Possibile doppio conteggio di pagamento e registrazione", "Double comptabilisation possible du paiement et de l’écriture"],
    ["Zahlung gehört nicht zu einer Gutschrift dieses Falls", "Payment is unrelated to any credit note in this case", "Il pagamento non riguarda una nota di credito di questo caso", "Le paiement ne correspond à aucun avoir de ce dossier"],
    ["Genehmigter Betrag nicht vollständig gutgeschrieben", "Approved amount not fully credited", "Importo approvato non interamente accreditato", "Montant approuvé non intégralement crédité"],
    ["Gültige Abschlussart auswählen.", "Select a valid closure type.", "Selezionare un tipo di chiusura valido.", "Sélectionnez un type de clôture valide."],
    ["Gültige Abschlussreferenz angeben.", "Enter a valid closure reference.", "Inserire un riferimento di chiusura valido.", "Indiquez une référence de clôture valide."],
    ["Entscheidung mit 10 bis 1000 Zeichen begründen.", "Explain the decision in 10 to 1,000 characters.", "Motivare la decisione con 10–1000 caratteri.", "Justifiez la décision en 10 à 1 000 caractères."],
    ["Zentrale Finanzprüfung nicht verfügbar.", "Central financial review unavailable.", "Verifica finanziaria centrale non disponibile.", "Vérification financière centrale indisponible."],
    ["Offene finanzielle Prüfkonflikte müssen zuerst geklärt werden.", "Resolve outstanding financial review conflicts first.", "Chiarire prima i conflitti finanziari ancora aperti.", "Résolvez d’abord les conflits de vérification financière en suspens."],
    ["Beträge können nicht sicher geprüft werden.", "Amounts cannot be verified reliably.", "Impossibile verificare gli importi in modo affidabile.", "Les montants ne peuvent pas être vérifiés de manière fiable."],
    ["Keine Gutschrift erfasst.", "No credit note recorded.", "Nessuna nota di credito registrata.", "Aucun avoir enregistré."],
    ["Vollständiger Ausgleich ist rechnerisch nicht belegt.", "Full settlement is not supported by the calculations.", "Il regolamento completo non è comprovato dai calcoli.", "Le règlement intégral n’est pas étayé par les calculs."],
    ["Ein positiver Teilausgleich mit offenem Rest fehlt.", "No positive partial settlement with an outstanding balance exists.", "Manca un regolamento parziale positivo con saldo residuo aperto.", "Aucun règlement partiel positif avec solde restant n’est établi."],
    ["Eine passende dokumentierte Nachweisreferenz fehlt.", "A matching documented evidence reference is missing.", "Manca un riferimento documentato a una prova corrispondente.", "Il manque une référence documentée à un justificatif correspondant."],
    ["Fall ist bereits administrativ abgeschlossen.", "Case is already administratively closed.", "Il caso è già chiuso amministrativamente.", "Le dossier est déjà clôturé administrativement."],
    ["Der Fall ist nicht abgeschlossen.", "The case is not closed.", "Il caso non è chiuso.", "Le dossier n’est pas clôturé."],
    ["Wiedereröffnung mit 10 bis 1000 Zeichen begründen.", "Explain the reopening in 10 to 1,000 characters.", "Motivare la riapertura con 10–1000 caratteri.", "Justifiez la réouverture en 10 à 1 000 caractères."],
    ["Gespeicherter Abschlussdatensatz ist ungültig.", "Stored closure record is invalid.", "Il record di chiusura salvato non è valido.", "L’enregistrement de clôture sauvegardé est invalide."],
    ["Gespeicherte Abschlussentscheidung ist ungültig.", "Stored closure decision is invalid.", "La decisione di chiusura salvata non è valida.", "La décision de clôture sauvegardée est invalide."],
    ["Administrativen DEMO-Abschluss speichern?\n\nDies bestätigt ausdrücklich keine reale finanzielle Rückgewinnung.", "Save administrative DEMO closure?\n\nThis explicitly does not confirm any actual financial recovery.", "Salvare la chiusura amministrativa DEMO?\n\nQuesta operazione non conferma espressamente alcun recupero finanziario reale.", "Enregistrer la clôture administrative de DÉMO ?\n\nCela ne confirme expressément aucun recouvrement financier réel."],
    ["Bitte begründe die Wiedereröffnung (mindestens 10 Zeichen):", "Please explain the reopening (at least 10 characters):", "Motivare la riapertura (almeno 10 caratteri):", "Veuillez justifier la réouverture (au moins 10 caractères) :"],
    ["Der Dokumentenviewer ist nicht verfügbar.", "The document viewer is unavailable.", "Il visualizzatore di documenti non è disponibile.", "La visionneuse de documents est indisponible."],
    ["Die dokumentierten Nachweise konnten nicht geladen werden.", "The recorded evidence could not be loaded.", "Impossibile caricare le prove registrate.", "Les justificatifs enregistrés n’ont pas pu être chargés."],
    ["Die Buchungsdaten sind ungültig.", "The booking data is invalid.", "I dati contabili non sono validi.", "Les données comptables sont invalides."],
    ["Buchungsdaten sind ungültig.", "Booking data is invalid.", "I dati contabili non sono validi.", "Les données comptables sont invalides."],
    ["Abschlussprüfengine wurde nicht geladen.", "The closure review engine was not loaded.", "Il motore di verifica della chiusura non è stato caricato.", "Le moteur de vérification de la clôture n’a pas été chargé."],
    ["Abschlussentwurf konnte nicht geladen werden", "The closure draft could not be loaded", "Impossibile caricare la bozza di chiusura", "Le projet de clôture n’a pas pu être chargé"],
    ["Buchungsdaten konnten nicht geprüft werden.", "The booking data could not be reviewed.", "Impossibile verificare i dati contabili.", "Les données comptables n’ont pas pu être vérifiées."],
    ["Abschlussentwurf konnte nicht gespeichert werden", "The closure draft could not be saved", "Impossibile salvare la bozza di chiusura", "Le projet de clôture n’a pas pu être enregistré"],
    ["Unbekannter Prüfkonflikt (", "Unknown review conflict (", "Conflitto di verifica sconosciuto (", "Conflit de vérification inconnu ("],
    ["Zentrale Abschlussprüfengine nicht verfügbar.", "Central closure review engine unavailable.", "Motore centrale di verifica della chiusura non disponibile.", "Moteur central de vérification de la clôture indisponible."],
    ["Zentrale Freigabecheckliste", "Central approval checklist", "Lista di controllo centrale per l’approvazione", "Liste de contrôle centrale pour l’approbation"],
    ["Nachweise konnten nicht geladen werden", "The evidence could not be loaded", "Impossibile caricare le prove", "Les justificatifs n’ont pas pu être chargés"],
    ["Gemeinsame Prüfung auf Doppelzählungen", "Combined double-counting check", "Verifica combinata dei doppi conteggi", "Contrôle combiné des doubles comptabilisations"],
    ["WARNUNG: Eine Zahlungs- oder Buchungsreferenz wurde mehrfach als Nachweis dokumentiert.", "WARNING: A payment or booking reference has been recorded as evidence more than once.", "ATTENZIONE: Un riferimento di pagamento o contabile è stato registrato più volte come prova.", "ATTENTION : Une référence de paiement ou d’écriture a été enregistrée plusieurs fois comme justificatif."],
    ["Buchungsreferenz doppelt oder leer", "Booking reference duplicated or empty", "Riferimento contabile duplicato o vuoto", "Référence comptable en double ou vide"],
    ["Zahlungsreferenz doppelt oder leer", "Payment reference duplicated or empty", "Riferimento di pagamento duplicato o vuoto", "Référence de paiement en double ou vide"],
    ["Ungültige oder uneindeutige Buchung", "Invalid or ambiguous booking", "Registrazione contabile non valida o ambigua", "Écriture invalide ou ambiguë"],
    ["Ungültige oder uneindeutige Zahlung", "Invalid or ambiguous payment", "Pagamento non valido o ambiguo", "Paiement invalide ou ambigu"],
    ["Summenberechnung nicht sicher", "Total calculation unreliable", "Calcolo del totale non affidabile", "Calcul du total non fiable"],
    ["Keine Doppelzählung aus diesen Daten erkennbar.", "No double counting is apparent from this data.", "Questi dati non evidenziano doppi conteggi.", "Aucune double comptabilisation n’apparaît dans ces données."],
    ["Keine unabhängige Rückgewinnung bestätigt.", "No independently verified recovery.", "Nessun recupero verificato in modo indipendente.", "Aucun recouvrement vérifié de manière indépendante."],
    ["Zahlungsabgleich fehlgeschlagen", "Payment matching failed", "Abbinamento del pagamento non riuscito", "Échec du rapprochement du paiement"],
    ["Referenzabgleich fehlgeschlagen", "Reference matching failed", "Abbinamento del riferimento non riuscito", "Échec du rapprochement de la référence"],
    ["Nachweis konnte nicht gespeichert werden", "The evidence could not be saved", "Impossibile salvare la prova", "Le justificatif n’a pas pu être enregistré"],
    ["Buchungsdaten ungültig.", "Invalid booking data.", "Dati contabili non validi.", "Données comptables invalides."]
  );
    // Vorhandene deutsche Quelltexte aus anderen Dateien weiter erkennen.
  // Die sichtbaren Übersetzungen verwenden ausschließlich ClaraSR.
  const legacyBrandRows = rows
    .filter(row => /ClaraSR|CLARASR/.test(row[0]))
    .map(row => [
      row[0]
        .replace(/ClaraSR/g, "creditloop")
        .replace(/CLARASR/g, "CREDITLOOP"),
      row[1],
      row[2],
      row[3]
    ]);

  const normalize = value =>
    value.trim().replace(/\s+/g, " ");

  const lookup = new Map(
    [...rows, ...legacyBrandRows].map(row => [
      normalize(row[0]),
      row
    ])
  );

  lookup.set(
    "See what gets",
    lookup.get("Alles im")
  );

  lookup.set(
    "overlooked.",
    lookup.get("Blick.")
  );

  const sources = new WeakMap();

  function languageIndex() {
    return ({
      de: 0,
      en: 1,
      it: 2,
      fr: 3
    })[document.documentElement.lang] ?? 0;
  }

  function pick(values) {
    return values[languageIndex()];
  }

  function text(value) {
    const source = normalize(value);
    const row = lookup.get(source);

    if (row) {
      return row[languageIndex()]
        .replace(/creditloop/g, "ClaraSR")
        .replace(/CREDITLOOP/g, "CLARASR");
    }

    let match;

    // Seitennavigation, beispielsweise 1–5 von 12.
    match = source.match(/^(\d+)–(\d+) von (\d+)$/);

    if (match) {
      const [, first, last, total] = match;

      return pick([
        `${first}–${last} von ${total}`,
        `${first}–${last} of ${total}`,
        `${first}–${last} di ${total}`,
        `${first}–${last} sur ${total}`
      ]);
    }

    if (source === "0 von 0") {
      return pick([
        source,
        "0 of 0",
        "0 di 0",
        "0 sur 0"
      ]);
    }

    // Fallanzahl über der Vorgangsliste.
    match = source.match(/^(\d+) F(?:all|älle)$/);

    if (match) {
      const n = match[1];

      return pick([
        source,
        `${n} ${n === "1" ? "case" : "cases"}`,
        `${n} ${n === "1" ? "caso" : "casi"}`,
        `${n} ${n === "1" ? "dossier" : "dossiers"}`
      ]);
    }

    // Rechnungsnummer bleibt unverändert.
    match = source.match(
      /^Rechnung (.+) ist im Beispieldatensatz enthalten\.$/
    );

    if (match) {
      const id = match[1];

      return pick([
        source,
        `Invoice ${id} is included in the sample dataset.`,
        `La fattura ${id} è inclusa nei dati di esempio.`,
        `La facture ${id} figure dans les données d’exemple.`
      ]);
    }

    // Dynamische Anzahl genehmigter Retouren.
    match = source.match(
      /^(\d+) genehmigte Retoure\(n\) im Datensatz\.$/
    );

    if (match) {
      const count = match[1];

      return pick([
        source,
        `Approved returns in the dataset: ${count}.`,
        `Resi approvati nei dati: ${count}.`,
        `Retours approuvés dans les données : ${count}.`
      ]);
    }

    // Dynamische Anzahl erfasster Gutschriften.
    match = source.match(
      /^(\d+) Gutschrift\(en\) in den Beispieldaten vorhanden\.$/
    );

    if (match) {
      const count = match[1];

      return pick([
        source,
        `Credit notes in the sample data: ${count}.`,
        `Note di credito nei dati di esempio: ${count}.`,
        `Avoirs dans les données d’exemple : ${count}.`
      ]);
    }

    // Zusammengesetzte Beschriftungen und Statusanzeigen.
    match = source.match(
      /^(Status|Retouren|Gutschriften|Finanzstatus|Letzte Aktivität): (.+)$/
    );

    if (match) {
      const label = match[1];
      let detail = text(match[2]);

      if (label === "Letzte Aktivität") {
        detail = detail.replace(
          /^Heute, /,
          text("Heute") + ", "
        );

        if (languageIndex() !== 0) {
          detail = detail.replace(/ Uhr$/, "");
        }
      }

      return text(label) + ": " + detail;
    }

    // Gutschriftnummer und übersetzter Zuordnungsstatus.
    match = source.match(
      /^(.+ – )(Keine Buchung zugeordnet|Vollständig zugeordnet|Teilweise zugeordnet)$/
    );

    if (match) {
      return match[1] + text(match[2]);
    }

    match = source.match(
      /^Beispieldaten automatisch ausgewertet: (\d+) Vorgänge\. Abgleich erneut starten möglich\.$/
    );

    if (match) {
      const n = match[1];

      return pick([
        source,
        `Sample data evaluated automatically: ${n} cases. You can run reconciliation again.`,
        `Dati di esempio analizzati automaticamente: ${n} casi. È possibile ripetere la riconciliazione.`,
        `Données d’exemple analysées automatiquement : ${n} dossiers. Vous pouvez relancer le rapprochement.`
      ]);
    }

    match = source.match(
      /^(.*?) · (.*?) · (.*?) zugeordnet · Referenz: (.*)$/
    );

    if (match) {
      const [, id, type, amount, reference] = match;

      return pick([
        source,
        `${id} · ${text(type)} · ${amount} allocated · Reference: ${reference}`,
        `${id} · ${text(type)} · ${amount} abbinati · Riferimento: ${reference}`,
        `${id} · ${text(type)} · ${amount} affectés · Référence : ${reference}`
      ]);
    }

    match = source.match(
      /^Ursprünglicher Buchungsbetrag: (.*?) \| Umgerechnet: (.*)$/
    );

    if (match) {
      return pick([
        source,
        `Original accounting entry amount: ${match[1]} | Converted: ${match[2]}`,
        `Importo contabile originale: ${match[1]} | Convertito: ${match[2]}`,
        `Montant initial de l’écriture : ${match[1]} | Converti : ${match[2]}`
      ]);
    }

    match = source.match(
      /^Dokumentierter Kurs: (.*?) \| Kursdatum: (.*?) \| Quelle: (.*)$/
    );

    if (match) {
      return pick([
        source,
        `Documented rate: ${match[1]} | Rate date: ${match[2]} | Source: ${text(match[3])}`,
        `Tasso documentato: ${match[1]} | Data del tasso: ${match[2]} | Fonte: ${text(match[3])}`,
        `Taux documenté : ${match[1]} | Date du taux : ${match[2]} | Source : ${text(match[3])}`
      ]);
    }

    match = source.match(
      /^(Ursprünglicher|Späterer) Bewertungskurs \((.+)\)$/
    );

    if (match) {
      const initial = match[1] === "Ursprünglicher";

      return pick([
        source,
        `${initial ? "Original" : "Later"} valuation rate (${match[2]})`,
        `Tasso di valutazione ${initial ? "iniziale" : "successivo"} (${match[2]})`,
        `Taux de valorisation ${initial ? "initial" : "ultérieur"} (${match[2]})`
      ]);
    }

    match = source.match(
      /^Es besteht eine potenzielle Differenz von (.+) in der Originalwährung\. Der separat berechnete CHF-Wechselkurseffekt ist keine zusätzliche Lieferantenforderung\.$/
    );

    if (match) {
      return pick([
        source,
        `There is a potential discrepancy of ${match[1]} in the original currency. The separately calculated CHF exchange rate effect is not an additional claim against the supplier.`,
        `Esiste una differenza potenziale di ${match[1]} nella valuta originale. L’effetto del cambio in CHF calcolato separatamente non costituisce un credito aggiuntivo verso il fornitore.`,
        `Il existe un écart potentiel de ${match[1]} dans la devise d’origine. L’effet de change en CHF calculé séparément ne constitue pas une créance supplémentaire envers le fournisseur.`
      ]);
    }

    match = source.match(
      /^(Dokumente zu|Dokumentenarchiv zu|PDF-Vorschau:) (.+)$/
    );

    if (match) {
      const labels = {
        "Dokumente zu": [
          "Dokumente zu",
          "Documents for",
          "Documenti per",
          "Documents du dossier"
        ],
        "Dokumentenarchiv zu": [
          "Dokumentenarchiv zu",
          "Document archive for",
          "Archivio documenti per",
          "Archives documentaires du dossier"
        ],
        "PDF-Vorschau:": [
          "PDF-Vorschau:",
          "PDF preview:",
          "Anteprima PDF:",
          "Aperçu PDF :"
        ]
      };

      return pick(labels[match[1]]) + " " + match[2];
    }

    return value;
  }

  // Quelltexte bleiben für spätere Sprachwechsel erhalten.
  // Bei einer Änderung durch die Anwendung wird die neue
  // Anzeige als aktuelle Quelle übernommen.
  function bind(
    node,
    attribute = "textContent",
    translator = text
  ) {
    const current = node[attribute];

    let attributes = sources.get(node);

    if (!attributes) {
      attributes = new Map();
      sources.set(node, attributes);
    }

    let record = attributes.get(attribute);

    if (!record || current !== record.output) {
      record = {
        source: current
      };
    }

    const translated = translator(record.source);

    record.output = attribute === "nodeValue"
      ? (record.source.match(/^\s*/)?.[0] ?? "") +
        translated.trim() +
        (record.source.match(/\s*$/)?.[0] ?? "")
      : translated;

    attributes.set(attribute, record);

    if (current !== record.output) {
      node[attribute] = record.output;
    }
  }

  function bindAttribute(node, name) {
    const current = node.getAttribute(name);

    if (current === null) return;

    let attributes = sources.get(node);

    if (!attributes) {
      attributes = new Map();
      sources.set(node, attributes);
    }

    let record = attributes.get(name);

    if (!record || current !== record.output) {
      record = {
        source: current
      };
    }

    record.output = text(record.source);

    attributes.set(name, record);

    if (current !== record.output) {
      node.setAttribute(name, record.output);
    }
  }

  // Nur ausdrücklich ausgewählte Anzeigeelemente.
  // Keine Lieferantennamen oder Freitextnotizen.
  const selectors = [
    ".workflow-new-label",
    ".workflow-entry-time:not([datetime])",
    ".cl-unified-field > label",
    ".cl-demo-company-caption",
    ".cl-demo-company-description",
    "#cases-case-select option",
    "#settlement-case-select option",
    '.demo-nav-link[data-view="closure"]',
    "#closure-page h2",
    "#closure-page .results-heading p",
    'label[for="closure-case-select"]',
    "#closure-case-select option",
    ".demo-notice > strong",
    ".demo-notice > span",
    ".overview-card-primary > p",
    ".overview-steps strong",
    ".overview-list > li",
    ".overview-company > span",
    ".overview-footnote",
    "#summary-difference",
    ".intro h1 > span",
    ".document-modal-header small",
    ".document-modal-header h2",
    ".document-close",
    ".document-archive-label",
    ".document-category-tabs button",
    ".document-translation-controls button",
    ".document-translation-controls option",
    ".document-translation-hint",
    ".document-preview-empty small",
    ".document-preview-empty h3",
    ".document-preview-empty p",
    ".document-pdf-actions span",
    ".document-pdf-actions a",
    ".document-empty-state",
    ".workspace-heading p",
    "#data-table-head th",
    "#data-table-body td:last-child",
    ".data-footnote",
    ".run-area .section-label",
    "#run-demo > span:first-child",
    "#demo-message",
    ".demo-footer > span:last-child",
    ".case-workflow:has(.workflow-history) > h4",
    ".case-workflow:has(.workflow-history) .workflow-intro",
    ".case-workflow:has(.workflow-history) .workflow-label",
    ".case-workflow:has(.workflow-history) h5",
    ".case-workflow:has(.workflow-history) .workflow-feedback",
    ".case-workflow:has(.workflow-history) .workflow-entry-actions button",
    ".workflow-history-entry .workflow-system-label",
    ".workflow-history-entry:has(.workflow-system-label) > p",
    "#demo-settlement-details p",
    ".fx-demo-heading .section-label",
    ".fx-demo-heading h3",
    ".fx-demo-heading p",
    ".fx-demo-case-heading h4",
    ".fx-demo-case-heading p",
    ".fx-demo-field > span",
    ".fx-demo-summary > span",
    ".fx-demo-explanation",
    ".fx-demo-note",
    ".results-heading .section-label",
    ".results-heading p",
    ".workspace-heading .section-label",
    ".case-navigation-label",
    ".case-navigation-company > label",
    ".case-navigation-company > p",
    ".cl-company-description",
    "[data-supplier-select] option[value='all']",
    ".case-filter-button",
    ".case-workflow-status",
    ".case-last-activity",
    ".case-button .status-tag",
    ".case-list-reset",
    ".detail-category",
    ".detail-description",
    ".detail-fact small",
    ".detail-evidence > strong",
    ".detail-evidence > p",
    ".recovery-check-text > strong",
    ".recovery-check-text > p",
    ".recovery-next-action > strong",
    ".recovery-next-action > p",
    ".recovery-review-note",
    "#case-detail > .document-viewer-button",
    ".cl-workflow-host .workflow-footnote",
    "#case-detail .case-workflow:has(.workflow-history) > .workflow-footnote",
    ".case-workflow:has(.workflow-history) .workflow-history-entry > strong",
    ".cl-cases-range",
    ".cl-history-page-count",
    ".cl-cases-total",
    ".cl-cases-columns button",
    "#demo-settlement-rows tr td:last-child",
    "#demo-settlement-details .settlement-entry > strong"
  ].join(",");

  function apply() {
    translateClosure();

    document.querySelectorAll(
      "time.workflow-entry-time[datetime]"
    ).forEach(node => {
      if (
        typeof window.formatWorkflowEntryTime !== "function"
      ) {
        return;
      }

      const formatted = window.formatWorkflowEntryTime(
        node.dateTime
      );

      if (node.textContent !== formatted) {
        node.textContent = formatted;
      }
    });

    document.querySelectorAll(
      ".overview-steps > li, .intro h1"
    ).forEach(element => {
      element.childNodes.forEach(node => {
        if (
          node.nodeType === 3 &&
          node.nodeValue.trim()
        ) {
          bind(node, "nodeValue");
        }
      });
    });

    document.querySelectorAll(
      ".document-dialog"
    ).forEach(node => {
      bindAttribute(node, "aria-label");
    });

    document.querySelectorAll(
      ".document-pdf-frame"
    ).forEach(node => {
      bind(node, "title");
    });

    document.querySelectorAll(
      ".document-translation-controls select"
    ).forEach(node => {
      bindAttribute(node, "aria-label");
    });

    // Nur die Beschriftung übersetzen.
    // Die enthaltenen Belegzähler bleiben erhalten.
    document.querySelectorAll(
      ".data-tabs [data-tab]"
    ).forEach(tab => {
      tab.childNodes.forEach(node => {
        if (
          node.nodeType === 3 &&
          node.nodeValue.trim()
        ) {
          bind(node, "nodeValue");
        }
      });
    });

    // Beschriftungen der Bearbeitungs- und Löschsymbole.
    document.querySelectorAll(
      ".case-workflow:has(.workflow-history) " +
      ".workflow-entry-actions button"
    ).forEach(node => {
      bind(node, "title");
      bindAttribute(node, "aria-label");
    });

    document.querySelectorAll(selectors).forEach(node => {
      if (node.closest(".cl-closure-host")) {
        return;
      }

      bind(node);
    });

    for (const id of [
      "case-search-input",
      "closure-search-input",
      "settlement-search-input"
    ]) {
      const input = document.getElementById(id);

      if (!input) continue;

      bind(input, "placeholder");
      bindAttribute(input, "aria-label");
    }

    document.querySelectorAll(
      ".cl-cases-settings"
    ).forEach(node => {
      bind(node, "title");
      bindAttribute(node, "aria-label");
    });

    document.querySelectorAll(
      ".cl-cases-pagination"
    ).forEach(node => {
      bindAttribute(node, "aria-label");
    });
  }

  // Die Berichtssprache wird einmal je Export festgelegt.
  function createReportTranslator(language) {
    const index = ({
      de: 0,
      en: 1,
      it: 2,
      fr: 3
    })[language] ?? 0;

    // Vorhandene PDF-Texte verwenden teilweise ae/oe/ue.
    function key(value) {
      return normalize(String(value))
        .replace(/ä/g, "ae")
        .replace(/ö/g, "oe")
        .replace(/ü/g, "ue")
        .replace(/Ä/g, "Ae")
        .replace(/Ö/g, "Oe")
        .replace(/Ü/g, "Ue")
        .replace(/ß/g, "ss")
        .replace(/[–—]/g, "-")
        .toLowerCase();
    }

    const dictionary = new Map(
      [...rows, ...legacyBrandRows].map(row => [
        key(row[0]),
        /creditloop|CREDITLOOP/.test(row[0]) && index === 0
          ? row[0]
            .replace(/creditloop/g, "ClaraSR")
            .replace(/CREDITLOOP/g, "CLARASR")
          : row[index]
      ])
    );

    // Diese Beschriftungen übersetzen, ihren Inhalt erhalten.
    const rawLabels = new Set([
      "Unternehmen",
      "Rechnung",
      "Lieferant",
      "Referenz",
      "Nachweisreferenz",
      "Begruendung",
      "Grund",
      "Notiz",
      "Beschreibung",
      "Weitere gespeicherte Angaben",
      "Genehmigter Betrag",
      "Gutschriften erfasst",
      "Potenzielle Differenz",
      "Buchhalterisch zugeordnet",
      "Noch nicht zugeordnet",
      "Buchung",
      "Gutschrift",
      "Buchungsbetrag"
    ].map(key));

    function report(value) {
      const source = String(value ?? "");
      const direct = dictionary.get(key(source));

      if (direct !== undefined) {
        return direct;
      }

      // Beispielsweise:
      // Lieferant: Firmenname
      // Pruefergebnis: Betrag stimmt überein
      let match = source.match(
        /^([^:]+):\s?(.*)$/
      );

      if (match && dictionary.has(key(match[1]))) {
        const label = dictionary.get(key(match[1]));

        const detail = rawLabels.has(key(match[1]))
          ? match[2]
          : report(match[2]);

        return label + ": " + detail;
      }

      // Dokumentnamen bleiben unverändert.
      match = source.match(
        /^(\d+\. [A-Za-z0-9_-]+\.pdf - )(.+)$/
      );

      if (match) {
        return match[1] + report(match[2]);
      }

      // Nummerierte Abschlussereignisse.
      match = source.match(
        /^(\d+\. )(Demo-Abschluss|Wiedereroeffnung)( - .+)$/
      );

      if (match) {
        return match[1] +
          report(match[2]) +
          match[3];
      }

      // Nummerierte Einträge, Nachweise und Versionen.
      match = source.match(
        /^(Eintrag|Nachweis|Revision|Version) (\d+)(?:: (.+))?$/
      );

      if (match) {
        return report(match[1]) +
          " " + match[2] +
          (match[3]
            ? ": " + report(match[3])
            : "");
      }

      match = source.match(
        /^(\d+\. )Nicht auswertbarer Verlaufseintrag\.$/
      );

      if (match) {
        return match[1] +
          report("Nicht auswertbarer Eintrag.");
      }

      // Seitenzahlen der selbst erzeugten Berichtsseiten.
      match = source.match(
        /^(?:creditloop|ClaraSR) Pruefbericht\s*\|\s*Seite (\d+) von (\d+)$/
      );

      if (match) {
        return [
          `ClaraSR Prüfbericht | Seite ${match[1]} von ${match[2]}`,
          `ClaraSR review report | Page ${match[1]} of ${match[2]}`,
          `ClaraSR rapporto di verifica | Pagina ${match[1]} di ${match[2]}`,
          `ClaraSR rapport de vérification | Page ${match[1]} sur ${match[2]}`
        ][index];
      }

      return source;
    }

    return report;
  }

  window.CreditloopI18n.createReportTranslator =
    createReportTranslator;

  // Abschlussprüfung:
  // Anzeigetexte übersetzen, eingegebene Inhalte erhalten.
  function createClosureTranslator(language) {
    const index = ({
      de: 0,
      en: 1,
      it: 2,
      fr: 3
    })[language] ?? 0;

    const report = createReportTranslator(language);

    const dictionary = new Map(
      [...rows, ...legacyBrandRows].map(row => [
        normalize(row[0]),
        row[index]
          .replace(/creditloop/g, "ClaraSR")
          .replace(/CREDITLOOP/g, "CLARASR")
      ])
    );

    const phrases = [...dictionary.entries()]
      .filter(([source]) => source.length >= 10)
      .sort((a, b) => b[0].length - a[0].length);

    const rawLabels =
      /^(Referenz|Nachweisreferenz|Abschlussreferenz|Beschreibung|Entscheidung|Grund|Notiz|Erfasst am):\s?(.*)$/s;

    function translate(value) {
      const source = String(value ?? "");
      const trimmed = source.trim();

      if (!trimmed || index === 0) {
        return source;
      }

      // Inhalte hinter diesen Beschriftungen stammen
      // aus Eingaben oder gespeicherten Referenzen.
      const userContent = trimmed.match(rawLabels);

      if (userContent) {
        return report(userContent[1]) +
          ": " +
          userContent[2];
      }

      const direct = dictionary.get(
        normalize(trimmed)
      );

      if (direct !== undefined) {
        return direct;
      }

      if (source.includes("\n")) {
        return source
          .split("\n")
          .map(translate)
          .join("\n");
      }

      let match = trimmed.match(
        /^(\d+\. )(Demo-Abschluss|Wiedereröffnung)( – .*?)( – (?:Grund|Referenz): )(.*)$/s
      );

      if (match) {
        const label = match[4].includes("Grund")
          ? "Grund"
          : "Referenz";

        return match[1] +
          report(match[2]) +
          match[3] +
          " – " +
          report(label) +
          ": " +
          match[5];
      }

      match = trimmed.match(
        /^Prüfung für (.*)$/s
      );

      if (match) {
        return report("Prüfung für") +
          " " +
          match[1];
      }

      match = trimmed.match(
        /^([✓○•]\s*)(.*)$/s
      );

      if (match) {
        return match[1] + translate(match[2]);
      }

      match = trimmed.match(
        /^(\d+) Nachweis\(e\) dokumentiert\.(.*)$/s
      );

      if (match) {
        const count = match[1];

        const heading = [
          "",
          `${count} evidence item(s) recorded.`,
          `${count} prova/e registrata/e.`,
          `${count} justificatif(s) enregistré(s).`
        ][index];

        return heading +
          (
            match[2].trim()
              ? " " + translate(match[2])
              : ""
          );
      }

      if (trimmed.includes(" · ")) {
        return trimmed
          .split(" · ")
          .map(translate)
          .join(" · ");
      }

      match = trimmed.match(
        /^([^:]+):\s?(.*)$/s
      );

      if (
        match &&
        report(match[1]) !== match[1]
      ) {
        return report(match[1]) +
          ": " +
          translate(match[2]);
      }

      const converted = report(trimmed);

      if (converted !== trimmed) {
        return converted;
      }

      if (trimmed.endsWith(".")) {
        const withoutStop = report(
          trimmed.slice(0, -1)
        );

        if (
          withoutStop !== trimmed.slice(0, -1)
        ) {
          return withoutStop + ".";
        }
      }

      // Zusammengesetzte Systemmeldungen:
      // längste feste Phrase zuerst ersetzen.
      let remaining = trimmed;
      let output = "";

      while (remaining) {
        let best = null;

        for (const [phrase, target] of phrases) {
          const at = remaining.indexOf(phrase);

          if (at < 0) continue;

          if (!best || at < best.at) {
            best = {
              at,
              phrase,
              target
            };
          }
        }

        if (!best) {
          output += remaining;
          break;
        }

        output += remaining.slice(0, best.at) +
          best.target;

        remaining = remaining.slice(
          best.at + best.phrase.length
        );
      }

      return output;
    }

    return translate;
  }

  function translateClosure() {
    const translate = createClosureTranslator(
      document.documentElement.lang
    );

    document.querySelectorAll(
      ".cl-closure-host"
    ).forEach(host => {
      const walker = document.createTreeWalker(
        host,
        NodeFilter.SHOW_TEXT
      );

      const nodes = [];

      while (walker.nextNode()) {
        nodes.push(walker.currentNode);
      }

      nodes.forEach(node => {
        if (
          node.nodeValue.trim() &&
          !node.parentElement.closest(
            "textarea, input, script, style, " +
            "[data-closure-raw]"
          )
        ) {
          bind(node, "nodeValue", translate);
        }
      });

      host.querySelectorAll(
        "[placeholder], [title]"
      ).forEach(node => {
        if (node.hasAttribute("placeholder")) {
          bind(node, "placeholder", translate);
        }

        if (node.hasAttribute("title")) {
          bind(node, "title", translate);
        }
      });
    });
  }

  window.CreditloopI18n.translateClosureText =
    value => createClosureTranslator(
      document.documentElement.lang
    )(value);

  // Dynamisch erneuerte Anzeigen gesammelt aktualisieren.
  let scheduled = false;

  function schedule() {
    if (scheduled) return;

    scheduled = true;

    queueMicrotask(() => {
      scheduled = false;
      apply();
    });
  }

  const contentObserver = new MutationObserver(
    schedule
  );

  contentObserver.observe(document.body, {
    childList: true,
    subtree: true,
    characterData: true
  });

  const languageObserver = new MutationObserver(
    schedule
  );

  languageObserver.observe(
    document.documentElement,
    {
      attributes: true,
      attributeFilter: ["lang"]
    }
  );

  document.addEventListener(
    "DOMContentLoaded",
    schedule,
    { once: true }
  );

  apply();
})();
/* ==========================================
   Übersicht: So funktioniert die Demo
   DE / EN / IT / FR
   ========================================== */

(() => {
  "use strict";

  const guideTranslations = {
    de: {
      eyebrow: "SO FUNKTIONIERT DIE DEMO",
      title:
        "Lieferantenreklamationen und Gutschriften " +
        "bis zur Klärung verfolgen",
      intro:
        "Erkunden Sie anhand fiktiver Geschäftsvorgänge, " +
        "wie ClaraSR genehmigte Retouren mit " +
        "Lieferantengutschriften vergleicht, mögliche " +
        "Abweichungen sichtbar macht und die weitere " +
        "Prüfung unterstützt.",
      step1Title: "Beispieldaten vergleichen",
      step1Text:
        "Öffnen Sie „Belege & Abgleich“. Dort sehen Sie die " +
        "hinterlegten Rechnungen, Retouren und Gutschriften. " +
        "Über „Abgleich starten“ können Sie die " +
        "Beispieldaten nochmals vergleichen lassen.",
      step2Title: "Einen Vorgang untersuchen",
      step2Text:
        "Unter „Fälle“ wählen Sie einen Vorgang aus. " +
        "Prüfen Sie die festgestellte Abweichung und öffnen " +
        "Sie die zugehörigen Musterbelege. Anschließend " +
        "können Sie einen Bearbeitungsstand setzen und " +
        "eine interne Notiz speichern.",
      step3Title: "Ergebnis und Nachweise dokumentieren",
      step3Text:
        "In der „Abschlussprüfung“ erfassen Sie ein " +
        "mögliches Abschlussergebnis und die dazugehörigen " +
        "Nachweise. Die Demo zeigt, welche Angaben " +
        "vorliegen und welche Voraussetzungen für eine " +
        "Freigabe noch fehlen.",
      step4Title:
        "Die Zuordnung einer Gutschrift nachvollziehen",
      step4Text:
        "Unter „Gutschriften & Ausgleich“ sehen Sie, " +
        "welche ausgestellten Gutschriften den vorhandenen " +
        "Buchungsdaten zugeordnet wurden und welcher Betrag " +
        "noch nicht zugeordnet ist. Über die " +
        "Gutschriftnummer öffnen Sie den zugehörigen " +
        "Musterbeleg.",
      fxText:
        "Die zusätzliche Wechselkursprüfung zeigt anhand " +
        "fiktiver Beispielkurse, wie sich unterschiedliche " +
        "Bewertungszeitpunkte auf den CHF-Gegenwert " +
        "einer Gutschrift auswirken können.",
      exampleTitle: "Ein Beispiel zum Ausprobieren",
      exampleText:
        "Für INV-101 ist eine Retoure über CHF 2’400.00 " +
        "genehmigt. Im Beispieldatensatz wurde keine " +
        "passende Gutschrift gefunden.",
      exampleAction:
        "Öffnen Sie den Vorgang unter „Fälle“, sehen Sie " +
        "sich Rechnung und Retourenbeleg an und " +
        "dokumentieren Sie einen möglichen nächsten " +
        "Prüfschritt – beispielsweise die Prüfung " +
        "eines Lieferantenkontoauszugs.",
      importantTitle: "Wichtig",
      importantText:
        "Eine fehlende Gutschrift im Datensatz beweist " +
        "nicht, dass außerhalb dieser Daten keine " +
        "Gutschrift existiert. Auch eine Buchungszuordnung " +
        "allein bestätigt noch keine tatsächliche " +
        "Rückzahlung oder Verrechnung.",
      noteTitle: "Hinweis zur Demo",
      noteText:
        "Alle Geschäftsvorgänge und Belege sind fiktiv. " +
        "Es werden keine echten Kundendokumente " +
        "hochgeladen. Ihre Änderungen werden lokal in " +
        "diesem Browser gespeichert; sie verändern keine " +
        "echten Geschäftsdaten und werden nicht an " +
        "Lieferanten gesendet.",
      startButton: "Zu Belege & Abgleich →"
    },

    en: {
      eyebrow: "HOW THE DEMO WORKS",
      title:
        "Track supplier claims and credit notes through to resolution",
      intro:
        "Explore fictional business transactions to see " +
        "how ClaraSR compares approved returns with " +
        "supplier credit notes, highlights potential " +
        "discrepancies and supports further review.",
      step1Title: "Compare sample data",
      step1Text:
        "Open “Documents & reconciliation” to view the sample invoices, " +
        "returns and credit notes. Select " +
        "“Run reconciliation” to compare the " +
        "sample data again.",
      step2Title: "Investigate a case",
      step2Text:
        "Select a transaction under “Cases”. Review the " +
        "identified discrepancy and open the related " +
        "sample documents. You can then set a processing " +
        "status and save an internal note.",
      step3Title: "Document the outcome and evidence",
      step3Text:
        "Under “Closure review”, record a possible " +
        "closure outcome and its supporting evidence. " +
        "The demo shows which information is available " +
        "and which requirements for authorization " +
        "are still missing.",
      step4Title: "Understand a credit note’s allocation",
      step4Text:
        "Under “Credit notes & settlement”, see which " +
        "issued credit notes have been allocated to the " +
        "available accounting entries and which amounts " +
        "remain unallocated. Select a credit note number " +
        "to open its sample document.",
      fxText:
        "The additional exchange rate review uses " +
        "fictional sample rates to show how different " +
        "valuation dates can affect a credit note’s " +
        "CHF equivalent.",
      exampleTitle: "An example to try",
      exampleText:
        "A return of CHF 2’400.00 has been approved for " +
        "INV-101. No matching credit note was found " +
        "in the sample dataset.",
      exampleAction:
        "Open the transaction under “Cases”, examine " +
        "the invoice and return document, and record " +
        "a possible next review step – for example, " +
        "checking a supplier account statement.",
      importantTitle: "Important",
      importantText:
        "A missing credit note in the dataset does not " +
        "prove that no credit note exists outside that " +
        "data. An accounting allocation alone also does " +
        "not confirm an actual refund or offset.",
      noteTitle: "About this demo",
      noteText:
        "All transactions and documents are fictional. " +
        "No real customer documents are uploaded. Your " +
        "changes are saved locally in this browser; " +
        "they do not change real business data and " +
        "are not sent to suppliers.",
      startButton: "Go to documents & reconciliation →"
    },

    it: {
      eyebrow: "COME FUNZIONA LA DEMO",
      title:
        "Seguire reclami ai fornitori e note di credito fino alla risoluzione",
      intro:
        "Esplori operazioni commerciali fittizie per " +
        "scoprire come ClaraSR confronta i resi " +
        "approvati con le note di credito dei fornitori, " +
        "evidenzia possibili differenze e supporta " +
        "le verifiche successive.",
      step1Title: "Confrontare i dati di esempio",
      step1Text:
        "Apra “Documenti e riconciliazione”. Qui trova le fatture, " +
        "i resi e le note di credito di esempio. " +
        "Selezioni “Avviare la riconciliazione” per " +
        "confrontare nuovamente i dati di esempio.",
      step2Title: "Esaminare un caso",
      step2Text:
        "Selezioni un’operazione nella sezione “Casi”. " +
        "Verifichi la differenza rilevata e apra i " +
        "documenti di esempio associati. Può quindi " +
        "impostare uno stato di lavorazione e salvare " +
        "una nota interna.",
      step3Title: "Documentare l’esito e le prove",
      step3Text:
        "Nella “Verifica della chiusura” registri un " +
        "possibile esito della chiusura e le relative " +
        "prove. La demo mostra quali informazioni sono " +
        "disponibili e quali requisiti per " +
        "l’autorizzazione mancano ancora.",
      step4Title:
        "Comprendere l’abbinamento di una nota di credito",
      step4Text:
        "Nella sezione “Note di credito e regolamento” " +
        "può vedere quali note di credito emesse sono " +
        "state abbinate alle registrazioni contabili " +
        "disponibili e quale importo resta da abbinare. " +
        "Selezioni il numero della nota di credito " +
        "per aprire il documento di esempio associato.",
      fxText:
        "L’ulteriore verifica dei cambi utilizza tassi " +
        "di esempio fittizi per mostrare come date di " +
        "valutazione diverse possano influire sul " +
        "controvalore in CHF di una nota di credito.",
      exampleTitle: "Un esempio da provare",
      exampleText:
        "Per INV-101 è stato approvato un reso di " +
        "CHF 2’400.00. Nei dati di esempio non è stata " +
        "trovata una nota di credito corrispondente.",
      exampleAction:
        "Apra l’operazione nella sezione “Casi”, " +
        "esamini la fattura e il documento di reso e " +
        "documenti un possibile passo di verifica " +
        "successivo, ad esempio il controllo di " +
        "un estratto conto del fornitore.",
      importantTitle: "Importante",
      importantText:
        "L’assenza di una nota di credito nei dati non " +
        "dimostra che non ne esista una al di fuori " +
        "di tali dati. Anche un abbinamento contabile, " +
        "da solo, non conferma un rimborso o una " +
        "compensazione effettivi.",
      noteTitle: "Informazioni sulla demo",
      noteText:
        "Tutte le operazioni e i documenti sono fittizi. " +
        "Non vengono caricati documenti reali dei clienti. " +
        "Le Sue modifiche vengono salvate localmente " +
        "in questo browser; non modificano dati " +
        "commerciali reali e non vengono inviate " +
        "ai fornitori.",
      startButton: "Vai a documenti e riconciliazione →"
    },

    fr: {
      eyebrow: "COMMENT FONCTIONNE LA DÉMO",
      title:
        "Suivre les réclamations fournisseurs et les avoirs jusqu’à leur résolution",
      intro:
        "Découvrez, à partir d’opérations commerciales " +
        "fictives, comment ClaraSR compare les retours " +
        "approuvés aux avoirs fournisseurs, met en " +
        "évidence les écarts potentiels et facilite " +
        "les vérifications suivantes.",
      step1Title: "Comparer les données d’exemple",
      step1Text:
        "Ouvrez « Documents et rapprochement ». Vous y trouverez " +
        "les factures, retours et avoirs d’exemple. " +
        "Sélectionnez « Lancer le rapprochement » pour " +
        "comparer à nouveau les données d’exemple.",
      step2Title: "Examiner un dossier",
      step2Text:
        "Sélectionnez une opération dans « Dossiers ». " +
        "Examinez l’écart constaté et ouvrez les " +
        "documents d’exemple associés. Vous pouvez " +
        "ensuite définir un état de traitement " +
        "et enregistrer une note interne.",
      step3Title:
        "Documenter le résultat et les justificatifs",
      step3Text:
        "Dans « Vérification de la clôture », " +
        "enregistrez un résultat de clôture possible " +
        "et les justificatifs correspondants. La démo " +
        "montre les informations disponibles et les " +
        "conditions d’autorisation encore manquantes.",
      step4Title: "Comprendre l’affectation d’un avoir",
      step4Text:
        "Dans « Avoirs et règlement », vous pouvez " +
        "voir quels avoirs émis ont été affectés aux " +
        "écritures comptables disponibles et quel " +
        "montant reste à affecter. Sélectionnez le " +
        "numéro de l’avoir pour ouvrir le document " +
        "d’exemple correspondant.",
      fxText:
        "La vérification complémentaire des taux de " +
        "change utilise des taux fictifs pour montrer " +
        "comment différentes dates d’évaluation peuvent " +
        "influencer la contre-valeur en CHF d’un avoir.",
      exampleTitle: "Un exemple à essayer",
      exampleText:
        "Un retour de CHF 2’400.00 a été approuvé pour " +
        "INV-101. Aucun avoir correspondant n’a été " +
        "trouvé dans les données d’exemple.",
      exampleAction:
        "Ouvrez l’opération dans « Dossiers », " +
        "consultez la facture et le justificatif de " +
        "retour, puis documentez une prochaine étape " +
        "de vérification possible, par exemple le " +
        "contrôle d’un relevé de compte fournisseur.",
      importantTitle: "Important",
      importantText:
        "L’absence d’un avoir dans les données ne " +
        "prouve pas qu’aucun avoir n’existe en dehors " +
        "de celles-ci. Une affectation comptable seule " +
        "ne confirme pas non plus un remboursement " +
        "ou une compensation effectifs.",
      noteTitle: "À propos de la démo",
      noteText:
        "Toutes les opérations et pièces sont fictives. " +
        "Aucun document client réel n’est téléversé. " +
        "Vos modifications sont enregistrées localement " +
        "dans ce navigateur ; elles ne modifient " +
        "aucune donnée commerciale réelle et ne sont " +
        "pas envoyées aux fournisseurs.",
      startButton:
        "Aller aux documents et au rapprochement →"
    }
  };

  function applyGuideLanguage() {
    const language = String(
      document.documentElement.lang || "de"
    )
      .toLowerCase()
      .split("-")[0];

    const dictionary =
      guideTranslations[language] ??
      guideTranslations.de;

    document.querySelectorAll(
      "[data-guide-text]"
    ).forEach(node => {
      const key = node.dataset.guideText;
      const translated = dictionary[key];

      if (
        typeof translated === "string" &&
        node.textContent !== translated
      ) {
        node.textContent = translated;
      }
    });
  }

  function initializeGuide() {
    applyGuideLanguage();

    document.querySelectorAll(
      "[data-guide-start]"
    ).forEach(link => {
      link.addEventListener("click", event => {
        if (
          typeof window.showDemoView === "function"
        ) {
          event.preventDefault();
          window.showDemoView("reconcile");
        }
      });
    });

    const languageObserver = new MutationObserver(
      applyGuideLanguage
    );

    languageObserver.observe(
      document.documentElement,
      {
        attributes: true,
        attributeFilter: ["lang"]
      }
    );
  }

  if (document.readyState === "loading") {
    document.addEventListener(
      "DOMContentLoaded",
      initializeGuide,
      { once: true }
    );
  } else {
    initializeGuide();
  }
})();

/* ==========================================
   Geplante Erweiterungen
   ========================================== */

(() => {
  const translations = {
    en: {
      navigation: "Planned features",
      eyebrow: "PRODUCT OUTLOOK",
      title: "Planned features",
      intro:
        "This section outlines possible future extensions to ClaraSR. " +
        "These features are not part of this demo. Their scope and " +
        "implementation will depend on feedback and requirements " +
        "from potential customers.",
      status: "Planned · Not yet available",
      mobileTitle:
        "Document incoming goods directly on a smartphone",
      mobileIntro:
        "Employees should be able to record discrepancies as goods " +
        "arrive, directly in the warehouse or goods receiving area.",
      step1Title: "Identify the item and delivery",
      step1Text:
        "Scan an item's barcode or QR code and link it to the " +
        "relevant purchase order or delivery.",
      step2Title: "Record discrepancies",
      step2Text:
        "Document expected and received quantities, damage or " +
        "quality issues, and add photos.",
      step3Title: "Keep supporting information together",
      step3Text:
        "Details and photos should be linked directly to the " +
        "relevant case and made available for further review.",
      step4Title: "Track resolution and settlement",
      step4Text:
        "The recorded discrepancy should feed into the next steps: " +
        "preparing a claim, following up on supplier responses, " +
        "and checking the credit note and its settlement.",
      exampleTitle: "A possible example",
      exampleText:
        "Of 100 spare parts ordered, 95 arrive. An employee records " +
        "the shortage and adds photos. Purchasing or accounting " +
        "can then review the information and follow up with the supplier.",
      note:
        "The initial plan is a mobile-friendly web interface. " +
        "Whether a separate app is needed will depend on actual demand."
    },

    it: {
      navigation: "Funzionalità previste",
      eyebrow: "SVILUPPI FUTURI",
      title: "Funzionalità previste",
      intro:
        "Questa sezione presenta possibili sviluppi futuri di ClaraSR. " +
        "Le funzionalità descritte non fanno ancora parte della demo. " +
        "La loro portata e realizzazione dipenderanno dai riscontri " +
        "e dalle esigenze dei potenziali clienti.",
      status: "In programma · Non ancora disponibile",
      mobileTitle:
        "Documentare la merce in entrata con lo smartphone",
      mobileIntro:
        "Il personale dovrebbe poter registrare le discrepanze " +
        "già alla consegna, direttamente in magazzino o " +
        "nell'area di ricevimento merci.",
      step1Title: "Identificare l'articolo e la consegna",
      step1Text:
        "Scansionare il codice a barre o QR dell'articolo " +
        "e associarlo all'ordine o alla consegna corrispondente.",
      step2Title: "Registrare le discrepanze",
      step2Text:
        "Documentare le quantità previste e ricevute, i danni " +
        "o i problemi di qualità e aggiungere foto.",
      step3Title: "Riunire la documentazione nel caso",
      step3Text:
        "I dati e le foto dovrebbero essere associati direttamente " +
        "al caso pertinente e resi disponibili per ulteriori verifiche.",
      step4Title: "Seguire la risoluzione e il regolamento",
      step4Text:
        "La discrepanza documentata dovrebbe avviare le fasi successive: " +
        "preparare il reclamo, seguire le risposte del fornitore " +
        "e verificare la nota di credito e il relativo regolamento.",
      exampleTitle: "Un possibile esempio",
      exampleText:
        "Su 100 ricambi ordinati ne arrivano 95. Un collaboratore " +
        "registra l'ammanco e aggiunge foto. L'ufficio acquisti " +
        "o la contabilità possono quindi verificare la documentazione " +
        "e proseguire il chiarimento con il fornitore.",
      note:
        "Inizialmente è prevista un'interfaccia web ottimizzata " +
        "per smartphone. La necessità di un'app separata " +
        "sarà valutata in base alle esigenze effettive."
    },

    fr: {
      navigation: "Fonctionnalités prévues",
      eyebrow: "ÉVOLUTIONS FUTURES",
      title: "Fonctionnalités prévues",
      intro:
        "Cette section présente des évolutions possibles de ClaraSR. " +
        "Les fonctionnalités décrites ne font pas encore partie de " +
        "cette démonstration. Leur périmètre et leur réalisation " +
        "dépendront des retours et des besoins des clients potentiels.",
      status: "Prévu · Pas encore disponible",
      mobileTitle:
        "Documenter les marchandises reçues avec un smartphone",
      mobileIntro:
        "Le personnel devrait pouvoir enregistrer les écarts " +
        "dès la livraison, directement dans l'entrepôt " +
        "ou à la réception des marchandises.",
      step1Title: "Identifier l'article et la livraison",
      step1Text:
        "Scanner le code-barres ou le code QR de l'article " +
        "et l'associer à la commande ou à la livraison correspondante.",
      step2Title: "Consigner les écarts",
      step2Text:
        "Documenter les quantités attendues et reçues, les dommages " +
        "ou les problèmes de qualité, et ajouter des photos.",
      step3Title: "Regrouper les pièces dans le dossier",
      step3Text:
        "Les informations et les photos devraient être associées " +
        "directement au dossier concerné et mises à disposition " +
        "pour les vérifications suivantes.",
      step4Title: "Suivre la résolution et le règlement",
      step4Text:
        "L'écart documenté devrait alimenter les étapes suivantes : " +
        "préparer la réclamation, suivre les réponses du fournisseur " +
        "et vérifier l'avoir ainsi que son règlement.",
      exampleTitle: "Un exemple possible",
      exampleText:
        "Sur 100 pièces de rechange commandées, 95 sont livrées. " +
        "Un collaborateur consigne le manque et ajoute des photos. " +
        "Le service achats ou la comptabilité peut ensuite vérifier " +
        "les pièces et poursuivre les échanges avec le fournisseur.",
      note:
        "Une interface web adaptée aux smartphones est prévue " +
        "dans un premier temps. La nécessité d'une application " +
        "distincte sera évaluée selon les besoins réels."
    }
  };

  function initializeRoadmapTranslations() {
    const elements = [
      ...document.querySelectorAll("[data-roadmap-text]")
    ];

    // Deutsche Texte für die Rückübersetzung erhalten.
    const german = new Map(
      elements.map(element => [
        element,
        element.textContent.trim().replace(/\s+/g, " ")
      ])
    );

    function applyRoadmapLanguage() {
      const language = document.documentElement.lang
        .toLowerCase()
        .split("-")[0];

      const dictionary = translations[language];

      elements.forEach(element => {
        const key = element.dataset.roadmapText;
        const text = dictionary?.[key] ?? german.get(element);

        if (element.textContent !== text) {
          element.textContent = text;
        }
      });
    }

    applyRoadmapLanguage();

    new MutationObserver(applyRoadmapLanguage).observe(
      document.documentElement,
      {
        attributes: true,
        attributeFilter: ["lang"]
      }
    );
  }

  if (document.readyState === "loading") {
    document.addEventListener(
      "DOMContentLoaded",
      initializeRoadmapTranslations,
      { once: true }
    );
  } else {
    initializeRoadmapTranslations();
  }
})();

/* ==========================================
   Links zur Übersicht
   ========================================== */

(() => {
  function initializeOverviewLinks() {
    const labels = {
      de: "← Zur Übersicht",
      en: "← Back to overview",
      it: "← Alla panoramica",
      fr: "← Retour à la vue d’ensemble"
    };

    const reconcile =
      document.querySelector('[data-demo-view="reconcile"]') ||
      document.getElementById("workspace-title")?.closest("section");

    const closure =
      document.getElementById("closure-page") ||
      document.querySelector('[data-demo-view="closure"]');

    const links = [];

    [reconcile, closure].forEach(section => {
      if (!section) return;

      let link = section.querySelector(".workspace-return");

      if (!link) {
        link = document.createElement("a");
        link.href = "#demo-top";
        link.className = "workspace-return cl-overview-return";

        const actions = section.querySelector(".cl-page-actions");

        if (actions) {
          actions.appendChild(link);
        } else {
          section.prepend(link);
        }
      }

      link.hidden = false;
      link.style.removeProperty("display");

      link.addEventListener("click", event => {
        if (typeof window.showDemoView === "function") {
          event.preventDefault();
          window.showDemoView("overview");
        }
      });

      links.push(link);
    });

    function updateLabels() {
      const language = String(
        document.documentElement.lang || "de"
      )
        .toLowerCase()
        .split("-")[0];

      links.forEach(link => {
        const label = labels[language] || labels.de;

        if (link.textContent !== label) {
          link.textContent = label;
        }
      });
    }

    updateLabels();

    new MutationObserver(updateLabels).observe(
      document.documentElement,
      {
        attributes: true,
        attributeFilter: ["lang"]
      }
    );
  }

  if (document.readyState === "loading") {
    document.addEventListener(
      "DOMContentLoaded",
      initializeOverviewLinks,
      { once: true }
    );
  } else {
    initializeOverviewLinks();
  }
})();

/* ==========================================
   Weitere geplante Anwendungsfälle
   ========================================== */

(() => {
  const translations = {
    en: {
      title: "Further planned use cases",
      intro:
        "These features are also not yet available. " +
        "We will prioritize their development based on actual customer needs.",
      perishableTitle: "Account for perishable goods",
      perishableText:
        "For flowers, plants and other perishable products, " +
        "record and track quality issues, remaining shelf life " +
        "and short claim deadlines.",
      deliveriesTitle: "Keep track of complex deliveries",
      deliveriesText:
        "Bring partial and subsequent deliveries, as well as multiple " +
        "invoices or credit notes, together in one case to show " +
        "which quantities and amounts remain outstanding.",
      pricesTitle: "Identify price discrepancies",
      pricesText:
        "Compare ordered or agreed prices with invoice line items " +
        "to highlight potential overcharges and support their review."
    },

    it: {
      title: "Ulteriori casi d’uso previsti",
      intro:
        "Anche queste funzionalità non sono ancora disponibili. " +
        "Le priorità di sviluppo saranno definite in base " +
        "alle esigenze effettive dei clienti.",
      perishableTitle: "Tenere conto delle merci deperibili",
      perishableText:
        "Per fiori, piante e altri prodotti deperibili, registrare " +
        "e seguire problemi di qualità, durata residua " +
        "e termini brevi per i reclami.",
      deliveriesTitle: "Seguire le consegne complesse",
      deliveriesText:
        "Riunire consegne parziali e successive, insieme a più " +
        "fatture o note di credito, in un unico caso per evidenziare " +
        "le quantità e gli importi ancora in sospeso.",
      pricesTitle: "Individuare le differenze di prezzo",
      pricesText:
        "Confrontare i prezzi ordinati o concordati con le singole " +
        "voci della fattura per evidenziare possibili addebiti " +
        "eccessivi e facilitarne la verifica."
    },

    fr: {
      title: "Autres cas d’usage prévus",
      intro:
        "Ces fonctionnalités ne sont pas encore disponibles non plus. " +
        "Leur développement sera priorisé selon les besoins " +
        "réels des clients.",
      perishableTitle:
        "Prendre en compte les denrées périssables",
      perishableText:
        "Pour les fleurs, les plantes et les autres produits " +
        "périssables, consigner et suivre les défauts de qualité, " +
        "la durée de conservation restante et les délais " +
        "courts de réclamation.",
      deliveriesTitle: "Suivre les livraisons complexes",
      deliveriesText:
        "Regrouper les livraisons partielles et complémentaires, " +
        "ainsi que plusieurs factures ou avoirs, dans un même " +
        "dossier pour identifier les quantités et les montants " +
        "encore en suspens.",
      pricesTitle: "Détecter les écarts de prix",
      pricesText:
        "Comparer les prix commandés ou convenus avec les lignes " +
        "de facture pour mettre en évidence d’éventuelles " +
        "surfacturations et faciliter leur vérification."
    }
  };

  function initializeRoadmapExtras() {
    const elements = [
      ...document.querySelectorAll("[data-roadmap-extra]")
    ];

    const german = new Map(
      elements.map(element => [
        element,
        element.textContent.trim().replace(/\s+/g, " ")
      ])
    );

    function applyLanguage() {
      const language = document.documentElement.lang
        .toLowerCase()
        .split("-")[0];

      elements.forEach(element => {
        const key = element.dataset.roadmapExtra;
        const text =
          translations[language]?.[key] ?? german.get(element);

        if (element.textContent !== text) {
          element.textContent = text;
        }
      });
    }

    applyLanguage();

    new MutationObserver(applyLanguage).observe(
      document.documentElement,
      {
        attributes: true,
        attributeFilter: ["lang"]
      }
    );
  }

  if (document.readyState === "loading") {
    document.addEventListener(
      "DOMContentLoaded",
      initializeRoadmapExtras,
      { once: true }
    );
  } else {
    initializeRoadmapExtras();
  }
})();

/* ==========================================
   Übersicht: Hinweis auf geplante Erweiterungen
   ========================================== */

(() => {
  const texts = {
    de: {
      title: "Was ist als Nächstes geplant?",
      link: "Geplante Erweiterungen →",
      text:
        "Entdecken Sie, welche zusätzlichen Anwendungsfälle " +
        "wir künftig unterstützen möchten."
    },
    en: {
      title: "What is planned next?",
      link: "Planned features →",
      text:
        "Discover the additional use cases we would like " +
        "to support in the future."
    },
    it: {
      title: "Quali sono i prossimi sviluppi?",
      link: "Funzionalità previste →",
      text:
        "Scopra gli ulteriori casi d’uso che vorremmo " +
        "supportare in futuro."
    },
    fr: {
      title: "Quelles sont les prochaines évolutions ?",
      link: "Fonctionnalités prévues →",
      text:
        "Découvrez les cas d’usage supplémentaires que nous " +
        "souhaitons prendre en charge à l’avenir."
    }
  };

  function initializeRoadmapHint() {
    const hint = document.querySelector(".cl-demo-guide-roadmap");
    if (!hint) return;

    function applyLanguage() {
      const language = document.documentElement.lang
        .toLowerCase()
        .split("-")[0];

      const dictionary = texts[language] || texts.de;

      hint.querySelectorAll("[data-guide-roadmap]").forEach(node => {
        node.textContent = dictionary[node.dataset.guideRoadmap];
      });
    }

    hint.querySelector("a").addEventListener("click", event => {
      if (typeof window.showDemoView === "function") {
        event.preventDefault();
        window.showDemoView("roadmap");
      }
    });

    applyLanguage();

    new MutationObserver(applyLanguage).observe(
      document.documentElement,
      {
        attributes: true,
        attributeFilter: ["lang"]
      }
    );
  }

  if (document.readyState === "loading") {
    document.addEventListener(
      "DOMContentLoaded",
      initializeRoadmapHint,
      { once: true }
    );
  } else {
    initializeRoadmapHint();
  }
})();

/* ==========================================
   Handbuch-Button vorbereiten
   ========================================== */

(() => {
  const texts = {
    de: {
      label: "Handbuch",
      unavailable: "Demnächst verfügbar"
    },
    en: {
      label: "Handbook",
      unavailable: "Coming soon"
    },
    it: {
      label: "Manuale",
      unavailable: "Disponibile prossimamente"
    },
    fr: {
      label: "Manuel",
      unavailable: "Bientôt disponible"
    }
  };

  function initializeHandbookButtons() {
    const buttons = [];

    document.querySelectorAll(".workspace-return").forEach(link => {
      if (link.closest(".cl-page-actions")) return;

      const actions = document.createElement("div");
      actions.className = "cl-page-actions";

      const button = document.createElement("button");
      button.type = "button";
      button.className = "cl-handbook-button";
      button.setAttribute("aria-disabled", "true");

      const icon = document.createElementNS(
        "http://www.w3.org/2000/svg",
        "svg"
      );

      icon.setAttribute("viewBox", "0 0 24 24");
      icon.setAttribute("width", "17");
      icon.setAttribute("height", "17");
      icon.setAttribute("fill", "none");
      icon.setAttribute("stroke", "currentColor");
      icon.setAttribute("stroke-width", "1.6");
      icon.setAttribute("stroke-linecap", "round");
      icon.setAttribute("stroke-linejoin", "round");
      icon.setAttribute("aria-hidden", "true");

      const path = document.createElementNS(
        "http://www.w3.org/2000/svg",
        "path"
      );

      path.setAttribute(
        "d",
        "M12 5.5C9 3.8 5.5 3.5 2 4.5v15" +
        "c3.5-1 7-.7 10 1 3-1.7 6.5-2 10-1v-15" +
        "c-3.5-1-7-.7-10 1Zm0 0v15"
      );

      icon.appendChild(path);

      const label = document.createElement("span");
      button.append(icon, label);

      // Bis zur Erstellung des Handbuchs inaktiv.
      button.addEventListener("click", event => {
        event.preventDefault();
      });

      link.before(actions);
      actions.append(button, link);

      buttons.push({ button, label });
    });

    function applyLanguage() {
      const language = document.documentElement.lang
        .toLowerCase()
        .split("-")[0];

      const text = texts[language] || texts.de;

      buttons.forEach(({ button, label }) => {
        label.textContent = text.label;
        button.title = text.unavailable;
        button.setAttribute(
          "aria-label",
          `${text.label} – ${text.unavailable}`
        );
      });
    }

    applyLanguage();

    new MutationObserver(applyLanguage).observe(
      document.documentElement,
      {
        attributes: true,
        attributeFilter: ["lang"]
      }
    );
  }

  if (document.readyState === "loading") {
    document.addEventListener(
      "DOMContentLoaded",
      initializeHandbookButtons,
      { once: true }
    );
  } else {
    initializeHandbookButtons();
  }
})();

/* ==========================================
   Nachweis-Seitennavigation
   ========================================== */

(() => {
  const texts = {
    de: {
      navigation: "Seiten der dokumentierten Nachweise",
      page: "Seite",
      of: "von",
      records: "Nachweise",
      previous: "Vorherige Seite",
      next: "Nächste Seite"
    },
    en: {
      navigation: "Documented evidence pages",
      page: "Page",
      of: "of",
      records: "evidence records",
      previous: "Previous page",
      next: "Next page"
    },
    it: {
      navigation: "Pagine delle prove documentate",
      page: "Pagina",
      of: "di",
      records: "prove",
      previous: "Pagina precedente",
      next: "Pagina successiva"
    },
    fr: {
      navigation: "Pages des justificatifs documentés",
      page: "Page",
      of: "sur",
      records: "justificatifs",
      previous: "Page précédente",
      next: "Page suivante"
    }
  };

  window.updateProofPaginationLabels = function () {
    const language = document.documentElement.lang
      .toLowerCase()
      .split("-")[0];

    const text = texts[language] || texts.de;

    document.querySelectorAll(".cl-proof-pagination").forEach(nav => {
      nav.setAttribute("aria-label", text.navigation);

      const summary = nav.querySelector(
        "[data-proof-page-summary]"
      );

      if (summary) {
        const { page, pages, total } = summary.dataset;

        summary.textContent =
          `${text.page} ${page} ${text.of} ${pages} · ` +
          `${total} ${text.records}`;
      }

      nav.querySelector("[data-proof-page-previous]")
        ?.setAttribute("aria-label", text.previous);

      nav.querySelector("[data-proof-page-next]")
        ?.setAttribute("aria-label", text.next);

      nav.querySelectorAll("button").forEach(button => {
        if (/^\d+$/.test(button.textContent)) {
          button.setAttribute(
            "aria-label",
            `${text.page} ${button.textContent}`
          );
        }
      });
    });
  };

  window.updateProofPaginationLabels();

  new MutationObserver(
    window.updateProofPaginationLabels
  ).observe(document.documentElement, {
    attributes: true,
    attributeFilter: ["lang"]
  });
})();