import { createFileRoute } from "@tanstack/react-router";
import { PageHero, IMG } from "@/components/site/shared";
import { MaterialSection } from "@/components/site/sections";

export const Route = createFileRoute("/services/material-supply")({
  head: () => ({
    meta: [
      { title: "Material Supply | Zayed Amer Contracting" },
      { name: "description", content: "Pipes, flanges, valves, structural steel and a wide range of construction materials." },
      { property: "og:title", content: "Material Supply" },
      { property: "og:description", content: "Trusted source for construction materials." },
    ],
  }),
  component: () => (<main><PageHero title="Material Supply" image={IMG.hero_material} kicker="Quality Materials" /><MaterialSection /></main>),
});
