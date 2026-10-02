(() => {
  const demo = {
    testing: {
      eyebrow: "Testing workflow",
      title: "Keep the test result beside the procedure.",
      text: "Structured testing marks make the result visible without separating it from the procedure, item, evidence reference, or exception note.",
      image: "/assets/img/auditticks-testing-matrix.webp",
      alt: "Audit testing matrix showing AuditTicks testing marks",
      bullets: ["Pass, exception, and N/A treatment", "Vouched and Traced procedure direction", "Testing structures and legends"]
    },
    tickmarks: {
      eyebrow: "In-cell + floating",
      title: "Use the same audit language in testing and support.",
      text: "Audit marks can live inside structured testing cells or float over screenshots and evidence, keeping meaning consistent across different parts of the workbook.",
      image: "/assets/img/auditticks-floating-invoice.png?v=2",
      alt: "Invoice evidence in Excel annotated with floating AuditTicks marks and an exception callout",
      bullets: ["In-cell marks for structured testing", "Floating marks for screenshots and evidence", "Consistent notation across workbook sections"]
    },
    evidence: {
      eyebrow: "Evidence annotation",
      title: "Explain what matters on the evidence itself.",
      text: "Figures, rectangles, arrows, lines, callouts, and floating marks let the auditor identify agreement points and exceptions without separating the explanation from the evidence being reviewed.",
      image: "/assets/img/auditticks-evidence-annotations.webp",
      alt: "Purchase-order evidence annotated with shapes, arrows, and callouts in Excel",
      bullets: ["Color-aware shapes and callouts", "Figures and evidence placeholders", "Selection-aware placement tools"]
    },
    references: {
      eyebrow: "Navigation + cross-reference",
      title: "Move from testing to support in one click.",
      text: "Worksheet links and compact references connect test results to invoices, populations, reconciliations, purchase orders, and other supporting tabs without cluttering the workpaper.",
      image: "/assets/img/auditticks-link-to-sheet.webp",
      alt: "Audit testing matrix with internal links to supporting Excel worksheets",
      bullets: ["Internal worksheet hyperlinks", "Indexing symbols and tie-outs", "Financial and source references"]
    },
    review: {
      eyebrow: "Review readiness",
      title: "Bring testing, support, status, and signoff together.",
      text: "A review-ready workbook should make the audit trail understandable without requiring the reviewer to reconstruct how testing, evidence, notes, references, and worksheet status relate to one another.",
      image: "/assets/img/auditticks-review-ready.webp",
      alt: "Completed review-ready accounts-payable audit workpaper",
      bullets: ["Initials, dates, and worksheet status", "Results and exception notes together", "Direct navigation to supporting evidence"]
    }
  };

  const tabs = [...document.querySelectorAll('.tab')];
  const img = document.getElementById('demoImage');
  const eyebrow = document.getElementById('demoEyebrow');
  const title = document.getElementById('demoTitle');
  const text = document.getElementById('demoText');
  const list = document.getElementById('demoList');

  if (!tabs.length || !img || !eyebrow || !title || !text || !list) return;

  const siteBase = document.documentElement.dataset.baseurl || '';
  const resolveAsset = (path) => {
    if (/^(https?:)?\/\//.test(path)) return path;
    return `${siteBase}${path}`;
  };

  const activateTab = (tab, moveFocus = false) => {
    const item = demo[tab.dataset.key];
    if (!item) return;

    tabs.forEach((candidate) => {
      const selected = candidate === tab;
      candidate.setAttribute('aria-selected', String(selected));
      candidate.tabIndex = selected ? 0 : -1;
    });

    img.style.opacity = '0';
    window.setTimeout(() => {
      img.src = resolveAsset(item.image);
      img.alt = item.alt;
      eyebrow.textContent = item.eyebrow;
      title.textContent = item.title;
      text.textContent = item.text;
      list.replaceChildren(...item.bullets.map((value) => {
        const li = document.createElement('li');
        li.textContent = value;
        return li;
      }));
      img.style.opacity = '1';
    }, 120);

    if (moveFocus) tab.focus();
  };

  tabs.forEach((tab, index) => {
    tab.tabIndex = tab.getAttribute('aria-selected') === 'true' ? 0 : -1;
    tab.addEventListener('click', () => activateTab(tab));
    tab.addEventListener('keydown', (event) => {
      let nextIndex = null;
      if (event.key === 'ArrowRight') nextIndex = (index + 1) % tabs.length;
      if (event.key === 'ArrowLeft') nextIndex = (index - 1 + tabs.length) % tabs.length;
      if (event.key === 'Home') nextIndex = 0;
      if (event.key === 'End') nextIndex = tabs.length - 1;
      if (nextIndex === null) return;
      event.preventDefault();
      activateTab(tabs[nextIndex], true);
    });
  });
})();