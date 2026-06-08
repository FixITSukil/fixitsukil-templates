import Link from "next/link";

const services = [
  {
    cat: "General & Preventive",
    color: "border-sky-200 bg-sky-50",
    badge: "bg-[#0284c7] text-white",
    items: [
      { s: "Comprehensive Exam", d: "Full oral health assessment including X-rays and cancer screening.", p: "From RM80" },
      { s: "Scale & Polish", d: "Professional cleaning to remove tartar and polish enamel.", p: "From RM80" },
      { s: "Fluoride Treatment", d: "Strengthens enamel and reduces cavity risk — ideal for children.", p: "From RM40" },
      { s: "Tooth Extractions", d: "Simple and surgical extractions performed with care and precision.", p: "From RM60" },
      { s: "Dental Fillings", d: "Tooth-coloured composite resin for a natural, lasting repair.", p: "From RM80" },
    ],
  },
  {
    cat: "Cosmetic Dentistry",
    color: "border-violet-200 bg-violet-50",
    badge: "bg-violet-600 text-white",
    items: [
      { s: "Teeth Whitening", d: "In-chair Zoom whitening or take-home kit for a noticeably brighter smile.", p: "From RM350" },
      { s: "Porcelain Veneers", d: "Ultra-thin custom shells to transform the shape, size, and colour of teeth.", p: "From RM700/tooth" },
      { s: "Dental Bonding", d: "Quick, cost-effective fix for chips, gaps, and discolouration.", p: "From RM200" },
      { s: "Smile Makeover", d: "A tailored plan combining multiple treatments for your ideal smile.", p: "POA" },
    ],
  },
  {
    cat: "Orthodontics",
    color: "border-emerald-200 bg-emerald-50",
    badge: "bg-emerald-600 text-white",
    items: [
      { s: "Metal Braces", d: "Traditional but highly effective — ideal for complex corrections.", p: "From RM3,500" },
      { s: "Ceramic Braces", d: "Tooth-coloured brackets that are less noticeable than metal.", p: "From RM5,000" },
      { s: "Clear Aligners", d: "Removable, nearly invisible aligners for comfortable straightening.", p: "From RM5,500" },
      { s: "Retainers", d: "Post-treatment retainers to maintain your new alignment.", p: "From RM300" },
    ],
  },
  {
    cat: "Restorative & Implants",
    color: "border-amber-200 bg-amber-50",
    badge: "bg-amber-600 text-white",
    items: [
      { s: "Dental Implants", d: "Titanium root replacement topped with a natural-looking crown.", p: "From RM3,500" },
      { s: "Porcelain Crowns", d: "Full coverage restoration for damaged or weakened teeth.", p: "From RM800" },
      { s: "Dental Bridges", d: "Fixed replacement for one or more missing teeth.", p: "From RM1,800" },
      { s: "Dentures", d: "Full or partial removable dentures crafted for comfort and appearance.", p: "From RM1,200" },
      { s: "Root Canal Therapy", d: "Pain-free treatment to save an infected tooth and relieve pain.", p: "From RM500" },
    ],
  },
];

export default function DentalServices() {
  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#0c4a6e] to-[#0284c7] py-20 sm:py-24">
        <div className="absolute inset-0 opacity-[0.05]" style={{ backgroundImage: "radial-gradient(circle at 1px 1px,#fff 1px,transparent 0)", backgroundSize: "30px 30px" }} />
        <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <span className="text-sm font-semibold uppercase tracking-widest text-sky-200">Our Services</span>
          <h1 className="mt-3 text-4xl font-bold text-white sm:text-5xl">Comprehensive dental services</h1>
          <p className="mt-4 max-w-2xl text-sky-100/80">Everything from routine check-ups to full smile transformations — delivered by experienced professionals in a comfortable, modern clinic.</p>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-6xl space-y-12 px-4 sm:px-6 lg:px-8">
          {services.map((cat) => (
            <div key={cat.cat} className={`rounded-3xl border p-8 sm:p-10 ${cat.color}`}>
              <span className={`inline-block rounded-full px-4 py-1.5 text-xs font-bold uppercase tracking-widest ${cat.badge}`}>{cat.cat}</span>
              <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {cat.items.map((item) => (
                  <div key={item.s} className="rounded-xl border border-white/60 bg-white p-6 shadow-sm">
                    <h3 className="font-bold text-slate-900">{item.s}</h3>
                    <p className="mt-2 text-sm text-slate-500">{item.d}</p>
                    <p className="mt-4 text-sm font-semibold text-[#0284c7]">{item.p}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
        <p className="mt-10 text-center text-sm text-slate-400 px-4">Prices are indicative. A full treatment plan and cost estimate will be provided after your consultation.</p>
      </section>

      {/* CTA */}
      <section className="bg-[#0284c7] py-16">
        <div className="mx-auto max-w-3xl px-4 text-center">
          <h2 className="text-2xl font-bold text-white sm:text-3xl">Have questions about a treatment?</h2>
          <p className="mt-3 text-sky-100">Our team is happy to explain your options before you commit to anything.</p>
          <Link href="/dental/contact" className="mt-6 inline-block rounded-full bg-white px-8 py-3.5 font-semibold text-[#0284c7] transition hover:bg-sky-50">Book a Consultation →</Link>
        </div>
      </section>
    </div>
  );
}
