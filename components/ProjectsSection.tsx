import EmployerProject, {
  Props as EmployerProjectProps,
} from "./EmployerProject";
import OpenSourceProject, {
  Props as OpenSourceProjectProps,
} from "./OpenSourceProject";
import Section from "./Section";

type Projects =
  | { type: "employer"; data: EmployerProjectProps }
  | { type: "opensource"; data: OpenSourceProjectProps };

const projects: Projects[] = [
  {
    type: "employer",
    data: {
      title: "Micro-Frontend platform",
      employeer: "Sportradar",
      employeerWebsite: "https://sportradar.com",
      startDate: new Date(2021, 6),
      highlights: [
        "Single page frontend built with TypeScript, React, Import-Maps and Webpack",
        "Able to load different apps into a single interface and bridge their communication",
        "There is a huge side of CLI tooling and webpack configuration",
        "Developer experience is critical, this is the platform to build apps for",
      ],
    },
  },
  {
    type: "employer",
    data: {
      title: "Formula 1 Trading Application",
      employeer: "Sportradar",
      employeerWebsite: "https://sportradar.com",
      startDate: new Date(2020, 1),
      highlights: [
        "Real-time frontend built with Typescript, React, Redux and Styled-Components",
        "Handle a lot of live data. The data can receive 5 to 8 updates per second",
        "There is render throttling for different portions of the screen, performance is important",
        "Tested using end to end tests, unit tests and static tests",
      ],
    },
  },
  {
    type: "opensource",
    data: {
      title: "Cryptocurrency Order Book",
      sourceLink: "github.com/alexrohleder/order-book",
      deployLink: "order-book-beta.vercel.app",
      year: 2021,
      highlights: [
        "Highly performant react app targeted to run on slow devices",
        "Receives 10+ updates per second, uses throttling based on device performance",
        "Efficiently uses DOM and CSS to avoid unecessary computations",
        "Built critical components using test driven development (TDD), used Jest",
      ],
    },
  },
  {
    type: "employer",
    data: {
      title: "Booking Calendar",
      employeer: "Sportradar",
      employeerWebsite: "https://sportradar.com",
      startDate: new Date(2018, 2),
      endDate: new Date(2020, 1),
      highlights: [
        "Single page frontend built with React, Redux and SCSS",
        "Handled a lot of data, performance was important",
        "There is a set of complex filtering with filter composing heuristics",
        "Fully tested on critical paths with end to end, integration and unit tests",
      ],
    },
  },
  {
    type: "opensource",
    data: {
      title: "Airbnb Mobile Authentication Clone",
      sourceLink: "github.com/alexrohleder/a2",
      deployLink: "auth-with-firestore-ts-vue.web.app",
      year: 2018,
      highlights: [
        "Showcase authentication app in VueJS, TypeScript and Firebase",
        "Have a extensive documentation with technical detailing",
        "Implement url access control and handle redirects",
        "Allows use of social login with Facebook and Google",
      ],
    },
  },
  {
    type: "employer",
    data: {
      title: "Healthcare Insurance Application",
      employeer: "Meta",
      employeerWebsite: "https://www.meta.com.br/",
      client: "Unimed",
      clientWebsite: "https://www.linkedin.com/company/unimed-com-br/",
      startDate: new Date(2016, 2),
      endDate: new Date(2018, 0),
      highlights: [
        "Multi-page app built with Laravel, VueJS and SCSS",
        "Developers had direct access to stakeholders, the domain was well known by both",
        "Load performance was critical, many techniques were applied to maintain it",
        "Search functionalities were highly optimized and allowed rich queries",
      ],
    },
  },
  {
    type: "employer",
    data: {
      title: "Hiring Platform",
      employeer: "Meta",
      employeerWebsite: "https://www.meta.com.br/",
      client: "Calçados Beira Rio",
      clientWebsite: "https://www.linkedin.com/company/calcadosbeirariosa",
      startDate: new Date(2017, 0),
      endDate: new Date(2017, 6),
      description:
        "A specialized hiring platform built with Laravel, VueJS and SCSS",
    },
  },
  {
    type: "employer",
    data: {
      title: "Automated Phone Menu System",
      employeer: "Meta",
      employeerWebsite: "https://www.meta.com.br/",
      client: "Sascar",
      clientWebsite:
        "https://www.linkedin.com/company/sascar-tecnologia-e-seguran-a-automotiva-s-",
      startDate: new Date(2017, 6),
      endDate: new Date(2018, 0),
      description:
        "Improving the existing automated phone menu system with PHP and Java",
    },
  },
  {
    type: "employer",
    data: {
      title: "Invoice System Integration to Government Webservices",
      employeer: "Meta",
      employeerWebsite: "https://www.meta.com.br/",
      client: "Grupo Greencard",
      clientWebsite: "https://www.linkedin.com/company/greencard-s-a-",
      startDate: new Date(2017, 6),
      endDate: new Date(2018, 0),
      description:
        "Integrated their invoice system to Brazilian webservices with PHP and SOAP",
    },
  },
  {
    type: "employer",
    data: {
      title: "Brazilian Government Website",
      employeer: "Meta",
      employeerWebsite: "https://www.meta.com.br/",
      client: "Brazilian Government",
      clientWebsite: "http://todospelaeducacao.org.br/",
      startDate: new Date(2016, 6),
      endDate: new Date(2018, 0),
      description:
        "Responsible for supporting the website and the CRM, used PHP and jQuery",
    },
  },
];

const ProjectsSection = () => {
  return (
    <Section title="Projects">
      <div className="grid xl:grid-cols-2 gap-6 print:gap-4">
        {projects.map((project) =>
          project.type === "employer" ? (
            <EmployerProject key={project.data.title} {...project.data} />
          ) : (
            <OpenSourceProject key={project.data.title} {...project.data} />
          )
        )}
      </div>
    </Section>
  );
};

export default ProjectsSection;
