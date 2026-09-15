import type { Project } from "../content/projects";
import styles from "./ProjectDetail.module.css";

/**
 * Project write-up, shared by the /work/[slug] page and the modal opened from
 * the folder grid, so the content only exists in one place.
 *
 * `headingLevel` exists because the page uses this as its <h1>, while in the
 * modal the dialog's own title is the heading above it.
 */
export default function ProjectDetail({
  project,
  headingLevel = "h1",
}: {
  project: Project;
  headingLevel?: "h1" | "h2";
}) {
  const Heading = headingLevel;

  return (
    <div className={styles.detail}>
      <header className={styles.head}>
        <p className={styles.category}>{project.category}</p>
        <Heading className={styles.title}>{project.title}</Heading>
        <p className={styles.subtitle}>{project.subtitle}</p>

        <dl className={styles.meta}>
          <div>
            <dt>Context</dt>
            <dd>{project.context}</dd>
          </div>
          {project.timeframe ? (
            <div>
              <dt>When</dt>
              <dd>{project.timeframe}</dd>
            </div>
          ) : null}
        </dl>
      </header>

      <div className={styles.card}>
        <div className={styles.body}>
          {project.body.map((paragraph) => (
            <p key={paragraph.slice(0, 48)}>{paragraph}</p>
          ))}
        </div>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>What I did</h2>
          <ul className={styles.contributions}>
            {project.contributions.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </section>

        {/* Media sits between the write-up and the skills: by this point the
            reader knows the thinking, so the work is the payoff. Renders
            placeholders until real files land in /public. */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>The work</h2>

          <ul className={styles.media}>
            {(project.media?.length
              ? project.media
              : [{ kind: "reel" as const, alt: "", caption: undefined }]
            ).map((item, index) => (
              <li key={item.src ?? `placeholder-${index}`} className={styles.mediaItem}>
                {item.src && item.kind === "image" ? (
                  /* eslint-disable-next-line @next/next/no-img-element */
                  <img
                    src={item.src}
                    alt={item.alt}
                    className={styles.mediaAsset}
                    loading="lazy"
                  />
                ) : item.src ? (
                  /* preload="none" so several clips on one page cost nothing
                     until the reader actually plays one. */
                  <video
                    className={styles.mediaAsset}
                    src={item.src}
                    poster={item.poster}
                    controls
                    playsInline
                    preload="none"
                  />
                ) : (
                  <span className={styles.mediaPlaceholder}>
                    Reel coming soon
                  </span>
                )}

                {item.caption ? (
                  <p className={styles.mediaCaption}>{item.caption}</p>
                ) : null}
              </li>
            ))}
          </ul>

          {project.links?.length ? (
            <ul className={styles.links}>
              {project.links.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className={styles.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {link.label}
                    <span aria-hidden="true"> ↗</span>
                  </a>
                </li>
              ))}
            </ul>
          ) : null}
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Skills</h2>
          <ul className={styles.skills}>
            {project.skills.map((skill) => (
              <li key={skill} className={styles.skill}>
                {skill}
              </li>
            ))}
          </ul>
        </section>
      </div>
    </div>
  );
}
