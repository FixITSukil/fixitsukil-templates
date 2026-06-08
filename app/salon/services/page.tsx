import Link from "next/link";

const menu = [
  {
    cat: "Haircuts",
    icon: "✂",
    items: [
      { s: "Ladies Cut & Blow-dry", p: "From RM65" },
      { s: "Men's Classic Cut", p: "From RM35" },
      { s: "Kids Cut (Under 12)", p: "From RM25" },
      { s: "Fringe Trim", p: "RM20" },
      { s: "Bang Restyle", p: "From RM30" },
    ],
  },
  {
    cat: "Colour",
    icon: "◉",
    items: [
      { s: "Full Global Colour", p: "From RM150" },
      { s: "Root Touch-Up", p: "From RM100" },
      { s: "Balayage / Ombré", p: "From RM280" },
      { s: "Highlights (Full)", p: "From RM220" },
      { s: "Highlights (Half)", p: "From RM150" },
      { s: "Toning / Glossing", p: "From RM80" },
    ],
  },
  {
    cat: "Treatments",
    icon: "◈",
    items: [
      { s: "Keratin Smoothing", p: "From RM380" },
      { s: "Deep Conditioning", p: "From RM80" },
      { s: "Scalp Treatment", p: "From RM100" },
      { s: "Olaplex Treatment", p: "From RM120" },
      { s: "Bond Repair Mask", p: "From RM60" },
    ],
  },
  {
    cat: "Styling",
    icon: "◇",
    items: [
      { s: "Blow-dry & Style", p: "From RM45" },
      { s: "Updo / Special Occasion", p: "From RM120" },
      { s: "Bridal Trial", p: "From RM180" },
      { s: "Bridal Day-of Style", p: "From RM350" },
      { s: "Iron Set (Curl / Straight)", p: "From RM60" },
    ],
  },
  {
    cat: "Barbering",
    icon: "⌀",
    items: [
      { s: "Classic Cut + Style", p: "From RM45" },
      { s: "Skin Fade", p: "From RM50" },
      { s: "Beard Trim & Shape", p: "From RM30" },
      { s: "Hot Towel Shave", p: "From RM55" },
      { s: "Cut + Beard Combo", p: "From RM70" },
    ],
  },
  {
    cat: "Packages",
    icon: "✦",
    items: [
      { s: "Glow-Up (Cut + Colour + Blow-dry)", p: "From RM220" },
      { s: "Refresh (Cut + Treatment + Blow-dry)", p: "From RM160" },
      { s: "New Hire (Men's Cut + Beard + Style)", p: "From RM90" },
      { s: "Bridal Package (Trial + Day)", p: "From RM500" },
    ],
  },
];

export default function SalonServices() {
  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden bg-[#0a0a0a] py-24">
        <div className="absolute inset-0" style={{ backgroundImage: "linear-gradient(135deg,#1a1500 0%,#0a0a0a 50%,#001a10 100%)" }} />
        <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <span className="text-[10px] font-medium uppercase tracking-[0.3em] text-[#d4af4a]">Services & Pricing</span>
          <h1 className="mt-4 text-4xl font-bold text-white sm:text-5xl">The full menu</h1>
          <p className="mt-4 max-w-xl text-white/50">All prices are starting prices and may vary based on hair length, density, and complexity. A full consultation is included with every appointment.</p>
        </div>
      </section>

      {/* Menu */}
      <section className="bg-[#111111] py-20 sm:py-28">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
            {menu.map((cat) => (
              <div key={cat.cat} className="rounded-2xl border border-white/10 bg-[#1a1a1a] p-8">
                <div className="flex items-center gap-3">
                  <span className="text-xl text-[#d4af4a]">{cat.icon}</span>
                  <h2 className="text-xl font-bold text-white">{cat.cat}</h2>
                </div>
                <div className="mt-6 space-y-0 divide-y divide-white/[0.06]">
                  {cat.items.map((item) => (
                    <div key={item.s} className="flex items-center justify-between py-3.5">
                      <span className="text-sm text-white/70">{item.s}</span>
                      <span className="ml-4 shrink-0 text-sm font-semibold text-[#d4af4a]">{item.p}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
          <p className="mt-10 text-center text-sm text-white/30">All prices are subject to change. Please confirm pricing during your consultation.</p>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#d4af4a] py-16">
        <div className="mx-auto max-w-3xl px-4 text-center">
          <h2 className="text-2xl font-bold text-black sm:text-3xl">Ready to book?</h2>
          <p className="mt-3 text-black/70">Walk in or reach out to schedule your appointment.</p>
          <Link href="/salon/contact" className="mt-6 inline-block rounded-full bg-black px-8 py-3.5 font-semibold text-white transition hover:bg-[#1a1a1a]">Book Now →</Link>
        </div>
      </section>
    </div>
  );
}
