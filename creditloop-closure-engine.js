
/*
 * creditloop – Zentrale finanzielle Abschlussprüfung
 *
 * Wiederverwendbare Prüfregeln für:
 * - Lieferantengutschriften
 * - Buchungszuordnungen
 * - Zahlungseingänge
 * - Doppelte Referenzen
 * - Überbuchungen
 * - Mögliche wirtschaftliche Doppelzählungen
 *
 * Keine fest eingebauten Geschäftsfälle.
 * Keine Änderungen an gespeicherten Daten.
 * Keine automatische Bestätigung echter Rückgewinnungen.
 */

(function (root) {
  "use strict";

  function text(value) {
    return String(value ?? "").trim();
  }

  // Beträge aus Rechnungs-/CSV-Daten in Rappen/Cent.
  function cents(value) {
    if (
      value === null ||
      value === undefined ||
      text(value) === ""
    ) {
      return null;
    }

    const amount = Number(value);
    const result = Math.round(amount * 100);

    if (
      !Number.isFinite(amount) ||
      amount < 0 ||
      !Number.isSafeInteger(result) ||
      Math.abs(amount * 100 - result) >= 0.000001
    ) {
      return null;
    }

    return result;
  }

  // Beträge, die bereits als Rappen/Cent gespeichert sind.
  function minor(value) {
    return Number.isSafeInteger(value) && value >= 0
      ? value
      : null;
  }

  function duplicateReferences(records, field) {
    const counts = new Map();

    for (const record of records) {
      const reference = text(record?.[field]);

      if (!reference) continue;

      counts.set(
        reference,
        (counts.get(reference) ?? 0) + 1
      );
    }

    return new Set(
      [...counts]
        .filter(([, count]) => count > 1)
        .map(([reference]) => reference)
    );
  }

  function unique(values) {
    return [...new Set(values)];
  }

  function audit(input = {}) {
    const {
      invoiceId,
      supplier,
      currency,
      expected,
      credits = [],
      bookings = [],
      payments = [],
      proofs = [],
      outcome = ""
    } = input;

    const errors = [];
    const notes = [];
    const groups = [];

    const caseId = text(invoiceId);
    const caseSupplier = text(supplier);
    const caseCurrency = text(currency);
    const approvedAmount = minor(expected);

    if (
      !caseId ||
      !caseSupplier ||
      !caseCurrency ||
      approvedAmount === null
    ) {
      errors.push("CASE_DATA_INVALID");
    }

    if (
      ![credits, bookings, payments, proofs].every(
        Array.isArray
      )
    ) {
      return {
        ok: false,
        errors: ["INPUT_INVALID"],
        notes: [],
        groups: [],
        bookedMinor: 0,
        paymentMinor: 0,
        confirmedRecoveredMinor: 0,
        canRelease: false,
        releaseReasons: ["INPUT_INVALID"]
      };
    }

    // Referenzen über die gesamten übergebenen
    // Datenbestände auf Eindeutigkeit prüfen.
    const duplicateCredits = duplicateReferences(
      credits,
      "Gutschriftnummer"
    );

    const duplicateBookings = duplicateReferences(
      bookings,
      "Buchungsnummer"
    );

    const duplicatePayments = duplicateReferences(
      payments,
      "paymentId"
    );

    const caseCredits = credits.filter(
      credit =>
        text(credit.Rechnungsnummer) === caseId
    );

    const caseCreditIds = new Set(
      caseCredits.map(
        credit => text(credit.Gutschriftnummer)
      )
    );

    const caseBookings = bookings.filter(
      booking =>
        caseCreditIds.has(
          text(booking.Gutschriftnummer)
        )
    );

    const casePayments = payments.filter(
      payment =>
        text(payment.invoiceId) === caseId ||
        caseCreditIds.has(text(payment.creditId))
    );

    // Mehrwährungs-Sicherheitsprüfung:
    // In dieser zentralen Abschlussprüfung dürfen
    // ausschließlich Beträge derselben Währung
    // miteinander verrechnet werden.
    //
    // Dokumentierte FX-Umrechnungen der Settlement-Engine
    // werden hier noch nicht unabhängig validiert.

    const currencyMismatch = [
      ...caseCredits,
      ...caseBookings
    ].some(record =>
      text(record.Waehrung).toUpperCase() !==
      caseCurrency.toUpperCase()
    ) || casePayments.some(payment =>
      text(payment.currency).toUpperCase() !==
      caseCurrency.toUpperCase()
    );

    if (currencyMismatch) {
      const currencyErrors = unique([
        ...errors,
        "CURRENCY_MISMATCH_REQUIRES_REVIEW"
      ]);

      return {
        ok: false,
        errors: currencyErrors,
        notes: [
          "MIXED_CURRENCY_AUDIT_DEFERRED"
        ],
        groups: [],
        bookedMinor: 0,
        paymentMinor: 0,
        confirmedRecoveredMinor: 0,
        canRelease: false,
        releaseReasons: unique([
          ...currencyErrors,
          "INDEPENDENT_FINAL_EVIDENCE_MISSING"
        ])
      };
    }

    // ---------------------------------------------
    // Dokumentierte Nachweise prüfen
    // ---------------------------------------------

    const proofReferences = new Set();

    for (const proof of proofs) {
      if (
        !proof ||
        ![
          "payment",
          "offset",
          "credit",
          "supplier",
          "other"
        ].includes(proof.type)
      ) {
        errors.push("PROOF_INVALID");
        continue;
      }

      const reference = text(proof.reference);
      const proofKey = proof.type + "::" + reference;

      if (
        !reference ||
        proofReferences.has(proofKey)
      ) {
        errors.push("PROOF_DUPLICATE_OR_EMPTY");
      }

      proofReferences.add(proofKey);

      if (proof.type === "payment") {
        const matches = payments.filter(
          payment =>
            text(payment.paymentId) === reference
        );

        if (
          matches.length !== 1 ||
          text(matches[0].invoiceId) !== caseId
        ) {
          errors.push(
            "PAYMENT_PROOF_NOT_UNIQUE_OR_FOREIGN"
          );
        }
      }

      if (proof.type === "offset") {
        const matches = bookings.filter(
          booking =>
            text(booking.Buchungsnummer) === reference
        );

        if (
          matches.length !== 1 ||
          !caseCreditIds.has(
            text(matches[0].Gutschriftnummer)
          )
        ) {
          errors.push(
            "BOOKING_PROOF_NOT_UNIQUE_OR_FOREIGN"
          );
        }
      }

      if (proof.type === "credit") {
        const matches = credits.filter(
          credit =>
            text(credit.Gutschriftnummer) === reference
        );

        if (
          matches.length !== 1 ||
          text(matches[0].Rechnungsnummer) !== caseId
        ) {
          errors.push(
            "CREDIT_PROOF_NOT_UNIQUE_OR_FOREIGN"
          );
        }
      }
    }

    // ---------------------------------------------
    // Gemeinsamer Abgleich pro Gutschrift
    // ---------------------------------------------

    let bookedMinor = 0;
    let paymentMinor = 0;

    for (const credit of caseCredits) {
      const creditId = text(
        credit.Gutschriftnummer
      );

      const creditAmount = cents(
        credit.Betrag
      );

      const groupErrors = [];

      if (
        !creditId ||
        duplicateCredits.has(creditId)
      ) {
        groupErrors.push(
          "CREDIT_DUPLICATE_OR_EMPTY"
        );
      }

      if (
        text(credit.Lieferant) !== caseSupplier ||
        text(credit.Waehrung) !== caseCurrency ||
        creditAmount === null ||
        creditAmount <= 0
      ) {
        groupErrors.push("CREDIT_DATA_INVALID");
      }

      const creditBookings = caseBookings.filter(
        booking =>
          text(booking.Gutschriftnummer) === creditId
      );

      const creditPayments = casePayments.filter(
        payment =>
          text(payment.creditId) === creditId
      );

      let booked = 0;
      let paid = 0;

      for (const booking of creditBookings) {
        const bookingId = text(
          booking.Buchungsnummer
        );

        const bookingAmount = cents(
          booking.Betrag
        );

        if (
          !bookingId ||
          duplicateBookings.has(bookingId) ||
          bookingAmount === null ||
          bookingAmount <= 0 ||
          text(booking.Waehrung) !== caseCurrency ||
          !Number.isSafeInteger(
            booked + bookingAmount
          )
        ) {
          groupErrors.push(
            "BOOKING_INVALID_OR_DUPLICATED"
          );
        } else {
          booked += bookingAmount;
        }
      }

      for (const payment of creditPayments) {
        const paymentId = text(
          payment.paymentId
        );

        // Zahlungsbeträge sind bereits in Rappen/Cent.
        const paymentAmount = minor(
          payment.amount
        );

        if (
          !paymentId ||
          duplicatePayments.has(paymentId) ||
          paymentAmount === null ||
          paymentAmount <= 0 ||
          text(payment.invoiceId) !== caseId ||
          text(payment.supplier) !== caseSupplier ||
          text(payment.currency) !== caseCurrency ||
          payment.demoOnly !== true ||
          !Number.isSafeInteger(
            paid + paymentAmount
          )
        ) {
          groupErrors.push(
            "PAYMENT_INVALID_OR_DUPLICATED"
          );
        } else {
          paid += paymentAmount;
        }
      }

      const combined = booked + paid;

      if (!Number.isSafeInteger(combined)) {
        groupErrors.push("TOTAL_UNSAFE");
      }

      if (
        creditAmount !== null &&
        combined > creditAmount
      ) {
        groupErrors.push("CREDIT_OVERALLOCATED");
      }

      if (booked > 0 && paid > 0) {
        groupErrors.push(
          "POTENTIAL_SAME_ECONOMIC_EVENT"
        );
      }

      errors.push(...groupErrors);

      if (
        !Number.isSafeInteger(bookedMinor + booked) ||
        !Number.isSafeInteger(paymentMinor + paid)
      ) {
        errors.push("TOTAL_UNSAFE");
      } else {
        bookedMinor += booked;
        paymentMinor += paid;
      }

      groups.push({
        creditId,
        creditMinor: creditAmount,
        bookedMinor: booked,
        paymentMinor: paid,
        combinedMinor: combined,
        errors: unique(groupErrors)
      });
    }

    // ---------------------------------------------
    // Fallfremde Zahlungszuordnungen
    // ---------------------------------------------

    for (const payment of casePayments) {
      if (
        !caseCreditIds.has(text(payment.creditId))
      ) {
        errors.push(
          "PAYMENT_CREDIT_NOT_IN_CASE"
        );
      }
    }

    if (caseCredits.length === 0) {
      notes.push("NO_CREDIT_IN_CASE");
    }

    if (bookedMinor > 0) {
      notes.push(
        "BOOKINGS_ARE_NOT_SETTLEMENT_PROOF"
      );
    }

    if (paymentMinor > 0) {
      notes.push(
        "PAYMENTS_ARE_SIMULATED_NOT_BANK_VERIFIED"
      );
    }

    if (outcome === "full") {
      const totalCredit = groups.reduce(
        (sum, group) =>
          sum + (group.creditMinor ?? 0),
        0
      );

      if (totalCredit < approvedAmount) {
        errors.push(
          "FULL_CREDIT_COVERAGE_MISSING"
        );
      }
    }

    const distinctErrors = unique(errors);

    const releaseReasons = [
      ...distinctErrors
    ];

    if (!outcome) {
      releaseReasons.push(
        "OUTCOME_NOT_SELECTED"
      );
    }

    // In der aktuellen lokalen Demo gibt es
    // keine unabhängig prüfbaren Bankdaten.
    // Deshalb niemals automatisch eine
    // tatsächliche Rückgewinnung bestätigen.
    releaseReasons.push(
      "INDEPENDENT_FINAL_EVIDENCE_MISSING"
    );

    return {
      ok: distinctErrors.length === 0,
      errors: distinctErrors,
      notes: unique(notes),
      groups,
      bookedMinor,
      paymentMinor,
      confirmedRecoveredMinor: 0,
      canRelease: false,
      releaseReasons: unique(releaseReasons)
    };
  }


  // ---------------------------------------------
  // Zentrale fachliche Abschlussentscheidung
  // ---------------------------------------------

  function assessRelease(input = {}) {
    const {
      auditResult,
      outcome = "",
      reference = "",
      expected = null,
      issued = null,
      proofLoadFailed = false
    } = input;

    const blockers = [];
    const passed = [];

    const expectedMinor = minor(expected);
    const issuedMinor = minor(issued);
    const ref = text(reference);

    if (!auditResult || typeof auditResult !== "object") {
      blockers.push("Die zentrale Finanzprüfung fehlt.");
    } else if (
      !Array.isArray(auditResult.errors) ||
      !Array.isArray(auditResult.groups)
    ) {
      blockers.push("Die Finanzprüfung ist unvollständig.");
    } else if (auditResult.errors.length > 0) {
      blockers.push(
        "Finanzielle Prüfkonflikte vorhanden: " +
        auditResult.errors.join(", ")
      );
    } else {
      passed.push("Keine strukturellen Finanzkonflikte erkannt.");
    }

    if (proofLoadFailed) {
      blockers.push(
        "Gespeicherte Nachweise konnten nicht zuverlässig geladen werden."
      );
    }

    if (!ref) {
      blockers.push("Eine Abschlussreferenz fehlt.");
    } else {
      passed.push("Abschlussreferenz erfasst.");
    }

    if (
      expectedMinor === null ||
      issuedMinor === null ||
      expectedMinor <= 0
    ) {
      blockers.push("Genehmigte oder gutgeschriebene Beträge sind ungültig.");
    }

    let classification = "Kein Abschlussergebnis ausgewählt";

    switch (outcome) {
      case "credit":
        classification = "Gutschrift ausgestellt – Ausgleich offen";

        if (issuedMinor === null || issuedMinor <= 0) {
          blockers.push("Keine ausgestellte Gutschrift vorhanden.");
        } else {
          passed.push("Ausgestellte Gutschrift erfasst.");
        }

        blockers.push(
          "Der finanzielle Ausgleich ist noch offen. " +
          "Der Fall darf nicht als zurückgewonnen geschlossen werden."
        );
        break;

      case "full":
        classification = "Vollständiger finanzieller Ausgleich";

        if (
          expectedMinor !== null &&
          issuedMinor !== null &&
          issuedMinor !== expectedMinor
        ) {
          blockers.push(
            "Der ausgestellte Gutschriftbetrag deckt " +
            "den genehmigten Betrag nicht exakt."
          );
        }

        blockers.push(
          "Ein unabhängig geprüfter vollständiger " +
          "Zahlungs- oder Verrechnungsnachweis fehlt."
        );
        break;

      case "partial":
        classification = "Teilweiser finanzieller Ausgleich";

        if (issuedMinor === null || issuedMinor <= 0) {
          blockers.push(
            "Kein positiver Gutschriftbetrag vorhanden."
          );
        }

        blockers.push(
          "Ein unabhängig geprüfter Teilausgleich fehlt."
        );

        blockers.push(
          "Der offene Restbetrag und seine weitere " +
          "Behandlung sind noch nicht abschließend geklärt."
        );
        break;

      case "rejected":
        classification = "Ohne Rückgewinnung geklärt";

        blockers.push(
          "Eine geprüfte Lieferantenentscheidung " +
          "oder dokumentierte Einigung fehlt."
        );
        break;

      default:
        blockers.push(
          "Bitte zuerst ein Abschlussergebnis auswählen."
        );
    }

    // Eine plausible Referenz oder simulierte Zahlung
    // ersetzt keinen unabhängig geprüften Nachweis.
    //
    // In dieser Entwicklungsstufe gibt es noch
    // keine vertrauenswürdige Freigabeinstanz.
    // Daher bewusst keine positive Freigabe.
    const canRelease = false;

    return {
      classification,
      canRelease,
      passed: unique(passed),
      blockers: unique(blockers),
      confirmedRecoveredMinor: 0,
      requiresIndependentEvidence: true
    };
  }

  root.CreditloopClosure = Object.freeze({
    audit,
    assessRelease
  });


})(
  typeof window !== "undefined"
    ? window
    : globalThis
);
