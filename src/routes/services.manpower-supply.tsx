import { createFileRoute } from "@tanstack/react-router";
import { PageHero, IMG } from "@/components/site/shared";
import { ManpowerSection } from "@/components/site/sections";

export const Route = createFileRoute("/services/manpower-supply")({
  head: () => ({
    meta: [
      { title: "Manpower Supply | Zayed Amer Contracting" },
      { name: "description", content: "Skilled labour and engineering professionals across construction disciplines." },
      { property: "og:title", content: "Manpower Supply" },
      { property: "og:description", content: "Qualified personnel for your project." },
    ],
  }),
  component: () => (<main><PageHero title="Manpower Supply" image={IMG.hero_manpower} kicker="Skilled Talent" /><ManpowerSection /></main>),
});
