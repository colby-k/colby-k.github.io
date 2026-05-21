---
title: "Data Projects for Audit & Business Risk"
layout: default
permalink: /sql-projects/
description: "SQL, Power BI, and data analysis projects framed around audit-style review, business risk analysis, transformation, and management reporting."
---

{% include nav.html %}

<section class="hero">
  <p class="kicker">Data Projects for Audit & Business Risk</p>

  <p class="lede">
    Data projects demonstrating SQL analysis, transformation, modeling, and dashboard development
    through examples that support audit-style review, business risk analysis, and management reporting.
  </p>

  <div class="stack">
    <span class="pill">SQL</span>
    <span class="pill">ETL</span>
    <span class="pill">Data Modeling</span>
    <span class="pill">Power BI</span>
    <span class="pill">Business Risk Analysis</span>
  </div>
</section>

{% include demo-disclaimer.html %}

<hr class="sep" />

## SQL Analysis Example: Data Job Market Analysis

<div class="card">
  <div class="card__header">
    <h3 class="card__title">Data Job Market Analysis</h3>
    <div class="card__meta">SQL • Exploratory analysis • Large dataset review</div>
  </div>

  <p><strong>Purpose</strong><br/>
  Demonstrate structured SQL analysis of a large external dataset, including segmentation,
  ranking, trend identification, and evidence-based interpretation.</p>

  <p><strong>Problem</strong><br/>
  Understanding which data skills are in highest demand and command higher compensation
  requires analyzing large job posting datasets across roles, skills, locations, and salary ranges.</p>

  <p><strong>Approach</strong><br/>
  Queried job posting data using SQL to identify trends in required skills, job titles,
  compensation ranges, and market demand patterns.</p>

  <p><strong>Audit and analytical value</strong><br/>
  While this is not an audit dataset, it demonstrates the same core analysis techniques used in audit analytics:
  population review, segmentation, ranking, outlier identification, trend analysis, and supportable conclusions.</p>

  <p class="cta-row">
    <a class="btn" href="https://github.com/colby-k/SQL_Project_Data_Job_Analysis" target="_blank" rel="noopener">
      View GitHub repository
    </a>
  </p>

  <div class="media">
    <img src="/assets/img/top_paying_roles.png" alt="Top paying data roles analysis">
  </div>
</div>

<hr class="sep" />

## Transactional Data Example: Sales ETL & Performance Dashboard

<div class="card">
  <div class="card__header">
    <h3 class="card__title">Sales ETL & Performance Dashboard</h3>
    <div class="card__meta">SQL • ETL • Power BI • Transactional analysis</div>
  </div>

  <p><strong>Purpose</strong><br/>
  Demonstrate how raw transactional data can be cleaned, transformed, modeled, and visualized
  to support performance review and business risk analysis.</p>

  <p><strong>Problem</strong><br/>
  Raw sales data often requires significant transformation before it can support meaningful analysis
  of revenue trends, profitability, product performance, customer behavior, and operational drivers.</p>

  <p><strong>Approach</strong><br/>
  Designed an end-to-end pipeline using SQL to clean, transform, and model sales data,
  followed by a Power BI dashboard for reporting and analysis.</p>

  <p><strong>Audit and analytical value</strong><br/>
  Demonstrates how raw transactional data can be transformed into structured reporting that supports
  trend analysis, variance review, margin analysis, outlier identification, and targeted follow-up.</p>

  <p class="cta-row">
    <a class="btn" href="https://github.com/colby-k/SQL_PowerBI_Project_Sales_Analysis" target="_blank" rel="noopener">
      View GitHub repository
    </a>
  </p>

  <div class="media">
    <img src="/assets/img/adventure-works.png" alt="Sales performance dashboard">
  </div>
</div>
