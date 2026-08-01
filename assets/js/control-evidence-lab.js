(() => {
  const app = document.querySelector('[data-control-evidence-app]');
  if (!app) return;

  const levels = ['Missing', 'Partial', 'Clear'];
  const criteriaMeta = [
    { key: 'objective', label: 'Control objective', question: 'Is the risk-reduction purpose explicit?' },
    { key: 'performer', label: 'Performer and accountability', question: 'Is ownership assigned to an appropriate reviewer?' },
    { key: 'frequency', label: 'Frequency and timing', question: 'Does the activity occur at a frequency responsive to the risk?' },
    { key: 'criteria', label: 'Review criteria', question: 'Are the conditions requiring investigation or rejection defined?' },
    { key: 'evidence', label: 'Evidence retained', question: 'Does the activity leave a traceable record of performance?' },
    { key: 'exceptions', label: 'Exception resolution', question: 'Are identified exceptions documented through resolution?' }
  ];

  const scenarios = {
    payroll: {
      title: 'Payroll master-data changes',
      process: 'Payroll and human resources',
      risk: 'Unauthorized or inaccurate employee master-data changes could result in improper payroll disbursements.',
      objective: 'Changes to employee pay, banking, and status are authorized, accurate, and reviewed before payroll is finalized.',
      activity: 'The Payroll Manager reviews a weekly employee master-change report and follows up on unusual changes before payroll processing.',
      owner: 'Payroll Manager',
      frequency: 'Weekly, before payroll finalization',
      criteria: { objective: 2, performer: 2, frequency: 2, criteria: 1, evidence: 0, exceptions: 1 },
      evidence: [
        { id: 'inquiry', name: 'Walkthrough inquiry', type: 'Inquiry', detail: 'Payroll Manager describes the weekly review.', selected: true, dimensions: [2, 1, 0, 0] },
        { id: 'screenshot', name: 'Report screenshot', type: 'Inspection', detail: 'Screenshot shows report fields but no reviewer sign-off.', selected: true, dimensions: [2, 2, 1, 1] },
        { id: 'report', name: 'Complete change report', type: 'Inspection', detail: 'System-generated report for the selected payroll cycle.', selected: false, dimensions: [3, 2, 3, 3] },
        { id: 'signoff', name: 'Dated reviewer sign-off', type: 'Inspection', detail: 'Electronic approval tied to the complete report.', selected: false, dimensions: [3, 3, 3, 2] },
        { id: 'exceptions', name: 'Exception follow-up', type: 'Inspection', detail: 'Evidence of investigation and resolution for flagged changes.', selected: false, dimensions: [3, 3, 3, 2] },
        { id: 'reperform', name: 'Auditor reperformance', type: 'Reperformance', detail: 'Auditor independently compares report changes to approved source records.', selected: false, dimensions: [3, 3, 3, 2] }
      ]
    },
    vendor: {
      title: 'Vendor bank-account changes',
      process: 'Accounts payable and vendor maintenance',
      risk: 'Unauthorized bank-account changes could redirect legitimate vendor payments to an improper account.',
      objective: 'Vendor banking changes are independently verified, approved, and effective only after validation is complete.',
      activity: 'The AP Supervisor reviews the daily bank-change report, confirms an independent callback, and releases the vendor record after approval.',
      owner: 'Accounts Payable Supervisor',
      frequency: 'Daily, before vendor release',
      criteria: { objective: 2, performer: 2, frequency: 2, criteria: 2, evidence: 2, exceptions: 1 },
      evidence: [
        { id: 'inquiry', name: 'Walkthrough inquiry', type: 'Inquiry', detail: 'AP Supervisor explains the verification workflow.', selected: true, dimensions: [2, 1, 0, 0] },
        { id: 'change-report', name: 'Daily change report', type: 'Inspection', detail: 'Complete system report identifying bank changes.', selected: true, dimensions: [3, 2, 3, 3] },
        { id: 'callback', name: 'Callback verification log', type: 'Inspection', detail: 'Independent contact source, date, result, and performer.', selected: true, dimensions: [3, 3, 3, 2] },
        { id: 'approval', name: 'Workflow approval history', type: 'Inspection', detail: 'Approver, timestamp, and release status are retained.', selected: true, dimensions: [3, 3, 3, 3] },
        { id: 'exception', name: 'Rejected-change record', type: 'Inspection', detail: 'A failed verification is documented and prevented from release.', selected: false, dimensions: [3, 3, 3, 1] },
        { id: 'reperform', name: 'Auditor reperformance', type: 'Reperformance', detail: 'Auditor validates contact source and approval sequence.', selected: false, dimensions: [3, 3, 3, 2] }
      ]
    },
    journal: {
      title: 'Manual journal-entry review',
      process: 'Financial close and reporting',
      risk: 'Inappropriate manual journal entries could materially misstate financial results.',
      objective: 'Manual journal entries are supported, appropriately approved, and reviewed before posting.',
      activity: 'The Controller reviews manual journal entries above $50,000 and discusses unusual entries with the preparer.',
      owner: 'Controller',
      frequency: 'Monthly close',
      criteria: { objective: 2, performer: 1, frequency: 1, criteria: 1, evidence: 1, exceptions: 0 },
      evidence: [
        { id: 'inquiry', name: 'Controller inquiry', type: 'Inquiry', detail: 'Controller describes the review performed during close.', selected: true, dimensions: [2, 1, 0, 0] },
        { id: 'sample', name: 'Approved journal entry', type: 'Inspection', detail: 'One entry includes an approval timestamp after posting.', selected: true, dimensions: [2, 2, 2, 1] },
        { id: 'population', name: 'Complete manual-entry population', type: 'Inspection', detail: 'System extract includes preparer, approver, timestamps, and amounts.', selected: false, dimensions: [3, 2, 3, 3] },
        { id: 'support', name: 'Entry support package', type: 'Inspection', detail: 'Calculation and source support for the selected entry.', selected: false, dimensions: [3, 3, 3, 1] },
        { id: 'criteria', name: 'Documented review criteria', type: 'Inspection', detail: 'Defined attributes for unusual, unsupported, or high-risk entries.', selected: false, dimensions: [3, 3, 3, 2] },
        { id: 'reperform', name: 'Auditor reperformance', type: 'Reperformance', detail: 'Auditor independently evaluates support and posting chronology.', selected: false, dimensions: [3, 3, 3, 2] }
      ]
    }
  };

  const clone = value => JSON.parse(JSON.stringify(value));
  const state = { scenario: 'payroll', activeTab: 'design', data: clone(scenarios.payroll) };
  const esc = value => String(value).replace(/[&<>'"]/g, char => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', "'": '&#039;', '"': '&quot;' }[char]));

  function designScore() {
    return Math.round(Object.values(state.data.criteria).reduce((sum, value) => sum + value, 0) / (criteriaMeta.length * 2) * 100);
  }

  function classification() {
    const c = state.data.criteria;
    if (c.objective === 0 || c.performer === 0 || c.frequency === 0) return { label: 'Process activity', detail: 'Essential control attributes are not defined.' };
    if (c.criteria === 0 || c.evidence === 0) return { label: 'Control candidate', detail: 'The activity may address risk but is not yet testable.' };
    return { label: 'Defined control', detail: 'The activity contains the core attributes of a testable control.' };
  }

  function designConclusion() {
    const score = designScore();
    const c = state.data.criteria;
    if (classification().label === 'Process activity') return { label: 'Not supportable', tone: 'critical', detail: 'The activity is not sufficiently defined to evaluate as a control.' };
    if (score >= 84 && Math.min(...Object.values(c)) >= 1) return { label: 'Designed appropriately', tone: 'good', detail: 'No critical design attribute is missing; implementation still requires corroborating evidence.' };
    if (score >= 58) return { label: 'Design gaps identified', tone: 'warning', detail: 'The activity may address the risk, but one or more attributes require clarification or remediation.' };
    return { label: 'Not designed appropriately', tone: 'critical', detail: 'The current activity is unlikely to address the risk consistently or produce testable evidence.' };
  }

  function selectedEvidence() { return state.data.evidence.filter(item => item.selected); }

  function evidenceProfile() {
    const selected = selectedEvidence();
    if (!selected.length) return { dimensions: [0, 0, 0, 0], score: 0, methods: [] };
    const dimensions = [0, 1, 2, 3].map(index => Math.max(...selected.map(item => item.dimensions[index])));
    const base = dimensions.reduce((sum, value) => sum + value, 0) / 12 * 100;
    const methods = [...new Set(selected.map(item => item.type))];
    const methodBonus = methods.includes('Reperformance') ? 5 : methods.includes('Inspection') && methods.includes('Inquiry') ? 2 : 0;
    return { dimensions, score: Math.min(100, Math.round(base + methodBonus)), methods };
  }

  function evidenceConclusion() {
    const selected = selectedEvidence();
    const profile = evidenceProfile();
    if (!selected.length) return { label: 'No support', tone: 'critical', detail: 'No evidence has been selected.' };
    if (selected.every(item => item.type === 'Inquiry')) return { label: 'Inquiry only', tone: 'critical', detail: 'Inquiry supports process understanding but does not corroborate implementation.' };
    if (profile.score >= 78 && profile.dimensions[2] >= 2 && profile.dimensions[3] >= 2) return { label: 'Strong support', tone: 'good', detail: 'The selected evidence is relevant, reliable, traceable, and sufficiently broad for design and implementation.' };
    if (profile.score >= 52) return { label: 'Partial support', tone: 'warning', detail: 'The evidence corroborates part of the control claim but leaves one or more support gaps.' };
    return { label: 'Insufficient support', tone: 'critical', detail: 'The selected artifacts do not adequately corroborate the control claim.' };
  }

  function overallConclusion() {
    const design = designConclusion();
    const evidence = evidenceConclusion();
    if (design.tone === 'good' && evidence.tone === 'good') return { label: 'Design + implementation', tone: 'good', detail: 'A design-and-implementation conclusion is supportable for the selected instance. Operating effectiveness is not established.' };
    if (design.tone === 'critical') return { label: 'Conclusion withheld', tone: 'critical', detail: 'The control design must be clarified or remediated before reliance can be considered.' };
    if (evidence.tone === 'critical') return { label: 'Conclusion withheld', tone: 'critical', detail: 'The evidence is insufficient to corroborate implementation.' };
    return { label: 'Qualified conclusion', tone: 'warning', detail: 'The current support identifies a plausible control but leaves material design or evidence limitations.' };
  }

  function renderScenarioSelect() {
    const select = app.querySelector('[data-scenario-select]');
    select.innerHTML = Object.entries(scenarios).map(([key, value]) => `<option value="${key}">${esc(value.title)}</option>`).join('');
    select.value = state.scenario;
  }

  function renderScenarioSummary() {
    app.querySelector('[data-scenario-title]').textContent = state.data.title;
    app.querySelector('[data-scenario-summary]').innerHTML = `
      <div class="cel-scenario-block"><small>Process</small><strong>${esc(state.data.process)}</strong></div>
      <div class="cel-scenario-block cel-scenario-block--risk"><small>Risk event</small><p>${esc(state.data.risk)}</p></div>
      <div class="cel-scenario-block"><small>Control objective</small><p>${esc(state.data.objective)}</p></div>
      <div class="cel-scenario-block cel-scenario-block--claim"><small>Claimed activity</small><p>${esc(state.data.activity)}</p></div>
      <div class="cel-scenario-meta"><div><small>Owner</small><strong>${esc(state.data.owner)}</strong></div><div><small>Frequency</small><strong>${esc(state.data.frequency)}</strong></div></div>`;
  }

  function renderCriteria() {
    app.querySelector('[data-criteria-grid]').innerHTML = criteriaMeta.map((criterion, index) => {
      const current = state.data.criteria[criterion.key];
      return `<article class="cel-criterion ${current === 0 ? 'is-missing' : current === 1 ? 'is-partial' : 'is-clear'}">
        <div class="cel-criterion__number">${String(index + 1).padStart(2, '0')}</div>
        <div><h4>${esc(criterion.label)}</h4><p>${esc(criterion.question)}</p></div>
        <div class="cel-segmented" role="group" aria-label="${esc(criterion.label)} assessment">
          ${levels.map((level, value) => `<button type="button" class="${current === value ? 'is-active' : ''}" data-criterion="${criterion.key}" data-value="${value}">${level}</button>`).join('')}
        </div>
      </article>`;
    }).join('');
  }

  function renderDesignConclusion() {
    const score = designScore();
    const result = designConclusion();
    const cls = classification();
    const gaps = criteriaMeta.filter(item => state.data.criteria[item.key] < 2);
    app.querySelector('[data-design-conclusion]').innerHTML = `
      <div class="cel-score-ring cel-score-ring--${result.tone}" style="--score:${score}"><strong>${score}</strong><span>of 100</span></div>
      <div class="cel-judgment cel-judgment--${result.tone}"><small>${esc(cls.label)}</small><strong>${esc(result.label)}</strong><p>${esc(result.detail)}</p></div>
      <div class="cel-gap-list"><small>Attributes requiring attention</small>${gaps.length ? gaps.map(item => `<div><span>${esc(item.label)}</span><b>${levels[state.data.criteria[item.key]]}</b></div>`).join('') : '<p>No design gaps are currently identified.</p>'}</div>`;
  }

  function renderEvidence() {
    app.querySelector('[data-evidence-grid]').innerHTML = state.data.evidence.map(item => `<button type="button" class="cel-evidence-card ${item.selected ? 'is-selected' : ''}" data-evidence="${item.id}" aria-pressed="${item.selected}">
      <span class="cel-evidence-card__check">${item.selected ? '✓' : '+'}</span><small>${esc(item.type)}</small><strong>${esc(item.name)}</strong><p>${esc(item.detail)}</p>
      <div>${['R','R','T','C'].map((label, index) => `<i class="level-${item.dimensions[index]}" title="${['Relevance','Reliability','Traceability','Coverage'][index]} ${item.dimensions[index]} of 3">${label}</i>`).join('')}</div>
    </button>`).join('');
  }

  function renderEvidenceScore() {
    const labels = ['Relevance', 'Reliability', 'Traceability', 'Coverage'];
    const profile = evidenceProfile();
    const conclusion = evidenceConclusion();
    app.querySelector('[data-evidence-score]').innerHTML = `
      <div class="cel-evidence-total"><strong>${profile.score}</strong><span>Evidence support score</span></div>
      <div class="cel-dimension-list">${labels.map((label, index) => `<div><span>${label}</span><b>${profile.dimensions[index]} / 3</b><i><em style="width:${profile.dimensions[index] / 3 * 100}%"></em></i></div>`).join('')}</div>
      <div class="cel-judgment cel-judgment--${conclusion.tone}"><strong>${esc(conclusion.label)}</strong><p>${esc(conclusion.detail)}</p></div>
      <div class="cel-methods"><small>Methods represented</small><p>${profile.methods.length ? profile.methods.map(method => `<span>${esc(method)}</span>`).join('') : 'None selected'}</p></div>`;
  }

  function renderTestOne() {
    const selected = selectedEvidence();
    const hasReport = selected.some(item => /report|population|entry/i.test(item.id));
    const hasApproval = selected.some(item => /signoff|approval|callback|sample/i.test(item.id));
    const hasException = selected.some(item => /exception/i.test(item.id));
    const hasReperformance = selected.some(item => item.type === 'Reperformance');
    const steps = [
      ['Identify a specific instance', hasReport, 'Select a complete, traceable control instance from the relevant period.'],
      ['Inspect source evidence', selected.some(item => item.type === 'Inspection'), 'Obtain the underlying report, request, entry, or source record.'],
      ['Verify performance and timing', hasApproval, 'Confirm who performed the control and whether it occurred at the required point.'],
      ['Trace exceptions to resolution', hasException, 'Inspect how an identified exception was investigated and resolved.'],
      ['Independently validate key attributes', hasReperformance, 'Reperform the relevant comparison, approval sequence, or calculation.']
    ];
    app.querySelector('[data-test-one]').innerHTML = steps.map(([name, met, detail], index) => `<article class="${met ? 'is-met' : ''}"><span>${met ? '✓' : String(index + 1).padStart(2, '0')}</span><div><strong>${name}</strong><p>${detail}</p></div><b>${met ? 'Supported' : 'Not yet supported'}</b></article>`).join('');
  }

  function renderTrace() {
    const design = designConclusion();
    const evidence = evidenceConclusion();
    const overall = overallConclusion();
    const selected = selectedEvidence();
    const evidenceLabel = selected.length ? `${selected.length} artifact${selected.length === 1 ? '' : 's'}` : 'No artifacts';
    app.querySelector('[data-trace-canvas]').innerHTML = `<svg viewBox="0 0 1100 520" role="img" aria-label="Audit reasoning chain from risk through conclusion">
      <defs><marker id="celArrow" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0 0L10 5L0 10z"/></marker></defs>
      <g class="cel-trace-edges"><path d="M190 260H315"/><path d="M465 260H590"/><path d="M740 260H865"/></g>
      <g class="cel-trace-node cel-trace-node--risk"><rect x="30" y="190" width="160" height="140"/><text x="110" y="225">RISK EVENT</text><foreignObject x="50" y="245" width="120" height="68"><div>${esc(state.data.risk)}</div></foreignObject></g>
      <g class="cel-trace-node cel-trace-node--control ${design.tone}"><rect x="315" y="170" width="150" height="180"/><text x="390" y="205">CONTROL</text><foreignObject x="335" y="225" width="110" height="105"><div>${esc(classification().label)}<br><b>${designScore()} / 100</b></div></foreignObject></g>
      <g class="cel-trace-node cel-trace-node--evidence ${evidence.tone}"><rect x="590" y="170" width="150" height="180"/><text x="665" y="205">EVIDENCE</text><foreignObject x="610" y="225" width="110" height="105"><div>${esc(evidenceLabel)}<br><b>${evidenceProfile().score} / 100</b></div></foreignObject></g>
      <g class="cel-trace-node cel-trace-node--conclusion ${overall.tone}"><rect x="865" y="170" width="200" height="180"/><text x="965" y="205">CONCLUSION</text><foreignObject x="890" y="225" width="150" height="105"><div>${esc(overall.label)}<br><b>${esc(overall.detail)}</b></div></foreignObject></g>
    </svg>`;

    app.querySelector('[data-conclusion-boundary]').innerHTML = `
      <div class="cel-boundary-step ${design.tone === 'good' ? 'is-supported' : ''}"><span>01</span><div><strong>Design</strong><p>${design.tone === 'good' ? 'Supportable' : 'Not fully supportable'}</p></div></div>
      <div class="cel-boundary-step ${evidence.tone === 'good' ? 'is-supported' : ''}"><span>02</span><div><strong>Implementation</strong><p>${evidence.tone === 'good' ? 'Supportable for selected instance' : 'Additional corroboration needed'}</p></div></div>
      <div class="cel-boundary-step"><span>03</span><div><strong>Operating effectiveness</strong><p>Not established by this evaluation</p></div></div>
      <div class="cel-boundary-note"><strong>Why the boundary matters</strong><p>A well-supported test of one demonstrates that the control exists and can operate as designed. It does not show consistent performance across the audit period.</p></div>`;
  }

  function renderKpis() {
    const cls = classification();
    const design = designConclusion();
    const evidence = evidenceConclusion();
    const conclusion = overallConclusion();
    const values = { classification: cls, design: { label: `${designScore()} / 100`, detail: design.label }, evidence: { label: `${evidenceProfile().score} / 100`, detail: evidence.label }, conclusion };
    Object.entries(values).forEach(([key, value]) => {
      app.querySelector(`[data-kpi="${key}"]`).textContent = value.label;
      app.querySelector(`[data-kpi-detail="${key}"]`).textContent = value.detail;
    });
  }

  function renderReviewNote() {
    const design = designConclusion();
    const evidence = evidenceConclusion();
    const overall = overallConclusion();
    const gaps = criteriaMeta.filter(item => state.data.criteria[item.key] < 2).map(item => `${item.label} (${levels[state.data.criteria[item.key]].toLowerCase()})`);
    const selected = selectedEvidence().map(item => item.name);
    const note = document.querySelector('[data-review-note]');
    note.innerHTML = `<p class="cel-eyebrow cel-eyebrow--dark">Manager review note</p><h2>${esc(state.data.title)}</h2>
      <div class="cel-review-note__meta"><span>Design: <strong>${esc(design.label)}</strong></span><span>Evidence: <strong>${esc(evidence.label)}</strong></span><span>Conclusion: <strong>${esc(overall.label)}</strong></span></div>
      <h3>Assessment</h3><p>The claimed activity is classified as <strong>${esc(classification().label.toLowerCase())}</strong>. ${esc(design.detail)} ${esc(evidence.detail)}</p>
      <h3>Design matters requiring attention</h3>${gaps.length ? `<ul>${gaps.map(gap => `<li>${esc(gap)}</li>`).join('')}</ul>` : '<p>No design gaps are currently identified.</p>'}
      <h3>Evidence considered</h3>${selected.length ? `<ul>${selected.map(item => `<li>${esc(item)}</li>`).join('')}</ul>` : '<p>No evidence has been selected.</p>'}
      <h3>Review disposition</h3><p>${esc(overall.detail)} Before concluding on operating effectiveness, define the population and period and perform procedures responsive to the control frequency, risk, and expected deviation rate.</p>`;
    const dialog = document.querySelector('[data-review-dialog]');
    if (typeof dialog.showModal === 'function') dialog.showModal(); else dialog.setAttribute('open', '');
  }

  function switchTab(tab) {
    state.activeTab = tab;
    app.querySelectorAll('[data-tab]').forEach(button => button.classList.toggle('is-active', button.dataset.tab === tab));
    app.querySelectorAll('[data-view]').forEach(view => { const active = view.dataset.view === tab; view.hidden = !active; view.classList.toggle('is-active', active); });
  }

  function renderAll() {
    renderScenarioSummary(); renderCriteria(); renderDesignConclusion(); renderEvidence(); renderEvidenceScore(); renderTestOne(); renderTrace(); renderKpis();
  }

  app.addEventListener('click', event => {
    const criterion = event.target.closest('[data-criterion]');
    if (criterion) { state.data.criteria[criterion.dataset.criterion] = Number(criterion.dataset.value); renderAll(); return; }
    const evidence = event.target.closest('[data-evidence]');
    if (evidence) { const item = state.data.evidence.find(entry => entry.id === evidence.dataset.evidence); if (item) item.selected = !item.selected; renderAll(); return; }
    const tab = event.target.closest('[data-tab]');
    if (tab) { switchTab(tab.dataset.tab); return; }
    const action = event.target.closest('[data-action]');
    if (!action) return;
    if (action.dataset.action === 'reset') { state.data = clone(scenarios[state.scenario]); renderAll(); }
    if (action.dataset.action === 'review-note') renderReviewNote();
  });

  app.querySelector('[data-scenario-select]').addEventListener('change', event => { state.scenario = event.target.value; state.data = clone(scenarios[state.scenario]); renderAll(); });
  const dialog = document.querySelector('[data-review-dialog]');
  dialog.querySelector('[data-dialog-close]').addEventListener('click', () => typeof dialog.close === 'function' ? dialog.close() : dialog.removeAttribute('open'));
  dialog.addEventListener('click', event => { if (event.target === dialog) typeof dialog.close === 'function' ? dialog.close() : dialog.removeAttribute('open'); });

  renderScenarioSelect(); renderAll(); switchTab('design');
})();
