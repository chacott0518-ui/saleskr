"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Button from "@/components/ui/Button";
import InfiniteMarquee from "@/components/ui/InfiniteMarquee";

/* ─── Scrollytelling blocks ─── */

const blocks = [
  {
    eyebrow: "OUR SERVICES",
    title: "Business to Business",
    description:
      "SalesKR collaborates with global partners to introduce Korean products to diverse markets worldwide. Through reliable supply chains and strong partnerships, we provide high-quality products at competitive prices.",
    gradient: "bg-gradient-to-br from-slate-600 to-slate-800",
    imageUrl: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=800&q=80",
  },
  {
    eyebrow: "K-FOOD EXPORT",
    title: "Korean Food & Kimchi Wholesale",
    description:
      "From authentic kimchi to ready-to-eat Korean meals, SalesKR supplies premium Korean food products to global importers and distributors. Direct from Korean manufacturers with stable supply and competitive MOQ.",
    gradient: "bg-gradient-to-br from-orange-800 to-red-900",
    imageUrl: "https://images.unsplash.com/photo-1498654896293-37aacf113fd9?w=800&q=80",
    buttons: [
      { label: "View K-Food Products", variant: "primary" as const },
      { label: "Request Quotation", variant: "outline" as const },
    ],
  },
  {
    eyebrow: "OEM & PRIVATE LABEL",
    title: "Build Your Own Korean Brand",
    description:
      "We support full OEM production for cosmetics and food products. From concept to export, we handle everything including formulation, packaging design, certification, and logistics.",
    gradient: "bg-gradient-to-br from-emerald-800 to-teal-900",
    imageUrl: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&q=80",
    steps: [
      "Inquiry & Consultation",
      "Sample Development",
      "Production",
      "Export & Delivery",
    ],
  },
];

/* ─── Brand names ─── */
const brandColors = [
  { bg: "#E8F0FB", color: "#1E5FA8" },
  { bg: "#0A1F44", color: "white" },
  { bg: "#F7F6F2", color: "#1A1A18" },
  { bg: "#1E5FA8", color: "white" },
  { bg: "#EFF6FF", color: "#0A1F44" },
  { bg: "#0A1F44", color: "#4A9EFF" },
  { bg: "#F0EFE9", color: "#1A1A18" },
];
const brandNames = [
  "COSRX", "Some By Mi", "Innisfree", "TONYMOLY", "Etude",
  "Laneige", "IOPE", "Dr.Jart+", "Missha", "Nature Republic",
  "Skin1004", "Purito", "Anua", "Beauty of Joseon", "Klairs",
  "Round Lab", "Torriden", "Numbuzin", "Abib", "Mary & May",
];

/* ─── Country list ─── */

const countries = [
  "United States", "Canada", "Mexico", "Australia", "New Zealand",
  "United Kingdom", "Germany", "France", "Spain", "Netherlands",
  "Poland", "Italy", "Sweden", "Czech Republic", "Romania",
  "Russia", "Kazakhstan", "Uzbekistan", "Ukraine", "Belarus",
  "Japan", "Taiwan", "Vietnam", "Thailand", "Malaysia",
  "Philippines", "Singapore", "Indonesia", "India", "Bangladesh",
  "UAE", "Saudi Arabia", "Qatar", "Bahrain", "Kuwait",
  "Iran", "Israel", "Turkey", "Brazil", "Chile",
  "Argentina", "Colombia", "Peru", "Kenya", "Nigeria",
  "South Africa", "Egypt",
];

/* ─── Page ─── */

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
        ([entry]) => {
          if (entry.isIntersecting) setActiveBlock(index);
        },
        { threshold: 0.5, rootMargin: "-20% 0px -20% 0px" },
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
      {/* ── Section 1: Hero ── */}
      <section className="relative h-[380px] overflow-hidden md:h-[560px]">
        <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1920&q=80" alt="Business" className="h-full w-full object-cover object-center" loading="eager" />
        <div className="absolute inset-0 bg-black/45" />
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="px-4 text-center text-3xl font-extrabold tracking-tight text-white md:text-5xl">Business</h1>
        </div>
      </section>

      {/* ── Section 2: Scrollytelling ── */}

      {/* Desktop — sticky split layout */}
      <section className="relative hidden lg:block">
        <div className="flex">
          {/* Left — sticky text */}
          <div className="sticky top-[120px] flex h-screen w-1/2 items-center self-start">
            <div className="px-12 xl:px-20">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeBlock}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                >
                  <p className="text-xs font-bold uppercase tracking-[0.12em] text-blue">
                    {current.eyebrow}
                  </p>
                  <h2 className="mt-4 text-5xl font-black leading-tight text-navy xl:text-6xl">
                    {current.title}
                  </h2>
                  <p className="mt-6 max-w-lg text-base leading-relaxed text-gray-600">
                    {current.description}
                  </p>

                  {current.buttons && (
                    <div className="mt-8 flex gap-4">
                      {current.buttons.map((btn) => (
                        <Button
                          key={btn.label}
                          href="/contact"
                          variant={btn.variant}
                        >
                          {btn.label}
                        </Button>
                      ))}
                    </div>
                  )}

                  {current.steps && (
                    <div className="mt-8 flex flex-col gap-3">
                      {current.steps.map((step, i) => (
                        <div key={step} className="flex items-center gap-3">
                          <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-blue text-sm font-bold text-white">
                            {i + 1}
                          </span>
                          <span className="text-sm font-semibold text-navy">
                            {step}
                          </span>
                        </div>
                      ))}
                    </div>
                  )}
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

          {/* Right — scrolling images */}
          <div className="w-1/2">
            {blocks.map((block, i) => (
              <div
                key={i}
                ref={sectionRefs[i]}
                className="flex h-screen items-center justify-center px-12"
              >
                <AnimatePresence mode="wait">
                  {activeBlock === i && (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      transition={{ duration: 0.5 }}
                      className="h-[480px] w-[480px] overflow-hidden rounded-full"
                    >
                      <img src={block.imageUrl} alt={block.title} className="h-full w-full object-cover" loading="lazy" />
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mobile — stacked layout */}
      <section className="lg:hidden">
        {blocks.map((block, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            {/* Image */}
            <div className="h-64 overflow-hidden">
              <img src={block.imageUrl} alt={block.title} className="h-full w-full object-cover" loading="lazy" />
            </div>

            {/* Text */}
            <div className="px-6 py-12">
              <p className="text-xs font-bold uppercase tracking-[0.12em] text-blue">
                {block.eyebrow}
              </p>
              <h2 className="mt-3 text-3xl font-extrabold text-navy">
                {block.title}
              </h2>
              <p className="mt-4 text-base leading-relaxed text-gray-600">
                {block.description}
              </p>

              {block.buttons && (
                <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                  {block.buttons.map((btn) => (
                    <Button
                      key={btn.label}
                      href="/contact"
                      variant={btn.variant}
                    >
                      {btn.label}
                    </Button>
                  ))}
                </div>
              )}

              {block.steps && (
                <div className="mt-6 flex flex-col gap-3">
                  {block.steps.map((step, j) => (
                    <div key={step} className="flex items-center gap-3">
                      <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-blue text-sm font-bold text-white">
                        {j + 1}
                      </span>
                      <span className="text-sm font-semibold text-navy">
                        {step}
                      </span>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </motion.div>
        ))}
      </section>

      {/* ── Section 3: Partner Brands ── */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="mb-12 text-center text-3xl font-bold text-navy">
            Partner Brands
          </h2>
        </div>
        <InfiniteMarquee
          items={brandNames.map((name) => (
            <div
  key={name}
  style={{
    background: brandColors[brandNames.indexOf(name) % brandColors.length].bg,
    border: "1px solid transparent",
  }}
  className="flex h-16 items-center justify-center rounded-full px-8 transition-all duration-300 hover:scale-105"
  >
    <span className="text-sm font-bold" style={{ color: brandColors[brandNames.indexOf(name) % brandColors.length].color }}>{name}</span>
</div>
          ))}
          speed={35}
          pauseOnHover
          gap={24}
        />
      </section>

      {/* ── Section 4: Where We Export To ── */}
      <section className="relative overflow-hidden bg-brand-bg py-20">
        {/* Faded globe SVG */}
        <svg
          className="pointer-events-none absolute left-1/2 top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 opacity-[0.08]"
          viewBox="0 0 200 200"
          fill="none"
        >
          <circle cx="100" cy="100" r="95" stroke="#1E5FA8" strokeWidth="0.5" />
          <ellipse cx="100" cy="100" rx="60" ry="95" stroke="#1E5FA8" strokeWidth="0.5" />
          <ellipse cx="100" cy="100" rx="30" ry="95" stroke="#1E5FA8" strokeWidth="0.5" />
          <line x1="5" y1="60" x2="195" y2="60" stroke="#1E5FA8" strokeWidth="0.5" />
          <line x1="5" y1="100" x2="195" y2="100" stroke="#1E5FA8" strokeWidth="0.5" />
          <line x1="5" y1="140" x2="195" y2="140" stroke="#1E5FA8" strokeWidth="0.5" />
        </svg>

        <div className="relative z-10 mx-auto max-w-6xl px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <h2 className="mb-12 text-3xl font-bold text-navy">
              Where we export to
            </h2>
            <div className="grid grid-cols-3 gap-x-8 gap-y-4 md:grid-cols-7">
              {countries.map((country) => (
                <span key={country} className="text-sm text-gray-500">
                  {country}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
