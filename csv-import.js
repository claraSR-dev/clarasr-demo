
"use strict";

/*
 * creditloop – CSV Import Engine v0.1
 *
 * Liest CSV-Daten lokal im Browser.
 * Unterstützt:
 * - Komma, Semikolon und Tabulator
 * - Anführungszeichen in CSV-Zellen
 * - Zeilenumbrüche innerhalb von Anführungszeichen
 * - Überprüfung der Spaltenanzahl
 *
 * Noch keine finanziellen Berechnungen.
 */

window.CreditloopCSV = (() => {

  function detectDelimiter(text) {
    const sample = text.slice(0, 10000);
    const options = [",", ";", "\t"];

    function countOutsideQuotes(delimiter) {
      let count = 0;
      let quoted = false;

      for (let i = 0; i < sample.length; i++) {
        const char = sample[i];

        if (char === '"') {
          if (quoted && sample[i + 1] === '"') {
            i++;
          } else {
            quoted = !quoted;
          }
        }

        if (!quoted && (char === "\n" || char === "\r")) {
          break;
        }

        if (!quoted && char === delimiter) {
          count++;
        }
      }

      return count;
    }

    return options.reduce((best, current) =>
      countOutsideQuotes(current) > countOutsideQuotes(best)
        ? current
        : best
    );
  }

  function parse(text) {
    const cleaned = text.replace(/^\uFEFF/, "");
    const delimiter = detectDelimiter(cleaned);

    const rows = [];
    const errors = [];

    let currentRow = [];
    let currentCell = "";
    let quoted = false;

    function finishCell() {
      currentRow.push(currentCell);
      currentCell = "";
    }

    function finishRow() {
      finishCell();

      if (currentRow.some(cell => cell.trim() !== "")) {
        rows.push(currentRow);
      }

      currentRow = [];
    }

    for (let i = 0; i < cleaned.length; i++) {
      const char = cleaned[i];

      if (char === '"') {
        if (quoted && cleaned[i + 1] === '"') {
          currentCell += '"';
          i++;
        } else {
          quoted = !quoted;
        }
      } else if (!quoted && char === delimiter) {
        finishCell();
      } else if (!quoted && (char === "\n" || char === "\r")) {
        if (char === "\r" && cleaned[i + 1] === "\n") {
          i++;
        }
        finishRow();
      } else {
        currentCell += char;
      }
    }

    if (quoted) {
      errors.push("Nicht geschlossene Anführungszeichen.");
    }

    if (currentCell !== "" || currentRow.length > 0) {
      finishRow();
    }

    if (rows.length === 0) {
      errors.push("Die Datei enthält keine Datensätze.");
      return {
        headers: [],
        records: [],
        delimiter,
        errors
      };
    }

    const headers = rows[0].map(header => header.trim());
    const records = [];

    if (headers.some(header => !header)) {
      errors.push("Mindestens eine Spaltenüberschrift ist leer.");
    }

    if (new Set(headers).size !== headers.length) {
      errors.push("Spaltenüberschriften sind nicht eindeutig.");
    }

    for (let i = 1; i < rows.length; i++) {
      if (rows[i].length !== headers.length) {
        errors.push(
          `Zeile ${i + 1}: Erwartet ${headers.length} Spalten, ` +
          `gefunden ${rows[i].length}.`
        );
        continue;
      }

      const record = {};

      headers.forEach((header, index) => {
        record[header] = rows[i][index];
      });

      records.push(record);
    }

    return {
      headers,
      records,
      delimiter,
      errors
    };
  }

  return { parse };

})();
