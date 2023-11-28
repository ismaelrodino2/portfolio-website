import Section from "../components/Section";

const Expertise = () => (
  <div className="mt-10 flex flex-col gap-10">
    <Section title="Expertise">
      <p className="mb-2">
        This is just a draft yet, please let me know if you're looking for
        something you can't find 🙂
      </p>
      <p className="mb-2">
        I'm thinking of making this page looks like{" "}
        <a
          className="text-blue-700 hover:underline"
          href="https://www.thoughtworks.com/radar"
        >
          tech radar from thoughtworks
        </a>
        , with quadrants and rings.
      </p>
      <p>
        For now you may have a <u>non-exhaustive list of technologies</u> I work
        with nowadays.
      </p>
    </Section>
    <div className="grid gap-8 md:grid-cols-3 lg:grid-cols-5">
      <Section title="Frameworks">
        <ul>
          <li>ReactJS</li>
          <li>NextJS</li>
          <li>GraphQL</li>
        </ul>
      </Section>
      <Section title="Programming Languages">
        <ul>
          <li>TypeScript</li>
          <li>Java</li>
        </ul>
      </Section>
      <Section title="Data Fetching">
        <ul>
          <li>Apollo client</li>
          <li>Relay client</li>
          <li>SWR</li>
          <li>Axios</li>
          <li>Socket.io</li>
        </ul>
      </Section>
      <Section title="State Management">
        <ul>
          <li>Redux, Redux-Saga, Redux-Thunk</li>
          <li>Zustand</li>
          <li>Recoil and Jotai</li>
        </ul>
      </Section>
      <Section title="Stylings">
        <ul>
          <li>SCSS</li>
          <li>PostCSS</li>
          <li>TailwindCSS</li>
          <li>Styled-Components</li>
        </ul>
      </Section>
      <Section title="Hosting">
        <ul>
          <li>Vercel</li>
          <li>Kubernetes</li>
        </ul>
      </Section>
      <Section title="Cloud Services">
        <ul>
          <li>AWS EC2</li>
          <li>AWS S3</li>
          <li>AWS RDS (postgres)</li>
        </ul>
      </Section>
      <Section title="Techniques">
        <ul>
          <li>Micro-Frontends</li>
        </ul>
      </Section>
    </div>
  </div>
);

export default Expertise;
