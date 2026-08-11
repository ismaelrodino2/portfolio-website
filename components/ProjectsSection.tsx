import useTranslation from "next-translate/useTranslation";
import Icon from "./Icon";
import Section from "./Section";

type Project = {
  key: string;
  year: number;
  source?: string;
  deploy?: string;
};

const projects: Project[] = [
  {
    key: "autofill",
    year: 2023,
    source: "github.com/ismaelrodino2/Job-autofill"
  },
  {
    key: "mentoring",
    year: 2023,
    deploy: "twenty-five-two.vercel.app"
  },
  {
    key: "ecommerce",
    year: 2022,
    deploy: "e-commerce-black-seven.vercel.app"
  },
  {
    key: "blog",
    year: 2022,
    source: "github.com/ismaelrodino2/batdev",
    deploy: "batdev.vercel.app"
  },
  {
    key: "certificates",
    year: 2022,
    source: "github.com/ismaelrodino2/certificates-sender"
  }
];

const ProjectLink = ({ icon, href }: { icon: "code" | "link"; href: string }) => (
  <a
    className="flex items-center gap-1.5 text-xs text-faint transition-colors hover:text-accent"
    href={`https://${href}`}
    target="_blank"
    rel="noopener"
  >
    <Icon name={icon} className="h-3.5 w-3.5" />
    <span className="font-mono">{href.replace(/^github\.com\//, "")}</span>
  </a>
);

const ProjectsSection = () => {
  const { t } = useTranslation("common");

  return (
    <Section
      title={t("projects.title")}
      subTitle={t("projects.subtitle")}
    >
      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {projects.map((project) => (
          <article
            key={project.key}
            className="flex flex-col rounded-xl border border-line bg-surface p-5 transition-colors hover:border-line-strong"
          >
            <div className="flex items-baseline justify-between gap-3">
              <h3 className="font-medium tracking-tight">
                {t(`projects.${project.key}.title`)}
              </h3>
              <span className="font-mono text-xs text-faint">{project.year}</span>
            </div>
            <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">
              {t(`projects.${project.key}.desc`)}
            </p>
            <div className="mt-4 flex flex-wrap items-center gap-x-4 gap-y-1 print:hidden">
              {project.source && <ProjectLink icon="code" href={project.source} />}
              {project.deploy && <ProjectLink icon="link" href={project.deploy} />}
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
};

export default ProjectsSection;
