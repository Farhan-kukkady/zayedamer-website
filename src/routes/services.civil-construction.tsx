import { createFileRoute } from "@tanstack/react-router";
import { PageHero, IMG } from "@/components/site/shared";
import { CivilSection } from "@/components/site/sections";

export const Route = createFileRoute("/services/civil-construction")({
  head: () => ({
    meta: [
      { title: "Civil Construction | Zayed Amer Contracting" },
      { name: "description", content: "Civil construction — foundations, super structures, pavements, industrial buildings and more." },
      { property: "og:title", content: "Civil Construction" },
      { property: "og:description", content: "End-to-end civil construction services." },
    ],
  }),
  component: () => (<main><PageHero title="Civil Construction" image={IMG.hero_civil} kicker="Build with Confidence" /><CivilSection /></main>),
});
