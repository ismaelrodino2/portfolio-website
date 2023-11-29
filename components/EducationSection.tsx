import useTranslation from "next-translate/useTranslation";
import Section from "./Section";

const ExternalLink = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-4 w-4 ml-2 inline print:hidden"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1}
      d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
    />
  </svg>
);

const EducationSection = () => {
  const { t, lang } = useTranslation("common");

  return (
    <Section title={t("education")}>
      <ul className="list-disc">
        <li className="mb-4 lg:mb-2">
          <a
            className="flex items-center"
            href={
              "https://en.wikipedia.org/wiki/Bachelor_of_Software_Engineering"
            }
            target="_blank"
            rel="noopener"
          >
            {t("softwareEngineering")}
            <ExternalLink />
          </a>
        </li>
        <li>
          <a
            className="flex items-center"
            href="https://en.wikipedia.org/wiki/Software_engineering"
            target="_blank"
            rel="noopener"
          >
            {t("systemsDevelopmentAndAnalysis")} <ExternalLink />
          </a>
        </li>
      </ul>
    </Section>
  );
};

export default EducationSection;
