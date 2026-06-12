import Link from "next/link";
import Image from "next/image";

const projects = [
  {
    cat: "Full Renovation",
    badge: "bg-[#1e293b] text-white",
    items: [
      { t: "Damansara Heights — 3-Bed Condo", loc: "Damansara Heights, KL", scope: "Full gut reno: layout, flooring, kitchen, bathrooms, electrical, painting.", dur: "8 weeks", budget: "RM120,000" , img: "/templates/reno-p1.jpg" },
      { t: "Mont Kiara — Luxury Penthouse", loc: "Mont Kiara, KL", scope: "Premium finishes, feature walls, designer kitchen, smart home integration.", dur: "12 weeks", budget: "RM280,000" , img: "/templates/reno-p2.jpg" },
      { t: "Subang Jaya — Terrace House", loc: "Subang Jaya, Selangor", scope: "Extension, new master bedroom, full repaint, landscaping.", dur: "10 weeks", budget: "RM95,000" , img: "/templates/reno-p3.jpg" },
    ],
  },
  {
    cat: "Kitchen & Bathroom",
    badge: "bg-amber-500 text-white",
    items: [
      { t: "Bangsar — Kitchen Overhaul", loc: "Bangsar, KL", scope: "Custom island cabinet, quartz countertop, new appliances, retiling.", dur: "3 weeks", budget: "RM42,000" , img: "/templates/reno-p4.jpg" },
      { t: "Petaling Jaya — Master Bathroom", loc: "PJ, Selangor", scope: "Walk-in shower, rain head fitting, vanity, mosaic feature tile.", dur: "2 weeks", budget: "RM28,000" , img: "/templates/reno-p5.jpg" },
      { t: "Ara Damansara — Twin Bathrooms", loc: "Ara Damansara, Selangor", scope: "Two bathrooms renovated simultaneously — full retile, fittings, vanity.", dur: "3 weeks", budget: "RM36,000" , img: "/templates/reno-p6.jpg" },
    ],
  },
  {
    cat: "Commercial & Office",
    badge: "bg-slate-600 text-white",
    items: [
      { t: "Menara X — Office Fit-Out", loc: "KLCC, KL", scope: "Open-plan workstations, meeting rooms, pantry, feature reception.", dur: "5 weeks", budget: "RM180,000" , img: "/templates/reno-p7.jpg" },
      { t: "SS2 — Retail Shopfront", loc: "SS2, PJ", scope: "Full shopfront redesign, new flooring, lighting, display fitting.", dur: "2 weeks", budget: "RM35,000" , img: "/templates/reno-p8.jpg" },
    ],
  },
  {
    cat: "Carpentry & Custom Work",
    badge: "bg-orange-600 text-white",
    items: [
      { t: "TTDI — Full Wardrobe Build", loc: "TTDI, KL", scope: "Floor-to-ceiling built-in wardrobe with internal organisers, mirror doors.", dur: "1 week", budget: "RM18,000" , img: "/templates/reno-p9.jpg" },
      { t: "Kota Damansara — Feature Wall", loc: "Kota Damansara, Selangor", scope: "Fluted panel feature wall with concealed lighting behind TV console.", dur: "3 days", budget: "RM6,500" , img: "/templates/reno-p10.jpg" },
    ],
  },
];

export default function RenovationPortfolio() {
  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden bg-[#0f172a] py-20 sm:py-24">
        <div className="absolute inset-0" style={{ backgroundImage: "linear-gradient(135deg, #0f172a 0%, #1e293b 60%)" }} />
        <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <span className="text-sm font-semibold uppercase tracking-widest text-[#f59e0b]">Portfolio</span>
          <h1 className="mt-3 text-4xl font-bold text-white sm:text-5xl">Our completed projects</h1>
          <p className="mt-4 max-w-2xl text-slate-400">A selection of residential and commercial projects across Kuala Lumpur and Selangor. Every project is delivered with the same standard: quality craftsmanship, clear communication, and a clean finish.</p>
        </div>
      </section>

      {/* Projects */}
      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-6xl space-y-16 px-4 sm:px-6 lg:px-8">
          {projects.map((group) => (
            <div key={group.cat}>
              <div className="flex items-center gap-4">
                <span className={`rounded px-3 py-1.5 text-xs font-bold uppercase tracking-widest ${group.badge}`}>{group.cat}</span>
                <div className="h-px flex-1 bg-slate-200" />
              </div>
              <div className="mt-6 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
                {group.items.map((item) => (
                  <div key={item.t} className="rounded-xl border border-slate-200 bg-white overflow-hidden shadow-sm transition-all hover:-translate-y-1 hover:shadow-md">
                    <div className="relative aspect-video overflow-hidden bg-slate-100">
                      <Image src={item.img} alt={item.t} fill sizes="(max-width: 640px) 100vw, 33vw" className="object-cover transition-transform duration-500 hover:scale-105" />
                    </div>
                    <div className="p-6">
                      <h3 className="font-bold text-slate-900">{item.t}</h3>
                      <p className="mt-1 text-xs text-slate-400">{item.loc}</p>
                      <p className="mt-3 text-sm text-slate-600">{item.scope}</p>
                      <div className="mt-4 flex gap-4 border-t border-slate-100 pt-4">
                        <div>
                          <p className="text-[10px] uppercase tracking-wide text-slate-400">Duration</p>
                          <p className="text-sm font-semibold text-slate-700">{item.dur}</p>
                        </div>
                        <div>
                          <p className="text-[10px] uppercase tracking-wide text-slate-400">Budget</p>
                          <p className="text-sm font-semibold text-[#f59e0b]">{item.budget}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#1e293b] py-16">
        <div className="mx-auto max-w-3xl px-4 text-center">
          <h2 className="text-2xl font-bold text-white sm:text-3xl">Have a project in mind?</h2>
          <p className="mt-3 text-slate-400">Let&apos;s discuss your vision and get you a no-obligation quote.</p>
          <Link href="/renovation/contact" className="mt-6 inline-block rounded-sm bg-[#f59e0b] px-8 py-3.5 font-semibold text-white transition hover:bg-[#d97706]">Request a Free Quote →</Link>
        </div>
      </section>
    </div>
  );
}
