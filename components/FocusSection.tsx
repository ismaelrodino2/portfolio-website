import useTranslation from "next-translate/useTranslation";
import Icon from "./Icon";
import Section from "./Section";

const cards = [
  { key: "architecture", icon: "layers" },
  { key: "aws", icon: "cloud" },
  { key: "ai", icon: "spark" }
] as const;

const FocusSection = () => {
  const { t } = useTranslation("common");

  return (
    <Section
      id="focus"
      eyebrow={t("focus.subtitle")}
      title={t("focus.title")}
    >
      <div className="grid gap-4 md:grid-cols-3">
        {cards.map(({ key, icon }) => {
          const tags = t(`focus.${key}.tags`, {}, { returnObjects: true }) as string[];

          return (
            <article
              key={key}
              className="flex flex-col rounded-2xl border border-line bg-surface p-6 transition-colors hover:border-line-strong"
            >
              <span className="mb-4 flex h-9 w-9 items-center justify-center rounded-lg bg-accent-wash text-accent">
                <Icon name={icon} className="h-5 w-5" />
              </span>
              <h3 className="text-lg font-semibold tracking-tight">
                {t(`focus.${key}.title`)}
              </h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">
                {t(`focus.${key}.desc`)}
              </p>
              <ul className="mt-5 flex flex-wrap gap-2">
                {tags.map((tag) => (
                  <li
                    key={tag}
                    className="rounded-md border border-line bg-raised px-2 py-1 font-mono text-xs text-faint"
                  >
                    {tag}
                  </li>
                ))}
              </ul>
            </article>
          );
        })}
      </div>
    </Section>
  );
};

export default FocusSection;
