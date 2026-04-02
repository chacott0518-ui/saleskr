"use client";

import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import { useLanguage } from "@/context/LanguageContext";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const slides = [
  {
    image: "/images/kita-certificate.png",
    title: "The 61st Trade Day",
    subtitle: "Won the '$50 million Export Tower' Award",
    issuer: "Ministry of Trade, Industry and Energy / KITA",
    date: "2024.12.05",
    badge: "Trade Award",
  },
  {
    image: "/images/business-registration.png",
    title: "Business Registration",
    subtitle: "Official Corporate Registration",
    issuer: "National Tax Service, Republic of Korea",
    date: "2024",
    badge: "Official Document",
  },
];

export default function AwardsSection() {
  const { t } = useLanguage();

  return (
    <section id="awards" className="relative bg-[#F7F6F2] py-14 md:py-20">
      <div className="mx-auto max-w-6xl px-5 md:px-6">

        {/* 헤더 — 중앙정렬 */}
        <div className="mb-10 text-center md:mb-14">
          <p className="text-[11px] font-bold uppercase tracking-[.2em] text-[#1E5FA8]">
            {t("awards.eyebrow")}
          </p>
          <h2 className="mt-3 text-[26px] font-extrabold leading-tight text-[#0A1F44] md:text-[40px]">
            {t("awards.headline_1")}<br />
            <span className="text-[#1E5FA8]">{t("awards.headline_2")}</span>
          </h2>
          <div className="mx-auto mt-4 h-[3px] w-11 rounded-full bg-[#1E5FA8]" />
        </div>

        {/* ── PC: 2열 네이비 카드 ── */}
        <div className="hidden gap-5 md:grid md:grid-cols-2">
          {slides.map((slide, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              viewport={{ once: true }}
              className="overflow-hidden rounded-2xl bg-[#0A1F44] shadow-[0_4px_24px_rgba(10,31,68,.18)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_40px_rgba(10,31,68,.28)]"
            >
              <div className="relative flex h-[280px] items-center justify-center bg-[rgba(255,255,255,.05)]">
                <span className="absolute left-4 top-4 rounded-full bg-[rgba(74,158,255,.2)] px-3 py-1 text-[9px] font-bold uppercase tracking-[.08em] text-[#4A9EFF]">
                  {slide.badge}
                </span>
                <img
                  src={slide.image}
                  alt={slide.title}
                  className="h-full w-full object-contain p-6"
                />
              </div>
              <div className="px-6 pb-8 pt-6 text-center">
                <div className="mx-auto mb-4 h-[2px] w-8 rounded-full bg-[#4A9EFF]" />
                <h3 className="text-[20px] font-extrabold text-white">{slide.title}</h3>
                <p className="mt-2 text-[13px] font-semibold text-white/70">{slide.subtitle}</p>
                <p className="mt-2 text-[12px] leading-relaxed text-white/40">
                  {slide.issuer}<br />{slide.date}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* ── 모바일: 네이비 카드 슬라이더 ── */}
        <div className="md:hidden">
          <Swiper
            modules={[Navigation, Pagination]}
            spaceBetween={16}
            slidesPerView={1}
            loop={false}
            pagination={{ clickable: true }}
            style={{ paddingBottom: "48px" }}
          >
            {slides.map((slide, i) => (
              <SwiperSlide key={i}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true }}
                  className="overflow-hidden rounded-2xl bg-[#0A1F44] shadow-[0_4px_20px_rgba(10,31,68,.2)]"
                >
                  {/* 이미지 */}
                  <div className="relative flex h-[200px] items-center justify-center bg-[rgba(255,255,255,.05)]">
                    <span className="absolute left-3 top-3 rounded-full bg-[rgba(74,158,255,.2)] px-2.5 py-1 text-[8px] font-bold uppercase tracking-[.06em] text-[#4A9EFF]">
                      {slide.badge}
                    </span>
                    <img
                      src={slide.image}
                      alt={slide.title}
                      className="h-full w-full object-contain p-5"
                    />
                  </div>
                  {/* 텍스트 */}
                  <div className="px-5 pb-7 pt-5 text-center">
                    <div className="mx-auto mb-3 h-[2px] w-7 rounded-full bg-[#4A9EFF]" />
                    <h3 className="text-[18px] font-extrabold text-white">{slide.title}</h3>
                    <p className="mt-2 text-[12px] font-semibold text-white/70">{slide.subtitle}</p>
                    <p className="mt-2 text-[11px] leading-relaxed text-white/40">
                      {slide.issuer}<br />{slide.date}
                    </p>
                  </div>
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>

      {/* 하단 웨이브 */}
      <div className="absolute inset-x-0 bottom-0 h-24 overflow-hidden">
        <svg viewBox="0 0 1440 96" fill="none" preserveAspectRatio="none" className="absolute bottom-0 h-full w-full">
          <path d="M0 64L48 58.7C96 53 192 43 288 48C384 53 480 75 576 74.7C672 75 768 53 864 42.7C960 32 1056 32 1152 37.3C1248 43 1344 53 1392 58.7L1440 64V96H1392C1344 96 1248 96 1152 96C1056 96 960 96 864 96C768 96 672 96 576 96C480 96 384 96 288 96C192 96 96 96 48 96H0V64Z" fill="#f5f5f3" />
        </svg>
      </div>
    </section>
  );
}