'use client';

import { createContext, useContext, useEffect, useState } from 'react';
import { Language, Translations, translations } from './translations';

const STORAGE_KEY = 'checked-lang';

function detectLanguage(): Language {
  if (typeof navigator === 'undefined') return 'en';
  const raw = navigator.language.toLowerCase();
  if (raw.startsWith('pt')) return 'pt';
  if (raw.startsWith('es')) return 'es';
  return 'en';
}

interface LanguageContextValue {
  language: Language;
  setLanguage: (l: Language) => void;
  t: Translations;
}

const LanguageContext = createContext<LanguageContextValue>({
  language: 'en',
  setLanguage: () => {},
  t: translations.en,
});

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguageState] = useState<Language>('en');

  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY) as Language | null;
    setLanguageState(stored ?? detectLanguage());
  }, []);

  function setLanguage(l: Language) {
    setLanguageState(l);
    localStorage.setItem(STORAGE_KEY, l);
  }

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t: translations[language] }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useTranslation() {
  return useContext(LanguageContext);
}
