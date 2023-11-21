import { useState } from "react";
import { IoMenu, IoCloseOutline } from "react-icons/io5";
import { Link } from "react-scroll";

export default function NavBar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="fixed top-0 right-0 lg:m-10 md:m-5 mr-7 mt-5 w-1/12 flex flex-col items-center justify-center z-50 ">
            <div
                className={`bg-white text-secondary font-bold text-4xl flex items-center justify-around w-fit h-fit lg:p-3 p-2 z-50 rounded-full transition-transform shadow-lg ${isOpen ? "rotate" : ""
                    }`}
                onClick={() => setIsOpen(!isOpen)}
            >
                {isOpen ? (
                    <IoCloseOutline className="text-black" />
                ) : (
                    <IoMenu className="text-black" />
                )}
            </div>
            {isOpen ? (
                <>
                    <div className={`blur w-screen h-screen fixed inset-0 ${isOpen?'md:hidden flex' : 'hidden'}  `}></div>
                <div className="flex flex-col items-center justify-center md:text-xl text-2xl md:mt-5 mt-0 bg-white rounded-xl md:px-4 px-10 md:py-0 py-5 md:relative fixed md:inset-0 md:-translate-x-0 -translate-x-2/4 md:-translate-y-0 -translate-y-2/4 md:left-0 left-2/4 md:top-0 top-2/4 z-40">
                    <Link
                        activeClass="active"
                        to="inicio"
                        spy={true}
                        smooth={true}
                        offset={0}
                        duration={500}
                        onClick={()=> setIsOpen(false)}
                        className="my-2 "
                        >
                        Inicio
                    </Link>
                    <hr className="w-full " />
                    <Link
                        activeClass="active"
                        to="sobreMi"
                        spy={true}
                        smooth={true}
                        offset={-80}
                        duration={500}
                        onClick={()=> setIsOpen(false)}
                        className="my-2"
                        >
                        Sobre Mi
                    </Link>
                    <hr className="w-full " />
                    <Link
                        activeClass="active"
                        to="proyectos"
                        spy={true}
                        smooth={true}
                        offset={0}
                        duration={500}
                        onClick={()=> setIsOpen(false)}
                        className="my-2"
                        >
                        Proyectos
                    </Link>
                    <hr className="w-full " />
                    <Link
                        activeClass="active"
                        to="contacto"
                        spy={true}
                        smooth={true}
                        offset={-10}
                        duration={500}
                        onClick={()=> setIsOpen(false)}
                        className="my-2"
                        >
                        Contacto
                    </Link>
                </div>
            </>
            ) : (
                <></>
            )}
        </div>
    );
}
