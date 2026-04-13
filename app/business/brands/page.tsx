"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const galleryImages = [
  { url: "https://images.unsplash.com/photo-1556228578-0d85b1a4d571?w=600&q=80", alt: "Skincare" },
  { url: "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=600&q=80", alt: "Serum" },
  { url: "https://images.unsplash.com/photo-1571781926291-c477ebfd024b?w=600&q=80", alt: "Cream" },
  { url: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=600&q=80", alt: "Mask" },
  { url: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=600&q=80", alt: "K-Food" },
  { url: "https://images.unsplash.com/photo-1498654896293-37aacf113fd9?w=600&q=80", alt: "Kimchi" },
  { url: "https://images.unsplash.com/photo-1563245372-f21724e3856d?w=600&q=80", alt: "Beauty2" },
  { url: "https://images.unsplash.com/photo-1512069772995-ec65ed45afd6?w=600&q=80", alt: "Food2" },
];

export default function BrandsPage() {
  return (
    <>
      {/* ─── 히어로 ─── */}
      <section className="relative h-[380px] overflow-hidden md:h-[560px]">
        <img
          src="https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=1920&q=80"
          alt="Own Brands"
          className="h-full w-full object-cover object-center"
          loading="eager"
        />
        <div className="absolute inset-0 bg-black/45" />
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="px-4 text-center text-3xl font-extrabold tracking-tight text-white md:text-5xl">
            Own Brands
          </h1>
        </div>
      </section>

      {/* ─── Brand Showcase ─── */}
      <section className="bg-white py-16 md:py-20">
        <div className="mx-auto max-w-6xl px-5 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="mb-12 text-center md:mb-16"
          >
            <p className="eyebrow">OWN BRANDS</p>
            <h2 className="mt-4 text-[28px] font-extrabold text-navy md:text-[36px]">
              SalesKR Own Brand
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-[15px] text-brand-muted">
              Curated and developed in-house, our own brand products represent the pinnacle of Korean quality and innovation.
            </p>
            <div className="mx-auto mt-8 inline-block">
              <p style={{ fontSize: "28px", fontWeight: 800, color: "#0A1F44", letterSpacing: "-0.03em" }}>
                Sales<span style={{ color: "#1E5FA8" }}>KR</span>
              </p>
              <p style={{ fontSize: "12px", color: "#6B6B60", fontWeight: 400, marginTop: "4px" }}>
                Own Brand Collection
              </p>
            </div>
          </motion.div>

          {/* 갤러리 */}
          <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
            {galleryImages.map((item, i) => (
              <motion.div
                key={item.alt}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.07 }}
                viewport={{ once: true }}
                className="overflow-hidden rounded-2xl"
                style={{ aspectRatio: "1/1" }}
              >
                <img
                  src={item.url}
                  alt={item.alt}
                  className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
                  loading="lazy"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── The Beginning ─── */}
      <section className="bg-brand-bg py-16 md:py-20">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="mx-auto grid max-w-6xl items-center gap-10 px-5 md:grid-cols-2 md:gap-12 md:px-6"
        >
          <div>
            <span className="text-sm font-bold text-blue">(01)</span>
            <h3 className="mt-2 text-[24px] font-extrabold text-navy md:text-[28px]">
              The Beginning
            </h3>
            <p className="mt-5 text-[15px] leading-[1.8] text-gray-600">
              Our journey began with a simple vision: to create Korean products that meet the highest global standards. Every product is developed with meticulous attention to ingredients, formulation, and packaging to ensure it resonates with consumers worldwide.
            </p>
          </div>
          <div className="h-64 overflow-hidden rounded-2xl">
            <img
              src="https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=800&q=80"
              alt="Brand story"
              className="h-full w-full object-cover"
              loading="lazy"
            />
          </div>
        </motion.div>
      </section>

      {/* ─── Global Market ─── */}
      <section className="bg-white py-16 md:py-20">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="mx-auto grid max-w-6xl items-center gap-10 px-5 md:grid-cols-2 md:gap-12 md:px-6"
        >
          <div className="order-2 md:order-1">
            <div className="h-64 overflow-hidden rounded-2xl">
              <img
                src="https://images.unsplash.com/photo-1578575437130-527eed3abbec?w=800&q=80"
                alt="Global market"
                className="h-full w-full object-cover"
                loading="lazy"
              />
            </div>
          </div>
          <div className="order-1 md:order-2">
            <span className="text-sm font-bold text-blue">(02)</span>
            <h3 className="mt-2 text-[24px] font-extrabold text-navy md:text-[28px]">
              Global Market
            </h3>
            <p className="mt-5 text-[15px] leading-[1.8] text-gray-600">
              Today our own brand products are distributed across 47+ countries, trusted by retailers and consumers alike. We continue to innovate and expand our product lines to meet evolving global tastes.
            </p>
          </div>
        </motion.div>
      </section>

      {/* ─── ✅ Online Mall 삭제 → Wholesale CTA 배너로 교체 ─── */}
      <section
        className="py-16 md:py-20"
        style={{
          background: "linear-gradient(135deg, #0A1F44 0%, #1E5FA8 100%)",
        }}
      >
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="mx-auto max-w-4xl px-5 text-center md:px-6"
        >
          <p
            className="text-[11px] font-bold uppercase tracking-[.2em]"
            style={{ color: "rgba(255,255,255,0.6)" }}
          >
            Global Partnership
          </p>
          <h3 className="mt-4 text-[24px] font-extrabold text-white md:text-[32px]">
            Ready to Source Korean Products?
          </h3>
          <p
            className="mx-auto mt-4 max-w-xl text-[15px] leading-relaxed"
            style={{ color: "rgba(255,255,255,0.7)" }}
          >
            Contact us for wholesale inquiries and global partnership opportunities. Our team responds within 24 hours.
          </p>
          <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Link
              href="/contact"
              className="rounded-lg px-10 py-3.5 text-[15px] font-bold text-white transition-all duration-200 hover:-translate-y-0.5"
              style={{ background: "rgba(255,255,255,0.15)", border: "1.5px solid rgba(255,255,255,0.4)" }}
            >
              Wholesale Inquiry →
            </Link>
            <Link
              href="/contact"
              className="rounded-lg px-10 py-3.5 text-[15px] font-bold transition-all duration-200 hover:-translate-y-0.5"
              style={{ background: "white", color: "#0A1F44" }}
            >
              Get Price List
            </Link>
          </div>
        </motion.div>
      </section>
    </>
  );
}