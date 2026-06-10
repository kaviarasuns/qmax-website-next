# Contact Form Submission — Backend Handoff

This document describes the payload the website sends when a user submits a
contact form, and what the backend is expected to validate, store, and respond
with. There is **one endpoint for all forms**; the `formSource` field
identifies which form/page a submission came from.

## 1. Endpoint & transport

| | |
|---|---|
| **Method** | `POST` |
| **Path (placeholder)** | `/api/email/contact` (frontend currently points at `http://localhost:8080/api/email/contact`) |
| **Content-Type** | `application/json` |
| **Auth** | None today. If you want one, the frontend can send a static API key header or a CAPTCHA token — tell us which. |
| **CORS** | The site and API are on different origins, so the API **must** send `Access-Control-Allow-Origin` for the site domain(s) and handle the `OPTIONS` preflight. |

## 2. Payload — two shapes, shared metadata

All submissions carry the same **metadata block**. The **lead fields differ**
by form. Distinguish them by `formSource`.

### Shared metadata (every submission)

| Field | Type | Notes |
|---|---|---|
| `formSource` | string | Which form sent it — see enum in §3. **Use this to branch.** |
| `pageUrl` | string | Full URL incl. query string |
| `pagePath` | string | Route only, easier to group on |
| `referrer` | string \| null | `document.referrer`, may be empty |
| `utm` | object | `{ source, medium, campaign, term, content }` — each string \| null |
| `locale` | string | e.g. `"en-US"` |
| `consentGiven` | boolean | Always `true` (user can't submit without the notice shown) |
| `consentText` | string | Exact privacy wording shown at submit time — **store this verbatim** for compliance |
| `submittedAt` | string | Client ISO-8601 timestamp. **Treat as untrusted** — also stamp your own server-side received time |
| `timeToSubmitMs` | number | ms from form render to submit; very low = likely bot (see §5) |

### Variant A — Services contact forms (`ServicesContactHero`)

Lead fields **in addition to** metadata:

| Field | Type | Required (client) | Notes |
|---|---|---|---|
| `firstName` | string | yes | |
| `lastName` | string | yes | |
| `email` | string | yes | business email |
| `phone` | string | no | includes dial code, e.g. `"+19725551234"` |
| `country` | string | yes | from a fixed list, free-text `"Other"` possible |
| `company` | string | yes | |
| `message` | string | no | |
| `nda` | boolean | no | user requested an NDA be sent |

### Variant B — General contact page (`ContactHero`)

Lead fields **in addition to** metadata:

| Field | Type | Required (client) | Notes |
|---|---|---|---|
| `name` | string | yes | single full-name field (not split) |
| `email` | string | yes | |
| `phone` | string | yes | digits only, no dial-code prefix |
| `message` | string | yes | |

> ⚠️ **Don't assume one schema.** Variant A has `firstName`/`lastName`/`company`/`country`/`nda`; Variant B has a single `name`. Validate per `formSource`.

### Example payloads

**Variant A:**

```json
{
  "firstName": "Jane",
  "lastName": "Doe",
  "email": "jane@acme.com",
  "phone": "+19725551234",
  "country": "United States",
  "company": "Acme Corp",
  "message": "Need help with a 12-layer board.",
  "nda": true,
  "formSource": "pcb-design-contact",
  "pageUrl": "https://qmaxsys.com/pcb-design-services/contact?utm_source=google&utm_medium=cpc",
  "pagePath": "/pcb-design-services/contact",
  "referrer": "https://www.google.com/",
  "utm": { "source": "google", "medium": "cpc", "campaign": null, "term": null, "content": null },
  "locale": "en-US",
  "consentGiven": true,
  "consentText": "Your data is secure with us; we never leak, share, or sell your details to third parties.",
  "submittedAt": "2026-06-10T12:34:56.789Z",
  "timeToSubmitMs": 18342
}
```

**Variant B:**

```json
{
  "name": "Jane Doe",
  "email": "jane@acme.com",
  "phone": "9725551234",
  "message": "General inquiry.",
  "formSource": "contact-page",
  "pageUrl": "https://qmaxsys.com/contact",
  "pagePath": "/contact",
  "referrer": "",
  "utm": { "source": null, "medium": null, "campaign": null, "term": null, "content": null },
  "locale": "en-US",
  "consentGiven": true,
  "consentText": "By submitting, you agree to be contacted about your inquiry. Your data is secure with us; we never leak, share, or sell your details to third parties.",
  "submittedAt": "2026-06-10T12:34:56.789Z",
  "timeToSubmitMs": 9210
}
```

## 3. `formSource` enum

| Value | Origin |
|---|---|
| `hardware-design-contact` | Hardware Design Services → Contact |
| `pcb-design-contact` | PCB Design Services → Contact |
| `embedded-design-contact` | Embedded Design Services → Contact |
| `mechanical-industrial-design-contact` | Mechanical & Industrial Design → Contact |
| `contact-page` | Main `/contact` page |
| `services-contact-hero` | Fallback default if a future page forgets to set it — treat as "unknown service form" |

Use it to route notifications (e.g. NDA requests / PCB leads → the right
inbox) and for analytics. Treat the list as **open** — log unknown values,
don't reject them.

## 4. What the backend should do

1. **Validate** required fields per `formSource`; validate email format and
   reasonable length caps on all strings (reject/truncate megabyte messages).
2. **Sanitize** before composing any email — `message`/`name`/etc. are user
   input. Escape HTML; never interpolate raw values into email headers
   (subject/from) to avoid header injection.
3. **Persist** the lead (DB row or CRM record) **and** send the notification
   email. Don't rely on email alone — SMTP failures shouldn't lose the lead.
4. **Route** the notification by `formSource`. Honor `nda: true` by
   attaching/triggering the NDA flow.
5. **Stamp server-side received timestamp**; keep the client `submittedAt`
   separately.
6. **Store `consentText` + `consentGiven`** with the record (compliance trail).

## 5. Spam / abuse handling (important)

- The frontend has a **honeypot** and a **`timeToSubmitMs`** timer, but the
  honeypot value is checked client-side and **not sent**, and any bot can POST
  the API directly. **Do not treat the client checks as protection.**
- Recommended server-side defenses:
  - **Rate-limit** by IP (you derive IP from the request — the frontend does
    **not** send it).
  - Reject/flag submissions with `timeToSubmitMs` below a threshold
    (e.g. `< 1500` ms).
  - Optionally add **reCAPTCHA / Cloudflare Turnstile** — if so, tell us and
    we'll send the token in the payload.
  - If you want the honeypot too, we can include the hidden `website` field in
    the payload (currently omitted) — just ask.

## 6. Response contract (please implement)

The frontend currently ignores the response and always shows success. To do
this properly, please return:

- **Success:** `200`/`201` with `{ "ok": true }`
- **Validation error:** `400` with `{ "ok": false, "error": "message", "fields": { "email": "invalid" } }`
- **Rate-limited:** `429`
- **Server error:** `5xx` with `{ "ok": false }`

Tell us the final shape and we'll update both forms to surface real errors
instead of an unconditional "thank you".

## 7. Open items for the frontend

- Endpoint is hardcoded to `localhost:8080`. We'll move it to
  `NEXT_PUBLIC_CONTACT_ENDPOINT` before production — **give us the real URL(s)**
  (and whether staging/prod differ).
- We currently `console.log` the payload as a dummy step — removed once you
  confirm the contract.

## 8. Source references

- Shared metadata builder: `src/lib/formSubmission.ts` (`collectSubmissionMeta`)
- Variant A form: `src/components/ServicesContactHero.tsx`
- Variant B form: `src/app/contact/ContactHero.tsx`
