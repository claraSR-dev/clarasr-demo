"use strict";

(() => {
  // Reihenfolge aller Übersetzungen: DE, EN, IT, FR.
  const rows = {
    skip: [
      "Zum Inhalt",
      "Skip to content",
      "Vai al contenuto",
      "Aller au contenu"
    ],
    navigation: [
      "Hauptnavigation",
      "Main navigation",
      "Navigazione principale",
      "Navigation principale"
    ],
    language: ["Sprache", "Language", "Lingua", "Langue"],
    navProduct: ["Ablauf", "Workflow", "Come funziona", "Fonctionnement"],
    navIndustries: ["Branchen", "Industries", "Settori", "Secteurs"],
    navResearch: [
      "Projektstand",
      "Project status",
      "Stato del progetto",
      "État du projet"
    ],
    demo: [
      "Demo testen",
      "Try the demo",
      "Prova la demo",
      "Essayer la démo"
    ],
        eyebrow: [
      "FÜR EINKAUF UND BUCHHALTUNG ÜBER GRENZEN HINWEG",
      "FOR PURCHASING AND ACCOUNTING ACROSS BORDERS",
      "PER ACQUISTI E CONTABILITÀ OLTRE CONFINE",
      "POUR LES ACHATS ET LA COMPTABILITÉ AU-DELÀ DES FRONTIÈRES"
    ],
    heroTitle: [
      "Abweichungen erkennen.",
      "Spot discrepancies.",
      "Individuare le differenze.",
      "Repérer les écarts."
    ],
    heroAccent: [
      "Klärung verfolgen.",
      "Track their resolution.",
      "Seguire la risoluzione.",
      "Suivre leur résolution."
    ],
    heroIntro: [
      "Bestellungen, erfasste Wareneingänge und Rechnungen vergleichen. Fehlmengen, dokumentierte Schäden und Preisabweichungen prüfen – und den Vorgang bis zu Gutschrift und Ausgleich nachvollziehen.",
      "Compare orders, recorded goods receipts and invoices. Review shortages, recorded damage and price discrepancies – and follow each case through to credit notes and settlement.",
      "Confrontare ordini, ricezioni registrate e fatture. Verificare quantità mancanti, danni documentati e differenze di prezzo, seguendo il caso fino alla nota di credito e al regolamento.",
      "Comparer commandes, réceptions enregistrées et factures. Examiner les quantités manquantes, dommages documentés et écarts de prix, puis suivre le dossier jusqu’à l’avoir et au règlement."
    ],
    how: [
      "So funktioniert der Ablauf",
      "How the workflow works",
      "Come funziona il processo",
      "Découvrir le fonctionnement"
    ],
    demoNote: [
      "Interaktive Konzeptdemo mit fiktiven Daten. Kein Kundenlogin und kein Upload echter Dokumente.",
      "Interactive concept demo with fictional data. No customer login or real document uploads.",
      "Demo concettuale interattiva con dati fittizi. Nessun accesso clienti né caricamento di documenti reali.",
      "Démo conceptuelle interactive avec données fictives. Aucun accès client ni téléversement de documents réels."
    ],
    benefits: [
      "Produktablauf",
      "Product workflow",
      "Flusso del prodotto",
      "Parcours du produit"
    ],
    benefit1: [
      "Abweichungen erkennen",
      "Identify discrepancies",
      "Individuare le differenze",
      "Repérer les écarts"
    ],
    benefit2: [
      "Klärung dokumentieren",
      "Document resolution",
      "Documentare la risoluzione",
      "Documenter la résolution"
    ],
    benefit3: [
      "Ausgleich nachvollziehen",
      "Track settlement",
      "Seguire il regolamento",
      "Suivre le règlement"
    ],
    preview: [
      "Fiktives Produktbeispiel INV-DEMO-12000",
      "Fictional product example INV-DEMO-12000",
      "Esempio di prodotto fittizio INV-DEMO-12000",
      "Exemple de produit fictif INV-DEMO-12000"
    ],
    sideReview: ["Prüfung", "Review", "Verifica", "Vérification"],
    sideCases: ["Fälle", "Cases", "Casi", "Dossiers"],
    sideCredits: ["Gutschriften", "Credit notes", "Note di credito", "Avoirs"],
    sideFile: ["Fallakte", "Case file", "Fascicolo", "Dossier final"],
    fictionalCompany: [
      "Fiktives Unternehmen",
      "Fictional company",
      "Azienda fittizia",
      "Entreprise fictive"
    ],
    previewTitle: [
      "Liefer- & Rechnungsprüfung",
      "Delivery & invoice review",
      "Verifica consegne e fatture",
      "Vérification livraisons et factures"
    ],
    previewSubtitle: [
      "Fiktives Beispiel · INV-DEMO-12000",
      "Fictional example · INV-DEMO-12000",
      "Esempio fittizio · INV-DEMO-12000",
      "Exemple fictif · INV-DEMO-12000"
    ],
    sample: ["Beispiel", "Example", "Esempio", "Exemple"],
    article: [
      "Präzisionsbuchse PB-20",
      "Precision bushing PB-20",
      "Boccola di precisione PB-20",
      "Douille de précision PB-20"
    ],
    ordered: ["Bestellt", "Ordered", "Ordinato", "Commandé"],
    received: ["Eingegangen", "Received", "Ricevuto", "Reçu"],
    missing: [
      "Fehlmenge",
      "Shortage",
      "Quantità mancante",
      "Quantité manquante"
    ],
    shortage: [
      "Berechnete Fehlmenge",
      "Billed shortage",
      "Quantità fatturata mancante",
      "Quantité facturée manquante"
    ],
    difference: [
      "Zu prüfender Differenzwert",
      "Discrepancy value to review",
      "Valore della differenza da verificare",
      "Valeur de l’écart à vérifier"
    ],
        calculation: [
      "600 fehlende Stück × CHF 20.00 pro Stück",
      "600 missing units × CHF 20.00 per unit",
      "600 pezzi mancanti × CHF 20.00 al pezzo",
      "600 pièces manquantes × CHF 20.00 par pièce"
    ],
    noClaim: [
      "Prüfhinweis, keine bestätigte Forderung.",
      "Review flag, not a confirmed claim.",
      "Segnalazione da verificare, non un credito confermato.",
      "Signalement à vérifier, pas une créance confirmée."
    ],
    next: [
      "Nächster Schritt: Lieferstand und Belege prüfen, anschließend die Abweichung mit dem Lieferanten klären.",
      "Next step: review delivery status and documents, then clarify the discrepancy with the supplier.",
      "Passo successivo: verificare lo stato della consegna e i documenti, poi chiarire la differenza con il fornitore.",
      "Étape suivante : vérifier la livraison et les justificatifs, puis clarifier l’écart avec le fournisseur."
    ],
    stage1: ["Prüfen", "Review", "Verificare", "Vérifier"],
    stage2: ["Klären", "Resolve", "Chiarire", "Clarifier"],
    stage3: ["Gutschrift", "Credit note", "Nota di credito", "Avoir"],
    stage4: ["Ausgleich", "Settlement", "Regolamento", "Règlement"],
    previewNote: [
      "Vereinfachte Produktdarstellung · Fiktive Mengen, Unternehmen und Beträge",
      "Simplified product illustration · Fictional quantities, companies and amounts",
      "Rappresentazione semplificata del prodotto · Quantità, aziende e importi fittizi",
      "Illustration simplifiée du produit · Quantités, entreprises et montants fictifs"
    ],
    industryCaption: [
      "ZIELBRANCHEN FÜR DIE ERSTE ERPROBUNG",
      "TARGET INDUSTRIES FOR INITIAL TESTING",
      "SETTORI DI RIFERIMENTO PER I PRIMI TEST",
      "SECTEURS CIBLES POUR LES PREMIERS ESSAIS"
    ],
    industry1: [
      "Maschinenbau & Ersatzteile",
      "Machinery & Spare Parts",
      "Meccanica e ricambi",
      "Construction mécanique et pièces détachées"
    ],
    industry2: [
      "Technischer Großhandel",
      "Technical Wholesale",
      "Commercio tecnico all’ingrosso",
      "Commerce de gros technique"
    ],
    industry3: [
      "Medizintechnik",
      "Medical Technology",
      "Tecnologia medica",
      "Technologies médicales"
    ],
    industry4: ["Pharma", "Pharma", "Farmaceutica", "Pharmacie"],
    industryMore: [
      "Weitere Branchen geplant",
      "More industries planned",
      "Altri settori previsti",
      "Autres secteurs prévus"
    ],
    approach: [
      "DER ABLAUF",
      "THE WORKFLOW",
      "IL PROCESSO",
      "LE FONCTIONNEMENT"
    ],
    processTitle: [
      "Von der Lieferabweichung zur dokumentierten Klärung.",
      "From a delivery discrepancy to a documented resolution.",
      "Dalla differenza nella consegna alla risoluzione documentata.",
      "De l’écart de livraison à une résolution documentée."
    ],
    processIntro: [
      "Die Prüfung beginnt vor einer Gutschrift: Was wurde bestellt, was ist tatsächlich als eingegangen erfasst und was wurde berechnet? Danach folgt die sachliche Klärung – etwa Nachlieferung, Ersatz, Rechnungskorrektur oder Gutschrift.",
      "Review starts before a credit note: what was ordered, what is actually recorded as received and what was invoiced? The next step is to clarify the issue – for example through a further delivery, replacement, invoice correction or credit note.",
      "La verifica inizia prima della nota di credito: cosa è stato ordinato, cosa risulta effettivamente ricevuto e cosa è stato fatturato? Segue il chiarimento, ad esempio tramite consegna successiva, sostituzione, correzione della fattura o nota di credito.",
      "La vérification commence avant l’avoir : qu’a-t-on commandé, qu’a-t-on effectivement enregistré comme reçu et qu’a-t-on facturé ? Vient ensuite la clarification : livraison complémentaire, remplacement, correction de facture ou avoir."
    ],
    step1Title: ["Vergleichen", "Compare", "Confrontare", "Comparer"],
    step1Text: [
      "Bestellung, Wareneingang und Rechnung gegenüberstellen; mögliche Abweichungen erkennen.",
      "Compare the order, goods receipt and invoice to identify potential discrepancies.",
      "Confrontare ordine, ricezione e fattura per individuare possibili differenze.",
      "Comparer commande, réception et facture pour repérer les écarts potentiels."
    ],
    step2Title: ["Klären", "Resolve", "Chiarire", "Clarifier"],
    step2Text: [
      "Belege prüfen, den Bearbeitungsstand festhalten und die Lieferantenklärung dokumentieren.",
      "Review documents, record processing status and document clarification with the supplier.",
      "Verificare i documenti, registrare lo stato di lavorazione e documentare i chiarimenti con il fornitore.",
      "Examiner les justificatifs, consigner l’état de traitement et documenter les échanges fournisseur."
    ],
    step3Title: [
      "Gutschrift prüfen",
      "Review credit notes",
      "Verificare la nota di credito",
      "Vérifier l’avoir"
    ],
    step3Text: [
      "Eine zugesagte Korrektur von einer ausgestellten Gutschrift unterscheiden und Restbeträge verfolgen.",
      "Distinguish an approved correction from an issued credit note and track remaining amounts.",
      "Distinguere una correzione confermata da una nota di credito emessa e seguire gli importi residui.",
      "Distinguer une correction approuvée d’un avoir émis et suivre les montants restants."
    ],
    step4Title: [
      "Ausgleich dokumentieren",
      "Document settlement",
      "Documentare il regolamento",
      "Documenter le règlement"
    ],
    step4Text: [
      "Zuordnungen und Nachweise prüfen und das Ergebnis in einer Fallakte festhalten.",
      "Review allocations and evidence, then document the outcome in a case file.",
      "Verificare abbinamenti e prove, poi documentare l’esito nel fascicolo.",
      "Vérifier les affectations et justificatifs, puis consigner le résultat dans un dossier."
    ],
    processNote: [
      "Eine Abweichung allein belegt keine Forderung. Auch eine Gutschrift bestätigt noch keine Rückzahlung oder wirksame Verrechnung.",
      "A discrepancy alone does not establish a claim. A credit note does not yet verify a refund or effective offsetting.",
      "Una differenza da sola non dimostra un credito. Anche una nota di credito non conferma ancora un rimborso o una compensazione effettiva.",
      "Un écart seul ne prouve pas une créance. Un avoir ne confirme pas encore un remboursement ou une compensation effective."
    ],
    projectLabel: [
      "PROJEKTSTAND",
      "PROJECT STATUS",
      "STATO DEL PROGETTO",
      "ÉTAT DU PROJET"
    ],
        researchTitle: [
      "Ausprobieren. Verstehen. Möglichkeiten entdecken.",
      "Try it. Understand it. Explore the possibilities.",
      "Provare. Comprendere. Scoprire le possibilità.",
      "Essayer. Comprendre. Découvrir les possibilités."
    ],
    researchIntro: [
      "ClaraSR befindet sich in der Konzept- und Erprobungsphase. Die Demo zeigt den geplanten Arbeitsablauf mit fiktiven Geschäftsvorgängen – vom erkannten Problem bis zur simulierten Abschlussakte.",
      "ClaraSR is in the concept and testing phase. The demo illustrates the planned workflow using fictional transactions – from a detected issue to a simulated final case file.",
      "ClaraSR è nella fase di concezione e sperimentazione. La demo illustra il processo previsto con operazioni fittizie, dal problema rilevato al fascicolo finale simulato.",
      "ClaraSR est en phase de conception et d’essai. La démo illustre le parcours prévu avec des opérations fictives, de l’anomalie détectée au dossier final simulé."
    ],
    researchTest: [
      "Sie können Mengen und Preise verändern, eigene fiktive Prüfungen anlegen, Fälle bearbeiten und zwei geführte Abläufe durchspielen. Das integrierte Handbuch erklärt die Schritte.",
      "You can edit quantities and prices, create your own fictional reviews, work on cases and follow two guided examples. The integrated handbook explains the steps.",
      "Può modificare quantità e prezzi, creare verifiche fittizie personali, gestire i casi e seguire due percorsi guidati. Il manuale integrato spiega i passaggi.",
      "Vous pouvez modifier quantités et prix, créer vos propres vérifications fictives, traiter des dossiers et suivre deux parcours guidés. Le manuel intégré explique les étapes."
    ],
    researchNote: [
      "Eingaben bleiben lokal in Ihrem Browser. Die Demo versendet keine Lieferantenanfragen. Produktumfang, Integrationen und Preise werden anhand des Kundenbedarfs konkretisiert.",
      "Entries remain locally in your browser. The demo sends no supplier requests. Product scope, integrations and pricing will be defined according to customer needs.",
      "I dati inseriti restano localmente nel browser. La demo non invia richieste ai fornitori. Portata del prodotto, integrazioni e prezzi saranno definiti in base alle esigenze dei clienti.",
      "Les saisies restent localement dans votre navigateur. La démo n’envoie aucune demande fournisseur. Le périmètre du produit, les intégrations et les prix seront définis selon les besoins des clients."
    ],
    footerProduct: [
      "Lieferantenreklamationen, Gutschriften und Ausgleich",
      "Supplier claims, credit notes and settlement",
      "Reclami ai fornitori, note di credito e regolamento",
      "Réclamations fournisseurs, avoirs et règlement"
    ],
    footerStatus: [
      "Konzeptdemo · Produkt in Entwicklung",
      "Concept demo · Product in development",
      "Demo concettuale · Prodotto in sviluppo",
      "Démo conceptuelle · Produit en développement"
    ],
    pageTitle: [
      "ClaraSR — Lieferabweichungen erkennen und klären",
      "ClaraSR — Identify and resolve supplier discrepancies",
      "ClaraSR — Individuare e chiarire le differenze nelle forniture",
      "ClaraSR — Repérer et clarifier les écarts fournisseurs"
    ],
    description: [
      "ClaraSR – Konzeptdemo zur Liefer- und Rechnungsprüfung sowie zur Nachverfolgung von Reklamationen, Gutschriften und Ausgleich.",
      "ClaraSR – Concept demo for delivery and invoice review and tracking supplier claims, credit notes and settlement.",
      "ClaraSR – Demo concettuale per verificare consegne e fatture e seguire reclami, note di credito e regolamento.",
      "ClaraSR – Démo conceptuelle pour vérifier livraisons et factures et suivre réclamations, avoirs et règlement."
    ],
    openMenu: [
      "Navigation öffnen",
      "Open navigation",
      "Aprire la navigazione",
      "Ouvrir la navigation"
    ],
    closeMenu: [
      "Navigation schließen",
      "Close navigation",
      "Chiudere la navigazione",
      "Fermer la navigation"
    ]
  };

  const languages = ["de", "en", "it", "fr"];
  const storageKey = "creditloop-demo-language";
  const menuButton = document.querySelector(".mobile-toggle");
  const mobileMenu = document.getElementById("mobile-menu");
  const select = document.getElementById("home-language");

  let language = "de";

  function translate(key) {
    return rows[key]?.[languages.indexOf(language)] ?? key;
  }

  function updateMenuLabel() {
    if (!menuButton) return;

    const isOpen = menuButton.getAttribute("aria-expanded") === "true";

    menuButton.setAttribute(
      "aria-label",
      translate(isOpen ? "closeMenu" : "openMenu")
    );
  }

  function closeMenu() {
    if (!menuButton || !mobileMenu) return;

    mobileMenu.hidden = true;
    menuButton.setAttribute("aria-expanded", "false");
    updateMenuLabel();
  }

  function applyLanguage(value, persist = false) {
    language = languages.includes(value) ? value : "de";
    document.documentElement.lang = language;

    document.querySelectorAll("[data-home-text]").forEach(node => {
      node.textContent = translate(node.dataset.homeText);
    });

    document.querySelectorAll("[data-home-aria]").forEach(node => {
      node.setAttribute("aria-label", translate(node.dataset.homeAria));
    });

    document.title = translate("pageTitle");

    document.querySelector('meta[name="description"]')
      ?.setAttribute("content", translate("description"));

    if (select) select.value = language;

    updateMenuLabel();

    if (persist) {
      try {
        localStorage.setItem(storageKey, language);
      } catch {
        // Die gewählte Sprache bleibt trotzdem für diesen Aufruf aktiv.
      }
    }
  }

  try {
    language = localStorage.getItem(storageKey)
      || document.documentElement.lang
      || "de";
  } catch {
    language = "de";
  }

  applyLanguage(language);

  select?.addEventListener("change", () => {
    applyLanguage(select.value, true);
  });

  if (menuButton && mobileMenu) {
    menuButton.addEventListener("click", () => {
      const wasOpen = menuButton.getAttribute("aria-expanded") === "true";

      mobileMenu.hidden = wasOpen;
      menuButton.setAttribute("aria-expanded", String(!wasOpen));
      updateMenuLabel();
    });

    mobileMenu.querySelectorAll("a").forEach(link => {
      link.addEventListener("click", closeMenu);
    });

    document.addEventListener("keydown", event => {
      if (event.key === "Escape" && !mobileMenu.hidden) {
        closeMenu();
        menuButton.focus();
      }
    });

    window.addEventListener("resize", () => {
      if (window.innerWidth > 950) closeMenu();
    });
  }

  window.addEventListener("pageshow", () => {
    try {
      applyLanguage(localStorage.getItem(storageKey) || language);
    } catch {
      applyLanguage(language);
    }

    closeMenu();
  });
})();