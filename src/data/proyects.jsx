import { iconMap } from "../data/icons";

export const proyects = [
  /* -------------------------------------------------------------------------- */
  /*                                TACO WORKS                                  */
  /* -------------------------------------------------------------------------- */

  {
    nameSpanish: "Taco Works",
    nameEnglish: "Taco's Works",

    typeSpanish: "Full-Stack",
    typeEnglish: "Full-Stack",

    descriptionSpanish:
      "Portfolio artístico para mostrar obras, trayectoria y contenido visual de Taco.",
    descriptionEnglish:
      "Artistic portfolio to showcase Taco’s artworks, journey, and visual content.",
    roleSpanish:
      "Desarrollé el frontend con React y TailwindCSS, el backend con Node.js y Express, y la base de datos en MongoDB.",
    roleEnglish:
      "I developed the frontend with React and TailwindCSS, the backend with Node.js and Express, and the database with MongoDB.",

    descriptionLongSpanish:
      "Taco Works es un sitio web que centraliza y presenta las obras artísticas de Taco, ofreciendo una experiencia visual dinámica e inmersiva. Permite explorar la trayectoria del artista a través de ilustraciones, animaciones y diseños en distintos formatos.",
    descriptionLongEnglish:
      "Taco Works is a website that centralizes and presents Taco’s artistic works, offering a dynamic and immersive visual experience. It allows users to explore the artist’s journey through illustrations, animations, and designs in different formats.",

    whatIDidSpanish: [
      "Desarrollé el frontend interactivo con React y TailwindCSS.",
      "Construí el backend con Node.js y Express, aplicando una arquitectura RESTful.",
      "Modelé y conecté la base de datos en MongoDB.",
      "Implementé autenticación, navegación dinámica y gestión de obras.",
    ],

    whatIDidEnglish: [
      "I developed the interactive frontend with React and TailwindCSS.",
      "I built the backend with Node.js and Express, applying a RESTful architecture.",
      "I modeled and connected the database using MongoDB.",
      "I implemented authentication, dynamic navigation, and artwork management.",
    ],

    featuresSpanish: [
      "Inicio de sesión para acceder a herramientas administrativas.",
      "Navegación fluida con transiciones dinámicas entre secciones.",
      "Exploración de obras por categorías y formatos.",
      "Panel administrativo para agregar y eliminar obras.",
      "Carga y gestión de imágenes asociadas a cada obra.",
    ],

    featuresEnglish: [
      "Login system to access administrative tools.",
      "Smooth navigation with dynamic transitions between sections.",
      "Artwork exploration by categories and formats.",
      "Admin panel to add and delete artworks.",
      "Image upload and management for each artwork.",
    ],

    data: [
      {
        titleSpanish: "Login",
        titleEnglish: "Login",
        descriptionSpanish:
          "Inicio de sesión seguro para acceder a las herramientas administrativas del sitio.",
        descriptionEnglish:
          "Secure login to access the site’s administrative tools.",
        gif: "/imgs/proyects/taco/login.gif",
      },
      {
        titleSpanish: "Transiciones",
        titleEnglish: "Transitions",
        descriptionSpanish:
          "Navegación fluida y transiciones dinámicas entre secciones.",
        descriptionEnglish:
          "Smooth navigation and dynamic transitions between sections.",
        gif: "/imgs/proyects/taco/move.gif",
      },
      {
        titleSpanish: "Explorar obras",
        titleEnglish: "Explore artworks",
        descriptionSpanish:
          "Menú interactivo para recorrer categorías, obras y secciones del portfolio.",
        descriptionEnglish:
          "Interactive menu to explore categories, artworks, and portfolio sections.",
        gif: "/imgs/proyects/taco/exploring.gif",
      },
      {
        titleSpanish: "Agregar obras",
        titleEnglish: "Add artworks",
        descriptionSpanish:
          "Panel administrativo para agregar nuevas obras con imágenes e información asociada.",
        descriptionEnglish:
          "Admin panel to add new artworks with images and related information.",
        gif: "/imgs/proyects/taco/add.gif",
      },
      {
        titleSpanish: "Eliminar obras",
        titleEnglish: "Delete artworks",
        descriptionSpanish:
          "Funcionalidad para eliminar obras existentes de forma segura.",
        descriptionEnglish:
          "Feature to safely delete existing artworks.",
        gif: "/imgs/proyects/taco/delete.gif",
      },
    ],

    icons: [
      iconMap.NodeIcon,
      iconMap.ExpressIcon,
      iconMap.MongoIcon,
      iconMap.ReactIcon,
      iconMap.TailwindIcon,
      iconMap.ViteIcon,
    ],

    image: "/imgs/TacoMockup.webp",

    links: [
      {
        siteSpanish: "FrontEnd",
        siteEnglish: "Frontend",
        url: "https://github.com/moneta-sofia/ProyectoTaco",
        icon: iconMap.GithubIcon,
      },
      {
        siteSpanish: "BackEnd",
        siteEnglish: "Backend",
        url: "https://github.com/moneta-sofia/BackTaco",
        icon: iconMap.GithubIcon,
      },
      {
        siteSpanish: "Ver sitio",
        siteEnglish: "View site",
        url: "https://tacoportfolio.netlify.app/",
        icon: iconMap.ComputerIcon,
      },
    ],

    color: "bg-stone-300",
    textColor: "#000",

    spanishAlt: "Un monitor con mi proyecto del portfolio de Taco, Diego Ruiz",
    englishAlt: "A monitor displaying my Taco's Portfolio project",
  },

  /* -------------------------------------------------------------------------- */
  /*                               DIGITAL MONEY                                */
  /* -------------------------------------------------------------------------- */

  {
    nameSpanish: "Digital Money",
    nameEnglish: "Digital Money",

    typeSpanish: "Back-End",
    typeEnglish: "Back-End",

    descriptionSpanish:
      "Backend basado en microservicios para gestionar operaciones de dinero digital.",
    descriptionEnglish:
      "Microservices-based backend to manage digital money operations.",

    roleSpanish:
      "Diseñé y desarrollé microservicios con Spring Boot, seguridad con Keycloak, despliegue con Docker y persistencia en MySQL.",
    roleEnglish:
      "I designed and developed microservices with Spring Boot, security with Keycloak, Docker deployment, and MySQL persistence.",

    descriptionLongSpanish:
      "Digital Money es un proyecto backend basado en microservicios orientado a la gestión de operaciones de dinero digital. El sistema fue desarrollado con Spring Boot y protegido mediante Keycloak para manejar autenticación y autorización.",
    descriptionLongEnglish:
      "Digital Money is a backend project based on microservices, focused on managing digital money operations. The system was developed with Spring Boot and secured with Keycloak to handle authentication and authorization.",

    whatIDidSpanish: [
      "Desarrollé servicios backend con Java y Spring Boot.",
      "Implementé autenticación y autorización utilizando Keycloak.",
      "Configuré el despliegue y la orquestación de servicios con Docker.",
      "Integré MySQL como base de datos para la persistencia de la información.",
    ],

    whatIDidEnglish: [
      "I developed backend services with Java and Spring Boot.",
      "I implemented authentication and authorization using Keycloak.",
      "I configured service deployment and orchestration with Docker.",
      "I integrated MySQL as the database for data persistence.",
    ],

    featuresSpanish: [
      "Arquitectura basada en microservicios.",
      "Gestión segura de usuarios, autenticación y roles.",
      "Persistencia de datos con MySQL.",
      "Servicios preparados para ejecutarse mediante Docker.",
    ],

    featuresEnglish: [
      "Microservices-based architecture.",
      "Secure user, authentication, and role management.",
      "Data persistence with MySQL.",
      "Services prepared to run with Docker.",
    ],

    icons: [
      iconMap.JavaIcon,
      iconMap.SpringIcon,
      iconMap.DockerIcon,
      iconMap.KeycloakIcon,
      iconMap.MysqlIcon,
    ],

    image: "/imgs/DHmoneyMockup.webp",

    links: [
      {
        siteEnglish: "Repository",
        siteSpanish: "Repositorio",
        url: "https://github.com/moneta-sofia/challengebackend",
        icon: iconMap.GithubIcon,
      },
    ],

    color: "bg-blue-100",
    textColor: "#09192A",

    spanishAlt: "Un monitor con mi proyecto de Digital Money",
    englishAlt: "A monitor displaying my Digital Money project",
  },

  /* -------------------------------------------------------------------------- */
  /*                                  INFINIT                                   */
  /* -------------------------------------------------------------------------- */

  {
    nameSpanish: "Infinit",
    nameEnglish: "Infinit",

    typeSpanish: "Full-Stack",
    typeEnglish: "Full-Stack",

    descriptionSpanish:
      "Aplicación para gestionar un servicio de alquiler de autos de lujo.",
    descriptionEnglish:
      "Application to manage a luxury car rental service.",

    roleSpanish:
      "Desarrollé una interfaz moderna con Next.js, React y TailwindCSS, conectada a MySQL mediante Prisma.",
    roleEnglish:
      "I developed a modern interface with Next.js, React, and TailwindCSS, connected to MySQL through Prisma.",

    descriptionLongSpanish:
      "Infinit es una aplicación full-stack pensada para un servicio de alquiler de autos de lujo. Permite presentar una flota premium mediante una interfaz moderna y administrar información relacionada con vehículos y reservas.",
    descriptionLongEnglish:
      "Infinit is a full-stack application designed for a luxury car rental service. It presents a premium fleet through a modern interface and manages information related to vehicles and bookings.",

    whatIDidSpanish: [
      "Desarrollé la interfaz con Next.js, React y TailwindCSS.",
      "Conecté la aplicación a una base de datos MySQL mediante Prisma.",
      "Estructuré el proyecto para permitir la gestión de flota y reservas.",
      "Trabajé en una experiencia visual moderna orientada a un servicio premium.",
    ],

    whatIDidEnglish: [
      "I developed the interface with Next.js, React, and TailwindCSS.",
      "I connected the application to a MySQL database using Prisma.",
      "I structured the project to support fleet and booking management.",
      "I worked on a modern visual experience focused on a premium service.",
    ],

    featuresSpanish: [
      "Visualización de una flota de autos de lujo.",
      "Interfaz responsive con estética moderna.",
      "Gestión de datos mediante Prisma y MySQL.",
      "Estructura full-stack para administración de reservas y vehículos.",
    ],

    featuresEnglish: [
      "Luxury car fleet display.",
      "Responsive interface with a modern aesthetic.",
      "Data management with Prisma and MySQL.",
      "Full-stack structure for booking and vehicle management.",
    ],

    icons: [
      iconMap.ReactIcon,
      iconMap.TailwindIcon,
      iconMap.NextIcon,
      iconMap.PrismaIcon,
      iconMap.MysqlIcon,
    ],

    image: "/imgs/infinitMockup.webp",

    links: [
      {
        siteSpanish: "Ver sitio",
        siteEnglish: "View site",
        url: "https://infinit-ashen.vercel.app/",
        icon: iconMap.ComputerIcon,
      },
      {
        siteSpanish: "Repositorio",
        siteEnglish: "Repository",
        url: "https://github.com/moneta-sofia/infinit",
        icon: iconMap.GithubIcon,
      },
    ],

    color: "bg-blue-50",
    textColor: "#2B4D6D",

    spanishAlt: "Un monitor con mi proyecto de alquiler de autos",
    englishAlt: "A monitor displaying my car rental project",
  },

  /* -------------------------------------------------------------------------- */
  /*                                  CLÍNICA                                   */
  /* -------------------------------------------------------------------------- */

  {
    nameSpanish: "Clínica",
    nameEnglish: "Clinic",

    typeSpanish: "Back-End",
    typeEnglish: "Back-End",

    descriptionSpanish:
      "Sistema backend para la gestión de pacientes, turnos y profesionales.",
    descriptionEnglish:
      "Backend system for managing patients, appointments, and professionals.",

    roleSpanish:
      "Desarrollé la lógica backend con Java y Spring Boot para administrar información clínica.",
    roleEnglish:
      "I developed the backend logic with Java and Spring Boot to manage clinical information.",

    descriptionLongSpanish:
      "Clínica es un sistema backend orientado a la gestión de pacientes en un entorno médico. El proyecto permite organizar información relacionada con pacientes, turnos y profesionales de la salud.",
    descriptionLongEnglish:
      "Clinic is a backend system focused on patient management in a medical environment. The project helps organize information related to patients, appointments, and healthcare professionals.",

    whatIDidSpanish: [
      "Desarrollé el backend utilizando Java y Spring Boot.",
      "Implementé lógica para administrar datos de pacientes.",
      "Trabajé sobre funcionalidades relacionadas con turnos y profesionales.",
      "Integré tecnologías web básicas como parte del proyecto.",
    ],

    whatIDidEnglish: [
      "I developed the backend using Java and Spring Boot.",
      "I implemented logic to manage patient data.",
      "I worked on features related to appointments and healthcare professionals.",
      "I integrated basic web technologies as part of the project.",
    ],

    featuresSpanish: [
      "Gestión de pacientes.",
      "Administración de turnos.",
      "Registro de profesionales de la salud.",
      "Estructura backend desarrollada con Spring Boot.",
    ],

    featuresEnglish: [
      "Patient management.",
      "Appointment management.",
      "Healthcare professional records.",
      "Backend structure developed with Spring Boot.",
    ],

    icons: [
      iconMap.HtmlIcon,
      iconMap.CssIcon,
      iconMap.SassIcon,
      iconMap.JavaIcon,
      iconMap.SpringIcon,
    ],

    image: "/imgs/ClinicaMockup.webp",

    links: [
      {
        siteSpanish: "Repositorio",
        siteEnglish: "Repository",
        url: "https://github.com/moneta-sofia/ProyectBackend",
        icon: iconMap.GithubIcon,
      },
    ],

    color: "bg-stone-50",
    textColor: "#9AB6D3",

    spanishAlt: "Un monitor con mi proyecto de gestión de pacientes",
    englishAlt: "A monitor displaying my patient management project",
  },

  /* -------------------------------------------------------------------------- */
  /*                                ODONTÓLOGOS                                 */
  /* -------------------------------------------------------------------------- */

  {
    nameSpanish: "Odontólogos",
    nameEnglish: "Dentists",

    typeSpanish: "Front-End",
    typeEnglish: "Front-End",

    descriptionSpanish:
      "Aplicación frontend para visualizar y almacenar un listado de odontólogos.",
    descriptionEnglish:
      "Frontend application to display and store a list of dentists.",

    roleSpanish:
      "Implementé el frontend con React, Vite, CSS y Sass, incluyendo visualización y almacenamiento básico de datos.",
    roleEnglish:
      "I implemented the frontend with React, Vite, CSS, and Sass, including data display and basic storage.",

    descriptionLongSpanish:
      "Odontólogos es una aplicación frontend que permite visualizar y almacenar un listado de profesionales odontológicos. Fue construida con React y Vite, incorporando estilos con CSS y Sass.",
    descriptionLongEnglish:
      "Dentists is a frontend application that allows users to display and store a list of dental professionals. It was built with React and Vite, using CSS and Sass for styling.",

    whatIDidSpanish: [
      "Desarrollé la interfaz utilizando React y Vite.",
      "Apliqué estilos con CSS y Sass.",
      "Implementé la visualización de odontólogos en formato de listado.",
      "Agregué funcionalidades básicas de almacenamiento para gestionar profesionales.",
    ],

    whatIDidEnglish: [
      "I developed the interface using React and Vite.",
      "I applied styles with CSS and Sass.",
      "I implemented the display of dentists in a list format.",
      "I added basic storage features to manage professionals.",
    ],

    featuresSpanish: [
      "Listado de odontólogos.",
      "Visualización de información profesional.",
      "Almacenamiento básico de datos.",
      "Diseño responsive construido con React.",
    ],

    featuresEnglish: [
      "Dentist listing.",
      "Professional information display.",
      "Basic data storage.",
      "Responsive design built with React.",
    ],

    icons: [
      iconMap.CssIcon,
      iconMap.SassIcon,
      iconMap.ReactIcon,
      iconMap.ViteIcon,
    ],

    image: "/imgs/OdontologosMockup.webp",

    links: [
      {
        siteSpanish: "Repositorio",
        siteEnglish: "Repository",
        url: "https://github.com/moneta-sofia/ProyectBackend",
        icon: iconMap.GithubIcon,
      },
      {
        siteSpanish: "Ver sitio",
        siteEnglish: "View site",
        url: "https://odontologos-sofi.netlify.app/",
        icon: iconMap.ComputerIcon,
      },
    ],

    color: "bg-red-100",
    textColor: "#FF0002",

    spanishAlt: "Un monitor con mi proyecto de listado de odontólogos",
    englishAlt: "A monitor displaying my dentists listing project",
  },
];