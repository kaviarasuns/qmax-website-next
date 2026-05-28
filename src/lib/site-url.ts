const DEFAULT_FALLBACK_URL = "https://dev.qmaxsys.com";
const PRODUCTION_HOSTNAME = "qmaxsys.com";

export function siteUrl(): string {
  const raw = process.env.NEXT_PUBLIC_SITE_URL?.trim();
  if (!raw) {
    return DEFAULT_FALLBACK_URL;
  }
  return raw.replace(/\/+$/, "");
}

export function isProductionHost(): boolean {
  try {
    return new URL(siteUrl()).hostname === PRODUCTION_HOSTNAME;
  } catch {
    return false;
  }
}
