import { ReactNode } from "react";

type Props = {
  title: string;
  subTitle?: string;
  children: ReactNode;
};

const Section = ({ title, subTitle, children }: Props) => {
  return (
    <section>
      <div className="mb-4">
        <h1 className="text-xl font-semibold">{title}</h1>
        {subTitle && <h2 className="text-gray-500 text-sm">{subTitle}</h2>}
      </div>
      {children}
    </section>
  );
};

export default Section;
