import Link from "next/link";

const services = [
  { n: "01", t: "Corporate Training", d: "Customised programmes that build real capability across your teams." },
  { n: "02", t: "Leadership Development", d: "Develop confident leaders equipped to inspire and drive performance." },
  { n: "03", t: "Business Consultancy", d: "Strategic advisory to sharpen operations and accelerate growth." },
  { n: "04", t: "Soft Skills Workshops", d: "Communication, teamwork, and personal effectiveness — practical and immediately applicable." },
];

export default function TrainingHome() {
  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden bg-[#14304d] py-24 sm:py-36">
        <div className="absolute inset-0 opacity-[0.06]" style={{ backgroundImage: "radial-gradient(circle at 1px 1px,#fff 1px,transparent 0)", backgroundSize: "32px 32px" }} />
        <div className="absolute -right-20 -top-20 h-80 w-80 rounded-full bg-[#c19a3e]/20 blur-3xl" />
        <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl animate-fade-up">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-xs font-medium uppercase tracking-[0.18em] text-[#d8b864]">
              Training &amp; Consultancy · Malaysia
            </span>
            <h1 className="mt-6 text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl">
              Empowering Professionals.<br />
              <span className="text-[#d8b864]">Transforming Businesses.</span>
            </h1>
            <p className="mt-6 max-w-xl text-lg text-slate-300">
              Expert training and strategic consultancy designed to elevate your people and drive sustainable business growth.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link href="/training/contact" className="rounded-full bg-[#c19a3e] px-7 py-3.5 font-semibold text-[#0c2138] transition hover:bg-[#d8b864]">Get in Touch →</Link>
              <Link href="/training/services" className="rounded-full border border-white/25 px-7 py-3.5 font-semibold text-white transition hover:bg-white/10">Our Services</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="border-b border-slate-100 bg-slate-50 py-14">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <dl className="grid grid-cols-3 gap-6 text-center">
            {[["500+","Professionals Trained"],["50+","Corporate Clients"],["10+","Years Experience"]].map(([v,l]) => (
              <div key={l}><dt className="text-3xl font-bold text-[#14304d] sm:text-5xl">{v}</dt><dd className="mt-1 text-xs uppercase tracking-wide text-slate-500 sm:text-sm">{l}</dd></div>
            ))}
          </dl>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <span className="text-sm font-semibold uppercase tracking-[0.18em] text-[#c19a3e]">What We Offer</span>
            <h2 className="mt-3 text-3xl font-bold text-[#14304d] sm:text-4xl">Solutions built around your goals</h2>
          </div>
          <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((s) => (
              <div key={s.n} className="group rounded-2xl border border-slate-200 bg-white p-7 transition-all hover:-translate-y-1 hover:border-transparent hover:shadow-xl">
                <span className="text-3xl font-bold text-[#c19a3e]/30">{s.n}</span>
                <h3 className="mt-3 text-lg font-semibold text-[#14304d]">{s.t}</h3>
                <p className="mt-2 text-sm text-slate-600">{s.d}</p>
              </div>
            ))}
          </div>
          <div className="mt-10 text-center">
            <Link href="/training/services" className="font-semibold text-[#14304d] hover:text-[#1f4a78]">View all services →</Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#14304d] py-20">
        <div className="mx-auto max-w-3xl px-4 text-center">
          <h2 className="text-3xl font-bold text-white sm:text-4xl">Ready to transform your organisation?</h2>
          <p className="mt-4 text-lg text-slate-300">Let&apos;s discuss how the right training and consultancy can move your business forward.</p>
          <Link href="/training/contact" className="mt-8 inline-block rounded-full bg-[#c19a3e] px-8 py-4 font-semibold text-[#0c2138] transition hover:bg-[#d8b864]">Contact Us Today</Link>
        </div>
      </section>
    </div>
  );
}
