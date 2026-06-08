import Link from "next/link";

const levels = [
  {
    level: "Primary (UPSR / Year 1–6)",
    color: "bg-blue-50 border-blue-200",
    badge: "bg-[#1a56db] text-white",
    subjects: [
      { s: "Mathematics", d: "Numeracy, operations, fractions, geometry, problem-solving." },
      { s: "Science", d: "Life processes, materials, forces — concepts made visual and fun." },
      { s: "English Language", d: "Phonics foundation to full sentence writing and comprehension." },
      { s: "Bahasa Malaysia", d: "Reading, writing, grammar, and essay skills." },
    ],
  },
  {
    level: "Lower Secondary (PT3 / Form 1–3)",
    color: "bg-orange-50 border-orange-200",
    badge: "bg-[#f97316] text-white",
    subjects: [
      { s: "Mathematics", d: "Algebra, geometry, statistics, and directed numbers." },
      { s: "Science", d: "Biology, Chemistry, Physics concepts at foundation level." },
      { s: "English Language", d: "Grammar, literature, essay, and PT3 exam technique." },
      { s: "Bahasa Malaysia", d: "Karangan, rumusan, tatabahasa and reading comprehension." },
    ],
  },
  {
    level: "Upper Secondary (SPM / Form 4–5)",
    color: "bg-slate-50 border-slate-200",
    badge: "bg-slate-700 text-white",
    subjects: [
      { s: "Additional Mathematics", d: "Functions, calculus, statistics — with intensive drill papers." },
      { s: "Physics", d: "Motion, waves, electricity, and modern physics with worked examples." },
      { s: "Chemistry", d: "Organic, inorganic, and physical chemistry with practical notes." },
      { s: "Biology", d: "Cell biology, genetics, ecology — all exam topics covered." },
    ],
  },
];

const schedule = [
  { day: "Monday – Wednesday", time: "3:00 PM – 5:00 PM & 7:00 PM – 9:00 PM" },
  { day: "Thursday – Friday", time: "3:00 PM – 5:00 PM & 7:00 PM – 9:00 PM" },
  { day: "Saturday", time: "9:00 AM – 12:00 PM & 2:00 PM – 5:00 PM" },
  { day: "Sunday", time: "By appointment (intensive revision)" },
];

export default function TuitionPrograms() {
  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#1a56db] to-[#1e3a8a] py-20 sm:py-24">
        <div className="absolute inset-0 opacity-[0.06]" style={{ backgroundImage: "radial-gradient(circle at 1px 1px,#fff 1px,transparent 0)", backgroundSize: "28px 28px" }} />
        <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <span className="text-sm font-semibold uppercase tracking-widest text-orange-300">Our Programs</span>
          <h1 className="mt-3 text-4xl font-bold text-white sm:text-5xl">Programs & Subjects</h1>
          <p className="mt-4 max-w-2xl text-lg text-blue-100">UPSR, PT3, and SPM — structured tuition covering the subjects that matter most, at a pace that suits your child.</p>
        </div>
      </section>

      {/* Programs by Level */}
      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 space-y-14">
          {levels.map((lvl) => (
            <div key={lvl.level} className={`rounded-3xl border p-8 sm:p-10 ${lvl.color}`}>
              <span className={`inline-block rounded-full px-4 py-1.5 text-xs font-bold uppercase tracking-widest ${lvl.badge}`}>{lvl.level}</span>
              <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2">
                {lvl.subjects.map((sub) => (
                  <div key={sub.s} className="rounded-2xl border border-white/60 bg-white p-6 shadow-sm">
                    <h3 className="font-bold text-slate-900">{sub.s}</h3>
                    <p className="mt-2 text-sm text-slate-600">{sub.d}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Fees */}
      <section className="bg-slate-50 py-20 sm:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <span className="text-sm font-semibold uppercase tracking-widest text-[#f97316]">Fee Structure</span>
            <h2 className="mt-3 text-3xl font-bold text-slate-900 sm:text-4xl">Simple, transparent fees</h2>
            <p className="mt-4 text-slate-500">All fees are per month (4 sessions). No registration fee for the first enrolment.</p>
          </div>
          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-3">
            {[
              { plan: "Primary", price: "RM120", freq: "/ month", pts: ["4 sessions/month","8 students max per class","Monthly progress report","Past-year paper sets"] },
              { plan: "Lower Secondary", price: "RM160", freq: "/ month", pts: ["4 sessions/month","8 students max per class","Monthly progress report","PT3 past-year drills"] },
              { plan: "Upper Secondary", price: "RM200", freq: "/ month", pts: ["4 sessions/month","8 students max per class","Monthly progress report","SPM intensive revision package"], highlight: true },
            ].map((p) => (
              <div key={p.plan} className={`rounded-3xl border p-8 ${p.highlight ? "border-[#1a56db] bg-[#1a56db] text-white shadow-xl" : "border-slate-200 bg-white"}`}>
                <p className={`text-sm font-semibold uppercase tracking-widest ${p.highlight ? "text-blue-200" : "text-[#1a56db]"}`}>{p.plan}</p>
                <p className={`mt-2 text-4xl font-bold ${p.highlight ? "text-white" : "text-slate-900"}`}>{p.price}<span className={`text-sm font-normal ${p.highlight ? "text-blue-200" : "text-slate-500"}`}>{p.freq}</span></p>
                <ul className="mt-6 space-y-3">
                  {p.pts.map((pt) => (
                    <li key={pt} className={`flex items-center gap-2.5 text-sm ${p.highlight ? "text-blue-100" : "text-slate-600"}`}>
                      <svg className={`h-4 w-4 shrink-0 ${p.highlight ? "text-[#f97316]" : "text-[#1a56db]"}`} viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/></svg>
                      {pt}
                    </li>
                  ))}
                </ul>
                <Link href="/tuition/contact" className={`mt-8 block rounded-full py-3 text-center text-sm font-semibold transition ${p.highlight ? "bg-[#f97316] text-white hover:bg-[#ea6c10]" : "bg-[#1a56db] text-white hover:bg-[#1e40af]"}`}>Enrol Now</Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Schedule */}
      <section className="py-20 sm:py-24">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <span className="text-sm font-semibold uppercase tracking-widest text-[#f97316]">Timetable</span>
            <h2 className="mt-3 text-3xl font-bold text-slate-900 sm:text-4xl">Class schedule</h2>
          </div>
          <div className="mt-10 overflow-hidden rounded-2xl border border-slate-200">
            {schedule.map((row, i) => (
              <div key={row.day} className={`flex flex-col gap-1 px-6 py-5 sm:flex-row sm:items-center sm:justify-between ${i % 2 === 0 ? "bg-white" : "bg-slate-50"}`}>
                <p className="font-semibold text-slate-900">{row.day}</p>
                <p className="text-sm text-slate-600">{row.time}</p>
              </div>
            ))}
          </div>
          <p className="mt-6 text-center text-sm text-slate-500">Can&apos;t find a suitable slot? Contact us — we may be able to arrange a dedicated class.</p>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#1a56db] py-16">
        <div className="mx-auto max-w-3xl px-4 text-center">
          <h2 className="text-2xl font-bold text-white sm:text-3xl">Questions about our programs?</h2>
          <Link href="/tuition/contact" className="mt-6 inline-block rounded-full bg-[#f97316] px-8 py-3.5 font-semibold text-white transition hover:bg-[#ea6c10]">Contact Us →</Link>
        </div>
      </section>
    </div>
  );
}
