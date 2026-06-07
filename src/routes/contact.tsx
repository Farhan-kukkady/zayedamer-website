import { createFileRoute } from "@tanstack/react-router";
import { Phone, Mail, MapPin } from "lucide-react";
import { PageHero, CONTACT, IMG } from "@/components/site/shared";
import { ContactForm } from "@/components/site/ContactForm";


export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Us | Zayed Amer Contracting" },
      { name: "description", content: "Get in touch with Zayed Amer Contracting Establishment for quotes and project enquiries." },
      { property: "og:title", content: "Contact Us | Zayed Amer" },
      { property: "og:description", content: "Reach out for project enquiries and quotes." },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <main>
      <PageHero title="Contact Us" image={IMG.hero_contact} kicker="Let's Connect" />
      <section className="py-20 px-8 md:px-16 bg-white">
        <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-6">
          <div className="bg-white border border-gray-100 rounded-lg p-8 shadow-sm text-center">
            <div className="w-14 h-14 mx-auto rounded-full bg-orange/10 flex items-center justify-center mb-4"><Phone className="w-6 h-6 text-orange" /></div>
            <h3 className="font-display font-bold text-navy text-lg mb-2">Call Us</h3>
            <a href={CONTACT.phoneHref} className="text-gray-700 hover:text-orange">{CONTACT.phone}</a>
          </div>
          <div className="bg-white border border-gray-100 rounded-lg p-8 shadow-sm text-center">
            <div className="w-14 h-14 mx-auto rounded-full bg-orange/10 flex items-center justify-center mb-4"><Mail className="w-6 h-6 text-orange" /></div>
            <h3 className="font-display font-bold text-navy text-lg mb-2">Email Us</h3>
            <a href={CONTACT.emailHref} className="text-gray-700 hover:text-orange break-all">{CONTACT.email}</a>
          </div>
          <div className="bg-white border border-gray-100 rounded-lg p-8 shadow-sm text-center">
            <div className="w-14 h-14 mx-auto rounded-full bg-orange/10 flex items-center justify-center mb-4"><MapPin className="w-6 h-6 text-orange" /></div>
            <h3 className="font-display font-bold text-navy text-lg mb-2">Visit Us</h3>
            <p className="text-gray-700 text-sm">{CONTACT.addressLines.join(", ")}</p>
          </div>
        </div>
      </section>
      <ContactForm variant="contact" />
    </main>
  );
}
