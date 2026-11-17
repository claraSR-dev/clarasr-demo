
"use strict";

/*
 * creditloop – Matching Engine v0.1
 *
 * Erste lokale Prüf-Engine.
 * Nur für definierte Testdaten und einfache Fälle.
 *
 * WICHTIG:
 * - Keine bestätigten Forderungen
 * - Keine nachgewiesenen Rückzahlungen
 * - Keine automatische CHF-Umrechnung
 * - Keine automatischen rechtlichen Bewertungen
 */

window.CreditloopMatching = (() => {

  const schemas = {
    invoices: [
      "Rechnungsnummer",
      "Lieferant",
      "Betrag",
      "Waehrung"
    ],
    returns: [
      "Retourennummer",
      "Rechnungsnummer",
      "Lieferant",
      "GenehmigterBetrag",
      "Waehrung",
      "Status"
    ],
    credits: [
      "Gutschriftnummer",
      "Rechnungsnummer",
      "Lieferant",
      "Betrag",
      "Waehrung"
    ]
  };

function detectType(headers) {
  const matches = Object.entries(schemas)
    .filter(([type, required]) =>
      required.every(column => headers.includes(column))
    )
    .sort((a, b) => b[1].length - a[1].length);

  if (matches.length === 0) {
    return null;
  }

  // Die spezifischste Dokumentart gewinnt.
  // Beispiel: Gutschriften enthalten alle Rechnungsfelder,
  // zusätzlich aber eine Gutschriftnummer.
  const bestMatch = matches[0];

  if (
    matches.length > 1 &&
    matches[1][1].length === bestMatch[1].length
  ) {
    return null;
  }

  return bestMatch[0];

  }

  /*
   * Geldbeträge ausschließlich als ganze Cent/Rappen.
   * Akzeptiert z. B.:
   * 5000
   * 5000.00
   * 5000,00
   * 5'000.00
   *
   * Gemischte mehrdeutige Zahlenformate werden abgelehnt.
   */
  function toMinorUnits(value) {
    const cleaned = String(value)
      .trim()
      .replace(/[\u00a0\u202f\s']/g, "")
      .replace(",", ".");

    if (!/^\d+(\.\d{1,2})?$/.test(cleaned)) {
      throw new Error("Ungültiger Geldbetrag: " + value);
    }

    const [whole, fraction = ""] = cleaned.split(".");
    const cents = (
      BigInt(whole) * 100n +
      BigInt(fraction.padEnd(2, "0"))
    );

    if (cents > BigInt(Number.MAX_SAFE_INTEGER)) {
      throw new Error("Betrag liegt außerhalb des sicheren Bereichs.");
    }

    return Number(cents);
  }

  function clean(value) {
    return String(value ?? "").trim();
  }

  function currency(value) {
    const result = clean(value).toUpperCase();

    if (!/^[A-Z]{3}$/.test(result)) {
      throw new Error("Ungültiger Währungscode: " + value);
    }

    return result;
  }

  function checkDuplicates(rows, idField, name) {
    const seen = new Set();
    const duplicates = new Set();

    for (const row of rows) {
      const id = clean(row[idField]);

      if (!id) {
        throw new Error(name + ": Leere Dokumentnummer.");
      }

      if (seen.has(id)) {
        duplicates.add(id);
      }

      seen.add(id);
    }

    if (duplicates.size) {
      throw new Error(
        name + ": Doppelte Dokumentnummer(n): " +
        [...duplicates].join(", ")
      );
    }
  }

  function process(datasets) {
    const invoices = datasets.invoices ?? [];
    const returns = datasets.returns ?? [];
    const credits = datasets.credits ?? [];

    if (!invoices.length || !returns.length) {
      throw new Error(
        "Rechnungen und Retourenfreigaben werden benötigt."
      );
    }

    checkDuplicates(invoices, "Rechnungsnummer", "Rechnungen");
    checkDuplicates(returns, "Retourennummer", "Retouren");
    checkDuplicates(credits, "Gutschriftnummer", "Gutschriften");

    const invoiceMap = new Map();
    const returnsByInvoice = new Map();
    const creditsByInvoice = new Map();

    for (const invoice of invoices) {
      const id = clean(invoice.Rechnungsnummer);
      invoiceMap.set(id, invoice);

      // Zahlenformat und Währung vor dem Abgleich validieren.
      toMinorUnits(invoice.Betrag);
      currency(invoice.Waehrung);
    }

    for (const item of returns) {
      const id = clean(item.Rechnungsnummer);

      if (!returnsByInvoice.has(id)) {
        returnsByInvoice.set(id, []);
      }

      returnsByInvoice.get(id).push(item);
    }

    for (const credit of credits) {
      const id = clean(credit.Rechnungsnummer);

      if (!creditsByInvoice.has(id)) {
        creditsByInvoice.set(id, []);
      }

      creditsByInvoice.get(id).push(credit);
    }

    const cases = [];

    for (const [invoiceId, relatedReturns] of returnsByInvoice) {
      const invoice = invoiceMap.get(invoiceId);
      const relatedCredits = creditsByInvoice.get(invoiceId) ?? [];

      const supplier = invoice
        ? clean(invoice.Lieferant)
        : clean(relatedReturns[0].Lieferant);

      const result = {
        invoiceId,
        supplier,
        expected: null,
        issued: null,
        difference: null,
        currency: null,
        category: "Prüfung erforderlich",
        explanation: "",
        evidence: {
          returnIds: relatedReturns.map(
            item => clean(item.Retourennummer)
          ),
          creditIds: relatedCredits.map(
            item => clean(item.Gutschriftnummer)
          )
        },
        financialStatus: "Potenzielle Auffälligkeit"
      };

      function needsReview(reason) {
        result.explanation = reason;
        cases.push(result);
      }

      if (!invoice) {
        needsReview(
          "Keine passende Originalrechnung in den Importdaten."
        );
        continue;
      }

      const approved = relatedReturns.filter(
        item => clean(item.Status).toLowerCase() === "genehmigt"
      );

      if (approved.length === 0) {
        // Keine genehmigte Retoure: kein Anspruch ableitbar.
        continue;
      }

      
if (approved.length !== relatedReturns.length) {
  needsReview(
    "Nicht alle Retouren zu dieser Rechnung sind genehmigt. " +
    "Eine automatische Summierung erfolgt nicht."
  );
  continue;
}



    const invoiceCurrency = currency(invoice.Waehrung);

    // Der genehmigte Anspruch wird in seiner eigenen
    // Währung geführt, unabhängig von der Rechnungswährung.
    const claimCurrency = currency(approved[0].Waehrung);

    const returnCurrenciesMatch = approved.every(
      item => currency(item.Waehrung) === claimCurrency
    );

    const creditCurrenciesMatch = relatedCredits.every(
      credit => currency(credit.Waehrung) === claimCurrency
    );

    // Unterschiedliche Währungen innerhalb eines Anspruchs
    // dürfen nicht ungeprüft zusammengerechnet werden.
    if (!returnCurrenciesMatch || !creditCurrenciesMatch) {
      result.currency = claimCurrency;

      needsReview(
        "Die Retouren und Gutschriften verwenden " +
        "unterschiedliche Währungen. Ohne dokumentierten " +
        "Wechselkurs ist kein sicherer Betragsabgleich möglich."
      );

      continue;
    }

    // Rechnungs- und Anspruchswährung getrennt speichern.
    result.invoiceCurrency = invoiceCurrency;
    result.claimCurrency = claimCurrency;


      const normalizedSupplier = clean(invoice.Lieferant)
        .toLocaleLowerCase();

      
const differentSuppliers = [
  ...approved,
  ...relatedCredits
].some(

        item =>
          clean(item.Lieferant).toLocaleLowerCase() !==
          normalizedSupplier
      );

      if (differentSuppliers) {
        needsReview(
          "Lieferantennamen stimmen nicht exakt überein. " +
          "Manuelle Zuordnung erforderlich."
        );
        continue;
      }

      
const expected = approved.reduce(
  (sum, item) =>
    sum + toMinorUnits(item.GenehmigterBetrag),
  0
);

if (!Number.isSafeInteger(expected)) {
  needsReview("Summierter genehmigter Betrag ist zu groß.");
  continue;
}


      const issued = relatedCredits.reduce(
        (sum, credit) => sum + toMinorUnits(credit.Betrag),
        0
      );

      if (!Number.isSafeInteger(issued)) {
        needsReview("Summierter Betrag ist zu groß.");
        continue;
      }

      result.expected = expected;
      result.issued = issued;
      result.currency = claimCurrency;

      if (issued < expected) {
        result.difference = expected - issued;

        result.category = relatedCredits.length
          ? "Teilweise Gutschrift"
          : "Gutschrift nicht gefunden";

        result.explanation = relatedCredits.length
          ? "Die ausgestellten Gutschriften sind geringer " +
            "als die dokumentierte Retourenfreigabe."
          : "In den importierten Daten wurde noch keine " +
            "passende Gutschrift gefunden. Das beweist " +
            "nicht, dass keine Gutschrift existiert.";

} else if (issued === expected) {
  result.difference = 0;
  result.category = "Betrag stimmt überein";

  result.financialStatus =
    "Keine Betragsabweichung – Verrechnung ungeprüft";

  result.explanation =
    "Die ausgestellten Gutschriften entsprechen " +
    "dem genehmigten Betrag. Es wurde keine " +
    "Betragsabweichung festgestellt. Ob die " +
    "Gutschrift tatsächlich verrechnet oder " +
    "zurückgezahlt wurde, muss separat anhand " +
    "von Buchhaltungsdaten geprüft werden.";



      } else {
        result.category = "Prüfung erforderlich";
        result.explanation =
          "Ausgestellte Gutschriften übersteigen " +
          "den genehmigten Betrag. Keine automatische " +
          "Forderungsberechnung.";
      }

      cases.push(result);
    }

    // Credits ohne bekannten Retourenfall separat kennzeichnen.
    for (const [invoiceId, orphanCredits] of creditsByInvoice) {
      if (returnsByInvoice.has(invoiceId)) continue;

      cases.push({
        invoiceId,
        supplier: clean(orphanCredits[0].Lieferant),
        expected: null,
        issued: null,
        difference: null,
        currency: null,
        category: "Nicht zugeordnet",
        explanation:
          "Gutschrift vorhanden, aber keine passende " +
          "Retourenfreigabe in den Importdaten.",
        evidence: {
          returnIds: [],
          creditIds: orphanCredits.map(
            item => clean(item.Gutschriftnummer)
          )
        },
        financialStatus: "Zuordnung prüfen"
      });
    }

    return cases;
  }

  return {
    detectType,
    process
  };

})();
