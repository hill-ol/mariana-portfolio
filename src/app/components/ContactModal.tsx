"use client";

import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { useEffect, useRef } from "react";
import ContactCard from "./ContactCard";
import styles from "./ContactModal.module.css";

/**
 * Native <dialog> + showModal() supplies the focus trap, background inerting
 * and focus restoration. Motion drives the panel transition: AnimatePresence
 * keeps the content mounted long enough to animate out, and the dialog is
 * only closed once that finishes.
 *
 * The dim and blur are on ::backdrop and animated with CSS, because a blurred
 * child of the opacity-animated shell would sample its own group rather than
 * the page behind the dialog.
 */
/** Must stay in step with the shell's exit duration below. */
const EXIT_MS = 220;

export default function ContactModal({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;

    if (open) {
      if (!dialog.open) dialog.showModal();
      return;
    }

    if (!dialog.open) return;

    /* Hold the dialog open for the length of the exit, then close it, which
       is what restores focus to the trigger.
       Deliberately a timer rather than AnimatePresence's onExitComplete:
       Motion runs on requestAnimationFrame, so if the tab is backgrounded
       mid-close the callback never fires and the modal would be stuck open.
       A timer still fires, so the dialog always closes. */
    const timer = window.setTimeout(() => dialog.close(), EXIT_MS);
    return () => window.clearTimeout(timer);
  }, [open]);

  // showModal() inerts the page but does not stop it scrolling behind.
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
      aria-labelledby="contact-modal-title"
      onClose={onClose}
      /* Handled explicitly so there is one deterministic path across
         browsers; preventDefault stops the native dismissal running too. */
      onKeyDown={(event) => {
        if (event.key === "Escape") {
          event.preventDefault();
          onClose();
        }
      }}
    >
      <AnimatePresence>
        {open ? (
          /* AnimatePresence tracks its direct children by key, so this has to
             be a keyed motion element for the exit animation to run at all. */
          <motion.div
            key="contact"
            className={styles.shell}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: EXIT_MS / 1000 }}
            /* The shell covers the viewport, so a click landing on it rather
               than on its content is a click outside the panel. */
            onClick={(event) => {
              if (event.target === event.currentTarget) onClose();
            }}
          >

            <motion.div
              className={styles.inner}
              initial={
                reduceMotion
                  ? { opacity: 0 }
                  : { opacity: 0, y: 16, scale: 0.97 }
              }
              animate={{ opacity: 1, y: 0, scale: 1 }}
              /* No `exit` here on purpose: the shell's fade covers the whole
                 modal on the way out, and a second spring-driven exit in the
                 subtree left AnimatePresence waiting on it forever, so
                 onExitComplete never fired and the dialog stayed open. */
              /* Eased tween rather than a spring — smoother than a snappy
                 settle, at the cost of being slightly slower. */
              transition={
                reduceMotion
                  ? { duration: 0.12 }
                  : { duration: 0.46, ease: [0.22, 1, 0.36, 1] }
              }
            >
              <div className={styles.head}>
                <h2 id="contact-modal-title" className={styles.title}>
                  Say Hello
                </h2>

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

              <ContactCard />
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </dialog>
  );
}
