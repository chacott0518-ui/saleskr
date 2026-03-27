"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade, Pagination } from "swiper/modules";
import { useLanguage } from "@/context/LanguageContext";

import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";

const slides = [
  { eyebrow: "K-BEAUTY EXPORT SPECIALIST", video: "/video/hero-1.mp4" },
  { eyebrow: "K-FOOD & KIMCHI WHOLESALE", video: "/video/hero-2.mp4" },
  { eyebrow: "OEM & PRIVATE LABEL", video: "/video/hero-3.mp4" },
  { eyebrow: "GLOBAL B2B PARTNERSHIP", video: "/video/hero-4.mp4" },
  { eyebrow: "WORLDWIDE EXPORT NETWORK", video: "/video/hero-5.mp4" },
  { eyebrow: "KOREAN MANUFACTURING DIRECT", video: "/video/hero-6.mp4" },
  { eyebrow: "KOREAN B2B SPECIALIST", video: "/video/hero-7.mp4" },
];

export default function HeroSection() {
  const { t } = useLanguage();

  return (
    <section className="relative h-[100svh] w-full overflow-hidden" suppressHydrationWarning>
      <Swiper
        modules={[Autoplay, EffectFade, Pagination]}
        effect="fade"
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        loop
        speed={1200}
        pagination={{ clickable: true, bulletClass: "hero-bullet", bulletActiveClass: "hero-bullet-active" }}
        className="h-full w-full"
      >
        {slides.map((slide, i) => (
          <SwiperSlide key={i}>
            <div className="absolute inset-0">
              <video
                autoPlay
                muted
                loop
                playsInline
                className="h-full w-full object-cover"
              >
                <source src={slide.video} type="video/mp4" />
              </video>
              <div className="absolute inset-0 bg-black/45" />
            </div>

            <div className="relative z-10 flex h-full items-center justify-center">
              <div className="mx-auto max-w-[720px] px-5 text-center md:px-8">
                {/* Eyebrow — desktop only */}
                <p
                  className="hidden md:block"
                  style={{ fontSize: "11px", letterSpacing: "0.15em", fontWeight: 500, color: "rgba(255,255,255,0.7)", textTransform: "uppercase", marginBottom: "20px" }}
                >
                  {slide.eyebrow}
                </p>

                {/* Desktop headline */}
                <h1
                  className="hidden md:block"
                  style={{ fontSize: "52px", fontWeight: 800, color: "white", lineHeight: 1.2, letterSpacing: "-0.02em" }}
                >
                  {t("hero.headline")}
                </h1>

                {/* Mobile headline — compact, 2 lines max */}
                <h1
                  className="block md:hidden"
                  style={{ fontSize: "28px", fontWeight: 800, color: "white", lineHeight: 1.2, letterSpacing: "-0.02em" }}
                >
                  Your Trusted Partner for<br />Korean B2B Wholesale
                </h1>

                {/* Desktop subtext */}
                <p
                  className="hidden md:block"
                  style={{ fontSize: "18px", color: "rgba(255,255,255,0.75)", lineHeight: 1.7, maxWidth: 560, margin: "20px auto 0" }}
                >
                  {t("hero.subtext")}
                </p>

                {/* Mobile subtext — 1 line */}
                <p
                  className="block md:hidden"
                  style={{ fontSize: "13px", color: "rgba(255,255,255,0.7)", marginTop: "12px" }}
                >
                  Direct sourcing · Stable supply · Fast export
                </p>

                {/* CTA */}
                <div style={{ marginTop: "40px" }} className="mt-6 md:mt-10">
                  
                    <a
                    href="/contact"
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      justifyContent: "center",
                      background: "linear-gradient(135deg, #1E5FA8 0%, #4A9EFF 100%)",
                      color: "white",
                      fontWeight: 700,
                      borderRadius: "6px",
                      textDecoration: "none",
                      transition: "all 0.2s ease",
                    }}
                    className="h-12 w-[220px] text-[15px] md:h-auto md:w-auto md:px-9 md:py-[14px] md:text-[15px]"
                    onMouseEnter={(e) => {
                      (e.currentTarget as HTMLElement).style.background = "linear-gradient(135deg, #154C8A 0%, #1E5FA8 100%)";
                      (e.currentTarget as HTMLElement).style.transform = "scale(1.02)";
                      (e.currentTarget as HTMLElement).style.boxShadow = "0 8px 25px rgba(30,95,168,0.45)";
                    }}
                    onMouseLeave={(e) => {
                      (e.currentTarget as HTMLElement).style.background = "linear-gradient(135deg, #1E5FA8 0%, #4A9EFF 100%)";
                      (e.currentTarget as HTMLElement).style.transform = "scale(1)";
                      (e.currentTarget as HTMLElement).style.boxShadow = "none";
                    }}
                  >
                    {/* Mobile: shorter text */}
                    <span className="md:hidden">Get Price List</span>
                    <span className="hidden md:inline">{t("hero.cta_primary")}</span>
                  </a>
                </div>

                {/* Trust badges — desktop only */}
                <div
                  className="hidden md:flex"
                  style={{ flexWrap: "wrap", justifyContent: "center", gap: "32px", marginTop: "24px" }}
                >
                  {[t("hero.badge_brands"), t("hero.badge_oem"), t("hero.badge_response")].map((badge) => (
                    <span key={badge} style={{ fontSize: "13px", color: "rgba(255,255,255,0.65)", fontWeight: 500 }}>
                      ✓ {badge}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

    </section>
  );
}
