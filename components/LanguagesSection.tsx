import useTranslation from "next-translate/useTranslation";
import Section from "./Section";

const LanguagesSection = () => {
  const { t } = useTranslation("common");

  const languages = [
    { name: t("languages.portuguese"), level: t("languages.native") },
    { name: t("languages.english"), level: t("languages.c2") }
  ];

  return (
    <Section compact title={t("languages.title")} subTitle={t("languages.subtitle")}>
      <ul className="flex flex-col">
        {languages.map((language) => (
          <li
            key={language.name}
            className="flex items-baseline justify-between gap-4 border-t border-line py-4"
          >
            <span className="font-medium">{language.name}</span>
            <span className="font-mono text-sm text-muted">{language.level}</span>
          </li>
        ))}
      </ul>
    </Section>
  );
};

export default LanguagesSection;
