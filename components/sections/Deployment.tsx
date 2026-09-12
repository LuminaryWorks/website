"use client";

import { Reveal } from "@/components/site/Reveal";
import { useT } from "@/lib/i18n/context";
import { localePath } from "@/lib/i18n/paths";
import Link from "next/link";
import styles from "./Deployment.module.scss";

export function Deployment() {
  const { locale, m } = useT();
  const s = m.home.deployment;

  return (
    <section className="lw-section lw-section-alt" aria-label={s.title}>
      <Reveal>
        <div className="lw-container">
          <header className={styles.head}>
            <p className={styles.kicker}>
              {s.index} / {s.label}
            </p>
            <h2 className={styles.title}>{s.title}</h2>
          </header>
          <div className={styles.desktop}>
            <table className={styles.table}>
              <thead>
                <tr>
                  <th scope="col">{s.headers.profile}</th>
                  <th scope="col">{s.headers.meaning}</th>
                  <th scope="col">{s.headers.composition}</th>
                </tr>
              </thead>
              <tbody>
                {s.profiles.map((row) => (
                  <tr key={row.name}>
                    <td className={styles.profile}>{row.name}</td>
                    <td>{row.meaning}</td>
                    <td className={styles.composition}>{row.composition}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <ul className={styles.mobile}>
            {s.profiles.map((row) => (
              <li key={row.name} className={styles.card}>
                <p className={styles.profile}>{row.name}</p>
                <p className={styles.meaning}>
                  <span className={styles.fieldLabel}>{s.headers.meaning}</span>
                  {row.meaning}
                </p>
                <p className={styles.composition}>
                  <span className={styles.fieldLabel}>{s.headers.composition}</span>
                  {row.composition}
                </p>
              </li>
            ))}
          </ul>
          <p className={styles.modes}>{s.modes}</p>
          <Link href={localePath(locale, "/deploy/")} className={styles.cta}>
            {s.cta}
          </Link>
        </div>
      </Reveal>
    </section>
  );
}
