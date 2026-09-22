import { Chip } from "@/components/site/Chip";
import { SectionHeading } from "@/components/site/SectionHeading";
import { useT } from "@/lib/i18n/context";
import { CONTACT_EMAIL, DOCS_URL } from "@/lib/urls";
import styles from "./DeploySections.module.scss";

const DOCS_HREF = `${DOCS_URL}/develop/getting-started`;

export function DeploymentProfilesSection() {
  const { m } = useT();
  const s = m.deploy.profiles;

  return (
    <section className={`${styles.band} ${styles.bandFirst}`} aria-labelledby="profiles">
      <div className="lw-container">
        <SectionHeading
          id="profiles"
          index={s.index}
          label={s.label}
          title={s.title}
          lead={s.lead}
        />
        <div className={styles.ledgerHead}>
          <span />
          <span>{s.headers.profile}</span>
          <span>{s.headers.minimum}</span>
          <span>{s.headers.modes}</span>
        </div>
        <ul className={styles.stack}>
          {s.rows.map((row, index) => (
            <li key={row.profile} className={styles.spec}>
              <span className={styles.specIndex}>{String(index + 1).padStart(2, "0")}</span>
              <div className={styles.specMain}>
                <h3>{row.profile}</h3>
                <p>{row.meaning}</p>
              </div>
              <div className={styles.specField}>
                <span className={styles.fieldLabel}>{s.headers.minimum}</span>
                <p>{row.minimum}</p>
              </div>
              <div className={styles.specField}>
                <span className={styles.fieldLabel}>{s.headers.modes}</span>
                <p>{row.modes}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export function CapabilityMatrixSection() {
  const { m } = useT();
  const s = m.deploy.capabilities;

  return (
    <section className={`${styles.band} ${styles.bandAlt}`} aria-labelledby="capabilities">
      <div className="lw-container">
        <SectionHeading
          id="capabilities"
          index={s.index}
          label={s.label}
          title={s.title}
          lead={s.lead}
        />
        <ul className={styles.tileGrid}>
          {s.rows.map((row) => (
            <li key={row.capability} className={styles.tile}>
              <h3 className={styles.tileTitle}>{row.capability}</h3>
              <p className={styles.tileBody}>{row.modes}</p>
            </li>
          ))}
        </ul>
        <p className={styles.note}>{s.modesLine}</p>
      </div>
    </section>
  );
}

export function InstallKitSection() {
  const { m } = useT();
  const s = m.deploy.installKit;

  return (
    <section className={styles.band} aria-labelledby="install">
      <div className="lw-container">
        <SectionHeading
          id="install"
          index={s.index}
          label={s.label}
          title={s.title}
          lead={s.lead}
        />
        <a className={styles.action} href={DOCS_HREF} target="_blank" rel="noopener noreferrer">
          <span className={styles.actionBody}>
            <span className={styles.actionTitle}>{s.docsLink}</span>
            <span className={styles.actionPath}>{DOCS_HREF.replace(/^https:\/\//, "")}</span>
          </span>
          <span className={styles.actionGo} aria-hidden="true">
            ↗
          </span>
        </a>
      </div>
    </section>
  );
}

export function AirGappedSection() {
  const { m } = useT();
  const s = m.deploy.airGapped;

  return (
    <section className={`${styles.band} ${styles.bandAlt}`} aria-labelledby="air-gapped">
      <div className="lw-container">
        <SectionHeading
          id="air-gapped"
          index={s.index}
          label={s.label}
          title={s.title}
          lead={s.lead}
        />
        <ul className={styles.panel}>
          {s.points.map((point) => (
            <li key={point}>{point}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export function MaturitySection() {
  const { m } = useT();
  const s = m.deploy.maturity;

  return (
    <section className={styles.band} aria-labelledby="maturity">
      <div className="lw-container">
        <SectionHeading
          id="maturity"
          index={s.index}
          label={s.label}
          title={s.title}
          lead={s.lead}
        />
        <ul className={styles.stageGrid}>
          {s.rows.map((row) => (
            <li key={row.label} className={styles.tile}>
              <h3 className={styles.tileTitle}>{row.label}</h3>
              <p className={styles.tileBody}>{row.meaning}</p>
              <div className={styles.tileFoot}>
                <Chip>{row.wording}</Chip>
              </div>
            </li>
          ))}
        </ul>
        <p className={`${styles.note} ${styles.noteAmber}`}>{s.callout}</p>
      </div>
    </section>
  );
}

export function DeployCtaSection() {
  const { m } = useT();
  const s = m.deploy.cta;

  return (
    <section className={`${styles.band} ${styles.bandAlt}`} aria-labelledby="deploy-cta">
      <div className="lw-container">
        <div className={styles.cta}>
          <h2 id="deploy-cta">{s.title}</h2>
          <p>{s.lead}</p>
          <a className={styles.ctaButton} href={`mailto:${CONTACT_EMAIL}`}>
            {s.contact}
          </a>
        </div>
      </div>
    </section>
  );
}
