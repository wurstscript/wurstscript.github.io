/* Progressive enhancement: the complete API remains readable without JavaScript. */
document.addEventListener("DOMContentLoaded", () => {
  const browsers = [...document.querySelectorAll("[data-api-browser]")];
  const controllers = new Map();
  for (const browser of browsers) {
    const items = [...browser.querySelectorAll("[data-api-item]")];
    const search = browser.querySelector("[data-api-search]");
    const status = browser.querySelector("[data-api-status]");
    const pager = browser.querySelector(".api-pagination");
    const previous = browser.querySelector("[data-api-prev]");
    const next = browser.querySelector("[data-api-next]");
    const pageLabel = browser.querySelector("[data-api-page]");
    const texts = new Map(items.map((item) => [item, `${item.textContent} ${item.dataset.apiSearchText || ""}`.toLowerCase()]));
    const pageSize = 40;
    browser.querySelector(".api-tools").hidden = items.length <= 8;
    let page = 0;
    let matches = items;
    function render() {
      const words = search.value.trim().toLowerCase().split(/\s+/).filter(Boolean);
      matches = items.filter((item) => words.every((word) => texts.get(item).includes(word)));
      const pages = Math.max(1, Math.ceil(matches.length / pageSize));
      page = Math.min(page, pages - 1);
      const visible = new Set(matches.slice(page * pageSize, (page + 1) * pageSize));
      items.forEach((item) => { item.hidden = !visible.has(item); });
      status.textContent = matches.length ? `${matches.length} ${matches.length === 1 ? "result" : "results"}` : "No matching entries. Try a different name or rawcode.";
      pager.hidden = matches.length <= pageSize;
      previous.disabled = page === 0;
      next.disabled = page >= pages - 1;
      pageLabel.textContent = `${page + 1} / ${pages}`;
    }
    search.addEventListener("input", () => { page = 0; render(); });
    previous.addEventListener("click", () => { page--; render(); search.focus(); });
    next.addEventListener("click", () => { page++; render(); search.focus(); });
    controllers.set(browser, (item) => {
      search.value = "";
      page = Math.floor(items.indexOf(item) / pageSize);
      render();
    });
    render();
  }
  function revealFragment() {
    let hash;
    try { hash = decodeURIComponent(location.hash.slice(1)); } catch { return; }
    if (!hash) return;
    const target = document.getElementById(hash) || [...document.querySelectorAll("[data-legacy-anchor]")]
      .find((item) => item.dataset.legacyAnchor === hash.toLowerCase() ||
        (item.matches("a.api-row") && hash.startsWith(item.querySelector(".api-row-name").textContent + "-")));
    if (!target) return;
    if (target.matches("a.api-row")) {
      const isMember = hash.includes("-");
      location.replace(target.href + (isMember ? `#${encodeURIComponent(hash)}` : ""));
      return;
    }
    const item = target.closest("[data-api-item]");
    if (item) {
      controllers.get(item.closest("[data-api-browser]"))?.(item);
      if (item.matches("details")) item.open = true;
    }
    target.scrollIntoView({ block: "center" });
  }
  revealFragment();
  window.addEventListener("hashchange", revealFragment);
});
