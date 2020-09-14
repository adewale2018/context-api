import React, { useState, createContext, useContext, useMemo } from "react";

const LanguageContext = createContext();

function useLanguage(props) {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error(`Context must be used within the Provider...`);
  }
  return context;
}

function LanguageProvider(props) {
  const [language, setLanguage] = useState("english");

  const value = useMemo(() => [language, setLanguage], [language]);
  return <LanguageContext.Provider value={value} {...props} />;
}

export { useLanguage, LanguageProvider };
