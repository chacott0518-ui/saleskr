"use client";

import { useState, type FormEvent } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";

const SCRIPT_URL = "https://script.google.com/macros/s/AKfycbxNdRC7JX0E_QkhIZbIErb9tK7lZkuLwh76L9y0j6Vd1XsWIqbpKSeeURNnw_YTLWgPxQ/exec";

const countries = [
  "Afghanistan", "Albania", "Algeria", "Argentina", "Armenia",
  "Australia", "Austria", "Azerbaijan", "Bahrain", "Bangladesh",
  "Belarus", "Belgium", "Bolivia", "Brazil", "Bulgaria",
  "Cambodia", "Canada", "Chile", "China", "Colombia",
  "Croatia", "Czech Republic", "Denmark", "Ecuador", "Egypt",
  "Estonia", "Ethiopia", "Finland", "France", "Gabon",
  "Georgia", "Germany", "Ghana", "Greece", "Hungary",
  "India", "Indonesia", "Iran", "Iraq", "Ireland",
  "Israel", "Italy", "Japan", "Jordan", "Kazakhstan",
  "Kenya", "Kuwait", "Kyrgyzstan", "Latvia", "Lithuania",
  "Malaysia", "Mexico", "Moldova", "Mongolia", "Morocco",
  "Myanmar", "Netherlands", "New Zealand", "Nigeria", "Norway",
  "Pakistan", "Paraguay", "Peru", "Philippines", "Poland",
  "Portugal", "Qatar", "Romania", "Russia", "Saudi Arabia",
  "Singapore", "South Africa", "South Korea", "Spain", "Sri Lanka",
  "Sweden", "Switzerland", "Taiwan", "Thailand", "Turkey",
  "UAE", "Ukraine", "United Kingdom", "United States", "Uruguay",
  "Uzbekistan", "Venezuela", "Vietnam", "Other",
];

const inquiryData = [
  { key: "type_general", desc: "Product availability, pricing, MOQ", email: "info@saleskr.com" },
  { key: "type_beauty", desc: "Skincare, cosmetics, personal care", email: "beauty@saleskr.com" },
  { key: "type_food", desc: "Kimchi, snacks, ready-to-eat meals", email: "food@saleskr.com" },
  { key: "type_oem", desc: "Custom formulation, private label", email: "oem@saleskr.com" },
  { key: "type_partner", desc: "Distributor & reseller partnerships", email: "partner@saleskr.com" },
  { key: "type_other", desc: "Any other questions or feedback", email: "hello@saleskr.com" },
];

const privacyTextEn = `Privacy Policy

SALESKR CO., LTD (hereinafter "the Company") establishes and discloses the following Personal Information Processing Policy in accordance with Article 30 of the Personal Information Protection Act.

Article 1. Purpose of Processing Personal Information
The Company processes personal information for the following purposes and will not use it for any other purpose without separate consent.

1. Website Membership Registration and Management
Identity verification, membership maintenance, fraud prevention, notifications, and grievance handling.

2. Provision of Goods or Services
Product delivery, service provision, contract and invoice issuance, content provision, customized services, payment and settlement.

3. Grievance Handling
Identity verification of complainants, fact-finding, and notification of processing results.

Article 2. Retention Period
① Personal information is processed and retained within the period stipulated by law or agreed upon at the time of collection.
② Retention periods:
1. Membership registration and management: Until withdrawal from the website
2. Provision of goods or services: Until completion of supply and payment settlement
   - Records on contracts or withdrawal of subscription: 5 years
   - Records on consumer complaints or dispute resolution: 3 years

Article 3. Provision to Third Parties
The Company does not provide personal information to third parties without the data subject's consent, except as required by applicable law.

Article 4. Entrustment of Processing
The Company entrusts personal information processing for smooth operations:
- Trustee: SalesKR Operations Team
- Scope: System provision, customer service, and related operations

Article 5. Rights of Data Subjects
Data subjects may exercise the following rights at any time:
1. Request to access personal information
2. Request for correction of errors
3. Request for deletion
4. Request to suspend processing

These requests may be submitted in writing, by phone, email, or fax. The Company will respond without delay.

Article 6. Personal Information Items Processed
- Required: Company name, contact person, phone number, email address, country, interested products, inquiry details, WhatsApp ID
- Optional: Additional inquiry information

Article 7. Destruction of Personal Information
① The Company destroys personal information without delay when it becomes unnecessary.
② Destruction methods:
- Electronic files: Permanently deleted using technical methods that prevent recovery
- Physical documents: Shredded or incinerated

Article 8. Safety Measures
1. Administrative: Internal management plans, regular staff training
2. Technical: Access control systems, encryption of sensitive data, security software
3. Physical: Restricted access to server rooms and data storage facilities

Article 9. Use of Cookies
① The Company uses cookies to provide personalized services.
② Users may configure cookie settings through their web browser options. Blocking cookies may limit access to certain personalized features.

Article 10. Personal Information Protection Officer
▶ Officer in Charge
Name: Jung, Yong Chul
Position: Representative Director
Contact: kimchee21@hanmail.net
TEL: +82-2-336-1334

Article 11. Remedies for Rights Infringement
Data subjects may contact the following organizations:
1. Personal Information Dispute Mediation Committee: 1833-6972 (www.kopico.go.kr)
2. Personal Information Infringement Report Center: 118 (privacy.kisa.or.kr)
3. Supreme Prosecutors' Office: 1301 (www.spo.go.kr)
4. National Police Agency: 182 (ecrm.police.go.kr)

Effective Date: April 1, 2026`;

const privacyTextKo = `개인정보처리방침

세일즈케이알 주식회사(이하 '회사')는 개인정보 보호법 제30조에 따라 정보 주체의 개인정보를 보호하고 이와 관련한 고충을 신속하고 원활하게 처리할 수 있도록 다음과 같이 개인정보 처리지침을 수립, 공개합니다.

제1조 (개인정보의 처리목적)
회사는 다음의 목적을 위하여 개인정보를 처리합니다. 처리하고 있는 개인정보는 다음의 목적 이외의 용도로는 이용되지 않으며, 이용 목적이 변경되는 경우에는 개인정보보호법 제18조에 따라 별도의 동의를 받는 등 필요한 조치를 이행할 예정입니다.

1. 홈페이지 회원 가입 및 관리
회원 가입 의사 확인, 본인 식별·인증, 회원자격 유지·관리, 서비스 부정 이용 방지, 각종 고지·통지, 고충 처리 등을 목적으로 개인정보를 처리합니다.

2. 재화 또는 서비스 제공
물품 배송, 서비스 제공, 계약서 및 청구서 발송, 콘텐츠 제공, 맞춤서비스 제공, 본인인증, 요금 결제 및 정산 등을 목적으로 개인정보를 처리합니다.

3. 고충 처리
민원인의 신원 확인, 민원사항 확인, 사실조사를 위한 연락·통지, 처리 결과 통보 등의 목적으로 개인정보를 처리합니다.

제2조 (개인정보의 처리 및 보유기간)
① 회사는 법령에 따른 개인정보 보유·이용 기간 내에서 개인정보를 처리·보유합니다.
② 각각의 개인정보 처리 및 보유 기간은 다음과 같습니다.
1. 홈페이지 회원 가입 및 관리: 사업자/단체 홈페이지 탈퇴 시까지
2. 재화 또는 서비스 제공: 재화·서비스 공급완료 및 요금결제·정산 완료 시까지
   - 계약 또는 청약 철회, 대금결제 기록: 5년
   - 소비자 불만 또는 분쟁 처리 기록: 3년

제3조 (개인정보의 제3자 제공)
회사는 정보주체의 동의 없이 개인정보를 제3자에게 제공하지 않습니다. 단, 법률의 특별한 규정이 있는 경우는 예외로 합니다.

제4조 (개인정보처리의 위탁)
회사는 원활한 개인정보 업무처리를 위하여 다음과 같이 개인정보 처리업무를 위탁하고 있습니다.
- 위탁받는 자: SalesKR 운영팀
- 위탁 업무 내용: 시스템 제공, 고객상담 업무 등

제5조 (정보주체의 권리와 그 행사 방법)
① 정보주체는 회사에 대해 언제든지 다음 각 호의 개인정보 보호 관련 권리를 행사할 수 있습니다.
1. 개인정보 열람 요구
2. 오류 등이 있을 경우 정정 요구
3. 삭제 요구
4. 처리정지 요구
② 제1항에 따른 권리 행사는 서면, 전화, 전자우편, 팩스 등을 통하여 하실 수 있으며 회사는 이에 대해 지체 없이 조치하겠습니다.

제6조 (처리하는 개인정보 항목)
필수항목: 회사명, 담당자명, 전화번호, 이메일주소, 국가, 관심 제품, 문의 내용, WhatsApp ID
선택항목: 추가 문의 정보

제7조 (개인정보의 파기)
① 회사는 개인정보가 불필요하게 되었을 때에는 지체 없이 해당 개인정보를 파기합니다.
② 파기 방법:
- 전자적 파일: 복구 불가능한 방법으로 영구 삭제
- 종이 문서: 분쇄기로 분쇄하거나 소각

제8조 (개인정보의 안전성 확보조치)
1. 관리적 조치: 내부관리계획 수립 및 시행, 정기적 직원 교육
2. 기술적 조치: 접근 권한 관리, 접근통제시스템 설치, 고유 식별정보 암호화, 보안프로그램 설치
3. 물리적 조치: 전산실, 자료보관실 등의 접근통제

제9조 (개인정보 자동 수집 장치의 설치·운영)
① 회사는 이용자에게 개별적인 맞춤 서비스를 제공하기 위해 쿠키(cookie)를 사용합니다.
② 정보주체는 웹 브라우저 옵션 설정을 통해 쿠키 허용, 차단 등의 설정을 할 수 있습니다.

제10조 (개인정보 보호책임자)
▶ 개인정보 보호책임자
성명: 정용철
직책: 대표이사
연락처: kimchee21@hanmail.net
TEL: +82-2-336-1334

제11조 (권익침해 구제 방법)
1. 개인정보 분쟁조정위원회: 1833-6972 (www.kopico.go.kr)
2. 개인정보침해신고센터: 118 (privacy.kisa.or.kr)
3. 대검찰청: 1301 (www.spo.go.kr)
4. 경찰청: 182 (ecrm.police.go.kr)

시행일: 2026년 4월 1일`;

export default function ContactPage() {
  const [selectedType, setSelectedType] = useState<string | null>(null);
  const [agreed, setAgreed] = useState(false);
  const [showPrivacy, setShowPrivacy] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");
  const { t, lang } = useLanguage();

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!agreed) return;

    const form = e.currentTarget;
    const params = new URLSearchParams({
      companyName: (form.elements.namedItem("company") as HTMLInputElement).value,
      contactPerson: (form.elements.namedItem("contact") as HTMLInputElement).value,
      phone: (form.elements.namedItem("phone") as HTMLInputElement).value,
      email: (form.elements.namedItem("email") as HTMLInputElement).value,
      country: (form.elements.namedItem("country") as HTMLSelectElement).value,
      interestedProducts: (form.elements.namedItem("products") as HTMLInputElement).value,
      inquiryDetails: (form.elements.namedItem("details") as HTMLTextAreaElement).value,
      whatsappId: (form.elements.namedItem("whatsapp") as HTMLInputElement).value,
      agreed: String(agreed),
    });

    setIsSubmitting(true);

    try {
      await fetch(SCRIPT_URL, {
        method: "POST",
        mode: "no-cors",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: params.toString(),
      });
      setSubmitStatus("success");
      form.reset();
      setAgreed(false);
      setSelectedType(null);
    } catch (error) {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      {/* Hero */}
      <section className="relative h-[380px] overflow-hidden md:h-[560px]">
        <img
          src="https://images.unsplash.com/photo-1423666639041-f56000c27a9a?w=1920&q=80"
          alt="Contact"
          className="h-full w-full object-cover object-center"
          loading="eager"
        />
        <div className="absolute inset-0 bg-black/45" />
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-2">
          <h1 className="px-4 text-center text-3xl font-extrabold tracking-tight text-white md:text-5xl">
            {t("contact_page.title")}
          </h1>
          <p className="text-base text-white/70">{t("contact_page.subtitle")}</p>
        </div>
      </section>

      {/* Step 01 */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-4xl px-5 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
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
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <span className="eyebrow">STEP 02</span>
            <h2 className="mt-3 text-2xl font-extrabold text-navy md:text-3xl">{t("contact_page.step2")}</h2>

            {/* 성공 메시지 */}
            {submitStatus === "success" && (
              <div
                className="mt-8 rounded-2xl p-8 text-center"
                style={{ background: "#E6F4EA", border: "1px solid #A8D8A0" }}
              >
                <div className="mb-4 text-5xl">✅</div>
                <h3 className="text-xl font-bold text-green-800">
                  {lang === "ko" ? "문의가 접수되었습니다!" : "Thank you for your inquiry!"}
                </h3>
                <p className="mt-2 text-green-700">
                  {lang === "ko"
                    ? "24시간 이내에 답변 드리겠습니다. 입력하신 이메일로 확인 메일이 발송되었습니다."
                    : "We'll get back to you within 24 hours. A confirmation email has been sent to your inbox."}
                </p>
                <button
                  onClick={() => setSubmitStatus("idle")}
                  className="mt-6 rounded-full px-6 py-2 text-sm font-semibold text-white"
                  style={{ background: "#1E5FA8" }}
                >
                  {lang === "ko" ? "다시 문의하기" : "Submit Another Inquiry"}
                </button>
              </div>
            )}

            {/* 실패 메시지 */}
            {submitStatus === "error" && (
              <div
                className="mt-8 rounded-2xl p-6 text-center"
                style={{ background: "#FDE8E8", border: "1px solid #F0A0A0" }}
              >
                <p className="font-semibold text-red-700">
                  {lang === "ko"
                    ? "오류가 발생했습니다. 다시 시도해주세요."
                    : "Something went wrong. Please try again."}
                </p>
                <button
                  onClick={() => setSubmitStatus("idle")}
                  className="mt-3 text-sm font-semibold text-red-600 underline"
                >
                  {lang === "ko" ? "다시 시도" : "Try again"}
                </button>
              </div>
            )}

            {/* 폼 */}
            {submitStatus !== "success" && (
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
                    <Field
                      label={t("contact_page.form_products")}
                      name="products"
                      required
                      placeholder={t("contact_page.form_products_placeholder")}
                    />
                  </div>
                  <div className="md:col-span-2">
                    <label className="mb-2 block text-[13px] font-semibold text-navy">
                      {t("contact_page.form_details")}
                    </label>
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
                    <Field
                      label={t("contact_page.form_whatsapp")}
                      name="whatsapp"
                      placeholder={t("contact_page.form_whatsapp_placeholder")}
                    />
                  </div>
                </div>

                {/* 개인정보 동의 */}
                <div className="flex items-start gap-3">
                  <input
                    type="checkbox"
                    id="privacy-agree"
                    checked={agreed}
                    onChange={(e) => setAgreed(e.target.checked)}
                    className="mt-1 h-4 w-4 cursor-pointer rounded accent-blue"
                  />
                  <label htmlFor="privacy-agree" className="text-sm text-brand-muted">
                    {lang === "ko"
                      ? "개인정보 수집 및 이용에 동의합니다. "
                      : "I agree to the collection and use of my personal information. "}
                    <button
                      type="button"
                      onClick={() => setShowPrivacy(true)}
                      className="font-semibold underline"
                      style={{ color: "#1E5FA8" }}
                    >
                      {lang === "ko" ? "[내용 보기]" : "[View Policy]"}
                    </button>
                  </label>
                </div>

                {/* 제출 버튼 */}
                <div style={{ textAlign: "center", marginTop: "40px" }}>
                  <button
                    type="submit"
                    disabled={!agreed || isSubmitting}
                    style={{
                      background: agreed ? "linear-gradient(135deg, #1E5FA8 0%, #4A9EFF 100%)" : "#ccc",
                      color: "white",
                      fontSize: "15px",
                      fontWeight: 700,
                      padding: "16px 48px",
                      borderRadius: "50px",
                      border: "none",
                      cursor: agreed && !isSubmitting ? "pointer" : "not-allowed",
                      opacity: agreed ? 1 : 0.5,
                      minWidth: "200px",
                      display: "inline-flex",
                      alignItems: "center",
                      justifyContent: "center",
                      gap: "8px",
                      transition: "all 0.2s ease",
                    }}
                    onMouseEnter={(e) => {
                      if (!agreed || isSubmitting) return;
                      const el = e.currentTarget as HTMLElement;
                      el.style.transform = "translateY(-2px)";
                      el.style.boxShadow = "0 8px 25px rgba(30,95,168,0.45)";
                    }}
                    onMouseLeave={(e) => {
                      const el = e.currentTarget as HTMLElement;
                      el.style.transform = "translateY(0)";
                      el.style.boxShadow = "none";
                    }}
                  >
                    {isSubmitting ? (
                      <>
                        <svg className="animate-spin" width="18" height="18" viewBox="0 0 24 24" fill="none">
                          <circle cx="12" cy="12" r="10" stroke="rgba(255,255,255,0.3)" strokeWidth="3" />
                          <path d="M12 2a10 10 0 0110 10" stroke="white" strokeWidth="3" strokeLinecap="round" />
                        </svg>
                        {lang === "ko" ? "전송 중..." : "Sending..."}
                      </>
                    ) : (
                      t("contact_page.form_submit")
                    )}
                  </button>
                </div>
              </form>
            )}
          </motion.div>
        </div>
      </section>

      {/* 개인정보 모달 */}
      <AnimatePresence>
        {showPrivacy && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4"
            style={{ background: "rgba(0,0,0,0.6)" }}
            onClick={() => setShowPrivacy(false)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.2 }}
              className="relative w-full max-w-lg overflow-hidden rounded-2xl bg-white shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div
                className="flex items-center justify-between px-6 py-4"
                style={{ borderBottom: "1px solid #E0DED8" }}
              >
                <h3 className="text-[16px] font-bold text-navy">
                  {lang === "ko" ? "개인정보 수집 및 이용 동의" : "Privacy Policy"}
                </h3>
                <button
                  onClick={() => setShowPrivacy(false)}
                  className="flex h-8 w-8 items-center justify-center rounded-full transition-colors hover:bg-gray-100"
                >
                  <svg width="16" height="16" viewBox="0 0 20 20" fill="none">
                    <path d="M5 5l10 10M15 5L5 15" stroke="#666" strokeWidth="2" strokeLinecap="round" />
                  </svg>
                </button>
              </div>
              <div
                className="overflow-y-auto px-6 py-5"
                style={{ maxHeight: "60vh", whiteSpace: "pre-line", fontSize: "13px", lineHeight: "1.8", color: "#444" }}
              >
                {lang === "ko" ? privacyTextKo : privacyTextEn}
              </div>
              <div
                className="flex gap-3 px-6 py-4"
                style={{ borderTop: "1px solid #E0DED8" }}
              >
                <button
                  onClick={() => { setAgreed(true); setShowPrivacy(false); }}
                  className="flex-1 rounded-lg py-3 text-[14px] font-bold text-white transition-colors"
                  style={{ background: "#1E5FA8" }}
                >
                  {lang === "ko" ? "동의합니다" : "I Agree"}
                </button>
                <button
                  onClick={() => setShowPrivacy(false)}
                  className="flex-1 rounded-lg py-3 text-[14px] font-semibold transition-colors"
                  style={{ background: "#F7F6F2", color: "#666" }}
                >
                  {lang === "ko" ? "닫기" : "Close"}
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

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

function Field({
  label,
  name,
  type = "text",
  required = false,
  placeholder,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  placeholder?: string;
}) {
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
        onFocus={(e) => {
          e.currentTarget.style.borderColor = "#1E5FA8";
          e.currentTarget.style.boxShadow = "0 0 0 3px rgba(30,95,168,0.1)";
        }}
        onBlur={(e) => {
          e.currentTarget.style.borderColor = "#E0DED8";
          e.currentTarget.style.boxShadow = "none";
        }}
      />
    </div>
  );
}