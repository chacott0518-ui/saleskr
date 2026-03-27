"use client";

import { motion } from "framer-motion";

const locations = [
  {
    tag: "HEADQUARTERS",
    name: "Seoul, South Korea",
    city: "Goyang-si, Gyeonggi-do",
    address: "63, Jungsan-ro, Ilsandong-gu\nGoyang-si, Gyeonggi-do, 10416",
    tel: "+82-31-977-8778",
    fax: "+82-31-976-8778",
    email: "contact@saleskr.com",
    url: "https://images.unsplash.com/photo-1534430480872-3498386e7856?w=800&q=80",
  },
  {
    tag: "BRANCH",
    name: "Poland",
    city: "Warsaw",
    address: "Warsaw, Poland",
    tel: "+48-22-000-0000",
    fax: "",
    email: "poland@saleskr.com",
    url: "https://images.unsplash.com/photo-1519197924294-4ba991a11128?w=800&q=80",
  },
  {
    tag: "BRANCH",
    name: "Russia",
    city: "Moscow",
    address: "Moscow, Russia",
    tel: "+7-495-000-0000",
    fax: "",
    email: "russia@saleskr.com",
    url: "https://images.unsplash.com/photo-1513326738677-b964603b136d?w=800&q=80",
  },
  {
    tag: "BRANCH",
    name: "Vietnam",
    city: "Ho Chi Minh City",
    address: "Ho Chi Minh City, Vietnam",
    tel: "+84-28-000-0000",
    fax: "",
    email: "vietnam@saleskr.com",
    url: "https://images.unsplash.com/photo-1583417319070-4a69db38a482?w=800&q=80",
  },
];

export default function LocationsPage() {
  return (
    <>
      <section className="relative h-[380px] overflow-hidden md:h-[560px]">
        <img src="https://images.unsplash.com/photo-1534430480872-3498386e7856?w=1920&q=80" alt="Locations" className="h-full w-full object-cover object-center" loading="eager" />
        <div className="absolute inset-0 bg-black/45" />
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="px-4 text-center text-3xl font-extrabold tracking-tight text-white md:text-5xl">Locations</h1>
        </div>
      </section>

      <section className="bg-white py-16 md:py-20">
        <div className="mx-auto max-w-6xl px-5 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="mb-10 md:mb-14"
          >
            <p className="eyebrow">OUR OFFICES</p>
            <h2 className="mt-3 text-[28px] font-extrabold text-navy md:text-[36px]">Global Presence</h2>
          </motion.div>

          <div className="grid gap-6 md:grid-cols-2">
            {locations.map((loc, i) => (
              <motion.div
                key={loc.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.08 }}
                viewport={{ once: true }}
                className="overflow-hidden rounded-2xl border border-brand-border"
              >
                <div className="h-48 overflow-hidden">
                  <img src={loc.url} alt={loc.name} className="h-full w-full object-cover transition-transform duration-700 hover:scale-105" loading="lazy" />
                </div>
                <div className="p-5 md:p-6">
                  <span className="eyebrow">{loc.tag}</span>
                  <h3 className="mt-2 text-[18px] font-extrabold text-navy">{loc.name}</h3>
                  <p className="mt-1 text-[13px] text-brand-muted">{loc.city}</p>
                  <p className="mt-3 whitespace-pre-line text-[13px] leading-relaxed text-gray-600">{loc.address}</p>
                  <div className="mt-3 text-[13px] text-brand-muted">
                    <p>Tel: {loc.tel}</p>
                    {loc.fax && <p>Fax: {loc.fax}</p>}
                    <p>{loc.email}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
