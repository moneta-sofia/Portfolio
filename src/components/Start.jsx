import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineDocumentDownload } from "react-icons/hi";
import { PiHandWaving } from "react-icons/pi";
import { motion } from "framer-motion"
import TextAnimation from './TextAnimation';
import { useContext } from 'react';
import { LanguageContext } from '../contexts/LanguageContext';


export default function Start() {
  const { isSpanish } = useContext(LanguageContext)

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        delayChildren: 0.2,
        staggerChildren: 0.2,
      }
    }
  }

  const item = {
    hidden: { opacity: 0 },
    show: { opacity: 1 }
  }

  return (
    <div className='bg-cuadricula font-park  md:h-screen w-screen flex justify-center items-center' name='inicio'>
      <div className='flex flex-col md:items-start items-center relative md:w-5/6 w-full md:h-3/4 h-full'>
        <motion.div className='flex flex-col md:items-start items-center md:mt-8 mt-24 md:ml-12 ml-0 md: w-fit' 
          variants={container}
          initial="hidden"
          animate="show">
          <motion.div className="text-black 3xl:my-4 lg:my-2 my-1 ">
            <motion.p className='flex items-center md:justify-start justify-center 3xl:text-4xl xl:text-2xl lg:text-xl text-sm 3xl:my-4 lg:my-3 my-1 ' variants={item}>{isSpanish? 'Un gusto verte por aqui!': 'Nice to see you here'}  <PiHandWaving className='ml-3 text-1xl' /> </motion.p>
            <motion.p className='subrayado font-bold 3xl:text-8xl xl:text-6xl lg:text-5xl text-4xl md:text-center text-center' variants={item}>{isSpanish? <TextAnimation text="Soy Sofia Moneta" />: <TextAnimation text="I'm Sofia Moneta" />}</motion.p>
            <motion.p className='3xl:text-5xl xl:text-4xl lg:text-3xl text-xl 3xl:my-6 lg:my-5 my-4 font-extrabold md:text-start text-center' variants={item} >{isSpanish? <TextAnimation text="Desarrolladora Web Full-Stack"/>: <TextAnimation text="Full-Stack Web Developer     " />}</motion.p>
          </motion.div>
          <div className='flex w-2/4 justify-between 3xl:my-6 my-2'>
            <motion.a variants={item} href='https://github.com/moneta-sofia' target="_blank"><FaGithub className='3xl:h-16 lg:h-10 h-5 3xl:w-16 lg:w-10 w-5 ' /></motion.a>
            <motion.a variants={item} href='https://www.linkedin.com/in/sofiamoneta/' target="_blank"><FaLinkedin className='3xl:h-16 lg:h-10 h-5 3xl:w-16 lg:w-10 w-5 ' /></motion.a>
            <motion.a variants={item} href='/CV-Sofia_Moneta.pdf' download={''}><HiOutlineDocumentDownload className='3xl:h-16 lg:h-10 h-5 3xl:w-16 lg:w-10 w-5 ' /></motion.a>
          </div>
        </motion.div>
        <motion.img src='https://wsrv.nl/?url=https://drive.google.com/uc?id=1qRHpGJ5fRv-cg5M0bhmLK2_T5YgjFALB' className='md:h-3/4 h-5/6 md:p-0 mt-16 sm:p-16 p-5 md:absolute relative 2xl:right-10 right-0 2xl:bottom-10 bottom-5'
          initial={{ y: "10px", opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          alt={isSpanish? 'Dibujo de una chica plirroja con su computadora':'Drawing of red-haired girl with her computer '}/>
      </div>

    </div>
  )
}

