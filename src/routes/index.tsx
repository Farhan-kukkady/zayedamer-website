import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { COMPANY, SERVICES, IMG } from "@/components/site/shared";
import { CoverSection } from "@/components/site/sections";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: `${COMPANY} | Home` },
      { name: "description", content: "Civil construction, equipment rental, manpower and material supply across Saudi Arabia." },
      { property: "og:title", content: COMPANY },
      { property: "og:description", content: "Creating foundations for the future." },
    ],
  }),
  component: Index,
});

const SERVICE_IMG: Record<string, string> = {
  "/services/equipment-rental": IMG.excavator,
  "/services/manpower-supply": IMG.workers,
  "/services/material-supply": IMG.ms_pipes,
  "/services/civil-construction": IMG.cv1,
  "/services/fencing-works": IMG.fence1,
  "/services/scrap-material": IMG.scrap1,
  "/services/disposal-product": IMG.scrap5,
};

function Index() {
  return (
    <main className="bg-white text-foreground overflow-x-hidden">
      <CoverSection />

      <section className="py-20 px-8 md:px-16 bg-white">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="display-huge text-navy text-4xl md:text-5xl">
            <span className="text-orange font-semibold block">WHAT WE</span>
            <span className="block">DO</span>
          </h2>
          <p className="mt-6 text-gray-700 text-sm leading-relaxed">
            From earthwork to high-rise structures, we cover the full spectrum of contracting services with reliability, safety and craftsmanship at the core.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {SERVICES.map((s) => (
            <Link key={s.to} to={s.to} className="group block bg-white border border-gray-100 shadow-sm hover:shadow-xl transition-shadow rounded-lg overflow-hidden">
              <div className="relative h-44 overflow-hidden">
                <img src={SERVICE_IMG[s.to]} alt={s.label} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                <div className="absolute inset-0 bg-navy/30 group-hover:bg-navy/50 transition-colors" />
              </div>
              <div className="p-5">
                <h3 className="font-display font-bold text-navy text-lg group-hover:text-orange transition-colors">{s.label}</h3>
                <div className="mt-3 inline-flex items-center gap-1 text-orange text-sm font-semibold">
                  Read More <ArrowRight className="w-4 h-4" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="relative py-20 px-8 md:px-16 bg-navy text-white text-center overflow-hidden">
        <div className="absolute -left-20 -top-20 w-72 h-72 rounded-full bg-orange/20 blur-3xl" />
        <div className="absolute -right-20 -bottom-20 w-72 h-72 rounded-full bg-orange/20 blur-3xl" />
        <div className="relative z-10 max-w-3xl mx-auto">
          <h2 className="font-display font-extrabold text-4xl md:text-5xl">Ready to start your next project?</h2>
          <p className="mt-4 text-white/80">Get in touch for a quote tailored to your scope, timeline and budget.</p>
          <Link to="/contact" className="inline-block mt-8 px-8 py-4 bg-orange text-white font-bold tracking-wider hover:bg-white hover:text-navy transition-colors">
            GET A QUOTE
          </Link>
        </div>
      </section>
    </main>
  );
}
