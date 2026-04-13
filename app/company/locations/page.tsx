"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function LocationsPage() {
  return (
    <>
      {/* ─── 히어로 ─── */}
      <section className="relative h-[380px] overflow-hidden md:h-[480px]">
        <img
          src="https://images.unsplash.com/photo-1534430480872-3498386e7856?w=1920&q=80"
          alt="Seoul, South Korea"
          className="h-full w-full object-cover object-center"
          loading="eager"
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center">
            <p
              className="text-[11px] font-bold uppercase tracking-[.2em]"
              style={{ color: "rgba(255,255,255,0.7)" }}
            >
              Our Office
            </p>
            <h1 className="mt-3 px-4 text-3xl font-extrabold tracking-tight text-white md:text-5xl">
              Locations
            </h1>
          </div>
        </div>
      </section>

      {/* ─── 본사 정보 + 지도 ─── */}
      <section className="bg-white py-16 md:py-20">
        <div className="mx-auto max-w-6xl px-5 md:px-6">

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="mb-10 md:mb-14"
          >
            <p className="eyebrow">Headquarters</p>
            <h2 className="mt-3 text-[28px] font-extrabold text-navy md:text-[36px]">
              Seoul, South Korea
            </h2>
          </motion.div>

          {/* 데스크톱: 좌우 2열 / 모바일: 상하 */}
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-12">

            {/* 왼쪽 — 주소 카드 */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              {/* 서울 사진 */}
              <div className="mb-6 h-56 overflow-hidden rounded-2xl md:h-64">
                <img
                  src="https://images.unsplash.com/photo-1534430480872-3498386e7856?w=800&q=80"
                  alt="Seoul Gangnam"
                  className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
                  loading="lazy"
                />
              </div>

              {/* 정보 */}
              <div
                className="rounded-2xl p-6 md:p-8"
                style={{ background: "#F7F6F2", border: "0.5px solid #E0DED8" }}
              >
                <div className="mb-5 flex items-center gap-2">
                  <span
                    className="rounded-full px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-white"
                    style={{ background: "#1E5FA8" }}
                  >
                    Headquarters
                  </span>
                </div>

                <div className="space-y-4 text-[14px] leading-relaxed text-gray-700">
                  <div>
                    <p className="mb-1 text-[11px] font-semibold uppercase tracking-wider text-gray-400">
                      Address
                    </p>
                    <p className="font-medium text-navy">
                      B13, 602 Yeongdong-daero,<br />
                      Gangnam-gu, Seoul, 06083,<br />
                      Republic of Korea
                    </p>
                  </div>
                  <div>
                    <p className="mb-1 text-[11px] font-semibold uppercase tracking-wider text-gray-400">
                      CEO
                    </p>
                    <p className="font-medium text-navy">Jung, Yong Chul</p>
                  </div>
                  <div>
                    <p className="mb-1 text-[11px] font-semibold uppercase tracking-wider text-gray-400">
                      Contact
                    </p>
                    <p>TEL: +82-2-336-1334</p>
                    <p>FAX: +82-0504-065-2684</p>
                    <p>kimchee21@hanmail.net</p>
                  </div>
                  <div>
                    <p className="mb-1 text-[11px] font-semibold uppercase tracking-wider text-gray-400">
                      Business Hours
                    </p>
                    <p>Mon – Fri: 09:00 – 18:00 KST</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* 오른쪽 — 지도 */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="flex flex-col gap-4"
            >
              {/* Google Maps embed */}
              <div className="overflow-hidden rounded-2xl" style={{ height: 380 }}>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3165.4!2d127.0495!3d37.5140!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x357ca15c0d123d!2s602+Yeongdong-daero%2C+Gangnam-gu%2C+Seoul!5e0!3m2!1sen!2skr!4v1"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="SalesKR Headquarters"
                />
              </div>

              {/* 교통 정보 */}
              <div
                className="rounded-2xl p-5"
                style={{ background: "#EEF4FF", border: "0.5px solid #B5D4F4" }}
              >
                <p className="mb-3 text-[12px] font-bold uppercase tracking-wider text-blue">
                  How to Get Here
                </p>
                <div className="space-y-2 text-[13px] text-gray-600">
                  <p>🚇 Subway: Line 9 — Eonju Station (Exit 6)</p>
                  <p>🚌 Bus: Stop near Yeongdong-daero · Samsung-dong</p>
                  <p>🚗 Parking available in building B13</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ─── CTA 배너 ─── */}
      <section
        className="py-14 md:py-16"
        style={{
          background: "linear-gradient(135deg, #0A1F44 0%, #1E5FA8 100%)",
        }}
      >
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="mx-auto max-w-4xl px-5 text-center md:px-6"
        >
          <h3 className="text-[22px] font-extrabold text-white md:text-[28px]">
            Connect with Our Global Team
          </h3>
          <p
            className="mx-auto mt-3 max-w-xl text-[14px] leading-relaxed"
            style={{ color: "rgba(255,255,255,0.7)" }}
          >
            Contact us for wholesale inquiries and global partnership opportunities. We are based in Seoul and serve buyers worldwide.
          </p>
          <Link
            href="/contact"
            className="mt-8 inline-flex items-center rounded-lg px-10 py-3.5 text-[15px] font-bold transition-all duration-200 hover:-translate-y-0.5"
            style={{ background: "white", color: "#0A1F44" }}
          >
            Contact Us →
          </Link>
        </motion.div>
      </section>
    </>
  );
}