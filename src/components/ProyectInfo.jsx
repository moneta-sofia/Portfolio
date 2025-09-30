import { useContext } from "react"
import { LanguageContext } from "../contexts/LanguageContext"
import { IoClose } from "react-icons/io5";

export default function ProyectInfo({proyect}) {
    const {isSpanish} = useContext(LanguageContext)
    return(
        <div className={`fixed mx-14 my-10 px-10 py-7 flex flex-col items-center inset-0 z-50 ${proyect.color} rounded-xl shadow-xl`}>
            <IoClose className="absolute md:right-7 right-5 text-4xl"/>
            <h1 className={`text-3xl md:pt-0 pt-12 font-bold ${proyect.textColor}`}>{isSpanish? proyect.nameSpanish : proyect.nameEnglish}</h1>
            <p className="md:py-8 py-6">{isSpanish? proyect.descriptionLongSpanish : proyect.descriptionLongEnglish }</p>
        </div>
    )
}