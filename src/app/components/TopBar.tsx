"use client";

import { motion } from "motion/react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import ContactModal from "./ContactModal";
import styles from "./TopBar.module.css";

const navItems = [
  /* `owns` lets a nav item stay active on its detail pages — /work/[slug]
     should keep "Work & Projects" underlined. */
  { label: "Work & Projects", href: "/", owns: ["/work"] },
  { label: "About Me", href: "/about-me" },
  { label: "Creative Process", href: "/creative-process" },
];

const contactHref = "/say-hello";

export default function TopBar() {
  const pathname = usePathname();
  const [contactOpen, setContactOpen] = useState(false);

  /* Opens the modal on a plain click, but leaves modified clicks alone so
     the /say-hello route stays shareable and openable in a new tab. */
  function handleContactClick(event: React.MouseEvent<HTMLAnchorElement>) {
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
    setContactOpen(true);
  }

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
        {navItems.map(({ label, href, owns }) => {
          const isActive =
            pathname === href ||
            (owns?.some((prefix) => pathname.startsWith(prefix)) ?? false);

          return (
            <Link
              key={href}
              href={href}
              className={styles.navLink}
              data-active={isActive || undefined}
              aria-current={isActive ? "page" : undefined}
            >
              {label}

              {/* One shared layoutId across the nav, so the underline slides
                  from the old item to the new one instead of cross-fading. */}
              {isActive ? (
                <motion.span
                  layoutId="nav-underline"
                  className={styles.navUnderline}
                  transition={{ duration: 0.36, ease: [0.22, 1, 0.36, 1] }}
                />
              ) : null}
            </Link>
          );
        })}
      </nav>

      <Link
        href={contactHref}
        className={styles.cta}
        onClick={handleContactClick}
      >
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

      <ContactModal
        open={contactOpen}
        onClose={() => setContactOpen(false)}
      />
    </header>
  );
}
