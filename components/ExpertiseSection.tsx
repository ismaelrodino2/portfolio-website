import Expertise from "./Expertise";
import Section from "./Section";

const Chip = (props: { label: string }) => (
  <div className="py-1 px-2 text-sm border border-blue-700 text-blue-700 rounded">
    {props.label}
  </div>
);

const ExpertiseSection = () => {
  return (
    <Section
      title="Expertise"
      subTitle="How confortable I'm with each technology"
    >
      <Expertise label="JavaScript (5+ years)" value={100} />
      <Expertise label="TypeScript (3+ years)" value={90} />
      <Expertise label="React (4 years + courses)" value={95} />
      <p className="text-gray-500 text-sm mb-4">
        Non-exhaustive list of languages, technologies and tools
      </p>
      <div className="flex flex-wrap gap-2">
        <Chip label="Redux" />
        <Chip label="GraphQL" />
        <Chip label="Jest" />
        <Chip label="Kubernetes" />
        <Chip label="AWS" />
        <Chip label="Micro-Frontends" />
        <Chip label="Node.js" />
      </div>
    </Section>
  );
};

export default ExpertiseSection;
