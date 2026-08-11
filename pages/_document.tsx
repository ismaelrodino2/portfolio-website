import NextDocument, { Html, Head, Main, NextScript } from "next/document";

// Runs before first paint so the page never flashes the wrong palette.
// Mirrors the storage key used by components/ThemeToggle.tsx.
const themeScript = `(function(){try{var s=localStorage.getItem('theme');var d=s?s==='dark':window.matchMedia('(prefers-color-scheme: dark)').matches;if(d){document.documentElement.classList.add('theme-dark')}}catch(e){}})();`;

class Document extends NextDocument {
  render() {
    const locale = (this.props as any).__NEXT_DATA__?.locale || "en";
    const htmlLang = locale === "pt" ? "pt-BR" : "en";

    return (
      <Html lang={htmlLang}>
        <Head>
          {/* hreflang + canonical are emitted per-page by next-seo (pages/index.tsx). */}
          <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
          <script dangerouslySetInnerHTML={{ __html: themeScript }} />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default Document;
