import ContactForm from "../../components/ContactForm";

const details = [
  { label: "Phone / WhatsApp", value: "+60 1X-XXX XXXX", icon: <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8}><path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/></svg> },
  { label: "Instagram", value: "@velvetshears", icon: <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8}><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg> },
  { label: "Location", value: "Bangsar, Kuala Lumpur", icon: <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8}><path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/><path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/></svg> },
  { label: "Hours", value: "Tue–Sun, 10:00 AM – 8:00 PM", icon: <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8}><circle cx="12" cy="12" r="9"/><path strokeLinecap="round" strokeLinejoin="round" d="M12 7v5l3 3"/></svg> },
];

export default function SalonContact() {
  return (
    <div>
      <section className="relative overflow-hidden bg-[#0a0a0a] py-20 sm:py-24">
        <div className="absolute inset-0" style={{ backgroundImage: "linear-gradient(135deg,#1a1500 0%,#0a0a0a 60%)" }} />
        <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <span className="text-[10px] font-medium uppercase tracking-[0.3em] text-[#d4af4a]">Bookings</span>
          <h1 className="mt-4 text-4xl font-bold text-white sm:text-5xl">Book your appointment</h1>
          <p className="mt-4 max-w-xl text-white/50">Prefer to call or WhatsApp? We&apos;re available too. Walk-ins always welcome when seats are open.</p>
        </div>
      </section>

      <section className="bg-[#111111] py-20 sm:py-28">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-5">
            <div className="lg:col-span-2">
              <h2 className="text-2xl font-bold text-white">Get in Touch</h2>
              <ul className="mt-8 space-y-6">
                {details.map(({ label, value, icon }) => (
                  <li key={label} className="flex items-start gap-4">
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-[#d4af4a]">{icon}</span>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wider text-white/30">{label}</p>
                      <p className="mt-0.5 text-base text-white">{value}</p>
                    </div>
                  </li>
                ))}
              </ul>

              <div className="mt-10 rounded-xl border border-[#d4af4a]/20 bg-[#1a1500]/40 p-6">
                <p className="text-sm font-semibold text-[#d4af4a]">Walk-Ins Welcome</p>
                <p className="mt-1 text-sm text-white/40">We accept walk-ins based on availability. For guaranteed slots — especially for colour and treatment services — we recommend booking ahead.</p>
              </div>
            </div>

            <div className="lg:col-span-3">
              <div className="rounded-2xl border border-white/10 bg-[#1a1a1a] p-8 sm:p-10">
                <h2 className="mb-6 text-xl font-bold text-white">Send a Booking Request</h2>
                <ContactForm accentClass="bg-[#d4af4a]" btnClass="bg-[#d4af4a] hover:bg-[#e8c76a] text-black" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
