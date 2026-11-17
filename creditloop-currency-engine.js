
/*
 * creditloop – Currency Engine
 *
 * Währungsbeträge in kleinsten Einheiten (Cent/Rappen).
 * Wechselkurse werden ausdrücklich übergeben.
 * Keine automatischen oder erfundenen Wechselkurse.
 *
 * Finanzielle Zuordnung und Wechselkursergebnis
 * müssen getrennt ausgewiesen werden.
 */

(function (root) {
  "use strict";

  const SUPPORTED = Object.freeze(["CHF", "EUR", "USD"]);
  const RATE_SCALE = 100000000n;

  function currency(code) {
    const value = String(code ?? "").trim().toUpperCase();

    if (!SUPPORTED.includes(value)) {
      throw new Error(
        "Nicht unterstützte Währung: " + value
      );
    }

    return value;
  }

  function minor(value) {
    if (!Number.isSafeInteger(value)) {
      throw new Error(
        "Geldbetrag muss eine sichere Ganzzahl in " +
        "kleinsten Währungseinheiten sein."
      );
    }

    return value;
  }

  function parseAmount(value, code) {
    currency(code);

    const text = String(value).trim();

    if (!/^-?\d+(?:\.\d{1,2})?$/.test(text)) {
      throw new Error(
        "Ungültiger Betrag. Erwartet wird z. B. 1250.50."
      );
    }

    const negative = text.startsWith("-");
    const unsigned = negative ? text.slice(1) : text;
    const [whole, fraction = ""] = unsigned.split(".");

    const amount =
      BigInt(whole) * 100n +
      BigInt(fraction.padEnd(2, "0"));

    const signed = negative ? -amount : amount;

    if (
      signed > BigInt(Number.MAX_SAFE_INTEGER) ||
      signed < BigInt(Number.MIN_SAFE_INTEGER)
    ) {
      throw new Error("Betrag außerhalb des sicheren Bereichs.");
    }

    return Number(signed);
  }

  function parseRate(value) {
    const text = String(value).trim();

    if (!/^\d+(?:\.\d{1,8})?$/.test(text)) {
      throw new Error(
        "Ungültiger Wechselkurs. Maximal acht Nachkommastellen."
      );
    }

    const [whole, fraction = ""] = text.split(".");

    const scaled =
      BigInt(whole) * RATE_SCALE +
      BigInt(fraction.padEnd(8, "0"));

    if (scaled <= 0n) {
      throw new Error("Wechselkurs muss größer als null sein.");
    }

    return scaled;
  }

  function roundedDivide(numerator, denominator) {
    const negative = numerator < 0n;
    const absolute = negative ? -numerator : numerator;

    // Kaufmännische Rundung auf kleinste Währungseinheiten.
    const rounded =
      (absolute * 2n + denominator) / (2n * denominator);

    return negative ? -rounded : rounded;
  }

  function safeNumber(value) {
    if (
      value > BigInt(Number.MAX_SAFE_INTEGER) ||
      value < BigInt(Number.MIN_SAFE_INTEGER)
    ) {
      throw new Error(
        "Berechnung außerhalb des sicheren Zahlenbereichs."
      );
    }

    return Number(value);
  }

  function convert({
    amountMinor,
    from,
    to,
    rate,
    rateDate,
    rateSource
  }) {
    const source = currency(from);
    const target = currency(to);
    const amount = minor(amountMinor);

    if (source === target) {
      return {
        sourceAmountMinor: amount,
        convertedMinor: amount,
        from: source,
        to: target,
        rate: "1",
        rateDate: null,
        rateSource: "Identische Währung",
        conversionRequired: false
      };
    }

    if (
      typeof rateDate !== "string" ||
      !/^\d{4}-\d{2}-\d{2}$/.test(rateDate) ||
      !Number.isFinite(Date.parse(rateDate + "T00:00:00Z"))
    ) {
      throw new Error(
        "Ein gültiges Wechselkursdatum fehlt."
      );
    }

    if (
      typeof rateSource !== "string" ||
      !rateSource.trim()
    ) {
      throw new Error(
        "Eine Wechselkursquelle fehlt."
      );
    }

    const scaledRate = parseRate(rate);

    // rate bedeutet: 1 Einheit Ausgangswährung
    // entspricht X Einheiten Zielwährung.
    const converted = roundedDivide(
      BigInt(amount) * scaledRate,
      RATE_SCALE
    );

    return {
      sourceAmountMinor: amount,
      convertedMinor: safeNumber(converted),
      from: source,
      to: target,
      rate: String(rate),
      rateDate,
      rateSource: rateSource.trim(),
      conversionRequired: true
    };
  }

  function exchangeDifference({
    expectedMinor,
    actualMinor,
    currencyCode
  }) {
    const code = currency(currencyCode);
    const expected = minor(expectedMinor);
    const actual = minor(actualMinor);

    const difference = safeNumber(
      BigInt(actual) - BigInt(expected)
    );

    return {
      currency: code,
      expectedMinor: expected,
      actualMinor: actual,
      differenceMinor: difference,
      classification:
        difference === 0
          ? "NO_EXCHANGE_DIFFERENCE"
          : difference > 0
            ? "POSITIVE_EXCHANGE_DIFFERENCE"
            : "NEGATIVE_EXCHANGE_DIFFERENCE"
    };
  }

  function compareSettlement({
    sourceAmountMinor,
    sourceCurrency,
    targetCurrency,
    rate,
    rateDate,
    rateSource,
    actualTargetMinor
  }) {
    const conversion = convert({
      amountMinor: sourceAmountMinor,
      from: sourceCurrency,
      to: targetCurrency,
      rate,
      rateDate,
      rateSource
    });

    const difference = exchangeDifference({
      expectedMinor: conversion.convertedMinor,
      actualMinor: actualTargetMinor,
      currencyCode: targetCurrency
    });

    return {
      conversion,
      difference,
      sourceAmountMinor: conversion.sourceAmountMinor,
      comparisonCurrency: conversion.to,
      actualTargetMinor: difference.actualMinor,
      exchangeDifferenceMinor: difference.differenceMinor,
      settlementVerified: false,
      note:
        "Rechnerischer Währungsvergleich. " +
        "Keine unabhängige Bestätigung des finanziellen Ausgleichs."
    };
  }

  root.CreditloopCurrency = Object.freeze({
    SUPPORTED,
    parseAmount,
    convert,
    exchangeDifference,
    compareSettlement
  });

})(
  typeof window !== "undefined" ? window : globalThis
);
