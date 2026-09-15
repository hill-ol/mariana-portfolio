import type { Metadata } from "next";
import Link from "next/link";
import { Stagger, StaggerItem } from "../components/Stagger";
import { getProject } from "../content/projects";
import { intro, philosophy, stages } from "../content/process";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Creative Process",
  description:
    "How I work: research first, find who actually decides, ask why, let the insight pick the craft, then measure and adjust.",
};

function frameNumber(order: number) {
  return String(order).padStart(2, "0");
}

export default function CreativeProcessPage() {
  return (
    <main className={styles.page}>
      <section className={styles.hero}>
        <div className={styles.heroInner}>
          <h1 className={styles.title}>Creative Process</h1>
          <blockquote className={styles.philosophy}>{philosophy}</blockquote>
          <p className={styles.intro}>{intro}</p>
        </div>
      </section>

      <section className={styles.panel}>
        {/* Filmstrip: folders hold the archive, postcards hold the places,
            and a strip of frames holds a sequence. */}
        <Stagger className={styles.strip} as="ul" stagger={0.1} inView>
          {stages.map((stage) => (
            <StaggerItem
              key={stage.order}
              className={styles.frame}
              as="li"
            >
              <p className={styles.frameNumber} aria-hidden="true">
                {frameNumber(stage.order)}
              </p>

              <div className={styles.frameBody}>
                <h2 className={styles.stageTitle}>
                  <span className={styles.stageIndex}>
                    Step {frameNumber(stage.order)}
                  </span>
                  {stage.title}
                </h2>
                <p className={styles.stageSummary}>{stage.summary}</p>
                <p className={styles.stageText}>{stage.body}</p>

                <ul className={styles.receipts}>
                  {stage.receipts.map((receipt) => {
                    const project = getProject(receipt.slug);

                    return (
                      <li key={receipt.slug + receipt.note.slice(0, 16)}>
                        {project ? (
                          <Link
                            href={`/work/${project.slug}`}
                            className={styles.receiptLink}
                          >
                            {project.title}
                          </Link>
                        ) : (
                          <span className={styles.receiptLink}>
                            {receipt.slug}
                          </span>
                        )}{" "}
                        <span className={styles.receiptNote}>
                          {receipt.note}
                        </span>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </section>
    </main>
  );
}
