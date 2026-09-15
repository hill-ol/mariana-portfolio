import type { Metadata } from "next";
import { notFound } from "next/navigation";
import ProjectDetail from "../../components/ProjectDetail";
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
        <ProjectDetail project={project} />
      </ExitTransition>
    </main>
  );
}
