import {
  SiTailwindcss,
  SiNextdotjs,
  SiPrisma,
  SiSpring,
  SiVite,
  SiExpress,
  SiKeycloak 
} from "react-icons/si";
import { FaReact, FaHtml5, FaSass, FaCss3Alt, FaJava, FaNodeJs, FaDocker  } from "react-icons/fa";
import { DiMongodb } from "react-icons/di";
import { GrMysql } from "react-icons/gr";
import TextAnimation from "./TextAnimation";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useContext } from "react";
import { LanguageContext } from "../contexts/LanguageContext";

const proyects = [
  {
    link: "https://tacoportfolio.netlify.app/",
    nameSpanish: "Taco Works",
    nameEnglish: "Taco's Works",
    descriptionSpanish: "Proyecto Full-Stack: Obras y trayectoria artística",
    descriptionEnglish: "Frontend project: Artistic works and journey",
    icons: [
      <FaNodeJs title="NodeJS" />,
      <SiExpress  title="Express" />,
      <DiMongodb  title="MongoDB" />,
      <FaReact title="React" />,
      <SiTailwindcss title="Tailwind"/>,
      <SiVite title="Vite" />,
    ],
    image:
      "https://wsrv.nl/?url=https://drive.google.com/uc?id=17n8ONybOT5SE1YZgf09diL5m41ugCkW3",
    color: "bg-stone-300",
    textColor: "#000",
    spanishAlt: "Un monitor con mi proyecto del Portfolio de Taco, Diego Ruiz",
    englishAlt: "A monitor displaying my Taco's Portfolio project",
  },

  {
    link: "https://github.com/moneta-sofia/challengebackend",
    nameSpanish: "Digital Money",
    nameEnglish: "Digital Money",
    descriptionSpanish: "Proyecto Back-End: Microservicios con Spring Boot, Keycloak y Docker",
    descriptionEnglish: "Back-End project: Microservices with Spring Boot, Keycloak, and Docker",
    icons: [
      <FaJava title="Java" />,
      <SiSpring title="SpringBoot" />,
      <FaDocker title="Docker" />,
      <SiKeycloak  title="Keycloak" />,
      <GrMysql  title="MySql" />,

    ],
    image:
      "https://wsrv.nl/?url=https://drive.google.com/uc?id=1AowPqlt2VlsdZ5TYL5dknPvioRv7DtM0",
    color: "bg-blue-100",
    textColor: "#09192A",
    spanishAlt: "Un monitor con mi proyecto de Digital Money",
    englishAlt: "A monitor displaying my Digital Money project",
  },

  {
    link: "https://infinit-ecommerce.vercel.app/",
    nameSpanish: "Infinit",
    nameEnglish: "Infinit",
    descriptionSpanish: "Proyecto Full-Stack: Alquiler de autos de lujo",
    descriptionEnglish:
      "Full-Stack project: Luxury car rental service with premium fleet ",
    icons: [
      <FaReact title="React" />,
      <SiTailwindcss title="Tailwind" />,
      <SiNextdotjs title="Next" />,
      <SiPrisma title="Prisma" />,
      <GrMysql title="mySQL" />,
    ],
    image:
      "https://wsrv.nl/?url=https://drive.google.com/uc?id=1V0m0pNmu6huuvDIMZvAlNAUVvMR_-kox",
    color: "bg-blue-50",
    textColor: "#2B4D6D",
    spanishAlt: "Un monitor con mi proyecto de alquiler de autos",
    englishAlt: "A monitor displaying my car rental project",
  },
  {
    link: "https://github.com/moneta-sofia/ProyectBackend",
    nameSpanish: "Clínica",
    nameEnglish: "Clinic",
    descriptionSpanish: "Proyecto Backend: Gestión de pacientes",
    descriptionEnglish: "Backend project: Patient Management",
    icons: [
      <FaHtml5 title="HTML" />,
      <FaCss3Alt title="CSS" />,
      <FaSass title="Sass" />,
      <FaJava title="Java" />,
      <SiSpring title="SpringBoot" />,
    ],
    image:
      "https://wsrv.nl/?url=https://drive.google.com/uc?id=1K6bOhHW0qgNcDagSYS7nnhxFuBoZCUEC",
    color: "bg-stone-50",
    textColor: "#9AB6D3",
    spanishAlt: "Un monitor con mi proyecto de gestion de pacientes",
    englishAlt: "A monitor displaying my patient management project",
  },
  {
    link: "https://odontologos-sofi.netlify.app/",
    nameSpanish: "Odontologos",
    nameEnglish: "Dentists",
    descriptionSpanish: "Proyecto FrontEnd: Listado de Odontologos",
    descriptionEnglish: "Frontend project: Dentists listing and storage",
    icons: [
      <FaCss3Alt title="CSS" />,
      <FaSass title="Sass" />,
      <FaReact title="React" />,
      <SiVite title="Vite" />,
    ],
    image:
      "https://wsrv.nl/?url=https://drive.google.com/uc?id=1_vs3EbMz8cdjNQ2n7MC1yGKwu2MzRosd",
    color: "bg-red-100",
    textColor: "#FF0002",
    spanishAlt: "Un monitor con mi proyecto de listado de odontologos",
    englishAlt: "A monitor displaying my dentists listing project",
  },

];

export default function Proyects() {
  const { isSpanish } = useContext(LanguageContext);

  const [ref, inView] = useInView({
    triggerOnce: true, // Change this to false if you want the animation to trigger again whenever it comes in view
  });

  return (
    <>
      <div className="w-full bg-primary relative -top-2 font-inter pt-10">
        <svg className="w-full h-full" ref={ref} viewBox="1 0 190 70">
          <motion.path
            fill="transparent"
            strokeWidth="3"
            stroke="#FBEEE4"
            d="m 0 30 q 39.75 -37.5 75 0 t 64.5 -2.25 c 4.5 -8.25 -13.5 -10.5 -9.75 -1.5 c 3 6.75 12.75 15.75 16.5 15 c 25.5 2.25 20.25 -27 47.25 -11.25"
            animate={
              inView
                ? {
                    pathLength: [0, 1],
                    strokeDashoffset: [2],
                  }
                : {}
            }
            transition={{
              duration: 2,
              ease: "easeInOut",
              times: [0, 1],
              loop: Infinity,
              repeatDelay: 1,
            }}
          />
        </svg>
        <motion.div className="flex flex-col items-center" name="proyectos">
          <h1 className="font-bold text-secondary 3xl:text-8xl xl:text-7xl lg:text-6xl md:text-5xl text-4xl my-28">
            {" "}
            {isSpanish ? (
              <TextAnimation text="PROYECTOS" />
            ) : (
              <TextAnimation text="PROJECTS" />
            )}
          </h1>
          <motion.div className="w-full flex flex-row flex-wrap justify-center items-center">
            {proyects.map((proy, index) => {
              return (
                <motion.a
                  href={proy.link}
                  target="_blank"
                  className={`card-p1 flex flex-col ${proy.color} hover:bg-white px-6 pt-8 mb-16 w-80 overflow-hidden rounded-xl hover:scale-105 transition ease-out shadow-special hover:shadow-special2 mx-5`}
                  key={index}
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{
                    opacity: 1,
                    scale: 1,
                    transition: {
                      delay: window.innerWidth <= 768 ? 0.3 : 0.3 * index,
                    },
                  }}
                  viewport={{ once: true }}
                >
                  <h1
                    className="md:text-4xl text-3xl font-extrabold md:mb-5 mb-2"
                    style={{ color: proy.textColor }}
                  >
                    {isSpanish ? proy.nameSpanish : proy.nameEnglish}
                  </h1>
                  <p className="my-1 font-medium">
                    {isSpanish
                      ? proy.descriptionSpanish
                      : proy.descriptionEnglish}
                  </p>
                  <div className="flex justify-between items-center text-3xl px-3 my-5">
                    {proy.icons.map((icon) => {
                      return icon;
                    })}
                  </div>
                  <img
                    alt={isSpanish ? proy.spanishAlt : proy.englishAlt}
                    src={proy.image}
                    className=" relative -bottom-5 self-center"
                  ></img>
                </motion.a>
              );
            })}
          </motion.div>
        </motion.div>
      </div>
      <img
        alt={
          isSpanish
            ? "Una ola color bordo para la estetica de la página"
            : "A Burgundy wave for web's aesthetics"
        }
        src="https://wsrv.nl/?url=https://drive.google.com/uc?id=1hYgYqlgtYylE1-y7_CE_efNghaO5ZYTb"
        className="w-full rotate-180 relative -top-5"
      ></img>
    </>
  );
}
