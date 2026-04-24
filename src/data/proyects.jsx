export const proyects = [
  /* -------------------------------------------------------------------------- */
  /*                                Tacos Proyect                               */
  /* -------------------------------------------------------------------------- */

  {
    nameSpanish: "Taco Works",
    nameEnglish: "Taco's Works",

    descriptionLongSpanish:
      "Un proyecto Full-Stack que recopila y muestra las obras artísticas de Taco, junto con su trayectoria. Incluye un frontend interactivo construido con React y TailwindCSS, un backend con Node.js y Express, y base de datos en MongoDB.",
    descriptionLongEnglish:
      "A Full-Stack project that showcases Taco’s artistic works and career journey. It features an interactive frontend built with React and TailwindCSS, a backend powered by Node.js and Express, and MongoDB as the database.",
    descriptionSpanish: "Proyecto Full-Stack: Obras y trayectoria artística",
    descriptionEnglish: "Frontend project: Artistic works and journey",

    data: [
      {
        descriptionSpanish:
          "Este proyecto cuenta con una funcionalidad de inicio de sesión que permite a los usuarios autenticarse de forma segura y acceder a las herramientas administrativas del sitio.",
        descriptionEnglish:
          "This project includes a login feature that allows users to authenticate securely and access the site's administrative tools.",
        gif: "/imgs/proyects/taco/login.gif",
      },
      {
        descriptionSpanish:
          "También incorpora una navegación fluida y transiciones dinámicas entre secciones, ofreciendo una experiencia visual atractiva y envolvente.",
        descriptionEnglish:
          "It also features smooth navigation and dynamic transitions between sections, providing an engaging and visually appealing experience.",
        gif: "/imgs/proyects/taco/move.gif",
      },
      {
        descriptionSpanish:
          "El menú de navegación interactivo facilita el acceso a las distintas categorías de obras y secciones del portfolio, mejorando la usabilidad general.",
        descriptionEnglish:
          "The interactive navigation menu makes it easy to access different artwork categories and sections of the portfolio, enhancing overall usability.",
        gif: "/imgs/proyects/taco/exploring.gif",
      },
      {
        descriptionSpanish:
          "Desde el panel administrativo, es posible agregar nuevas obras al portfolio, incluyendo la carga de imágenes y la gestión de su información asociada.",
        descriptionEnglish:
          "From the admin panel, new artworks can be added to the portfolio, including image uploads and management of related information.",
        gif: "/imgs/proyects/taco/add.gif",
      },
      {
        descriptionSpanish:
          "Además, el sistema permite eliminar obras existentes de forma segura, garantizando un control completo sobre el contenido mostrado.",
        descriptionEnglish:
          "Additionally, the system allows existing artworks to be safely deleted, ensuring full control over the displayed content.",
        gif: "/imgs/proyects/taco/delete.gif",
      },
    ],

    icons: [
      { lib: "fa", name: "FaNodeJs", title: "NodeJS" },
      { lib: "si", name: "SiExpress", title: "Express" },
      { lib: "di", name: "DiMongodb", title: "MongoDB" },
      { lib: "fa", name: "FaReact", title: "React" },
      { lib: "si", name: "SiTailwindcss", title: "Tailwind" },
      { lib: "si", name: "SiVite", title: "Vite" },
    ],

    
    image:
      "/imgs/TacoMockup.webp",
    color: "bg-stone-300",
    textColor: "#000",

    links: [
      {
        siteSpanish: "FrontEnd",
        siteEnglish: "Frontend",
        url: "https://github.com/moneta-sofia/ProyectoTaco",
        icon: { lib: "fa", name: "FaGithub" },
      },
      {
        siteSpanish: "BackEnd",
        siteEnglish: "BackEnd",
        url: "https://github.com/moneta-sofia/BackTaco",
        icon: { lib: "fa", name: "FaGithub" },
      },
      {
        siteSpanish: "Ver sitio",
        siteEnglish: "View site",
        url: "https://tacoportfolio.netlify.app/",
        icon: { lib: "ri", name: "RiComputerLine" },
      },
    ],

    spanishAlt: "Un monitor con mi proyecto del Portfolio de Taco, Diego Ruiz",
    englishAlt: "A monitor displaying my Taco's Portfolio project",
  },

  /* -------------------------------------------------------------------------- */
  /*                            DIGITAL MONEY PROYECT                           */
  // /* -------------------------------------------------------------------------- */

  {
    link: "https://github.com/moneta-sofia/challengebackend",
    nameSpanish: "Digital Money",
    nameEnglish: "Digital Money",

    descriptionSpanish:
      "Proyecto Back-End: Microservicios con Spring Boot, Keycloak y Docker",
    descriptionEnglish:
      "Back-End project: Microservices with Spring Boot, Keycloak, and Docker",
    descriptionLongSpanish:
      "Un backend basado en microservicios que gestiona operaciones de dinero digital. Desarrollado con Spring Boot y asegurado con Keycloak para autenticación y autorización. Los servicios se despliegan y orquestan mediante Docker, con MySQL como base de datos.",
    descriptionLongEnglish:
      "A backend built on microservices to manage digital money operations. Developed with Spring Boot and secured with Keycloak for authentication and authorization. Services are deployed and orchestrated using Docker, with MySQL as the database.",

    icons: [
      { lib: "fa", name: "FaJava", title: "Java" },
      { lib: "si", name: "SiSpring", title: "SpringBoot" },
      { lib: "fa", name: "FaDocker", title: "Docker" },
      { lib: "si", name: "SiKeycloak", title: "Keycloak" },
      { lib: "gr", name: "GrMysql", title: "MySql" },
    ],
    image:
      "/imgs/DHmoneyMockup.webp",

    links: [
      {
        siteEnglish: "Repository",
        siteSpanish: "Repositorio",
        url: "https://github.com/moneta-sofia/challengebackend",
        icon: { lib: "fa", name: "FaGithub" },
      },
    ],

    color: "bg-blue-100",
    textColor: "#09192A",
    spanishAlt: "Un monitor con mi proyecto de Digital Money",
    englishAlt: "A monitor displaying my Digital Money project",
  },

  /* -------------------------------------------------------------------------- */
  /*                               INFINIT PROYECT                              */
  /* -------------------------------------------------------------------------- */

  {
    nameSpanish: "Infinit",
    nameEnglish: "Infinit",

    descriptionSpanish: "Proyecto Full-Stack: Alquiler de autos de lujo",
    descriptionEnglish:
      "Full-Stack project: Luxury car rental service with premium fleet ",
    descriptionLongSpanish:
      "Una aplicación Full-Stack para gestionar un servicio de alquiler de autos de lujo. Ofrece una interfaz moderna desarrollada con Next.js, React y TailwindCSS, y un backend conectado a MySQL mediante Prisma, lo que permite administrar flota y reservas.",
    descriptionLongEnglish:
      "A Full-Stack application for managing a luxury car rental service. It features a modern interface developed with Next.js, React, and TailwindCSS, and a backend connected to MySQL using Prisma, enabling fleet and booking management.",
    icons: [
      { lib: "fa", name: "FaReact", title: "React" },
      { lib: "si", name: "SiTailwindcss", title: "Tailwind" },
      { lib: "si", name: "SiNextdotjs", title: "Next" },
      { lib: "si", name: "SiPrisma", title: "Prisma" },
      { lib: "gr", name: "GrMysql", title: "mySQL" },
    ],
    image:
      "/imgs/infinitMockup.webp",

    links: [
      {
        siteSpanish: "Ver sitio",
        siteEnglish: "View site",
        url: "https://infinit-ashen.vercel.app/",
        icon: { lib: "ri", name: "RiComputerLine" },
      },
      {
        siteSpanish: "Repositorio",
        siteEnglish: "Repository",
        url: "https://github.com/moneta-sofia/infinit",
        icon: { lib: "fa", name: "FaGithub" },
      },
    ],

    color: "bg-blue-50",
    textColor: "#2B4D6D",
    spanishAlt: "Un monitor con mi proyecto de alquiler de autos",
    englishAlt: "A monitor displaying my car rental project",
  },

  /* -------------------------------------------------------------------------- */
  /*                               CLINICA PROYECT                              */
  /* -------------------------------------------------------------------------- */

  {
    nameSpanish: "Clínica",
    nameEnglish: "Clinic",

    descriptionSpanish: "Proyecto Backend: Gestión de pacientes",
    descriptionEnglish: "Backend project: Patient Management",
    descriptionLongSpanish:
      "Un sistema backend para la gestión de pacientes en una clínica. Implementado con Spring Boot y Java, incluye lógica para administrar datos de pacientes, turnos y profesionales de la salud. También cuenta con integración de tecnologías web básicas.",
    descriptionLongEnglish:
      "A backend system for managing patients in a clinic. Implemented with Spring Boot and Java, it includes logic for handling patient data, appointments, and healthcare professionals. It also integrates basic web technologies.",
    icons: [
      { lib: "fa", name: "FaHtml5", title: "HTML" },
      { lib: "fa", name: "FaCss3Alt", title: "CSS" },
      { lib: "fa", name: "FaSass", title: "Sass" },
      { lib: "fa", name: "FaJava", title: "Java" },
      { lib: "si", name: "SiSpring", title: "SpringBoot" },
    ],
    image:
      "/imgs/ClinicaMockup.webp",

    links: [
      {
        siteSpanish: "Repositorio",
        siteEnglish: "Repository",
        url: "https://github.com/moneta-sofia/ProyectBackend",
        icon: { lib: "fa", name: "FaGithub" },
      },
    ],

    color: "bg-stone-50",
    textColor: "#9AB6D3",
    spanishAlt: "Un monitor con mi proyecto de gestion de pacientes",
    englishAlt: "A monitor displaying my patient management project",
  },

  /* -------------------------------------------------------------------------- */
  /*                             ODONTOLOGOS PROYECT                            */
  /* -------------------------------------------------------------------------- */

  {
    nameSpanish: "Odontologos",
    nameEnglish: "Dentists",
    descriptionSpanish: "Proyecto FrontEnd: Listado de Odontologos",
    descriptionEnglish: "Frontend project: Dentists listing and storage",
    descriptionLongSpanish:
      "Una aplicación frontend que permite visualizar y almacenar un listado de odontólogos. Construida con React, Vite, CSS y Sass, incluye un diseño atractivo y funcionalidades de almacenamiento básico para la gestión de profesionales.",
    descriptionLongEnglish:
      "A frontend application that allows displaying and storing a list of dentists. Built with React, Vite, CSS, and Sass, it features an appealing design and basic storage functionalities for managing professionals.",
    icons: [
      { lib: "fa", name: "FaCss3Alt", title: "CSS" },
      { lib: "fa", name: "FaSass", title: "Sass" },
      { lib: "fa", name: "FaReact", title: "React" },
      { lib: "si", name: "SiVite", title: "Vite" },
    ],
    image:
      "/imgs/OdontologosMockup.webp",

    links: [
      {
        siteSpanish: "Repositorio",
        siteEnglish: "Repository",
        url: "https://github.com/moneta-sofia/ProyectBackend",
        icon: { lib: "fa", name: "FaGithub" },
      },
      {
        siteSpanish: "Ver sitio",
        siteEnglish: "View site",
        url: "https://odontologos-sofi.netlify.app/",
        icon: { lib: "ri", name: "RiComputerLine" },
      },
    ],
    color: "bg-red-100",
    textColor: "#FF0002",
    spanishAlt: "Un monitor con mi proyecto de listado de odontologos",
    englishAlt: "A monitor displaying my dentists listing project",
  },
];
