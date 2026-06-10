"use client";

import { useMemo, useState } from "react";

const PHONE = "60125777436"; // Fix It Sukil

/* ────────────────────────────────────────────────────────────
   Web-design pricing (RM). Tuned to KL/Selangor market for a fast,
   template-based build — affordable vs agencies, still credible.
   Edit these numbers to adjust the whole calculator.
   ──────────────────────────────────────────────────────────── */
const PRICING = {
  base: 1200,        // 1 template, home page, mobile responsive, WhatsApp button
  basePages: 1,      // pages included in base
  perPage: 150,      // each additional page (About, Services, Contact, ...)

  features: {
    contactForm: { label: "Contact form + email delivery", price: 250 },
    maps:        { label: "Google Maps + business hours", price: 100 },
    gallery:     { label: "Photo gallery / portfolio", price: 300 },
    booking:     { label: "Online booking / appointments", price: 700 },
    shop:        { label: "Online shop (e-commerce)", price: 1800 },
    blog:        { label: "Blog / news section", price: 400 },
    multilang:   { label: "Multi-language (BM + EN)", price: 500 },
    livechat:    { label: "Live chat widget", price: 150 },
  },

  content: {
    copywriting: { label: "Copywriting (we write your content)", price: 350 },
    photos:      { label: "Stock images sourced for you", price: 150 },
    seo:         { label: "Basic SEO setup", price: 450 },
    gbp:         { label: "Google Business Profile setup", price: 250 },
    email:       { label: "Business email on your domain", price: 150 },
  },

  domain: {
    none: { label: "I have my own", price: 0, note: "RM0" },
    com:  { label: ".com", price: 65, note: "~RM65/yr" },
    my:   { label: ".com.my / .my", price: 120, note: "~RM120/yr" },
  },

  care: {
    none:     { label: "None", price: 0, note: "Self-managed" },
    lite:     { label: "Lite", price: 80, note: "Hosting, SSL, backups, uptime" },
    standard: { label: "Standard", price: 180, note: "+ content & plugin updates" },
    pro:      { label: "Pro", price: 350, note: "+ priority support, SEO, reports" },
  },
};

type FeatureKey = keyof typeof PRICING.features;
type ContentKey = keyof typeof PRICING.content;
type DomainKey = keyof typeof PRICING.domain;
type CareKey = keyof typeof PRICING.care;

const rm = (n: number) => "RM " + n.toLocaleString("en-MY");

function Stepper({
  label, hint, value, setValue, min = 0, max = 30,
}: {
  label: string; hint: string; value: number; setValue: (n: number) => void; min?: number; max?: number;
}) {
  return (
    <div className="flex items-center justify-between gap-3 rounded-xl border border-neutral-200 bg-white px-4 py-3">
      <div className="min-w-0">
        <p className="text-[13.5px] font-semibold leading-tight text-neutral-800">{label}</p>
        <p className="text-[11.5px] text-neutral-400">{hint}</p>
      </div>
      <div className="flex items-center gap-2 shrink-0">
        <button
          type="button" aria-label={`Decrease ${label}`}
          onClick={() => setValue(Math.max(min, value - 1))}
          disabled={value <= min}
          className="flex h-8 w-8 items-center justify-center rounded-lg border border-neutral-300 text-neutral-600 transition hover:border-[#ED1C24] hover:text-[#ED1C24] disabled:opacity-30"
        >–</button>
        <span className="w-8 text-center text-base font-bold tabular-nums text-neutral-900">{value}</span>
        <button
          type="button" aria-label={`Increase ${label}`}
          onClick={() => setValue(Math.min(max, value + 1))}
          disabled={value >= max}
          className="flex h-8 w-8 items-center justify-center rounded-lg border border-neutral-300 text-neutral-600 transition hover:border-[#ED1C24] hover:text-[#ED1C24] disabled:opacity-30"
        >+</button>
      </div>
    </div>
  );
}

function Toggle({ label, price, on, onClick }: { label: string; price: number; on: boolean; onClick: () => void }) {
  return (
    <button
      type="button" onClick={onClick}
      className={`flex w-full items-center justify-between gap-3 rounded-xl border px-4 py-3 text-left transition ${
        on ? "border-[#ED1C24] bg-[#FFF3F4]" : "border-neutral-200 bg-white hover:border-neutral-300"
      }`}
    >
      <span className="flex items-center gap-3">
        <span className={`flex h-5 w-5 items-center justify-center rounded-md border text-xs font-bold ${
          on ? "border-[#ED1C24] bg-[#ED1C24] text-white" : "border-neutral-300 text-transparent"
        }`}>✓</span>
        <span className={`text-[13.5px] font-medium ${on ? "text-neutral-900" : "text-neutral-700"}`}>{label}</span>
      </span>
      <span className="shrink-0 text-[12.5px] font-semibold text-neutral-500">+{rm(price)}</span>
    </button>
  );
}

function OptionRow<T extends string>({
  options, value, setValue, suffix,
}: {
  options: { key: T; label: string; note: string; price: number }[];
  value: T; setValue: (k: T) => void; suffix?: string;
}) {
  return (
    <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
      {options.map((o) => {
        const active = o.key === value;
        return (
          <button
            key={o.key} type="button" onClick={() => setValue(o.key)}
            className={`rounded-xl border px-3.5 py-3 text-left transition ${
              active ? "border-[#ED1C24] bg-[#FFF3F4] ring-1 ring-[#ED1C24]" : "border-neutral-200 bg-white hover:border-neutral-300"
            }`}
          >
            <p className={`text-[13.5px] font-bold leading-tight ${active ? "text-[#ED1C24]" : "text-neutral-800"}`}>{o.label}</p>
            <p className="mt-0.5 text-[11.5px] text-neutral-400">{o.note}</p>
            <p className="mt-1 text-[12px] font-semibold text-neutral-500">
              {o.price === 0 ? "Included" : `${rm(o.price)}${suffix || ""}`}
            </p>
          </button>
        );
      })}
    </div>
  );
}

export default function QuoteCalculator() {
  const [pages, setPages] = useState(5);
  const [features, setFeatures] = useState<Record<FeatureKey, boolean>>({
    contactForm: true, maps: true, gallery: false, booking: false, shop: false, blog: false, multilang: false, livechat: false,
  });
  const [content, setContent] = useState<Record<ContentKey, boolean>>({
    copywriting: false, photos: false, seo: false, gbp: false, email: true,
  });
  const [domain, setDomain] = useState<DomainKey>("com");
  const [care, setCare] = useState<CareKey>("lite");

  const { lines, oneTime, monthly } = useMemo(() => {
    const lines: { label: string; amount: number }[] = [];
    lines.push({ label: "Website build (template + home page)", amount: PRICING.base });
    const extraPages = Math.max(0, pages - PRICING.basePages);
    if (extraPages) lines.push({ label: `${extraPages} additional page${extraPages > 1 ? "s" : ""}`, amount: extraPages * PRICING.perPage });

    (Object.keys(features) as FeatureKey[]).forEach((k) => {
      if (features[k]) lines.push({ label: PRICING.features[k].label, amount: PRICING.features[k].price });
    });
    (Object.keys(content) as ContentKey[]).forEach((k) => {
      if (content[k]) lines.push({ label: PRICING.content[k].label, amount: PRICING.content[k].price });
    });

    const d = PRICING.domain[domain];
    if (d.price) lines.push({ label: `Domain (${d.label}, first year)`, amount: d.price });

    const oneTime = lines.reduce((s, l) => s + l.amount, 0);
    const monthly = PRICING.care[care].price;
    return { lines, oneTime, monthly };
  }, [pages, features, content, domain, care]);

  const waMessage = useMemo(() => {
    const feat = (Object.keys(features) as FeatureKey[]).filter((k) => features[k]).map((k) => PRICING.features[k].label);
    const cont = (Object.keys(content) as ContentKey[]).filter((k) => content[k]).map((k) => PRICING.content[k].label);
    const L = [
      "Hi Fix It Sukil, I built a website quote on your site:",
      "",
      `• Pages: ${pages}`,
      `• Features: ${feat.join(", ") || "none"}`,
      `• Content/Growth: ${cont.join(", ") || "none"}`,
      `• Domain: ${PRICING.domain[domain].label}`,
      `• Care plan: ${PRICING.care[care].label}${monthly ? ` (${rm(monthly)}/mo)` : ""}`,
      "",
      `One-time estimate: ${rm(oneTime)}${monthly ? ` + ${rm(monthly)}/mo care` : ""}`,
      "",
      "Can you confirm a final quote?",
    ];
    return encodeURIComponent(L.join("\n"));
  }, [pages, features, content, domain, care, oneTime, monthly]);

  return (
    <div className="overflow-hidden rounded-2xl border border-neutral-200 bg-white shadow-soft">
      <div className="bg-[#060606] px-6 py-5">
        <p className="text-[11px] font-bold uppercase tracking-[0.14em] text-[#ED1C24]">Instant Estimate</p>
        <h3 className="mt-0.5 text-[22px] font-bold leading-tight text-white">Build your website quote</h3>
        <p className="mt-1 max-w-xl text-[13.5px] text-white/55">Pick what you need — your price updates live. No sign-up, no waiting.</p>
      </div>

      <div className="grid lg:grid-cols-[1fr_320px]">
        <div className="space-y-7 p-6">
          <section>
            <p className="mb-3 text-[12px] font-bold uppercase tracking-wider text-neutral-400">Size</p>
            <Stepper label="Number of pages" hint="Home, About, Services, Contact…" value={pages} setValue={setPages} min={1} max={30} />
          </section>

          <section>
            <p className="mb-3 text-[12px] font-bold uppercase tracking-wider text-neutral-400">Features</p>
            <div className="grid gap-2 sm:grid-cols-2">
              {(Object.keys(PRICING.features) as FeatureKey[]).map((k) => (
                <Toggle key={k} label={PRICING.features[k].label} price={PRICING.features[k].price}
                  on={features[k]} onClick={() => setFeatures((p) => ({ ...p, [k]: !p[k] }))} />
              ))}
            </div>
          </section>

          <section>
            <p className="mb-3 text-[12px] font-bold uppercase tracking-wider text-neutral-400">Content &amp; growth</p>
            <div className="grid gap-2 sm:grid-cols-2">
              {(Object.keys(PRICING.content) as ContentKey[]).map((k) => (
                <Toggle key={k} label={PRICING.content[k].label} price={PRICING.content[k].price}
                  on={content[k]} onClick={() => setContent((p) => ({ ...p, [k]: !p[k] }))} />
              ))}
            </div>
          </section>

          <section>
            <p className="mb-3 text-[12px] font-bold uppercase tracking-wider text-neutral-400">Domain</p>
            <OptionRow value={domain} setValue={setDomain}
              options={(Object.keys(PRICING.domain) as DomainKey[]).map((k) => ({ key: k, ...PRICING.domain[k] }))} />
          </section>

          <section>
            <p className="mb-3 text-[12px] font-bold uppercase tracking-wider text-neutral-400">Care plan (optional, monthly)</p>
            <OptionRow value={care} setValue={setCare} suffix="/mo"
              options={(Object.keys(PRICING.care) as CareKey[]).map((k) => ({ key: k, ...PRICING.care[k] }))} />
          </section>
        </div>

        {/* Summary */}
        <div className="border-t border-neutral-200 bg-neutral-50/60 p-6 lg:border-l lg:border-t-0">
          <div className="lg:sticky lg:top-6">
            <p className="mb-3 text-[12px] font-bold uppercase tracking-wider text-neutral-400">Your estimate</p>
            <div className="mb-4 max-h-[230px] space-y-1.5 overflow-y-auto pr-1">
              {lines.map((l, i) => (
                <div key={i} className="flex items-start justify-between gap-2 text-[12.5px]">
                  <span className="leading-snug text-neutral-500">{l.label}</span>
                  <span className="shrink-0 font-medium tabular-nums text-neutral-700">{rm(l.amount)}</span>
                </div>
              ))}
            </div>

            <div className="border-t border-neutral-200 pt-4">
              <div className="flex items-baseline gap-1.5">
                <span className="text-[32px] font-extrabold leading-none tabular-nums text-neutral-900">{rm(oneTime)}</span>
                <span className="text-[14px] font-semibold text-neutral-500">one-time</span>
              </div>
              {monthly > 0 && (
                <p className="mt-1 text-[14px] font-semibold text-[#ED1C24]">+ {rm(monthly)}/mo care</p>
              )}
              <p className="mt-1.5 text-[12px] leading-snug text-neutral-400">
                Estimate only — final quote confirmed on WhatsApp. Domain billed yearly.
              </p>
            </div>

            <a
              href={`https://wa.me/${PHONE}`}
              onClick={(e) => { e.preventDefault(); window.open(`https://wa.me/${PHONE}?text=${waMessage}`, "_blank", "noopener,noreferrer"); }}
              target="_blank" rel="noopener noreferrer"
              className="mt-4 block rounded-full bg-[#25D366] py-3 text-center text-sm font-bold text-white transition hover:bg-[#1db954]"
            >
              Get this quote on WhatsApp
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
