import type { Metadata } from "next";
import ContactCard from "../components/ContactCard";
import { status } from "../content/about";
import { lede } from "../content/contact";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Say Hello",
  description:
    "Get in touch with Mariana Fernandez-Martin — marketing and communication student at Northeastern University.",
};

export default function SayHelloPage() {
  return (
    <main className={styles.page}>
      <section className={styles.hero}>
        <div className={styles.heroInner}>
          <h1 className={styles.title}>Say Hello</h1>
          <p className={styles.status}>{status}</p>
          <p className={styles.lede}>{lede}</p>
        </div>
      </section>

      <section className={styles.panel}>
        <div className={styles.letterWrap}>
          <ContactCard />
        </div>
      </section>
    </main>
  );
}
