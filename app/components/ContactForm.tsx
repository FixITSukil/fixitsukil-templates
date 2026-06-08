"use client";
import { useState } from "react";
import { CheckIcon } from "./Icons";

type Props = { accentClass: string; btnClass: string };

export default function ContactForm({ accentClass, btnClass }: Props) {
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });
  const [sent, setSent] = useState(false);

  const onChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm((p) => ({ ...p, [e.target.name]: e.target.value }));

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: wire up API route for email sending (Resend / SendGrid)
    setSent(true);
    setTimeout(() => { setForm({ name: "", email: "", phone: "", message: "" }); setSent(false); }, 4000);
  };

  const inp = "w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-slate-900 placeholder-slate-400 outline-none focus:border-current focus:ring-2 focus:ring-current/20 transition-colors";

  return (
    <form onSubmit={onSubmit} className="space-y-4">
      {sent && (
        <div className={`flex items-center gap-3 rounded-xl px-4 py-3 text-white ${accentClass}`}>
          <CheckIcon className="h-5 w-5 shrink-0" />
          Thank you! We&apos;ll be in touch soon.
        </div>
      )}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div>
          <label className="mb-1.5 block text-sm font-medium text-slate-700">Full Name *</label>
          <input name="name" type="text" required value={form.name} onChange={onChange} placeholder="Your name" className={inp} />
        </div>
        <div>
          <label className="mb-1.5 block text-sm font-medium text-slate-700">Phone</label>
          <input name="phone" type="tel" value={form.phone} onChange={onChange} placeholder="+60 ..." className={inp} />
        </div>
      </div>
      <div>
        <label className="mb-1.5 block text-sm font-medium text-slate-700">Email Address *</label>
        <input name="email" type="email" required value={form.email} onChange={onChange} placeholder="you@email.com" className={inp} />
      </div>
      <div>
        <label className="mb-1.5 block text-sm font-medium text-slate-700">Message *</label>
        <textarea name="message" required rows={5} value={form.message} onChange={onChange} placeholder="Tell us how we can help..." className={`${inp} resize-y`} />
      </div>
      <button type="submit" className={`w-full rounded-full py-3.5 text-base font-semibold text-white shadow-sm transition-all hover:opacity-90 hover:shadow-md ${btnClass}`}>
        Send Message
      </button>
    </form>
  );
}
