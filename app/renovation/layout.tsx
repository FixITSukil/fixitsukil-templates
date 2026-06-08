"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const nav = [
  { href: "/renovation", label: "Home" },
  { href: "/renovation/portfolio", label: "Portfolio" },
  { href: "/renovation/contact", label: "Contact" },
];

export default function RenovationLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  return (
    <div className="min-h-screen bg-white font-sans">
      <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur-md">
        <div className="mx-auto flex h-18 max-w-6xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
          <Link href="/renovation" className="flex items-center gap-3">
            <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#1e293b]">
              <svg className="h-5 w-5 text-[#f59e0b]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8}><path strokeLinecap="round" strokeLinejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"/></svg>
            </span>
            <span className="flex flex-col leading-none">
              <span className="text-lg font-bold text-slate-900">BuildRight</span>
              <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#f59e0b]">Renovation & Contractor</span>
            </span>
          </Link>
          <nav className="hidden items-center gap-1 md:flex">
            {nav.map((l) => (
              <Link key={l.href} href={l.href} className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${pathname === l.href ? "text-[#1e293b] font-semibold" : "text-slate-600 hover:text-[#1e293b]"}`}>{l.label}</Link>
            ))}
            <Link href="/renovation/contact" className="ml-2 rounded-full bg-[#f59e0b] px-5 py-2.5 text-sm font-semibold text-white hover:bg-[#d97706]">Get a Quote</Link>
          </nav>
          <button onClick={() => setOpen(v => !v)} className="inline-flex h-10 w-10 items-center justify-center rounded-lg text-slate-700 hover:bg-slate-100 md:hidden">
            {open ? <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
                   : <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}><line x1="4" y1="7" x2="20" y2="7"/><line x1="4" y1="12" x2="20" y2="12"/><line x1="4" y1="17" x2="20" y2="17"/></svg>}
          </button>
        </div>
        {open && (
          <div className="border-t border-slate-200 bg-white md:hidden">
            <div className="space-y-1 px-4 py-4">
              {nav.map((l) => <Link key={l.href} href={l.href} onClick={() => setOpen(false)} className="block rounded-lg px-4 py-3 text-base font-medium text-slate-600 hover:bg-slate-50">{l.label}</Link>)}
              <Link href="/renovation/contact" onClick={() => setOpen(false)} className="block rounded-lg bg-[#f59e0b] px-4 py-3 text-center text-base font-semibold text-white">Get a Quote</Link>
            </div>
          </div>
        )}
      </header>
      <main>{children}</main>
      <footer className="bg-[#0f172a] text-slate-400">
        <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
            <div>
              <p className="text-lg font-bold text-white">BuildRight Renovation</p>
              <p className="mt-1 text-sm text-slate-500">Quality craftsmanship, on time, on budget.</p>
            </div>
            <div className="flex gap-4 text-sm">
              {nav.map((l) => <Link key={l.href} href={l.href} className="hover:text-white transition-colors">{l.label}</Link>)}
            </div>
          </div>
          <p className="mt-8 border-t border-white/10 pt-8 text-center text-xs text-slate-600">&copy; {new Date().getFullYear()} BuildRight Renovation & Contractor. All rights reserved. · Selangor & Kuala Lumpur</p>
        </div>
      </footer>
    </div>
  );
}
