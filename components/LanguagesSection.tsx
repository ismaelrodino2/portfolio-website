import useTranslation from "next-translate/useTranslation";
import Section from "./Section";

const LanguagesSection = () => {
  const { t } = useTranslation("common");

  return (
    <Section
      title={t("languages")}
      subTitle={t("basedonCEFR")}
    >
      <div className="flex flex-col gap-1">
        <div className="grid grid-cols-4 gap-8">
          <div>{t("portuguese")}</div>
          <div className="text-right italic">{t("native")}</div>
          <div>{t("english")}</div>
          <div className="text-right italic">C2</div>
        </div>
      </div>
    </Section>
  );
};

export default LanguagesSection;
