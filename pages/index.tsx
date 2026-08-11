import Head from "next/head";
import { NextSeo } from "next-seo";
import useTranslation from "next-translate/useTranslation";

import ContactSection from "../components/ContactSection";
import EducationSection from "../components/EducationSection";
import ExperienceSection from "../components/ExperienceSection";
import FocusSection from "../components/FocusSection";
import Hero from "../components/Hero";
import LanguagesSection from "../components/LanguagesSection";
import PrinciplesSection from "../components/PrinciplesSection";
import ProjectsSection from "../components/ProjectsSection";
import SelectedWorkSection from "../components/SelectedWorkSection";
import StackSection from "../components/StackSection";
import { OG_LOCALE, PERSON, SITE_URL, Locale } from "../lib/site";

const Divider = () => (
  <hr className="border-0 border-t border-line print:hidden" />
);

const Index = () => {
  const { t, lang } = useTranslation("common");

  const path = lang === "en" ? "" : `/${lang}`;
  const canonical = `${SITE_URL}${path}`;
  const title = t("meta.title");
  const description = t("meta.description");

  const personJsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: PERSON.fullName,
    alternateName: PERSON.name,
    url: SITE_URL,
    image: `${SITE_URL}${PERSON.image}`,
    jobTitle: t("hero.role"),
    email: `mailto:${PERSON.email}`,
    telephone: PERSON.phone,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Porto Alegre",
      addressRegion: "RS",
      addressCountry: "BR"
    },
    alumniOf: {
      "@type": "CollegeOrUniversity",
      name: "UNINTER"
    },
    knowsLanguage: [
      { "@type": "Language", name: "Portuguese", alternateName: "pt" },
      { "@type": "Language", name: "English", alternateName: "en" }
    ],
    knowsAbout: [
      "Software architecture",
      "TypeScript",
      "React",
      "Next.js",
      "Node.js",
      "PostgreSQL",
      "AWS",
      "AI engineering",
      "Retrieval-augmented generation",
      "Payment systems"
    ],
    sameAs: [PERSON.linkedin, PERSON.github, "https://www.wishapply.com/"]
  };

  return (
    <>
      <NextSeo
        title={title}
        description={description}
        canonical={canonical}
        languageAlternates={[
          { hrefLang: "x-default", href: SITE_URL },
          { hrefLang: "en", href: SITE_URL },
          { hrefLang: "pt-BR", href: `${SITE_URL}/pt` }
        ]}
        openGraph={{
          title,
          description,
          url: canonical,
          type: "profile",
          locale: OG_LOCALE[lang as Locale] || OG_LOCALE.en,
          site_name: PERSON.name,
          profile: {
            firstName: "Ismael",
            lastName: "Rodino",
            username: "ismaelrodino2"
          },
          images: [
            {
              url: `${SITE_URL}${PERSON.image}`,
              width: 1278,
              height: 1278,
              alt: t("meta.imageAlt")
            }
          ]
        }}
        twitter={{ cardType: "summary" }}
      />
      <Head>
        <script
          type="application/ld+json"
          // Static, author-controlled object — nothing user-supplied reaches it.
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
      </Head>

      <div className="flex flex-col gap-20 print:gap-10">
        <Hero />
        <FocusSection />
        <Divider />
        <SelectedWorkSection />
        <Divider />
        <ExperienceSection />
        <Divider />
        <PrinciplesSection />
        <Divider />
        <StackSection />
        <Divider />
        <div className="grid gap-x-12 gap-y-10 md:grid-cols-2 lg:grid-cols-3">
          {/* EducationSection renders two sibling sections into this grid. */}
          <EducationSection />
          <LanguagesSection />
        </div>
        <Divider />
        <ProjectsSection />
        <Divider />
        <ContactSection />
      </div>
    </>
  );
};

export default Index;

export async function getStaticProps() {
  return { props: {} };
}
