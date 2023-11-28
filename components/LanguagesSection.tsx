import Section from "./Section";

const LanguagesSection = () => (
  <Section
    title="Languages"
    subTitle="Based on CEFR language proficiency levels"
  >
    <div className="flex flex-col gap-1">
      <div className="grid grid-cols-4 gap-8">
        <div>Portuguese</div>
        <div className="text-right italic">Native</div>
        <div>English</div>
        <div className="text-right italic">C2</div>
      </div>
      <div className="grid grid-cols-4 gap-8">
        <div>Spanish</div>
        <div className="text-right italic">A2</div>
        <div>Norwegian</div>
        <div className="text-right italic">A2</div>
      </div>
    </div>
  </Section>
);

export default LanguagesSection;
