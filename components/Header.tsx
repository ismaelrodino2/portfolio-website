import Image from "next/image";
import Link from "next/link";
import useTranslation from "next-translate/useTranslation";
import setLanguage from "next-translate/setLanguage";

const Header = () => {
  const { t, lang } = useTranslation("common");
  return (
    <header className="flex flex-col lg:flex-row gap-8">
      <div className="h-36 w-44">
        <Link href="https://alexrohleder.com">
          <a>
            <Image
              priority
              width={144}
              height={144}
              className="rounded"
              alt="Alex Rohleder's profile picture"
              src="/profile.jpg"
            />
          </a>
        </Link>
      </div>
      <div className="flex flex-col w-full gap-8 lg:gap-4 lg:h-36 lg:justify-between">
        <div className="w-full flex flex-col gap-8 justify-between lg:items-center lg:flex-row">
          <div>
            <h1 className="text-4xl font-semibold">Alex Rohleder</h1>
            <h2 className="text-xl">
              {t("title")}
              <span className="hidden lg:inline">
                with 6 years of experience
              </span>
            </h2>
          </div>
          <div className="flex gap-2 print:hidden">
          <div className="bg-gray-100 flex items-center justify-center ">
              <div className="flex space-x-2">
                <button
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                  onClick={async () => await setLanguage('en')}
                  >
                  EN
                </button>
                <button
                  className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
                  onClick={async () => await setLanguage('pt')}
                >
                  PT
                </button>
              </div>
            </div>
            <a
              className="px-4 py-2 text-sm font-medium text-black bg-gray-300 rounded hover:bg-gray-400 transition-colors"
              href="/alex-rohleder-cv.pdf"
              target="_blank"
              rel="noopener"
            >
              Download Curriculum
            </a>
            <a
              className="px-4 py-2 text-sm font-medium text-white bg-blue-700 rounded hover:bg-blue-800 transition-colors"
              href="https://calendly.com/alexrohleder/30min"
              target="_blank"
              rel="noopener"
            >
              Schedule a meeting
            </a>
          </div>
        </div>
        <div className="grid lg:grid-rows-2 lg:mt-0 lg:grid-cols-3 gap-2 w-full">
          <div className="flex gap-2 items-center">
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
                d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
              />
            </svg>
            <a href="tel:+4741244953">+47 412 44 953</a>
          </div>
          <div className="flex gap-2 items-center">
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
                d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
              />
            </svg>
            <a href="mailto:alexrohleder96@gmail.com">
              alexrohleder96@gmail.com
            </a>
          </div>
          <div className="flex gap-2 items-center">
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
                d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1}
                d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
              />
            </svg>
            Trondheim, Norway
          </div>
          <div className="flex gap-2 items-center">
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
                d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
              />
            </svg>
            <a
              href="https://linkedin.com/in/alexrohleder"
              target="_blank"
              rel="noopener"
            >
              linkedin.com/in/alexrohleder
            </a>
          </div>
          <div className="flex gap-2 items-center">
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
                d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
              />
            </svg>
            <a
              href="https://twitter.com/alexrohleder"
              target="_blank"
              rel="noopener"
            >
              twitter.com/alexrohleder
            </a>
          </div>
          <div className="flex gap-2 items-center">
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
                d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
              />
            </svg>
            <a
              href="https://github.com/alexrohleder"
              target="_blank"
              rel="noopener"
            >
              github.com/alexrohleder
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
