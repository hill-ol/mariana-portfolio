import type { ReactNode } from "react";
import styles from "./template.module.css";

/**
 * template.tsx remounts on every navigation, so this gives one consistent
 * entry animation across all routes — including browser back/forward, which
 * per-page CSS keyframes could never reach.
 *
 * Deliberately CSS rather than Motion: a Motion mount animation renders its
 * hidden state into the static HTML, which would leave the whole page at
 * opacity 0 until hydration — hurting LCP and breaking entirely without JS.
 * A CSS animation paints immediately and needs no client boundary.
 */
export default function Template({ children }: { children: ReactNode }) {
  return <div className={styles.template}>{children}</div>;
}
