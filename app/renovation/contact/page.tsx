import ContactForm from "../../components/ContactForm";

const details = [
  { label: "Phone / WhatsApp", value: "+60 1X-XXX XXXX", icon: <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8}><path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/></svg> },
  { label: "Email", value: "hello@yourcontractor.com", icon: <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8}><path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg> },
  { label: "Service Areas", value: "KL · Selangor · Putrajaya", icon: <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8}><path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/><path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/></svg> },
  { label: "Office Hours", value: "Mon–Sat, 8:00 AM – 6:00 PM", icon: <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8}><circle cx="12" cy="12" r="9"/><path strokeLinecap="round" strokeLinejoin="round" d="M12 7v5l3 3"/></svg> },
];

export default function RenovationContact() {
  return (
    <div>
      <section className="relative overflow-hidden bg-[#0f172a] py-20 sm:py-24">
        <div className="absolute inset-0" style={{ backgroundImage: "linear-gradient(135deg, #0f172a 0%, #1e293b 60%)" }} />
        <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <span className="text-sm font-semibold uppercase tracking-widest text-[#f59e0b]">Free Quotation</span>
          <h1 className="mt-3 text-4xl font-bold text-white sm:text-5xl">Request a free quote</h1>
          <p className="mt-4 max-w-xl text-slate-400">Tell us about your project and we&apos;ll arrange a free site visit and detailed quotation — no obligation, no pressure.</p>
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
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-[#1e293b]/10 text-[#1e293b]">{icon}</span>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">{label}</p>
                      <p className="mt-0.5 text-base text-slate-900">{value}</p>
                    </div>
                  </li>
                ))}
              </ul>

              <div className="mt-10 space-y-4">
                <div className="rounded-xl border border-[#f59e0b]/30 bg-amber-50 p-6">
                  <p className="font-semibold text-[#92400e]">What to expect</p>
                  <ul className="mt-3 space-y-2 text-sm text-slate-600">
                    {["Free site visit within 48 hours", "Detailed, itemised quotation", "No deposit until you sign off on the quote", "Full project timeline provided upfront"].map((pt) => (
                      <li key={pt} className="flex items-start gap-2">
                        <svg className="mt-0.5 h-4 w-4 shrink-0 text-[#f59e0b]" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/></svg>
                        {pt}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            <div className="lg:col-span-3">
              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-8 sm:p-10">
                <h2 className="mb-6 text-2xl font-bold text-slate-900">Tell Us About Your Project</h2>
                <ContactForm accentClass="bg-[#1e293b]" btnClass="bg-[#f59e0b] hover:bg-[#d97706]" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
