import useTranslation from "next-translate/useTranslation";
import Section from "./Section";

type Principle = { title: string; desc: string };

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
          </li>
        ))}
      </ol>
    </Section>
  );
};

export default PrinciplesSection;
