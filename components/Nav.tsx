import Link from "next/link";
import { useRouter } from "next/router";
import useTranslation from "next-translate/useTranslation";
import Icon from "./Icon";
import ThemeToggle from "./ThemeToggle";
import { LOCALES, PERSON, resumeFor } from "../lib/site";

const sections = ["focus", "work", "experience", "stack"] as const;

const Nav = () => {
  const { t, lang } = useTranslation("common");
  const router = useRouter();

  return (
    <header className="nav-surface sticky top-0 z-40 border-b border-line print:hidden">
      <nav
        aria-label={PERSON.name}
        className="mx-auto flex max-w-content items-center gap-4 px-5 py-3 sm:px-8"
      >
        <a href="#top" className="font-mono text-sm font-semibold tracking-tight">
          ismael<span className="text-accent">.</span>rodino
        </a>

        <ul className="ml-4 hidden gap-6 text-sm text-muted lg:flex">
          {sections.map((id) => (
            <li key={id}>
              <a className="transition-colors hover:text-ink" href={`#${id}`}>
                {t(`nav.${id}`)}
              </a>
            </li>
          ))}
        </ul>

        <div className="ml-auto flex items-center gap-2">
          {/* Real anchors, not a JS-only switcher — both locales stay crawlable. */}
          <div
            className="flex items-center rounded-lg border border-line p-0.5"
            role="group"
            aria-label={t("nav.language")}
          >
            {LOCALES.map((locale) => (
              <Link key={locale} href={router.asPath} locale={locale} scroll={false}>
                <a
                  aria-current={lang === locale ? "true" : undefined}
                  className={`rounded-md px-2 py-1 font-mono text-xs uppercase transition-colors ${
                    lang === locale
                      ? "bg-accent-wash text-accent"
                      : "text-faint hover:text-ink"
                  }`}
                >
                  {locale}
                </a>
              </Link>
            ))}
          </div>

          <ThemeToggle />

          <a
            className="hidden items-center gap-2 rounded-lg border border-line px-3 py-2 text-sm text-muted transition-colors hover:border-line-strong hover:text-ink sm:flex"
            href={resumeFor(lang)}
            target="_blank"
            rel="noopener"
          >
            <Icon name="download" className="h-4 w-4" />
            {t("nav.resume")}
          </a>

          <a
            className="flex items-center gap-2 whitespace-nowrap rounded-lg bg-accent px-3 py-2 text-sm font-medium text-accent-ink transition-opacity hover:opacity-90"
            href={PERSON.calendly}
            target="_blank"
            rel="noopener"
          >
            {t("nav.meeting")}
          </a>
        </div>
      </nav>
    </header>
  );
};

export default Nav;
