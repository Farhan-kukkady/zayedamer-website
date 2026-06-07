import { Link } from "@tanstack/react-router";
import { Facebook, Twitter, Linkedin, Instagram, Phone, Mail, Menu, X, ChevronDown } from "lucide-react";
import { useState } from "react";
import { CONTACT, Logo, SERVICES } from "./shared";

function WhatsAppIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden="true">
      <path d="M20.52 3.48A11.78 11.78 0 0 0 12.04 0C5.5 0 .2 5.3.2 11.84a11.7 11.7 0 0 0 1.6 5.92L0 24l6.4-1.68a11.83 11.83 0 0 0 5.64 1.44h.01c6.54 0 11.84-5.3 11.84-11.84 0-3.16-1.23-6.13-3.37-8.44ZM12.05 21.6h-.01a9.74 9.74 0 0 1-4.96-1.36l-.36-.21-3.8 1 1.01-3.71-.23-.38a9.73 9.73 0 0 1-1.5-5.1c0-5.39 4.39-9.78 9.79-9.78a9.73 9.73 0 0 1 9.78 9.79c0 5.4-4.39 9.75-9.79 9.75Zm5.36-7.3c-.3-.15-1.74-.86-2-.96-.27-.1-.47-.15-.66.15-.2.3-.76.96-.93 1.16-.17.2-.34.22-.63.07-.3-.15-1.25-.46-2.38-1.47-.88-.78-1.47-1.74-1.65-2.03-.17-.3-.02-.46.13-.6.13-.13.3-.34.45-.51.15-.17.2-.3.3-.5.1-.2.05-.38-.02-.53-.08-.15-.66-1.6-.91-2.18-.24-.58-.49-.5-.66-.5l-.57-.01c-.2 0-.53.07-.8.37s-1.06 1.03-1.06 2.52 1.08 2.92 1.23 3.12c.15.2 2.13 3.25 5.16 4.56.72.31 1.28.5 1.72.64.72.23 1.37.2 1.89.12.58-.09 1.74-.71 1.99-1.4.25-.7.25-1.28.17-1.4-.08-.13-.27-.2-.57-.35Z"/>
    </svg>
  );
}

const NAV = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/company-profile", label: "Company Profile" },
  { to: "/career", label: "Career" },
  { to: "/contact", label: "Contact Us" },
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [mobileServices, setMobileServices] = useState(false);

  return (
    <header className="w-full bg-white sticky top-0 z-50 shadow-sm">
      {/* Top bar */}
      <div className="border-b border-gray-200">
        <div className="flex items-center justify-between px-4 md:px-10 py-2 text-sm">
          <div className="flex items-center gap-3 text-navy">
            <a href={CONTACT.social.facebook} aria-label="Facebook" className="hover:text-orange"><Facebook className="w-4 h-4" /></a>
            <a href={CONTACT.social.twitter} aria-label="Twitter" className="hover:text-orange"><Twitter className="w-4 h-4" /></a>
            <a href={CONTACT.social.linkedin} aria-label="LinkedIn" className="hover:text-orange"><Linkedin className="w-4 h-4" /></a>
            <a href={CONTACT.social.instagram} aria-label="Instagram" className="hover:text-orange"><Instagram className="w-4 h-4" /></a>
            <a href={CONTACT.social.whatsapp} aria-label="WhatsApp" className="hover:text-orange"><WhatsAppIcon className="w-4 h-4" /></a>
          </div>
          <div className="hidden md:flex items-center gap-2 text-navy">
            <Mail className="w-4 h-4 text-orange" />
            <span>Email us: <a href={CONTACT.emailHref} className="font-semibold hover:text-orange">{CONTACT.email}</a></span>
          </div>
        </div>
      </div>

      {/* Main bar */}
      <div className="flex items-stretch justify-between px-4 md:px-10">
        <Link to="/" className="flex items-center py-3">
          <Logo />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-7">
          {NAV.slice(0, 2).map((n) => (
            <Link key={n.to} to={n.to} className="text-navy font-semibold hover:text-orange transition-colors" activeOptions={{ exact: true }} activeProps={{ className: "text-orange" }}>
              {n.label}
            </Link>
          ))}

          {/* Services dropdown */}
          <div className="relative group">
            <button className="text-navy font-semibold hover:text-orange transition-colors flex items-center gap-1">
              Services <ChevronDown className="w-4 h-4" />
            </button>
            <div className="absolute left-1/2 -translate-x-1/2 top-full pt-3 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all min-w-[240px]">
              <div className="bg-navy text-white shadow-xl">
                {SERVICES.map((s) => (
                  <Link key={s.to} to={s.to} className="block px-6 py-3 border-b border-white/10 hover:text-orange font-semibold text-sm" activeProps={{ className: "text-orange" }}>
                    {s.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {NAV.slice(2).map((n) => (
            <Link key={n.to} to={n.to} className="text-navy font-semibold hover:text-orange transition-colors" activeProps={{ className: "text-orange" }}>
              {n.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-stretch gap-4">
          <div className="hidden md:flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-orange/10 flex items-center justify-center">
              <Phone className="w-5 h-5 text-orange" />
            </div>
            <a href={CONTACT.phoneHref} className="text-navy font-bold whitespace-nowrap hover:text-orange">{CONTACT.phone}</a>
          </div>
          <Link to="/contact" className="hidden md:flex items-center px-6 bg-navy text-white font-bold tracking-wider hover:bg-orange transition-colors">
            GET A QUOTE
          </Link>
          <button className="lg:hidden p-2 text-navy" onClick={() => setOpen(!open)} aria-label="Menu">
            {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="lg:hidden border-t border-gray-200 bg-white px-4 py-4 space-y-2">
          {NAV.slice(0, 2).map((n) => (
            <Link key={n.to} to={n.to} onClick={() => setOpen(false)} className="block py-2 text-navy font-semibold" activeProps={{ className: "text-orange" }}>
              {n.label}
            </Link>
          ))}
          <button onClick={() => setMobileServices(!mobileServices)} className="w-full flex justify-between items-center py-2 text-navy font-semibold">
            Services <ChevronDown className={`w-4 h-4 transition-transform ${mobileServices ? "rotate-180" : ""}`} />
          </button>
          {mobileServices && (
            <div className="pl-4 space-y-1 border-l-2 border-orange">
              {SERVICES.map((s) => (
                <Link key={s.to} to={s.to} onClick={() => setOpen(false)} className="block py-1.5 text-sm text-navy/80" activeProps={{ className: "text-orange" }}>
                  {s.label}
                </Link>
              ))}
            </div>
          )}
          {NAV.slice(2).map((n) => (
            <Link key={n.to} to={n.to} onClick={() => setOpen(false)} className="block py-2 text-navy font-semibold" activeProps={{ className: "text-orange" }}>
              {n.label}
            </Link>
          ))}
          <a href={CONTACT.phoneHref} className="block pt-3 text-navy font-bold">{CONTACT.phone}</a>
          <Link to="/contact" onClick={() => setOpen(false)} className="block mt-3 px-6 py-3 bg-navy text-white text-center font-bold">GET A QUOTE</Link>
        </div>
      )}
    </header>
  );
}

export function WhatsAppFloat() {
  return (
    <a href={CONTACT.social.whatsapp} target="_blank" rel="noopener noreferrer" aria-label="Chat on WhatsApp"
      className="fixed bottom-6 right-6 z-40 w-14 h-14 rounded-full bg-[#25D366] text-white flex items-center justify-center shadow-lg hover:scale-110 transition-transform">
      <WhatsAppIcon className="w-7 h-7" />
    </a>
  );
}
