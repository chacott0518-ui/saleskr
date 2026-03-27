"use client";

import { createContext, useContext, useState, useEffect, type ReactNode } from "react";
import en from "@/locales/en/common.json";
import ko from "@/locales/ko/common.json";

type Language = "en" | "ko";

interface LanguageContextType {
  lang: Language;
  setLang: (lang: Language) => void;
  t: (key: string) => string;
}

const translations: Record<Language, Record<string, unknown>> = { en, ko };

const LanguageContext = createContext<LanguageContextType>({
  lang: "en",
  setLang: () => {},
  t: (key) => key,
});

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Language>("en");

  useEffect(() => {
    const saved = localStorage.getItem("saleskr-lang") as Language | null;
    if (saved === "en" || saved === "ko") setLangState(saved);
  }, []);

  const setLang = (newLang: Language) => {
    setLangState(newLang);
    localStorage.setItem("saleskr-lang", newLang);
  };

  const t = (key: string): string => {
    const keys = key.split(".");
    let value: unknown = translations[lang];
    for (const k of keys) {
      value = (value as Record<string, unknown>)?.[k];
    }
    return (typeof value === "string" ? value : key);
  };

  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export const useLanguage = () => useContext(LanguageContext);
