import Link from "next/link";
import { folderTone } from "../constants/themes";
import type { Project } from "../content/projects";
import styles from "./ProjectGrid.module.css";

export default function ProjectGrid({ projects }: { projects: Project[] }) {
  return (
    <ul className={styles.grid}>
      {projects.map((project, index) => (
        <li
          key={project.slug}
          className={styles.cell}
          style={{ "--index": index } as React.CSSProperties}
        >
          <Link
            href={`/work/${project.slug}`}
            className={styles.folder}
            data-tone={folderTone(index)}
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
          </Link>
        </li>
      ))}
    </ul>
  );
}
