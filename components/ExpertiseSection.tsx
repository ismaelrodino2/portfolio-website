import useTranslation from "next-translate/useTranslation";
import Expertise from "./Expertise";
import Section from "./Section";

const Chip = (props: { label: string }) => (
  <div className="py-1 px-2 text-sm border border-blue-700 text-blue-700 rounded">
    {props.label}
  </div>
);

const ExpertiseSection = () => {
  const { t } = useTranslation("common");

  return (
    <Section
      title="Expertise"
      subTitle={t("howConfortable")}
    >
      <Expertise label={`JavaScript (4+ ${t("years")})`} value={100} />
      <Expertise label={`TypeScript (4+ ${t("years")})`} value={90} />
      <Expertise label={`React (4 ${t("years")} + ${t("courses")})`} value={95} />
      <p className="text-gray-500 text-sm mb-4">
        {t("nonExhaustive")}
      </p>
      <div className="flex flex-wrap gap-2">
        <Chip label="SQL" />
        <Chip label="Vue.js" />
        <Chip label="Jest" />
        <Chip label="Firebase" />
        <Chip label="Cognite sdk" />
        <Chip label="Node.js" />
      </div>
    </Section>
  );
};

export default ExpertiseSection;
