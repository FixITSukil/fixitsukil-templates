"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const nav = [
  { href: "/dental", label: "Home" },
  { href: "/dental/services", label: "Services" },
  { href: "/dental/contact", label: "Contact" },
];

export default function DentalLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  return (
    <div className="min-h-screen bg-white font-sans">
      <header className="sticky top-0 z-50 border-b border-slate-100 bg-white/95 backdrop-blur-md shadow-sm">
        <div className="mx-auto flex h-18 max-w-6xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
          <Link href="/dental" className="flex items-center gap-2.5">
            <svg className="h-8 w-8 text-[#0284c7]" viewBox="0 0 32 32" fill="none">
              <circle cx="16" cy="16" r="15" stroke="currentColor" strokeWidth="1.5"/>
              <path d="M10 14c0-3.314 2.686-6 6-6s6 2.686 6 6c0 2-.5 4-1.5 5.5S18 22 16 24c-2-2-3-3-4.5-4.5S10 16 10 14z" fill="currentColor" fillOpacity="0.15" stroke="currentColor" strokeWidth="1.5"/>
              <path d="M13 14h6M16 11v6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
            </svg>
            <span className="flex flex-col leading-none">
              <span className="text-lg font-bold text-slate-900">SmileCare</span>
              <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#0284c7]">Dental Clinic</span>
            </span>
          </Link>
          <nav className="hidden items-center gap-1 md:flex">
            {nav.map((l) => (
              <Link key={l.href} href={l.href} className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${pathname === l.href ? "text-[#0284c7] font-semibold" : "text-slate-600 hover:text-[#0284c7]"}`}>{l.label}</Link>
            ))}
            <Link href="/dental/contact" className="ml-2 rounded-full bg-[#0284c7] px-5 py-2.5 text-sm font-semibold text-white hover:bg-[#0369a1]">Book Appointment</Link>
          </nav>
          <button onClick={() => setOpen(v => !v)} className="inline-flex h-10 w-10 items-center justify-center rounded-lg text-slate-700 hover:bg-slate-100 md:hidden">
            {open ? <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
                   : <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}><line x1="4" y1="7" x2="20" y2="7"/><line x1="4" y1="12" x2="20" y2="12"/><line x1="4" y1="17" x2="20" y2="17"/></svg>}
          </button>
        </div>
        {open && (
          <div className="border-t border-slate-100 bg-white md:hidden">
            <div className="space-y-1 px-4 py-4">
              {nav.map((l) => <Link key={l.href} href={l.href} onClick={() => setOpen(false)} className="block rounded-lg px-4 py-3 text-base font-medium text-slate-600 hover:bg-sky-50 hover:text-[#0284c7]">{l.label}</Link>)}
              <Link href="/dental/contact" onClick={() => setOpen(false)} className="block rounded-lg bg-[#0284c7] px-4 py-3 text-center text-base font-semibold text-white">Book Appointment</Link>
            </div>
          </div>
        )}
      </header>
      <main>{children}</main>
      <footer className="bg-[#0c4a6e] text-white">
        <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
            <div>
              <p className="text-lg font-bold">SmileCare Dental Clinic</p>
              <p className="mt-1 text-sm text-sky-300">Caring for your smile with expertise and compassion.</p>
            </div>
            <div className="flex gap-4 text-sm text-sky-300">
              {nav.map((l) => <Link key={l.href} href={l.href} className="hover:text-white transition-colors">{l.label}</Link>)}
            </div>
          </div>
          <p className="mt-8 border-t border-white/20 pt-8 text-center text-xs text-sky-400">&copy; {new Date().getFullYear()} SmileCare Dental Clinic. All rights reserved. · Kuala Lumpur, Malaysia</p>
        </div>
      </footer>
    </div>
  );
}
