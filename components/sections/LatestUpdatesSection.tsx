"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";

const timezones = [
  { label: "KST", tz: "Asia/Seoul" },
  { label: "EST", tz: "America/New_York" },
  { label: "MSK", tz: "Europe/Moscow" },
  { label: "GMT", tz: "Europe/London" },
];

function getHandAngles(timezone: string) {
  const now = new Date();
  const timeStr = now.toLocaleTimeString("en-US", {
    timeZone: timezone,
    hour12: false,
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  });
  const [h, m, s] = timeStr.split(":").map(Number);
  return { hourAngle: ((h % 12) + m / 60) * 30 - 90, minuteAngle: (m + s / 60) * 6 - 90 };
}

function handEnd(cx: number, cy: number, len: number, deg: number) {
  const r = (deg * Math.PI) / 180;
  return { x: cx + len * Math.cos(r), y: cy + len * Math.sin(r) };
}

function AnalogClock({ tz, label }: { tz: string; label: string }) {
  const [angles, setAngles] = useState({ hourAngle: 0, minuteAngle: 0 });
  useEffect(() => {
    setAngles(getHandAngles(tz));
    const id = setInterval(() => setAngles(getHandAngles(tz)), 1000);
    return () => clearInterval(id);
  }, [tz]);
  const size = 52;
  const c = size / 2;
  const hEnd = handEnd(c, c, size * 0.25, angles.hourAngle);
  const mEnd = handEnd(c, c, size * 0.36, angles.minuteAngle);
  return (
    <div className="flex flex-col items-center gap-1.5">
      <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`} suppressHydrationWarning>
        <circle cx={c} cy={c} r={c - 1} fill="#1B3A6B" stroke="rgba(255,255,255,0.2)" strokeWidth="1" />
        <line x1={c} y1={c} x2={hEnd.x} y2={hEnd.y} stroke="white" strokeWidth="2.5" strokeLinecap="round" />
        <line x1={c} y1={c} x2={mEnd.x} y2={mEnd.y} stroke="white" strokeWidth="1.5" strokeLinecap="round" />
        <circle cx={c} cy={c} r="2" fill="white" />
      </svg>
      <span style={{ fontSize: "10px", color: "rgba(255,255,255,0.6)" }}>{label}</span>
    </div>
  );
}

const newsItems = [
  { date: "12-05", title: "K-Beauty Leads Export Growth..." },
  { date: "07-31", title: "SalesKR Sponsors with Korean Products..." },
  { date: "12-07", title: "Blood Donation Certificate Donation..." },
];

const glassCard: React.CSSProperties = {
  background: "rgba(255,255,255,0.12)",
  backdropFilter: "blur(12px)",
  WebkitBackdropFilter: "blur(12px)",
  border: "1px solid rgba(255,255,255,0.2)",
  borderRadius: "16px",
};

export default function LatestUpdatesSection() {
  const { t } = useLanguage();

  return (
    <section id="updates" className="relative overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?w=1920&q=80"
          alt="City skyline"
          className="h-full w-full object-cover"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-black/55" />
      </div>

      <div className="relative z-10 mx-auto max-w-6xl px-5 pb-0 pt-14 md:px-6 md:pt-16">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          style={{ fontSize: "28px", fontWeight: 700, color: "white", marginBottom: "24px" }}
        >
          {t("updates.title")}
        </motion.h2>

        {/* ── Desktop grid (3 columns) ── */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          viewport={{ once: true }}
          className="hidden gap-4 md:grid"
          style={{ gridTemplateColumns: "5fr 5fr 2fr", alignItems: "stretch" }}
        >
          {/* Column 1 */}
          <div className="flex flex-col gap-4">
            <Link
              href="/company/about"
              className="group flex flex-col justify-between p-5 transition-all duration-300 hover:brightness-110 md:p-6"
              style={{ background: "linear-gradient(135deg, #1E5FA8, #4A9EFF)", borderRadius: "16px", height: "100%" }}
            >
              <div className="flex items-center justify-between">
                <span style={{ fontSize: "13px", fontWeight: 600, color: "rgba(255,255,255,0.7)" }}>
                  {t("updates.about_card")}
                </span>
                <span className="text-white/70 transition-transform duration-200 group-hover:translate-x-1">→</span>
              </div>
              <p style={{ fontSize: "18px", fontWeight: 700, color: "white", lineHeight: 1.4 }}>
                {t("updates.about_text")}
              </p>
            </Link>

            <Link
              href="/company/locations"
              className="group flex items-center gap-4 p-4 transition-all duration-300 hover:border-white/30 md:p-5"
              style={{ ...glassCard, minHeight: 120 }}
            >
              <div className="flex-1">
                <div className="flex items-center justify-between">
                  <span style={{ fontSize: "13px", color: "rgba(255,255,255,0.7)" }}>{t("updates.locations_card")}</span>
                  <span className="text-white/70 transition-transform duration-200 group-hover:translate-x-1">→</span>
                </div>
                <p style={{ marginTop: "8px", fontSize: "14px", fontWeight: 700, color: "white" }}>
                  {t("updates.locations_text")}
                </p>
                <p style={{ marginTop: "4px", fontSize: "11px", color: "rgba(255,255,255,0.6)" }}>
                  {t("updates.locations_sub")}
                </p>
              </div>
              <div style={{ color: "#4A9EFF", flexShrink: 0 }}>
                <svg width="26" height="26" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5a2.5 2.5 0 010-5 2.5 2.5 0 010 5z" />
                </svg>
              </div>
            </Link>
          </div>

          {/* Column 2 */}
          <div className="flex flex-col gap-4">
            <div style={{ ...glassCard, padding: "20px" }}>
              <p style={{ fontSize: "12px", fontWeight: 600, color: "rgba(255,255,255,0.8)", marginBottom: "16px" }}>
                {t("updates.clock_title")}
              </p>
              <div className="grid grid-cols-4 place-items-center">
                {timezones.map((tz) => <AnalogClock key={tz.label} tz={tz.tz} label={tz.label} />)}
              </div>
            </div>

            <Link
              href="/news"
              className="group p-4 transition-all duration-300 hover:border-white/25 md:p-5"
              style={glassCard}
            >
              <div className="mb-2 flex items-center justify-between md:mb-3">
                <span style={{ fontSize: "14px", fontWeight: 700, color: "white" }}>NEWS</span>
                <span className="text-white/70 transition-transform duration-200 group-hover:translate-x-1">→</span>
              </div>
              {newsItems.map((item, i) => (
                <div
                  key={i}
                  className="flex items-baseline gap-3 py-2.5"
                  style={{ borderBottom: i < newsItems.length - 1 ? "1px solid rgba(255,255,255,0.1)" : "none" }}
                >
                  <span style={{ flexShrink: 0, fontSize: "11px", color: "rgba(255,255,255,0.5)" }}>{item.date}</span>
                  <span className="truncate" style={{ fontSize: "13px", color: "rgba(255,255,255,0.8)" }}>{item.title}</span>
                </div>
              ))}
            </Link>
          </div>

          {/* Column 3 — White SalesKR card (full height) */}
          <div className="flex flex-col">
            <div
              className="flex flex-1 flex-col items-center justify-center p-6"
              style={{ background: "white", borderRadius: "16px", height: "100%" }}
            >
              <p style={{ fontSize: "20px", fontWeight: 800, color: "#0A1F44", letterSpacing: "-0.02em" }}>
                Sales<span style={{ color: "#1E5FA8" }}>KR</span>
              </p>
              <p style={{ fontSize: "12px", color: "#6B6B60", marginTop: "4px", textAlign: "center" }}>
                Korean B2B Export Specialist
              </p>
              <div style={{ width: 32, height: 3, background: "#1E5FA8", borderRadius: 2, margin: "12px auto 0" }} />
            </div>
          </div>
        </motion.div>

        {/* ── Mobile layout (stacked) ── */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          viewport={{ once: true }}
          className="flex flex-col gap-4 md:hidden"
        >
          <Link
            href="/company/about"
            className="group flex flex-col justify-between p-5 transition-all duration-300 hover:brightness-110"
            style={{ background: "linear-gradient(135deg, #1E5FA8, #4A9EFF)", borderRadius: "16px", minHeight: 140 }}
          >
            <div className="flex items-center justify-between">
              <span style={{ fontSize: "13px", fontWeight: 600, color: "rgba(255,255,255,0.7)" }}>{t("updates.about_card")}</span>
              <span className="text-white/70">→</span>
            </div>
            <p style={{ fontSize: "16px", fontWeight: 700, color: "white", lineHeight: 1.4 }}>{t("updates.about_text")}</p>
          </Link>

          <Link
            href="/news"
            className="group p-4 transition-all duration-300"
            style={{ ...glassCard, minHeight: 120 }}
          >
            <div className="mb-2 flex items-center justify-between">
              <span style={{ fontSize: "14px", fontWeight: 700, color: "white" }}>NEWS</span>
              <span className="text-white/70">→</span>
            </div>
            {newsItems.map((item, i) => (
              <div
                key={i}
                className="flex items-baseline gap-3 py-2"
                style={{ borderBottom: i < newsItems.length - 1 ? "1px solid rgba(255,255,255,0.1)" : "none" }}
              >
                <span style={{ flexShrink: 0, fontSize: "11px", color: "rgba(255,255,255,0.5)" }}>{item.date}</span>
                <span className="truncate" style={{ fontSize: "13px", color: "rgba(255,255,255,0.8)" }}>{item.title}</span>
              </div>
            ))}
          </Link>
        </motion.div>

        {/* Contact Banner */}
        <div
          className="flex flex-col items-center justify-between gap-4 px-1 py-10 text-center md:flex-row md:py-12 md:text-left"
          style={{ borderTop: "1px solid rgba(255,255,255,0.15)", marginTop: "24px" }}
        >
          <h3 style={{ fontSize: "clamp(38px, 6vw, 72px)", fontWeight: 900, color: "white", lineHeight: 1 }}>
            {t("contact_banner.title")}
          </h3>
          <p style={{ maxWidth: 280, fontSize: "13px", color: "rgba(255,255,255,0.7)" }}>
            {t("contact_banner.subtext")}
          </p>
          <Link
  href="/contact"
  className="rounded-full text-center font-bold text-white transition-all duration-200"
  style={{
    background: "linear-gradient(135deg, #1E5FA8 0%, #4A9EFF 100%)",
    padding: "10px 28px",
    fontSize: "13px",
    display: "inline-block",
  }}
  onMouseEnter={(e) => {
    const el = e.currentTarget as HTMLElement;
    el.style.background = "linear-gradient(135deg, #154C8A 0%, #1E5FA8 100%)";
    el.style.transform = "translateY(-2px) scale(1.03)";
    el.style.boxShadow = "0 8px 25px rgba(30,95,168,0.5)";
  }}
  onMouseLeave={(e) => {
    const el = e.currentTarget as HTMLElement;
    el.style.background = "linear-gradient(135deg, #1E5FA8 0%, #4A9EFF 100%)";
    el.style.transform = "translateY(0) scale(1)";
    el.style.boxShadow = "none";
  }}
>
  {t("contact_banner.button")}
</Link>
        </div>
      </div>
    </section>
  );
}
