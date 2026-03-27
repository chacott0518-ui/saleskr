"use client";

import { motion } from "framer-motion";

export default function CeoPage() {
  return (
    <>
      <section className="relative h-[380px] overflow-hidden md:h-[560px]">
        <img src="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=1920&q=80" alt="CEO Message" className="h-full w-full object-cover object-center" loading="eager" />
        <div className="absolute inset-0 bg-black/45" />
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="px-4 text-center text-3xl font-extrabold tracking-tight text-white md:text-5xl">CEO Message</h1>
        </div>
      </section>

      <section className="bg-white py-16 md:py-20">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="mx-auto grid max-w-5xl items-stretch gap-10 px-5 md:grid-cols-2 md:gap-16 md:px-6"
        >
          {/* CEO Photo */}
          <div className="flex flex-col items-center">
            <div
              className="w-full overflow-hidden"
              style={{ height: "100%", minHeight: "480px", borderRadius: "16px", boxShadow: "0 20px 60px rgba(0,0,0,0.12)" }}
            >
              <img
                src="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=600&q=80"
                alt="CEO"
                className="h-full w-full object-cover"
                style={{ objectPosition: "top" }}
                loading="lazy"
              />
            </div>
            <p className="mt-4 text-base font-bold text-navy">CEO, SalesKR</p>
          </div>

          {/* Message */}
          <div>
            <p className="eyebrow">MESSAGE FROM THE CEO</p>
            <h2 className="mt-4 text-[24px] font-extrabold leading-snug text-navy md:text-[32px]">
              Delivering Korean Excellence<br />to the World
            </h2>
            <div className="mt-6 space-y-5 text-[15px] leading-[1.8] text-gray-600">
              <p>
                We appreciate your visit to SalesKR. SalesKR is committed to delivering high-quality Korean products, expanding its presence in markets worldwide. Through stable supply chains and strong global partnerships, we continue to provide the best solutions to meet local market needs.
              </p>
              <p>
                Our mission is to bridge the gap between Korea&apos;s innovative manufacturers and global markets, ensuring reliable supply and competitive pricing for every partner we work with.
              </p>
              <p>
                We look forward to building lasting partnerships and driving mutual success in the global marketplace.
              </p>
            </div>
            <p className="mt-8 text-base font-bold text-navy">Thank you for your trust.</p>
          </div>
        </motion.div>
      </section>
    </>
  );
}
