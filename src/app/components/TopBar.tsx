"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./TopBar.module.css";

const navItems = [
  { label: "Work & Projects", href: "/" },
  { label: "About Me", href: "/about-me" },
  { label: "Creative Process", href: "/creative-process" },
];

const contactHref = "/say-hello";

export default function TopBar() {
  const pathname = usePathname();

  return (
    <header className={styles.topBar}>
      <Link
        href="/"
        className={styles.brand}
        aria-label="Mariana Fernandez-Martin — Marketing & Creative Portfolio"
      >
        <span className={styles.brandName}>Mariana Fernandez-Martin</span>
        <span className={styles.brandTagline}>Marketing &amp; Creative Portfolio</span>
      </Link>

      <nav className={styles.nav} aria-label="Main">
        {navItems.map(({ label, href }) => {
          const isActive = pathname === href;

          return (
            <Link
              key={href}
              href={href}
              className={styles.navLink}
              data-active={isActive || undefined}
              aria-current={isActive ? "page" : undefined}
            >
              {label}
            </Link>
          );
        })}
      </nav>

      <Link href={contactHref} className={styles.cta}>
        Say Hello
        <svg
          className={styles.ctaGlyph}
          viewBox="0 0 10 10"
          aria-hidden="true"
          focusable="false"
        >
          <path d="M1.2 0.8 L8.8 5 L1.2 9.2 Z" />
        </svg>
      </Link>
    </header>
  );
}
