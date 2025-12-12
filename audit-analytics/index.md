---
title: "Audit Analytics"
layout: default
permalink: /audit-analytics/
---

{% include analytics.html %}

<nav class="topnav" aria-label="Primary">
  <a href="/">Home</a>
  <a href="/excel-tools/">Excel Tools</a>
  <a href="/audit-analytics/">Audit Analytics</a>
  <a href="/sql-projects/">SQL Projects</a>
  <a href="/ai-audit-assistant/">AI Assistant</a>
  <a href="/about/">About</a>
</nav>

<section class="hero">
  <p class="kicker">Audit Analytics</p>

  <p class="lede">
    Risk-focused analytics and applications designed to improve audit coverage,
    identify anomalies, and support data-driven audit decisions.
  </p>

  <div class="stack">
    <span class="pill">Power BI</span>
    <span class="pill">DAX</span>
    <span class="pill">Python</span>
    <span class="pill">Streamlit</span>
    <span class="pill">Statistical Testing</span>
  </div>
</section>

<hr class="sep" />

## Power BI Dashboards

<div class="card">
  <h3 class="card__title">Vendor Payments Monitoring</h3>
  <div class="card__meta">Power BI • Risk analytics</div>

  <p><strong>Problem</strong><br/>
  High-volume vendor payments make it difficult to identify duplicate, split, or unusual transactions.</p>

  <p><strong>Approach</strong><br/>
  Built a risk-focused dashboard highlighting payment patterns, vendor behavior, and anomalies for targeted testing.</p>

  <p><strong>Audit value</strong><br/>
  Enables focused audit testing and continuous monitoring of high-risk transactions.</p>

  <p class="cta-row">
    <a class="btn" href="https://app.powerbi.com/view?r=eyJrIjoiZjAwNDg2NmItOTRjYy00NmYxLWIyYmUtMDBiZmU0OTBmZGNiIiwidCI6ImRmODY3OWNkLWE4MGUtNDVkOC05OWFjLWM4M2VkN2ZmOTVhMCJ9" target="_blank" rel="noopener">Open dashboard</a>
  </p>

  <div class="media">
    <img src="/assets/img/vendor_pmts_solution1.png" alt="Vendor payments dashboard screenshot">
  </div>
</div>

<div class="card">
  <h3 class="card__title">Internal Audit Issue Tracker</h3>
  <div class="card__meta">Power BI • Issue management</div>

  <p><strong>Problem</strong><br/>
  Tracking open issues and management action plans across audits can be fragmented and manual.</p>

  <p><strong>Approach</strong><br/>
  Centralized issue tracking with status, aging, and ownership views.</p>

  <p><strong>Audit value</strong><br/>
  Improves follow-up discipline and management reporting.</p>

  <p class="cta-row">
    <a class="btn" href="https://app.powerbi.com/view?r=eyJrIjoiNjY0YjI4NmYtNWJlNy00YWY4LThjMTctZjZlNDQ0ZmYzNDRkIiwidCI6ImRmODY3OWNkLWE4MGUtNDVkOC05OWFjLWM4M2VkN2ZmOTVhMCJ9&pageName=9692a08028aa212019c1" target="_blank" rel="noopener">Open dashboard</a>
  </p>

  <div class="media">
    <img src="/assets/img/issue_tracker.png" alt="Audit issue tracker dashboard screenshot">
  </div>
</div>

<details>
<summary><strong>View additional Power BI dashboards</strong></summary>

<br>

<div class="card">
  <h3 class="card__title">Adventure Works – Sales & Operations</h3>
  <div class="media">
    <img src="/assets/img/AdventureWorks.png" alt="Adventure Works dashboard">
  </div>
</div>

<div class="card">
  <h3 class="card__title">Property Management Dashboard</h3>
  <div class="media">
    <img src="/assets/img/property_management.png" alt="Property management dashboard">
  </div>
</div>

</details>

<hr class="sep" />

## Python Audit Apps (Streamlit)

<div class="card">
  <h3 class="card__title">Audit Sampling Tool</h3>
  <div class="card__meta">Python • Streamlit • Statistical sampling</div>

  <p><strong>Problem</strong><br/>
  Manual sampling is time-consuming and difficult to reproduce consistently.</p>

  <p><strong>Approach</strong><br/>
  Built an interactive sampling app with filtering, random selection, and exportable results.</p>

  <p><strong>Audit value</strong><br/>
  Reproducible, defensible samples for audit testing.</p>

  <p class="cta-row">
    <a class="btn" href="https://audit-sampling-tool.streamlit.app/" target="_blank" rel="noopener">Open app</a>
  </p>

  <div class="media">
    <img src="/assets/img/audit_sampling_tool.png" alt="Audit sampling app screenshot">
  </div>
</div>

<div class="card">
  <h3 class="card__title">Benford’s Law Audit Tool</h3>
  <div class="card__meta">Python • Streamlit • Fraud analytics</div>

  <p><strong>Problem</strong><br/>
  Large numeric datasets make it difficult to identify potential manipulation or anomalies.</p>

  <p><strong>Approach</strong><br/>
  Implemented Benford’s Law analysis with visual diagnostics and anomaly flagging.</p>

  <p><strong>Audit value</strong><br/>
  Rapid triage of high-risk datasets for further investigation.</p>

  <p class="cta-row">
    <a class="btn" href="https://benfords-law-audit-tool.streamlit.app" target="_blank" rel="noopener">Open app</a>
    <a class="btn btn--ghost" href="https://github.com/colby-k/benfords-law-audit-tool" target="_blank" rel="noopener">GitHub repo</a>
  </p>

  <div class="media">
    <img src="/assets/img/benfords_law.png" alt="Benford’s Law app screenshot">
  </div>
</div>

<div class="card">
  <h3 class="card__title">Fair Lending Analysis</h3>
  <div class="card__meta">Python • Streamlit • Statistical testing</div>

  <p><strong>Problem</strong><br/>
  Fair lending risk requires testing pricing and underwriting outcomes across borrower groups.</p>

  <p><strong>Approach</strong><br/>
  Built a simulator using synthetic data, interactive controls, and statistical analysis.</p>

  <p><strong>Audit value</strong><br/>
  Demonstrates potential disparate impact and supports compliance testing.</p>

  <p class="cta-row">
    <a class="btn" href="https://fair-lending-app-app.streamlit.app/" target="_blank" rel="noopener">Open app</a>
  </p>

  <div class="media">
    <img src="/assets/img/fair_lending_app.png" alt="Fair lending app screenshot">
  </div>
</div>
