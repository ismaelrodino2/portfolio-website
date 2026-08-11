import useTranslation from "next-translate/useTranslation";
import Section from "./Section";

// Technology names are proper nouns — they stay out of the locale files.
const groups = [
  {
    key: "core",
    items: ["TypeScript", "JavaScript", "Node.js", "SQL"]
  },
  {
    key: "frontend",
    items: [
      "React",
      "Next.js",
      "React Native (Expo)",
      "SSR / SSG / ISR",
      "Tailwind CSS",
      "shadcn/ui",
      "Sanity CMS"
    ]
  },
  {
    key: "backendData",
    items: [
      "PostgreSQL",
      "Row-Level Security",
      "PostGIS",
      "pgvector",
      "Redis",
      "Supabase",
      "Prisma",
      "MongoDB",
      "Firebase",
      "REST",
      "GraphQL"
    ]
  },
  {
    key: "cloudOps",
    items: [
      "AWS",
      "Docker",
      "Vercel",
      "Edge Functions (Deno)",
      "CI/CD",
      "Playwright / Jest",
      "Observability"
    ]
  },
  {
    key: "ai",
    items: [
      "LLM pipelines",
      "RAG",
      "AI agents",
      "MCP",
      "Tool calling",
      "Structured outputs",
      "Embeddings",
      "Evals & token economics"
    ]
  },
  {
    key: "payments",
    items: ["Stripe", "Asaas", "PIX", "Split payments", "Multi-country checkout"]
  }
] as const;

const StackSection = () => {
  const { t } = useTranslation("common");

  return (
    <Section id="stack" title={t("stack.title")} subTitle={t("stack.subtitle")}>
      <div className="grid gap-x-10 gap-y-8 md:grid-cols-2">
        {groups.map((group) => (
          <div key={group.key}>
            <h3 className="mb-3 font-mono text-xs uppercase tracking-widest2 text-accent">
              {t(`stack.${group.key}`)}
            </h3>
            <ul className="flex flex-wrap gap-2">
              {group.items.map((item) => (
                <li
                  key={item}
                  className="rounded-md border border-line bg-surface px-2.5 py-1 text-sm text-muted"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default StackSection;
