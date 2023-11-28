import EducationSection from "../components/EducationSection";
import ExperienceSection from "../components/ExperienceSection";
import ExpertiseSection from "../components/ExpertiseSection";
import LanguagesSection from "../components/LanguagesSection";
import ProjectsSection from "../components/ProjectsSection";
import SummarySection from "../components/SummarySection";
import WhatSetsMeApartSection from "../components/WhatSetsMeApartSection";

const Index = () => (
  <div className="flex flex-col gap-12">
    <SummarySection />
    <div className="grid gap-6 lg:grid-cols-3 xl:grid-cols-4 print:grid-cols-1 print:gap-12">
      <div className="flex flex-col gap-12 lg:col-span-2 xl:col-span-3">
        <ExperienceSection />
        <WhatSetsMeApartSection />
      </div>
      <div className="flex flex-col gap-12 print:flex-row">
        <div className="print:flex-1">
          <ExpertiseSection />
        </div>
        <div className="print:flex-1 flex flex-col gap-12">
          <EducationSection />
          <LanguagesSection />
        </div>
      </div>
    </div>
    <div className="h-px border border-dashed print:hidden" />
    <div className="hidden print:block" />
    <div className="hidden print:block" />
    <div className="hidden print:block" />
    <div className="hidden print:block" />
    <div className="hidden print:block" />
    <div className="hidden print:block" />
    <div className="hidden print:block" />
    <div className="hidden print:block" />
    <ProjectsSection />
  </div>
);

export default Index;
