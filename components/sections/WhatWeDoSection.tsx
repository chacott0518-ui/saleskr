"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const cards = [
  {
    titleKey: "whatwedo.card_b2b",
    href: "/business/commerce",
    url: "https://images.unsplash.com/photo-1573164713988-8665fc963095?w=800&q=80",
    description: "Direct B2B supply from Korean manufacturers to global distributors.",
  },
  {
    titleKey: "whatwedo.card_food",
    href: "/business/commerce",
    url: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=800&q=80",
    description: "Premium Korean food & kimchi wholesale for global importers.",
  },
  {
    titleKey: "whatwedo.card_oem",
    href: "/business/commerce",
    url: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=800&q=80",
    description: "Full OEM production: formulation, packaging, certification & export.",
  },
];

export default function WhatWeDoSection() {
  const { t } = useLanguage();

  return (
    <section id="services" className="bg-brand-bg pb-4 pt-14 md:py-20">
      <div className="mx-auto max-w-6xl px-5 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          viewport={{ once: true, margin: "-100px" }}
          className="mb-12 text-center"
        >
          <p className="eyebrow">{t("whatwedo.eyebrow")}</p>
          <h2 className="mt-4 text-[28px] font-extrabold leading-tight md:text-[42px]">
            {t("whatwedo.headline_1")}
            <br />
            <span style={{ color: "#1E5FA8" }}>{t("whatwedo.headline_2")}</span>
          </h2>
          <p className="mx-auto mt-4 max-w-xl px-4 text-[14px] text-gray-500 md:px-0 md:text-[15px]">
            {t("whatwedo.subtext")}
          </p>
        </motion.div>

        <div className="hidden md:grid md:grid-cols-3 md:gap-6">
  {cards.map((card, i) => (
    <motion.div
      key={card.titleKey}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: "easeOut", delay: i * 0.1 }}
      viewport={{ once: true, margin: "-100px" }}
      className="group overflow-hidden rounded-2xl"
      style={{ height: "clamp(240px, 30vw, 420px)", cursor: "pointer", transition: "transform 0.18s ease-out" }}
      whileHover={{ scale: 1.08 }}
    >
      <Link href={card.href} className="relative block h-full w-full">
        <img
          src={card.url}
          alt={t(card.titleKey)}
          className="h-full w-full object-cover transition-transform duration-200 group-hover:scale-110"
style={{ objectPosition: "center top" }}
          loading="lazy"
        />
        <div
          className="absolute inset-0"
          style={{ background: "linear-gradient(to top, rgba(0,0,0,0.82) 0%, rgba(0,0,0,0.25) 55%, rgba(0,0,0,0.05) 100%)" }}
        />
        <div className="absolute inset-x-0 bottom-0 p-4 md:p-6">
          <p
            className="text-[11px] font-bold uppercase tracking-widest mb-2"
            style={{ color: "rgba(255,255,255,0.6)" }}
          >
            {t(card.titleKey)}
          </p>
          <p
            className="text-[15px] font-bold leading-snug"
            style={{ color: "white", textShadow: "0 2px 8px rgba(0,0,0,0.6)" }}
          >
            {card.description}
          </p>
        </div>
      </Link>
    </motion.div>
  ))}
</div>
{/* 모바일 Swiper */}
<div className="block md:hidden" style={{ marginLeft: "-20px", marginRight: "-20px", paddingLeft: "20px" }}>
  <Swiper
    modules={[Pagination]}
    slidesPerView={1.15}
    spaceBetween={12}
    pagination={{ clickable: true }}
    style={{ paddingBottom: "36px" }}
  >
    {cards.map((card, i) => (
      <SwiperSlide key={card.titleKey}>
        <Link href={card.href} className="relative block overflow-hidden rounded-2xl" style={{ height: 280 }}>
          <img
            src={card.url}
            alt={t(card.titleKey)}
            className="h-full w-full object-cover"
            loading="lazy"
          />
          <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(0,0,0,0.82) 0%, rgba(0,0,0,0.25) 55%, transparent 100%)" }} />
          <div className="absolute inset-x-0 bottom-0 p-5">
            <p className="text-[11px] font-bold uppercase tracking-widest mb-1" style={{ color: "rgba(255,255,255,0.6)" }}>
              {t(card.titleKey)}
            </p>
            <p className="text-[15px] font-bold" style={{ color: "white" }}>
              {card.description}
            </p>
          </div>
        </Link>
      </SwiperSlide>
    ))}
  </Swiper>
</div>
      </div>
    </section>
  );
}
