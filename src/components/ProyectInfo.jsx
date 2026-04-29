import { useTranslation } from "../hooks/useTranslation";
import { CloseIcon } from "../data/icons";

export default function ProyectInfo({ proyect, setOpenInfo, openInfo }) {
  const t = useTranslation();
  const isSpanish = t.locale === "es";

  return (
        <>
            <div className={`${openInfo? 'fixed' : 'hidden'} z-50 blur inset-0`} onClick={() => setOpenInfo(false)}/>
            <div className={`${openInfo? 'fixed' : 'hidden'} overflow-auto md:mx-14 md:my-10 mx-5 my-5 px-10 py-7 flex flex-col items-center inset-0 z-50 ${proyect.color} rounded-xl shadow-xl`}>
                <div className="cursor-pointer fixed right-0 -my-4 md:mx-16 mx-7 text-2xl pr-2" onClick={()=>setOpenInfo(false)}>{<CloseIcon />}</div>
                <h1 className={`md:text-4xl text-3xl md:pt-0 pt-12 text-center font-bold `} style={{'color': proyect.textColor}}>{isSpanish? proyect.nameSpanish : proyect.nameEnglish}</h1>
                <p className="md:py-7 py-6 md:text-left text-center">{isSpanish? proyect.descriptionLongSpanish : proyect.descriptionLongEnglish }</p>
                <div className="w-full flex sm:flex-row flex-col items-center justify-between gap-x-5">
                    {
                        proyect.links?.map((link, i)=>{
                            const IconComponent = link.icon;
                            return(
                                <a href={link.url} target="_blank" className="flex items-center justify-center bg-black text-gray-50 rounded-lg p-2 w-full my-2 font-bold gap-x-2"> {<IconComponent key={i}/>} {isSpanish? link.siteSpanish : link.siteEnglish}</a>
                            )
                        })
                    }
                </div>
                <div className="w-full flex justify-center items-center gap-y-6 flex-col mt-5">
                    {proyect.data?.map((item, index)=>(
                        <div key={index} className="flex flex-col w-full">
                            <p className="py-4 text-left">{isSpanish? item.descriptionSpanish : item.descriptionEnglish }</p>
                            <img loading="lazy"  fetchpriority="low"  decoding="async"  src={item.gif}  className="w-full"/>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}