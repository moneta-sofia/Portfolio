import { useState } from "react";
import Wave from "../assets/wave.png";
import { motion } from "framer-motion"
import TextAnimation from "./TextAnimation";


export default function About(){
    const [infoText, setInfoText] = useState(true)

    return (
        <div className="w-screen bg-cuadricula2 font-inter">
                <img src={Wave} className="w-full md:pb-0 pb-24"></img>
            <div className="w-full pb-24 bg-primary relative -top-1 flex flex-col items-center" name='sobreMi'>
                <motion.h1 className="font-bold text-secondary 3xl:text-8xl xl:text-6xl lg:text-5xl text-4xl" ><TextAnimation text='SOBRE MI'/></motion.h1>
                {infoText?
                <div className="about-slider lg:w-4/6 w-5/6 h-72 my-16 md:text-3xl sm2:text-2xl sm2:text-xl sm3:text-lg text-gray-800 text-center bg-secondary lg:p-16 md:p-12 p-10 rounded-3xl hover:shadow-2xl shadow-sm hover:scale-105 transition-all ease-in-out overflow-hidden ">
                    <div className="description">
                        <p className="description-item mb-16 mt-10">
                            Soy una <b className="text-bold">desarrolladora apasionada</b> 💪 con un gusto equilibrado por el <b className="text-bold">backend y el frontend</b>. 
                        </p>
                        <p className="description-item my-16">
                            Actualmente, estoy inmersa en mi <b className="text-bold">formación en la especialización de backend</b> en Digital House 📚.
                        </p>
                        
                        <p className="description-item my-16">
                            Mi enfoque versátil me permite no solo entender la lógica del backend 🤓, sino también la creatividad del frontend 🖌️.    
                        </p>
                        <p className="description-item my-16 ">
                            En mi viaje, he descubierto que el desarrollo va más allá de líneas de código; se trata de <b className="text-bold">resolver problemas y mejorar experiencias 🙌</b>. 
                        </p>
                        
                        <p className="description-item my-16">
                            Estoy emocionada por lo que el futuro me depara y me encuentro <b className="text-bold">comprometida a crecer</b> constantemente en este apasionante campo 🌱.
                        </p>
                    </div>
                </div> 
                :
                <div>
                    <iframe className="my-16" width="1000" height="562" src="https://www.youtube.com/embed/8sjn-bJOBBQ?si=NVPicFw9JOUm5T4H" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                </div>
                }
                <div className="bg-secondary flex justify-center items-center rounded-xl my-10 font-bold text-xl">
                    <div className={`py-3 md:px-12 px-8 rounded-tl-xl rounded-bl-xl ${infoText ? 'shadow-innerxl' : 'shadow-xxl'}`} onClick={()=> setInfoText(true)}>TEXT</div>
                    <div  className={`py-3 md:px-12 px-8 rounded-tr-xl rounded-br-xl ${infoText ? 'shadow-xxl': 'shadow-innerxl'}`} onClick={()=> setInfoText(false)}>VIDEO</div>
                </div>
            </div>
        </div>
    )
}