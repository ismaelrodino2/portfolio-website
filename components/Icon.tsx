type Props = {
  name: keyof typeof paths;
  className?: string;
};

const paths = {
  mail: "M3 7.5A2.5 2.5 0 015.5 5h13A2.5 2.5 0 0121 7.5v9a2.5 2.5 0 01-2.5 2.5h-13A2.5 2.5 0 013 16.5v-9zm.9-.4L12 12.6l8.1-5.5",
  phone:
    "M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z",
  pin: "M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0zM15 11a3 3 0 11-6 0 3 3 0 016 0z",
  external: "M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14",
  calendar:
    "M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z",
  download: "M12 3v12m0 0l-4-4m4 4l4-4M4 17v2a2 2 0 002 2h12a2 2 0 002-2v-2",
  code: "M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4",
  link: "M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1",
  sun: "M12 3v1.5m0 15V21m9-9h-1.5m-15 0H3m15.36-6.36l-1.06 1.06M6.7 17.3l-1.06 1.06m12.72 0l-1.06-1.06M6.7 6.7L5.64 5.64M16 12a4 4 0 11-8 0 4 4 0 018 0z",
  moon: "M21 12.79A9 9 0 1111.21 3a7 7 0 009.79 9.79z",
  arrow: "M5 12h14m0 0l-6-6m6 6l-6 6",
  spark: "M12 3l1.8 5.2L19 10l-5.2 1.8L12 17l-1.8-5.2L5 10l5.2-1.8L12 3z",
  layers: "M12 3l9 5-9 5-9-5 9-5zm9 9l-9 5-9-5m18 4l-9 5-9-5",
  cloud: "M7 18a4 4 0 01-.4-7.98A5.5 5.5 0 0117.9 9.2 3.9 3.9 0 0117 18H7z",
  graduation: "M22 9L12 4 2 9l10 5 10-5zm-4 4v4c0 1.66-2.69 3-6 3s-6-1.34-6-3v-4",
  badge:
    "M12 2l2.4 1.8 3-.1 1 2.8 2.4 1.7-1 2.8 1 2.8-2.4 1.7-1 2.8-3-.1L12 20l-2.4-1.8-3 .1-1-2.8L3.2 13.8l1-2.8-1-2.8 2.4-1.7 1-2.8 3 .1L12 2z"
} as const;

const Icon = ({ name, className = "h-4 w-4" }: Props) => (
  <svg
    aria-hidden="true"
    focusable="false"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={1.5}
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d={paths[name]} />
  </svg>
);

export default Icon;
