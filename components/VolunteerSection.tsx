import Section from "./Section";

const VolunteerSection = () => {
  return (
    <Section title="Volunteer">
      <div className="flex flex-col gap-4">
        <a
          href="/volunteer/case-study-for-university-students"
          className="border-2 border-transparent hover:border-blue-700 rounded p-2 -m-2 transition-colors"
        >
          <h1 className="font-lg mb-2 font-semibold">
            Case study for university students
          </h1>
          <p className="font-sm">
            Participated in presentations for more than 500 concurrent students
            where I was interviewed and used as a case study.
          </p>
          <p className="font-sm text-blue-700 print:hidden">See more</p>
        </a>
        <a
          href="/volunteer/coderace"
          className="border-2 border-transparent hover:border-blue-700 rounded p-2 -m-2 transition-colors"
        >
          <h1 className="font-lg mb-2 font-semibold">Judge in hackaton</h1>
          <p className="font-sm">
            CODE RACE is the biggest hackaton in the shouthest state in Brazil.
            In one of their editions I had the opportunity to be a judge.
          </p>
          <p className="font-sm text-blue-700 print:hidden">See more</p>
        </a>
        <a
          href="/volunteer/software-development-teacher"
          className="border-2 border-transparent hover:border-blue-700 rounded p-2 -m-2 transition-colors"
        >
          <h1 className="font-lg mb-2 font-semibold">
            Software development teacher
          </h1>
          <p className="font-sm">
            Teached how to code web apps to young students in small cities as
            part of a social program to give them more opportunities in life.
          </p>
          <p className="font-sm text-blue-700 print:hidden">See more</p>
        </a>
      </div>
    </Section>
  );
};

export default VolunteerSection;
