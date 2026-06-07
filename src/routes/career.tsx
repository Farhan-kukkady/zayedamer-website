import { createFileRoute } from "@tanstack/react-router";
import { CheckCircle2 } from "lucide-react";

import { PageHero, CONTACT, IMG } from "@/components/site/shared";
import { ContactForm } from "@/components/site/ContactForm";


export const Route = createFileRoute("/career")({
  head: () => ({
    meta: [
      { title: "Career | Zayed Amer Contracting" },
      { name: "description", content: "Join our team of excellence — careers at Zayed Amer Contracting Establishment." },
      { property: "og:title", content: "Career | Zayed Amer" },
      { property: "og:description", content: "Build your future with us." },
    ],
  }),
  component: CareerPage,
});

function CareerPage() {
  const perks = [
    "Competitive compensation & benefits",
    "Skill development & training programs",
    "Safe, well-equipped worksites",
    "Career growth across multiple sectors",
    "Diverse, multinational team",
    "Recognition for performance",
  ];
  const roles = ["Civil Engineer","Site Supervisor","Project Manager","Mechanical Engineer","Electrical Engineer","Safety Officer","Crane / Forklift Operator","Skilled Labourers"];

  return (
    <main>
      <PageHero title="Career" image={IMG.hero_career} kicker="Join Our Team" />
      <section className="py-20 px-8 md:px-16 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="display-huge text-navy text-4xl md:text-5xl">
            <span className="text-orange font-semibold block">JOIN OUR</span>
            <span className="block">TEAM OF EXCELLENCE</span>
          </h2>
          <p className="mt-6 text-gray-700 leading-relaxed">
            We are always on the lookout for talented professionals who share our passion for quality, safety and innovation. If you're ready to grow your career on meaningful, large-scale projects across Saudi Arabia, we'd love to hear from you.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-10 mt-16 max-w-5xl mx-auto">
          <div>
            <h3 className="text-navy font-display font-bold text-2xl mb-5">Why Work With Us</h3>
            <ul className="space-y-3">
              {perks.map((p) => (
                <li key={p} className="flex items-start gap-3 text-gray-700"><CheckCircle2 className="w-5 h-5 text-orange mt-0.5 shrink-0" />{p}</li>
              ))}
            </ul>
          </div>
          <div className="bg-orange text-white p-8 rounded-lg shadow-lg">
            <h3 className="font-display font-bold text-2xl mb-4">Open Positions</h3>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm">
              {roles.map(r => <li key={r} className="border-b border-white/30 py-1.5">• {r}</li>)}
            </ul>
            <p className="mt-6 text-sm text-white/90">
              Send your CV to <a href={CONTACT.emailHref} className="font-bold underline">{CONTACT.email}</a> with the role in the subject.
            </p>
          </div>
        </div>

        <div className="mt-16 text-center">
          <a href="#apply" className="inline-block px-8 py-4 bg-navy text-white font-bold tracking-wider hover:bg-orange transition-colors">
            APPLY NOW
          </a>
        </div>
      </section>
      <div id="apply" />
      <ContactForm variant="career" />

    </main>
  );
}
