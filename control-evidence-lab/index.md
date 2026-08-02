---
title: "Control Evidence Lab"
layout: default
permalink: /control-evidence-lab/
description: "An interactive internal-audit application for evaluating whether a claimed control is testable, appropriately designed, implemented, and supported by sufficient evidence."
page_css: "/assets/css/control-evidence-lab.css"
---

<article class="cel-page">

<section class="cel-hero">
  <div class="cel-hero__copy">
    <p class="cel-eyebrow">Audit Innovation Lab · Evidence judgment</p>
    <h1>Do the facts support <em>the conclusion?</em></h1>
    <p class="cel-hero__lede">The Control Evidence Lab separates process activity from control design, inquiry from retained evidence, and implementation from operating effectiveness—making the auditor’s reasoning visible.</p>
    <div class="cel-hero__actions">
      <a class="cel-link cel-link--light" href="#evidence-lab">Open the lab <span>↓</span></a>
      <a class="cel-link cel-link--light" href="#methodology">Review the framework <span>↗</span></a>
    </div>
  </div>
  <div class="cel-hero__visual" aria-label="Risk, control, evidence, and conclusion relationship preview">
    <div class="cel-hero-model">
      <div class="cel-hero-model__bar"><span></span><span></span><span></span><small>Control evaluation · Design and evidence</small></div>
      <svg viewBox="0 0 780 500" role="img" aria-label="A risk connected to a claimed control, evidence artifacts, and an audit conclusion">
        <defs><filter id="celGlow"><feGaussianBlur stdDeviation="5" result="blur"/><feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge></filter></defs>
        <g class="cel-hero-model__edges"><path d="M115 250H285"/><path d="M425 250H590"/><path d="M355 180V95"/><path d="M355 320V408"/><path d="M635 250H720"/></g>
        <g class="cel-hero-model__node cel-hero-model__node--risk"><circle cx="88" cy="250" r="58"/><text x="88" y="245">RISK</text><text x="88" y="265">EVENT</text></g>
        <g class="cel-hero-model__node cel-hero-model__node--control"><rect x="285" y="185" width="140" height="130" rx="4"/><text x="355" y="240">CLAIMED</text><text x="355" y="263">CONTROL</text></g>
        <g class="cel-hero-model__node cel-hero-model__node--evidence"><circle cx="355" cy="72" r="48"/><text x="355" y="68">RETAINED</text><text x="355" y="86">EVIDENCE</text></g>
        <g class="cel-hero-model__node cel-hero-model__node--procedure"><circle cx="355" cy="432" r="48"/><text x="355" y="428">AUDIT</text><text x="355" y="446">PROCEDURE</text></g>
        <g class="cel-hero-model__node cel-hero-model__node--judgment"><rect x="590" y="185" width="130" height="130" rx="65" filter="url(#celGlow)"/><text x="655" y="240">SUPPORTABLE</text><text x="655" y="263">JUDGMENT?</text></g>
      </svg>
      <div class="cel-hero-model__status"><span></span><small>Current conclusion</small><strong>Evidence gap identified</strong></div>
    </div>
  </div>
</section>

<section class="cel-facts" aria-label="Project facts">
  <div><small>Decision</small><strong>Is the control conclusion supportable?</strong></div>
  <div><small>Focus</small><strong>Design + implementation</strong></div>
  <div><small>Interaction</small><strong>Assess + assemble evidence</strong></div>
  <div><small>Data</small><strong>Synthetic audit scenarios</strong></div>
</section>

<section class="cel-statement">
  <p class="cel-eyebrow cel-eyebrow--dark">The audit problem</p>
  <h2>An activity can sound like a control and still be impossible to test.</h2>
  <p>Inquiry may establish that someone describes a review. It does not, by itself, establish the criteria applied, the evidence retained, the exceptions resolved, or whether the activity operated throughout the period.</p>
</section>

<section id="evidence-lab" class="cel-lab-section">
  <div class="cel-section-heading cel-section-heading--split">
    <div><p class="cel-eyebrow">Interactive evaluation</p><h2>Build the supportable conclusion.</h2></div>
    <p>Select an audit scenario, assess the claimed control, choose the available evidence, and observe how the design and evidence conclusions change.</p>
  </div>

  <div class="cel-app" data-control-evidence-app>
    <header class="cel-app__header">
      <div><small>Engagement scenario</small><strong data-scenario-title>Payroll master-data changes</strong></div>
      <div class="cel-app__header-actions">
        <label><span class="sr-only">Select audit scenario</span><select data-scenario-select></select></label>
        <button type="button" class="cel-button cel-button--secondary" data-action="reset">Reset scenario</button>
        <button type="button" class="cel-button" data-action="review-note">Generate review note</button>
      </div>
    </header>

    <section class="cel-kpis" aria-label="Evaluation summary">
      <article><small>Control classification</small><strong data-kpi="classification">—</strong><span data-kpi-detail="classification">—</span></article>
      <article><small>Design assessment</small><strong data-kpi="design">—</strong><span data-kpi-detail="design">—</span></article>
      <article><small>Evidence support</small><strong data-kpi="evidence">—</strong><span data-kpi-detail="evidence">—</span></article>
      <article><small>Supportable conclusion</small><strong data-kpi="conclusion">—</strong><span data-kpi-detail="conclusion">—</span></article>
    </section>

    <nav class="cel-tabs" aria-label="Control evidence lab views">
      <button type="button" class="is-active" data-tab="design">Control design</button>
      <button type="button" data-tab="evidence">Evidence lab</button>
      <button type="button" data-tab="trace">Audit trace</button>
    </nav>

    <section class="cel-view is-active" data-view="design">
      <div class="cel-design-layout">
        <aside class="cel-scenario-panel">
          <div class="cel-panel-heading"><div><small>Scenario</small><h3>Understand the claim</h3></div></div>
          <div class="cel-scenario-content" data-scenario-summary></div>
        </aside>

        <section class="cel-design-panel">
          <div class="cel-panel-heading cel-panel-heading--split"><div><small>Design criteria</small><h3>Is this a defined, repeatable control?</h3></div><p>Rate each element as missing, partial, or clear. The calculation is transparent and can be challenged.</p></div>
          <div class="cel-criteria-grid" data-criteria-grid></div>
        </section>

        <aside class="cel-conclusion-panel">
          <div class="cel-panel-heading"><div><small>Current judgment</small><h3>Design conclusion</h3></div></div>
          <div class="cel-conclusion-content" data-design-conclusion></div>
        </aside>
      </div>
    </section>

    <section class="cel-view" data-view="evidence" hidden>
      <div class="cel-evidence-layout">
        <section class="cel-evidence-panel">
          <div class="cel-panel-heading cel-panel-heading--split"><div><small>Evidence inventory</small><h3>What is actually available?</h3></div><p>Select the artifacts available to the auditor. Stronger evidence is relevant, reliable, traceable, and sufficiently broad for the conclusion being made.</p></div>
          <div class="cel-evidence-grid" data-evidence-grid></div>
        </section>
        <aside class="cel-evidence-score-panel">
          <div class="cel-panel-heading"><div><small>Evidence profile</small><h3>Sufficiency dimensions</h3></div></div>
          <div class="cel-evidence-score" data-evidence-score></div>
        </aside>
      </div>
      <div class="cel-test-one">
        <div class="cel-panel-heading cel-panel-heading--split"><div><small>Implementation validation</small><h3>Test of one: what must be demonstrated?</h3></div><p>A single instance may support design and implementation. It does not establish operating effectiveness throughout the period.</p></div>
        <div class="cel-test-one__steps" data-test-one></div>
      </div>
    </section>

    <section class="cel-view" data-view="trace" hidden>
      <div class="cel-trace-layout">
        <section class="cel-trace-panel">
          <div class="cel-panel-heading cel-panel-heading--split"><div><small>Reasoning chain</small><h3>Trace the conclusion to its support.</h3></div><p>Every conclusion should connect back to the risk, control objective, control activity, retained evidence, and audit procedure.</p></div>
          <div class="cel-trace-canvas" data-trace-canvas></div>
        </section>
        <aside class="cel-boundary-panel">
          <div class="cel-panel-heading"><div><small>Conclusion boundary</small><h3>What can be said?</h3></div></div>
          <div data-conclusion-boundary></div>
        </aside>
      </div>
    </section>

    <footer class="cel-app__footer"><strong>Audit principle</strong><p>A documented activity is not automatically a control, a screenshot is not automatically sufficient evidence, and a test of one is not operating-effectiveness testing.</p></footer>
  </div>
</section>

<section id="methodology" class="cel-methodology">
  <div class="cel-section-heading cel-section-heading--split"><div><p class="cel-eyebrow cel-eyebrow--dark">Evaluation framework</p><h2>Keep four audit questions separate.</h2></div><p>Blurring these questions creates unsupported conclusions and unnecessary rework during review.</p></div>
  <div class="cel-method-grid">
    <article><span>01</span><h3>Is it a control?</h3><p>Determine whether the activity has a defined objective, performer, frequency, criteria, evidence, and exception process.</p></article>
    <article><span>02</span><h3>Is it designed appropriately?</h3><p>Evaluate whether the activity, if performed as described, is capable of addressing the stated risk.</p></article>
    <article><span>03</span><h3>Is it implemented?</h3><p>Inspect a real instance and corroborating evidence to establish that the designed activity exists in practice.</p></article>
    <article><span>04</span><h3>Did it operate effectively?</h3><p>Test a defined population and period using procedures sufficient to support an operating-effectiveness conclusion.</p></article>
  </div>
</section>

<section class="cel-evidence-spectrum">
  <div class="cel-section-heading"><p class="cel-eyebrow cel-eyebrow--dark">Evidence spectrum</p><h2>Different evidence supports different claims.</h2></div>
  <div class="cel-spectrum">
    <div><small>Inquiry</small><strong>Understand the process</strong><span>Useful context; limited corroboration</span></div>
    <div><small>Observation</small><strong>See an activity occur</strong><span>Point-in-time and potentially influenced</span></div>
    <div><small>Inspection</small><strong>Examine retained evidence</strong><span>Traceable to a specific instance</span></div>
    <div><small>Reperformance</small><strong>Independently validate</strong><span>Strong support for the tested instance</span></div>
  </div>
</section>

<section class="cel-note"><strong>Portfolio demonstration</strong><p>All scenarios, control descriptions, ratings, evidence artifacts, and conclusions are synthetic. The application illustrates an audit reasoning framework and does not replace engagement-specific criteria, sampling, supervision, or professional judgment.</p></section>

<section class="cel-final">
  <p class="cel-eyebrow">Audit Innovation Lab</p>
  <h2>See the risk.<br>Trace the evidence.</h2>
  <div><a class="cel-link cel-link--light" href="/audit-intelligence/">Explore the full lab <span>↗</span></a><a class="cel-link cel-link--light" href="/audit-impact/">View applied audit impact <span>↗</span></a></div>
</section>

<dialog class="cel-dialog" data-review-dialog>
  <button type="button" class="cel-dialog__close" data-dialog-close aria-label="Close review note">×</button>
  <div data-review-note></div>
</dialog>

</article>

<script src="{{ '/assets/js/control-evidence-lab.js' | relative_url }}" defer></script>
