"use client";

import { CopyEmail } from "@/components/site/CopyEmail";
import { ExternalLink } from "@/components/site/ExternalLink";
import { SectionHeading } from "@/components/site/SectionHeading";
import { useT } from "@/lib/i18n/context";
import { GITHUB_ORG } from "@/lib/urls";
import styles from "./AboutSections.module.scss";

function BulletSection({
  index,
  label,
  title,
  lead,
  points,
  alt,
}: {
  index: string;
  label: string;
  title: string;
  lead: string;
  points: readonly string[];
  alt?: boolean;
}) {
  return (
    <section className={alt ? `${styles.band} ${styles.bandAlt}` : styles.band}>
      <div className="lw-container">
        <SectionHeading index={index} label={label} title={title} lead={lead} />
        <ul className={styles.panel}>
          {points.map((point) => (
            <li key={point}>{point}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export function NamingSection() {
  const { m } = useT();
  const s = m.about.naming;
  return (
    <BulletSection
      index={s.index}
      label={s.label}
      title={s.title}
      lead={s.lead}
      points={s.points}
    />
  );
}

export function HouseOfBrandsSection() {
  const { m } = useT();
  const s = m.about.houseOfBrands;
  return (
    <BulletSection
      index={s.index}
      label={s.label}
      title={s.title}
      lead={s.lead}
      points={s.points}
      alt
    />
  );
}

export function LicensingSection() {
  const { m } = useT();
  const s = m.about.licensing;
  return (
    <BulletSection
      index={s.index}
      label={s.label}
      title={s.title}
      lead={s.lead}
      points={s.points}
    />
  );
}

export function ContactSection() {
  const { m } = useT();
  const s = m.about.contact;

  return (
    <section className={`${styles.band} ${styles.bandAlt}`} aria-labelledby="contact">
      <div className="lw-container">
        <SectionHeading index={s.index} label={s.label} title={s.title} lead={s.lead} />
        <dl className={styles.contactPanel}>
          <div className={styles.contactItem}>
            <dt>{s.emailLabel}</dt>
            <dd>
              <CopyEmail compact />
            </dd>
          </div>
          <div className={styles.contactItem}>
            <dt>{s.githubLabel}</dt>
            <dd>
              <ExternalLink href={GITHUB_ORG}>{GITHUB_ORG.replace("https://", "")}</ExternalLink>
            </dd>
          </div>
        </dl>
      </div>
    </section>
  );
}
