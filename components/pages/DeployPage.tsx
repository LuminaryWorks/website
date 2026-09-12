"use client";

import { useT } from "@/lib/i18n/context";
import styles from "./page.module.scss";

export function DeployPage() {
  const { m } = useT();
  return (
    <main id="main" className={styles.main}>
      <h1>{m.meta.deploy.title}</h1>
      <p>{m.meta.deploy.description}</p>
    </main>
  );
}
