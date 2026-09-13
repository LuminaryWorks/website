"use client";

import {
  ContactSection,
  HouseOfBrandsSection,
  LicensingSection,
  NamingSection,
} from "@/components/content/AboutSections";
import { PageHeader } from "@/components/content/PageHeader";
import { Reveal } from "@/components/site/Reveal";
import { useT } from "@/lib/i18n/context";
import styles from "./page.module.scss";

export function AboutPage() {
  const { m } = useT();
  const p = m.about.page;

  return (
    <main id="main" className={styles.aboutMain}>
      <Reveal>
        <div className={styles.aboutIntro}>
          <div className="lw-container">
            <PageHeader index={p.index} label={p.label} title={p.title} lead={p.lead} />
          </div>
        </div>
      </Reveal>
      <Reveal>
        <NamingSection />
      </Reveal>
      <Reveal>
        <HouseOfBrandsSection />
      </Reveal>
      <Reveal>
        <LicensingSection />
      </Reveal>
      <Reveal>
        <ContactSection />
      </Reveal>
    </main>
  );
}
