import { useContext, useState } from "react";
import { IoMenu, IoCloseOutline } from "react-icons/io5";
import { Link } from "react-scroll";
import { LanguageContext } from "../contexts/LanguageContext";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const {isSpanish, setIsSpanish} = useContext(LanguageContext)

    return (
        <div className="fixed top-0 right-0 lg:mr-16 mr-5 lg:mt-10 mt-5  z-50 flex justify-around">

                <div className={`bg-white text-black font-bold text-2xl md:flex hidden items-center justify-around lg:mr-10 mr-6 lg:w-16 w-14 p-1 z-50 rounded-full transition-transform shadow-mdButCenter`} onClick={()=>setIsSpanish(!isSpanish)}>{isSpanish? 'En' : 'Es'}</div>
            <div className="flex flex-col items-center justify-center">
                <div
                    className={`relative bg-white text-secondary font-bold text-4xl flex items-center justify-around w-fit h-fit lg:p-3 p-2 z-50 rounded-full transition-transform shadow-mdButCenter ${isOpen ? "rotate" : ""
                        }`}
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? (
                        <IoCloseOutline className="text-black" />
                    ) : (
                        <IoMenu className="text-black" />
                    )}
                </div>
                
                {isOpen && (
                <>
                    <div className={`blur w-screen h-screen fixed inset-0 ${isOpen ? 'md:hidden flex' : 'hidden'}  `}></div>
                    <div className=" flex flex-col items-center justify-center md:text-xl text-2xl md:mt-5 mt-0 bg-white rounded-xl md:px-4 px-10 md:py-0 py-5 md:absolute fixed md:inset-0 md:-translate-x-0 -translate-x-2/4 md:-translate-y-0 -translate-y-2/4 md:left-auto left-2/4 md:-right-7 md:top-14 top-2/4 z-40 h-fit w-fit p-3 shadow-mdButCenter">
                        <Link
                            activeClass="active"
                            to="inicio"
                            spy={true}
                            smooth={true}
                            offset={0}
                            duration={500}
                            onClick={() => setIsOpen(false)}
                            className="my-2 "
                        >
                            {isSpanish? 'Inicio' : 'Start'}
                        </Link>
                        <hr className="w-full " />
                        <Link
                            activeClass="active"
                            to="sobreMi"
                            spy={true}
                            smooth={true}
                            offset={-80}
                            duration={500}
                            onClick={() => setIsOpen(false)}
                            className="my-2"
                        >
                            { isSpanish? 'Sobre Mi' : 'About Me'}
                        </Link>
                        <hr className="w-full " />
                        <Link
                            activeClass="active"
                            to="proyectos"
                            spy={true}
                            smooth={true}
                            offset={0}
                            duration={500}
                            onClick={() => setIsOpen(false)}
                            className="my-2"
                        >
                            {isSpanish?'Proyectos': 'Projects'}
                        </Link>
                        <hr className="w-full " />
                        <Link
                            activeClass="active"
                            to="contacto"
                            spy={true}
                            smooth={true}
                            offset={-10}
                            duration={500}
                            onClick={() => setIsOpen(false)}
                            className="my-2"
                        >
                            {isSpanish?'Contacto': 'Contact'}
                        </Link>
                    </div>
                    <div className={`bg-white text-black font-bold text-2xl md:hidden flex items-center justify-around mt-5 lg:w-16 w-14 h-14 p-1 z-50 rounded-full transition-transform shadow-mdButCenter`} onClick={()=>
                        {setIsSpanish(!isSpanish)
                        setIsOpen(false)}
                        }>{isSpanish? 'Es' : 'En'}</div>
                </>)}

            </div>
            

        </div>
    );
}
