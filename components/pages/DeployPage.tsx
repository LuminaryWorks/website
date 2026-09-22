"use client";

import {
  AirGappedSection,
  CapabilityMatrixSection,
  DeployCtaSection,
  DeploymentProfilesSection,
  InstallKitSection,
  MaturitySection,
} from "@/components/content/DeploySections";
import { PageHeader } from "@/components/content/PageHeader";
import { Reveal } from "@/components/site/Reveal";
import { useT } from "@/lib/i18n/context";
import styles from "./page.module.scss";

export function DeployPage() {
  const { m } = useT();
  const p = m.deploy.page;

  return (
    <main id="main" className={styles.deployMain}>
      <div className={styles.deployIntro}>
        <div className="lw-container">
          <Reveal>
            <PageHeader index={p.index} label={p.label} title={p.title} lead={p.lead} />
          </Reveal>
        </div>
      </div>
      <Reveal>
        <DeploymentProfilesSection />
      </Reveal>
      <Reveal>
        <CapabilityMatrixSection />
      </Reveal>
      <Reveal>
        <InstallKitSection />
      </Reveal>
      <Reveal>
        <AirGappedSection />
      </Reveal>
      <Reveal>
        <MaturitySection />
      </Reveal>
      <Reveal>
        <DeployCtaSection />
      </Reveal>
    </main>
  );
}
