import {
  SiTailwindcss,
  SiNextdotjs,
  SiPrisma,
  SiSpring,
  SiVite,
  SiExpress,
  SiKeycloak 
} from "react-icons/si";
import { RiComputerLine } from "react-icons/ri";
import { FaReact, FaHtml5, FaSass, FaCss3Alt, FaJava, FaNodeJs, FaDocker ,FaGithub   } from "react-icons/fa";
import { DiMongodb } from "react-icons/di";
import { GrMysql } from "react-icons/gr";


export const proyects = [
  {
    link: "https://tacoportfolio.netlify.app/",
    nameSpanish: "Taco Works",
    nameEnglish: "Taco's Works",

    descriptionLongSpanish: "Un proyecto Full-Stack que recopila y muestra las obras artísticas de Taco, junto con su trayectoria. Incluye un frontend interactivo construido con React y TailwindCSS, un backend con Node.js y Express, y base de datos en MongoDB.",
    descriptionLongEnglish: "A Full-Stack project that showcases Taco’s artistic works and career journey. It features an interactive frontend built with React and TailwindCSS, a backend powered by Node.js and Express, and MongoDB as the database.",
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

    links: [
      {site: "FrontEnd", url: "https://github.com/moneta-sofia/ProyectoTaco", icon: <FaGithub /> },
      {site: "BackEnd", url: "https://github.com/moneta-sofia/BackTaco", icon: <FaGithub /> },
      {site: "Deploy", url: "https://tacoportfolio.netlify.app/", icon: <RiComputerLine /> },
    ],



    spanishAlt: "Un monitor con mi proyecto del Portfolio de Taco, Diego Ruiz",
    englishAlt: "A monitor displaying my Taco's Portfolio project",
  },

  {
    link: "https://github.com/moneta-sofia/challengebackend",
    nameSpanish: "Digital Money",
    nameEnglish: "Digital Money",
    descriptionSpanish: "Proyecto Back-End: Microservicios con Spring Boot, Keycloak y Docker",
    descriptionEnglish: "Back-End project: Microservices with Spring Boot, Keycloak, and Docker",
    descriptionLongSpanish: "Un backend basado en microservicios que gestiona operaciones de dinero digital. Desarrollado con Spring Boot y asegurado con Keycloak para autenticación y autorización. Los servicios se despliegan y orquestan mediante Docker, con MySQL como base de datos.",
    descriptionLongEnglish: "A backend built on microservices to manage digital money operations. Developed with Spring Boot and secured with Keycloak for authentication and authorization. Services are deployed and orchestrated using Docker, with MySQL as the database.",
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
    link: "https://infinit-ashen.vercel.app/",
    nameSpanish: "Infinit",
    nameEnglish: "Infinit",
    descriptionSpanish: "Proyecto Full-Stack: Alquiler de autos de lujo",
    descriptionEnglish:
      "Full-Stack project: Luxury car rental service with premium fleet ",
    descriptionLongSpanish: "Una aplicación Full-Stack para gestionar un servicio de alquiler de autos de lujo. Ofrece una interfaz moderna desarrollada con Next.js, React y TailwindCSS, y un backend conectado a MySQL mediante Prisma, lo que permite administrar flota y reservas.",
    descriptionLongEnglish: "A Full-Stack application for managing a luxury car rental service. It features a modern interface developed with Next.js, React, and TailwindCSS, and a backend connected to MySQL using Prisma, enabling fleet and booking management.",
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
    descriptionLongSpanish: "Un sistema backend para la gestión de pacientes en una clínica. Implementado con Spring Boot y Java, incluye lógica para administrar datos de pacientes, turnos y profesionales de la salud. También cuenta con integración de tecnologías web básicas.",
    descriptionLongEnglish: "A backend system for managing patients in a clinic. Implemented with Spring Boot and Java, it includes logic for handling patient data, appointments, and healthcare professionals. It also integrates basic web technologies.",
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
    descriptionLongSpanish: "Una aplicación frontend que permite visualizar y almacenar un listado de odontólogos. Construida con React, Vite, CSS y Sass, incluye un diseño atractivo y funcionalidades de almacenamiento básico para la gestión de profesionales.",
    descriptionLongEnglish: "A frontend application that allows displaying and storing a list of dentists. Built with React, Vite, CSS, and Sass, it features an appealing design and basic storage functionalities for managing professionals.",
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