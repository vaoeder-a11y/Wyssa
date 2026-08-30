window.WYSSA = (() => {
  const products = [
    {
      id: "align-m1",
      sku: "WYS-ALM1",
      family: "ALIGN",
      name: "WYSSA ALIGN M1",
      title: "Precision Metal Bracket System",
      category: "brackets",
      href: "align-m1.html",
      image: "assets/store-brackets.png",
      material: "Stainless Steel",
      prescription: ["MBT", "Roth"],
      slot: [".018", ".022"],
      pack: "Full Case · Upper 5–5 · Lower 5–5 · Individual",
      keywords: ["bracket", "metal", "low-profile", "mesh", "system", "m1"],
    },
    {
      id: "align-bt1",
      sku: "WYS-ALBT1",
      family: "ALIGN",
      name: "WYSSA ALIGN BT1",
      title: "Bondable Buccal Tube",
      category: "brackets",
      href: "brackets.html",
      image: "assets/store-tubes.png",
      material: "Stainless Steel",
      prescription: ["MBT", "Roth"],
      slot: [".018", ".022"],
      pack: "Upper · Lower · Right · Left · First Molar · Second Molar",
      keywords: ["tube", "buccal", "molar", "bt1"],
    },
    {
      id: "arc-n",
      sku: "WYS-ARC-N",
      family: "ARC",
      name: "WYSSA ARC N",
      title: "Nickel Titanium Archwire",
      category: "wires",
      href: "wires.html",
      image: "assets/store-wires.png",
      material: "NiTi",
      sizes: [".012", ".014", ".016", ".018", ".020", ".016×.022", ".016×.025", ".017×.025", ".018×.025", ".019×.025"],
      form: ["Upper", "Lower"],
      keywords: ["archwire", "wire", "niti", "nickel titanium", "initial"],
    },
    {
      id: "arc-t",
      sku: "WYS-ARC-T",
      family: "ARC",
      name: "WYSSA ARC T",
      title: "Thermal Activated NiTi Archwire",
      category: "wires",
      href: "wires.html",
      image: "assets/arc-wires.png",
      material: "Thermal NiTi",
      sizes: [".012", ".014", ".016", ".018", ".016×.022", ".019×.025"],
      form: ["Upper", "Lower"],
      keywords: ["archwire", "wire", "thermal", "heat activated", "niti", "initial"],
    },
    {
      id: "arc-s",
      sku: "WYS-ARC-S",
      family: "ARC",
      name: "WYSSA ARC S",
      title: "Stainless Steel Archwire",
      category: "wires",
      href: "wires.html",
      image: "assets/store-wires.png",
      material: "Stainless Steel",
      sizes: [".016", ".018", ".016×.022", ".019×.025"],
      form: ["Upper", "Lower"],
      keywords: ["archwire", "wire", "steel", "ss", "finishing"],
    },
    {
      id: "force-light",
      sku: "WYS-FORCE-L",
      family: "FORCE",
      name: "WYSSA FORCE Light",
      title: "Intraoral Elastics · 2 oz · 1/4\"",
      category: "elastics",
      href: "elastics.html",
      image: "assets/store-elastics.png",
      force: "2 oz",
      diameter: '1/4"',
      keywords: ["elastic", "intraoral", "light", "e2"],
    },
    {
      id: "force-medium",
      sku: "WYS-FORCE-M",
      family: "FORCE",
      name: "WYSSA FORCE Medium",
      title: "Intraoral Elastics · 3.5 oz · 1/4\"",
      category: "elastics",
      href: "elastics.html",
      image: "assets/store-elastics.png",
      force: "3.5 oz",
      diameter: '1/4"',
      keywords: ["elastic", "intraoral", "medium", "e3"],
    },
    {
      id: "force-heavy",
      sku: "WYS-FORCE-H",
      family: "FORCE",
      name: "WYSSA FORCE Heavy",
      title: "Intraoral Elastics · 6 oz · 1/4\"",
      category: "elastics",
      href: "elastics.html",
      image: "assets/store-elastics.png",
      force: "6 oz",
      diameter: '1/4"',
      keywords: ["elastic", "intraoral", "heavy", "e4"],
    },
    {
      id: "link-c",
      sku: "WYS-LINK-C",
      family: "LINK",
      name: "WYSSA LINK C",
      title: "Continuous Power Chain",
      category: "elastics",
      href: "elastics.html",
      image: "assets/store-ligatures.png",
      colors: ["Clear", "Silver", "Pearl"],
      keywords: ["power chain", "chain", "continuous"],
    },
    {
      id: "link-s",
      sku: "WYS-LINK-S",
      family: "LINK",
      name: "WYSSA LINK S",
      title: "Short Power Chain",
      category: "elastics",
      href: "elastics.html",
      image: "assets/store-ligatures.png",
      colors: ["Clear", "Silver", "Pearl"],
      keywords: ["power chain", "chain", "short"],
    },
    {
      id: "link-l",
      sku: "WYS-LINK-L",
      family: "LINK",
      name: "WYSSA LINK L",
      title: "Long Power Chain",
      category: "elastics",
      href: "elastics.html",
      image: "assets/store-ligatures.png",
      colors: ["Clear", "Silver", "Pearl"],
      keywords: ["power chain", "chain", "long"],
    },
    {
      id: "tie-o",
      sku: "WYS-TIE-O",
      family: "TIE",
      name: "WYSSA TIE O",
      title: "Elastic Ligatures",
      category: "elastics",
      href: "elastics.html",
      image: "assets/store-ligatures.png",
      keywords: ["ligature", "o-ring", "modules"],
    },
    {
      id: "spring-open",
      sku: "WYS-SPR-OP",
      family: "SPRING",
      name: "WYSSA SPRING OPEN",
      title: "NiTi Open Coil Spring",
      category: "accessories",
      href: "accessories.html",
      image: "assets/store-wires.png",
      material: "NiTi",
      keywords: ["spring", "open coil", "coil"],
    },
    {
      id: "fix-stop",
      sku: "WYS-FIX-STOP",
      family: "FIX",
      name: "WYSSA FIX STOP",
      title: "Crimpable Archwire Stop",
      category: "accessories",
      href: "accessories.html",
      image: "assets/store-tubes.png",
      keywords: ["stop", "crimpable", "archwire"],
    },
    {
      id: "fix-hook",
      sku: "WYS-FIX-HOOK",
      family: "FIX",
      name: "WYSSA FIX HOOK",
      title: "Crimpable Archwire Hook",
      category: "accessories",
      href: "accessories.html",
      image: "assets/store-tubes.png",
      keywords: ["hook", "crimpable", "archwire"],
    },
  ];

  const instrumentTitles = {
    "01": "Bracket Placement Tweezer",
    "02": "Weingart Utility Plier",
    "03": "Distal End Cutter",
    "04": "Ligature Cutter",
    "05": "Bird Beak Plier",
    "06": "Mathieu Needle Holder",
    "07": "Bracket Removing Plier",
    "08": "Adhesive Removing Plier",
    "09": "Band Removing Plier",
    "10": "Ligature Director",
  };

  const instruments = Array.from({ length: 10 }, (_, i) => {
    const n = String(i + 1).padStart(2, "0");
    return {
      id: `pro-${n}`,
      sku: `WYS-PRO-${n}`,
      family: "PRO",
      name: `WYSSA PRO ${n}`,
      title: instrumentTitles[n],
      category: "instruments",
      href: "instruments.html",
      image: "assets/store-instruments.png",
      keywords: ["instrument", "plier", instrumentTitles[n]],
    };
  });

  const catalog = products.concat(instruments);

  const sizeCode = (size) =>
    size.replace(/[.\s"]/g, "").replace(/×/g, "x").replace(/x/g, "x");

  const arcSizes = {
    N: [".012", ".014", ".016", ".018", ".020", ".016×.022", ".016×.025", ".017×.025", ".018×.025", ".019×.025"],
    T: [".012", ".014", ".016", ".018", ".016×.022", ".019×.025"],
    S: [".016", ".018", ".016×.022", ".019×.025"],
  };

  const skus = [
    { sku: "WYS-ALM1-MBT-022", product: "ALIGN M1", spec: "MBT .022 Full Case", id: "align-m1" },
    { sku: "WYS-ALM1-ROTH-022", product: "ALIGN M1", spec: "Roth .022 Full Case", id: "align-m1" },
    { sku: "WYS-ALM1-MBT-018", product: "ALIGN M1", spec: "MBT .018 Full Case", id: "align-m1" },
    { sku: "WYS-ALM1-ROTH-018", product: "ALIGN M1", spec: "Roth .018 Full Case", id: "align-m1" },
    { sku: "WYS-ALM1-MBT-022-U55", product: "ALIGN M1", spec: "MBT .022 Upper 5–5", id: "align-m1" },
    { sku: "WYS-ALM1-MBT-022-L55", product: "ALIGN M1", spec: "MBT .022 Lower 5–5", id: "align-m1" },
    { sku: "WYS-ALM1-MBT-022-IND", product: "ALIGN M1", spec: "MBT .022 Individual", id: "align-m1" },
    { sku: "WYS-ALBT1-MBT-022-UR", product: "ALIGN BT1", spec: "MBT .022 Upper Right", id: "align-bt1" },
    { sku: "WYS-ALBT1-MBT-022-UL", product: "ALIGN BT1", spec: "MBT .022 Upper Left", id: "align-bt1" },
    { sku: "WYS-ALBT1-MBT-022-LR", product: "ALIGN BT1", spec: "MBT .022 Lower Right", id: "align-bt1" },
    { sku: "WYS-ALBT1-MBT-022-LL", product: "ALIGN BT1", spec: "MBT .022 Lower Left", id: "align-bt1" },
    { sku: "WYS-FORCE-L-14-2", product: "FORCE Light", spec: '2 oz · 1/4"', id: "force-light" },
    { sku: "WYS-FORCE-M-14-35", product: "FORCE Medium", spec: '3.5 oz · 1/4"', id: "force-medium" },
    { sku: "WYS-FORCE-H-14-6", product: "FORCE Heavy", spec: '6 oz · 1/4"', id: "force-heavy" },
    { sku: "WYS-LINK-C-CL", product: "LINK C", spec: "Continuous · Clear", id: "link-c" },
    { sku: "WYS-LINK-C-SV", product: "LINK C", spec: "Continuous · Silver", id: "link-c" },
    { sku: "WYS-LINK-C-PL", product: "LINK C", spec: "Continuous · Pearl", id: "link-c" },
    { sku: "WYS-LINK-S-CL", product: "LINK S", spec: "Short · Clear", id: "link-s" },
    { sku: "WYS-LINK-L-CL", product: "LINK L", spec: "Long · Clear", id: "link-l" },
    { sku: "WYS-TIE-O", product: "TIE O", spec: "Elastic ligatures", id: "tie-o" },
    { sku: "WYS-SPR-OP", product: "SPRING OPEN", spec: "NiTi open coil", id: "spring-open" },
    { sku: "WYS-FIX-STOP", product: "FIX STOP", spec: "Crimpable stop", id: "fix-stop" },
    { sku: "WYS-FIX-HOOK", product: "FIX HOOK", spec: "Crimpable hook", id: "fix-hook" },
  ];

  ["N", "T", "S"].forEach((mat) => {
    ["U", "L"].forEach((arch) => {
      arcSizes[mat].forEach((size) => {
        const code = sizeCode(size);
        skus.push({
          sku: `WYS-ARC-${mat}-${arch}-${code}`,
          product: `ARC ${mat}`,
          spec: `${arch === "U" ? "Upper" : "Lower"} ${size}`,
          id: `arc-${mat.toLowerCase()}`,
        });
      });
    });
  });

  instruments.forEach((item) => {
    skus.push({ sku: item.sku, product: item.name.replace("WYSSA ", ""), spec: item.title, id: item.id });
  });

  const compact = (value) =>
    String(value)
      .toLowerCase()
      .replace(/×/g, "x")
      .replace(/"/g, "")
      .replace(/[.\s,_/-]+/g, "");

  const tokenize = (query) =>
    String(query)
      .toLowerCase()
      .replace(/×/g, "x")
      .replace(/"/g, "")
      .split(/[\s,/]+/)
      .filter(Boolean);

  const hay = (item) => {
    const related = skus
      .filter((row) => row.id === item.id)
      .map((row) => `${row.sku} ${row.spec}`)
      .join(" ");
    return [
      item.sku,
      item.name,
      item.title,
      item.family,
      item.category,
      item.material,
      item.force,
      item.diameter,
      item.pack,
      related,
      ...(item.prescription || []),
      ...(item.slot || []),
      ...(item.sizes || []),
      ...(item.form || []),
      ...(item.colors || []),
      ...(item.keywords || []),
    ]
      .join(" ")
      .toLowerCase()
      .replace(/×/g, "x");
  };

  const matches = (source, query) => {
    const tokens = tokenize(query);
    if (!tokens.length) return true;
    const text = String(source).toLowerCase().replace(/×/g, "x");
    const packed = compact(text);
    return tokens.every((token) => text.includes(token) || packed.includes(compact(token)));
  };

  const lookupSku = (code) => {
    const needle = String(code || "")
      .trim()
      .toUpperCase();
    if (!needle) return null;
    return skus.find((row) => row.sku === needle) || null;
  };

  const search = (query, list = catalog) => {
    const skuHit = lookupSku(query);
    return list.filter((item) => {
      if (skuHit && skuHit.id === item.id) return true;
      return matches(hay(item), query);
    });
  };

  const byCategory = (category) => catalog.filter((p) => p.category === category);
  const byId = (id) => catalog.find((p) => p.id === id) || null;

  const cardSearch = (item) => hay(item);

  return { catalog, skus, search, matches, hay: cardSearch, byCategory, byId, lookupSku };
})();
