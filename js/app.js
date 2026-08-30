(() => {
  const toggle = document.querySelector("[data-nav-toggle]");
  const drawer = document.querySelector("[data-nav-drawer]");
  const groups = document.querySelectorAll("[data-menu-group]");

  const closeGroups = (except) => {
    groups.forEach((group) => {
      if (group === except) return;
      group.classList.remove("is-open");
      const trigger = group.querySelector("[data-menu-trigger]");
      if (trigger) trigger.setAttribute("aria-expanded", "false");
    });
  };

  groups.forEach((group) => {
    const trigger = group.querySelector("[data-menu-trigger]");
    if (!trigger) return;
    trigger.addEventListener("click", (event) => {
      event.stopPropagation();
      const open = !group.classList.contains("is-open");
      closeGroups(group);
      group.classList.toggle("is-open", open);
      trigger.setAttribute("aria-expanded", String(open));
    });
  });

  document.addEventListener("click", () => closeGroups());
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") closeGroups();
  });

  if (toggle && drawer) {
    toggle.addEventListener("click", (event) => {
      event.stopPropagation();
      const open = drawer.classList.toggle("is-open");
      toggle.setAttribute("aria-expanded", String(open));
      document.body.classList.toggle("menu-open", open);
      if (!open) closeGroups();
    });
    drawer.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => {
        drawer.classList.remove("is-open");
        toggle.setAttribute("aria-expanded", "false");
        document.body.classList.remove("menu-open");
        closeGroups();
      });
    });
  }

  const search =
    document.querySelector("[data-store-search]") ||
    document.querySelector(".menu__search input[name='q']");
  const cards = document.querySelectorAll("[data-catalog] [data-product], [data-featured] [data-product]");
  const empty = document.querySelector("[data-empty]");
  const filters = document.querySelectorAll("[data-filter]");
  let family = "alle";
  const facets = {};
  const urlQuery = new URLSearchParams(location.search).get("q") || "";
  if (search && urlQuery && !search.value) search.value = urlQuery;

  const applyStoreFilter = () => {
    const q = search ? search.value.trim() : "";
    let visible = 0;
    cards.forEach((card) => {
      const hay = card.getAttribute("data-product") || "";
      const cat = card.getAttribute("data-category") || "";
      const matchQuery = window.WYSSA ? window.WYSSA.matches(hay, q) : hay.toLowerCase().includes(q.toLowerCase());
      const matchFamily = family === "alle" || cat === family;
      const matchFacets = Object.entries(facets).every(([key, value]) => {
        if (value === "alle") return true;
        const attr = key === "id" ? "id" : key;
        return (card.dataset[attr] || "").includes(value);
      });
      const show = matchQuery && matchFamily && matchFacets;
      card.hidden = !show;
      if (show) visible += 1;
    });
    if (empty) empty.hidden = visible > 0;
  };

  if (search) {
    search.addEventListener("input", applyStoreFilter);
  }

  filters.forEach((btn) => {
    btn.addEventListener("click", () => {
      filters.forEach((f) => {
        f.classList.remove("is-selected");
        f.setAttribute("aria-pressed", "false");
      });
      btn.classList.add("is-selected");
      btn.setAttribute("aria-pressed", "true");
      family = btn.dataset.filter || "alle";
      applyStoreFilter();
    });
  });

  document.querySelectorAll("[data-facet-group]").forEach((group) => {
    const key = group.dataset.facetGroup;
    facets[key] = "alle";
    const buttons = group.querySelectorAll("[data-facet]");
    buttons.forEach((btn) => {
      btn.addEventListener("click", () => {
        buttons.forEach((f) => {
          f.classList.remove("is-selected");
          f.setAttribute("aria-pressed", "false");
        });
        btn.classList.add("is-selected");
        btn.setAttribute("aria-pressed", "true");
        facets[key] = btn.dataset.facet || "alle";
        applyStoreFilter();
      });
    });
  });

  applyStoreFilter();

  const selectedValue = (field) => {
    const chip = document.querySelector(`[data-chip][data-field="${field}"].is-selected`);
    return chip ? chip.dataset.value : "";
  };

  const packCode = {
    "Full Case": "",
    "Upper 5–5": "-U55",
    "Lower 5–5": "-L55",
    Individual: "-IND",
  };

  const syncProductConfig = () => {
    const rx = selectedValue("rx");
    const slot = selectedValue("slot");
    const pack = selectedValue("pack");
    if (!rx && !slot && !pack) return;
    const slotCode = (slot || ".022").replace(".", "");
    const rxCode = (rx || "MBT").toUpperCase();
    const sku = `WYS-ALM1-${rxCode}-${slotCode}${packCode[pack] || ""}`;
    document.querySelectorAll("[data-sku]").forEach((el) => {
      el.textContent = sku;
    });
    const specSlot = document.querySelector("[data-spec-slot]");
    const specRx = document.querySelector("[data-spec-rx]");
    const specPack = document.querySelector("[data-spec-pack]");
    if (specSlot && slot) specSlot.textContent = `${slot}"`.replace('""', '"');
    if (specRx && rx) specRx.textContent = rx;
    if (specPack && pack) specPack.textContent = pack;
    const label = document.querySelector("[data-product-label]");
    if (label) label.textContent = `ALIGN M1 · ${rx} · ${slot}" · ${pack}`.replace('""', '"');
    const order = document.querySelector("[data-add-order]");
    if (order) order.href = `quick-order.html?sku=${encodeURIComponent(sku)}`;
  };

  const bindChips = (chips) => {
    chips.forEach((chip) => {
      chip.addEventListener("click", () => {
        chips.forEach((c) => {
          c.classList.remove("is-selected");
          c.setAttribute("aria-pressed", "false");
        });
        chip.classList.add("is-selected");
        chip.setAttribute("aria-pressed", "true");
        syncProductConfig();
      });
    });
  };

  const chipGroups = document.querySelectorAll("[data-chip-group]");
  if (chipGroups.length) {
    chipGroups.forEach((group) => bindChips(group.querySelectorAll("[data-chip]")));
  } else {
    bindChips(document.querySelectorAll("[data-chip]"));
  }
  syncProductConfig();

  const fillSkuRow = (input) => {
    const row = input.closest("tr");
    if (!row || !window.WYSSA) return;
    const hit = window.WYSSA.lookupSku(input.value);
    const product = row.querySelector("[data-qo-product]");
    const spec = row.querySelector("[data-qo-spec]");
    if (product) product.textContent = hit ? hit.product : "";
    if (spec) spec.textContent = hit ? hit.spec : "";
  };

  document.querySelectorAll("[data-sku-input]").forEach((input) => {
    input.addEventListener("input", () => fillSkuRow(input));
    fillSkuRow(input);
  });

  const preset = new URLSearchParams(location.search).get("sku");
  const firstSku = document.querySelector("[data-sku-input]");
  if (preset && firstSku) {
    firstSku.value = preset;
    fillSkuRow(firstSku);
    const qty = firstSku.closest("tr").querySelector('input[type="number"]');
    if (qty && !qty.value) qty.value = "1";
  }

  const submit = document.querySelector("[data-quick-submit]");
  const orderOk = document.querySelector("[data-order-ok]");
  if (submit && orderOk) {
    submit.addEventListener("click", () => {
      orderOk.hidden = false;
    });
  }
})();
