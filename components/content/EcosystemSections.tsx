import { Chip } from "@/components/site/Chip";
import { SectionHeading } from "@/components/site/SectionHeading";
import { useT } from "@/lib/i18n/context";
import styles from "./EcosystemSections.module.scss";

const SPINE_COUNT = 3;

export function ValueChainSection() {
  const { m } = useT();
  const s = m.ecosystem.valueChain;

  return (
    <section className={`${styles.band} ${styles.bandFirst}`} aria-labelledby="value-chain">
      <div className="lw-container">
        <SectionHeading index={s.index} label={s.label} title={s.title} lead={s.lead} />
        <ol className={styles.chain}>
          {s.steps.map((step, i) => (
            <li key={step.product} className={styles.chainItem}>
              <span className={styles.stageIndex}>{String(i + 1).padStart(2, "0")}</span>
              <h3 className={styles.chainTitle}>
                {step.product}
                <span className={styles.productLocal}>{step.productLocal}</span>
              </h3>
              <p className={styles.stageMono}>{step.stage}</p>
              <p className={styles.outputLabel}>{step.output}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

export function PlatformSection() {
  const { m } = useT();
  const s = m.ecosystem.platform;
  const spine = s.items.slice(0, SPINE_COUNT);
  const units = s.items.slice(SPINE_COUNT);

  return (
    <section className={`${styles.band} ${styles.bandAlt}`} aria-labelledby="platform">
      <div className="lw-container">
        <SectionHeading index={s.index} label={s.label} title={s.title} lead={s.lead} />
        <div className={styles.planes}>
          <div className={styles.plane}>
            <p className={styles.planeKicker}>{s.spineLabel}</p>
            <div className={styles.modGrid}>
              {spine.map((item) => (
                <article key={item.title} className={styles.mod}>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                  <div className={styles.tagRow}>
                    {item.tags.map((tag) => (
                      <Chip key={tag}>{tag}</Chip>
                    ))}
                  </div>
                </article>
              ))}
            </div>
          </div>
          <div className={styles.plane}>
            <p className={styles.planeKicker}>{s.unitsLabel}</p>
            <div className={styles.modGrid}>
              {units.map((item) => (
                <article key={item.title} className={styles.mod}>
                  <h3>
                    {item.title}
                    {"lab" in item && item.lab ? <span className={styles.labTag}>lab</span> : null}
                  </h3>
                  <p>{item.description}</p>
                  <div className={styles.tagRow}>
                    {item.tags.map((tag) => (
                      <Chip key={tag}>{tag}</Chip>
                    ))}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function IntegrationSection() {
  const { m } = useT();
  const s = m.ecosystem.integration;

  return (
    <section className={styles.band} aria-labelledby="integration">
      <div className="lw-container">
        <SectionHeading index={s.index} label={s.label} title={s.title} lead={s.lead} />
        <div className={styles.contrast}>
          <article className={`${styles.panel} ${styles.allowed}`}>
            <h3>{s.allowedHeading}</h3>
            <ul className={styles.bulletList}>
              {s.allowed.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>
          <article className={`${styles.panel} ${styles.forbidden}`}>
            <h3>{s.forbiddenHeading}</h3>
            <ul className={styles.bulletList}>
              {s.forbidden.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>
        </div>
      </div>
    </section>
  );
}

export function ErrorSemanticsSection() {
  const { m } = useT();
  const s = m.ecosystem.errors;

  return (
    <section className={`${styles.band} ${styles.bandAlt}`} aria-labelledby="errors">
      <div className="lw-container">
        <SectionHeading index={s.index} label={s.label} title={s.title} lead={s.lead} />
        <ul className={styles.errorGrid}>
          {s.items.map((item) => (
            <li key={item.code} className={styles.errorItem}>
              <span className={styles.errorCode}>{item.code}</span>
              <span className={styles.errorLabel}>{item.label}</span>
              <p>{item.description}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export function ProtocolsSection() {
  const { m } = useT();
  const s = m.ecosystem.protocols;

  return (
    <section className={`${styles.band} ${styles.bandCompact}`} aria-labelledby="protocols">
      <div className={`lw-container ${styles.protocolBlock}`}>
        <SectionHeading index={s.index} label={s.label} title={s.title} lead={s.lead} />
        <div className={styles.protocolRail}>
          {s.items.map((item) => (
            <Chip key={item}>{item}</Chip>
          ))}
        </div>
      </div>
    </section>
  );
}

export function AutonomySection() {
  const { m } = useT();
  const s = m.ecosystem.autonomy;

  return (
    <section className={`${styles.band} ${styles.bandAlt}`} aria-labelledby="autonomy">
      <div className="lw-container">
        <SectionHeading index={s.index} label={s.label} title={s.title} />
        <blockquote className={styles.manifesto}>
          <p>{s.lead}</p>
          <ul className={styles.boundaries}>
            {s.boundaries.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </blockquote>
      </div>
    </section>
  );
}
