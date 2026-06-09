import type { Metadata } from "next";

const SITE_NAME = "QMax Systems";

interface PageSeo {
  /** Page <title> — already includes the brand suffix (e.g. "… | QMax"). */
  title: string;
  /** Meta description, ideally 150–160 characters. */
  description: string;
  /**
   * Route path beginning with "/" (e.g. "/pcb-design-services").
   * Use "/" for the homepage. Resolved against `metadataBase` (set in the
   * root layout) to produce absolute canonical and Open Graph URLs.
   */
  path: string;
}

/**
 * Build a consistent Next.js `Metadata` object for a page: title,
 * description, canonical URL, and Open Graph / Twitter card tags.
 * Relative paths are resolved against the root layout's `metadataBase`.
 */
export function buildMetadata({ title, description, path }: PageSeo): Metadata {
  return {
    title,
    description,
    alternates: {
      canonical: path,
    },
    openGraph: {
      title,
      description,
      url: path,
      siteName: SITE_NAME,
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
  };
}
