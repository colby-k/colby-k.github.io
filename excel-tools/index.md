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
    <img class="navicon" src="/assets/icons/chatgpt.svg" alt="" aria-hidden="true">
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

## Excel Add-In: AuditTicks Pro

<div class="card">
  <div class="card__header">
    <div>
      <h3 class="card__title">AuditTicks Pro</h3>
      <div class="card__meta">Excel <code>.xlam</code> • VBA • Ribbon XML • Audit Documentation</div>
    </div>

    <img
      src="/assets/img/AuditTicksPro_Icon.png"
      alt="AuditTicks Pro icon"
      style="width:72px;height:72px;object-fit:contain;margin-left:16px;"
    />
  </div>

  <p><strong>Purpose</strong><br/>
  AuditTicks Pro is a custom Excel add-in designed to make audit workpapers faster,
  cleaner, and more consistent by standardizing tickmarks, references, annotations,
  review notes, and workpaper formatting from a dedicated Excel ribbon.</p>

  <p><strong>Problem</strong><br/>
  Audit documentation often becomes inconsistent across workpapers because tickmarks,
  legends, references, formatting, annotations, and review notes are inserted manually
  or recreated from file to file. This creates avoidable rework and makes review less efficient.</p>

  <p><strong>Approach</strong><br/>
  Built a ribbon-based Excel add-in using VBA and custom Ribbon XML. The add-in provides
  one-click access to standardized audit tickmarks, tie-out references, workpaper templates,
  review tools, gridline utilities, annotations, and formatting helpers.</p>

  <p><strong>Audit value</strong><br/>
  AuditTicks Pro helps reduce manual formatting, improve workpaper consistency,
  accelerate fieldwork documentation, and make reviewer navigation clearer.</p>

  <p><strong>Status</strong><br/>
  In active development. The add-in is not publicly available yet, but this page will be
  used to share updates, screenshots, documentation, and future availability information.</p>

  <p class="cta-row">
    <a class="btn btn--ghost" href="/assets/img/Tickmark%20User%20Guide.png" target="_blank" rel="noopener">
      View user guide
    </a>

    <a class="btn btn--ghost" href="https://www.linkedin.com/in/colby-k/" target="_blank" rel="noopener">
      Contact on LinkedIn
    </a>
  </p>

  <div class="media">
    <img src="/assets/img/AuditTicksPro_Ribbon.png" alt="AuditTicks Pro Excel ribbon screenshot">
    <p class="caption">Ribbon-based tickmarks, annotations, references, review tools, and workpaper formatting helpers.</p>
  </div>
</div>

<div class="card">
  <h3 class="card__title">Key Features</h3>

  <ul class="bullets">
    <li><strong>Standardized tickmarks</strong> — insert common audit symbols in-cell or as floating worksheet objects</li>
    <li><strong>Symbol catalog</strong> — checkmarks, exceptions, recalculation marks, references, flags, warnings, notes, and miscellaneous audit symbols</li>
    <li><strong>Tie-out abbreviations</strong> — TB, GL, FS, BS, IS, CF, PY, PM, SF, CR, RC, and directional reference variants</li>
    <li><strong>Reference tools</strong> — Roman numerals, circled letters, circled numbers, filled references, and page indicators</li>
    <li><strong>Annotation tools</strong> — callouts, red boxes, arrows, highlights, post-it notes, and explanation markers</li>
    <li><strong>Review tools</strong> — checklist support, review note structures, and workpaper review formatting helpers</li>
    <li><strong>Template tools</strong> — prebuilt workpaper sections for summary, support, notes, and audit documentation layouts</li>
    <li><strong>Formatting utilities</strong> — gridline tools, slashed cells, row/column insertion helpers, color controls, and alignment utilities</li>
    <li><strong>Guide links</strong> — quick access to selected audit guidance and reference materials</li>
  </ul>
</div>

<div class="card">
  <h3 class="card__title">Technical Notes</h3>

  <ul class="bullets">
    <li>Built as an Excel <code>.xlam</code> add-in</li>
    <li>Developed primarily in <strong>VBA</strong> with modularized procedures and reusable helper functions</li>
    <li>Uses custom <strong>Ribbon XML</strong> for the add-in interface, buttons, dropdowns, split buttons, icons, screentips, and callbacks</li>
    <li>Includes custom icon assets designed for Excel ribbon use</li>
    <li>Designed around audit documentation workflows, workpaper consistency, and reviewer usability</li>
    <li>Targets modern Microsoft Excel desktop builds</li>
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
