import useTranslation from "next-translate/useTranslation";
import Icon from "./Icon";
import Section from "./Section";
import { PERSON } from "../lib/site";

const ContactSection = () => {
  const { t } = useTranslation("common");

  const channels = [
    { icon: "mail", label: t("contact.email"), value: PERSON.email, href: `mailto:${PERSON.email}` },
    { icon: "phone", label: t("contact.phone"), value: PERSON.phoneDisplay, href: `tel:${PERSON.phone}` },
    { icon: "external", label: t("contact.linkedin"), value: PERSON.linkedinDisplay, href: PERSON.linkedin },
    { icon: "code", label: t("contact.github"), value: PERSON.githubDisplay, href: PERSON.github }
  ] as const;

  return (
    <Section id="contact" title={t("contact.title")}>
      <div className="rounded-2xl border border-line bg-surface p-6 sm:p-8">
        <p className="max-w-2xl leading-relaxed text-muted">{t("contact.lead")}</p>

        <ul className="mt-6 grid gap-4 sm:grid-cols-2">
          {channels.map((channel) => (
            <li key={channel.label}>
              <a
                className="flex items-center gap-3 rounded-xl border border-line bg-raised px-4 py-3 transition-colors hover:border-line-strong"
                href={channel.href}
                target={channel.href.startsWith("http") ? "_blank" : undefined}
                rel="noopener"
              >
                <span className="text-accent">
                  <Icon name={channel.icon} />
                </span>
                <span className="min-w-0">
                  <span className="block font-mono text-xs uppercase tracking-widest2 text-faint">
                    {channel.label}
                  </span>
                  <span className="block truncate text-sm">{channel.value}</span>
                </span>
              </a>
            </li>
          ))}
        </ul>

        <a
          className="mt-6 inline-flex items-center gap-2 rounded-lg bg-accent px-4 py-2.5 text-sm font-medium text-accent-ink transition-opacity hover:opacity-90 print:hidden"
          href={PERSON.calendly}
          target="_blank"
          rel="noopener"
        >
          <Icon name="calendar" />
          {t("contact.calendly")}
        </a>
      </div>
    </Section>
  );
};

export default ContactSection;
