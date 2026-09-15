import ContentReel from "./components/ContentReel";
import ProjectGrid from "./components/ProjectGrid";
import { galleryItems, projects } from "./content/projects";
import styles from "./page.module.css";

const focusAreas = [
  { label: "UX/UI Prototyping", tone: "solid" },
  { label: "Social Media Takeovers", tone: "pink" },
  { label: "Editorial Curation", tone: "blush" },
  { label: "Aesthetic Moodboards", tone: "outline" },
];

export default function Home() {
  return (
    <main className={styles.page}>
      <section className={styles.hero}>
        {/* Entrance is CSS (see page.module.css) so the hero paints before
            hydration — it holds the LCP element. */}
        <div className={styles.heroInner}>
          <h1 className={styles.heroTitle}>
            Marketing &amp; PR Strategist,
            <br />
            Digital Storyteller &amp; <em>UX Explorer.</em>
          </h1>

          <p className={styles.heroBody}>
            Hi! I&rsquo;m a junior at Northeastern University studying Business
            Administration &amp; Communication, with a Concentration in
            Marketing. Blending tactile visual research, real-world social
            takeovers, and wireframe prototypes into warm, intentional brand
            experiences.
          </p>

          {/* The pills reveal as one group — four arriving in sequence reads
              as fussy at this size. */}
          <ul className={styles.tags}>
            {focusAreas.map(({ label, tone }) => (
              <li key={label} className={styles.tag} data-tone={tone}>
                {label}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className={styles.portfolio}>
        <div className={styles.portfolioCard}>
          <header className={styles.portfolioHead}>
            <h2 className={styles.portfolioTitle}>Creative Portfolio</h2>
            <p className={styles.hint}>
              <svg
                className={styles.hintIcon}
                viewBox="0 0 14 12"
                aria-hidden="true"
                focusable="false"
              >
                <path
                  d="M1 10.5V2a1 1 0 0 1 1-1h3.2l1.3 1.5H12a1 1 0 0 1 1 1v6a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1Z"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.1"
                  strokeLinejoin="round"
                />
              </svg>
              Click any folder to inspect inside
            </p>
          </header>

          <ProjectGrid projects={projects} />
        </div>
      </section>

      {/* Browse layer: the folders are for deliberate reading, this is for
          skimming the visuals. Same data, different intent. */}
      <section className={`${styles.portfolio} ${styles.reelSection}`}>
        <div className={styles.portfolioCard}>
          <ContentReel items={galleryItems()} />
        </div>
      </section>
    </main>
  );
}
