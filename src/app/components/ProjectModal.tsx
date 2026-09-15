"use client";

import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { useEffect, useRef } from "react";
import { folderTone } from "../constants/themes";
import type { Project } from "../content/projects";
import ProjectDetail from "./ProjectDetail";
import styles from "./ProjectModal.module.css";

/** Must stay in step with the shell's exit duration below. */
const EXIT_MS = 240;

/**
 * The opened folder. The tone-coloured sheet shares a `layoutId` with the
 * folder card in the grid, so Motion morphs one into the other rather than
 * cross-fading two separate things — which is why this has to be rendered
 * from inside ProjectGrid, in the same React tree as the cards.
 *
 * Native <dialog> + showModal() still supplies the focus trap, background
 * inerting and focus restoration.
 */
export default function ProjectModal({
  project,
  index,
  onClose,
}: {
  project: Project | null;
  index: number;
  onClose: () => void;
}) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const reduceMotion = useReducedMotion();
  const open = project !== null;

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;

    if (open) {
      if (!dialog.open) dialog.showModal();
      return;
    }

    if (!dialog.open) return;

    /* Timer rather than AnimatePresence's onExitComplete: Motion runs on
       requestAnimationFrame, so a backgrounded tab would never fire the
       callback and the dialog would be stuck open. */
    const timer = window.setTimeout(() => dialog.close(), EXIT_MS);
    return () => window.clearTimeout(timer);
  }, [open]);

  useEffect(() => {
    if (!open) return;

    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = previous;
    };
  }, [open]);

  return (
    <dialog
      ref={dialogRef}
      className={styles.dialog}
      aria-label={project ? `${project.title} — project details` : undefined}
      onClose={onClose}
      onKeyDown={(event) => {
        if (event.key === "Escape") {
          event.preventDefault();
          onClose();
        }
      }}
    >
      <AnimatePresence>
        {project ? (
          <motion.div
            key="project-modal"
            className={styles.shell}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: EXIT_MS / 1000 }}
            /* The shell covers the viewport, so a click landing on it rather
               than on the sheet is a click outside. */
            onClick={(event) => {
              if (event.target === event.currentTarget) onClose();
            }}
          >

            <motion.div
              /* The shared element. Matches the folder card's layoutId, so
                 the card's rect is the start of this sheet's animation. */
              layoutId={reduceMotion ? undefined : `folder-${project.slug}`}
              className={styles.sheet}
              data-tone={folderTone(index)}
              /* A long eased tween rather than a spring: springs overshoot and
                 settle abruptly, which reads as chunky on a surface this
                 large. Slower, but smooth the whole way. */
              transition={
                reduceMotion
                  ? { duration: 0.15 }
                  : { duration: 0.56, ease: [0.22, 1, 0.36, 1] }
              }
            >
              <div className={styles.sheetHead}>
                <span className={styles.sheetTab} aria-hidden="true" />
                <button
                  type="button"
                  className={styles.close}
                  onClick={onClose}
                  aria-label="Close"
                >
                  <svg viewBox="0 0 14 14" aria-hidden="true" focusable="false">
                    <path
                      d="M3 3 L11 11 M11 3 L3 11"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                    />
                  </svg>
                </button>
              </div>

              {/* Faded in slightly behind the morph so the text never gets
                  stretched by the sheet resizing under it. */}
              <motion.div
                className={styles.sheetBody}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{
                  duration: reduceMotion ? 0.15 : 0.34,
                  delay: reduceMotion ? 0 : 0.2,
                }}
              >
                <ProjectDetail project={project} headingLevel="h2" />
              </motion.div>
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </dialog>
  );
}
