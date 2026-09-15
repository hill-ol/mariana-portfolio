"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState, type ReactNode } from "react";
import styles from "./page.module.css";

/**
 * Must stay in step with the longest exit animation in page.module.css
 * (`.article[data-closing]` — the back link finishes last at 150ms + 200ms).
 */
const CLOSE_MS = 330;

/**
 * The App Router unmounts this page as soon as navigation starts, so a CSS
 * exit animation would never get to play. Instead we run the fold first and
 * navigate when it lands.
 */
export default function ExitTransition({ children }: { children: ReactNode }) {
  const router = useRouter();
  const [closing, setClosing] = useState(false);

  useEffect(() => {
    if (!closing) return;

    const timer = window.setTimeout(() => router.push("/"), CLOSE_MS);
    return () => window.clearTimeout(timer);
  }, [closing, router]);

  function handleClose(event: React.MouseEvent<HTMLAnchorElement>) {
    // Leave modified clicks alone so open-in-new-tab still works.
    if (
      event.metaKey ||
      event.ctrlKey ||
      event.shiftKey ||
      event.altKey ||
      event.button !== 0
    ) {
      return;
    }

    event.preventDefault();

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      router.push("/");
      return;
    }

    setClosing(true);
  }

  return (
    <article className={styles.article} data-closing={closing || undefined}>
      <Link href="/" className={styles.back} onClick={handleClose}>
        <span aria-hidden="true">&larr;</span> Work &amp; Projects
      </Link>

      {children}
    </article>
  );
}
