const SITE_URL = "https://ismaelrodino.vercel.app";

const description =
  "Senior Software Engineer with 5+ years building production systems: high-performance web apps, payment infrastructure and AI/LLM pipelines.";

// Per-page title, description, canonical and hreflang are set in pages/index.tsx
// so they follow the active locale. This is only the fallback.
export default {
  title: "Ismael Rodino — Senior Software Engineer",
  titleTemplate: "%s",
  defaultTitle: "Ismael Rodino — Senior Software Engineer",
  description,
  openGraph: {
    type: "profile",
    locale: "en_US",
    url: SITE_URL,
    site_name: "Ismael Rodino",
    images: [
      {
        url: `${SITE_URL}/profile.jpg`,
        width: 1278,
        height: 1278,
        alt: "Ismael Rodino, Senior Software Engineer"
      }
    ]
  },
  twitter: {
    cardType: "summary"
  }
};
