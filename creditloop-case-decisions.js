
/*
 * creditloop – Dokumentierte Demo-Abschlussentscheidungen
 *
 * Keine Bestätigung realer Zahlungen.
 * Keine Veränderung bestehender Fall- oder Nachweisdaten.
 *
 * Speicherung im lokalen Browser.
 * Nicht revisionssicher und nicht produktionsgeeignet.
 */

(function (root) {
  "use strict";

  const PREFIX = "creditloop-demo-case-decisions-v1::";

  const OUTCOMES = Object.freeze({
    credit: "Gutschrift ausgestellt – Ausgleich offen",
    full: "Vollständiger Ausgleich – Demoentscheidung",
    partial: "Teilweiser Ausgleich – Demoentscheidung",
    rejected: "Ohne Rückgewinnung geklärt – Demoentscheidung"
  });

  function clean(value) {
    return String(value ?? "").trim();
  }

  function storageKey(scenario, invoiceId) {
    if (!clean(scenario) || !clean(invoiceId)) {
      throw new Error("Szenario oder Rechnungsnummer fehlt.");
    }

    return PREFIX + scenario + "::" + invoiceId;
  }

  function read(scenario, invoiceId) {
    const stored = localStorage.getItem(
      storageKey(scenario, invoiceId)
    );

    if (stored === null) {
      return { status: "open", history: [], decision: null };
    }

    const record = JSON.parse(stored);

    if (
      !record ||
      !["open", "closed"].includes(record.status) ||
      !Array.isArray(record.history) ||
      record.history.some(
        item =>
          !item ||
          !["closed", "reopened"].includes(item.action) ||
          typeof item.at !== "string"
      )
    ) {
      throw new Error("Gespeicherter Abschlussdatensatz ist ungültig.");
    }

    if (
      record.status === "closed" &&
      (!record.decision ||
        !Object.hasOwn(OUTCOMES, record.decision.outcome))
    ) {
      throw new Error("Gespeicherte Abschlussentscheidung ist ungültig.");
    }

    return record;
  }

  function inspect(input) {
    const blockers = [];
    const outcome = clean(input.outcome);
    const reference = clean(input.reference);
    const reason = clean(input.reason);
    const audit = input.audit;

    if (!Object.hasOwn(OUTCOMES, outcome)) {
      blockers.push("Gültige Abschlussart auswählen.");
    }

    if (!reference || reference.length > 120) {
      blockers.push("Gültige Abschlussreferenz angeben.");
    }

    if (reason.length < 10 || reason.length > 1000) {
      blockers.push(
        "Entscheidung mit 10 bis 1000 Zeichen begründen."
      );
    }

    if (
      !audit ||
      !Array.isArray(audit.errors) ||
      !Array.isArray(audit.groups)
    ) {
      blockers.push("Zentrale Finanzprüfung nicht verfügbar.");
    } else {
      if (audit.errors.length) {
        blockers.push(
          "Offene finanzielle Prüfkonflikte müssen zuerst geklärt werden."
        );
      }

      const creditTotal = audit.groups.reduce(
        (sum, group) => sum + (group.creditMinor ?? 0),
        0
      );

      const allocated = audit.groups.reduce(
        (sum, group) => sum + (group.combinedMinor ?? 0),
        0
      );

      if (
        !Number.isSafeInteger(creditTotal) ||
        !Number.isSafeInteger(allocated) ||
        !Number.isSafeInteger(input.expected) ||
        creditTotal < 0 ||
        allocated < 0 ||
        input.expected < 0
      ) {
        blockers.push("Beträge können nicht sicher geprüft werden.");
      } else {
        if (outcome === "credit" && creditTotal <= 0) {
          blockers.push("Keine Gutschrift erfasst.");
        }

        if (
          outcome === "full" &&
          (creditTotal !== input.expected ||
            allocated !== input.expected)
        ) {
          blockers.push(
            "Vollständiger Ausgleich ist rechnerisch nicht belegt."
          );
        }

        if (
          outcome === "partial" &&
          !(allocated > 0 && allocated < input.expected)
        ) {
          blockers.push(
            "Ein positiver Teilausgleich mit offenem Rest fehlt."
          );
        }
      }
    }

    const supportingProofs = Array.isArray(input.proofs)
      ? input.proofs.filter(
          proof => clean(proof.reference) === reference
        )
      : [];

    const acceptedTypes = {
      credit: ["credit", "offset", "supplier", "other"],
      full: ["payment", "offset"],
      partial: ["payment", "offset"],
      rejected: ["supplier", "other"]
    };

    if (
      !supportingProofs.some(
        proof =>
          (acceptedTypes[outcome] ?? []).includes(proof.type)
      )
    ) {
      blockers.push(
        "Eine passende dokumentierte Nachweisreferenz fehlt."
      );
    }

    return {
      allowed: blockers.length === 0,
      blockers
    };
  }

  function close(input) {
    const current = read(input.scenario, input.invoiceId);

    if (current.status === "closed") {
      throw new Error("Fall ist bereits administrativ abgeschlossen.");
    }

    const check = inspect(input);

    if (!check.allowed) {
      throw new Error(check.blockers.join(" "));
    }

    const now = new Date().toISOString();

    const decision = {
      outcome: clean(input.outcome),
      reference: clean(input.reference),
      reason: clean(input.reason),
      expectedMinor: input.expected,
      simulationOnly: true,
      confirmedRecoveredMinor: 0,
      at: now
    };

    const next = {
      status: "closed",
      decision,
      history: [
        ...current.history,
        { action: "closed", at: now, decision }
      ]
    };

    localStorage.setItem(
      storageKey(input.scenario, input.invoiceId),
      JSON.stringify(next)
    );

    return next;
  }

  function reopen(scenario, invoiceId, reason) {
    const current = read(scenario, invoiceId);

    if (current.status !== "closed") {
      throw new Error("Der Fall ist nicht abgeschlossen.");
    }

    const explanation = clean(reason);

    if (explanation.length < 10 || explanation.length > 1000) {
      throw new Error(
        "Wiedereröffnung mit 10 bis 1000 Zeichen begründen."
      );
    }

    const now = new Date().toISOString();

    const next = {
      status: "open",
      decision: null,
      history: [
        ...current.history,
        {
          action: "reopened",
          at: now,
          reason: explanation
        }
      ]
    };

    localStorage.setItem(
      storageKey(scenario, invoiceId),
      JSON.stringify(next)
    );

    return next;
  }

  root.CreditloopCaseDecisions = Object.freeze({
    read,
    inspect,
    close,
    reopen,
    OUTCOMES
  });

})(
  typeof window !== "undefined" ? window : globalThis
);
