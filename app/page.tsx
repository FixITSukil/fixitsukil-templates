import Link from "next/link";

const templates = [
  {
    slug: "training",
    label: "Training & Consultancy",
    desc: "Corporate training, leadership development, business consultancy.",
    color: "from-[#14304d] to-[#1f4a78]",
    tag: "Professional Services",
  },
  {
    slug: "tuition",
    label: "Tuition Centre",
    desc: "Learning centre for primary, secondary & SPM students.",
    color: "from-[#1a56db] to-[#1e40af]",
    tag: "Education",
  },
  {
    slug: "salon",
    label: "Hair Salon & Barbershop",
    desc: "Premium hair, styling & grooming services.",
    color: "from-[#1c1c1e] to-[#3a3a3c]",
    tag: "Beauty & Lifestyle",
  },
  {
    slug: "dental",
    label: "Dental Clinic",
    desc: "Family & cosmetic dental care, check-ups, braces & more.",
    color: "from-[#0284c7] to-[#0369a1]",
    tag: "Healthcare",
  },
  {
    slug: "renovation",
    label: "Renovation & Contractor",
    desc: "Home renovation, interior design & construction services.",
    color: "from-[#1e293b] to-[#334155]",
    tag: "Home Services",
  },
];

const packages = [
  {
    name: "Starter",
    price: "RM 800",
    features: ["5 Pages", "Custom Domain (1yr)", "Business Email Setup", "Mobile Responsive", "2 Revisions"],
    highlight: false,
  },
  {
    name: "Standard",
    price: "RM 1,200",
    features: ["5 Pages + Blog", "Custom Domain (1yr)", "Business Email Setup", "WhatsApp Button", "Google Maps", "3 Revisions"],
    highlight: true,
  },
  {
    name: "Premium",
    price: "RM 1,800",
    features: ["Everything in Standard", "Contact Form Backend", "SEO Setup", "Speed Optimisation", "1 Year Support", "Unlimited Revisions (1yr)"],
    highlight: false,
  },
];

export default function Showcase() {
  return (
    <div className="min-h-screen bg-slate-950 font-sans text-white">
      {/* Header */}
      <header className="border-b border-white/10 px-4 py-5">
        <div className="mx-auto flex max-w-6xl items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-white text-sm font-bold text-slate-900">F</span>
            <span className="font-bold tracking-tight">FixITSukil</span>
          </div>
          <a
            href="https://wa.me/60XXXXXXXXXX"
            className="rounded-full bg-green-500 px-5 py-2 text-sm font-semibold text-white transition hover:bg-green-400"
          >
            WhatsApp Us
          </a>
        </div>
      </header>

      {/* Hero */}
      <section className="px-4 py-20 text-center sm:py-28">
        <div className="mx-auto max-w-3xl">
          <span className="inline-block rounded-full border border-white/20 bg-white/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-slate-400">
            Professional Website Templates · Malaysia
          </span>
          <h1 className="mt-6 text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
            Ready-made websites for{" "}
            <span className="bg-gradient-to-r from-amber-400 to-orange-400 bg-clip-text text-transparent">
              Malaysian businesses
            </span>
          </h1>
          <p className="mt-6 text-lg text-slate-400">
            Pick a template, we personalise it for your business and get you live in days.
            No monthly fees. No technical hassle.
          </p>
          <a
            href="#templates"
            className="mt-8 inline-block rounded-full bg-amber-400 px-8 py-3.5 text-base font-bold text-slate-900 transition hover:bg-amber-300"
          >
            Browse Templates ↓
          </a>
        </div>
      </section>

      {/* Templates */}
      <section id="templates" className="px-4 pb-24">
        <div className="mx-auto max-w-6xl">
          <h2 className="mb-10 text-center text-2xl font-bold text-white">Live Demo Templates</h2>
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {templates.map((t) => (
              <Link
                key={t.slug}
                href={`/${t.slug}`}
                className="group relative overflow-hidden rounded-2xl ring-1 ring-white/10 transition hover:-translate-y-1 hover:ring-white/30"
              >
                <div className={`bg-gradient-to-br ${t.color} p-8 pb-16`}>
                  <span className="inline-block rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs font-medium text-white/80">
                    {t.tag}
                  </span>
                  <h3 className="mt-4 text-xl font-bold text-white">{t.label}</h3>
                  <p className="mt-2 text-sm text-white/70">{t.desc}</p>
                </div>
                <div className="absolute bottom-4 left-8 right-8 flex items-center justify-between">
                  <span className="rounded-full bg-white/15 px-4 py-1.5 text-xs font-semibold text-white backdrop-blur-sm">
                    View Demo →
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="border-t border-white/10 px-4 py-24">
        <div className="mx-auto max-w-5xl">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold">Simple, transparent pricing</h2>
            <p className="mt-3 text-slate-400">One-time payment. No hidden fees. Domain &amp; hosting costs separate.</p>
          </div>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
            {packages.map((p) => (
              <div
                key={p.name}
                className={`rounded-2xl p-7 ${p.highlight ? "bg-amber-400 text-slate-900 ring-0" : "bg-white/5 text-white ring-1 ring-white/10"}`}
              >
                <p className="text-sm font-semibold uppercase tracking-wider opacity-70">{p.name}</p>
                <p className="mt-2 text-4xl font-bold">{p.price}</p>
                <p className={`text-sm ${p.highlight ? "text-slate-700" : "text-slate-400"}`}>one-time</p>
                <ul className="mt-6 space-y-2.5">
                  {p.features.map((f) => (
                    <li key={f} className="flex items-center gap-2.5 text-sm">
                      <span className={`text-lg leading-none ${p.highlight ? "text-slate-900" : "text-amber-400"}`}>✓</span>
                      {f}
                    </li>
                  ))}
                </ul>
                <a
                  href="https://wa.me/60XXXXXXXXXX"
                  className={`mt-8 block rounded-full py-3 text-center text-sm font-bold transition ${p.highlight ? "bg-slate-900 text-white hover:bg-slate-800" : "bg-white/10 text-white hover:bg-white/20"}`}
                >
                  Get Started
                </a>
              </div>
            ))}
          </div>
          <p className="mt-8 text-center text-sm text-slate-500">
            Domain registration: ~RM 35–100/yr depending on extension. Business email: included free via Cloudflare + Gmail setup.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 px-4 py-8 text-center text-sm text-slate-500">
        <p>&copy; {new Date().getFullYear()} FixITSukil. All rights reserved.</p>
      </footer>
    </div>
  );
}
