"use client";

import { motion, useReducedMotion } from "motion/react";
import Link from "next/link";
import { useState } from "react";
import { folderTone } from "../constants/themes";
import type { Project } from "../content/projects";
import ProjectModal from "./ProjectModal";
import styles from "./ProjectGrid.module.css";

export default function ProjectGrid({ projects }: { projects: Project[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const reduceMotion = useReducedMotion();

  /* Cards stay real links to /work/[slug] — that route is still the
     shareable, indexable version, and modified clicks must keep working.
     A plain click opens the modal instead so the folder can morph open. */
  function handleOpen(
    event: React.MouseEvent<HTMLAnchorElement>,
    index: number,
  ) {
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
    setOpenIndex(index);
  }

  return (
    <>
      <ul className={styles.grid}>
        {projects.map((project, index) => (
          <li
            key={project.slug}
            className={styles.cell}
            style={{ "--index": index } as React.CSSProperties}
          >
            <Link
              href={`/work/${project.slug}`}
              className={styles.folderLink}
              onClick={(event) => handleOpen(event, index)}
            >
              <motion.span
                /* Shared with the modal sheet; Motion morphs between them.
                   Dropped under reduced motion so nothing flies across. */
                layoutId={reduceMotion ? undefined : `folder-${project.slug}`}
                className={styles.folder}
                data-tone={folderTone(index)}
                /* Hover/press live here rather than in CSS: a CSS transform on
                   a layout-animated element fights Motion's projection. */
                whileHover={reduceMotion ? undefined : { y: -4 }}
                whileTap={reduceMotion ? undefined : { y: -1, scale: 0.98 }}
                /* Motion defaults hover/tap to a spring; an eased tween is
                   calmer and matches the rest of the site's timing. */
                transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
              >
                <span className={styles.tab} aria-hidden="true" />

                <span className={styles.head}>
                  <span className={styles.category}>{project.category}</span>
                  <svg
                    className={styles.arrow}
                    viewBox="0 0 12 12"
                    aria-hidden="true"
                    focusable="false"
                  >
                    <path
                      d="M3 9 L9 3 M4.4 3 H9 V7.6"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>

                <span className={styles.body}>
                  <span className={styles.title}>{project.title}</span>
                  <span className={styles.subtitle}>{project.subtitle}</span>
                </span>
              </motion.span>
            </Link>
          </li>
        ))}
      </ul>

      <ProjectModal
        project={openIndex === null ? null : projects[openIndex]}
        index={openIndex ?? 0}
        onClose={() => setOpenIndex(null)}
      />
    </>
  );
}
