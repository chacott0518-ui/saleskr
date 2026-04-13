"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade, Pagination } from "swiper/modules";
import { useLanguage } from "@/context/LanguageContext";

import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";

const slides = [
  { eyebrow: "K-BEAUTY EXPORT SPECIALIST",   video: "/video/hero-1.mp4" },
  { eyebrow: "K-FOOD & KIMCHI WHOLESALE",    video: "/video/hero-2.mp4" },
  { eyebrow: "OEM & PRIVATE LABEL",          video: "/video/hero-3.mp4" },
  { eyebrow: "GLOBAL B2B PARTNERSHIP",       video: "/video/hero-4.mp4" },
  { eyebrow: "WORLDWIDE EXPORT NETWORK",     video: "/video/hero-5.mp4" },
  { eyebrow: "KOREAN MANUFACTURING DIRECT",  video: "/video/hero-6.mp4" },
  { eyebrow: "KOREAN B2B SPECIALIST",        video: "/video/hero-7.mp4" },
];

export default function HeroSection() {
  const { lang } = useLanguage();

  return (
    <section
      className="relative h-[100svh] w-full overflow-hidden"
      suppressHydrationWarning
    >
      <Swiper
        modules={[Autoplay, EffectFade, Pagination]}
        effect="fade"
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        loop
        speed={1200}
        pagination={{
          clickable: true,
          bulletClass: "hero-bullet",
          bulletActiveClass: "hero-bullet-active",
        }}
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

                {/* ✅ eyebrow — 데스크톱만 */}
                <p className="hidden md:block"
                  style={{
                    fontSize: "11px",
                    letterSpacing: "0.15em",
                    fontWeight: 500,
                    color: "rgba(255,255,255,0.7)",
                    textTransform: "uppercase",
                    marginBottom: "16px",
                  }}
                >
                  {lang === "ko"
                    ? "한국식품 및 건강식품 | 70여개 이상의 정품 한국화장품 브랜드"
                    : "K-Food, Health Supplements & 70+ Authentic Korean Cosmetic Brands"}
                </p>

                {/* ✅ 데스크톱 헤드라인 — EN/KR */}
                <h1
                  className="hidden md:block"
                  style={{
                    fontSize: "52px",
                    fontWeight: 800,
                    color: "white",
                    lineHeight: 1.2,
                    letterSpacing: "-0.02em",
                  }}
                >
                  {lang === "ko"
                    ? <>믿을 수 있는 한국 대표<br />브랜드 공급</>
                    : <>Your Trusted Source for<br />Korea's Leading Brands</>}
                </h1>

                {/* ✅ 모바일 헤드라인 — EN/KR */}
                <h1
                  className="block md:hidden"
                  style={{
                    fontSize: "28px",
                    fontWeight: 800,
                    color: "white",
                    lineHeight: 1.2,
                    letterSpacing: "-0.02em",
                  }}
                >
                  {lang === "ko"
                    ? <>믿을 수 있는<br />한국 대표 브랜드 공급</>
                    : <>Your Trusted Source<br />for Korea's Leading Brands</>}
                </h1>

                {/* ✅ 데스크톱 서브텍스트 */}
                <p
                  className="hidden md:block"
                  style={{
                    fontSize: "18px",
                    color: "rgba(255,255,255,0.75)",
                    lineHeight: 1.7,
                    maxWidth: 560,
                    margin: "20px auto 0",
                  }}
                >
                  {lang === "ko"
                    ? "한국 제조사 직소싱, 안정적 공급망, 경쟁력 있는 가격, 빠른 수출."
                    : "Direct from Korean manufacturers — reliable supply, competitive pricing, fast export."}
                </p>

                {/* ✅ 모바일 서브텍스트 */}
                <p
                  className="block md:hidden"
                  style={{
                    fontSize: "13px",
                    color: "rgba(255,255,255,0.7)",
                    marginTop: "12px",
                  }}
                >
                  {lang === "ko"
                    ? "직소싱 · 안정적 공급 · 빠른 수출"
                    : "Direct sourcing · Stable supply · Fast export"}
                </p>

                {/* ✅ CTA 버튼 */}
                <div style={{ marginTop: "40px" }} className="mt-6 md:mt-10">
                  
                    <a href="/contact"
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
                      (e.currentTarget as HTMLElement).style.background =
                        "linear-gradient(135deg, #154C8A 0%, #1E5FA8 100%)";
                      (e.currentTarget as HTMLElement).style.transform = "scale(1.02)";
                      (e.currentTarget as HTMLElement).style.boxShadow =
                        "0 8px 25px rgba(30,95,168,0.45)";
                    }}
                    onMouseLeave={(e) => {
                      (e.currentTarget as HTMLElement).style.background =
                        "linear-gradient(135deg, #1E5FA8 0%, #4A9EFF 100%)";
                      (e.currentTarget as HTMLElement).style.transform = "scale(1)";
                      (e.currentTarget as HTMLElement).style.boxShadow = "none";
                    }}
                  >
                    <span className="md:hidden">
                      {lang === "ko" ? "도매 문의하기" : "Get Price List"}
                    </span>
                    <span className="hidden md:inline">
                      {lang === "ko" ? "도매 가격 문의하기" : "Wholesale Price Inquiry"}
                    </span>
                  </a>
                </div>

                {/* ✅ Trust badges — 데스크톱만 */}
                <div
                  className="hidden md:flex"
                  style={{
                    flexWrap: "wrap",
                    justifyContent: "center",
                    gap: "32px",
                    marginTop: "24px",
                  }}
                >
                  {(lang === "ko"
                    ? ["70개 이상 한국 브랜드", "OEM 자체 리벨 가능", "24시간 내 응답"]
                    : ["70+ Korean Brands", "OEM Available", "24hr Response"]
                  ).map((badge) => (
                    <span
                      key={badge}
                      style={{
                        fontSize: "13px",
                        color: "rgba(255,255,255,0.65)",
                        fontWeight: 500,
                      }}
                    >
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