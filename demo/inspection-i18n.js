"use strict";

window.ClaraSRText = (() => {
  const rows = {
    inspection: [
      "Liefer- & Rechnungsprüfung",
      "Delivery & invoice review",
      "Verifica consegne e fatture",
      "Vérification des livraisons et factures"
    ],

    intro: [
      "Vergleichen Sie Bestellung, erfassten Wareneingang und Rechnung. Ändern Sie die Beispieldaten und prüfen Sie das neu berechnete Ergebnis.",
      "Compare orders, recorded goods receipts and invoices. Edit the sample data and review the recalculated result.",
      "Confronti ordini, ricezioni registrate e fatture. Modifichi i dati di esempio e verifichi il risultato ricalcolato.",
      "Comparez commandes, réceptions enregistrées et factures. Modifiez les données d’exemple et examinez le résultat recalculé."
    ],

    company: [
      "Demo-Unternehmen",
      "Demo company",
      "Azienda demo",
      "Entreprise de démonstration"
    ],

    all: [
      "Alle Vorgänge",
      "All transactions",
      "Tutte le operazioni",
      "Toutes les opérations"
    ],

    search: [
      "Bestellung, Rechnung, Artikel oder Lieferant suchen",
      "Search order, invoice, item or supplier",
      "Cercare ordine, fattura, articolo o fornitore",
      "Rechercher commande, facture, article ou fournisseur"
    ],

    shortage: [
      "Berechnete Fehlmenge",
      "Billed shortage",
      "Quantità fatturata mancante",
      "Quantité facturée manquante"
    ],

    damage: [
      "Beschädigung dokumentiert",
      "Damage recorded",
      "Danno documentato",
      "Dommage documenté"
    ],

    price: [
      "Preisabweichung",
      "Price discrepancy",
      "Differenza di prezzo",
      "Écart de prix"
    ],

    partial: [
      "Bestätigte Teillieferung",
      "Confirmed partial delivery",
      "Consegna parziale confermata",
      "Livraison partielle confirmée"
    ],

    match: [
      "Mengen und Preise stimmen überein",
      "Quantities and prices match",
      "Quantità e prezzi corrispondono",
      "Quantités et prix concordants"
    ],

    multiple: [
      "Mehrere Abweichungen",
      "Multiple discrepancies",
      "Più differenze",
      "Plusieurs écarts"
    ],

    overdue: [
      "Restlieferung überfällig",
      "Remaining delivery overdue",
      "Consegna residua scaduta",
      "Solde de livraison en retard"
    ],

    deliveryOpen: [
      "Lieferstand klären",
      "Clarify delivery status",
      "Chiarire lo stato della consegna",
      "Clarifier l’état de livraison"
    ],

    lowerPrice: [
      "Rechnungspreis unter Bestellpreis – prüfen",
      "Invoice price below order price – review",
      "Prezzo fatturato inferiore all’ordine – verificare",
      "Prix facturé inférieur à la commande – vérifier"
    ],

    invalidData: [
      "Daten fehlen oder sind ungültig. Keine sichere Prüfung möglich.",
      "Data is missing or invalid. Reliable review is not possible.",
      "Dati mancanti o non validi. Verifica affidabile impossibile.",
      "Données manquantes ou invalides. Vérification fiable impossible."
    ],

    invalidDamage: [
      "Die Schadensmenge darf den Wareneingang nicht überschreiten.",
      "Damaged quantity cannot exceed received quantity.",
      "La quantità danneggiata non può superare quella ricevuta.",
      "La quantité endommagée ne peut pas dépasser la quantité reçue."
    ],

    quantityConflict: [
      "Eingangs- oder Rechnungsmenge überschreitet die Bestellung. Manuell prüfen.",
      "Received or invoiced quantity exceeds the order. Review manually.",
      "Quantità ricevuta o fatturata superiore all’ordine. Verificare manualmente.",
      "Quantité reçue ou facturée supérieure à la commande. Examen manuel requis."
    ],

    referenceConflict: [
      "Widersprüchliche oder doppelte Belegreferenz.",
      "Conflicting or duplicated document reference.",
      "Riferimento documentale contraddittorio o duplicato.",
      "Référence documentaire incohérente ou dupliquée."
    ],

    allocationConflict: [
      "Gutschrift oder Zuordnung übersteigt die dokumentierte Grundlage.",
      "Credit or allocation exceeds its documented basis.",
      "Credito o abbinamento superiore alla base documentata.",
      "Avoir ou affectation supérieur à la base documentée."
    ],

    order: [
      "Bestellung",
      "Order",
      "Ordine",
      "Commande"
    ],

    receipt: [
      "Wareneingang",
      "Goods receipt",
      "Ricezione merci",
      "Réception"
    ],

    invoice: [
      "Rechnung",
      "Invoice",
      "Fattura",
      "Facture"
    ],

    decision: [
      "Lieferantenzusage",
      "Supplier decision",
      "Decisione del fornitore",
      "Décision du fournisseur"
    ],

    credit: [
      "Gutschrift",
      "Credit note",
      "Nota di credito",
      "Avoir"
    ],

    offset: [
      "Verrechnungsnachweis",
      "Offset evidence",
      "Prova di compensazione",
      "Justificatif de compensation"
    ],

    refund: [
      "Simulierter Banknachweis",
      "Simulated bank record",
      "Prova bancaria simulata",
      "Justificatif bancaire simulé"
    ],

    schedule: [
      "Lieferterminbestätigung",
      "Delivery schedule confirmation",
      "Conferma della consegna",
      "Confirmation du calendrier de livraison"
    ],

    damageDocument: [
      "Schadensprotokoll",
      "Damage record",
      "Verbale dei danni",
      "Constat de dommages"
    ],

    article: [
      "Artikel",
      "Item",
      "Articolo",
      "Article"
    ],

    supplier: [
      "Lieferant",
      "Supplier",
      "Fornitore",
      "Fournisseur"
    ],

    ordered: [
      "Bestellt",
      "Ordered",
      "Ordinato",
      "Commandé"
    ],

    received: [
      "Eingegangen",
      "Received",
      "Ricevuto",
      "Reçu"
    ],

    damaged: [
      "Davon beschädigt",
      "Of which damaged",
      "Di cui danneggiato",
      "Dont endommagé"
    ],

    invoiced: [
      "Berechnet",
      "Invoiced",
      "Fatturato",
      "Facturé"
    ],

    unitPrice: [
      "Bestellpreis je Einheit (CHF)",
      "Order unit price (CHF)",
      "Prezzo unitario dell’ordine (CHF)",
      "Prix unitaire commandé (CHF)"
    ],

    invoiceUnitPrice: [
      "Rechnungspreis je Einheit (CHF)",
      "Invoice unit price (CHF)",
      "Prezzo unitario fatturato (CHF)",
      "Prix unitaire facturé (CHF)"
    ],

    unit: [
      "Einheit",
      "Unit",
      "Unità",
      "Unité"
    ],

    units: [
      "Stück",
      "units",
      "pezzi",
      "pièces"
    ],

    stems: [
      "Stiel",
      "stem",
      "stelo",
      "tige"
    ],

    bundles: [
      "Bund",
      "bunch",
      "mazzo",
      "botte"
    ],

    baseline: [
      "Ausgangsdaten",
      "Original sample data",
      "Dati di esempio iniziali",
      "Données d’exemple initiales"
    ],

    variant: [
      "Testvariante: Die PDFs zeigen weiterhin die Ausgangsdaten. Lieferantenzusagen und spätere Belege beziehen sich auf diese Ausgangsdaten; die Demo-Abschlussfreigabe ist für Änderungen gesperrt.",
      "Test variant: PDFs still show the original data. Supplier decisions and later documents refer to that original data; demo closure is blocked for edited variants.",
      "Variante di test: i PDF mostrano i dati iniziali. Decisioni e documenti successivi si riferiscono a tali dati; la chiusura demo è bloccata per le varianti modificate.",
      "Variante de test : les PDF montrent les données initiales. Décisions et documents ultérieurs s’y rapportent ; la clôture démo est bloquée pour les variantes modifiées."
    ],

    run: [
      "Änderungen prüfen",
      "Review changes",
      "Verificare le modifiche",
      "Vérifier les modifications"
    ],

    reset: [
      "Ausgangsdaten wiederherstellen",
      "Restore original data",
      "Ripristinare i dati iniziali",
      "Rétablir les données initiales"
    ],

    checked: [
      "Neu berechnet und lokal gespeichert.",
      "Recalculated and saved locally.",
      "Ricalcolato e salvato localmente.",
      "Recalculé et enregistré localement."
    ],

    storageError: [
      "Speicherung fehlgeschlagen. Die bisherigen Daten bleiben erhalten.",
      "Saving failed. Previous data is preserved.",
      "Salvataggio non riuscito. I dati precedenti sono conservati.",
      "Échec de l’enregistrement. Les données précédentes sont conservées."
    ],

    corrupt: [
      "Gespeicherte Daten sind beschädigt. Änderungen sind gesperrt; bitte die Browserdaten vor einer Reparatur sichern.",
      "Saved data is corrupted. Changes are blocked; back up browser data before repair.",
      "Dati salvati danneggiati. Modifiche bloccate; salvare i dati del browser prima della riparazione.",
      "Données enregistrées corrompues. Modifications bloquées ; sauvegardez les données du navigateur avant réparation."
    ],

    originalExposure: [
      "Ursprünglich betroffener Waren-/Differenzwert",
      "Original affected goods / discrepancy value",
      "Valore iniziale della merce / differenza",
      "Valeur initiale des marchandises / de l’écart"
    ],

    testExposure: [
      "Betroffener Wert der Testvariante",
      "Affected value in test variant",
      "Valore interessato nella variante di test",
      "Valeur concernée dans la variante de test"
    ],

    approved: [
      "Gutschrift zugesagt",
      "Credit approved",
      "Credito approvato",
      "Avoir approuvé"
    ],

    issued: [
      "Gutschrift ausgestellt",
      "Credit issued",
      "Credito emesso",
      "Avoir émis"
    ],

    allocated: [
      "In Demo-Belegen zugeordnet",
      "Allocated in demo records",
      "Abbinato nei documenti demo",
      "Affecté dans les documents démo"
    ],

    creditGap: [
      "Von der Zusage noch nicht ausgestellt",
      "Approved but not yet issued",
      "Approvato ma non ancora emesso",
      "Approuvé mais pas encore émis"
    ],

    allocationGap: [
      "Ausgestellt, noch nicht zugeordnet",
      "Issued, not yet allocated",
      "Emesso, non ancora abbinato",
      "Émis, pas encore affecté"
    ],

    unknown: [
      "Noch nicht zugesagt",
      "Not yet approved",
      "Non ancora approvato",
      "Pas encore approuvé"
    ],

    noClaim: [
      "Prüfhinweis, keine bestätigte Forderung. Die Beträge sind verschiedene Stufen desselben Vorgangs und werden nicht addiert.",
      "Review indicator, not a confirmed claim. The amounts are different stages of the same transaction and are not added together.",
      "Indicazione da verificare, non credito confermato. Gli importi sono fasi della stessa operazione e non vengono sommati.",
      "Indication à vérifier, pas une créance confirmée. Les montants sont des étapes d’une même opération et ne sont pas additionnés."
    ],

    next: [
      "Nächster Prüfschritt",
      "Next review step",
      "Prossimo passo di verifica",
      "Prochaine étape de vérification"
    ],

    nextIssue: [
      "Lieferstatus, Vertragsgrundlage und dokumentierte Abweichung prüfen. Mit dem Lieferanten Nachlieferung, Ersatz, Rechnungskorrektur oder Gutschrift klären.",
      "Review delivery status, contract basis and recorded discrepancy. Clarify subsequent delivery, replacement, invoice correction or credit with the supplier.",
      "Verificare stato della consegna, base contrattuale e differenza. Chiarire con il fornitore consegna residua, sostituzione, correzione o credito.",
      "Vérifier livraison, base contractuelle et écart documenté. Clarifier avec le fournisseur complément, remplacement, correction ou avoir."
    ],

    nextCredit: [
      "Zugesagten Restbetrag und noch nicht zugeordneten Gutschriftbetrag verfolgen; passende Nachweise prüfen.",
      "Follow up the unissued approved balance and unallocated credit; review supporting evidence.",
      "Seguire il saldo approvato non emesso e il credito non abbinato; verificare le prove.",
      "Suivre le solde approuvé non émis et l’avoir non affecté ; examiner les justificatifs."
    ],

    nextPartial: [
      "Restlieferung und bestätigten Termin verfolgen. Ohne zusätzliche Abweichung keine Gutschrift voraussetzen.",
      "Track remaining delivery and confirmed date. Do not assume a credit without an additional discrepancy.",
      "Seguire consegna residua e data confermata. Non presumere un credito senza altra differenza.",
      "Suivre solde de livraison et date confirmée. Ne pas présumer d’avoir sans autre écart."
    ],

    nextMatch: [
      "Keine Mengen- oder Preisabweichung in diesen Daten erkannt. Eine Prüfung aller Qualitäts- und Vertragsfragen ist damit nicht ersetzt.",
      "No quantity or price discrepancy detected in these records. This does not replace all quality and contract checks.",
      "Nessuna differenza di quantità o prezzo rilevata. Ciò non sostituisce tutte le verifiche qualitative e contrattuali.",
      "Aucun écart de quantité ou prix détecté. Cela ne remplace pas toutes les vérifications de qualité et de contrat."
    ],

    nextComplete: [
      "Demo-Belege sind rechnerisch vollständig. Prüfen Sie die Belegkette und dokumentieren Sie einen ausdrücklich simulierten Abschluss.",
      "Demo records reconcile in full. Review the evidence chain and document an explicitly simulated closure.",
      "Documenti demo interamente riconciliati. Verificare la catena documentale e documentare una chiusura esplicitamente simulata.",
      "Documents démo rapprochés intégralement. Examiner les pièces et documenter une clôture explicitement simulée."
    ],

    openCase: [
      "Fall bearbeiten →",
      "Work on case →",
      "Gestire il caso →",
      "Traiter le dossier →"
    ],

    documents: [
      "Belege öffnen",
      "Open documents",
      "Aprire i documenti",
      "Ouvrir les documents"
    ],

    noResults: [
      "Keine passenden Vorgänge.",
      "No matching transactions.",
      "Nessuna operazione corrispondente.",
      "Aucune opération correspondante."
    ],

    asOf: [
      "Fester Demo-Prüfstichtag",
      "Fixed demo review date",
      "Data fissa della verifica demo",
      "Date fixe de vérification démo"
    ],

    due: [
      "Bestätigter Restliefertermin",
      "Confirmed remaining delivery date",
      "Data confermata della consegna residua",
      "Date confirmée du solde de livraison"
    ],

    closure: [
      "Demo-Abschlussprüfung",
      "Demo closure review",
      "Verifica della chiusura demo",
      "Vérification de clôture démo"
    ],

    reviewEvidence: [
      "Ich habe die aufgeführten Musterbelege für diesen Vorgang geprüft.",
      "I reviewed the listed sample documents for this transaction.",
      "Ho verificato i documenti di esempio elencati per questa operazione.",
      "J’ai examiné les documents d’exemple indiqués pour cette opération."
    ],

    acknowledge: [
      "Ich dokumentiere eine Simulation, keine echte oder unabhängig verifizierte Rückgewinnung.",
      "I am documenting a simulation, not a real or independently verified recovery.",
      "Documento una simulazione, non un recupero reale o verificato indipendentemente.",
      "Je documente une simulation, pas un recouvrement réel ou vérifié indépendamment."
    ],

    reason: [
      "Begründung (10–1000 Zeichen)",
      "Reason (10–1000 characters)",
      "Motivazione (10–1000 caratteri)",
      "Motif (10–1000 caractères)"
    ],

    finalise: [
      "Finale Demo-Fallakte freigeben",
      "Authorize final demo case file",
      "Autorizzare il fascicolo demo finale",
      "Autoriser le dossier démo final"
    ],

    blocked: [
      "Keine Freigabe: Ausgangsdaten, vollständige Zusage, Gutschriften und vollständige Zuordnung müssen zusammenpassen; beide Bestätigungen und eine Begründung sind erforderlich.",
      "Authorization blocked: original data, full approval, credits and full allocation must reconcile; both confirmations and a reason are required.",
      "Autorizzazione bloccata: dati iniziali, approvazione completa, crediti e abbinamenti devono corrispondere; servono entrambe le conferme e una motivazione.",
      "Autorisation bloquée : données initiales, approbation, avoirs et affectation complète doivent concorder ; deux confirmations et un motif sont requis."
    ],

    closed: [
      "Administrativ abgeschlossen – ausschließlich Demo",
      "Administratively closed – demo only",
      "Chiuso amministrativamente – solo demo",
      "Clôturé administrativement – démo uniquement"
    ],

    reopen: [
      "Mit Begründung wiedereröffnen",
      "Reopen with a reason",
      "Riaprire con motivazione",
      "Rouvrir avec un motif"
    ],

    reopenReason: [
      "Bitte Wiedereröffnung mit mindestens 10 Zeichen begründen.",
      "Please explain reopening in at least 10 characters.",
      "Motivare la riapertura con almeno 10 caratteri.",
      "Veuillez justifier la réouverture en au moins 10 caractères."
    ],

    finalPdf: [
      "Gespeicherte finale Demo-Fallakte herunterladen",
      "Download saved final demo case file",
      "Scaricare il fascicolo demo finale salvato",
      "Télécharger le dossier démo final enregistré"
    ],

    preliminary: [
      "Vorläufigen PDF-Bericht herunterladen",
      "Download preliminary PDF report",
      "Scaricare il rapporto PDF provvisorio",
      "Télécharger le rapport PDF provisoire"
    ],

    finalTitle: [
      "FINALE DEMO-FALLAKTE",
      "FINAL DEMO CASE FILE",
      "FASCICOLO DEMO FINALE",
      "DOSSIER DÉMO FINAL"
    ],

    preliminaryTitle: [
      "VORLÄUFIGER DEMO-PRÜFBERICHT",
      "PRELIMINARY DEMO REVIEW REPORT",
      "RAPPORTO DEMO PROVVISORIO",
      "RAPPORT DÉMO PROVISOIRE"
    ],

    evidence: [
      "Belegkette",
      "Evidence chain",
      "Catena documentale",
      "Chaîne documentaire"
    ],

    history: [
      "Gespeicherter Bearbeitungsverlauf",
      "Saved processing history",
      "Cronologia salvata",
      "Historique enregistré"
    ],

    simulation: [
      "FIKTIVE DEMO. Kein echter Bankumsatz und keine unabhängig verifizierte finanzielle Rückgewinnung. Lokal gespeicherte Angaben sind nicht revisionssicher.",
      "FICTIONAL DEMO. No real bank transaction or independently verified financial recovery. Locally saved records are not audit-proof.",
      "DEMO FITTIZIA. Nessuna operazione bancaria reale o recupero verificato indipendentemente. Dati locali senza garanzia di inalterabilità.",
      "DÉMO FICTIVE. Aucune opération bancaire réelle ni recouvrement vérifié indépendamment. Les données locales ne sont pas inaltérables."
    ],

    close: [
      "Schließen",
      "Close",
      "Chiudere",
      "Fermer"
    ],

    openPdf: [
      "PDF separat öffnen ↗",
      "Open PDF separately ↗",
      "Aprire PDF separatamente ↗",
      "Ouvrir le PDF séparément ↗"
    ],

    recordsTitle: [
      "Belegübersicht",
      "Source documents",
      "Documenti di origine",
      "Documents sources"
    ],

    overviewTitle: [
      "Von der Lieferabweichung bis zur dokumentierten Klärung",
      "From delivery discrepancy to documented resolution",
      "Dalla differenza di consegna alla risoluzione documentata",
      "De l’écart de livraison à la résolution documentée"
    ],

    overviewIntro: [
      "ClaraSR vergleicht Bestellungen, erfasste Wareneingänge und Rechnungen. Prüfen Sie 15 fiktive Vorgänge, bearbeiten Sie Abweichungen und verfolgen Sie Zusagen, Gutschriften und Ausgleich.",
      "ClaraSR compares orders, recorded goods receipts and invoices. Review 15 fictional transactions, work on discrepancies and track approvals, credits and settlement.",
      "ClaraSR confronta ordini, ricezioni registrate e fatture. Verifichi 15 operazioni fittizie, gestisca le differenze e segua approvazioni, crediti e regolamenti.",
      "ClaraSR compare commandes, réceptions enregistrées et factures. Examinez 15 opérations fictives et suivez écarts, décisions, avoirs et règlement."
    ],

    overviewExample: [
      "INV-301: 100 Präzisionsbuchsen bestellt und berechnet, 95 eingegangen. ClaraSR erkennt fünf fehlende Stück. Die späteren Musterbelege zeigen die Zusage über CHF 100, zwei Gutschriften und deren Verrechnung.",
      "INV-301: 100 precision bushings ordered and invoiced, 95 received. ClaraSR identifies five missing units. Later sample records show approval of CHF 100, two credits and their offset.",
      "INV-301: 100 boccole ordinate e fatturate, 95 ricevute. ClaraSR identifica cinque pezzi mancanti. I documenti successivi mostrano approvazione di CHF 100, due crediti e compensazione.",
      "INV-301 : 100 bagues commandées et facturées, 95 reçues. ClaraSR identifie cinq pièces manquantes. Les pièces ultérieures montrent une approbation de CHF 100, deux avoirs et leur compensation."
    ],

    overviewSteps: [
      "1. Abweichung erkennen · 2. Fall prüfen und bearbeiten · 3. Gutschrift und Ausgleich verfolgen · 4. Demo-Abschluss dokumentieren",
      "1. Detect discrepancy · 2. Review and process case · 3. Track credit and settlement · 4. Document demo closure",
      "1. Rilevare differenze · 2. Gestire il caso · 3. Seguire credito e regolamento · 4. Documentare la chiusura demo",
      "1. Détecter l’écart · 2. Traiter le dossier · 3. Suivre avoir et règlement · 4. Documenter la clôture démo"
    ],

    savedVersions: [
      "Gespeicherte Abschlussstände",
      "Saved closure snapshots",
      "Versioni di chiusura salvate",
      "États de clôture enregistrés"
    ],

    testCount: [
      "Geprüfte Vorgänge",
      "Reviewed transactions",
      "Operazioni verificate",
      "Opérations vérifiées"
    ],

    exposureSummary: [
      "Rechnerisch noch nicht geklärter Wert",
      "Calculated value not yet resolved",
      "Valore calcolato non ancora risolto",
      "Valeur calculée pas encore résolue"
    ],

    summaryHint: [
      "Ausgangsabweichung abzüglich dokumentierter Demo-Zuordnung; keine bestätigte Forderung.",
      "Original discrepancy less documented demo allocation; not a confirmed claim.",
      "Differenza iniziale meno abbinamenti demo documentati; non credito confermato.",
      "Écart initial moins affectation démo documentée ; pas une créance confirmée."
    ],

    lifecycle: [
      "Ausgangsprüfung und späterer Belegstand",
      "Initial review and subsequent evidence",
      "Verifica iniziale e documenti successivi",
      "Vérification initiale et pièces ultérieures"
    ],

    guidedTitle: [
      "Geführter Beispielablauf",
      "Guided example workflow",
      "Percorso di esempio guidato",
      "Parcours d’exemple guidé"
    ],

    guidedIntro: [
      "Spielen Sie diesen Vorgang vom erkannten Problem bis zum Demo-Abschluss durch. Jeder Schritt ergänzt die passenden Beispieldaten und Belege in allen Ansichten. Es wird keine Nachricht versendet.",
      "Work through this transaction from detection to demo closure. Each step adds matching sample data and documents across all views. No message is sent.",
      "Segua questa operazione dal problema rilevato alla chiusura demo. Ogni fase aggiunge dati e documenti coerenti in tutte le viste. Non viene inviato alcun messaggio.",
      "Parcourez cette opération de la détection à la clôture démo. Chaque étape ajoute les données et pièces correspondantes dans toutes les vues. Aucun message n’est envoyé."
    ],

    stageDetected: [
      "Abweichung erkannt",
      "Discrepancy detected",
      "Differenza rilevata",
      "Écart détecté"
    ],

    stageReview: [
      "Reklamation zur Klärung vorbereitet",
      "Claim prepared for clarification",
      "Reclamo preparato per chiarimenti",
      "Réclamation préparée pour clarification"
    ],

    stageApproved: [
      "Lieferantenzusage dokumentiert",
      "Supplier approval recorded",
      "Approvazione del fornitore registrata",
      "Approbation fournisseur enregistrée"
    ],

    stageCredited: [
      "Gutschriften übernommen",
      "Credit notes recorded",
      "Note di credito registrate",
      "Avoirs enregistrés"
    ],

    stageSettled: [
      "Demo-Ausgleich dokumentiert",
      "Demo settlement recorded",
      "Regolamento demo documentato",
      "Règlement démo documenté"
    ],

    prepareClaim: [
      "Reklamation im Beispiel vorbereiten",
      "Prepare sample claim",
      "Preparare il reclamo di esempio",
      "Préparer la réclamation d’exemple"
    ],

    simulateApproval: [
      "Lieferantenantwort simulieren",
      "Simulate supplier response",
      "Simulare la risposta del fornitore",
      "Simuler la réponse fournisseur"
    ],

    importCredits: [
      "Beispielgutschriften übernehmen",
      "Record sample credit notes",
      "Registrare le note di credito di esempio",
      "Enregistrer les avoirs d’exemple"
    ],

    simulateSettlement: [
      "Ausgleich im Beispiel übernehmen",
      "Record sample settlement",
      "Registrare il regolamento di esempio",
      "Enregistrer le règlement d’exemple"
    ],

    goClosure: [
      "Zur Demo-Abschlussprüfung →",
      "Go to demo closure review →",
      "Alla verifica della chiusura demo →",
      "Vers la vérification de clôture démo →"
    ],

    restartJourney: [
      "Geführten Ablauf zurücksetzen",
      "Reset guided workflow",
      "Ripristinare il percorso guidato",
      "Réinitialiser le parcours guidé"
    ],

    restartConfirm: [
      "Den geführten Ablauf dieses Vorgangs auf den Anfang zurücksetzen? Gespeicherte Abschlussakten und manuelle Notizen bleiben erhalten. Einen aktiven Demo-Abschluss bitte zuerst wiedereröffnen.",
      "Reset this transaction’s guided workflow to the start? Saved case files and manual notes are preserved. Reopen any active demo closure first.",
      "Ripristinare il percorso di questa operazione all’inizio? Fascicoli salvati e note manuali restano conservati. Riaprire prima un’eventuale chiusura demo attiva.",
      "Recommencer le parcours de cette opération ? Les dossiers enregistrés et notes manuelles sont conservés. Rouvrez d’abord toute clôture démo active."
    ],

    nextGuided: [
      "Führen Sie den nächsten Schritt im geführten Beispielablauf aus.",
      "Complete the next step in the guided example workflow.",
      "Completi la fase successiva del percorso guidato.",
      "Effectuez l’étape suivante du parcours guidé."
    ],

    resetLocked: [
      "Dieser Vorgang besitzt einen gespeicherten Demo-Abschluss. Bitte zuerst wiedereröffnen.",
      "This transaction has a saved demo closure. Reopen it first.",
      "Questa operazione ha una chiusura demo salvata. Riaprirla prima.",
      "Cette opération a une clôture démo enregistrée. Rouvrez-la d’abord."
    ]
  };

  function lang() {
    return String(
      document.documentElement.lang || "de"
    )
      .toLowerCase()
      .split("-")[0];
  }

  function t(key, language = lang()) {
    const index = ({
      de: 0,
      en: 1,
      it: 2,
      fr: 3
    })[language] ?? 0;

    return rows[key]?.[index] ?? key;
  }

  function keyFor(value) {
    return Object.keys(rows).find(key =>
      rows[key].includes(value)
    );
  }

  return {
    t,
    lang,
    keyFor
  };
})();