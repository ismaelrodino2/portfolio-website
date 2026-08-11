import { NextSeo } from "next-seo";
import Link from "next/link";
import useTranslation from "next-translate/useTranslation";
import Icon from "../components/Icon";

const NotFound = () => {
  const { t } = useTranslation("common");

  return (
    <>
      <NextSeo noindex nofollow title="404" />
      <div className="py-16 text-center">
        <p className="font-mono text-sm uppercase tracking-widest2 text-accent">404</p>
        <h1 className="mt-3 text-3xl font-semibold tracking-tight">
          {t("notFound.title")}
        </h1>
        <p className="mx-auto mt-4 max-w-md text-muted">{t("notFound.lead")}</p>
        <Link href="/">
          <a className="mt-8 inline-flex items-center gap-2 rounded-lg bg-accent px-4 py-2.5 text-sm font-medium text-accent-ink transition-opacity hover:opacity-90">
            <Icon name="arrow" />
            {t("notFound.back")}
          </a>
        </Link>
      </div>
    </>
  );
};

export default NotFound;

export async function getStaticProps() {
  return { props: {} };
}
