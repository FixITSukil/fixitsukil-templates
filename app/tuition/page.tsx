import Link from "next/link";

const subjects = [
  { n: "01", t: "Mathematics", d: "From basic arithmetic to Additional Maths — we break it down so it clicks." },
  { n: "02", t: "Science & Biology", d: "Conceptual understanding plus exam technique for UPSR, PT3, and SPM." },
  { n: "03", t: "English Language", d: "Reading, writing, comprehension, and oral communication at every level." },
  { n: "04", t: "Bahasa Malaysia", d: "Grammar, essay writing, and comprehension for all primary and secondary levels." },
  { n: "05", t: "Physics & Chemistry", d: "Lab concepts made clear with structured notes and practice papers." },
  { n: "06", t: "Additional Maths", d: "Focused coaching for one of the most challenging SPM subjects." },
];

const testimonials = [
  { q: "My daughter improved from a C to an A in Maths within three months. The teachers here truly care.", name: "Mrs Lim, Parent" },
  { q: "The small group classes meant I could ask questions without feeling shy. Best decision I made.", name: "Priya, SPM Student" },
  { q: "My son went from failing to passing with flying colours. The mock papers were incredibly helpful.", name: "Mr Ahmad, Parent" },
];

export default function TuitionHome() {
  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#1a56db] via-[#1e40af] to-[#1e3a8a] py-24 sm:py-36">
        <div className="absolute inset-0 opacity-[0.06]" style={{ backgroundImage: "radial-gradient(circle at 1px 1px,#fff 1px,transparent 0)", backgroundSize: "28px 28px" }} />
        <div className="absolute -right-16 top-12 h-72 w-72 rounded-full bg-[#f97316]/20 blur-3xl" />
        <div className="absolute -left-16 bottom-0 h-56 w-56 rounded-full bg-white/10 blur-3xl" />
        <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl animate-fade-up">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-xs font-medium uppercase tracking-widest text-orange-200">
              Tuition Centre · Kuala Lumpur
            </span>
            <h1 className="mt-6 text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl">
              Nurturing Potential.<br />
              <span className="text-[#f97316]">Achieving Excellence.</span>
            </h1>
            <p className="mt-6 max-w-xl text-lg text-blue-100">
              Small-class tuition for primary and secondary students — personalised coaching that builds confidence and delivers real results.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link href="/tuition/contact" className="rounded-full bg-[#f97316] px-7 py-3.5 font-semibold text-white transition hover:bg-[#ea6c10]">Enrol Now →</Link>
              <Link href="/tuition/programs" className="rounded-full border border-white/30 px-7 py-3.5 font-semibold text-white transition hover:bg-white/10">View Programs</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="border-b border-slate-100 bg-slate-50 py-14">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <dl className="grid grid-cols-3 gap-6 text-center">
            {[["98%","Pass Rate"],["1,200+","Students Taught"],["15+","Years Experience"]].map(([v,l]) => (
              <div key={l}>
                <dt className="text-3xl font-bold text-[#1a56db] sm:text-5xl">{v}</dt>
                <dd className="mt-1 text-xs uppercase tracking-wide text-slate-500 sm:text-sm">{l}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* Subjects */}
      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <span className="text-sm font-semibold uppercase tracking-widest text-[#f97316]">What We Teach</span>
            <h2 className="mt-3 text-3xl font-bold text-slate-900 sm:text-4xl">Subjects that matter</h2>
            <p className="mx-auto mt-4 max-w-xl text-slate-500">From UPSR to SPM — we cover the subjects your child needs most, taught by experienced and dedicated educators.</p>
          </div>
          <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {subjects.map((s) => (
              <div key={s.n} className="group rounded-2xl border border-slate-200 bg-white p-7 transition-all hover:-translate-y-1 hover:border-transparent hover:shadow-xl">
                <span className="text-3xl font-bold text-[#1a56db]/20">{s.n}</span>
                <h3 className="mt-3 text-lg font-semibold text-slate-900">{s.t}</h3>
                <p className="mt-2 text-sm text-slate-600">{s.d}</p>
              </div>
            ))}
          </div>
          <div className="mt-10 text-center">
            <Link href="/tuition/programs" className="font-semibold text-[#1a56db] hover:text-[#1e40af]">See all programs & fees →</Link>
          </div>
        </div>
      </section>

      {/* Why Us */}
      <section className="bg-slate-50 py-20 sm:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-14 lg:grid-cols-2 lg:items-center">
            <div>
              <span className="text-sm font-semibold uppercase tracking-widest text-[#f97316]">Why Choose Us</span>
              <h2 className="mt-3 text-3xl font-bold text-slate-900 sm:text-4xl">Education done differently</h2>
              <ul className="mt-8 space-y-5">
                {[
                  ["Small Class Sizes", "Max 8 students per class — every child gets the attention they need."],
                  ["Experienced Educators", "All tutors hold degrees in their subjects with years of classroom experience."],
                  ["Exam-Focused Approach", "Past-year papers, mock exams, and structured revision every term."],
                  ["Progress Tracking", "Monthly reports keep parents informed and students accountable."],
                  ["Flexible Schedules", "Weekday and weekend sessions to fit every family's routine."],
                ].map(([t,d]) => (
                  <li key={t as string} className="flex gap-4">
                    <span className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#1a56db]/10 text-[#1a56db]">
                      <svg className="h-3.5 w-3.5" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/></svg>
                    </span>
                    <div><p className="font-semibold text-slate-900">{t}</p><p className="mt-0.5 text-sm text-slate-500">{d}</p></div>
                  </li>
                ))}
              </ul>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[["8","Max class size"],["SPM","Exam specialist"],["Mon–Sat","Classes available"],["Free","Trial class"]].map(([v,l]) => (
                <div key={l} className="flex flex-col items-center justify-center rounded-2xl border border-slate-200 bg-white p-8 text-center">
                  <p className="text-3xl font-bold text-[#1a56db]">{v}</p>
                  <p className="mt-1 text-sm text-slate-500">{l}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 sm:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <span className="text-sm font-semibold uppercase tracking-widest text-[#f97316]">Testimonials</span>
            <h2 className="mt-3 text-3xl font-bold text-slate-900 sm:text-4xl">What parents & students say</h2>
          </div>
          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-3">
            {testimonials.map((t) => (
              <div key={t.name} className="rounded-2xl border border-slate-200 bg-white p-7 shadow-sm">
                <p className="text-slate-600 leading-relaxed">&ldquo;{t.q}&rdquo;</p>
                <p className="mt-5 text-sm font-semibold text-[#1a56db]">{t.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#1a56db] py-20">
        <div className="mx-auto max-w-3xl px-4 text-center">
          <h2 className="text-3xl font-bold text-white sm:text-4xl">Ready to see your child thrive?</h2>
          <p className="mt-4 text-lg text-blue-100">Book a free trial class today — no commitment, no pressure.</p>
          <Link href="/tuition/contact" className="mt-8 inline-block rounded-full bg-[#f97316] px-8 py-4 font-semibold text-white transition hover:bg-[#ea6c10]">Book Free Trial Class</Link>
        </div>
      </section>
    </div>
  );
}
