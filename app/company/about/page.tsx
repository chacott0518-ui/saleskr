"use client";

import { motion } from "framer-motion";
import CountUp from "react-countup";

const parts = [
  {
    number: "01",
    title: "Deep Commitment",
    description: "We are deeply committed to understanding and meeting the unique needs of each market we serve, ensuring that every product we deliver meets the highest standards of quality.",
    url: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&q=80",
    imgLeft: false,
  },
  {
    number: "02",
    title: "Reliable Supplier",
    description: "As a reliable supplier, we maintain stable supply chains with Korean manufacturers, ensuring consistent product availability and competitive pricing for our partners.",
    url: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&q=80",
    imgLeft: true,
  },
  {
    number: "03",
    title: "Leading the Movement",
    description: "We are leading the K-Beauty and K-Food movement globally, bringing innovative Korean products to consumers around the world through strategic B2B partnerships.",
    url: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=800&q=80",
    imgLeft: false,
  },
];

const stats = [
  { label: "Date of Establishment", value: "2018", isYear: true },
  { label: "Number of Employees", value: "50", suffix: "+" },
  { label: "Partner Brands", value: "300", suffix: "+" },
  { label: "Total Sales", value: "50", suffix: "M+" },
];

export default function CompanyAboutPage() {
  return (
    <>
      <section className="relative h-[380px] overflow-hidden md:h-[560px]">
        <img src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1920&q=80" alt="Company" className="h-full w-full object-cover object-center" loading="eager" />
        <div className="absolute inset-0 bg-black/45" />
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="px-4 text-center text-3xl font-extrabold tracking-tight text-white md:text-5xl">Company</h1>
        </div>
      </section>

      {/* Intro */}
      <section className="bg-white py-16 md:py-20">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="mx-auto max-w-4xl px-5 text-center md:px-6"
        >
          <p className="eyebrow">ABOUT SALESKR</p>
          <h2 className="mt-4 text-[28px] font-extrabold leading-tight text-navy md:text-[42px]">
            Global K-Beauty &amp; K-Food
          </h2>
          <p className="mt-4 text-[15px] text-brand-muted">
            Your premium B2B partner leading the global market.
          </p>
        </motion.div>
      </section>

      {/* 3 Parts */}
      <section className="bg-brand-bg py-16 md:py-20">
        <div className="mx-auto max-w-6xl space-y-16 px-5 md:px-6">
          {parts.map((part, i) => (
            <motion.div
              key={part.number}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className={`flex flex-col gap-8 md:flex-row md:items-center md:gap-12 ${part.imgLeft ? "md:flex-row-reverse" : ""}`}
            >
              <div className="flex-1">
                <span className="text-sm font-bold text-blue">Part {part.number}</span>
                <h3 className="mt-3 text-[22px] font-extrabold text-navy md:text-[28px]">{part.title}</h3>
                <p className="mt-4 text-[15px] leading-[1.8] text-gray-600">{part.description}</p>
              </div>
              <div className="flex-1 overflow-hidden rounded-2xl" style={{ height: 360 }}>
                <img src={part.url} alt={part.title} className="h-full w-full object-cover transition-transform duration-700 hover:scale-105" loading="lazy" />
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Stats Bar */}
      <section className="relative py-16 overflow-hidden">
        <img src="https://images.unsplash.com/photo-1486325212027-8081e485255e?w=1920&q=80" alt="" className="absolute inset-0 h-full w-full object-cover" loading="lazy" />
        <div className="absolute inset-0 bg-navy/85" />
        <div className="relative z-10 mx-auto grid max-w-5xl grid-cols-2 gap-8 px-5 text-center md:grid-cols-4 md:px-6">
          {stats.map((stat) => (
            <div key={stat.label}>
              <p className="text-3xl font-extrabold text-white md:text-4xl">
                {stat.isYear ? "2018" : <CountUp end={Number(stat.value)} suffix={stat.suffix} duration={2} enableScrollSpy scrollSpyOnce />}
              </p>
              <p className="mt-2 text-[13px] text-white/60">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
