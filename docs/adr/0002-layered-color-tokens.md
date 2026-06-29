# Layered color tokens: numeric primitives under semantic aliases

We architect color as two layers: a set of raw numeric **primitive** scales
(`--gray-100…--gray-1000`, `--brand-100…--brand-1000`, and a ramp per state color),
and the existing shadcn **semantic** tokens (`--primary`, `--muted`, `--border`,
`--ring`, …) which are redefined to *alias* steps on those ramps rather than holding
their own literal values. Components keep consuming semantic tokens only.

We chose this over (a) keeping semantic-only tokens — which can't express the
graduated `100–1000` palette the design system and `design.md` are built around —
and over (b) a pure numeric scale referenced directly by components, which would
have meant rewriting color usage across ~160 components and abandoning the shadcn
convention we already depend on.

## Consequences

- A future reader will see two ways to name a color (`--gray-600` and
  `--muted-foreground`). That is intentional: primitives are the source of truth,
  semantic tokens are the API. **Components reference semantic tokens; primitives
  are referenced almost exclusively from inside `:root` aliases** and `design.md`,
  which documents the ramps.
- Light/dark theming happens at the alias layer: the ramps stay fixed, and `.dark`
  re-points semantic tokens at different ramp steps.
- This is hard to unwind once components depend on the semantic layer, which is why
  it's recorded here.
