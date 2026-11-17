"use strict";

(() => {
  const T = window.ClaraSRText;

  const names = {
    "INV-301": [
      "Präzisionsbuchse PB-20",
      "Precision bushing PB-20",
      "Boccola di precisione PB-20",
      "Douille de précision PB-20"
    ],
    "INV-302": [
      "Sensormodul SM-75",
      "Sensor module SM-75",
      "Modulo sensore SM-75",
      "Module capteur SM-75"
    ],
    "INV-303": [
      "Präzisionswelle PW-80",
      "Precision shaft PW-80",
      "Albero di precisione PW-80",
      "Arbre de précision PW-80"
    ],
    "INV-304": [
      "Steuerungsmodul ST-250",
      "Control module ST-250",
      "Modulo di controllo ST-250",
      "Module de commande ST-250"
    ],
    "INV-305": [
      "Montagehalter MH-20",
      "Mounting bracket MH-20",
      "Staffa di montaggio MH-20",
      "Support de montage MH-20"
    ],
    "INV-306": [
      "Regelventil RV-90",
      "Control valve RV-90",
      "Valvola di regolazione RV-90",
      "Vanne de régulation RV-90"
    ],
    "INV-307": [
      "Kugellager KL-30",
      "Ball bearing KL-30",
      "Cuscinetto a sfere KL-30",
      "Roulement à billes KL-30"
    ],
    "INV-308": [
      "Antriebseinheit AE-150",
      "Drive unit AE-150",
      "Unità di azionamento AE-150",
      "Unité d’entraînement AE-150"
    ],
    "INV-309": [
      "Kupplung KU-25",
      "Coupling KU-25",
      "Giunto KU-25",
      "Accouplement KU-25"
    ],
    "INV-310": [
      "Messadapter MA-180",
      "Measuring adapter MA-180",
      "Adattatore di misura MA-180",
      "Adaptateur de mesure MA-180"
    ],
    "FL-401": [
      "Schnittrose Rosa Alba, 60 cm",
      "Cut rose Rosa Alba, 60 cm",
      "Rosa recisa Rosa Alba, 60 cm",
      "Rose coupée Rosa Alba, 60 cm"
    ],
    "FL-402": [
      "Topfpflanze Monstera, 12 cm",
      "Potted Monstera, 12 cm",
      "Monstera in vaso, 12 cm",
      "Monstera en pot, 12 cm"
    ],
    "FL-403": [
      "Basilikum, Topf 12 cm",
      "Basil, 12 cm pot",
      "Basilico, vaso da 12 cm",
      "Basilic, pot de 12 cm"
    ],
    "FL-404": [
      "Lavendel, Topf 14 cm",
      "Lavender, 14 cm pot",
      "Lavanda, vaso da 14 cm",
      "Lavande, pot de 14 cm"
    ],
    "FL-405": [
      "Eukalyptusbund, 10 Stiele je Bund",
      "Eucalyptus bunch, 10 stems per bunch",
      "Mazzo di eucalipto, 10 steli per mazzo",
      "Botte d’eucalyptus, 10 tiges par botte"
    ]
  };

  function index(language) {
    const code = String(language)
      .toLowerCase()
      .split("-")[0];

    return {
      de: 0,
      en: 1,
      it: 2,
      fr: 3
    }[code] ?? 0;
  }

  window.ClaraSRArticleName = (
    item,
    language = T.lang()
  ) => {
    if (item.custom) return item.article;

    return names[item.id]?.[index(language)] ?? item.article;
  };

  const labels = {
    navigation: [
      "Seitennavigation der Lieferprüfung",
      "Delivery review pages",
      "Pagine della verifica delle consegne",
      "Pages de vérification des livraisons"
    ],
    page: ["Seite", "Page", "Pagina", "Page"],
    of: ["von", "of", "di", "sur"],
    records: [
      "Vorgänge",
      "transactions",
      "operazioni",
      "opérations"
    ],
    previous: [
      "Vorherige Seite",
      "Previous page",
      "Pagina precedente",
      "Page précédente"
    ],
    next: [
      "Nächste Seite",
      "Next page",
      "Pagina successiva",
      "Page suivante"
    ]
  };

  const tr = key => labels[key][index(T.lang())];

  const root = document.getElementById("inspection-page");
  if (!root) return;

  let scheduled = false;
  let observedDetail = null;

  const resize = typeof ResizeObserver === "function"
    ? new ResizeObserver(schedule)
    : null;

  function schedule() {
    if (scheduled) return;

    scheduled = true;

    requestAnimationFrame(() => {
      scheduled = false;
      enhance();
    });
  }

  function enhance() {
    const grid = root.querySelector(".cl-inspection-grid");
    const list = grid?.querySelector(".cl-inspection-list");
    const detail = grid?.querySelector(".cl-inspection-detail");

    if (!list || !detail) return;

    if (observedDetail !== detail) {
      resize?.disconnect();
      resize?.observe(detail);
      observedDetail = detail;
    }

    let column = grid.querySelector(".cl-review-column");

    if (!column) {
      column = document.createElement("div");
      column.className = "cl-review-column";

      const inner = document.createElement("div");
      inner.className = "cl-review-column-inner";

      const nav = document.createElement("nav");
      nav.className = "cl-review-pagination";

      list.before(column);
      column.append(inner);
      inner.append(list, nav);
    }

    const nav = column.querySelector("nav");

    const cards = [
      ...list.querySelectorAll(".cl-inspection-item")
    ];

    for (const badge of list.querySelectorAll(
      ".cl-entry-badge"
    )) {
      const kind = [
        "shortage",
        "damage",
        "price"
      ].find(key => T.t(key) === badge.textContent);

      if (kind) {
        badge.dataset.kind = kind;
      } else {
        delete badge.dataset.kind;
      }
    }

    const selected = cards.find(
      card => card.getAttribute("aria-current") === "true"
    );

    const reference = selected?.querySelector(
      ".cl-entry-card-heading strong"
    )?.textContent;

    const item = window.ClaraSRData.items.find(
      item => (
        item.custom ? item.invoiceReference : item.id
      ) === reference
    );

    const heading = detail.querySelector("h3");

    if (item && heading) {
      const title = (
        item.custom ? item.invoiceReference : item.id
      ) + " · " + window.ClaraSRArticleName(item);

      if (heading.textContent !== title) {
        heading.textContent = title;
      }
    }

    const mobile = window.innerWidth <= 850;

    cards.forEach(card => {
      card.hidden = false;
    });

    const cardHeight = Math.max(
      90,
      ...cards.map(
        card => card.getBoundingClientRect().height || 110
      )
    );

    const height = detail.getBoundingClientRect().height;

    const size = mobile || !height
      ? 5
      : Math.max(
          1,
          Math.floor((height - 110) / (cardHeight + 10))
        );

    const selectedIndex = Math.max(
      0,
      cards.indexOf(selected)
    );

    const page = Math.floor(selectedIndex / size) + 1;

    const pages = Math.max(
      1,
      Math.ceil(cards.length / size)
    );

    cards.forEach((card, i) => {
      card.hidden = (
        i < (page - 1) * size ||
        i >= page * size
      );
    });

    const signature = [
      size,
      page,
      cards.length,
      T.lang()
    ].join(":");

    if (nav.dataset.signature === signature) return;

    nav.dataset.signature = signature;
    nav.setAttribute("aria-label", tr("navigation"));
    nav.replaceChildren();

    const summary = document.createElement("p");

    summary.textContent =
      `${tr("page")} ${page} ${tr("of")} ${pages} · ` +
      `${cards.length} ${tr("records")}`;

    nav.append(summary);

    const buttons = document.createElement("div");
    nav.append(buttons);

    function control(label, destination, accessible) {
      const button = document.createElement("button");

      button.type = "button";
      button.textContent = label;
      button.setAttribute("aria-label", accessible);

      button.disabled = (
        !cards.length ||
        destination < 1 ||
        destination > pages
      );

      if (
        destination === page &&
        /^\d+$/.test(label)
      ) {
        button.setAttribute("aria-current", "page");
      }

      button.onclick = () => {
        cards[(destination - 1) * size]?.click();
        schedule();

        requestAnimationFrame(() => {
          const current = root.querySelector(
            '.cl-inspection-item[aria-current="true"]'
          );

          current?.focus({ preventScroll: true });
        });
      };

      buttons.append(button);
    }

    control("‹", page - 1, tr("previous"));

    const numbers = new Set([
      1,
      pages,
      page - 1,
      page,
      page + 1
    ]);

    let last = 0;

    [...numbers]
      .filter(number => number >= 1 && number <= pages)
      .sort((a, b) => a - b)
      .forEach(number => {
        if (last && number > last + 1) {
          const dots = document.createElement("span");
          dots.textContent = "…";
          buttons.append(dots);
        }

        control(
          String(number),
          number,
          tr("page") + " " + number
        );

        last = number;
      });

    control("›", page + 1, tr("next"));
  }

  new MutationObserver(schedule).observe(root, {
    childList: true,
    subtree: true,
    characterData: true
  });

  new MutationObserver(schedule).observe(
    document.documentElement,
    {
      attributes: true,
      attributeFilter: ["lang"]
    }
  );

  window.addEventListener("resize", schedule);
  schedule();
})();