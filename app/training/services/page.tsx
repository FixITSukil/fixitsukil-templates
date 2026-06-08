import Link from "next/link";

const services = [
  { t: "Corporate Training", d: "Customised, outcome-driven training that builds real capability across your workforce.", pts: ["Aligned to company objectives","Interactive workshops & assessments","In-person, hybrid, or online delivery","Pre- and post-training evaluation"] },
  { t: "Leadership Development", d: "Strengthen decision-making, strategic thinking, and people-management skills.", pts: ["Executive coaching & mentoring","360-degree feedback","Emotional intelligence training","Visioning & strategic planning"] },
  { t: "Business Consultancy", d: "Strategic advisory to optimise your operations, processes, and overall performance.", pts: ["Organisational audit & assessment","Strategic planning support","Process optimisation","Change management"] },
  { t: "Soft Skills Workshops", d: "Practical interpersonal and professional skills for today's workplace.", pts: ["Effective communication","Team building & collaboration","Critical thinking & problem-solving","Time management & productivity"] },
  { t: "Sales & Customer Service", d: "Equip your teams to exceed targets and deliver exceptional customer experiences.", pts: ["Sales techniques & closing skills","Customer service excellence","Handling objections & difficult situations","Relationship-building strategies"] },
  { t: "Technical Skills Training", d: "Keep your people current with the latest tools, technologies, and industry practices.", pts: ["IT & software proficiency","Industry certifications","Hands-on practical sessions","Ongoing learning resources"] },
];

export default function TrainingServices() {
  return (
    <div>
      <section className="relative overflow-hidden bg-[#14304d] py-20 sm:py-24">
        <div className="absolute inset-0 opacity-[0.05]" style={{ backgroundImage: "radial-gradient(circle at 1px 1px,#fff 1px,transparent 0)", backgroundSize: "32px 32px" }} />
        <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <span className="text-sm font-semibold uppercase tracking-widest text-[#d8b864]">Our Services</span>
          <h1 className="mt-3 text-4xl font-bold text-white sm:text-5xl">Comprehensive training &amp; consultancy</h1>
          <p className="mt-4 max-w-2xl text-lg text-slate-300">Solutions tailored to your organisational needs — from individual workshops to enterprise-wide development initiatives.</p>
        </div>
      </section>

      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
            {services.map((s) => (
              <div key={s.t} className="group rounded-3xl border border-slate-200 bg-white p-8 transition-all hover:-translate-y-1 hover:shadow-xl">
                <h3 className="text-xl font-bold text-[#14304d]">{s.t}</h3>
                <p className="mt-3 text-slate-600">{s.d}</p>
                <ul className="mt-5 space-y-2 border-t border-slate-100 pt-5">
                  {s.pts.map((p) => (
                    <li key={p} className="flex items-center gap-2.5 text-sm text-slate-700">
                      <span className="text-[#c19a3e]">✓</span>{p}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#14304d] py-16">
        <div className="mx-auto max-w-3xl px-4 text-center">
          <h2 className="text-2xl font-bold text-white sm:text-3xl">Interested in our services?</h2>
          <Link href="/training/contact" className="mt-6 inline-block rounded-full bg-[#c19a3e] px-8 py-3.5 font-semibold text-[#0c2138] transition hover:bg-[#d8b864]">Get in Touch →</Link>
        </div>
      </section>
    </div>
  );
}
