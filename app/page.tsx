import Link from "next/link";
import WhatsAppCTA from "./components/WhatsAppCTA";
import QuoteCalculator from "./components/QuoteCalculator";

const MAIN_SITE = "https://www.fixitsukil.com";
const poppins = { fontFamily: "var(--font-poppins), system-ui, -apple-system, sans-serif" };

const templates = [
  { slug: "training",   label: "Training & Consultancy", desc: "Corporate training, leadership development, business consultancy.", color: "from-[#14304d] to-[#1f4a78]", tag: "Professional Services" },
  { slug: "tuition",    label: "Tuition Centre",          desc: "Learning centre for primary, secondary & SPM students.",          color: "from-[#1a56db] to-[#1e40af]", tag: "Education" },
  { slug: "salon",      label: "Hair Salon & Barbershop", desc: "Premium hair, styling & grooming services.",                       color: "from-[#1c1c1e] to-[#3a3a3c]", tag: "Beauty & Lifestyle" },
  { slug: "dental",     label: "Dental Clinic",           desc: "Family & cosmetic dental care, check-ups, braces & more.",         color: "from-[#0284c7] to-[#0369a1]", tag: "Healthcare" },
  { slug: "renovation", label: "Renovation & Contractor", desc: "Home renovation, interior design & construction services.",        color: "from-[#1e293b] to-[#334155]", tag: "Home Services" },
  { slug: "restaurant", label: "Café & Restaurant",        desc: "Menus, reservations & catering for F&B businesses.",             color: "from-[#b91c1c] to-[#f59e0b]", tag: "Food & Beverage" },
  { slug: "gym",        label: "Gym & Fitness",            desc: "Classes, memberships & trainer profiles for studios.",            color: "from-[#0f766e] to-[#84cc16]", tag: "Health & Fitness" },
  { slug: "lawfirm",    label: "Law Firm",                 desc: "Practice areas, credibility & consultations.",                    color: "from-[#1e3a5f] to-[#c8a04e]", tag: "Professional Services" },
  { slug: "property",   label: "Property Agent",           desc: "Listings, buy / sell / rent & enquiries.",                        color: "from-[#0369a1] to-[#f97316]", tag: "Real Estate" },
  { slug: "clinic",     label: "Medical Clinic",           desc: "Services, appointments & health screening.",                      color: "from-[#0d9488] to-[#38bdf8]", tag: "Healthcare" },
  { slug: "portfolio",  label: "Personal Portfolio",       desc: "For individuals — showcase your work, story & services.",         color: "from-[#6d28d9] to-[#ec4899]", tag: "For Individuals" },
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
    <div className="min-h-screen bg-white text-[#111]" style={poppins}>
      {/* Header */}
      <header className="bg-[#060606] px-5 py-4">
        <div className="mx-auto flex max-w-6xl items-center justify-between">
          <a href={MAIN_SITE} className="flex items-center gap-2.5">
            <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#ED1C24] text-base font-extrabold text-white">F</span>
            <span className="leading-tight">
              <span className="block text-[15px] font-bold tracking-tight text-white">Fix It Sukil</span>
              <span className="block text-[10px] font-semibold uppercase tracking-[0.18em] text-white/45">Web Design</span>
            </span>
          </a>
          <div className="flex items-center gap-3">
            <a href={MAIN_SITE} className="hidden text-sm font-medium text-white/65 transition hover:text-white sm:block">
              ← Main site
            </a>
            <WhatsAppCTA
              text="Hi Fix It Sukil, I'm interested in getting a website built."
              className="rounded-full bg-[#25D366] px-5 py-2 text-sm font-semibold text-white transition hover:bg-[#1db954]"
            >
              WhatsApp Us
            </WhatsAppCTA>
          </div>
        </div>
      </header>

      {/* Hero — dark band with red orb + grid */}
      <section className="relative overflow-hidden bg-[#060606] px-5 py-24 text-center sm:py-28">
        <div className="pointer-events-none absolute -top-48 left-1/2 h-[600px] w-[600px] -translate-x-1/2 rounded-full bg-[#ED1C24]/[0.12] blur-[120px]" />
        <div className="relative z-10 mx-auto max-w-3xl">
          <p className="mb-4 text-[11px] font-bold uppercase tracking-[0.18em] text-[#ED1C24]">
            Web Design · Klang Valley
          </p>
          <h1 className="text-[clamp(30px,5.5vw,56px)] font-extrabold leading-tight tracking-[-0.02em] text-white">
            Professional websites for{" "}
            <span className="text-[#ED1C24]">Malaysian businesses</span>
          </h1>
          <p className="mx-auto mt-5 max-w-xl text-[16px] leading-relaxed text-white/55">
            Pick a template, we personalise it for your business and get you live in days — from the
            same local team that fixes Klang Valley&apos;s laptops and PCs. Honest pricing, no hidden fees.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a
              href="#templates"
              className="inline-block rounded-full bg-[#ED1C24] px-8 py-3.5 text-base font-bold text-white transition hover:bg-[#B1000F]"
            >
              Browse templates ↓
            </a>
            <a
              href="#calculator"
              className="inline-block rounded-full border border-white/20 px-8 py-3.5 text-base font-bold text-white transition hover:border-white/50"
            >
              Get an instant quote
            </a>
          </div>
        </div>
      </section>

      {/* Templates */}
      <section id="templates" className="scroll-mt-6 bg-[#F7F7F7] px-5 py-24">
        <div className="mx-auto max-w-6xl">
          <div className="mb-12 text-center">
            <p className="mb-2 text-[11px] font-bold uppercase tracking-[0.16em] text-[#ED1C24]">Live demos</p>
            <h2 className="text-[28px] font-bold tracking-tight text-[#111]">See the templates in action</h2>
            <p className="mt-3 text-[15px] text-neutral-500">Real, working demos — each ready to be personalised for your business.</p>
          </div>
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {templates.map((t) => (
              <Link
                key={t.slug}
                href={`/${t.slug}`}
                className="group overflow-hidden rounded-2xl border border-neutral-200 bg-white shadow-soft transition hover:-translate-y-1 hover:shadow-lg"
              >
                <div className={`bg-gradient-to-br ${t.color} p-7 pb-12`}>
                  <span className="inline-block rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs font-medium text-white/80">
                    {t.tag}
                  </span>
                  <h3 className="mt-4 text-xl font-bold text-white">{t.label}</h3>
                  <p className="mt-2 text-sm text-white/70">{t.desc}</p>
                </div>
                <div className="flex items-center justify-between px-6 py-4">
                  <span className="text-sm font-semibold text-neutral-700">View live demo</span>
                  <span className="text-[#ED1C24] transition group-hover:translate-x-1">→</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="bg-white px-5 py-24">
        <div className="mx-auto max-w-5xl">
          <div className="mb-12 text-center">
            <p className="mb-2 text-[11px] font-bold uppercase tracking-[0.16em] text-[#ED1C24]">Pricing</p>
            <h2 className="text-[28px] font-bold tracking-tight text-[#111]">Simple, honest pricing</h2>
            <p className="mt-3 text-[15px] text-neutral-500">One-time payment. No hidden fees. Pick a package or build your own quote below.</p>
          </div>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
            {packages.map((p) => (
              <div
                key={p.name}
                className={`rounded-2xl border p-7 ${
                  p.highlight
                    ? "border-[#ED1C24] bg-white shadow-lift ring-1 ring-[#ED1C24]"
                    : "border-neutral-200 bg-white shadow-soft"
                }`}
              >
                {p.highlight && (
                  <span className="mb-3 inline-block rounded-full bg-[#ED1C24] px-3 py-1 text-[10px] font-bold uppercase tracking-[0.12em] text-white">
                    ★ Most Popular
                  </span>
                )}
                <p className="text-sm font-semibold uppercase tracking-wider text-neutral-500">{p.name}</p>
                <p className="mt-2 text-4xl font-extrabold text-[#111]">{p.price}</p>
                <p className="text-sm text-neutral-400">one-time</p>
                <p className="mt-3 text-sm text-neutral-500">{p.blurb}</p>
                <ul className="mt-6 space-y-2.5">
                  {p.features.map((f) => (
                    <li key={f} className="flex items-center gap-2.5 text-sm text-neutral-700">
                      <span className="text-base leading-none text-[#ED1C24]">✓</span>
                      {f}
                    </li>
                  ))}
                </ul>
                <WhatsAppCTA
                  text={`Hi Fix It Sukil, I'm interested in the ${p.name} website package (${p.price}).`}
                  className={`mt-8 block rounded-full py-3 text-center text-sm font-bold transition ${
                    p.highlight
                      ? "bg-[#ED1C24] text-white hover:bg-[#B1000F]"
                      : "border border-neutral-300 text-neutral-800 hover:border-[#ED1C24] hover:text-[#ED1C24]"
                  }`}
                >
                  Get Started
                </WhatsAppCTA>
              </div>
            ))}
          </div>
          <p className="mx-auto mt-8 max-w-2xl text-center text-sm text-neutral-400">
            Starting points for a fast, template-based build. Optional care plans (hosting, updates &amp; support)
            from RM 80/mo. Domain ~RM 65–120/yr. <strong className="text-neutral-600">Free business email</strong> on
            your domain — up to 5 mailboxes via Zoho, RM 0/month (upgrades from RM 4.17/user/mo).
            Need something specific? <a href="#calculator" className="font-semibold text-[#ED1C24] hover:underline">Build your own quote ↓</a>
          </p>
        </div>
      </section>

      {/* Quote calculator */}
      <section id="calculator" className="scroll-mt-6 bg-[#F7F7F7] px-5 py-24">
        <div className="mx-auto max-w-5xl">
          <div className="mb-10 text-center">
            <p className="mb-2 text-[11px] font-bold uppercase tracking-[0.16em] text-[#ED1C24]">Instant estimate</p>
            <h2 className="text-[28px] font-bold tracking-tight text-[#111]">Build your own quote</h2>
            <p className="mt-3 text-[15px] text-neutral-500">Pick exactly what your business needs and see the price instantly.</p>
          </div>
          <QuoteCalculator />
        </div>
      </section>

      {/* CTA band */}
      <section className="bg-[#060606] px-5 py-20 text-center">
        <div className="mx-auto max-w-2xl">
          <h2 className="text-[26px] font-bold text-white">Ready to get your business online?</h2>
          <p className="mx-auto mt-3 max-w-md text-[15px] text-white/55">
            Tell us about your business and we&apos;ll recommend the right template and confirm your price up front.
          </p>
          <div className="mt-7 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <WhatsAppCTA
              text="Hi Fix It Sukil, I'd like to talk about building a website for my business."
              className="inline-flex items-center justify-center gap-2 rounded-full bg-[#25D366] px-7 py-3 text-sm font-bold text-white transition hover:bg-[#1db954]"
            >
              Chat on WhatsApp
            </WhatsAppCTA>
            <a
              href="tel:+60125777436"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 px-7 py-3 text-sm font-bold text-white transition hover:border-white/50"
            >
              +60 12-577 7436
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#060606] px-5 py-10 text-center text-sm text-white/45">
        <p>
          A service of{" "}
          <a href={MAIN_SITE} className="font-semibold text-white/80 transition hover:text-white">
            Fix It Sukil
          </a>{" "}
          — laptop &amp; PC repair, IT support &amp; web design across the Klang Valley.
        </p>
        <p className="mt-2">&copy; {new Date().getFullYear()} Fix It Sukil. All rights reserved.</p>
      </footer>
    </div>
  );
}
