import getFormattedDate from "../lib/getFormattedDate";
import getWorkedTime from "../lib/getWorkedTime";

export type Props = {
  title: string;
  employeer: string;
  employeerWebsite: string;
  client?: string;
  clientWebsite?: string;
  startDate: Date;
  endDate?: Date;
  description?: string;
  highlights?: string[];
};

const EmployerProject = (props: Props) => {
  return (
    <article>
      <h1 className="font-semibold">{props.title}</h1>
      <div className="flex flex-col gap-2 lg:gap-4 text-gray-500 text-sm mt-1 lg:flex-row">
        <div className="flex items-center gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1}
              d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
            />
          </svg>
          <div>
            {getFormattedDate(props.startDate)} -{" "}
            {props.endDate ? getFormattedDate(props.endDate) : "Ongoing"} ·{" "}
            {getWorkedTime(props.startDate, props.endDate)}
          </div>
        </div>
        <div className="flex items-center gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
            />
          </svg>
          <div>
            <a
              className="text-blue-700 hover:underline font-semibold"
              href={props.employeerWebsite}
              target="_blank"
              rel="noopener"
            >
              {props.employeer}
            </a>
            {props.client && (
              <>
                {" consulting for "}
                <a
                  className="text-blue-700 hover:underline font-semibold"
                  href={props.clientWebsite}
                  target="_blank"
                  rel="noopener"
                >
                  {props.client}
                </a>
              </>
            )}
          </div>
        </div>
      </div>
      {props.description && <p className="my-4">{props.description}.</p>}
      {props.highlights && (
        <ol className="my-4 list-disc">
          {props.highlights.map((highlight, index) => (
            <li className="mb-2" key={index}>
              {highlight};
            </li>
          ))}
        </ol>
      )}
    </article>
  );
};

export default EmployerProject;
