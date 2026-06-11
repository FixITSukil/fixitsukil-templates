import Link from "next/link";
import Image from "next/image";

export type SiteConfig = {
  brand: string;
  initials: string;
  tagline: string;
  primary: string;   // main brand colour (hex)
  accent: string;    // accent colour (hex)
  heroImg: string;   // hero background photo (/templates/<slug>.jpg)
  heroEmoji: string;
  hero: { badge: string; title: string; sub: string; cta: string };
  about: { title: string; body: string };
  services: { icon: string; title: string; desc: string }[];
  highlights: { emoji: string; label: string }[];
  testimonials: { quote: string; name: string }[];
  contact: { line: string; area: string };
};

const MAIN = "https://www.fixitsukil.com/web-design";

/**
 * Data-driven single-page business website used for the demo templates.
 * Colours come from the config via inline styles (Tailwind can't JIT dynamic hex).
 */
export default function BusinessSite({ c }: { c: SiteConfig }) {
  return (
    <div className="min-h-screen bg-white font-sans text-neutral-900">
      {/* Nav */}
      <header className="sticky top-0 z-40 border-b border-neutral-100 bg-white/90 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-3.5">
          <div className="flex items-center gap-2.5">
            <span className="flex h-9 w-9 items-center justify-center rounded-lg text-sm font-extrabold text-white" style={{ background: c.primary }}>
              {c.initials}
            </span>
            <span className="text-[15px] font-bold tracking-tight">{c.brand}</span>
          </div>
          <a href="#contact" className="rounded-full px-5 py-2 text-sm font-semibold text-white transition hover:opacity-90" style={{ background: c.primary }}>
            {c.hero.cta}
          </a>
        </div>
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden px-5 py-28 text-center sm:py-36">
        <Image src={c.heroImg} alt={c.brand} fill priority sizes="100vw" className="object-cover" />
        <div className="absolute inset-0" style={{ background: `linear-gradient(150deg, ${c.primary}e6, ${c.accent}b3)` }} />
        <div className="absolute inset-0 bg-black/25" />
        <div className="relative z-10 mx-auto max-w-3xl">
          <span className="inline-block rounded-full border border-white/30 bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-white/90">
            {c.hero.badge}
          </span>
          <h1 className="mt-6 text-[clamp(30px,6vw,54px)] font-extrabold leading-[1.08] tracking-tight text-white">{c.hero.title}</h1>
          <p className="mx-auto mt-5 max-w-xl text-[17px] leading-relaxed text-white/85">{c.hero.sub}</p>
          <a href="#contact" className="mt-8 inline-block rounded-full bg-white px-8 py-3.5 text-base font-bold transition hover:scale-[1.03]" style={{ color: c.primary }}>
            {c.hero.cta}
          </a>
        </div>
      </section>

      {/* About */}
      <section className="px-5 py-20">
        <div className="mx-auto grid max-w-5xl items-center gap-10 lg:grid-cols-2">
          <div>
            <p className="mb-2 text-[12px] font-bold uppercase tracking-[0.16em]" style={{ color: c.primary }}>About us</p>
            <h2 className="text-[30px] font-bold leading-tight tracking-tight">{c.about.title}</h2>
            <p className="mt-4 text-[15.5px] leading-relaxed text-neutral-600">{c.about.body}</p>
          </div>
          <div className="grid grid-cols-2 gap-3">
            {c.highlights.map((h) => (
              <div key={h.label} className="rounded-2xl border border-neutral-200 bg-neutral-50 p-5 text-center shadow-soft">
                <div className="text-3xl">{h.emoji}</div>
                <p className="mt-2 text-[13.5px] font-semibold text-neutral-700">{h.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="bg-neutral-50 px-5 py-20">
        <div className="mx-auto max-w-5xl">
          <div className="mb-12 text-center">
            <p className="mb-2 text-[12px] font-bold uppercase tracking-[0.16em]" style={{ color: c.primary }}>What we offer</p>
            <h2 className="text-[30px] font-bold tracking-tight">{c.tagline}</h2>
          </div>
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {c.services.map((s) => (
              <div key={s.title} className="rounded-2xl border border-neutral-200 bg-white p-6 shadow-soft transition hover:-translate-y-1 hover:shadow-lift">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl text-2xl" style={{ background: `${c.primary}15` }}>{s.icon}</div>
                <h3 className="mt-4 text-[16px] font-bold">{s.title}</h3>
                <p className="mt-1.5 text-[13.5px] leading-snug text-neutral-500">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="px-5 py-20">
        <div className="mx-auto max-w-4xl">
          <div className="mb-10 text-center">
            <p className="mb-2 text-[12px] font-bold uppercase tracking-[0.16em]" style={{ color: c.primary }}>Kind words</p>
            <h2 className="text-[28px] font-bold tracking-tight">What people say</h2>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {c.testimonials.map((t, i) => (
              <div key={i} className="rounded-2xl border border-neutral-200 bg-white p-6 shadow-soft">
                <div className="text-[14px]" style={{ color: c.accent }}>★★★★★</div>
                <p className="mt-2 text-[14.5px] leading-relaxed text-neutral-700">“{t.quote}”</p>
                <p className="mt-3 text-[12.5px] font-semibold text-neutral-400">— {t.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section id="contact" className="px-5 py-20 text-center text-white" style={{ background: c.primary }}>
        <div className="mx-auto max-w-xl">
          <div className="text-4xl">{c.heroEmoji}</div>
          <h2 className="mt-3 text-[30px] font-bold">Get in touch today</h2>
          <p className="mx-auto mt-3 max-w-md text-[15px] text-white/80">{c.contact.line}</p>
          <a href="#" className="mt-7 inline-block rounded-full bg-white px-8 py-3.5 text-base font-bold transition hover:scale-[1.03]" style={{ color: c.primary }}>
            {c.hero.cta}
          </a>
          <p className="mt-4 text-[13px] text-white/70">{c.contact.area}</p>
        </div>
      </section>

      {/* Footer — demo banner */}
      <footer className="bg-neutral-950 px-5 py-8 text-center text-sm text-neutral-400">
        <p>
          This is a <strong className="text-white">demo template</strong> by{" "}
          <a href={MAIN} className="font-semibold text-white hover:underline">Fix It Sukil Web Design</a>.
        </p>
        <p className="mt-2">
          Want a site like this for your business?{" "}
          <a href={MAIN} className="font-semibold underline" style={{ color: c.accent }}>Get yours from RM800 →</a>
        </p>
        <Link href="/" className="mt-3 inline-block text-xs text-neutral-500 hover:text-neutral-300">← Back to all templates</Link>
      </footer>
    </div>
  );
}
