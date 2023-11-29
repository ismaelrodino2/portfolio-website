import useTranslation from "next-translate/useTranslation";
import Section from "./Section";

const SummarySection = () => {
  const { t, lang } = useTranslation("common");

  return (
    <Section title="Summary">
      <div className="flex flex-col gap-2">
        <p className="flex items-center gap-1">
          {t("desc1")}
        </p>
        <p>
        {t("desc2")}
        </p>
        <p>
        {t("desc3")}
        </p>
      </div>
    </Section>
  );
};

export default SummarySection;
