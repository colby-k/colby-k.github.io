/*
Full-Population Vendor Payment Testing
Synthetic demonstration — SQL Server / T-SQL

Creates a deterministic population of 50,000 payments. The population contains
six intentionally seeded exception patterns for demonstrating audit-focused SQL.
No employer, client, or confidential information is represented.
*/

SET NOCOUNT ON;
SET XACT_ABORT ON;

IF SCHEMA_ID('audit_demo') IS NULL
    EXEC('CREATE SCHEMA audit_demo');
GO

DROP TABLE IF EXISTS audit_demo.test_results;
DROP TABLE IF EXISTS audit_demo.vendor_bank_changes;
DROP TABLE IF EXISTS audit_demo.approvals;
DROP TABLE IF EXISTS audit_demo.payments;
DROP TABLE IF EXISTS audit_demo.vendors;
GO

CREATE TABLE audit_demo.vendors (
    vendor_id            int            NOT NULL PRIMARY KEY,
    vendor_name          nvarchar(120)  NOT NULL,
    vendor_status        varchar(12)    NOT NULL,
    bank_account_token   varchar(20)    NOT NULL,
    created_date         date           NOT NULL
);

CREATE TABLE audit_demo.payments (
    payment_id           bigint         NOT NULL PRIMARY KEY,
    vendor_id            int            NOT NULL,
    invoice_number       varchar(40)    NOT NULL,
    invoice_date         date           NOT NULL,
    payment_date         date           NOT NULL,
    amount               decimal(12,2)  NOT NULL,
    approval_limit       decimal(12,2)  NOT NULL,
    payment_method       varchar(12)    NOT NULL,
    is_manual            bit            NOT NULL,
    bank_account_token   varchar(20)    NOT NULL,
    synthetic_scenario   varchar(40)    NULL,
    CONSTRAINT FK_payments_vendor
        FOREIGN KEY (vendor_id) REFERENCES audit_demo.vendors(vendor_id)
);

CREATE TABLE audit_demo.approvals (
    approval_id          bigint IDENTITY(1,1) NOT NULL PRIMARY KEY,
    payment_id           bigint         NOT NULL,
    approved_by          varchar(30)    NOT NULL,
    approved_at          datetime2(0)   NOT NULL,
    approval_limit       decimal(12,2)  NOT NULL,
    CONSTRAINT FK_approvals_payment
        FOREIGN KEY (payment_id) REFERENCES audit_demo.payments(payment_id)
);

CREATE TABLE audit_demo.vendor_bank_changes (
    change_id            int IDENTITY(1,1) NOT NULL PRIMARY KEY,
    vendor_id            int            NOT NULL,
    old_account_token    varchar(20)    NOT NULL,
    new_account_token    varchar(20)    NOT NULL,
    changed_at           datetime2(0)   NOT NULL,
    CONSTRAINT FK_bank_change_vendor
        FOREIGN KEY (vendor_id) REFERENCES audit_demo.vendors(vendor_id)
);
GO

/* 1,000 synthetic vendors. Vendors 981–1000 are intentionally inactive. */
WITH
e1(n) AS (
    SELECT 1 FROM (VALUES (0),(0),(0),(0),(0),(0),(0),(0),(0),(0)) v(n)
),
e2(n) AS (SELECT 1 FROM e1 a CROSS JOIN e1 b),
e4(n) AS (SELECT 1 FROM e2 a CROSS JOIN e2 b),
numbers AS (
    SELECT TOP (1000) ROW_NUMBER() OVER (ORDER BY (SELECT NULL)) AS n
    FROM e4
)
INSERT audit_demo.vendors (
    vendor_id, vendor_name, vendor_status, bank_account_token, created_date
)
SELECT
    n,
    CONCAT('Synthetic Vendor ', RIGHT(CONCAT('0000', n), 4)),
    CASE WHEN n >= 981 THEN 'Inactive' ELSE 'Active' END,
    CONCAT('BANK-', RIGHT(CONCAT('000000', n), 6)),
    DATEADD(day, -(n % 700), CAST('2025-01-01' AS date))
FROM numbers;

/* Give selected demonstration vendors human-readable names. */
UPDATE audit_demo.vendors SET vendor_name = 'Northstar Component Supply' WHERE vendor_id = 901;
UPDATE audit_demo.vendors SET vendor_name = 'Cedar Ridge Logistics' WHERE vendor_id = 951;
UPDATE audit_demo.vendors SET vendor_name = 'Former Supplier 981' WHERE vendor_id = 981;
GO

/*
49,752 ordinary payments.
- Active vendors only
- Unique invoice numbers
- Amounts below the split-payment test band
- Weekday, system-generated ACH payments
*/
WITH
e1(n) AS (
    SELECT 1 FROM (VALUES (0),(0),(0),(0),(0),(0),(0),(0),(0),(0)) v(n)
),
e2(n) AS (SELECT 1 FROM e1 a CROSS JOIN e1 b),
e4(n) AS (SELECT 1 FROM e2 a CROSS JOIN e2 b),
e8(n) AS (SELECT 1 FROM e4 a CROSS JOIN e4 b),
numbers AS (
    SELECT TOP (49752) ROW_NUMBER() OVER (ORDER BY (SELECT NULL)) AS n
    FROM e8
),
base AS (
    SELECT
        n,
        1 + ((n - 1) % 800) AS vendor_id,
        (n - 1) % 350 AS day_offset
    FROM numbers
)
INSERT audit_demo.payments (
    payment_id, vendor_id, invoice_number, invoice_date, payment_date,
    amount, approval_limit, payment_method, is_manual,
    bank_account_token, synthetic_scenario
)
SELECT
    n,
    vendor_id,
    CONCAT('INV-', RIGHT(CONCAT('00000000', n), 8)),
    DATEADD(day, -14,
        DATEADD(day,
            day_offset + CASE day_offset % 7 WHEN 5 THEN 2 WHEN 6 THEN 1 ELSE 0 END,
            CAST('2025-01-06' AS date)
        )
    ),
    DATEADD(day,
        day_offset + CASE day_offset % 7 WHEN 5 THEN 2 WHEN 6 THEN 1 ELSE 0 END,
        CAST('2025-01-06' AS date)
    ),
    CAST(100 + (n % 7900) + ((n * 13) % 100) / 100.0 AS decimal(12,2)),
    10000.00,
    'ACH',
    0,
    CONCAT('BANK-', RIGHT(CONCAT('000000', vendor_id), 6)),
    NULL
FROM base;
GO

/* T01 — 28 duplicate invoice signals copied from valid source records. */
INSERT audit_demo.payments (
    payment_id, vendor_id, invoice_number, invoice_date, payment_date,
    amount, approval_limit, payment_method, is_manual,
    bank_account_token, synthetic_scenario
)
SELECT
    49752 + payment_id,
    vendor_id,
    invoice_number,
    invoice_date,
    DATEADD(day, 1, payment_date),
    amount,
    approval_limit,
    payment_method,
    is_manual,
    bank_account_token,
    'DUPLICATE_INVOICE'
FROM audit_demo.payments
WHERE payment_id BETWEEN 1 AND 28;

/* T02 — 34 pairs immediately below a $10,000 approval threshold. */
WITH
e1(n) AS (
    SELECT 1 FROM (VALUES (0),(0),(0),(0),(0),(0),(0),(0),(0),(0)) v(n)
),
e2(n) AS (SELECT 1 FROM e1 a CROSS JOIN e1 b),
groups AS (
    SELECT TOP (34) ROW_NUMBER() OVER (ORDER BY (SELECT NULL)) AS group_no
    FROM e2
),
legs AS (
    SELECT group_no, leg
    FROM groups
    CROSS JOIN (VALUES (1),(2)) l(leg)
)
INSERT audit_demo.payments (
    payment_id, vendor_id, invoice_number, invoice_date, payment_date,
    amount, approval_limit, payment_method, is_manual,
    bank_account_token, synthetic_scenario
)
SELECT
    49780 + ((group_no - 1) * 2) + leg,
    900 + group_no,
    CONCAT('SPLIT-', RIGHT(CONCAT('000', group_no), 3), '-', CASE leg WHEN 1 THEN 'A' ELSE 'B' END),
    DATEADD(day, group_no * 7, CAST('2025-01-01' AS date)),
    DATEADD(day, group_no * 7 + CASE leg WHEN 1 THEN 0 ELSE 2 END, CAST('2025-01-01' AS date)),
    CAST(CASE leg WHEN 1 THEN 9800 + group_no ELSE 9700 + group_no END AS decimal(12,2)),
    10000.00,
    'ACH',
    0,
    CONCAT('BANK-', RIGHT(CONCAT('000000', 900 + group_no), 6)),
    'POTENTIAL_SPLIT'
FROM legs;

/* T03 — 42 payments approved after the payment date. */
WITH
e1(n) AS (
    SELECT 1 FROM (VALUES (0),(0),(0),(0),(0),(0),(0),(0),(0),(0)) v(n)
),
e2(n) AS (SELECT 1 FROM e1 a CROSS JOIN e1 b),
numbers AS (
    SELECT TOP (42) ROW_NUMBER() OVER (ORDER BY (SELECT NULL)) AS n
    FROM e2
)
INSERT audit_demo.payments (
    payment_id, vendor_id, invoice_number, invoice_date, payment_date,
    amount, approval_limit, payment_method, is_manual,
    bank_account_token, synthetic_scenario
)
SELECT
    49848 + n,
    935 + ((n - 1) % 15),
    CONCAT('LATE-APPROVAL-', RIGHT(CONCAT('000', n), 3)),
    DATEADD(day, n, CAST('2025-03-01' AS date)),
    DATEADD(day, n + 10, CAST('2025-03-01' AS date)),
    CAST(1200 + n * 17 AS decimal(12,2)),
    10000.00,
    'ACH',
    0,
    CONCAT('BANK-', RIGHT(CONCAT('000000', 935 + ((n - 1) % 15)), 6)),
    'PAYMENT_BEFORE_APPROVAL'
FROM numbers;

/* T04 — 19 payments to inactive vendors. */
WITH
e1(n) AS (
    SELECT 1 FROM (VALUES (0),(0),(0),(0),(0),(0),(0),(0),(0),(0)) v(n)
),
e2(n) AS (SELECT 1 FROM e1 a CROSS JOIN e1 b),
numbers AS (
    SELECT TOP (19) ROW_NUMBER() OVER (ORDER BY (SELECT NULL)) AS n
    FROM e2
)
INSERT audit_demo.payments (
    payment_id, vendor_id, invoice_number, invoice_date, payment_date,
    amount, approval_limit, payment_method, is_manual,
    bank_account_token, synthetic_scenario
)
SELECT
    49890 + n,
    980 + n,
    CONCAT('INACTIVE-', RIGHT(CONCAT('000', n), 3)),
    DATEADD(day, n, CAST('2025-05-01' AS date)),
    DATEADD(day, n + 12, CAST('2025-05-01' AS date)),
    CAST(2100 + n * 23 AS decimal(12,2)),
    10000.00,
    'ACH',
    0,
    CONCAT('BANK-', RIGHT(CONCAT('000000', 980 + n), 6)),
    'INACTIVE_VENDOR'
FROM numbers;

/* T05 — 27 payments shortly after a vendor bank-account change. */
WITH
e1(n) AS (
    SELECT 1 FROM (VALUES (0),(0),(0),(0),(0),(0),(0),(0),(0),(0)) v(n)
),
e2(n) AS (SELECT 1 FROM e1 a CROSS JOIN e1 b),
numbers AS (
    SELECT TOP (27) ROW_NUMBER() OVER (ORDER BY (SELECT NULL)) AS n
    FROM e2
)
INSERT audit_demo.payments (
    payment_id, vendor_id, invoice_number, invoice_date, payment_date,
    amount, approval_limit, payment_method, is_manual,
    bank_account_token, synthetic_scenario
)
SELECT
    49909 + n,
    950 + n,
    CONCAT('BANK-CHANGE-', RIGHT(CONCAT('000', n), 3)),
    DATEADD(day, n, CAST('2025-07-01' AS date)),
    DATEADD(day, n + 10, CAST('2025-07-01' AS date)),
    CAST(3300 + n * 29 AS decimal(12,2)),
    10000.00,
    'ACH',
    0,
    CONCAT('NEW-', RIGHT(CONCAT('000000', 950 + n), 6)),
    'RECENT_BANK_CHANGE'
FROM numbers;

/* T06 — 64 manual wire payments posted on Saturdays. */
WITH
e1(n) AS (
    SELECT 1 FROM (VALUES (0),(0),(0),(0),(0),(0),(0),(0),(0),(0)) v(n)
),
e2(n) AS (SELECT 1 FROM e1 a CROSS JOIN e1 b),
numbers AS (
    SELECT TOP (64) ROW_NUMBER() OVER (ORDER BY (SELECT NULL)) AS n
    FROM e2
)
INSERT audit_demo.payments (
    payment_id, vendor_id, invoice_number, invoice_date, payment_date,
    amount, approval_limit, payment_method, is_manual,
    bank_account_token, synthetic_scenario
)
SELECT
    49936 + n,
    850 + ((n - 1) % 50),
    CONCAT('MANUAL-', RIGHT(CONCAT('000', n), 3)),
    DATEADD(day, 7 * ((n - 1) % 52) - 5, CAST('2025-01-04' AS date)),
    DATEADD(day, 7 * ((n - 1) % 52), CAST('2025-01-04' AS date)),
    CAST(700 + n * 11 AS decimal(12,2)),
    10000.00,
    'WIRE',
    1,
    CONCAT('BANK-', RIGHT(CONCAT('000000', 850 + ((n - 1) % 50)), 6)),
    'WEEKEND_MANUAL'
FROM numbers;
GO

/* Every payment receives an approval record; T03 is intentionally late. */
INSERT audit_demo.approvals (
    payment_id, approved_by, approved_at, approval_limit
)
SELECT
    payment_id,
    CONCAT('approver-', RIGHT(CONCAT('00', 1 + payment_id % 25), 2)),
    CASE
        WHEN synthetic_scenario = 'PAYMENT_BEFORE_APPROVAL'
            THEN DATEADD(hour, 10, CAST(DATEADD(day, 1, payment_date) AS datetime2))
        ELSE DATEADD(hour, 9, CAST(DATEADD(day, -1, payment_date) AS datetime2))
    END,
    approval_limit
FROM audit_demo.payments;

/* Bank-change history exists only for the 27 T05 demonstration records. */
INSERT audit_demo.vendor_bank_changes (
    vendor_id, old_account_token, new_account_token, changed_at
)
SELECT
    vendor_id,
    CONCAT('BANK-', RIGHT(CONCAT('000000', vendor_id), 6)),
    bank_account_token,
    DATEADD(day, -(1 + payment_id % 6), CAST(payment_date AS datetime2))
FROM audit_demo.payments
WHERE synthetic_scenario = 'RECENT_BANK_CHANGE';
GO

CREATE INDEX IX_payments_vendor_date
    ON audit_demo.payments(vendor_id, payment_date)
    INCLUDE (invoice_number, amount, approval_limit, payment_method, is_manual);

CREATE INDEX IX_payments_invoice
    ON audit_demo.payments(vendor_id, invoice_number, amount);

CREATE INDEX IX_bank_changes_vendor_date
    ON audit_demo.vendor_bank_changes(vendor_id, changed_at);
GO

/* Population reconciliation: expected result is exactly 50,000 rows. */
SELECT
    COUNT(*) AS population_rows,
    COUNT(DISTINCT payment_id) AS distinct_payment_ids,
    CAST(SUM(amount) AS decimal(18,2)) AS population_amount
FROM audit_demo.payments;

/* Seed validation: counts are construction checks, not the audit tests. */
SELECT
    COALESCE(synthetic_scenario, 'ORDINARY') AS scenario,
    COUNT(*) AS payment_rows
FROM audit_demo.payments
GROUP BY COALESCE(synthetic_scenario, 'ORDINARY')
ORDER BY scenario;
GO
