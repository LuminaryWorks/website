"use client";

import { BlueprintGrid } from "@/components/site/BlueprintGrid";
import { CopyEmail } from "@/components/site/CopyEmail";
import { ExternalLink } from "@/components/site/ExternalLink";
import { Reveal } from "@/components/site/Reveal";
import { SectionHeading } from "@/components/site/SectionHeading";
import { useT } from "@/lib/i18n/context";
import { GITHUB_ORG } from "@/lib/urls";
import styles from "./CallToAction.module.scss";

export function CallToAction() {
  const { m } = useT();
  const s = m.home.cta;

  return (
    <section
      className={`lw-section lw-section-lg lw-section-alt ${styles.cta}`}
      aria-label={s.title}
    >
      <BlueprintGrid />
      <Reveal>
        <div className={`lw-container ${styles.inner}`}>
          <SectionHeading index={s.index} label={s.label} title={s.title} lead={s.lead} />
          <CopyEmail />
          <div className={styles.actions}>
            <ExternalLink href={GITHUB_ORG} className={styles.btnSecondary}>
              {s.github}
            </ExternalLink>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
