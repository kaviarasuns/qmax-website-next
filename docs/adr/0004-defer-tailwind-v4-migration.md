# Defer the Tailwind v4 migration

We build the design-system tokens on the current **Tailwind v3.4** setup: primitives
declared in `globals.css :root`, mapped into `tailwind.config.ts` `theme.extend`. We
are **not** migrating to Tailwind v4 / CSS-first `@theme` as part of this work, even
though a commented-out `@theme` block already sits in `globals.css`.

Recorded because that commented block looks like abandoned or half-finished work — it
isn't. It's a deliberate marker of intended future direction. Migrating to v4 now
would couple a framework upgrade (porting custom keyframes, replacing
`tailwindcss-animate` with its v4 equivalent, regression-testing ~160 components and
every page) to the design-system effort, multiplying risk for no design-system
payoff. The token architecture in [ADR-0002](0002-layered-color-tokens.md) is written
so it ports cleanly to `@theme` later.

## Status

proposed — revisit as its own migration once the token system has stabilized. When
that happens, the `:root` primitives move into `@theme` and `tailwind.config.ts` is
removed.
