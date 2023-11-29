import { SiTailwindcss, SiNextdotjs, SiPrisma, SiSpring, SiVite } from "react-icons/si";
import { FaReact, FaHtml5, FaSass, FaCss3Alt, FaJava } from "react-icons/fa";
import { GrMysql } from "react-icons/gr";
import { InfinitMockup, ClinicaMockup, OdontologosMockup } from "../assets/Mockups";
import Wave from "../assets/wave.png";
import TextAnimation from "./TextAnimation";
import { motion } from "framer-motion"

    const proyects = [
        {link:'https://infinit-ecommerce.vercel.app/', name:'Infinit', description:'Proyecto grupal: Alquiler de autos de lujo',icons: [<FaReact title="React"/>, <SiTailwindcss title="Tailwind" />,<SiNextdotjs title="Next" />,<SiPrisma title="Prisma" />, <GrMysql title="mySQL" />], image: InfinitMockup, color: 'bg-gray-200', textColor:'#26485f' },
        {link:'https://odontologos-sofi.netlify.app/', name:'Odontologos', description:'Proyecto FrontEnd: Listado de Odontologos',icons: [<FaCss3Alt title="CSS" />,<FaSass title="Sass" />,<FaReact title="React" />, <SiVite title="Vite" />], image: OdontologosMockup, color: 'bg-red-100', textColor:'#d02a2e' },
        {link:'https://github.com/moneta-sofia/ProyectBackend', name:'Clínica', description:'Proyecto Backend: Gestión de pacientes',icons: [<FaHtml5 title="HTML" />,<FaCss3Alt title="CSS" />,<FaSass title="Sass" />,<FaJava title="Java" />,<SiSpring title="SpringBoot" />], image: ClinicaMockup, color: 'bg-slate-100', textColor:'#74a5d2' },
    ]


export default function Proyects() {
    return (
        <>
            <div className="w-full bg-primary relative -top-2 font-inter pt-10">
            <svg className="w-full h-full" viewBox="0 80 258 45">
                <motion.path
                    fill="transparent"
                    strokeWidth="3"
                    stroke="#FBEEE4"
                    d="M 0 100 Q 53 50 100 100 T 186 97 C 192 86 168 83 173 95 C 177 104 190 116 195 115 C 229 118 222 79 258 100"
                    animate={{
                    pathLength: [0, 1],
                    strokeDashoffset: [2, 0]
                    }}
                    transition={{
                    duration: 2,
                    ease: "easeInOut",
                    times: [0, 1],
                    loop: Infinity,
                    repeatDelay: 1
                    }}
                                    />
                </svg>
                <motion.div className="flex flex-col items-center" name='proyectos' >

                    <h1 className="font-bold text-secondary 3xl:text-8xl xl:text-7xl lg:text-6xl md:text-5xl text-4xl my-28" > <TextAnimation text='PROYECTOS'/></h1>
                    <motion.div className="w-full flex flex-row flex-wrap justify-center items-center" >

                        {proyects.map((proy, index) =>{
                            return(
                                <motion.a href={proy.link} target="_blank" className={`card-p1 flex flex-col ${proy.color} hover:bg-white px-6 pt-8 mb-16 w-80 overflow-hidden rounded-xl hover:scale-105 transition ease-out shadow-special hover:shadow-special2 mx-5`} key={index}
                                initial={{ opacity: 0, scale: 0 }}
                                whileInView={{ opacity: 1, scale: 1, transition: { delay: window.innerWidth <= 768 ? 0.3: 0.3 * index}}}
                                viewport={{once:true}}>
                                    
                                    <h1 className="md:text-4xl text-3xl font-extrabold md:mb-5 mb-2" style={{color:proy.textColor}}>{proy.name}</h1>
                                    <p className="my-1 font-medium">{proy.description}</p>
                                    <div className="flex justify-between items-center text-3xl px-3 my-5">
                                        {proy.icons.map((icon)=>{return icon})}
                                    </div>
                                    <img src={proy.image} className=" relative -bottom-5 self-center"></img>
                                </motion.a>
                            )
                            })}

                    </motion.div>
                </motion.div>
            </div>
            <img src={Wave} className="w-full rotate-180 relative -top-5"></img>
        </>
    )
}