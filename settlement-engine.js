"use strict";

/*
 * creditloop – Settlement Engine v0.1
 *
 * Ordnet importierte Buchungen einzelnen
 * Lieferantengutschriften zu.
 *
 * WICHTIG:
 * - Nur lokale Testverarbeitung
 * - Buchungsdaten gelten zunächst als unverifiziert
 * - Keine automatische Bestätigung einer Rückgewinnung
 * - Geldbeträge werden in Cent/Rappen berechnet
 */

window.CreditloopSettlement = (() => {

  const requiredColumns = [
    "Buchungsnummer",
    "Gutschriftnummer",
    "Buchungsart",
    "Betrag",
    "Waehrung",
    "Belegreferenz"
  ];

  function isSettlementFile(headers) {
    return requiredColumns.every(
      column => headers.includes(column)
    );
  }

  function clean(value) {
    return String(value ?? "").trim();
  }

  function money(value) {
    const normalized = clean(value)
      .replace(/[\s\u00a0\u202f']/g, "")
      .replace(",", ".");

    if (!/^\d+(?:\.\d{1,2})?$/.test(normalized)) {
      throw new Error(
        "Ungültiger Geldbetrag: " + value
      );
    }

    const [whole, decimal = ""] = normalized.split(".");

    const amount =
      BigInt(whole) * 100n +
      BigInt(decimal.padEnd(2, "0"));

    if (amount > BigInt(Number.MAX_SAFE_INTEGER)) {
      throw new Error("Geldbetrag ist zu groß.");
    }

    return Number(amount);
  }

  function normalizeCurrency(value) {
    const code = clean(value).toUpperCase();

    if (!/^[A-Z]{3}$/.test(code)) {
      throw new Error(
        "Ungültiger Währungscode: " + value
      );
    }

    return code;
  }

  // Buchungen nur mit dokumentiertem Wechselkurs
  // in die Währung der Gutschrift umrechnen.
  function convertBookingAmount(
    row,
    bookingCurrency,
    creditCurrency,
    amountMinor
  ) {
    if (bookingCurrency === creditCurrency) {
      return {
        amountMinor,
        conversion: null
      };
    }

    if (!window.CreditloopCurrency?.convert) {
      throw new Error(
        "Die Währungsengine ist nicht verfügbar."
      );
    }

    const conversion = window.CreditloopCurrency.convert({
      amountMinor,
      from: bookingCurrency,
      to: creditCurrency,
      rate: clean(row.Wechselkurs),
      rateDate: clean(row.Kursdatum),
      rateSource: clean(row.Kursquelle)
    });

    return {
      amountMinor: conversion.convertedMinor,
      conversion
    };
  }


  function reconcile(credits, bookings) {
    const seenCredits = new Set();
    const seenBookings = new Set();
    const creditsMap = new Map();
    const warnings = [];

    // Gutschriften prüfen
    for (const row of credits) {
      const id = clean(row.Gutschriftnummer);

      if (!id || seenCredits.has(id)) {
        throw new Error(
          "Leere oder doppelte Gutschriftnummer: " + id
        );
      }

      seenCredits.add(id);

      creditsMap.set(id, {
        id,
        supplier: clean(row.Lieferant),
        invoiceId: clean(row.Rechnungsnummer),
        currency: normalizeCurrency(row.Waehrung),
        issued: money(row.Betrag),
        allocated: 0,
        remaining: null,
        bookings: [],
        status: ""
      });
    }

    // Buchungen prüfen und zuordnen
    for (const row of bookings) {
      const bookingId = clean(row.Buchungsnummer);
      const creditId = clean(row.Gutschriftnummer);
      const documentRef = clean(row.Belegreferenz);
      const type = clean(row.Buchungsart);

      if (!bookingId || seenBookings.has(bookingId)) {
        throw new Error(
          "Leere oder doppelte Buchungsnummer: " +
          bookingId
        );
      }

      seenBookings.add(bookingId);

      if (!documentRef) {
        throw new Error(
          bookingId + ": Belegreferenz fehlt."
        );
      }

      if (!["Verrechnung", "Rueckzahlung"].includes(type)) {
        throw new Error(
          bookingId + ": Unbekannte Buchungsart."
        );
      }

      const amount = money(row.Betrag);

      if (amount <= 0) {
        throw new Error(
          bookingId + ": Buchungsbetrag muss positiv sein."
        );
      }

      const code = normalizeCurrency(row.Waehrung);
      const credit = creditsMap.get(creditId);

      if (!credit) {
        warnings.push(
          bookingId + ": Keine Gutschrift mit Nummer " +
          creditId + " gefunden."
        );
        continue;
      }

      
    let allocation;

    try {
      allocation = convertBookingAmount(
        row,
        code,
        credit.currency,
        amount
      );
    } catch (error) {
      warnings.push(
        bookingId + ": Währungsabgleich nicht möglich. " +
        error.message
      );
      continue;
    }

    // Ab hier werden nur Beträge in der
    // Gutschriftwährung miteinander verglichen.
    const allocatedAmount = allocation.amountMinor;

    if (allocatedAmount <= 0) {
      warnings.push(
        bookingId + ": Umgerechneter Betrag ist nicht positiv."
      );
      continue;
    }



    // Überbuchung in der Gutschriftwährung verhindern.
    if (
      allocatedAmount >
      credit.issued - credit.allocated
    ) {
      warnings.push(
        bookingId + ": Buchung übersteigt den " +
        "noch offenen Gutschriftbetrag."
      );
      continue;
    }

    credit.allocated += allocatedAmount;

    credit.bookings.push({
      bookingId,
      type,

      // Betrag in der Währung der Gutschrift.
      amount: allocatedAmount,

      // Originaldaten bleiben nachvollziehbar.
      originalAmountMinor: amount,
      originalCurrency: code,
      creditCurrency: credit.currency,

      conversion: allocation.conversion,
      reference: documentRef,

      // Die Buchungszuordnung ist kein
      // unabhängig bestätigter Zahlungseingang.
      

    independentlyVerified: false
  });

  // Ende der Verarbeitung einzelner Buchungen.
  }

  const results = [];


    for (const credit of creditsMap.values()) {
      credit.remaining =
        credit.issued - credit.allocated;

      if (credit.allocated === 0) {
        credit.status = "Keine Buchung zugeordnet";
      } else if (credit.remaining === 0) {
        credit.status = "Vollständig zugeordnet";
      } else {
        credit.status = "Teilweise zugeordnet";
      }

      results.push(credit);
    }

    return {
      results,
      warnings,

      // Wichtig: Auch vollständig zugeordnete Buchungen
      // sind noch nicht unabhängig verifiziert.
      independentlyVerifiedRecovery: null
    };
  }

  
  return {
    isSettlementFile,
    reconcile
  };

})();
