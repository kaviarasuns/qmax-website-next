# Canonical brand red is #f33117

The Qmax brand red is **`#f33117`**, defined as `--brand-500` and the anchor of the
brand ramp. This is surprising because the repo already had a `brand-red` token set
to `#ef4444` — but an audit of `src` found `#f33117` was the most-used red by 2×
(50 occurrences, including the animated energy-travel and dash-sweep effects), while
the `brand-red` token's value appeared far less. We picked the color the live UI
actually uses, not the one that happened to be named.

At the time of this decision the codebase carried at least 9 distinct reds
(`#f33117`, `#ef4444`, `#e63329`, `#ff0000`, `#ff1111`, `#dc2626`, `#c72a21`,
`#c41e1e`, `#910000`). All of them collapse onto the `--brand-*` ramp (or the
`danger` state ramp where the intent is error, not identity). Any new red that
isn't a `--brand-*` / `danger` token is a bug, not a choice.

## Consequences

- The old `brand-red` / `brand.500` token (`#ef4444`) is retired; existing
  references migrate to `--brand-500`. Sweeps and animations keyed to `#f33117`
  keep their exact hue.
- "danger" (error state) and "brand" share a red *family* but are separate ramps so
  they can be retuned independently — see [CONTEXT.md](../../CONTEXT.md) flagged
  ambiguities.
