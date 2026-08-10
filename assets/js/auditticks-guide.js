(function () {
  const search = document.getElementById('atg-search');
  const results = document.getElementById('atg-search-results');
  const searchable = Array.from(document.querySelectorAll('.atg-searchable'));
  const navLinks = Array.from(document.querySelectorAll('.atg-nav-link'));
  if (!search || !results) return;

  const index = searchable.map((node) => ({
    title: node.dataset.searchTitle || node.querySelector('h1,h2,h3')?.textContent?.trim() || 'Guide section',
    category: node.dataset.searchCategory || 'User Guide',
    href: node.id ? '#' + node.id : (node.getAttribute('href') || ''),
    text: (node.textContent || '').replace(/\s+/g, ' ').trim().toLowerCase()
  })).filter((item) => item.href);

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
      .map((item) => ({ ...item, score: (item.title.toLowerCase().includes(q) ? 3 : 0) + (item.text.includes(q) ? 1 : 0) }))
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
        window.location.hash = first.getAttribute('href');
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

  const sectionTargets = navLinks
    .map((link) => {
      const href = link.getAttribute('href');
      return href && href.startsWith('#') ? { link, target: document.querySelector(href) } : null;
    })
    .filter((item) => item && item.target);

  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver((entries) => {
      const visible = entries
        .filter((entry) => entry.isIntersecting)
        .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top)[0];
      if (!visible) return;
      navLinks.forEach((link) => link.classList.remove('is-active'));
      const current = sectionTargets.find((item) => item.target === visible.target);
      if (current) current.link.classList.add('is-active');
    }, { rootMargin: '-20% 0px -65% 0px', threshold: 0 });

    sectionTargets.forEach((item) => observer.observe(item.target));
  }
})();
