---
layout: default
title: "Data Analytics Portfolio"
---

<style>

/* Body Cleanup */
body {
  max-width: 1100px;
  margin: auto;
  padding: 30px;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  background-color: #f8f9fa;
  color: #333;
  line-height: 1.6;
}

/* Section Headers */
h1, h2, h3 {
  color: #2c3e50;
}

/* Header Text (Top Banner) */
header h1, header h2 {
  color: #ffffff !important;
  text-shadow: 1px 1px 3px rgba(0,0,0,0.6);
}

/* Link Styling */
a {
  color: #0077cc;
  text-decoration: none;
}
a:hover {
  text-decoration: underline;
}

/* Tech Stack Cards */
.tech-card {
  width: 120px;
  padding: 20px;
  border-radius: 20px;
  box-shadow: 0 4px 10px rgba(0,0,0,0.1);
  background: white;
  transition: transform 0.3s, box-shadow 0.3s;
}
.tech-card:hover {
  transform: scale(1.05);
  box-shadow: 0px 8px 20px rgba(0, 0, 0, 0.15);
}

/* Tech Labels */
.tech-label {
  margin-top: 10px;
  font-size: 14px;
}

/* Animate Images on Load */
.tech-card img {
  opacity: 0;
  transform: translateY(20px);
  animation: fadeInUp 0.6s ease-out forwards;
}
@keyframes fadeInUp {
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Project Images */
img {
  max-width: 100%;
  border-radius: 10px;
  margin-top: 10px;
}

/* View My Work Button */
.view-work-button {
  display: inline-block;
  padding: 12px 24px;
  font-size: 16px;
  background-color: #0077cc;
  color: white;
  border-radius: 8px;
  text-decoration: none;
  transition: background-color 0.3s;
  margin-bottom: 10px;
}
.view-work-button:hover {
  background-color: #005fa3;
}

/* Bouncing Arrow */
.bounce-arrow {
  font-size: 24px;
  margin-top: 10px;
  animation: bounce 2s infinite;
  transition: opacity 0.5s;
}
@keyframes bounce {
  0%, 20%, 50%, 80%, 100% {
    transform: translateY(0);
  }
  40% {
    transform: translateY(8px);
  }
  60% {
    transform: translateY(4px);
  }
}

/* Hide arrow when user scrolls */
.bounce-arrow.hide {
  opacity: 0;
  pointer-events: none;
}

</style>

<script>
  window.addEventListener('scroll', function() {
    var arrow = document.querySelector('.bounce-arrow');
    if (window.scrollY > 100) {
      arrow.classList.add('hide');
    } else {
      arrow.classList.remove('hide');
    }
  });
</script>

---

Hi, I’m **Colby**—an **Internal Audit and Compliance Leader turned Data Analyst** with a passion for turning data into decisions.  
I bring **15+ years of experience** in internal audit, risk management, and fraud investigations, with a strong foundation in financial services and regulatory environments.

Today, I apply tools like **Power BI, SQL, and Python** to build dashboards, perform full-population analysis, and uncover meaningful insights.  
While many of my projects support **audit and compliance** use cases, this portfolio also includes **exploratory work across industries**—ranging from sales to property management—as I continue expanding my data analytics skill set.

Whether it's **improving governance through data** or **building dashboards from scratch**, I enjoy solving real problems and making data accessible to stakeholders.

<div style="text-align: center; margin-top: 30px;">
  <a href="#featured-projects" class="view-work-button">
    ↓ View My Work
  </a>
  <div class="bounce-arrow">⬇️</div>
</div>

---

### 📇 Contact & Resume

- [LinkedIn Profile](https://www.linkedin.com/in/colby-k)
- [Email Me](mailto:colby.keller@gmail.com)
- [Resume – Web View](resume.md)
- [Resume – PDF Download](assets/docs/Resume.pdf)

---

### 🛠️ Tech Stack

<div style="display: flex; justify-content: center; flex-wrap: wrap; gap: 30px; text-align: center;">

  <div class="tech-card">
    <a href="#power-bi-dashboards" title="See Power BI Projects">
      <img src="assets/img/New_Power_BI_Logo.svg" alt="Power BI" width="60">
      <div class="tech-label">Power BI</div>
    </a>
  </div>

  <div class="tech-card">
    <a href="#sql-projects" title="See SQL Projects">
      <img src="assets/img/SQL.png" alt="SQL" width="60">
      <div class="tech-label">SQL</div>
    </a>
  </div>

  <div class="tech-card">
    <a href="#excel-templates" title="See Excel Templates">
      <img src="assets/img/Excel.png" alt="Excel" width="60">
      <div class="tech-label">Excel</div>
    </a>
  </div>

  <div class="tech-card">
    <a href="#python-projects" title="See Python Projects">
      <img src="assets/img/Python-logo-notext.svg" alt="Python" width="60">
      <div class="tech-label">Python</div>
    </a>
  </div>

</div>

---

## 📊 Featured Projects <a name="featured-projects"></a>

### 📈 Power BI Dashboards <a name="power-bi-dashboards"></a>

- 🔗 [Internal Audit Issue Tracker](https://app.powerbi.com/view?r=eyJrIjoiNjY0YjI4NmYtNWJlNy00YWY4LThjMTctZjZlNDQ0ZmYzNDRkIiwidCI6ImRmODY3OWNkLWE4MGUtNDVkOC05OWFjLWM4M2VkN2ZmOTVhMCJ9)  
  [![Complaint Case Tracker](assets/img/internal_audit_issue_tracker.png)](https://app.powerbi.com/view?r=eyJrIjoiNjY0YjI4NmYtNWJlNy00YWY4LThjMTctZjZlNDQ0ZmYzNDRkIiwidCI6ImRmODY3OWNkLWE4MGUtNDVkOC05OWFjLWM4M2VkN2ZmOTVhMCJ9&embedImagePlaceholder=true&pageName=9692a08028aa212019c1)


- 🔗 [Adventure Works Report](https://app.powerbi.com/view?r=eyJrIjoiODhkYWI5ZmYtZTk0Yy00NjUwLTg0YjItNjI3ODA3MDk1N2U5IiwidCI6ImRmODY3OWNkLWE4MGUtNDVkOC05OWFjLWM4M2VkN2ZmOTVhMCJ9)  
  [![Adventure Works](assets/img/AdventureWorks.png)](https://app.powerbi.com/view?r=eyJrIjoiODhkYWI5ZmYtZTk0Yy00NjUwLTg0YjItNjI3ODA3MDk1N2U5IiwidCI6ImRmODY3OWNkLWE4MGUtNDVkOC05OWFjLWM4M2VkN2ZmOTVhMCJ9)

- 🔗 [Property Management Dashboard](https://app.powerbi.com/view?r=eyJrIjoiZjc0MTliNDYtNjZmYy00MWY1LTlmNTEtMmFiNGI2Y2FmOGY2IiwidCI6ImRmODY3OWNkLWE4MGUtNDVkOC05OWFjLWM4M2VkN2ZmOTVhMCJ9)  
  [![Property Management](assets/img/property_management.png)](https://app.powerbi.com/view?r=eyJrIjoiZjc0MTliNDYtNjZmYy00MWY1LTlmNTEtMmFiNGI2Y2FmOGY2IiwidCI6ImRmODY3OWNkLWE4MGUtNDVkOC05OWFjLWM4M2VkN2ZmOTVhMCJ9)

- 🔗 [Sales Analysis (SQL + Power BI)](https://github.com/colby-k/SQL_PowerBI_Project_Sales_Analysis)  
  [![Sales Dashboard](assets/img/Sales_Report.png)](https://app.powerbi.com/view?r=eyJrIjoiODBmZTYzMzAtYzZlMi00ODRlLWE2ZWItMmJkNDgwODhlNTc2IiwidCI6ImRmODY3OWNkLWE4MGUtNDVkOC05OWFjLWM4M2VkN2ZmOTVhMCJ9&pageName=ReportSection)

---

### 🐍 Python Projects <a name="python-projects"></a>

- 📁 [Fair Lending Analysis (Python)](https://github.com/colby-k/Python_Project_Fair_Lending_Analysis)  
  Fair pricing audit simulator using synthetic borrower data, statistical analysis, and ipywidgets UI.

- 📁 [Audit Sampling Tool (Python + Streamlit)](https://audit-sampling-tool.streamlit.app/)  
  Internal audit sampling utility for filtering, random sampling, and file export.

---

### 🛢️ SQL Projects <a name="sql-projects"></a>

- 📁 [SQL Project – Data Job Analysis](https://github.com/colby-k/SQL_Project_Data_Job_Analysis)  
  SQL-based job market analysis using PostgreSQL, VS Code, Python, and Pandas.

- 📁 [Sales Analysis (SQL + Power BI)](https://github.com/colby-k/SQL_PowerBI_Project_Sales_Analysis)  
  SQL ETL pipeline for sales data feeding into Power BI dashboard visualizations.

---

### 📄 Excel Templates <a name="excel-templates"></a>

Practical Excel tools for audit, compliance, and risk management.

---

#### 🛡️ Risk Assessment Template (Excel)

A customizable Excel-based risk assessment matrix designed for internal audit and compliance teams.

- Risk scoring matrix
- Inherent vs. residual risk evaluations
- Auto-calculations and prioritization

📂 [Download Risk Assessment Template (Excel)](assets/files/Risk_Assessment_Template.xlsx)

![Risk Assessment Template Screenshot](assets/img/Risk_Assessment.png)


---

#### 🛠️ More Templates Coming Soon

- Annual Audit Planning Template
- Issue Tracking Log
- Risk & Control Matrix (RCM) Template

Stay tuned — more Excel tools are in development!

---

> *“The most dangerous phrase in the language is: we've always done it this way.”* – Rear Admiral Grace Hopper
