import { ExternalLink } from "@/components/site/ExternalLink";
import { SectionHeading } from "@/components/site/SectionHeading";
import { useT } from "@/lib/i18n/context";
import { CONTACT_EMAIL, DOCS_URL } from "@/lib/urls";
import styles from "./DeploySections.module.scss";
import shared from "./shared.module.scss";

export function DeploymentProfilesSection() {
  const { m } = useT();
  const s = m.deploy.profiles;

  return (
    <section className={shared.section} aria-labelledby="profiles">
      <SectionHeading index={s.index} label={s.label} title={s.title} lead={s.lead} />
      <div className={styles.desktopTable}>
        <div className={shared.tableWrap}>
          <table className={shared.table}>
            <thead>
              <tr>
                <th scope="col">{s.headers.profile}</th>
                <th scope="col">{s.headers.meaning}</th>
                <th scope="col">{s.headers.minimum}</th>
                <th scope="col">{s.headers.modes}</th>
              </tr>
            </thead>
            <tbody>
              {s.rows.map((row) => (
                <tr key={row.profile}>
                  <td className={shared.mono}>{row.profile}</td>
                  <td>{row.meaning}</td>
                  <td>{row.minimum}</td>
                  <td className={shared.mono}>{row.modes}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <ul className={styles.mobileCards}>
        {s.rows.map((row) => (
          <li key={row.profile} className={shared.surfaceCard}>
            <h3 className={shared.mono}>{row.profile}</h3>
            <dl className={styles.dl}>
              <div>
                <dt>{s.headers.meaning}</dt>
                <dd>{row.meaning}</dd>
              </div>
              <div>
                <dt>{s.headers.minimum}</dt>
                <dd>{row.minimum}</dd>
              </div>
              <div>
                <dt>{s.headers.modes}</dt>
                <dd className={shared.mono}>{row.modes}</dd>
              </div>
            </dl>
          </li>
        ))}
      </ul>
    </section>
  );
}

export function CapabilityMatrixSection() {
  const { m } = useT();
  const s = m.deploy.capabilities;

  return (
    <section className={`${shared.section} ${shared.sectionAlt}`} aria-labelledby="capabilities">
      <SectionHeading index={s.index} label={s.label} title={s.title} lead={s.lead} />
      <p className={shared.callout}>{s.modesLine}</p>
      <div className={shared.tableWrap}>
        <table className={shared.table}>
          <thead>
            <tr>
              <th scope="col">{s.headers.capability}</th>
              <th scope="col">{s.headers.modes}</th>
            </tr>
          </thead>
          <tbody>
            {s.rows.map((row) => (
              <tr key={row.capability}>
                <td className={shared.mono}>{row.capability}</td>
                <td>{row.modes}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}

export function InstallKitSection() {
  const { m } = useT();
  const s = m.deploy.installKit;

  return (
    <section className={shared.section} aria-labelledby="install">
      <SectionHeading index={s.index} label={s.label} title={s.title} lead={s.lead} />
      <ExternalLink href={`${DOCS_URL}/develop/getting-started`}>{s.docsLink}</ExternalLink>
    </section>
  );
}

export function AirGappedSection() {
  const { m } = useT();
  const s = m.deploy.airGapped;

  return (
    <section className={`${shared.section} ${shared.sectionAlt}`} aria-labelledby="air-gapped">
      <SectionHeading index={s.index} label={s.label} title={s.title} lead={s.lead} />
      <ul className={shared.bulletList}>
        {s.points.map((point) => (
          <li key={point}>{point}</li>
        ))}
      </ul>
    </section>
  );
}

export function MaturitySection() {
  const { m } = useT();
  const s = m.deploy.maturity;

  return (
    <section className={shared.section} aria-labelledby="maturity">
      <SectionHeading index={s.index} label={s.label} title={s.title} lead={s.lead} />
      <div className={shared.tableWrap}>
        <table className={shared.table}>
          <thead>
            <tr>
              <th scope="col">{s.headers.label}</th>
              <th scope="col">{s.headers.meaning}</th>
              <th scope="col">{s.headers.wording}</th>
            </tr>
          </thead>
          <tbody>
            {s.rows.map((row) => (
              <tr key={row.label}>
                <td className={shared.mono}>{row.label}</td>
                <td>{row.meaning}</td>
                <td>{row.wording}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className={shared.calloutAmber}>{s.callout}</p>
    </section>
  );
}

export function DeployCtaSection() {
  const { m } = useT();
  const s = m.deploy.cta;

  return (
    <section className={shared.ctaBlock} aria-labelledby="deploy-cta">
      <h2 id="deploy-cta">{s.title}</h2>
      <p>{s.lead}</p>
      <a className={styles.ctaButton} href={`mailto:${CONTACT_EMAIL}`}>
        {s.contact}
      </a>
    </section>
  );
}
