(() => {
  "use strict";

  const app = document.querySelector("[data-access-conflict-app]");
  if (!app) return;

  const permissions = {
    "vendor-create": "Create vendor",
    "vendor-bank": "Change vendor bank",
    "invoice-enter": "Enter invoice",
    "payment-schedule": "Schedule payment",
    "payment-approve": "Approve payment",
    "payment-hold": "Override payment hold",
    "payment-release": "Release payment",
    "bank-file": "Modify bank file",
    "journal-create": "Create journal",
    "journal-approve": "Approve journal",
    "user-create": "Create user",
    "role-assign": "Assign access role",
    "access-certify": "Certify access",
    "payroll-modify": "Modify payroll",
    "payroll-approve": "Approve payroll",
    "requisition-create": "Create requisition",
    "po-create": "Create purchase order",
    "po-approve": "Approve purchase order",
    "system-config": "Configure production",
    "user-impersonate": "Impersonate user",
    "revenue-adjust": "Create revenue adjustment",
    "revenue-approve": "Approve revenue adjustment",
    "refund-create": "Create customer refund",
    "refund-approve": "Approve customer refund",
    "report-view": "View reporting",
    "payroll-view": "View payroll",
    "payment-view": "View payments",
    "cash-apply": "Apply customer cash"
  };

  const roles = [
    { id: "vendor-admin", name: "Vendor Administrator", permissions: ["vendor-create", "vendor-bank"] },
    { id: "ap-processor", name: "AP Processor", permissions: ["invoice-enter", "payment-schedule"] },
    { id: "ap-approver", name: "AP Approver", permissions: ["payment-approve", "payment-hold"] },
    { id: "treasury-release", name: "Treasury Payment Release", permissions: ["payment-release", "bank-file"], privileged: true },
    { id: "gl-preparer", name: "GL Journal Preparer", permissions: ["journal-create"] },
    { id: "gl-approver", name: "GL Journal Approver", permissions: ["journal-approve"] },
    { id: "iam-admin", name: "Identity Administrator", permissions: ["user-create", "role-assign"], privileged: true },
    { id: "access-reviewer", name: "Access Certification Reviewer", permissions: ["access-certify"] },
    { id: "payroll-admin", name: "Payroll Administrator", permissions: ["payroll-modify"], privileged: true },
    { id: "payroll-approver", name: "Payroll Approver", permissions: ["payroll-approve"] },
    { id: "requester", name: "Procurement Requester", permissions: ["requisition-create"] },
    { id: "buyer", name: "Procurement Buyer", permissions: ["po-create"] },
    { id: "po-approver", name: "Purchase Order Approver", permissions: ["po-approve"] },
    { id: "system-admin", name: "Production System Administrator", permissions: ["system-config", "user-impersonate"], privileged: true },
    { id: "revenue-adjuster", name: "Revenue Adjustment Processor", permissions: ["revenue-adjust"] },
    { id: "revenue-approver", name: "Revenue Adjustment Approver", permissions: ["revenue-approve"] },
    { id: "refund-processor", name: "Customer Refund Processor", permissions: ["refund-create", "cash-apply"] },
    { id: "refund-approver", name: "Customer Refund Approver", permissions: ["refund-approve"] },
    { id: "reporting-user", name: "Financial Reporting User", permissions: ["report-view"] },
    { id: "payroll-viewer", name: "Payroll Inquiry", permissions: ["payroll-view"] },
    { id: "payment-viewer", name: "Payment Inquiry", permissions: ["payment-view"] }
  ];

  const rules = [
    {
      id: "vendor-approve",
      title: "Create or modify vendor + approve payment",
      severity: "Critical",
      kind: "permission",
      a: ["vendor-create", "vendor-bank"],
      b: ["payment-approve"],
      rationale: "A user could establish or redirect a vendor and approve a payment to that vendor without independent intervention.",
      validation: "Confirm production access, vendor-change logging, payment approval limits, and whether a separate release control is effective."
    },
    {
      id: "vendor-release",
      title: "Create or modify vendor + release payment",
      severity: "Critical",
      kind: "permission",
      a: ["vendor-create", "vendor-bank"],
      b: ["payment-release", "bank-file"],
      rationale: "The combination permits control over vendor destination data and the final movement of funds.",
      validation: "Inspect bank-change verification, payment-release evidence, dual authorization, and activity during the review period."
    },
    {
      id: "invoice-approve",
      title: "Enter invoice + approve payment",
      severity: "High",
      kind: "permission",
      a: ["invoice-enter"],
      b: ["payment-approve"],
      rationale: "A user could originate a payable and approve it for payment, reducing independent review over validity and amount.",
      validation: "Determine whether workflow rules prevent self-approval and whether system evidence supports the restriction."
    },
    {
      id: "invoice-release",
      title: "Enter invoice + release payment",
      severity: "High",
      kind: "permission",
      a: ["invoice-enter"],
      b: ["payment-release"],
      rationale: "The user can introduce an invoice and participate in the final payment step, creating an end-to-end disbursement path.",
      validation: "Confirm whether payment approval remains independent and whether release authority is limited by bank or ERP controls."
    },
    {
      id: "approve-release",
      title: "Approve payment + release payment",
      severity: "Critical",
      kind: "permission",
      a: ["payment-approve"],
      b: ["payment-release"],
      rationale: "The same user can approve and execute a payment, eliminating a key authorization separation.",
      validation: "Review release logs, approval hierarchy, payment thresholds, and any required second bank approver."
    },
    {
      id: "journal-self-approval",
      title: "Create journal + approve journal",
      severity: "Critical",
      kind: "permission",
      a: ["journal-create"],
      b: ["journal-approve"],
      rationale: "A user can prepare and approve a journal entry without an independent accounting review.",
      validation: "Test whether the ERP blocks self-approval and inspect a population of entries associated with the user."
    },
    {
      id: "admin-certify",
      title: "Administer access + certify access",
      severity: "Critical",
      kind: "permission",
      a: ["user-create", "role-assign"],
      b: ["access-certify"],
      rationale: "A user can grant access and subsequently certify that the same access remains appropriate.",
      validation: "Determine whether certification excludes self-managed assignments and whether review evidence identifies the approver."
    },
    {
      id: "payroll-self-approval",
      title: "Modify payroll + approve payroll",
      severity: "Critical",
      kind: "permission",
      a: ["payroll-modify"],
      b: ["payroll-approve"],
      rationale: "A user can change payroll data and approve the resulting payroll without independent review.",
      validation: "Inspect payroll-change reports, approval evidence, and whether sensitive changes require separate authorization."
    },
    {
      id: "request-approve",
      title: "Create requisition + approve purchase order",
      severity: "High",
      kind: "permission",
      a: ["requisition-create", "po-create"],
      b: ["po-approve"],
      rationale: "The user can initiate purchasing activity and approve the resulting commitment.",
      validation: "Confirm approval thresholds, delegation rules, and whether self-approval is technically prevented."
    },
    {
      id: "revenue-self-approval",
      title: "Create + approve revenue adjustment",
      severity: "High",
      kind: "permission",
      a: ["revenue-adjust"],
      b: ["revenue-approve"],
      rationale: "A user can create and approve adjustments affecting reported revenue.",
      validation: "Inspect workflow configuration, posting limits, and a population of adjustments initiated by the user."
    },
    {
      id: "refund-self-approval",
      title: "Create + approve customer refund",
      severity: "High",
      kind: "permission",
      a: ["refund-create"],
      b: ["refund-approve"],
      rationale: "A user can initiate and authorize a customer refund without independent review.",
      validation: "Review refund thresholds, approval routing, customer master restrictions, and disbursement evidence."
    },
    {
      id: "terminated-active",
      title: "Terminated employee retains active access",
      severity: "Critical",
      kind: "attribute",
      test: user => user.status === "Terminated" && user.active,
      rationale: "An account associated with a terminated employee remains enabled and may still permit system activity.",
      validation: "Confirm termination date, account ownership, last activity, disablement evidence, and whether access remains technically usable."
    },
    {
      id: "dormant-privileged",
      title: "Dormant privileged account",
      severity: "High",
      kind: "attribute",
      test: (user, context) => context.privileged && user.lastLoginDays > 90 && user.active,
      rationale: "A privileged account has not been used recently but remains available for elevated activity.",
      validation: "Confirm ownership, business need, last successful login, credential controls, and whether the account should be disabled."
    },
    {
      id: "shared-privileged",
      title: "Shared privileged account",
      severity: "Critical",
      kind: "attribute",
      test: (user, context) => user.accountType === "Shared" && context.privileged && user.active,
      rationale: "A shared privileged account limits individual accountability for elevated system activity.",
      validation: "Identify authorized users, credential custody, session logging, emergency-use controls, and named-account alternatives."
    },
    {
      id: "privileged-review",
      title: "Privileged access review missing or overdue",
      severity: "High",
      kind: "attribute",
      test: (user, context) => context.privileged && user.reviewStatus !== "Current" && user.active,
      rationale: "Elevated access has not received timely documented recertification.",
      validation: "Obtain the access review population, evidence of reviewer action, exceptions, and subsequent remediation."
    }
  ];

  const users = [
    { id: "jordan", name: "Jordan Lee", department: "Finance", title: "AP Operations Manager", status: "Active", active: true, accountType: "Named", lastLoginDays: 2, reviewStatus: "Current", roles: ["vendor-admin", "ap-approver", "treasury-release"] },
    { id: "avery", name: "Avery Morgan", department: "Technology", title: "Identity Operations Lead", status: "Active", active: true, accountType: "Named", lastLoginDays: 1, reviewStatus: "Current", roles: ["iam-admin", "access-reviewer"] },
    { id: "taylor", name: "Taylor Chen", department: "Finance", title: "Senior Accountant", status: "Active", active: true, accountType: "Named", lastLoginDays: 4, reviewStatus: "Current", roles: ["gl-preparer", "gl-approver"] },
    { id: "morgan", name: "Morgan Davis", department: "People", title: "Payroll Manager", status: "Active", active: true, accountType: "Named", lastLoginDays: 2, reviewStatus: "Current", roles: ["payroll-admin", "payroll-approver"] },
    { id: "casey", name: "Casey Rivera", department: "Finance", title: "AP Specialist", status: "Active", active: true, accountType: "Named", lastLoginDays: 3, reviewStatus: "Current", roles: ["vendor-admin", "ap-processor"] },
    { id: "riley", name: "Riley Brooks", department: "Technology", title: "Infrastructure Engineer", status: "Active", active: true, accountType: "Named", lastLoginDays: 127, reviewStatus: "Overdue", roles: ["system-admin", "access-reviewer"] },
    { id: "cameron-p", name: "Cameron Patel", department: "Finance", title: "Former AP Analyst", status: "Terminated", active: true, accountType: "Named", lastLoginDays: 18, reviewStatus: "Missing", roles: ["ap-processor", "treasury-release"] },
    { id: "sydney", name: "Sydney Clark", department: "Operations", title: "Category Manager", status: "Active", active: true, accountType: "Named", lastLoginDays: 5, reviewStatus: "Current", roles: ["requester", "po-approver"] },
    { id: "devon", name: "Devon Reed", department: "Finance", title: "AP Team Lead", status: "Active", active: true, accountType: "Named", lastLoginDays: 1, reviewStatus: "Current", roles: ["ap-processor", "ap-approver"] },
    { id: "parker", name: "Parker Evans", department: "Finance", title: "Treasury Supervisor", status: "Active", active: true, accountType: "Named", lastLoginDays: 2, reviewStatus: "Current", roles: ["ap-approver", "treasury-release"] },
    { id: "quinn", name: "Quinn Foster", department: "Technology", title: "IAM Analyst", status: "Active", active: true, accountType: "Named", lastLoginDays: 3, reviewStatus: "Current", roles: ["iam-admin"] },
    { id: "reese", name: "Reese Bennett", department: "Finance", title: "Vendor Master Analyst", status: "Active", active: true, accountType: "Named", lastLoginDays: 2, reviewStatus: "Current", roles: ["vendor-admin"] },
    { id: "dakota", name: "Dakota Price", department: "Finance", title: "Treasury Analyst", status: "Active", active: true, accountType: "Named", lastLoginDays: 1, reviewStatus: "Current", roles: ["treasury-release"] },
    { id: "skyler", name: "Skyler Ross", department: "Operations", title: "Buyer", status: "Active", active: true, accountType: "Named", lastLoginDays: 4, reviewStatus: "Current", roles: ["buyer", "requester"] },
    { id: "emerson", name: "Emerson Ward", department: "Finance", title: "Staff Accountant", status: "Active", active: true, accountType: "Named", lastLoginDays: 2, reviewStatus: "Current", roles: ["gl-preparer"] },
    { id: "rowan", name: "Rowan Hayes", department: "Finance", title: "Accounting Manager", status: "Active", active: true, accountType: "Named", lastLoginDays: 2, reviewStatus: "Current", roles: ["gl-approver"] },
    { id: "hayden", name: "Hayden Cooper", department: "People", title: "Payroll Specialist", status: "Active", active: true, accountType: "Named", lastLoginDays: 6, reviewStatus: "Current", roles: ["payroll-admin"] },
    { id: "finley", name: "Finley Gray", department: "People", title: "Payroll Director", status: "Active", active: true, accountType: "Named", lastLoginDays: 3, reviewStatus: "Current", roles: ["payroll-approver"] },
    { id: "peyton", name: "Peyton Murphy", department: "Technology", title: "Emergency Administration", status: "Active", active: true, accountType: "Shared", lastLoginDays: 12, reviewStatus: "Missing", roles: ["system-admin"] },
    { id: "blake", name: "Blake Turner", department: "Finance", title: "Disbursements Manager", status: "Active", active: true, accountType: "Named", lastLoginDays: 1, reviewStatus: "Current", roles: ["vendor-admin", "treasury-release"] },
    { id: "drew", name: "Drew Collins", department: "Finance", title: "Payment Analyst", status: "Active", active: true, accountType: "Named", lastLoginDays: 4, reviewStatus: "Current", roles: ["ap-processor", "treasury-release"] },
    { id: "kendall", name: "Kendall Scott", department: "Operations", title: "Procurement Manager", status: "Active", active: true, accountType: "Named", lastLoginDays: 3, reviewStatus: "Current", roles: ["buyer", "po-approver"] },
    { id: "jamie", name: "Jamie Bell", department: "Technology", title: "Access Governance Manager", status: "Active", active: true, accountType: "Named", lastLoginDays: 2, reviewStatus: "Current", roles: ["iam-admin", "access-reviewer"] },
    { id: "alex", name: "Alex Kim", department: "Legal & Compliance", title: "Compliance Analyst", status: "Active", active: true, accountType: "Named", lastLoginDays: 5, reviewStatus: "Current", roles: ["reporting-user"] },
    { id: "sam", name: "Sam Torres", department: "Commercial", title: "Revenue Operations Manager", status: "Active", active: true, accountType: "Named", lastLoginDays: 1, reviewStatus: "Current", roles: ["revenue-adjuster", "revenue-approver"] },
    { id: "chris", name: "Chris Miller", department: "Finance", title: "Cash Applications Lead", status: "Active", active: true, accountType: "Named", lastLoginDays: 2, reviewStatus: "Current", roles: ["refund-processor", "refund-approver"] },
    { id: "robin", name: "Robin Adams", department: "Technology", title: "Application Support Analyst", status: "Leave", active: false, accountType: "Named", lastLoginDays: 46, reviewStatus: "Current", roles: ["payment-viewer"] },
    { id: "leslie", name: "Leslie Young", department: "Finance", title: "AP Approver", status: "Active", active: true, accountType: "Named", lastLoginDays: 2, reviewStatus: "Overdue", roles: ["ap-approver"] },
    { id: "jessie", name: "Jessie King", department: "Finance", title: "Vendor Data Lead", status: "Active", active: true, accountType: "Named", lastLoginDays: 8, reviewStatus: "Overdue", roles: ["vendor-admin"] },
    { id: "cameron-h", name: "Cameron Hall", department: "Operations", title: "Senior Buyer", status: "Active", active: true, accountType: "Named", lastLoginDays: 1, reviewStatus: "Current", roles: ["buyer", "po-approver"] },
    { id: "ari", name: "Ari Nelson", department: "Technology", title: "Platform Administrator", status: "Active", active: true, accountType: "Named", lastLoginDays: 5, reviewStatus: "Missing", roles: ["system-admin"] },
    { id: "logan", name: "Logan Baker", department: "Finance", title: "Payment Research Analyst", status: "Active", active: true, accountType: "Named", lastLoginDays: 3, reviewStatus: "Current", roles: ["payment-viewer"] },
    { id: "charlie", name: "Charlie Flores", department: "People", title: "HR Analyst", status: "Active", active: true, accountType: "Named", lastLoginDays: 5, reviewStatus: "Current", roles: ["payroll-viewer"] },
    { id: "micah", name: "Micah Hughes", department: "Finance", title: "Financial Reporting Accountant", status: "Active", active: true, accountType: "Named", lastLoginDays: 2, reviewStatus: "Current", roles: ["gl-preparer", "reporting-user"] },
    { id: "sage", name: "Sage Martin", department: "Technology", title: "Access Review Analyst", status: "Active", active: true, accountType: "Named", lastLoginDays: 2, reviewStatus: "Current", roles: ["access-reviewer"] },
    { id: "elliot", name: "Elliot Woods", department: "Operations", title: "Operations Coordinator", status: "Active", active: true, accountType: "Named", lastLoginDays: 6, reviewStatus: "Current", roles: ["requester"] }
  ];

  const roleMap = new Map(roles.map(role => [role.id, role]));
  const ruleMap = new Map(rules.map(rule => [rule.id, rule]));
  const severityRank = { Critical: 4, High: 3, Moderate: 2, Clear: 1 };

  const state = {
    selectedUserId: "jordan",
    activeTab: "investigate",
    activeRuleId: "vendor-approve",
    removedRoles: new Map(),
    filters: { search: "", severity: "", department: "" }
  };

  const escapeHtml = value => String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");

  function getRemovedRoles(userId) {
    if (!state.removedRoles.has(userId)) state.removedRoles.set(userId, new Set());
    return state.removedRoles.get(userId);
  }

  function getEffectiveRoles(user) {
    const removed = getRemovedRoles(user.id);
    return user.roles.filter(roleId => !removed.has(roleId)).map(roleId => roleMap.get(roleId)).filter(Boolean);
  }

  function getContext(user) {
    const effectiveRoles = getEffectiveRoles(user);
    const permissionSet = new Set(effectiveRoles.flatMap(role => role.permissions));
    return {
      roles: effectiveRoles,
      permissions: permissionSet,
      privileged: effectiveRoles.some(role => role.privileged)
    };
  }

  function permissionRuleMatches(rule, permissionSet) {
    const hasA = rule.a.some(permission => permissionSet.has(permission));
    const hasB = rule.b.some(permission => permissionSet.has(permission));
    return hasA && hasB;
  }

  function conflictsFor(user) {
    const context = getContext(user);
    return rules.filter(rule => {
      if (rule.kind === "permission") return permissionRuleMatches(rule, context.permissions);
      return rule.test(user, context);
    });
  }

  function originalConflictsFor(user) {
    const current = state.removedRoles.get(user.id);
    state.removedRoles.set(user.id, new Set());
    const conflicts = conflictsFor(user);
    if (current) state.removedRoles.set(user.id, current);
    else state.removedRoles.delete(user.id);
    return conflicts;
  }

  function highestSeverity(conflicts) {
    if (!conflicts.length) return "Clear";
    return [...conflicts].sort((a, b) => severityRank[b.severity] - severityRank[a.severity])[0].severity;
  }

  function initials(name) {
    return name.split(/\s+/).map(part => part[0]).slice(0, 2).join("").toUpperCase();
  }

  function shortLabel(label, max = 16) {
    if (label.length <= max) return [label];
    const words = label.split(" ");
    const lines = ["", ""];
    words.forEach(word => {
      const index = lines[0].length <= lines[1].length ? 0 : 1;
      lines[index] = `${lines[index]} ${word}`.trim();
    });
    return lines.filter(Boolean);
  }

  function affectedPermissions(rule, permissionSet) {
    if (rule.kind !== "permission") return new Set();
    return new Set([
      ...rule.a.filter(permission => permissionSet.has(permission)),
      ...rule.b.filter(permission => permissionSet.has(permission))
    ]);
  }

  function conflictPermissionSet(conflicts, permissionSet) {
    const set = new Set();
    conflicts.forEach(rule => affectedPermissions(rule, permissionSet).forEach(permission => set.add(permission)));
    return set;
  }

  function renderKPIs() {
    const originalResults = users.map(user => ({ user, conflicts: originalConflictsFor(user) }));
    const conflictedUsers = originalResults.filter(result => result.conflicts.length);
    const critical = originalResults.reduce((sum, result) => sum + result.conflicts.filter(rule => rule.severity === "Critical").length, 0);
    const privilegedExceptions = originalResults.reduce((sum, result) => sum + result.conflicts.filter(rule => ["dormant-privileged", "shared-privileged", "privileged-review", "terminated-active"].includes(rule.id)).length, 0);

    app.querySelector('[data-kpi="users"]').textContent = users.length;
    app.querySelector('[data-kpi="conflicted"]').textContent = conflictedUsers.length;
    app.querySelector('[data-kpi-detail="conflicted"]').textContent = `${Math.round((conflictedUsers.length / users.length) * 100)}% of the population`;
    app.querySelector('[data-kpi="critical"]').textContent = critical;
    app.querySelector('[data-kpi="privileged"]').textContent = privilegedExceptions;
  }

  function populateDepartmentFilter() {
    const select = app.querySelector('[data-filter="department"]');
    const departments = [...new Set(users.map(user => user.department))].sort();
    select.innerHTML = '<option value="">All departments</option>' + departments.map(department => `<option value="${escapeHtml(department)}">${escapeHtml(department)}</option>`).join("");
    select.value = state.filters.department;
  }

  function filteredUsers() {
    const search = state.filters.search.trim().toLowerCase();
    return users
      .filter(user => {
        const conflicts = conflictsFor(user);
        const severity = highestSeverity(conflicts);
        const roleNames = getEffectiveRoles(user).map(role => role.name).join(" ");
        const haystack = `${user.name} ${user.department} ${user.title} ${roleNames}`.toLowerCase();
        return (!search || haystack.includes(search))
          && (!state.filters.severity || severity === state.filters.severity)
          && (!state.filters.department || user.department === state.filters.department);
      })
      .sort((a, b) => {
        const aConflicts = conflictsFor(a);
        const bConflicts = conflictsFor(b);
        const severityDifference = severityRank[highestSeverity(bConflicts)] - severityRank[highestSeverity(aConflicts)];
        return severityDifference || bConflicts.length - aConflicts.length || a.name.localeCompare(b.name);
      });
  }

  function renderUserList() {
    const container = app.querySelector("[data-user-list]");
    const rows = filteredUsers();
    container.innerHTML = rows.map(user => {
      const conflicts = conflictsFor(user);
      const severity = highestSeverity(conflicts);
      return `<button type="button" class="ace-user-card${user.id === state.selectedUserId ? " is-active" : ""}" data-select-user="${user.id}">
        <span class="ace-user-card__avatar">${initials(user.name)}</span>
        <span class="ace-user-card__name"><strong>${escapeHtml(user.name)}</strong><span>${escapeHtml(user.department)} · ${conflicts.length} signal${conflicts.length === 1 ? "" : "s"}</span></span>
        <span class="ace-severity ace-severity--${severity.toLowerCase()}">${severity}</span>
      </button>`;
    }).join("") || '<div class="ace-insight-empty">No users match the current filters.</div>';
  }

  function svgText(x, y, lines, className, lineHeight = 12) {
    return `<text x="${x}" y="${y}" class="${className}">${lines.map((line, index) => `<tspan x="${x}" dy="${index === 0 ? 0 : lineHeight}">${escapeHtml(line)}</tspan>`).join("")}</text>`;
  }

  function renderGraph() {
    const user = users.find(item => item.id === state.selectedUserId);
    const svg = app.querySelector("[data-access-graph]");
    if (!user) {
      svg.innerHTML = "";
      app.querySelector("[data-graph-empty]").hidden = false;
      return;
    }

    app.querySelector("[data-graph-empty]").hidden = true;
    app.querySelector("[data-graph-title]").textContent = `${user.name} · effective access`;
    const context = getContext(user);
    const conflicts = conflictsFor(user);
    const conflictPermissions = conflictPermissionSet(conflicts, context.permissions);
    const removed = getRemovedRoles(user.id);
    const allRoleIds = user.roles;
    const roleRadius = allRoleIds.length > 4 ? 175 : 155;
    const permissionIds = [...new Set(allRoleIds.flatMap(roleId => roleMap.get(roleId)?.permissions || []))];
    const permissionRadius = 275;
    const cx = 450;
    const cy = 310;

    const rolePositions = new Map();
    allRoleIds.forEach((roleId, index) => {
      const angle = -Math.PI / 2 + (index * Math.PI * 2 / allRoleIds.length);
      rolePositions.set(roleId, {
        x: cx + Math.cos(angle) * roleRadius,
        y: cy + Math.sin(angle) * roleRadius
      });
    });

    const permissionPositions = new Map();
    permissionIds.forEach((permissionId, index) => {
      const angle = -Math.PI / 2 + (index * Math.PI * 2 / permissionIds.length);
      permissionPositions.set(permissionId, {
        x: cx + Math.cos(angle) * permissionRadius,
        y: cy + Math.sin(angle) * permissionRadius
      });
    });

    const edges = [];
    allRoleIds.forEach(roleId => {
      const role = roleMap.get(roleId);
      const rolePosition = rolePositions.get(roleId);
      const roleRemoved = removed.has(roleId);
      edges.push(`<line x1="${cx}" y1="${cy}" x2="${rolePosition.x}" y2="${rolePosition.y}" class="ace-graph-edge${roleRemoved ? "" : " is-active"}" opacity="${roleRemoved ? ".25" : ".8"}"/>`);
      role.permissions.forEach(permissionId => {
        const permissionPosition = permissionPositions.get(permissionId);
        const isConflict = !roleRemoved && conflictPermissions.has(permissionId);
        edges.push(`<line x1="${rolePosition.x}" y1="${rolePosition.y}" x2="${permissionPosition.x}" y2="${permissionPosition.y}" class="ace-graph-edge${isConflict ? " is-conflict" : ""}" opacity="${roleRemoved ? ".18" : ".9"}"/>`);
      });
    });

    const permissionNodes = permissionIds.map(permissionId => {
      const position = permissionPositions.get(permissionId);
      const isConflict = conflictPermissions.has(permissionId) && context.permissions.has(permissionId);
      const lines = shortLabel(permissions[permissionId] || permissionId, 15);
      return `<g class="ace-graph-node ace-graph-node--permission${isConflict ? " is-conflict" : ""}">
        <circle cx="${position.x}" cy="${position.y}" r="34"/>
        ${svgText(position.x, position.y - ((lines.length - 1) * 5), lines, "", 11)}
      </g>`;
    }).join("");

    const roleNodes = allRoleIds.map(roleId => {
      const role = roleMap.get(roleId);
      const position = rolePositions.get(roleId);
      const roleRemoved = removed.has(roleId);
      const lines = shortLabel(role.name, 14);
      return `<g class="ace-graph-node ace-graph-node--role is-removable${roleRemoved ? " is-simulated" : ""}" data-graph-role="${roleId}" tabindex="0" role="button" aria-label="${roleRemoved ? "Restore" : "Remove"} ${escapeHtml(role.name)} in simulation">
        <circle cx="${position.x}" cy="${position.y}" r="48"/>
        ${svgText(position.x, position.y - ((lines.length - 1) * 6) - 4, lines, "", 12)}
        <text x="${position.x}" y="${position.y + 26}" class="ace-graph-role-action">${roleRemoved ? "RESTORE" : "REMOVE"}</text>
      </g>`;
    }).join("");

    const userLines = shortLabel(user.name, 18);
    const simulationLabel = removed.size ? `${removed.size} role${removed.size === 1 ? "" : "s"} removed` : `${conflicts.length} current signal${conflicts.length === 1 ? "" : "s"}`;

    svg.innerHTML = `
      <g>${edges.join("")}</g>
      <g>${permissionNodes}</g>
      <g>${roleNodes}</g>
      <g class="ace-graph-node ace-graph-node--user">
        <circle cx="${cx}" cy="${cy}" r="72"/>
        <text x="${cx}" y="${cy - 17}" class="ace-graph-label">SELECTED USER</text>
        ${svgText(cx, cy + 4, userLines, "", 15)}
        <text x="${cx}" y="${cy + 41}" class="ace-graph-label">${escapeHtml(simulationLabel)}</text>
      </g>`;
  }

  function conflictPath(rule, context) {
    if (rule.kind !== "permission") return "";
    const aPermission = rule.a.find(permission => context.permissions.has(permission));
    const bPermission = rule.b.find(permission => context.permissions.has(permission));
    if (!aPermission || !bPermission) return "";
    return `<div class="ace-conflict-path"><b>${escapeHtml(permissions[aPermission])}</b><i>×</i><b>${escapeHtml(permissions[bPermission])}</b></div>`;
  }

  function renderInsight() {
    const user = users.find(item => item.id === state.selectedUserId);
    const container = app.querySelector("[data-user-insight]");
    if (!user) {
      container.innerHTML = '<div class="ace-insight-empty">Select a user to review the access risk.</div>';
      return;
    }

    const context = getContext(user);
    const conflicts = conflictsFor(user);
    const originalConflicts = originalConflictsFor(user);
    const severity = highestSeverity(conflicts);
    const removed = getRemovedRoles(user.id);
    const conflictCards = conflicts.length
      ? conflicts.map(rule => `<article class="ace-conflict-card${rule.severity === "High" ? " is-high" : rule.severity === "Moderate" ? " is-moderate" : ""}">
          <small>${rule.severity} access signal</small>
          <strong>${escapeHtml(rule.title)}</strong>
          <span>${escapeHtml(rule.rationale)}</span>
          ${conflictPath(rule, context)}
        </article>`).join("")
      : '<div class="ace-remediation-result">No active conflict remains under the current simulation.</div>';

    const roleRows = user.roles.map(roleId => {
      const role = roleMap.get(roleId);
      const isRemoved = removed.has(roleId);
      return `<div class="ace-role-row${isRemoved ? " is-removed" : ""}">
        <span>${escapeHtml(role.name)}</span>
        <button type="button" data-toggle-role="${roleId}">${isRemoved ? "Restore" : "Remove"}</button>
      </div>`;
    }).join("");

    const resultText = removed.size
      ? conflicts.length
        ? `${originalConflicts.length} original signals → ${conflicts.length} remain`
        : `${originalConflicts.length} original signals → all resolved`
      : "Remove a role to test a proposed remediation.";

    const nextStep = conflicts[0]?.validation || "Confirm that removed access is unnecessary, approved, and technically revoked before closing the exception.";

    container.innerHTML = `
      <div class="ace-profile-head">
        <small>Selected account</small>
        <strong>${escapeHtml(user.name)}</strong>
        <span>${escapeHtml(user.title)} · ${escapeHtml(user.department)}</span>
        <div class="ace-profile-status">
          <b>${escapeHtml(user.status)}</b><b>${escapeHtml(user.accountType)} account</b><b>${user.lastLoginDays} days since login</b>
          <span class="ace-severity ace-severity--${severity.toLowerCase()}">${severity}</span>
        </div>
      </div>
      <section class="ace-insight-section"><small>Detected risk</small>${conflictCards}</section>
      <section class="ace-insight-section"><small>Remediation simulator</small><div class="ace-role-list">${roleRows}</div><div class="ace-remediation-result${conflicts.length ? " is-open" : ""}">${escapeHtml(resultText)}</div></section>
      <section class="ace-insight-section"><small>Next audit procedure</small><p class="ace-audit-next">${escapeHtml(nextStep)}</p></section>`;
  }

  const matrixCapabilities = [
    { id: "vendor-create", label: "Create vendor" },
    { id: "vendor-bank", label: "Change bank" },
    { id: "invoice-enter", label: "Enter invoice" },
    { id: "payment-approve", label: "Approve payment" },
    { id: "payment-release", label: "Release payment" },
    { id: "journal-create", label: "Create journal" },
    { id: "journal-approve", label: "Approve journal" },
    { id: "access-certify", label: "Certify access" }
  ];

  function ruleForCapabilities(a, b) {
    return rules.find(rule => {
      if (rule.kind !== "permission") return false;
      return (rule.a.includes(a) && rule.b.includes(b)) || (rule.a.includes(b) && rule.b.includes(a));
    });
  }

  function renderMatrix() {
    const container = app.querySelector("[data-conflict-matrix]");
    const cells = ['<div class="ace-matrix-cell is-heading">Business capability</div>'];
    matrixCapabilities.forEach(capability => cells.push(`<div class="ace-matrix-cell is-heading">${escapeHtml(capability.label)}</div>`));

    matrixCapabilities.forEach((row, rowIndex) => {
      cells.push(`<div class="ace-matrix-cell is-row-heading">${escapeHtml(row.label)}</div>`);
      matrixCapabilities.forEach((column, columnIndex) => {
        const rule = rowIndex === columnIndex ? null : ruleForCapabilities(row.id, column.id);
        const active = rule && rule.id === state.activeRuleId;
        const className = rule
          ? `ace-matrix-cell ${rule.severity === "Critical" ? "is-conflict" : "is-high"}${active ? " is-active" : ""}`
          : "ace-matrix-cell";
        cells.push(`<div class="${className}">${rule ? `<button type="button" data-select-rule="${rule.id}" aria-label="${escapeHtml(rule.title)}"><span class="ace-matrix-dot"></span></button>` : ""}</div>`);
      });
    });

    container.innerHTML = `<div class="ace-matrix-grid">${cells.join("")}</div>`;
    renderMatrixDetail();
  }

  function usersAffectedByRule(rule) {
    return users.filter(user => originalConflictsFor(user).some(conflict => conflict.id === rule.id));
  }

  function renderMatrixDetail() {
    const container = app.querySelector("[data-matrix-detail]");
    const rule = ruleMap.get(state.activeRuleId) || rules.find(item => item.kind === "permission");
    const affected = usersAffectedByRule(rule);
    const permissionLabels = [...new Set([...(rule.a || []), ...(rule.b || [])])].map(permission => permissions[permission]);
    container.innerHTML = `
      <small>${escapeHtml(rule.severity)} conflict rule</small>
      <strong>${escapeHtml(rule.title)}</strong>
      <p>${escapeHtml(rule.rationale)}</p>
      <h4>Effective permissions evaluated</h4>
      <div class="ace-rule-tags">${permissionLabels.map(label => `<span>${escapeHtml(label)}</span>`).join("")}</div>
      <h4>Affected users</h4>
      <div class="ace-affected-list">${affected.map(user => `<button type="button" data-open-user="${user.id}"><span>${escapeHtml(user.name)}</span><b>${escapeHtml(user.department)}</b></button>`).join("") || "<p>No users currently match this rule.</p>"}</div>
      <h4>Validation focus</h4>
      <p>${escapeHtml(rule.validation)}</p>`;
  }

  function renderPopulation() {
    const tbody = app.querySelector("[data-population-body]");
    const sorted = [...users].sort((a, b) => {
      const aConflicts = conflictsFor(a);
      const bConflicts = conflictsFor(b);
      return severityRank[highestSeverity(bConflicts)] - severityRank[highestSeverity(aConflicts)] || bConflicts.length - aConflicts.length || a.name.localeCompare(b.name);
    });

    tbody.innerHTML = sorted.map(user => {
      const conflicts = conflictsFor(user);
      const severity = highestSeverity(conflicts);
      const reviewClass = user.reviewStatus === "Missing" ? " is-missing" : user.reviewStatus === "Overdue" ? " is-overdue" : "";
      return `<tr>
        <td><button type="button" data-open-user="${user.id}">${escapeHtml(user.name)}</button><br><small>${escapeHtml(user.title)}</small></td>
        <td>${escapeHtml(user.department)}</td>
        <td>${escapeHtml(user.status)}${user.active ? "" : " · Disabled"}</td>
        <td>${getEffectiveRoles(user).length}</td>
        <td><span class="ace-count-badge${conflicts.length ? " has-conflict" : ""}">${conflicts.length}</span></td>
        <td><span class="ace-severity ace-severity--${severity.toLowerCase()}">${severity}</span></td>
        <td><span class="ace-review-badge${reviewClass}">${escapeHtml(user.reviewStatus)}</span></td>
      </tr>`;
    }).join("");
  }

  function renderAll() {
    renderKPIs();
    renderUserList();
    renderGraph();
    renderInsight();
    renderMatrix();
    renderPopulation();
  }

  function selectUser(userId, openInvestigation = false) {
    if (!users.some(user => user.id === userId)) return;
    state.selectedUserId = userId;
    if (openInvestigation) switchTab("investigate");
    renderUserList();
    renderGraph();
    renderInsight();
  }

  function toggleRole(userId, roleId) {
    const user = users.find(item => item.id === userId);
    if (!user || !user.roles.includes(roleId)) return;
    const removed = getRemovedRoles(userId);
    if (removed.has(roleId)) removed.delete(roleId);
    else removed.add(roleId);
    renderAll();
  }

  function switchTab(tabName) {
    state.activeTab = tabName;
    app.querySelectorAll("[data-tab]").forEach(button => button.classList.toggle("is-active", button.dataset.tab === tabName));
    app.querySelectorAll("[data-view]").forEach(view => {
      const active = view.dataset.view === tabName;
      view.hidden = !active;
      view.classList.toggle("is-active", active);
    });
  }

  app.addEventListener("click", event => {
    const userButton = event.target.closest("[data-select-user]");
    if (userButton) {
      selectUser(userButton.dataset.selectUser);
      return;
    }

    const openUserButton = event.target.closest("[data-open-user]");
    if (openUserButton) {
      selectUser(openUserButton.dataset.openUser, true);
      return;
    }

    const roleButton = event.target.closest("[data-toggle-role]");
    if (roleButton) {
      toggleRole(state.selectedUserId, roleButton.dataset.toggleRole);
      return;
    }

    const graphRole = event.target.closest("[data-graph-role]");
    if (graphRole) {
      toggleRole(state.selectedUserId, graphRole.dataset.graphRole);
      return;
    }

    const ruleButton = event.target.closest("[data-select-rule]");
    if (ruleButton) {
      state.activeRuleId = ruleButton.dataset.selectRule;
      renderMatrix();
      return;
    }

    const tabButton = event.target.closest("[data-tab]");
    if (tabButton) {
      switchTab(tabButton.dataset.tab);
      return;
    }

    const action = event.target.closest("[data-action]");
    if (!action) return;
    if (action.dataset.action === "reset-all") {
      state.removedRoles.clear();
      state.filters = { search: "", severity: "", department: "" };
      app.querySelectorAll("[data-filter]").forEach(input => { input.value = ""; });
      state.selectedUserId = "jordan";
      renderAll();
    }
    if (action.dataset.action === "highest-risk") {
      const highest = [...users].sort((a, b) => {
        const aConflicts = originalConflictsFor(a);
        const bConflicts = originalConflictsFor(b);
        return severityRank[highestSeverity(bConflicts)] - severityRank[highestSeverity(aConflicts)] || bConflicts.length - aConflicts.length;
      })[0];
      selectUser(highest.id, true);
    }
  });

  app.addEventListener("keydown", event => {
    const graphRole = event.target.closest("[data-graph-role]");
    if (graphRole && (event.key === "Enter" || event.key === " ")) {
      event.preventDefault();
      toggleRole(state.selectedUserId, graphRole.dataset.graphRole);
    }
  });

  app.addEventListener("input", event => {
    const filter = event.target.closest("[data-filter]");
    if (!filter) return;
    state.filters[filter.dataset.filter] = filter.value;
    renderUserList();
  });

  app.addEventListener("change", event => {
    const filter = event.target.closest("[data-filter]");
    if (!filter) return;
    state.filters[filter.dataset.filter] = filter.value;
    renderUserList();
  });

  populateDepartmentFilter();
  renderAll();
  switchTab("investigate");
})();