import type { Metadata } from "next";
import "./globals.css";
import { LanguageProvider } from "@/context/LanguageContext";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "SalesKR | Korean B2B Export Specialist",
  description:
    "Your trusted partner for Korean Food & Beauty wholesale distribution. Connecting premium Korean brands with global markets.",
  keywords: [
    "Korean export",
    "B2B",
    "Korean food",
    "Korean beauty",
    "K-beauty",
    "wholesale",
    "distribution",
  ],
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
