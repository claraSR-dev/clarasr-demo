"use strict";

// Gemeinsame Beispieldaten für Prüfung, Fälle und Musterbelege.
// Geldbeträge werden in Rappen gespeichert.

window.ClaraSRData = (() => {
  const specs = [
    [
      "301", "industrial", "Meccanica Italia S.r.l.",
      "Präzisionsbuchse PB-20", "Stück",
      100, [95], 0, 2000, 2000, 100, "shortage"
    ],
    [
      "302", "industrial", "Alpen Technik GmbH",
      "Sensormodul SM-75", "Stück",
      40, [38], 0, 7500, 7500, 40, "shortage"
    ],
    [
      "401", "flowers", "Fiori Milano S.r.l.",
      "Schnittrose Rosa Alba, 60 cm", "Stiel",
      200, [180], 0, 300, 300, 200, "shortage"
    ],
    [
      "303", "industrial", "Swiss Precision AG",
      "Präzisionswelle PW-80", "Stück",
      50, [50], 3, 8000, 8000, 50, "damage"
    ],
    [
      "304", "industrial", "Meccanica Italia S.r.l.",
      "Steuerungsmodul ST-250", "Stück",
      20, [20], 2, 25000, 25000, 20, "damage"
    ],
    [
      "402", "flowers", "Alpina Pflanzen AG",
      "Topfpflanze Monstera, 12 cm", "Stück",
      60, [60], 8, 1200, 1200, 60, "damage"
    ],
    [
      "305", "industrial", "Alpen Technik GmbH",
      "Montagehalter MH-20", "Stück",
      100, [100], 0, 2000, 2200, 100, "price"
    ],
    [
      "306", "industrial", "Swiss Precision AG",
      "Regelventil RV-90", "Stück",
      30, [30], 0, 9000, 9500, 30, "price"
    ],
    [
      "403", "flowers", "Viva Verde S.r.l.",
      "Basilikum, Topf 12 cm", "Stück",
      100, [100], 0, 400, 450, 100, "price"
    ],
    [
      "307", "industrial", "Meccanica Italia S.r.l.",
      "Kugellager KL-30", "Stück",
      100, [60], 0, 3000, 3000, 60, "partial"
    ],
    [
      "308", "industrial", "Alpen Technik GmbH",
      "Antriebseinheit AE-150", "Stück",
      24, [10, 8], 0, 15000, 15000, 18, "partial"
    ],
    [
      "404", "flowers", "Alpina Pflanzen AG",
      "Lavendel, Topf 14 cm", "Stück",
      120, [80], 0, 800, 800, 80, "partial"
    ],
    [
      "309", "industrial", "Swiss Precision AG",
      "Kupplung KU-25", "Stück",
      80, [80], 0, 2500, 2500, 80, "match"
    ],
    [
      "310", "industrial", "Alpen Technik GmbH",
      "Messadapter MA-180", "Stück",
      12, [7, 5], 0, 18000, 18000, 12, "match"
    ],
    [
      "405", "flowers", "Viva Verde S.r.l.",
      "Eukalyptusbund, 10 Stiele je Bund", "Bund",
      150, [150], 0, 600, 600, 150, "match"
    ]
  ];

  // Einzelbeträge der ausgestellten Gutschriften in Rappen.
  // Mehrere Einträge gehören zur selben Reklamation.
  const creditAmounts = {
    "301": [6000, 4000],
    "302": [10000, 5000],
    "303": [24000],
    "304": [25000],
    "402": [9600],
    "305": [12000, 8000],
    "306": [15000]
  };

  // Jede Zuordnung wird genau einmal gezählt.
  // Rückzahlungen werden nicht zusätzlich als Verrechnung geführt.
  const settlements = {
    "CR-301A": ["BK-301", 6000, "offset"],
    "CR-301B": ["BK-302", 4000, "offset"],
    "CR-302A": ["BK-303", 5000, "offset"],
    "FC-402": ["BK-402", 9600, "offset"],
    "CR-303": ["PAY-303", 24000, "refund"],
    "CR-306": ["PAY-306", 5000, "refund"]
  };

  const items = specs.map(row => {
    const [
      num,
      company,
      supplier,
      article,
      unit,
      ordered,
      received,
      damaged,
      unitPrice,
      invoiceUnitPrice,
      invoiced,
      kind
    ] = row;

    const id =
      (company === "flowers" ? "FL-" : "INV-") + num;

    const receivedTotal = received.reduce(
      (sum, quantity) => sum + quantity,
      0
    );

    const originalAmount =
      kind === "shortage"
        ? (invoiced - receivedTotal) * unitPrice
        : kind === "damage"
          ? damaged * unitPrice
          : kind === "price"
            ? (invoiceUnitPrice - unitPrice) * invoiced
            : 0;

    const hasApproval =
      Boolean(creditAmounts[num]) || num === "401";

    const item = {
      id,
      company,
      supplier,
      article,
      unit,
      ordered,
      received,
      damaged,
      unitPrice,
      invoiceUnitPrice,
      invoiced,
      kind,

      currency: "CHF",
      sku: "ART-" + num,

      date: "2026-11-10",
      asOf: "2026-11-17",

      due:
        company === "industrial"
          ? "2026-11-24"
          : "2026-11-19",

      orderId: "PO-" + num,

      receiptIds: received.map((_, index) =>
        "WE-" + num +
        (received.length > 1 ? "AB"[index] : "")
      ),

      approved: hasApproval ? originalAmount : 0,
      approvalId: hasApproval ? "DEC-" + num : null,

      credits: [],
      settlements: [],
      documents: []
    };

    (creditAmounts[num] || []).forEach(
      (amount, index, all) => {
        const creditId =
          (company === "flowers" ? "FC-" : "CR-") +
          num +
          (all.length > 1 ? "AB"[index] : "");

        item.credits.push({
          id: creditId,
          amount,
          date: "2026-11-14"
        });

        const entry = settlements[creditId];

        if (entry) {
          item.settlements.push({
            id: entry[0],
            creditId,
            amount: entry[1],
            method: entry[2],
            date: "2026-11-16",
            demoOnly: true
          });
        }
      }
    );

    function addDocument(documentId, type) {
      item.documents.push({
        id: documentId,
        type,
        filename: documentId + ".pdf"
      });
    }

    addDocument(item.orderId, "order");

    item.receiptIds.forEach(receiptId => {
      addDocument(receiptId, "receipt");
    });

    addDocument(id, "invoice");

    if (damaged) {
      addDocument("DMG-" + num, "damage");
    }

    if (kind === "partial") {
      addDocument("ETA-" + num, "schedule");
    }

    if (item.approvalId) {
      addDocument(item.approvalId, "decision");
    }

    item.credits.forEach(credit => {
      addDocument(credit.id, "credit");
    });

    item.settlements.forEach(entry => {
      addDocument(entry.id, entry.method);
    });

    return item;
  });

  // Ausgangsdaten bleiben unverändert.
  // Besucheränderungen werden separat als Testvarianten gespeichert.
  function freeze(value) {
    if (value && typeof value === "object") {
      Object.values(value).forEach(freeze);
      Object.freeze(value);
    }

    return value;
  }

  return freeze({
    version: "upstream-v1",
    asOf: "2026-11-17",
    items
  });
})();