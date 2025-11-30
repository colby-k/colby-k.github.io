---
title: "Audit Analytics"
layout: default
permalink: /audit-analytics/
---

{% include analytics.html %}

<p style="text-align:center; margin-bottom: 1.5rem;">
  <a href="/">Home</a> ·
  <a href="/excel-tools/">Excel Tools</a> ·
  <a href="/audit-analytics/">Audit Analytics</a> ·
  <a href="/sql-projects/">SQL Projects</a> ·
  <a href="/about/">About</a>
</p>

# Audit Analytics

## <img src="/assets/icons/power_bi.svg" width="22" style="vertical-align: text-bottom;"> Power BI Dashboards

### Vendor Payments Monitoring  

Risk-focused dashboard for vendor payments and unusual transaction patterns.

[![Vendor Payments Screenshot](assets/img/vendor_pmts_solution1.png)](https://app.powerbi.com/view?r=eyJrIjoiZjAwNDg2NmItOTRjYy00NmYxLWIyYmUtMDBiZmU0OTBmZGNiIiwidCI6ImRmODY3OWNkLWE4MGUtNDVkOC05OWFjLWM4M2VkN2ZmOTVhMCJ9)

---

### Internal Audit Issue Tracker  

Tracks open vs closed issues and management action plans.

[![Internal Audit Screenshot](assets/img/issue_tracker.png)](https://app.powerbi.com/view?r=eyJrIjoiNjY0YjI4NmYtNWJlNy00YWY4LThjMTctZjZlNDQ0ZmYzNDRkIiwidCI6ImRmODY3OWNkLWE4MGUtNDVkOC05OWFjLWM4M2VkN2ZmOTVhMCJ9&pageName=9692a08028aa212019c1)

---

<details markdown="1">
<summary style="margin-top:1rem; padding:0.6rem 0; font-size:1.0rem;">
  <strong>📊 Click to expand: 3 more Power BI dashboards</strong>
</summary>

<br>

### Adventure Works Report  
[![Adventure Works Screenshot](/assets/img/AdventureWorks.png)](https://app.powerbi.com/view?r=eyJrIjoiODhkYWI5ZmYtZTk0Yy00NjUwLTg0YjItNjI3ODA3MDk1N2U5IiwidCI6ImRmODY3OWNkLWE4MGUtNDVkOC05OWFjLWM4M2VkN2ZmOTVhMCJ9&pageName=ReportSection)

### Property Management Dashboard  
[![Property Management Screenshot](/assets/img/property_management.png)](https://app.powerbi.com/view?r=eyJrIjoiZjc0MTliNDYtNjZmYy00MWY1LTlmNTEtMmFiNGI2Y2FmOGY2IiwidCI6ImRmODY3OWNkLWE4MGUtNDVkOC05OWFjLWM4M2VkN2ZmOTVhMCJ9&pageName=ReportSection7465a50eeae2e708cb4d)

### Sales Dashboard  
[![Sales Dashboard Screenshot](/assets/img/Sales_Report.png)](https://app.powerbi.com/view?r=eyJrIjoiODBmZTYzMzAtYzZlMi00ODRlLWE2ZWItMmJkNDgwODhlNTc2IiwidCI6ImRmODY3OWNkLWE4MGUtNDVkOC05OWFjLWM4M2VkN2ZmOTVhMCJ9&pageName=ReportSection)

</details>

---

## <img src="assets/icons/python.svg" width="22" style="vertical-align: text-bottom;"> <img src="assets/icons/streamlit.svg" width="22" style="vertical-align: middle; margin-left: 6px;"> Python Audit Apps (Streamlit)

### Audit Sampling Tool  

> **Objective:** generate statistically sound, reproducible samples for audit testing.

[![Open in Streamlit](https://static.streamlit.io/badges/streamlit_badge_black_white.svg)](https://audit-sampling-tool.streamlit.app/)  

Internal audit sampling utility for filtering, random sampling, and file export.

<a href="https://audit-sampling-tool.streamlit.app/">
  <img src="/assets/img/audit_sampling_tool.png" alt="Audit Sampling Screenshot" width="700">
</a>

---

### Benford's Law Audit Tool  

> **Objective:** quickly test numeric fields for Benford conformity and flag anomalies that may indicate fraud or error.

[![Open in Streamlit](https://static.streamlit.io/badges/streamlit_badge_black_white.svg)](https://benfords-law-audit-tool.streamlit.app)  

Statistical fraud detection tool using Benford’s Law to flag anomalies in financial data.  
[GitHub Repo](https://github.com/colby-k/benfords-law-audit-tool)

<a href="https://benfords-law-audit-tool.streamlit.app">
  <img src="/assets/img/benfords_law.png" alt="Benford’s Law Screenshot" width="700">
</a>

---

### Fair Lending Analysis  

> **Objective:** simulate pricing and underwriting outcomes and test for potential disparate impact across borrower groups.

[![Open in Streamlit](https://static.streamlit.io/badges/streamlit_badge_black_white.svg)](https://fair-lending-app-app.streamlit.app/)   

Fair lending pricing and underwriting simulator using synthetic borrower data, statistical testing, and interactive controls.

<a href="https://fair-lending-app-app.streamlit.app/">
  <img src="/assets/img/fair_lending_app.png" alt="Fair Lending App Screenshot" width="700">
</a>
