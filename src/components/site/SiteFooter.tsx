import { Link } from "@tanstack/react-router";
import { Phone, Mail, MapPin } from "lucide-react";
import { CONTACT, COMPANY, SERVICES, IMG } from "./shared";

function WhatsAppIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden="true">
      <path d="M20.52 3.48A11.78 11.78 0 0 0 12.04 0C5.5 0 .2 5.3.2 11.84a11.7 11.7 0 0 0 1.6 5.92L0 24l6.4-1.68a11.83 11.83 0 0 0 5.64 1.44h.01c6.54 0 11.84-5.3 11.84-11.84 0-3.16-1.23-6.13-3.37-8.44ZM12.05 21.6h-.01a9.74 9.74 0 0 1-4.96-1.36l-.36-.21-3.8 1 1.01-3.71-.23-.38a9.73 9.73 0 0 1-1.5-5.1c0-5.39 4.39-9.78 9.79-9.78a9.73 9.73 0 0 1 9.78 9.79c0 5.4-4.39 9.75-9.79 9.75Zm5.36-7.3c-.3-.15-1.74-.86-2-.96-.27-.1-.47-.15-.66.15-.2.3-.76.96-.93 1.16-.17.2-.34.22-.63.07-.3-.15-1.25-.46-2.38-1.47-.88-.78-1.47-1.74-1.65-2.03-.17-.3-.02-.46.13-.6.13-.13.3-.34.45-.51.15-.17.2-.3.3-.5.1-.2.05-.38-.02-.53-.08-.15-.66-1.6-.91-2.18-.24-.58-.49-.5-.66-.5l-.57-.01c-.2 0-.53.07-.8.37s-1.06 1.03-1.06 2.52 1.08 2.92 1.23 3.12c.15.2 2.13 3.25 5.16 4.56.72.31 1.28.5 1.72.64.72.23 1.37.2 1.89.12.58-.09 1.74-.71 1.99-1.4.25-.7.25-1.28.17-1.4-.08-.13-.27-.2-.57-.35Z"/>
    </svg>
  );
}

export function SiteFooter() {
  return (
    <footer className="bg-navy text-white">
      <div className="px-6 md:px-16 py-14 grid md:grid-cols-4 gap-10">
        <div>
          <div className="bg-white inline-flex items-center gap-2 p-2 rounded">
            <div className="h-12 w-12 overflow-hidden shrink-0 flex items-center justify-center">
              <img 
                src={IMG.logo} 
                alt="Zayed Amer logo" 
                className="w-full h-full object-cover object-top scale-125 origin-top" 
              />
            </div>
            <div className="leading-tight">
              <div className="font-display font-extrabold text-navy text-base tracking-wide">ZAYED AMER</div>
              <div className="text-[9px] uppercase tracking-[0.15em] text-navy font-semibold">Contracting Establishment</div>
            </div>
          </div>
          <p className="mt-4 text-sm text-white/70 leading-relaxed">
            Delivering comprehensive contracting services across civil construction, equipment rental, manpower and material supply in Saudi Arabia.
          </p>
          <div className="flex gap-3 mt-5">
            <a href={CONTACT.social.whatsapp} aria-label="WhatsApp" className="w-9 h-9 rounded-full bg-white/10 hover:bg-orange flex items-center justify-center">
              <WhatsAppIcon className="w-4 h-4" />
            </a>
          </div>
        </div>

        <div>
          <h4 className="font-display font-bold text-lg mb-4">Quick Links</h4>
          <ul className="space-y-2 text-sm text-white/80">
            <li><Link to="/" className="hover:text-orange">Home</Link></li>
            <li><Link to="/about" className="hover:text-orange">About</Link></li>
            <li><Link to="/company-profile" className="hover:text-orange">Company Profile</Link></li>
            <li><Link to="/career" className="hover:text-orange">Career</Link></li>
            <li><Link to="/contact" className="hover:text-orange">Contact Us</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-display font-bold text-lg mb-4">Our Services</h4>
          <ul className="space-y-2 text-sm text-white/80">
            {SERVICES.map((s) => (
              <li key={s.to}><Link to={s.to} className="hover:text-orange">{s.label}</Link></li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-display font-bold text-lg mb-4">Get In Touch</h4>
          <ul className="space-y-3 text-sm text-white/80">
            <li className="flex gap-3"><Phone className="w-4 h-4 mt-0.5 text-orange shrink-0" /><a href={CONTACT.phoneHref} className="hover:text-orange">{CONTACT.phone}</a></li>
            <li className="flex gap-3"><Mail className="w-4 h-4 mt-0.5 text-orange shrink-0" /><a href={CONTACT.emailHref} className="hover:text-orange break-all">{CONTACT.email}</a></li>
            <li className="flex gap-3"><MapPin className="w-4 h-4 mt-0.5 text-orange shrink-0" /><span>{CONTACT.addressLines.join(", ")}</span></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10 px-6 md:px-16 py-5 text-xs text-white/60 text-center">
        © {new Date().getFullYear()} {COMPANY}. All rights reserved.
      </div>
    </footer>
  );
}
