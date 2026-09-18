# AuditPDF Windows PWA

Windows PWA shell for AuditPDF.

- Uses the shared AuditPDF editor payload.
- Does not load the iPhone/mobile CSS or mobile UI layer.
- Registers PDF file handling through the PWA manifest.
- Adds a service worker for the local application shell.
- Lives in a sibling directory to `/auditpdf-mobile/`; the mobile build is intentionally untouched.

Current milestone: v0.1.0 Windows PWA shell.
