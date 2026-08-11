import Image from "next/image";
import useTranslation from "next-translate/useTranslation";
import Icon from "./Icon";
import { PERSON, resumeFor } from "../lib/site";

const Stat = ({
  value,
  label,
  detail
}: {
  value: string;
  label: string;
  detail?: string;
}) => (
  <div className="border-t border-line pt-4">
    <div className="font-mono text-2xl font-semibold tracking-tight text-accent">
      {value}
    </div>
    <div className="mt-1 text-sm text-ink">{label}</div>
    {detail && <div className="mt-0.5 text-xs text-faint">{detail}</div>}
  </div>
);

const Hero = () => {
  const { t, lang } = useTranslation("common");

  return (
    <section id="top" className="relative">
      <div className="backdrop-grid pointer-events-none absolute inset-x-0 -top-24 h-[28rem] print:hidden" />

      <div className="relative">
        <div className="flex flex-col gap-8 sm:flex-row sm:items-start">
          {/* self-start keeps the frame at the image's width; the column-flex
              parent would otherwise stretch it edge to edge on mobile. */}
          <div className="flex-shrink-0 self-start">
            <div className="accent-glow overflow-hidden rounded-2xl">
              <Image
                priority
                quality={90}
                width={112}
                height={112}
                alt={t("meta.imageAlt")}
                src={PERSON.image}
                className="object-cover"
              />
            </div>
          </div>

          <div className="min-w-0">
            <p className="mb-3 inline-flex items-center gap-2 rounded-full border border-line bg-surface px-3 py-1 text-xs text-muted print:hidden">
              <span className="h-1.5 w-1.5 rounded-full bg-accent" />
              {t("hero.availability")}
            </p>

            <h1 className="text-3xl font-semibold tracking-tight sm:text-5xl">
              {PERSON.name}
            </h1>
            <p className="mt-2 text-lg text-accent sm:text-xl">{t("hero.role")}</p>

            <p className="mt-6 max-w-2xl text-xl leading-snug tracking-tight sm:text-2xl">
              {t("hero.headline")}
            </p>
            <p className="mt-4 max-w-2xl text-muted">{t("hero.lead")}</p>

            <ul className="mt-6 flex flex-col gap-x-6 gap-y-2 text-sm text-muted sm:flex-row sm:flex-wrap">
              <li className="flex items-center gap-2">
                <Icon name="pin" />
                {t("hero.location")}
              </li>
              <li className="flex items-center gap-2">
                <Icon name="mail" />
                <a className="hover:text-ink" href={`mailto:${PERSON.email}`}>
                  {PERSON.email}
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Icon name="phone" />
                <a className="hover:text-ink" href={`tel:${PERSON.phone}`}>
                  {PERSON.phoneDisplay}
                </a>
              </li>
            </ul>

            <div className="mt-8 flex flex-wrap items-center gap-3 print:hidden">
              <a
                className="flex items-center gap-2 rounded-lg bg-accent px-4 py-2.5 text-sm font-medium text-accent-ink transition-opacity hover:opacity-90"
                href={resumeFor(lang)}
                target="_blank"
                rel="noopener"
              >
                <Icon name="download" />
                {t("nav.resume")}
                <span className="text-xs opacity-70">· {t("hero.resumeHint")}</span>
              </a>
              <a
                className="flex items-center gap-2 rounded-lg border border-line px-4 py-2.5 text-sm text-muted transition-colors hover:border-line-strong hover:text-ink"
                href={PERSON.linkedin}
                target="_blank"
                rel="noopener"
              >
                <Icon name="external" />
                LinkedIn
              </a>
              <a
                className="flex items-center gap-2 rounded-lg border border-line px-4 py-2.5 text-sm text-muted transition-colors hover:border-line-strong hover:text-ink"
                href={PERSON.github}
                target="_blank"
                rel="noopener"
              >
                <Icon name="code" />
                GitHub
              </a>
            </div>
          </div>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          <Stat
            value={t("stats.years.value")}
            label={t("stats.years.label")}
            detail={t("hero.remote")}
          />
          <Stat
            value={t("stats.mainThread.value")}
            label={t("stats.mainThread.label")}
            detail={t("stats.mainThread.detail")}
          />
          <Stat
            value={t("stats.api.value")}
            label={t("stats.api.label")}
            detail={t("stats.api.detail")}
          />
          <Stat
            value={t("stats.applyTime.value")}
            label={t("stats.applyTime.label")}
            detail={t("stats.applyTime.detail")}
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
