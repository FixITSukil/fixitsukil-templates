import Link from "next/link";
import Image from "next/image";

const services = [
  { t: "General Dentistry", d: "Routine check-ups, fillings, extractions, and preventive care." },
  { t: "Teeth Whitening", d: "Professional in-chair whitening for a brighter, more confident smile." },
  { t: "Orthodontics", d: "Braces and clear aligners to straighten and align your teeth." },
  { t: "Dental Implants", d: "Permanent tooth replacement that looks and feels completely natural." },
  { t: "Root Canal Therapy", d: "Pain-free treatment to save an infected or damaged tooth." },
  { t: "Cosmetic Dentistry", d: "Veneers, bonding, and smile makeovers tailored to you." },
];

const reasons = [
  ["Experienced Team", "Our dentists hold postgraduate qualifications and stay current with the latest techniques."],
  ["Pain-Free Approach", "We use advanced anaesthesia and a gentle technique to keep every visit as comfortable as possible."],
  ["Modern Equipment", "Digital X-rays, intraoral cameras, and laser dentistry for precise, effective treatment."],
  ["Family Friendly", "We see patients of all ages — from toddlers to grandparents — in a warm, welcoming environment."],
];

export default function DentalHome() {
  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden bg-[#0c4a6e] py-24 sm:py-36">
        <Image src="/templates/dental-hero.jpg" alt="" fill priority sizes="100vw" className="object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0c4a6e]/90 via-[#075985]/60 to-[#0284c7]/15" />
        <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:items-center">
            <div className="animate-fade-up">
              <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-xs font-medium uppercase tracking-widest text-sky-200">
                Dental Clinic · Kuala Lumpur
              </span>
              <h1 className="mt-6 text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl">
                Your Healthiest,<br />
                <span className="text-sky-300">Happiest Smile.</span>
              </h1>
              <p className="mt-6 text-lg text-sky-100/80">
                Comprehensive dental care for the whole family — from routine check-ups to smile transformations — delivered with expertise and genuine care.
              </p>
              <div className="mt-10 flex flex-wrap gap-4">
                <Link href="/dental/contact" className="rounded-full bg-white px-7 py-3.5 font-semibold text-[#0284c7] transition hover:bg-sky-50">Book Appointment →</Link>
                <Link href="/dental/services" className="rounded-full border border-white/25 px-7 py-3.5 font-semibold text-white transition hover:bg-white/10">Our Services</Link>
              </div>
              <div className="mt-10 flex flex-wrap gap-8">
                {[["15+","Years experience"],["8,000+","Patients treated"],["MOH","Registered"]].map(([v,l]) => (
                  <div key={l}>
                    <p className="text-2xl font-bold text-white">{v}</p>
                    <p className="text-xs uppercase tracking-wide text-sky-300">{l}</p>
                  </div>
                ))}
              </div>
            </div>
            {/* Visual card */}
            <div className="flex justify-center lg:justify-end">
              <div className="w-full max-w-sm rounded-3xl bg-white/10 p-8 backdrop-blur-sm border border-white/20">
                <p className="text-sm font-semibold uppercase tracking-widest text-sky-300">Opening Hours</p>
                <div className="mt-5 space-y-3">
                  {[["Mon – Fri","9:00 AM – 6:00 PM"],["Saturday","9:00 AM – 4:00 PM"],["Sunday","Closed"],["Public Holidays","By appointment"]].map(([d,t]) => (
                    <div key={d} className="flex justify-between border-b border-white/10 pb-3">
                      <span className="text-sm text-sky-100">{d}</span>
                      <span className="text-sm font-semibold text-white">{t}</span>
                    </div>
                  ))}
                </div>
                <Link href="/dental/contact" className="mt-6 block rounded-xl bg-white py-3.5 text-center text-sm font-bold text-[#0284c7] transition hover:bg-sky-50">Book Online</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <span className="text-sm font-semibold uppercase tracking-widest text-[#0284c7]">What We Offer</span>
            <h2 className="mt-3 text-3xl font-bold text-slate-900 sm:text-4xl">Complete dental care under one roof</h2>
            <p className="mx-auto mt-4 max-w-xl text-slate-500">From your first visit to long-term smile maintenance — we have everything your family needs.</p>
          </div>
          <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((s) => (
              <div key={s.t} className="group rounded-2xl border border-slate-200 bg-white p-7 transition-all hover:-translate-y-1 hover:border-[#0284c7]/20 hover:shadow-lg hover:shadow-sky-100">
                <div className="mb-4 h-1 w-8 rounded-full bg-[#0284c7] transition-all group-hover:w-14" />
                <h3 className="text-lg font-semibold text-slate-900">{s.t}</h3>
                <p className="mt-2 text-sm text-slate-600">{s.d}</p>
                <Link href="/dental/services" className="mt-5 inline-flex items-center gap-1 text-sm font-medium text-[#0284c7] hover:text-[#0369a1]">
                  Learn more <svg className="h-3.5 w-3.5" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd"/></svg>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Us */}
      <section className="bg-sky-50 py-20 sm:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <span className="text-sm font-semibold uppercase tracking-widest text-[#0284c7]">Why Choose SmileCare</span>
            <h2 className="mt-3 text-3xl font-bold text-slate-900 sm:text-4xl">Dentistry you can trust</h2>
          </div>
          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2">
            {reasons.map(([t, d]) => (
              <div key={t} className="flex gap-5 rounded-2xl border border-sky-200 bg-white p-7">
                <span className="mt-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#0284c7]/10 text-[#0284c7]">
                  <svg className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/></svg>
                </span>
                <div>
                  <p className="font-semibold text-slate-900">{t}</p>
                  <p className="mt-1 text-sm text-slate-600">{d}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#0284c7] py-20">
        <div className="mx-auto max-w-3xl px-4 text-center">
          <h2 className="text-3xl font-bold text-white sm:text-4xl">Ready for a healthier smile?</h2>
          <p className="mt-4 text-sky-100">New patients always welcome. Schedule your first visit today.</p>
          <Link href="/dental/contact" className="mt-8 inline-block rounded-full bg-white px-8 py-4 font-semibold text-[#0284c7] transition hover:bg-sky-50">Book an Appointment</Link>
        </div>
      </section>
    </div>
  );
}
