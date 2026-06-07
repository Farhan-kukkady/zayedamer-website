import { createFileRoute } from "@tanstack/react-router";
import { PageHero, IMG } from "@/components/site/shared";
import { ScrapSection } from "@/components/site/sections";

export const Route = createFileRoute("/services/scrap-material")({
  head: () => ({
    meta: [
      { title: "Scrap Material | Zayed Amer Contracting" },
      { name: "description", content: "Responsible scrap collection, sorting and recycling for construction sites." },
      { property: "og:title", content: "Scrap Material" },
      { property: "og:description", content: "Sustainable scrap management." },
    ],
  }),
  component: () => (<main><PageHero title="Scrap Material" image={IMG.hero_scrap} kicker="Sustainable Recycling" /><ScrapSection /></main>),
});
