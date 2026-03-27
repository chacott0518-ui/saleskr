"use client";

import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";

const teams = [
  {
    id: "management",
    label: "Management Support Team",
    url: "https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?w=800&q=80",
    items: ["Personnel Management", "Tax/Accounting Management", "Preparation and Management of export documents", "Information Tank Management", "Web-based Digital Development and Operations"],
  },
  {
    id: "overseas",
    label: "Overseas Sales Team 1, 2",
    url: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=800&q=80",
    items: ["Managing Overseas Clients", "Managing Partner Brands", "Participating in Overseas Exhibitions", "International Cooperation Management"],
  },
  {
    id: "brand",
    label: "Brand Management Team",
    url: "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=800&q=80",
    items: ["Online Marketing", "Online Market Management", "Customer Service Management", "Creative Content Production and Design", "Social Media Management", "Brand Strategy Development and Management", "Brand development and product innovation"],
  },
  {
    id: "purchase",
    label: "Purchase Team",
    url: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&q=80",
    items: ["Investment Proposal Management", "Supplier Management", "Share Management / Purchase Team", "Logistics Team"],
  },
  {
    id: "logistics",
    label: "Logistics Team",
    url: "https://images.unsplash.com/photo-1578575437130-527eed3abbec?w=800&q=80",
    items: ["Inventory Management", "Inbound and Outbound Management", "Product Knowledge", "Shipping Management", "Product Quality Control"],
  },
];

const jobBoards = [
  { name: "사람인 (Saramin)", href: "https://www.saramin.co.kr" },
  { name: "잡코리아 (Jobkorea)", href: "https://www.jobkorea.co.kr" },
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
        ([entry]) => { if (entry.isIntersecting) setActiveTeam(team.id); },
        { threshold: 0.3, rootMargin: "-100px 0px -60% 0px" },
      );
      observer.observe(el);
      return observer;
    });
    return () => observers.forEach((obs) => obs?.disconnect());
  }, []);

  const scrollTo = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <>
      <section className="relative h-[380px] overflow-hidden md:h-[560px]">
        <img src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=1920&q=80" alt="Recruit" className="h-full w-full object-cover object-center" loading="eager" />
        <div className="absolute inset-0 bg-black/45" />
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="px-4 text-center text-3xl font-extrabold tracking-tight text-white md:text-5xl">{t("recruit_page.title")}</h1>
        </div>
      </section>

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

      <section className="bg-white pb-12">
        <div className="mx-auto flex max-w-6xl flex-col gap-0 px-5 py-8 md:px-6 lg:flex-row lg:gap-16">
          {/* Sticky sidebar */}
          <aside className="hidden w-64 shrink-0 lg:block">
            <nav className="sticky top-[140px]" style={{ maxHeight: "calc(100vh - 160px)" }}>
              {teams.map((team) => (
                <button
                  key={team.id}
                  onClick={() => scrollTo(team.id)}
                  className={`block w-full cursor-pointer border-l-2 py-3 pl-4 text-left text-sm transition-colors duration-200 ${activeTeam === team.id ? "border-blue font-semibold text-blue" : "border-transparent text-brand-muted hover:text-brand-text"}`}
                >
                  {team.label}
                </button>
              ))}
            </nav>
          </aside>

          {/* Mobile horizontal tabs */}
          <div ref={tabsRef} className="hide-scrollbar mb-6 flex gap-0 overflow-x-auto lg:hidden">
            {teams.map((team) => (
              <button
                key={team.id}
                onClick={() => scrollTo(team.id)}
                className={`shrink-0 whitespace-nowrap px-4 py-3 text-[13px] transition-colors ${activeTeam === team.id ? "border-b-2 border-blue font-semibold text-blue" : "text-gray-500"}`}
              >
                {team.label}
              </button>
            ))}
          </div>

          {/* Team sections */}
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
                <h2 className="mb-5 text-[22px] font-bold text-brand-text">{team.label}</h2>
                <div className="relative overflow-hidden rounded-2xl" style={{ height: 280 }}>
                  <img src={team.url} alt={team.label} className="h-full w-full object-cover" loading="lazy" />
                  <div className="absolute inset-0 bg-black/50" />
                  <div className="absolute inset-x-0 bottom-0 p-6">
                    {team.items.map((item) => (
                      <span key={item} className="block py-0.5 text-[13px] text-white/90">{item}</span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-14">
        <div className="mx-auto max-w-6xl px-5 md:px-6">
          <p className="mb-6 text-[20px] font-bold text-brand-text md:text-[22px]">Job Boards</p>
          {jobBoards.map((board) => (
            <div key={board.name} className="flex items-center justify-between border-b border-gray-200 py-5">
              <span className="text-[16px] font-semibold text-brand-text">{board.name}</span>
              <a
                href={board.href}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border border-gray-300 bg-white px-6 py-2 text-[13px] font-medium text-brand-text transition-colors hover:bg-gray-50"
              >
                {t("recruit_page.apply")} →
              </a>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
