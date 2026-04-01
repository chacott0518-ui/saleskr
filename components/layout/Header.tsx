"use client";

import { useState, useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import MobileDrawer from "./MobileDrawer";
import SubNav from "./SubNav";
import { useLanguage } from "@/context/LanguageContext";

type NavChild = { label: string; href: string };
type NavLink = { label: string; href: string; children?: NavChild[] };

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const pathname = usePathname();
  const { lang, setLang, t } = useLanguage();
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const navLinks: NavLink[] = [
    {
      label: t("nav.company"),
      href: "/company/ceo",
      children: [
        { label: t("subnav.ceo"), href: "/company/ceo" },
        { label: t("subnav.company"), href: "/company/about" },
        { label: t("subnav.locations"), href: "/company/locations" },
        { label: t("subnav.history"), href: "/company/history" },
      ],
    },
    {
      label: t("nav.business"),
      href: "/business/commerce",
      children: [
        { label: t("subnav.commerce"), href: "/business/commerce" },
        { label: t("subnav.brands"), href: "/business/brands" },
      ],
    },
    { label: t("nav.news"), href: "/news" },
    { label: t("nav.recruit"), href: "/recruit" },
  ];

  const isHome = pathname === "/";
  const isCompany = pathname.startsWith("/company");
  const isBusiness = pathname.startsWith("/business");
  const hasSubNav = isCompany || isBusiness;

  const companySubNav = navLinks[0].children!;
  const businessSubNav = navLinks[1].children!;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const transparent = isHome && !scrolled;

  const isActive = (href: string) => {
    if (href.startsWith("/company")) return pathname.startsWith("/company");
    if (href.startsWith("/business")) return pathname.startsWith("/business");
    return pathname === href;
  };

  const handleMouseEnter = (label: string) => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setOpenDropdown(label);
  };

  const handleMouseLeave = () => {
    closeTimer.current = setTimeout(() => setOpenDropdown(null), 120);
  };

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          transparent ? "bg-transparent" : ""
        }`}
style={transparent ? {} : { background: "linear-gradient(135deg, #0A1F44 0%, #1E5FA8 100%)", boxShadow: "0 2px 20px rgba(10,31,68,0.3)" }}
      >
        <div className="mx-auto flex h-[56px] max-w-6xl items-center justify-between px-5 md:h-[72px] md:px-6">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <img
              src="/images/logo.png"
              alt="SalesKR"
              style={{
                height: "90px",
                width: "auto",
                objectFit: "contain",
              }}
            />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden items-center gap-8 lg:flex">
            {navLinks.map((link) => (
              <div
                key={link.href}
                className="relative"
                onMouseEnter={() => link.children && handleMouseEnter(link.label)}
                onMouseLeave={link.children ? handleMouseLeave : undefined}
              >
                <Link
                  href={link.href}
                  className={`flex items-center gap-1 text-[15px] font-medium transition-colors duration-200 hover:text-blue ${
                    isActive(link.href)
                      ? "font-semibold text-white"
                      : "text-white/90"
                  }`}
                >
                  {link.label}
                  {link.children && (
                    <svg
                      width="12"
                      height="12"
                      viewBox="0 0 12 12"
                      fill="none"
                      className={`transition-transform duration-200 ${openDropdown === link.label ? "rotate-180" : ""}`}
                    >
                      <path d="M2 4l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  )}
                </Link>

                {/* Dropdown */}
                {link.children && (
                  <AnimatePresence>
                    {openDropdown === link.label && (
                      <motion.div
                        initial={{ opacity: 0, y: -8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -8 }}
                        transition={{ duration: 0.2, ease: "easeOut" }}
                        className="absolute left-0 top-full z-[100] min-w-[200px] overflow-hidden rounded-b-xl pt-2"
                        onMouseEnter={() => handleMouseEnter(link.label)}
                        onMouseLeave={handleMouseLeave}
                      >
                        <div
                          style={{
                            background: "#0A1F44",
                            borderRadius: "0 0 12px 12px",
                            padding: "8px 0",
                            boxShadow: "0 20px 40px rgba(0,0,0,0.15)",
                          }}
                        >
                          {link.children.map((child) => (
                            <Link
                              key={child.href}
                              href={child.href}
                              onClick={() => setOpenDropdown(null)}
                              className="block transition-colors duration-150"
                              style={{ padding: "12px 24px", fontSize: "14px", fontWeight: 500, color: "rgba(255,255,255,0.8)" }}
                              onMouseEnter={(e) => {
                                e.currentTarget.style.color = "white";
                                e.currentTarget.style.background = "rgba(255,255,255,0.08)";
                              }}
                              onMouseLeave={(e) => {
                                e.currentTarget.style.color = "rgba(255,255,255,0.8)";
                                e.currentTarget.style.background = "transparent";
                              }}
                            >
                              {child.label}
                            </Link>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                )}
              </div>
            ))}
          </nav>

          {/* Right: language + CTA */}
          <div className="hidden items-center gap-3 lg:flex">
            <button
              onClick={() => setLang(lang === "en" ? "ko" : "en")}
              className={`flex cursor-pointer items-center gap-1.5 rounded-md border px-3 py-2 text-sm font-semibold transition-colors ${
                "border-white/30 text-white/80 hover:bg-white/10"
              }`}
            >
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10" />
                <path d="M2 12h20M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z" />
              </svg>
              {lang === "en" ? "EN" : "KR"}
            </button>

            <Link
              href="/contact"
              className="relative overflow-hidden rounded-lg px-5 py-2.5 text-[14px] font-bold text-white transition-all duration-300"
              style={{
                background: "linear-gradient(135deg, #1E5FA8 0%, #4A9EFF 100%)",
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.transform = "translateY(-2px)";
                el.style.boxShadow = "0 8px 25px rgba(30,95,168,0.45), 0 4px 12px rgba(74,158,255,0.3)";
                el.style.background = "linear-gradient(135deg, #154C8A 0%, #1E5FA8 100%)";
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.transform = "translateY(0)";
                el.style.boxShadow = "none";
                el.style.background = "linear-gradient(135deg, #1E5FA8 0%, #4A9EFF 100%)";
              }}
            >
              Contact
            </Link>
          </div>

          {/* Mobile right */}
          <div className="flex items-center gap-3 lg:hidden">
            <button
              onClick={() => setLang(lang === "en" ? "ko" : "en")}
              className={`flex items-center gap-1 rounded border px-2.5 py-1.5 text-xs font-semibold transition-colors ${
                "border-white/30 text-white/80"
              }`}
            >
              <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10" />
                <path d="M2 12h20M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z" />
              </svg>
              {lang === "en" ? "EN" : "KR"}
            </button>

            <button
              onClick={() => setDrawerOpen(true)}
              aria-label="Open menu"
              className="flex h-11 w-11 flex-col items-center justify-center gap-[5px]"
            >
              {[0, 1, 2].map((i) => (
                <span
                  key={i}
                  className="block h-[2px] w-5 rounded-full transition-colors"
                  style={{ backgroundColor: "white" }}
                />
              ))}
            </button>
          </div>
        </div>

      </motion.header>

      <AnimatePresence>
        {drawerOpen && <MobileDrawer links={navLinks} onClose={() => setDrawerOpen(false)} />}
      </AnimatePresence>
    </>
  );
}
