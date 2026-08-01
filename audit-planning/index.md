---
title: "Interactive Audit Planning Lab"
layout: default
permalink: /audit-planning/
description: "An interactive internal audit planning model that connects risk, assurance coverage, audit history, organizational change, findings, and capacity to a defensible annual plan."
page_css: "/assets/css/audit-planning-lab.css"
---

<div class="apl-page">

<section class="apl-hero">
  <div class="apl-hero__copy">
    <p class="apl-eyebrow">Interactive case study · Internal audit planning</p>
    <h1>Turn an audit universe into a <em>defensible plan.</em></h1>
    <p class="apl-hero__lede">The Audit Planning Lab combines risk, assurance coverage, audit history, change, findings, incidents, and available capacity to help an internal audit function evaluate what should be audited—and what risk remains uncovered.</p>
    <div class="apl-hero__actions">
      <a class="apl-link apl-link--light" href="#planning-lab">Open the planning model <span>↓</span></a>
      <a class="apl-link apl-link--light" href="#methodology">Review the methodology <span>↗</span></a>
    </div>
  </div>

  <div class="apl-hero__visual" aria-label="Illustrative audit planning model preview">
    <div class="apl-preview">
      <div class="apl-preview__bar"><span></span><span></span><span></span><small>Annual Plan Scenario · FY2027</small></div>
      <div class="apl-preview__kpis">
        <div><small>Capacity used</small><strong>78%</strong><span>3,920 / 5,020 hours</span></div>
        <div><small>Critical risks covered</small><strong>8 / 10</strong><span>Two gaps remain</span></div>
        <div><small>Planned engagements</small><strong>9</strong><span>Across six business units</span></div>
      </div>
      <div class="apl-preview__body">
        <div class="apl-preview__chart">
          <span style="--x:78%;--y:84%;--s:22px"></span>
          <span style="--x:66%;--y:71%;--s:18px"></span>
          <span style="--x:84%;--y:63%;--s:16px"></span>
          <span style="--x:59%;--y:54%;--s:14px"></span>
          <span style="--x:43%;--y:66%;--s:13px"></span>
          <span style="--x:71%;--y:38%;--s:12px"></span>
          <span style="--x:31%;--y:48%;--s:11px"></span>
          <b>Residual risk</b><i>Assurance gap →</i>
        </div>
        <div class="apl-preview__plan">
          <small>Highest priorities</small>
          <div><span>01</span><b>Cybersecurity</b><em>92</em></div>
          <div><span>02</span><b>Third-party risk</b><em>88</em></div>
          <div><span>03</span><b>Payroll</b><em>84</em></div>
          <div><span>04</span><b>Treasury</b><em>81</em></div>
        </div>
      </div>
    </div>
    <div class="apl-hero__tag apl-hero__tag--one"><small>Model</small><strong>Risk + coverage</strong></div>
    <div class="apl-hero__tag apl-hero__tag--two"><small>Constraint</small><strong>Available hours</strong></div>
  </div>
</section>

<section class="apl-facts" aria-label="Project facts">
  <div><small>Role</small><strong>Methodology + product design</strong></div>
  <div><small>Delivery</small><strong>Native web application</strong></div>
  <div><small>Decision</small><strong>Annual audit planning</strong></div>
  <div><small>Data</small><strong>Synthetic demonstration data</strong></div>
</section>

<section class="apl-statement">
  <p class="apl-eyebrow apl-eyebrow--dark">The planning problem</p>
  <h2>Internal audit always has more risk than available capacity.</h2>
  <p>A useful annual plan must do more than rank auditable entities. It should connect enterprise risk, existing assurance, prior results, organizational change, and resource constraints—then make both selected coverage and accepted gaps visible.</p>
</section>

<section id="planning-lab" class="apl-lab-section">
  <div class="apl-section-heading apl-section-heading--split">
    <div>
      <p class="apl-eyebrow">Interactive model</p>
      <h2>Build a risk-based audit plan.</h2>
    </div>
    <p>Adjust the assumptions, select engagements, and inspect how the plan changes. Analytical priority is a structured input—not an automated audit decision.</p>
  </div>

  <div class="apl-app" data-audit-planning-app>
    <header class="apl-app__header">
      <div>
        <small>Scenario</small>
        <strong>FY2027 Annual Audit Plan</strong>
      </div>
      <div class="apl-app__header-actions">
        <button type="button" class="apl-button apl-button--secondary" data-action="reset">Reset assumptions</button>
        <button type="button" class="apl-button" data-action="recommend">Build recommended plan</button>
      </div>
    </header>

    <div class="apl-app__layout">
      <aside class="apl-controls" aria-label="Planning assumptions">
        <section class="apl-control-group">
          <div class="apl-control-group__heading">
            <div><small>01</small><strong>Priority weights</strong></div>
            <span data-weight-total>100%</span>
          </div>
          <p>Change how strongly each planning factor influences the calculated priority.</p>
          <label class="apl-range"><span>Residual risk <output data-output-for="weight-risk">35%</output></span><input id="weight-risk" data-weight="risk" type="range" min="0" max="50" value="35"></label>
          <label class="apl-range"><span>Assurance gap <output data-output-for="weight-coverage">20%</output></span><input id="weight-coverage" data-weight="coverage" type="range" min="0" max="40" value="20"></label>
          <label class="apl-range"><span>Time since audit <output data-output-for="weight-recency">15%</output></span><input id="weight-recency" data-weight="recency" type="range" min="0" max="35" value="15"></label>
          <label class="apl-range"><span>Significant change <output data-output-for="weight-change">15%</output></span><input id="weight-change" data-weight="change" type="range" min="0" max="35" value="15"></label>
          <label class="apl-range"><span>Open findings <output data-output-for="weight-findings">10%</output></span><input id="weight-findings" data-weight="findings" type="range" min="0" max="30" value="10"></label>
          <label class="apl-range"><span>Recent incidents <output data-output-for="weight-incidents">5%</output></span><input id="weight-incidents" data-weight="incidents" type="range" min="0" max="25" value="5"></label>
        </section>

        <section class="apl-control-group">
          <div class="apl-control-group__heading"><div><small>02</small><strong>Audit capacity</strong></div></div>
          <p>Model the hours available after non-engagement commitments and contingency.</p>
          <label class="apl-number"><span>Auditors</span><input data-capacity="auditors" type="number" min="1" max="12" value="4"></label>
          <label class="apl-number"><span>Productive hours per auditor</span><input data-capacity="productiveHours" type="number" min="800" max="1900" step="50" value="1500"></label>
          <label class="apl-number"><span>Co-sourced hours</span><input data-capacity="cosource" type="number" min="0" max="3000" step="50" value="400"></label>
          <label class="apl-number"><span>Administration + training</span><input data-capacity="adminPct" type="number" min="0" max="40" value="15"><b>%</b></label>
          <label class="apl-number"><span>Follow-up + investigations</span><input data-capacity="otherHours" type="number" min="0" max="3000" step="50" value="900"></label>
          <label class="apl-number"><span>Contingency reserve</span><input data-capacity="reserve" type="number" min="0" max="2000" step="50" value="500"></label>
        </section>
      </aside>

      <main class="apl-workspace">
        <section class="apl-kpis" aria-label="Plan summary">
          <article><small>Net audit capacity</small><strong data-kpi="capacity">—</strong><span>Available engagement hours</span></article>
          <article><small>Planned hours</small><strong data-kpi="planned">—</strong><span data-kpi-detail="planned">—</span></article>
          <article><small>Enterprise risks covered</small><strong data-kpi="coverage">—</strong><span data-kpi-detail="coverage">—</span></article>
          <article><small>High-risk entities planned</small><strong data-kpi="highRisk">—</strong><span data-kpi-detail="highRisk">—</span></article>
        </section>

        <nav class="apl-tabs" aria-label="Planning model views">
          <button type="button" class="is-active" data-tab="overview">Plan overview</button>
          <button type="button" data-tab="universe">Audit universe</button>
          <button type="button" data-tab="assurance">Assurance coverage</button>
        </nav>

        <section class="apl-view is-active" data-view="overview">
          <div class="apl-overview-grid">
            <article class="apl-panel apl-panel--matrix">
              <div class="apl-panel__heading">
                <div><small>Risk and coverage</small><h3>Where should audit attention go first?</h3></div>
                <span class="apl-legend"><i></i>Included in plan</span>
              </div>
              <div class="apl-risk-matrix" data-risk-matrix>
                <div class="apl-risk-matrix__zone apl-risk-matrix__zone--priority">Priority zone</div>
                <span class="apl-risk-matrix__axis apl-risk-matrix__axis--y">Residual risk →</span>
                <span class="apl-risk-matrix__axis apl-risk-matrix__axis--x">Assurance gap →</span>
                <div class="apl-risk-matrix__dots" data-matrix-dots></div>
              </div>
            </article>

            <article class="apl-panel apl-panel--capacity">
              <div class="apl-panel__heading"><div><small>Resource constraint</small><h3>Capacity allocation</h3></div></div>
              <div class="apl-capacity-number"><strong data-capacity-percent>0%</strong><span>of net capacity allocated</span></div>
              <div class="apl-capacity-bar"><span data-capacity-bar></span></div>
              <div class="apl-capacity-breakdown" data-capacity-breakdown></div>
            </article>
          </div>

          <article class="apl-panel apl-panel--plan">
            <div class="apl-panel__heading apl-panel__heading--split">
              <div><small>Proposed engagements</small><h3>Priorities within the available plan</h3></div>
              <p>Select or remove engagements. Scores recalculate when the priority assumptions change.</p>
            </div>
            <div class="apl-plan-list" data-plan-list></div>
          </article>
        </section>

        <section class="apl-view" data-view="universe" hidden>
          <article class="apl-panel apl-panel--universe">
            <div class="apl-panel__heading apl-panel__heading--split">
              <div><small>Complete population</small><h3>Audit universe</h3></div>
              <p>Filter the demonstration universe, inspect the priority calculation, and add or remove engagements.</p>
            </div>
            <div class="apl-table-tools">
              <label><span class="sr-only">Search audit universe</span><input type="search" data-filter="search" placeholder="Search entity or business unit"></label>
              <label><span class="sr-only">Filter business unit</span><select data-filter="unit"><option value="">All business units</option></select></label>
              <label><span class="sr-only">Filter plan status</span><select data-filter="status"><option value="">All plan statuses</option><option value="planned">Included in plan</option><option value="unplanned">Not included</option></select></label>
            </div>
            <div class="apl-table-wrap">
              <table class="apl-table">
                <thead><tr><th>Plan</th><th>Auditable entity</th><th>Business unit</th><th>Residual risk</th><th>Coverage gap</th><th>Last audit</th><th>Hours</th><th>Priority</th></tr></thead>
                <tbody data-universe-body></tbody>
              </table>
            </div>
          </article>
        </section>

        <section class="apl-view" data-view="assurance" hidden>
          <article class="apl-panel apl-panel--assurance">
            <div class="apl-panel__heading apl-panel__heading--split">
              <div><small>Combined assurance</small><h3>Coverage by enterprise risk</h3></div>
              <p>Internal audit coverage updates with the proposed plan. Other assurance reflects the current-state demonstration data.</p>
            </div>
            <div class="apl-assurance-key"><span><i class="level-0"></i>None</span><span><i class="level-1"></i>Limited</span><span><i class="level-2"></i>Moderate</span><span><i class="level-3"></i>Strong</span></div>
            <div class="apl-table-wrap"><table class="apl-table apl-assurance-table"><thead data-assurance-head></thead><tbody data-assurance-body></tbody></table></div>
          </article>
        </section>
      </main>
    </div>

    <footer class="apl-app__footer">
      <strong>Planning principle</strong>
      <p>The model creates a consistent basis for discussion. The CAE still evaluates emerging risks, stakeholder expectations, regulatory requirements, reliance, timing, and whether the proposed scope can produce meaningful assurance.</p>
    </footer>
  </div>
</section>

<section id="methodology" class="apl-methodology">
  <div class="apl-section-heading apl-section-heading--split">
    <div><p class="apl-eyebrow apl-eyebrow--dark">Model design</p><h2>Make the reasoning visible.</h2></div>
    <p>A defensible model should show how inputs influence priority, allow challenge, and preserve a clear boundary between analytical structure and professional judgment.</p>
  </div>
  <div class="apl-method-grid">
    <article><span>01</span><h3>Assess the universe</h3><p>Connect auditable entities to enterprise risks, business ownership, financial and operational significance, and recent change.</p></article>
    <article><span>02</span><h3>Evaluate assurance</h3><p>Consider internal audit, compliance, external audit, risk management, quality, and management monitoring before identifying gaps.</p></article>
    <article><span>03</span><h3>Prioritize transparently</h3><p>Use explicit factors and adjustable weights so stakeholders can understand and challenge what drives the ranking.</p></article>
    <article><span>04</span><h3>Apply the constraint</h3><p>Translate headcount into usable engagement hours after administration, follow-up, investigations, and contingency.</p></article>
    <article><span>05</span><h3>Show accepted gaps</h3><p>Communicate which high-risk entities and enterprise risks remain outside the plan rather than presenting selected audits in isolation.</p></article>
    <article><span>06</span><h3>Document judgment</h3><p>Record why the final plan differs from the analytical ranking and how emerging risks will be monitored throughout the year.</p></article>
  </div>
</section>

<section class="apl-boundary">
  <div><span>The boundary</span><strong>Analytics structures the decision.<br>It does not make the decision.</strong></div>
  <p>Priority scores are sensitive to data quality, factor definitions, weighting choices, and the completeness of assurance information. A formal audit plan requires validation, stakeholder engagement, CAE judgment, and Audit Committee approval.</p>
</section>

<section class="apl-note">
  <strong>Portfolio demonstration</strong>
  <p>This application uses synthetic data. Entity names, risk scores, findings, incidents, assurance coverage, hours, and plan scenarios are illustrative and do not represent any employer or client.</p>
</section>

<section class="apl-final">
  <p class="apl-eyebrow">Better audit systems</p>
  <h2>See the risk.<br>Explain the plan.</h2>
  <div><a class="apl-link apl-link--light" href="/audit-analytics/">Return to audit analytics <span>↗</span></a><a class="apl-link apl-link--light" href="/sql-projects/">Explore full-population testing <span>↗</span></a></div>
</section>

<dialog class="apl-dialog" data-entity-dialog>
  <button type="button" class="apl-dialog__close" data-dialog-close aria-label="Close entity profile">×</button>
  <div data-dialog-content></div>
</dialog>

</div>

<script src="{{ '/assets/js/audit-planning-lab.js' | relative_url }}" defer></script>
