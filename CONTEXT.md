# Qmax Design System

The shared language for Qmax's visual foundation: how we name colors, type, and
the other design values that the website is built from. This is a glossary, not a
spec — it pins down what each word *means* so that "primary", "accent", and "brand"
stop being used interchangeably. Concrete token values are listed in `design.md`
(served at `/design.md`); the rationale behind the architecture lives in
`docs/adr/`.

> Scope note: this is currently the only context in the repo, so it lives at the
> root. If we later grill non-design domains (services, case studies, careers) and
> they grow their own language, we'll promote this to a `CONTEXT-MAP.md`.

## Language

### Token layers

**Token**:
A named design value. Every color, size, radius, shadow, and duration in the system
is a token. Tokens come in two layers — primitives and semantic tokens.

**Primitive**:
A raw value at the bottom layer, named by what it *is*, not what it's for — a step
on a scale (`gray-600`, `brand-500`). Components should almost never reference a
primitive directly; they reference a semantic token that aliases it.
_Avoid_: raw color, base color, hardcoded value.

**Semantic token**:
An intent-named token that aliases a primitive (`--primary`, `--muted`, `--border`).
It says what the value is *for*, not what it is, so the underlying primitive can
change without touching components. This is the layer components consume.
_Avoid_: alias color, theme variable, css var (too generic).

**Scale** (a.k.a. **Ramp**):
The ordered `100…1000` series for one color family, where the number encodes
*intent/contrast*, not lightness — `gray-100` is a faint surface, `gray-1000` is
near-black text. Every family (gray, brand, each state color) is a full ramp.
_Avoid_: shades, tints, palette steps, swatches.

### Color roles

**Brand**:
The Qmax identity color — the red (`--brand-500`, `#f33117`) used for the logo,
CTAs, and the animated sweeps. There is exactly one brand color, and it's a single
value, not a ramp. It is **not** the same thing as `--primary` or `--accent` (see
Flagged ambiguities).
_Avoid_: accent, primary color, theme color.

**Accent**:
A shadcn **semantic surface** token (`--accent` / `--accent-foreground`) used for
low-emphasis hover/active backgrounds. It is a neutral surface, *not* the brand
color. Reserve the word "accent" for this token only.
_Avoid_: using "accent" to mean the brand red.

**State color**:
A color that signals an outcome rather than identity. The system currently has
exactly one — `--destructive` (red) — for errors and destructive actions. It's a
red, but its *intent* is "something went wrong," which is why it's a separate token
from brand. No success/warning/info colors are defined; add one only when a real
need appears, and document it then.
_Avoid_: status color, alert color, feedback color.

**Surface**:
A background layer that content sits on (`--background`, `--card`, `--popover`).
Surfaces are grayscale. Each surface is paired with a foreground.
_Avoid_: container color, panel color, fill.

**Foreground**:
The text/icon color paired with a given surface (`--foreground`,
`--card-foreground`, `--muted-foreground`). Always defined relative to its surface
so contrast holds in light and dark.
_Avoid_: text color (too narrow — it also covers icons/borders-on-surface).

### Other foundations

**Elevation**:
The perceived depth of a surface above the page, expressed through a shadow token.
"Elevation" is the concept; the shadow is how it's rendered.
_Avoid_: shadow level, drop shadow (those name the rendering, not the role).

**Type group**:
A named cluster of typography tokens for one job — **Headings**, **Labels**,
**Copy**, **Buttons**. Each group fixes family, size range, weight, line-height,
and letter-spacing. Pick a group by *role*, not by eyeballing a pixel size.
_Avoid_: text style, font preset.

**Rhythm**:
The vertical/horizontal spacing convention layered on the 4px spacing scale: tight
space within a group, more between groups, most between page sections. Rhythm is
*how* the spacing scale is applied, not a separate set of tokens.
_Avoid_: padding rules, gaps.

**Motion token**:
A named easing curve or duration. Components and animation libraries (Framer, GSAP,
CSS) reference these instead of inlining magic numbers.
_Avoid_: transition, animation timing (those name the effect, not the token).

## Flagged ambiguities

- **"primary" ≠ brand.** `--primary` is a shadcn semantic token that aliases the
  darkest neutral (`gray-1000`, near-black) for default actions. The **brand** color
  is the red (`--brand-500`). Saying "make it primary-colored" when you mean "make it red" is
  the single most common mistake — they resolve to different values.
- **"accent" ≠ brand.** `--accent` is a neutral hover surface. The brand red is
  never `--accent`. If you want brand emphasis, say "brand".
- **One red, one name.** Historically the codebase carried 9 reds (`#f33117`,
  `#ef4444`, `#e63329`, `#ff0000`, …) and a `brand-red` token whose value
  (`#ef4444`) didn't even match the most-used red. Canonical brand red is
  **`#f33117`** = `--brand-500`; every other red is a migration target, not a
  choice. See [ADR-0003](docs/adr/0003-canonical-brand-red.md).

## Example dialogue

> **Dev:** The CTA on the careers hero should pop — I'll set it to the primary color.
>
> **Design owner:** Careful — `--primary` is near-black. You mean the *brand* color,
> the red. That's `--brand-500`, or the `primary` button variant which is itself
> brand-tinted. "Primary" the token and "primary" as in "most important" are not the
> same thing here.
>
> **Dev:** Got it. And the hover state — light red background?
>
> **Design owner:** No. Hover surfaces are neutral — that's what `--accent` is for.
> Brand red is for the element that *carries* the emphasis, not the surface behind
> it. Tinting hover backgrounds red would make every menu look like an error.
>
> **Dev:** Speaking of errors — the form's "email failed" message, that's the brand
> red too since it's red?
>
> **Design owner:** It's a *state* color — `--destructive`. It happens to be red, but
> it means "something went wrong," which is a different intent from brand. They're
> separate tokens so we can retune one without touching the other — and the palette
> stays at exactly these two reds, nothing more.
