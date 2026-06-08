import ContactForm from "../../components/ContactForm";

const details = [
  { label: "Phone", value: "+60 1X-XXX XXXX", icon: <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8}><path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/></svg> },
  { label: "Email", value: "hello@yourdentalclinic.com", icon: <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8}><path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg> },
  { label: "Location", value: "Kuala Lumpur, Malaysia", icon: <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8}><path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/><path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/></svg> },
  { label: "Hours", value: "Mon–Fri 9AM–6PM · Sat 9AM–4PM", icon: <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8}><circle cx="12" cy="12" r="9"/><path strokeLinecap="round" strokeLinejoin="round" d="M12 7v5l3 3"/></svg> },
];

export default function DentalContact() {
  return (
    <div>
      <section className="relative overflow-hidden bg-gradient-to-br from-[#0c4a6e] to-[#0284c7] py-20 sm:py-24">
        <div className="absolute inset-0 opacity-[0.05]" style={{ backgroundImage: "radial-gradient(circle at 1px 1px,#fff 1px,transparent 0)", backgroundSize: "30px 30px" }} />
        <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <span className="text-sm font-semibold uppercase tracking-widest text-sky-200">Appointments</span>
          <h1 className="mt-3 text-4xl font-bold text-white sm:text-5xl">Book your appointment</h1>
          <p className="mt-4 max-w-xl text-sky-100/80">New and existing patients are welcome. Fill in the form and we&apos;ll confirm your appointment within one business day.</p>
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
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#0284c7]/10 text-[#0284c7]">{icon}</span>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">{label}</p>
                      <p className="mt-0.5 text-base text-slate-900">{value}</p>
                    </div>
                  </li>
                ))}
              </ul>

              <div className="mt-10 space-y-4">
                <div className="rounded-2xl bg-sky-50 border border-sky-200 p-6">
                  <p className="font-semibold text-[#0284c7]">New Patient?</p>
                  <p className="mt-1 text-sm text-slate-600">Your first visit includes a comprehensive oral examination and X-rays. Please arrive 10 minutes early to complete your patient form.</p>
                </div>
                <div className="rounded-2xl bg-amber-50 border border-amber-200 p-6">
                  <p className="font-semibold text-amber-700">Emergency?</p>
                  <p className="mt-1 text-sm text-slate-600">Call us directly for same-day emergency appointments. Toothache, swelling, broken teeth — we prioritise urgent cases.</p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-3">
              <div className="rounded-3xl border border-slate-200 bg-slate-50 p-8 sm:p-10">
                <h2 className="mb-6 text-2xl font-bold text-slate-900">Request an Appointment</h2>
                <ContactForm accentClass="bg-[#0284c7]" btnClass="bg-[#0284c7] hover:bg-[#0369a1]" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
