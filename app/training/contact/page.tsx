import ContactForm from "../../components/ContactForm";
import { PhoneIcon, MailIcon, MapPinIcon, ClockIcon } from "../../components/Icons";

const details = [
  { Icon: PhoneIcon, label: "Phone", value: "+60 1X-XXX XXXX" },
  { Icon: MailIcon, label: "Email", value: "hello@yourtrainingbusiness.com" },
  { Icon: MapPinIcon, label: "Location", value: "Kuala Lumpur, Malaysia" },
  { Icon: ClockIcon, label: "Office Hours", value: "Mon–Fri, 9:00 AM – 6:00 PM" },
];

export default function TrainingContact() {
  return (
    <div>
      <section className="relative overflow-hidden bg-[#14304d] py-20 sm:py-24">
        <div className="absolute inset-0 opacity-[0.05]" style={{ backgroundImage: "radial-gradient(circle at 1px 1px,#fff 1px,transparent 0)", backgroundSize: "32px 32px" }} />
        <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <span className="text-sm font-semibold uppercase tracking-widest text-[#d8b864]">Contact Us</span>
          <h1 className="mt-3 text-4xl font-bold text-white sm:text-5xl">Let&apos;s start a conversation</h1>
        </div>
      </section>
      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-5">
            <div className="lg:col-span-2">
              <h2 className="text-2xl font-bold text-[#14304d]">Contact Information</h2>
              <ul className="mt-8 space-y-6">
                {details.map(({ Icon, label, value }) => (
                  <li key={label} className="flex items-start gap-4">
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#14304d]/8 text-[#14304d]"><Icon /></span>
                    <div><p className="text-xs font-semibold uppercase tracking-wide text-slate-400">{label}</p><p className="mt-0.5 text-lg text-[#14304d]">{value}</p></div>
                  </li>
                ))}
              </ul>
            </div>
            <div className="lg:col-span-3">
              <div className="rounded-3xl border border-slate-200 bg-slate-50 p-8 sm:p-10">
                <h2 className="mb-6 text-2xl font-bold text-[#14304d]">Send us a Message</h2>
                <ContactForm accentClass="bg-[#14304d]" btnClass="bg-[#14304d] hover:bg-[#1f4a78]" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
