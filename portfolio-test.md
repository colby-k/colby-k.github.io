---
title: "Data Analytics Portfolio (Test Layout)"
layout: default
permalink: /portfolio-test/
---

<style>
  .portfolio-section {
    padding: 2rem 0;
    border-top: 1px solid #e0e0e0;
    margin-top: 2rem;
  }

  .portfolio-section:first-of-type {
    border-top: none;
  }

  .portfolio-section h2 {
    margin-bottom: 1rem;
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }

  .project-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
    gap: 1.5rem;
    margin-top: 1rem;
  }

  .project-card {
    padding: 1rem 1.25rem;
    border-radius: 8px;
    background: #f8f9fb;
    border: 1px solid #e2e6ef;
  }

  .project-card h3 {
    margin-top: 0;
    margin-bottom: 0.5rem;
  }

  .project-card p {
    margin-top: 0;
    margin-bottom: 0.5rem;
  }

  .project-card img {
    max-width: 100%;
    height: auto;
    display: block;
  }
</style>

{% include analytics.html %}

### Portfolio Overview

- [Excel Add-In: Tickmark](#excel-add-in-tickmark)
- [Power BI Dashboards](#power-bi-dashboards)
- [Python Projects](#python-projects)
- [SQL Projects](#sql-projects)
- [Excel Templates](#excel-templates)
- [More Coming Soon](#more-coming-soon)

<section class="portfolio-section" id="excel-add-in-tickmark" markdown="1">

## <img src="/portfolio/assets/icons/excel.svg" width="22" style="vertical-align: text-bottom;"> Excel Add-In: Tickmark

Custom Excel **`.xlam`** add-in to streamline audit fieldwork and documentation with consistent, professional notation.

[Open User Guide](/portfolio/assets/img/Tickmark%20User%20Guide.png){:target="_blank"}

<a href="/portfolio/assets/img/excel_addin.png">
  <img src="/portfolio/assets/img/excel_addin.png" alt="Audit Add-in Screenshot" width="1000">
</a>

> **Status:** Not publicly available yet.  
> **Interested?** I’m gauging demand—please reach out on **[LinkedIn](https://www.linkedin.com/in/colby-k/)**.

### 🔧 Key features
- **One-click tickmarks** (✔, ✘, Δ, ≠, ≈, ∅, ⚠, ⓘ, ∂, ∞) — insert **in-cell** or as **floating** shapes
- **Indexing tools**: Roman numerals, **circled / filled-circled** numbers and letters, **page indicators** (`1/`)
- **Append mode** (optional): append symbols to existing cell text without entering edit mode
- **Color palette & formatting**: consistent symbol colors and quick layout helpers (grid, alignment)
- **Tie-out abbreviations**: TB, GL, FS, BS, IS, CF, PY, PM, SF, CR, RC with directional variants
- **Annotations**: red box, callout, post-it, arrows, and highlight fills
- **Legends & references**: drop-in legend blocks, links to IIA standards, sampling guidance, and templates

### 🛠 Tech notes
- Built with **VBA**; targets modern Office with **Segoe UI Symbol** coverage.
- Ships as a single `.xlam`; source includes modules for routing, UI callbacks, and symbol libraries.

</section>

<section class="portfolio-section" id="power-bi-dashboards">
  <h2>
    <img src="/portfolio/assets/icons/power_bi.svg" width="22" style="vertical-align: text-bottom;">
    Power BI Dashboards
  </h2>

  <div class="project-grid">
    <div class="project-card">
      <h3>Vendor Payments Monitoring</h3>
      <a href="https://app.powerbi.com/view?r=eyJrIjoiZjAwNDg2NmItOTRjYy00NmYxLWIyYmUtMDBiZmU0OTBmZGNiIiwidCI6ImRmODY3OWNkLWE4MGUtNDVkOC05OWFjLWM4M2VkN2ZmOTVhMCJ9">
        <img src="/portfolio/assets/img/vendor_pmts_solution1.png" alt="Vendor Payments Screenshot">
      </a>
    </div>

    <div class="project-card">
      <h3>Internal Audit Issue Tracker</h3>
      <a href="https://app.powerbi.com/view?r=eyJrIjoiNjY0YjI4NmYtNWJlNy00YWY4LThjMTctZjZlNDQ0ZmYzNDRkIiwidCI6ImRmODY3OWNkLWE4MGUtNDVkOC05OWFjLWM4M2VkN2ZmOTVhMCJ9&pageName=9692a08028aa212019c1">
        <img src="/portfolio/assets/img/issue_tracker.png" alt="Internal Audit Screenshot">
      </a>
    </div>

    <div class="project-card">
      <h3>Adventure Works Report</h3>
      <a href="https://app.powerbi.com/view?r=eyJrIjoiODhkYWI5ZmYtZTk0Yy00NjUwLTg0YjItNjI3ODA3MDk1N2U5IiwidCI6ImRmODY3OWNkLWE4MGUtNDVkOC05OWFjLWM4M2VkN2ZmOTVhMCJ9&pageName=ReportSection">
        <img src="/portfolio/assets/img/AdventureWorks.png" alt="Adventure Works Screenshot">
      </a>
    </div>

    <div class="project-card">
      <h3>Property Management Dashboard</h3>
      <a href="https://app.powerbi.com/view?r=eyJrIjoiZjc0MTliNDYtNjZmYy00MWY1LTlmNTEtMmFiNGI2Y2FmOGY2IiwidCI6ImRmODY3OWNkLWE4MGUtNDVkOC05OWFjLWM4M2VkN2ZmOTVhMCJ9&pageName=ReportSection7465a50eeae2e708cb4d">
        <img src="/portfolio/assets/img/property_management.png" alt="Property Management Screenshot">
      </a>
    </div>

    <div class="project-card">
      <h3>Sales Dashboard</h3>
      <a href="https://app.powerbi.com/view?r=eyJrIjoiODBmZTYzMzAtYzZlMi00ODRlLWE2ZWItMmJkNDgwODhlNTc2IiwidCI6ImRmODY3OWNkLWE4MGUtNDVkOC05OWFjLWM4M2VkN2ZmOTVhMCJ9&pageName=ReportSection">
        <img src="/portfolio/assets/img/Sales_Report.png" alt="Sales Dashboard Screenshot">
      </a>
    </div>
  </div>
</section>

<section class="portfolio-section" id="python-projects">
  <h2>
    <img src="/portfolio/assets/icons/python.svg" width="22" style="vertical-align: text-bottom;">
    <img src="/portfolio/assets/icons/streamlit.svg" width="22" style="vertical-align: middle; margin-left: 6px;">
    Python Projects
  </h2>

  <div class="project-grid">
    <div class="project-card">
      <h3>Audit Sampling Tool</h3>
      <p>Internal audit sampling utility for filtering, random sampling, and file export.</p>
      <p>
        <a href="https://audit-sampling-tool.streamlit.app/">
          <img src="https://static.streamlit.io/badges/streamlit_badge_black_white.svg" alt="Open in Streamlit">
        </a>
      </p>
      <a href="https://audit-sampling-tool.streamlit.app/">
        <img src="/portfolio/assets/img/audit_sampling_tool.png" alt="Audit Sampling Screenshot">
      </a>
    </div>

    <div class="project-card">
      <h3>Benford&#39;s Law Audit Tool</h3>
      <p>Statistical fraud detection tool using Benford’s Law to flag anomalies in financial data.</p>
      <p>
        <a href="https://benfords-law-audit-tool.streamlit.app">
          <img src="https://static.streamlit.io/badges/streamlit_badge_black_white.svg" alt="Open in Streamlit">
        </a>
      </p>
      <p>
        <a href="https://github.com/colby-k/benfords-law-audit-tool">GitHub Repo</a>
      </p>
      <a href="https://benfords-law-audit-tool.streamlit.app">
        <img src="/portfolio/assets/img/benfords_law.png" alt="Benford’s Law Screenshot">
      </a>
    </div>

    <div class="project-card">
      <h3>Fair Lending Analysis</h3>
      <p>Fair Lending pricing and underwriting simulator using synthetic borrower data, statistical testing, and ipywidgets UI.</p>
      <p>
        <a href="https://fair-lending-app-app.streamlit.app/">
          <img src="https://static.streamlit.io/badges/streamlit_badge_black_white.svg" alt="Open in Streamlit">
        </a>
      </p>
      <a href="https://fair-lending-app-app.streamlit.app/">
        <img src="/portfolio/assets/img/fair_lending_app.png" alt="Fair Lending App Screenshot">
      </a>
    </div>
  </div>
</section>

<section class="portfolio-section" id="sql-projects">
  <h2>
    <img src="/portfolio/assets/icons/sql.svg" width="22" style="vertical-align: text-bottom;">
    SQL Projects
  </h2>

  <div class="project-grid">
    <div class="project-card">
      <h3>Data Job Market Analysis</h3>
      <p>
        <a href="https://github.com/colby-k/SQL_Project_Data_Job_Analysis">GitHub Repo</a><br>
        SQL analysis of job postings using PostgreSQL and Python to surface skill trends.
      </p>
      <a href="https://github.com/colby-k/SQL_Project_Data_Job_Analysis">
        <img src="/portfolio/assets/img/top_paying_roles.png" alt="SQL Job Analysis Screenshot">
      </a>
    </div>

    <div class="project-card">
      <h3>Sales ETL &amp; Dashboard</h3>
      <p>
        <a href="https://github.com/colby-k/SQL_PowerBI_Project_Sales_Analysis">GitHub Repo</a><br>
        SQL-based ETL pipeline to clean and aggregate sales data, paired with a Power BI dashboard for business insights.
      </p>
      <a href="https://github.com/colby-k/SQL_PowerBI_Project_Sales_Analysis">
        <img src="/portfolio/assets/img/adventure-works.png" alt="Adventure Works Screenshot">
      </a>
    </div>
  </div>
</section>

<section class="portfolio-section" id="excel-templates">
  <h2>
    <img src="/portfolio/assets/icons/excel.svg" width="22" style="vertical-align: text-bottom;">
    Excel Templates
  </h2>

  <div class="project-grid">
    <div class="project-card">
      <h3>Risk Assessment Matrix</h3>
      <p>Download a customizable Excel-based risk matrix for internal audit and compliance teams.</p>
      <p>
        📂 <a href="/portfolio/assets/files/Risk_Assessment_Template.xlsx">Download Template</a>
      </p>
      <a href="/portfolio/assets/files/Risk_Assessment_Template.xlsx">
        <img src="/portfolio/assets/img/Risk_Assessment.png" alt="Risk Assessment Screenshot">
      </a>
    </div>
  </div>
</section>

<section class="portfolio-section" id="more-coming-soon" markdown="1">

## <img src="/portfolio/assets/icons/code.svg" width="24" style="vertical-align: text-bottom;"> More Coming Soon
- FP&amp;A Model  
- Audit Planning Template  
- Risk &amp; Control Matrix (RCM)  
- Issue Tracking Log  

</section>
