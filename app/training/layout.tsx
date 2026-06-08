"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const nav = [
  { href: "/training", label: "Home" },
  { href: "/training/services", label: "Services" },
  { href: "/training/contact", label: "Contact" },
];

export default function TrainingLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  return (
    <div className="min-h-screen bg-white font-sans">
      <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/90 backdrop-blur-md">
        <div className="mx-auto flex h-18 max-w-6xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
          <Link href="/training" className="flex items-center gap-2.5">
            <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#14304d] text-sm font-bold text-white">TC</span>
            <span className="flex flex-col leading-none">
              <span className="text-lg font-bold text-[#14304d]">Training</span>
              <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#c19a3e]">&amp; Consultancy</span>
            </span>
          </Link>
          <nav className="hidden items-center gap-1 md:flex">
            {nav.map((l) => (
              <Link key={l.href} href={l.href} className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${pathname === l.href ? "text-[#14304d] font-semibold" : "text-slate-600 hover:text-[#14304d]"}`}>{l.label}</Link>
            ))}
            <Link href="/training/contact" className="ml-2 rounded-full bg-[#14304d] px-5 py-2.5 text-sm font-semibold text-white hover:bg-[#1f4a78]">Get in Touch</Link>
          </nav>
          <button onClick={() => setOpen(v => !v)} className="inline-flex h-10 w-10 items-center justify-center rounded-lg text-[#14304d] hover:bg-slate-100 md:hidden">
            {open ? <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
                   : <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}><line x1="4" y1="7" x2="20" y2="7"/><line x1="4" y1="12" x2="20" y2="12"/><line x1="4" y1="17" x2="20" y2="17"/></svg>}
          </button>
        </div>
        {open && (
          <div className="border-t border-slate-200 bg-white md:hidden">
            <div className="space-y-1 px-4 py-4">
              {nav.map((l) => <Link key={l.href} href={l.href} onClick={() => setOpen(false)} className="block rounded-lg px-4 py-3 text-base font-medium text-slate-600 hover:bg-slate-50 hover:text-[#14304d]">{l.label}</Link>)}
              <Link href="/training/contact" onClick={() => setOpen(false)} className="block rounded-lg bg-[#14304d] px-4 py-3 text-center text-base font-semibold text-white">Get in Touch</Link>
            </div>
          </div>
        )}
      </header>
      <main>{children}</main>
      <footer className="bg-[#0c2138] text-slate-300">
        <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
            <div>
              <p className="text-lg font-bold text-white">Training &amp; Consultancy</p>
              <p className="mt-1 text-sm text-slate-400">Empowering professionals across Malaysia.</p>
            </div>
            <div className="flex gap-4 text-sm">
              {nav.map((l) => <Link key={l.href} href={l.href} className="hover:text-white">{l.label}</Link>)}
            </div>
          </div>
          <p className="mt-8 border-t border-white/10 pt-8 text-center text-xs text-slate-500">&copy; {new Date().getFullYear()} Training &amp; Consultancy. All rights reserved. &middot; Kuala Lumpur, Malaysia</p>
        </div>
      </footer>
    </div>
  );
}
