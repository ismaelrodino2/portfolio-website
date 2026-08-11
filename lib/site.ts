export const SITE_URL = "https://ismaelrodino.vercel.app";

export const PERSON = {
  name: "Ismael Rodino",
  fullName: "Ismael Tavares Rodino",
  email: "ismael.rodino@hotmail.com",
  phone: "+5551985047712",
  phoneDisplay: "+55 51 98504-7712",
  linkedin: "https://www.linkedin.com/in/ismael-tavares/",
  linkedinDisplay: "linkedin.com/in/ismael-tavares",
  github: "https://github.com/ismaelrodino2",
  githubDisplay: "github.com/ismaelrodino2",
  calendly: "https://calendly.com/ismaelrodino/30min",
  repository: "https://github.com/ismaelrodino2/portfolio-website",
  image: "/profile.jpg"
} as const;

export const RESUME = {
  en: "/ismael-cv-english.pdf",
  pt: "/ismael-cv.pdf"
} as const;

export const LOCALES = ["en", "pt"] as const;
export type Locale = (typeof LOCALES)[number];

export const OG_LOCALE: Record<Locale, string> = {
  en: "en_US",
  pt: "pt_BR"
};

export const resumeFor = (lang: string) =>
  lang === "pt" ? RESUME.pt : RESUME.en;
