"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useState } from "react";
import type { NewsArticle } from "../data";
import { useLanguage } from "@/context/LanguageContext";

interface Props {
  article: NewsArticle;
  nextArticle: NewsArticle | undefined;
}

const categoryColor: Record<string, string> = {
  GLOBAL:      "#1E5FA8",
  MARKET:      "#0F6E56",
  PARTNERSHIP: "#BA7517",
  INDUSTRY:    "#993556",
  "K-FOOD":    "#0F6E56",
  CSR:         "#993556",
  HEALTH: "#0D7377",
};

export default function NewsDetailClient({ article, nextArticle }: Props) {
  const { lang, setLang } = useLanguage();
  const catColor = categoryColor[article.category] ?? "#1E5FA8";
  const isKo = lang === "ko";
  const hasKo = !!article.titleKo;

  const title     = isKo && article.titleKo     ? article.titleKo     : article.title;
  const subtitle  = isKo && article.subtitleKo  ? article.subtitleKo  : article.subtitle;
  const lead      = isKo && article.leadKo      ? article.leadKo      : article.lead;
  const sections  = isKo && article.sectionsKo  ? article.sectionsKo  : article.sections;
  const conHeading = isKo && article.conclusionHeadingKo ? article.conclusionHeadingKo : article.conclusionHeading;
  const conParas   = isKo && article.conclusionParagraphsKo ? article.conclusionParagraphsKo : article.conclusionParagraphs;
  const img2Cap   = isKo && article.image2CaptionKo ? article.image2CaptionKo : article.image2Caption;
  const img3Cap   = isKo && article.image3CaptionKo ? article.image3CaptionKo : article.image3Caption;
  const pullquote = isKo && article.pullquoteKo ? article.pullquoteKo : article.pullquote;

  return (
    <main className="min-h-screen bg-white">

      {/* HERO */}
      <section className="relative h-[50vh] w-full overflow-hidden md:h-[68vh]">
        <motion.div
          className="h-full w-full"
          initial={{ scale: 1.08 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.6, ease: "easeOut" }}
        >
          <img
            src={article.mainImage}
            className="h-full w-full object-cover"
            alt={title}
          />
        </motion.div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent" />
        <div className="absolute inset-0 flex items-end">
          <div className="w-full max-w-5xl px-6 pb-10 md:mx-auto md:pb-20">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
            >
              <span
                className="mb-4 inline-block rounded px-3 py-1 text-[10px] font-black uppercase tracking-[.15em] text-white"
                style={{ background: catColor }}
              >
                {article.category}
              </span>
              <h1 className="!text-xl font-black leading-[1.25] tracking-tight text-white md:!text-[52px]">
  {title}
</h1>
<p className="mt-2 !text-xs leading-[1.4] font-medium md:mt-3 md:!text-xl md:leading-normal" style={{ color: "#ffffff" }}>
  {subtitle}
</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* META BAR */}
      <div className="border-b border-gray-100 bg-[#FAFAF8]">
        <div className="mx-auto flex max-w-5xl flex-wrap items-center gap-x-6 gap-y-2 px-6 py-4 md:py-5">
          <time
            dateTime={article.date}
            className="text-[11px] font-bold uppercase tracking-[.08em] text-[#6B6B60]"
          >
            {article.dateDisplay}
          </time>
          <span className="hidden h-1 w-1 rounded-full bg-[#D0CEC8] md:block" />
          <span className="text-[11px] font-bold uppercase tracking-[.08em] text-[#6B6B60]">
            Strategy Team
          </span>
          <span className="hidden h-1 w-1 rounded-full bg-[#D0CEC8] md:block" />
          <span className="text-[11px] font-bold uppercase tracking-[.08em] text-[#6B6B60]">
            8 min read
          </span>

          {/* 한/영 토글 — 한국어 필드가 있는 기사에만 표시 */}
          {hasKo && (
            <div className="ml-auto flex items-center overflow-hidden rounded-full border border-[#E0DED8]">
              <button
                onClick={() => setLang("en")}
                className="px-4 py-1.5 text-[11px] font-bold uppercase tracking-[.08em] transition-all"
                style={{
                  background: !isKo ? "#0A1F44" : "transparent",
                  color: !isKo ? "white" : "#6B6B60",
                }}
              >
                EN
              </button>
              <button
                onClick={() => setLang("ko")}
                className="px-4 py-1.5 text-[11px] font-bold uppercase tracking-[.08em] transition-all"
                style={{
                  background: isKo ? "#0A1F44" : "transparent",
                  color: isKo ? "white" : "#6B6B60",
                }}
              >
                KO
              </button>
            </div>
          )}
        </div>
      </div>

      {/* ARTICLE BODY */}
      <article className="mx-auto max-w-[720px] px-6 py-12 md:py-20">

        {/* Lead */}
        <p className="mb-10 text-lg font-medium leading-[1.85] text-[#0A1F44] md:text-xl">
          {lead}
        </p>

        {/* Stats strip */}
        <div className="mb-12 grid grid-cols-3 gap-3 rounded-2xl bg-[#EEF4FF] p-6 md:gap-5 md:p-8">
          {article.stats.map((s) => (
            <div key={s.label}>
              <div className="text-[22px] font-extrabold leading-none text-[#0A1F44] md:text-[34px]">
                {s.value}
              </div>
              <div className="mt-1.5 text-[10px] font-bold uppercase tracking-wider text-[#6B6B60]">
                {isKo && s.labelKo ? s.labelKo : s.label}
              </div>
            </div>
          ))}
        </div>

        {/* Section 1 */}
        {sections[0] && (
          <>
            <h2 className="mb-5 mt-2 text-[22px] font-extrabold leading-tight text-[#0A1F44] md:text-[28px]">
              {sections[0].heading}
            </h2>
            {sections[0].paragraphs.map((p, i) => (
              <p key={i} className="mb-6 text-[16px] leading-[1.95] text-[#2A2A28]">{p}</p>
            ))}
          </>
        )}

        {/* Image 2 */}
        {article.products ? (
          <div className="my-12 grid grid-cols-1 gap-6 sm:grid-cols-2">
            {article.products.map((p) => (
              <div key={p.name} className="overflow-hidden rounded-2xl border border-[#F0EEE8] bg-white shadow-sm">
                <div className="h-[220px] overflow-hidden bg-[#FAFAF8]">
                  <img src={p.image} alt={p.name} className="h-full w-full object-cover" />
                </div>
                <div className="p-6">
                  <h3 className="text-[16px] font-extrabold leading-tight text-[#0A1F44]">{p.name}</h3>
                  <p className="mt-2 text-[13px] leading-[1.7] text-[#4A4A45]">{p.description}</p>
                  <ul className="mt-4 space-y-1.5">
                    {p.features.map((f) => (
                      <li key={f} className="flex items-start gap-2 text-[12px] font-medium text-[#2A2A28]">
                        <span className="mt-[3px] h-[5px] w-[5px] flex-shrink-0 rounded-full bg-[#0D7377]" />
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <figure className="my-12">
            <div className="overflow-hidden rounded-2xl">
              <img src={article.image2} alt={img2Cap} className="h-[240px] w-full object-cover transition-transform duration-500 hover:scale-105 md:h-[400px]" />
            </div>
            <figcaption className="mt-3 text-center text-[12px] italic text-[#6B6B60]">{img2Cap}</figcaption>
          </figure>
        )}

        {/* Section 2 */}
        {sections[1] && (
          <>
            <h2 className="mb-5 text-[22px] font-extrabold leading-tight text-[#0A1F44] md:text-[28px]">
              {sections[1].heading}
            </h2>
            {sections[1].paragraphs.map((p, i) => (
              <p key={i} className="mb-6 text-[16px] leading-[1.95] text-[#2A2A28]">{p}</p>
            ))}
          </>
        )}

        {/* Pullquote */}
        <blockquote className="relative my-12 overflow-hidden rounded-2xl bg-[#0A1F44] px-8 py-8 md:px-10 md:py-10">
          <div className="absolute left-0 top-0 h-full w-1 bg-[#4A9EFF]" />
          <p className="text-[18px] font-bold italic leading-[1.6] text-white md:text-[22px]">
            {pullquote}
          </p>
          <footer className="mt-5 text-[11px] font-bold uppercase tracking-[.08em] text-white/50">
            {article.pullquoteAuthor}
          </footer>
        </blockquote>

        {/* Section 3 */}
        {sections[2] && (
          <>
            <h2 className="mb-5 text-[22px] font-extrabold leading-tight text-[#0A1F44] md:text-[28px]">
              {sections[2].heading}
            </h2>
            {sections[2].paragraphs.map((p, i) => (
              <p key={i} className="mb-6 text-[16px] leading-[1.95] text-[#2A2A28]">{p}</p>
            ))}
          </>
        )}

        {/* Section 4 */}
        {sections[3] && (
          <>
            <h2 className="mb-5 text-[22px] font-extrabold leading-tight text-[#0A1F44] md:text-[28px]">
              {sections[3].heading}
            </h2>
            {sections[3].paragraphs.map((p, i) => (
              <p key={i} className="mb-6 text-[16px] leading-[1.95] text-[#2A2A28]">{p}</p>
            ))}
          </>
        )}

        {/* Image 3 */}
        {article.image3 && (
          <figure className="my-12">
            <div className="overflow-hidden rounded-2xl">
              <img
                src={article.image3}
                alt={img3Cap}
                className="h-[240px] w-full object-cover transition-transform duration-500 hover:scale-105 md:h-[380px]"
              />
            </div>
            <figcaption className="mt-3 text-center text-[12px] italic text-[#6B6B60]">
              {img3Cap}
            </figcaption>
          </figure>
        )}

        {/* Section 5 */}
        {sections[4] && (
          <>
            <h2 className="mb-5 text-[22px] font-extrabold leading-tight text-[#0A1F44] md:text-[28px]">
              {sections[4].heading}
            </h2>
            {sections[4].paragraphs.map((p, i) => (
              <p key={i} className="mb-6 text-[16px] leading-[1.95] text-[#2A2A28]">{p}</p>
            ))}
          </>
        )}

        {/* Conclusion */}
        <h2 className="mb-5 text-[22px] font-extrabold leading-tight text-[#0A1F44] md:text-[28px]">
          {conHeading}
        </h2>
        {conParas.map((p, i) => (
          <p key={i} className="mb-6 text-[16px] leading-[1.95] text-[#2A2A28]">{p}</p>
        ))}

        {/* Divider */}
        <div className="my-14 h-px bg-[#F0EEE8]" />

        {/* Footer nav */}
        <div className="flex items-center justify-between">
          <Link
            href="/news"
            className="flex items-center gap-2 text-[12px] font-black uppercase tracking-[.08em] text-[#1E5FA8] transition-all hover:gap-3"
          >
            <span>←</span>
            <span>{isKo ? "뉴스룸으로" : "Back to Newsroom"}</span>
          </Link>

          {nextArticle && (
            <Link
              href={`/news/${nextArticle.id}`}
              className="group flex items-center gap-3 rounded-xl border border-[#E8E6DF] px-4 py-3 transition-all duration-200 hover:border-[#1E5FA8]"
            >
              <div>
                <div className="text-right text-[10px] font-bold uppercase tracking-[.08em] text-[#6B6B60]">
                  {isKo ? "다음 기사" : "Next Article"}
                </div>
                <div className="mt-1 max-w-[160px] text-right text-[12px] font-bold leading-tight text-[#0A1F44]">
                  {nextArticle.title}
                </div>
              </div>
              <div className="h-12 w-12 flex-shrink-0 overflow-hidden rounded-lg">
                <img
                  src={nextArticle.listImage}
                  alt={nextArticle.title}
                  className="h-full w-full object-cover"
                />
              </div>
              <span className="text-base text-[#1E5FA8] transition-transform duration-200 group-hover:translate-x-1">
                →
              </span>
            </Link>
          )}
        </div>

      </article>
    </main>
  );
}