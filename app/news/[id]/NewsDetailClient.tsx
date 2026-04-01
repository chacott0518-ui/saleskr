"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import type { NewsArticle } from "../data";

interface Props {
  article: NewsArticle;
  nextArticle: NewsArticle | undefined;
}

const categoryColor: Record<string, string> = {
  GLOBAL:      "#1E5FA8",
  MARKET:      "#0F6E56",
  PARTNERSHIP: "#BA7517",
  CSR:         "#993556",
};

export default function NewsDetailClient({ article, nextArticle }: Props) {
  const catColor = categoryColor[article.category] ?? "#1E5FA8";

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
            alt={article.title}
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
              <h1 className="text-3xl font-black leading-[1.15] tracking-tight text-white md:text-[56px]">
                {article.title}
              </h1>
              <p className="mt-4 text-base font-medium text-white/70 md:text-xl">
                {article.subtitle}
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
          <div className="ml-auto">
            <span className="cursor-pointer text-[11px] font-bold uppercase tracking-[.08em] text-[#1E5FA8] hover:underline">
              Share ↗
            </span>
          </div>
        </div>
      </div>

      {/* ARTICLE BODY */}
      <article className="mx-auto max-w-[720px] px-6 py-12 md:py-20">

        {/* Lead */}
        <p className="mb-10 text-lg font-medium leading-[1.85] text-[#0A1F44] md:text-xl">
          {article.lead}
        </p>

        {/* Stats strip */}
        <div className="mb-12 grid grid-cols-3 gap-3 rounded-2xl bg-[#EEF4FF] p-6 md:gap-5 md:p-8">
          {article.stats.map((s) => (
            <div key={s.label}>
              <div className="text-[26px] font-extrabold leading-none text-[#0A1F44] md:text-[34px]">
                {s.value}
              </div>
              <div className="mt-1.5 text-[10px] font-bold uppercase tracking-wider text-[#6B6B60]">
                {s.label}
              </div>
            </div>
          ))}
        </div>

        {/* Section 1 */}
        {article.sections[0] && (
          <>
            <h2 className="mb-5 mt-2 text-[22px] font-extrabold leading-tight text-[#0A1F44] md:text-[28px]">
              {article.sections[0].heading}
            </h2>
            {article.sections[0].paragraphs.map((p, i) => (
              <p key={i} className="mb-6 text-[16px] leading-[1.95] text-[#2A2A28]">
                {p}
              </p>
            ))}
          </>
        )}

        {/* Image 2 */}
        <figure className="my-12">
          <div className="overflow-hidden rounded-2xl">
            <img
              src={article.image2}
              alt={article.image2Caption}
              className="h-[240px] w-full object-cover transition-transform duration-500 hover:scale-105 md:h-[400px]"
            />
          </div>
          <figcaption className="mt-3 text-center text-[12px] italic text-[#6B6B60]">
            {article.image2Caption}
          </figcaption>
        </figure>

        {/* Section 2 */}
        {article.sections[1] && (
          <>
            <h2 className="mb-5 text-[22px] font-extrabold leading-tight text-[#0A1F44] md:text-[28px]">
              {article.sections[1].heading}
            </h2>
            {article.sections[1].paragraphs.map((p, i) => (
              <p key={i} className="mb-6 text-[16px] leading-[1.95] text-[#2A2A28]">
                {p}
              </p>
            ))}
          </>
        )}

        {/* Pullquote */}
        <blockquote className="relative my-12 overflow-hidden rounded-2xl bg-[#0A1F44] px-8 py-8 md:px-10 md:py-10">
          <div className="absolute left-0 top-0 h-full w-1 bg-[#4A9EFF]" />
          <p className="text-[18px] font-bold italic leading-[1.6] text-white md:text-[22px]">
            {article.pullquote}
          </p>
          <footer className="mt-5 text-[11px] font-bold uppercase tracking-[.08em] text-white/50">
            {article.pullquoteAuthor}
          </footer>
        </blockquote>

        {/* Section 3 */}
        {article.sections[2] && (
          <>
            <h2 className="mb-5 text-[22px] font-extrabold leading-tight text-[#0A1F44] md:text-[28px]">
              {article.sections[2].heading}
            </h2>
            {article.sections[2].paragraphs.map((p, i) => (
              <p key={i} className="mb-6 text-[16px] leading-[1.95] text-[#2A2A28]">
                {p}
              </p>
            ))}
          </>
        )}

        {/* Image 3 */}
        <figure className="my-12">
          <div className="overflow-hidden rounded-2xl">
            <img
              src={article.image3}
              alt={article.image3Caption}
              className="h-[240px] w-full object-cover transition-transform duration-500 hover:scale-105 md:h-[380px]"
            />
          </div>
          <figcaption className="mt-3 text-center text-[12px] italic text-[#6B6B60]">
            {article.image3Caption}
          </figcaption>
        </figure>

        {/* Conclusion */}
        <h2 className="mb-5 text-[22px] font-extrabold leading-tight text-[#0A1F44] md:text-[28px]">
          {article.conclusionHeading}
        </h2>
        {article.conclusionParagraphs.map((p, i) => (
          <p key={i} className="mb-6 text-[16px] leading-[1.95] text-[#2A2A28]">
            {p}
          </p>
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
            <span>Back to Newsroom</span>
          </Link>

          {nextArticle && (
            <Link
              href={`/news/${nextArticle.id}`}
              className="group flex items-center gap-3 rounded-xl border border-[#E8E6DF] px-4 py-3 transition-all duration-200 hover:border-[#1E5FA8]"
            >
              <div>
                <div className="text-right text-[10px] font-bold uppercase tracking-[.08em] text-[#6B6B60]">
                  Next Article
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