"use client";

import { useState, type FormEvent } from "react";
import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";

const countries = [
  "United States", "Canada", "United Kingdom", "Australia", "Germany",
  "France", "Spain", "Netherlands", "Poland", "Russia", "Kazakhstan",
  "Vietnam", "Japan", "Taiwan", "Thailand", "Malaysia", "Philippines",
  "Singapore", "UAE", "Saudi Arabia", "India", "Brazil", "Chile",
  "Argentina", "Colombia", "Kenya", "Nigeria", "Bangladesh", "Other",
];

const inquiryData = [
  { key: "type_general", desc: "Product availability, pricing, MOQ", email: "info@saleskr.com" },
  { key: "type_beauty", desc: "Skincare, cosmetics, personal care", email: "beauty@saleskr.com" },
  { key: "type_food", desc: "Kimchi, snacks, ready-to-eat meals", email: "food@saleskr.com" },
  { key: "type_oem", desc: "Custom formulation, private label", email: "oem@saleskr.com" },
  { key: "type_partner", desc: "Distributor & reseller partnerships", email: "partner@saleskr.com" },
  { key: "type_other", desc: "Any other questions or feedback", email: "hello@saleskr.com" },
];

export default function ContactPage() {
  const [selectedType, setSelectedType] = useState<string | null>(null);
  const [agreed, setAgreed] = useState(false);
  const { t } = useLanguage();

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    alert(t("contact_page.success"));
  };

  return (
    <>
      <section className="relative h-[380px] overflow-hidden md:h-[560px]">
        <img src="https://images.unsplash.com/photo-1423666639041-f56000c27a9a?w=1920&q=80" alt="Contact" className="h-full w-full object-cover object-center" loading="eager" />
        <div className="absolute inset-0 bg-black/45" />
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-2">
          <h1 className="px-4 text-center text-3xl font-extrabold tracking-tight text-white md:text-5xl">{t("contact_page.title")}</h1>
          <p className="text-base text-white/70">{t("contact_page.subtitle")}</p>
        </div>
      </section>

      {/* Step 01 */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-4xl px-5 md:px-6">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} viewport={{ once: true }}>
            <span className="eyebrow">STEP 01</span>
            <h2 className="mt-3 text-2xl font-extrabold text-navy md:text-3xl">{t("contact_page.step1")}</h2>
            <p className="mt-2 text-sm text-brand-muted">{t("contact_page.step1_desc")}</p>

            <div className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2">
              {inquiryData.map(({ key, desc, email }) => {
                const label = t(`contact_page.${key}`);
                const isSelected = selectedType === label;
                return (
                  <button
                    key={key}
                    type="button"
                    onClick={() => {
                      setSelectedType(label);
                      setTimeout(() => document.getElementById("contact-form")?.scrollIntoView({ behavior: "smooth" }), 100);
                    }}
                    className="relative cursor-pointer rounded-xl p-5 text-left transition-all duration-200"
                    style={{
                      border: isSelected ? "1px solid #1E5FA8" : "1px solid #E0DED8",
                      background: isSelected ? "#1E5FA8" : "white",
                      boxShadow: isSelected ? "0 0 0 1px #1E5FA8" : "none",
                    }}
                  >
                    {isSelected && (
                      <span
                        className="absolute right-4 top-4 flex h-6 w-6 items-center justify-center rounded-full text-xs font-bold text-white"
                        style={{ background: "rgba(255,255,255,0.2)" }}
                      >
                        ✓
                      </span>
                    )}
                    <p style={{ fontSize: "15px", fontWeight: 600, color: isSelected ? "white" : "#1A1A18" }}>
                      {label}
                    </p>
                    <p style={{ fontSize: "13px", color: isSelected ? "rgba(255,255,255,0.8)" : "#6B6B60", marginTop: "4px" }}>
                      {desc}
                    </p>
                    <p style={{ fontSize: "13px", color: isSelected ? "rgba(255,255,255,0.7)" : "#1E5FA8", marginTop: "6px" }}>
                      {email}
                    </p>
                  </button>
                );
              })}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Step 02 */}
      <section id="contact-form" className="bg-brand-bg py-20">
        <div className="mx-auto max-w-3xl px-5 md:px-6">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} viewport={{ once: true }}>
            <span className="eyebrow">STEP 02</span>
            <h2 className="mt-3 text-2xl font-extrabold text-navy md:text-3xl">{t("contact_page.step2")}</h2>

            <form onSubmit={handleSubmit} className="mt-10 space-y-5">
              <div className="grid gap-5 md:grid-cols-2">
                <Field label={t("contact_page.form_company")} name="company" required />
                <Field label={t("contact_page.form_person")} name="contact" required />
                <Field label={t("contact_page.form_phone")} name="phone" type="tel" required />
                <Field label={t("contact_page.form_email")} name="email" type="email" required />
                <div className="md:col-span-2">
                  <label className="mb-2 block text-[13px] font-semibold text-navy">
                    {t("contact_page.form_country")} <span className="text-red-500">*</span>
                  </label>
                  <select
                    name="country"
                    required
                    defaultValue=""
                    className="w-full rounded-lg border bg-white text-[15px] text-brand-text outline-none transition-all"
                    style={{ height: 48, padding: "0 16px", borderColor: "#E0DED8", borderRadius: "8px" }}
                    onFocus={(e) => { e.currentTarget.style.borderColor = "#1E5FA8"; e.currentTarget.style.boxShadow = "0 0 0 3px rgba(30,95,168,0.1)"; }}
                    onBlur={(e) => { e.currentTarget.style.borderColor = "#E0DED8"; e.currentTarget.style.boxShadow = "none"; }}
                  >
                    <option value="" disabled>{t("contact_page.form_country_placeholder")}</option>
                    {countries.map((c) => <option key={c} value={c}>{c}</option>)}
                  </select>
                </div>
                <div className="md:col-span-2">
                  <Field label={t("contact_page.form_products")} name="products" required placeholder={t("contact_page.form_products_placeholder")} />
                </div>
                <div className="md:col-span-2">
                  <label className="mb-2 block text-[13px] font-semibold text-navy">{t("contact_page.form_details")}</label>
                  <textarea
                    name="details"
                    rows={5}
                    placeholder={t("contact_page.form_details_placeholder")}
                    className="w-full resize-none bg-white text-[15px] text-brand-text outline-none transition-all"
                    style={{ border: "1px solid #E0DED8", borderRadius: "8px", padding: "12px 16px" }}
                    onFocus={(e) => { e.currentTarget.style.borderColor = "#1E5FA8"; e.currentTarget.style.boxShadow = "0 0 0 3px rgba(30,95,168,0.1)"; }}
                    onBlur={(e) => { e.currentTarget.style.borderColor = "#E0DED8"; e.currentTarget.style.boxShadow = "none"; }}
                  />
                </div>
                <div className="md:col-span-2">
                  <Field label={t("contact_page.form_whatsapp")} name="whatsapp" placeholder={t("contact_page.form_whatsapp_placeholder")} />
                </div>
              </div>

              <label className="flex cursor-pointer items-start gap-3">
                <input type="checkbox" checked={agreed} onChange={(e) => setAgreed(e.target.checked)} className="mt-0.5 h-4 w-4 rounded accent-blue" />
                <span className="text-sm text-brand-muted">{t("contact_page.form_consent")}</span>
              </label>

              <div style={{ textAlign: "center", marginTop: "40px" }}>
                <button
                  type="submit"
                  disabled={!agreed}
                  style={{
                    background: "#1A1A18",
                    color: "white",
                    fontSize: "15px",
                    fontWeight: 700,
                    padding: "16px 48px",
                    borderRadius: "50px",
                    border: "none",
                    cursor: agreed ? "pointer" : "not-allowed",
                    opacity: agreed ? 1 : 0.4,
                    minWidth: "200px",
                    display: "inline-block",
                    transition: "all 0.2s ease",
                  }}
                  onMouseEnter={(e) => {
                    if (!agreed) return;
                    const el = e.currentTarget as HTMLElement;
                    el.style.background = "#0A1F44";
                    el.style.transform = "translateY(-1px)";
                    el.style.boxShadow = "0 4px 20px rgba(0,0,0,0.2)";
                  }}
                  onMouseLeave={(e) => {
                    const el = e.currentTarget as HTMLElement;
                    el.style.background = "#1A1A18";
                    el.style.transform = "translateY(0)";
                    el.style.boxShadow = "none";
                  }}
                >
                  {t("contact_page.form_submit")}
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      </section>

      {/* WhatsApp FAB */}
      <a
        href="https://wa.me/821234567890"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="WhatsApp"
        className="fixed bottom-5 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-green-500 text-white shadow-xl transition-transform hover:scale-110 md:hidden"
      >
        <svg width="26" height="26" viewBox="0 0 24 24" fill="currentColor">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
        </svg>
      </a>
    </>
  );
}

function Field({ label, name, type = "text", required = false, placeholder }: { label: string; name: string; type?: string; required?: boolean; placeholder?: string }) {
  return (
    <div>
      <label className="mb-2 block text-[13px] font-semibold text-navy">
        {label} {required && <span className="text-red-500">*</span>}
      </label>
      <input
        type={type}
        name={name}
        required={required}
        placeholder={placeholder}
        className="w-full bg-white text-[15px] text-brand-text outline-none transition-all"
        style={{ height: 48, border: "1px solid #E0DED8", borderRadius: "8px", padding: "0 16px" }}
        onFocus={(e) => { e.currentTarget.style.borderColor = "#1E5FA8"; e.currentTarget.style.boxShadow = "0 0 0 3px rgba(30,95,168,0.1)"; }}
        onBlur={(e) => { e.currentTarget.style.borderColor = "#E0DED8"; e.currentTarget.style.boxShadow = "none"; }}
      />
    </div>
  );
}
