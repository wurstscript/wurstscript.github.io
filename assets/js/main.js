---
---

function slugify(str) {
  return String(str)
    .normalize("NFKD")
    .replace(/[\u0300-\u036f]/g, "")
    .trim()
    .toLowerCase()
    .replace(/[^a-z0-9 -]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-");
}

function resolveTargetElement(rawId) {
  if (!rawId) return null;
  const decoded = decodeURIComponent(String(rawId));
  return (
    document.getElementById(decoded) ||
    document.getElementById(slugify(decoded)) ||
    document.getElementById(decoded.toLowerCase())
  );
}

function getScrollContainer() {
  const el = document.querySelector(".doc-inner");
  if (!el) return null;
  const style = window.getComputedStyle(el);
  const scrollable = style.overflowY === "auto" || style.overflowY === "scroll";
  if (!scrollable) return null;
  if (el.scrollHeight <= el.clientHeight + 2) return null;
  return el;
}

function scrollToElement(id) {
  const element = resolveTargetElement(id);
  if (!element) return false;

  const scrollContainer = getScrollContainer();
  if (scrollContainer) {
    const top = element.offsetTop - 16;
    scrollContainer.scrollTo({ top: Math.max(top, 0), behavior: "smooth" });
  } else {
    const top = element.getBoundingClientRect().top + window.scrollY - 94;
    window.scrollTo({ top: Math.max(top, 0), behavior: "smooth" });
  }

  return true;
}

function ensureHeadingId(heading, usedIds) {
  const fallback = slugify(heading.textContent) || "section";
  const base = heading.id || fallback;
  let id = base;
  let suffix = 2;

  while (
    usedIds.has(id) ||
    (document.getElementById(id) && document.getElementById(id) !== heading)
  ) {
    id = `${base}-${suffix}`;
    suffix += 1;
  }

  heading.id = id;
  usedIds.add(id);
  return id;
}

function appendTocItem(parent, heading, id, depth) {
  const item = document.createElement("li");
  item.dataset.tocDepth = String(depth);

  const link = document.createElement("a");
  link.className = "scrollto";
  link.href = `#${id}`;
  link.textContent = heading.textContent.trim();

  item.appendChild(link);
  parent.appendChild(item);
  return item;
}

function getSubMenu(parentItem) {
  let subMenu = Array.from(parentItem.children).find((child) =>
    child.classList.contains("doc-sub-menu")
  );

  if (!subMenu) {
    subMenu = document.createElement("ul");
    subMenu.className = "nav doc-sub-menu";
    parentItem.appendChild(subMenu);
  }

  return subMenu;
}

function buildSidebarToc(navContainer) {
  const content = document.querySelector(".doc-content");
  if (!content) return false;

  const headings = Array.from(content.querySelectorAll("h2, h3, h4")).filter(
    (heading) => heading.textContent.trim().length > 0
  );
  if (headings.length === 0) return false;

  const hasH2 = headings.some((heading) => heading.tagName === "H2");
  const hasH3 = headings.some((heading) => heading.tagName === "H3");
  const topLevel = hasH2 ? 2 : hasH3 ? 3 : 4;
  const maxLevel = Math.min(topLevel + 2, 4);
  const usedIds = new Set();
  const stack = [];
  let itemCount = 0;

  Array.from(navContainer.children).forEach((child) => {
    if (!child.classList.contains("nav-heading")) {
      child.remove();
    }
  });

  headings.forEach((heading) => {
    const level = Number(heading.tagName.substring(1));
    if (level < topLevel || level > maxLevel) return;

    const id = ensureHeadingId(heading, usedIds);
    const parentLevel = level - 1;
    let parentItem = null;

    for (let candidate = parentLevel; candidate >= topLevel; candidate -= 1) {
      if (stack[candidate]) {
        parentItem = stack[candidate];
        break;
      }
    }

    const depth = parentItem ? level - topLevel : 0;
    const parent = parentItem ? getSubMenu(parentItem) : navContainer;
    const item = appendTocItem(parent, heading, id, depth);

    stack[level] = item;
    for (let candidate = level + 1; candidate <= maxLevel; candidate += 1) {
      stack[candidate] = null;
    }
    itemCount += 1;
  });

  return itemCount > 0;
}

$(document).ready(function () {
  $("#cards-wrapper .item-inner").matchHeight();
  $("#showcase .card").matchHeight();

  $(document).delegate('*[data-toggle="lightbox"]', "click", function (e) {
    e.preventDefault();
    $(this).ekkoLightbox();
  });

  // Apply Wurst syntax highlighting to inline code snippets in docs/news.
  if (window.Prism) {
    const inlineCodeNodes = document.querySelectorAll(
      ".doc-content :not(pre) > code:not([class*='language-']), .news-article-content :not(pre) > code:not([class*='language-'])"
    );
    inlineCodeNodes.forEach((codeEl) => {
      Prism.util.setLanguage(codeEl, "wurst");
      Prism.highlightElement(codeEl);
    });
  }

  const navContainer = document.querySelector(".doc-menu");
  if (!navContainer) {
    return;
  }

  if (window.location.hash) {
    scrollToElement(window.location.hash.substring(1));
  }

  buildSidebarToc(navContainer);

  const navLinks = Array.from(document.querySelectorAll("a.scrollto[href^='#']"));

  // No in-page anchors means an empty table of contents; hide the sidebar rather than show a stub.
  if (navLinks.length === 0) {
    const emptySidebar = document.querySelector(".doc-sidebar");
    if (emptySidebar) emptySidebar.style.display = "none";
    return;
  }

  navLinks.forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      const hash = this.getAttribute("href") || "";
      const id = hash.replace(/^#/, "");
      history.pushState(null, "", "#" + id);
      scrollToElement(id);
    });
  });

  const offsetMap = navLinks
    .map((link) => {
      const id = (link.getAttribute("href") || "").replace(/^#/, "");
      const target = resolveTargetElement(id);
      const li = link.closest("li");
      if (!target || !li) return null;
      return { target: target, nav: li };
    })
    .filter(Boolean);

  if (offsetMap.length === 0) return;

  let selected = null;

  function updateOpenGroups(current) {
    navContainer
      .querySelectorAll("li.open")
      .forEach((item) => item.classList.remove("open"));

    let item = current;
    while (item && item !== navContainer) {
      if (item.tagName === "LI") {
        item.classList.add("open");
      }
      item = item.parentElement ? item.parentElement.closest("li") : null;
    }
  }

  function updateActive() {
    const marker = window.innerHeight * 0.24;
    let current = offsetMap[0].nav;
    for (const entry of offsetMap) {
      if (entry.target.getBoundingClientRect().top <= marker) {
        current = entry.nav;
      } else {
        break;
      }
    }
    if (selected !== current) {
      if (selected) selected.classList.remove("active");
      selected = current;
      selected.classList.add("active");
      updateOpenGroups(selected);
    }
  }

  const container = getScrollContainer();
  if (container) {
    container.addEventListener("scroll", updateActive, { passive: true });
  } else {
    window.addEventListener("scroll", updateActive, { passive: true });
  }
  updateActive();
});
