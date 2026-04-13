"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";

const timelineEn = [
  {
    year: "2025",
    items: [
      "More than 70 Korean cosmetics brands available for export",
      "Major export markets: China, Hong Kong, Australia, New Zealand, Europe, United States",
    ],
  },
  {
    year: "2024",
    items: [
      "Export of approximately 20 Korean cosmetics brands",
      "OMG Kimchi brand successfully launched",
    ],
  },
  {
    year: "2022",
    items: [
      "Launched K-Food Export Division",
      "Expanded product lineup to include Korean food and Kimchi products",
    ],
  },
  {
    year: "2021",
    items: [
      "Established global logistics network",
      "Partnerships with international shipping and customs agents",
    ],
  },
  {
    year: "2019",
    items: [
      "SalesKR founded in Seoul, South Korea",
      "Started as a B2B distributor of Korean cosmetics",
      "Business Registration No: 876-87-01523",
    ],
  },
];

const timelineKo = [
  {
    year: "2025",
    items: [
      "70여개 이상의 한국 화장품 수출 가능",
      "주요 수출국: 중국, 홍콩, 호주, 뉴질랜드, 유럽, 미국",
    ],
  },
  {
    year: "2024",
    items: [
      "한국 화장품 브랜드 약 20개 수출",
      "OMG 김치 브랜드 론칭",
    ],
  },
  {
    year: "2022",
    items: [
      "K-Food 수출 부문 설립",
      "한국 식품 및 김치 제품으로 라인업 확대",
    ],
  },
  {
    year: "2021",
    items: [
      "글로벌 물류 네트워크 구축",
      "국제 운송 및 통관 에이전트와 파트너십 체결",
    ],
  },
  {
    year: "2019",
    items: [
      "서울에서 세일즈케이알 창립",
      "한국 화장품 B2B 유통 전문 기업으로 시작",
      "사업자등록번호: 876-87-01523",
    ],
  },
];

export default function HistoryPage() {
  const { lang } = useLanguage();
  const timeline = lang === "ko" ? timelineKo : timelineEn;

  return (
    <>
      <section className="relative h-[380px] overflow-hidden md:h-[480px]">
        <img
          src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=1920&q=80"
          alt="History"
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
              {lang === "ko" ? "우리의 여정" : "Our Journey"}
            </p>
            <h1 className="mt-3 px-4 text-3xl font-extrabold tracking-tight text-white md:text-5xl">
              {lang === "ko" ? "히스토리" : "History"}
            </h1>
          </div>
        </div>
      </section>

      <section className="bg-white py-16 md:py-24">
        <div className="mx-auto max-w-3xl px-5 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="mb-14 text-center"
          >
            <p className="eyebrow">
              {lang === "ko" ? "회사 연혁" : "Company Milestones"}
            </p>
            <h2 className="mt-3 text-[28px] font-extrabold text-navy md:text-[36px]">
              {lang === "ko" ? "주요 성과" : "Milestones & Achievements"}
            </h2>
          </motion.div>

          <div className="relative">
            <div
              className="absolute left-[19px] top-0 h-full w-[2px] md:left-[23px]"
              style={{
                background: "linear-gradient(to bottom, #1E5FA8, #C8D8F0)",
              }}
            />
            <div className="space-y-10">
              {timeline.map((entry, i) => (
                <motion.div
                  key={entry.year}
                  initial={{ opacity: 0, x: -24 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                  viewport={{ once: true }}
                  className="relative flex gap-6 md:gap-8"
                >
                  <div
                    className="relative z-10 mt-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-white md:h-12 md:w-12"
                    style={{
                      background:
                        i === 0
                          ? "linear-gradient(135deg, #1E5FA8, #4A9EFF)"
                          : "#0A1F44",
                      boxShadow: "0 0 0 4px white, 0 0 0 5px #C8D8F0",
                    }}
                  >
                    <span className="text-[11px] font-black md:text-[12px]">
                      {entry.year.slice(2)}
                    </span>
                  </div>

                  <div
                    className="flex-1 rounded-2xl p-5 md:p-6"
                    style={{
                      background: i === 0 ? "#EEF4FF" : "#F7F6F2",
                      border:
                        i === 0
                          ? "1px solid #B5D4F4"
                          : "0.5px solid #E0DED8",
                    }}
                  >
                    <div className="mb-3 flex items-center gap-3">
                      <span
                        className="text-[20px] font-black md:text-[24px]"
                        style={{ color: i === 0 ? "#1E5FA8" : "#0A1F44" }}
                      >
                        {entry.year}
                      </span>
                      {i === 0 && (
                        <span
                          className="rounded-full px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider text-white"
                          style={{ background: "#1E5FA8" }}
                        >
                          Latest
                        </span>
                      )}
                    </div>
                    <ul className="space-y-2">
                      {entry.items.map((item) => (
                        <li
                          key={item}
                          className="flex items-start gap-2 text-[14px] leading-relaxed text-gray-600"
                        >
                          <span
                            className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full"
                            style={{ background: "#1E5FA8" }}
                          />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}