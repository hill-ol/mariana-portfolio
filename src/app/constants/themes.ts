/**
 * Brand palette.
 *
 * These values mirror the `--brand-*` custom properties in `globals.css`, which
 * are canonical for styling — reach for `colorVars` (or the CSS variables
 * directly) in components. `colors` holds the raw hex for the places CSS
 * variables cannot reach: OG image generation, `<meta name="theme-color">`,
 * canvas, and chart libraries. Update both files together.
 */
export const colors = {
  /** Deep brown — body text, nav, filled buttons. */
  primary: "#604734",
  /** Darker brown — hover/pressed state for filled buttons. */
  primaryDark: "#4a3627",
  /** Warm cream — top bar and page background. */
  surface: "#fbf4dc",
  /** Blush — section washes and accents. */
  accent: "#f6d8d6",
  /** Pink — secondary accent. */
  accentAlt: "#f0c5d4",
  /** Hairline rule, primary at 18% alpha. */
  rule: "rgba(96, 71, 52, 0.18)",
} as const;

/** `var()` references to the same palette, for inline styles. */
export const colorVars = {
  primary: "var(--brand-brown)",
  primaryDark: "var(--brand-brown-deep)",
  surface: "var(--brand-cream)",
  accent: "var(--brand-blush)",
  accentAlt: "var(--brand-pink)",
  rule: "var(--brand-rule)",
} as const;

export type ColorName = keyof typeof colors;
