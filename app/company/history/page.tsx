"use client";

import { motion } from "framer-motion";

const timeline = [
  {
    year: "2024",
    title: "Won $50M Export Tower Award",
    description: "Recognized by KITA (Korea International Trade Association) for achieving $50 million in export volume.",
    url: "https://images.unsplash.com/photo-1567427017947-545c5f8d16ad?w=400&q=80",
  },
  {
    year: "2023",
    title: "Expanded to Vietnam Market",
    description: "Opened Ho Chi Minh City office to serve the growing Southeast Asian market.",
    url: null,
  },
  {
    year: "2022",
    title: "Launched K-Food Export Division",
    description: "Expanded beyond K-Beauty to include Korean food and kimchi products for global distribution.",
    url: "https://images.unsplash.com/photo-1498654896293-37aacf113fd9?w=400&q=80",
  },
  {
    year: "2020",
    title: "Established Global Logistics Network",
    description: "Built partnerships with 4+ logistics providers to ensure worldwide delivery capabilities.",
    url: null,
  },
  {
    year: "2018",
    title: "Founded SalesKR",
    description: "SalesKR was established in Seoul, South Korea as a B2B distributor of Korean cosmetics.",
    url: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=400&q=80",
  },
];

export default function HistoryPage() {
  return (
    <>
      <section className="relative h-[380px] overflow-hidden md:h-[560px]">
        <img src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=1920&q=80" alt="History" className="h-full w-full object-cover object-center" loading="eager" />
        <div className="absolute inset-0 bg-black/45" />
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="px-4 text-center text-3xl font-extrabold tracking-tight text-white md:text-5xl">History</h1>
        </div>
      </section>

      <section className="bg-white py-16 md:py-20">
        <div className="mx-auto max-w-3xl px-5 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="mb-12 text-center"
          >
            <p className="eyebrow">OUR JOURNEY</p>
            <h2 className="mt-3 text-[28px] font-extrabold text-navy md:text-[36px]">Milestones &amp; Achievements</h2>
          </motion.div>

          <div className="relative border-l-2 border-blue-200 pl-8">
            {timeline.map((item, i) => (
              <motion.div
                key={item.year}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                viewport={{ once: true }}
                className="relative mb-12 last:mb-0"
              >
                <div className="absolute -left-[41px] top-1 h-4 w-4 rounded-full border-4 border-blue bg-white" />
                <div className="flex items-start gap-5">
                  <div className="flex-1">
                    <span className="text-[13px] font-bold text-blue">{item.year}</span>
                    <h3 className="mt-1 text-[18px] font-extrabold text-navy">{item.title}</h3>
                    <p className="mt-2 text-[14px] leading-relaxed text-gray-600">{item.description}</p>
                  </div>
                  {item.url && (
                    <div className="hidden shrink-0 overflow-hidden rounded-xl md:block" style={{ width: 100, height: 80 }}>
                      <img src={item.url} alt={item.title} className="h-full w-full object-cover" loading="lazy" />
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
