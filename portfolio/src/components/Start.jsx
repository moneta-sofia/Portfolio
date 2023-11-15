import imgHome from '../assets/imgHome.png';
import { FaGithub, FaLinkedin  } from "react-icons/fa";
import { HiOutlineDocumentDownload } from "react-icons/hi";
import { PiHandWaving } from "react-icons/pi";


export default function Start(){
    return(   
    <div className='start font-park  md:h-screen w-screen flex justify-center items-center border-solid border-red-600 border-2'>
        <div className='flex flex-col md:items-start items-center relative md:w-5/6 w-full md:h-3/4 h-full'>
            <div className='flex flex-col md:items-start items-center md:mt-8 mt-20 md:ml-12 ml-0 md: w-fit'>
                <p className="text-black 3xl:my-4 lg:my-2 my-1 ">
                    <p className='flex items-center md:justify-start justify-center 3xl:text-4xl xl:text-2xl lg:text-xl text-sm 3xl:my-4 lg:my-3 my-1 '>Un gusto verte por aqui! <PiHandWaving className='ml-3 text-1xl' /> </p> 
                    <p className='font-bold 3xl:text-8xl xl:text-6xl lg:text-5xl text-4xl md:text-center text-center'>Soy Sofia Moneta</p>
                </p>
                <p className='3xl:text-5xl xl:text-4xl lg:text-3xl text-xl 3xl:my-3 lg:my-2 my-1 font-extrabold md:text-center text-center'>Full-Stack Web Developer</p>
                <div className='flex w-2/4 justify-between 3xl:my-6 my-2'>
                    <a href='https://github.com/moneta-sofia' target="_blank"><FaGithub className='3xl:h-16 lg:h-10 h-5 3xl:w-16 lg:w-10 w-5 '/></a>
                    <a href='https://www.linkedin.com/in/sofiamoneta/' target="_blank"><FaLinkedin  className='3xl:h-16 lg:h-10 h-5 3xl:w-16 lg:w-10 w-5 '/></a>
                    <a href='..\..\public\CV-Sofia_Moneta.pdf' download={''}><HiOutlineDocumentDownload  className='3xl:h-16 lg:h-10 h-5 3xl:w-16 lg:w-10 w-5 '/></a>
                </div>
            </div>
            <img src={imgHome}  className='md:h-3/4 h-5/6 md:p-0 mt-16 sm:p-16 p-5 md:absolute relative 2xl:right-10 right-0 2xl:bottom-10 bottom-5'/>  
        </div>

    </div>
    )
}