import React, { createContext, useContext, useState, useEffect } from 'react';
import { LANGUAGES_LIST, LanguageOption } from '../data/languagesData';

interface LanguageContextType {
  currentLanguage: LanguageOption;
  setLanguageByCode: (code: string) => void;
  isModalOpen: boolean;
  openLanguageModal: () => void;
  closeLanguageModal: () => void;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [currentCode, setCurrentCode] = useState<string>(() => {
    try {
      return localStorage.getItem('bizzscale_lang') || 'en';
    } catch {
      return 'en';
    }
  });

  const [isModalOpen, setIsModalOpen] = useState(false);

  const defaultLanguage = LANGUAGES_LIST.find((l) => l.code === 'en') || LANGUAGES_LIST[0];
  const currentLanguage = 
    LANGUAGES_LIST.find((l) => l.code === currentCode) || defaultLanguage;

  const setLanguageByCode = (code: string) => {
    setCurrentCode(code);
    try {
      localStorage.setItem('bizzscale_lang', code);
    } catch (e) {
      // ignore
    }
  };

  const openLanguageModal = () => setIsModalOpen(true);
  const closeLanguageModal = () => setIsModalOpen(false);

  return (
    <LanguageContext.Provider
      value={{
        currentLanguage,
        setLanguageByCode,
        isModalOpen,
        openLanguageModal,
        closeLanguageModal,
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
