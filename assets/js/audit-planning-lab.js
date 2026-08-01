(() => {
  "use strict";

  const app = document.querySelector("[data-audit-planning-app]");
  if (!app) return;

  const defaultWeights = {
    risk: 35,
    coverage: 20,
    recency: 15,
    change: 15,
    findings: 10,
    incidents: 5
  };

  const defaultCapacity = {
    auditors: 4,
    productiveHours: 1500,
    cosource: 400,
    adminPct: 15,
    otherHours: 900,
    reserve: 500
  };

  const riskCatalog = [
    { name: "Cybersecurity", criticality: "Critical", currentIA: 1, providers: { Compliance: 1, ERM: 2, "External Audit": 0, "Management Monitoring": 2 } },
    { name: "Financial Reporting", criticality: "Critical", currentIA: 2, providers: { Compliance: 1, ERM: 1, "External Audit": 3, "Management Monitoring": 3 } },
    { name: "Regulatory Compliance", criticality: "Critical", currentIA: 1, providers: { Compliance: 3, ERM: 2, "External Audit": 1, "Management Monitoring": 2 } },
    { name: "Operational Resilience", criticality: "High", currentIA: 0, providers: { Compliance: 0, ERM: 2, "External Audit": 0, "Management Monitoring": 2 } },
    { name: "Fraud", criticality: "High", currentIA: 1, providers: { Compliance: 2, ERM: 1, "External Audit": 1, "Management Monitoring": 1 } },
    { name: "Data Privacy", criticality: "High", currentIA: 0, providers: { Compliance: 2, ERM: 1, "External Audit": 0, "Management Monitoring": 2 } },
    { name: "Third-Party", criticality: "High", currentIA: 0, providers: { Compliance: 1, ERM: 2, "External Audit": 0, "Management Monitoring": 1 } },
    { name: "Human Capital", criticality: "Moderate", currentIA: 1, providers: { Compliance: 2, ERM: 1, "External Audit": 0, "Management Monitoring": 2 } },
    { name: "Tax", criticality: "Moderate", currentIA: 1, providers: { Compliance: 1, ERM: 1, "External Audit": 2, "Management Monitoring": 2 } },
    { name: "Environmental", criticality: "High", currentIA: 0, providers: { Compliance: 2, ERM: 1, "External Audit": 0, "Management Monitoring": 2 } }
  ];

  const entities = [
    { id: "cyber", name: "Cybersecurity and Access Management", unit: "Technology", owner: "Chief Information Officer", residualRisk: 5, coverageGap: 5, monthsSinceAudit: 30, change: 5, findings: 4, incidents: 5, hours: 620, risks: ["Cybersecurity", "Data Privacy", "Operational Resilience"], rationale: "Rapid cloud adoption, elevated threat activity, and open access-control remediation increase the need for independent assurance." },
    { id: "third-party", name: "Third-Party Risk Management", unit: "Enterprise Risk", owner: "Chief Risk Officer", residualRisk: 5, coverageGap: 5, monthsSinceAudit: 42, change: 4, findings: 3, incidents: 3, hours: 520, risks: ["Third-Party", "Cybersecurity", "Regulatory Compliance"], rationale: "Critical vendors support core operations, while due-diligence and ongoing-monitoring practices have not received recent independent review." },
    { id: "payroll", name: "Payroll and Timekeeping", unit: "People", owner: "Chief People Officer", residualRisk: 5, coverageGap: 4, monthsSinceAudit: 31, change: 4, findings: 4, incidents: 2, hours: 480, risks: ["Financial Reporting", "Fraud", "Human Capital", "Regulatory Compliance"], rationale: "A recent system change, decentralized approvals, and unresolved access findings increase payroll accuracy and fraud exposure." },
    { id: "treasury", name: "Treasury and Cash Management", unit: "Finance", owner: "Treasurer", residualRisk: 5, coverageGap: 4, monthsSinceAudit: 22, change: 3, findings: 2, incidents: 3, hours: 450, risks: ["Financial Reporting", "Fraud", "Operational Resilience"], rationale: "High-value cash activity and concentration of privileged access warrant recurring assurance over authorization, liquidity, and fraud controls." },
    { id: "privacy", name: "Data Privacy and Records Management", unit: "Legal and Compliance", owner: "Chief Privacy Officer", residualRisk: 5, coverageGap: 5, monthsSinceAudit: 48, change: 5, findings: 2, incidents: 4, hours: 500, risks: ["Data Privacy", "Cybersecurity", "Regulatory Compliance"], rationale: "Expanding data use, evolving requirements, and recent privacy events create a significant independent-assurance gap." },
    { id: "business-continuity", name: "Business Continuity and Crisis Management", unit: "Operations", owner: "Chief Operating Officer", residualRisk: 5, coverageGap: 5, monthsSinceAudit: 45, change: 4, findings: 2, incidents: 3, hours: 460, risks: ["Operational Resilience", "Cybersecurity", "Third-Party"], rationale: "Recovery dependencies have changed materially, and current assurance is based primarily on management-led exercises." },
    { id: "vendor-master", name: "Vendor Master and Payment Controls", unit: "Finance", owner: "Controller", residualRisk: 4, coverageGap: 4, monthsSinceAudit: 27, change: 3, findings: 5, incidents: 3, hours: 420, risks: ["Fraud", "Financial Reporting", "Third-Party"], rationale: "Open findings, master-data access, and payment-change activity create continued risk of error and misappropriation." },
    { id: "financial-reporting", name: "Financial Close and Reporting", unit: "Finance", owner: "Chief Accounting Officer", residualRisk: 5, coverageGap: 2, monthsSinceAudit: 14, change: 4, findings: 3, incidents: 1, hours: 560, risks: ["Financial Reporting", "Fraud", "Regulatory Compliance"], rationale: "The process is significant and changing, but external audit and management review provide comparatively strong existing assurance." },
    { id: "cloud", name: "Cloud Infrastructure Governance", unit: "Technology", owner: "VP Infrastructure", residualRisk: 5, coverageGap: 4, monthsSinceAudit: 18, change: 5, findings: 3, incidents: 4, hours: 520, risks: ["Cybersecurity", "Operational Resilience", "Third-Party"], rationale: "Accelerated migration and shared-responsibility dependencies increase configuration, resilience, and vendor-governance risk." },
    { id: "procurement", name: "Strategic Sourcing and Procurement", unit: "Operations", owner: "Chief Procurement Officer", residualRisk: 4, coverageGap: 4, monthsSinceAudit: 38, change: 3, findings: 3, incidents: 2, hours: 430, risks: ["Third-Party", "Fraud", "Financial Reporting"], rationale: "Long audit recency and inconsistent sourcing practices increase exposure to conflicts, leakage, and vendor concentration." },
    { id: "revenue", name: "Revenue Recognition and Billing", unit: "Finance", owner: "Chief Revenue Officer", residualRisk: 5, coverageGap: 3, monthsSinceAudit: 20, change: 4, findings: 2, incidents: 2, hours: 540, risks: ["Financial Reporting", "Fraud", "Regulatory Compliance"], rationale: "New products and contract structures increase accounting complexity, though existing financial-control assurance partially reduces the gap." },
    { id: "environmental", name: "Environmental Compliance", unit: "Operations", owner: "VP Environmental", residualRisk: 4, coverageGap: 5, monthsSinceAudit: 50, change: 3, findings: 4, incidents: 3, hours: 470, risks: ["Environmental", "Regulatory Compliance", "Operational Resilience"], rationale: "Limited independent coverage, aging procedures, and multiple open corrective actions increase compliance and operational risk." },
    { id: "tax", name: "Income and Indirect Tax", unit: "Finance", owner: "VP Tax", residualRisk: 4, coverageGap: 3, monthsSinceAudit: 33, change: 4, findings: 2, incidents: 1, hours: 440, risks: ["Tax", "Financial Reporting", "Regulatory Compliance"], rationale: "Entity growth and changing tax positions increase complexity, while specialist and external review provide partial assurance." },
    { id: "inventory", name: "Inventory and Shrink Management", unit: "Operations", owner: "VP Supply Chain", residualRisk: 4, coverageGap: 4, monthsSinceAudit: 36, change: 3, findings: 3, incidents: 3, hours: 410, risks: ["Financial Reporting", "Fraud", "Operational Resilience"], rationale: "Distributed inventory, shrink trends, and limited recent testing create a meaningful financial and operational exposure." },
    { id: "capital-projects", name: "Capital Projects and Construction", unit: "Real Estate", owner: "Chief Development Officer", residualRisk: 4, coverageGap: 4, monthsSinceAudit: 44, change: 4, findings: 2, incidents: 2, hours: 500, risks: ["Financial Reporting", "Fraud", "Third-Party"], rationale: "Large project spend, change orders, and contractor reliance increase the need for cost, governance, and procurement assurance." },
    { id: "data-governance", name: "Enterprise Data Governance", unit: "Technology", owner: "Chief Data Officer", residualRisk: 4, coverageGap: 5, monthsSinceAudit: 52, change: 5, findings: 1, incidents: 2, hours: 450, risks: ["Data Privacy", "Cybersecurity", "Regulatory Compliance"], rationale: "Data ownership and quality practices are still maturing while analytics and AI use expand across the organization." },
    { id: "hr", name: "Talent Acquisition and Employee Lifecycle", unit: "People", owner: "VP Human Resources", residualRisk: 3, coverageGap: 4, monthsSinceAudit: 40, change: 4, findings: 2, incidents: 2, hours: 360, risks: ["Human Capital", "Regulatory Compliance", "Data Privacy"], rationale: "Process decentralization and system changes create moderate compliance, privacy, and workforce risks." },
    { id: "fraud-program", name: "Enterprise Fraud Risk Management", unit: "Enterprise Risk", owner: "Chief Risk Officer", residualRisk: 4, coverageGap: 5, monthsSinceAudit: 55, change: 3, findings: 2, incidents: 4, hours: 400, risks: ["Fraud", "Cybersecurity", "Third-Party"], rationale: "Fraud risks are assessed across business units, but consolidated governance and monitoring have limited independent assurance." },
    { id: "customer-data", name: "Customer Data and Consent Management", unit: "Commercial", owner: "Chief Marketing Officer", residualRisk: 4, coverageGap: 4, monthsSinceAudit: 29, change: 5, findings: 2, incidents: 3, hours: 390, risks: ["Data Privacy", "Regulatory Compliance", "Cybersecurity"], rationale: "New digital channels and expanded data collection increase consent, retention, and third-party sharing risk." },
    { id: "insurance", name: "Insurance and Claims Administration", unit: "Enterprise Risk", owner: "VP Risk Financing", residualRisk: 3, coverageGap: 3, monthsSinceAudit: 34, change: 2, findings: 2, incidents: 2, hours: 340, risks: ["Financial Reporting", "Operational Resilience", "Third-Party"], rationale: "The process is stable, but claim administration and coverage adequacy require periodic independent review." },
    { id: "safety", name: "Workplace Safety", unit: "Operations", owner: "VP Safety", residualRisk: 4, coverageGap: 3, monthsSinceAudit: 24, change: 3, findings: 3, incidents: 4, hours: 380, risks: ["Human Capital", "Regulatory Compliance", "Operational Resilience"], rationale: "Incident trends and decentralized operations increase safety and regulatory exposure despite established second-line monitoring." },
    { id: "fleet", name: "Fleet Operations and Fuel Management", unit: "Operations", owner: "VP Transportation", residualRisk: 3, coverageGap: 4, monthsSinceAudit: 46, change: 3, findings: 2, incidents: 2, hours: 350, risks: ["Operational Resilience", "Fraud", "Environmental"], rationale: "Aging audit coverage and distributed purchasing create moderate operational, fraud, and environmental risks." },
    { id: "compliance-governance", name: "Compliance Program Governance", unit: "Legal and Compliance", owner: "Chief Compliance Officer", residualRisk: 4, coverageGap: 2, monthsSinceAudit: 16, change: 3, findings: 1, incidents: 1, hours: 360, risks: ["Regulatory Compliance", "Fraud", "Data Privacy"], rationale: "The program remains significant, but strong compliance monitoring and recent independent review reduce immediate priority." },
    { id: "fixed-assets", name: "Fixed Assets and Lease Administration", unit: "Finance", owner: "Controller", residualRisk: 3, coverageGap: 3, monthsSinceAudit: 28, change: 3, findings: 2, incidents: 1, hours: 330, risks: ["Financial Reporting", "Tax", "Fraud"], rationale: "Asset growth and lease complexity warrant periodic review, but the current risk profile is moderate relative to other entities." }
  ];

  const state = {
    weights: { ...defaultWeights },
    capacity: { ...defaultCapacity },
    selected: new Set(),
    activeTab: "overview",
    filters: { search: "", unit: "", status: "" }
  };

  const formatNumber = new Intl.NumberFormat("en-US", { maximumFractionDigits: 0 });
  const factorLabels = {
    risk: "Residual risk",
    coverage: "Assurance gap",
    recency: "Time since audit",
    change: "Significant change",
    findings: "Open findings",
    incidents: "Recent incidents"
  };

  const escapeHtml = (value) => String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");

  function getFactors(entity) {
    return {
      risk: entity.residualRisk / 5,
      coverage: entity.coverageGap / 5,
      recency: Math.min(entity.monthsSinceAudit / 48, 1),
      change: entity.change / 5,
      findings: Math.min(entity.findings / 5, 1),
      incidents: Math.min(entity.incidents / 5, 1)
    };
  }

  function scoreEntity(entity) {
    const factors = getFactors(entity);
    const totalWeight = Object.values(state.weights).reduce((sum, value) => sum + value, 0) || 1;
    const weighted = Object.keys(state.weights).reduce((sum, key) => sum + state.weights[key] * factors[key], 0);
    return Math.round((weighted / totalWeight) * 100);
  }

  function scoreBand(score) {
    if (score >= 80) return "Critical";
    if (score >= 65) return "High";
    if (score >= 50) return "Moderate";
    return "Lower";
  }

  function getCapacityMetrics() {
    const gross = state.capacity.auditors * state.capacity.productiveHours + state.capacity.cosource;
    const admin = gross * (state.capacity.adminPct / 100);
    const net = Math.max(0, Math.round(gross - admin - state.capacity.otherHours - state.capacity.reserve));
    return { gross: Math.round(gross), admin: Math.round(admin), net };
  }

  function getPlannedHours() {
    return entities.reduce((sum, entity) => sum + (state.selected.has(entity.id) ? entity.hours : 0), 0);
  }

  function getCoveredRisks() {
    const covered = new Set();
    entities.forEach((entity) => {
      if (!state.selected.has(entity.id)) return;
      entity.risks.forEach((risk) => covered.add(risk));
    });
    return covered;
  }

  function buildRecommendedPlan() {
    state.selected.clear();
    const capacity = getCapacityMetrics().net;
    let remaining = capacity;
    const candidates = [...entities];
    const covered = new Set();

    while (candidates.length) {
      const viable = candidates.filter((entity) => entity.hours <= remaining);
      if (!viable.length) break;

      viable.sort((a, b) => {
        const aNewCoverage = a.risks.filter((risk) => !covered.has(risk)).length;
        const bNewCoverage = b.risks.filter((risk) => !covered.has(risk)).length;
        const aValue = scoreEntity(a) + aNewCoverage * 4 + (a.residualRisk === 5 ? 2 : 0);
        const bValue = scoreEntity(b) + bNewCoverage * 4 + (b.residualRisk === 5 ? 2 : 0);
        return bValue - aValue || a.hours - b.hours;
      });

      const chosen = viable[0];
      state.selected.add(chosen.id);
      chosen.risks.forEach((risk) => covered.add(risk));
      remaining -= chosen.hours;
      candidates.splice(candidates.findIndex((entity) => entity.id === chosen.id), 1);
    }
  }

  function updateInputsFromState() {
    app.querySelectorAll("[data-weight]").forEach((input) => {
      const key = input.dataset.weight;
      input.value = state.weights[key];
      const output = app.querySelector(`[data-output-for="weight-${key}"]`);
      if (output) output.value = `${state.weights[key]}%`;
    });

    app.querySelectorAll("[data-capacity]").forEach((input) => {
      input.value = state.capacity[input.dataset.capacity];
    });
  }

  function renderWeightSummary() {
    const total = Object.values(state.weights).reduce((sum, value) => sum + value, 0);
    const totalNode = app.querySelector("[data-weight-total]");
    if (totalNode) totalNode.textContent = `${total}% total`;
  }

  function renderKPIs() {
    const capacity = getCapacityMetrics().net;
    const planned = getPlannedHours();
    const covered = getCoveredRisks();
    const highRiskEntities = entities.filter((entity) => entity.residualRisk >= 4);
    const plannedHighRisk = highRiskEntities.filter((entity) => state.selected.has(entity.id)).length;
    const remaining = capacity - planned;

    app.querySelector('[data-kpi="capacity"]').textContent = formatNumber.format(capacity);
    app.querySelector('[data-kpi="planned"]').textContent = formatNumber.format(planned);
    app.querySelector('[data-kpi-detail="planned"]').textContent = remaining >= 0
      ? `${formatNumber.format(remaining)} hours remain`
      : `${formatNumber.format(Math.abs(remaining))} hours over capacity`;
    app.querySelector('[data-kpi="coverage"]').textContent = `${covered.size} / ${riskCatalog.length}`;
    app.querySelector('[data-kpi-detail="coverage"]').textContent = `${riskCatalog.length - covered.size} enterprise risks remain outside the plan`;
    app.querySelector('[data-kpi="highRisk"]').textContent = `${plannedHighRisk} / ${highRiskEntities.length}`;
    app.querySelector('[data-kpi-detail="highRisk"]').textContent = "Residual risk rated high or critical";
  }

  function renderCapacity() {
    const metrics = getCapacityMetrics();
    const planned = getPlannedHours();
    const pct = metrics.net ? Math.round((planned / metrics.net) * 100) : 0;
    const unallocated = metrics.net - planned;
    const percentNode = app.querySelector("[data-capacity-percent]");
    const bar = app.querySelector("[data-capacity-bar]");
    percentNode.textContent = `${pct}%`;
    bar.style.width = `${Math.min(pct, 100)}%`;
    bar.classList.toggle("is-over", pct > 100);

    const breakdown = app.querySelector("[data-capacity-breakdown]");
    breakdown.innerHTML = [
      ["Gross staff + co-source capacity", metrics.gross],
      ["Administration and training", -metrics.admin],
      ["Follow-up and investigations", -state.capacity.otherHours],
      ["Contingency reserve", -state.capacity.reserve],
      ["Net engagement capacity", metrics.net],
      [unallocated >= 0 ? "Unallocated capacity" : "Capacity overage", unallocated]
    ].map(([label, value], index) => {
      const displayValue = value < 0 ? `(${formatNumber.format(Math.abs(value))})` : formatNumber.format(value);
      return `<div${index >= 4 ? ' class="is-total"' : ""}><span>${escapeHtml(label)}</span><strong>${displayValue}</strong></div>`;
    }).join("");
  }

  function renderMatrix() {
    const container = app.querySelector("[data-matrix-dots]");
    container.innerHTML = entities.map((entity, index) => {
      const baseX = 7 + ((entity.coverageGap - 1) / 4) * 86;
      const baseY = 7 + ((entity.residualRisk - 1) / 4) * 86;
      const jitterX = ((index % 5) - 2) * 1.35;
      const jitterY = ((Math.floor(index / 5) % 5) - 2) * .9;
      const score = scoreEntity(entity);
      const classes = [
        "apl-matrix-dot",
        state.selected.has(entity.id) ? "is-selected" : "",
        score >= 80 ? "is-critical" : ""
      ].filter(Boolean).join(" ");
      return `<button type="button" class="${classes}" data-open-entity="${entity.id}" style="left:${Math.max(3, Math.min(97, baseX + jitterX))}%;bottom:${Math.max(3, Math.min(97, baseY + jitterY))}%" aria-label="${escapeHtml(entity.name)}. Priority score ${score}. ${state.selected.has(entity.id) ? "Included" : "Not included"} in plan." title="${escapeHtml(entity.name)} · ${score}"></button>`;
    }).join("");
  }

  function renderPlanList() {
    const sorted = [...entities].sort((a, b) => scoreEntity(b) - scoreEntity(a) || b.residualRisk - a.residualRisk);
    const container = app.querySelector("[data-plan-list]");
    container.innerHTML = sorted.slice(0, 14).map((entity, index) => {
      const score = scoreEntity(entity);
      const selected = state.selected.has(entity.id);
      return `<div class="apl-plan-row">
        <div><input type="checkbox" data-toggle-entity="${entity.id}" ${selected ? "checked" : ""} aria-label="${selected ? "Remove" : "Add"} ${escapeHtml(entity.name)} ${selected ? "from" : "to"} plan"></div>
        <div class="apl-plan-row__entity"><button type="button" data-open-entity="${entity.id}">${String(index + 1).padStart(2, "0")} · ${escapeHtml(entity.name)}</button><span>${escapeHtml(entity.unit)} · ${entity.monthsSinceAudit} months since audit</span></div>
        <div class="apl-plan-row__risks">${entity.risks.slice(0, 2).map((risk) => `<span>${escapeHtml(risk)}</span>`).join("")}</div>
        <div class="apl-plan-row__hours">${formatNumber.format(entity.hours)} hours</div>
        <div class="apl-plan-row__score"><strong>${score}</strong><span>${scoreBand(score)}</span></div>
        <div class="apl-plan-row__status ${selected ? "is-planned" : "is-unplanned"}">${selected ? "Planned" : "Unplanned"}</div>
      </div>`;
    }).join("");
  }

  function populateUnitFilter() {
    const select = app.querySelector('[data-filter="unit"]');
    const current = select.value;
    const units = [...new Set(entities.map((entity) => entity.unit))].sort();
    select.innerHTML = '<option value="">All business units</option>' + units.map((unit) => `<option value="${escapeHtml(unit)}">${escapeHtml(unit)}</option>`).join("");
    select.value = current;
  }

  function renderUniverse() {
    const search = state.filters.search.trim().toLowerCase();
    const filtered = entities
      .filter((entity) => !search || `${entity.name} ${entity.unit} ${entity.owner} ${entity.risks.join(" ")}`.toLowerCase().includes(search))
      .filter((entity) => !state.filters.unit || entity.unit === state.filters.unit)
      .filter((entity) => {
        if (state.filters.status === "planned") return state.selected.has(entity.id);
        if (state.filters.status === "unplanned") return !state.selected.has(entity.id);
        return true;
      })
      .sort((a, b) => scoreEntity(b) - scoreEntity(a));

    const tbody = app.querySelector("[data-universe-body]");
    tbody.innerHTML = filtered.map((entity) => {
      const score = scoreEntity(entity);
      const selected = state.selected.has(entity.id);
      return `<tr>
        <td><input type="checkbox" data-toggle-entity="${entity.id}" ${selected ? "checked" : ""} aria-label="${selected ? "Remove" : "Add"} ${escapeHtml(entity.name)} ${selected ? "from" : "to"} plan"></td>
        <td><button type="button" class="apl-table__entity" data-open-entity="${entity.id}">${escapeHtml(entity.name)}</button></td>
        <td>${escapeHtml(entity.unit)}</td>
        <td><span class="apl-level-pill">${entity.residualRisk} / 5</span></td>
        <td><span class="apl-level-pill">${entity.coverageGap} / 5</span></td>
        <td>${entity.monthsSinceAudit} months</td>
        <td>${formatNumber.format(entity.hours)}</td>
        <td><span class="apl-score-pill">${score}</span> ${scoreBand(score)}</td>
      </tr>`;
    }).join("") || '<tr><td colspan="8">No auditable entities match the current filters.</td></tr>';
  }

  function assuranceLevelForRisk(risk) {
    const selectedCount = entities.filter((entity) => state.selected.has(entity.id) && entity.risks.includes(risk.name)).length;
    return Math.min(3, risk.currentIA + (selectedCount >= 2 ? 2 : selectedCount === 1 ? 1 : 0));
  }

  function coverageStatus(levels) {
    const total = levels.reduce((sum, level) => sum + level, 0);
    const strongSources = levels.filter((level) => level >= 2).length;
    if (total >= 9 && strongSources >= 3) return "Covered";
    if (total >= 5 && strongSources >= 1) return "Partial";
    return "Gap";
  }

  function renderAssurance() {
    const providers = ["Internal Audit", "Compliance", "ERM", "External Audit", "Management Monitoring"];
    app.querySelector("[data-assurance-head]").innerHTML = `<tr><th>Enterprise risk</th>${providers.map((provider) => `<th>${escapeHtml(provider)}</th>`).join("")}<th>Assessment</th></tr>`;
    app.querySelector("[data-assurance-body]").innerHTML = riskCatalog.map((risk) => {
      const levels = [
        assuranceLevelForRisk(risk),
        risk.providers.Compliance,
        risk.providers.ERM,
        risk.providers["External Audit"],
        risk.providers["Management Monitoring"]
      ];
      const status = coverageStatus(levels);
      return `<tr>
        <td class="apl-assurance-risk"><strong>${escapeHtml(risk.name)}</strong><span>${escapeHtml(risk.criticality)} enterprise risk</span></td>
        ${levels.map((level) => `<td><span class="apl-assurance-cell level-${level}" aria-label="Coverage level ${level} of 3" title="Coverage level ${level} of 3"></span></td>`).join("")}
        <td><span class="apl-score-pill">${status}</span></td>
      </tr>`;
    }).join("");
  }

  function getRiskDrivers(entity) {
    const drivers = [];
    if (entity.residualRisk >= 5) drivers.push("Residual exposure is assessed as critical.");
    else if (entity.residualRisk >= 4) drivers.push("Residual exposure is assessed as high.");
    if (entity.coverageGap >= 4) drivers.push("Independent assurance is limited or outdated.");
    if (entity.monthsSinceAudit >= 36) drivers.push(`Internal audit coverage is ${entity.monthsSinceAudit} months old.`);
    if (entity.change >= 4) drivers.push("Significant process, system, or organizational change is present.");
    if (entity.findings >= 3) drivers.push(`${entity.findings} significant findings remain relevant to planning.`);
    if (entity.incidents >= 3) drivers.push("Recent incidents increase the need for targeted assurance.");
    return drivers.length ? drivers : ["The entity is comparatively stable with moderate current risk indicators."];
  }

  function openEntityDialog(entityId) {
    const entity = entities.find((item) => item.id === entityId);
    if (!entity) return;
    const dialog = document.querySelector("[data-entity-dialog]");
    const content = dialog.querySelector("[data-dialog-content]");
    const factors = getFactors(entity);
    const score = scoreEntity(entity);
    const selected = state.selected.has(entity.id);

    content.innerHTML = `<div class="apl-dialog__hero">
        <small>${escapeHtml(entity.unit)} · Entity profile</small>
        <h2>${escapeHtml(entity.name)}</h2>
        <p>${escapeHtml(entity.rationale)}</p>
      </div>
      <div class="apl-dialog__metrics">
        <div><small>Priority score</small><strong>${score}</strong></div>
        <div><small>Residual risk</small><strong>${entity.residualRisk} / 5</strong></div>
        <div><small>Last audit</small><strong>${entity.monthsSinceAudit} mo.</strong></div>
        <div><small>Estimated effort</small><strong>${formatNumber.format(entity.hours)} hr.</strong></div>
      </div>
      <div class="apl-dialog__body">
        <section class="apl-dialog__section"><h3>Planning rationale</h3><ul>${getRiskDrivers(entity).map((driver) => `<li>${escapeHtml(driver)}</li>`).join("")}</ul></section>
        <section class="apl-dialog__section"><h3>Enterprise risks</h3><ul>${entity.risks.map((risk) => `<li>${escapeHtml(risk)}</li>`).join("")}</ul></section>
        <section class="apl-dialog__section"><h3>Priority components</h3><div class="apl-dialog__score">${Object.keys(state.weights).map((key) => `<div><span>${factorLabels[key]}</span><strong>${Math.round(factors[key] * 100)}%</strong></div>`).join("")}</div></section>
        <section class="apl-dialog__section"><h3>Ownership and status</h3><ul><li>Business owner: ${escapeHtml(entity.owner)}</li><li>Open significant findings: ${entity.findings}</li><li>Recent incident indicator: ${entity.incidents} / 5</li><li>Current plan status: ${selected ? "Included" : "Not included"}</li></ul></section>
      </div>
      <div class="apl-dialog__actions"><button type="button" class="apl-button" data-dialog-toggle="${entity.id}">${selected ? "Remove from proposed plan" : "Add to proposed plan"}</button></div>`;

    if (typeof dialog.showModal === "function") dialog.showModal();
    else dialog.setAttribute("open", "");
  }

  function closeDialog() {
    const dialog = document.querySelector("[data-entity-dialog]");
    if (typeof dialog.close === "function") dialog.close();
    else dialog.removeAttribute("open");
  }

  function toggleEntity(entityId) {
    if (state.selected.has(entityId)) state.selected.delete(entityId);
    else state.selected.add(entityId);
    renderAll();
  }

  function switchTab(tabName) {
    state.activeTab = tabName;
    app.querySelectorAll("[data-tab]").forEach((button) => button.classList.toggle("is-active", button.dataset.tab === tabName));
    app.querySelectorAll("[data-view]").forEach((view) => {
      const active = view.dataset.view === tabName;
      view.classList.toggle("is-active", active);
      view.hidden = !active;
    });
  }

  function renderAll() {
    renderWeightSummary();
    renderKPIs();
    renderCapacity();
    renderMatrix();
    renderPlanList();
    renderUniverse();
    renderAssurance();
  }

  app.querySelectorAll("[data-weight]").forEach((input) => {
    input.addEventListener("input", (event) => {
      const key = event.currentTarget.dataset.weight;
      state.weights[key] = Number(event.currentTarget.value);
      const output = app.querySelector(`[data-output-for="weight-${key}"]`);
      if (output) output.value = `${state.weights[key]}%`;
      renderAll();
    });
  });

  app.querySelectorAll("[data-capacity]").forEach((input) => {
    input.addEventListener("input", (event) => {
      const key = event.currentTarget.dataset.capacity;
      state.capacity[key] = Math.max(0, Number(event.currentTarget.value) || 0);
      renderAll();
    });
  });

  app.addEventListener("change", (event) => {
    const toggle = event.target.closest("[data-toggle-entity]");
    if (toggle) toggleEntity(toggle.dataset.toggleEntity);

    const filter = event.target.closest("[data-filter]");
    if (filter) {
      state.filters[filter.dataset.filter] = filter.value;
      renderUniverse();
    }
  });

  app.addEventListener("input", (event) => {
    const filter = event.target.closest('[data-filter="search"]');
    if (!filter) return;
    state.filters.search = filter.value;
    renderUniverse();
  });

  app.addEventListener("click", (event) => {
    const openButton = event.target.closest("[data-open-entity]");
    if (openButton) openEntityDialog(openButton.dataset.openEntity);

    const tabButton = event.target.closest("[data-tab]");
    if (tabButton) switchTab(tabButton.dataset.tab);

    const action = event.target.closest("[data-action]");
    if (!action) return;
    if (action.dataset.action === "recommend") {
      buildRecommendedPlan();
      renderAll();
    }
    if (action.dataset.action === "reset") {
      state.weights = { ...defaultWeights };
      state.capacity = { ...defaultCapacity };
      state.filters = { search: "", unit: "", status: "" };
      updateInputsFromState();
      app.querySelectorAll("[data-filter]").forEach((filter) => { filter.value = ""; });
      buildRecommendedPlan();
      renderAll();
    }
  });

  const dialog = document.querySelector("[data-entity-dialog]");
  dialog.querySelector("[data-dialog-close]").addEventListener("click", closeDialog);
  dialog.addEventListener("click", (event) => {
    if (event.target === dialog) closeDialog();
    const toggle = event.target.closest("[data-dialog-toggle]");
    if (toggle) {
      toggleEntity(toggle.dataset.dialogToggle);
      openEntityDialog(toggle.dataset.dialogToggle);
    }
  });

  populateUnitFilter();
  updateInputsFromState();
  buildRecommendedPlan();
  renderAll();
  switchTab("overview");
})();
