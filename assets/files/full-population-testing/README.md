# Full-Population Vendor Payment Testing

A deterministic SQL Server demonstration of audit-focused testing across a complete synthetic payment population.

## Demonstration scope

- 50,000 synthetic vendor payments
- 1,000 synthetic vendors
- six documented SQL tests
- 214 seeded and reconciled exception signals
- no employer, client, confidential, or proprietary data

## Run order

1. Run `01_create_demo_data.sql` in SQL Server.
2. Confirm the population reconciliation returns 50,000 distinct payment IDs.
3. Run `02_full_population_tests.sql`.
4. Confirm all six tests show `Reconciled` and the total result count is 214.
5. Investigate individual signals using the retained payment IDs and related source records.

## Test library

| Test | Audit risk | Expected signals |
|---|---|---:|
| T01 | Duplicate or repeated invoice payment | 28 |
| T02 | Transactions split below an approval threshold | 34 |
| T03 | Payment recorded before approval | 42 |
| T04 | Payment to an inactive vendor | 19 |
| T05 | Payment shortly after a vendor bank-account change | 27 |
| T06 | Manual payment posted on a weekend | 64 |
| **Total** |  | **214** |

## Important interpretation

Full-population testing evaluates every record against defined criteria. It does not provide complete assurance.

A returned row is a risk signal. The auditor still needs to:

- validate source-data completeness and accuracy;
- confirm the test logic and threshold;
- inspect supporting evidence;
- understand the business explanation;
- evaluate whether an exception represents a control issue; and
- document the conclusion.

The seeded `synthetic_scenario` field validates construction of the demonstration population. The audit tests do not rely on that field.

## Compatibility

The scripts use T-SQL and are designed for Microsoft SQL Server.
