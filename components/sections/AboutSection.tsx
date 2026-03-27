"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";

const stripCards = [
  { url: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=640&q=80", label: "K-Beauty" },
  { url: "https://images.unsplash.com/photo-1498654896293-37aacf113fd9?w=640&q=80", label: "K-Food" },
  { url: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=640&q=80", label: "OEM & Private Label" },
  { url: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=640&q=80", label: "B2B Supply" },
  { url: "https://images.unsplash.com/photo-1578575437130-527eed3abbec?w=640&q=80", label: "Global Export" },
  { url: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=640&q=80", label: "K-Cosmetics" },
];

const allCards = [...stripCards, ...stripCards];

export default function AboutSection() {
  const { t } = useLanguage();

  const stats = [
    { value: "70+", label: t("about.stat_brands") },
    { value: "47+", label: t("about.stat_countries") },
    { value: "300+", label: t("about.stat_network") },
  ];

  return (
    <section id="about" className="bg-white py-14 md:py-20">
      {/* Two-column: text left, image right */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        viewport={{ once: true, margin: "-100px" }}
        className="mx-auto max-w-6xl px-5 md:px-6"
      >
        <div className="flex flex-col gap-10 lg:flex-row lg:items-stretch lg:gap-16">
          {/* Left — text */}
          <div className="flex flex-col justify-between lg:w-1/2">
            <div>
              <p className="eyebrow">{t("about.eyebrow")}</p>
              <h2 className="mt-4 text-[28px] font-extrabold leading-[1.3] md:text-[42px] md:leading-[1.2]">
                <span style={{ color: "#1E5FA8" }}>{t("about.headline_1").split(" ")[0]}</span>{" "}
                {t("about.headline_1").split(" ").slice(1).join(" ")}
                <br />
                {t("about.headline_2")}
              </h2>
              <p className="mt-5 max-w-lg text-[14px] leading-[1.75] text-gray-600 md:mt-6 md:text-[15px] md:leading-[1.8]">
                {t("about.description")}
              </p>
            </div>

            {/* Stats — desktop (below text) */}
            <div className="mt-8 hidden gap-10 md:mt-10 lg:flex">
              {stats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  viewport={{ once: true }}
                >
                  <p className="text-[40px] font-extrabold text-navy">{stat.value}</p>
                  <p className="mt-1 text-[13px] text-brand-muted">{stat.label}</p>
                </motion.div>
              ))}
            </div>

            {/* Stats — mobile: grid below text */}
            <div className="mt-8 grid grid-cols-3 gap-3 lg:hidden">
              {stats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  viewport={{ once: true }}
                  className="flex flex-col items-center justify-center rounded-2xl py-5"
                  style={{ background: "#0A1F44" }}
                >
                  <p style={{ fontSize: "28px", fontWeight: 900, color: "#4A9EFF", lineHeight: 1 }}>{stat.value}</p>
                  <div style={{ width: 24, height: 2, background: "#1E5FA8", borderRadius: 2, margin: "8px auto 6px" }} />
                  <p style={{ fontSize: "10px", color: "rgba(255,255,255,0.7)", textAlign: "center", lineHeight: 1.4 }}>{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right — large image (desktop only) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true, margin: "-80px" }}
            className="relative hidden lg:block lg:w-1/2"
            style={{ minHeight: 480 }}
          >
            <div
              className="h-full w-full overflow-hidden"
              style={{ borderRadius: "24px", boxShadow: "0 24px 60px rgba(0,0,0,0.12)" }}
            >
              <img
                src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80"
                alt="Korean business"
                className="h-full w-full object-cover object-center transition-transform duration-700 hover:scale-105"
                loading="lazy"
              />
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* Moving image strip */}
      <div className="mt-14 overflow-hidden md:mt-20">
        <div className="marquee-hover-pause flex" style={{ width: "max-content" }}>
          <div className="flex gap-5" style={{ animation: "marquee 40s linear infinite", width: "max-content" }}>
            {allCards.map((card, i) => (
              <div
                key={i}
                className="group relative shrink-0 overflow-hidden"
                style={{
                  width: "clamp(220px, 20vw, 300px)",
                  height: "clamp(280px, 26vw, 380px)",
                  borderRadius: "20px",
                }}
              >
                <img
                  src={card.url}
                  alt={card.label}
                  className="h-full w-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-105"
                  loading="lazy"
                />
                <div
                  className="absolute inset-x-0 bottom-0"
                  style={{ background: "linear-gradient(to top, rgba(0,0,0,0.7), transparent)", padding: "24px 20px 18px" }}
                >
                  <span style={{ fontSize: "15px", fontWeight: 700, color: "white" }}>{card.label}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
