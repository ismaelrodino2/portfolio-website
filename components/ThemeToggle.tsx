import { useEffect, useState } from "react";
import useTranslation from "next-translate/useTranslation";
import Icon from "./Icon";

/**
 * The initial theme is applied by the blocking script in `_document.tsx` so the
 * page never flashes the wrong palette. This component only mirrors and mutates
 * that state, which is why it reads from the DOM on mount instead of owning it.
 */
const ThemeToggle = () => {
  const { t } = useTranslation("common");
  const [dark, setDark] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setDark(document.documentElement.classList.contains("theme-dark"));
    setMounted(true);
  }, []);

  const toggle = () => {
    const next = !dark;
    document.documentElement.classList.toggle("theme-dark", next);
    try {
      window.localStorage.setItem("theme", next ? "dark" : "light");
    } catch {
      /* private mode — the choice just won't persist */
    }
    setDark(next);
  };

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={t("nav.theme")}
      title={t("nav.theme")}
      className="flex h-9 w-9 items-center justify-center rounded-lg border border-line text-muted transition-colors hover:border-line-strong hover:text-ink"
    >
      {/* Render a stable icon until mounted to keep SSR and client markup aligned. */}
      <Icon name={mounted && dark ? "sun" : "moon"} className="h-4 w-4" />
    </button>
  );
};

export default ThemeToggle;
