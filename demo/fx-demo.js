
"use strict";

/*
 * creditloop – Internationale Wechselkursprüfung
 *
 * Isolierte Konzeptdemo mit fiktiven Werten.
 * Keine Änderung an Matching Engine,
 * bestehenden Fallbeträgen oder localStorage.
 */

(() => {
  const examples = [
    {
      id: "fx-eur",
      title: "Europa – EUR / CHF",
      supplier: "Fiktiver EU-Lieferant",
      currency: "EUR",
      approved: 2000,
      credited: 2000,
      originalRate: 0.94,
      laterRate: 0.92,
      originalDate: "01.09.2026",
      laterDate: "15.10.2026"
    },
    {
      id: "fx-usd",
      title: "USA – USD / CHF",
      supplier: "Fiktiver US-Lieferant",
      currency: "USD",
      approved: 2000,
      credited: 1500,
      originalRate: 0.90,
      laterRate: 0.87,
      originalDate: "01.09.2026",
      laterDate: "15.10.2026"
    },
    {
      id: "fx-jpy",
      title: "Japan – JPY / CHF",
      supplier: "Fiktiver japanischer Lieferant",
      currency: "JPY",
      approved: 100000,
      credited: 100000,
      originalRate: 0.0058,
      laterRate: 0.0056,
      originalDate: "01.09.2026",
      laterDate: "15.10.2026"
    }
  ];

  const settlement = document.querySelector(
    '[data-demo-view="settlement"]'
  );

  
  if (!settlement) return;

  // Verhindern, dass die Wechselkursprüfung
  // bei mehrfacher Script-Ausführung doppelt erscheint.
  if (settlement.querySelector(".fx-demo-section")) {
    return;
  }

  const container = document.createElement("section");

  container.className = "fx-demo-section";
  container.setAttribute(
    "aria-label",
    "Internationale Wechselkursprüfung"
  );

  container.innerHTML = `
    <div class="fx-demo-heading">
      <div>
        <div class="section-label">
          INTERNATIONALE PRÜFBEISPIELE
        </div>
        <h3>Wechselkursprüfung</h3>
        <p>
          Drei separate Beispielszenarien mit
          fiktiven Wechselkursen.
          Keine Änderung an bestehenden
          Fällen oder Gutschriften.
        </p>
      </div>
      <span class="fx-demo-tag">FX DEMO</span>
    </div>

    <div class="fx-demo-tabs"
         id="fx-demo-tabs"
         aria-label="Währungsfall auswählen">
    </div>

    <div id="fx-demo-output"
         class="fx-demo-output"
         aria-live="polite">
    </div>
  `;

  // Noch vor dem bestehenden rechtlichen Hinweis
  // im Gutschriftenbereich einfügen.
  const disclaimer = settlement.querySelector(
    ".results-disclaimer"
  );

  if (disclaimer) {
    settlement.insertBefore(container, disclaimer);
  } else {
    settlement.appendChild(container);
  }

  const tabs = container.querySelector("#fx-demo-tabs");
  const output = container.querySelector("#fx-demo-output");

 
  function formatAmount(amount, currency) {
    return new Intl.NumberFormat("de-CH", {
      style: "currency",
      currency,
      currencyDisplay:
        currency === "USD" ? "code" : "symbol",
      minimumFractionDigits: currency === "JPY" ? 0 : 2,
      maximumFractionDigits: currency === "JPY" ? 0 : 2
    }).format(amount);
  }


  function formatRate(rate) {
    return new Intl.NumberFormat("de-CH", {
      minimumFractionDigits: 4,
      maximumFractionDigits: 6
    }).format(rate);
  }

  function calculate(item) {
    const missingOriginal =
      Math.max(0, item.approved - item.credited);

    const originalCHF =
      item.credited * item.originalRate;

    const laterCHF =
      item.credited * item.laterRate;

    const differenceCHF = laterCHF - originalCHF;

    return {
      missingOriginal,
      originalCHF,
      laterCHF,
      differenceCHF
    };
  }

  function createField(label, value) {
    const row = document.createElement("div");
    row.className = "fx-demo-field";

    const labelNode = document.createElement("span");
    labelNode.textContent = label;

    const valueNode = document.createElement("strong");
    valueNode.textContent = value;

    row.append(labelNode, valueNode);

    return row;
  }

  function render(item) {
    const result = calculate(item);

    tabs.querySelectorAll("button").forEach(button => {
      const active = button.dataset.fxId === item.id;

      button.classList.toggle("active", active);
      button.setAttribute("aria-pressed", String(active));
    });

    output.replaceChildren();

    const heading = document.createElement("div");
    heading.className = "fx-demo-case-heading";

    const title = document.createElement("h4");
    title.textContent = item.title;

    const supplier = document.createElement("p");
    supplier.textContent = item.supplier;

    heading.append(title, supplier);

    const values = document.createElement("div");
    values.className = "fx-demo-values";

    values.append(
      createField(
        "Genehmigte Lieferantengutschrift",
        formatAmount(item.approved, item.currency)
      ),
      createField(
        "Ausgestellte Gutschrift",
        formatAmount(item.credited, item.currency)
      ),
      createField(
        "Potenzielle Differenz in Originalwährung",
        formatAmount(
          result.missingOriginal,
          item.currency
        )
      ),
      createField(
        "Ursprünglicher Bewertungskurs (" +
        item.originalDate + ")",
        formatRate(item.originalRate) +
        " CHF / " + item.currency
      ),
      createField(
        "Späterer Bewertungskurs (" +
        item.laterDate + ")",
        formatRate(item.laterRate) +
        " CHF / " + item.currency
      ),
      createField(
        "Ursprünglicher CHF-Referenzwert",
        formatAmount(result.originalCHF, "CHF")
      ),
      createField(
        "Späterer CHF-Referenzwert",
        formatAmount(result.laterCHF, "CHF")
      )
    );

    const summary = document.createElement("div");
    summary.className = "fx-demo-summary";

    const fxLabel = document.createElement("span");
    fxLabel.textContent =
      "Berechneter Wechselkurseffekt auf den " +
      "ausgestellten Gutschriftbetrag";

    const fxAmount = document.createElement("strong");
   const formattedFxDifference = formatAmount(
  result.differenceCHF,
  "CHF"
).replace("CHF-", "CHF -");

fxAmount.textContent = formattedFxDifference;

    summary.append(fxLabel, fxAmount);

    const explanation = document.createElement("p");
    explanation.className = "fx-demo-explanation";

    if (result.missingOriginal > 0) {
      explanation.textContent =
        "Es besteht eine potenzielle Differenz von " +
        formatAmount(
          result.missingOriginal,
          item.currency
        ) +
        " in der Originalwährung. Der separat " +
        "berechnete CHF-Wechselkurseffekt ist " +
        "keine zusätzliche Lieferantenforderung.";
    } else {
      explanation.textContent =
        "Genehmigter und ausgestellter Betrag " +
        "stimmen in der Originalwährung überein. " +
        "Der CHF-Unterschied entsteht ausschließlich " +
        "aus den beiden Beispiel-Bewertungskursen.";
    }

    const note = document.createElement("p");
    note.className = "fx-demo-note";
    note.textContent =
      "Konzeptberechnung mit fiktiven Kursen " +
      "und Stichtagen. Keine automatisch " +
      "ermittelte buchhalterische Kursdifferenz, " +
      "kein Nachweis einer Forderung und " +
      "keine Bestätigung eines Zahlungseingangs.";

    output.append(
      heading,
      values,
      summary,
      explanation,
      note
    );
  }

  examples.forEach((item, index) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "fx-demo-tab";
    button.dataset.fxId = item.id;
    button.textContent = item.currency + " / CHF";

    button.addEventListener("click", () => {
      render(item);
    });

    tabs.appendChild(button);

    if (index === 0) render(item);
  });
})();
