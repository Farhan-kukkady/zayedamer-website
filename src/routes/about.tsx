import { createFileRoute } from "@tanstack/react-router";
import { PageHero, IMG } from "@/components/site/shared";
import { AboutSection } from "@/components/site/sections";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Us | Zayed Amer Contracting Establishment" },
      { name: "description", content: "Learn about Zayed Amer Contracting Establishment — our vision, mission and contracting expertise across Saudi Arabia." },
      { property: "og:title", content: "About Us | Zayed Amer" },
      { property: "og:description", content: "Our vision, mission and expertise." },
    ],
  }),
  component: () => (
    <main>
      <PageHero title="About Us" image={IMG.hero_about} kicker="Who We Are" />
      <AboutSection />
    </main>
  ),
});
