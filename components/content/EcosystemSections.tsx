import { Chip } from "@/components/site/Chip";
import { SectionHeading } from "@/components/site/SectionHeading";
import { useT } from "@/lib/i18n/context";
import styles from "./EcosystemSections.module.scss";
import shared from "./shared.module.scss";

export function ValueChainSection() {
  const { m } = useT();
  const s = m.ecosystem.valueChain;

  return (
    <section className={shared.section} aria-labelledby="value-chain">
      <SectionHeading index={s.index} label={s.label} title={s.title} lead={s.lead} />
      <ol className={styles.chain}>
        {s.steps.map((step, i) => (
          <li key={step.product} className={styles.chainItem}>
            <div className={styles.chainStage}>
              <span className={styles.stageMono}>{step.stage}</span>
              {i < s.steps.length - 1 ? (
                <span className={styles.connector} aria-hidden="true" />
              ) : null}
            </div>
            <div className={shared.surfaceCard}>
              <h3>
                {step.product}
                <span className={styles.productLocal}> · {step.productLocal}</span>
              </h3>
              <p className={styles.outputLabel}>→ {step.output}</p>
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
}

export function PlatformSection() {
  const { m } = useT();
  const s = m.ecosystem.platform;

  return (
    <section className={`${shared.section} ${shared.sectionAlt}`} aria-labelledby="platform">
      <SectionHeading index={s.index} label={s.label} title={s.title} lead={s.lead} />
      <div className={shared.cardGrid3}>
        {s.items.map((item) => (
          <article key={item.title} className={shared.surfaceCard}>
            <h3>
              {item.title}
              {"lab" in item && item.lab ? <span className={styles.labTag}> · lab</span> : null}
            </h3>
            <p>{item.description}</p>
            <div className={shared.tagRow}>
              {item.tags.map((tag) => (
                <Chip key={tag}>{tag}</Chip>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export function IntegrationSection() {
  const { m } = useT();
  const s = m.ecosystem.integration;

  return (
    <section className={shared.section} aria-labelledby="integration">
      <SectionHeading index={s.index} label={s.label} title={s.title} lead={s.lead} />
      <div className={styles.twoCol}>
        <article className={shared.surfaceCard}>
          <h3>{s.allowedHeading}</h3>
          <ul className={shared.bulletList}>
            {s.allowed.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </article>
        <article className={shared.surfaceCard}>
          <h3>{s.forbiddenHeading}</h3>
          <ul className={shared.bulletList}>
            {s.forbidden.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </article>
      </div>
    </section>
  );
}

export function ErrorSemanticsSection() {
  const { m } = useT();
  const s = m.ecosystem.errors;

  return (
    <section className={`${shared.section} ${shared.sectionAlt}`} aria-labelledby="errors">
      <SectionHeading index={s.index} label={s.label} title={s.title} lead={s.lead} />
      <ul className={styles.errorList}>
        {s.items.map((item) => (
          <li key={item.code} className={styles.errorItem}>
            <span className={styles.errorCode}>{item.code}</span>
            <span className={styles.errorLabel}>{item.label}</span>
            <p>{item.description}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}

export function ProtocolsSection() {
  const { m } = useT();
  const s = m.ecosystem.protocols;

  return (
    <section className={shared.section} aria-labelledby="protocols">
      <SectionHeading index={s.index} label={s.label} title={s.title} lead={s.lead} />
      <div className={shared.tagRow}>
        {s.items.map((item) => (
          <Chip key={item}>{item}</Chip>
        ))}
      </div>
    </section>
  );
}

export function AutonomySection() {
  const { m } = useT();
  const s = m.ecosystem.autonomy;

  return (
    <section className={`${shared.section} ${shared.sectionAlt}`} aria-labelledby="autonomy">
      <SectionHeading index={s.index} label={s.label} title={s.title} lead={s.lead} />
      <p className={shared.callout}>{s.lead}</p>
    </section>
  );
}
