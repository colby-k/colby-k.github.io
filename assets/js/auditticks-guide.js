(function () {
  const page = document.querySelector('.atg-page');
  if (!page) return;

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
    @keyframes atg-panel-in{from{opacity:.55;transform:translateY(4px)}to{opacity:1;transform:none}}
    @media(prefers-reduced-motion:reduce){.atg-panel-enter{animation:none}}
  `;
  document.head.appendChild(panelStyles);

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
