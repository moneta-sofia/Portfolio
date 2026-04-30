import {
  ArrowIcon,
  DownloadIcon,
  ExpressIcon,
  JavaIcon,
  NodeIcon,
  ReactIcon,
  SpringIcon,
  WaveHandIcon,
} from "../data/icons";
import TextAnimation from "./TextAnimation";
import { useTranslation } from "../hooks/useTranslation";
import { Link } from "react-scroll";

export default function Start() {
  const t = useTranslation();
  const isMobile = typeof window !== "undefined" && window.innerWidth <= 768;

  return (
    <div
      className="bg-cuadricula font-park md:h-[85vh] w-screen flex flex-col justify-center items-center"
      name="inicio"
    >
      <div className="flex md:flex-row flex-col items-center relative md:w-11/12 md:mt-16 mt-7 h-full z-20">
        <div
          className="flex flex-col justify-between items-start md:mt-8 mt-10 md:ml-12 ml-0 md:w-fit animate-fade-in-up"
          style={{ animationDelay: isMobile ? "0s" : "0s" }}
        >
          <div className=" flex flex-col justify-center md:items-start items-center text-black 3xl:my-4 lg:my-2 my-1 md:w-auto w-screen">
            <p
              className="flex items-center md:justify-start justify-center 3xl:text-xl xl:text-lg lg:text-base text-sm  my-1 animate-fade-in-up"
              style={{ animationDelay: isMobile ? "0s" : "0.2s" }}
            >
              {t.start.greeting} <WaveHandIcon className="ml-3 text-1xl" />
            </p>
            <h1
              className="subrayado font-bold 3xl:text-7xl xl:text-6xl lg:text-5xl text-4xl md:text-left text-center animate-fade-in-up w-fit"
              style={{ animationDelay: isMobile ? "0s" : "0.4s" }}
            >
              <TextAnimation text={t.start.name} />
            </h1>
            <h1
              className="text-primary 3xl:text-4xl xl:text-3xl lg:text-2xl text-xl 3xl:my-6 lg:my-5 my-4 font-extrabold md:text-start text-center animate-fade-in-up"
              style={{ animationDelay: isMobile ? "0s" : "0.6s" }}
            >
              <TextAnimation text={t.start.role} />
            </h1>
            <h2
              className="3xl:text-lg xl:text-base lg:text-sm text-xs sm:text-start text-center animate-fade-in-up md:w-9/12 w-5/6 font-extralight font-inter"
              style={{ animationDelay: "0s" }}
            >
              <TextAnimation text={t.start.description} />
            </h2>
          </div>
          <div className="flex w-full md:justify-start justify-center items-center my-2">
            <a
              href="/CV-Sofia_Moneta.pdf"
              download
              className="inline-flex items-center gap-2 rounded-xl bg-primary px-4 h-10 text-sm font-semibold text-white transition hover:bg-primary/90"
            >
              <DownloadIcon />
              {t.navbar.cv}
            </a>
            <Link
              to="proyectos"
              download
              className="inline-flex items-center ml-3 gap-2 rounded-xl border-2 border-primary px-4 h-10 text-sm font-semibold text-primary transition "
            >
              {t.start.projects}
              <ArrowIcon />
            </Link>
          </div>
          <div className="flex flex-wrap md:self-start self-center my-2 text-sm h-fit md:w-4/4 w-11/12 md:justify-start justify-center">
            <div className="flex justify-center items-center mr-3 p-2">
              <NodeIcon className="text-3xl mr-1" />
              Node.js
            </div>
            <div className="flex justify-center items-center mr-3 p-2">
              <ExpressIcon className="text-3xl mr-1" />
              Express.js
            </div>
            <div className="flex justify-center items-center  mr-3 p-2">
              <JavaIcon className="text-3xl mr-1" />
              Java
            </div>
            <div className="flex justify-center items-center mr-3 p-2">
              <SpringIcon className="text-3xl mr-1" />
              SpringBoot
            </div>
            <div className="flex justify-center items-center mr-3 p-2">
              <ReactIcon className="text-3xl mr-1" />
              React
            </div>
            <div className="flex justify-center items-center mr-3 p-2">+</div>
          </div>
        </div>

        <div className="flex h-full justify-center items-center md:mt-0 mt-10">
          <img
            width="400"
            height="700"
            fetchpriority="high"
            decoding="async"
            src="/imgs/imgHome.webp"
            className=" 2xl:right-10 right-0 2xl:bottom-10 bottom-5 hero-img"
            alt={t.start.imageAlt}
          />
        </div>
      </div>
    </div>
  );
}
