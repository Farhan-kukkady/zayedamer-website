import { Link } from "@tanstack/react-router";
import { Facebook, Twitter, Linkedin, Instagram, Phone, Mail, MapPin } from "lucide-react";
import { CONTACT, COMPANY, Logo, SERVICES } from "./shared";

export function SiteFooter() {
  return (
    <footer className="bg-navy text-white">
      <div className="px-6 md:px-16 py-14 grid md:grid-cols-4 gap-10">
        <div>
          <div className="bg-white inline-block p-2 rounded">
            <Logo />
          </div>
          <p className="mt-4 text-sm text-white/70 leading-relaxed">
            Delivering comprehensive contracting services across civil construction, equipment rental, manpower and material supply in Saudi Arabia.
          </p>
          <div className="flex gap-3 mt-5">
            <a href={CONTACT.social.facebook} aria-label="Facebook" className="w-9 h-9 rounded-full bg-white/10 hover:bg-orange flex items-center justify-center"><Facebook className="w-4 h-4" /></a>
            <a href={CONTACT.social.twitter} aria-label="Twitter" className="w-9 h-9 rounded-full bg-white/10 hover:bg-orange flex items-center justify-center"><Twitter className="w-4 h-4" /></a>
            <a href={CONTACT.social.linkedin} aria-label="LinkedIn" className="w-9 h-9 rounded-full bg-white/10 hover:bg-orange flex items-center justify-center"><Linkedin className="w-4 h-4" /></a>
            <a href={CONTACT.social.instagram} aria-label="Instagram" className="w-9 h-9 rounded-full bg-white/10 hover:bg-orange flex items-center justify-center"><Instagram className="w-4 h-4" /></a>
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
