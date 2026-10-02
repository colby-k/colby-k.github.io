---
layout: null
permalink: /auditticks-pro/
title: "AuditTicks | Internal Audit Workflow Project"
description: "AuditTicks is an independent Excel workflow project for internal audit documentation, testing, evidence annotation, references, navigation, workpaper structures, and review."
---
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <meta name="description" content="{{ page.description }}" />
  <meta name="theme-color" content="#0c1a2a" />
  <meta name="color-scheme" content="light" />

  <title>{{ page.title }}</title>
  <link rel="canonical" href="https://colby-k.github.io/auditticks-pro/" />
  <link rel="icon" href="{{ '/assets/img/AuditTicksPro_Icon.png' | relative_url }}" />

  <meta property="og:type" content="website" />
  <meta property="og:title" content="{{ page.title }}" />
  <meta property="og:description" content="{{ page.description }}" />
  <meta property="og:url" content="https://colby-k.github.io/auditticks-pro/" />
  <meta property="og:image" content="https://colby-k.github.io/assets/img/auditticks-overview.webp" />
  <meta name="twitter:card" content="summary_large_image" />

  <link rel="stylesheet" href="{{ '/assets/css/auditticks-pro.css' | relative_url }}" />
  <script src="{{ '/assets/js/auditticks-pro.js' | relative_url }}" defer></script>
</head>
<body>
<header class="site-header">
    <div class="shell">
      <a class="brand" href="{{ '/' | relative_url }}">
        <span class="brand-mark"><img src="{{ '/assets/img/AuditTicksPro_Icon.png' | relative_url }}" alt="" /></span>
        <span>Colby Kellersberger · Internal Audit Leadership</span>
      </a>
      <nav class="nav" aria-label="Primary navigation">
        <a href="{{ '/' | relative_url }}">Home</a>
        <a href="{{ '/leadership/' | relative_url }}">Experience</a>
        <a href="{{ '/audit-impact/' | relative_url }}">Impact</a>
        <a href="{{ '/audit-intelligence/' | relative_url }}">Innovation</a>
        <a class="nav-cta" href="{{ '/auditticks-pro/guide/' | relative_url }}">User Guide ↗</a>
      </nav>
    </div>
  </header>

  <main>
    <section class="hero">
      <div class="shell hero-grid">
        <div class="fade-up">
          <div class="eyebrow">AuditTicks · Excel workflow for internal audit</div>
          <h1>Spend less time formatting the workpaper.</h1>
          <p class="lead">AuditTicks standardizes the repetitive mechanics of Excel-based audit workpapers—testing marks, evidence annotation, references, navigation, workpaper structures, and review cues—while leaving professional judgment with the auditor.</p>
          <div class="hero-actions">
            <a class="button button-primary" href="#showcase">See AuditTicks in action ↓</a>
            <a class="button button-secondary" href="{{ '/auditticks-pro/guide/' | relative_url }}">View user guide ↗</a>
          </div>
        </div>
        <div class="hero-visual fade-up">
          <div class="hero-card">
            <img src="{{ '/assets/img/auditticks-overview.webp' | relative_url }}" alt="AuditTicks ribbon above an example accounts-payable audit workpaper in Microsoft Excel" />
          </div>
          <div class="visual-label"><span class="dot"></span> Independent portfolio project · V1.3.0</div>
        </div>
      </div>
    </section>

    <div class="capability-strip" aria-label="AuditTicks project facts">
      <div class="shell">
        <div class="capability"><strong>Excel for Windows</strong><span>Built directly into the desktop workflow</span></div>
        <div class="capability"><strong>Works in existing workbooks</strong><span>No forced audit-template model</span></div>
        <div class="capability"><strong>VBA-based XLAM</strong><span>Purpose-built Ribbon workflow</span></div>
        <div class="capability"><strong>Audit workflow first</strong><span>Mechanics standardized; judgment preserved</span></div>
      </div>
    </div>

    <section class="principles">
      <div class="shell">
        <div class="section-head">
          <div class="eyebrow">The design problem</div>
          <h2>Standardize what repeats. Keep judgment where it belongs.</h2>
          <p class="section-copy">The project started with a simple observation: much of the time spent making an Excel audit workpaper understandable is not audit judgment. It is repetitive documentation mechanics.</p>
        </div>
        <div class="principle-grid">
          <article class="principle-card">
            <div class="number">01 · IDENTIFY THE FRICTION</div>
            <h3>Repeated mechanics consume attention that should go to audit work.</h3>
            <p>Tickmarks, references, formatting, notes, evidence links, and testing structures are frequently recreated even when the underlying mechanics are repeatable.</p>
          </article>
          <article class="principle-card">
            <div class="number">02 · STANDARDIZE THE REPEATABLE</div>
            <h3>Create a common workpaper language without forcing one template.</h3>
            <p>Repeatable testing marks, procedure-direction cues, references, tie-outs, evidence conventions, and formatting reduce avoidable inconsistency.</p>
          </article>
          <article class="principle-card">
            <div class="number">03 · PRESERVE JUDGMENT</div>
            <h3>Automate mechanics—not the audit conclusion.</h3>
            <p>The tool can improve navigation, documentation consistency, and review clarity. The auditor still owns the procedure, evidence, professional judgment, and conclusion.</p>
          </article>
        </div>
      </div>
    </section>

    <section class="showcase" id="showcase">
      <div class="shell">
        <div class="section-head">
          <div class="eyebrow">See it in action</div>
          <h2>Built around the workpaper.</h2>
          <p class="section-copy">Move through the same workflow an auditor uses: document testing, connect support, annotate evidence, cross-reference results, and prepare the workbook for review.</p>
        </div>

        <div class="showcase-panel">
          <div class="tabs" role="tablist" aria-label="AuditTicks feature showcase">
            <button class="tab" type="button" role="tab" aria-controls="feature-panel" aria-selected="true" data-key="testing">Testing</button>
            <button class="tab" type="button" role="tab" aria-controls="feature-panel" aria-selected="false" data-key="tickmarks">Tickmarks</button>
            <button class="tab" type="button" role="tab" aria-controls="feature-panel" aria-selected="false" data-key="evidence">Evidence</button>
            <button class="tab" type="button" role="tab" aria-controls="feature-panel" aria-selected="false" data-key="references">References</button>
            <button class="tab" type="button" role="tab" aria-controls="feature-panel" aria-selected="false" data-key="review">Review</button>
          </div>
          <div class="showcase-body" id="feature-panel" role="tabpanel" aria-live="polite">
            <div class="showcase-copy">
              <div class="eyebrow" id="demoEyebrow">Testing workflow</div>
              <h3 id="demoTitle">Keep the test result beside the procedure.</h3>
              <p id="demoText">Structured testing marks make the result visible without separating it from the procedure, item, evidence reference, or exception note.</p>
              <ul class="showcase-list" id="demoList">
                <li>Pass, exception, and N/A treatment</li>
                <li>Vouched and Traced procedure direction</li>
                <li>Testing structures and legends</li>
              </ul>
            </div>
            <div class="showcase-media">
              <div class="showcase-frame">
                <img id="demoImage" src="{{ '/assets/img/auditticks-testing-matrix.webp' | relative_url }}" alt="Audit testing matrix showing AuditTicks testing marks" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="toolkit">
      <div class="shell">
        <div class="section-head">
          <div class="eyebrow">The toolkit</div>
          <h2>One toolkit. Across the audit workpaper.</h2>
          <p class="section-copy">AuditTicks is organized around recurring workpaper tasks rather than isolated buttons. The result is a common set of mechanics that can travel across different audit procedures and workbook designs.</p>
        </div>
        <div class="feature-grid">
          <article class="feature-card"><div class="feature-icon">✓</div><h3>Testing</h3><p>In-cell tickmarks, Vouched and Traced procedure marks, N/A treatment, testing attributes, result legends, and structured testing tables.</p></article>
          <article class="feature-card"><div class="feature-icon">□</div><h3>Evidence</h3><p>Floating annotations, figures, callouts, arrows, lines, rectangles, brackets, and selection-aware shapes placed directly beside supporting evidence.</p></article>
          <article class="feature-card"><div class="feature-icon">↗</div><h3>References</h3><p>Worksheet hyperlinks, indexing symbols, cross-references, financial-source marks, tie-outs, and compact navigation between testing and support.</p></article>
          <article class="feature-card"><div class="feature-icon">▦</div><h3>Workpapers</h3><p>Headers, legends, testing structures, reusable workpaper elements, formatting actions, themes, and template insertion for repeatable mechanics.</p></article>
          <article class="feature-card"><div class="feature-icon">◎</div><h3>Review</h3><p>Initials, dates, tab-status cues, references, and consistent notation that reduce the amount of interpretation required during review.</p></article>
          <article class="feature-card"><div class="feature-icon">⌘</div><h3>Productivity</h3><p>Configurable shortcuts, a quick-reference window, gridline and tab utilities, and macro-free XLSX export when a clean deliverable is needed.</p></article>
        </div>
      </div>
    </section>

    <section class="workflow">
      <div class="shell">
        <div class="section-head">
          <div class="eyebrow">Audit workflow</div>
          <h2>Designed to follow the work—not interrupt it.</h2>
          <p class="section-copy">The add-in is most useful when its tools disappear into the sequence of work the auditor is already performing.</p>
        </div>
        <div class="workflow-track">
          <div class="workflow-step"><div class="workflow-dot">01</div><h3>Population</h3><p>Structure source data, references, and workpaper elements.</p></div>
          <div class="workflow-step"><div class="workflow-dot">02</div><h3>Sample</h3><p>Prepare selections and move cleanly into detailed testing.</p></div>
          <div class="workflow-step"><div class="workflow-dot">03</div><h3>Test</h3><p>Apply result marks, criteria, procedure direction, and notes.</p></div>
          <div class="workflow-step"><div class="workflow-dot">04</div><h3>Evidence</h3><p>Link support and annotate exactly what the test relied on.</p></div>
          <div class="workflow-step"><div class="workflow-dot">05</div><h3>Exception</h3><p>Call out differences and connect the explanation to the result.</p></div>
          <div class="workflow-step"><div class="workflow-dot">06</div><h3>Review</h3><p>Use consistent notation, navigation, status, and signoff cues.</p></div>
        </div>
      </div>
    </section>

    <section class="review-section">
      <div class="review-grid">
        <div class="review-media">
          <img src="{{ '/assets/img/auditticks-review-ready.webp' | relative_url }}" alt="Review-ready Excel audit workpaper with testing, supporting references, notes, and worksheet status" />
        </div>
        <div class="review-copy">
          <div class="eyebrow">Built for review</div>
          <h2>The workpaper should explain itself.</h2>
          <p>Audit documentation is not finished when the preparer understands it. Consistent notation and direct evidence navigation help the reviewer understand what was tested, what support was used, where exceptions were identified, and how the workpaper fits together.</p>
          <div class="review-points">
            <div class="review-point"><b>01</b><span>Consistent marks reduce reinterpretation between preparer and reviewer.</span></div>
            <div class="review-point"><b>02</b><span>Worksheet links shorten the path from a test result to the underlying support.</span></div>
            <div class="review-point"><b>03</b><span>Evidence annotations keep the auditor's explanation beside the item being inspected.</span></div>
            <div class="review-point"><b>04</b><span>Status, initials, dates, and legends create clearer review cues without taking over the audit conclusion.</span></div>
          </div>
        </div>
      </div>
    </section>

    <section class="statement">
      <div class="shell">
        <div class="eyebrow">Design principle</div>
        <h2>Automate the mechanics.<br><span class="red">Not the audit conclusion.</span></h2>
        <p>AuditTicks can make the workpaper more consistent, navigable, and reviewable. It does not decide what procedure is appropriate, whether evidence is sufficient, whether an exception matters, or what conclusion the auditor should reach.</p>
      </div>
    </section>

    <section class="facts">
      <div class="shell facts-grid">
        <div>
          <div class="eyebrow">What the project demonstrates</div>
          <h2>Practical product thinking applied to an audit problem.</h2>
          <p class="section-copy">AuditTicks demonstrates a problem-solving pattern that also applies to audit leadership: observe recurring friction, decide what should be standardized, design around the actual user workflow, test the solution through use, and keep responsibility with the professional where judgment matters.</p>
          <div class="hero-actions">
            <a class="button button-primary" href="{{ '/auditticks-pro/guide/' | relative_url }}">Explore the V1.3.0 user guide ↗</a>
            <a class="button button-secondary" href="{{ '/audit-intelligence/' | relative_url }}">Other innovation projects ↗</a>
          </div>
        </div>
        <div>
          <div class="fact-list">
            <div class="fact"><span>Platform</span><strong>Excel desktop for Windows</strong></div>
            <div class="fact"><span>Format</span><strong>VBA-based XLAM</strong></div>
            <div class="fact"><span>Current baseline</span><strong>V1.3.0</strong></div>
            <div class="fact"><span>Focus</span><strong>Audit workpaper workflow</strong></div>
            <div class="fact"><span>Project type</span><strong>Independent portfolio project</strong></div>
            <div class="fact"><span>Design principle</span><strong>Standardize mechanics, preserve judgment</strong></div>
          </div>
          <div class="disclaimer">Public demonstrations use fictional data and are separate from employer work. Any organization evaluating an Excel add-in should apply its own software, macro, and information-security policies.</div>
        </div>
      </div>
    </section>
  </main>

  <footer class="footer">
    <div class="shell">
      <span>© 2026 Colby Kellersberger. Built as an independent portfolio project.</span>
      <a href="{{ '/' | relative_url }}">Return to portfolio ↗</a>
    </div>
  </footer>
</body>
</html>
