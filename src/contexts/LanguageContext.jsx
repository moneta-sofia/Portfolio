import { createContext, useEffect, useMemo, useState } from "react";

export const LanguageContext = createContext();

export default function LanguageProvider({ children }) {
  const [isSpanish, setIsSpanish] = useState(
    localStorage.getItem("language")
      ? JSON.parse(localStorage.getItem("language"))
      : true,
  );

  useEffect(() => {
    localStorage.setItem("language", JSON.stringify(isSpanish));
  }, [isSpanish]);

  const values = useMemo(() => ({ isSpanish, setIsSpanish }), [isSpanish]);

  return (
    <LanguageContext.Provider value={values}>
      {children}
    </LanguageContext.Provider>
  );
}
