import { createFileRoute } from "@tanstack/react-router";
import {
  CoverSection, AboutSection, EquipmentRentalSection, ManpowerSection,
  CivilSection, MaterialSection, FencingSection, ScrapSection, DisposalSection, ContactSection,
} from "@/components/site/sections";

export const Route = createFileRoute("/company-profile")({
  head: () => ({
    meta: [
      { title: "Company Profile | Zayed Amer Contracting" },
      { name: "description", content: "Full company profile — Zayed Amer Contracting Establishment." },
      { property: "og:title", content: "Company Profile" },
      { property: "og:description", content: "Complete profile of Zayed Amer Contracting Establishment." },
    ],
  }),
  component: () => (
    <main className="bg-white">
      <CoverSection />
      <AboutSection />
      <EquipmentRentalSection />
      <ManpowerSection />
      <CivilSection />
      <MaterialSection />
      <FencingSection />
      <ScrapSection />
      <DisposalSection />
      <ContactSection />
    </main>
  ),
});
