import Link from "next/link";

const services = [
  { t: "Full Home Renovation", d: "Complete interior transformation from layout changes to finishing touches." },
  { t: "Kitchen & Bathroom", d: "Modern cabinetry, tiling, plumbing, and fitting — done right." },
  { t: "Carpentry & Joinery", d: "Custom built-ins, wardrobes, feature walls, and bespoke furniture." },
  { t: "Painting & Plastering", d: "Wall preparation, skim coating, and premium interior/exterior finishes." },
  { t: "Flooring", d: "Vinyl, parquet, tile, and epoxy — supply and installation included." },
  { t: "Electrical & Plumbing", d: "Wiring upgrades, lighting design, pipe rerouting — all licensed work." },
];

const projects = [
  { t: "Damansara — 3-Bedroom Condo Reno", cat: "Full Renovation", dur: "6 weeks" },
  { t: "Petaling Jaya — Office Fit-Out", cat: "Commercial", dur: "4 weeks" },
  { t: "Shah Alam — Semi-D Kitchen & Bath", cat: "Partial Reno", dur: "3 weeks" },
  { t: "Mont Kiara — Luxury Penthouse", cat: "Full Renovation", dur: "10 weeks" },
  { t: "Subang Jaya — Landed Home Repaint", cat: "Painting", dur: "1 week" },
  { t: "TTDI — Wardrobe & Carpentry Works", cat: "Carpentry", dur: "2 weeks" },
];

export default function RenovationHome() {
  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden bg-[#0f172a] py-24 sm:py-36">
        <div className="absolute inset-0" style={{ backgroundImage: "linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #1c2434 100%)" }} />
        <div className="absolute right-0 top-0 h-full w-1/2 opacity-10" style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")" }} />
        <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl animate-fade-up">
            <span className="inline-flex items-center rounded-sm border border-[#f59e0b]/40 px-4 py-1.5 text-xs font-medium uppercase tracking-[0.25em] text-[#f59e0b]">
              Licensed Contractor · KL & Selangor
            </span>
            <h1 className="mt-7 text-5xl font-bold leading-tight text-white sm:text-6xl lg:text-7xl">
              Built to Last.<br />
              <span className="text-[#f59e0b]">Finished to Impress.</span>
            </h1>
            <p className="mt-6 max-w-xl text-lg text-slate-400">
              From minor repairs to full-scale renovations — we deliver quality craftsmanship on time, within budget, with zero headaches.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link href="/renovation/contact" className="rounded-sm bg-[#f59e0b] px-8 py-4 font-semibold text-white transition hover:bg-[#d97706]">Get a Free Quote →</Link>
              <Link href="/renovation/portfolio" className="rounded-sm border border-white/20 px-8 py-4 font-semibold text-white/80 transition hover:border-white/40 hover:text-white">View Portfolio</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-[#1e293b] py-14">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <dl className="grid grid-cols-2 gap-6 sm:grid-cols-4">
            {[["200+","Projects Completed"],["12+","Years Experience"],["100%","Licensed & Insured"],["5★","Client Satisfaction"]].map(([v,l]) => (
              <div key={l} className="border-l-2 border-[#f59e0b] pl-4">
                <dt className="text-2xl font-bold text-white sm:text-3xl">{v}</dt>
                <dd className="mt-1 text-xs uppercase tracking-wide text-slate-500">{l}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div>
            <span className="text-sm font-semibold uppercase tracking-widest text-[#f59e0b]">What We Do</span>
            <h2 className="mt-3 text-3xl font-bold text-slate-900 sm:text-4xl">Our services</h2>
          </div>
          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((s) => (
              <div key={s.t} className="group rounded-lg border border-slate-200 bg-white p-7 transition-all hover:-translate-y-1 hover:border-[#f59e0b]/40 hover:shadow-xl">
                <div className="mb-4 h-0.5 w-8 bg-[#f59e0b] transition-all group-hover:w-12" />
                <h3 className="font-bold text-slate-900">{s.t}</h3>
                <p className="mt-2 text-sm text-slate-600">{s.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Recent work */}
      <section className="bg-slate-50 py-20 sm:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-end justify-between">
            <div>
              <span className="text-sm font-semibold uppercase tracking-widest text-[#f59e0b]">Our Work</span>
              <h2 className="mt-3 text-3xl font-bold text-slate-900 sm:text-4xl">Recent projects</h2>
            </div>
            <Link href="/renovation/portfolio" className="hidden text-sm font-semibold text-[#1e293b] hover:text-slate-600 sm:block">Full portfolio →</Link>
          </div>
          <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {projects.map((p) => (
              <div key={p.t} className="group overflow-hidden rounded-lg border border-slate-200 bg-white transition-all hover:shadow-md">
                <div className="aspect-video bg-slate-200 flex items-center justify-center text-slate-400">
                  <svg className="h-8 w-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}><rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><path d="M21 15l-5-5L5 21"/></svg>
                </div>
                <div className="p-5">
                  <span className="text-xs font-semibold uppercase tracking-wide text-[#f59e0b]">{p.cat}</span>
                  <h3 className="mt-1 font-semibold text-slate-900">{p.t}</h3>
                  <p className="mt-1 text-xs text-slate-400">Duration: {p.dur}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 sm:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <span className="text-sm font-semibold uppercase tracking-widest text-[#f59e0b]">How We Work</span>
            <h2 className="mt-3 text-3xl font-bold text-slate-900 sm:text-4xl">Our process</h2>
          </div>
          <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {[
              ["01", "Consultation", "We visit your site, understand your needs, and assess the scope of work."],
              ["02", "Quotation", "You receive a detailed, itemised quote with no hidden costs."],
              ["03", "Execution", "Our crew gets to work — clean, punctual, and professional."],
              ["04", "Handover", "Final walkthrough together. We don't leave until you're satisfied."],
            ].map(([n, t, d]) => (
              <div key={n as string} className="text-center">
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-[#1e293b] text-lg font-bold text-[#f59e0b]">{n}</span>
                <h3 className="mt-4 font-bold text-slate-900">{t}</h3>
                <p className="mt-2 text-sm text-slate-600">{d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#1e293b] py-20">
        <div className="mx-auto max-w-3xl px-4 text-center">
          <h2 className="text-3xl font-bold text-white sm:text-4xl">Ready to transform your space?</h2>
          <p className="mt-4 text-slate-400">Get a free, no-obligation site visit and quotation within 48 hours.</p>
          <Link href="/renovation/contact" className="mt-8 inline-block rounded-sm bg-[#f59e0b] px-8 py-4 font-semibold text-white transition hover:bg-[#d97706]">Request a Free Quote</Link>
        </div>
      </section>
    </div>
  );
}
