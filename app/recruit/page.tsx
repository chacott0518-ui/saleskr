"use client";

import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import Link from "next/link";

const teams = [
  {
    id: "management",
    label: "Management Support Team",
    url: "https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?w=800&q=80",
    items: [
      "Personnel Management",
      "Tax / Accounting Management",
      "Preparation and Management of export documents",
      "Information Tank Management",
      "Web-based Digital Development and Operations",
    ],
  },
  {
    id: "overseas",
    label: "Overseas Sales Team 1, 2",
    url: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=800&q=80",
    items: [
      "Managing Overseas Clients",
      "Managing Partner Brands",
      "Participating in Overseas Exhibitions",
      "International Cooperation Management",
    ],
  },
  {
    id: "brand",
    label: "Brand Management Team",
    url: "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=800&q=80",
    items: [
      "Online Marketing",
      "Online Market Management",
      "Customer Service Management",
      "Creative Content Production and Design",
      "Social Media Management",
      "Brand Strategy Development and Management",
      "Brand development and product innovation",
    ],
  },
  {
    id: "purchase",
    label: "Purchase Team",
    url: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&q=80",
    items: [
      "Investment Proposal Management",
      "Supplier Management",
      "Share Management / Purchase Team",
      "Logistics Team",
    ],
  },
  {
    id: "logistics",
    label: "Logistics Team",
    url: "https://images.unsplash.com/photo-1578575437130-527eed3abbec?w=800&q=80",
    items: [
      "Inventory Management",
      "Inbound and Outbound Management",
      "Product Knowledge",
      "Shipping Management",
      "Product Quality Control",
    ],
  },
];

export default function RecruitPage() {
  const [activeTeam, setActiveTeam] = useState("management");
  const tabsRef = useRef<HTMLDivElement>(null);
  const { t } = useLanguage();

  useEffect(() => {
    const observers: (IntersectionObserver | null)[] = teams.map((team) => {
      const el = document.getElementById(team.id);
      if (!el) return null;
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActiveTeam(team.id);
        },
        { threshold: 0.3, rootMargin: "-100px 0px -60% 0px" }
      );
      observer.observe(el);
      return observer;
    });
    return () => observers.forEach((obs) => obs?.disconnect());
  }, []);

  const scrollTo = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <>
      {/* ─── 히어로 ─── */}
      <section className="relative h-[380px] overflow-hidden md:h-[560px]">
        <img
          src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=1920&q=80"
          alt="Recruit"
          className="h-full w-full object-cover object-center"
          loading="eager"
        />
        <div className="absolute inset-0 bg-black/45" />
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="px-4 text-center text-3xl font-extrabold tracking-tight text-white md:text-5xl">
            {t("recruit_page.title")}
          </h1>
        </div>
      </section>

      {/* ─── 인트로 ─── */}
      <section className="bg-white px-5 py-16 md:px-6">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mx-auto max-w-6xl text-[20px] font-bold leading-snug text-brand-text md:max-w-3xl md:text-[24px]"
        >
          {t("recruit_page.intro")}
        </motion.p>
      </section>

      {/* ─── 팀 섹션 ─── */}
      <section className="bg-white pb-12">
        <div className="mx-auto flex max-w-6xl flex-col gap-0 px-5 py-8 md:px-6 lg:flex-row lg:gap-16">

          {/* 사이드바 — 데스크톱 */}
          <aside className="hidden w-64 shrink-0 lg:block">
            <nav className="sticky top-[140px]" style={{ maxHeight: "calc(100vh - 160px)" }}>
              {teams.map((team) => (
                <button
                  key={team.id}
                  onClick={() => scrollTo(team.id)}
                  className={`block w-full cursor-pointer border-l-2 py-3 pl-4 text-left text-sm transition-colors duration-200 ${
                    activeTeam === team.id
                      ? "border-blue font-semibold text-blue"
                      : "border-transparent text-brand-muted hover:text-brand-text"
                  }`}
                >
                  {team.label}
                </button>
              ))}
            </nav>
          </aside>

          {/* 모바일 탭 */}
          <div
            ref={tabsRef}
            className="hide-scrollbar mb-6 flex gap-0 overflow-x-auto lg:hidden"
          >
            {teams.map((team) => (
              <button
                key={team.id}
                onClick={() => scrollTo(team.id)}
                className={`shrink-0 whitespace-nowrap px-4 py-3 text-[13px] transition-colors ${
                  activeTeam === team.id
                    ? "border-b-2 border-blue font-semibold text-blue"
                    : "text-gray-500"
                }`}
              >
                {team.label}
              </button>
            ))}
          </div>

          {/* 팀 카드들 */}
          <div className="flex-1">
            {teams.map((team) => (
              <motion.div
                key={team.id}
                id={team.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                viewport={{ once: true, margin: "-50px" }}
                className="pb-16"
              >
                <h2 className="mb-5 text-[22px] font-bold text-brand-text">
                  {team.label}
                </h2>
                <div
                  className="relative overflow-hidden rounded-2xl"
                  style={{ height: 280 }}
                >
                  <img
                    src={team.url}
                    alt={team.label}
                    className="h-full w-full object-cover"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-black/50" />
                  <div className="absolute inset-x-0 bottom-0 p-6">
                    {team.items.map((item) => (
                      <span
                        key={item}
                        className="block py-0.5 text-[13px] text-white/90"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── ✅ Job Boards 삭제 → 자발적 이력서 CTA 교체 ─── */}
      <section
        className="py-16 md:py-20"
        style={{
          background: "linear-gradient(135deg, #0A1F44 0%, #1E5FA8 100%)",
        }}
      >
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="mx-auto max-w-4xl px-5 text-center md:px-6"
        >
          <p
            className="text-[11px] font-bold uppercase tracking-[.2em]"
            style={{ color: "rgba(255,255,255,0.6)" }}
          >
            Join Our Team
          </p>
          <h3 className="mt-4 text-[24px] font-extrabold text-white md:text-[32px]">
            We Welcome Passionate Talent
          </h3>
          <p
            className="mx-auto mt-4 max-w-xl text-[15px] leading-relaxed"
            style={{ color: "rgba(255,255,255,0.7)" }}
          >
            Even when there are no open positions, we are always open to hearing from motivated individuals. Send us your resume and let us know how you can contribute.
          </p>
          <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            
              <a
              href="mailto:kimchee21@hanmail.net"
              className="rounded-lg px-10 py-3.5 text-[15px] font-bold text-white transition-all duration-200 hover:-translate-y-0.5"
              style={{
                background: "rgba(255,255,255,0.15)",
                border: "1.5px solid rgba(255,255,255,0.4)",
              }}
            >
              Send Resume →
            </a>
            <Link
              href="/contact"
              className="rounded-lg px-10 py-3.5 text-[15px] font-bold transition-all duration-200 hover:-translate-y-0.5"
              style={{ background: "white", color: "#0A1F44" }}
            >
              Contact Us
            </Link>
          </div>
          <p
            className="mt-6 text-[13px]"
            style={{ color: "rgba(255,255,255,0.4)" }}
          >
            kimchee21@hanmail.net
          </p>
        </motion.div>
      </section>
    </>
  );
}