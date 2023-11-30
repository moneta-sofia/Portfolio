import { createContext, useState } from "react";

export const LanguageContext = createContext()

export default function LanguageProvider({children}){
    const [isSpanish, setIsSpanish] = useState(true)

    const values = {
        isSpanish,
        setIsSpanish
    }

    return(
        <LanguageContext.Provider value={values}>
            {children}
        </LanguageContext.Provider>
    )
}