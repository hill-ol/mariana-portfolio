import type { Metadata } from "next";
import Postcards from "../components/Postcards";
import { Stagger, StaggerItem } from "../components/Stagger";
import {
  credentials,
  headshot,
  intro,
  resumeHref,
  status,
  toolkit,
  travelNote,
} from "../content/about";
import { destinations } from "../content/destinations";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "About Me",
  description:
    "Marketing and communication student at Northeastern University — audience research, content production, and UX.",
};

export default function AboutPage() {
  return (
    <main className={styles.page}>
      <section className={styles.intro}>
        <div className={styles.introInner}>
          <div className={styles.portrait}>
            {headshot ? (
              /* eslint-disable-next-line @next/next/no-img-element */
              <img
                src={headshot.src}
                alt={headshot.alt}
                className={styles.portraitImg}
              />
            ) : (
              <span className={styles.portraitPlaceholder} aria-hidden="true">
                MF
              </span>
            )}
            <span className={styles.portraitCaption}>Hi, I&rsquo;m Mariana</span>
          </div>

          <div className={styles.introText}>
            <h1 className={styles.title}>About Me</h1>

            <p className={styles.status}>{status}</p>

            {intro.map((paragraph) => (
              <p key={paragraph.slice(0, 40)} className={styles.paragraph}>
                {paragraph}
              </p>
            ))}

            <dl className={styles.credentials}>
              <div>
                <dt>Studying</dt>
                <dd>
                  {credentials.degree}, {credentials.concentration}
                  <br />
                  {credentials.school}
                </dd>
              </div>
              <div>
                <dt>Graduating</dt>
                <dd>{credentials.graduation}</dd>
              </div>
            </dl>

            {resumeHref ? (
              <a className={styles.resume} href={resumeHref}>
                View résumé
              </a>
            ) : (
              <span className={styles.resumePlaceholder} aria-disabled="true">
                Résumé — coming soon
              </span>
            )}

            <p className={styles.travel}>{travelNote}</p>
          </div>
        </div>
      </section>

      <section className={styles.panel}>
        <div className={styles.panelCard}>
          <h2 className={styles.panelTitle}>Toolkit &amp; Temperament</h2>

          <div className={styles.toolkit}>
            {toolkit.map((group) => (
              <div key={group.label} className={styles.group}>
                <h3 className={styles.groupLabel}>{group.label}</h3>
                {/* Fast stagger, and per-group so the longest list (8 chips)
                    still lands in about 200ms. */}
                <Stagger
                  className={styles.groupItems}
                  as="ul"
                  stagger={0.025}
                  inView
                >
                  {group.items.map((item) => (
                    <StaggerItem key={item} className={styles.chip} as="li">
                      {item}
                    </StaggerItem>
                  ))}
                </Stagger>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.panel}>
        <div className={styles.panelCard}>
          <h2 className={styles.panelTitle}>Postcards Across the Globe</h2>
          <p className={styles.panelNote}>
            Where I&rsquo;ve studied and worked.
          </p>
          <Postcards destinations={destinations} />
        </div>
      </section>
    </main>
  );
}
