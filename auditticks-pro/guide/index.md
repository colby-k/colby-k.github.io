---
title: "AuditTicks User Guide"
layout: default
permalink: /auditticks-pro/guide/
description: "User guide for AuditTicks, an Excel add-in for audit tickmarks, evidence annotation, references, workpaper formatting, keyboard shortcuts, and review tools."
page_css: "/assets/css/auditticks-guide.css"
preload_image: "/assets/img/auditticks-overview.webp"
---

<article class="atg-page">
  <div class="atg-productbar">
    <a class="atg-productbar__brand" href="/auditticks-pro/" aria-label="AuditTicks product page">
      <img src="/assets/img/AuditTicksPro_Icon.png" alt="" width="34" height="34">
      <span><strong>AuditTicks</strong><small>User Guide</small></span>
    </a>
    <div class="atg-productbar__links">
      <a href="/auditticks-pro/">Product</a>
      <a class="is-active" href="/auditticks-pro/guide/">User Guide</a>
    </div>
    <div class="atg-search-wrap">
      <label class="sr-only" for="atg-search">Search the AuditTicks guide</label>
      <input id="atg-search" type="search" placeholder="Search guide…" autocomplete="off" aria-autocomplete="list" aria-controls="atg-search-results">
      <span class="atg-search-key" aria-hidden="true">/</span>
      <div id="atg-search-results" class="atg-search-results" role="listbox" hidden></div>
    </div>
  </div>

  <details class="atg-mobile-nav">
    <summary>Guide navigation</summary>
    <div class="atg-mobile-nav__links">
      <a href="#overview">Overview</a><a href="#getting-started">Getting Started</a><a href="#ribbon-reference">Ribbon Reference</a>
      <a href="#modes-position">Modes &amp; Position</a><a href="#tickmarks">Tickmarks</a><a href="#references">References</a><a href="#tie-outs">Tie-Outs</a>
      <a href="#evidence">Evidence</a><a href="#formatting">Formatting</a><a href="#workpapers">Workpapers</a><a href="#review">Review</a><a href="#tools">Tools</a>
      <a href="#settings">Settings</a><a href="#keyboard-shortcuts">Keyboard Shortcuts</a><a href="#work-edition">Work Edition</a><a href="#troubleshooting">Troubleshooting</a><a href="#faq">FAQ</a>
    </div>
  </details>

  <div class="atg-layout">
    <aside class="atg-sidebar" aria-label="User guide sections">
      <nav>
        <p class="atg-nav-title">User Guide</p>
        <a class="atg-nav-link is-active" href="#overview">Overview</a>
        <a class="atg-nav-link" href="#getting-started">Getting Started</a>
        <a class="atg-nav-link" href="#ribbon-reference">Ribbon Reference</a>

        <p class="atg-nav-group">Document Testing</p>
        <a class="atg-nav-link" href="#modes-position">Modes &amp; Position</a>
        <a class="atg-nav-link" href="#tickmarks">Tickmarks</a>
        <a class="atg-nav-link" href="#vouched-traced">Vouched &amp; Traced</a>
        <a class="atg-nav-link" href="#references">References &amp; Indexing</a>
        <a class="atg-nav-link" href="#tie-outs">Tie-Outs</a>

        <p class="atg-nav-group">Annotate Evidence</p>
        <a class="atg-nav-link" href="#evidence">Figures &amp; Evidence</a>
        <a class="atg-nav-link" href="#notes-callouts">Notes &amp; Callouts</a>
        <a class="atg-nav-link" href="#shapes-lines">Shapes &amp; Lines</a>

        <p class="atg-nav-group">Build Workpapers</p>
        <a class="atg-nav-link" href="#formatting">Formatting</a>
        <a class="atg-nav-link" href="#workpapers">Workpaper Elements</a>
        <a class="atg-nav-link" href="#templates">Templates</a>

        <p class="atg-nav-group">Prepare for Review</p>
        <a class="atg-nav-link" href="#review">Initials, Date &amp; Tab Status</a>

        <p class="atg-nav-group">Configuration</p>
        <a class="atg-nav-link" href="#tools">Tools &amp; Guides</a>
        <a class="atg-nav-link" href="#settings">Settings</a>
        <a class="atg-nav-link" href="#keyboard-shortcuts">Keyboard Shortcuts</a>
        <a class="atg-nav-link" href="#work-edition">Work Edition</a>

        <p class="atg-nav-group">Help</p>
        <a class="atg-nav-link" href="#troubleshooting">Troubleshooting</a>
        <a class="atg-nav-link" href="#faq">FAQ</a>
      </nav>
      <div class="atg-sidebar__meta">
        <strong>Documentation baseline</strong>
        <span>Work v1.3.0</span>
        <span>Commercial v1.2.30</span>
        <a href="/auditticks-pro/">AuditTicks product page →</a>
      </div>
    </aside>

    <main class="atg-content">
      <section id="overview" class="atg-hero atg-searchable" data-search-title="Overview AuditTicks Work v1.3.0" data-search-category="User Guide">
        <div class="atg-hero__copy">
          <span class="atg-eyebrow">AuditTicks · Excel for Windows</span>
          <h1>AuditTicks User Guide</h1>
          <p class="atg-lede">Audit-focused Excel tools for documenting testing, annotating evidence, creating references, formatting workpapers, navigating support, using configurable keyboard shortcuts, and preparing files for review.</p>
          <div class="atg-version-row">
            <span>Work v1.3.0</span><span>Commercial v1.2.30</span>
          </div>
          <div class="atg-hero-actions">
            <a class="atg-btn atg-btn--primary" href="#getting-started">Get started</a>
            <a class="atg-btn" href="#ribbon-reference">Explore the ribbon</a>
          </div>
        </div>
        <div class="atg-hero__visual">
          <div class="atg-window">
            <div class="atg-window__bar"><span></span><span></span><span></span><small>AuditTicks · Microsoft Excel</small></div>
            <img src="/assets/img/auditticks-overview.webp" alt="AuditTicks ribbon and example audit workpaper in Microsoft Excel" width="500" height="207" loading="eager" fetchpriority="high">
          </div>
        </div>
      </section>

      <section class="atg-section atg-section--tight">
        <div class="atg-callout atg-callout--judgment"><strong>AuditTicks handles workpaper mechanics.</strong> The auditor remains responsible for the procedure, evidence, professional judgment, and conclusion.</div>
        <div class="atg-card-grid atg-card-grid--3">
          <a class="atg-feature-card atg-searchable" data-search-title="Document testing" data-search-category="Workflow" href="#tickmarks"><span class="atg-feature-card__icon">✓</span><h3>Document testing</h3><p>Apply standard tickmarks, procedure-direction marks, references, and tie-outs.</p><b>Go to testing →</b></a>
          <a class="atg-feature-card atg-searchable" data-search-title="Annotate evidence" data-search-category="Workflow" href="#evidence"><span class="atg-feature-card__icon">□</span><h3>Annotate evidence</h3><p>Add figures, callouts, arrows, lines, brackets, and color-aware evidence markers.</p><b>Go to evidence →</b></a>
          <a class="atg-feature-card atg-searchable" data-search-title="Create references" data-search-category="Workflow" href="#references"><span class="atg-feature-card__icon">↗</span><h3>Create references</h3><p>Use indexing symbols, financial references, tie-outs, and worksheet hyperlinks.</p><b>Go to references →</b></a>
          <a class="atg-feature-card atg-searchable" data-search-title="Build workpapers" data-search-category="Workflow" href="#workpapers"><span class="atg-feature-card__icon">▦</span><h3>Build workpapers</h3><p>Insert testing structures, legends, headers, rows, columns, and workpaper templates.</p><b>Go to workpapers →</b></a>
          <a class="atg-feature-card atg-searchable" data-search-title="Prepare for review" data-search-category="Workflow" href="#review"><span class="atg-feature-card__icon">◎</span><h3>Prepare for review</h3><p>Add initials and dates, then use worksheet-tab status colors to communicate review state.</p><b>Go to review →</b></a>
          <a class="atg-feature-card atg-searchable" data-search-title="Configure settings keyboard shortcuts" data-search-category="Workflow" href="#settings"><span class="atg-feature-card__icon">⚙</span><h3>Configure your workflow</h3><p>Set role, color, workpaper-theme, template, and keyboard-shortcut preferences.</p><b>Go to settings →</b></a>
        </div>
      </section>

      <section class="atg-section atg-section--tight atg-searchable" data-search-title="What changed in Work v1.3.0" data-search-category="User Guide">
        <div class="atg-section-heading"><span>V1.3.0</span><h2>Current Work release</h2><p>Work v1.3.0 is the current production baseline documented by this guide.</p></div>
        <div class="atg-card-grid atg-card-grid--3">
          <div class="atg-mini-card"><h3>Refined audit-symbol library</h3><p>Tickmark, Reference, and Tie-Out icons were normalized for clearer Ribbon and dropdown presentation while preserving the underlying audit symbols.</p></div>
          <div class="atg-mini-card"><h3>Reference cleanup</h3><p>Page references now run from <strong>1/ through 10/</strong>. Bold-number references use <strong>1</strong> on the split-button face, followed by <strong>2–9, 0</strong> in the dropdown.</p></div>
          <div class="atg-mini-card"><h3>Production Work interface</h3><p>The distributed Work build presents the normal audit workflow without development-only configuration controls.</p></div>
        </div>
      </section>

      <section id="getting-started" class="atg-section atg-searchable" data-search-title="Getting Started install XLAM Excel Add-ins" data-search-category="User Guide">
        <div class="atg-section-heading"><span>Start here</span><h2>Getting started</h2><p>Install the add-in once, confirm the AuditTicks Ribbon, then configure the preferences you use most often.</p></div>
        <div class="atg-steps">
          <div class="atg-step"><i>1</i><div><h3>Install the add-in</h3><p>Save the <code>.xlam</code> file in a stable local location. In Excel, go to <strong>File → Options → Add-ins</strong>, choose <strong>Excel Add-ins</strong>, select <strong>Go</strong>, then <strong>Browse</strong> to the AuditTicks file.</p></div></div>
          <div class="atg-step"><i>2</i><div><h3>Confirm the ribbon</h3><p>Make sure the <strong>AuditTicks</strong> tab appears in Excel. If Windows marks a downloaded file as blocked, use the file's Properties dialog only if the file is trusted and your organization's policy permits it.</p></div></div>
          <div class="atg-step"><i>3</i><div><h3>Configure your defaults</h3><p>Open <strong>Settings</strong> to choose a reviewer-role preset, default mark color, startup color behavior, workpaper-theme colors, template behavior, and optional keyboard shortcuts.</p></div></div>
          <div class="atg-step"><i>4</i><div><h3>Choose a mode</h3><p>Use <strong>In-Cell</strong> for testing matrices and structured workpapers. Use <strong>Floating</strong> to place movable annotations over evidence or screenshots. Use <strong>Append</strong> when multiple in-cell marks need to occupy the same cell.</p></div></div>
          <div class="atg-step"><i>5</i><div><h3>Start documenting</h3><p>Select a cell or range and choose the Ribbon action—or configured keyboard shortcut—that matches the audit procedure you are performing.</p></div></div>
        </div>
        <figure class="atg-figure"><img src="/assets/img/AuditTicksPro_Ribbon.webp" alt="AuditTicks ribbon in Microsoft Excel" loading="lazy"><figcaption>AuditTicks groups testing, references, formatting, evidence, workpaper, review, and utility actions into a dedicated Excel Ribbon.</figcaption></figure>
        <div class="atg-callout"><strong>Macro security:</strong> AuditTicks is a VBA-based Excel add-in. Organizations should evaluate and enable it under their own software, macro, and information-security policies rather than reducing global Excel security settings.</div>
      </section>

      <section id="ribbon-reference" class="atg-section atg-searchable" data-search-title="Ribbon Reference groups Mode Position Color Tickmarks References Tie-Outs Format Evidence Workpapers Review Tools About" data-search-category="User Guide">
        <div class="atg-section-heading"><span>At a glance</span><h2>Ribbon reference</h2><p>The Work and Commercial editions share the same core audit workflow. Work adds organization-specific templates and guide links.</p></div>
        <div class="atg-table-wrap">
          <table class="atg-table">
            <thead><tr><th>Ribbon group</th><th>What it controls</th><th>Key tools</th></tr></thead>
            <tbody>
              <tr><td><strong>Mode</strong></td><td>Where and how marks are inserted.</td><td>In-Cell, Floating, Append</td></tr>
              <tr><td><strong>Position</strong></td><td>Horizontal alignment of selected cells and default placement of future in-cell marks.</td><td>Left, Center, Right</td></tr>
              <tr><td><strong>Color &amp; Font</strong></td><td>Active audit-mark color and text size.</td><td>Red, Green, Dark Blue, Orange, Magenta, Black, Font ±</td></tr>
              <tr><td><strong>Tickmarks</strong></td><td>Testing results and audit symbols.</td><td>Pass, Exception, N/A, Vouched, Traced, Question, flags, math/logic marks</td></tr>
              <tr><td><strong>References</strong></td><td>Indexing and cross-reference symbols.</td><td>Filled/outlined numbers and letters, Roman numerals, 1/–10/, bold digits, custom reference</td></tr>
              <tr><td><strong>Tie-Outs</strong></td><td>Reperformance, source, and financial-statement references.</td><td>Footed, Crossfooted, Recalculated, Reconciles, FS/TB/GL, PBC, PY/PM</td></tr>
              <tr><td><strong>Format</strong></td><td>Repeatable audit workpaper formatting.</td><td>Financial, Note Cell, Headings, AutoFit, Borders, Fills, Align, Insert Row/Column</td></tr>
              <tr><td><strong>Evidence</strong></td><td>Figures, links, notes, and annotations.</td><td>Add Figure, Figure Placeholder, Link to Sheet, Notes &amp; Callouts, Shapes &amp; Lines</td></tr>
              <tr><td><strong>Workpapers</strong></td><td>Reusable workpaper structures.</td><td>Elements, legends, Testing Attributes Block, Testing Table, Templates</td></tr>
              <tr><td><strong>Review</strong></td><td>Reviewer identification and worksheet status.</td><td>Initials, Date, Tab Status</td></tr>
              <tr><td><strong>Tools</strong></td><td>Workbook utilities and, in Work, internal guidance.</td><td>Gridlines, Unhide Tabs, Save XLSX Copy, Guides</td></tr>
              <tr><td><strong>About</strong></td><td>User preferences, shortcut reference, and product information.</td><td>Settings, Shortcuts, About AuditTicks</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      <section id="modes-position" class="atg-section atg-searchable" data-search-title="In-Cell Floating Append modes position alignment Left Center Right" data-search-category="Document Testing">
        <div class="atg-section-heading"><span>Document testing</span><h2>Modes and position</h2><p>Mode determines whether AuditTicks writes into the selected cell or creates a movable annotation. Position controls immediately align selected worksheet cells and set the default alignment for future in-cell marks.</p></div>
        <div class="atg-split-cards">
          <div class="atg-info-card"><span class="atg-chip">In-Cell</span><h3>Use the cell as the audit-mark container.</h3><p>Best for testing matrices, attribute columns, legends, schedules, and other structured workpapers.</p><h4>How to use</h4><ol><li>Select <strong>In-Cell</strong>.</li><li>Select one or more worksheet cells.</li><li>Choose <strong>Left</strong>, <strong>Center</strong>, or <strong>Right</strong> if needed.</li><li>Insert the desired tickmark or reference.</li></ol></div>
          <div class="atg-info-card"><span class="atg-chip">Floating</span><h3>Place a movable mark over evidence.</h3><p>Best for invoice images, reconciliations, screenshots, scanned documents, and visual evidence.</p><h4>How to use</h4><ol><li>Select <strong>Floating</strong>.</li><li>Click the cell near the evidence you want to mark.</li><li>Insert the desired symbol.</li><li>Reposition the resulting textbox as needed.</li></ol></div>
        </div>
        <div class="atg-card-grid atg-card-grid--3">
          <div class="atg-mini-card"><h3>Left</h3><p>Left-aligns the selected cell or range and makes Left the default for future in-cell marks.</p></div>
          <div class="atg-mini-card"><h3>Center</h3><p>Center-aligns the selected cell or range and makes Center the default for future in-cell marks.</p></div>
          <div class="atg-mini-card"><h3>Right</h3><p>Right-aligns the selected cell or range and makes Right the default for future in-cell marks.</p></div>
        </div>
        <div class="atg-callout atg-callout--tip"><strong>Existing in-cell marks:</strong> because in-cell marks are cell content, selecting their cells and choosing Left, Center, or Right repositions those existing marks immediately. Floating marks are separate worksheet objects and are not repositioned by these controls.</div>
        <div class="atg-callout atg-callout--tip"><strong>Append:</strong> Append is an In-Cell behavior. When enabled, new symbols are added to existing cell content rather than replacing it. Floating marks do not use Append behavior.</div>
      </section>

      <section id="tickmarks" class="atg-section atg-searchable" data-search-title="Tickmarks Tested Without Exception Exception Not Applicable Caution Question Attention Information" data-search-category="Document Testing">
        <div class="atg-section-heading"><span>Document testing</span><h2>Core tickmarks</h2><p>Use core marks consistently so preparers and reviewers can understand the result without reinterpreting the workpaper.</p></div>
        <div class="atg-mark-grid">
          <div class="atg-mark-card atg-searchable" data-search-title="Tested Without Exception pass" data-search-category="Tickmarks"><b>✓</b><div><h3>Tested Without Exception</h3><p>Indicates the tested item or attribute met the applicable criteria.</p></div></div>
          <div class="atg-mark-card atg-searchable" data-search-title="Exception" data-search-category="Tickmarks"><b>×</b><div><h3>Exception</h3><p>Identifies an item requiring follow-up, resolution, or exception documentation.</p></div></div>
          <div class="atg-mark-card atg-searchable" data-search-title="Not Applicable N/A" data-search-category="Tickmarks"><b>N/A</b><div><h3>Not Applicable</h3><p>Indicates the procedure, attribute, or item does not apply.</p></div></div>
          <div class="atg-mark-card atg-searchable" data-search-title="Miscellaneous Attribute asterisk" data-search-category="Tickmarks"><b>*</b><div><h3>Miscellaneous Attribute</h3><p>Provides a general-purpose testing mark when the workpaper legend defines a specific meaning.</p></div></div>
          <div class="atg-mark-card atg-searchable" data-search-title="Caution Noted checked box" data-search-category="Tickmarks"><b>☑</b><div><h3>Caution Noted</h3><p>Indicates the item is appropriate with a caution or qualification noted.</p></div></div>
          <div class="atg-mark-card atg-searchable" data-search-title="Exception With Detail crossed box" data-search-category="Tickmarks"><b>☒</b><div><h3>Exception With Detail</h3><p>Highlights an exception that requires additional explanation or supporting detail.</p></div></div>
        </div>
        <p class="atg-muted">Additional marks include Check, Cube Root, Fourth Root, Underbar, Question, Attention, Information, flags, Star, Percent, Timing, Warning, Investigate, Summation, Equal, Change, Approximate, Not Equal, Empty Set, Partial, Infinity, Alpha, and Beta. Use specialized symbols only when their meaning is clear from the procedure, legend, or workpaper context.</p>
        <figure class="atg-figure"><img src="/assets/img/auditticks-testing-matrix.webp" alt="Audit testing matrix using AuditTicks pass, exception, and not-applicable marks" loading="lazy"><figcaption>In-cell tickmarks keep the testing result directly beside the procedure and supporting reference.</figcaption></figure>
      </section>

      <section id="vouched-traced" class="atg-section atg-searchable" data-search-title="Vouched Traced procedure direction" data-search-category="Document Testing">
        <div class="atg-section-heading"><span>Procedure direction</span><h2>Vouched and Traced</h2><p>These marks document the direction of an audit procedure without requiring a separate text note for every selection.</p></div>
        <div class="atg-split-cards">
          <div class="atg-info-card"><span class="atg-chip">Vouched</span><h3>🗏🡄 Vouched</h3><p>Use when testing moves <strong>from the accounting record or population back to underlying source evidence</strong>.</p><p class="atg-example"><strong>Example:</strong> Select a recorded disbursement and inspect the invoice, approval, and purchase support.</p></div>
          <div class="atg-info-card"><span class="atg-chip">Traced</span><h3>🗏🡆 Traced</h3><p>Use when testing moves <strong>from source evidence forward into the accounting record, report, or population</strong>.</p><p class="atg-example"><strong>Example:</strong> Select source documentation and confirm it is captured in the applicable ledger or report.</p></div>
        </div>
        <div class="atg-callout atg-callout--tip"><strong>Tip:</strong> Vouched and Traced use the active AuditTicks mark color and follow the same In-Cell/Floating workflow as other audit marks.</div>
      </section>

      <section id="references" class="atg-section atg-searchable" data-search-title="References indexing circled numbers letters Roman numerals page reference custom reference bold digits" data-search-category="Create References">
        <div class="atg-section-heading"><span>Create references</span><h2>References and indexing</h2><p>Use compact indexing marks to connect testing, notes, legends, and supporting sections without adding excessive text.</p></div>
        <div class="atg-reference-grid">
          <div><h3>Filled circled numbers</h3><p>1–10 reference marks for visually prominent indexing.</p></div>
          <div><h3>Filled circled letters</h3><p>A–J reference marks for alternate or secondary indexing schemes.</p></div>
          <div><h3>Roman numerals</h3><p>I–X marks for procedures, subsections, or hierarchical references.</p></div>
          <div><h3>Circled numbers</h3><p>1–10 outlined reference marks.</p></div>
          <div><h3>Circled letters</h3><p>A–J outlined reference marks.</p></div>
          <div><h3>Page references</h3><p>Page-style reference marks <strong>1/ through 10/</strong>.</p></div>
          <div><h3>Letter tickmarks</h3><p>A–J letter marks for user-defined workpaper meanings.</p></div>
          <div><h3>Bold digits</h3><p>The split-button starts with <strong>1</strong>; the dropdown continues <strong>2–9, then 0</strong>.</p></div>
          <div><h3>User Defined Reference</h3><p>Insert a custom reference when the standard catalog does not fit the workpaper.</p></div>
        </div>
      </section>

      <section id="tie-outs" class="atg-section atg-searchable" data-search-title="Tie-Outs Footed Crossfoot Recalculated Reconciles Financial Statements Trial Balance General Ledger PBC Prior Year" data-search-category="Create References">
        <div class="atg-section-heading"><span>Create references</span><h2>Tie-outs and source references</h2><p>Tie-out marks communicate how a number or assertion was checked and where it agrees.</p></div>
        <div class="atg-table-wrap">
          <table class="atg-table atg-table--compact">
            <thead><tr><th>Tool</th><th>Use</th></tr></thead>
            <tbody>
              <tr><td>Footed</td><td>Indicate a column or schedule was totaled.</td></tr>
              <tr><td>Left Crossfoot</td><td>Indicate a row or horizontal calculation was totaled.</td></tr>
              <tr><td>Recalculated</td><td>Document independent recalculation.</td></tr>
              <tr><td>Reconciles</td><td>Document agreement through reconciliation.</td></tr>
              <tr><td>Immaterial</td><td>Identify an amount or difference treated as immaterial under the workpaper's criteria.</td></tr>
              <tr><td>Reperformed / Recalculated</td><td>Document reperformance or independent recomputation.</td></tr>
              <tr><td>Updated / Refreshed</td><td>Indicate data or support was refreshed to a current period.</td></tr>
              <tr><td>See Note / See Explanation / Alternate Reference</td><td>Direct the reviewer to additional narrative or another reference point.</td></tr>
              <tr><td>FS / TB / GL</td><td>Reference the Financial Statements, Trial Balance, or General Ledger.</td></tr>
              <tr><td>BS / IS / CF / FN</td><td>Reference the Balance Sheet, Income Statement, Cash Flows, or Financial Notes.</td></tr>
              <tr><td>PBC</td><td>Identify information Provided by Client.</td></tr>
              <tr><td>See Reference / See Formula</td><td>Point to another workpaper reference or formula support.</td></tr>
              <tr><td>Prior Year / Prior Month</td><td>Identify comparative-period support.</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      <section id="evidence" class="atg-section atg-searchable" data-search-title="Evidence Add Figure Figure Placeholder Link to Sheet clipboard screenshot worksheet hyperlink" data-search-category="Annotate Evidence">
        <div class="atg-section-heading"><span>Annotate evidence</span><h2>Figures, screenshots, and worksheet links</h2><p>Keep the evidence and the auditor's explanation together in the workbook.</p></div>
        <div class="atg-workflow">
          <div class="atg-workflow__copy">
            <span class="atg-chip">Add Figure</span>
            <h3>Paste evidence from the clipboard with a Figure heading.</h3>
            <ol><li>Copy a screenshot or image from the source application.</li><li>Select the worksheet cell where the figure should begin.</li><li>Choose <strong>Add Figure</strong>.</li><li>AuditTicks creates the Figure heading and pastes the clipboard image.</li></ol>
            <p>If no image is available on the clipboard, AuditTicks prompts you instead of inserting an empty object.</p>
          </div>
          <div class="atg-workflow__media"><img src="/assets/img/auditticks-floating-invoice.png?v=2" alt="Invoice evidence annotated with floating AuditTicks marks" loading="lazy"></div>
        </div>
        <div class="atg-split-cards atg-split-cards--spaced">
          <div class="atg-info-card"><span class="atg-chip">Figure Placeholder</span><h3>Reserve an evidence location before the screenshot is available.</h3><p>Select the intended starting cell and insert a formatted Figure heading and placeholder area. Replace the placeholder when support is ready.</p></div>
          <div class="atg-info-card atg-searchable" data-search-title="Link to Sheet worksheet hyperlink" data-search-category="Evidence"><span class="atg-chip">Link to Sheet</span><h3>Create a one-click internal worksheet reference.</h3><ol><li>Select one blank or text cell.</li><li>Click <strong>Link to Sheet</strong>.</li><li>Choose from the numbered list of other visible worksheets.</li><li>Enter the destination number.</li><li>AuditTicks writes the destination worksheet name into the cell and makes it a bold hyperlink to cell A1.</li></ol><p>Formula cells are intentionally excluded.</p></div>
        </div>
        <figure class="atg-figure"><img src="/assets/img/auditticks-link-to-sheet.webp" alt="Audit workpaper containing internal worksheet links created by AuditTicks" loading="lazy"><figcaption>Link to Sheet creates a visible worksheet-name reference that reviewers can follow with one click.</figcaption></figure>
      </section>

      <section id="notes-callouts" class="atg-section atg-searchable" data-search-title="Notes Callouts Post-It Explanation Box Accounting Textbox" data-search-category="Annotate Evidence">
        <div class="atg-section-heading"><span>Annotate evidence</span><h2>Notes and callouts</h2><p>Use purpose-built textboxes so explanations are visually distinct from source evidence.</p></div>
        <div class="atg-card-grid atg-card-grid--4">
          <div class="atg-mini-card"><h3>Callout Box</h3><p>Styled callout for comments, conclusions, or explanations.</p></div>
          <div class="atg-mini-card"><h3>Post-It Note</h3><p>Yellow note-style textbox for reminders or contextual notes.</p></div>
          <div class="atg-mini-card"><h3>Explanation Box</h3><p>Borderless transparent textbox with red text for audit explanations.</p></div>
          <div class="atg-mini-card"><h3>Accounting Textbox</h3><p>Transparent, right-aligned black textbox for accounting values.</p></div>
        </div>
      </section>

      <section id="shapes-lines" class="atg-section atg-searchable" data-search-title="Shapes Lines Dynamic Rectangle Dynamic Arrow Dynamic Line Bracket Draw Line" data-search-category="Annotate Evidence">
        <div class="atg-section-heading"><span>Annotate evidence</span><h2>Shapes and lines</h2><p>Draw attention to specific evidence without modifying the underlying image.</p></div>
        <div class="atg-table-wrap">
          <table class="atg-table atg-table--compact">
            <tbody>
              <tr><td><strong>Dynamic Rectangle</strong></td><td>Draws a rectangle to the bounds of the current selection. A one-cell selection produces a one-cell rectangle; a multi-cell selection uses the selected range.</td></tr>
              <tr><td><strong>Dynamic Arrow</strong></td><td>Creates a directional arrow sized and oriented from the selected range.</td></tr>
              <tr><td><strong>Dynamic Line</strong></td><td>Creates a straight horizontal or vertical line based on the selected range.</td></tr>
              <tr><td><strong>Draw Bracket</strong></td><td>Shows that one comment or conclusion applies to the covered section.</td></tr>
              <tr><td><strong>Draw Line</strong></td><td>Creates the line-marker shape used to show that a mark or conclusion applies across a selected range.</td></tr>
            </tbody>
          </table>
        </div>
        <figure class="atg-figure"><img src="/assets/img/auditticks-evidence-annotations.webp" alt="Audit evidence annotated with rectangles, arrows, and callout boxes" loading="lazy"><figcaption>Evidence annotation tools use the workbook as the review surface while keeping the underlying support visually intact.</figcaption></figure>
      </section>

      <section id="formatting" class="atg-section atg-searchable" data-search-title="Formatting Financial Note Cell Heading AutoFit Borders Fills Align Insert Row Insert Column" data-search-category="Build Workpapers">
        <div class="atg-section-heading"><span>Build workpapers</span><h2>Formatting tools</h2><p>Apply consistent workpaper formatting without repeatedly rebuilding the same Excel styles.</p></div>
        <div class="atg-table-wrap"><table class="atg-table"><thead><tr><th>Tool</th><th>Behavior</th></tr></thead><tbody>
          <tr><td><strong>Financial</strong></td><td>Applies AuditTicks financial-number formatting to the selected cells.</td></tr>
          <tr><td><strong>Note Cell</strong></td><td>Applies wrapping and top-left alignment. A horizontal selection is merged only when doing so will not overwrite values, formulas, hyperlinks, or notes.</td></tr>
          <tr><td><strong>Heading / Heading 2</strong></td><td>Applies standard workpaper heading styles.</td></tr>
          <tr><td><strong>AutoFit</strong></td><td>Wraps text and adjusts selected row heights, including supported merged cells.</td></tr>
          <tr><td><strong>Borders</strong></td><td>Applies blue, red, black, or calculation bottom borders.</td></tr>
          <tr><td><strong>Fills</strong></td><td>Applies green, red, yellow, plum, gray, gray pattern, or removes fill.</td></tr>
          <tr><td><strong>Align</strong></td><td>Provides vertical and horizontal tickmark-alignment options within the selected cells.</td></tr>
          <tr><td><strong>Insert Row</strong></td><td>Inserts a row below, copies the structure of the row above, clears copied constants, and preserves formulas.</td></tr>
          <tr><td><strong>Insert Column</strong></td><td>Inserts a column to the right within the related workpaper area and copies formatting, formulas, validation, and width.</td></tr>
        </tbody></table></div>
        <div class="atg-callout"><strong>Protected worksheets:</strong> row-height and row/column insertion tools cannot modify a protected sheet. Unprotect the worksheet first when your audit methodology and file permissions allow it.</div>
      </section>

      <section id="workpapers" class="atg-section atg-searchable" data-search-title="Workpaper Elements WP Header Attributes Legend Tickmark Legend Annotation Legend Testing Attributes Block Testing Table" data-search-category="Build Workpapers">
        <div class="atg-section-heading"><span>Build workpapers</span><h2>Workpaper elements</h2><p>Insert reusable structures where the audit work needs them instead of forcing every engagement into a single worksheet layout.</p></div>
        <div class="atg-card-grid atg-card-grid--3">
          <div class="atg-mini-card"><h3>WP Header</h3><p>Insert or apply the standard workpaper header to the current worksheet.</p></div>
          <div class="atg-mini-card"><h3>Attributes Legend</h3><p>Insert a legend defining testing attributes and descriptions.</p></div>
          <div class="atg-mini-card"><h3>T/M Legend</h3><p>Insert a tickmark legend so engagement-specific meanings remain documented.</p></div>
          <div class="atg-mini-card"><h3>Annotation Legend</h3><p>Insert Marker and Description of Evidence Observed columns for annotated support.</p></div>
          <div class="atg-mini-card"><h3>Testing Attributes Block</h3><p>Insert a configurable testing-attribute matrix with an Exceptions / Notes column.</p></div>
          <div class="atg-mini-card"><h3>Testing Table</h3><p>Insert a formatted table with Attribute, Test Attribute, Result, Tick Mark, Support Reference, and Comments columns.</p></div>
        </div>
      </section>

      <section id="templates" class="atg-section atg-searchable" data-search-title="Templates Commercial Work Summary WP Support Evidence WP" data-search-category="Build Workpapers">
        <div class="atg-section-heading"><span>Build workpapers</span><h2>Templates</h2><p>Template behavior differs by edition while the core AuditTicks workflow remains the same.</p></div>
        <div class="atg-edition-grid">
          <div class="atg-edition-card"><span>Commercial</span><h3>Configured Template</h3><p>The Commercial edition can copy a configured worksheet template into the active workbook. Template availability and configuration depend on the distributed build.</p></div>
          <div class="atg-edition-card atg-edition-card--work"><span>Work v1.3.0</span><h3>Summary and Support / Evidence templates</h3><p>The Work edition provides <strong>Summary WP</strong> and <strong>Support / Evidence WP</strong> actions using the organization-configured template source.</p><p>Internal template locations are intentionally not published in this public guide.</p></div>
        </div>
        <figure class="atg-figure"><img src="/assets/img/workpaper_template.webp" alt="Example AuditTicks workpaper template" loading="lazy"><figcaption>Templates provide a repeatable starting structure while the auditor retains control of the procedure and documentation.</figcaption></figure>
      </section>

      <section id="review" class="atg-section atg-searchable" data-search-title="Review Initials Date Tab Status Mark Pass Exception Needs Review" data-search-category="Prepare for Review">
        <div class="atg-section-heading"><span>Prepare for review</span><h2>Initials, date, and tab status</h2><p>Add preparer/reviewer identifiers and communicate worksheet status without renaming tabs.</p></div>
        <div class="atg-split-cards">
          <div class="atg-info-card"><span class="atg-chip">Initials &amp; Date</span><h3>Identify who completed or reviewed the work.</h3><p>Use <strong>Initials</strong> from the Review group. Open its dropdown for <strong>Date</strong> when a date stamp is needed.</p></div>
          <div class="atg-info-card"><span class="atg-chip">Tab Status</span><h3>Use worksheet-tab color as a review cue.</h3><ul><li><strong>Mark Pass</strong> — passed/completed status</li><li><strong>Mark Exception</strong> — exception status</li><li><strong>Mark Needs Review</strong> — review-needed status</li><li><strong>Clear Tab Status</strong> — remove the status color</li></ul><p>Tab status changes the tab color only; it does not alter the worksheet name.</p></div>
        </div>
        <figure class="atg-figure"><img src="/assets/img/auditticks-review-ready.webp" alt="Completed audit workpaper with tickmarks, links, notes, signoff, and worksheet status cues" loading="lazy"><figcaption>A review-ready workpaper brings testing results, supporting links, notes, reviewer identification, and worksheet status together.</figcaption></figure>
      </section>

      <section id="tools" class="atg-section atg-searchable" data-search-title="Tools Gridlines Unhide Tabs Save XLSX Copy Guides IIA Standards Sample Size Internal Audit Guide" data-search-category="Configuration">
        <div class="atg-section-heading"><span>Utilities</span><h2>Tools and guides</h2><p>Common workbook utilities remain available from the AuditTicks Ribbon without recreating Excel tasks manually.</p></div>
        <div class="atg-table-wrap"><table class="atg-table atg-table--compact"><tbody>
          <tr><td><strong>Gridlines</strong></td><td>Toggle worksheet gridlines on or off.</td></tr>
          <tr><td><strong>Unhide Tabs</strong></td><td>Unhide worksheets in the active workbook.</td></tr>
          <tr><td><strong>Save XLSX Copy</strong></td><td>Create a macro-free <code>.xlsx</code> copy while leaving the current workbook open and unchanged.</td></tr>
        </tbody></table></div>
        <div class="atg-callout"><strong>Work Guides:</strong> the Work build includes a <strong>Guides</strong> menu for <strong>IIA Standards</strong>, <strong>Sample Size</strong> guidance, and the organization's <strong>Internal Audit Guide</strong>. Employer-specific URLs and documents are intentionally not published here.</div>
        <div class="atg-callout atg-callout--tip"><strong>V1.3.0 cleanup:</strong> the former Trace Precedents, Trace Dependents, and Clear Tracing actions are no longer part of the AuditTicks Tools menu.</div>
      </section>

      <section id="settings" class="atg-section atg-searchable" data-search-title="Settings reviewer role preset default mark color startup workpaper theme template keyboard shortcuts import export reset" data-search-category="Configuration">
        <div class="atg-section-heading"><span>Configuration</span><h2>Settings</h2><p>Configure AuditTicks around your role and workpaper environment rather than resetting the same preferences each session.</p></div>
        <div class="atg-settings-grid">
          <div class="atg-settings-card"><h3>Reviewer role preset</h3><p>Choose the role preset that matches your workflow or use Custom. Presets provide a consistent starting color that can still be changed from the Ribbon.</p></div>
          <div class="atg-settings-card"><h3>Default mark color</h3><p>Set the RGB values used as your normal AuditTicks mark color. The Ribbon palette remains available for one-off changes.</p></div>
          <div class="atg-settings-card"><h3>When Excel starts</h3><p>Choose between starting from your configured default mark color and restoring the most recently used mark color.</p></div>
          <div class="atg-settings-card"><h3>Workpaper Theme</h3><p>Configure the accent and secondary colors used by AuditTicks workpaper-formatting features. Theme colors are separate from the active audit-mark color.</p></div>
          <div class="atg-settings-card"><h3>Workpaper template</h3><p>Configure or validate the template behavior available in your edition. Work distributions can use organization-managed template locations.</p></div>
          <div class="atg-settings-card"><h3>Keyboard shortcuts</h3><p>Enable the shortcut system and configure up to ten key combinations, each mapped to a supported AuditTicks action.</p></div>
          <div class="atg-settings-card"><h3>Import / Export</h3><p>Export and import AuditTicks settings when moving between approved workstations or applying a standardized configuration. Shortcut mappings are included.</p></div>
          <div class="atg-settings-card"><h3>Reset</h3><p>Restore the edition's default settings if a local configuration needs to be rebuilt.</p></div>
        </div>
        <div class="atg-callout atg-callout--tip"><strong>Two independent color systems:</strong> the active mark color controls new audit symbols and color-aware evidence annotations. Workpaper Theme colors control reusable workpaper formatting. Changing one does not require changing the other.</div>
      </section>

      <section id="keyboard-shortcuts" class="atg-section atg-searchable" data-search-title="Keyboard Shortcuts configurable shortcut mappings Ctrl Shift Alt toggle shortcut guide modeless" data-search-category="Configuration">
        <div class="atg-section-heading"><span>Configuration</span><h2>Keyboard shortcuts</h2><p>Assign frequently used AuditTicks actions to custom keyboard combinations so repetitive work can be completed without returning to the Ribbon.</p></div>
        <div class="atg-split-cards">
          <div class="atg-info-card"><span class="atg-chip">Configure</span><h3>Map up to ten shortcuts.</h3><ol><li>Open <strong>AuditTicks → Settings</strong>.</li><li>Check <strong>Enable keyboard shortcuts</strong>.</li><li>Select a combination from the <strong>Shortcut</strong> dropdown.</li><li>Select the corresponding AuditTicks command from the <strong>Action</strong> dropdown.</li><li>Repeat for additional slots and save the settings.</li></ol></div>
          <div class="atg-info-card"><span class="atg-chip">Supported combinations</span><h3>Use modifier-plus-letter combinations.</h3><ul><li><code>Ctrl + Shift + [Letter]</code></li><li><code>Ctrl + Alt + [Letter]</code></li><li><code>Ctrl + Alt + Shift + [Letter]</code></li></ul><p>Duplicate AuditTicks combinations are blocked. A configured mapping can override a matching Excel or other add-in shortcut while that AuditTicks mapping is enabled.</p></div>
        </div>
        <div class="atg-callout atg-callout--tip"><strong>Recommended:</strong> reserve one shortcut for <strong>Tool - Toggle Keyboard Shortcuts</strong>. It opens the current shortcut reference and the same shortcut closes it again.</div>
        <figure class="atg-figure"><img src="/assets/img/auditticks-keyboard-shortcuts-settings.webp" alt="AuditTicks Settings window showing configurable keyboard shortcut slots" width="420" height="631" loading="lazy"><figcaption>Configure shortcut mappings in Settings by pairing a key combination with an AuditTicks action.</figcaption></figure>
        <h3>Keyboard Shortcuts guide</h3>
        <p>The quick-reference guide can be opened directly from the <strong>Shortcuts</strong> button in the Ribbon's <strong>About</strong> group. The guide is modeless, so you can leave it visible while continuing to work in Excel.</p>
        <p>If <strong>Tool - Toggle Keyboard Shortcuts</strong> is mapped to a key combination, press that shortcut once to open the guide and press the <strong>same shortcut again</strong> to close it. The guide can also be dismissed with its <strong>Close</strong> button.</p>
        <figure class="atg-figure"><img src="/assets/img/auditticks-keyboard-shortcuts-guide.webp" alt="AuditTicks Keyboard Shortcuts popup showing currently configured shortcut mappings" width="760" height="430" loading="lazy"><figcaption>The shortcut guide displays the mappings currently configured on that workstation and can be toggled from the Ribbon or from a mapped shortcut.</figcaption></figure>
        <h3>Shortcut behavior and persistence</h3>
        <div class="atg-card-grid atg-card-grid--3">
          <div class="atg-mini-card"><h3>Optional</h3><p>The entire keyboard-shortcut feature can be enabled or disabled from Settings.</p></div>
          <div class="atg-mini-card"><h3>Persistent</h3><p>Configured mappings are stored with AuditTicks settings and remain available across Excel sessions.</p></div>
          <div class="atg-mini-card"><h3>Portable</h3><p>Shortcut mappings are included when AuditTicks settings are exported and imported.</p></div>
        </div>
      </section>

      <section id="work-edition" class="atg-section atg-searchable" data-search-title="Work Edition v1.3.0 Guides IIA Standards Sample Size Internal Audit Guide templates" data-search-category="Configuration">
        <div class="atg-section-heading"><span>Work Edition</span><h2>Organization-specific additions</h2><p>AuditTicks Work includes the shared audit workflow plus organization-managed templates and resource links.</p></div>
        <div class="atg-work-banner"><div><strong>Work v1.3.0</strong><h3>Production team build.</h3><p>The Work distribution provides the normal AuditTicks audit workflow, Summary and Support / Evidence templates, and a Guides menu for organization-approved resources.</p></div><ul><li>Summary WP template</li><li>Support / Evidence WP template</li><li>IIA Standards</li><li>Sample Size guidance</li><li>Internal Audit Guide</li></ul></div>
        <p class="atg-muted">This public documentation intentionally describes the capability without publishing employer-specific SharePoint paths, internal documents, credentials, or proprietary content.</p>
      </section>

      <section id="troubleshooting" class="atg-section atg-searchable" data-search-title="Troubleshooting ribbon missing macros blocked link to sheet template clipboard protected sheet colors keyboard shortcuts" data-search-category="Help">
        <div class="atg-section-heading"><span>Help</span><h2>Troubleshooting</h2><p>Start with the symptom below before changing Excel security or reinstalling the add-in.</p></div>
        <div class="atg-accordion">
          <details open><summary>The AuditTicks ribbon is missing.</summary><div><p>Confirm the XLAM is checked under <strong>File → Options → Add-ins → Manage: Excel Add-ins → Go</strong>. Also check Excel's Disabled Items if the add-in previously failed to load. Close and reopen Excel after re-enabling it.</p></div></details>
          <details><summary>Excel says macros are blocked.</summary><div><p>Follow your organization's macro-security policy. If a trusted XLAM downloaded from the internet is marked as blocked by Windows, the file's Properties dialog may include an Unblock option. Do not broadly lower Excel's macro-security settings to make the add-in run.</p></div></details>
          <details><summary>My configured keyboard shortcut does not run.</summary><div><p>Open Settings and confirm <strong>Enable keyboard shortcuts</strong> is checked, both a shortcut and an action are selected for the row, and the same combination is not assigned to another AuditTicks action. AuditTicks must be loaded in Excel for its mappings to be active.</p></div></details>
          <details><summary>The Keyboard Shortcuts guide does not toggle closed.</summary><div><p>Confirm the mapped action is <strong>Tool - Toggle Keyboard Shortcuts</strong>. That action is specifically designed to open and close the guide using the same key combination. The Ribbon <strong>Shortcuts</strong> button also toggles the window.</p></div></details>
          <details><summary>Link to Sheet does not show the worksheet I need.</summary><div><p>The feature lists <strong>other visible worksheets</strong>. Hidden sheets are not offered as destinations, and the selected source cell cannot contain a formula.</p></div></details>
          <details><summary>Add Figure says no image was detected.</summary><div><p>Copy a screenshot or image to the Windows clipboard first, then select the destination cell and run Add Figure again.</p></div></details>
          <details><summary>A row, column, or AutoFit action fails.</summary><div><p>Confirm the worksheet is not protected and that the active cell is inside the intended contiguous workpaper range. Insert Column also relies on the surrounding workpaper area to determine where the new column belongs.</p></div></details>
          <details><summary>A Work template or guide cannot be opened.</summary><div><p>Confirm you are connected to the required organizational resources and have access to the configured location. Work templates and guides can depend on your organization's authentication, SharePoint, network, and Excel environment.</p></div></details>
          <details><summary>Audit marks start in the wrong color.</summary><div><p>Open Settings and check both the default mark color and startup behavior. If restore-last-used behavior is enabled, the most recently selected palette color becomes the next startup color.</p></div></details>
          <details><summary>Left, Center, or Right did not move a floating mark.</summary><div><p>The Position controls apply horizontal alignment to worksheet cells and future <strong>in-cell</strong> marks. Floating marks are independent worksheet objects, so reposition them directly on the worksheet.</p></div></details>
          <details><summary>I expected Append to work in Floating mode.</summary><div><p>Append is an In-Cell behavior. Floating marks are separate movable textboxes rather than additions to existing cell content.</p></div></details>
        </div>
      </section>

      <section id="faq" class="atg-section atg-searchable" data-search-title="FAQ frequently asked questions Windows Mac audit methodology keyboard shortcuts Work Commercial" data-search-category="Help">
        <div class="atg-section-heading"><span>Help</span><h2>Frequently asked questions</h2></div>
        <div class="atg-faq-grid">
          <div><h3>Does AuditTicks work on Mac?</h3><p>The current add-in is designed for Excel desktop on Windows.</p></div>
          <div><h3>Does AuditTicks decide whether a control passed?</h3><p>No. It helps document the auditor's work; it does not replace evidence evaluation or professional judgment.</p></div>
          <div><h3>Does it require one standard workpaper template?</h3><p>No. Most tools work in the active workbook. Templates and workpaper elements are optional accelerators.</p></div>
          <div><h3>Can I change mark colors?</h3><p>Yes. Use the Ribbon palette for the active audit-mark color and Settings for default/startup behavior. Workpaper Theme colors are configured separately.</p></div>
          <div><h3>Can I create my own keyboard shortcuts?</h3><p>Yes. Configure up to ten mappings in Settings and choose from the supported AuditTicks action catalog. You can also assign one shortcut to toggle the on-screen shortcut guide.</p></div>
          <div><h3>What is the difference between Commercial and Work?</h3><p>The shared audit workflow is substantially the same. Work adds organization-managed templates and internal guide links.</p></div>
          <div><h3>Can I create a macro-free copy for sharing?</h3><p>Yes. Use <strong>Save XLSX Copy</strong> from Tools. The current workbook remains open and unchanged.</p></div>
        </div>
      </section>

      <section class="atg-section atg-guide-footer">
        <div><span class="atg-eyebrow">AuditTicks</span><h2>Built for audit work that still happens in Excel.</h2><p>Return to the product page for evaluation information, screenshots, and product updates.</p></div>
        <a class="atg-btn atg-btn--primary" href="/auditticks-pro/">AuditTicks product page</a>
      </section>
    </main>
  </div>
</article>

<script src="/assets/js/auditticks-guide.js" defer></script>