import Head from "next/head";
import { DefaultSeo } from "next-seo";
import seo from "../next-seo.config";
import Header from "../components/Header";
import "tailwindcss/tailwind.css";

function App({ Component, pageProps }) {
  return (
    <>
      <DefaultSeo {...seo} />
      <Head>
        <style>{`html{overflow-y:scroll} @media screen {
            .page {
                page-break-before: always !important;
            }
        }`}</style>
      </Head>
      <div className="min-h-screen flex flex-col justify-between">
        <main className="container mx-auto flex flex-col gap-12 px-8 py-24 print:max-w-full print:p-12">
          <Header />
          <Component {...pageProps} />
        </main>
        <footer className="p-12 text-center print:hidden">
          <p>
            Made with <span className="text-red-700">❤️</span> by Alex Rohleder
          </p>
          <p className="hidden print:block">
            Visit{" "}
            <a
              className="text-blue-700"
              href="https://alexrohleder.com/expertise"
              target="_blank"
            >
              alexrohleder.com/expertise
            </a>{" "}
            for more info.
          </p>
        </footer>
      </div>
    </>
  );
}

export default App;
