"use client";

import Link from "next/link";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";

const privacyEn = `Privacy Policy

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
1. Membership registration and management: Until withdrawal from the website
2. Provision of goods or services: Until completion of supply and payment settlement
   - Records on contracts or withdrawal of subscription: 5 years
   - Records on consumer complaints or dispute resolution: 3 years

Article 3. Provision to Third Parties
The Company does not provide personal information to third parties without the data subject's consent, except as required by applicable law.

Article 4. Entrustment of Processing
- Trustee: SalesKR Operations Team
- Scope: System provision, customer service, and related operations

Article 5. Rights of Data Subjects
1. Request to access personal information
2. Request for correction of errors
3. Request for deletion
4. Request to suspend processing

Article 6. Personal Information Items Processed
- Required: Company name, contact person, phone number, email, country, interested products, inquiry details, WhatsApp ID
- Optional: Additional inquiry information

Article 7. Destruction of Personal Information
Electronic files are permanently deleted using technical methods that prevent recovery. Physical documents are shredded or incinerated.

Article 8. Safety Measures
1. Administrative: Internal management plans, regular staff training
2. Technical: Access control systems, encryption, security software
3. Physical: Restricted access to server rooms and data storage facilities

Article 9. Use of Cookies
The Company uses cookies to provide personalized services. Users may configure cookie settings through their web browser options.

Article 10. Personal Information Protection Officer
Name: Jung, Yong Chul
Position: Representative Director
Contact: kimchee21@hanmail.net
TEL: +82-2-336-1334

Article 11. Remedies for Rights Infringement
1. Personal Information Dispute Mediation Committee: 1833-6972 (www.kopico.go.kr)
2. Personal Information Infringement Report Center: 118 (privacy.kisa.or.kr)
3. Supreme Prosecutors' Office: 1301 (www.spo.go.kr)
4. National Police Agency: 182 (ecrm.police.go.kr)

Effective Date: April 1, 2026`;

const privacyKo = `개인정보처리방침

세일즈케이알 주식회사(이하 '회사')는 개인정보 보호법 제30조에 따라 정보 주체의 개인정보를 보호하고 이와 관련한 고충을 신속하고 원활하게 처리할 수 있도록 다음과 같이 개인정보 처리지침을 수립, 공개합니다.

제1조 (개인정보의 처리목적)
1. 홈페이지 회원 가입 및 관리
회원 가입 의사 확인, 본인 식별·인증, 회원자격 유지·관리, 서비스 부정 이용 방지, 각종 고지·통지, 고충 처리 등을 목적으로 개인정보를 처리합니다.

2. 재화 또는 서비스 제공
물품 배송, 서비스 제공, 계약서 및 청구서 발송, 콘텐츠 제공, 맞춤서비스 제공, 본인인증, 요금 결제 및 정산 등을 목적으로 개인정보를 처리합니다.

3. 고충 처리
민원인의 신원 확인, 민원사항 확인, 사실조사를 위한 연락·통지, 처리 결과 통보 등의 목적으로 개인정보를 처리합니다.

제2조 (개인정보의 처리 및 보유기간)
1. 홈페이지 회원 가입 및 관리: 사업자/단체 홈페이지 탈퇴 시까지
2. 재화 또는 서비스 제공: 재화·서비스 공급완료 및 요금결제·정산 완료 시까지
   - 계약 또는 청약 철회, 대금결제 기록: 5년
   - 소비자 불만 또는 분쟁 처리 기록: 3년

제3조 (개인정보의 제3자 제공)
회사는 정보주체의 동의 없이 개인정보를 제3자에게 제공하지 않습니다.

제4조 (개인정보처리의 위탁)
- 위탁받는 자: SalesKR 운영팀
- 위탁 업무 내용: 시스템 제공, 고객상담 업무 등

제5조 (정보주체의 권리와 그 행사 방법)
1. 개인정보 열람 요구
2. 오류 등이 있을 경우 정정 요구
3. 삭제 요구
4. 처리정지 요구

제6조 (처리하는 개인정보 항목)
필수항목: 회사명, 담당자명, 전화번호, 이메일주소, 국가, 관심 제품, 문의 내용, WhatsApp ID
선택항목: 추가 문의 정보

제7조 (개인정보의 파기)
전자적 파일: 복구 불가능한 방법으로 영구 삭제
종이 문서: 분쇄기로 분쇄하거나 소각

제8조 (개인정보의 안전성 확보조치)
1. 관리적 조치: 내부관리계획 수립 및 시행, 정기적 직원 교육
2. 기술적 조치: 접근 권한 관리, 접근통제시스템 설치, 암호화, 보안프로그램 설치
3. 물리적 조치: 전산실, 자료보관실 등의 접근통제

제9조 (개인정보 자동 수집 장치의 설치·운영)
회사는 이용자에게 개별적인 맞춤 서비스를 제공하기 위해 쿠키(cookie)를 사용합니다. 정보주체는 웹 브라우저 옵션 설정을 통해 쿠키 허용, 차단 등의 설정을 할 수 있습니다.

제10조 (개인정보 보호책임자)
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

const termsEn = `Terms of Service

Article 1. Purpose
These Terms of Service govern the conditions of use and operation of the SalesKR website (hereinafter "the Site") services.

Article 2. Definitions
① "Member" refers to a user who agrees to these terms, provides personal information, completes registration, and uses the Site's services.
② "Service Agreement" refers to the contract concluded between the Site and members regarding service use.
③ "Member ID" refers to the unique combination of letters and numbers assigned to each member for identification.
④ "Password" refers to the combination selected by the member to verify identity and protect their rights.
⑤ "Operator" refers to the person who establishes and operates the homepage.
⑥ "Termination" refers to the member's cancellation of the service agreement.

Article 3. Rules Outside These Terms
The operator may separately announce operating policies when necessary. If these terms and operating policies overlap, the operating policies shall take precedence.

Article 4. Formation of Service Agreement
① The service agreement is formed when the operator approves the application of a person who agrees to these terms.
② Those who wish to register must select "I Agree" after reading these terms during registration.

Article 5. Application for Service Use
① Users must provide the information requested by the Site (user ID, password, nickname, etc.).
② Members who register false information may not exercise any rights related to site use and may be subject to legal penalties.

Article 6. Privacy Policy
The operator does not retain passwords provided during membership registration and strives to protect members' personal information in accordance with applicable laws and the Site's Privacy Policy.

Article 7. Operator's Obligations
① The operator shall process legitimate opinions or complaints from members as promptly as possible.
② The operator may request the Site to repair or restore equipment without delay in case of failure to ensure continuous and stable service provision.

Article 8. Member Obligations
① Members must comply with these terms, operator regulations, notices, and applicable laws, and must not interfere with the Site's operations or damage its reputation.
② Members may not transfer their service usage rights to others without the Site's explicit consent.
③ Members must exercise considerable caution in managing their ID and password.
④ Members must not infringe upon the intellectual property rights of the operator, Site, or third parties.

Article 9. Service Hours
① Services are available 24 hours a day, 365 days a year in principle.
② The Site may suspend services without prior notice in the following cases:
- Emergency system inspection, expansion, replacement, failure, or malfunction
- Force majeure events such as national emergencies, power outages, or natural disasters
- Suspension of telecommunications services by regulated carriers
- Service congestion that impairs normal service use

Article 10. Termination of Service Use
① Members who wish to terminate their service agreement must submit a termination application online.
② Upon termination, the site-related programs are automatically deleted and the operator can no longer view the member's information.

Article 11. Restrictions on Service Use
Members must not engage in the following acts:
① Registering false information during or after membership registration
② Interfering with other members' site use or misappropriating information
③ Impersonating the Site's management, employees, or related parties
④ Infringing upon personality rights or intellectual property rights of the Site or third parties
⑤ Improperly using another member's ID
⑥ Collecting or disclosing other members' personal information without their consent
⑦ Acts objectively recognized as connected to criminal activity
⑧ Other acts in violation of applicable laws

Article 12. Management of Posts
① The operator is responsible for managing posts and materials on the Site.
② The operator may delete or move posts without prior member consent if required by public authorities.

Article 13. Copyright of Posts
① The copyright of posts made by members belongs to the posting member.
② Members may not commercially use information obtained through the service.

Article 14. Disclaimer
① The operator is exempt from liability for damages arising from force majeure or the member's own fault.
② The operator is not liable for the authenticity, reliability, or accuracy of materials posted or transmitted by members.

Supplementary Provision
These Terms of Service are effective from April 1, 2026.`;

const termsKo = `이용약관

제1조 목적
본 이용약관은 SalesKR 웹사이트(이하 "사이트")의 서비스 이용조건과 운영에 관한 제반 사항 규정을 목적으로 합니다.

제2조 용어의 정의
① 회원: 사이트의 약관에 동의하고 개인정보를 제공하여 회원등록을 한 자로서, 사이트와의 이용계약을 체결하고 사이트를 이용하는 이용자를 말합니다.
② 이용계약: 사이트 이용과 관련하여 사이트와 회원간에 체결하는 계약을 말합니다.
③ 회원 아이디(ID): 회원의 식별과 서비스 이용을 위하여 회원별로 부여하는 고유한 문자와 숫자의 조합을 말합니다.
④ 비밀번호: 회원임을 확인하고 회원의 권익 보호를 위하여 회원이 선정한 문자와 숫자의 조합을 말합니다.
⑤ 운영자: 서비스에 홈페이지를 개설하여 운영하는 운영자를 말합니다.
⑥ 해지: 회원이 이용계약을 해약하는 것을 말합니다.

제3조 약관 외 준칙
운영자는 필요한 경우 별도로 운영정책을 공지 안내할 수 있으며, 본 약관과 운영정책이 중첩될 경우 운영정책이 우선 적용됩니다.

제4조 이용계약 체결
① 이용계약은 회원으로 등록하여 사이트를 이용하려는 자의 본 약관 내용에 대한 동의와 가입신청에 대하여 운영자의 이용승낙으로 성립합니다.
② 회원으로 등록하여 서비스를 이용하려는 자는 사이트 가입신청 시 본 약관을 읽고 "동의합니다"를 선택하는 것으로 동의 의사를 표시합니다.

제5조 서비스 이용 신청
① 회원으로 등록하여 사이트를 이용하려는 이용자는 사이트에서 요청하는 제반정보를 제공해야 합니다.
② 타인의 정보를 도용하거나 허위의 정보를 등록한 회원은 사이트 이용과 관련하여 아무런 권리를 주장할 수 없으며, 관계 법령에 따라 처벌받을 수 있습니다.

제6조 개인정보처리방침
운영자는 관계 법령이 정하는 바에 따라 회원의 개인정보를 보호하기 위하여 노력합니다.

제7조 운영자의 의무
① 운영자는 이용회원으로부터 제기되는 의견이나 불만이 정당하다고 인정할 경우에는 가급적 빨리 처리하여야 합니다.
② 운영자는 계속적이고 안정적인 사이트 제공을 위하여 설비에 장애가 생기거나 유실된 때에는 이를 지체 없이 수리 또는 복구할 수 있도록 노력합니다.

제8조 회원의 의무
① 회원은 본 약관에서 규정하는 사항과 운영자가 정한 제반 규정, 공지사항 및 운영정책 등을 준수하여야 합니다.
② 회원은 사이트의 명시적 동의 없이 서비스의 이용 권한을 타인에게 양도, 증여할 수 없습니다.
③ 이용고객은 아이디 및 비밀번호 관리에 상당한 주의를 기울여야 합니다.
④ 회원은 운영자와 사이트 및 제3자의 지적 재산권을 침해해서는 안 됩니다.

제9조 서비스 이용 시간
① 서비스 이용 시간은 업무상 또는 기술상 특별한 지장이 없는 한 연중무휴 1일 24시간을 원칙으로 합니다.
② 긴급한 시스템 점검, 증설, 교체, 고장 또는 천재지변 등의 경우 사전 공지 없이 서비스를 중단할 수 있습니다.

제10조 서비스 이용 해지
① 회원이 사이트와의 이용계약을 해지하고자 하는 경우에는 회원 본인이 온라인을 통하여 등록해지 신청을 하여야 합니다.

제11조 서비스 이용 제한
① 회원 가입 시 혹은 가입 후 정보 변경 시 허위 내용을 등록하는 행위
② 타인의 사이트 이용을 방해하거나 정보를 도용하는 행위
③ 사이트의 운영진, 직원 또는 관계자를 사칭하는 행위
④ 사이트, 기타 제3자의 인격권 또는 지적재산권을 침해하는 행위
⑤ 다른 회원의 ID를 부정하게 사용하는 행위
⑥ 범죄와 결부된다고 객관적으로 판단되는 행위
⑦ 기타 관련 법령에 위배되는 행위

제12조 게시물의 관리
운영자는 사이트의 게시물과 자료의 관리 및 운영의 책임을 집니다.

제13조 게시물에 대한 저작권
① 회원이 사이트 내에 게시한 게시물의 저작권은 게시한 회원에게 귀속됩니다.
② 회원은 서비스를 이용하여 취득한 정보를 임의 가공, 판매하는 행위 등 서비스에 게재된 자료를 상업적으로 사용할 수 없습니다.

제14조 면책
① 운영자는 천재지변 또는 회원의 고의 또는 과실로 인하여 발생한 손해에 대해서는 책임을 지지 않습니다.
② 운영자는 회원이 게시 또는 전송한 자료의 진위, 신뢰도, 정확성 등 그 내용에 대해서는 책임지지 아니합니다.

부칙
이 약관은 2026년 4월 1일부터 시행합니다.`;

export default function Footer() {
  const { t, lang } = useLanguage();
  const [showPrivacy, setShowPrivacy] = useState(false);
  const [showTerms, setShowTerms] = useState(false);

  // ✅ 사업자등록번호 — 영문 기본 / 한글 전환 시 한글 표기
  const bizRegNumber =
    lang === "ko"
      ? "사업자등록번호: 876-87-01523"
      : "Business Registration No: 876-87-01523";

  return (
    <>
      <footer
        className="pb-3 pt-14 text-white md:pb-4 md:pt-16"
        style={{
          background:
            "linear-gradient(135deg, #071729 0%, #0E3572 60%, #154C8A 100%)",
        }}
      >
        <div className="mx-auto max-w-6xl px-5 md:px-6">

          {/* ─── 데스크톱 (md 이상) ─── */}
          <div
            className="hidden md:grid md:gap-12"
            style={{ gridTemplateColumns: "1fr 2fr" }}
          >
            <div className="flex flex-col justify-between">
              <div>
                <h3
                  className="max-w-xs leading-snug text-white"
                  style={{
                    fontSize: "22px",
                    fontWeight: 900,
                    letterSpacing: "-0.02em",
                    textShadow: "0 2px 12px rgba(0,0,0,0.4)",
                  }}
                >
                  {t("footer.tagline")}
                </h3>

                {/* ✅ Company Profile 버튼만 유지 — Family Site 드롭다운 삭제 */}
                <div className="mt-6">
                  
                    <a
                    href="/company-profile.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      width: 210,
                      height: 40,
                      borderRadius: 8,
                      fontSize: 13,
                      fontWeight: 600,
                      display: "inline-flex",
                      alignItems: "center",
                      justifyContent: "center",
                      background: "#1E5FA8",
                      color: "white",
                      textDecoration: "none",
                      transition: "background 0.2s",
                      whiteSpace: "nowrap",
                      padding: "0 16px",
                    }}
                    onMouseEnter={(e) =>
                      ((e.currentTarget as HTMLElement).style.background =
                        "#154C8A")
                    }
                    onMouseLeave={(e) =>
                      ((e.currentTarget as HTMLElement).style.background =
                        "#1E5FA8")
                    }
                  >
                    Company Profile ↓
                  </a>
                </div>
              </div>
            </div>

            <div>
              <div className="grid grid-cols-2 gap-8">
                <div>
                  <p
                    className="mb-2 text-[11px] font-semibold uppercase tracking-wider"
                    style={{ color: "rgba(255,255,255,0.4)" }}
                  >
                    Headquarters
                  </p>
                  <p
                    className="text-[13px] leading-relaxed"
                    style={{ color: "rgba(255,255,255,0.88)" }}
                  >
                    B13, 602 Yeongdong-daero,
                    <br />
                    Gangnam-gu, Seoul, 06083,
                    <br />
                    Republic of Korea
                  </p>
                </div>
                <div>
                  <p
                    className="mb-2 text-[11px] font-semibold uppercase tracking-wider"
                    style={{ color: "rgba(255,255,255,0.4)" }}
                  >
                    Contact
                  </p>
                  <p
                    className="text-[13px] leading-relaxed"
                    style={{ color: "rgba(255,255,255,0.88)" }}
                  >
                    CEO: Jung, Yong Chul
                    <br />
                    TEL: +82-2-336-1334
                    <br />
                    FAX: +82-0504-065-2684
                  </p>
                  {/* ✅ 사업자등록번호 언어 분기 */}
                  <p
                    className="mt-2 text-[12px]"
                    style={{ color: "rgba(255,255,255,0.5)" }}
                  >
                    {bizRegNumber}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* ─── 모바일 (md 미만) ─── */}
          <div className="block md:hidden">
            <h3
              className="leading-snug text-white"
              style={{ fontSize: "16px", fontWeight: 900, letterSpacing: "-0.02em" }}
            >
              {t("footer.tagline")}
            </h3>

            {/* ✅ Company Profile 버튼만 — Family Site 삭제 */}
            <div className="mt-4">
              
                <a 
                href="/company-profile.pdf"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: "100%",
                  height: 40,
                  borderRadius: 8,
                  fontSize: 13,
                  fontWeight: 600,
                  background: "#1E5FA8",
                  color: "white",
                  textDecoration: "none",
                  whiteSpace: "nowrap",
                }}
              >
                Company Profile ↓
              </a>
            </div>

            <div
              className="mt-5 grid grid-cols-2 gap-3"
              style={{
                borderTop: "1px solid rgba(255,255,255,0.1)",
                paddingTop: 16,
              }}
            >
              <div>
                <p
                  style={{
                    fontSize: "9px",
                    fontWeight: 600,
                    color: "rgba(255,255,255,0.35)",
                    textTransform: "uppercase",
                    letterSpacing: "0.08em",
                    marginBottom: 6,
                  }}
                >
                  HQ
                </p>
                <p
                  style={{
                    fontSize: "11px",
                    color: "rgba(255,255,255,0.85)",
                    lineHeight: 1.6,
                  }}
                >
                  B13, 602 Yeongdong-daero,
                  <br />
                  Gangnam-gu, Seoul 06083,
                  <br />
                  Republic of Korea
                </p>
              </div>
              <div>
                <p
                  style={{
                    fontSize: "9px",
                    fontWeight: 600,
                    color: "rgba(255,255,255,0.35)",
                    textTransform: "uppercase",
                    letterSpacing: "0.08em",
                    marginBottom: 6,
                  }}
                >
                  Contact
                </p>
                <p
                  style={{
                    fontSize: "11px",
                    color: "rgba(255,255,255,0.85)",
                    lineHeight: 1.6,
                  }}
                >
                  Jung, Yong Chul
                  <br />
                  TEL: +82-2-336-1334
                  <br />
                  FAX: +82-0504-065-2684
                </p>
                {/* ✅ 사업자등록번호 모바일 언어 분기 */}
                <p
                  style={{
                    fontSize: "10px",
                    color: "rgba(255,255,255,0.4)",
                    marginTop: 4,
                  }}
                >
                  {bizRegNumber}
                </p>
              </div>
            </div>
          </div>

          {/* ─── 하단 바 — PC/모바일 공통 ─── */}
          <div
            className="mt-5 pt-4 md:mt-6 md:pt-5"
            style={{ borderTop: "1px solid rgba(255,255,255,0.1)" }}
          >
            <div className="flex flex-col items-center justify-between gap-3 text-center md:flex-row md:text-left">
              <p
                className="text-[11px]"
                style={{ color: "rgba(255,255,255,0.4)" }}
              >
                {t("footer.copyright")}
              </p>

              {/* ✅ Instagram 아이콘 완전 삭제 */}
              <div className="flex items-center gap-4">
                <button
                  onClick={() => setShowPrivacy(true)}
                  className="text-[11px] transition-colors hover:text-white"
                  style={{ color: "rgba(255,255,255,0.5)" }}
                >
                  {lang === "ko" ? "개인정보처리방침" : "Privacy Policy"}
                </button>
                <span style={{ color: "rgba(255,255,255,0.2)", fontSize: 10 }}>
                  |
                </span>
                <button
                  onClick={() => setShowTerms(true)}
                  className="text-[11px] transition-colors hover:text-white"
                  style={{ color: "rgba(255,255,255,0.5)" }}
                >
                  {lang === "ko" ? "이용약관" : "Terms of Service"}
                </button>

                {/* ✅ 로고 크기 키움: 모바일 h-8 / PC h-11 */}
                <Link href="/">
                  <img
                    src="/images/logo.png"
                    alt="SalesKR"
                    className="h-8 w-auto object-contain md:h-11"
                  />
                </Link>
              </div>
            </div>
          </div>

        </div>
      </footer>

      {/* ─── 개인정보처리방침 모달 ─── */}
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
                  {lang === "ko" ? "개인정보처리방침" : "Privacy Policy"}
                </h3>
                <button
                  onClick={() => setShowPrivacy(false)}
                  className="flex h-8 w-8 items-center justify-center rounded-full hover:bg-gray-100"
                >
                  <svg width="16" height="16" viewBox="0 0 20 20" fill="none">
                    <path
                      d="M5 5l10 10M15 5L5 15"
                      stroke="#666"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                  </svg>
                </button>
              </div>
              <div
                className="overflow-y-auto px-6 py-5"
                style={{
                  maxHeight: "60vh",
                  whiteSpace: "pre-line",
                  fontSize: "13px",
                  lineHeight: "1.8",
                  color: "#444",
                }}
              >
                {lang === "ko" ? privacyKo : privacyEn}
              </div>
              <div
                className="px-6 py-4"
                style={{ borderTop: "1px solid #E0DED8" }}
              >
                <button
                  onClick={() => setShowPrivacy(false)}
                  className="w-full rounded-lg py-3 text-[14px] font-bold text-white"
                  style={{ background: "#1E5FA8" }}
                >
                  {lang === "ko" ? "닫기" : "Close"}
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ─── 이용약관 모달 ─── */}
      <AnimatePresence>
        {showTerms && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4"
            style={{ background: "rgba(0,0,0,0.6)" }}
            onClick={() => setShowTerms(false)}
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
                  {lang === "ko" ? "이용약관" : "Terms of Service"}
                </h3>
                <button
                  onClick={() => setShowTerms(false)}
                  className="flex h-8 w-8 items-center justify-center rounded-full hover:bg-gray-100"
                >
                  <svg width="16" height="16" viewBox="0 0 20 20" fill="none">
                    <path
                      d="M5 5l10 10M15 5L5 15"
                      stroke="#666"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                  </svg>
                </button>
              </div>
              <div
                className="overflow-y-auto px-6 py-5"
                style={{
                  maxHeight: "60vh",
                  whiteSpace: "pre-line",
                  fontSize: "13px",
                  lineHeight: "1.8",
                  color: "#444",
                }}
              >
                {lang === "ko" ? termsKo : termsEn}
              </div>
              <div
                className="px-6 py-4"
                style={{ borderTop: "1px solid #E0DED8" }}
              >
                <button
                  onClick={() => setShowTerms(false)}
                  className="w-full rounded-lg py-3 text-[14px] font-bold text-white"
                  style={{ background: "#1E5FA8" }}
                >
                  {lang === "ko" ? "닫기" : "Close"}
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}