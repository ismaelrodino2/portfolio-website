import Section from "./Section";

const SummarySection = () => {
  return (
    <Section title="Summary">
      <div className="flex flex-col gap-2">
        <p className="flex items-center gap-1">
          Hey! I'm a Brazilian who is passionate about building high-impact,
          well-performing user experiences.
        </p>
        <p>
          I believe that work is a big portion of my day, so I try to make the
          best out of it for me and my colleagues.
        </p>
        <p>
          To achieve that I focus on empathy during conversations and try to
          deliver something I'm happy with.
        </p>
      </div>
    </Section>
  );
};

export default SummarySection;
