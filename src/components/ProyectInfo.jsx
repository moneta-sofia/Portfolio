import { useContext } from "react"
import { LanguageContext } from "../contexts/LanguageContext"
import { IoClose } from "react-icons/io5";

export default function ProyectInfo({proyect, setOpenInfo, openInfo}) {
    const {isSpanish} = useContext(LanguageContext)

    return(
        <>
            <div className={`${openInfo? 'fixed' : 'hidden'} z-40 blur inset-0`}/>
            <div className={`${openInfo? 'fixed' : 'hidden'} overflow-auto mx-14 my-10 px-10 py-7 flex flex-col items-center inset-0 z-50 ${proyect.color} rounded-xl shadow-xl`}>
                <IoClose className="cursor-pointer absolute md:right-7 right-5 text-4xl" onClick={()=>setOpenInfo(false)}/>
                <h1 className={`md:text-4xl text-3xl md:pt-0 pt-12 text-center font-bold `} style={{'color': proyect.textColor}}>{isSpanish? proyect.nameSpanish : proyect.nameEnglish}</h1>
                <p className="md:py-7 py-6 md:text-left text-center">{isSpanish? proyect.descriptionLongSpanish : proyect.descriptionLongEnglish }</p>
                <div className="w-full flex sm:flex-row flex-col items-center justify-between gap-x-5">
                    {
                        proyect.links?.map((link)=>{
                            return(
                                <a href={link.url} target="_blank" className="flex items-center justify-center bg-black text-gray-50 rounded-lg p-2 w-full my-2 font-bold gap-x-2"> {link.icon} {isSpanish? link.siteSpanish : link.siteEnglish}</a>
                            )
                        })
                    }
                </div>
            </div>
        </>
    )
}