import { memo, useEffect, useState, lazy, Suspense } from "react";
import TextAnimation from "./TextAnimation";
import { useInView } from "react-intersection-observer";
import { useTranslation } from "../hooks/useTranslation";
const ProyectInfo = lazy(() => import("./ProyectInfo"));
import { proyects } from "../data/proyects";
import {  GithubIcon, ExternalLink } from "../data/icons";

const ProjectCard = memo(({ proy, index, isSpanish, onClick }) => {
  const t = useTranslation();
  const isMobile = typeof window !== "undefined" && window.innerWidth <= 768;

  const [ref, inView] = useInView({
    triggerOnce: true,
  });

  const title = isSpanish ? proy.nameSpanish : proy.nameEnglish;
  const description = isSpanish
    ? proy.descriptionSpanish
    : proy.descriptionEnglish;
  const role = isSpanish ? proy.roleSpanish : proy.roleEnglish;

  return (
    <article
      ref={ref}
      onClick={() => onClick(index)}
      className={`
        project-card 
        cursor-pointer 
        flex  
        flex-col 
        w-[330px] 
        min-h-[440px]
        bg-secondary 
        rounded-xl 
        overflow-hidden 
        shadow-special 
        hover:shadow-special2 
        hover:scale-[1.02]
        transition 
        ease-out 
        mx-5  
        mb-8
        p-5
        ${inView ? "animate-project-card" : ""}
      `}
      style={{
        animationDelay: `${isMobile ? "0s" : 0.3 * index + "s"}`,
      }}
    >
      {/* Contenido superior */}
      <div className="flex-1 flex flex-col justify-between">
        <div>

          <div className="flex items-start justify-between ">
            <h2
              className="text-2xl font-extrabold leading-tight"
              style={{ color: proy.textColor }}
            >
              {title}
            </h2>

            {proy.type && (
              <span className=" rounded-full bg-red-100 px-1 text-[11px] font-bold text-red-700">
                {proy.type}
              </span>
            )}
          </div>

          <p className="text-xs py-2 font-medium leading-relaxed line-clamp-2">
            {description}
          </p>
          
        </div>

        <div>

            <p className="text-xs font-bold">
              {t.projects.whatIDid}
            </p>

          <p className="text-xs leading-relaxed line-clamp-3 py-2">
            {role}
          </p>
        </div>
          

        <div className="flex items-center gap-5 text-2xl mb-3 min-h-[32px]">
          {proy.icons.map((icon, i) => {
            const IconComponent = icon;
            return <IconComponent key={i} />;
          })}
        </div>
      </div>

      {/* Imagen siempre igual */}
      <img
        fetchpriority="low"
        decoding="async"
        width="300"
        height="160"
        loading="lazy"
        alt={isSpanish ? proy.spanishAlt : proy.englishAlt}
        src={proy.image}
        className="w-full h-[120px] object-cover rounded-xl mb-4"
      />

      {/* Botones siempre abajo */}
      <div className="flex w-full gap-3 mt-auto">
        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            onClick(index);
          }}
          className="flex-1 w-1/2 rounded-lg bg-primary py-3 text-xs font-bold text-secondary"
        >
          {t.projects.seeDetails}
        </button>

        { proy.links.map((link, i)=>{
          return(
            <a
            key={i}
            href={link.url}
            target="_blank"
            rel="noreferrer"
            onClick={(e) => e.stopPropagation()}
            className="flex h-11 w-12 items-center justify-center rounded-lg border-[0.5px] border-primary hover:bg-red-200 text-primary"
          >
            {link.url.includes('github')? <GithubIcon className=" text-black" /> : <ExternalLink className=" text-black"/>}
          </a>
          )
        })}
        

        
      </div>
    </article>
  );
});
export default function Proyects() {
  const t = useTranslation();
  const isSpanish = t.locale === "es";
  const [openInfo, setOpenInfo] = useState(false);
  const [idProyectInfo, setidProyectInfo] = useState(0);

  useEffect(() => {
    if (openInfo) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => (document.body.style.overflow = "auto");
  }, [openInfo]);

  const handlerOpenProyectInfo = (idProyect) => {
    setidProyectInfo(idProyect);
    setOpenInfo(true);
  };


  return (
    <div className="relative -mt-0 md:-mt-8 lg:-mt-15 w-full">
      <img
        width="1920"
        height="260"
        alt={t.about.waveAlt}
        src="/imgs/wave.svg"
        className="w-full left-0 -z-10"
      />
      <Suspense fallback={null}>
        {openInfo && (
          <ProyectInfo
            proyect={proyects[idProyectInfo]}
            setOpenInfo={setOpenInfo}
            openInfo={openInfo}
          />
        )}
      </Suspense>
      <div className="w-full bg-primary relative font-inter">

        <div className="flex flex-col items-center" name="proyectos">
          <h1 className="font-bold text-secondary text-5xl my-16">
            <TextAnimation text={t.projects.sectionTitle} />
          </h1>
          <div className="w-full flex flex-row flex-wrap justify-center items-center">
            {proyects.map((proy, index) => (
              <ProjectCard
                key={index}
                proy={proy}
                index={index}
                isSpanish={isSpanish}
                onClick={handlerOpenProyectInfo}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
