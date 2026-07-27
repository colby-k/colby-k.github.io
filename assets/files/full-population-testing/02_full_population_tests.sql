/*
Full-Population Vendor Payment Testing
Six audit-focused SQL tests against the complete 50,000-payment population.

Run 01_create_demo_data.sql first.
A returned row is a risk signal requiring investigation — not automatically
fraud, a control failure, or an audit finding.
*/

SET NOCOUNT ON;
SET XACT_ABORT ON;

IF (SELECT COUNT(*) FROM audit_demo.payments) <> 50000
    THROW 51000, 'Population reconciliation failed. Expected 50,000 payments.', 1;

DROP TABLE IF EXISTS audit_demo.test_results;

CREATE TABLE audit_demo.test_results (
    result_id             int IDENTITY(1,1) NOT NULL PRIMARY KEY,
    test_id               char(3)          NOT NULL,
    test_name             varchar(80)      NOT NULL,
    payment_id            bigint           NOT NULL,
    related_payment_id    bigint           NULL,
    vendor_id             int              NOT NULL,
    signal_summary        nvarchar(300)     NOT NULL,
    review_status         varchar(20)       NOT NULL DEFAULT 'Unreviewed',
    created_at            datetime2(0)      NOT NULL DEFAULT SYSUTCDATETIME()
);
GO

/* T01 — Possible duplicate invoice */
WITH normalized AS (
    SELECT
        p.*,
        UPPER(REPLACE(REPLACE(invoice_number, '-', ''), ' ', '')) AS normalized_invoice,
        ROW_NUMBER() OVER (
            PARTITION BY
                vendor_id,
                UPPER(REPLACE(REPLACE(invoice_number, '-', ''), ' ', '')),
                amount
            ORDER BY payment_id
        ) AS occurrence_number
    FROM audit_demo.payments p
)
INSERT audit_demo.test_results (
    test_id, test_name, payment_id, related_payment_id,
    vendor_id, signal_summary
)
SELECT
    'T01',
    'Possible duplicate invoice',
    payment_id,
    NULL,
    vendor_id,
    CONCAT('Invoice ', invoice_number, ' repeats for vendor ', vendor_id,
           ' at $', CONVERT(varchar(30), amount))
FROM normalized
WHERE occurrence_number > 1;

/* T02 — Possible approval-threshold split */
INSERT audit_demo.test_results (
    test_id, test_name, payment_id, related_payment_id,
    vendor_id, signal_summary
)
SELECT
    'T02',
    'Possible approval-threshold split',
    p1.payment_id,
    p2.payment_id,
    p1.vendor_id,
    CONCAT('Payments $', CONVERT(varchar(30), p1.amount),
           ' and $', CONVERT(varchar(30), p2.amount),
           ' occurred within ',
           DATEDIFF(day, p1.payment_date, p2.payment_date),
           ' days below the $', CONVERT(varchar(30), p1.approval_limit),
           ' threshold')
FROM audit_demo.payments p1
JOIN audit_demo.payments p2
    ON p2.vendor_id = p1.vendor_id
   AND p2.payment_id > p1.payment_id
   AND p2.payment_date BETWEEN p1.payment_date AND DATEADD(day, 7, p1.payment_date)
WHERE p1.amount >= 9000
  AND p1.amount < p1.approval_limit
  AND p2.amount >= 9000
  AND p2.amount < p2.approval_limit
  AND p1.amount + p2.amount >= p1.approval_limit;

/* T03 — Payment before approval */
INSERT audit_demo.test_results (
    test_id, test_name, payment_id, related_payment_id,
    vendor_id, signal_summary
)
SELECT
    'T03',
    'Payment before approval',
    p.payment_id,
    NULL,
    p.vendor_id,
    CONCAT('Payment date ', CONVERT(char(10), p.payment_date, 23),
           ' precedes approval ', CONVERT(char(19), a.approved_at, 120))
FROM audit_demo.payments p
JOIN audit_demo.approvals a
    ON a.payment_id = p.payment_id
WHERE a.approved_at > DATEADD(day, 1, CAST(p.payment_date AS datetime2));

/* T04 — Payment to inactive vendor */
INSERT audit_demo.test_results (
    test_id, test_name, payment_id, related_payment_id,
    vendor_id, signal_summary
)
SELECT
    'T04',
    'Payment to inactive vendor',
    p.payment_id,
    NULL,
    p.vendor_id,
    CONCAT(v.vendor_name, ' was ', v.vendor_status,
           ' when payment ', p.payment_id, ' was recorded')
FROM audit_demo.payments p
JOIN audit_demo.vendors v
    ON v.vendor_id = p.vendor_id
WHERE v.vendor_status <> 'Active';

/* T05 — Payment after recent bank-account change */
INSERT audit_demo.test_results (
    test_id, test_name, payment_id, related_payment_id,
    vendor_id, signal_summary
)
SELECT
    'T05',
    'Recent bank change before payment',
    p.payment_id,
    NULL,
    p.vendor_id,
    CONCAT('Payment used changed account ', bc.new_account_token,
           ' ', DATEDIFF(day, bc.changed_at, p.payment_date),
           ' days after the vendor update')
FROM audit_demo.payments p
JOIN audit_demo.vendor_bank_changes bc
    ON bc.vendor_id = p.vendor_id
   AND bc.new_account_token = p.bank_account_token
WHERE DATEDIFF(day, bc.changed_at, p.payment_date) BETWEEN 0 AND 7;

/* T06 — Weekend manual payment */
INSERT audit_demo.test_results (
    test_id, test_name, payment_id, related_payment_id,
    vendor_id, signal_summary
)
SELECT
    'T06',
    'Weekend manual payment',
    p.payment_id,
    NULL,
    p.vendor_id,
    CONCAT('Manual ', p.payment_method, ' payment posted on ',
           CONVERT(char(10), p.payment_date, 23))
FROM audit_demo.payments p
WHERE p.is_manual = 1
  AND ((DATEDIFF(day, '19000101', p.payment_date) % 7) + 7) % 7 IN (5, 6);
GO

/* Reconciled result board used by the portfolio demonstration. */
WITH expected AS (
    SELECT *
    FROM (VALUES
        ('T01', 28),
        ('T02', 34),
        ('T03', 42),
        ('T04', 19),
        ('T05', 27),
        ('T06', 64)
    ) x(test_id, expected_signals)
),
actual AS (
    SELECT test_id, COUNT(*) AS actual_signals
    FROM audit_demo.test_results
    GROUP BY test_id
)
SELECT
    e.test_id,
    MAX(r.test_name) AS test_name,
    e.expected_signals,
    COALESCE(a.actual_signals, 0) AS actual_signals,
    CASE
        WHEN e.expected_signals = COALESCE(a.actual_signals, 0)
            THEN 'Reconciled'
        ELSE 'Investigate'
    END AS validation_status
FROM expected e
LEFT JOIN actual a ON a.test_id = e.test_id
LEFT JOIN audit_demo.test_results r ON r.test_id = e.test_id
GROUP BY e.test_id, e.expected_signals, a.actual_signals
ORDER BY e.test_id;

IF (SELECT COUNT(*) FROM audit_demo.test_results) <> 214
    THROW 51001, 'Test-result reconciliation failed. Expected 214 signals.', 1;

/* Population-to-result reconciliation. */
SELECT
    (SELECT COUNT(*) FROM audit_demo.payments) AS population_tested,
    6 AS documented_tests,
    COUNT(*) AS exception_signals,
    SUM(CASE WHEN review_status = 'Unreviewed' THEN 1 ELSE 0 END) AS awaiting_review
FROM audit_demo.test_results;

/* Reviewer trace example: the Northstar split-payment signal. */
SELECT
    r.test_id,
    r.test_name,
    r.result_id,
    v.vendor_name,
    p1.payment_id,
    p1.invoice_number,
    p1.payment_date,
    p1.amount,
    p2.payment_id AS related_payment_id,
    p2.invoice_number AS related_invoice,
    p2.payment_date AS related_payment_date,
    p2.amount AS related_amount,
    p1.approval_limit,
    r.signal_summary,
    r.review_status
FROM audit_demo.test_results r
JOIN audit_demo.vendors v
    ON v.vendor_id = r.vendor_id
JOIN audit_demo.payments p1
    ON p1.payment_id = r.payment_id
LEFT JOIN audit_demo.payments p2
    ON p2.payment_id = r.related_payment_id
WHERE r.test_id = 'T02'
  AND r.vendor_id = 901;
GO
