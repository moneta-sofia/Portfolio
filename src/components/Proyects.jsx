import { memo, useEffect, useState, lazy, Suspense } from "react";
import TextAnimation from "./TextAnimation";
import { useInView } from "react-intersection-observer";
import { useTranslation } from "../hooks/useTranslation";
const ProyectInfo = lazy(() => import("./ProyectInfo"));
import { proyects } from "../data/proyects";

const ProjectCard = memo(({ proy, index, isSpanish, onClick }) => {
  const isMobile = typeof window !== 'undefined' && window.innerWidth <= 768;
  const [ref, inView] = useInView({
    triggerOnce: true,
  });

  return (
    <div
      ref={ref}
      onClick={() => onClick(index)}
      className={`project-card cursor-pointer card-p1 flex flex-col ${proy.color} hover:bg-white px-6 pt-8 mb-16 w-80 overflow-hidden rounded-xl hover:scale-105 transition ease-out shadow-special hover:shadow-special2 mx-5 ${inView ? 'animate-project-card' : ''}`}
      style={{ animationDelay: `${isMobile ? '0s' : (0.3 * index) + 's'}` }}
    >
      <h1
        className="md:text-4xl text-3xl font-extrabold md:mb-5 mb-2"
        style={{ color: proy.textColor }}
      >
        {isSpanish ? proy.nameSpanish : proy.nameEnglish}
      </h1>
      <p className="my-1 font-medium">
        {isSpanish ? proy.descriptionSpanish : proy.descriptionEnglish}
      </p>
      <div className="flex justify-between items-center text-3xl px-3 my-5">
        {proy.icons.map((icon, i) => {
          const IconComponent = icon;
          return <IconComponent key={i} />;
        })}
      </div>
      <img
        fetchpriority="low"
        decoding="async"
        width="300"
        height="300"
        loading="lazy"
        alt={isSpanish ? proy.spanishAlt : proy.englishAlt}
        src={proy.image}
        className="relative -bottom-5 self-center"
      />
    </div>
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
    <div className="relative -mt-6 md:-mt-8 lg:-mt-15 w-full">
      <img
        width="1920"
        height="260"
        alt={t.about.waveAlt}
        src="/imgs/wave.svg"
        className="w-full  left-0  -z-10"
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
          <h1 className="font-bold text-secondary 3xl:text-8xl xl:text-7xl lg:text-6xl md:text-5xl text-4xl my-28">
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
