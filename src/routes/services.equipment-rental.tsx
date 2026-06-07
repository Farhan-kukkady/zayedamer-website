import { createFileRoute } from "@tanstack/react-router";
import { PageHero, IMG } from "@/components/site/shared";
import { EquipmentRentalSection } from "@/components/site/sections";

export const Route = createFileRoute("/services/equipment-rental")({
  head: () => ({
    meta: [
      { title: "Equipment Rental | Zayed Amer Contracting" },
      { name: "description", content: "Heavy machinery and equipment rental — cranes, excavators, loaders, forklifts and more." },
      { property: "og:title", content: "Equipment Rental" },
      { property: "og:description", content: "Reliable equipment rental for construction projects." },
    ],
  }),
  component: () => (<main><PageHero title="Equipment Rental" image={IMG.hero_equipment} kicker="Modern Fleet" /><EquipmentRentalSection /></main>),
});
