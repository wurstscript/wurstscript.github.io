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

$(document).ready(function () {
  $("#cards-wrapper .item-inner").matchHeight();
  $("#showcase .card").matchHeight();

  $(document).delegate('*[data-toggle="lightbox"]', "click", function (e) {
    e.preventDefault();
    $(this).ekkoLightbox();
  });

  const navContainer = document.querySelector(".doc-menu");
  if (!navContainer) {
    return;
  }

  if (window.location.hash) {
    scrollToElement(window.location.hash.substring(1));
  }

  const headingNodes = Array.from(document.querySelectorAll(".doc-content h2, .doc-content h3"));
  const existingSectionLinks = navContainer.querySelectorAll('a.scrollto[href^="#"]');

  // Only auto-generate TOC when the template did not render one from frontmatter sections.
  if (existingSectionLinks.length === 0 && headingNodes.length > 0) {
    let currentSubList = null;
    headingNodes.forEach((heading) => {
      const id = heading.id || slugify(heading.textContent);
      heading.id = id;

      if (heading.tagName === "H2") {
        const item = document.createElement("li");
        item.innerHTML = `<a class="scrollto" href="#${id}">${heading.textContent}</a>`;
        navContainer.appendChild(item);
        currentSubList = null;
      } else {
        if (!currentSubList) {
          currentSubList = document.createElement("ul");
          currentSubList.className = "nav doc-sub-menu";
          navContainer.appendChild(currentSubList);
        }
        const item = document.createElement("li");
        item.innerHTML = `<a class="scrollto" href="#${id}">${heading.textContent}</a>`;
        currentSubList.appendChild(item);
      }
    });
  }

  const navLinks = Array.from(document.querySelectorAll("a.scrollto[href^='#']"));

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

