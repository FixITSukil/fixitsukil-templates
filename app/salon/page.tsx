import Link from "next/link";
import Image from "next/image";

const services = [
  { t: "Haircut & Styling", d: "Precision cuts tailored to your face shape and lifestyle." },
  { t: "Colour & Highlights", d: "Full colour, balayage, ombré, and global highlights." },
  { t: "Treatments", d: "Keratin smoothing, deep conditioning, and scalp treatments." },
  { t: "Beard Grooming", d: "Shaping, trimming, and hot-towel straight razor shaves." },
];

const gallery = [
  { label: "Balayage Colour", sub: "Natural, sun-kissed tones", img: "/templates/salon-g1.jpg" },
  { label: "Classic Cut", sub: "Timeless precision cut", img: "/templates/salon-g2.jpg" },
  { label: "Colour Melt", sub: "Seamless colour transition", img: "/templates/salon-g3.jpg" },
  { label: "Textured Fade", sub: "Modern barbering", img: "/templates/salon-g4.jpg" },
  { label: "Keratin Blow-out", sub: "Smooth &amp; frizz-free", img: "/templates/salon-g5.jpg" },
  { label: "Bridal Style", sub: "For your special day", img: "/templates/salon-g6.jpg" },
];

export default function SalonHome() {
  return (
    <div>
      {/* Hero */}
      <section className="relative flex min-h-[90vh] items-center overflow-hidden bg-[#0a0a0a]">
        <div className="absolute inset-0">
          <Image src="/templates/salon-hero.jpg" alt="" fill priority sizes="100vw" className="object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/55 to-black/10" />
          <div className="absolute right-0 top-0 h-full w-3/5 bg-gradient-to-bl from-[#2a2000]/60 to-transparent" />
        </div>
        <div className="relative mx-auto max-w-6xl px-4 py-24 sm:px-6 lg:px-8">
          <div className="max-w-2xl animate-fade-up">
            <span className="inline-block border border-[#d4af4a]/40 px-4 py-1.5 text-[10px] font-medium uppercase tracking-[0.3em] text-[#d4af4a]">
              Premium Hair Studio · KL
            </span>
            <h1 className="mt-8 text-5xl font-bold leading-[1.08] text-white sm:text-6xl lg:text-7xl">
              Where Style<br />
              <span className="text-[#d4af4a]">Meets Precision.</span>
            </h1>
            <p className="mt-6 text-lg text-white/60 max-w-md">
              Expert stylists. Premium products. An experience that goes beyond the chair.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link href="/salon/contact" className="rounded-full bg-[#d4af4a] px-7 py-3.5 font-semibold text-black transition hover:bg-[#e8c76a]">Book Appointment →</Link>
              <Link href="/salon/services" className="rounded-full border border-white/20 px-7 py-3.5 font-semibold text-white/80 transition hover:border-white/40 hover:text-white">Our Services</Link>
            </div>
          </div>
        </div>
        {/* Decorative vertical text */}
        <div className="absolute right-8 top-1/2 hidden -translate-y-1/2 rotate-90 text-[10px] uppercase tracking-[0.4em] text-white/20 lg:block">Velvet Shears · Est. 2018</div>
      </section>

      {/* Services strip */}
      <section className="bg-[#161616] py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-px bg-white/10 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((s) => (
              <div key={s.t} className="group bg-[#161616] p-8 transition-colors hover:bg-[#1e1e1e]">
                <div className="h-px w-8 bg-[#d4af4a] transition-all group-hover:w-14" />
                <h3 className="mt-5 text-base font-bold text-white">{s.t}</h3>
                <p className="mt-2 text-sm text-white/50">{s.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery placeholder */}
      <section className="bg-[#0f0f0f] py-20 sm:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-end justify-between">
            <div>
              <span className="text-[10px] font-medium uppercase tracking-[0.3em] text-[#d4af4a]">Our Work</span>
              <h2 className="mt-2 text-3xl font-bold text-white sm:text-4xl">The Velvet Shears look</h2>
            </div>
            <Link href="/salon/services" className="hidden text-sm text-[#d4af4a] hover:text-[#e8c76a] sm:block">View all services →</Link>
          </div>
          <div className="mt-10 grid grid-cols-2 gap-3 lg:grid-cols-3">
            {gallery.map((g) => (
              <div key={g.label} className="group relative aspect-square overflow-hidden rounded-lg bg-[#1e1e1e]">
                <Image src={g.img} alt={g.label} fill sizes="(max-width: 640px) 50vw, 33vw" className="object-cover transition-transform duration-500 group-hover:scale-105" />
                <div className="absolute inset-0 flex flex-col items-start justify-end bg-gradient-to-t from-black/75 via-black/20 to-transparent p-4">
                  <span className="text-sm font-semibold text-white">{g.label}</span>
                  <span className="text-xs text-white/60" dangerouslySetInnerHTML={{ __html: g.sub }} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About strip */}
      <section className="bg-[#111111] py-20 sm:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-14 lg:grid-cols-2 lg:items-center">
            <div>
              <span className="text-[10px] font-medium uppercase tracking-[0.3em] text-[#d4af4a]">Our Philosophy</span>
              <h2 className="mt-3 text-3xl font-bold text-white sm:text-4xl">Crafted with care. Finished with confidence.</h2>
              <p className="mt-5 text-white/50 leading-relaxed">At Velvet Shears, every visit is a curated experience. From the consultation to the final blow-dry, our stylists invest time in understanding what works for you — your lifestyle, your hair type, your vision.</p>
              <p className="mt-4 text-white/50 leading-relaxed">We use only premium professional products and stay current with global styling trends to ensure you leave looking and feeling your best.</p>
              <Link href="/salon/contact" className="mt-8 inline-block rounded-full bg-[#d4af4a] px-7 py-3.5 text-sm font-semibold text-black transition hover:bg-[#e8c76a]">Book Your Session</Link>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[["8+","Years of craft"],["4,500+","Happy clients"],["Premium","Products only"],["Walk-in","Welcome"]].map(([v,l]) => (
                <div key={l} className="flex flex-col items-center justify-center rounded-xl border border-white/10 bg-[#1a1a1a] p-8 text-center">
                  <p className="text-2xl font-bold text-[#d4af4a]">{v}</p>
                  <p className="mt-1 text-xs text-white/40">{l}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#d4af4a] py-16">
        <div className="mx-auto max-w-3xl px-4 text-center">
          <h2 className="text-3xl font-bold text-black sm:text-4xl">Ready for a fresh look?</h2>
          <p className="mt-4 text-black/70">Walk in or book ahead — we&apos;d love to see you in the chair.</p>
          <Link href="/salon/contact" className="mt-8 inline-block rounded-full bg-black px-8 py-4 font-semibold text-white transition hover:bg-[#1a1a1a]">Book Now</Link>
        </div>
      </section>
    </div>
  );
}
