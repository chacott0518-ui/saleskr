"use client";

import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";

export default function Footer() {
  const { t } = useLanguage();

  const btnStyle: React.CSSProperties = {
    width: 160,
    height: 38,
    borderRadius: 8,
    fontSize: 12,
    fontWeight: 600,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 12,
    cursor: "pointer",
    transition: "background 0.2s",
    textDecoration: "none",
    border: "none",
  };

  return (
    <footer className="pb-6 pt-14 text-white md:pb-8 md:pt-16" style={{ background: "linear-gradient(135deg, #071729 0%, #0E3572 60%, #154C8A 100%)" }}>
      <div className="mx-auto max-w-6xl px-5 md:px-6">

        {/* 데스크탑 */}
        <div className="hidden gap-10 md:grid md:grid-cols-3 md:gap-12">
          <div>
            <h3 className="max-w-xs leading-snug text-white" style={{ fontSize: "22px", fontWeight: 900, letterSpacing: "-0.02em", textShadow: "0 2px 12px rgba(0,0,0,0.4)" }}>
              {t("footer.tagline")}
            </h3>
            <a href="#" style={{ ...btnStyle, background: "#1E5FA8", color: "white" }}
              onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.background = "#154C8A")}
              onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.background = "#1E5FA8")}>
              {t("footer.download")} ↓
            </a>
            <div style={{ position: "relative", width: 160, marginTop: 8 }}>
              <select style={{ ...btnStyle, width: 160, background: "#1B3A6B", color: "rgba(255,255,255,0.8)", border: "1px solid rgba(255,255,255,0.2)", padding: "0 16px", appearance: "none", WebkitAppearance: "none", outline: "none", marginTop: 0 }}
                onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.background = "#243F6B")}
                onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.background = "#1B3A6B")}>
                <option>Family Site ▾</option>
                <option>SalesKR B2C Store</option>
                <option>SalesKR Global</option>
              </select>
            </div>
          </div>

          <div>
            <h4 className="text-[14px] font-semibold text-white">{t("footer.hq_title")}</h4>
            <p className="mt-3 text-[12px] leading-relaxed" style={{ color: "rgba(255,255,255,0.88)" }}>
              63, Jungsan-ro, Ilsandong-gu,<br />Goyang-si, Gyeonggi-do,<br />Republic of Korea
            </p>
            <p className="mt-3 text-[12px]" style={{ color: "rgba(255,255,255,0.88)" }}>
              TEL: +82-31-977-8778<br />FAX: +82-31-976-8778
            </p>
          </div>

          <div>
            <div className="flex items-center gap-1.5 text-[12px] font-semibold text-blue-light">
              <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5a2.5 2.5 0 010-5 2.5 2.5 0 010 5z" />
              </svg>
              Korea
            </div>
            <p className="mt-2 text-[12px] leading-relaxed" style={{ color: "rgba(255,255,255,0.88)" }}>
              63, Jungsan-ro, Ilsandong-gu,<br />Goyang-si, Gyeonggi-do
            </p>
            <p className="mt-2 text-[12px]" style={{ color: "rgba(255,255,255,0.88)" }}>
              TEL: +82-31-977-8778<br />FAX: +82-31-976-8778
            </p>
          </div>
        </div>

        {/* 모바일 */}
        <div className="block md:hidden">
          <h3 className="leading-snug text-white" style={{ fontSize: "18px", fontWeight: 900, letterSpacing: "-0.02em", textShadow: "0 2px 12px rgba(0,0,0,0.4)" }}>
            {t("footer.tagline")}
          </h3>

          <div className="mt-4 flex gap-2">
            <a href="#" style={{ height: 34, borderRadius: 8, fontSize: 11, fontWeight: 600, display: "flex", alignItems: "center", justifyContent: "center", padding: "0 14px", background: "#1E5FA8", color: "white", textDecoration: "none" }}>
              {t("footer.download")} ↓
            </a>
            <select style={{ height: 34, borderRadius: 8, fontSize: 11, fontWeight: 600, background: "#1B3A6B", color: "rgba(255,255,255,0.8)", border: "1px solid rgba(255,255,255,0.2)", padding: "0 12px", appearance: "none", WebkitAppearance: "none", outline: "none" }}>
              <option>Family Site ▾</option>
              <option>SalesKR B2C Store</option>
              <option>SalesKR Global</option>
            </select>
          </div>

          <div className="mt-8 grid grid-cols-2 gap-6">
            <div>
              <h4 className="text-[11px] font-semibold text-white">{t("footer.hq_title")}</h4>
              <p className="mt-2 text-[11px] leading-relaxed" style={{ color: "rgba(255,255,255,0.88)" }}>
                63, Jungsan-ro, Ilsandong-gu,<br />Goyang-si, Gyeonggi-do,<br />Republic of Korea
              </p>
              <p className="mt-2 text-[11px]" style={{ color: "rgba(255,255,255,0.88)" }}>
                TEL: +82-31-977-8778<br />FAX: +82-31-976-8778
              </p>
            </div>
            <div>
              <div className="flex items-center gap-1 text-[11px] font-semibold text-blue-light">
                <svg width="11" height="11" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5a2.5 2.5 0 010-5 2.5 2.5 0 010 5z" />
                </svg>
                Korea
              </div>
              <p className="mt-2 text-[11px] leading-relaxed" style={{ color: "rgba(255,255,255,0.88)" }}>
                63, Jungsan-ro, Ilsandong-gu,<br />Goyang-si, Gyeonggi-do
              </p>
              <p className="mt-2 text-[11px]" style={{ color: "rgba(255,255,255,0.88)" }}>
                TEL: +82-31-977-8778<br />FAX: +82-31-976-8778
              </p>
            </div>
          </div>
        </div>

        {/* 하단 바 */}
        <div className="mt-8 flex flex-col items-center justify-between gap-2 pt-5 text-center md:mt-12 md:flex-row md:pt-6 md:text-left" style={{ borderTop: "1px solid rgba(255,255,255,0.1)" }}>
          <p className="text-[10px] md:text-[11px]" style={{ color: "rgba(255,255,255,0.4)" }}>{t("footer.copyright")}</p>
          <div className="flex items-center gap-4">
            <a href="#" aria-label="Instagram" style={{ color: "rgba(255,255,255,0.4)" }} className="transition-colors hover:text-white/70">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M7.75 2h8.5A5.75 5.75 0 0122 7.75v8.5A5.75 5.75 0 0116.25 22h-8.5A5.75 5.75 0 012 16.25v-8.5A5.75 5.75 0 017.75 2m-.25 2A3.5 3.5 0 004 7.5v9A3.5 3.5 0 007.5 20h9a3.5 3.5 0 003.5-3.5v-9A3.5 3.5 0 0016.5 4h-9m9.94 1.13a1.25 1.25 0 110 2.5 1.25 1.25 0 010-2.5M12 7a5 5 0 110 10 5 5 0 010-10m0 2a3 3 0 100 6 3 3 0 000-6z" />
              </svg>
            </a>
            <Link href="/">
              <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: "14px", fontWeight: 800, letterSpacing: "-0.02em", color: "rgba(255,255,255,0.4)" }}>
                Sales<span style={{ color: "#4A9EFF" }}>KR</span>
              </span>
            </Link>
          </div>
        </div>

      </div>
    </footer>
  );
}