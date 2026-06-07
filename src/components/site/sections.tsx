import { Phone, Mail, Globe, MapPin } from "lucide-react";
import { IMG, COMPANY, Logo, Vision2030, SectionTitle, EqList, CONTACT } from "./shared";

export function CoverSection() {
  return (
    <section className="relative min-h-[80vh] overflow-hidden bg-[#0B1B33]">
      <div className="absolute inset-0" style={{
        background: "radial-gradient(1200px 800px at 85% 20%, rgba(233,120,37,0.28), transparent 60%), radial-gradient(900px 700px at 5% 95%, rgba(233,120,37,0.18), transparent 60%), linear-gradient(135deg, #0B1B33 0%, #11264A 55%, #0B1B33 100%)",
      }} />
      <div className="absolute -left-56 -top-56 w-[520px] h-[520px] rounded-full pointer-events-none opacity-50"
           style={{ background: "radial-gradient(circle at 32% 30%, #FFC18A 0%, #E97825 55%, transparent 80%)", filter: "blur(10px)" }} />
      <div className="absolute left-[12%] -bottom-24 w-[240px] h-[240px] rounded-full pointer-events-none opacity-70"
           style={{ background: "radial-gradient(circle at 35% 30%, #FBD9B8 0%, #E97825 65%, #8A3D0C 100%)", boxShadow: "0 30px 70px rgba(233,120,37,0.4), inset -12px -20px 40px rgba(0,0,0,0.35)" }} />
      {/* Contrast vignette behind headline so text always reads */}
      <div className="absolute left-0 top-0 w-[65%] h-full pointer-events-none"
           style={{ background: "radial-gradient(ellipse at 25% 45%, rgba(11,27,51,0.65), transparent 70%)" }} />
      <div className="relative z-10 grid md:grid-cols-12 gap-6 min-h-[80vh] px-8 md:px-16 py-10">
        <div className="md:col-span-6 flex flex-col">
          <div className="mt-6 md:mt-14">
            <h1 className="font-display text-white leading-[0.95] text-5xl md:text-7xl" style={{ textShadow: "0 2px 24px rgba(0,0,0,0.55)" }}>
              <span className="font-light block">Creating</span>
              <span className="font-extrabold block">
                Foundations
                <span className="block h-[5px] w-[55%] bg-orange mt-2 rounded-full" style={{ boxShadow: "0 4px 18px rgba(233,120,37,0.6)" }} />
              </span>
              <span className="font-light block mt-3">For The</span>
              <span className="font-extrabold block">Future</span>
            </h1>
          </div>
          <div className="mt-auto pt-12">
            <div className="h-[2px] w-24 bg-orange mb-5" />
            <div className="text-xl md:text-2xl font-display font-extrabold text-white uppercase tracking-tight">{COMPANY}</div>
            <div className="mt-3 flex items-center gap-2 text-white/70 text-sm">
              <Globe className="w-4 h-4 text-orange" />
              <span>www.zayedamer.com</span>
            </div>
          </div>
        </div>
        <div className="md:col-span-6 relative flex flex-col">
          <div className="flex justify-end">
            <div className="text-right">
              <div className="text-white font-display font-extrabold text-lg tracking-wider">VISION <span className="text-orange">2030</span></div>
              <div className="text-[9px] uppercase tracking-widest text-white/70">Kingdom of Saudi Arabia</div>
            </div>
          </div>
          <div className="relative flex-1 mt-8 flex items-center justify-center">
            <div className="absolute w-[92%] aspect-square rounded-full pointer-events-none"
                 style={{ background: "conic-gradient(from 120deg, rgba(233,120,37,0), rgba(233,120,37,0.55), rgba(233,120,37,0))", filter: "blur(40px)" }} />
            <div className="relative w-[88%] aspect-square rounded-full overflow-hidden"
                 style={{ boxShadow: "0 50px 100px -15px rgba(0,0,0,0.65), 0 0 0 8px rgba(255,255,255,0.06), 0 0 0 18px rgba(233,120,37,0.18)" }}>
              <img src={IMG.hero} alt="Construction site" className="w-full h-full object-cover" />
              <div className="absolute inset-0" style={{ background: "radial-gradient(circle at 30% 20%, rgba(255,255,255,0.16), transparent 55%), linear-gradient(160deg, transparent 50%, rgba(11,27,51,0.6) 100%)" }} />
            </div>
            <div className="absolute bottom-4 left-0 px-5 py-4 rounded-2xl backdrop-blur-md border border-white/20"
                 style={{ background: "linear-gradient(135deg, rgba(255,255,255,0.2), rgba(255,255,255,0.06))", boxShadow: "0 20px 50px rgba(0,0,0,0.45)" }}>
              <div className="text-[10px] uppercase tracking-[0.3em] text-white/80">Based in</div>
              <div className="text-white font-display font-extrabold text-xl leading-none mt-1">Saudi Arabia</div>
            </div>
            <div className="absolute top-2 right-0 px-4 py-3 rounded-xl bg-orange text-white"
                 style={{ boxShadow: "0 25px 50px -10px rgba(233,120,37,0.65)" }}>
              <div className="text-[10px] uppercase tracking-widest">Trusted</div>
              <div className="font-display font-extrabold text-lg leading-none">Contractor</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function AboutSection({ showLogo = false }: { showLogo?: boolean }) {
  return (
    <section className="relative py-20 px-8 md:px-16 overflow-hidden">
      <div className="absolute -top-20 -right-20 w-[260px] h-[260px] bg-orange/15 rounded-full pointer-events-none" />
      <div className="absolute top-40 -right-32 w-[180px] h-[180px] bg-navy/10 rounded-full pointer-events-none" />
      {showLogo && (
        <header className="relative z-10 flex justify-between items-start mb-12"><Logo /></header>
      )}
      <div className="relative z-10 grid md:grid-cols-2 gap-10 items-start">
        <img src={IMG.about} alt="Industrial facility" className="w-full h-[600px] object-cover shadow-lg rounded-lg" />
        <div className="space-y-8">
          <div className="bg-orange p-8 text-white rounded-lg shadow-lg">
            <h2 className="display-huge text-5xl mb-4 text-white">ABOUT US</h2>
            <p className="leading-relaxed text-sm text-white">
              At {COMPANY}, we are dedicated to delivering comprehensive contracting services tailored to meet the unique needs of our clients. Our expertise spans across multiple sectors, including civil construction, equipment rental, and material supply. With a team of skilled professionals and a commitment to excellence, we strive to transform your visions into reality. We prioritize quality, safety, and customer satisfaction in every project we undertake, making us a reliable partner in your construction journey.
            </p>
          </div>
          <div>
            <h3 className="text-navy font-display font-bold text-3xl mb-3">Our Vision</h3>
            <p className="text-sm leading-relaxed text-gray-700">
              To be a trusted leader in the construction industry, recognized for delivering innovative, sustainable, and high-quality projects that exceed client expectations. We aim to shape the future of construction by setting new standards in safety, craftsmanship, and environmental responsibility, contributing to the growth and development of the communities we serve.
            </p>
          </div>
          <div>
            <h3 className="text-navy font-display font-bold text-3xl mb-3">Our Mission</h3>
            <p className="text-sm leading-relaxed text-gray-700">
              Our mission is to provide exceptional construction services that combine expertise, innovation, and integrity. We are committed to completing every project on time, within budget, and to the highest standards of quality and safety. By fostering strong partnerships with clients, suppliers, and employees, we strive to deliver sustainable solutions that add lasting value and positively impact the built environment.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export function EquipmentRentalSection() {
  return (
    <section className="relative py-20 px-8 md:px-16 bg-white overflow-hidden">
      <div className="grid md:grid-cols-2 gap-10 items-start">
        <div>
          <SectionTitle light="EQUIPMENT" bold="RENTAL" />
          <p className="mt-6 text-sm leading-relaxed text-gray-700 max-w-md">
            {COMPANY} offers a wide range of equipment rental services designed to support your construction projects efficiently. Our fleet includes state-of-the-art machinery and tools that cater to various requirements, from heavy machinery to specialized equipment. We ensure that our rental equipment is well-maintained and readily available, providing flexibility and convenience to your operations. Partner with us for reliable equipment solutions that enhance productivity and drive project success.
          </p>
        </div>
        <div className="relative">
          <img src={IMG.excavator} alt="Hyundai Excavator" className="relative w-full object-contain rounded-lg" />
        </div>
      </div>
      <div className="grid md:grid-cols-3 gap-10 mt-16 items-start">
        <div className="space-y-8">
          <EqList title={["Lifting", "Equipment"]} items={["Hydraulic Crane","Crawler Crane","Boom Truck","Forklift","Articulated and Telescopic Man lift","Mobile Crane","Tower Crane"]} />
          <EqList title={["Transportation"]} items={["Flat Bed Trailer","Hydraulic Low Bed Trailer","55 Seated Bus","33 Seated Coaster","15 Seated Hi Ace","Pick Up, SUV's & Sedan"]} />
        </div>
        <div className="space-y-8">
          <EqList title={["Earth Moving", "Equipment"]} items={["Bulldozer","Grader","Wheel Loaders","Excavator","Rock Breaker","Dump Truck","Back Hoe","Roller Compactor"]} />
          <EqList title={["Power &", "Portable Machinery"]} items={["Air Compressor","Tower Lights","Welding Machine","Power Generator"]} />
        </div>
        <div className="grid grid-cols-1 gap-4">
          <img src={IMG.loader} alt="Wheel Loader" className="w-full h-44 object-cover rounded-lg shadow" />
          <img src={IMG.forklift} alt="Forklift" className="w-full h-44 object-cover rounded-lg shadow" />
          <img src={IMG.tower} alt="Tower Crane" className="w-full h-44 object-cover rounded-lg shadow" />
        </div>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-10">
        <img src={IMG.jcb} alt="JCB" className="w-full h-44 object-cover rounded-lg shadow" />
        <img src={IMG.crane} alt="Crane" className="w-full h-44 object-cover rounded-lg shadow" />
        <img src={IMG.grader} alt="Grader" className="w-full h-44 object-cover rounded-lg shadow" />
        <img src={IMG.telehandler} alt="Telehandler" className="w-full h-44 object-cover rounded-lg shadow" />
      </div>
    </section>
  );
}

export function ManpowerSection() {
  return (
    <section className="relative py-20 px-8 md:px-16 overflow-hidden">
      <div className="grid md:grid-cols-2 gap-10">
        <div>
          <SectionTitle light="MANPOWER" bold="SUPPLY" />
          <p className="mt-6 text-sm leading-relaxed text-gray-700 max-w-md">
            Finding the right talent is crucial for any project. Our manpower supply services provide you with skilled labor and professionals across various disciplines to ensure your projects run smoothly. We specialize in sourcing qualified personnel who meet industry standards and have the experience to deliver quality results. Our rigorous recruitment process ensures that you have the right people at the right time, enabling you to focus on your project goals with confidence.
          </p>
        </div>
        <div className="relative flex items-center justify-center">
          <div className="absolute inset-0 rounded-full border-[10px] border-orange/70" style={{ clipPath: "inset(0 0 0 30%)" }} />
          <div className="absolute inset-4 rounded-full border-[6px] border-navy/80" style={{ clipPath: "inset(0 30% 0 0)" }} />
          <img src={IMG.workers} alt="Workers" className="w-72 h-72 md:w-96 md:h-96 object-cover rounded-full" />
        </div>
      </div>
      <div className="grid md:grid-cols-2 gap-12 mt-16">
        <div>
          <h3 className="text-navy font-display font-bold text-3xl mb-6">Schedule of Manpower</h3>
          <ul className="grid grid-cols-1 gap-2 text-sm text-gray-700">
            {["Civil Engineer","Planning Engineer","Piping Engineer","Rotating Equipment Eng","Site Supervisor","Officers","Executive Secretaries","Documents Controller","Computer Programmers","Schedulers","Mechanical Engineer","Electrical Engineer","Inspector","Project Superintendent","Safety Engineers","Auto-Cad Operator","Accountant","Computer Operator","System Administrators","Project Controllers","Riggers","Operators (Crane, Forklift)","Skilled Labours","Semi-skilled Labours"].map(i => (
              <li key={i} className="border-b border-gray-200 pb-1.5">• {i}</li>
            ))}
          </ul>
        </div>
        <div className="grid grid-cols-2 gap-3">
          {IMG.mp.map((s, i) => <img key={i} src={s} alt="" className="w-full h-40 object-cover" />)}
        </div>
      </div>
    </section>
  );
}

export function CivilSection() {
  return (
    <section className="relative py-20 px-8 md:px-16 bg-white overflow-hidden">
      <div className="grid md:grid-cols-2 gap-10">
        <div>
          <SectionTitle light="CIVIL" bold="CONSTRUCTION" />
          <p className="mt-6 text-sm leading-relaxed text-gray-700 max-w-md">
            Our civil construction services are designed to deliver projects that meet the highest standards of quality and safety. With a skilled team and extensive industry experience, we handle various projects, including residential, commercial, and industrial construction. Our focus is on efficiency, sustainability, and meeting project timelines while ensuring that we adhere to all regulatory requirements.
          </p>
          <div className="mt-8 bg-orange text-white p-6 max-w-md grid grid-cols-2 gap-x-6 gap-y-2 text-sm">
            {["Surveying","Pipe Rack","Earthwork","Warehouse","Foundation","Plant Road","Super Structure","Pavement","Industrial Building","Landscaping Work","Architectural Finish","Asphalt"].map(i => (
              <div key={i} className="border-b border-white/40 py-1">• {i}</div>
            ))}
          </div>
        </div>
        <div>
          <img src={IMG.cv1} alt="" className="w-full h-72 object-cover" />
          <div className="grid grid-cols-2 gap-3 mt-4">
            {[IMG.cv2, IMG.cv3, IMG.cv4, IMG.cv5, IMG.cv6, IMG.cv7].map((s, i) => (
              <img key={i} src={s} alt="" className="w-full h-32 object-cover" />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export function MaterialSection() {
  return (
    <section className="relative py-20 px-8 md:px-16 overflow-hidden bg-white">
      <div className="grid md:grid-cols-2 gap-10">
        <div>
          <SectionTitle light="MATERIAL" bold="SUPPLY" />
          <p className="mt-6 text-sm leading-relaxed text-gray-700 max-w-md">
            {COMPANY} is your one-stop solution for all material supply needs. We offer a vast selection of high-quality construction materials, sourced from reputable suppliers. Whether you require aggregates, concrete, or specialized construction materials, we ensure timely delivery to keep your project on schedule. Our commitment to quality and reliability means you can trust us to supply the materials needed for successful project execution.
          </p>
          <div className="mt-8 grid grid-cols-3 gap-4 items-center">
            <img src={IMG.ms_pipes} alt="Pipes" className="object-cover h-32 w-full rounded" />
            <img src={IMG.ms_flanges} alt="Flanges" className="object-cover h-32 w-full rounded" />
            <img src={IMG.ms_valves} alt="Valves" className="object-cover h-32 w-full rounded" />
          </div>
        </div>
        <div className="bg-orange text-white p-8">
          <h3 className="font-display font-bold text-xl mb-4 uppercase">Our Trading Services Includes:</h3>
          <ul className="grid grid-cols-1 gap-1 text-sm">
            {["Safety equipments","Pipes and fittings","Flanges","Structural Steel","Scaffolding Materials","Building materials","Machineries","Adhesives","Welding accessories","Electrical & plumbing parts","Electrical Cables","Analyzers."].map(i => <li key={i}>• {i}</li>)}
          </ul>
          <h4 className="font-display font-bold text-lg mt-6 mb-2">VALVES</h4>
          <ul className="grid grid-cols-2 gap-1 text-sm">
            {["Gate Valves","Globe Valves","Check Valves","Forged Valves"].map(i => <li key={i}>• {i}</li>)}
          </ul>
        </div>
      </div>
    </section>
  );
}

export function FencingSection() {
  return (
    <section className="relative py-20 px-8 md:px-16 bg-white">
      <SectionTitle light="FENCING" bold="WORKS" />
      <p className="mt-4 text-sm leading-relaxed text-gray-700 max-w-3xl">
        In addition to our core construction services, we specialize in fencing works tailored to enhance security and define property boundaries. Our fencing solutions are customizable, offering a range of materials and designs to suit your needs while ensuring durability and aesthetic appeal.
      </p>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mt-8">
        <img src={IMG.ms_scaffold} alt="Scaffolding" className="w-full h-56 object-cover" />
        <img src={IMG.fence1} alt="Fencing" className="w-full h-56 object-cover" />
        <img src={IMG.fence2} alt="Fencing" className="w-full h-56 object-cover" />
        <img src={IMG.fence3} alt="Fencing" className="w-full h-56 object-cover" />
      </div>
    </section>
  );
}

export function ScrapSection() {
  return (
    <section className="relative py-20 px-8 md:px-16 bg-white">
      <div className="grid md:grid-cols-2 gap-10 items-start">
        <div>
          <SectionTitle light="SCRAP" bold="MATERIAL" />
          <p className="mt-6 text-sm leading-relaxed text-gray-700 max-w-md">
            {COMPANY} is committed to promoting sustainability through responsible waste management. Our scrap material services involve the collection, sorting, and recycling of scrap materials from construction sites. We prioritize eco-friendly practices and ensure that all scrap is processed according to industry regulations.
          </p>
          <img src={IMG.scrap2} alt="" className="mt-8 w-full h-72 object-cover" />
        </div>
        <div>
          <img src={IMG.scrap1} alt="" className="w-full h-72 object-cover" />
          <div className="grid grid-cols-2 gap-3 mt-4">
            <img src={IMG.scrap3} alt="" className="h-40 w-full object-cover" />
            <img src={IMG.scrap4} alt="" className="h-40 w-full object-cover" />
          </div>
        </div>
      </div>
    </section>
  );
}

export function DisposalSection() {
  return (
    <section className="relative py-20 px-8 md:px-16 bg-white">
      <div className="grid md:grid-cols-2 gap-10 items-start">
        <img src={IMG.scrap5} alt="Disposal" className="w-full h-96 object-cover" />
        <div>
          <SectionTitle light="DISPOSAL" bold="PRODUCTS" />
          <p className="mt-6 text-sm leading-relaxed text-gray-700 max-w-md">
            We also offer disposal products and services designed to manage construction waste effectively. Our solutions help you maintain a clean and safe work environment while complying with local regulations. Trust us to handle your disposal needs efficiently, allowing you to focus on your core project activities.
          </p>
          <img src={IMG.scrap6} alt="Disposal" className="mt-6 w-full h-56 object-cover" />
        </div>
      </div>
    </section>
  );
}

export function ContactSection() {
  return (
    <section className="relative min-h-screen overflow-hidden text-white">
      <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${IMG.contact_bg})` }} />
      <div className="absolute inset-0 bg-navy/70" />
      <div className="absolute top-0 left-0 w-1/3 h-full bg-orange" style={{ clipPath: "polygon(0 0, 100% 0, 60% 100%, 0 100%)" }} />
      <div className="absolute top-0 right-0 w-1/2 h-1/3 bg-orange" style={{ clipPath: "polygon(40% 0, 100% 0, 100% 100%, 0 100%)" }} />
      <div className="absolute bottom-0 right-0 w-2/3 h-1/2 bg-orange" style={{ clipPath: "polygon(20% 0, 100% 0, 100% 100%, 0 100%)" }} />
      <div className="absolute bottom-0 right-0 w-1/2 h-1/4 bg-navy" style={{ clipPath: "polygon(15% 0, 100% 0, 100% 100%, 0 100%)" }} />

      <div className="relative z-10 px-8 md:px-16 py-12 flex flex-col min-h-screen">
        <header className="flex items-start justify-between">
          <Vision2030 />
        </header>
        <div className="mt-16 max-w-md">
          <p className="font-display text-5xl md:text-6xl leading-[0.95]">
            <span className="font-light">Building</span><br />
            <span className="font-extrabold">the Future</span><br />
            <span className="font-light">with Vision</span><br />
            <span className="font-extrabold">& Integrity</span>
          </p>
        </div>
        <div className="mt-auto">
          <div className="text-3xl md:text-5xl font-display font-extrabold uppercase tracking-tight">{COMPANY}</div>
          <div className="mt-10 grid md:grid-cols-2 gap-4 max-w-2xl text-sm">
            <div className="text-xs uppercase tracking-[0.3em] font-bold mb-2 md:col-span-2">Contact us for expert industrial solutions.</div>
            <div className="flex items-start gap-3"><Phone className="w-5 h-5 mt-0.5 shrink-0" /><a href={CONTACT.phoneHref} className="hover:text-white/80">{CONTACT.phone}</a></div>
            <div className="flex items-start gap-3"><Mail className="w-5 h-5 mt-0.5 shrink-0" /><a href={CONTACT.emailHref} className="hover:text-white/80">{CONTACT.email}</a></div>
            <div className="flex items-start gap-3"><Globe className="w-5 h-5 mt-0.5 shrink-0" /><div>www.zayedamer.com</div></div>
            <div className="flex items-start gap-3"><MapPin className="w-5 h-5 mt-0.5 shrink-0" /><div>{CONTACT.addressLines.join(", ")}</div></div>
          </div>
        </div>
      </div>
    </section>
  );
}
