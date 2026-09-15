"use client";

import { motion, useReducedMotion } from "motion/react";
import Link from "next/link";
import { useRef } from "react";
import { folderTone } from "../constants/themes";
import type { GalleryItem } from "../content/projects";
import { projects } from "../content/projects";
import styles from "./ContentReel.module.css";

const KIND_LABEL = {
  reel: "Reel",
  video: "Video",
  image: "Still",
} as const;

/**
 * Horizontal strip of every piece of content across all projects, so a
 * recruiter can skim the visuals without committing to a project page.
 *
 * Scrolling is native (overflow-x + scroll-snap) rather than a Motion drag
 * carousel: native keeps trackpad, touch, and keyboard scrolling working and
 * stays accessible. Motion handles the reveal and the hover/press feel.
 */
export default function ContentReel({ items }: { items: GalleryItem[] }) {
  const trackRef = useRef<HTMLUListElement>(null);
  const reduceMotion = useReducedMotion();

  function scrollByCard(direction: 1 | -1) {
    const track = trackRef.current;
    if (!track) return;

    const card = track.querySelector("li");
    const step = card ? card.getBoundingClientRect().width + 14 : 240;

    track.scrollBy({
      left: step * 2 * direction,
      behavior: reduceMotion ? "auto" : "smooth",
    });
  }

  return (
    <div className={styles.reel}>
      <div className={styles.head}>
        <div>
          <h2 className={styles.title}>Reels &amp; Stills</h2>
          <p className={styles.note}>
            Everything in one scroll — tap any piece to read the project behind
            it.
          </p>
        </div>

        <div className={styles.controls}>
          <motion.button
            type="button"
            className={styles.control}
            onClick={() => scrollByCard(-1)}
            aria-label="Scroll left"
            whileTap={reduceMotion ? undefined : { scale: 0.92 }}
          >
            <Arrow direction="left" />
          </motion.button>
          <motion.button
            type="button"
            className={styles.control}
            onClick={() => scrollByCard(1)}
            aria-label="Scroll right"
            whileTap={reduceMotion ? undefined : { scale: 0.92 }}
          >
            <Arrow direction="right" />
          </motion.button>
        </div>
      </div>

      {/* tabIndex makes the scroll region reachable by keyboard. */}
      <ul
        ref={trackRef}
        className={styles.track}
        tabIndex={0}
        role="region"
        aria-label="Content from all projects, horizontally scrollable"
      >
        {items.map((item, index) => {
          const tone = folderTone(
            projects.findIndex((p) => p.slug === item.project.slug),
          );

          return (
            <li key={item.id} className={styles.cell}>
              <motion.div
                className={styles.card}
                data-tone={tone}
                initial={reduceMotion ? { opacity: 0 } : { opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{
                  duration: reduceMotion ? 0.2 : 0.5,
                  delay: reduceMotion ? 0 : Math.min(index, 6) * 0.05,
                  ease: [0.22, 1, 0.36, 1],
                }}
                whileHover={reduceMotion ? undefined : { y: -5 }}
              >
                <Link
                  href={`/work/${item.project.slug}`}
                  className={styles.link}
                >
                  <span className={styles.frame}>
                    {item.media?.poster ? (
                      /* eslint-disable-next-line @next/next/no-img-element */
                      <img
                        src={item.media.poster}
                        alt={item.media.alt}
                        className={styles.image}
                        loading="lazy"
                      />
                    ) : (
                      <span className={styles.placeholder} aria-hidden="true" />
                    )}

                    {item.media ? (
                      <span className={styles.kind}>
                        {KIND_LABEL[item.media.kind]}
                      </span>
                    ) : (
                      <span className={styles.kind} data-pending="">
                        Coming soon
                      </span>
                    )}
                  </span>

                  <span className={styles.meta}>
                    <span className={styles.metaTitle}>
                      {item.project.title}
                    </span>
                    <span className={styles.metaCaption}>
                      {item.media?.caption ?? item.project.subtitle}
                    </span>
                  </span>
                </Link>
              </motion.div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

function Arrow({ direction }: { direction: "left" | "right" }) {
  return (
    <svg viewBox="0 0 12 12" aria-hidden="true" focusable="false">
      <path
        d={direction === "left" ? "M7.5 2 L3.5 6 L7.5 10" : "M4.5 2 L8.5 6 L4.5 10"}
        fill="none"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
