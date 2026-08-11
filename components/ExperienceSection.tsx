import useTranslation from "next-translate/useTranslation";
import Experience from "./Experience";
import Section from "./Section";

type Entry = {
  key: string;
  company: string;
  website?: string;
  roleKey: "founderEngineer" | "softwareEngineer" | "contractor";
  start: string;
  end?: string;
};

const entries: Entry[] = [
  {
    key: "gudi",
    company: "Gudi",
    roleKey: "founderEngineer",
    start: "2025-02"
  },
  {
    key: "bucksense",
    company: "Bucksense",
    website: "https://www.bucksense.com/",
    roleKey: "softwareEngineer",
    start: "2024-07",
    end: "2026-07"
  },
  {
    key: "quattrus",
    company: "Quattrus",
    website: "https://www.quattrus.com/",
    roleKey: "softwareEngineer",
    start: "2024-01",
    end: "2024-08"
  },
  {
    key: "alex",
    company: "Alex Rohleder LTDA",
    website: "https://www.linkedin.com/in/alexrohleder/",
    roleKey: "contractor",
    start: "2023-03",
    end: "2024-01"
  },
  {
    key: "speedcast",
    company: "Speedcast",
    website: "https://www.speedcast.com/",
    roleKey: "contractor",
    start: "2022-02",
    end: "2023-04"
  },
  {
    key: "switchApp",
    company: "Switch App",
    roleKey: "contractor",
    start: "2021-10",
    end: "2022-02"
  },
  {
    key: "lucalto",
    company: "Lucalto",
    website: "https://www.linkedin.com/company/lucalto/",
    roleKey: "contractor",
    start: "2021-01",
    end: "2021-09"
  }
];

const ExperienceSection = () => {
  const { t } = useTranslation("common");

  return (
    <Section
      id="experience"
      title={t("experience.title")}
      subTitle={t("experience.subtitle")}
    >
      <div className="flex flex-col gap-9">
        {entries.map((entry) => (
          <Experience
            key={entry.key}
            company={entry.company}
            website={entry.website}
            role={t(`experience.roles.${entry.roleKey}`)}
            start={entry.start}
            end={entry.end}
            location={t(`experience.${entry.key}.location`)}
            summary={t(`experience.${entry.key}.summary`)}
            highlights={
              t(
                `experience.${entry.key}.highlights`,
                {},
                { returnObjects: true }
              ) as string[]
            }
          />
        ))}
      </div>
      <p className="mt-8 text-sm text-faint">{t("experience.notlisted")}</p>
    </Section>
  );
};

export default ExperienceSection;
