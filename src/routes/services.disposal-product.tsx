import { createFileRoute } from "@tanstack/react-router";
import { PageHero, IMG } from "@/components/site/shared";
import { DisposalSection } from "@/components/site/sections";

export const Route = createFileRoute("/services/disposal-product")({
  head: () => ({
    meta: [
      { title: "Disposal Product | Zayed Amer Contracting" },
      { name: "description", content: "Construction waste disposal products and services." },
      { property: "og:title", content: "Disposal Product" },
      { property: "og:description", content: "Effective waste disposal solutions." },
    ],
  }),
  component: () => (<main><PageHero title="Disposal Product" image={IMG.hero_disposal} kicker="Responsible Disposal" /><DisposalSection /></main>),
});
