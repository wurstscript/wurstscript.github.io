---
---

(function () {
  const searchbarContainer = document.getElementById("search-searchbar");
  const resultsContainer = document.getElementById("search-hits");

  if (!searchbarContainer || !resultsContainer) {
    return;
  }

  const input = document.createElement("input");
  input.type = "search";
  input.className = "local-search-input";
  input.placeholder = "Search documentation, tutorials, and news";
  input.autocomplete = "off";
  const shell = document.createElement("div");
  shell.className = "local-search-shell";

  searchbarContainer.innerHTML = "";
  searchbarContainer.appendChild(shell);
  shell.appendChild(input);
  if (resultsContainer.parentElement !== shell) {
    shell.appendChild(resultsContainer);
  }
  resultsContainer.style.display = "none";

  let pagefindModule = null;
  let loadingIndex = null;
  let lastQuery = "";

  function escapeHtml(text) {
    return String(text)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#039;");
  }

  function escapeRegExp(text) {
    return String(text).replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  }

  function tokenize(query) {
    return query
      .toLowerCase()
      .trim()
      .split(/[^a-z0-9_]+/g)
      .filter(Boolean);
  }

  function titleFromUrl(url) {
    const clean = String(url || "")
      .split("#")[0]
      .replace(/\/+$/, "");
    const segment = decodeURIComponent(clean.split("/").pop() || "");
    const slug = segment.replace(/\.html?$/i, "");
    if (!slug) return "Untitled";
    return slug
      .replace(/[-_]+/g, " ")
      .replace(/\s+/g, " ")
      .trim()
      .replace(/\b\w/g, (ch) => ch.toUpperCase());
  }

  function kindFromUrl(url) {
    const path = String(url || "").toLowerCase();
    if (path.startsWith("/news/")) return "News";
    if (path.startsWith("/tutorials/")) return "Tutorial";
    if (path.startsWith("/stdlib/")) return "Stdlib";
    if (path.startsWith("/doc/") || path.startsWith("/manual") || path.startsWith("/documentation")) return "Docs";
    return "";
  }

  function highlightText(text, tokens) {
    let html = escapeHtml(text || "");
    for (const token of tokens) {
      if (token.length < 2) continue;
      const re = new RegExp("(" + escapeRegExp(token) + ")", "ig");
      html = html.replace(re, "<mark>$1</mark>");
    }
    return html;
  }

  function decodeHtmlEntities(text) {
    const parser = document.createElement("textarea");
    parser.innerHTML = String(text || "");
    return parser.value;
  }

  function stripHtml(text) {
    return decodeHtmlEntities(text || "")
      .replace(/<[^>]+>/g, " ")
      .replace(/\s+/g, " ")
      .trim();
  }

  function containsAllTokens(text, tokens) {
    const haystack = String(text || "").toLowerCase();
    return tokens.every((token) => haystack.includes(token));
  }

  function scoreResult(item, query, tokens) {
    const q = query.toLowerCase();
    let score = Number(item.baseScore || 0) * 100;

    if (item.titleLower.includes(q)) score += 120;
    if (item.pageTitleLower.includes(q)) score += 80;
    if (item.excerptLower.includes(q)) score += 35;
    if (item.rawContentLower.includes(q)) score += 90;

    for (const token of tokens) {
      if (item.titleLower.includes(token)) score += 30;
      if (item.pageTitleLower.includes(token)) score += 18;
      if (item.sectionLower.includes(token)) score += 16;
      if (item.excerptLower.includes(token)) score += 8;
      if (item.rawContentLower.includes(token)) score += 10;
      if (item.urlLower.includes(token)) score += 3;
    }

    return score;
  }

  function subResultScore(subResult, query, tokens) {
    const title = String(subResult && subResult.title ? subResult.title : "").toLowerCase();
    const excerpt = String(subResult && subResult.excerpt ? subResult.excerpt : "").toLowerCase();
    const q = query.toLowerCase();
    let score = 0;

    if (title.includes(q)) score += 50;
    if (excerpt.includes(q)) score += 30;

    for (const token of tokens) {
      if (title.includes(token)) score += 12;
      if (excerpt.includes(token)) score += 8;
    }

    return score;
  }

  function pickBestSubResult(subResults, query, tokens) {
    if (!subResults.length) return null;
    const ranked = subResults
      .filter((sr) => sr && sr.url)
      .map((sr) => ({ sr, score: subResultScore(sr, query, tokens) }))
      .sort((a, b) => b.score - a.score);
    return ranked.length ? ranked[0].sr : subResults[0];
  }

  function normalizeResult(result, data, query, tokens) {
    const subResults = Array.isArray(data.sub_results) ? data.sub_results : [];
    const primary = pickBestSubResult(subResults, query, tokens);

    const pageTitleRaw = data.meta && data.meta.title ? data.meta.title : "";
    const pageTitle = pageTitleRaw && pageTitleRaw !== "WurstScript" ? pageTitleRaw : titleFromUrl(data.url);
    const sectionTitle = primary && primary.title ? primary.title : "";
    const resultTitle = sectionTitle || pageTitle || "Untitled";
    const resultUrl = (primary && primary.url) || data.url || "#";
    const excerpt = (primary && primary.excerpt) || data.excerpt || "";

    return {
      title: resultTitle,
      pageTitle: pageTitle,
      sectionTitle: sectionTitle,
      url: resultUrl,
      excerpt: excerpt,
      type: kindFromUrl(resultUrl),
      baseScore: result.score,
      titleLower: String(resultTitle).toLowerCase(),
      pageTitleLower: String(pageTitle).toLowerCase(),
      sectionLower: String(sectionTitle).toLowerCase(),
      excerptLower: String(excerpt).toLowerCase(),
      urlLower: String(resultUrl).toLowerCase(),
      rawContentLower: String(data.raw_content || "").toLowerCase(),
    };
  }

  function renderResults(query, results) {
    if (!query) {
      resultsContainer.style.display = "none";
      resultsContainer.innerHTML = "";
      return;
    }

    resultsContainer.style.display = "block";

    if (results.length === 0) {
      resultsContainer.innerHTML =
        '<div class="local-search-empty">No matches found.</div>';
      return;
    }

    const tokens = tokenize(query);
    resultsContainer.innerHTML = results
      .map((item) => {
        const tag = item.type
          ? `<span class="local-search-tag">${escapeHtml(item.type)}</span>`
          : "";
        const title = highlightText(item.title || "Untitled", tokens);
        const snippet = highlightText(stripHtml(item.excerpt || ""), tokens);
        const path = escapeHtml(String(item.url || "").split("#")[0] || "");
        const pageTitle =
          item.pageTitle && item.pageTitle !== item.title
            ? `<span class="local-search-page">${escapeHtml(item.pageTitle)}</span>`
            : "";
        return `
          <article class="local-search-item">
            <a class="local-search-link" href="${item.url}">
              <h3 class="local-search-title">${title}</h3>
            </a>
            ${tag}
            ${pageTitle}
            <p class="local-search-snippet">${snippet}</p>
            <p class="local-search-path">${path}</p>
          </article>
        `;
      })
      .join("");
  }

  function renderError(message) {
    resultsContainer.style.display = "block";
    resultsContainer.innerHTML = `<div class="local-search-empty">${escapeHtml(
      message
    )}</div>`;
  }

  async function ensureIndexLoaded() {
    if (pagefindModule) {
      return pagefindModule;
    }

    if (!loadingIndex) {
      loadingIndex = import(
        "{{ site.search.pagefind_path | default: '/pagefind/pagefind.js' | relative_url }}"
      ).then(async (module) => {
        pagefindModule = module;
        await pagefindModule.options({ excerptLength: 22 });
        return pagefindModule;
      });
    }

    return loadingIndex;
  }

  async function onSearchInput() {
    const query = input.value.trim();
    if (query === lastQuery) return;
    lastQuery = query;

    if (!query) {
      renderResults("", []);
      return;
    }

    try {
      const pagefind = await ensureIndexLoaded();
      const tokens = tokenize(query);
      const exact = /^".+"$/.test(query);
      const searchResult = await pagefind.search(query, exact ? { exact: true } : {});
      const rawResults = searchResult.results.slice(0, 120);
      const hydrated = await Promise.all(
        rawResults.map(async (result) => {
          const data = await result.data();
          return normalizeResult(result, data, query, tokens);
        })
      );

      const scored = hydrated.map((item) => ({
        ...item,
        score: scoreResult(item, query, tokens),
      }));

      const strict = scored.filter((item) =>
        containsAllTokens(
          item.title +
            " " +
            item.pageTitle +
            " " +
            item.sectionTitle +
            " " +
            item.excerpt +
            " " +
            item.url +
            " " +
            item.rawContentLower,
          tokens
        )
      );

      const picked = (strict.length ? strict : scored)
        .sort((a, b) => b.score - a.score)
        .slice(0, 12);

      renderResults(query, picked);
    } catch (_error) {
      renderError(
        "Search index not found. Run pagefind after jekyll build."
      );
    }
  }

  input.addEventListener("input", onSearchInput);
  input.addEventListener("focus", onSearchInput);

  document.addEventListener("click", (event) => {
    if (
      !resultsContainer.contains(event.target) &&
      !searchbarContainer.contains(event.target)
    ) {
      renderResults("", []);
    }
  });

  resultsContainer.addEventListener("click", (event) => {
    const link = event.target.closest(".local-search-link");
    if (!link) return;

    const href = link.getAttribute("href");
    if (!href) return;

    const target = new URL(href, window.location.origin);
    const samePath = target.pathname === window.location.pathname;
    if (samePath && target.hash) {
      event.preventDefault();
      history.pushState(null, "", target.pathname + target.search + target.hash);
      const anchor = decodeURIComponent(target.hash.slice(1));
      if (typeof window.scrollToElement === "function") {
        window.scrollToElement(anchor.toLowerCase());
      } else {
        const el = document.getElementById(anchor) || document.getElementById(anchor.toLowerCase());
        if (el) {
          el.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }
      renderResults("", []);
    }
  });
})();
