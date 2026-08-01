---
title: "Vendor Relationship Intelligence"
layout: default
permalink: /vendor-relationship-intelligence/
description: "An interactive audit investigation application that connects vendors, employees, bank accounts, addresses, master-data changes, and payments to explain relationship and fraud-risk signals."
page_css: "/assets/css/vendor-relationship-intelligence.css"
---

<article class="vri-page">
<section class="vri-hero">
  <div class="vri-hero__copy">
    <p class="vri-eyebrow">Audit Intelligence Lab · Relationship analytics</p>
    <h1>Find the relationships hidden <em>between systems.</em></h1>
    <p class="vri-hero__lede">Vendor Relationship Intelligence combines vendor master data, employee records, bank accounts, addresses, change history, approvals, and payments to surface explainable audit signals across a complete synthetic population.</p>
    <div class="vri-hero__actions">
      <a class="vri-link vri-link--light" href="#investigation-lab">Open the investigation <span>↓</span></a>
      <a class="vri-link vri-link--light" href="#methodology">Review the audit logic <span>↗</span></a>
    </div>
  </div>
  <div class="vri-hero__visual" aria-label="Vendor relationship investigation preview">
    <div class="vri-preview">
      <div class="vri-preview__bar"><span></span><span></span><span></span><small>Northstar Holdings · Vendor Investigation</small></div>
      <svg viewBox="0 0 760 470" role="img" aria-label="A vendor connected to an employee, bank account, address, related vendor, and payment activity">
        <defs><filter id="vriGlow"><feGaussianBlur stdDeviation="5" result="b"/><feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge></filter></defs>
        <g class="vri-preview__lines"><line x1="382" y1="236" x2="185" y2="116"/><line x1="382" y1="236" x2="585" y2="112"/><line x1="382" y1="236" x2="165" y2="360"/><line x1="382" y1="236" x2="596" y2="355"/><line x1="585" y1="112" x2="684" y2="225"/></g>
        <g class="vri-preview__risk-lines"><line x1="382" y1="236" x2="185" y2="116"/><line x1="585" y1="112" x2="684" y2="225"/></g>
        <g class="vri-preview__node vri-preview__node--vendor"><circle cx="382" cy="236" r="76"/><text x="382" y="224">VENDOR</text><text x="382" y="250">Apex Field</text><text x="382" y="270">Services</text></g>
        <g class="vri-preview__node vri-preview__node--employee"><circle cx="185" cy="116" r="50"/><text x="185" y="108">EMPLOYEE</text><text x="185" y="130">Avery Morgan</text></g>
        <g class="vri-preview__node vri-preview__node--bank"><circle cx="585" cy="112" r="50"/><text x="585" y="106">BANK</text><text x="585" y="128">•••• 8842</text></g>
        <g class="vri-preview__node vri-preview__node--address"><circle cx="165" cy="360" r="47"/><text x="165" y="354">ADDRESS</text><text x="165" y="376">Lehi, UT</text></g>
        <g class="vri-preview__node vri-preview__node--payment"><circle cx="596" cy="355" r="50"/><text x="596" y="348">PAYMENTS</text><text x="596" y="370">$284,600</text></g>
        <g class="vri-preview__node vri-preview__node--related"><circle cx="684" cy="225" r="46"/><text x="684" y="219">VENDOR</text><text x="684" y="241">Summit Maint.</text></g>
        <g class="vri-preview__badges"><rect x="255" y="78" width="112" height="30"/><text x="311" y="98">Shared address</text><rect x="612" y="154" width="112" height="30"/><text x="668" y="174">Shared bank</text></g>
      </svg>
      <div class="vri-preview__summary"><small>Case risk</small><strong>94</strong><span>7 explainable signals</span></div>
    </div>
  </div>
</section>

<section class="vri-facts" aria-label="Project facts">
  <div><small>Approach</small><strong>Full-population relationship testing</strong></div>
  <div><small>Data model</small><strong>Seven connected datasets</strong></div>
  <div><small>Output</small><strong>Investigation-ready case view</strong></div>
  <div><small>Data</small><strong>Synthetic demonstration population</strong></div>
</section>

<section class="vri-statement">
  <p class="vri-eyebrow vri-eyebrow--dark">The audit problem</p>
  <h2>Each record can look reasonable until the relationships are evaluated together.</h2>
  <p>Vendor risk often sits across systems: one address in HR, a bank account in the vendor master, a change event in workflow logs, and payment activity in the general ledger. The application connects those records and shows why a vendor warrants additional procedures.</p>
</section>

<section id="investigation-lab" class="vri-lab-section">
  <div class="vri-section-heading vri-section-heading--split">
    <div><p class="vri-eyebrow">Interactive investigation</p><h2>Move from population to case.</h2></div>
    <p>Select a vendor, inspect its relationships, trace master-data and payment events, and review the specific audit procedures suggested by each signal.</p>
  </div>

  <div class="vri-app" data-vendor-intelligence>
    <header class="vri-app__header">
      <div><small>Demonstration company</small><strong>Northstar Holdings</strong></div>
      <div class="vri-app__header-meta"><span><b data-population-count>—</b> vendors tested</span><span><b data-signal-count>—</b> signals identified</span></div>
    </header>

    <div class="vri-kpis" aria-label="Population summary">
      <article><small>Vendors tested</small><strong data-kpi="vendors">—</strong><span>Complete synthetic population</span></article>
      <article><small>High-risk vendors</small><strong data-kpi="highRisk">—</strong><span>Risk score of 70 or greater</span></article>
      <article><small>Connected employees</small><strong data-kpi="employees">—</strong><span>Direct or shared-attribute links</span></article>
      <article><small>Payments evaluated</small><strong data-kpi="payments">—</strong><span data-kpi-detail="payments">—</span></article>
    </div>

    <div class="vri-app__layout">
      <aside class="vri-sidebar">
        <div class="vri-sidebar__heading"><div><small>Risk-ranked population</small><h3>Vendors</h3></div><span data-visible-vendors>—</span></div>
        <div class="vri-filters">
          <label><span class="sr-only">Search vendors</span><input type="search" data-filter="search" placeholder="Search vendor or category"></label>
          <label><span class="sr-only">Filter risk</span><select data-filter="risk"><option value="">All risk levels</option><option value="critical">Critical</option><option value="high">High</option><option value="moderate">Moderate</option><option value="lower">Lower</option></select></label>
        </div>
        <div class="vri-vendor-list" data-vendor-list></div>
      </aside>

      <main class="vri-workspace">
        <nav class="vri-tabs" aria-label="Investigation views">
          <button type="button" class="is-active" data-tab="relationships">Relationship map</button>
          <button type="button" data-tab="timeline">Change timeline</button>
          <button type="button" data-tab="transactions">Transactions</button>
          <button type="button" data-tab="population">Population results</button>
        </nav>

        <section class="vri-view is-active" data-view="relationships">
          <div class="vri-relationship-layout">
            <article class="vri-panel vri-panel--graph">
              <div class="vri-panel__heading"><div><small>Connected data</small><h3 data-selected-title>Vendor relationship map</h3></div><div class="vri-graph-key"><span><i class="is-risk"></i>Risk connection</span><span><i></i>Context</span></div></div>
              <div class="vri-graph" data-relationship-graph></div>
            </article>
            <aside class="vri-case" data-case-panel></aside>
          </div>
        </section>

        <section class="vri-view" data-view="timeline" hidden>
          <article class="vri-panel">
            <div class="vri-panel__heading vri-panel__heading--split"><div><small>Sequence analysis</small><h3>Master-data and payment timeline</h3></div><p>Timing can turn an otherwise ordinary change into an audit signal.</p></div>
            <div class="vri-timeline" data-timeline></div>
          </article>
        </section>

        <section class="vri-view" data-view="transactions" hidden>
          <article class="vri-panel">
            <div class="vri-panel__heading vri-panel__heading--split"><div><small>Transaction drill-through</small><h3>Payments and invoices</h3></div><p>Analytical signals identify where additional evidence should be obtained; they do not establish error or fraud.</p></div>
            <div class="vri-table-wrap"><table class="vri-table"><thead><tr><th>Date</th><th>Invoice</th><th>Amount</th><th>Approver</th><th>Timing</th><th>Signals</th></tr></thead><tbody data-transactions></tbody></table></div>
          </article>
        </section>

        <section class="vri-view" data-view="population" hidden>
          <article class="vri-panel">
            <div class="vri-panel__heading vri-panel__heading--split"><div><small>Complete population</small><h3>Vendor risk results</h3></div><p>Every score is traceable to defined relationships, timing patterns, and master-data conditions.</p></div>
            <div class="vri-table-wrap"><table class="vri-table"><thead><tr><th>Vendor</th><th>Category</th><th>Total paid</th><th>Relationships</th><th>Signals</th><th>Risk score</th></tr></thead><tbody data-population></tbody></table></div>
          </article>
        </section>
      </main>
    </div>

    <footer class="vri-app__footer"><strong>Audit boundary</strong><p>A match or pattern is a risk signal—not an audit conclusion. Validation requires source records, ownership inquiry, authorization evidence, business-purpose evaluation, and appropriate follow-up testing.</p></footer>
  </div>
</section>

<section id="methodology" class="vri-methodology">
  <div class="vri-section-heading vri-section-heading--split"><div><p class="vri-eyebrow vri-eyebrow--dark">Audit methodology</p><h2>Explain the signal before investigating the exception.</h2></div><p>The application separates analytical detection from audit validation and keeps the evidence path visible.</p></div>
  <div class="vri-method-grid">
    <article><span>01</span><h3>Normalize identities</h3><p>Standardize addresses, phones, email domains, bank accounts, and tax identifiers before testing relationships.</p></article>
    <article><span>02</span><h3>Connect records</h3><p>Link vendors to employees, related vendors, master-data events, approvers, and transactions across source systems.</p></article>
    <article><span>03</span><h3>Apply defined tests</h3><p>Evaluate shared attributes, duplicate identifiers, timing, threshold behavior, inactivity, and access concentration.</p></article>
    <article><span>04</span><h3>Explain each result</h3><p>Show the exact records and event sequence that caused the vendor to be flagged.</p></article>
    <article><span>05</span><h3>Plan validation</h3><p>Translate each signal into specific evidence requests and audit procedures.</p></article>
    <article><span>06</span><h3>Preserve judgment</h3><p>Distinguish a valid business relationship, a data-quality issue, a control exception, and potential misconduct.</p></article>
  </div>
</section>

<section class="vri-next">
  <p class="vri-eyebrow">Audit Intelligence Lab</p>
  <h2>Relationships create the lead.<br>Evidence determines the conclusion.</h2>
  <div><a class="vri-link vri-link--light" href="/access-conflict-explorer/">Explore access analytics <span>↗</span></a><a class="vri-link vri-link--light" href="/audit-intelligence/">View the lab <span>↗</span></a></div>
</section>

<script src="{{ '/assets/js/vendor-relationship-intelligence.js' | relative_url }}" defer></script>
</article>
