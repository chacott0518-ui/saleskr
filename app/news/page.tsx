"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { SORTED_NEWS } from "./data";

export default function NewsPage() {
  return (
    <div className="min-h-screen bg-[#F8F9FA] pb-20">

      {/* HERO */}
      <section className="relative h-[400px] overflow-hidden md:h-[550px]">
        <img
          src="https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=1920&q=80"
          className="h-full w-full object-cover"
          alt="SalesKR Newsroom"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 to-[#F8F9FA]" />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-5xl font-black tracking-tighter text-white md:text-8xl"
          >
            NEWS ROOM
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-4 text-sm uppercase tracking-widest text-white/60 md:text-lg"
          >
            Global Business Insights
          </motion.p>
        </div>
      </section>

      {/* NEWS LIST */}
      <section className="relative z-10 mx-auto -mt-20 max-w-7xl px-6">

        {/* Mobile: horizontal scroll */}
        <div className="flex snap-x snap-mandatory gap-5 overflow-x-auto pb-10 lg:hidden"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}>
          {SORTED_NEWS.map((item) => (
            <Link
              key={item.id}
              href={`/news/${item.id}`}
              className="min-w-[85%] snap-center overflow-hidden rounded-[40px] border border-gray-100 bg-white shadow-xl"
            >
              <div className="h-56 overflow-hidden">
                <img
                  src={item.listImage}
                  className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
                  alt={item.title}
                />
              </div>
              <div className="p-8">
                <span className="text-[10px] font-black uppercase tracking-widest text-blue-600">
                  {item.category}
                </span>
                <h3 className="mt-2 line-clamp-2 h-14 text-xl font-bold leading-tight text-[#0A1F44]">
                  {item.title}
                </h3>
                <div className="mt-6 flex items-center justify-between">
                  <span className="text-xs font-bold text-gray-400">{item.dateDisplay}</span>
                  <span className="border-b-2 border-blue-500 pb-1 text-xs font-black text-[#0A1F44]">
                    VIEW DETAILS
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Desktop: 2-col grid */}
        <div className="hidden grid-cols-2 gap-12 lg:grid">
          {SORTED_NEWS.map((item, i) => (
            <motion.article
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              whileHover={{ y: -10 }}
              className="group overflow-hidden rounded-[48px] border border-gray-50 bg-white shadow-sm transition-all duration-500 hover:shadow-2xl"
            >
              <Link href={`/news/${item.id}`} className="flex w-full">
                <div className="w-2/5 overflow-hidden">
                  <img
                    src={item.listImage}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                    alt={item.title}
                  />
                </div>
                <div className="flex w-3/5 flex-col justify-center p-10">
                  <span className="text-[11px] font-black uppercase tracking-widest text-blue-600">
                    {item.category}
                  </span>
                  <h3 className="mt-3 text-2xl font-bold leading-tight text-[#0A1F44] transition-colors group-hover:text-blue-700">
                    {item.title}
                  </h3>
                  <p className="mt-4 line-clamp-2 text-sm leading-relaxed text-gray-500">
                    {item.excerpt}
                  </p>
                  <div className="mt-8 flex items-center gap-2 text-[11px] font-black text-[#0A1F44]">
                    VIEW DETAILS
                    <span className="text-lg text-blue-500 transition-transform duration-200 group-hover:translate-x-1">
                      →
                    </span>
                  </div>
                </div>
              </Link>
            </motion.article>
          ))}
        </div>
      </section>
    </div>
  );
}