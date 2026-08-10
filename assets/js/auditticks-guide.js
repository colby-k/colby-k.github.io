(function () {
  const page = document.querySelector('.atg-page');
  if (!page) return;

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
