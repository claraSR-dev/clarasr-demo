"use strict";

window.ClaraSRInspection = (() => {
  function safe(value) {
    if (
      !Number.isSafeInteger(value) ||
      value < 0
    ) {
      throw new Error("invalidData");
    }

    return value;
  }

  function sum(values) {
    return values.reduce(
      (total, value) => safe(total + safe(value)),
      0
    );
  }

  function inspect(item, variant = null) {
    const fields = [
      "ordered",
      "damaged",
      "unitPrice",
      "invoiceUnitPrice",
      "invoiced"
    ];

    const changed =
      (
        variant !== null &&
        fields.some(key => variant[key] !== item[key])
      ) ||
      (
        variant !== null &&
        JSON.stringify(variant.received) !==
          JSON.stringify(item.received)
      );

    try {
      const values = variant
        ? { ...item, ...variant }
        : item;

      fields.forEach(key => safe(values[key]));

      if (
        !values.ordered ||
        !values.unitPrice ||
        !values.invoiceUnitPrice ||
        !Array.isArray(values.received) ||
        !values.received.length ||
        values.received.length !== item.receiptIds.length
      ) {
        throw new Error("invalidData");
      }

      const received = sum(values.received);

      if (values.damaged > received) {
        throw new Error("invalidDamage");
      }

      if (
        received > values.ordered ||
        values.invoiced > values.ordered
      ) {
        throw new Error("quantityConflict");
      }

      // Nur berechnete, aber nicht eingegangene Mengen.
      // Noch nicht berechnete Restlieferungen sind kein
      // automatisch angenommener Gutschriftbetrag.
      const missingBilled = Math.max(
        0,
        values.invoiced - received
      );

      const shortageValue = safe(
        missingBilled * values.unitPrice
      );

      // Beschädigte Ware ist Teil der eingegangenen Menge,
      // nicht zusätzlich eine Fehlmenge.
      const damagedBilled = Math.min(
        values.damaged,
        values.invoiced,
        received
      );

      const damageValue = safe(
        damagedBilled * values.unitPrice
      );

      const priceValue = safe(
        Math.max(
          0,
          values.invoiceUnitPrice - values.unitPrice
        ) * values.invoiced
      );

      const exposure = sum([
        shortageValue,
        damageValue,
        priceValue
      ]);

      const outstandingUnits =
        values.ordered - received;

      const scheduled =
        item.kind === "partial" &&
        outstandingUnits > 0;

      const overdue =
        scheduled &&
        item.due < item.asOf;

      const issues = [];

      if (missingBilled) {
        issues.push("shortage");
      }

      if (damageValue) {
        issues.push("damage");
      }

      if (priceValue) {
        issues.push("price");
      }

      if (overdue) {
        issues.push("overdue");
      }

      if (
        values.invoiceUnitPrice < values.unitPrice
      ) {
        issues.push("lowerPrice");
      }

      const issued = sum(
        item.credits.map(credit => credit.amount)
      );

      const allocated = sum(
        item.settlements.map(entry => entry.amount)
      );

      const creditIds = new Set();

      for (const credit of item.credits) {
        if (
          !credit.id ||
          creditIds.has(credit.id)
        ) {
          throw new Error("referenceConflict");
        }

        creditIds.add(credit.id);

        const allocations = item.settlements.filter(
          entry => entry.creditId === credit.id
        );

        if (
          sum(allocations.map(entry => entry.amount)) >
          credit.amount
        ) {
          throw new Error("allocationConflict");
        }
      }

      const entryIds = new Set();

      for (const entry of item.settlements) {
        if (
          !creditIds.has(entry.creditId) ||
          entryIds.has(entry.id) ||
          !entry.demoOnly
        ) {
          throw new Error("referenceConflict");
        }

        entryIds.add(entry.id);
      }

      if (issued > item.approved) {
        throw new Error("allocationConflict");
      }

      const key =
        issues.length > 1
          ? "multiple"
          : issues[0] ||
            (
              outstandingUnits > 0
                ? scheduled
                  ? "partial"
                  : "deliveryOpen"
                : "match"
            );

      return {
        valid: true,
        key,
        values,
        changed,
        received,
        outstandingUnits,
        missingBilled,

        shortageValue,
        damageValue,
        priceValue,
        exposure,
        issues,

        issued,
        allocated,
        approved: item.approved,

        creditOutstanding:
          item.approved - issued,

        allocationOutstanding:
          issued - allocated,

        // Ausschließlich simulierte finanzielle
        // Abschlussfähigkeit innerhalb dieser Demo.
        demoClosable:
          !changed &&
          exposure > 0 &&
          item.approved === exposure &&
          issued === exposure &&
          allocated === issued &&
          item.settlements.length > 0
      };
    } catch (error) {
      return {
        valid: false,
        key: error.message,
        changed,
        exposure: null,
        demoClosable: false
      };
    }
  }

  return {
    inspect
  };
})();