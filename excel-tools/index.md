---
title: "Excel Audit Tools"
layout: default
permalink: /excel-tools/
---

{% include analytics.html %}

<nav class="topnav topnav--header" aria-label="Primary">
  <a href="/">
    <img class="navicon" src="/assets/icons/home.svg" alt="" aria-hidden="true">
    Home
  </a>

  <a href="/excel-tools/">
    <img class="navicon" src="/assets/icons/excel.svg" alt="" aria-hidden="true">
    Excel Tools
  </a>

  <a href="/audit-analytics/">
    <img class="navicon" src="/assets/icons/power_bi.svg" alt="" aria-hidden="true">
    Audit Analytics
  </a>

  <a href="/sql-projects/">
    <img class="navicon" src="/assets/icons/SQL_2025.svg" alt="" aria-hidden="true">
    SQL Projects
  </a>

  <a href="/ai-audit-assistant/">
    <img class="navicon" src="/assets/icons/copilot.svg" alt="" aria-hidden="true">
    AI Assistant
  </a>

  <a href="/about/">
    <img class="navicon" src="/assets/icons/info.svg" alt="" aria-hidden="true">
    About
  </a>
</nav>

<section class="hero">
  <p class="kicker">Excel Audit Tools</p>

  <p class="lede">
    Custom Excel-based tools designed to standardize audit documentation,
    reduce manual fieldwork, and improve review clarity.
  </p>

  <div class="stack">
    <span class="pill">Excel</span>
    <span class="pill">VBA</span>
    <span class="pill">Ribbon XML</span>
    <span class="pill">Audit Documentation</span>
    <span class="pill">Process Standardization</span>
  </div>
</section>

<hr class="sep" />

## Excel Add-In: Tickmark Tool

<div class="card">
  <div class="card__header">
    <h3 class="card__title">Audit Tickmark Excel Add-In</h3>
    <div class="card__meta">Excel <code>.xlam</code> • VBA • Ribbon XML</div>
  </div>

  <p><strong>Problem</strong><br/>
  Audit documentation is often inconsistent across workpapers, and inserting tickmarks,
  legends, and annotations is repetitive and time-consuming.</p>

  <p><strong>Approach</strong><br/>
  Built a custom Excel add-in with a ribbon-based interface to insert standardized
  tickmarks, annotations, legends, and references with one click.</p>

  <p><strong>Audit value</strong><br/>
  Faster fieldwork, consistent notation, and improved reviewer experience.</p>

  <p><strong>Status</strong><br/>
  Not publicly available yet. I’m gauging demand — feel free to reach out via
  <a href="https://www.linkedin.com/in/colby-k/" target="_blank" rel="noopener">LinkedIn</a>.</p>

  <p class="cta-row">
    <a class="btn btn--ghost" href="/assets/img/Tickmark%20User%20Guide.png" target="_blank" rel="noopener">
      View user guide
    </a>
  </p>

  <div class="media">
    <img src="/assets/img/excel_addin.png" alt="Audit tickmark Excel add-in screenshot">
    <p class="caption">Ribbon-based tickmarks, annotations, and audit documentation helpers.</p>
  </div>
</div>

<div class="card">
  <h3 class="card__title">Key Features</h3>

  <ul class="bullets">
    <li><strong>One-click tickmarks</strong> — ✔ ✘ Δ ≠ ≈ ∅ ⚠ ⓘ ∂ ∞ (in-cell or floating)</li>
    <li><strong>Indexing tools</strong> — Roman numerals, circled/filled letters and numbers, page indicators</li>
    <li><strong>Formatting helpers</strong> — consistent symbol colors, alignment, and grid tools</li>
    <li><strong>Tie-out abbreviations</strong> — TB, GL, FS, BS, IS, CF, PY, PM, SF, CR, RC (with direction)</li>
    <li><strong>Annotations</strong> — callouts, red boxes, arrows, highlights, post-it notes</li>
    <li><strong>Legends & references</strong> — drop-in legends, IIA standards links, sampling guidance</li>
  </ul>
</div>

<div class="card">
  <h3 class="card__title">Technical Notes</h3>

  <ul class="bullets">
    <li>Built entirely in <strong>VBA</strong> with a modular architecture</li>
    <li>Custom <strong>Ribbon XML</strong> for UI controls and callbacks</li>
    <li>Ships as a single <code>.xlam</code> file</li>
    <li>Targets modern Office builds with <strong>Segoe UI Symbol</strong> coverage</li>
  </ul>
</div>

<hr class="sep" />

## Risk Assessment Matrix (Excel Template)

<div class="card">
  <div class="card__header">
    <h3 class="card__title">Risk Assessment Matrix</h3>
    <div class="card__meta">Excel • Risk scoring • Heatmap visualization</div>
  </div>

  <p><strong>Problem</strong><br/>
  Risk scoring can vary significantly between audits and is often difficult to
  summarize clearly for planning and reporting.</p>

  <p><strong>Approach</strong><br/>
  Developed a configurable Excel template with customizable risk factors,
  weighted scoring, and an automatic heatmap.</p>

  <p><strong>Audit value</strong><br/>
  More consistent risk prioritization and clearer communication with stakeholders.</p>

  <p class="cta-row">
    <a class="btn" href="/assets/files/Risk_Assessment_Template.xlsx">
      Download template
    </a>
  </p>

  <div class="media">
    <img src="/assets/img/Risk_Assessment.png" alt="Risk assessment matrix screenshot">
    <p class="caption">Configurable risk factors with an at-a-glance heatmap.</p>
  </div>
</div>
