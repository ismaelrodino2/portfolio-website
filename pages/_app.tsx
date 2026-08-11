import Head from "next/head";
import { DefaultSeo } from "next-seo";
import useTranslation from "next-translate/useTranslation";

import seo from "../next-seo.config";
import Nav from "../components/Nav";
import { PERSON } from "../lib/site";
import "../styles/globals.css";

function App({ Component, pageProps }) {
  const { t } = useTranslation("common");

  return (
    <>
      <DefaultSeo {...seo} />
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#08090c" />
      </Head>

      <a
        href="#top"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-lg focus:bg-accent focus:px-4 focus:py-2 focus:text-accent-ink"
      >
        {t("nav.skip")}
      </a>

      <Nav />

      <div className="flex min-h-screen flex-col justify-between">
        <main className="mx-auto w-full max-w-content px-5 py-16 sm:px-8 sm:py-20 print:max-w-full print:p-10">
          <Component {...pageProps} />
        </main>

        <footer className="mt-16 border-t border-line print:hidden">
          <div className="mx-auto flex max-w-content flex-col gap-2 px-5 py-8 text-sm text-faint sm:flex-row sm:items-center sm:justify-between sm:px-8">
            <p>
              © {PERSON.name}. {t("footer.built")}
            </p>
            <a
              className="transition-colors hover:text-ink"
              href={PERSON.repository}
              target="_blank"
              rel="noopener"
            >
              {t("footer.source")}
            </a>
          </div>
        </footer>
      </div>
    </>
  );
}

export default App;
