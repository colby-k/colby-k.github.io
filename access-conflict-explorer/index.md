---
title: "Access Conflict Explorer"
layout: default
permalink: /access-conflict-explorer/
description: "An interactive segregation-of-duties and access-risk application that traces users through roles and permissions, explains conflicts, and simulates remediation."
page_css: "/assets/css/access-conflict-explorer.css"
---

<article class="ace-page">

<section class="ace-hero">
  <div class="ace-hero__copy">
    <p class="ace-eyebrow">Audit Innovation Lab · Access analytics</p>
    <h1>See the access path behind <em>the conflict.</em></h1>
    <p class="ace-hero__lede">The Access Conflict Explorer evaluates a complete synthetic user-access population, identifies segregation-of-duties and privileged-access risks, and shows exactly which roles and permissions create each exception.</p>
    <div class="ace-hero__actions">
      <a class="ace-link ace-link--light" href="#explorer">Open the explorer <span>↓</span></a>
      <a class="ace-link ace-link--light" href="#methodology">Review the audit logic <span>↗</span></a>
    </div>
  </div>

  <div class="ace-hero__visual" aria-label="Illustrative access relationship network">
    <div class="ace-hero-network">
      <svg viewBox="0 0 760 560" role="img" aria-label="A user connected to conflicting roles and permissions">
        <defs>
          <linearGradient id="aceHeroLine" x1="0" x2="1"><stop offset="0" stop-color="#55e7e0" stop-opacity=".2"/><stop offset="1" stop-color="#55e7e0" stop-opacity=".9"/></linearGradient>
          <filter id="aceHeroGlow"><feGaussianBlur stdDeviation="8" result="blur"/><feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge></filter>
        </defs>
        <g class="ace-hero-network__lines" stroke="url(#aceHeroLine)" stroke-width="2" fill="none">
          <path d="M380 275 L218 154"/><path d="M380 275 L548 142"/><path d="M380 275 L568 334"/>
          <path d="M218 154 L88 80"/><path d="M218 154 L78 228"/>
          <path d="M548 142 L678 76"/><path d="M548 142 L690 224"/>
          <path d="M568 334 L702 342"/><path d="M568 334 L660 480"/>
        </g>
        <g class="ace-hero-network__outer" fill="#0f3351" stroke="#55e7e0" stroke-opacity=".45">
          <circle cx="88" cy="80" r="34"/><circle cx="78" cy="228" r="34"/><circle cx="678" cy="76" r="34"/><circle cx="690" cy="224" r="34"/><circle cx="702" cy="342" r="34"/><circle cx="660" cy="480" r="34"/>
        </g>
        <g class="ace-hero-network__roles" fill="#163f61" stroke="#55e7e0">
          <circle cx="218" cy="154" r="54"/><circle cx="548" cy="142" r="54"/><circle cx="568" cy="334" r="54"/>
        </g>
        <circle cx="380" cy="275" r="76" fill="#55e7e0" filter="url(#aceHeroGlow)"/>
        <g font-family="Arial, sans-serif" text-anchor="middle">
          <text x="380" y="266" font-size="13" font-weight="800" fill="#071525">USER</text><text x="380" y="292" font-size="22" font-weight="800" fill="#071525">Jordan Lee</text>
          <text x="218" y="150" font-size="12" font-weight="800" fill="#fff">Vendor</text><text x="218" y="168" font-size="12" font-weight="800" fill="#fff">Administrator</text>
          <text x="548" y="138" font-size="12" font-weight="800" fill="#fff">AP</text><text x="548" y="156" font-size="12" font-weight="800" fill="#fff">Approver</text>
          <text x="568" y="330" font-size="12" font-weight="800" fill="#fff">Treasury</text><text x="568" y="348" font-size="12" font-weight="800" fill="#fff">Release</text>
          <text x="88" y="76" font-size="10" font-weight="700" fill="#dce8ef">Create</text><text x="88" y="91" font-size="10" font-weight="700" fill="#dce8ef">vendor</text>
          <text x="78" y="224" font-size="10" font-weight="700" fill="#dce8ef">Change bank</text><text x="78" y="239" font-size="10" font-weight="700" fill="#dce8ef">account</text>
          <text x="678" y="72" font-size="10" font-weight="700" fill="#dce8ef">Approve</text><text x="678" y="87" font-size="10" font-weight="700" fill="#dce8ef">payment</text>
          <text x="690" y="220" font-size="10" font-weight="700" fill="#dce8ef">Override</text><text x="690" y="235" font-size="10" font-weight="700" fill="#dce8ef">hold</text>
          <text x="702" y="338" font-size="10" font-weight="700" fill="#dce8ef">Release</text><text x="702" y="353" font-size="10" font-weight="700" fill="#dce8ef">payment</text>
          <text x="660" y="476" font-size="10" font-weight="700" fill="#dce8ef">Modify</text><text x="660" y="491" font-size="10" font-weight="700" fill="#dce8ef">bank file</text>
        </g>
        <path d="M118 58 C260 8 486 6 650 50" stroke="#ff6b72" stroke-width="3" stroke-dasharray="8 7" fill="none"/>
        <rect x="247" y="18" width="265" height="42" rx="21" fill="#ff6b72"/><text x="380" y="44" text-anchor="middle" font-family="Arial, sans-serif" font-size="12" font-weight="900" fill="#071525">CRITICAL · CREATE VENDOR + APPROVE PAYMENT</text>
      </svg>
      <div class="ace-hero-network__status"><span></span><strong>Explainable conflict path</strong><small>Role → permission → business risk</small></div>
    </div>
  </div>
</section>

<section class="ace-facts" aria-label="Project facts">
  <div><small>Population</small><strong>36 users · 21 roles</strong></div>
  <div><small>Tests</small><strong>SoD + privileged access</strong></div>
  <div><small>Interaction</small><strong>Remediation simulation</strong></div>
  <div><small>Data</small><strong>Synthetic demonstration data</strong></div>
</section>

<section class="ace-statement">
  <p class="ace-eyebrow ace-eyebrow--dark">The audit problem</p>
  <h2>A conflict is only useful when the auditor can explain how it exists.</h2>
  <p>Role names alone do not establish segregation-of-duties risk. Effective access analytics must trace each user through assigned roles to the underlying permissions, identify the conflicting business capabilities, and distinguish a true risk from a false positive.</p>
</section>

<section id="explorer" class="ace-lab-section">
  <div class="ace-section-heading ace-section-heading--split">
    <div><p class="ace-eyebrow">Interactive application</p><h2>Investigate the access population.</h2></div>
    <p>Select a user, inspect the access graph, review the conflict logic, and remove roles to see whether the remediation actually resolves the risk.</p>
  </div>

  <div class="ace-app" data-access-conflict-app>
    <header class="ace-app__header">
      <div><small>Demonstration environment</small><strong>Northstar Holdings · Enterprise Access Review</strong></div>
      <div class="ace-app__header-actions">
        <button type="button" class="ace-button ace-button--secondary" data-action="reset-all">Reset simulation</button>
        <button type="button" class="ace-button" data-action="highest-risk">Open highest risk</button>
      </div>
    </header>

    <section class="ace-kpis" aria-label="Access review summary">
      <article><small>Users reviewed</small><strong data-kpi="users">—</strong><span>Complete synthetic population</span></article>
      <article><small>Users with conflicts</small><strong data-kpi="conflicted">—</strong><span data-kpi-detail="conflicted">—</span></article>
      <article><small>Critical conflicts</small><strong data-kpi="critical">—</strong><span>Highest-priority access paths</span></article>
      <article><small>Privileged exceptions</small><strong data-kpi="privileged">—</strong><span>Dormant, terminated, or unreviewed</span></article>
    </section>

    <nav class="ace-tabs" aria-label="Access explorer views">
      <button type="button" class="is-active" data-tab="investigate">Investigation</button>
      <button type="button" data-tab="matrix">Conflict matrix</button>
      <button type="button" data-tab="population">Population results</button>
    </nav>

    <section class="ace-view is-active" data-view="investigate">
      <div class="ace-investigation-layout">
        <aside class="ace-user-panel">
          <div class="ace-panel-heading"><div><small>01 · Population</small><h3>Select a user</h3></div></div>
          <div class="ace-filter-stack">
            <label><span class="sr-only">Search users</span><input type="search" data-filter="search" placeholder="Search name, role, department"></label>
            <div class="ace-filter-row">
              <label><span class="sr-only">Filter severity</span><select data-filter="severity"><option value="">All severity levels</option><option value="Critical">Critical</option><option value="High">High</option><option value="Clear">No conflict</option></select></label>
              <label><span class="sr-only">Filter department</span><select data-filter="department"><option value="">All departments</option></select></label>
            </div>
          </div>
          <div class="ace-user-list" data-user-list></div>
        </aside>

        <section class="ace-graph-panel">
          <div class="ace-panel-heading ace-panel-heading--split">
            <div><small>02 · Access path</small><h3 data-graph-title>Role and permission network</h3></div>
            <div class="ace-graph-legend"><span><i class="is-role"></i>Role</span><span><i class="is-permission"></i>Permission</span><span><i class="is-conflict"></i>Conflict path</span></div>
          </div>
          <div class="ace-graph-canvas" data-graph-canvas>
            <svg data-access-graph viewBox="0 0 900 620" role="img" aria-label="Interactive access relationship graph"></svg>
            <div class="ace-graph-empty" data-graph-empty hidden>Select a user to display assigned roles and permissions.</div>
          </div>
        </section>

        <aside class="ace-insight-panel">
          <div class="ace-panel-heading"><div><small>03 · Audit interpretation</small><h3>Why this matters</h3></div></div>
          <div data-user-insight></div>
        </aside>
      </div>
    </section>

    <section class="ace-view" data-view="matrix" hidden>
      <article class="ace-matrix-panel">
        <div class="ace-panel-heading ace-panel-heading--split"><div><small>Conflict design</small><h3>Incompatible business capabilities</h3></div><p>The matrix evaluates effective permissions rather than relying only on role names. Select a conflict to inspect its audit rationale and affected users.</p></div>
        <div class="ace-matrix-layout">
          <div class="ace-conflict-matrix" data-conflict-matrix></div>
          <aside class="ace-matrix-detail" data-matrix-detail></aside>
        </div>
      </article>
    </section>

    <section class="ace-view" data-view="population" hidden>
      <article class="ace-population-panel">
        <div class="ace-panel-heading ace-panel-heading--split"><div><small>Complete results</small><h3>User access population</h3></div><p>Each result is calculated from effective permissions, account status, privilege level, and review history.</p></div>
        <div class="ace-table-wrap"><table class="ace-table"><thead><tr><th>User</th><th>Department</th><th>Status</th><th>Roles</th><th>Conflicts</th><th>Highest risk</th><th>Review status</th></tr></thead><tbody data-population-body></tbody></table></div>
      </article>
    </section>

    <footer class="ace-app__footer"><strong>Audit boundary</strong><p>A detected conflict is a risk indicator, not a finding by itself. The auditor still validates role design, compensating controls, actual use, business need, account ownership, and whether the access can be exercised in the production environment.</p></footer>
  </div>
</section>

<section id="methodology" class="ace-methodology">
  <div class="ace-section-heading ace-section-heading--split">
    <div><p class="ace-eyebrow ace-eyebrow--dark">Audit methodology</p><h2>Move from assignment data to a supportable conclusion.</h2></div>
    <p>The application separates the technical exception from the audit conclusion so that population testing remains explainable, reproducible, and subject to professional judgment.</p>
  </div>
  <div class="ace-method-grid">
    <article><span>01</span><h3>Normalize access</h3><p>Connect users, direct assignments, inherited roles, permissions, account status, and review history into one effective-access model.</p></article>
    <article><span>02</span><h3>Define incompatible capabilities</h3><p>Translate business-process risks into permission-level rules such as creating a vendor and approving its payment.</p></article>
    <article><span>03</span><h3>Evaluate the population</h3><p>Test every user against the rule library while separately evaluating privileged, dormant, shared, and terminated accounts.</p></article>
    <article><span>04</span><h3>Explain the path</h3><p>Show the user, assigned roles, effective permissions, and precise combination that generated the exception.</p></article>
    <article><span>05</span><h3>Test remediation</h3><p>Simulate role removal to determine whether the proposed change resolves the conflict without assuming that any single role is unnecessary.</p></article>
    <article><span>06</span><h3>Validate before concluding</h3><p>Confirm production applicability, business need, activity, compensating controls, and evidence before reporting a control issue.</p></article>
  </div>
</section>

<section class="ace-outcomes">
  <div class="ace-outcomes__statement"><span>What this demonstrates</span><strong>Full-population testing.<br>Explainable risk.<br>Practical remediation.</strong></div>
  <div class="ace-outcomes__list">
    <div><span>01</span><p>Model many-to-many relationships across users, roles, and permissions.</p></div>
    <div><span>02</span><p>Convert control objectives into repeatable analytical tests.</p></div>
    <div><span>03</span><p>Prioritize exceptions without treating every technical match as a finding.</p></div>
    <div><span>04</span><p>Connect analytical output to investigation and remediation decisions.</p></div>
  </div>
</section>

<section class="ace-suite">
  <div class="ace-section-heading ace-section-heading--split"><div><p class="ace-eyebrow ace-eyebrow--dark">Audit Innovation Lab</p><h2>Three views of modern assurance.</h2></div><p>The lab now includes three completed synthetic applications spanning access analytics, fraud-oriented relationship analysis, and audit evidence judgment.</p></div>
  <div class="ace-suite-grid">
    <article class="is-current"><small>Available now</small><span>01</span><h3>Access Conflict Explorer</h3><p>Trace users through roles and permissions, explain segregation-of-duties conflicts, and test remediation.</p></article>
    <article><small>Available now</small><span>02</span><h3>Vendor Relationship Intelligence</h3><p>Connect vendors, employees, bank accounts, addresses, approvals, and payments into investigation-ready risk signals.</p></article>
    <article><small>Available now</small><span>03</span><h3>Control Evidence Lab</h3><p>Distinguish process steps from controls and evaluate whether retained evidence supports a defensible conclusion.</p></article>
  </div>
</section>

<section class="ace-note"><strong>Portfolio demonstration</strong><p>All names, assignments, roles, permissions, conflicts, and account attributes are synthetic. The application illustrates an audit approach and is not connected to a production identity or ERP environment.</p></section>

<section class="ace-final">
  <p class="ace-eyebrow">Audit Innovation Lab</p>
  <h2>Trace the access.<br>Explain the risk.</h2>
  <div><a class="ace-link ace-link--light" href="/audit-impact/">View applied audit impact <span>↗</span></a><a class="ace-link ace-link--light" href="/audit-intelligence/">View the full lab <span>↗</span></a></div>
</section>

</article>

<script src="{{ '/assets/js/access-conflict-explorer.js' | relative_url }}" defer></script>