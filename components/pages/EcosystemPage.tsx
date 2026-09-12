"use client";

import {
  AutonomySection,
  ErrorSemanticsSection,
  IntegrationSection,
  PlatformSection,
  ProtocolsSection,
  ValueChainSection,
} from "@/components/content/EcosystemSections";
import { PageHeader } from "@/components/content/PageHeader";
import { Reveal } from "@/components/site/Reveal";
import { useT } from "@/lib/i18n/context";
import styles from "./page.module.scss";

export function EcosystemPage() {
  const { m } = useT();
  const p = m.ecosystem.page;

  return (
    <main id="main" className={styles.main}>
      <Reveal>
        <PageHeader index={p.index} label={p.label} title={p.title} lead={p.lead} />
      </Reveal>
      <Reveal>
        <ValueChainSection />
      </Reveal>
      <Reveal>
        <PlatformSection />
      </Reveal>
      <Reveal>
        <IntegrationSection />
      </Reveal>
      <Reveal>
        <ErrorSemanticsSection />
      </Reveal>
      <Reveal>
        <ProtocolsSection />
      </Reveal>
      <Reveal>
        <AutonomySection />
      </Reveal>
    </main>
  );
}
