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
    date: "2024.12.05"
  },
  {
    image: "/images/business-registration.png",
    title: "Business Registration",
    subtitle: "Official Corporate Registration",
    issuer: "National Tax Service, Republic of Korea",
    date: "2024"
  },
];

export default function AwardsSection() {
  const { t } = useLanguage();

  return (
    <section id="awards" className="relative bg-white py-14 md:py-20">
      <div className="mx-auto max-w-6xl px-5 md:px-6">
        <div className="mb-12 md:mb-16">
          <p className="text-[11px] font-bold uppercase tracking-[0.12em] text-blue">{t("awards.eyebrow")}</p>
          <h2 className="mt-4 text-[28px] font-extrabold leading-tight md:text-[42px]">
            {t("awards.headline_1")}<br />
            <span className="text-blue">{t("awards.headline_2")}</span>
          </h2>
        </div>

        <Swiper
          modules={[Navigation, Pagination]}
          spaceBetween={24}
          slidesPerView={1}
          loop={false}
          pagination={{ clickable: true }}
          style={{ paddingBottom: "48px" }}
        >
          {slides.map((slide, i) => (
            <SwiperSlide key={i}>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="flex flex-col items-center gap-6 md:flex-row md:items-start md:gap-10"
              >
                <div className="shrink-0">
                  <div
                    className="mx-auto overflow-hidden rounded-lg border border-brand-border md:h-80 md:w-64"
                    style={{ height: 200, width: "100%", maxWidth: 240 }}
                  >
                    <img
                      src={slide.image}
                      alt={slide.title}
                      className="h-full w-full object-contain"
                    />
                  </div>
                </div>
                <div className="flex-1 text-center md:text-left">
                  <h3 className="mt-3 text-[22px] font-bold text-blue md:mt-4 md:text-[28px]">{slide.title}</h3>
                  <p className="mt-3 text-[15px] font-semibold text-brand-text md:mt-4 md:text-[17px]">{slide.subtitle}</p>
                  <p className="mt-2 text-[12px] text-brand-muted md:mt-3 md:text-[13px]">{slide.issuer}</p>
                  <p className="mt-1 text-[12px] text-brand-muted md:text-[13px]">{slide.date}</p>
                </div>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <div className="absolute inset-x-0 bottom-0 h-24 overflow-hidden">
        <svg viewBox="0 0 1440 96" fill="none" preserveAspectRatio="none" className="absolute bottom-0 h-full w-full">
          <path d="M0 64L48 58.7C96 53 192 43 288 48C384 53 480 75 576 74.7C672 75 768 53 864 42.7C960 32 1056 32 1152 37.3C1248 43 1344 53 1392 58.7L1440 64V96H1392C1344 96 1248 96 1152 96C1056 96 960 96 864 96C768 96 672 96 576 96C480 96 384 96 288 96C192 96 96 96 48 96H0V64Z" fill="#f5f5f3" />
        </svg>
      </div>
    </section>
  );
}