import { SiTailwindcss, SiNextdotjs, SiPrisma, SiSpring, SiVite } from "react-icons/si";
import { FaReact, FaHtml5, FaSass, FaCss3Alt, FaJava } from "react-icons/fa";
import { GrMysql } from "react-icons/gr";
import { InfinitMockup, ClinicaMockup, OdontologosMockup } from "../assets/Mockups";
import Wave from "../assets/wave.png";
import Line from "../assets/line.svg";



export default function Proyects() {
    return (
        <>
            <div className="w-full bg-primary relative -top-2 font-inter pt-10">
                <img src={Line} className="w-full"></img>
                <div className="flex flex-col items-center" name='proyectos'>

                    <h1 className="font-bold text-secondary 3xl:text-8xl xl:text-7xl lg:text-6xl md:text-5xl text-4xl my-28" >PROYECTOS</h1>
                    <div className="w-full flex flex-row flex-wrap justify-center items-center">
                        <a href="https://infinit-ecommerce.vercel.app/" target="_blank" className="card-p1 flex flex-col bg-gray-200 hover:bg-white px-6 pt-8 mb-16 w-80 overflow-hidden rounded-xl hover:scale-105 transition ease-out shadow-special hover:shadow-special2 mx-5" >
                            <h1 className="md:text-4xl text-3xl font-extrabold text-sky-950 md:mb-5 mb-2">Infinit</h1>
                            <p className="my-1 font-medium">Proyecto grupal: Alquiler de autos de lujo</p>
                            <div className="flex justify-between items-center text-3xl px-3 my-5">
                                <FaReact title="React" />
                                <SiTailwindcss title="Tailwind" />
                                <SiNextdotjs title="Next" />
                                <SiPrisma title="Prisma" />
                                <GrMysql title="mySQL" />
                            </div>
                            <img src={InfinitMockup} className=" relative -bottom-5 self-center"></img>
                        </a>

                        <a href="https://odontologos-sofi.netlify.app/" target="_blank" className="card-p1 flex flex-col bg-red-100 hover:bg-white px-6 pt-8 mb-16 w-80 overflow-hidden rounded-xl hover:scale-105 transition ease-out shadow-special hover:shadow-special2 mx-5">
                            <h1 className="md:text-4xl text-3xl font-extrabold text-red-600 md:mb-5 mb-2">Odontologos</h1>
                            <p className="my-1 font-medium">Proyecto FrontEnd: Listado de Odontologos</p>
                            <div className="flex justify-between items-center text-3xl px-3 my-5">
                                <FaCss3Alt title="CSS" />
                                <FaSass title="Sass" />
                                <FaReact title="React" />
                                <SiVite title="Vite" />
                            </div>
                            <img src={OdontologosMockup} className=" relative -bottom-5 self-center"></img>
                        </a>


                        <a href="https://github.com/moneta-sofia/ProyectBackend" target="_blank" className="card-p1 flex flex-col bg-slate-100 hover:bg-white px-6 pt-8 mb-16 w-80 overflow-hidden rounded-xl hover:scale-105 transition ease-out shadow-special hover:shadow-special2 mx-5">
                            <h1 className="md:text-4xl text-3xl font-extrabold md:mb-5 mb-2" style={{ color: '#74a5d2' }}>Clínica</h1>
                            <p className="my-1 font-medium">Proyecto Backend: Gestión de pacientes</p>
                            <div className="flex justify-between items-center text-3xl px-3 my-5">
                                <FaHtml5 title="HTML" />
                                <FaCss3Alt title="CSS" />
                                <FaSass title="Sass" />
                                <FaJava title="Java" />
                                <SiSpring title="SpringBoot" />
                            </div>
                            <img src={ClinicaMockup} className=" relative -bottom-5 self-center"></img>
                        </a>
                    </div>
                </div>
            </div>
            <img src={Wave} className="w-full rotate-180 relative -top-5"></img>
        </>
    )
}