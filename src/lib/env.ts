/**
 * Application environment flags — the single source of truth for gating
 * content by deployment environment.
 *
 * `NEXT_PUBLIC_APP_ENV` is inlined at build time by Next.js, so `isDevEnv` is a
 * static boolean that is safe to read at module scope on both server and
 * client. Defaults to production behaviour when the variable is unset.
 *
 * Policy: the `dev` environment shows the full set of content — legacy
 * case-study sections and pages that are built but not yet approved for the
 * public site (e.g. Suppliers, extra PCB services). Production shows only the
 * curated, released set.
 */
const appEnv = process.env.NEXT_PUBLIC_APP_ENV ?? "prod";

export const isDevEnv = appEnv === "dev";
