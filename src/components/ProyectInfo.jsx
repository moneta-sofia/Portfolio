import { useContext } from "react"
import { LanguageContext } from "../contexts/LanguageContext"

export default function ProyectInfo({proyect}) {
    const {isSpanish} = useContext(LanguageContext)
    return(
        <div className={`fixed mx-14 my-10 px-10 py-7 flex flex-col items-center inset-0 z-50 ${proyect.color} rounded-xl shadow-xl`}>
            <h1 className={`text-3xl font-bold ${proyect.textColor}`}>{isSpanish? proyect.nameSpanish : proyect.nameEnglish}</h1>
            <p className="py-8">{isSpanish? proyect.descriptionLongSpanish : proyect.descriptionLongEnglish }</p>
        </div>
    )
}