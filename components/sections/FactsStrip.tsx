"use client";

import { Reveal } from "@/components/site/Reveal";
import { useT } from "@/lib/i18n/context";
import styles from "./FactsStrip.module.scss";

export function FactsStrip() {
  const { m } = useT();

  return (
    <section className={`lw-section lw-section-alt ${styles.strip}`}>
      <Reveal>
        <div className="lw-container">
          <ul className={styles.grid}>
            {m.home.facts.items.map((item) => (
              <li key={item.value + item.label} className={styles.item}>
                <span className={styles.value}>{item.value}</span>
                <span className={styles.label}>{item.label}</span>
              </li>
            ))}
          </ul>
        </div>
      </Reveal>
    </section>
  );
}
