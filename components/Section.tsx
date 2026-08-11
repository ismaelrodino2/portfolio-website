import { ReactNode } from "react";

type Props = {
  id?: string;
  eyebrow?: string;
  title: string;
  subTitle?: string;
  /** Smaller heading, for sections sitting side by side in a column grid. */
  compact?: boolean;
  children: ReactNode;
  className?: string;
};

const Section = ({
  id,
  eyebrow,
  title,
  subTitle,
  compact = false,
  children,
  className = ""
}: Props) => (
  <section id={id} className={className}>
    <div className={compact ? "mb-4" : "mb-8 print:mb-4"}>
      {eyebrow && (
        <p className="mb-2 font-mono text-xs uppercase tracking-widest2 text-accent">
          {eyebrow}
        </p>
      )}
      <h2
        className={
          compact
            ? "text-lg font-semibold tracking-tight"
            : "text-2xl font-semibold tracking-tight sm:text-3xl"
        }
      >
        {title}
      </h2>
      {subTitle && (
        <p className={`mt-2 max-w-2xl text-sm text-muted ${compact ? "mt-1" : ""}`}>
          {subTitle}
        </p>
      )}
    </div>
    {children}
  </section>
);

export default Section;
