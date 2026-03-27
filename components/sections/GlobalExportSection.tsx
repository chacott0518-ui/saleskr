"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";
import CountUp from "react-countup";
import * as THREE from "three";
import { useLanguage } from "@/context/LanguageContext";

import "swiper/css";

const markerCoords: [number, number][] = [
  [37.5, 127.0], [55.7, 37.6], [21.0, 105.8], [52.2, 21.0], [37.0, -95.7],
  [-25.2, 133.7], [23.4, 53.8], [51.5, -0.1], [36.2, 138.2], [-14.2, -51.9],
];

const countrySlides = [
  { title: "Asia & Oceania", countries: ["Japan", "South Korea", "China", "Taiwan", "Thailand", "Vietnam", "Philippines", "Singapore", "Malaysia", "India", "Australia", "Bangladesh", "Cambodia", "UAE", "Saudi Arabia", "Bahrain"] },
  { title: "Europe & Americas", countries: ["United States", "Canada", "Brazil", "Chile", "Argentina", "Colombia", "Ecuador", "Peru", "Bolivia", "United Kingdom", "Poland", "Russia", "Ukraine", "Kazakhstan", "Netherlands", "Spain", "Estonia", "Germany"] },
  { title: "Others", countries: ["Vietnam", "Uzbekistan", "Kyrgyzstan", "Azerbaijan", "Armenia", "Moldova", "Albania", "Bulgaria", "Iran", "Qatar", "Kenya", "Gabon", "Nigeria", "Venezuela", "Paraguay", "Uruguay"] },
];

function latLngToVec3(lat: number, lng: number, radius: number): THREE.Vector3 {
  const phi = (90 - lat) * (Math.PI / 180);
  const theta = (lng + 180) * (Math.PI / 180);
  return new THREE.Vector3(-radius * Math.sin(phi) * Math.cos(theta), radius * Math.cos(phi), radius * Math.sin(phi) * Math.sin(theta));
}

function Globe({ size = 320 }: { size?: number }) {
  const mountRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, 1, 0.1, 1000);
    camera.position.z = 4;
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(size, size);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);
    const sphere = new THREE.Mesh(
      new THREE.SphereGeometry(1.5, 36, 36),
      new THREE.MeshBasicMaterial({ color: 0xcbd5e1, wireframe: true, transparent: true, opacity: 0.3 }),
    );
    scene.add(sphere);
    const dotGeo = new THREE.SphereGeometry(0.03, 12, 12);
    const dots: THREE.Mesh[] = [];
    const ringGeo = new THREE.RingGeometry(0.04, 0.07, 24);
    for (const [lat, lng] of markerCoords) {
      const dot = new THREE.Mesh(dotGeo, new THREE.MeshBasicMaterial({ color: 0x1e5fa8 }));
      dot.position.copy(latLngToVec3(lat, lng, 1.52));
      sphere.add(dot);
      dots.push(dot);
      const ring = new THREE.Mesh(ringGeo, new THREE.MeshBasicMaterial({ color: 0x4a9eff, transparent: true, opacity: 0.5, side: THREE.DoubleSide }));
      ring.position.copy(latLngToVec3(lat, lng, 1.525));
      ring.lookAt(new THREE.Vector3(0, 0, 0));
      sphere.add(ring);
    }
    let frameId: number, time = 0;
    const animate = () => {
      frameId = requestAnimationFrame(animate);
      sphere.rotation.y += 0.003;
      time += 0.03;
      dots.forEach((d, i) => {
        const m = d.material as THREE.MeshBasicMaterial;
        m.opacity = 0.6 + 0.4 * Math.sin(time + i * 0.7);
        m.transparent = true;
      });
      renderer.render(scene, camera);
    };
    animate();
    return () => { cancelAnimationFrame(frameId); renderer.dispose(); container.removeChild(renderer.domElement); };
  }, [size]);
  return <div ref={mountRef} style={{ width: size, height: size, margin: "0 auto" }} />;
}

export default function GlobalExportSection() {
  const { t } = useLanguage();
  const [slideIndex, setSlideIndex] = useState(0);
  const [swiper, setSwiper] = useState<SwiperType | null>(null);
  const [countriesOpen, setCountriesOpen] = useState(false);

  const stats = [
    { end: 47, suffix: "+", description: t("export.stat1_label"), sub: t("export.stat1_sub") },
    { end: 4, suffix: "+", description: t("export.stat2_label"), sub: t("export.stat2_sub") },
    { end: 300, suffix: "+", description: t("export.stat3_label"), sub: t("export.stat3_sub") },
  ];

  return (
    <section id="global" className="bg-white py-14 md:py-20">
      <div className="mx-auto max-w-6xl px-5 md:px-6">

        {/* ── 데스크탑 ── */}
        <div className="relative hidden overflow-hidden rounded-3xl md:flex md:items-stretch" style={{ background: "#0A1F44", minHeight: 480, padding: "48px" }}>
          <div className="pointer-events-none absolute inset-0 flex items-center justify-center" style={{ opacity: 0.12 }}>
            <Globe size={580} />
          </div>
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="flex flex-col justify-center gap-10"
            style={{ width: "45%", position: "relative", zIndex: 10 }}
          >
            <h2 style={{ fontSize: "36px", fontWeight: 800, lineHeight: 1.2, color: "white" }}>
              {t("export.headline_1")}<br />
              <span style={{ color: "#4A9EFF" }}>{t("export.headline_2")}</span>
            </h2>
            {stats.map((stat, i) => (
              <motion.div
                key={stat.description}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: i * 0.12 }}
                viewport={{ once: true }}
                className="border-l-2 border-blue-400 pl-6"
              >
                <p style={{ fontSize: "48px", fontWeight: 800, color: "white", lineHeight: 1 }}>
                  <CountUp end={stat.end} suffix={stat.suffix} duration={2} enableScrollSpy scrollSpyOnce />
                </p>
                <p style={{ fontSize: "14px", color: "rgba(255,255,255,0.7)", marginTop: "6px" }}>{stat.description}</p>
                <p style={{ fontSize: "13px", color: "rgba(255,255,255,0.45)", marginTop: "4px" }}>{stat.sub}</p>
              </motion.div>
            ))}
          </motion.div>
          <div className="flex flex-col justify-center gap-6" style={{ width: "55%", position: "relative", zIndex: 10 }}>
            <div className="relative overflow-hidden" style={{ background: "rgba(248,248,248,0.9)", borderRadius: "16px", padding: "24px" }}>
              <div className="relative z-10">
                <div className="mb-4 flex items-center justify-between">
                  <h3 style={{ fontSize: "18px", fontWeight: 700, color: "#0A1F44" }}>{t("export.mobile_title")}</h3>
                  <div className="flex gap-1.5">
                    {countrySlides.map((_, i) => (
                      <button key={i} onClick={() => swiper?.slideTo(i)} className="h-1.5 rounded-full transition-all" style={{ width: slideIndex === i ? 24 : 8, background: slideIndex === i ? "#1E5FA8" : "#CBD5E1" }} />
                    ))}
                  </div>
                </div>
                <Swiper modules={[Navigation]} onSwiper={setSwiper} onSlideChange={(s) => setSlideIndex(s.activeIndex)} spaceBetween={0} slidesPerView={1}>
                  {countrySlides.map((slide, si) => (
                    <SwiperSlide key={si}>
                      <p className="mb-2 text-[11px] font-semibold uppercase tracking-wider" style={{ color: "#6B6B60" }}>{slide.title}</p>
                      <div className="grid grid-cols-3 gap-x-6 gap-y-1.5">
                        {slide.countries.map((c) => (
                          <span key={c} className="truncate" style={{ fontSize: "13px", color: "#6B6B60" }}>{c}</span>
                        ))}
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
                <div className="mt-3 flex gap-2">
                  <button onClick={() => swiper?.slidePrev()} disabled={slideIndex === 0} className="flex h-7 w-7 items-center justify-center rounded-full border border-gray-200 text-gray-400 transition-colors hover:border-blue-400 hover:text-blue-600 disabled:opacity-30">
                    <svg width="12" height="12" viewBox="0 0 16 16" fill="none"><path d="M10 12L6 8l4-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
                  </button>
                  <button onClick={() => swiper?.slideNext()} disabled={slideIndex === countrySlides.length - 1} className="flex h-7 w-7 items-center justify-center rounded-full border border-gray-200 text-gray-400 transition-colors hover:border-blue-400 hover:text-blue-600 disabled:opacity-30">
                    <svg width="12" height="12" viewBox="0 0 16 16" fill="none"><path d="M6 4l4 4-4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ── 모바일 ── */}
        <div className="block md:hidden">
          <div className="overflow-hidden rounded-3xl" style={{ background: "#0A1F44", padding: "32px 24px" }}>
            <h2 className="mb-8 text-[26px] font-extrabold leading-tight" style={{ color: "white" }}>
              {t("export.headline_1")}<br />
              <span style={{ color: "#4A9EFF" }}>{t("export.headline_2")}</span>
            </h2>

            {/* 숫자 3개 카드 */}
            <div className="mb-8 grid grid-cols-3 gap-3">
              {stats.map((stat, i) => (
                <motion.div
                  key={stat.description}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  viewport={{ once: true }}
                  className="flex flex-col items-center justify-center rounded-2xl py-4"
                  style={{ background: "rgba(255,255,255,0.08)" }}
                >
                  <p style={{ fontSize: "26px", fontWeight: 900, color: "#4A9EFF", lineHeight: 1 }}>
                    <CountUp end={stat.end} suffix={stat.suffix} duration={2} enableScrollSpy scrollSpyOnce />
                  </p>
                  <div style={{ width: 20, height: 2, background: "#1E5FA8", borderRadius: 2, margin: "6px auto 5px" }} />
                  <p style={{ fontSize: "9px", color: "rgba(255,255,255,0.65)", textAlign: "center", lineHeight: 1.4 }}>{stat.description}</p>
                </motion.div>
              ))}
            </div>

            {/* 국가 아코디언 */}
            <div style={{ background: "rgba(255,255,255,0.08)", borderRadius: "16px", overflow: "hidden" }}>
              <button
                onClick={() => setCountriesOpen(!countriesOpen)}
                className="flex w-full items-center justify-between px-5 py-4"
              >
                <span style={{ fontSize: "14px", fontWeight: 600, color: "white" }}>{t("export.mobile_title")}</span>
                <span style={{ fontSize: "12px", color: "#4A9EFF", fontWeight: 600 }}>
                  47 countries {countriesOpen ? "▲" : "→"}
                </span>
              </button>
              {countriesOpen && (
                <div className="px-5 pb-5 pt-2" style={{ borderTop: "1px solid rgba(255,255,255,0.1)" }}>
                  <div className="grid grid-cols-3 gap-x-4 gap-y-2">
                    {countrySlides.flatMap((s) => s.countries).slice(0, 36).map((c) => (
                      <span key={c} className="truncate" style={{ fontSize: "11px", color: "rgba(255,255,255,0.65)" }}>{c}</span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}