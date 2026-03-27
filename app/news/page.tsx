"use client";

import { motion } from "framer-motion";

const newsItems = [
  { date: "12-05", title: "K-Beauty Leads Export Growth...", image: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=640&q=80" },
  { date: "07-31", title: "SalesKR Sponsors with Korean Products...", image: "https://images.unsplash.com/photo-1498654896293-37aacf113fd9?w=640&q=80" },
  { date: "12-07", title: "Blood Donation Certificate Donation by SalesKR", image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=640&q=80" },
];

export default function NewsPage() {
  return (
    <>
      <section className="relative h-[380px] overflow-hidden md:h-[560px]">
        <img src="https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=1920&q=80" alt="News" className="h-full w-full object-cover object-center" loading="eager" />
        <div className="absolute inset-0 bg-black/45" />
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-2">
          <h1 className="px-4 text-center text-3xl font-extrabold tracking-tight text-white md:text-5xl">News</h1>
          <p className="text-base text-white/70">Latest updates from SalesKR</p>
        </div>
      </section>

      {/* News Grid */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-8 md:grid-cols-3">
            {newsItems.map((item, i) => (
              <motion.article
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                viewport={{ once: true }}
                className="group cursor-pointer overflow-hidden rounded-2xl border border-brand-border transition-shadow duration-300 hover:shadow-lg"
              >
                <div className="h-48 overflow-hidden">
  <img src={item.image} alt={item.title} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" loading="lazy" />
</div>
                <div className="p-6">
                  <span className="text-xs font-semibold text-brand-muted">
                    {item.date}
                  </span>
                  <h3 className="mt-2 text-base font-bold leading-snug text-navy group-hover:text-blue transition-colors duration-200">
                    {item.title}
                  </h3>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
