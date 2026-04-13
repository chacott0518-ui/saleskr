"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Button from "@/components/ui/Button";

// ─── 스크롤텔링 블록 데이터 ───────────────────────────────
const blocks = [
  {
    eyebrow: "OUR SERVICES",
    title: "Business to Business",
    description:
      "SalesKR collaborates with global partners to introduce Korean products to diverse markets worldwide. Through reliable supply chains and strong partnerships, we provide high-quality products at competitive prices. Our verified network spans 47 countries with trusted importers, distributors, and retail buyers who rely on us for consistent quality and fast fulfillment.",
    imageUrl:
      "https://images.unsplash.com/photo-1556761175-4b46a572b786?w=1400&q=85",
    buttons: [
      { label: "Wholesale Inquiry", variant: "primary" as const },
      { label: "Get Price List",    variant: "outline" as const },
    ],
  },
  {
    eyebrow: "K-FOOD EXPORT",
    title: "Korean Food & Kimchi Wholesale",
    description:
      "From authentic kimchi to ready-to-eat Korean meals, SalesKR supplies premium Korean food products to global importers and distributors. Sourced directly from Korean manufacturers with stable supply, competitive MOQ, and full export documentation support. Our Kimchi line is trusted by specialty grocery retailers and food service buyers across Asia, Australia, Europe, and North America.",
    imageUrl:
      "https://images.unsplash.com/photo-1498654896293-37aacf113fd9?w=1400&q=85",
    buttons: [
      { label: "Get K-Food Catalog", variant: "primary" as const },
      { label: "Request Quotation",  variant: "outline" as const },
    ],
  },
  {
    eyebrow: "OEM & PRIVATE LABEL",
    title: "Build Your Own Korean Brand",
    description:
      "We support full OEM production for cosmetics and food products. From concept to export, we handle everything including formulation development, packaging design, regulatory certification, and international logistics. Build your own brand backed by Korea's world-class manufacturing expertise — whether you are launching a new skincare line or developing a private-label Kimchi product for your market.",
    imageUrl:
      "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=1400&q=85",
    steps: [
      "Inquiry & Consultation",
      "Sample Development",
      "Production",
      "Export & Delivery",
    ],
    buttons: [
      { label: "Start OEM Project", variant: "primary" as const },
      { label: "OEM Inquiry",       variant: "outline" as const },
    ],
  },
];

// ─── 브랜드 데이터 ─────────────────────────────────────────
type Tier = "p" | "c" | "s";
interface Brand { n: string; t: Tier; dot: string; url: string; }

const brands: Brand[] = [
  { n: "Sulwhasoo",     t: "p", dot: "#C9A96E", url: "https://sulwhasoo.com" },
  { n: "HERA",          t: "p", dot: "#D4A0B0", url: "https://hera.com" },
  { n: "LANEIGE",       t: "p", dot: "#A0C4E8", url: "https://laneige.com" },
  { n: "IOPE",          t: "p", dot: "#8BAF8E", url: "https://iope.com" },
  { n: "Amorepacific",  t: "p", dot: "#9ABAC8", url: "https://amorepacific.com" },
  { n: "Innisfree",     t: "c", dot: "#7FAF7F", url: "https://innisfree.com" },
  { n: "ETUDE",         t: "c", dot: "#F4A7C0", url: "https://etude.com" },
  { n: "The Face Shop", t: "c", dot: "#A8C5A0", url: "https://thefaceshop.com" },
  { n: "AHC",           t: "c", dot: "#C0A8D8", url: "https://ahckorea.com" },
  { n: "MISSHA",        t: "c", dot: "#F0C080", url: "https://missha.com" },
  { n: "3CE",           t: "c", dot: "#E8A0C0", url: "https://3ce.com" },
  { n: "CLIO",          t: "c", dot: "#C8B0A0", url: "https://clio.com" },
  { n: "Peripera",      t: "c", dot: "#F0B0B0", url: "https://peripera.co.kr" },
  { n: "Banila Co",     t: "c", dot: "#D8C0A0", url: "https://banilaco.com" },
  { n: "Tony Moly",     t: "c", dot: "#F0C8B0", url: "https://tonymoly.com" },
  { n: "belif",         t: "s", dot: "#8FA8B8", url: "https://belif.com" },
  { n: "Dr.Jart+",      t: "s", dot: "#90B8C8", url: "https://drjart.com" },
  { n: "Skinfood",      t: "s", dot: "#B8D0A8", url: "https://skinfood.com" },
  { n: "Hince",         t: "s", dot: "#C8C8B8", url: "https://hince.com" },
  { n: "VDL",           t: "s", dot: "#A8B8D0", url: "https://vdl.co.kr" },
  { n: "Neogen",        t: "s", dot: "#90C0B0", url: "https://neogen.com" },
];

const tierLabel: Record<Tier, string> = { p: "Premium", c: "Core", s: "Specialty" };
const tierStyle: Record<Tier, string> = {
  p: "bg-[#EEF4FF] text-[#1E5FA8]",
  c: "bg-[#F0FBF5] text-[#0F6E56]",
  s: "bg-[#FFF6EE] text-[#BA7517]",
};

// ─── 트렌딩 데이터 ─────────────────────────────────────────
interface TrendBrand { n: string; b: "hot" | "new" | ""; s: string; url: string; }
const trends: TrendBrand[] = [
  { n: "COSRX",            b: "hot", s: "↑ 2.3M", url: "https://cosrx.com" },
  { n: "Beauty of Joseon", b: "hot", s: "↑ 1.8M", url: "https://beautyofjoseon.com" },
  { n: "Anua",             b: "new", s: "↑ 940K", url: "https://anuaofficial.com" },
  { n: "Torriden",         b: "new", s: "↑ 720K", url: "https://torriden.com" },
  { n: "Round Lab",        b: "",    s: "↑ 610K", url: "https://roundlab.com" },
  { n: "SKIN1004",         b: "hot", s: "↑ 590K", url: "https://skin1004.com" },
  { n: "d'Alba",           b: "",    s: "↑ 480K", url: "https://dalbaofficial.com" },
  { n: "Abib",             b: "new", s: "↑ 460K", url: "https://abib.co.kr" },
  { n: "mixsoon",          b: "new", s: "↑ 390K", url: "https://mixsoon.com" },
  { n: "ma:nyo",           b: "",    s: "↑ 370K", url: "https://manyofactory.com" },
  { n: "numbuzin",         b: "hot", s: "↑ 340K", url: "https://numbuzin.com" },
  { n: "Isntree",          b: "",    s: "↑ 290K", url: "https://isntree.com" },
  { n: "Pyunkang Yul",     b: "",    s: "↑ 270K", url: "https://pyunkangyul.com" },
  { n: "Dear Klairs",      b: "",    s: "↑ 250K", url: "https://klairs.com" },
  { n: "I'm From",         b: "new", s: "↑ 230K", url: "https://imfrom.co.kr" },
  { n: "Goodal",           b: "",    s: "↑ 210K", url: "https://goodal.com" },
  { n: "Haruharu Wonder",  b: "",    s: "↑ 195K", url: "https://haruharukorea.com" },
  { n: "Benton",           b: "",    s: "↑ 180K", url: "https://benton.co.kr" },
];
const marqueeRows = [trends.slice(0, 6), trends.slice(6, 12), trends.slice(12)];

// ─── 지도 데이터 ──────────────────────────────────────────
type RegionKey = "AP" | "EU" | "AM" | "ME";
const dotData: { x: number; y: number; c: string; r: RegionKey }[] = [
  { x: 665, y: 97,  c: "Japan",          r: "AP" },
  { x: 612, y: 98,  c: "China",          r: "AP" },
  { x: 618, y: 158, c: "Vietnam",        r: "AP" },
  { x: 600, y: 164, c: "Thailand",       r: "AP" },
  { x: 590, y: 170, c: "Malaysia",       r: "AP" },
  { x: 602, y: 178, c: "Singapore",      r: "AP" },
  { x: 605, y: 185, c: "Philippines",    r: "AP" },
  { x: 558, y: 145, c: "India",          r: "AP" },
  { x: 570, y: 155, c: "Bangladesh",     r: "AP" },
  { x: 695, y: 305, c: "Australia",      r: "AP" },
  { x: 718, y: 280, c: "New Zealand",    r: "AP" },
  { x: 388, y: 72,  c: "United Kingdom", r: "EU" },
  { x: 415, y: 70,  c: "Germany",        r: "EU" },
  { x: 400, y: 78,  c: "France",         r: "EU" },
  { x: 430, y: 76,  c: "Spain",          r: "EU" },
  { x: 440, y: 68,  c: "Netherlands",    r: "EU" },
  { x: 452, y: 64,  c: "Sweden",         r: "EU" },
  { x: 112, y: 135, c: "United States",  r: "AM" },
  { x: 122, y: 100, c: "Canada",         r: "AM" },
  { x: 155, y: 168, c: "Mexico",         r: "AM" },
  { x: 175, y: 285, c: "Brazil",         r: "AM" },
  { x: 162, y: 320, c: "Argentina",      r: "AM" },
  { x: 168, y: 255, c: "Colombia",       r: "AM" },
  { x: 507, y: 145, c: "UAE",            r: "ME" },
  { x: 495, y: 140, c: "Saudi Arabia",   r: "ME" },
  { x: 518, y: 138, c: "Qatar",          r: "ME" },
  { x: 472, y: 135, c: "Turkey",         r: "ME" },
  { x: 420, y: 230, c: "Kenya",          r: "ME" },
  { x: 432, y: 175, c: "Nigeria",        r: "ME" },
  { x: 435, y: 152, c: "Egypt",          r: "ME" },
  { x: 432, y: 288, c: "South Africa",   r: "ME" },
];

const regions: { code: RegionKey; name: string; count: string; color: string }[] = [
  { code: "AP", name: "Asia Pacific",         count: "18 countries", color: "#1E5FA8" },
  { code: "EU", name: "Europe",               count: "12 countries", color: "#0F6E56" },
  { code: "AM", name: "Americas",             count: "8 countries",  color: "#BA7517" },
  { code: "ME", name: "Middle East & Africa", count: "9 countries",  color: "#993556" },
];

const INITIAL_SHOW = 6;

// ─── BrandsSection ────────────────────────────────────────
function BrandsSection() {
  const [activeFilter, setActiveFilter] = useState<"all" | Tier>("all");
  const [expanded, setExpanded] = useState(false);

  const filtered =
    activeFilter === "all" ? brands : brands.filter((b) => b.t === activeFilter);
  const visibleBrands = expanded ? filtered : filtered.slice(0, INITIAL_SHOW);

  return (
    <section className="bg-white px-5 py-16 md:px-14 md:py-20">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="text-[11px] font-bold uppercase tracking-[.2em] text-[#1E5FA8]">
              Global Beauty Brands We Supply
            </p>
            <h2 className="mt-2 text-[26px] font-extrabold leading-tight text-[#0A1F44] md:text-[36px]">
              Brands We Supply
            </h2>
            <p className="mt-1 text-sm text-[#6B6B60]">
              Verified Korean cosmetic brands · duty-free & domestic channels
            </p>
          </div>
          <span className="rounded-full bg-[#F0EEE8] px-3 py-1.5 text-xs font-semibold text-[#6B6B60]">
            {filtered.length} brands
          </span>
        </div>

        <div
          className="mt-6 flex gap-2 overflow-x-auto pb-1"
          style={{ flexWrap: "nowrap", scrollbarWidth: "none", msOverflowStyle: "none" } as React.CSSProperties}
        >
          {(["all", "p", "c", "s"] as const).map((f) => (
            <button
              key={f}
              onClick={() => { setActiveFilter(f); setExpanded(false); }}
              className={`flex-shrink-0 rounded-full border px-4 py-1.5 text-xs font-bold transition-all duration-200 ${
                activeFilter === f
                  ? "border-[#0A1F44] bg-[#0A1F44] text-white"
                  : "border-[#E0DED8] bg-white text-[#6B6B60] hover:border-[#0A1F44] hover:text-[#0A1F44]"
              }`}
            >
              {f === "all" ? "All Brands" : f === "p" ? "★ Premium" : f === "c" ? "Core" : "Specialty"}
            </button>
          ))}
        </div>

        <div className="mt-7 grid grid-cols-2 gap-0.5 md:grid-cols-3">
          {visibleBrands.map((b) => (
            
              <a
              key={b.n}
              href={b.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex cursor-pointer items-center justify-between rounded-lg border border-transparent px-3 py-3 transition-all duration-200 hover:translate-x-1 hover:border-[#C8D8F0] hover:bg-[#F0F5FF] md:px-4 md:py-3.5"
            >
              <div className="flex min-w-0 items-center gap-2">
                <span
                  className="h-2 w-2 flex-shrink-0 rounded-full transition-transform duration-200 group-hover:scale-125 md:h-2.5 md:w-2.5"
                  style={{ background: b.dot }}
                />
                <span className="truncate text-[12px] font-semibold text-[#0A1F44] transition-colors duration-200 group-hover:text-[#1E5FA8] md:text-[13px]">
                  {b.n}
                </span>
              </div>
              <div className="ml-1 hidden items-center gap-2 md:flex">
                <span className={`rounded-full px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wide ${tierStyle[b.t]}`}>
                  {tierLabel[b.t]}
                </span>
                <span className="translate-x-[-6px] scale-90 text-xs text-[#1E5FA8] opacity-0 transition-all duration-200 group-hover:translate-x-0 group-hover:scale-100 group-hover:opacity-100">
                  ↗
                </span>
              </div>
              <span className="ml-1 flex-shrink-0 text-xs text-[#1E5FA8] opacity-0 transition-all duration-200 group-hover:opacity-100 md:hidden">
                ↗
              </span>
            </a>
          ))}
        </div>

        {filtered.length > INITIAL_SHOW && (
          <button
            onClick={() => setExpanded((p) => !p)}
            className="mt-4 w-full rounded-xl border-[1.5px] border-[#E0DED8] bg-white py-3 text-[13px] font-bold text-[#0A1F44] transition-all duration-200 hover:border-[#1E5FA8] hover:bg-[#F0F5FF] hover:text-[#1E5FA8]"
          >
            {expanded ? "▴ Show Less" : `+ ${filtered.length - INITIAL_SHOW} more brands ▾`}
          </button>
        )}
      </div>
    </section>
  );
}

// ─── TrendingSection ──────────────────────────────────────
// ✅ 배경 #EEF4FF (밝은 파란빛) — 텍스트 어둡게 반전
function TrendingSection() {
  return (
    <section
      className="px-5 py-16 md:px-14 md:py-20"
      style={{ background: "#EEF4FF" }}
    >
      <div className="mx-auto max-w-6xl">
        <div className="mb-7 flex items-center gap-2">
          <span className="h-2 w-2 flex-shrink-0 animate-pulse rounded-full bg-red-500" />
          <span className="text-[11px] font-bold tracking-[.12em] text-[#6B6B60]">
            LIVE · GLOBAL SEARCH TREND UPDATED APR 2025
          </span>
        </div>
        <p className="text-[11px] font-bold uppercase tracking-[.2em] text-[#1E5FA8]">
          Trending K-Beauty Brands 2025
        </p>
        <h2 className="mt-2 text-[26px] font-extrabold text-[#0A1F44] md:text-[36px]">
          Fast-Growing Brands
        </h2>
        <p className="mt-1 text-sm text-[#6B6B60]">
          Ingredient-focused brands leading global demand in 2025
        </p>

        {/* 데스크톱 그리드 */}
        <div className="mt-7 hidden grid-cols-3 gap-0.5 md:grid">
          {trends.map((t) => (
            <a
              key={t.n}
              href={t.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex cursor-pointer items-center justify-between rounded-lg border border-transparent px-4 py-3 transition-all duration-200 hover:translate-x-1 hover:border-[#C8D8F0] hover:bg-white"
            >
              <div className="flex items-center gap-2">
                {t.b && (
                  <span
                    className={`rounded-lg px-1.5 py-0.5 text-[9px] font-extrabold uppercase tracking-wider ${
                      t.b === "hot"
                        ? "bg-red-100 text-red-600"
                        : "bg-blue-100 text-blue-600"
                    }`}
                  >
                    {t.b.toUpperCase()}
                  </span>
                )}
                <span className="text-[13px] font-semibold text-[#0A1F44] transition-colors duration-200 group-hover:text-[#1E5FA8]">
                  {t.n}
                </span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-[11px] text-[#6B6B60] transition-colors duration-200 group-hover:text-[#1E5FA8]">
                  {t.s}
                </span>
                <span className="translate-x-[-6px] text-xs text-[#1E5FA8] opacity-0 transition-all duration-200 group-hover:translate-x-0 group-hover:opacity-100">
                  ↗
                </span>
              </div>
            </a>
          ))}
        </div>

        {/* 모바일 마퀴 */}
        <div className="mt-7 flex flex-col gap-4 overflow-hidden md:hidden">
          {marqueeRows.map((row, ri) => (
            <div key={ri} className="flex overflow-hidden">
              <div
                className="flex gap-3"
                style={{
                  animation: `marquee-${ri % 2 === 0 ? "left" : "right"} ${28 + ri * 4}s linear infinite`,
                  whiteSpace: "nowrap",
                }}
              >
                {[...row, ...row].map((t, i) => (
                  <span
                    key={i}
                    className="inline-flex flex-shrink-0 items-center gap-1.5 rounded-full border border-[#C8D8F0] bg-white px-3.5 py-2 text-[12px] font-bold text-[#0A1F44]"
                  >
                    {t.b && (
                      <span
                        className={`rounded-md px-1 py-0.5 text-[8px] font-extrabold uppercase ${
                          t.b === "hot"
                            ? "bg-red-100 text-red-600"
                            : "bg-blue-100 text-blue-600"
                        }`}
                      >
                        {t.b}
                      </span>
                    )}
                    {t.n}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes marquee-left  { from{transform:translateX(0)}    to{transform:translateX(-50%)} }
        @keyframes marquee-right { from{transform:translateX(-50%)} to{transform:translateX(0)}    }
      `}</style>
    </section>
  );
}

// ─── ExportMapSection ─────────────────────────────────────
function ExportMapSection() {
  const [tooltip, setTooltip] = useState<{ x: number; y: number; text: string } | null>(null);
  const [activeRegion, setActiveRegion] = useState<RegionKey | null>(null);
  const mapWrapRef = useRef<HTMLDivElement>(null);

  return (
    <section className="bg-[#F7F6F2] px-5 py-16 md:px-14 md:py-20">
      <div className="mx-auto max-w-6xl">
        <p className="text-[11px] font-bold uppercase tracking-[.2em] text-[#1E5FA8]">
          Global Reach
        </p>
        <h2 className="mt-2 text-[26px] font-extrabold text-[#0A1F44] md:text-[36px]">
          Where We Export To
        </h2>
        <p className="mt-1 text-sm text-[#6B6B60]">
          Direct B2B supply to verified importers & distributors worldwide
        </p>

        <div className="mt-7 grid grid-cols-3 gap-3 md:gap-4">
          {[
            { num: "47",  label: "Countries"     },
            { num: "5",   label: "Continents"    },
            { num: "90+", label: "Brand Partners" },
          ].map((s) => (
            <div
              key={s.label}
              className="rounded-xl border border-[#E0DED8] bg-white p-4 transition-all duration-200 hover:-translate-y-1 hover:border-[#C8D8F0] md:p-5"
            >
              <div className="text-[28px] font-extrabold leading-none text-[#0A1F44] md:text-[32px]">
                {s.num}
              </div>
              <div className="mt-1 text-[11px] font-semibold uppercase tracking-wider text-[#6B6B60]">
                {s.label}
              </div>
            </div>
          ))}
        </div>

        <div
          ref={mapWrapRef}
          className="relative mt-7 overflow-hidden rounded-2xl border border-[#E0DED8] bg-white"
        >
          {tooltip && (
            <div
              className="pointer-events-none absolute z-10 rounded-lg bg-[#0A1F44] px-3 py-1.5 text-[11px] font-semibold text-white"
              style={{ left: tooltip.x + 14, top: tooltip.y - 36 }}
            >
              {tooltip.text}
            </div>
          )}
          <svg viewBox="0 0 900 400" className="w-full" fill="none">
            <rect width="900" height="400" fill="#EEF3FB" />
            <path d="M55,75 L145,65 L185,85 L205,125 L195,178 L172,200 L142,218 L108,198 L78,165 L57,135 Z" fill="#D4E3F5" />
            <path d="M135,225 L183,215 L207,248 L212,310 L192,360 L160,372 L137,342 L127,278 L132,238 Z" fill="#D4E3F5" />
            <path d="M375,55 L435,50 L462,66 L458,98 L432,112 L398,108 L376,92 Z" fill="#D4E3F5" />
            <path d="M385,132 L448,124 L472,155 L468,228 L452,278 L420,298 L392,272 L378,218 L378,165 Z" fill="#D4E3F5" />
            <path d="M458,44 L608,40 L665,64 L672,118 L642,148 L600,158 L558,148 L518,128 L488,108 L462,88 Z" fill="#D4E3F5" />
            <path d="M588,158 L642,152 L662,182 L642,208 L608,198 L588,178 Z" fill="#D4E3F5" />
            <path d="M638,272 L722,264 L752,295 L742,348 L700,360 L658,338 L637,308 Z" fill="#D4E3F5" />
            <path d="M468,126 L522,120 L542,142 L532,172 L499,178 L472,158 Z" fill="#D4E3F5" />
            <g stroke="#4A9EFF" strokeWidth="0.8" fill="none" opacity="0.2" strokeDasharray="5 4">
              <path d="M645,104 Q380,15 122,132" />
              <path d="M645,104 Q500,45 428,82" />
              <path d="M645,104 Q595,198 450,158" />
              <path d="M645,104 Q545,245 428,218" />
              <path d="M645,104 Q655,248 695,302" />
              <path d="M645,104 Q395,298 172,286" />
              <path d="M645,104 Q500,345 168,338" />
              <path d="M645,104 Q590,135 555,145" />
              <path d="M645,104 Q560,120 505,145" />
            </g>
            {dotData.map((d) => {
              const isActive = !activeRegion || d.r === activeRegion;
              return (
                <g
                  key={d.c}
                  style={{
                    cursor: "pointer",
                    opacity: isActive ? 1 : 0.15,
                    transition: "opacity 0.35s ease",
                  }}
                  onMouseEnter={(e) => {
                    if (!mapWrapRef.current) return;
                    const r = mapWrapRef.current.getBoundingClientRect();
                    setTooltip({ x: e.clientX - r.left, y: e.clientY - r.top, text: d.c });
                  }}
                  onMouseMove={(e) => {
                    if (!mapWrapRef.current) return;
                    const r = mapWrapRef.current.getBoundingClientRect();
                    setTooltip({ x: e.clientX - r.left, y: e.clientY - r.top, text: d.c });
                  }}
                  onMouseLeave={() => setTooltip(null)}
                >
                  <circle cx={d.x} cy={d.y} r={9} fill="rgba(74,158,255,0.12)" />
                  <circle cx={d.x} cy={d.y} r={isActive ? 5 : 3} fill={isActive ? "#4A9EFF" : "#9BBEDD"} opacity={0.9} />
                  <circle cx={d.x} cy={d.y} r={2.5} fill="#fff" />
                </g>
              );
            })}
            <circle cx="648" cy="104" r="12" fill="rgba(30,95,168,.2)" />
            <circle cx="648" cy="104" r="7" fill="#1E5FA8" />
            <circle cx="648" cy="104" r="3" fill="#fff" />
            <rect x="618" y="84" width="60" height="16" rx="4" fill="#0A1F44" />
            <text x="648" y="96" textAnchor="middle" fill="#fff" fontSize="9" fontWeight="700" fontFamily="system-ui">
              🇰🇷 KOREA
            </text>
          </svg>
        </div>

        <div className="mt-5 grid grid-cols-2 gap-2.5 md:grid-cols-4">
          {regions.map((r) => (
            <button
              key={r.code}
              onClick={() => setActiveRegion((prev) => (prev === r.code ? null : r.code))}
              className={`flex cursor-pointer items-center gap-3 rounded-xl border p-3.5 text-left transition-all duration-200 hover:-translate-y-0.5 ${
                activeRegion === r.code
                  ? "border-[#1E5FA8] bg-[#EEF4FF] shadow-[0_4px_14px_rgba(30,95,168,.15)]"
                  : "border-[#E0DED8] bg-white hover:border-[#1E5FA8]"
              }`}
            >
              <div
                className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full text-[11px] font-extrabold text-white"
                style={{
                  background: r.color,
                  transform: activeRegion === r.code ? "scale(1.15)" : "scale(1)",
                  transition: "transform 0.2s",
                }}
              >
                {r.code}
              </div>
              <div>
                <div className="text-[12px] font-bold text-[#0A1F44]">{r.name}</div>
                <div className="text-[11px] text-[#6B6B60]">{r.count}</div>
              </div>
            </button>
          ))}
        </div>

        {activeRegion && (
          <p className="mt-3 text-center text-[11px] text-[#6B6B60]">
            Showing{" "}
            <strong className="text-[#0A1F44]">
              {regions.find((r) => r.code === activeRegion)?.name}
            </strong>{" "}
            — click again to reset
          </p>
        )}
      </div>
    </section>
  );
}

// ─── CommercePage ─────────────────────────────────────────
export default function CommercePage() {
  const [activeBlock, setActiveBlock] = useState(0);
  const sectionRefs = [
    useRef<HTMLDivElement>(null),
    useRef<HTMLDivElement>(null),
    useRef<HTMLDivElement>(null),
  ];

  useEffect(() => {
    const observers = sectionRefs.map((ref, index) => {
      const observer = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setActiveBlock(index); },
        { threshold: 0.4, rootMargin: "-15% 0px -15% 0px" }
      );
      if (ref.current) observer.observe(ref.current);
      return observer;
    });
    return () => observers.forEach((obs) => obs.disconnect());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const current = blocks[activeBlock];

  return (
    <>
      {/* ─── 히어로 ─── */}
      <section className="relative h-[380px] overflow-hidden md:h-[560px]">
        <img
          src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1920&q=80"
          alt="Business"
          className="h-full w-full object-cover object-center"
          loading="eager"
        />
        <div className="absolute inset-0 bg-black/45" />
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="px-4 text-center text-3xl font-extrabold tracking-tight text-white md:text-5xl">
            Business
          </h1>
        </div>
      </section>

      {/* ════════════════════════════════════════════════
          PC 스크롤텔링 (lg 이상)
          ✅ 이미지: 오른쪽 브라우저 끝까지 붙고
             왼쪽만 반원(역 D자)으로 잘림
      ════════════════════════════════════════════════ */}
      <section className="relative hidden lg:block">
        <div className="flex">

          {/* 왼쪽 — sticky 텍스트 패널 */}
          <div className="sticky top-[72px] flex h-[calc(100vh-72px)] w-1/2 items-center self-start overflow-hidden">
            <div className="w-full px-12 xl:px-20">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeBlock}
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -24 }}
                  transition={{ duration: 0.45, ease: "easeOut" }}
                >
                  <p className="text-xs font-bold uppercase tracking-[0.12em] text-blue">
                    {current.eyebrow}
                  </p>
                  <h2 className="mt-4 text-4xl font-black leading-tight text-navy xl:text-5xl">
                    {current.title}
                  </h2>
                  <p className="mt-5 max-w-md text-base leading-relaxed text-gray-600">
                    {current.description}
                  </p>
                  {current.steps && (
                    <div className="mt-8 flex flex-col gap-3">
                      {current.steps.map((step, i) => (
                        <div key={step} className="flex items-center gap-3">
                          <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-blue text-sm font-bold text-white">
                            {i + 1}
                          </span>
                          <span className="text-sm font-semibold text-navy">{step}</span>
                        </div>
                      ))}
                    </div>
                  )}
                  {current.buttons && (
                    <div className="mt-8 flex flex-wrap gap-4">
                      {current.buttons.map((btn) => (
                        <Button key={btn.label} href="/contact" variant={btn.variant}>
                          {btn.label}
                        </Button>
                      ))}
                    </div>
                  )}
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

          {/* 오른쪽 — 스크롤 이미지 패널
              ✅ overflow-hidden 제거 → 이미지가 오른쪽 끝까지 넘침
              ✅ 각 섹션 height: 100vh
          */}
          <div className="w-1/2">
            {blocks.map((block, i) => (
              <div
                key={i}
                ref={sectionRefs[i]}
                className="relative flex h-screen items-center"
                style={{ overflow: "visible" }}
              >
                <AnimatePresence mode="wait">
                  {activeBlock === i && (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, scale: 0.97 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.97 }}
                      transition={{ duration: 0.5, ease: "easeOut" }}
                      /*
                        ✅ 핵심:
                        - position absolute, right 0 → 오른쪽 끝에 딱 붙음
                        - left -60px → 왼쪽으로 약간 더 넓게
                        - border-radius: 50% 0 0 50% → 왼쪽만 반원 (역 D자)
                        - overflow hidden → 반원 바깥 잘림
                      */
                      className="absolute overflow-hidden"
                      style={{
                        top: "10%",
                        bottom: "10%",
                        right: 0,
                        left: "-60px",
                        borderRadius: "50% 0 0 50%",
                      }}
                    >
                      <img
                        src={block.imageUrl}
                        alt={block.title}
                        className="h-full w-full object-cover"
                        loading="lazy"
                      />
                      {/* 왼쪽 경계 어두운 그라디언트 — 텍스트와 자연스러운 분리 */}
                      <div
                        className="absolute inset-0"
                        style={{
                          background:
                            "linear-gradient(to right, rgba(10,31,68,0.25) 0%, transparent 30%)",
                        }}
                      />
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════
          모바일 (lg 미만)
          ✅ 풀와이드 이미지 + 하단 텍스트 + CTA
      ════════════════════════════════════════════════ */}
      <section className="pt-3 lg:hidden">
        {blocks.map((block, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            {/* 모바일 이미지: 풀와이드 16:9 */}
            <div className="w-full overflow-hidden" style={{ aspectRatio: "16/9" }}>
              <img
                src={block.imageUrl}
                alt={block.title}
                className="h-full w-full object-cover"
                loading="lazy"
              />
            </div>

            <div
              className="px-5 py-10"
              style={{ background: i % 2 === 0 ? "white" : "#F7F6F2" }}
            >
              <p className="text-xs font-bold uppercase tracking-[0.12em] text-blue">
                {block.eyebrow}
              </p>
              <h2 className="mt-3 text-[26px] font-extrabold text-navy">
                {block.title}
              </h2>
              <p className="mt-4 text-base leading-relaxed text-gray-600">
                {block.description}
              </p>
              {block.steps && (
                <div className="mt-6 flex flex-col gap-3">
                  {block.steps.map((step, j) => (
                    <div key={step} className="flex items-center gap-3">
                      <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-blue text-sm font-bold text-white">
                        {j + 1}
                      </span>
                      <span className="text-sm font-semibold text-navy">{step}</span>
                    </div>
                  ))}
                </div>
              )}
              {block.buttons && (
                <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                  {block.buttons.map((btn) => (
                    <Button key={btn.label} href="/contact" variant={btn.variant}>
                      {btn.label}
                    </Button>
                  ))}
                </div>
              )}
            </div>
          </motion.div>
        ))}
      </section>

      <BrandsSection />
      <TrendingSection />
      <ExportMapSection />
    </>
  );
}