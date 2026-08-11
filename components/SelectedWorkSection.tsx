import useTranslation from "next-translate/useTranslation";
import Icon from "./Icon";
import Section from "./Section";

type Highlight = { lead: string; text: string };

type ProjectLinks = {
  live?: { href: string; label: string };
  source?: { href: string; label: string };
};

const links: Record<string, ProjectLinks> = {
  wishapply: {
    live: { href: "https://www.wishapply.com/", label: "wishapply.com" }
  },
  gudi: {}
};

const WorkCard = ({ id }: { id: "wishapply" | "gudi" }) => {
  const { t } = useTranslation("common");
  const base = `work.${id}`;
  const highlights = t(`${base}.highlights`, {}, { returnObjects: true }) as Highlight[];
  const stack = t(`${base}.stack`, {}, { returnObjects: true }) as string[];
  const { live, source } = links[id];

  return (
    <article className="overflow-hidden rounded-2xl border border-line bg-surface">
      <div className="border-b border-line p-6 sm:p-8">
        <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
          <h3 className="text-xl font-semibold tracking-tight sm:text-2xl">
            {t(`${base}.name`)}
          </h3>
          <span className="font-mono text-xs text-faint">{t(`${base}.period`)}</span>
        </div>
        <p className="mt-1 text-sm text-accent">{t(`${base}.tagline`)}</p>
        <p className="mt-4 max-w-2xl leading-relaxed text-muted">
          {t(`${base}.summary`)}
        </p>

        <dl className="mt-5 text-sm">
          <dt className="font-mono text-xs uppercase tracking-widest2 text-faint">
            {t("work.roleLabel")}
          </dt>
          <dd className="mt-1 text-muted">{t(`${base}.role`)}</dd>
        </dl>

        {(live || source) && (
          <div className="mt-5 flex flex-wrap gap-3 print:hidden">
            {live && (
              <a
                className="flex items-center gap-2 rounded-lg border border-line bg-raised px-3 py-2 text-sm text-muted transition-colors hover:border-line-strong hover:text-ink"
                href={live.href}
                target="_blank"
                rel="noopener"
              >
                <Icon name="link" />
                {live.label}
              </a>
            )}
            {source && (
              <a
                className="flex items-center gap-2 rounded-lg border border-line bg-raised px-3 py-2 text-sm text-muted transition-colors hover:border-line-strong hover:text-ink"
                href={source.href}
                target="_blank"
                rel="noopener"
              >
                <Icon name="code" />
                {source.label}
              </a>
            )}
          </div>
        )}
      </div>

      <div className="p-6 sm:p-8">
        <ul className="flex flex-col gap-5">
          {highlights.map((highlight) => (
            <li key={highlight.lead} className="flex gap-3">
              <Icon name="arrow" className="mt-1 h-4 w-4 flex-shrink-0 text-accent" />
              <p className="text-sm leading-relaxed text-muted">
                <strong className="font-semibold text-ink">{highlight.lead}</strong>{" "}
                {highlight.text}
              </p>
            </li>
          ))}
        </ul>

        <div className="mt-8 border-t border-line pt-5">
          <p className="mb-3 font-mono text-xs uppercase tracking-widest2 text-faint">
            {t("work.stackLabel")}
          </p>
          <ul className="flex flex-wrap gap-2">
            {stack.map((item) => (
              <li
                key={item}
                className="rounded-md border border-line bg-raised px-2 py-1 font-mono text-xs text-muted"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </article>
  );
};

const SelectedWorkSection = () => {
  const { t } = useTranslation("common");

  return (
    <Section id="work" title={t("work.title")} subTitle={t("work.subtitle")}>
      <div className="grid gap-6 xl:grid-cols-2">
        <WorkCard id="wishapply" />
        <WorkCard id="gudi" />
      </div>
    </Section>
  );
};

export default SelectedWorkSection;
