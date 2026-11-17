"use strict";

(() => {
  const chapters = [
    {
      id: "start",
      view: "inspection",

      title: [
        "Schnellstart",
        "Quick start",
        "Guida rapida",
        "Démarrage rapide"
      ],

      intro: [
        "ClaraSR vergleicht Bestellungen, erfasste Wareneingänge und Rechnungen. Eine erkannte Abweichung ist zunächst ein Prüfhinweis. Danach werden Klärung, Lieferantenzusage, Gutschrift und Ausgleich getrennt verfolgt.",
        "ClaraSR compares orders, recorded goods receipts and invoices. A detected discrepancy is initially a review flag. Resolution, supplier approval, credit notes and settlement are then tracked separately.",
        "ClaraSR confronta ordini, ricezioni registrate e fatture. Una differenza rilevata è inizialmente una segnalazione da verificare. Chiarimento, conferma del fornitore, nota di credito e regolamento vengono poi seguiti separatamente.",
        "ClaraSR compare commandes, réceptions enregistrées et factures. Un écart détecté constitue d’abord un signalement à vérifier. La clarification, l’accord fournisseur, l’avoir et le règlement sont ensuite suivis séparément."
      ],

      steps: [
        [
          "Öffnen Sie die Liefer- und Rechnungsprüfung und wählen Sie INV-301. Dort sind 100 Stück bestellt und berechnet, aber nur 95 Stück eingegangen: fünf fehlende Stück mit einem Prüfwert von CHF 100.",
          "Open the delivery and invoice review and select INV-301. There are 100 units ordered and invoiced, but only 95 received: five missing units with a review value of CHF 100.",
          "Apra la verifica di consegne e fatture e selezioni INV-301. Sono stati ordinati e fatturati 100 pezzi, ma ne sono arrivati 95: cinque pezzi mancanti con un valore da verificare di CHF 100.",
          "Ouvrez la vérification des livraisons et factures et sélectionnez INV-301 : 100 pièces commandées et facturées, mais 95 reçues, soit cinq pièces manquantes pour une valeur à vérifier de CHF 100."
        ],
        [
          "Zum Testen können Sie den Wareneingang auf 100 ändern und „Änderungen prüfen“ wählen. Die Fehlmenge entfällt. „Ausgangsdaten wiederherstellen“ bringt das ursprüngliche Beispiel zurück.",
          "To test the calculation, change the goods receipt to 100 and select “Check changes”. The shortage disappears. “Restore original data” restores the original example.",
          "Per provare il calcolo, modifichi la quantità ricevuta a 100 e selezioni il pulsante di verifica delle modifiche. La quantità mancante scompare. Il ripristino dei dati iniziali riporta l’esempio originale.",
          "Pour tester le calcul, passez la quantité reçue à 100 et vérifiez les modifications. La quantité manquante disparaît. Restaurez ensuite les données initiales pour retrouver l’exemple d’origine."
        ],
        [
          "Spielen Sie bei INV-301 anschließend den geführten Beispielablauf durch. Jeder Schritt ergänzt passende Beispieldaten. INV-303 bietet einen zweiten geführten Ablauf mit einer simulierten Rückzahlung.",
          "Then follow the guided example for INV-301. Each step adds the relevant sample data. INV-303 provides a second guided example with a simulated refund.",
          "Segua poi il percorso guidato di INV-301. Ogni passaggio aggiunge i dati di esempio pertinenti. INV-303 offre un secondo percorso guidato con un rimborso simulato.",
          "Suivez ensuite le parcours guidé d’INV-301. Chaque étape ajoute les données d’exemple correspondantes. INV-303 propose un second parcours guidé avec un remboursement simulé."
        ]
      ]
    },

    {
      id: "inspection",
      view: "inspection",

      title: [
        "Liefer- und Rechnungsprüfung",
        "Delivery and invoice review",
        "Verifica di consegne e fatture",
        "Vérification des livraisons et factures"
      ],

      intro: [
        "Hier beginnt die Prüfung, bevor eine Lieferantengutschrift vorliegt. Die Demo verwendet dokumentierte Mengen und Preise; sie erkennt keinen physischen Wareneingang selbst.",
        "Review starts here, before a supplier credit note exists. The demo uses recorded quantities and prices; it does not physically detect incoming goods.",
        "La verifica inizia qui, prima che esista una nota di credito del fornitore. La demo utilizza quantità e prezzi registrati; non rileva autonomamente l’arrivo fisico della merce.",
        "La vérification commence ici, avant l’existence d’un avoir fournisseur. La démo utilise les quantités et prix enregistrés ; elle ne détecte pas elle-même l’arrivée physique des marchandises."
      ],

      steps: [
        [
          "Nutzen Sie Lieferantenfilter, Suche und Vorgangsfilter. Die Seitenzahlen unter der Liste öffnen weitere Vorgänge. Rechts sehen Sie die Daten des ausgewählten Vorgangs.",
          "Use the supplier filter, search and transaction filter. Page numbers below the list open further transactions. The selected transaction’s data appears on the right.",
          "Utilizzi il filtro fornitori, la ricerca e il filtro delle operazioni. I numeri di pagina sotto l’elenco aprono altre operazioni. A destra sono visualizzati i dati dell’operazione selezionata.",
          "Utilisez le filtre fournisseur, la recherche et le filtre des opérations. Les numéros de page sous la liste donnent accès aux autres opérations. Les données sélectionnées s’affichent à droite."
        ],
        [
          "Fehlmenge: mehr berechnet als eingegangen. Beschädigung: ein Teil der eingegangenen Ware ist als beschädigt erfasst. Preisabweichung: der Rechnungspreis liegt über dem Bestellpreis. Jede Auffälligkeit muss sachlich geprüft werden.",
          "Shortage: more units invoiced than received. Damage: some received goods are recorded as damaged. Price discrepancy: the invoice price exceeds the order price. Each issue requires substantive review.",
          "Quantità mancante: quantità fatturata superiore a quella ricevuta. Danno: parte della merce ricevuta è registrata come danneggiata. Differenza di prezzo: prezzo fatturato superiore a quello dell’ordine. Ogni anomalia richiede una verifica.",
          "Quantité manquante : quantité facturée supérieure à celle reçue. Dommage : une partie des marchandises reçues est déclarée endommagée. Écart de prix : prix facturé supérieur au prix commandé. Chaque anomalie doit être examinée."
        ],
        [
          "Eine angekündigte Restlieferung ist zunächst ein offener Lieferstand. Der feste Demo-Prüfstichtag 17.11.2026 bestimmt, ob ihr Termin bereits überschritten ist. Er verhindert, dass die Beispielsituation mit dem Kalender altert.",
          "A scheduled remaining delivery is initially an open delivery status. The fixed demo review date, 17 November 2026, determines whether its due date has passed. This keeps the example stable as time passes.",
          "Una consegna residua annunciata rappresenta inizialmente una consegna aperta. La data fissa della verifica demo, 17 novembre 2026, determina se il termine è già trascorso e mantiene stabile la situazione di esempio.",
          "Un solde de livraison annoncé constitue d’abord une livraison en attente. La date fixe de vérification, le 17 novembre 2026, détermine si l’échéance est dépassée et maintient la situation d’exemple stable."
        ],
        [
          "Geänderte Beispieldaten werden als Testvariante gekennzeichnet. Die Original-PDFs bleiben unverändert; die finale Demo-Freigabe ist für die Variante gesperrt. Stellen Sie die Ausgangsdaten wieder her, bevor Sie den Abschlussablauf testen.",
          "Edited sample data is marked as a test variant. Original PDFs remain unchanged and final demo release is blocked for the variant. Restore the original data before testing closure.",
          "I dati modificati sono contrassegnati come variante di test. I PDF originali restano invariati e l’approvazione finale demo è bloccata per la variante. Ripristini i dati iniziali prima di provare la chiusura.",
          "Les données modifiées sont signalées comme variante de test. Les PDF originaux restent inchangés et la validation finale est bloquée pour cette variante. Restaurez les données initiales avant de tester la clôture."
        ]
      ]
    },

    {
      id: "new",
      view: "inspection",

      title: [
        "Neue Prüfung anlegen",
        "Create a new review",
        "Creare una nuova verifica",
        "Créer une nouvelle vérification"
      ],

      intro: [
        "Über „+ Neue Prüfung“ erfassen Sie eigene fiktive Testdaten. Diese Funktion ist eine manuelle Demo-Erfassung, kein Dokumentimport.",
        "Use “+ New review” to enter your own fictional test data. This is manual demo entry, not document import.",
        "Con «+ Nuova verifica» può inserire dati di test fittizi personali. Si tratta di un inserimento manuale demo, non di un’importazione di documenti.",
        "Utilisez «+ Nouvelle vérification» pour saisir vos propres données fictives. Il s’agit d’une saisie manuelle de démonstration, pas d’un import de documents."
      ],

      steps: [
        [
          "Geben Sie Lieferant, Artikel, eindeutige Rechnungsreferenz und Bestellreferenz ein. Ergänzen Sie bestellte, eingegangene, beschädigte und berechnete Mengen sowie beide Stückpreise in CHF.",
          "Enter the supplier, item, a unique invoice reference and an order reference. Add ordered, received, damaged and invoiced quantities, plus both unit prices in CHF.",
          "Inserisca fornitore, articolo, un riferimento fattura univoco e il riferimento ordine. Aggiunga quantità ordinate, ricevute, danneggiate e fatturate, oltre ai due prezzi unitari in CHF.",
          "Saisissez le fournisseur, l’article, une référence de facture unique et la référence de commande. Ajoutez les quantités commandées, reçues, endommagées et facturées ainsi que les deux prix unitaires en CHF."
        ],
        [
          "Markieren Sie eine Restlieferung nur dann als angekündigt, wenn Sie einen entsprechenden Testliefertermin angeben möchten. Wählen Sie anschließend „Prüfung anlegen und berechnen“.",
          "Mark a remaining delivery as scheduled only if you intend to provide a corresponding test delivery date. Then select “Create and calculate review”.",
          "Indichi una consegna residua come annunciata solo se desidera inserire la relativa data di consegna di test. Selezioni poi «Creare e calcolare la verifica».",
          "Ne déclarez un solde de livraison annoncé que si vous souhaitez indiquer une date de livraison de test correspondante. Sélectionnez ensuite «Créer et calculer la vérification»."
        ],
        [
          "Die neue Prüfung erscheint oben und wird ausgewählt. Bei einer Auffälligkeit erscheint sie auch unter „Fälle“. Eigene Prüfungen besitzen keine Original-PDFs, Lieferantenzusagen oder automatisch bestätigten Gutschriften.",
          "The new review appears at the top and is selected. If an issue is detected, it also appears under “Cases”. Custom reviews have no original PDFs, supplier approvals or automatically confirmed credit notes.",
          "La nuova verifica appare in cima ed è selezionata. Se viene rilevata un’anomalia, appare anche nei «Casi». Le verifiche personali non dispongono di PDF originali, conferme del fornitore o note di credito confermate automaticamente.",
          "La nouvelle vérification apparaît en tête et est sélectionnée. Une anomalie la fait également apparaître dans «Dossiers». Les vérifications personnelles ne disposent ni de PDF originaux, ni d’accords fournisseurs, ni d’avoirs automatiquement confirmés."
        ],
        [
          "Eigene Prüfungen können über „Eigene Prüfung löschen“ nach Bestätigung entfernt werden. Die zugehörigen Bearbeitungsnotizen werden mitgelöscht. Vorbereitete Beispiele und gespeicherte finale Akten sind geschützt.",
          "Custom reviews can be removed using “Delete custom review” after confirmation. Their processing notes are also deleted. Prepared examples and saved final case files are protected.",
          "Le verifiche personali possono essere rimosse con «Eliminare la verifica personale» dopo conferma. Anche le relative note vengono eliminate. Gli esempi predisposti e i fascicoli finali salvati sono protetti.",
          "Les vérifications personnelles peuvent être supprimées après confirmation avec «Supprimer la vérification personnelle». Leurs notes sont également supprimées. Les exemples préparés et les dossiers finaux enregistrés sont protégés."
        ]
      ]
    },

    {
      id: "cases",
      view: "cases",

      title: [
        "Fälle bearbeiten",
        "Work on cases",
        "Gestire i casi",
        "Traiter les dossiers"
      ],

      intro: [
        "Unter „Fälle“ bearbeiten Sie auffällige Vorgänge. Der Bearbeitungsstand beschreibt Ihre Arbeit am Fall; er bestätigt keinen finanziellen Ausgleich.",
        "Under “Cases”, you work on flagged transactions. Processing status describes your work on a case; it does not verify financial settlement.",
        "Nei «Casi» può gestire le operazioni con anomalie. Lo stato di lavorazione descrive il lavoro sul caso; non conferma un regolamento finanziario.",
        "Dans «Dossiers», vous traitez les opérations présentant des anomalies. L’état de traitement décrit votre travail ; il ne confirme pas un règlement financier."
      ],

      steps: [
        [
          "Grenzen Sie die Liste mit Suche, Lieferantenfilter und Bearbeitungsfiltern ein. Öffnen Sie einen Fall und prüfen Sie Erklärung, Beträge und passende Belege.",
          "Narrow the list using search, supplier and processing filters. Open a case and review its explanation, amounts and supporting documents.",
          "Restringa l’elenco con ricerca, filtro fornitori e filtri di lavorazione. Apra un caso e verifichi spiegazione, importi e documenti pertinenti.",
          "Affinez la liste avec la recherche et les filtres de fournisseur et de traitement. Ouvrez un dossier pour examiner l’explication, les montants et les justificatifs."
        ],
        [
          "Setzen Sie den Bearbeitungsstand und speichern Sie eine interne Notiz, beispielsweise „Lieferantenkontoauszug prüfen“. Manuelle Einträge können bearbeitet oder gelöscht werden; automatische Systemeinträge bleiben geschützt.",
          "Set the processing status and save an internal note, such as “Review supplier account statement”. Manual entries can be edited or deleted; automatic system entries remain protected.",
          "Imposti lo stato di lavorazione e salvi una nota interna, ad esempio «Verificare l’estratto conto del fornitore». Le registrazioni manuali possono essere modificate o eliminate; quelle automatiche restano protette.",
          "Définissez l’état de traitement et enregistrez une note interne, par exemple «Vérifier le relevé fournisseur». Les entrées manuelles peuvent être modifiées ou supprimées ; les entrées automatiques restent protégées."
        ],
        [
          "Der geführte Ablauf ist bei INV-301 und INV-303 verfügbar. Andere Beispiele zeigen vorbereitete Zwischenstände. Die Belegübersicht zeigt erfasste Rechnungen, Lieferantenzusagen und Gutschriften; weitere Belege öffnen Sie im jeweiligen Vorgang.",
          "Guided examples are available for INV-301 and INV-303. Other examples show prepared intermediate states. Source records list invoices, supplier approvals and credit notes; open further documents from the relevant transaction.",
          "I percorsi guidati sono disponibili per INV-301 e INV-303. Gli altri esempi mostrano stati intermedi predisposti. La panoramica documenti elenca fatture, conferme dei fornitori e note di credito; altri documenti sono accessibili dall’operazione pertinente.",
          "Les parcours guidés concernent INV-301 et INV-303. Les autres exemples présentent des états intermédiaires préparés. La vue des documents répertorie factures, accords fournisseurs et avoirs ; les autres pièces s’ouvrent depuis l’opération concernée."
        ]
      ]
    },

    {
      id: "settlement",
      view: "settlement",

      title: [
        "Gutschriften und Ausgleich",
        "Credit notes and settlement",
        "Note di credito e regolamento",
        "Avoirs et règlement"
      ],

      intro: [
        "Eine Lieferantenzusage, eine ausgestellte Gutschrift und ein finanzieller Ausgleich sind unterschiedliche Stufen desselben Vorgangs. Die Beträge werden nicht addiert.",
        "Supplier approval, an issued credit note and financial settlement are different stages of the same transaction. Their amounts are not added together.",
        "Conferma del fornitore, nota di credito emessa e regolamento finanziario sono fasi diverse della stessa operazione. I relativi importi non si sommano.",
        "L’accord fournisseur, l’avoir émis et le règlement financier sont des étapes différentes d’une même opération. Leurs montants ne sont pas additionnés."
      ],

      steps: [
        [
          "„Ursprünglich betroffener Waren-/Differenzwert“ beschreibt die Ausgangsabweichung. „Gutschrift zugesagt“ bezeichnet den dokumentiert zugesagten Betrag. „Gutschrift ausgestellt“ bezeichnet tatsächlich in den Beispieldaten vorhandene Gutschriften.",
          "“Original affected goods/discrepancy value” describes the initial discrepancy. “Credit approved” is the documented approved amount. “Credit issued” refers to credit notes present in the sample data.",
          "Il valore iniziale della merce o della differenza descrive l’anomalia di partenza. Il credito confermato è l’importo documentato dal fornitore. La nota di credito emessa indica i documenti effettivamente presenti nei dati di esempio.",
          "La valeur initiale des marchandises ou de l’écart décrit l’anomalie de départ. Le crédit approuvé correspond au montant documenté par le fournisseur. L’avoir émis désigne les documents présents dans les données d’exemple."
        ],
        [
          "„Von der Zusage noch nicht ausgestellt“ ist die Lücke zwischen Zusage und Gutschriften. „Ausgestellt, noch nicht zugeordnet“ ist der Teil ausgestellter Gutschriften ohne vorhandene Buchungszuordnung.",
          "“Approved but not yet issued” is the gap between approval and credit notes. “Issued, not yet allocated” is the part of issued credit notes without a recorded accounting allocation.",
          "L’importo confermato ma non ancora emesso è la differenza tra conferma e note di credito. L’importo emesso ma non ancora abbinato è la parte delle note di credito senza un abbinamento contabile registrato.",
          "Le montant approuvé mais non encore émis est l’écart entre l’accord et les avoirs. Le montant émis mais non encore affecté est la part des avoirs sans affectation comptable enregistrée."
        ],
        [
          "Unter „Gutschriften & Ausgleich“ können Sie ausgestellte Gutschriften und separate Buchungsdetails prüfen. Eine Zuordnung oder simulierte Rückzahlung in dieser Demo ist kein unabhängig bestätigter echter Zahlungseingang.",
          "Under “Credit notes & settlement”, review issued credit notes and separate accounting details. An allocation or simulated refund in this demo is not an independently verified real receipt of payment.",
          "In «Note di credito e regolamento» può verificare le note emesse e i dettagli contabili separati. Un abbinamento o un rimborso simulato nella demo non costituisce un pagamento reale verificato in modo indipendente.",
          "Dans «Avoirs et règlement», vérifiez les avoirs émis et les détails comptables séparés. Une affectation ou un remboursement simulé ne constitue pas une réception réelle de paiement vérifiée indépendamment."
        ],
        [
          "Die zusätzliche Wechselkursprüfung verwendet fiktive Kurse. Ein Wechselkurseffekt ist getrennt von der Lieferantendifferenz zu betrachten und keine zusätzliche Lieferantenforderung.",
          "The additional exchange rate review uses fictional rates. Exchange rate effects are separate from supplier discrepancies and are not additional claims against the supplier.",
          "La verifica aggiuntiva dei cambi utilizza tassi fittizi. L’effetto del cambio è distinto dalla differenza verso il fornitore e non costituisce un credito aggiuntivo.",
          "La vérification complémentaire des changes utilise des taux fictifs. L’effet de change est distinct de l’écart fournisseur et ne constitue pas une créance supplémentaire."
        ]
      ]
    },

    {
      id: "closure",
      view: "closure",

      title: [
        "Demo-Abschluss und Fallakte",
        "Demo closure and case file",
        "Chiusura demo e fascicolo",
        "Clôture démo et dossier"
      ],

      intro: [
        "Die finale Demo-Fallakte dokumentiert einen gespeicherten simulierten Abschlussstand mit Beleganhängen. Sie bestätigt keine reale Rückgewinnung und ist nicht revisionssicher.",
        "The final demo case file documents a saved simulated closure state with supporting documents. It does not verify real recovery and is not an immutable audit record.",
        "Il fascicolo finale demo documenta uno stato di chiusura simulato salvato con i relativi allegati. Non conferma un recupero reale e non garantisce l’inalterabilità delle registrazioni.",
        "Le dossier final de démonstration documente un état de clôture simulé enregistré avec ses justificatifs. Il ne confirme aucun recouvrement réel et ne constitue pas une archive inaltérable."
      ],

      steps: [
        [
          "Spielen Sie INV-301 bis zum dokumentierten Demo-Ausgleich durch und öffnen Sie die Abschlussprüfung. Für diesen Abschluss müssen Zusage, ausgestellte Gutschriften und Zuordnungen den betroffenen Betrag vollständig abdecken. Änderungen an Ausgangsdaten oder Prüfkonflikte können die Freigabe sperren.",
          "Follow INV-301 through to documented demo settlement and open closure review. Approval, issued credit notes and allocations must fully cover the affected amount for this closure. Edited source data or review conflicts can block release.",
          "Segua INV-301 fino al regolamento demo documentato e apra la verifica della chiusura. Conferma, note di credito emesse e abbinamenti devono coprire interamente l’importo interessato. Dati iniziali modificati o conflitti possono bloccare l’approvazione.",
          "Suivez INV-301 jusqu’au règlement démo documenté et ouvrez la vérification de clôture. Accord, avoirs émis et affectations doivent couvrir intégralement le montant concerné. Des données modifiées ou des conflits peuvent bloquer la validation."
        ],
        [
          "Öffnen und prüfen Sie die Belege. Bestätigen Sie die Belegprüfung und den Simulationscharakter, geben Sie eine Begründung mit 10–1000 Zeichen ein und betätigen Sie den Freigabe-Button.",
          "Open and review the documents. Confirm document review and the simulated nature of the decision, enter a reason of 10–1,000 characters and use the release button.",
          "Apra e verifichi i documenti. Confermi la verifica e il carattere simulato della decisione, inserisca una motivazione di 10–1000 caratteri e utilizzi il pulsante di approvazione.",
          "Ouvrez et examinez les justificatifs. Confirmez leur examen et le caractère simulé de la décision, saisissez un motif de 10 à 1 000 caractères puis utilisez le bouton de validation."
        ],
        [
          "„Fallakte ansehen“ öffnet die vollständige PDF-Vorschau mit Beleganhängen. Der Download speichert eine PDF-Datei auf Ihrem Gerät. Der vorläufige Bericht eines offenen Falls ist von der finalen Demo-Fallakte zu unterscheiden.",
          "“View case file” opens the full PDF preview with supporting documents. Download saves a PDF to your device. A preliminary report for an open case is different from a final demo case file.",
          "«Visualizzare il fascicolo» apre l’anteprima PDF completa con gli allegati. Il download salva un PDF sul dispositivo. Il rapporto provvisorio di un caso aperto è distinto dal fascicolo finale demo.",
          "«Consulter le dossier» ouvre l’aperçu PDF complet avec les justificatifs. Le téléchargement enregistre un PDF sur votre appareil. Le rapport provisoire d’un dossier ouvert est distinct du dossier final démo."
        ],
        [
          "Über die Wiedereröffnung mit Begründung können Sie weiterarbeiten. Frühere gespeicherte Abschlussstände bleiben verfügbar. Eigene manuelle Prüfungen erhalten nicht automatisch die für eine finale Freigabe nötige Belegkette.",
          "Reopen with a reason to continue working. Earlier saved closure states remain available. Custom manual reviews do not automatically receive the evidence chain needed for final release.",
          "La riapertura con motivazione permette di proseguire il lavoro. Gli stati di chiusura precedenti restano disponibili. Le verifiche manuali personali non ricevono automaticamente la documentazione necessaria all’approvazione finale.",
          "Rouvrez le dossier avec un motif pour poursuivre le traitement. Les états de clôture précédents restent disponibles. Les vérifications manuelles personnelles ne reçoivent pas automatiquement les justificatifs requis pour une validation finale."
        ]
      ]
    },

    {
      id: "faq",
      view: "overview",

      title: [
        "Begriffe und häufige Fragen",
        "Terms and common questions",
        "Termini e domande frequenti",
        "Termes et questions fréquentes"
      ],

      intro: [
        "Die wichtigsten Grenzen und Begriffe der Konzeptdemo.",
        "Key terms and limitations of the concept demo.",
        "I termini principali e i limiti della demo concettuale.",
        "Les principaux termes et limites de la démo conceptuelle."
      ],

      steps: [
        [
          "Ist eine erkannte Differenz eine sichere Forderung? Nein. Daten können unvollständig sein. Vertragsgrundlage, Lieferstand, zulässige Abzüge und bereits außerhalb der Daten vorhandene Gutschriften müssen geprüft werden.",
          "Does a detected discrepancy establish a claim? No. Data may be incomplete. Review contractual terms, delivery status, permitted deductions and credit notes that may exist outside the data.",
          "Una differenza rilevata dimostra un credito certo? No. I dati possono essere incompleti. Occorre verificare condizioni contrattuali, stato delle consegne, deduzioni ammesse e note di credito esistenti al di fuori dei dati.",
          "Un écart détecté établit-il une créance certaine ? Non. Les données peuvent être incomplètes. Vérifiez les conditions contractuelles, les livraisons, les déductions autorisées et les avoirs existant hors des données."
        ],
        [
          "Warum ist eine Gutschrift noch kein Zahlungseingang? Sie dokumentiert zunächst eine Korrektur des Lieferanten. Ob sie wirksam verrechnet oder erstattet wurde, ist gesondert nachzuweisen.",
          "Why is a credit note not a receipt of payment? It initially documents a supplier correction. Effective offsetting or refund requires separate evidence.",
          "Perché una nota di credito non equivale a un pagamento ricevuto? Documenta inizialmente una correzione del fornitore. L’effettiva compensazione o il rimborso richiedono prove separate.",
          "Pourquoi un avoir n’est-il pas une réception de paiement ? Il documente d’abord une correction du fournisseur. Une compensation ou un remboursement effectif nécessite des preuves distinctes."
        ],
        [
          "Wo werden Änderungen gespeichert? Lokal in diesem Browser und für diese Website-Adresse. Ein anderer Browser, ein anderer Port oder gelöschte Browserdaten können einen anderen oder leeren Spielstand zeigen. Notizen und finale Demo-Abschlüsse werden nicht an Lieferanten gesendet.",
          "Where are changes saved? Locally in this browser for this website address. A different browser, port or cleared browser data can show a different or empty state. Notes and final demo closures are not sent to suppliers.",
          "Dove vengono salvate le modifiche? Localmente in questo browser per questo indirizzo web. Un altro browser, un’altra porta o la cancellazione dei dati possono mostrare uno stato diverso o vuoto. Note e chiusure demo non vengono inviate ai fornitori.",
          "Où les modifications sont-elles enregistrées ? Localement dans ce navigateur pour cette adresse web. Un autre navigateur, port ou l’effacement des données peut afficher un état différent ou vide. Les notes et clôtures démo ne sont pas envoyées aux fournisseurs."
        ],
        [
          "Kann ich echte Dokumente hochladen? Diese Demo bietet keinen echten Import eigener Dokumente. „Neue Prüfung“ erfasst fiktive Werte manuell. Die gezeigten Muster-PDFs sind erfunden; ihre Sprache bleibt unabhängig von der gewählten Oberflächensprache erhalten.",
          "Can I upload real documents? This demo does not offer real import of your documents. “New review” manually captures fictional values. Sample PDFs are fictional and retain their language independently of the interface language.",
          "Posso caricare documenti reali? La demo non offre un’importazione reale dei propri documenti. «Nuova verifica» registra manualmente valori fittizi. I PDF di esempio sono fittizi e mantengono la propria lingua indipendentemente dall’interfaccia.",
          "Puis-je téléverser de vrais documents ? Cette démo ne propose pas d’import réel de vos documents. «Nouvelle vérification» saisit manuellement des valeurs fictives. Les PDF d’exemple sont fictifs et conservent leur langue indépendamment de l’interface."
        ],
        [
          "Was ist noch geplant? Der Bereich „Geplante Erweiterungen“ beschreibt mögliche weitere Funktionen. Diese Beschreibungen sind keine bereits verfügbaren Funktionen oder verbindlichen Lieferzusagen.",
          "What is planned? “Planned features” describes possible future functions. These descriptions do not mean the functions are available or constitute binding delivery commitments.",
          "Cosa è previsto? «Funzionalità previste» descrive possibili funzioni future. Le descrizioni non indicano funzioni già disponibili né impegni vincolanti di realizzazione.",
          "Qu’est-ce qui est prévu ? «Fonctionnalités prévues» décrit des fonctions futures possibles. Ces descriptions ne signifient pas qu’elles sont disponibles et ne constituent pas des engagements fermes."
        ]
      ]
    }
  ];

  const labels = {
    title: [
      "Handbuch",
      "Handbook",
      "Manuale",
      "Manuel"
    ],
    subtitle: [
      "Anleitung zur interaktiven ClaraSR-Konzeptdemo",
      "Guide to the interactive ClaraSR concept demo",
      "Guida alla demo concettuale interattiva ClaraSR",
      "Guide de la démo conceptuelle interactive ClaraSR"
    ],
    contents: [
      "Themen",
      "Topics",
      "Argomenti",
      "Rubriques"
    ],
    back: [
      "Zur vorherigen Ansicht",
      "Back to previous view",
      "Torna alla vista precedente",
      "Retour à la vue précédente"
    ],
    action: [
      "Bereich öffnen",
      "Open section",
      "Aprire la sezione",
      "Ouvrir la rubrique"
    ],
    note: [
      "Fiktive Daten · Lokale Speicherung · Keine echten Lieferantenanfragen",
      "Fictional data · Local storage · No real supplier requests",
      "Dati fittizi · Salvataggio locale · Nessuna richiesta reale ai fornitori",
      "Données fictives · Enregistrement local · Aucune demande réelle aux fournisseurs"
    ]
  };

  function languageIndex() {
    const language = document.documentElement.lang
      .toLowerCase()
      .split("-")[0];

    return {
      de: 0,
      en: 1,
      it: 2,
      fr: 3
    }[language] ?? 0;
  }

  const pick = values => values[languageIndex()];
  const label = key => pick(labels[key]);

  function element(tag, value, className) {
    const node = document.createElement(tag);

    if (value !== undefined) {
      node.textContent = value;
    }

    if (className) {
      node.className = className;
    }

    return node;
  }

  function init() {
    if (document.getElementById("cl-handbook")) return;

    const main = document.getElementById("demo-top");

    if (
      !main ||
      typeof window.showDemoView !== "function"
    ) {
      return;
    }

    const section = element(
      "section",
      undefined,
      "workspace demo-view cl-handbook"
    );

    section.id = "cl-handbook";
    section.dataset.demoView = "handbook";
    
    const footer = main.querySelector(".demo-footer");

    if (footer && footer.parentElement === main) {
      main.insertBefore(section, footer);
    } else {
      main.append(section);
    }
    

    let chapterId = "start";
    let returnView = "overview";
    let returnScroll = 0;
    let opener = null;

    const originalShow = window.showDemoView;

    window.showDemoView = function (view) {
      if (view === "handbook") {
        const current = document.querySelector(
          "[data-demo-view].demo-view-active"
        );

        if (current && current !== section) {
          returnView = current.dataset.demoView;
          returnScroll = window.scrollY;
        }
      }

      const result = originalShow(view);

      if (view === "handbook") {
        render();

        section.querySelector("h1")?.focus({
          preventScroll: true
        });
      }

      return result;
    };

    function back() {
      window.showDemoView(returnView);

      requestAnimationFrame(() => {
        window.scrollTo({
          top: returnScroll,
          behavior: "instant"
        });

        if (opener?.isConnected) {
          opener.focus({ preventScroll: true });
        }
      });
    }

    function render() {
      section.replaceChildren();

      const backButton = element(
        "button",
        label("back"),
        "document-viewer-button"
      );

      backButton.type = "button";
      backButton.onclick = back;

      const heading = element("h1", label("title"));
      heading.tabIndex = -1;

      section.append(
        backButton,
        heading,
        element("p", label("subtitle")),
        element("p", label("note"), "cl-handbook-note")
      );

      const layout = element(
        "div",
        undefined,
        "cl-handbook-layout"
      );

      const nav = element(
        "nav",
        undefined,
        "cl-handbook-topics"
      );

      nav.setAttribute("aria-label", label("contents"));
      nav.append(element("h2", label("contents")));

      const article = element(
        "article",
        undefined,
        "cl-handbook-article"
      );

      article.id = "cl-handbook-article";

      function showChapter(id, focus = false) {
        chapterId = id;

        const chapter = chapters.find(
          chapter => chapter.id === id
        ) || chapters[0];

        article.replaceChildren();

        const title = element(
          "h2",
          pick(chapter.title)
        );

        title.tabIndex = -1;

        article.append(
          title,
          element("p", pick(chapter.intro))
        );

        const steps = element("ol");

        chapter.steps.forEach(step => {
          steps.append(element("li", pick(step)));
        });

        article.append(steps);

        const action = element(
          "button",
          label("action"),
          "document-viewer-button"
        );

        action.type = "button";

        action.onclick = () => {
          window.showDemoView(chapter.view);
        };

        article.append(action);

        nav.querySelectorAll("button").forEach(button => {
          if (button.dataset.chapter === chapter.id) {
            button.setAttribute("aria-current", "page");
          } else {
            button.removeAttribute("aria-current");
          }
        });

        if (focus) {
          title.focus({ preventScroll: true });
        }
      }

      chapters.forEach(chapter => {
        const button = element(
          "button",
          pick(chapter.title)
        );

        button.type = "button";
        button.dataset.chapter = chapter.id;

        button.setAttribute(
          "aria-controls",
          article.id
        );

        button.onclick = () => {
          showChapter(chapter.id, true);
        };

        nav.append(button);
      });

      layout.append(nav, article);
      section.append(layout);
      showChapter(chapterId);
    }
    /* ClaraSR: Nur Handbuch mit Buchsymbol */


    function activateButtons() {
      document.querySelectorAll(
        ".cl-handbook-button"
      ).forEach(button => {
        button.disabled = false;
        button.removeAttribute("aria-disabled");
        button.setAttribute("aria-label", label("title"));
        button.title = label("title");

        const span = button.querySelector("span");
        const target = span || button;

        if (target.textContent !== label("title")) {
          target.textContent = label("title");
        }
      });
    }

    document.addEventListener("click", event => {
      const button = event.target.closest?.(
        ".cl-handbook-button"
      );

      if (!button) return;

      event.preventDefault();
      event.stopImmediatePropagation();

      opener = button;
      window.showDemoView("handbook");
    }, true);

    let activationPending = false;

    new MutationObserver(() => {
      if (activationPending) return;

      activationPending = true;

      requestAnimationFrame(() => {
        activationPending = false;
        activateButtons();
      });
    }).observe(document.body, {
      childList: true,
      subtree: true
    });

    new MutationObserver(() => {
      requestAnimationFrame(() => {
        activateButtons();
        render();
      });
    }).observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["lang"]
    });

    activateButtons();
    render();
  }

  if (document.readyState === "loading") {
    document.addEventListener(
      "DOMContentLoaded",
      init,
      { once: true }
    );
  } else {
    init();
  }
})();
/* ClaraSR: Handbuchposition und Roadmap v1 */
(() => {
  const additions = [
    {
      id: "structured-invoices",

      title: [
        "Strukturierte Rechnungsdaten übernehmen",
        "Import structured invoice data",
        "Importare dati di fattura strutturati",
        "Importer des données de facturation structurées"
      ],

      text: [
        "Perspektivisch Rechnungsdaten aus Formaten wie XRechnung und ZUGFeRD für den Abgleich nutzen. Umfang und Umsetzung richten sich nach dem tatsächlichen Kundenbedarf.",
        "Use invoice data from formats such as XRechnung and ZUGFeRD for reconciliation in the future. Scope and implementation will depend on actual customer needs.",
        "Utilizzare in futuro dati di fattura da formati come XRechnung e ZUGFeRD per la riconciliazione. Portata e realizzazione dipenderanno dalle esigenze effettive dei clienti.",
        "Utiliser à l’avenir les données de facturation de formats tels que XRechnung et ZUGFeRD pour le rapprochement. Le périmètre et la réalisation dépendront des besoins réels des clients."
      ]
    },
    {
      id: "product-references",

      title: [
        "Branchenspezifische Produktreferenzen berücksichtigen",
        "Support industry-specific product references",
        "Considerare riferimenti di prodotto specifici del settore",
        "Prendre en compte les références produit propres au secteur"
      ],

      text: [
        "Beispielsweise Chargen-, Seriennummern und UDI-Referenzen mit Reklamationsfällen und zugehörigen Produktdokumenten verknüpfen, sofern diese für die jeweilige Branche benötigt werden.",
        "Link identifiers such as batch numbers, serial numbers and UDI references to claim cases and related product documents where needed for the relevant industry.",
        "Collegare, ad esempio, numeri di lotto, numeri di serie e riferimenti UDI ai reclami e ai relativi documenti di prodotto, se necessari per il settore interessato.",
        "Relier, par exemple, les numéros de lot, numéros de série et références UDI aux dossiers de réclamation et aux documents produit associés, selon les besoins du secteur."
      ]
    }
  ];

  const statuses = [
    "Geplant · Noch nicht verfügbar",
    "Planned · Not yet available",
    "In programma · Non ancora disponibile",
    "Prévu · Pas encore disponible"
  ];

  function update() {
    const grid = document.querySelector(
      '[data-demo-view="roadmap"] .cl-roadmap-more-grid'
    );

    if (!grid) return;

    const language = document.documentElement.lang
      .toLowerCase()
      .split("-")[0];

    const index = {
      de: 0,
      en: 1,
      it: 2,
      fr: 3
    }[language] ?? 0;

    for (const item of additions) {
      let card = document.getElementById(
        "cl-roadmap-" + item.id
      );

      if (!card) {
        card = document.createElement("article");
        card.id = "cl-roadmap-" + item.id;

        card.append(
          document.createElement("h4"),
          document.createElement("p"),
          document.createElement("small")
        );

        grid.append(card);
      }

      card.querySelector("h4").textContent =
        item.title[index];

      card.querySelector("p").textContent =
        item.text[index];

      card.querySelector("small").textContent =
        statuses[index];
    }
  }

  function init() {
    update();

    new MutationObserver(update).observe(
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
      init,
      { once: true }
    );
  } else {
    init();
  }
})();

/* ClaraSR: Einheitliche Roadmap-Karten v1 */
(() => {
  const titles = [
    "Wareneingang mit dem Smartphone dokumentieren",
    "Record incoming goods on a smartphone",
    "Documentare la merce in entrata con lo smartphone",
    "Documenter les marchandises reçues avec un smartphone"
  ];

  const descriptions = [
    "Mitarbeitende sollen Artikel per Barcode oder QR-Code der passenden Bestellung zuordnen und Mengenabweichungen, Schäden oder Qualitätsmängel samt Fotos erfassen können. Die Angaben sollen direkt im zugehörigen Vorgang für Reklamation, Lieferantenklärung und Gutschriftenprüfung bereitstehen.",
    "Employees should be able to link items to the relevant order using a barcode or QR code and record quantity discrepancies, damage or quality issues with photos. The information should be available in the related case for claims, supplier clarification and credit note review.",
    "Il personale dovrebbe poter associare gli articoli all’ordine corretto tramite codice a barre o QR e registrare differenze di quantità, danni o difetti qualitativi con foto. Le informazioni dovrebbero essere disponibili nel caso associato per il reclamo, i chiarimenti con il fornitore e la verifica delle note di credito.",
    "Le personnel devrait pouvoir associer les articles à la commande correspondante par code-barres ou QR et consigner les écarts de quantité, dommages ou défauts de qualité avec photos. Ces informations devraient être disponibles dans le dossier associé pour la réclamation, les échanges fournisseur et la vérification des avoirs."
  ];

  const headings = [
    "Geplante Anwendungsfälle",
    "Planned use cases",
    "Casi d’uso previsti",
    "Cas d’usage prévus"
  ];

  const introductions = [
    "Diese Erweiterungen sind noch nicht verfügbar. Welche wir umsetzen, priorisieren wir anhand des tatsächlichen Kundenbedarfs.",
    "These features are not yet available. We will prioritize implementation based on actual customer needs.",
    "Queste funzionalità non sono ancora disponibili. Le priorità di realizzazione saranno definite in base alle esigenze effettive dei clienti.",
    "Ces fonctionnalités ne sont pas encore disponibles. Leur réalisation sera priorisée selon les besoins réels des clients."
  ];

  const statuses = [
    "Geplant · Noch nicht verfügbar",
    "Planned · Not yet available",
    "In programma · Non ancora disponibile",
    "Prévu · Pas encore disponible"
  ];

  function update() {
    const root = document.querySelector(
      '[data-demo-view="roadmap"]'
    );

    const outer = root?.querySelector(".cl-roadmap-card");
    const grid = outer?.querySelector(".cl-roadmap-more-grid");
    const more = outer?.querySelector(".cl-roadmap-more");

    if (!grid || !more) return;

    const language = document.documentElement.lang
      .toLowerCase()
      .split("-")[0];

    const index = {
      de: 0,
      en: 1,
      it: 2,
      fr: 3
    }[language] ?? 0;

    let mobile = document.getElementById(
      "cl-roadmap-mobile-compact"
    );

    if (!mobile) {
      outer.querySelector(".cl-roadmap-status")?.remove();

      outer.querySelector(
        '[data-roadmap-text="mobileTitle"]'
      )?.remove();

      outer.querySelector(
        '[data-roadmap-text="mobileIntro"]'
      )?.remove();

      outer.querySelector(".cl-roadmap-steps")?.remove();

      mobile = document.createElement("article");
      mobile.id = "cl-roadmap-mobile-compact";

      mobile.append(
        document.createElement("h4"),
        document.createElement("p")
      );

      grid.prepend(mobile);

      const example = outer.querySelector(
        ".cl-roadmap-example"
      );

      if (example) {
        more.after(example);
      }

      outer.setAttribute(
        "aria-labelledby",
        "cl-roadmap-more-title"
      );
    }

    mobile.querySelector("h4").textContent =
      titles[index];

    mobile.querySelector("p").textContent =
      descriptions[index];

    more.querySelector("h3").textContent =
      headings[index];

    more.querySelector(":scope > p").textContent =
      introductions[index];

    for (const card of grid.querySelectorAll(
      ":scope > article"
    )) {
      let status = card.querySelector("small");

      if (!status) {
        status = document.createElement("small");
        card.append(status);
      }

      status.textContent = statuses[index];
    }
  }

  function init() {
    update();

    new MutationObserver(() => {
      requestAnimationFrame(update);
    }).observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["lang"]
    });
  }

  if (document.readyState === "loading") {
    document.addEventListener(
      "DOMContentLoaded",
      init,
      { once: true }
    );
  } else {
    init();
  }
})();
