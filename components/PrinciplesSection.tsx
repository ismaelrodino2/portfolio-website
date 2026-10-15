import useTranslation from "next-translate/useTranslation";
import Icon from "./Icon";
import Section from "./Section";
import { PERSON } from "../lib/site";

type Principle = { title: string; desc: string };

// The post that argues each principle in full, in the same order as principles.items.
const posts = [
  "cheap-model-plans-expensive-model-writes",
  "why-the-loop-is-not-an-agent",
  "permissions-belong-in-the-database",
  "ai-doesnt-break-your-design-system"
];

const PrinciplesSection = () => {
  const { t } = useTranslation("common");
  const items = t("principles.items", {}, { returnObjects: true }) as Principle[];

  return (
    <Section
      id="about"
      title={t("principles.title")}
      subTitle={t("principles.subtitle")}
    >
      <ol className="grid gap-x-10 gap-y-8 sm:grid-cols-2">
        {items.map((item, index) => (
          <li key={item.title}>
            <div className="flex items-baseline gap-3">
              <span className="font-mono text-sm text-faint">
                {String(index + 1).padStart(2, "0")}
              </span>
              <h3 className="text-base font-semibold tracking-tight">{item.title}</h3>
            </div>
            <p className="mt-2 pl-9 text-sm leading-relaxed text-muted">{item.desc}</p>
            {posts[index] && (
              <a
                className="mt-2 ml-9 inline-flex items-center gap-1.5 text-xs text-faint transition-colors hover:text-accent print:hidden"
                href={`${PERSON.blog}/blog/${posts[index]}`}
                // Four identical "Read the write-up" links need distinct names for screen readers.
                aria-label={`${t("principles.readPost")}: ${item.title}`}
                target="_blank"
                rel="noopener"
              >
                {t("principles.readPost")}
                <Icon name="arrow" className="h-3.5 w-3.5" />
              </a>
            )}
          </li>
        ))}
      </ol>

      <a
        className="mt-8 inline-flex items-center gap-1.5 text-sm text-muted transition-colors hover:text-accent print:hidden"
        href={PERSON.blog}
        target="_blank"
        rel="noopener"
      >
        {t("principles.blog")}
        <Icon name="external" className="h-4 w-4" />
      </a>
    </Section>
  );
};

export default PrinciplesSection;
