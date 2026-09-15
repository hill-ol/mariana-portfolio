import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { folderTone } from "../../constants/themes";
import { getProject, projects } from "../../content/projects";
import ExitTransition from "./ExitTransition";
import styles from "./page.module.css";

export function generateStaticParams() {
  return projects.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({
  params,
}: PageProps<"/work/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);

  if (!project) {
    return { title: "Project not found" };
  }

  return {
    title: `${project.title} — Work`,
    description: project.summary,
  };
}

export default async function ProjectPage({
  params,
}: PageProps<"/work/[slug]">) {
  const { slug } = await params;
  const project = getProject(slug);

  if (!project) {
    notFound();
  }

  /* Carries the folder's color through to the opened page, so the tab on the
     card and the tab on this page are the same folder. */
  const tone = folderTone(projects.findIndex((item) => item.slug === slug));

  return (
    <main className={styles.page} data-tone={tone}>
      <ExitTransition>
        <header className={styles.head}>
          <p className={styles.category}>{project.category}</p>
          <h1 className={styles.title}>{project.title}</h1>
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
          <span className={styles.cardTab} aria-hidden="true" />

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
      </ExitTransition>
    </main>
  );
}
