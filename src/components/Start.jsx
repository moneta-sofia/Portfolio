import { ExpressIcon, JavaIcon, NodeIcon, ReactIcon, SpringIcon, WaveHandIcon} from "../data/icons";
import TextAnimation from "./TextAnimation";
import { useTranslation } from "../hooks/useTranslation";

export default function Start() {
  const t = useTranslation();
  const isMobile = typeof window !== 'undefined' && window.innerWidth <= 768;

  return (
    <div
      className="bg-cuadricula font-park  md:h-screen w-screen flex justify-center items-center"
      name="inicio"
    >
      <div className="flex flex-col md:items-start items-center relative md:w-5/6 w-full md:h-3/4 h-full">
        <div className="flex flex-col md:items-start items-center md:mt-8 mt-24 md:ml-12 ml-0 md:w-fit animate-fade-in-up" style={{ animationDelay: isMobile ? "0s" : "0s" }}>
          <div className="text-black 3xl:my-4 lg:my-2 my-1 ">
            <p
              className="flex items-center md:justify-start justify-center 3xl:text-4xl xl:text-2xl lg:text-xl text-sm 3xl:my-4 lg:my-3 my-1 animate-fade-in-up"
              style={{ animationDelay: isMobile ? "0s" : "0.2s" }}
            >
              {t.start.greeting} <WaveHandIcon className="ml-3 text-1xl" />
            </p>
            <h1
              className="subrayado font-bold 3xl:text-9xl xl:text-7xl lg:text-6xl text-3xl md:text-left text-center animate-fade-in-up w-fit"
              style={{ animationDelay: isMobile ? "0s" : "0.4s" }}
            >
              <TextAnimation text={t.start.name} />
            </h1>
            <h1
              className="text-primary 3xl:text-5xl xl:text-4xl lg:text-3xl text-xl 3xl:my-6 lg:my-5 my-4 font-extrabold md:text-start text-center animate-fade-in-up"
              style={{ animationDelay: isMobile ? "0s" : "0.6s" }}
            >
              <TextAnimation text={t.start.role} />
            </h1>
            <h2
              className="3xl:text-xl xl:text-lg lg:text-base text-sm 3xl:my-6 lg:my-5 my-4 sm:text-start text-center animate-fade-in-up w-7/12 font-extralight font-inter"
              style={{ animationDelay: '0s'}}
            >
              <TextAnimation text={t.start.description} />
            </h2>
          </div>
          <div className="flex w-2/4 justify-between 3xl:my-6 my-2">
            <div className="flex justify-center mr-4 p-2 shadow-lg rounded-2xl bg-white"><NodeIcon className="text-2xl mr-2"/>Node.js</div>
            <div className="flex justify-center mr-4 p-2 shadow-lg rounded-2xl bg-white"><ExpressIcon  className="text-2xl mr-2"/>Express.js</div>
            <div className="flex justify-center mr-4 p-2 shadow-lg rounded-2xl bg-white"><JavaIcon  className="text-2xl mr-2"/>Java</div>
            <div className="flex justify-center mr-4 p-2 shadow-lg rounded-2xl bg-white"><SpringIcon  className="text-2xl mr-2"/>SpringBoot</div>
            <div className="flex justify-center mr-4 p-2 shadow-lg rounded-2xl bg-white"><ReactIcon  className="text-2xl mr-2"/>React</div>
            <div className="flex justify-center mr-4 p-2 shadow-lg rounded-2xl bg-white">+</div>

          </div>
      </div>
        <img
          width="400"
          height="700"
          fetchpriority="high"
          decoding="async"
          src="/imgs/imgHome.webp"
          className="md:p-0 mt-16 sm:p-16 p-5 md:absolute relative 2xl:right-10 right-0 2xl:bottom-10 bottom-5 hero-img"
          alt={t.start.imageAlt}
        />
      </div>
    </div>
  );
}
