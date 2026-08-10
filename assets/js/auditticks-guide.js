(function () {
  const page = document.querySelector('.atg-page');
  if (!page) return;

  const CURRENT_RIBBON = 'data:image/webp;base64,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';

  function enhanceTickmarksPanel() {
    const panel = document.getElementById('tickmarks');
    if (!panel || panel.querySelector('.atg-extra-tickmarks')) return;

    const muted = panel.querySelector('.atg-muted');
    if (muted) {
      muted.textContent = 'Some supplemental marks are intentionally general-purpose. When a symbol does not have a fixed AuditTicks Pro meaning, define its meaning in the workpaper context or tickmark legend so another auditor or reviewer can interpret it consistently.';
    }

    const figure = panel.querySelector('.atg-figure');
    const extra = document.createElement('div');
    extra.className = 'atg-extra-tickmarks';
    extra.innerHTML = `
      <div class="atg-section-heading atg-searchable" data-search-title="Additional Tickmarks Check Cube Root Fourth Root Underbar Question Attention Information Flag Star" data-search-category="Tickmarks" style="margin-top:2rem">
        <span>Additional ribbon marks</span>
        <h2>Supplemental tickmarks and review cues</h2>
        <p>These marks provide additional visual shorthand for workpaper review, clarification, and user-defined testing conventions.</p>
      </div>
      <div class="atg-table-wrap atg-searchable" data-search-title="Check Tickmark Cube Root Fourth Root Underbar Question Attention Information Flag Star" data-search-category="Tickmarks">
        <table class="atg-table atg-table--compact">
          <thead><tr><th>Ribbon mark</th><th>How to use it</th></tr></thead>
          <tbody>
            <tr><td><strong>✓ Check Tickmark</strong></td><td>A general-purpose check mark. AuditTicks Pro does not impose a specific audit conclusion on this symbol; define its meaning in the workpaper or legend when it differs from Tested Without Exception.</td></tr>
            <tr><td><strong>∛ Cube Root</strong></td><td>A specialized, user-defined tickmark. Use it only where the workpaper or tickmark legend defines the intended meaning.</td></tr>
            <tr><td><strong>∜ Fourth Root</strong></td><td>A specialized, user-defined tickmark. Use it only where the workpaper or tickmark legend defines the intended meaning.</td></tr>
            <tr><td><strong>Underbar</strong></td><td>Inserts the underbar tickmark. The symbol is intentionally general-purpose, so its meaning should be defined by the workpaper convention or legend.</td></tr>
            <tr><td><strong>? Question</strong></td><td>Identifies an item that needs clarification.</td></tr>
            <tr><td><strong>! Attention</strong></td><td>A general attention marker. Use it to make an item visually prominent and document the specific reason in the surrounding workpaper context.</td></tr>
            <tr><td><strong>ⓘ Information</strong></td><td>Identifies informational content or context that is useful to the preparer or reviewer.</td></tr>
            <tr><td><strong>Flag</strong></td><td>Draws attention to an item in the workpaper. The split-button menu provides alternate flag styles with the same general purpose.</td></tr>
            <tr><td><strong>★ Star</strong></td><td>A prominent miscellaneous marker. Its split-button menu also provides additional specialized miscellaneous marks.</td></tr>
          </tbody>
        </table>
      </div>

      <div class="atg-section-heading atg-searchable" data-search-title="Star menu Percent Timing Fuel Fire Pinned Warning Anchor Investigate AS Misc" data-search-category="Tickmarks" style="margin-top:2rem">
        <span>Star menu</span>
        <h2>Miscellaneous mark menu</h2>
        <p>The Star split button contains optional marks for specialized workpaper conventions. Several are intentionally user-defined rather than tied to a prescribed audit conclusion.</p>
      </div>
      <div class="atg-table-wrap atg-searchable" data-search-title="Percent Timing Fuel Fire Pinned Warning Anchor Investigate AS Tickmark Miscellaneous" data-search-category="Tickmarks">
        <table class="atg-table atg-table--compact">
          <thead><tr><th>Menu mark</th><th>How to use it</th></tr></thead>
          <tbody>
            <tr><td><strong>% Percent</strong></td><td>General-purpose percent mark; define the workpaper meaning when used as an audit tickmark.</td></tr>
            <tr><td><strong>Timing</strong></td><td>Identifies timing-related matters.</td></tr>
            <tr><td><strong>Fuel</strong></td><td>General-purpose specialized mark; define its meaning in the workpaper convention or legend.</td></tr>
            <tr><td><strong>Fire</strong></td><td>General-purpose specialized mark; define its meaning in the workpaper convention or legend.</td></tr>
            <tr><td><strong>Pinned</strong></td><td>Marks an item for attention or retention.</td></tr>
            <tr><td><strong>Warning</strong></td><td>Highlights caution or concern.</td></tr>
            <tr><td><strong>Anchor</strong></td><td>General-purpose specialized mark; define its meaning in the workpaper convention or legend.</td></tr>
            <tr><td><strong>Investigate</strong></td><td>Identifies an item requiring additional review.</td></tr>
            <tr><td><strong>AS Tickmark</strong></td><td>User-defined AS mark. Use only where the workpaper convention explains its meaning.</td></tr>
            <tr><td><strong>Misc.</strong></td><td>Additional user-defined miscellaneous mark.</td></tr>
          </tbody>
        </table>
      </div>

      <div class="atg-section-heading atg-searchable" data-search-title="Math Logic Summation Equal Delta Change Approximate Not Equal Empty Set Partial Infinity Alpha Beta" data-search-category="Tickmarks" style="margin-top:2rem">
        <span>Math and logic</span>
        <h2>Math and logic symbols</h2>
        <p>Use these symbols when the audit procedure benefits from compact mathematical or logical notation.</p>
      </div>
      <div class="atg-table-wrap atg-searchable" data-search-title="Summation Equal Change Delta Approximate Not Equal Empty Set Partial Infinity Alpha Beta" data-search-category="Tickmarks">
        <table class="atg-table atg-table--compact">
          <thead><tr><th>Symbol</th><th>How to use it</th></tr></thead>
          <tbody>
            <tr><td><strong>∑ Summation</strong></td><td>Inserts the summation symbol, typically used to indicate a sum or total.</td></tr>
            <tr><td><strong>= Equal</strong></td><td>Inserts the equal symbol to show equality or agreement where appropriate.</td></tr>
            <tr><td><strong>Δ Change</strong></td><td>Indicates change or variance. The split-button menu provides additional logic symbols.</td></tr>
            <tr><td><strong>≈ Approximate</strong></td><td>Indicates an approximate relationship or amount.</td></tr>
            <tr><td><strong>≠ Not Equal</strong></td><td>Indicates values or items are not equal.</td></tr>
            <tr><td><strong>∅ Empty Set</strong></td><td>Inserts the empty-set symbol for a user-defined mathematical or logical convention.</td></tr>
            <tr><td><strong>∂ Partial</strong></td><td>Inserts the partial symbol for a user-defined mathematical or analytical convention.</td></tr>
            <tr><td><strong>∞ Infinity</strong></td><td>Inserts the infinity symbol.</td></tr>
            <tr><td><strong>α Alpha</strong></td><td>Inserts the alpha symbol.</td></tr>
            <tr><td><strong>β Beta</strong></td><td>Inserts the beta symbol.</td></tr>
          </tbody>
        </table>
      </div>
      <div class="atg-callout atg-callout--tip"><strong>Legend discipline:</strong> Question, Information, Warning, Timing, Pinned, Investigate, and Change have clear built-in intent. General-purpose marks such as Check, Cube Root, Fourth Root, Underbar, Star, Percent, Fuel, Fire, Anchor, AS, and Misc. should be defined in the workpaper or tickmark legend whenever their meaning is not otherwise obvious.</div>
    `;

    if (figure) panel.insertBefore(extra, figure);
    else panel.appendChild(extra);
  }

  enhanceTickmarksPanel();

  const search = document.getElementById('atg-search');
  const results = document.getElementById('atg-search-results');
  const layout = document.querySelector('.atg-layout');
  const mobileNav = document.querySelector('.atg-mobile-nav');
  const panelNodes = Array.from(document.querySelectorAll('.atg-content > section'));
  const navLinks = Array.from(document.querySelectorAll('.atg-nav-link, .atg-mobile-nav__links a'));
  const searchable = Array.from(document.querySelectorAll('.atg-searchable'));
  const reducedMotion = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  if (!panelNodes.length) return;

  panelNodes.forEach((node) => {
    if (node.id) node.dataset.guidePanel = node.id;
    else if (node.classList.contains('atg-section--tight') || node.classList.contains('atg-guide-footer')) node.dataset.guidePanel = 'overview';
  });

  const panelKeys = new Set(panelNodes.map((node) => node.dataset.guidePanel).filter(Boolean));
  const defaultPanel = 'overview';
  let activePanel = null;

  const panelStyles = document.createElement('style');
  panelStyles.textContent = `
    .atg-layout{min-height:calc(100vh - 64px);scroll-margin-top:64px}
    .atg-content{min-height:calc(100vh - 64px)}
    .atg-content>[data-guide-panel][hidden]{display:none!important}
    .atg-panel-enter{animation:atg-panel-in 180ms ease both}
    .atg-mobile-nav__links a.is-active{border-color:#b9dccf;background:#e8f5ef;color:#0b684c!important;font-weight:850}
    .atg-ribbon-nav{border-right:1px solid #d9e2e8;border-left:1px solid #d9e2e8;border-bottom:1px solid #d9e2e8;background:#f7f9fa;padding:.55rem .75rem .65rem}
    .atg-ribbon-nav__head{display:flex;align-items:center;justify-content:space-between;gap:1rem;margin:0 0 .4rem;color:#667786;font-size:.56rem;line-height:1.3}
    .atg-ribbon-nav__head strong{color:#213b52;font-size:.58rem;letter-spacing:.035em;text-transform:uppercase}
    .atg-ribbon-nav__frame{position:relative;overflow:hidden;border:1px solid #cbd6dd;background:#fff;box-shadow:0 5px 14px rgba(9,36,63,.055)}
    .atg-ribbon-nav__frame img{display:block;width:100%;height:auto;margin:0;border:0;border-radius:0;box-shadow:none}
    .atg-ribbon-hit{position:absolute;top:0;bottom:0;display:block;border:0;border-left:1px solid transparent;border-right:1px solid transparent;background:transparent;cursor:pointer;transition:background 120ms ease,border-color 120ms ease}
    .atg-ribbon-hit:hover,.atg-ribbon-hit:focus-visible{outline:none;border-color:rgba(17,133,95,.55);background:rgba(17,133,95,.10)}
    .atg-ribbon-hit.is-active{border-color:rgba(17,133,95,.72);background:rgba(17,133,95,.075)}
    .atg-ribbon-hit span{position:absolute;right:3px;bottom:3px;left:3px;padding:.12rem .18rem;border-radius:2px;background:rgba(9,36,63,.86);color:#fff;font-size:.47rem;font-weight:800;line-height:1.1;text-align:center;opacity:0;transform:translateY(2px);transition:opacity 120ms ease,transform 120ms ease;pointer-events:none}
    .atg-ribbon-hit:hover span,.atg-ribbon-hit:focus-visible span,.atg-ribbon-hit.is-active span{opacity:1;transform:none}
    @keyframes atg-panel-in{from{opacity:.55;transform:translateY(4px)}to{opacity:1;transform:none}}
    @media(max-width:900px){.atg-ribbon-nav{display:none}}
    @media(prefers-reduced-motion:reduce){.atg-panel-enter{animation:none}.atg-ribbon-hit,.atg-ribbon-hit span{transition:none}}
  `;
  document.head.appendChild(panelStyles);

  const ribbonGroups = [
    { label: 'Mode', key: 'modes-position', left: 0.000, width: 5.078 },
    { label: 'Position', key: 'modes-position', left: 5.078, width: 2.197 },
    { label: 'Color & Font', key: 'settings', left: 7.275, width: 4.639 },
    { label: 'Tickmarks', key: 'tickmarks', left: 11.914, width: 12.793 },
    { label: 'References', key: 'references', left: 24.707, width: 8.301 },
    { label: 'Tie-Outs', key: 'tie-outs', left: 33.008, width: 8.887 },
    { label: 'Format', key: 'formatting', left: 41.895, width: 19.140 },
    { label: 'Evidence', key: 'evidence', left: 61.035, width: 13.867 },
    { label: 'Workpapers', key: 'workpapers', left: 74.902, width: 6.348 },
    { label: 'Review', key: 'review', left: 81.250, width: 7.617 },
    { label: 'Tools', key: 'tools', left: 88.867, width: 3.418 },
    { label: 'About', key: 'settings', left: 92.285, width: 5.371 }
  ];

  let ribbonHits = [];

  if (layout) {
    const ribbonNav = document.createElement('nav');
    ribbonNav.className = 'atg-ribbon-nav';
    ribbonNav.setAttribute('aria-label', 'Explore the guide by AuditTicks Pro ribbon group');
    ribbonNav.innerHTML = `
      <div class="atg-ribbon-nav__head">
        <strong>Explore by ribbon group</strong>
        <span>Click a ribbon group to open the related guide panel.</span>
      </div>
      <div class="atg-ribbon-nav__frame">
        <img src="${CURRENT_RIBBON}" alt="Current AuditTicks Pro ribbon; each group is clickable in this guide" width="1000" height="65" loading="eager">
      </div>`;

    const frame = ribbonNav.querySelector('.atg-ribbon-nav__frame');
    ribbonGroups.forEach((group) => {
      const hit = document.createElement('a');
      hit.className = 'atg-ribbon-hit';
      hit.href = '#' + group.key;
      hit.dataset.panelKey = group.key;
      hit.setAttribute('aria-label', group.label + ' — open related guide section');
      hit.title = group.label;
      hit.style.left = group.left + '%';
      hit.style.width = group.width + '%';
      hit.innerHTML = '<span></span>';
      hit.querySelector('span').textContent = group.label;
      frame.appendChild(hit);
    });
    ribbonHits = Array.from(ribbonNav.querySelectorAll('.atg-ribbon-hit'));
    layout.parentNode.insertBefore(ribbonNav, layout);
  }

  function normalizePanel(hash) {
    const key = decodeURIComponent((hash || '').replace(/^#/, '')).trim();
    return panelKeys.has(key) ? key : defaultPanel;
  }

  function updateActiveNav(key) {
    navLinks.forEach((link) => {
      const isActive = link.getAttribute('href') === '#' + key;
      link.classList.toggle('is-active', isActive);
      if (isActive) link.setAttribute('aria-current', 'page');
      else link.removeAttribute('aria-current');
    });

    ribbonHits.forEach((hit) => {
      const isActive = hit.dataset.panelKey === key;
      hit.classList.toggle('is-active', isActive);
      if (isActive) hit.setAttribute('aria-current', 'page');
      else hit.removeAttribute('aria-current');
    });
  }

  function showPanel(key, options) {
    const opts = Object.assign({ scroll: false, animate: true }, options || {});
    const nextKey = panelKeys.has(key) ? key : defaultPanel;

    panelNodes.forEach((node) => {
      const isActive = node.dataset.guidePanel === nextKey;
      node.hidden = !isActive;
      node.classList.toggle('is-active-panel', isActive);
      if (isActive && opts.animate) {
        node.classList.remove('atg-panel-enter');
        void node.offsetWidth;
        node.classList.add('atg-panel-enter');
      } else {
        node.classList.remove('atg-panel-enter');
      }
    });

    activePanel = nextKey;
    updateActiveNav(nextKey);

    if (mobileNav && mobileNav.open) mobileNav.open = false;

    if (opts.scroll && layout) {
      layout.scrollIntoView({ behavior: reducedMotion ? 'auto' : 'smooth', block: 'start' });
    }
  }

  function navigateTo(key, options) {
    const opts = Object.assign({ replace: false, scroll: true }, options || {});
    const nextKey = panelKeys.has(key) ? key : defaultPanel;
    const nextHash = '#' + nextKey;

    if (window.location.hash !== nextHash) {
      if (opts.replace) history.replaceState(null, '', nextHash);
      else history.pushState(null, '', nextHash);
    }

    showPanel(nextKey, { scroll: opts.scroll, animate: true });
  }

  page.classList.add('atg-panelled');
  showPanel(normalizePanel(window.location.hash), { scroll: false, animate: false });

  if (window.location.hash && layout) {
    requestAnimationFrame(() => layout.scrollIntoView({ behavior: 'auto', block: 'start' }));
  }

  page.addEventListener('click', (event) => {
    const link = event.target.closest('a[href^="#"]');
    if (!link || !page.contains(link)) return;

    const rawKey = decodeURIComponent((link.getAttribute('href') || '').replace(/^#/, '')).trim();
    if (!panelKeys.has(rawKey)) return;

    event.preventDefault();
    navigateTo(rawKey, { scroll: true });
  });

  window.addEventListener('hashchange', () => {
    const key = normalizePanel(window.location.hash);
    if (key !== activePanel) showPanel(key, { scroll: true, animate: true });
  });

  window.addEventListener('popstate', () => {
    const key = normalizePanel(window.location.hash);
    if (key !== activePanel) showPanel(key, { scroll: true, animate: true });
  });

  if (!search || !results) return;

  const index = searchable.map((node) => ({
    title: node.dataset.searchTitle || node.querySelector('h1,h2,h3')?.textContent?.trim() || 'Guide section',
    category: node.dataset.searchCategory || 'User Guide',
    href: node.id ? '#' + node.id : (node.getAttribute('href') || ''),
    text: (node.textContent || '').replace(/\s+/g, ' ').trim().toLowerCase()
  })).filter((item) => item.href && item.href.startsWith('#'));

  function closeResults() {
    results.hidden = true;
    results.innerHTML = '';
  }

  function render(query) {
    const q = query.trim().toLowerCase();
    if (q.length < 2) {
      closeResults();
      return;
    }

    const matches = index
      .map((item) => ({
        ...item,
        score: (item.title.toLowerCase().includes(q) ? 3 : 0) + (item.text.includes(q) ? 1 : 0)
      }))
      .filter((item) => item.score > 0)
      .sort((a, b) => b.score - a.score || a.title.localeCompare(b.title))
      .slice(0, 9);

    results.innerHTML = '';

    if (!matches.length) {
      results.innerHTML = '<div class="atg-search-empty">No matching guide sections.</div>';
      results.hidden = false;
      return;
    }

    matches.forEach((item) => {
      const a = document.createElement('a');
      a.className = 'atg-search-result';
      a.href = item.href;
      a.setAttribute('role', 'option');
      a.innerHTML = '<strong></strong><span></span>';
      a.querySelector('strong').textContent = item.title;
      a.querySelector('span').textContent = item.category;
      a.addEventListener('click', closeResults);
      results.appendChild(a);
    });

    results.hidden = false;
  }

  search.addEventListener('input', () => render(search.value));

  search.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
      search.value = '';
      closeResults();
      search.blur();
    }

    if (event.key === 'Enter' && !results.hidden) {
      const first = results.querySelector('.atg-search-result');
      if (first) {
        event.preventDefault();
        const key = normalizePanel(first.getAttribute('href'));
        navigateTo(key, { scroll: true });
        closeResults();
        search.blur();
      }
    }
  });

  document.addEventListener('keydown', (event) => {
    const tag = document.activeElement && document.activeElement.tagName;
    if (event.key === '/' && tag !== 'INPUT' && tag !== 'TEXTAREA' && !event.ctrlKey && !event.metaKey && !event.altKey) {
      event.preventDefault();
      search.focus();
    }
  });

  document.addEventListener('click', (event) => {
    if (!results.contains(event.target) && event.target !== search) closeResults();
  });
})();