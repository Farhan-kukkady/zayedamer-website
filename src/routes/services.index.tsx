import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { PageHero, SERVICES, IMG } from "@/components/site/shared";

const SERVICE_IMG: Record<string, string> = {
  "/services/equipment-rental": IMG.excavator,
  "/services/manpower-supply": IMG.workers,
  "/services/material-supply": IMG.ms_pipes,
  "/services/civil-construction": IMG.cv1,
  "/services/fencing-works": IMG.fence1,
  "/services/scrap-material": IMG.scrap1,
  "/services/disposal-product": IMG.scrap5,
};

export const Route = createFileRoute("/services/")({
  head: () => ({
    meta: [
      { title: "Our Services | Zayed Amer Contracting" },
      { name: "description", content: "Explore our full range of contracting services: equipment rental, manpower, civil construction, materials, fencing, scrap and disposal." },
      { property: "og:title", content: "Our Services | Zayed Amer" },
      { property: "og:description", content: "Full-spectrum contracting services in Saudi Arabia." },
    ],
  }),
  component: () => (
    <main>
      <PageHero title="Our Services" crumb="Services" image={IMG.hero_services} kicker="What We Do" />
      <section className="py-20 px-8 md:px-16 bg-white">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.map((s) => (
            <Link key={s.to} to={s.to} className="group block bg-white border border-gray-100 shadow-sm hover:shadow-xl transition-shadow rounded-lg overflow-hidden">
              <div className="relative h-52 overflow-hidden">
                <img src={SERVICE_IMG[s.to]} alt={s.label} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                <div className="absolute inset-0 bg-navy/30 group-hover:bg-navy/50 transition-colors" />
              </div>
              <div className="p-6">
                <h3 className="font-display font-bold text-navy text-xl group-hover:text-orange transition-colors">{s.label}</h3>
                <div className="mt-3 inline-flex items-center gap-1 text-orange text-sm font-semibold">Read More <ArrowRight className="w-4 h-4" /></div>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </main>
  ),
});
