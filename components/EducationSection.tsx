import useTranslation from "next-translate/useTranslation";
import Icon from "./Icon";
import Section from "./Section";

const Row = ({
  icon,
  title,
  meta,
  year
}: {
  icon: "graduation" | "badge";
  title: string;
  meta: string;
  year?: string;
}) => (
  <li className="flex items-start gap-3 border-t border-line py-4">
    <span className="mt-0.5 text-faint">
      <Icon name={icon} />
    </span>
    <div className="min-w-0 flex-1">
      <p className="font-medium">{title}</p>
      <p className="text-sm text-muted">{meta}</p>
    </div>
    {year && <span className="font-mono text-xs text-faint">{year}</span>}
  </li>
);

const EducationSection = () => {
  const { t } = useTranslation("common");

  // A fragment, not a wrapper: the two sections are laid out as siblings by the
  // grid in pages/index.tsx.
  return (
    <>
      <Section compact title={t("education.title")}>
        <ul className="flex flex-col">
          <Row
            icon="graduation"
            title={t("education.degree")}
            meta={t("education.degreeSchool")}
            year={t("education.degreeYear")}
          />
          <Row
            icon="graduation"
            title={t("education.technologist")}
            meta={t("education.technologistNote")}
          />
        </ul>
      </Section>

      <Section compact title={t("education.certificationsTitle")}>
        <ul className="flex flex-col">
          <Row
            icon="badge"
            title={t("education.architectureCert")}
            meta={t("education.architectureCertIssuer")}
            year={t("education.architectureCertYear")}
          />
        </ul>
      </Section>
    </>
  );
};

export default EducationSection;
