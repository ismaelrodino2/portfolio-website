export type Props = {
  title: string;
  sourceLink: string;
  deployLink: string;
  year: number;
  highlights: string[];
};

const OpenSourceProject = (props: Props) => {
  return (
    <article>
      <h1 className="font-semibold">
        {props.title} <small className="text-gray-500">(Open Source)</small>
      </h1>
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
          <div>{props.year}</div>
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
              d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
            />
          </svg>
          <div>
            <a
              className="text-blue-700 hover:underline font-semibold"
              href={`https://${props.sourceLink}`}
              target="_blank"
              rel="noopener"
            >
              {props.sourceLink}
            </a>
          </div>
        </div>
        {props.deployLink && (
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
                d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"
              />
            </svg>
            <div>
              <a
                className="text-blue-700 hover:underline font-semibold"
                href={`https://${props.deployLink}`}
                target="_blank"
                rel="noopener"
              >
                {props.deployLink}
              </a>
            </div>
          </div>
        )}
      </div>
      <ol className="my-4 list-disc">
        {props.highlights.map((highlight, index) => (
          <li className="mb-2" key={index}>
            {highlight};
          </li>
        ))}
      </ol>
    </article>
  );
};

export default OpenSourceProject;
