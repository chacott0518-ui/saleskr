"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";

type NavChild = { label: string; href: string };
type NavLink = { label: string; href: string; children?: NavChild[] };

type MobileDrawerProps = {
  links: NavLink[];
  onClose: () => void;
};

export default function MobileDrawer({ links, onClose }: MobileDrawerProps) {
  const { lang, setLang, t } = useLanguage();
  const [openAccordion, setOpenAccordion] = useState<string | null>(null);

  const toggle = (label: string) => {
    setOpenAccordion((prev) => (prev === label ? null : label));
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[60] lg:hidden"
    >
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={onClose} />

      <motion.nav
        initial={{ x: "100%" }}
        animate={{ x: 0 }}
        exit={{ x: "100%" }}
        transition={{ type: "spring", damping: 25, stiffness: 200 }}
        className="absolute right-0 top-0 h-full overflow-y-auto shadow-2xl"
        style={{
          width: "min(75vw, 300px)",
          background: "linear-gradient(160deg, #0A1F44 0%, #0E3572 60%, #154C8A 100%)",
        }}
      >
        <div className="flex h-full flex-col">

          {/* Header */}
          <div
            className="flex items-center justify-between px-6 py-5"
            style={{ borderBottom: "1px solid rgba(255,255,255,0.1)" }}
          >
            <span
              style={{
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                fontSize: "20px",
                fontWeight: 800,
                letterSpacing: "-0.02em",
                color: "white",
              }}
            >
              Sales<span style={{ color: "#4A9EFF" }}>KR</span>
            </span>
            <button
              onClick={onClose}
              aria-label="Close menu"
              className="flex h-9 w-9 items-center justify-center rounded-full transition-colors"
              style={{ color: "rgba(255,255,255,0.7)", background: "rgba(255,255,255,0.08)" }}
            >
              <svg width="18" height="18" viewBox="0 0 20 20" fill="none">
                <path d="M5 5l10 10M15 5L5 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              </svg>
            </button>
          </div>

          {/* Language toggle */}
          <div className="flex gap-2 px-6 pt-5">
            <button
              onClick={() => setLang("en")}
              className="rounded-full px-4 py-1.5 text-xs font-semibold transition-colors"
              style={{
                background: lang === "en" ? "#1E5FA8" : "rgba(255,255,255,0.08)",
                color: lang === "en" ? "white" : "rgba(255,255,255,0.6)",
                border: "1px solid rgba(255,255,255,0.15)",
              }}
            >
              EN
            </button>
            <button
              onClick={() => setLang("ko")}
              className="rounded-full px-4 py-1.5 text-xs font-semibold transition-colors"
              style={{
                background: lang === "ko" ? "#1E5FA8" : "rgba(255,255,255,0.08)",
                color: lang === "ko" ? "white" : "rgba(255,255,255,0.6)",
                border: "1px solid rgba(255,255,255,0.15)",
              }}
            >
              KR
            </button>
          </div>

          {/* Nav links */}
          <div className="flex flex-col gap-1 px-4 py-6">
            {links.map((link, i) => (
              <motion.div
                key={link.href}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.05 }}
              >
                {link.children ? (
                  <>
                    <button
                      onClick={() => toggle(link.label)}
                      className="flex w-full items-center justify-between rounded-lg px-4 py-3 text-[15px] font-semibold transition-colors"
                      style={{
                        color: "white",
                        background: openAccordion === link.label ? "rgba(255,255,255,0.1)" : "transparent",
                      }}
                    >
                      {link.label}
                      <svg
                        width="15"
                        height="15"
                        viewBox="0 0 16 16"
                        fill="none"
                        style={{ color: "rgba(255,255,255,0.6)" }}
                        className={`transition-transform duration-200 ${openAccordion === link.label ? "rotate-180" : ""}`}
                      >
                        <path d="M4 6l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </button>

                    <AnimatePresence>
                      {openAccordion === link.label && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.2, ease: "easeOut" }}
                          className="overflow-hidden"
                        >
                          <div className="flex flex-col pb-1 pl-4">
                            {link.children.map((child) => (
                              <Link
                                key={child.href}
                                href={child.href}
                                onClick={onClose}
                                className="rounded-md px-4 py-2.5 text-[13px] font-medium transition-colors"
                                style={{ color: "rgba(255,255,255,0.65)" }}
                                onMouseEnter={(e) => {
                                  (e.currentTarget as HTMLElement).style.color = "white";
                                  (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.08)";
                                }}
                                onMouseLeave={(e) => {
                                  (e.currentTarget as HTMLElement).style.color = "rgba(255,255,255,0.65)";
                                  (e.currentTarget as HTMLElement).style.background = "transparent";
                                }}
                              >
                                {child.label}
                              </Link>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </>
                ) : (
                  <Link
                    href={link.href}
                    onClick={onClose}
                    className="block rounded-lg px-4 py-3 text-[15px] font-semibold transition-colors"
                    style={{ color: "white" }}
                    onMouseEnter={(e) => {
                      (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.08)";
                    }}
                    onMouseLeave={(e) => {
                      (e.currentTarget as HTMLElement).style.background = "transparent";
                    }}
                  >
                    {link.label}
                  </Link>
                )}
              </motion.div>
            ))}
          </div>

          {/* CTA */}
          <div
            className="mt-auto px-6 py-6"
            style={{ borderTop: "1px solid rgba(255,255,255,0.1)" }}
          >
            <Link
              href="/contact"
              onClick={onClose}
              className="flex w-full items-center justify-center rounded-lg py-3 text-[14px] font-bold text-white transition-all"
              style={{
                background: "linear-gradient(135deg, #1E5FA8 0%, #4A9EFF 100%)",
                minHeight: 46,
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.background = "linear-gradient(135deg, #154C8A 0%, #1E5FA8 100%)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.background = "linear-gradient(135deg, #1E5FA8 0%, #4A9EFF 100%)";
              }}
            >
              {t("nav.contact")}
            </Link>
          </div>

        </div>
      </motion.nav>
    </motion.div>
  );
}