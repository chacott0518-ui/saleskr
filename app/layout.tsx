import type { Metadata } from "next";
import "./globals.css";
import { LanguageProvider } from "@/context/LanguageContext";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.saleskr.com"),

  title: {
    default: "SalesKR | Korean Food & Beauty B2B Export Platform",
    template: "%s | SalesKR",
  },

  description:
    "SalesKR is Korea's trusted B2B export platform for Korean food, Kimchi, and K-Beauty products. We connect global buyers with 70+ verified Korean cosmetic brands and premium Kimchi suppliers. Direct sourcing from Korean manufacturers — competitive pricing, stable supply, fast export.",

  keywords: [
    "Korean food export",
    "Korean beauty B2B",
    "K-beauty wholesale",
    "Korean cosmetics distributor",
    "Kimchi export",
    "Korean products wholesale",
    "K-food export",
    "Korean beauty export",
    "Korean skincare wholesale",
    "B2B Korea",
    "Korean food distributor",
    "Korean cosmetics B2B",
    "K-beauty supplier",
    "Korean brand distributor",
    "Korean skincare supplier",
    "Korean OEM cosmetics",
    "Korean private label cosmetics",
    "Kimchi wholesale",
    "premium Korean food",
    "Korean health supplement export",
    "Korean beauty Australia",
    "Korean cosmetics Europe",
    "Korean food USA",
    "Korean beauty North America",
    "B2B Korean supplier",
    "Korean product sourcing",
    "Korea export platform",
    "Korean manufacturer direct",
    "K-beauty distributor",
    "Korean food importer",
    "SalesKR",
    "SALESKR",
    "ready to eat Kimchi",
    "Korean fermented food export",
    "Korean supplement wholesale",
    "K-beauty trends 2026",
    "derma cosmetics Korea",
    "clean beauty Korea",
    "Korean vegan cosmetics",
    "Korean beauty China",
    "Korean beauty Hong Kong",
    "CICA Korean cosmetics",
    "Niacinamide Korean brand",
    "Korean cosmetics importer",
    "한국 화장품 수출",
    "한국 식품 수출",
    "세일즈케이알",
    "김치 수출",
    "한국 뷰티 수출",
    "케이뷰티 도매",
  ],

  authors: [{ name: "SALESKR CO.,LTD", url: "https://www.saleskr.com" }],
  creator: "SALESKR CO.,LTD",
  publisher: "SALESKR CO.,LTD",

  openGraph: {
    type: "website",
    locale: "en_US",
    alternateLocale: "ko_KR",
    url: "https://www.saleskr.com",
    siteName: "SalesKR",
    title: "SalesKR | Korean Food & Beauty B2B Export Platform",
    description:
      "Connect with Korea's top food and beauty brands for global B2B distribution. 70+ verified Korean cosmetic brands, premium Kimchi, and OEM sourcing.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "SalesKR — Korean Food & Beauty B2B Export Platform",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "SalesKR | Korean Food & Beauty B2B Export",
    description:
      "Korea's trusted B2B export platform — 70+ Korean cosmetic brands, premium Kimchi, OEM sourcing.",
    images: ["/og-image.png"],
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  verification: {
    google: "ACN7hFoAP1BOF9b6i29aSBTqW3IdNkBN2neCMMoqhno",
    other: {
      "naver-site-verification": "c1d95c2ac3d8e797d9ccb4648d3811187af946c9",
    },
  },

  alternates: {
    canonical: "https://www.saleskr.com",
    languages: {
      "en-US": "https://www.saleskr.com",
      "ko-KR": "https://www.saleskr.com",
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col">
        <LanguageProvider>
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </LanguageProvider>
      </body>
    </html>
  );
}