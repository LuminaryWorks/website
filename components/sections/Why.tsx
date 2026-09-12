"use client";

import { Reveal } from "@/components/site/Reveal";
import { useT } from "@/lib/i18n/context";
import styles from "./Why.module.scss";

export function Why() {
  const { m } = useT();
  const s = m.home.why;

  return (
    <section className="lw-section" aria-label={s.title}>
      <Reveal>
        <div className="lw-container">
          <header className={styles.head}>
            <p className={styles.kicker}>
              {s.index} / {s.label}
            </p>
            <h2 className={styles.title}>{s.title}</h2>
          </header>
          <ul className={styles.grid}>
            {s.items.map((item) => (
              <li key={item.title} className={styles.card}>
                <h3 className={styles.cardTitle}>{item.title}</h3>
                <p className={styles.cardBody}>{item.body}</p>
              </li>
            ))}
          </ul>
        </div>
      </Reveal>
    </section>
  );
}
