import useTranslation from "next-translate/useTranslation";
import EmployerProject, {
  Props as EmployerProjectProps,
} from "./EmployerProject";
import OpenSourceProject, {
  Props as OpenSourceProjectProps,
} from "./OpenSourceProject";
import Section from "./Section";

type Projects =
  | { type: "employer"; data: EmployerProjectProps }
  | { type: "opensource"; data: OpenSourceProjectProps };

const ProjectsSection = () => {
  const { t } = useTranslation("common");

  const projects: Projects[] = [
    {
      type: "opensource",
      data: {
        title: t("projects.certificates.title"),
        sourceLink: "github.com/ismaelrodino2/certificates-sender",

        year: 2022,

        highlights: [
          t("projects.certificates.desc1"),
          t("projects.certificates.desc2"),
          t("projects.certificates.desc3"),
        ],
      },
    },
    {
      type: "opensource",
      data: {
        title: t("projects.blog.title"),
        sourceLink: "github.com/ismaelrodino2/batdev",
        deployLink: "batdev.vercel.app/",
        year: 2022,

        highlights: [t("projects.blog.desc1"), t("projects.blog.desc2")],
      },
    },
    {
      type: "opensource",
      data: {
        title: t("projects.ecommerce.title"),
        deployLink: "e-commerce-black-seven.vercel.app/",
        year: 2022,

        highlights: [
          t("projects.ecommerce.desc1"),
          t("projects.ecommerce.desc2"),
          t("projects.ecommerce.desc3"),
        ],
      },
    },
    {
      type: "opensource",
      data: {
        title: t("projects.mentoring.title"),
        deployLink: "twenty-five-two.vercel.app/",
        year: 2023,
        highlights: [
          t("projects.mentoring.desc1"),
          t("projects.mentoring.desc2"),
          t("projects.mentoring.desc3"),
          t("projects.mentoring.desc3"),
          t("projects.mentoring.desc4"),
        ],
      },
    },
    {
      type: "opensource",
      data: {
        title: t("projects.autofill.title"),
        sourceLink: "github.com/ismaelrodino2/Job-autofill",
        year: 2023,
        highlights: [
          t("projects.autofill.desc1"),
          t("projects.autofill.desc2"),
        ],
      },
    },
  ];

  return (
    <Section title={t("projects.title")}>
      <div className="grid xl:grid-cols-2 gap-6 print:gap-4">
        {projects.map((project) =>
          project.type === "employer" ? (
            <EmployerProject key={project.data.title} {...project.data} />
          ) : (
            <OpenSourceProject key={project.data.title} {...project.data} />
          )
        )}
      </div>
    </Section>
  );
};

export default ProjectsSection;
