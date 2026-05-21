---
title: "Audit Analytics"
layout: default
permalink: /audit-analytics/
description: "Audit analytics projects using Power BI, Python, Streamlit, and statistical testing to support risk-based auditing, exception analysis, monitoring, and audit testing."
---

{% include nav.html %}

<section class="hero">
  <p class="kicker">Audit Analytics</p>

  <p class="lede">
    Risk-focused analytics and applications designed to improve audit coverage,
    identify anomalies, support exception analysis, and strengthen data-driven audit decisions.
  </p>

  <div class="stack">
    <span class="pill">Power BI</span>
    <span class="pill">DAX</span>
    <span class="pill">Python</span>
    <span class="pill">Streamlit</span>
    <span class="pill">Statistical Testing</span>
  </div>
</section>

{% include demo-disclaimer.html %}

<hr class="sep" />

## Audit Monitoring Dashboards

<div class="card">
  <h3 class="card__title">Vendor Payments Monitoring</h3>
  <div class="card__meta">Power BI • Risk analytics • Interactive dashboard • Demo data</div>

  <p><strong>Problem</strong><br/>
  High-volume vendor payments make it difficult to identify duplicate, split, or unusual transactions.</p>

  <p><strong>Approach</strong><br/>
  Built a risk-focused dashboard highlighting payment patterns, vendor behavior, and anomalies for targeted testing.</p>

  <p><strong>Audit value</strong><br/>
  Enables focused audit testing and continuous monitoring of high-risk transactions.</p>

  <div class="powerbi-embed">
    <iframe
      title="Vendor Payments Monitoring Dashboard"
      src="https://app.powerbi.com/view?r=eyJrIjoiZjAwNDg2NmItOTRjYy00NmYxLWIyYmUtMDBiZmU0OTBmZGNiIiwidCI6ImRmODY3OWNkLWE4MGUtNDVkOC05OWFjLWM4M2VkN2ZmOTVhMCJ9"
      frameborder="0"
      allowfullscreen="true">
    </iframe>
  </div>

  <p class="caption">
    Embedded interactive Power BI report using demo data.
  </p>

  <p class="cta-row">
    <a class="btn btn--ghost" href="https://app.powerbi.com/view?r=eyJrIjoiZjAwNDg2NmItOTRjYy00NmYxLWIyYmUtMDBiZmU0OTBmZGNiIiwidCI6ImRmODY3OWNkLWE4MGUtNDVkOC05OWFjLWM4M2VkN2ZmOTVhMCJ9" target="_blank" rel="noopener">
      Open full report
    </a>
  </p>
</div>

<div class="card">
  <h3 class="card__title">Internal Audit Issue Tracker</h3>
  <div class="card__meta">Power BI • Issue management • Interactive dashboard • Demo data</div>

  <p><strong>Problem</strong><br/>
  Tracking open issues and management action plans across audits can be fragmented and manual.</p>

  <p><strong>Approach</strong><br/>
  Centralized issue tracking with status, aging, ownership, and follow-up views.</p>

  <p><strong>Audit value</strong><br/>
  Improves follow-up discipline, management reporting, and visibility into overdue or high-priority issues.</p>

  <div class="powerbi-embed">
    <iframe
      title="Internal Audit Issue Tracker Dashboard"
      src="https://app.powerbi.com/view?r=eyJrIjoiNjY0YjI4NmYtNWJlNy00YWY4LThjMTctZjZlNDQ0ZmYzNDRkIiwidCI6ImRmODY3OWNkLWE4MGUtNDVkOC05OWFjLWM4M2VkN2ZmOTVhMCJ9&pageName=9692a08028aa212019c1"
      frameborder="0"
      allowfullscreen="true">
    </iframe>
  </div>

  <p class="caption">
    Embedded interactive Power BI report using demo data.
  </p>

  <p class="cta-row">
    <a class="btn btn--ghost" href="https://app.powerbi.com/view?r=eyJrIjoiNjY0YjI4NmYtNWJlNy00YWY4LThjMTctZjZlNDQ0ZmYzNDRkIiwidCI6ImRmODY3OWNkLWE4MGUtNDVkOC05OWFjLWM4M2VkN2ZmOTVhMCJ9&pageName=9692a08028aa212019c1" target="_blank" rel="noopener">
      Open full report
    </a>
  </p>
</div>

<hr class="sep" />

## Audit Testing Applications

<div class="card">
  <h3 class="card__title">Audit Sampling Tool</h3>
  <div class="card__meta">Python • Streamlit • Statistical sampling</div>

  <p><strong>Problem</strong><br/>
  Manual sampling is time-consuming and difficult to reproduce consistently.</p>

  <p><strong>Approach</strong><br/>
  Built an interactive sampling app with filtering, random selection, and exportable results.</p>

  <p><strong>Audit value</strong><br/>
  Supports reproducible, defensible sample selection for audit testing.</p>

  <p class="cta-row">
    <a class="btn" href="https://audit-sampling-tool.streamlit.app/" target="_blank" rel="noopener">Open app</a>
  </p>

  <div class="media">
    <img src="/assets/img/audit_sampling_tool.png" alt="Audit sampling app screenshot">
  </div>
</div>

<div class="card">
  <h3 class="card__title">Benford’s Law Audit Tool</h3>
  <div class="card__meta">Python • Streamlit • Fraud analytics • Anomaly screening</div>

  <p><strong>Problem</strong><br/>
  Large numeric datasets make it difficult to identify potential manipulation, unusual patterns, or populations that may warrant additional review.</p>

  <p><strong>Approach</strong><br/>
  Implemented Benford’s Law analysis with visual diagnostics and anomaly flagging.</p>

  <p><strong>Audit value</strong><br/>
  Supports rapid triage of high-risk datasets for further investigation and targeted audit procedures.</p>

  <p><strong>Important limitation</strong><br/>
  Benford’s Law is a screening technique, not proof of fraud. Results should be used to identify transactions or populations that may warrant additional audit procedures.</p>

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
  <div class="card__meta">Python • Streamlit • Statistical testing • Compliance analytics</div>

  <p><strong>Problem</strong><br/>
  Fair lending risk requires testing pricing and underwriting outcomes across borrower groups.</p>

  <p><strong>Approach</strong><br/>
  Built a simulator using synthetic data, interactive controls, and statistical analysis.</p>

  <p><strong>Audit value</strong><br/>
  Demonstrates how analytics can support compliance testing, disparate impact analysis, and risk-based review of lending outcomes.</p>

  <p class="cta-row">
    <a class="btn" href="https://fair-lending-app-app.streamlit.app/" target="_blank" rel="noopener">Open app</a>
  </p>

  <div class="media">
    <img src="/assets/img/fair_lending_app.png" alt="Fair lending app screenshot">
  </div>
</div>

<hr class="sep" />

## Additional BI Examples

<div class="card">
  <h3 class="card__title">Adventure Works – Sales & Operations Dashboard</h3>
  <div class="card__meta">Power BI • Data modeling • Operational analytics • Interactive dashboard • Demo data</div>

  <p><strong>Purpose</strong><br/>
  Demonstrate end-to-end dashboard development using a multi-table operational dataset,
  with a focus on metrics commonly reviewed by management, finance, operations, and internal audit.</p>

  <p><strong>Approach</strong><br/>
  Modeled sales, product, and operational data into a star schema and built interactive visuals
  to analyze revenue trends, product performance, and operational drivers.</p>

  <p><strong>Audit and analytical value</strong><br/>
  Illustrates how transactional data can be transformed into decision-support insights and used to
  identify unusual trends, margin pressure, or performance anomalies.</p>

  <div class="powerbi-embed">
    <iframe
      title="Adventure Works Sales and Operations Dashboard"
      src="https://app.powerbi.com/view?r=eyJrIjoiODhkYWI5ZmYtZTk0Yy00NjUwLTg0YjItNjI3ODA3MDk1N2U5IiwidCI6ImRmODY3OWNkLWE4MGUtNDVkOC05OWFjLWM4M2VkN2ZmOTVhMCJ9"
      frameborder="0"
      allowfullscreen="true">
    </iframe>
  </div>

  <p class="caption">
    Embedded interactive Power BI report using demo data.
  </p>

  <p class="cta-row">
    <a class="btn btn--ghost" href="https://app.powerbi.com/view?r=eyJrIjoiODhkYWI5ZmYtZTk0Yy00NjUwLTg0YjItNjI3ODA3MDk1N2U5IiwidCI6ImRmODY3OWNkLWE4MGUtNDVkOC05OWFjLWM4M2VkN2ZmOTVhMCJ9" target="_blank" rel="noopener">
      Open full report
    </a>
  </p>
</div>

<div class="card">
  <h3 class="card__title">Property Management Dashboard</h3>
  <div class="card__meta">Power BI • Portfolio analysis • Management reporting • Interactive dashboard • Demo data</div>

  <p><strong>Purpose</strong><br/>
  Provide a consolidated view of property-level performance metrics commonly used by property management,
  operations, and oversight teams.</p>

  <p><strong>Approach</strong><br/>
  Built a dashboard to filter and segment properties based on operational and financial criteria, enabling
  targeted review of underperforming or higher-risk locations.</p>

  <p><strong>Audit and analytical value</strong><br/>
  Supports portfolio oversight by highlighting outliers, trends, and performance variances that may warrant
  further review or investigation.</p>

  <div class="powerbi-embed">
    <iframe
      title="Property Management Dashboard"
      src="https://app.powerbi.com/view?r=eyJrIjoiZjc0MTliNDYtNjZmYy00MWY1LTlmNTEtMmFiNGI2Y2FmOGY2IiwidCI6ImRmODY3OWNkLWE4MGUtNDVkOC05OWFjLWM4M2VkN2ZmOTVhMCJ9"
      frameborder="0"
      allowfullscreen="true">
    </iframe>
  </div>

  <p class="caption">
    Embedded interactive Power BI report using demo data.
  </p>

  <p class="cta-row">
    <a class="btn btn--ghost" href="https://app.powerbi.com/view?r=eyJrIjoiZjc0MTliNDYtNjZmYy00MWY1LTlmNTEtMmFiNGI2Y2FmOGY2IiwidCI6ImRmODY3OWNkLWE4MGUtNDVkOC05OWFjLWM4M2VkN2ZmOTVhMCJ9" target="_blank" rel="noopener">
      Open full report
    </a>
  </p>
</div>
