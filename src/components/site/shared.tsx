import logoAsset from "@/assets/logo.png.asset.json";
import heroAsset from "@/assets/img/cv1.jpg.asset.json";
import aboutAsset from "@/assets/img/about.jpg.asset.json";
import jcbAsset from "@/assets/img/jcb.jpg.asset.json";
import craneAsset from "@/assets/img/crane.jpg.asset.json";
import forkliftAsset from "@/assets/img/forklift.jpg.asset.json";
import loaderAsset from "@/assets/img/loader.jpg.asset.json";
import excavatorAsset from "@/assets/img/excavator.jpg.asset.json";
import graderAsset from "@/assets/img/grader.jpg.asset.json";
import towerAsset from "@/assets/img/tower.jpg.asset.json";
import telehandlerAsset from "@/assets/img/telehandler.jpg.asset.json";
import workersAsset from "@/assets/img/workers.jpg.asset.json";
import eng1 from "@/assets/img/eng1.jpg.asset.json";
import eng2 from "@/assets/img/eng2.jpg.asset.json";
import eng3 from "@/assets/img/eng3.jpg.asset.json";
import eng4 from "@/assets/img/eng4.jpg.asset.json";
import eng5 from "@/assets/img/eng5.jpg.asset.json";
import eng6 from "@/assets/img/eng6.jpg.asset.json";
import eng7 from "@/assets/img/eng7.jpg.asset.json";
import cv1 from "@/assets/img/cv1.jpg.asset.json";
import cv2 from "@/assets/img/cv2.jpg.asset.json";
import cv3 from "@/assets/img/cv3.jpg.asset.json";
import cv4 from "@/assets/img/cv4.jpg.asset.json";
import cv5 from "@/assets/img/cv5.jpg.asset.json";
import cv6 from "@/assets/img/cv6.jpg.asset.json";
import cv7 from "@/assets/img/cv7.jpg.asset.json";
import msPipes from "@/assets/img/ms_pipes.jpg.asset.json";
import msFlanges from "@/assets/img/ms_flanges.jpg.asset.json";
import msValves from "@/assets/img/ms_valves.jpg.asset.json";
import msScaffold from "@/assets/img/ms_scaffold.jpg.asset.json";
import fence1 from "@/assets/img/fence1.jpg.asset.json";
import fence2 from "@/assets/img/fence2.jpg.asset.json";
import fence3 from "@/assets/img/fence3.jpg.asset.json";
import fence4 from "@/assets/img/fence4.jpg.asset.json";
import scrap1 from "@/assets/img/scrap1.jpg.asset.json";
import scrap2 from "@/assets/img/scrap2.jpg.asset.json";
import scrap3 from "@/assets/img/scrap3.jpg.asset.json";
import scrap4 from "@/assets/img/scrap4.jpg.asset.json";
import scrap5 from "@/assets/img/scrap5.jpg.asset.json";
import contactBg from "@/assets/img/contact_bg.jpg.asset.json";
import heroContact from "@/assets/img/hero_contact.jpg.asset.json";
import heroCareer from "@/assets/img/hero_career.jpg.asset.json";
import heroCompany from "@/assets/img/hero_company.jpg.asset.json";
import heroAbout from "@/assets/img/hero_about.jpg.asset.json";
import heroServices from "@/assets/img/hero_services.jpg.asset.json";
import heroEquipment from "@/assets/img/hero_equipment.jpg.asset.json";
import heroManpower from "@/assets/img/hero_manpower.jpg.asset.json";
import heroMaterial from "@/assets/img/hero_material.jpg.asset.json";
import heroCivil from "@/assets/img/hero_civil.jpg.asset.json";
import heroFencing from "@/assets/img/hero_fencing.jpg.asset.json";
import heroScrap from "@/assets/img/hero_scrap.jpg.asset.json";
import heroDisposal from "@/assets/img/hero_disposal.jpg.asset.json";

export const IMG = {
  logo: logoAsset.url,
  hero: heroAsset.url,
  about: aboutAsset.url,
  jcb: jcbAsset.url,
  crane: craneAsset.url,
  excavator: excavatorAsset.url,
  loader: loaderAsset.url,
  forklift: forkliftAsset.url,
  grader: graderAsset.url,
  telehandler: telehandlerAsset.url,
  tower: towerAsset.url,
  workers: workersAsset.url,
  mp: [eng1.url, eng2.url, eng3.url, eng4.url, eng5.url, eng6.url, eng7.url],
  cv1: cv1.url, cv2: cv2.url, cv3: cv3.url, cv4: cv4.url, cv5: cv5.url, cv6: cv6.url, cv7: cv7.url,
  ms_pipes: msPipes.url, ms_flanges: msFlanges.url, ms_valves: msValves.url, ms_scaffold: msScaffold.url,
  fence1: fence1.url, fence2: fence2.url, fence3: fence3.url, fence4: fence4.url,
  scrap1: scrap1.url, scrap2: scrap2.url, scrap3: scrap3.url, scrap4: scrap4.url, scrap5: scrap5.url, scrap6: scrap2.url,
  contact_bg: contactBg.url,
  hero_contact: heroContact.url,
  hero_career: heroCareer.url,
  hero_company: heroCompany.url,
  hero_about: heroAbout.url,
  hero_services: heroServices.url,
  hero_equipment: heroEquipment.url,
  hero_manpower: heroManpower.url,
  hero_material: heroMaterial.url,
  hero_civil: heroCivil.url,
  hero_fencing: heroFencing.url,
  hero_scrap: heroScrap.url,
  hero_disposal: heroDisposal.url,
};


export const COMPANY = "Zayed Amer Contracting Establishment";

export const CONTACT = {
  phone: "+966 54 949 4415",
  phoneHref: "tel:+966549494415",
  whatsapp: "https://wa.me/966549494415",
  email: "Zayedamer242@gmail.com",
  emailHref: "mailto:Zayedamer242@gmail.com",
  addressLines: ["Zayed Amer Cont. Establishment", "Rastanurah–Dammam", "Saudi Arabia"],
  social: {
    facebook: "#",
    twitter: "#",
    linkedin: "#",
    instagram: "#",
    whatsapp: "https://wa.me/966549494415",
  },
};

export function Logo({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <img src={IMG.logo} alt="Zayed Amer logo" className="h-12 w-12 object-contain shrink-0" />
      <div className="leading-tight">
        <div className="font-display font-extrabold text-navy text-xl md:text-2xl tracking-wide">ZAYED AMER</div>
        <div className="text-[10px] md:text-xs uppercase tracking-[0.2em] text-navy font-semibold mt-0.5 whitespace-nowrap">Contracting Establishment</div>
      </div>
    </div>
  );
}

export function Vision2030() {
  return (
    <div className="flex flex-col items-end leading-tight">
      <div className="text-navy font-display font-extrabold text-lg tracking-wider">VISION <span className="text-orange">2030</span></div>
      <div className="text-[9px] uppercase tracking-widest text-navy/80">Kingdom of Saudi Arabia</div>
    </div>
  );
}

export function SectionTitle({ light, bold, color = "navy" }: { light: string; bold: string; color?: "navy" | "white" }) {
  const c = color === "white" ? "text-white" : "text-navy";
  return (
    <h2 className={`display-huge ${c} text-4xl sm:text-5xl md:text-6xl break-words max-w-full`}>
      <span className="block text-orange font-semibold">{light}</span>
      <span className="block">{bold}</span>
    </h2>
  );
}

export function EqList({ title, items }: { title: string[]; items: string[] }) {
  return (
    <div>
      <h3 className="text-navy font-display font-bold text-2xl leading-tight mb-3">
        {title.map((t, i) => <span key={i} className="block">{t}</span>)}
      </h3>
      <ul className="space-y-1 text-sm text-gray-700">
        {items.map(i => <li key={i}>• {i}</li>)}
      </ul>
    </div>
  );
}

export const SERVICES = [
  { to: "/services/equipment-rental", label: "Equipment Rental" },
  { to: "/services/manpower-supply", label: "Manpower Supply" },
  { to: "/services/material-supply", label: "Material Supply" },
  { to: "/services/civil-construction", label: "Civil Construction" },
  { to: "/services/fencing-works", label: "Fencing Works" },
  { to: "/services/scrap-material", label: "Scrap Material" },
  { to: "/services/disposal-product", label: "Disposal Product" },
] as const;

export function PageHero({ title, crumb, image, kicker }: { title: string; crumb?: string; image?: string; kicker?: string }) {
  const bg = image ?? IMG.about;
  const words = title.trim().split(/\s+/);
  const firstWord = words[0];
  const restWords = words.slice(1).join(" ");
  return (
    <section className="relative h-[380px] md:h-[480px] overflow-hidden">
      <style>{`@keyframes pageHeroZoom{0%{transform:scale(1.05)}100%{transform:scale(1.18)}}`}</style>
      <img
        src={bg}
        alt=""
        className="absolute inset-0 w-full h-full object-cover"
        style={{ animation: "pageHeroZoom 16s ease-out forwards" }}
      />
      {/* Layered overlay: dark navy gradient + vignette */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(105deg, rgba(11,27,51,0.92) 0%, rgba(11,27,51,0.78) 35%, rgba(11,27,51,0.35) 70%, rgba(11,27,51,0.15) 100%)",
        }}
      />
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: "radial-gradient(ellipse at 80% 100%, rgba(0,0,0,0.45), transparent 60%)" }}
      />
      {/* Decorative orange orb */}
      <div
        className="absolute -bottom-32 -right-24 w-[420px] h-[420px] rounded-full pointer-events-none opacity-70"
        style={{
          background:
            "radial-gradient(circle at 35% 30%, rgba(255,193,138,0.55) 0%, rgba(233,120,37,0.45) 45%, rgba(138,61,12,0) 75%)",
          filter: "blur(20px)",
        }}
      />
      {/* Top fine grid texture */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.06]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.6) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      <div className="relative z-10 h-full px-6 md:px-16 max-w-7xl mx-auto flex flex-col justify-center">
        {/* Orange accent bar */}
        <div className="h-[2px] w-16 bg-orange mb-5" />
        {kicker && (
          <div className="text-orange text-[11px] md:text-xs font-bold uppercase tracking-[0.35em] mb-3">
            {kicker}
          </div>
        )}
        <h1 className="display-huge text-white text-5xl md:text-7xl leading-[0.95] tracking-tight">
          <span className="font-light">{firstWord}</span>
          {restWords && (
            <>
              {" "}
              <span
                className="font-extrabold text-orange"
                style={{ textShadow: "0 6px 30px rgba(233,120,37,0.45)" }}
              >
                {restWords}
              </span>
            </>
          )}
        </h1>
        {/* Breadcrumb pill */}
        <div className="mt-6 inline-flex items-center self-start gap-2 px-4 py-2 rounded-full border border-white/20 backdrop-blur-md bg-white/10 text-white/90 text-xs md:text-sm">
          <a href="/" className="hover:text-orange transition-colors">Home</a>
          <span className="text-orange font-bold">/</span>
          <span className="font-semibold text-white">{crumb ?? title}</span>
        </div>
      </div>

      {/* Bottom fade to blend with next section */}
      <div className="absolute bottom-0 left-0 right-0 h-12 pointer-events-none"
           style={{ background: "linear-gradient(to bottom, transparent, rgba(255,255,255,0.85))" }} />
    </section>
  );
}

