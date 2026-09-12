import { ExternalLink } from "@/components/site/ExternalLink";
import { SectionHeading } from "@/components/site/SectionHeading";
import { useT } from "@/lib/i18n/context";
import { CONTACT_EMAIL, GITHUB_ORG } from "@/lib/urls";
import styles from "./AboutSections.module.scss";
import shared from "./shared.module.scss";

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
    <section className={alt ? `${shared.section} ${shared.sectionAlt}` : shared.section}>
      <SectionHeading index={index} label={label} title={title} lead={lead} />
      <ul className={shared.bulletList}>
        {points.map((point) => (
          <li key={point}>{point}</li>
        ))}
      </ul>
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
    <section className={`${shared.section} ${shared.sectionAlt}`} aria-labelledby="contact">
      <SectionHeading index={s.index} label={s.label} title={s.title} lead={s.lead} />
      <dl className={styles.contactDl}>
        <div>
          <dt>{s.emailLabel}</dt>
          <dd>
            <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>
          </dd>
        </div>
        <div>
          <dt>{s.githubLabel}</dt>
          <dd>
            <ExternalLink href={GITHUB_ORG}>{GITHUB_ORG.replace("https://", "")}</ExternalLink>
          </dd>
        </div>
      </dl>
    </section>
  );
}
