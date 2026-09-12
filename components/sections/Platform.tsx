"use client";

import { Chip } from "@/components/site/Chip";
import { Reveal } from "@/components/site/Reveal";
import { useT } from "@/lib/i18n/context";
import styles from "./Platform.module.scss";

export function Platform() {
  const { m } = useT();
  const s = m.home.platform;

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
          <div className={styles.grid}>
            {s.cards.map((card) => (
              <article key={card.id} className={styles.card}>
                <h3 className={styles.cardTitle}>
                  {card.title}
                  {card.lab ? (
                    <span className={styles.labMark}>
                      <span className={styles.labDot} aria-hidden="true" />
                      {s.lab}
                    </span>
                  ) : null}
                </h3>
                <p className={styles.cardBody}>{card.body}</p>
                <ul className={styles.tags}>
                  {card.tags.map((tag) => (
                    <li key={tag}>
                      <Chip>{tag}</Chip>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
          <p className={styles.callout}>
            <span className={styles.calloutLabel}>{s.calloutLabel}</span>
            {s.calloutCodes}
          </p>
          <p className={styles.emphasis}>{s.emphasis}</p>
        </div>
      </Reveal>
    </section>
  );
}
