# Dynamic robots.txt and sitemap.xml driven by NEXT_PUBLIC_SITE_URL

robots.txt must block crawlers on `dev.qmaxsys.com` and allow them on production `qmaxsys.com`, and sitemap.xml must track ~100 case-study routes that change as `allCaseStudiesData` is edited. We chose Next.js dynamic metadata routes (`src/app/robots.ts` + `src/app/sitemap.ts`) over static files in `public/` because (a) the dev→prod cutover becomes "set one env var" instead of "remember to edit two files before flipping DNS" — the kind of step that gets forgotten and silently de-indexes prod or leaves dev indexable, and (b) the sitemap stays in sync with the case-studies store automatically rather than going stale on every new entry.

## Indexing gate

The gate for "is crawling allowed" is the hostname of `NEXT_PUBLIC_SITE_URL`. It must equal `qmaxsys.com` exactly. Missing var, malformed URL, `localhost`, `dev.qmaxsys.com`, a future `staging.qmaxsys.com`, preview deploys — all block by default. This is intentional: accidentally de-indexing prod for a few days is recoverable; accidentally indexing dev or staging is not.

## Consequences

- Production deploys **must** set `NEXT_PUBLIC_SITE_URL=https://qmaxsys.com` or the site silently won't be indexed. This belongs in the deploy runbook.
- Marketers can't hand-edit `robots.txt` — content changes go through a code change. Acceptable trade-off given the dev/prod safety win.
- The sitemap fields `lastmod`, `changefreq`, `priority` are deliberately omitted. `changefreq` and `priority` are ignored by Google; `lastmod` is only useful when accurate, and we have no reliable per-route timestamp source. Revisit if Google is slow to re-crawl new case studies.
