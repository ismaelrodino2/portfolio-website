import useTranslation from "next-translate/useTranslation";
import Experience from "./Experience";
import Section from "./Section";

const ExperienceSection = () => {
  const { t } = useTranslation("common");

  return (
    <Section title={t("experience.title")} >
      <div className="flex flex-col gap-6">
        <Experience
          title={t("experience.softwareEngineer")}
          employeer="Bucksense"
          employeerWebsite="https://www.bucksense.com/"
          startDate={2024}
          location={t("workexp.bucksense.location")}
          highlights={[
            t("workexp.bucksense.highlight1"),
            t("workexp.bucksense.highlight2"),
          ]}
        />
        <Experience
          title={t("experience.softwareEngineer")}
          employeer="Quattrus"
          employeerWebsite="https://www.quattrus.com/"
          startDate={2024}
          location={t("workexp.quattrus.location")}
          highlights={[
            t("workexp.quattrus.highlight1"),
            t("workexp.quattrus.highlight2"),
          ]}
        />
        <Experience
          title={t("experience.contractorSoftwareEngineer")}
          employeer="Alex Rohleder LTDA"
          employeerWebsite="https://www.linkedin.com/in/alexrohleder/?originalSubdomain=no"
          startDate={2023}
          location={t("workexp.alex.location")}
          highlights={[
            t("workexp.alex.highlight1"),
            t("workexp.alex.highlight2"),
            t("workexp.alex.highlight3"),
            t("workexp.alex.highlight4"),
          ]}
        />
        <Experience
          title={t("experience.softwareEngineer")}
          employeer="Speedcast"
          employeerWebsite="https://www.speedcast.com/"
          startDate={2022}
          endDate={2023}
          location={t("workexp.speedCast.location")}
          summary={t("workexp.speedCast.desc")}
          highlights={[
            t("workexp.speedCast.highlight1"),
            t("workexp.speedCast.highlight2"),
            t("workexp.speedCast.highlight3"),
          ]}
        />
       <Experience
          title={t("experience.contractorSoftwareEngineer")}
          employeer="Switch App"
          employeerWebsite="https://www.speedcast.com/"
          startDate={2021}
          endDate={2022}
          location={t("workexp.switchApp.location")}
          summary={t("workexp.switchApp.desc")}
          highlights={[
            t("workexp.switchApp.highlight1"),
            t("workexp.switchApp.highlight2"),
            t("workexp.switchApp.highlight3"),
          ]}
        />
               <Experience
          title={t("experience.contractorSoftwareEngineer")}
          employeer="Lucalto"
          employeerWebsite="https://www.linkedin.com/company/lucalto/"
          startDate={2021}
          endDate={2022}
          location={t("workexp.lucalto.location")}
          summary={t("workexp.lucalto.desc")}
          highlights={[
            t("workexp.lucalto.highlight1"),
            t("workexp.lucalto.highlight2"),
 
          ]}
        />
        <p className="text-gray-500 text-sm">{t("workexp.notlisted")}</p>
      </div>
    </Section>
  );
};

export default ExperienceSection;
