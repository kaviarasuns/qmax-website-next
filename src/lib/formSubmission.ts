/**
 * Shared helpers for contact-form submissions.
 *
 * `collectSubmissionMeta` gathers the contextual metadata we attach to every
 * form submission (attribution, consent, anti-spam signals) so that all forms
 * across the site send a consistent payload shape to the backend.
 *
 * Client-only: relies on `window`, `document`, and `navigator`.
 */

export interface UtmParams {
  source: string | null;
  medium: string | null;
  campaign: string | null;
  term: string | null;
  content: string | null;
}

export interface SubmissionMeta {
  /** Which form/section the lead came from, e.g. "pcb-design-contact". */
  formSource: string;
  pageUrl: string;
  pagePath: string;
  referrer: string | null;
  utm: UtmParams;
  locale: string;
  consentGiven: boolean;
  /** Exact wording of the privacy/consent notice shown to the user. */
  consentText: string;
  /** ISO timestamp of submission (server should also stamp its own). */
  submittedAt: string;
  /** ms between form render and submit - very fast submits suggest bots. */
  timeToSubmitMs: number;
}

interface CollectMetaArgs {
  formSource: string;
  consentText: string;
  /** Epoch ms captured when the form mounted (e.g. a ref initialized once). */
  renderedAt: number;
}

/**
 * Builds the metadata block attached to a form submission.
 *
 * @param formSource  Identifier for the originating form/section.
 * @param consentText The privacy notice text shown to the user.
 * @param renderedAt  Epoch ms when the form was rendered.
 * @returns A `SubmissionMeta` object ready to merge with the form's fields.
 */
export function collectSubmissionMeta({
  formSource,
  consentText,
  renderedAt,
}: CollectMetaArgs): SubmissionMeta {
  const params = new URLSearchParams(window.location.search);
  return {
    formSource,
    pageUrl: window.location.href,
    pagePath: window.location.pathname,
    referrer: document.referrer || null,
    utm: {
      source: params.get("utm_source"),
      medium: params.get("utm_medium"),
      campaign: params.get("utm_campaign"),
      term: params.get("utm_term"),
      content: params.get("utm_content"),
    },
    locale: navigator.language,
    consentGiven: true,
    consentText,
    submittedAt: new Date().toISOString(),
    timeToSubmitMs: Date.now() - renderedAt,
  };
}

/**
 * Public write endpoint for the contact forms. Resolved at build time from
 * `NEXT_PUBLIC_CONTACT_ENDPOINT`, falling back to the local dev server.
 */
export const CONTACT_ENDPOINT =
  process.env.NEXT_PUBLIC_CONTACT_ENDPOINT ??
  "http://localhost:8080/api/contact";

/** Shape of the response envelope returned by `POST /api/contact`. */
export interface ContactResponse {
  success: boolean;
  message: string;
  messageId: string | null;
}

const GENERIC_ERROR = "Something went wrong. Please try again.";

/**
 * Submits a contact-form payload to the contact endpoint.
 *
 * Treats the response as successful only when the HTTP status is OK *and* the
 * body's `success` flag is `true` (the API signals failure via `success`, not
 * just the status code). On any failure the server's `message` is thrown so the
 * caller can surface it to the user.
 *
 * @param payload  Fully built submission payload (form fields + SubmissionMeta).
 * @param endpoint Endpoint override; defaults to `CONTACT_ENDPOINT`.
 * @returns The parsed success response.
 * @throws Error carrying a human-readable message on network/parse failure,
 *         a non-2xx status, or `success: false`.
 */
export async function submitContactForm(
  payload: unknown,
  endpoint: string = CONTACT_ENDPOINT,
): Promise<ContactResponse> {
  let res: Response;
  try {
    res = await fetch(endpoint, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });
  } catch {
    // Network/CORS failure - never reached the server.
    throw new Error(
      "Network error - please check your connection and try again.",
    );
  }

  let data: Partial<ContactResponse> | null = null;
  try {
    data = (await res.json()) as Partial<ContactResponse>;
  } catch {
    // Non-JSON body (e.g. a proxy/gateway error page).
  }

  if (!res.ok || !data?.success) {
    throw new Error(data?.message || GENERIC_ERROR);
  }

  return data as ContactResponse;
}
