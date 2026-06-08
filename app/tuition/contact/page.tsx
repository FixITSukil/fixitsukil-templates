import ContactForm from "../../components/ContactForm";

const details = [
  { label: "Phone", value: "+60 1X-XXX XXXX", icon: <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8}><path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/></svg> },
  { label: "Email", value: "hello@yourtuitioncentre.com", icon: <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8}><path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg> },
  { label: "Location", value: "Kuala Lumpur, Malaysia", icon: <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8}><path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/><path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/></svg> },
  { label: "Office Hours", value: "Mon–Sat, 9:00 AM – 7:00 PM", icon: <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8}><circle cx="12" cy="12" r="9"/><path strokeLinecap="round" strokeLinejoin="round" d="M12 7v5l3 3"/></svg> },
];

export default function TuitionContact() {
  return (
    <div>
      <section className="relative overflow-hidden bg-gradient-to-br from-[#1a56db] to-[#1e3a8a] py-20 sm:py-24">
        <div className="absolute inset-0 opacity-[0.06]" style={{ backgroundImage: "radial-gradient(circle at 1px 1px,#fff 1px,transparent 0)", backgroundSize: "28px 28px" }} />
        <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <span className="text-sm font-semibold uppercase tracking-widest text-orange-300">Contact Us</span>
          <h1 className="mt-3 text-4xl font-bold text-white sm:text-5xl">Enrol your child today</h1>
          <p className="mt-4 max-w-xl text-blue-100">Book a free trial class, ask about our programs, or simply find out if we&apos;re the right fit for your child.</p>
        </div>
      </section>

      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-5">
            <div className="lg:col-span-2">
              <h2 className="text-2xl font-bold text-slate-900">Contact Information</h2>
              <ul className="mt-8 space-y-6">
                {details.map(({ label, value, icon }) => (
                  <li key={label} className="flex items-start gap-4">
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#1a56db]/10 text-[#1a56db]">{icon}</span>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">{label}</p>
                      <p className="mt-0.5 text-lg text-slate-900">{value}</p>
                    </div>
                  </li>
                ))}
              </ul>

              <div className="mt-10 rounded-2xl border border-[#f97316]/30 bg-orange-50 p-6">
                <p className="font-semibold text-slate-900">Free Trial Class</p>
                <p className="mt-1 text-sm text-slate-600">Your child can attend one session completely free — no commitment required. Just fill in the form and we&apos;ll get in touch to arrange a suitable time.</p>
              </div>
            </div>

            <div className="lg:col-span-3">
              <div className="rounded-3xl border border-slate-200 bg-slate-50 p-8 sm:p-10">
                <h2 className="mb-6 text-2xl font-bold text-slate-900">Send us a Message</h2>
                <ContactForm accentClass="bg-[#1a56db]" btnClass="bg-[#1a56db] hover:bg-[#1e40af]" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
