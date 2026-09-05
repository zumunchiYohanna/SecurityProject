# Security Checklist

## 1. Authentication & Session Handling
- [ ] Incorrect password handling verified
- [ ] Missing credentials rejected
- [ ] Expired or invalid tokens handled securely

## 2. Authorization & Access Control
- [ ] Customer endpoints restricted from riders
- [ ] Admin functionality protected against unauthorized access
- [ ] Cross-tenant boundaries verified (e.g., users cannot access other customers' orders)

## 3. Input Validation & Sanitization
- [ ] Empty values and unexpected data handled
- [ ] Invalid IDs, quantities, and OTPs rejected