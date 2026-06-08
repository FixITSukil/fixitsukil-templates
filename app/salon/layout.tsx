"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const nav = [
  { href: "/salon", label: "Home" },
  { href: "/salon/services", label: "Services" },
  { href: "/salon/contact", label: "Contact" },
];

export default function SalonLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  return (
    <div className="min-h-screen bg-[#111111] font-sans">
      <header className="sticky top-0 z-50 border-b border-white/10 bg-[#111111]/95 backdrop-blur-md">
        <div className="mx-auto flex h-18 max-w-6xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
          <Link href="/salon" className="flex items-center gap-3">
            <span className="flex h-9 w-9 items-center justify-center rounded-full border border-[#b8972a] text-xs font-extrabold tracking-wider text-[#d4af4a]">VS</span>
            <span className="flex flex-col leading-none">
              <span className="text-base font-bold tracking-wider text-white uppercase">Velvet Shears</span>
              <span className="text-[9px] font-medium uppercase tracking-[0.25em] text-[#b8972a]">Hair Studio</span>
            </span>
          </Link>
          <nav className="hidden items-center gap-2 md:flex">
            {nav.map((l) => (
              <Link key={l.href} href={l.href} className={`px-4 py-2 text-sm font-medium tracking-wide transition-colors ${pathname === l.href ? "text-[#d4af4a]" : "text-white/60 hover:text-white"}`}>{l.label}</Link>
            ))}
            <Link href="/salon/contact" className="ml-2 rounded-full border border-[#d4af4a] px-5 py-2.5 text-sm font-semibold text-[#d4af4a] transition hover:bg-[#d4af4a] hover:text-black">Book Now</Link>
          </nav>
          <button onClick={() => setOpen(v => !v)} className="inline-flex h-10 w-10 items-center justify-center rounded-lg text-white/70 hover:bg-white/10 md:hidden">
            {open ? <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8}><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
                   : <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8}><line x1="4" y1="7" x2="20" y2="7"/><line x1="4" y1="12" x2="20" y2="12"/><line x1="4" y1="17" x2="20" y2="17"/></svg>}
          </button>
        </div>
        {open && (
          <div className="border-t border-white/10 bg-[#1a1a1a] md:hidden">
            <div className="space-y-1 px-4 py-4">
              {nav.map((l) => <Link key={l.href} href={l.href} onClick={() => setOpen(false)} className="block rounded-lg px-4 py-3 text-base font-medium text-white/70 hover:bg-white/5 hover:text-white">{l.label}</Link>)}
              <Link href="/salon/contact" onClick={() => setOpen(false)} className="block rounded-full border border-[#d4af4a] px-4 py-3 text-center text-base font-semibold text-[#d4af4a]">Book Now</Link>
            </div>
          </div>
        )}
      </header>
      <main>{children}</main>
      <footer className="border-t border-white/10 bg-[#0a0a0a] text-white/50">
        <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
            <div>
              <p className="text-base font-bold tracking-wider text-white uppercase">Velvet Shears</p>
              <p className="mt-1 text-sm text-white/40">Where style meets precision.</p>
            </div>
            <div className="flex gap-5 text-sm">
              {nav.map((l) => <Link key={l.href} href={l.href} className="hover:text-white transition-colors">{l.label}</Link>)}
            </div>
          </div>
          <p className="mt-8 border-t border-white/10 pt-8 text-center text-xs text-white/30">&copy; {new Date().getFullYear()} Velvet Shears Hair Studio. All rights reserved. · Kuala Lumpur, Malaysia</p>
        </div>
      </footer>
    </div>
  );
}
