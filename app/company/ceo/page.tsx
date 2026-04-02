"use client";

import { motion } from "framer-motion";

const stats = [
  { value: "2018",  label: "Date of Establishment" },
  { value: "50+",   label: "Number of Employees"   },
  { value: "300+",  label: "Partner Brands"         },
  { value: "50M+",  label: "Total Sales"            },
];

export default function CEOPage() {
  return (
    <>
      {/* ✅ FIX ⑥: 히어로 이미지 교체 — 서울 비즈니스 전경 */}
      <section className="relative h-[380px] overflow-hidden md:h-[560px]">
      <img
  src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1920&q=80"
  alt="SalesKR Global Business"
  className="h-full w-full object-cover object-center"
  loading="eager"
/>
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/20" />
        <div className="absolute inset-0 flex items-center justify-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <p className="text-[11px] font-bold uppercase tracking-[.2em] text-[#4A9EFF]">
              Company
            </p>
            <h1 className="mt-3 text-4xl font-extrabold tracking-tight text-white md:text-6xl">
              CEO Message
            </h1>
          </motion.div>
        </div>
      </section>

      {/* CEO 메시지 본문 */}
      <section className="bg-white py-16 md:py-24">
        <div className="mx-auto max-w-5xl px-6">
          <div className="flex flex-col items-start gap-12 md:flex-row md:gap-16">
            {/* CEO 사진 */}
            <div className="w-full flex-shrink-0 md:w-64">
              <div className="overflow-hidden rounded-2xl bg-[#F0EEE8]">
                <img
                  src="/images/ceo-photo.jpg"
                  alt="CEO Jung, Yong Chul"
                  className="h-80 w-full object-cover object-top md:h-96"
                />
              </div>
              <div className="mt-4">
                <p className="text-base font-extrabold text-[#0A1F44]">Jung, Yong Chul</p>
                <p className="text-sm text-[#6B6B60]">CEO & Founder, SalesKR</p>
              </div>
            </div>

            {/* 메시지 텍스트 */}
            <div className="flex-1">
              <p className="text-[11px] font-bold uppercase tracking-[.2em] text-[#1E5FA8]">
                CEO Message
              </p>
              <h2 className="mt-3 text-2xl font-extrabold leading-tight text-[#0A1F44] md:text-3xl">
                Bringing the Best of Korea to the World
              </h2>
              <div className="mt-6 space-y-5 text-[15px] leading-[1.9] text-[#2A2A28]">
                <p>
                  Since founding SalesKR in 2018, our mission has remained unchanged: to
                  connect the world with the finest Korean products — from the fermented
                  foods that have nourished Korean families for generations, to the
                  skincare innovations that are redefining global beauty standards.
                </p>
                <p>
                  We believe that Korean products deserve to be on shelves everywhere.
                  Not as a passing trend, but as a permanent part of how the world eats,
                  cares for itself, and experiences quality. Every partnership we build,
                  every shipment we dispatch, and every market we enter is a step toward
                  that vision.
                </p>
                <p>
                  To our global partners: thank you for trusting us as your bridge to
                  Korea. We do not take that trust lightly. We are committed to bringing
                  you not just products, but the knowledge, reliability, and dedication
                  that makes a long-term business relationship possible.
                </p>
                <p>
                  To Korea's producers and manufacturers: we are proud to represent your
                  work on the global stage. The craftsmanship, the attention to quality,
                  and the innovation that defines Korean products is what we carry with
                  us into every market we serve.
                </p>
              </div>
              <div className="mt-8 border-t border-[#F0EEE8] pt-6">
                <p className="text-sm font-bold text-[#0A1F44]">Jung, Yong Chul</p>
                <p className="text-xs text-[#6B6B60]">Chief Executive Officer, SalesKR Co., Ltd.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ✅ FIX ⑦: 통계 섹션 — 텍스트 가독성 개선 (white/60 → white/90) */}
      <section className="relative overflow-hidden py-20">
        <img
          src="https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?w=1920&q=80"
          alt="City skyline"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-[#0A1F44]/80" />
        <div className="relative z-10 mx-auto max-w-5xl px-6">
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4 md:gap-12">
            {stats.map((s) => (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="text-center"
              >
                <p className="text-4xl font-extrabold text-white md:text-5xl">
                  {s.value}
                </p>
                {/* ✅ FIX ⑦: text-white/60 → text-white/90 */}
                <p className="mt-2 text-sm font-semibold text-white/90 md:text-base">
                  {s.label}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}