import Link from "next/link";
import WhatsAppCTA from "./components/WhatsAppCTA";
import QuoteCalculator from "./components/QuoteCalculator";

const MAIN_SITE = "https://www.fixitsukil.com";

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
    price: "RM 1,500",
    blurb: "A clean, professional presence to get found and contacted.",
    features: ["Up to 5 pages", "Mobile responsive", "WhatsApp + contact form", "1 template personalised", "Business email setup", "2 revisions"],
    highlight: false,
  },
  {
    name: "Standard",
    price: "RM 2,800",
    blurb: "More pages, more reach — built to bring in enquiries.",
    features: ["Up to 10 pages", "Blog + photo gallery", "Google Maps + WhatsApp", "Basic SEO setup", "Business email setup", "3 revisions"],
    highlight: true,
  },
  {
    name: "Premium",
    price: "RM 4,500",
    blurb: "The full package for businesses that mean business.",
    features: ["Everything in Standard", "Online booking or shop", "Copywriting included", "Advanced SEO + speed", "1 year support", "Unlimited revisions (1yr)"],
    highlight: false,
  },
];

export default function Showcase() {
  return (
    <div className="min-h-screen bg-slate-950 font-sans text-white">
      {/* Header */}
      <header className="border-b border-white/10 px-4 py-5">
        <div className="mx-auto flex max-w-6xl items-center justify-between">
          <a href={MAIN_SITE} className="flex items-center gap-2.5">
            <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-white text-sm font-bold text-slate-900">F</span>
            <span className="leading-tight">
              <span className="block font-bold tracking-tight">Fix It Sukil</span>
              <span className="block text-[10px] font-medium uppercase tracking-widest text-slate-400">Web Design</span>
            </span>
          </a>
          <div className="flex items-center gap-3">
            <a href={MAIN_SITE} className="hidden text-sm font-medium text-slate-300 transition hover:text-white sm:block">
              ← Main site
            </a>
            <WhatsAppCTA
              text="Hi Fix It Sukil, I'm interested in getting a website built."
              className="rounded-full bg-green-500 px-5 py-2 text-sm font-semibold text-white transition hover:bg-green-400"
            >
              WhatsApp Us
            </WhatsAppCTA>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="px-4 py-20 text-center sm:py-28">
        <div className="mx-auto max-w-3xl">
          <span className="inline-block rounded-full border border-white/20 bg-white/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-slate-400">
            Web Design by Fix It Sukil · Klang Valley
          </span>
          <h1 className="mt-6 text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
            Professional websites for{" "}
            <span className="bg-gradient-to-r from-amber-400 to-orange-400 bg-clip-text text-transparent">
              Malaysian businesses
            </span>
          </h1>
          <p className="mt-6 text-lg text-slate-400">
            Pick a template, we personalise it for your business and get you live in days —
            from the same local team that fixes Klang Valley&apos;s laptops and PCs.
            Honest pricing, no hidden fees, no technical hassle.
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
                <p className={`mt-3 text-sm ${p.highlight ? "text-slate-700" : "text-slate-400"}`}>{p.blurb}</p>
                <ul className="mt-6 space-y-2.5">
                  {p.features.map((f) => (
                    <li key={f} className="flex items-center gap-2.5 text-sm">
                      <span className={`text-lg leading-none ${p.highlight ? "text-slate-900" : "text-amber-400"}`}>✓</span>
                      {f}
                    </li>
                  ))}
                </ul>
                <WhatsAppCTA
                  text={`Hi Fix It Sukil, I'm interested in the ${p.name} website package (${p.price}).`}
                  className={`mt-8 block rounded-full py-3 text-center text-sm font-bold transition ${p.highlight ? "bg-slate-900 text-white hover:bg-slate-800" : "bg-white/10 text-white hover:bg-white/20"}`}
                >
                  Get Started
                </WhatsAppCTA>
              </div>
            ))}
          </div>
          <p className="mt-8 text-center text-sm text-slate-500">
            Starting points for a fast, template-based build. Optional care plans (hosting, updates &amp; support)
            from RM 80/mo. Domain ~RM 65–120/yr. <strong className="text-slate-300">Free business email</strong> on your
            domain — up to 5 mailboxes via Zoho, RM 0/month (upgrades from RM 4.17/user/mo).
            Need something specific? <a href="#calculator" className="text-amber-400 hover:underline">Build your own quote ↓</a>
          </p>
        </div>
      </section>

      {/* Quote calculator */}
      <section id="calculator" className="scroll-mt-6 border-t border-white/10 px-4 py-24">
        <div className="mx-auto max-w-5xl">
          <div className="mb-10 text-center">
            <h2 className="text-3xl font-bold">Build your own quote</h2>
            <p className="mt-3 text-slate-400">Pick exactly what your business needs and see the price instantly.</p>
          </div>
          <QuoteCalculator />
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 px-4 py-8 text-center text-sm text-slate-500">
        <p>
          A service of{" "}
          <a href={MAIN_SITE} className="font-semibold text-slate-300 transition hover:text-white">
            Fix It Sukil
          </a>{" "}
          — laptop &amp; PC repair, IT support &amp; web design across the Klang Valley.
        </p>
        <p className="mt-2">&copy; {new Date().getFullYear()} Fix It Sukil. All rights reserved.</p>
      </footer>
    </div>
  );
}
