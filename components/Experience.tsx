import useTranslation from "next-translate/useTranslation";
import Icon from "./Icon";

export type Props = {
  company: string;
  website?: string;
  role: string;
  /** `YYYY-MM` */
  start: string;
  /** `YYYY-MM`; omit for an ongoing role. */
  end?: string;
  location: string;
  summary?: string;
  highlights: string[];
};

// Formatted from a fixed table rather than Intl so server and client render
// byte-identical output regardless of the Node build's ICU data.
const MONTHS: Record<string, string[]> = {
  en: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
  pt: ["jan", "fev", "mar", "abr", "mai", "jun", "jul", "ago", "set", "out", "nov", "dez"]
};

const formatMonth = (value: string, lang: string) => {
  const [year, month] = value.split("-");
  const names = MONTHS[lang] || MONTHS.en;
  return `${names[Number(month) - 1]} ${year}`;
};

const Experience = (props: Props) => {
  const { t, lang } = useTranslation("common");

  return (
    <article className="rail relative pl-7">
      <span className="absolute left-0 top-1.5 h-2.5 w-2.5 rounded-full border-2 border-accent bg-bg" />

      <h3 className="font-semibold tracking-tight">
        {props.website ? (
          <a
            className="text-accent hover:underline"
            href={props.website}
            target="_blank"
            rel="noopener"
          >
            {props.company}
          </a>
        ) : (
          <span className="text-accent">{props.company}</span>
        )}
        <span className="text-faint"> · </span>
        <span>{props.role}</span>
      </h3>

      <div className="mt-1 flex flex-col gap-1 text-sm text-faint sm:flex-row sm:items-center sm:gap-4">
        <span className="flex items-center gap-2">
          <Icon name="calendar" />
          <span>
            <time dateTime={props.start}>{formatMonth(props.start, lang)}</time>
            {" — "}
            {props.end ? (
              <time dateTime={props.end}>{formatMonth(props.end, lang)}</time>
            ) : (
              t("experience.present")
            )}
          </span>
        </span>
        <span className="flex items-center gap-2">
          <Icon name="pin" />
          {props.location}
        </span>
      </div>

      {props.summary && (
        <p className="mt-3 max-w-3xl text-sm text-muted">{props.summary}</p>
      )}

      {/* Capped measure — full-container lines run past 140 characters. */}
      <ul className="mt-3 flex max-w-3xl flex-col gap-2">
        {props.highlights.map((highlight) => (
          <li key={highlight} className="flex gap-2.5 text-sm leading-relaxed">
            <span aria-hidden="true" className="mt-2 h-1 w-1 flex-shrink-0 rounded-full bg-line-strong" />
            <span className="text-muted">{highlight}</span>
          </li>
        ))}
      </ul>
    </article>
  );
};

export default Experience;
