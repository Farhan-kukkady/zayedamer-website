import { createFileRoute } from "@tanstack/react-router";
import { PageHero, IMG } from "@/components/site/shared";
import { FencingSection } from "@/components/site/sections";

export const Route = createFileRoute("/services/fencing-works")({
  head: () => ({
    meta: [
      { title: "Fencing Works | Zayed Amer Contracting" },
      { name: "description", content: "Custom fencing solutions for security, durability and aesthetics." },
      { property: "og:title", content: "Fencing Works" },
      { property: "og:description", content: "Custom fencing solutions." },
    ],
  }),
  component: () => (<main><PageHero title="Fencing Works" image={IMG.hero_fencing} kicker="Site Security" /><FencingSection /></main>),
});
