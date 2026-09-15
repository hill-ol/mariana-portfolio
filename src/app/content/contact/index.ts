/**
 * Contact details for the Say Hello page. Same convention as the other
 * content files — copy and data live here, not in the component.
 */

export type ContactChannel = {
  label: string;
  /** Shown to the reader. */
  value: string;
  href: string;
  hint?: string;
  /** Gets the filled treatment; there should only be one. */
  primary?: boolean;
};

export const channels: ContactChannel[] = [
  {
    label: "Email",
    value: "fernandezmartin.m@northeastern.edu",
    href: "mailto:fernandezmartin.m@northeastern.edu",
    hint: "Best way to reach me",
    primary: true,
  },
  {
    label: "Phone",
    value: "508-298-2626",
    href: "tel:+15082982626",
    hint: "Calls & texts",
  },
];

/**
 * Left undefined until the real profile URL exists — the page renders a
 * placeholder chip rather than a dead link. Worth filling in: LinkedIn is the
 * standard trust signal for marketing roles.
 */
export const linkedInUrl: string | undefined = undefined;

/** DRAFT copy — rewrite in your own voice. */
export const lede =
  "Whether it's a co-op opportunity, a freelance project, or a question about something in my portfolio, I'd love to hear from you.";

/** DRAFT copy — rewrite in your own voice. */
export const postscript =
  "Every project here was researched, filmed, and edited by me. Happy to walk through the thinking behind any of them.";
