---
version: 1.0.0
name: Qmax
description: Qmax Systems' design system, Light theme. Minimal and high-contrast — grayscale carries the layout, a single brand red marks identity and action, and color signals state, never decoration.
colors:
  foreground: "#09090b"        # primary text & icons (gray-1000)
  muted-foreground: "#71717a"  # secondary text (gray-600)
  primary: "#18181b"           # primary action surface (gray-900)
  brand: "#f33117"             # Qmax red — identity & primary CTA
  destructive: "#ef4343"       # errors & destructive actions
  background: "#ffffff"        # page & card surface
  muted: "#f4f4f5"             # subtle secondary surface / hover (gray-100)
  border: "#e4e4e7"            # default border (gray-300)
  gray-100: "#f4f4f5"
  gray-200: "#eaeaec"
  gray-300: "#e4e4e7"
  gray-400: "#d4d4d8"
  gray-500: "#a1a1aa"
  gray-600: "#71717a"
  gray-700: "#52525b"
  gray-800: "#27272a"
  gray-900: "#18181b"
  gray-1000: "#09090b"
typography:
  heading-48:
    fontFamily: Roboto
    fontSize: 48px
    fontWeight: 300
    lineHeight: 1.15
    letterSpacing: 0.025em
  heading-36:
    fontFamily: Roboto
    fontSize: 36px
    fontWeight: 300
    lineHeight: 1.15
    letterSpacing: 0.025em
  heading-24:
    fontFamily: Roboto
    fontSize: 24px
    fontWeight: 300
    lineHeight: 1.25
    letterSpacing: 0.02em
  copy-20:
    fontFamily: Roboto
    fontSize: 20px
    fontWeight: 300
    lineHeight: 1.5
    letterSpacing: 0.02em
  copy-16:
    fontFamily: Roboto
    fontSize: 16px
    fontWeight: 400
    lineHeight: 1.6
    letterSpacing: 0.015em
  copy-14:
    fontFamily: Roboto
    fontSize: 14px
    fontWeight: 400
    lineHeight: 1.6
    letterSpacing: 0.02em
  label-12:
    fontFamily: Roboto
    fontSize: 12px
    fontWeight: 500
    lineHeight: 16px
    letterSpacing: 0.1em
  button-14:
    fontFamily: Roboto
    fontSize: 14px
    fontWeight: 500
    lineHeight: 20px
spacing:
  1: 4px
  2: 8px
  3: 12px
  4: 16px
  6: 24px
  8: 32px
  10: 40px
  16: 64px
  base: 4px
rounded:
  sm: 4px
  md: 6px
  lg: 8px
  full: 9999px
components:
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "#fafafa"
    typography: "{typography.button-14}"
    rounded: "{rounded.md}"
    padding: "0 16px"
    height: 36px
  button-brand:
    backgroundColor: "{colors.brand}"
    textColor: "#ffffff"
    typography: "{typography.button-14}"
    rounded: "{rounded.md}"
    padding: "0 16px"
    height: 36px
  button-outline:
    backgroundColor: "{colors.background}"
    border: "1px solid {colors.border}"
    textColor: "{colors.foreground}"
    typography: "{typography.button-14}"
    rounded: "{rounded.md}"
    padding: "0 16px"
    height: 36px
  input:
    backgroundColor: "{colors.background}"
    border: "1px solid {colors.border}"
    textColor: "{colors.foreground}"
    typography: "{typography.copy-14}"
    rounded: "{rounded.md}"
    padding: "0 12px"
    height: 36px
  card:
    backgroundColor: "{colors.background}"
    border: "1px solid {colors.border}"
    rounded: "{rounded.lg}"
    shadow: raised
---

# Qmax

## Overview

Qmax is the design system for the Qmax Systems site — a hardware, PCB, and embedded-engineering company. The aesthetic is minimal and high-contrast: near-neutral surfaces, generous whitespace, light type, and one decisive red. Grayscale carries the layout; brand red marks identity and the most important action; color is used to signal state, never decoration.

The system is layered. A raw `gray` ramp and the `brand` red are primitives; intent-named tokens (`foreground`, `muted`, `border`, `primary`…) alias them and are what components consume. Tokens are specified as HSL custom properties — Light theme, with the same names carrying dark values for a future `.dark`.

This is the lean design spec for the site — only the essentials — served at `/design.md`. Terminology is in `CONTEXT.md`; the decisions behind it are in `docs/adr/`.

> **Status:** specification. These tokens are the agreed target; the codebase isn't fully wired to them yet — notably the brand-red consolidation to `#f33117` and the elevation/motion scales are not enforced in code.

## Colors

The `gray` ramp runs 10 steps (`100`–`1000`), where the number encodes intent and contrast, not just lightness:

- `100` subtle surface / hover
- `300` default border
- `600` secondary text
- `900` primary action surface
- `1000` primary text and icons

`gray` is the backbone — surfaces, text, borders, and dividers all draw from it, and the semantic tokens (`background`, `muted`, `border`, `foreground`, `primary`) are aliases onto specific steps. There is exactly **one accent**: `brand` (`#f33117`), Qmax red, for the logo, primary CTAs, and emphasis. `brand` is not the same as `primary` (near-black) — primary is the default dark action, brand is the identity. `destructive` (`#ef4343`) is the only state color in use, for errors and destructive actions.

Deliberately omitted: there is no multi-accent palette (blue, green, amber, teal…). Restraint is the point — if a future need is real, add the single family it requires and document it here, rather than shipping a palette nobody uses.

## Typography

Roboto throughout, deliberately light and airy. Headings use Light weight (300) with wide tracking; body is Regular (400) at a relaxed 1.6 line-height; body copy is left-aligned. Pick a token by role, not by eyeballing a size:

- Headings, `heading-48` / `heading-36` / `heading-24`, title pages, sections, and subsections.
- Copy, `copy-20` / `copy-16` / `copy-14`, set body text; `copy-20` is the lead/intro (lighter weight reads well large), `copy-16` is the default.
- `label-12` is the uppercase eyebrow/caption with wide tracking; `button-14` is the medium-weight control label.

`copy-16` and `copy-14` cover most text. Apply these tokens instead of setting size, weight, or line-height by hand.

## Layout

Spacing follows a 4px base scale: 4, 8, 12, 16, 24, 32, 40, 64px. Keep a three-step rhythm: ~8px within a group, ~16px between groups, 32–40px between sections. The fixed top navigation reserves `64px` (`--nav-h`); page content offsets by that much so it never sits under the nav. Center content in a constrained column with side padding that grows at wider breakpoints, and make every layout work on mobile and desktop. The primary breakpoint is `md` (768px); the site uses Tailwind's defaults (`sm` 640, `md` 768, `lg` 1024, `xl` 1280, `2xl` 1536px).

## Elevation & Depth

Hierarchy comes from tonal surfaces and borders first, so shadows stay subtle. Surfaces are flat by default; elevate only to signal layering, smallest tier first. Three `box-shadow` tiers, named so they don't collide with Tailwind's default `shadow-*` utilities:

- `raised` (cards): `0 1px 2px hsl(240 10% 4% / 0.06), 0 1px 3px hsl(240 10% 4% / 0.04)`
- `floating` (dropdowns, popovers): `0 2px 8px -2px hsl(240 10% 4% / 0.08), 0 1px 3px hsl(240 10% 4% / 0.06)`
- `overlay` (modals, sheets): `0 12px 32px -8px hsl(240 10% 4% / 0.18), 0 4px 10px -4px hsl(240 10% 4% / 0.1)`

## Motion

Use motion only when it clarifies a change, never for decoration, and honor `prefers-reduced-motion`. Named tokens (use these, never arbitrary `duration-[…]`, which `tailwindcss-animate` silently drops):

- Easing: `standard` `cubic-bezier(0.4, 0, 0.2, 1)` for most transitions; `emphasized` `cubic-bezier(0.2, 0, 0, 1)` for entrances; `decelerate` `cubic-bezier(0, 0, 0.2, 1)` for elements settling in.
- Duration: `fast` 150ms for hovers and small state changes, `normal` 250ms for most transitions, `slow` 400ms for larger layout and entrance moves.

## Shapes

Radii stay tight: `sm` 4px and `md` 6px for small controls, `lg` 8px (the default) for cards and inputs, `full` 9999px for pills, avatars, and icon buttons. Keep one radius family per view rather than mixing rounded and sharp corners.

## Components

Built on shadcn/ui primitives in `src/components/ui` (`cn()` + class-variance-authority). The `components` tokens above give ready-to-use values drawn from this theme:

- Primary button: solid `primary` (near-black) fill with a near-white label — the default action.
- Brand button: solid `brand` red with white text — the single most important action on a view.
- Outline button: transparent fill with a `border`, tints to `muted` on hover — low-emphasis actions.
- Input: `background` fill, `border`, 6px radius; focus shows the `ring`.
- Card: `background` fill, `border`, 8px radius, `raised` shadow.

Buttons default to the medium 36px size; `sm` is 32px and `lg` is 40px. Hover and active states darken the fill one step; disabled drops opacity with a not-allowed cursor.

## Voice & Content

Copy is part of the design; keep it precise and free of filler — Qmax sells engineering, so the words should read as exact and confident, never salesy.

- Use Title Case for labels, buttons, titles, and tabs; sentence case for body, helper text, and toasts.
- Name actions with a verb and a noun (`Contact Us`, `Download Datasheet`, `View Case Study`), never a bare `Submit` or `Click Here`.
- Write errors as what happened plus what to do next: `Couldn't send your message — check your email address and try again.`
- Keep one term per concept (see `CONTEXT.md`); don't alternate `client`/`customer` or `PCB`/`board` within a page.

## Do's and Don'ts

- Let grayscale rank information: `gray-1000` for primary text, `gray-600` for secondary.
- Reserve `brand` red for identity and the single most important action on a view.
- There is one brand red (`#f33117`) and one error red (`destructive`). Don't introduce a third red, or any new accent hue.
- Don't confuse `primary` (near-black) with `brand` (red). If you want red, say `brand`.
- Apply the typography tokens instead of setting font size, line height, or weight by hand.
- Left-align body copy; don't justify it.
- Use named motion utilities (`duration-normal ease-standard`); don't use arbitrary `duration-[…]`.
- Keep surfaces flat; elevate only to signal layering, smallest tier first.
