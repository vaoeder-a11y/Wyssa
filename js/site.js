(() => {
  const current = document.body.dataset.page || "";

  const header = `
    <a class="skip-link" href="#inhalt">Skip to content</a>
    <header class="menu">
      <div class="menu__bar">
        <a class="menu__brand" href="index.html">WYSSA</a>
        <form class="menu__search" action="products.html" method="get" role="search">
          <label class="visually-hidden" for="nav-q">Search products</label>
          <input id="nav-q" name="q" type="search" data-store-search placeholder="Search SKU, size or product..." />
          <button class="menu__go" type="submit" aria-label="Search">
            <svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="11" cy="11" r="6.5" fill="none" stroke="currentColor" stroke-width="2"/><path d="M20 20l-4.2-4.2" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>
          </button>
        </form>
        <nav class="menu__nav" aria-label="Main">
          <div class="menu__group" data-menu-group>
            <button class="menu__link menu__link--btn" type="button" data-menu-trigger aria-expanded="false"${current === "products" ? ' aria-current="page"' : ""}>Products</button>
            <div class="menu__panel">
              <a href="products.html"><strong>All Products</strong><span>Full catalog</span></a>
              <a href="brackets.html"><strong>ALIGN</strong><span>Brackets, tubes, bands</span></a>
              <a href="wires.html"><strong>ARC</strong><span>Archwires</span></a>
              <a href="elastics.html"><strong>FORCE · LINK · TIE</strong><span>Elastics and ligatures</span></a>
              <a href="accessories.html"><strong>FIX · SPRING</strong><span>Stops, hooks, springs</span></a>
              <a href="instruments.html"><strong>PRO</strong><span>Instruments 01–10</span></a>
              <a href="quick-order.html"><strong>Quick Order</strong><span>Order by SKU</span></a>
            </div>
          </div>
        </nav>
        <div class="menu__tools">
          <a class="menu__icon" href="quick-order.html" aria-label="Quick Order">
            <svg viewBox="0 0 24 24" aria-hidden="true"><path fill="none" stroke="currentColor" stroke-width="1.8" d="M7 7h14l-1.2 9.5a2 2 0 0 1-2 1.7H10a2 2 0 0 1-2-1.6L6.2 4H3"/><circle cx="10" cy="20" r="1.3" fill="currentColor"/><circle cx="18" cy="20" r="1.3" fill="currentColor"/></svg>
          </a>
          <a class="menu__icon" href="professionals.html" aria-label="Practice account">
            <svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="8" r="3.2" fill="none" stroke="currentColor" stroke-width="1.8"/><path d="M5 19c.8-3.2 3.4-5 7-5s6.2 1.8 7 5" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/></svg>
          </a>
          <button class="icon-btn menu__toggle" type="button" data-nav-toggle aria-expanded="false" aria-controls="mobilenav">
            <span class="visually-hidden">Menu</span>
            <svg viewBox="0 0 16 16" aria-hidden="true"><path fill="currentColor" d="M2 3.5h12v1.2H2zm0 4h12v1.2H2zm0 4h12v1.2H2z"/></svg>
          </button>
        </div>
      </div>
      <div class="menu__sheet" id="mobilenav" data-nav-drawer>
        <a href="products.html">Products</a>
        <a href="brackets.html">Brackets</a>
        <a href="wires.html">Wires</a>
        <a href="elastics.html">Elastics</a>
        <a href="accessories.html">Accessories</a>
        <a href="instruments.html">Instruments</a>
        <a href="quick-order.html">Quick Order</a>
        <a href="professionals.html">Account</a>
        <a href="wyssa.html">Company</a>
        <a href="support.html">Support</a>
      </div>
    </header>
  `;

  const footer = `
    <footer class="footer" id="support">
      <div class="footer__grid">
        <div>
          <h2>Shop</h2>
          <ul>
            <li><a href="products.html">All Products</a></li>
            <li><a href="brackets.html">Brackets</a></li>
            <li><a href="wires.html">Archwires</a></li>
            <li><a href="elastics.html">Elastics</a></li>
            <li><a href="accessories.html">Accessories</a></li>
            <li><a href="instruments.html">Instruments</a></li>
            <li><a href="quick-order.html">Quick Order</a></li>
          </ul>
        </div>
        <div>
          <h2>Product Systems</h2>
          <ul>
            <li><a href="brackets.html">ALIGN</a></li>
            <li><a href="wires.html">ARC</a></li>
            <li><a href="elastics.html">FORCE · LINK · TIE</a></li>
            <li><a href="accessories.html">FIX · SPRING</a></li>
            <li><a href="instruments.html">PRO</a></li>
            <li><a href="compare.html">Compare Archwires</a></li>
          </ul>
        </div>
        <div>
          <h2>Professionals</h2>
          <ul>
            <li><a href="professionals.html">Practice Account</a></li>
            <li><a href="professionals.html#bulk">Bulk Ordering</a></li>
            <li><a href="professionals.html#distributor">Distributor Program</a></li>
            <li><a href="support.html">Documentation</a></li>
          </ul>
        </div>
        <div>
          <h2>Company</h2>
          <ul>
            <li><a href="wyssa.html">About WYSSA</a></li>
            <li><a href="wyssa.html#development">Product Development</a></li>
            <li><a href="wyssa.html#quality">Quality</a></li>
            <li><a href="support.html">Contact</a></li>
            <li><a href="legal.html">Impressum</a></li>
          </ul>
        </div>
      </div>
      <p class="footer__legal">
        For dental professionals only. Not for consumer sale.
        Copyright © 2026 WYSSA. All rights reserved.
        <a href="legal.html">Impressum</a>
      </p>
    </footer>
  `;

  const headerMount = document.querySelector("[data-site-header]");
  const footerMount = document.querySelector("[data-site-footer]");
  if (headerMount) headerMount.outerHTML = header;
  if (footerMount) footerMount.outerHTML = footer;

  const params = new URLSearchParams(location.search);
  const q = params.get("q") || "";
  document.querySelectorAll(".menu__search input").forEach((input) => {
    if (q) {
      input.value = q;
      input.setAttribute("value", q);
    }
  });
  const storeSearch = document.querySelector("[data-store-search]");
  if (storeSearch && q) storeSearch.value = q;

  const requested = document.querySelector("[data-account-ok]");
  if (requested && params.get("practice")) requested.hidden = false;
  const supportOk = document.querySelector("[data-support-ok]");
  if (supportOk && params.get("email")) supportOk.hidden = false;

  const renderCard = (item) => {
    const card = document.createElement("article");
    card.className = "card bento-card";
    card.dataset.category = item.family.toLowerCase();
    card.dataset.id = item.id;
    card.dataset.rx = (item.prescription || []).map((v) => v.toLowerCase()).join(" ");
    card.dataset.slot = (item.slot || []).map((v) => v.replace(/\./g, "")).join(" ");
    card.dataset.product = window.WYSSA ? window.WYSSA.hay(item) : `${item.sku} ${item.name}`;
    card.innerHTML = `
      <div class="card__image"><img src="${item.image}" alt="" width="800" height="800"></div>
      <p class="card__sku">${item.sku}</p>
      <h2 class="type-body-strong">${item.name}</h2>
      <p class="card__price">${item.title}</p>
      <a class="text-link" href="${item.href}">View</a>
    `;
    return card;
  };

  const grid = document.querySelector("[data-catalog]");
  if (grid && window.WYSSA) {
    const category = grid.dataset.catalog;
    const list =
      category && category !== "all"
        ? window.WYSSA.byCategory(category)
        : window.WYSSA.catalog.slice();
    const empty = grid.querySelector("[data-empty]");
    list.forEach((item) => grid.append(renderCard(item)));
    if (empty) empty.hidden = list.length > 0;
  }

  const featured = document.querySelector("[data-featured]");
  if (featured && window.WYSSA) {
    featured.dataset.featured.split(",").forEach((id) => {
      const item = window.WYSSA.byId(id.trim());
      if (item) featured.append(renderCard(item));
    });
  }
})();
